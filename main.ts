import{mkdirSync,readdirSync,readFileSync,writeFileSync}from'node:fs';
const T=[0,101,401,10,12,22,23,33,,,,,,,,,21,21,21,21,21,21,21,11,21,21,21,11,21,21,21,,21,21,21,,,,,,,,,,,,,,200,210,210,200,0,,,,,,,,,,,,11,20,,,,,,,,,,,,,,,10,10,1,10];
function R(p,q){
const D=new Int32Array(256),C=new Int32Array(64),M=new Int32Array(256),o=new Uint8Array(65536);
let s=0,c=0,l=0,i=0,x=0,n=0;
const e=v=>[o.slice(0,l),v];
for(;;){
if(n===1e6)return e(10);
if(x<0||x>=p.length)return e(9);
const k=p[x],t=T[k];
if(t===undefined)return e(5);
const m=t/100|0,u=(t/10|0)%10,w=t%10;
if(x+m>=p.length)return e(9);
n++;
const y=x+1+m;
if(s<u||s-u+w>256)return e(s<u?2:3);
x=y;
switch(k){
case 0:return e(0);
case 1:D[s++]=(p[y-1]<<24)>>24;break;
case 2:D[s++]=p[y-4]|p[y-3]<<8|p[y-2]<<16|p[y-1]<<24;break;
case 3:s--;break;
case 4:D[s]=D[s-1];s++;break;
case 5:{const a=D[s-1];D[s-1]=D[s-2];D[s-2]=a;break;}
case 6:D[s]=D[s-2];s++;break;
case 7:{const a=D[s-3];D[s-3]=D[s-2];D[s-2]=D[s-1];D[s-1]=a;break;}
case 23:D[s-1]=-D[s-1];break;
case 27:D[s-1]=~D[s-1];break;
case 48:x=y+((p[y-2]|p[y-1]<<8)<<16>>16);break;
case 49:case 50:{const r=(p[y-2]|p[y-1]<<8)<<16>>16,v=D[--s];if((k===49)===(v===0))x=y+r;break;}
case 51:if(c===64)return e(7);C[c++]=y;x=p[y-2]|p[y-1]<<8;break;
case 52:if(!c)return e(8);x=C[--c];break;
case 64:{const a=D[s-1];if(a<0||a>255)return e(6);D[s-1]=M[a];break;}
case 65:{const a=D[s-1];if(a<0||a>255)return e(6);const v=D[s-2];s-=2;M[a]=v;break;}
case 80:{const g=D[s-1]+'';if(l+g.length>65536)return e(11);s--;for(let j=0;j<g.length;j++)o[l++]=g.charCodeAt(j);break;}
case 81:if(l+1>65536)return e(11);o[l++]=D[--s]&255;break;
case 82:D[s++]=i<q.length?q[i++]:-1;break;
case 83:return e(D[--s]&255);
default:{const b=D[s-1],a=D[s-2];let r;
if(k===16)r=a+b;else if(k===17)r=a-b;else if(k===18)r=Math.imul(a,b);
else if(k===19){if(!b)return e(4);r=a===-2147483648&&b===-1?a:(a/b)|0;}
else if(k===20){if(!b)return e(4);r=b===-1?0:a%b;}
else if(k===21){if(!b)return e(4);r=Math.floor((a>>>0)/(b>>>0));}
else if(k===22){if(!b)return e(4);r=(a>>>0)%(b>>>0);}
else if(k===24)r=a&b;else if(k===25)r=a|b;else if(k===26)r=a^b;
else if(k===28)r=a<<(b&31);else if(k===29)r=a>>(b&31);else if(k===30)r=a>>>(b&31);
else if(k===32)r=a===b?1:0;else if(k===33)r=a<b?1:0;else r=(a>>>0)<(b>>>0)?1:0;
s-=2;D[s++]=r;}
}}}
const I=process.env.MAKEFUN_INPUT_DIR??'/input',O=process.env.MAKEFUN_OUTPUT_DIR??'/output';
for(const d of readdirSync(I).sort()){const a=I+'/'+d,b=O+'/'+d,[o,v]=R(readFileSync(a+'/program.bin'),readFileSync(a+'/input.bin'));mkdirSync(b,{recursive:true});writeFileSync(b+'/stdout.bin',o);writeFileSync(b+'/exit.txt',v+'\n');}
