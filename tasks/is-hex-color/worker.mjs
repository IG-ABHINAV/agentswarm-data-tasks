import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {pathToFileURL} from 'node:url';
const task="is-hex-color";
const helper=(await import(pathToFileURL(process.argv[2])))["isHexColor"];
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
check(['#'+'f'.repeat(6)],true);
check(['#'.repeat(1000)],false);
check(['#fff\u0000'],false);
check(['#\u0660\u0660\u0660'],false);
rejects([1],TypeError);
rejects([null],TypeError);
rejects([0xfff],TypeError);
rejects([new String('#fff')],TypeError);
rejects(['#'.repeat(1001)],RangeError);
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
for(const t of ['1'.repeat(1001),'_'.repeat(1001),'\ud83d\ude80'.repeat(501),'1.2.3.4 '.repeat(126)]) rejects([t],RangeError);
if(task==='is-hex-color') {
 check(['#'+'0'.repeat(999)],false);check(['f'.repeat(1000)],false);
 check(['#aaa'],true);check(['#AAA'],true);check(['#a0F'],true);check(['#09afAF'],true);check(['#999999'],true);check(['#aBcDeF'],true);
 check(['#fFf'],true);check(['#ffg'],false);check(['#FFG'],false);check(['#fff#'],false);check(['#f f'],false);check(['#\tfff'],false);check(['\t#fff'],false);check(['#fff\r'],false);
 check(['#12'],false);check(['#1234'],false);check(['#12345'],false);check(['#1234567'],false);check(['#123456789'],false);check(['#\u0430bc'],false);check(['#\uff41bc'],false);
 check(['# fff'],false);check(['#+ff'],false);check(['#.ff'],false);check(['#ff\u0000'],false);check(['rgb(1,2,3)'],false);check(['#\ud83d\ude80'],false);
} else {
 check(['0.0.0.0'],true);check(['1.1.1.1'],true);check(['9.99.199.249'],true);check(['250.251.252.253'],true);check(['200.100.10.0'],true);
 check(['255.255.255.256'],false);check(['260.1.1.1'],false);check(['1000.1.1.1'],false);check(['0.0.0.00'],false);check(['0.0.0.01'],false);check(['000.0.0.0'],false);
 check(['1.2.3.4.'],false);check(['1.2.3. 4'],false);check(['1.2. 3.4'],false);check(['1,2,3,4'],false);check(['1.2.3.4\r'],false);check(['\t1.2.3.4'],false);
 check(['1.2.3.\uff14'],false);check(['1.2.3.\u0664'],false);check(['1.2.3.4e0'],false);check(['1.2.3.0b1'],false);check(['1.2.3.0o7'],false);check(['1.2.3.Infinity'],false);
 check(['1.2.3.NaN'],false);check(['....'],false);check(['1.2.3.4..'],false);check(['-0.0.0.0'],false);check(['1.2.3.255'],true);check(['1.2.3.4:80'],false);
}
console.log(`PASS ${task}: ${cases.length} fixtures plus specials, exact types, boxed and proxy values, limits and independence probes`);
