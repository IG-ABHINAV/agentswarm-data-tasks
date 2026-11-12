import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {pathToFileURL} from 'node:url';
const task="is-mac-address";
const helper=(await import(pathToFileURL(process.argv[2])))["isMacAddress"];
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
check(['00:'.repeat(5)+'00'],true);
check(['00:'.repeat(333)],false);
check(['00:1a:2b:3c:4d:5e\u0000'],false);
check([['ab','cd','ef','01','23','45'].join('-')],true);
rejects([1],TypeError);
rejects([null],TypeError);
rejects([0x001a2b3c4d5e],TypeError);
rejects([new String('00:1a:2b:3c:4d:5e')],TypeError);
rejects(['0'.repeat(1001)],RangeError);
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
if(task==='is-mac-address') {
 check(["0a:0b:0c:0d:0e:0f"],true);check(["A0-B0-C0-D0-E0-F0"],true);check(["99:99:99:99:99:99"],true);check(["ab:CD:ef:01:23:45"],true);check(["00:1a:2b:3c:4d:5e:"],false);check(["00:1a:2b:3c:4d:5"],false);check(["00:1a:2b:3c:4d:5ee"],false);check(["00;1a;2b;3c;4d;5e"],false);check(["00_1a_2b_3c_4d_5e"],false);check(["00:1a:2b:3c:4d-5e"],false);check(["00-1a-2b-3c-4d-5e-"],false);check(["\t00:1a:2b:3c:4d:5e"],false);check(["00:1a:2b:3c:4d:5e\r"],false);check(["00:1a:2b:3c:4d:\u0665e"],false);check(["00:1a:2b:3c:4d:5\uff45"],false);check(["00:1a:2b:3c:4d:5G"],false);check(["00:1a:2b:3c:4d: e"],false);check(["gg:1a:2b:3c:4d:5e"],false);check(["00:1a:2b:3c:4d:5e/24"],false);check(["0001.1a2b.3c4d"],false);check(["00:1a:2b:3c:4d:5e:6f:70"],false);check(["::::::"],false);
} else {
 check(["aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee"],true);check(["AAAAAAAA-BBBB-CCCC-DDDD-EEEEEEEEEEEE"],true);check(["99999999-9999-9999-9999-999999999999"],true);check(["123e4567-e89b-12d3-a456-42661417400\u0660"],false);check(["123e4567-e89b-12d3-a456-\uff14\uff12\uff16614174000"],false);check(["123e4567-e89b-12d3-a456-426614174000\r"],false);check(["\t123e4567-e89b-12d3-a456-426614174000"],false);check(["123e4567 e89b 12d3 a456 426614174000"],false);check(["123e4567:e89b:12d3:a456:426614174000"],false);check(["123e4567-e89b-12d3-a456"],false);check(["123e4567-e89b-12d3-a4560-426614174000"],false);check(["123e4567-e89b-12d3a-456-426614174000"],false);check(["123e4567-e89b-12d3-a456-42661417400G"],false);check(["g23e4567-e89b-12d3-a456-426614174000"],false);check(["123e4567-e89b-12d3-a456-4266141740-0"],false);check(["-123e4567-e89b-12d3-a456-42661417400"],false);check(["12345678-1234-1234-1234-1234567890ab"],true);check(["12345678-1234-1234-1234-1234567890abc"],false);
}
console.log(`PASS ${task}: ${cases.length} fixtures plus specials, exact types, boxed and proxy values, limits and independence probes`);
