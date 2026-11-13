import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {pathToFileURL} from 'node:url';
const task="is-decimal-number";
const helper=(await import(pathToFileURL(process.argv[2])))["isDecimalNumber"];
const cases=JSON.parse(readFileSync(new URL('./fixtures/cases.json',import.meta.url)));
function check(args,expected) {
 const before=structuredClone(args);
 const a=helper(...args),b=helper(...args);
 assert.equal(typeof a,typeof expected);assert.equal(typeof b,typeof expected);
 assert.ok(Object.is(a,expected),String(a));assert.ok(Object.is(b,expected),String(b));
 assert.deepEqual(args,before,'input mutation');
}
const rejects=(args,ErrorType)=>assert.throws(()=>helper(...args),e=>e!==null && typeof e==='object' && e.constructor===ErrorType,String(args.length));
function inheritedHole(value,probe) {
 // A hole must be rejected even when Array.prototype supplies a value of the right type at that index.
 Object.defineProperty(Array.prototype,1,{value,configurable:true,writable:true});
 try {probe();} finally {delete Array.prototype[1];}
 assert.equal(Object.hasOwn(Array.prototype,1),false);
}
for(const row of cases) {if(Object.hasOwn(row,'error')) rejects(row.args,{TypeError,RangeError}[row.error]);else check(row.args,row.expected);}
check(['9'.repeat(500)+'.'+'5'.repeat(499)],true);
check(['-'.repeat(1000)],false);
check(['1.5\u0000'],false);
check([['12','5'].join('.')],true);
rejects([12.5],TypeError);
rejects([null],TypeError);
rejects([undefined],TypeError);
rejects([new String('1.5')],TypeError);
rejects(['1'.repeat(1001)],RangeError);
class A extends Array {} class S extends String {} class N extends Number {}
const proxy=x=>new Proxy(x,{}),revoked=()=>{const p=Proxy.revocable([],{});p.revoke();return p.proxy;};
const badArrays=()=>[undefined,null,true,1,'ab',{},{length:0},new Set(),new A(),A.from(['a']),Object.setPrototypeOf([],null),Object.setPrototypeOf(['a'],Object.prototype),Array(1),['a',,'b'],proxy([]),proxy(['a']),revoked()];
const badStrings=[undefined,null,true,1,1n,Symbol('x'),[],['a'],{},new String('a'),new S('a'),proxy(new String('a'))];
const badNumbers=[undefined,null,true,'1',1n,Symbol('x'),[],[1],{},new Number(1),new N(1),proxy(new Number(1))];
const shadowed=['slice','concat','map','forEach','filter','reduce','push','at','entries','keys','values','join','indexOf','fill','flatMap','sort','constructor'];
function shadow(values) {
 const copy=[...values];for(const name of shadowed) copy[name]=null;copy[Symbol.iterator]=null;copy.extra='ignored';return copy;
}
function unchangedShadow(copy,values) {
 for(const name of shadowed) assert.equal(copy[name],null);assert.equal(copy[Symbol.iterator],null);assert.equal(copy.extra,'ignored');
 assert.equal(copy.length,values.length);for(let i=0;i<values.length;i++) assert.ok(Object.is(copy[i],values[i]));
}
for(const v of badStrings) rejects([v],TypeError);
for(const v of [Array(1001).fill('1'),{length:5000},new String('1'.repeat(1001)),1e10]) rejects([v],TypeError);
rejects([],TypeError);
for(const t of ['1'.repeat(1001),'_'.repeat(1001),'\ud83d\ude80'.repeat(501),'1.2.3 '.repeat(167)]) rejects([t],RangeError);
if(task==='is-decimal-number') {
 check(["3.14159"],true);check(["-7"],true);check(["999999999999999999999"],true);check(["-0.0001"],true);check(["10"],true);check(["1.0"],true);check(["-10.01"],true);check(["0.0"],true);check(["1.10"],true);check(["-00"],false);check(["0."],false);check(["-."],false);check(["1..5"],false);check(["1.5."],false);check(["."],false);check(["+0"],false);check(["- 1"],false);check(["-1 "],false);check(["1.5\r"],false);check(["\t1.5"],false);check(["1\u00a0000"],false);check(["\u22121"],false);check(["1.\uff15"],false);check(["\u0663.5"],false);check(["1/2"],false);check(["5%"],false);check(["$5"],false);check(["0b1"],false);check(["1.5f"],false);check(["12a"],false);
} else {
 check(["a-b"],true);check(["z9"],true);check(["abc-def-ghi"],true);check(["0-0"],true);check(["9-lives"],true);check(["node22"],true);check(["a-1"],true);check(["b"],true);check(["post\u2010title"],false);check(["a\u2013b"],false);check(["Abc"],false);check(["aBc"],false);check(["abc-Def"],false);check(["a__b"],false);check(["a b"],false);check(["a-b-"],false);check(["-a-b"],false);check(["a-b--c"],false);check(["a.b"],false);check(["a/b"],false);check(["a+b"],false);check(["\tab"],false);check(["ab\r"],false);check(["ab\u00a0"],false);check(["\u0131d"],false);check(["\u212a"],false);check(["\u0430bc"],false);check(["a-\uff11"],false);check(["ab#"],false);check(["a%20b"],false);
}
console.log(`PASS ${task}: ${cases.length} fixtures plus specials, exact types, boxed and proxy values, limits and independence probes`);
