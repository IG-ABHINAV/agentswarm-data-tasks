import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {pathToFileURL} from 'node:url';
const task="is-semver-core";
const helper=(await import(pathToFileURL(process.argv[2])))["isSemverCore"];
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
check(['1'.repeat(300)+'.0.'+'2'.repeat(300)],true);
check(['.'.repeat(1000)],false);
check(['1.2.3\u0000'],false);
check([['1','2','3'].join('.')],true);
rejects([1.2],TypeError);
rejects([null],TypeError);
rejects([undefined],TypeError);
rejects([new String('1.2.3')],TypeError);
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
if(task==='is-us-phone') {
 check(["123-456-7890"],true);check(["987-654-3210"],true);check(["111-222-3333"],true);check(["12-3456-7890"],false);check(["123-45-67890"],false);check(["1234567890 "],false);check(["123-456-789O"],false);check(["123\u2013456\u20137890"],false);check(["123/456/7890"],false);check(["123-456-7890\r"],false);check(["\t123-456-7890"],false);check(["123-4\u0665\u0666-7890"],false);check(["123-456-\uff17890"],false);check(["(123)456-7890"],false);check(["123456-7890"],false);check(["123-4567890"],false);check(["123-456--7890"],false);check(["x123-456-7890"],false);check(["123-456-7890-1234"],false);
} else {
 check(["2.0.1"],true);check(["0.10.0"],true);check(["12345678901234567890.0.0"],true);check(["1.0.10"],true);check(["100.200.300"],true);check(["1.2.3.0"],false);check(["00.00.00"],false);check(["0.00.0"],false);check(["1.2.3-0"],false);check(["1.2.3+0"],false);check(["=1.2.3"],false);check(["v0.0.0"],false);check(["1.2. 3"],false);check(["1. 2.3"],false);check(["1.2.3\r"],false);check(["\t1.2.3"],false);check(["1.2.3a"],false);check(["1.\uff12.3"],false);check(["1.2.\u0663"],false);check(["2\u0660.0.0"],false);check(["+1.2.3"],false);check(["1.2.3.."],false);check(["1..2.3"],false);check([".."],false);
}
console.log(`PASS ${task}: ${cases.length} fixtures plus specials, exact types, boxed and proxy values, limits and independence probes`);
