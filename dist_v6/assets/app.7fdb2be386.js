(()=>{var ed=0,Ch=1,nd=2;var js=1,id=2,zr=3,Ls=0,pn=1,qn=2,Ui=0,kr=1,Ph=2,Ih=3,Lh=4,sd=5;var Qs=100,rd=101,ad=102,od=103,ld=104,cd=200,hd=201,ud=202,fd=203,Nh=204,Dh=205,dd=206,pd=207,md=208,gd=209,xd=210,_d=211,vd=212,yd=213,Md=214,ko=0,Ho=1,Vo=2,Ar=3,Go=4,Wo=5,Xo=6,qo=7,Uh=0,Sd=1,bd=2,_i=0,Fh=1,Oh=2,Bh=3,zh=4,kh=5,Hh=6,Da=7;var Vh=300,Ns=301,tr=302,gl=303,xl=304,Ua=306,Qi=1e3,Cn=1001,Yo=1002,cn=1003,wd=1004;var Fa=1005;var je=1006,_l=1007;var ri=1008;var Bn=1009,Gh=1010,Wh=1011,Hr=1012,vl=1013,vi=1014,yi=1015,In=1016,yl=1017,Ml=1018,Vr=1020,Xh=35902,qh=35899,Yh=1021,$h=1022,ai=1023,Ii=1026,Ds=1027,er=1028,Sl=1029,Us=1030,bl=1031;var wl=1033,Oa=33776,Ba=33777,za=33778,ka=33779,El=35840,Tl=35841,Al=35842,Rl=35843,Cl=36196,Pl=37492,Il=37496,Ll=37488,Nl=37489,Ha=37490,Dl=37491,Ul=37808,Fl=37809,Ol=37810,Bl=37811,zl=37812,kl=37813,Hl=37814,Vl=37815,Gl=37816,Wl=37817,Xl=37818,ql=37819,Yl=37820,$l=37821,Zl=36492,Jl=36494,Kl=36495,jl=36283,Ql=36284,Va=36285,tc=36286;var xa=2300,$o=2301,Bo=2302,Mh=2303,Sh=2400,bh=2401,wh=2402;var Ed=3200;var ec=0,Td=1,Yn="",en="srgb",_a="srgb-linear",va="linear",Te="srgb";var zo=7680;var Ad=519,Rd=512,Cd=513,Pd=514,nc=515,Id=516,Ld=517,ic=518,Nd=519,Dd=35044;var Zh="300 es",xi=2e3,Rr=2001;function Gm(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Wm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ya(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ud(){let n=ya("canvas");return n.style.display="block",n}var If={},Cr=null;function Jh(...n){let t="THREE."+n.shift();Cr?Cr("log",t,...n):console.log(t,...n)}function Fd(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Wt(...n){n=Fd(n);let t="THREE."+n.shift();if(Cr)Cr("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function qt(...n){n=Fd(n);let t="THREE."+n.shift();if(Cr)Cr("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Js(...n){let t=n.join(" ");t in If||(If[t]=!0,Wt(...n))}function Od(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Bd={[ko]:Ho,[Vo]:Xo,[Go]:qo,[Ar]:Wo,[Ho]:ko,[Xo]:Vo,[qo]:Go,[Wo]:Ar},Li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lf=1234567,ma=Math.PI/180,Pr=180/Math.PI;function Gr(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]+"-"+_n[t&255]+_n[t>>8&255]+"-"+_n[t>>16&15|64]+_n[t>>24&255]+"-"+_n[e&63|128]+_n[e>>8&255]+"-"+_n[e>>16&255]+_n[e>>24&255]+_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]).toLowerCase()}function oe(n,t,e){return Math.max(t,Math.min(e,n))}function Kh(n,t){return(n%t+t)%t}function Xm(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function qm(n,t,e){return n!==t?(e-n)/(t-n):0}function ga(n,t,e){return(1-e)*n+e*t}function Ym(n,t,e,i){return ga(n,t,1-Math.exp(-e*i))}function $m(n,t=1){return t-Math.abs(Kh(n,t*2)-t)}function Zm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Jm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Km(n,t){return n+Math.floor(Math.random()*(t-n+1))}function jm(n,t){return n+Math.random()*(t-n)}function Qm(n){return n*(.5-Math.random())}function t0(n){n!==void 0&&(Lf=n);let t=Lf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function e0(n){return n*ma}function n0(n){return n*Pr}function i0(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function s0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function r0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function a0(n,t,e,i,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),f=r((t-i)/2),u=a((t-i)/2),d=r((i-t)/2),g=a((i-t)/2);switch(s){case"XYX":n.set(o*h,l*f,l*u,o*c);break;case"YZY":n.set(l*u,o*h,l*f,o*c);break;case"ZXZ":n.set(l*f,l*u,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*d,o*c);break;case"YXY":n.set(l*d,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*d,o*h,o*c);break;default:Wt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Er(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Rn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var hn={DEG2RAD:ma,RAD2DEG:Pr,generateUUID:Gr,clamp:oe,euclideanModulo:Kh,mapLinear:Xm,inverseLerp:qm,lerp:ga,damp:Ym,pingpong:$m,smoothstep:Zm,smootherstep:Jm,randInt:Km,randFloat:jm,randFloatSpread:Qm,seededRandom:t0,degToRad:e0,radToDeg:n0,isPowerOfTwo:i0,ceilPowerOfTwo:s0,floorPowerOfTwo:r0,setQuaternionFromProperEuler:a0,normalize:Rn,denormalize:Er},nu=class nu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};nu.prototype.isVector2=!0;var Xt=nu,Ni=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3],u=r[a+0],d=r[a+1],g=r[a+2],v=r[a+3];if(f!==v||l!==u||c!==d||h!==g){let m=l*u+c*d+h*g+f*v;m<0&&(u=-u,d=-d,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){let S=Math.acos(m),E=Math.sin(S);p=Math.sin(p*S)/E,o=Math.sin(o*S)/E,l=l*p+u*o,c=c*p+d*o,h=h*p+g*o,f=f*p+v*o}else{l=l*p+u*o,c=c*p+d*o,h=h*p+g*o,f=f*p+v*o;let S=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=S,c*=S,h*=S,f*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[a],u=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*f+l*d-c*u,t[e+1]=l*g+h*u+c*f-o*d,t[e+2]=c*g+h*d+o*u-l*f,t[e+3]=h*g-o*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),f=o(r/2),u=l(i/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:Wt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=i+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>f){let d=2*Math.sqrt(1+i-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-i-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},iu=class iu{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),f=2*(r*i-a*e);return this.x=e+l*c+a*f-o*h,this.y=i+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return th.copy(this).projectOnVector(t),this.sub(th)}reflect(t){return this.sub(th.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};iu.prototype.isVector3=!0;var V=iu,th=new V,Nf=new Ni,su=class su{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],d=i[5],g=i[8],v=s[0],m=s[3],p=s[6],S=s[1],E=s[4],y=s[7],w=s[2],b=s[5],R=s[8];return r[0]=a*v+o*S+l*w,r[3]=a*m+o*E+l*b,r[6]=a*p+o*y+l*R,r[1]=c*v+h*S+f*w,r[4]=c*m+h*E+f*b,r[7]=c*p+h*y+f*R,r[2]=u*v+d*S+g*w,r[5]=u*m+d*E+g*b,r[8]=u*p+d*y+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,g=e*f+i*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=f*v,t[1]=(s*c-h*i)*v,t[2]=(o*i-s*a)*v,t[3]=u*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=d*v,t[7]=(i*l-c*e)*v,t[8]=(a*e-i*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Js("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(eh.makeScale(t,e)),this}rotate(t){return Js("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(eh.makeRotation(-t)),this}translate(t,e){return Js("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(eh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};su.prototype.isMatrix3=!0;var Zt=su,eh=new Zt,Df=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uf=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function o0(){let n={enabled:!0,workingColorSpace:_a,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Te&&(s.r=ji(s.r),s.g=ji(s.g),s.b=ji(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Te&&(s.r=Tr(s.r),s.g=Tr(s.g),s.b=Tr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Yn?va:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Js("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Js("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[_a]:{primaries:t,whitePoint:i,transfer:va,toXYZ:Df,fromXYZ:Uf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:t,whitePoint:i,transfer:Te,toXYZ:Df,fromXYZ:Uf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),n}var pe=o0();function ji(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Tr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var fr,Zo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{fr===void 0&&(fr=ya("canvas")),fr.width=t.width,fr.height=t.height;let s=fr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=fr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ya("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ji(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ji(e[i]/255)*255):e[i]=ji(e[i]);return{data:e,width:t.width,height:t.height}}else return Wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},l0=0,Ir=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=Gr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(nh(s[a].image)):r.push(nh(s[a]))}else r=nh(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function nh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Zo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Wt("Texture: Unable to serialize Texture."),{})}var c0=0,ih=new V,dn=class n extends Li{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Cn,s=Cn,r=je,a=ri,o=ai,l=Bn,c=n.DEFAULT_ANISOTROPY,h=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=Gr(),this.name="",this.source=new Ir(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ih).x}get height(){return this.source.getSize(ih).y}get depth(){return this.source.getSize(ih).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Wt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qi:t.x=t.x-Math.floor(t.x);break;case Cn:t.x=t.x<0?0:1;break;case Yo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qi:t.y=t.y-Math.floor(t.y);break;case Cn:t.y=t.y<0?0:1;break;case Yo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Vh;dn.DEFAULT_ANISOTROPY=1;var ru=class ru{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,y=(d+1)/2,w=(p+1)/2,b=(h+u)/4,R=(f+v)/4,_=(g+m)/4;return E>y&&E>w?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=b/i,r=R/i):y>w?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=b/s,r=_/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=R/r,s=_/r),this.set(i,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-v)/S,this.z=(u-h)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this.w=oe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this.w=oe(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ru.prototype.isVector4=!0;var De=ru,Jo=class extends Li{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new dn(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ir(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fn=class extends Jo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ma=class extends dn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ko=class extends dn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ml=class ml{constructor(t,e,i,s,r,a,o,l,c,h,f,u,d,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,f,u,d,g,v,m)}set(t,e,i,s,r,a,o,l,c,h,f,u,d,g,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ml().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/dr.setFromMatrixColumn(t,0).length(),r=1/dr.setFromMatrixColumn(t,1).length(),a=1/dr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,d=a*f,g=o*h,v=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=u-v*c,e[9]=-o*l,e[2]=v-u*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,g=c*h,v=c*f;e[0]=u+v*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=v+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,g=c*h,v=c*f;e[0]=u-v*o,e[4]=-a*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,d=a*f,g=o*h,v=o*f;e[0]=l*h,e[4]=g*c-d,e[8]=u*c+v,e[1]=l*f,e[5]=v*c+u,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,d=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-u*f,e[8]=g*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*f+g,e[10]=u-v*f}else if(t.order==="XZY"){let u=a*l,d=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+v,e[5]=a*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*h,e[10]=v*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(h0,t,u0)}lookAt(t,e,i){let s=this.elements;return Gn.subVectors(t,e),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),ps.crossVectors(i,Gn),ps.lengthSq()===0&&(Math.abs(i.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),ps.crossVectors(i,Gn)),ps.normalize(),vo.crossVectors(Gn,ps),s[0]=ps.x,s[4]=vo.x,s[8]=Gn.x,s[1]=ps.y,s[5]=vo.y,s[9]=Gn.y,s[2]=ps.z,s[6]=vo.z,s[10]=Gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],d=i[13],g=i[2],v=i[6],m=i[10],p=i[14],S=i[3],E=i[7],y=i[11],w=i[15],b=s[0],R=s[4],_=s[8],T=s[12],I=s[1],N=s[5],U=s[9],O=s[13],L=s[2],P=s[6],G=s[10],X=s[14],et=s[3],$=s[7],nt=s[11],K=s[15];return r[0]=a*b+o*I+l*L+c*et,r[4]=a*R+o*N+l*P+c*$,r[8]=a*_+o*U+l*G+c*nt,r[12]=a*T+o*O+l*X+c*K,r[1]=h*b+f*I+u*L+d*et,r[5]=h*R+f*N+u*P+d*$,r[9]=h*_+f*U+u*G+d*nt,r[13]=h*T+f*O+u*X+d*K,r[2]=g*b+v*I+m*L+p*et,r[6]=g*R+v*N+m*P+p*$,r[10]=g*_+v*U+m*G+p*nt,r[14]=g*T+v*O+m*X+p*K,r[3]=S*b+E*I+y*L+w*et,r[7]=S*R+E*N+y*P+w*$,r[11]=S*_+E*U+y*G+w*nt,r[15]=S*T+E*O+y*X+w*K,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],v=t[7],m=t[11],p=t[15],S=l*d-c*u,E=o*d-c*f,y=o*u-l*f,w=a*d-c*h,b=a*u-l*h,R=a*f-o*h;return e*(v*S-m*E+p*y)-i*(g*S-m*w+p*b)+s*(g*E-v*w+p*R)-r*(g*y-v*b+m*R)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],v=t[13],m=t[14],p=t[15],S=e*o-i*a,E=e*l-s*a,y=e*c-r*a,w=i*l-s*o,b=i*c-r*o,R=s*c-r*l,_=h*v-f*g,T=h*m-u*g,I=h*p-d*g,N=f*m-u*v,U=f*p-d*v,O=u*p-d*m,L=S*O-E*U+y*N+w*I-b*T+R*_;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/L;return t[0]=(o*O-l*U+c*N)*P,t[1]=(s*U-i*O-r*N)*P,t[2]=(v*R-m*b+p*w)*P,t[3]=(u*b-f*R-d*w)*P,t[4]=(l*I-a*O-c*T)*P,t[5]=(e*O-s*I+r*T)*P,t[6]=(m*y-g*R-p*E)*P,t[7]=(h*R-u*y+d*E)*P,t[8]=(a*U-o*I+c*_)*P,t[9]=(i*I-e*U-r*_)*P,t[10]=(g*b-v*y+p*S)*P,t[11]=(f*y-h*b-d*S)*P,t[12]=(o*T-a*N-l*_)*P,t[13]=(e*N-i*T+s*_)*P,t[14]=(v*E-g*w-m*S)*P,t[15]=(h*w-f*E+u*S)*P,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,g=r*f,v=a*h,m=a*f,p=o*f,S=l*c,E=l*h,y=l*f,w=i.x,b=i.y,R=i.z;return s[0]=(1-(v+p))*w,s[1]=(d+y)*w,s[2]=(g-E)*w,s[3]=0,s[4]=(d-y)*b,s[5]=(1-(u+p))*b,s[6]=(m+S)*b,s[7]=0,s[8]=(g+E)*R,s[9]=(m-S)*R,s[10]=(1-(u+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=dr.set(s[0],s[1],s[2]).length(),o=dr.set(s[4],s[5],s[6]).length(),l=dr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),di.copy(this);let c=1/a,h=1/o,f=1/l;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=h,di.elements[5]*=h,di.elements[6]*=h,di.elements[8]*=f,di.elements[9]*=f,di.elements[10]*=f,e.setFromRotationMatrix(di),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=xi,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===xi)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Rr)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=xi,l=!1){let c=this.elements,h=2/(e-t),f=2/(i-s),u=-(e+t)/(e-t),d=-(i+s)/(i-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===xi)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===Rr)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};ml.prototype.isMatrix4=!0;var Fe=ml,dr=new V,di=new Fe,h0=new V(0,0,0),u0=new V(1,1,1),ps=new V,vo=new V,Gn=new V,Ff=new Fe,Of=new Ni,ts=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-oe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ff.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ff,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Of.setFromEuler(this),this.setFromQuaternion(Of,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ts.DEFAULT_ORDER="XYZ";var Lr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},f0=0,Bf=new V,pr=new Ni,qi=new Fe,yo=new V,ua=new V,d0=new V,p0=new Ni,zf=new V(1,0,0),kf=new V(0,1,0),Hf=new V(0,0,1),Vf={type:"added"},m0={type:"removed"},mr={type:"childadded",child:null},sh={type:"childremoved",child:null},Mn=class n extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=Gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new V,e=new ts,i=new Ni,s=new V(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Fe},normalMatrix:{value:new Zt}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return pr.setFromAxisAngle(t,e),this.quaternion.multiply(pr),this}rotateOnWorldAxis(t,e){return pr.setFromAxisAngle(t,e),this.quaternion.premultiply(pr),this}rotateX(t){return this.rotateOnAxis(zf,t)}rotateY(t){return this.rotateOnAxis(kf,t)}rotateZ(t){return this.rotateOnAxis(Hf,t)}translateOnAxis(t,e){return Bf.copy(t).applyQuaternion(this.quaternion),this.position.add(Bf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zf,t)}translateY(t){return this.translateOnAxis(kf,t)}translateZ(t){return this.translateOnAxis(Hf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?yo.copy(t):yo.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(ua,yo,this.up):qi.lookAt(yo,ua,this.up),this.quaternion.setFromRotationMatrix(qi),s&&(qi.extractRotation(s.matrixWorld),pr.setFromRotationMatrix(qi),this.quaternion.premultiply(pr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vf),mr.child=t,this.dispatchEvent(mr),mr.child=null):qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(m0),sh.child=t,this.dispatchEvent(sh),sh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vf),mr.child=t,this.dispatchEvent(mr),mr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,t,d0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,p0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Mn.DEFAULT_UP=new V(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ii=class extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}},g0={type:"move"},Nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(g0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ii;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},zd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ms={h:0,s:0,l:0},Mo={h:0,s:0,l:0};function rh(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Qt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=en){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=pe.workingColorSpace){return this.r=t,this.g=e,this.b=i,pe.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=pe.workingColorSpace){if(t=Kh(t,1),e=oe(e,0,1),i=oe(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=rh(a,r,t+1/3),this.g=rh(a,r,t),this.b=rh(a,r,t-1/3)}return pe.colorSpaceToWorking(this,s),this}setStyle(t,e=en){function i(r){r!==void 0&&parseFloat(r)<1&&Wt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Wt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=en){let i=zd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}copyLinearToSRGB(t){return this.r=Tr(t.r),this.g=Tr(t.g),this.b=Tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=en){return pe.workingToColorSpace(vn.copy(this),t),Math.round(oe(vn.r*255,0,255))*65536+Math.round(oe(vn.g*255,0,255))*256+Math.round(oe(vn.b*255,0,255))}getHexString(t=en){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.workingToColorSpace(vn.copy(this),e);let i=vn.r,s=vn.g,r=vn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=pe.workingColorSpace){return pe.workingToColorSpace(vn.copy(this),e),t.r=vn.r,t.g=vn.g,t.b=vn.b,t}getStyle(t=en){pe.workingToColorSpace(vn.copy(this),t);let e=vn.r,i=vn.g,s=vn.b;return t!==en?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ms),this.setHSL(ms.h+t,ms.s+e,ms.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ms),t.getHSL(Mo);let i=ga(ms.h,Mo.h,e),s=ga(ms.s,Mo.s,e),r=ga(ms.l,Mo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vn=new Qt;Qt.NAMES=zd;var Dr=class extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ts,this.environmentIntensity=1,this.environmentRotation=new ts,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},pi=new V,Yi=new V,ah=new V,$i=new V,gr=new V,xr=new V,Gf=new V,oh=new V,lh=new V,ch=new V,hh=new De,uh=new De,fh=new De,vs=class n{constructor(t=new V,e=new V,i=new V){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),pi.subVectors(t,e),s.cross(pi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){pi.subVectors(s,e),Yi.subVectors(i,e),ah.subVectors(t,e);let a=pi.dot(pi),o=pi.dot(Yi),l=pi.dot(ah),c=Yi.dot(Yi),h=Yi.dot(ah),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,$i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$i.x),l.addScaledVector(a,$i.y),l.addScaledVector(o,$i.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return hh.setScalar(0),uh.setScalar(0),fh.setScalar(0),hh.fromBufferAttribute(t,e),uh.fromBufferAttribute(t,i),fh.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(hh,r.x),a.addScaledVector(uh,r.y),a.addScaledVector(fh,r.z),a}static isFrontFacing(t,e,i,s){return pi.subVectors(i,e),Yi.subVectors(t,e),pi.cross(Yi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),pi.cross(Yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;gr.subVectors(s,i),xr.subVectors(r,i),oh.subVectors(t,i);let l=gr.dot(oh),c=xr.dot(oh);if(l<=0&&c<=0)return e.copy(i);lh.subVectors(t,s);let h=gr.dot(lh),f=xr.dot(lh);if(h>=0&&f<=h)return e.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(gr,a);ch.subVectors(t,r);let d=gr.dot(ch),g=xr.dot(ch);if(g>=0&&d<=g)return e.copy(r);let v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(xr,o);let m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return Gf.subVectors(r,s),o=(f-h)/(f-h+(d-g)),e.copy(s).addScaledVector(Gf,o);let p=1/(m+v+u);return a=v*p,o=u*p,e.copy(i).addScaledVector(gr,a).addScaledVector(xr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ys=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(mi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(mi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=mi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,mi):mi.fromBufferAttribute(r,a),mi.applyMatrix4(t.matrixWorld),this.expandByPoint(mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),So.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),So.copy(i.boundingBox)),So.applyMatrix4(t.matrixWorld),this.union(So)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mi),mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fa),bo.subVectors(this.max,fa),_r.subVectors(t.a,fa),vr.subVectors(t.b,fa),yr.subVectors(t.c,fa),gs.subVectors(vr,_r),xs.subVectors(yr,vr),qs.subVectors(_r,yr);let e=[0,-gs.z,gs.y,0,-xs.z,xs.y,0,-qs.z,qs.y,gs.z,0,-gs.x,xs.z,0,-xs.x,qs.z,0,-qs.x,-gs.y,gs.x,0,-xs.y,xs.x,0,-qs.y,qs.x,0];return!dh(e,_r,vr,yr,bo)||(e=[1,0,0,0,1,0,0,0,1],!dh(e,_r,vr,yr,bo))?!1:(wo.crossVectors(gs,xs),e=[wo.x,wo.y,wo.z],dh(e,_r,vr,yr,bo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Zi=[new V,new V,new V,new V,new V,new V,new V,new V],mi=new V,So=new ys,_r=new V,vr=new V,yr=new V,gs=new V,xs=new V,qs=new V,fa=new V,bo=new V,wo=new V,Ys=new V;function dh(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ys.fromArray(n,r);let o=s.x*Math.abs(Ys.x)+s.y*Math.abs(Ys.y)+s.z*Math.abs(Ys.z),l=t.dot(Ys),c=e.dot(Ys),h=i.dot(Ys);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ki=x0();function x0(){let n=new ArrayBuffer(4),t=new Float32Array(n),e=new Uint32Array(n),i=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,s[l]=24,s[l|256]=24):(i[l]=31744,i[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:i,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function _0(n){Math.abs(n)>65504&&Wt("DataUtils.toHalfFloat(): Value out of range."),n=oe(n,-65504,65504),Ki.floatView[0]=n;let t=Ki.uint32View[0],e=t>>23&511;return Ki.baseTable[e]+((t&8388607)>>Ki.shiftTable[e])}function v0(n){let t=n>>10;return Ki.uint32View[0]=Ki.mantissaTable[Ki.offsetTable[t]+(n&1023)]+Ki.exponentTable[t],Ki.floatView[0]}var Sa=class{static toHalfFloat(t){return _0(t)}static fromHalfFloat(t){return v0(t)}},Ke=new V,Eo=new Xt,y0=0,si=class extends Li{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:y0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Dd,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Eo.fromBufferAttribute(this,e),Eo.applyMatrix3(t),this.setXY(e,Eo.x,Eo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix3(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Er(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Rn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Er(e,this.array)),e}setX(t,e){return this.normalized&&(e=Rn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Er(e,this.array)),e}setY(t,e){return this.normalized&&(e=Rn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Er(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Rn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Er(e,this.array)),e}setW(t,e){return this.normalized&&(e=Rn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Rn(e,this.array),i=Rn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Rn(e,this.array),i=Rn(i,this.array),s=Rn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Rn(e,this.array),i=Rn(i,this.array),s=Rn(s,this.array),r=Rn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ba=class extends si{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var wa=class extends si{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ke=class extends si{constructor(t,e,i){super(new Float32Array(t),e,i)}},M0=new ys,da=new V,ph=new V,Ur=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):M0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;da.subVectors(t,this.center);let e=da.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(da,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ph.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(da.copy(t.center).add(ph)),this.expandByPoint(da.copy(t.center).sub(ph))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},S0=0,ni=new Fe,mh=new Mn,Mr=new V,Wn=new ys,pa=new ys,ln=new V,Sn=class n extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=Gr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gm(t)?wa:ba)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Zt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ni.makeRotationFromQuaternion(t),this.applyMatrix4(ni),this}rotateX(t){return ni.makeRotationX(t),this.applyMatrix4(ni),this}rotateY(t){return ni.makeRotationY(t),this.applyMatrix4(ni),this}rotateZ(t){return ni.makeRotationZ(t),this.applyMatrix4(ni),this}translate(t,e,i){return ni.makeTranslation(t,e,i),this.applyMatrix4(ni),this}scale(t,e,i){return ni.makeScale(t,e,i),this.applyMatrix4(ni),this}lookAt(t){return mh.lookAt(t),mh.updateMatrix(),this.applyMatrix4(mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ke(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ys);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Wn.setFromBufferAttribute(r),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ur);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let i=this.boundingSphere.center;if(Wn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];pa.setFromBufferAttribute(o),this.morphTargetsRelative?(ln.addVectors(Wn.min,pa.min),Wn.expandByPoint(ln),ln.addVectors(Wn.max,pa.max),Wn.expandByPoint(ln)):(Wn.expandByPoint(pa.min),Wn.expandByPoint(pa.max))}Wn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)ln.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ln));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ln.fromBufferAttribute(o,c),l&&(Mr.fromBufferAttribute(t,c),ln.add(Mr)),s=Math.max(s,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new si(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new V,l[_]=new V;let c=new V,h=new V,f=new V,u=new Xt,d=new Xt,g=new Xt,v=new V,m=new V;function p(_,T,I){c.fromBufferAttribute(i,_),h.fromBufferAttribute(i,T),f.fromBufferAttribute(i,I),u.fromBufferAttribute(r,_),d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,I),h.sub(c),f.sub(c),d.sub(u),g.sub(u);let N=1/(d.x*g.y-g.x*d.y);isFinite(N)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(N),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(N),o[_].add(v),o[T].add(v),o[I].add(v),l[_].add(m),l[T].add(m),l[I].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let _=0,T=S.length;_<T;++_){let I=S[_],N=I.start,U=I.count;for(let O=N,L=N+U;O<L;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let E=new V,y=new V,w=new V,b=new V;function R(_){w.fromBufferAttribute(s,_),b.copy(w);let T=o[_];E.copy(T),E.sub(w.multiplyScalar(w.dot(T))).normalize(),y.crossVectors(b,T);let N=y.dot(l[_])<0?-1:1;a.setXYZW(_,E.x,E.y,E.z,N)}for(let _=0,T=S.length;_<T;++_){let I=S[_],N=I.start,U=I.count;for(let O=N,L=N+U;O<L;O+=3)R(t.getX(O+0)),R(t.getX(O+1)),R(t.getX(O+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new si(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new V,r=new V,a=new V,o=new V,l=new V,c=new V,h=new V,f=new V;if(t)for(let u=0,d=t.count;u<d;u+=3){let g=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ln.fromBufferAttribute(t,e),ln.normalize(),t.setXYZ(e,ln.x,ln.y,ln.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let p=0;p<h;p++)u[g++]=c[d++]}return new si(u,h,f)}if(this.index===null)return Wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,i);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var gh=new V,b0=new V,w0=new Zt,gi=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=gh.subVectors(i,e).cross(b0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(gh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||w0.getNormalMatrix(t),s=this.coplanarPoint(gh).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},E0=0,Ms=class extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=Gr(),this.name="",this.type="Material",this.blending=kr,this.side=Ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nh,this.blendDst=Dh,this.blendEquation=Qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ad,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zo,this.stencilZFail=zo,this.stencilZPass=zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Wt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new gi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Xt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ji=new V,xh=new V,To=new V,Ao=new V,Ea=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ji)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ji.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ji.copy(this.origin).addScaledVector(this.direction,e),Ji.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){xh.copy(t).add(e).multiplyScalar(.5),To.copy(e).sub(t).normalize(),Ao.copy(this.origin).sub(xh);let r=t.distanceTo(e)*.5,a=-this.direction.dot(To),o=Ao.dot(this.direction),l=-Ao.dot(To),c=Ao.lengthSq(),h=Math.abs(1-a*a),f,u,d,g;if(h>0)if(f=a*l-o,u=a*o-l,g=r*h,f>=0)if(u>=-g)if(u<=g){let v=1/h;f*=v,u*=v,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(xh).addScaledVector(To,u),d}intersectSphere(t,e){if(t.radius<0)return null;Ji.subVectors(t.center,this.origin);let i=Ji.dot(this.direction),s=Ji.dot(Ji)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ji)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,g=e.x-a.x,v=e.y-a.y,m=e.z-a.z,p=i.x-a.x,S=i.y-a.y,E=i.z-a.z,y=Math.abs(l),w=Math.abs(c),b=Math.abs(h),R,_,T,I,N,U,O,L,P,G,X,et;if(y>=w&&y>=b?(T=l,U=f,P=g,et=p,l>=0?(R=c,_=h,I=u,N=d,O=v,L=m,G=S,X=E):(R=h,_=c,I=d,N=u,O=m,L=v,G=E,X=S)):w>=b?(T=c,U=u,P=v,et=S,c>=0?(R=h,_=l,I=d,N=f,O=m,L=g,G=E,X=p):(R=l,_=h,I=f,N=d,O=g,L=m,G=p,X=E)):(T=h,U=d,P=m,et=E,h>=0?(R=l,_=c,I=f,N=u,O=g,L=v,G=p,X=S):(R=c,_=l,I=u,N=f,O=v,L=g,G=S,X=p)),T===0)return null;let $=R/T,nt=_/T,K=1/T,St=I-$*U,xt=N-nt*U,ne=O-$*P,Ht=L-nt*P,ft=G-$*et,Q=X-nt*et,rt=ft*Ht-Q*ne,Rt=St*Q-xt*ft,Vt=ne*xt-Ht*St;if(s){if(rt<0||Rt<0||Vt<0)return null}else if((rt<0||Rt<0||Vt<0)&&(rt>0||Rt>0||Vt>0))return null;let Ct=rt+Rt+Vt;if(Ct===0)return null;let te=K*(rt*U+Rt*P+Vt*et);return(Ct>0?te<0:te>0)?null:this.at(te/Ct,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ss=class extends Ms{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ts,this.combine=Uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Wf=new Fe,$s=new Ea,Ro=new Ur,Xf=new V,Co=new V,Po=new V,Io=new V,_h=new V,Lo=new V,qf=new V,No=new V,_e=class extends Mn{constructor(t=new Sn,e=new Ss){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Lo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(_h.fromBufferAttribute(f,t),a?Lo.addScaledVector(_h,h):Lo.addScaledVector(_h.sub(e),h))}e.add(Lo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ro.copy(i.boundingSphere),Ro.applyMatrix4(r),$s.copy(t.ray).recast(t.near),!(Ro.containsPoint($s.origin)===!1&&($s.intersectSphere(Ro,Xf)===null||$s.origin.distanceToSquared(Xf)>(t.far-t.near)**2))&&(Wf.copy(r).invert(),$s.copy(t.ray).applyMatrix4(Wf),!(i.boundingBox!==null&&$s.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,$s)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),E=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=S,w=E;y<w;y+=3){let b=o.getX(y),R=o.getX(y+1),_=o.getX(y+2);s=Do(this,p,t,i,c,h,f,b,R,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){let S=o.getX(m),E=o.getX(m+1),y=o.getX(m+2);s=Do(this,a,t,i,c,h,f,S,E,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=S,w=E;y<w;y+=3){let b=y,R=y+1,_=y+2;s=Do(this,p,t,i,c,h,f,b,R,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){let S=m,E=m+1,y=m+2;s=Do(this,a,t,i,c,h,f,S,E,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function T0(n,t,e,i,s,r,a,o){let l;if(t.side===pn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Ls,o),l===null)return null;No.copy(o),No.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(No);return c<e.near||c>e.far?null:{distance:c,point:No.clone(),object:n}}function Do(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Co),n.getVertexPosition(l,Po),n.getVertexPosition(c,Io);let h=T0(n,t,e,i,Co,Po,Io,qf);if(h){let f=new V;vs.getBarycoord(qf,Co,Po,Io,f),s&&(h.uv=vs.getInterpolatedAttribute(s,o,l,c,f,new Xt)),r&&(h.uv1=vs.getInterpolatedAttribute(r,o,l,c,f,new Xt)),a&&(h.normal=vs.getInterpolatedAttribute(a,o,l,c,f,new V),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new V,materialIndex:0};vs.getNormal(Co,Po,Io,u.normal),h.face=u,h.barycoord=f}return h}var bs=class extends dn{constructor(t=null,e=1,i=1,s,r,a,o,l,c=cn,h=cn,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zs=new Ur,A0=new Xt(.5,.5),Uo=new V,Fr=class{constructor(t=new gi,e=new gi,i=new gi,s=new gi,r=new gi,a=new gi){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=xi,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],g=r[8],v=r[9],m=r[10],p=r[11],S=r[12],E=r[13],y=r[14],w=r[15];if(s[0].setComponents(c-a,d-h,p-g,w-S).normalize(),s[1].setComponents(c+a,d+h,p+g,w+S).normalize(),s[2].setComponents(c+o,d+f,p+v,w+E).normalize(),s[3].setComponents(c-o,d-f,p-v,w-E).normalize(),i)s[4].setComponents(l,u,m,y).normalize(),s[5].setComponents(c-l,d-u,p-m,w-y).normalize();else if(s[4].setComponents(c-l,d-u,p-m,w-y).normalize(),e===xi)s[5].setComponents(c+l,d+u,p+m,w+y).normalize();else if(e===Rr)s[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zs)}intersectsSprite(t){Zs.center.set(0,0,0);let e=A0.distanceTo(t.center);return Zs.radius=.7071067811865476+e,Zs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zs)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Uo.x=s.normal.x>0?t.max.x:t.min.x,Uo.y=s.normal.y>0?t.max.y:t.min.y,Uo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Uo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ta=class extends dn{constructor(t=[],e=Ns,i,s,r,a,o,l,c,h){super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ws=class extends dn{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Es=class extends dn{constructor(t,e,i=vi,s,r,a,o=cn,l=cn,c,h=Ii,f=1){if(h!==Ii&&h!==Ds)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ir(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},jo=class extends Es{constructor(t,e=vi,i=Ns,s,r,a=cn,o=cn,l,c=Ii){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Aa=class extends dn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Or=class n extends Sn{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(h,3)),this.setAttribute("uv",new ke(f,2));function g(v,m,p,S,E,y,w,b,R,_,T){let I=y/R,N=w/_,U=y/2,O=w/2,L=b/2,P=R+1,G=_+1,X=0,et=0,$=new V;for(let nt=0;nt<G;nt++){let K=nt*N-O;for(let St=0;St<P;St++){let xt=St*I-U;$[v]=xt*S,$[m]=K*E,$[p]=L,c.push($.x,$.y,$.z),$[v]=0,$[m]=0,$[p]=b>0?1:-1,h.push($.x,$.y,$.z),f.push(St/R),f.push(1-nt/_),X+=1}}for(let nt=0;nt<_;nt++)for(let K=0;K<R;K++){let St=u+K+P*nt,xt=u+K+P*(nt+1),ne=u+(K+1)+P*(nt+1),Ht=u+(K+1)+P*nt;l.push(St,xt,Ht),l.push(xt,ne,Ht),et+=6}o.addGroup(d,et,T),d+=et,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var On=class n extends Sn{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],g=0,v=[],m=i/2,p=0;S(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new ke(f,3)),this.setAttribute("normal",new ke(u,3)),this.setAttribute("uv",new ke(d,2));function S(){let y=new V,w=new V,b=0,R=(e-t)/i;for(let _=0;_<=r;_++){let T=[],I=_/r,N=I*(e-t)+t;for(let U=0;U<=s;U++){let O=U/s,L=O*l+o,P=Math.sin(L),G=Math.cos(L);w.x=N*P,w.y=-I*i+m,w.z=N*G,f.push(w.x,w.y,w.z),y.set(P,R,G).normalize(),u.push(y.x,y.y,y.z),d.push(O,1-I),T.push(g++)}v.push(T)}for(let _=0;_<s;_++)for(let T=0;T<r;T++){let I=v[T][_],N=v[T+1][_],U=v[T+1][_+1],O=v[T][_+1];(t>0||T!==0)&&(h.push(I,N,O),b+=3),(e>0||T!==r-1)&&(h.push(N,U,O),b+=3)}c.addGroup(p,b,0),p+=b}function E(y){let w=g,b=new Xt,R=new V,_=0,T=y===!0?t:e,I=y===!0?1:-1;for(let U=1;U<=s;U++)f.push(0,m*I,0),u.push(0,I,0),d.push(.5,.5),g++;let N=g;for(let U=0;U<=s;U++){let L=U/s*l+o,P=Math.cos(L),G=Math.sin(L);R.x=T*G,R.y=m*I,R.z=T*P,f.push(R.x,R.y,R.z),u.push(0,I,0),b.x=P*.5+.5,b.y=G*.5*I+.5,d.push(b.x,b.y),g++}for(let U=0;U<s;U++){let O=w+U,L=N+U;y===!0?h.push(L,L+1,O):h.push(L+1,L,O),_+=3}c.addGroup(p,_,y===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ra=class n extends Sn{constructor(t=[new Xt(0,-.5),new Xt(.5,0),new Xt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=oe(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,f=new V,u=new Xt,d=new V,g=new V,v=new V,m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(g)}for(let S=0;S<=e;S++){let E=i+S*h*s,y=Math.sin(E),w=Math.cos(E);for(let b=0;b<=t.length-1;b++){f.x=t[b].x*y,f.y=t[b].y,f.z=t[b].x*w,a.push(f.x,f.y,f.z),u.x=S/e,u.y=b/(t.length-1),o.push(u.x,u.y);let R=l[3*b+0]*y,_=l[3*b+1],T=l[3*b+0]*w;c.push(R,_,T)}}for(let S=0;S<e;S++)for(let E=0;E<t.length-1;E++){let y=E+S*t.length,w=y,b=y+t.length,R=y+t.length+1,_=y+1;r.push(w,b,_),r.push(R,_,b)}this.setIndex(r),this.setAttribute("position",new ke(a,3)),this.setAttribute("uv",new ke(o,2)),this.setAttribute("normal",new ke(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var Ts=class n extends Sn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,f=t/o,u=e/l,d=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let S=p*u-a;for(let E=0;E<c;E++){let y=E*f-r;g.push(y,-S,0),v.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){let E=S+c*p,y=S+c*(p+1),w=S+1+c*(p+1),b=S+1+c*p;d.push(E,y,b),d.push(y,w,b)}this.setIndex(d),this.setAttribute("position",new ke(g,3)),this.setAttribute("normal",new ke(v,3)),this.setAttribute("uv",new ke(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var As=class n extends Sn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new V,u=new V,d=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){let S=[],E=p/i,y=a+E*o,w=t*Math.cos(y),b=Math.sqrt(t*t-w*w),R=0;p===0&&a===0?R=.5/e:p===i&&l===Math.PI&&(R=-.5/e);for(let _=0;_<=e;_++){let T=_/e,I=s+T*r;f.x=-b*Math.cos(I),f.y=w,f.z=b*Math.sin(I),g.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),m.push(T+R,1-E),S.push(c++)}h.push(S)}for(let p=0;p<i;p++)for(let S=0;S<e;S++){let E=h[p][S+1],y=h[p][S],w=h[p+1][S],b=h[p+1][S+1];(p!==0||a>0)&&d.push(E,y,b),(p!==i-1||l<Math.PI)&&d.push(y,w,b)}this.setIndex(d),this.setAttribute("position",new ke(g,3)),this.setAttribute("normal",new ke(v,3)),this.setAttribute("uv",new ke(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function nr(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Yf(s))s.isRenderTargetTexture?(Wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Yf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function bn(n){let t={};for(let e=0;e<n.length;e++){let i=nr(n[e]);for(let s in i)t[s]=i[s]}return t}function Yf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function R0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function jh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}var kd={clone:nr,merge:bn},C0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,P0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pn=class extends Ms{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=C0,this.fragmentShader=P0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=nr(t.uniforms),this.uniformsGroups=R0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Qt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Xt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new V().fromArray(s.value);break;case"v4":this.uniforms[i].value=new De().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Zt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Fe().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Qo=class extends Pn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Di=class extends Ms{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ec,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ts,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Rs=class extends Di{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return oe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var tl=class extends Ms{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},el=class extends Ms{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Sr(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function vh(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Cs=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},nl=class extends Cs{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sh,endingEnd:Sh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case bh:r=t,o=2*e-i;break;case wh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case bh:a=t,l=2*i-e;break;case wh:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(i-e)/(s-e),v=g*g,m=v*g,p=-u*m+2*u*v-u*g,S=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*g+1,E=(-1-d)*m+(1.5+d)*v+.5*g,y=d*m-d*v;for(let w=0;w!==o;++w)r[w]=p*a[h+w]+S*a[c+w]+E*a[l+w]+y*a[f+w];return r}},il=class extends Cs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(s-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},sl=class extends Cs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},rl=class extends Cs{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(i-e)/(s-e),v=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*v+a[l+m]*g;return r}let u=o*2,d=t-1;for(let g=0;g!==o;++g){let v=a[c+g],m=a[l+g],p=d*u+g*2,S=f[p],E=f[p+1],y=t*u+g*2,w=h[y],b=h[y+1],R=L0(i,e,S,w,s);r[g]=Hd(R,v,E,b,m)}return r}};function Hd(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function I0(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function L0(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=Hd(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=I0(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Xn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Sr(e,this.TimeBufferType),this.values=Sr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Sr(t.times,Array),values:Sr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),vh(t.settings)&&(i.settings={inTangents:Sr(t.settings.inTangents,Array),outTangents:Sr(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new sl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new il(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new nl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new rl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case xa:e=this.InterpolantFactoryMethodDiscrete;break;case $o:e=this.InterpolantFactoryMethodLinear;break;case Bo:e=this.InterpolantFactoryMethodSmooth;break;case Mh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Wt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xa;case this.InterpolantFactoryMethodLinear:return $o;case this.InterpolantFactoryMethodSmooth:return Bo;case this.InterpolantFactoryMethodBezier:return Mh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;vh(this.settings)&&($f(this.settings.inTangents,t),$f(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(qt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){qt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){qt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Wm(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){qt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Bo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*i,u=f-i,d=f+i;for(let g=0;g!==i;++g){let v=e[f+g];if(v!==e[u+g]||v!==e[d+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*i,u=a*i;for(let d=0;d!==i;++d)e[u+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,vh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function $f(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Xn.prototype.ValueTypeName="";Xn.prototype.TimeBufferType=Float32Array;Xn.prototype.ValueBufferType=Float32Array;Xn.prototype.DefaultInterpolation=$o;var Ps=class extends Xn{constructor(t,e,i){super(t,e,i)}};Ps.prototype.ValueTypeName="bool";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=xa;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;var al=class extends Xn{constructor(t,e,i,s){super(t,e,i,s)}};al.prototype.ValueTypeName="color";var ol=class extends Xn{constructor(t,e,i,s){super(t,e,i,s)}};ol.prototype.ValueTypeName="number";var ll=class extends Cs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Ni.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ca=class extends Xn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new ll(this.times,this.values,this.getValueSize(),t)}};Ca.prototype.ValueTypeName="quaternion";Ca.prototype.InterpolantFactoryMethodSmooth=void 0;var Is=class extends Xn{constructor(t,e,i){super(t,e,i)}};Is.prototype.ValueTypeName="string";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=xa;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;var cl=class extends Xn{constructor(t,e,i,s){super(t,e,i,s)}};cl.prototype.ValueTypeName="vector";var hl=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Vd=new hl,ul=class{constructor(t){this.manager=t!==void 0?t:Vd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ul.DEFAULT_MATERIAL_NAME="__DEFAULT";var Pa=class extends Mn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ia=class extends Pa{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},yh=new Fe,Zf=new V,Jf=new V,fl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.mapType=Bn,this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fr,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Zf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zf),Jf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){yh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(yh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Rr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(yh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Fo=new V,Oo=new Ni,Pi=new V,La=class extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Fo,Oo,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fo,Oo,Pi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Fo,Oo,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fo,Oo,Pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},_s=new V,Kf=new Xt,jf=new Xt,yn=class extends La{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Pr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ma*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pr*2*Math.atan(Math.tan(ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){_s.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_s.x,_s.y).multiplyScalar(-t/_s.z),_s.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_s.x,_s.y).multiplyScalar(-t/_s.z)}getViewSize(t,e){return this.getViewBounds(t,Kf,jf),e.subVectors(jf,Kf)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ma*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Br=class extends La{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Eh=class extends fl{constructor(){super(new Br(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ks=class extends Pa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new Eh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var br=-90,wr=1,dl=class extends Mn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new yn(br,wr,t,e);s.layers=this.layers,this.add(s);let r=new yn(br,wr,t,e);r.layers=this.layers,this.add(r);let a=new yn(br,wr,t,e);a.layers=this.layers,this.add(a);let o=new yn(br,wr,t,e);o.layers=this.layers,this.add(o);let l=new yn(br,wr,t,e);l.layers=this.layers,this.add(l);let c=new yn(br,wr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===xi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Rr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},pl=class extends yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Qh="\\[\\]\\.:\\/",N0=new RegExp("["+Qh+"]","g"),tu="[^"+Qh+"]",D0="[^"+Qh.replace("\\.","")+"]",U0=/((?:WC+[\/:])*)/.source.replace("WC",tu),F0=/(WCOD+)?/.source.replace("WCOD",D0),O0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tu),B0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tu),z0=new RegExp("^"+U0+F0+O0+B0+"$"),k0=["material","materials","bones","map"],Th=class{constructor(t,e,i){let s=i||ze.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ze=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(N0,"")}static parseTrackName(t){let e=z0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);k0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Wt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;qt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ze.Composite=Th;ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ze.prototype.GetterByBindingType=[ze.prototype._getValue_direct,ze.prototype._getValue_array,ze.prototype._getValue_arrayElement,ze.prototype._getValue_toArray];ze.prototype.SetterByBindingTypeAndVersioning=[[ze.prototype._setValue_direct,ze.prototype._setValue_direct_setNeedsUpdate,ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_array,ze.prototype._setValue_array_setNeedsUpdate,ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_arrayElement,ze.prototype._setValue_arrayElement_setNeedsUpdate,ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_fromArray,ze.prototype._setValue_fromArray_setNeedsUpdate,ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var WM=new Float32Array(1);var Qf=new Fe,Na=class{constructor(t,e,i=0,s=1/0){this.ray=new Ea(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Lr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):qt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Qf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qf),this}intersectObject(t,e=!0,i=[]){return Ah(t,this,i,e),i.sort(td),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Ah(t[s],this,i,e);return i.sort(td),i}};function td(n,t){return n.distance-t.distance}function Ah(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)Ah(r[a],t,e,!0)}}var au=class au{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};au.prototype.isMatrix2=!0;var Rh=au;function eu(n,t,e,i){let s=H0(i);switch(e){case Yh:return n*t;case er:return n*t/s.components*s.byteLength;case Sl:return n*t/s.components*s.byteLength;case Us:return n*t*2/s.components*s.byteLength;case bl:return n*t*2/s.components*s.byteLength;case $h:return n*t*3/s.components*s.byteLength;case ai:return n*t*4/s.components*s.byteLength;case wl:return n*t*4/s.components*s.byteLength;case Oa:case Ba:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case za:case ka:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Tl:case Rl:return Math.max(n,16)*Math.max(t,8)/4;case El:case Al:return Math.max(n,8)*Math.max(t,8)/2;case Cl:case Pl:case Ll:case Nl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Il:case Ha:case Dl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Fl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ol:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case zl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case kl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Vl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Gl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Wl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Xl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ql:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Yl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case $l:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Zl:case Jl:case Kl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case jl:case Ql:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Va:case tc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function H0(n){switch(n){case Bn:case Gh:return{byteLength:1,components:1};case Hr:case Wh:case In:return{byteLength:2,components:1};case yl:case Ml:return{byteLength:2,components:4};case vi:case vl:case yi:return{byteLength:4,components:1};case Xh:case qh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function hp(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function G0(n){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){let h=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],v=f[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,f[u]=v)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let v=f[d];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var W0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,X0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,q0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Y0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Z0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,J0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,K0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,j0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Q0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ng=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ig=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ug=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,dg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,gg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_g=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,bg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Eg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ag=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ig=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ng=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ug=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Fg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Og=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Yg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$g=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ex=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ix=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ax=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ox=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,dx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,px=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_x=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,yx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ex=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ax=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Px=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ix=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ux=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ox=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Kx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,t_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,s_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,r_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,c_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,u_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,f_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,m_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,__=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,v_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,y_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,S_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,b_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ie={alphahash_fragment:W0,alphahash_pars_fragment:X0,alphamap_fragment:q0,alphamap_pars_fragment:Y0,alphatest_fragment:$0,alphatest_pars_fragment:Z0,aomap_fragment:J0,aomap_pars_fragment:K0,batching_pars_vertex:j0,batching_vertex:Q0,begin_vertex:tg,beginnormal_vertex:eg,bsdfs:ng,iridescence_fragment:ig,bumpmap_pars_fragment:sg,clipping_planes_fragment:rg,clipping_planes_pars_fragment:ag,clipping_planes_pars_vertex:og,clipping_planes_vertex:lg,color_fragment:cg,color_pars_fragment:hg,color_pars_vertex:ug,color_vertex:fg,common:dg,cube_uv_reflection_fragment:pg,defaultnormal_vertex:mg,displacementmap_pars_vertex:gg,displacementmap_vertex:xg,emissivemap_fragment:_g,emissivemap_pars_fragment:vg,colorspace_fragment:yg,colorspace_pars_fragment:Mg,envmap_fragment:Sg,envmap_common_pars_fragment:bg,envmap_pars_fragment:wg,envmap_pars_vertex:Eg,envmap_physical_pars_fragment:Fg,envmap_vertex:Tg,fog_vertex:Ag,fog_pars_vertex:Rg,fog_fragment:Cg,fog_pars_fragment:Pg,gradientmap_pars_fragment:Ig,lightmap_pars_fragment:Lg,lights_lambert_fragment:Ng,lights_lambert_pars_fragment:Dg,lights_pars_begin:Ug,lights_toon_fragment:Og,lights_toon_pars_fragment:Bg,lights_phong_fragment:zg,lights_phong_pars_fragment:kg,lights_physical_fragment:Hg,lights_physical_pars_fragment:Vg,lights_fragment_begin:Gg,lights_fragment_maps:Wg,lights_fragment_end:Xg,lightprobes_pars_fragment:qg,logdepthbuf_fragment:Yg,logdepthbuf_pars_fragment:$g,logdepthbuf_pars_vertex:Zg,logdepthbuf_vertex:Jg,map_fragment:Kg,map_pars_fragment:jg,map_particle_fragment:Qg,map_particle_pars_fragment:tx,metalnessmap_fragment:ex,metalnessmap_pars_fragment:nx,morphinstance_vertex:ix,morphcolor_vertex:sx,morphnormal_vertex:rx,morphtarget_pars_vertex:ax,morphtarget_vertex:ox,normal_fragment_begin:lx,normal_fragment_maps:cx,normal_pars_fragment:hx,normal_pars_vertex:ux,normal_vertex:fx,normalmap_pars_fragment:dx,clearcoat_normal_fragment_begin:px,clearcoat_normal_fragment_maps:mx,clearcoat_pars_fragment:gx,iridescence_pars_fragment:xx,opaque_fragment:_x,packing:vx,premultiplied_alpha_fragment:yx,project_vertex:Mx,dithering_fragment:Sx,dithering_pars_fragment:bx,roughnessmap_fragment:wx,roughnessmap_pars_fragment:Ex,shadowmap_pars_fragment:Tx,shadowmap_pars_vertex:Ax,shadowmap_vertex:Rx,shadowmask_pars_fragment:Cx,skinbase_vertex:Px,skinning_pars_vertex:Ix,skinning_vertex:Lx,skinnormal_vertex:Nx,specularmap_fragment:Dx,specularmap_pars_fragment:Ux,tonemapping_fragment:Fx,tonemapping_pars_fragment:Ox,transmission_fragment:Bx,transmission_pars_fragment:zx,uv_pars_fragment:kx,uv_pars_vertex:Hx,uv_vertex:Vx,worldpos_vertex:Gx,background_vert:Wx,background_frag:Xx,backgroundCube_vert:qx,backgroundCube_frag:Yx,cube_vert:$x,cube_frag:Zx,depth_vert:Jx,depth_frag:Kx,distance_vert:jx,distance_frag:Qx,equirect_vert:t_,equirect_frag:e_,linedashed_vert:n_,linedashed_frag:i_,meshbasic_vert:s_,meshbasic_frag:r_,meshlambert_vert:a_,meshlambert_frag:o_,meshmatcap_vert:l_,meshmatcap_frag:c_,meshnormal_vert:h_,meshnormal_frag:u_,meshphong_vert:f_,meshphong_frag:d_,meshphysical_vert:p_,meshphysical_frag:m_,meshtoon_vert:g_,meshtoon_frag:x_,points_vert:__,points_frag:v_,shadow_vert:y_,shadow_frag:M_,sprite_vert:S_,sprite_frag:b_},Tt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Oi={basic:{uniforms:bn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:bn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Qt(0)},envMapIntensity:{value:1}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:bn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:bn([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:bn([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:bn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:bn([Tt.points,Tt.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:bn([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:bn([Tt.common,Tt.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:bn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:bn([Tt.sprite,Tt.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distance:{uniforms:bn([Tt.common,Tt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distance_vert,fragmentShader:ie.distance_frag},shadow:{uniforms:bn([Tt.lights,Tt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};Oi.physical={uniforms:bn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};var sc={r:0,b:0,g:0},w_=new Fe,up=new Zt;up.set(-1,0,0,0,1,0,0,0,1);function E_(n,t,e,i,s,r){let a=new Qt(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(S){let E=S.isScene===!0?S.background:null;if(E&&E.isTexture){let y=S.backgroundBlurriness>0;E=t.get(E,y)}return E}function g(S){let E=!1,y=d(S);y===null?m(a,o):y&&y.isColor&&(m(y,1),E=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(S,E){let y=d(E);y&&(y.isCubeTexture||y.mapping===Ua)?(c===void 0&&(c=new _e(new Or(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:nr(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(w_.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(up),c.material.toneMapped=pe.getTransfer(y.colorSpace)!==Te,(h!==y||f!==y.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,u=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new _e(new Ts(2,2),new Pn({name:"BackgroundMaterial",uniforms:nr(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:Ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=pe.getTransfer(y.colorSpace)!==Te,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,u=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,E){S.getRGB(sc,jh(n)),e.buffers.color.setClear(sc.r,sc.g,sc.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,E=1){a.set(S),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:v,dispose:p}}function T_(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(N,U,O,L,P){let G=!1,X=f(N,L,O,U);r!==X&&(r=X,c(r.object)),G=d(N,L,O,P),G&&g(N,L,O,P),P!==null&&t.update(P,n.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,y(N,U,O,L),P!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))}function l(){return n.createVertexArray()}function c(N){return n.bindVertexArray(N)}function h(N){return n.deleteVertexArray(N)}function f(N,U,O,L){let P=L.wireframe===!0,G=i[U.id];G===void 0&&(G={},i[U.id]=G);let X=N.isInstancedMesh===!0?N.id:0,et=G[X];et===void 0&&(et={},G[X]=et);let $=et[O.id];$===void 0&&($={},et[O.id]=$);let nt=$[P];return nt===void 0&&(nt=u(l()),$[P]=nt),nt}function u(N){let U=[],O=[],L=[];for(let P=0;P<e;P++)U[P]=0,O[P]=0,L[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:O,attributeDivisors:L,object:N,attributes:{},index:null}}function d(N,U,O,L){let P=r.attributes,G=U.attributes,X=0,et=O.getAttributes();for(let $ in et)if(et[$].location>=0){let K=P[$],St=G[$];if(St===void 0&&($==="instanceMatrix"&&N.instanceMatrix&&(St=N.instanceMatrix),$==="instanceColor"&&N.instanceColor&&(St=N.instanceColor)),K===void 0||K.attribute!==St||St&&K.data!==St.data)return!0;X++}return r.attributesNum!==X||r.index!==L}function g(N,U,O,L){let P={},G=U.attributes,X=0,et=O.getAttributes();for(let $ in et)if(et[$].location>=0){let K=G[$];K===void 0&&($==="instanceMatrix"&&N.instanceMatrix&&(K=N.instanceMatrix),$==="instanceColor"&&N.instanceColor&&(K=N.instanceColor));let St={};St.attribute=K,K&&K.data&&(St.data=K.data),P[$]=St,X++}r.attributes=P,r.attributesNum=X,r.index=L}function v(){let N=r.newAttributes;for(let U=0,O=N.length;U<O;U++)N[U]=0}function m(N){p(N,0)}function p(N,U){let O=r.newAttributes,L=r.enabledAttributes,P=r.attributeDivisors;O[N]=1,L[N]===0&&(n.enableVertexAttribArray(N),L[N]=1),P[N]!==U&&(n.vertexAttribDivisor(N,U),P[N]=U)}function S(){let N=r.newAttributes,U=r.enabledAttributes;for(let O=0,L=U.length;O<L;O++)U[O]!==N[O]&&(n.disableVertexAttribArray(O),U[O]=0)}function E(N,U,O,L,P,G,X){X===!0?n.vertexAttribIPointer(N,U,O,P,G):n.vertexAttribPointer(N,U,O,L,P,G)}function y(N,U,O,L){v();let P=L.attributes,G=O.getAttributes(),X=U.defaultAttributeValues;for(let et in G){let $=G[et];if($.location>=0){let nt=P[et];if(nt===void 0&&(et==="instanceMatrix"&&N.instanceMatrix&&(nt=N.instanceMatrix),et==="instanceColor"&&N.instanceColor&&(nt=N.instanceColor)),nt!==void 0){let K=nt.normalized,St=nt.itemSize,xt=t.get(nt);if(xt===void 0)continue;let ne=xt.buffer,Ht=xt.type,ft=xt.bytesPerElement,Q=Ht===n.INT||Ht===n.UNSIGNED_INT||nt.gpuType===vl;if(nt.isInterleavedBufferAttribute){let rt=nt.data,Rt=rt.stride,Vt=nt.offset;if(rt.isInstancedInterleavedBuffer){for(let Ct=0;Ct<$.locationSize;Ct++)p($.location+Ct,rt.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ct=0;Ct<$.locationSize;Ct++)m($.location+Ct);n.bindBuffer(n.ARRAY_BUFFER,ne);for(let Ct=0;Ct<$.locationSize;Ct++)E($.location+Ct,St/$.locationSize,Ht,K,Rt*ft,(Vt+St/$.locationSize*Ct)*ft,Q)}else{if(nt.isInstancedBufferAttribute){for(let rt=0;rt<$.locationSize;rt++)p($.location+rt,nt.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let rt=0;rt<$.locationSize;rt++)m($.location+rt);n.bindBuffer(n.ARRAY_BUFFER,ne);for(let rt=0;rt<$.locationSize;rt++)E($.location+rt,St/$.locationSize,Ht,K,St*ft,St/$.locationSize*rt*ft,Q)}}else if(X!==void 0){let K=X[et];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv($.location,K);break;case 3:n.vertexAttrib3fv($.location,K);break;case 4:n.vertexAttrib4fv($.location,K);break;default:n.vertexAttrib1fv($.location,K)}}}}S()}function w(){T();for(let N in i){let U=i[N];for(let O in U){let L=U[O];for(let P in L){let G=L[P];for(let X in G)h(G[X].object),delete G[X];delete L[P]}}delete i[N]}}function b(N){if(i[N.id]===void 0)return;let U=i[N.id];for(let O in U){let L=U[O];for(let P in L){let G=L[P];for(let X in G)h(G[X].object),delete G[X];delete L[P]}}delete i[N.id]}function R(N){for(let U in i){let O=i[U];for(let L in O){let P=O[L];if(P[N.id]===void 0)continue;let G=P[N.id];for(let X in G)h(G[X].object),delete G[X];delete P[N.id]}}}function _(N){for(let U in i){let O=i[U],L=N.isInstancedMesh===!0?N.id:0,P=O[L];if(P!==void 0){for(let G in P){let X=P[G];for(let et in X)h(X[et].object),delete X[et];delete P[G]}delete O[L],Object.keys(O).length===0&&delete i[U]}}}function T(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:I,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function A_(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function R_(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==ai&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let _=R===In&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Bn&&R!==yi&&!_&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Wt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:y,maxSamples:w,samples:b}}function C_(n){let t=this,e=null,i=0,s=!1,r=!1,a=new gi,o=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let S=r?0:i,E=S*4,y=p.clippingState||null;l.value=y,y=h(g,u,E,d);for(let w=0;w!==E;++w)y[w]=e[w];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,u,d,g){let v=f!==null?f.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=d+v*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,y=d;E!==v;++E,y+=4)a.copy(f[E]).applyMatrix4(S,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}var Xr=4,P_=6,I_=20,L_=256,Ga=new Br,Gd=new Qt,ou=null,lu=0,cu=0,hu=!1,N_=new V,ir=new V,Yr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=N_}=r;ou=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),hu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ou,lu,cu),this._renderer.xr.enabled=hu,t.scissorTest=!1,Wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ns||t.mapping===tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ou=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),hu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:je,minFilter:je,generateMipmaps:!1,type:In,format:ai,colorSpace:_a,depthBuffer:!1},s=Wd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wd(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=D_(r)),this._blurMaterial=F_(r,t,e),this._ggxMaterial=U_(r,t,e)}return s}_compileMaterial(t){let e=new _e(new Sn,t);this._renderer.compile(e,Ga)}_sceneToCubeUV(t,e,i,s,r){let l=new yn(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(Gd),f.toneMapping=_i,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _e(new Or,new Ss({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,p=!1,S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,p=!0):(m.color.copy(Gd),p=!0);for(let E=0;E<6;E++){let y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));let w=this._cubeSize;Wr(s,y*w,E>2?w:0,w,w),f.setRenderTarget(s),p&&f.render(v,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=S}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Ns||t.mapping===tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Wr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Ga)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-Xr?i-g+Xr:0),p=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,Wr(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(o,Ga),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Wr(t,m,p,3*v,2*v),s.setRenderTarget(t),s.render(o,Ga)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-Xr?s-this._lodMax+Xr:0),u=4*(this._cubeSize-h);Wr(e,f,u,3*h,2*h),a.setRenderTarget(e),a.render(l,Ga)}};function D_(n){let t=[],e=[],i=n,s=n-Xr+1+P_;for(let r=0;r<s;r++){let a=Math.pow(2,i);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,g=new Float32Array(d*u*f),v=new Float32Array(d*u*f);for(let p=0;p<f;p++){let S=p%3*2/3-1,E=p>2?0:-1,y=[S,E,0,S+2/3,E,0,S+2/3,E+1,0,S,E,0,S+2/3,E+1,0,S,E+1,0];g.set(y,d*u*p);for(let w=0;w<u;w++){let b=h[w*2]*2-1,R=h[w*2+1]*2-1;p===0?ir.set(1,R,b):p===1?ir.set(-b,1,-R):p===2?ir.set(-b,R,1):p===3?ir.set(-1,R,-b):p===4?ir.set(-b,-1,R):ir.set(b,R,-1),ir.toArray(v,(p*u+w)*d)}}let m=new Sn;m.setAttribute("position",new si(g,d)),m.setAttribute("outputDirection",new si(v,d)),e.push(new _e(m,null)),i>Xr&&i--}return{lodMeshes:e,sizeLods:t}}function Wd(n,t,e){let i=new Fn(n,t,e);return i.texture.mapping=Ua,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function U_(n,t,e){return new Pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:L_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function F_(n,t,e){return new Pn({name:"SphericalGaussianBlur",defines:{SAMPLES:I_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:lc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Xd(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function qd(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function lc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ac=class extends Fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ta(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Or(5,5,5),r=new Pn({name:"CubemapFromEquirect",uniforms:nr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:Ui});r.uniforms.tEquirect.value=e;let a=new _e(s,r),o=e.minFilter;return e.minFilter===ri&&(e.minFilter=je),new dl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}};function O_(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===gl||d===xl)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let v=new ac(g.height);return v.fromEquirectangularTexture(n,u),t.set(u,v),u.addEventListener("dispose",c),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let d=u.mapping,g=d===gl||d===xl,v=d===Ns||d===tr;if(g||v){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Yr(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let S=u.image;return g&&S&&S.height>0||v&&S&&l(S)?(i===null&&(i=new Yr(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,d){return d===gl?u.mapping=Ns:d===xl&&(u.mapping=tr),u}function l(u){let d=0,g=6;for(let v=0;v<g;v++)u[v]!==void 0&&d++;return d===g}function c(u){let d=u.target;d.removeEventListener("dispose",c);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function B_(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Js("WebGLRenderer: "+i+" extension not supported."),s}}}function z_(n,t,e,i){let s={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)t.update(u[d],n.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,g=f.attributes.position,v=0;if(g===void 0)return;if(d!==null){let S=d.array;v=d.version;for(let E=0,y=S.length;E<y;E+=3){let w=S[E+0],b=S[E+1],R=S[E+2];u.push(w,b,b,R,R,w)}}else{let S=g.array;v=g.version;for(let E=0,y=S.length/3-1;E<y;E+=3){let w=E+0,b=E+1,R=E+2;u.push(w,b,b,R,R,w)}}let m=new(g.count>=65535?wa:ba)(u,1);m.version=v;let p=r.get(f);p&&t.remove(p),r.set(f,m)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function k_(n,t,e){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){n.drawElements(i,u,r,f*a),e.update(u,i,1)}function c(f,u,d){d!==0&&(n.drawElementsInstanced(i,u,r,f*a,d),e.update(u,i,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,d);let v=0;for(let m=0;m<d;m++)v+=u[m];e.update(v,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function H_(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:qt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function V_(n,t,e){let i=new WeakMap,s=new De;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==f){let T=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],E=0;d===!0&&(E=1),g===!0&&(E=2),v===!0&&(E=3);let y=o.attributes.position.count*E,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let b=new Float32Array(y*w*4*f),R=new Ma(b,y,w,f);R.type=yi,R.needsUpdate=!0;let _=E*4;for(let I=0;I<f;I++){let N=m[I],U=p[I],O=S[I],L=y*w*4*I;for(let P=0;P<N.count;P++){let G=P*_;d===!0&&(s.fromBufferAttribute(N,P),b[L+G+0]=s.x,b[L+G+1]=s.y,b[L+G+2]=s.z,b[L+G+3]=0),g===!0&&(s.fromBufferAttribute(U,P),b[L+G+4]=s.x,b[L+G+5]=s.y,b[L+G+6]=s.z,b[L+G+7]=0),v===!0&&(s.fromBufferAttribute(O,P),b[L+G+8]=s.x,b[L+G+9]=s.y,b[L+G+10]=s.z,b[L+G+11]=O.itemSize===4?s.w:1)}}u={count:f,texture:R,size:new Xt(y,w)},i.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function G_(n,t,e,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var W_={[Fh]:"LINEAR_TONE_MAPPING",[Oh]:"REINHARD_TONE_MAPPING",[Bh]:"CINEON_TONE_MAPPING",[zh]:"ACES_FILMIC_TONE_MAPPING",[Hh]:"AGX_TONE_MAPPING",[Da]:"NEUTRAL_TONE_MAPPING",[kh]:"CUSTOM_TONE_MAPPING"};function X_(n,t,e,i,s,r){let a=new Fn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Sn;c.setAttribute("position",new ke([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ke([0,2,0,0,2,0],2));let h=new Qo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new _e(c,h),u=new Br(-1,1,1,-1,0,1),d=null,g=null,v=!1,m,p=null,S=[],E=!1;this.setSize=function(y,w){a.setSize(y,w),o!==null&&o.setSize(y,w),l!==null&&l.setSize(y,w);for(let b=0;b<S.length;b++){let R=S[b];R.setSize&&R.setSize(y,w)}},this.setEffects=function(y){S=y,E=S.length>0&&S[0].isRenderPass===!0;let w=a.width,b=a.height;S.length>0&&o===null&&(o=new Fn(w,b,{type:In,depthBuffer:!1,stencilBuffer:!1}),l=new Fn(w,b,{type:In,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<S.length;R++){let _=S[R];_.setSize&&_.setSize(w,b)}},this.begin=function(y,w){if(v||y.toneMapping===_i&&S.length===0)return!1;if(p=w,w!==null){let b=w.width,R=w.height;(a.width!==b||a.height!==R)&&this.setSize(b,R)}return E===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=_i,!0},this.hasRenderPass=function(){return E},this.end=function(y,w){y.toneMapping=m,v=!0;let b=a,R=o;for(let _=0;_<S.length;_++){let T=S[_];T.enabled!==!1&&(T.render(y,R,b,w),T.needsSwap!==!1&&(b=R,R=R===o?l:o))}if(d!==y.outputColorSpace||g!==y.toneMapping){d=y.outputColorSpace,g=y.toneMapping,h.defines={},pe.getTransfer(d)===Te&&(h.defines.SRGB_TRANSFER="");let _=W_[g];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(p),y.render(f,u),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var fp=new dn,du=new Es(1,1),dp=new Ma,pp=new Ko,mp=new Ta,Yd=[],$d=[],Zd=new Float32Array(16),Jd=new Float32Array(9),Kd=new Float32Array(4);function $r(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Yd[s];if(r===void 0&&(r=new Float32Array(s),Yd[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function nn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function sn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function cc(n,t){let e=$d[t];e===void 0&&(e=new Int32Array(t),$d[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function q_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Y_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;n.uniform2fv(this.addr,t),sn(e,t)}}function $_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(nn(e,t))return;n.uniform3fv(this.addr,t),sn(e,t)}}function Z_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;n.uniform4fv(this.addr,t),sn(e,t)}}function J_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(nn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,i))return;Kd.set(i),n.uniformMatrix2fv(this.addr,!1,Kd),sn(e,i)}}function K_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(nn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,i))return;Jd.set(i),n.uniformMatrix3fv(this.addr,!1,Jd),sn(e,i)}}function j_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(nn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,i))return;Zd.set(i),n.uniformMatrix4fv(this.addr,!1,Zd),sn(e,i)}}function Q_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function tv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;n.uniform2iv(this.addr,t),sn(e,t)}}function ev(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;n.uniform3iv(this.addr,t),sn(e,t)}}function nv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;n.uniform4iv(this.addr,t),sn(e,t)}}function iv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function sv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;n.uniform2uiv(this.addr,t),sn(e,t)}}function rv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;n.uniform3uiv(this.addr,t),sn(e,t)}}function av(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;n.uniform4uiv(this.addr,t),sn(e,t)}}function ov(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(du.compareFunction=e.isReversedDepthBuffer()?ic:nc,r=du):r=fp,e.setTexture2D(t||r,s)}function lv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||pp,s)}function cv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||mp,s)}function hv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||dp,s)}function uv(n){switch(n){case 5126:return q_;case 35664:return Y_;case 35665:return $_;case 35666:return Z_;case 35674:return J_;case 35675:return K_;case 35676:return j_;case 5124:case 35670:return Q_;case 35667:case 35671:return tv;case 35668:case 35672:return ev;case 35669:case 35673:return nv;case 5125:return iv;case 36294:return sv;case 36295:return rv;case 36296:return av;case 35678:case 36198:case 36298:case 36306:case 35682:return ov;case 35679:case 36299:case 36307:return lv;case 35680:case 36300:case 36308:case 36293:return cv;case 36289:case 36303:case 36311:case 36292:return hv}}function fv(n,t){n.uniform1fv(this.addr,t)}function dv(n,t){let e=$r(t,this.size,2);n.uniform2fv(this.addr,e)}function pv(n,t){let e=$r(t,this.size,3);n.uniform3fv(this.addr,e)}function mv(n,t){let e=$r(t,this.size,4);n.uniform4fv(this.addr,e)}function gv(n,t){let e=$r(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function xv(n,t){let e=$r(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function _v(n,t){let e=$r(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function vv(n,t){n.uniform1iv(this.addr,t)}function yv(n,t){n.uniform2iv(this.addr,t)}function Mv(n,t){n.uniform3iv(this.addr,t)}function Sv(n,t){n.uniform4iv(this.addr,t)}function bv(n,t){n.uniform1uiv(this.addr,t)}function wv(n,t){n.uniform2uiv(this.addr,t)}function Ev(n,t){n.uniform3uiv(this.addr,t)}function Tv(n,t){n.uniform4uiv(this.addr,t)}function Av(n,t,e){let i=this.cache,s=t.length,r=cc(e,s);nn(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=du:a=fp;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Rv(n,t,e){let i=this.cache,s=t.length,r=cc(e,s);nn(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||pp,r[a])}function Cv(n,t,e){let i=this.cache,s=t.length,r=cc(e,s);nn(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||mp,r[a])}function Pv(n,t,e){let i=this.cache,s=t.length,r=cc(e,s);nn(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||dp,r[a])}function Iv(n){switch(n){case 5126:return fv;case 35664:return dv;case 35665:return pv;case 35666:return mv;case 35674:return gv;case 35675:return xv;case 35676:return _v;case 5124:case 35670:return vv;case 35667:case 35671:return yv;case 35668:case 35672:return Mv;case 35669:case 35673:return Sv;case 5125:return bv;case 36294:return wv;case 36295:return Ev;case 36296:return Tv;case 35678:case 36198:case 36298:case 36306:case 35682:return Av;case 35679:case 36299:case 36307:return Rv;case 35680:case 36300:case 36308:case 36293:return Cv;case 36289:case 36303:case 36311:case 36292:return Pv}}var pu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=uv(e.type)}},mu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Iv(e.type)}},gu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},uu=/(\w+)(\])?(\[|\.)?/g;function jd(n,t){n.seq.push(t),n.map[t.id]=t}function Lv(n,t,e){let i=n.name,s=i.length;for(uu.lastIndex=0;;){let r=uu.exec(i),a=uu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){jd(e,c===void 0?new pu(o,n,t):new mu(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new gu(o),jd(e,f)),e=f}}}var qr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Lv(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function Qd(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Nv=37297,Dv=0;function Uv(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var tp=new Zt;function Fv(n){pe._getMatrix(tp,pe.workingColorSpace,n);let t=`mat3( ${tp.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(n)){case va:return[t,"LinearTransferOETF"];case Te:return[t,"sRGBTransferOETF"];default:return Wt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function ep(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Uv(n.getShaderSource(t),o)}else return r}function Ov(n,t){let e=Fv(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Bv={[Fh]:"Linear",[Oh]:"Reinhard",[Bh]:"Cineon",[zh]:"ACESFilmic",[Hh]:"AgX",[Da]:"Neutral",[kh]:"Custom"};function zv(n,t){let e=Bv[t];return e===void 0?(Wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var rc=new V;function kv(){pe.getLuminanceCoefficients(rc);let n=rc.x.toFixed(4),t=rc.y.toFixed(4),e=rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xa).join(`
`)}function Vv(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Gv(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Xa(n){return n!==""}function np(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ip(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Wv=/^[ \t]*#include +<([\w\d./]+)>/gm;function xu(n){return n.replace(Wv,qv)}var Xv=new Map;function qv(n,t){let e=ie[t];if(e===void 0){let i=Xv.get(t);if(i!==void 0)e=ie[i],Wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return xu(e)}var Yv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sp(n){return n.replace(Yv,$v)}function $v(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rp(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Zv={[js]:"SHADOWMAP_TYPE_PCF",[zr]:"SHADOWMAP_TYPE_VSM"};function Jv(n){return Zv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Kv={[Ns]:"ENVMAP_TYPE_CUBE",[tr]:"ENVMAP_TYPE_CUBE",[Ua]:"ENVMAP_TYPE_CUBE_UV"};function jv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Kv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var Qv={[tr]:"ENVMAP_MODE_REFRACTION"};function ty(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Qv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ey={[Uh]:"ENVMAP_BLENDING_MULTIPLY",[Sd]:"ENVMAP_BLENDING_MIX",[bd]:"ENVMAP_BLENDING_ADD"};function ny(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":ey[n.combine]||"ENVMAP_BLENDING_NONE"}function iy(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function sy(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Jv(e),c=jv(e),h=ty(e),f=ny(e),u=iy(e),d=Hv(e),g=Vv(r),v=s.createProgram(),m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xa).join(`
`),p.length>0&&(p+=`
`)):(m=[rp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xa).join(`
`),p=[rp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_i?"#define TONE_MAPPING":"",e.toneMapping!==_i?ie.tonemapping_pars_fragment:"",e.toneMapping!==_i?zv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,Ov("linearToOutputTexel",e.outputColorSpace),kv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xa).join(`
`)),a=xu(a),a=np(a,e),a=ip(a,e),o=xu(o),o=np(o,e),o=ip(o,e),a=sp(a),o=sp(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=S+m+a,y=S+p+o,w=Qd(s,s.VERTEX_SHADER,E),b=Qd(s,s.FRAGMENT_SHADER,y);s.attachShader(v,w),s.attachShader(v,b),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(N){if(n.debug.checkShaderErrors){let U=s.getProgramInfoLog(v)||"",O=s.getShaderInfoLog(w)||"",L=s.getShaderInfoLog(b)||"",P=U.trim(),G=O.trim(),X=L.trim(),et=!0,$=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(et=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,w,b);else{let nt=ep(s,w,"vertex"),K=ep(s,b,"fragment");qt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+P+`
`+nt+`
`+K)}else P!==""?Wt("WebGLProgram: Program Info Log:",P):(G===""||X==="")&&($=!1);$&&(N.diagnostics={runnable:et,programLog:P,vertexShader:{log:G,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(w),s.deleteShader(b),_=new qr(s,v),T=Gv(s,v)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(v,Nv)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Dv++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=b,this}var ry=0,_u=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new vu(t),e.set(t,i)),i}},vu=class{constructor(t){this.id=ry++,this.code=t,this.usedTimes=0}};function ay(n){return n===Us||n===Ha||n===Va}function oy(n,t,e,i,s,r){let a=new Lr,o=new _u,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer,u=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,T,I,N,U,O){let L=N.fog,P=U.geometry,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?N.environment:null,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,et=t.get(_.envMap||G,X),$=et&&et.mapping===Ua?et.image.height:null,nt=d[_.type];_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&Wt("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let K=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,St=K!==void 0?K.length:0,xt=0;P.morphAttributes.position!==void 0&&(xt=1),P.morphAttributes.normal!==void 0&&(xt=2),P.morphAttributes.color!==void 0&&(xt=3);let ne,Ht,ft,Q;if(nt){let Pe=Oi[nt];ne=Pe.vertexShader,Ht=Pe.fragmentShader}else{ne=_.vertexShader,Ht=_.fragmentShader;let Pe=o.getVertexShaderStage(_),Me=o.getFragmentShaderStage(_);o.update(_,Pe,Me),ft=Pe.id,Q=Me.id}let rt=n.getRenderTarget(),Rt=n.state.buffers.depth.getReversed(),Vt=U.isInstancedMesh===!0,Ct=U.isBatchedMesh===!0,te=!!_.map,Ye=!!_.matcap,re=!!et,ae=!!_.aoMap,ye=!!_.lightMap,Jt=!!_.bumpMap&&_.wireframe===!1,Re=!!_.normalMap,$e=!!_.displacementMap,He=!!_.emissiveMap,xe=!!_.metalnessMap,Ue=!!_.roughnessMap,z=_.anisotropy>0,un=_.clearcoat>0,fe=_.dispersion>0,C=_.retroreflectivity>0,x=_.iridescence>0,D=_.sheen>0,Z=_.transmission>0,tt=z&&!!_.anisotropyMap,dt=un&&!!_.clearcoatMap,_t=un&&!!_.clearcoatNormalMap,j=un&&!!_.clearcoatRoughnessMap,st=x&&!!_.iridescenceMap,W=x&&!!_.iridescenceThicknessMap,zt=D&&!!_.sheenColorMap,pt=D&&!!_.sheenRoughnessMap,gt=!!_.specularMap,Ot=!!_.specularColorMap,kt=!!_.specularIntensityMap,$t=Z&&!!_.transmissionMap,B=Z&&!!_.thicknessMap,vt=!!_.gradientMap,it=!!_.alphaMap,Mt=_.alphaTest>0,Et=!!_.alphaHash,lt=!!_.extensions,Dt=_i;_.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Dt=n.toneMapping);let Ft={shaderID:nt,shaderType:_.type,shaderName:_.name,vertexShader:ne,fragmentShader:Ht,defines:_.defines,customVertexShaderID:ft,customFragmentShaderID:Q,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:Ct,batchingColor:Ct&&U._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&U.instanceColor!==null,instancingMorph:Vt&&U.morphTexture!==null,outputColorSpace:rt===null?n.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:pe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:te,matcap:Ye,envMap:re,envMapMode:re&&et.mapping,envMapCubeUVHeight:$,aoMap:ae,lightMap:ye,bumpMap:Jt,normalMap:Re,displacementMap:$e,emissiveMap:He,normalMapObjectSpace:Re&&_.normalMapType===Td,normalMapTangentSpace:Re&&_.normalMapType===ec,packedNormalMap:Re&&_.normalMapType===ec&&ay(_.normalMap.format),metalnessMap:xe,roughnessMap:Ue,anisotropy:z,anisotropyMap:tt,clearcoat:un,clearcoatMap:dt,clearcoatNormalMap:_t,clearcoatRoughnessMap:j,dispersion:fe,retroreflection:C,iridescence:x,iridescenceMap:st,iridescenceThicknessMap:W,sheen:D,sheenColorMap:zt,sheenRoughnessMap:pt,specularMap:gt,specularColorMap:Ot,specularIntensityMap:kt,transmission:Z,transmissionMap:$t,thicknessMap:B,gradientMap:vt,opaque:_.transparent===!1&&_.blending===kr&&_.alphaToCoverage===!1,alphaMap:it,alphaTest:Mt,alphaHash:Et,combine:_.combine,mapUv:te&&g(_.map.channel),aoMapUv:ae&&g(_.aoMap.channel),lightMapUv:ye&&g(_.lightMap.channel),bumpMapUv:Jt&&g(_.bumpMap.channel),normalMapUv:Re&&g(_.normalMap.channel),displacementMapUv:$e&&g(_.displacementMap.channel),emissiveMapUv:He&&g(_.emissiveMap.channel),metalnessMapUv:xe&&g(_.metalnessMap.channel),roughnessMapUv:Ue&&g(_.roughnessMap.channel),anisotropyMapUv:tt&&g(_.anisotropyMap.channel),clearcoatMapUv:dt&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:_t&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:W&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:pt&&g(_.sheenRoughnessMap.channel),specularMapUv:gt&&g(_.specularMap.channel),specularColorMapUv:Ot&&g(_.specularColorMap.channel),specularIntensityMapUv:kt&&g(_.specularIntensityMap.channel),transmissionMapUv:$t&&g(_.transmissionMap.channel),thicknessMapUv:B&&g(_.thicknessMap.channel),alphaMapUv:it&&g(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Re||z),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!P.attributes.uv&&(te||it),fog:!!L,useFog:_.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&Re===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Rt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:xt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Dt,decodeVideoTexture:te&&_.map.isVideoTexture===!0&&pe.getTransfer(_.map.colorSpace)===Te,decodeVideoTextureEmissive:He&&_.emissiveMap.isVideoTexture===!0&&pe.getTransfer(_.emissiveMap.colorSpace)===Te,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===qn,flipSided:_.side===pn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:lt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&_.extensions.multiDraw===!0||Ct)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ft.vertexUv1s=l.has(1),Ft.vertexUv2s=l.has(2),Ft.vertexUv3s=l.has(3),l.clear(),Ft}function m(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let I in _.defines)T.push(I),T.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(p(T,_),S(T,_),T.push(n.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function S(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function E(_){let T=d[_.type],I;if(T){let N=Oi[T];I=kd.clone(N.uniforms)}else I=_.uniforms;return I}function y(_,T){let I=h.get(T);return I!==void 0?++I.usedTimes:(I=new sy(n,T,_,s),c.push(I),h.set(T,I)),I}function w(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){o.remove(_)}function R(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:E,acquireProgram:y,releaseProgram:w,releaseShaderCache:b,programs:c,dispose:R}}function ly(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function cy(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function ap(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function op(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,g,v,m,p){let S=n[t];return S===void 0?(S={id:u.id,object:u,geometry:d,material:g,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:p},n[t]=S):(S.id=u.id,S.object=u,S.geometry=d,S.material=g,S.materialVariant=a(u),S.groupOrder=v,S.renderOrder=u.renderOrder,S.z=m,S.group=p),t++,S}function l(u,d,g,v,m,p,S){S.reversedDepth===!0&&(m=-m);let E=o(u,d,g,v,m,p);g.transmission>0?i.push(E):g.transparent===!0?s.push(E):e.push(E)}function c(u,d,g,v,m,p){let S=o(u,d,g,v,m,p);g.transmission>0?i.unshift(S):g.transparent===!0?s.unshift(S):e.unshift(S)}function h(u,d){e.length>1&&e.sort(u||cy),i.length>1&&i.sort(d||ap),s.length>1&&s.sort(d||ap)}function f(){for(let u=t,d=n.length;u<d;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function hy(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new op,n.set(i,[a])):s>=r.length?(a=new op,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function uy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new V,color:new Qt};break;case"SpotLight":e={position:new V,direction:new V,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new V,halfWidth:new V,halfHeight:new V};break}return n[t.id]=e,e}}}function fy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var dy=0;function py(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function my(n){let t=new uy,e=fy(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);let s=new V,r=new Fe,a=new Fe;function o(c){let h=0,f=0,u=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,S=0,E=0,y=0,w=0,b=0,R=0,_=0,T=0,I=0;c.sort(py);for(let U=0,O=c.length;U<O;U++){let L=c[U],P=L.color,G=L.intensity,X=L.distance,et=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Us?et=L.shadow.map.texture:et=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=P.r*G,f+=P.g*G,u+=P.b*G;else if(L.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(L.sh.coefficients[$],G);I++}else if(L.isSunLight){let $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let nt=L.shadow,K=e.get(L);K.shadowIntensity=nt.intensity,K.shadowBias=nt.bias,K.shadowNormalBias=nt.normalBias,K.shadowRadius=nt.radius,K.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),i.sunShadow[g]=K,i.sunShadowMap[g]=et;let St=nt.getViewportCount();for(let xt=0;xt<St;xt++)i.sunShadowMatrix[v+xt]=nt.getMatrix(xt),i.sunShadowCascade[v+xt]=nt._cascadeData[xt];v+=St,g++}i.sun[d]=$,d++}else if(L.isDirectionalLight){let $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let nt=L.shadow,K=e.get(L);K.shadowIntensity=nt.intensity,K.shadowBias=nt.bias,K.shadowNormalBias=nt.normalBias,K.shadowRadius=nt.radius,K.shadowMapSize=nt.mapSize,i.directionalShadow[m]=K,i.directionalShadowMap[m]=et,i.directionalShadowMatrix[m]=L.shadow.matrix,w++}i.directional[m]=$,m++}else if(L.isSpotLight){let $=t.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(P).multiplyScalar(G),$.distance=X,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,i.spot[S]=$;let nt=L.shadow;if(L.map&&(i.spotLightMap[_]=L.map,_++,nt.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[S]=nt.matrix,L.castShadow){let K=e.get(L);K.shadowIntensity=nt.intensity,K.shadowBias=nt.bias,K.shadowNormalBias=nt.normalBias,K.shadowRadius=nt.radius,K.shadowMapSize=nt.mapSize,i.spotShadow[S]=K,i.spotShadowMap[S]=et,R++}S++}else if(L.isRectAreaLight){let $=t.get(L);$.color.copy(P).multiplyScalar(G),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),i.rectArea[E]=$,E++}else if(L.isPointLight){let $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),$.distance=L.distance,$.decay=L.decay,L.castShadow){let nt=L.shadow,K=e.get(L);K.shadowIntensity=nt.intensity,K.shadowBias=nt.bias,K.shadowNormalBias=nt.normalBias,K.shadowRadius=nt.radius,K.shadowMapSize=nt.mapSize,K.shadowCameraNear=nt.camera.near,K.shadowCameraFar=nt.camera.far,i.pointShadow[p]=K,i.pointShadowMap[p]=et,i.pointShadowMatrix[p]=L.shadow.matrix,b++}i.point[p]=$,p++}else if(L.isHemisphereLight){let $=t.get(L);$.skyColor.copy(L.color).multiplyScalar(G),$.groundColor.copy(L.groundColor).multiplyScalar(G),i.hemi[y]=$,y++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Tt.LTC_FLOAT_1,i.rectAreaLTC2=Tt.LTC_FLOAT_2):(i.rectAreaLTC1=Tt.LTC_HALF_1,i.rectAreaLTC2=Tt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let N=i.hash;(N.sunLength!==d||N.directionalLength!==m||N.pointLength!==p||N.spotLength!==S||N.rectAreaLength!==E||N.hemiLength!==y||N.numSunShadows!==g||N.numDirectionalShadows!==w||N.numPointShadows!==b||N.numSpotShadows!==R||N.numSpotMaps!==_||N.numLightProbes!==I)&&(i.sun.length=d,i.directional.length=m,i.spot.length=S,i.rectArea.length=E,i.point.length=p,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+_-T,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=I,N.sunLength=d,N.directionalLength=m,N.pointLength=p,N.spotLength=S,N.rectAreaLength=E,N.hemiLength=y,N.numSunShadows=g,N.numDirectionalShadows=w,N.numPointShadows=b,N.numSpotShadows=R,N.numSpotMaps=_,N.numLightProbes=I,i.version=dy++)}function l(c,h){let f=0,u=0,d=0,g=0,v=0,m=0,p=h.matrixWorldInverse;for(let S=0,E=c.length;S<E;S++){let y=c[S];if(y.isSunLight){let w=i.sun[f];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(p),f++}else if(y.isDirectionalLight){let w=i.directional[u];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),u++}else if(y.isSpotLight){let w=i.spot[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),g++}else if(y.isRectAreaLight){let w=i.rectArea[v];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){let w=i.point[d];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){let w=i.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function lp(n){let t=new my(n),e=[],i=[],s=[];function r(u){f.camera=u,e.length=0,i.length=0,s.length=0}function a(u){e.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function gy(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new lp(n),t.set(s,[o])):r>=a.length?(o=new lp(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var xy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_y=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,vy=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],yy=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],cp=new Fe,Wa=new V,fu=new V;function My(n,t,e){let i=new Fr,s=new Xt,r=new Xt,a=new De,o=new tl,l=new el,c={},h=e.maxTextureSize,f={[Ls]:pn,[pn]:Ls,[qn]:qn},u=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:xy,fragmentShader:_y}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new Sn;g.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new _e(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=js;let p=this.type;this.render=function(b,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===id&&(Wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=js);let T=n.getRenderTarget(),I=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Ui),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let O=p!==this.type;O&&R.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(P=>P.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,P=b.length;L<P;L++){let G=b[L],X=G.shadow;if(X===void 0){Wt("WebGLShadowMap:",G,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let et=X.getFrameExtents();s.multiply(et),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/et.x),s.x=r.x*et.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/et.y),s.y=r.y*et.y,X.mapSize.y=r.y));let $=n.state.buffers.depth.getReversed();if(X.camera._reversedDepth=$,X.map===null||O===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===zr){if(G.isPointLight){Wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Fn(s.x,s.y,{format:Us,type:In,minFilter:je,magFilter:je,generateMipmaps:!1}),X.map.texture.name=G.name+".shadowMap",X.map.depthTexture=new Es(s.x,s.y,yi),X.map.depthTexture.name=G.name+".shadowMapDepth",X.map.depthTexture.format=Ii,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=cn,X.map.depthTexture.magFilter=cn}else G.isPointLight?(X.map=new ac(s.x),X.map.depthTexture=new jo(s.x,vi)):(X.map=new Fn(s.x,s.y),X.map.depthTexture=new Es(s.x,s.y,vi)),X.map.depthTexture.name=G.name+".shadowMap",X.map.depthTexture.format=Ii,this.type===js?(X.map.depthTexture.compareFunction=$?ic:nc,X.map.depthTexture.minFilter=je,X.map.depthTexture.magFilter=je):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=cn,X.map.depthTexture.magFilter=cn);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let nt=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();G.isPointLight!==!0&&X.updateMatrices(G,_);for(let K=0;K<nt;K++){let St=X.getCamera(K);if(G.isPointLight){let xt=X.camera,ne=X.matrix,Ht=G.distance||xt.far;Ht!==xt.far&&(xt.far=Ht,xt.updateProjectionMatrix()),Wa.setFromMatrixPosition(G.matrixWorld),xt.position.copy(Wa),fu.copy(xt.position),fu.add(vy[K]),xt.up.copy(yy[K]),xt.lookAt(fu),xt.updateMatrixWorld(),ne.makeTranslation(-Wa.x,-Wa.y,-Wa.z),cp.multiplyMatrices(xt.projectionMatrix,xt.matrixWorldInverse),X._frustum.setFromProjectionMatrix(cp,xt.coordinateSystem,xt.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)n.setRenderTarget(X.map,K),n.clear();else{K===0&&(n.setRenderTarget(X.map),n.clear());let xt=X.getViewport(K);a.set(r.x*xt.x,r.y*xt.y,r.x*xt.z,r.y*xt.w),U.viewport(a)}i=X.getFrustum(K),y(R,_,St,G,this.type)}X.isPointLightShadow!==!0&&this.type===zr&&S(X,_),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,I,N)};function S(b,R){let _=t.update(v);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new Fn(s.x,s.y,{format:Us,type:In}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(R,null,_,u,v,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(R,null,_,d,v,null)}function E(b,R,_,T){let I=null,N=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)I=N;else if(I=_.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let U=I.uuid,O=R.uuid,L=c[U];L===void 0&&(L={},c[U]=L);let P=L[O];P===void 0&&(P=I.clone(),L[O]=P,R.addEventListener("dispose",w)),I=P}if(I.visible=R.visible,I.wireframe=R.wireframe,T===zr?I.side=R.shadowSide!==null?R.shadowSide:R.side:I.side=R.shadowSide!==null?R.shadowSide:f[R.side],I.alphaMap=R.alphaMap,I.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,I.map=R.map,I.clipShadows=R.clipShadows,I.clippingPlanes=R.clippingPlanes,I.clipIntersection=R.clipIntersection,I.displacementMap=R.displacementMap,I.displacementScale=R.displacementScale,I.displacementBias=R.displacementBias,I.wireframeLinewidth=R.wireframeLinewidth,I.linewidth=R.linewidth,_.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let U=n.properties.get(I);U.light=_}return I}function y(b,R,_,T,I){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&I===zr)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);let O=t.update(b),L=b.material;if(Array.isArray(L)){let P=O.groups;for(let G=0,X=P.length;G<X;G++){let et=P[G],$=L[et.materialIndex];if($&&$.visible){let nt=E(b,$,T,I);b.onBeforeShadow(n,b,R,_,O,nt,et),n.renderBufferDirect(_,null,O,nt,b,et),b.onAfterShadow(n,b,R,_,O,nt,et)}}}else if(L.visible){let P=E(b,L,T,I);b.onBeforeShadow(n,b,R,_,O,P,null),n.renderBufferDirect(_,null,O,P,b,null),b.onAfterShadow(n,b,R,_,O,P,null)}}let U=b.children;for(let O=0,L=U.length;O<L;O++)y(U[O],R,_,T,I)}function w(b){b.target.removeEventListener("dispose",w);for(let _ in c){let T=c[_],I=b.target.uuid;I in T&&(T[I].dispose(),delete T[I])}}}function Sy(n,t){function e(){let B=!1,vt=new De,it=null,Mt=new De(0,0,0,0);return{setMask:function(Et){it!==Et&&!B&&(n.colorMask(Et,Et,Et,Et),it=Et)},setLocked:function(Et){B=Et},setClear:function(Et,lt,Dt,Ft,Pe){Pe===!0&&(Et*=Ft,lt*=Ft,Dt*=Ft),vt.set(Et,lt,Dt,Ft),Mt.equals(vt)===!1&&(n.clearColor(Et,lt,Dt,Ft),Mt.copy(vt))},reset:function(){B=!1,it=null,Mt.set(-1,0,0,0)}}}function i(){let B=!1,vt=!1,it=null,Mt=null,Et=null;return{setReversed:function(lt){if(vt!==lt){let Dt=t.get("EXT_clip_control");lt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),vt=lt;let Ft=Et;Et=null,this.setClear(Ft)}},getReversed:function(){return vt},setTest:function(lt){lt?rt(n.DEPTH_TEST):Rt(n.DEPTH_TEST)},setMask:function(lt){it!==lt&&!B&&(n.depthMask(lt),it=lt)},setFunc:function(lt){if(vt&&(lt=Bd[lt]),Mt!==lt){switch(lt){case ko:n.depthFunc(n.NEVER);break;case Ho:n.depthFunc(n.ALWAYS);break;case Vo:n.depthFunc(n.LESS);break;case Ar:n.depthFunc(n.LEQUAL);break;case Go:n.depthFunc(n.EQUAL);break;case Wo:n.depthFunc(n.GEQUAL);break;case Xo:n.depthFunc(n.GREATER);break;case qo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Mt=lt}},setLocked:function(lt){B=lt},setClear:function(lt){Et!==lt&&(Et=lt,vt&&(lt=1-lt),n.clearDepth(lt))},reset:function(){B=!1,it=null,Mt=null,Et=null,vt=!1}}}function s(){let B=!1,vt=null,it=null,Mt=null,Et=null,lt=null,Dt=null,Ft=null,Pe=null;return{setTest:function(Me){B||(Me?rt(n.STENCIL_TEST):Rt(n.STENCIL_TEST))},setMask:function(Me){vt!==Me&&!B&&(n.stencilMask(Me),vt=Me)},setFunc:function(Me,We,En){(it!==Me||Mt!==We||Et!==En)&&(n.stencilFunc(Me,We,En),it=Me,Mt=We,Et=En)},setOp:function(Me,We,En){(lt!==Me||Dt!==We||Ft!==En)&&(n.stencilOp(Me,We,En),lt=Me,Dt=We,Ft=En)},setLocked:function(Me){B=Me},setClear:function(Me){Pe!==Me&&(n.clearStencil(Me),Pe=Me)},reset:function(){B=!1,vt=null,it=null,Mt=null,Et=null,lt=null,Dt=null,Ft=null,Pe=null}}}let r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,g=[],v=null,m=!1,p=null,S=null,E=null,y=null,w=null,b=null,R=null,_=new Qt(0,0,0),T=0,I=!1,N=null,U=null,O=null,L=null,P=null,G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,et=0,$=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec($)[1]),X=et>=1):$.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),X=et>=2);let nt=null,K={},St=n.getParameter(n.SCISSOR_BOX),xt=n.getParameter(n.VIEWPORT),ne=new De().fromArray(St),Ht=new De().fromArray(xt);function ft(B,vt,it,Mt){let Et=new Uint8Array(4),lt=n.createTexture();n.bindTexture(B,lt),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Dt=0;Dt<it;Dt++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(vt,0,n.RGBA,1,1,Mt,0,n.RGBA,n.UNSIGNED_BYTE,Et):n.texImage2D(vt+Dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Et);return lt}let Q={};Q[n.TEXTURE_2D]=ft(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=ft(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=ft(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=ft(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(n.DEPTH_TEST),a.setFunc(Ar),Jt(!1),Re(Ch),rt(n.CULL_FACE),ae(Ui);function rt(B){h[B]!==!0&&(n.enable(B),h[B]=!0)}function Rt(B){h[B]!==!1&&(n.disable(B),h[B]=!1)}function Vt(B,vt){return u[B]!==vt?(n.bindFramebuffer(B,vt),u[B]=vt,B===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=vt),B===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=vt),!0):!1}function Ct(B,vt){let it=g,Mt=!1;if(B){it=d.get(vt),it===void 0&&(it=[],d.set(vt,it));let Et=B.textures;if(it.length!==Et.length||it[0]!==n.COLOR_ATTACHMENT0){for(let lt=0,Dt=Et.length;lt<Dt;lt++)it[lt]=n.COLOR_ATTACHMENT0+lt;it.length=Et.length,Mt=!0}}else it[0]!==n.BACK&&(it[0]=n.BACK,Mt=!0);Mt&&n.drawBuffers(it)}function te(B){return v!==B?(n.useProgram(B),v=B,!0):!1}let Ye={[Qs]:n.FUNC_ADD,[rd]:n.FUNC_SUBTRACT,[ad]:n.FUNC_REVERSE_SUBTRACT};Ye[od]=n.MIN,Ye[ld]=n.MAX;let re={[cd]:n.ZERO,[hd]:n.ONE,[ud]:n.SRC_COLOR,[Nh]:n.SRC_ALPHA,[xd]:n.SRC_ALPHA_SATURATE,[md]:n.DST_COLOR,[dd]:n.DST_ALPHA,[fd]:n.ONE_MINUS_SRC_COLOR,[Dh]:n.ONE_MINUS_SRC_ALPHA,[gd]:n.ONE_MINUS_DST_COLOR,[pd]:n.ONE_MINUS_DST_ALPHA,[_d]:n.CONSTANT_COLOR,[vd]:n.ONE_MINUS_CONSTANT_COLOR,[yd]:n.CONSTANT_ALPHA,[Md]:n.ONE_MINUS_CONSTANT_ALPHA};function ae(B,vt,it,Mt,Et,lt,Dt,Ft,Pe,Me){if(B===Ui){m===!0&&(Rt(n.BLEND),m=!1);return}if(m===!1&&(rt(n.BLEND),m=!0),B!==sd){if(B!==p||Me!==I){if((S!==Qs||w!==Qs)&&(n.blendEquation(n.FUNC_ADD),S=Qs,w=Qs),Me)switch(B){case kr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ph:n.blendFunc(n.ONE,n.ONE);break;case Ih:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Lh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:qt("WebGLState: Invalid blending: ",B);break}else switch(B){case kr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ph:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ih:qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lh:qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qt("WebGLState: Invalid blending: ",B);break}E=null,y=null,b=null,R=null,_.set(0,0,0),T=0,p=B,I=Me}return}Et=Et||vt,lt=lt||it,Dt=Dt||Mt,(vt!==S||Et!==w)&&(n.blendEquationSeparate(Ye[vt],Ye[Et]),S=vt,w=Et),(it!==E||Mt!==y||lt!==b||Dt!==R)&&(n.blendFuncSeparate(re[it],re[Mt],re[lt],re[Dt]),E=it,y=Mt,b=lt,R=Dt),(Ft.equals(_)===!1||Pe!==T)&&(n.blendColor(Ft.r,Ft.g,Ft.b,Pe),_.copy(Ft),T=Pe),p=B,I=!1}function ye(B,vt){B.side===qn?Rt(n.CULL_FACE):rt(n.CULL_FACE);let it=B.side===pn;vt&&(it=!it),Jt(it),B.blending===kr&&B.transparent===!1?ae(Ui):ae(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let Mt=B.stencilWrite;o.setTest(Mt),Mt&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),He(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?rt(n.SAMPLE_ALPHA_TO_COVERAGE):Rt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(B){N!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),N=B)}function Re(B){B!==ed?(rt(n.CULL_FACE),B!==U&&(B===Ch?n.cullFace(n.BACK):B===nd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Rt(n.CULL_FACE),U=B}function $e(B){B!==O&&(X&&n.lineWidth(B),O=B)}function He(B,vt,it){B?(rt(n.POLYGON_OFFSET_FILL),(L!==vt||P!==it)&&(L=vt,P=it,a.getReversed()&&(vt=-vt),n.polygonOffset(vt,it))):Rt(n.POLYGON_OFFSET_FILL)}function xe(B){B?rt(n.SCISSOR_TEST):Rt(n.SCISSOR_TEST)}function Ue(B){B===void 0&&(B=n.TEXTURE0+G-1),nt!==B&&(n.activeTexture(B),nt=B)}function z(B,vt,it){it===void 0&&(nt===null?it=n.TEXTURE0+G-1:it=nt);let Mt=K[it];Mt===void 0&&(Mt={type:void 0,texture:void 0},K[it]=Mt),(Mt.type!==B||Mt.texture!==vt)&&(nt!==it&&(n.activeTexture(it),nt=it),n.bindTexture(B,vt||Q[B]),Mt.type=B,Mt.texture=vt)}function un(){let B=K[nt];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function fe(){try{n.compressedTexImage2D(...arguments)}catch(B){qt("WebGLState:",B)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(B){qt("WebGLState:",B)}}function x(){try{n.texSubImage2D(...arguments)}catch(B){qt("WebGLState:",B)}}function D(){try{n.texSubImage3D(...arguments)}catch(B){qt("WebGLState:",B)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(B){qt("WebGLState:",B)}}function tt(){try{n.compressedTexSubImage3D(...arguments)}catch(B){qt("WebGLState:",B)}}function dt(){try{n.texStorage2D(...arguments)}catch(B){qt("WebGLState:",B)}}function _t(){try{n.texStorage3D(...arguments)}catch(B){qt("WebGLState:",B)}}function j(){try{n.texImage2D(...arguments)}catch(B){qt("WebGLState:",B)}}function st(){try{n.texImage3D(...arguments)}catch(B){qt("WebGLState:",B)}}function W(B){return f[B]!==void 0?f[B]:n.getParameter(B)}function zt(B,vt){f[B]!==vt&&(n.pixelStorei(B,vt),f[B]=vt)}function pt(B){ne.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),ne.copy(B))}function gt(B){Ht.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),Ht.copy(B))}function Ot(B,vt){let it=c.get(vt);it===void 0&&(it=new WeakMap,c.set(vt,it));let Mt=it.get(B);Mt===void 0&&(Mt=n.getUniformBlockIndex(vt,B.name),it.set(B,Mt))}function kt(B,vt){let Mt=c.get(vt).get(B);l.get(vt)!==Mt&&(n.uniformBlockBinding(vt,Mt,B.__bindingPointIndex),l.set(vt,Mt))}function $t(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},nt=null,K={},u={},d=new WeakMap,g=[],v=null,m=!1,p=null,S=null,E=null,y=null,w=null,b=null,R=null,_=new Qt(0,0,0),T=0,I=!1,N=null,U=null,O=null,L=null,P=null,ne.set(0,0,n.canvas.width,n.canvas.height),Ht.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:Rt,bindFramebuffer:Vt,drawBuffers:Ct,useProgram:te,setBlending:ae,setMaterial:ye,setFlipSided:Jt,setCullFace:Re,setLineWidth:$e,setPolygonOffset:He,setScissorTest:xe,activeTexture:Ue,bindTexture:z,unbindTexture:un,compressedTexImage2D:fe,compressedTexImage3D:C,texImage2D:j,texImage3D:st,pixelStorei:zt,getParameter:W,updateUBOMapping:Ot,uniformBlockBinding:kt,texStorage2D:dt,texStorage3D:_t,texSubImage2D:x,texSubImage3D:D,compressedTexSubImage2D:Z,compressedTexSubImage3D:tt,scissor:pt,viewport:gt,reset:$t}}function by(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xt,h=new WeakMap,f=new Set,u,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,x){return g?new OffscreenCanvas(C,x):ya("canvas")}function m(C,x,D){let Z=1,tt=fe(C);if((tt.width>D||tt.height>D)&&(Z=D/Math.max(tt.width,tt.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let dt=Math.floor(Z*tt.width),_t=Math.floor(Z*tt.height);u===void 0&&(u=v(dt,_t));let j=x?v(dt,_t):u;return j.width=dt,j.height=_t,j.getContext("2d").drawImage(C,0,0,dt,_t),Wt("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+dt+"x"+_t+")."),j}else return"data"in C&&Wt("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),C;return C}function p(C){return C.generateMipmaps}function S(C){n.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(C,x,D,Z,tt,dt=!1){if(C!==null){if(n[C]!==void 0)return n[C];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let _t;Z&&(_t=t.get("EXT_texture_norm16"),_t||Wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=x;if(x===n.RED&&(D===n.FLOAT&&(j=n.R32F),D===n.HALF_FLOAT&&(j=n.R16F),D===n.UNSIGNED_BYTE&&(j=n.R8),D===n.UNSIGNED_SHORT&&_t&&(j=_t.R16_EXT),D===n.SHORT&&_t&&(j=_t.R16_SNORM_EXT)),x===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(j=n.R8UI),D===n.UNSIGNED_SHORT&&(j=n.R16UI),D===n.UNSIGNED_INT&&(j=n.R32UI),D===n.BYTE&&(j=n.R8I),D===n.SHORT&&(j=n.R16I),D===n.INT&&(j=n.R32I)),x===n.RG&&(D===n.FLOAT&&(j=n.RG32F),D===n.HALF_FLOAT&&(j=n.RG16F),D===n.UNSIGNED_BYTE&&(j=n.RG8),D===n.UNSIGNED_SHORT&&_t&&(j=_t.RG16_EXT),D===n.SHORT&&_t&&(j=_t.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(j=n.RG8UI),D===n.UNSIGNED_SHORT&&(j=n.RG16UI),D===n.UNSIGNED_INT&&(j=n.RG32UI),D===n.BYTE&&(j=n.RG8I),D===n.SHORT&&(j=n.RG16I),D===n.INT&&(j=n.RG32I)),x===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(j=n.RGB8UI),D===n.UNSIGNED_SHORT&&(j=n.RGB16UI),D===n.UNSIGNED_INT&&(j=n.RGB32UI),D===n.BYTE&&(j=n.RGB8I),D===n.SHORT&&(j=n.RGB16I),D===n.INT&&(j=n.RGB32I)),x===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),D===n.UNSIGNED_INT&&(j=n.RGBA32UI),D===n.BYTE&&(j=n.RGBA8I),D===n.SHORT&&(j=n.RGBA16I),D===n.INT&&(j=n.RGBA32I)),x===n.RGB&&(D===n.UNSIGNED_SHORT&&_t&&(j=_t.RGB16_EXT),D===n.SHORT&&_t&&(j=_t.RGB16_SNORM_EXT),D===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),D===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),x===n.RGBA){let st=dt?va:pe.getTransfer(tt);D===n.FLOAT&&(j=n.RGBA32F),D===n.HALF_FLOAT&&(j=n.RGBA16F),D===n.UNSIGNED_BYTE&&(j=st===Te?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT&&_t&&(j=_t.RGBA16_EXT),D===n.SHORT&&_t&&(j=_t.RGBA16_SNORM_EXT),D===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function w(C,x){let D;return C?x===null||x===vi||x===Vr?D=n.DEPTH24_STENCIL8:x===yi?D=n.DEPTH32F_STENCIL8:x===Hr&&(D=n.DEPTH24_STENCIL8,Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===vi||x===Vr?D=n.DEPTH_COMPONENT24:x===yi?D=n.DEPTH_COMPONENT32F:x===Hr&&(D=n.DEPTH_COMPONENT16),D}function b(C,x){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==cn&&C.minFilter!==je?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function R(C){let x=C.target;x.removeEventListener("dispose",R),T(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&f.delete(x)}function _(C){let x=C.target;x.removeEventListener("dispose",_),N(x)}function T(C){let x=i.get(C);if(x.__webglInit===void 0)return;let D=C.source,Z=d.get(D);if(Z){let tt=Z[x.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&I(C),Object.keys(Z).length===0&&d.delete(D)}i.remove(C)}function I(C){let x=i.get(C);n.deleteTexture(x.__webglTexture);let D=C.source,Z=d.get(D);delete Z[x.__cacheKey],a.memory.textures--}function N(C){let x=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let tt=0;tt<x.__webglFramebuffer[Z].length;tt++)n.deleteFramebuffer(x.__webglFramebuffer[Z][tt]);else n.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)n.deleteFramebuffer(x.__webglFramebuffer[Z]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let D=C.textures;for(let Z=0,tt=D.length;Z<tt;Z++){let dt=i.get(D[Z]);dt.__webglTexture&&(n.deleteTexture(dt.__webglTexture),a.memory.textures--),i.remove(D[Z])}i.remove(C)}let U=0;function O(){U=0}function L(){return U}function P(C){U=C}function G(){let C=U;return C>=s.maxTextures&&Wt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,C}function X(C){let x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function et(C,x){let D=i.get(C);if(C.isVideoTexture&&z(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&D.__version!==C.version){let Z=C.image;if(Z===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(D,C,x);return}}else C.isExternalTexture&&(D.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+x)}function $(C,x){let D=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&D.__version!==C.version){Rt(D,C,x);return}else C.isExternalTexture&&(D.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+x)}function nt(C,x){let D=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&D.__version!==C.version){Rt(D,C,x);return}e.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+x)}function K(C,x){let D=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&D.__version!==C.version){Vt(D,C,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+x)}let St={[Qi]:n.REPEAT,[Cn]:n.CLAMP_TO_EDGE,[Yo]:n.MIRRORED_REPEAT},xt={[cn]:n.NEAREST,[wd]:n.NEAREST_MIPMAP_NEAREST,[Fa]:n.NEAREST_MIPMAP_LINEAR,[je]:n.LINEAR,[_l]:n.LINEAR_MIPMAP_NEAREST,[ri]:n.LINEAR_MIPMAP_LINEAR},ne={[Rd]:n.NEVER,[Nd]:n.ALWAYS,[Cd]:n.LESS,[nc]:n.LEQUAL,[Pd]:n.EQUAL,[ic]:n.GEQUAL,[Id]:n.GREATER,[Ld]:n.NOTEQUAL};function Ht(C,x){if(x.type===yi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===je||x.magFilter===_l||x.magFilter===Fa||x.magFilter===ri||x.minFilter===je||x.minFilter===_l||x.minFilter===Fa||x.minFilter===ri)&&Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,St[x.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,St[x.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,St[x.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,xt[x.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,xt[x.minFilter]),x.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,ne[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===cn||x.minFilter!==Fa&&x.minFilter!==ri||x.type===yi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let D=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ft(C,x){let D=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",R));let Z=x.source,tt=d.get(Z);tt===void 0&&(tt={},d.set(Z,tt));let dt=X(x);if(dt!==C.__cacheKey){tt[dt]===void 0&&(tt[dt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,D=!0),tt[dt].usedTimes++;let _t=tt[C.__cacheKey];_t!==void 0&&(tt[C.__cacheKey].usedTimes--,_t.usedTimes===0&&I(x)),C.__cacheKey=dt,C.__webglTexture=tt[dt].texture}return D}function Q(C,x,D){return Math.floor(Math.floor(C/D)/x)}function rt(C,x,D,Z){let dt=C.updateRanges;if(dt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,D,Z,x.data);else{dt.sort((zt,pt)=>zt.start-pt.start);let _t=0;for(let zt=1;zt<dt.length;zt++){let pt=dt[_t],gt=dt[zt],Ot=pt.start+pt.count,kt=Q(gt.start,x.width,4),$t=Q(pt.start,x.width,4);gt.start<=Ot+1&&kt===$t&&Q(gt.start+gt.count-1,x.width,4)===kt?pt.count=Math.max(pt.count,gt.start+gt.count-pt.start):(++_t,dt[_t]=gt)}dt.length=_t+1;let j=e.getParameter(n.UNPACK_ROW_LENGTH),st=e.getParameter(n.UNPACK_SKIP_PIXELS),W=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let zt=0,pt=dt.length;zt<pt;zt++){let gt=dt[zt],Ot=Math.floor(gt.start/4),kt=Math.ceil(gt.count/4),$t=Ot%x.width,B=Math.floor(Ot/x.width),vt=kt,it=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,$t),e.pixelStorei(n.UNPACK_SKIP_ROWS,B),e.texSubImage2D(n.TEXTURE_2D,0,$t,B,vt,it,D,Z,x.data)}C.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,j),e.pixelStorei(n.UNPACK_SKIP_PIXELS,st),e.pixelStorei(n.UNPACK_SKIP_ROWS,W)}}function Rt(C,x,D){let Z=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=n.TEXTURE_3D);let tt=ft(C,x),dt=x.source;e.bindTexture(Z,C.__webglTexture,n.TEXTURE0+D);let _t=i.get(dt);if(dt.version!==_t.__version||tt===!0){if(e.activeTexture(n.TEXTURE0+D),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let it=pe.getPrimaries(pe.workingColorSpace),Mt=x.colorSpace===Yn?null:pe.getPrimaries(x.colorSpace),Et=x.colorSpace===Yn||it===Mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let st=m(x.image,!1,s.maxTextureSize);st=un(x,st);let W=r.convert(x.format,x.colorSpace),zt=r.convert(x.type),pt=y(x.internalFormat,W,zt,x.normalized,x.colorSpace,x.isVideoTexture);Ht(Z,x);let gt,Ot=x.mipmaps,kt=x.isVideoTexture!==!0,$t=_t.__version===void 0||tt===!0,B=dt.dataReady,vt=b(x,st);if(x.isDepthTexture)pt=w(x.format===Ds,x.type),$t&&(kt?e.texStorage2D(n.TEXTURE_2D,1,pt,st.width,st.height):e.texImage2D(n.TEXTURE_2D,0,pt,st.width,st.height,0,W,zt,null));else if(x.isDataTexture)if(Ot.length>0){kt&&$t&&e.texStorage2D(n.TEXTURE_2D,vt,pt,Ot[0].width,Ot[0].height);for(let it=0,Mt=Ot.length;it<Mt;it++)gt=Ot[it],kt?B&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,gt.width,gt.height,W,zt,gt.data):e.texImage2D(n.TEXTURE_2D,it,pt,gt.width,gt.height,0,W,zt,gt.data);x.generateMipmaps=!1}else kt?($t&&e.texStorage2D(n.TEXTURE_2D,vt,pt,st.width,st.height),B&&rt(x,st,W,zt)):e.texImage2D(n.TEXTURE_2D,0,pt,st.width,st.height,0,W,zt,st.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){kt&&$t&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,pt,Ot[0].width,Ot[0].height,st.depth);for(let it=0,Mt=Ot.length;it<Mt;it++)if(gt=Ot[it],x.format!==ai)if(W!==null)if(kt){if(B)if(x.layerUpdates.size>0){let Et=eu(gt.width,gt.height,x.format,x.type);for(let lt of x.layerUpdates){let Dt=gt.data.subarray(lt*Et/gt.data.BYTES_PER_ELEMENT,(lt+1)*Et/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,lt,gt.width,gt.height,1,W,Dt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,0,gt.width,gt.height,st.depth,W,gt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,it,pt,gt.width,gt.height,st.depth,0,gt.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?B&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,0,gt.width,gt.height,st.depth,W,zt,gt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,it,pt,gt.width,gt.height,st.depth,0,W,zt,gt.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{kt&&$t&&e.texStorage2D(n.TEXTURE_2D,vt,pt,Ot[0].width,Ot[0].height);for(let it=0,Mt=Ot.length;it<Mt;it++)gt=Ot[it],x.format!==ai?W!==null?kt?B&&e.compressedTexSubImage2D(n.TEXTURE_2D,it,0,0,gt.width,gt.height,W,gt.data):e.compressedTexImage2D(n.TEXTURE_2D,it,pt,gt.width,gt.height,0,gt.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?B&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,gt.width,gt.height,W,zt,gt.data):e.texImage2D(n.TEXTURE_2D,it,pt,gt.width,gt.height,0,W,zt,gt.data)}else if(x.isDataArrayTexture)if(kt){if($t&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,pt,st.width,st.height,st.depth),B)if(x.layerUpdates.size>0){let it=eu(st.width,st.height,x.format,x.type);for(let Mt of x.layerUpdates){let Et=st.data.subarray(Mt*it/st.data.BYTES_PER_ELEMENT,(Mt+1)*it/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Mt,st.width,st.height,1,W,zt,Et)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,W,zt,st.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,pt,st.width,st.height,st.depth,0,W,zt,st.data);else if(x.isData3DTexture)kt?($t&&e.texStorage3D(n.TEXTURE_3D,vt,pt,st.width,st.height,st.depth),B&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,W,zt,st.data)):e.texImage3D(n.TEXTURE_3D,0,pt,st.width,st.height,st.depth,0,W,zt,st.data);else if(x.isFramebufferTexture){if($t)if(kt)e.texStorage2D(n.TEXTURE_2D,vt,pt,st.width,st.height);else{let it=st.width,Mt=st.height;for(let Et=0;Et<vt;Et++)e.texImage2D(n.TEXTURE_2D,Et,pt,it,Mt,0,W,zt,null),it>>=1,Mt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){let it=n.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),st.parentNode!==it){it.appendChild(st),f.add(x),it.onpaint=Mt=>{let Et=Mt.changedElements;for(let lt of f)Et.includes(lt.image)&&(lt.needsUpdate=!0)},it.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,st);else{let Et=n.RGBA,lt=n.RGBA,Dt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Et,lt,Dt,st)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ot.length>0){if(kt&&$t){let it=fe(Ot[0]);e.texStorage2D(n.TEXTURE_2D,vt,pt,it.width,it.height)}for(let it=0,Mt=Ot.length;it<Mt;it++)gt=Ot[it],kt?B&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,W,zt,gt):e.texImage2D(n.TEXTURE_2D,it,pt,W,zt,gt);x.generateMipmaps=!1}else if(kt){if($t){let it=fe(st);e.texStorage2D(n.TEXTURE_2D,vt,pt,it.width,it.height)}B&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,W,zt,st)}else e.texImage2D(n.TEXTURE_2D,0,pt,W,zt,st);p(x)&&S(Z),_t.__version=dt.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Vt(C,x,D){if(x.image.length!==6)return;let Z=ft(C,x),tt=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+D);let dt=i.get(tt);if(tt.version!==dt.__version||Z===!0){e.activeTexture(n.TEXTURE0+D);let _t=pe.getPrimaries(pe.workingColorSpace),j=x.colorSpace===Yn?null:pe.getPrimaries(x.colorSpace),st=x.colorSpace===Yn||_t===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let W=x.isCompressedTexture||x.image[0].isCompressedTexture,zt=x.image[0]&&x.image[0].isDataTexture,pt=[];for(let lt=0;lt<6;lt++)!W&&!zt?pt[lt]=m(x.image[lt],!0,s.maxCubemapSize):pt[lt]=zt?x.image[lt].image:x.image[lt],pt[lt]=un(x,pt[lt]);let gt=pt[0],Ot=r.convert(x.format,x.colorSpace),kt=r.convert(x.type),$t=y(x.internalFormat,Ot,kt,x.normalized,x.colorSpace),B=x.isVideoTexture!==!0,vt=dt.__version===void 0||Z===!0,it=tt.dataReady,Mt=b(x,gt);Ht(n.TEXTURE_CUBE_MAP,x);let Et;if(W){B&&vt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,$t,gt.width,gt.height);for(let lt=0;lt<6;lt++){Et=pt[lt].mipmaps;for(let Dt=0;Dt<Et.length;Dt++){let Ft=Et[Dt];x.format!==ai?Ot!==null?B?it&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt,0,0,Ft.width,Ft.height,Ot,Ft.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt,$t,Ft.width,Ft.height,0,Ft.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt,0,0,Ft.width,Ft.height,Ot,kt,Ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt,$t,Ft.width,Ft.height,0,Ot,kt,Ft.data)}}}else{if(Et=x.mipmaps,B&&vt){Et.length>0&&Mt++;let lt=fe(pt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,$t,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(zt){B?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,pt[lt].width,pt[lt].height,Ot,kt,pt[lt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,$t,pt[lt].width,pt[lt].height,0,Ot,kt,pt[lt].data);for(let Dt=0;Dt<Et.length;Dt++){let Pe=Et[Dt].image[lt].image;B?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt+1,0,0,Pe.width,Pe.height,Ot,kt,Pe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt+1,$t,Pe.width,Pe.height,0,Ot,kt,Pe.data)}}else{B?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Ot,kt,pt[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,$t,Ot,kt,pt[lt]);for(let Dt=0;Dt<Et.length;Dt++){let Ft=Et[Dt];B?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt+1,0,0,Ot,kt,Ft.image[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt+1,$t,Ot,kt,Ft.image[lt])}}}p(x)&&S(n.TEXTURE_CUBE_MAP),dt.__version=tt.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Ct(C,x,D,Z,tt,dt){let _t=r.convert(D.format,D.colorSpace),j=r.convert(D.type),st=y(D.internalFormat,_t,j,D.normalized,D.colorSpace),W=i.get(x),zt=i.get(D);if(zt.__renderTarget=x,!W.__hasExternalTextures){let pt=Math.max(1,x.width>>dt),gt=Math.max(1,x.height>>dt);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,dt,st,pt,gt,x.depth,0,_t,j,null):e.texImage2D(tt,dt,st,pt,gt,0,_t,j,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),Ue(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,tt,zt.__webglTexture,0,xe(x)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,tt,zt.__webglTexture,dt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function te(C,x,D){if(n.bindRenderbuffer(n.RENDERBUFFER,C),x.depthBuffer){let Z=x.depthTexture,tt=Z&&Z.isDepthTexture?Z.type:null,dt=w(x.stencilBuffer,tt),_t=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ue(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe(x),dt,x.width,x.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe(x),dt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,dt,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_t,n.RENDERBUFFER,C)}else{let Z=x.textures;for(let tt=0;tt<Z.length;tt++){let dt=Z[tt],_t=r.convert(dt.format,dt.colorSpace),j=r.convert(dt.type),st=y(dt.internalFormat,_t,j,dt.normalized,dt.colorSpace);Ue(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe(x),st,x.width,x.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe(x),st,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,st,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ye(C,x,D){let Z=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=i.get(x.depthTexture);if(tt.__renderTarget=x,(!tt.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Z){if(tt.__webglInit===void 0&&(tt.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),tt.__webglTexture===void 0){tt.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture),Ht(n.TEXTURE_CUBE_MAP,x.depthTexture);let W=r.convert(x.depthTexture.format),zt=r.convert(x.depthTexture.type),pt;x.depthTexture.format===Ii?pt=n.DEPTH_COMPONENT24:x.depthTexture.format===Ds&&(pt=n.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,pt,x.width,x.height,0,W,zt,null)}}else et(x.depthTexture,0);let dt=tt.__webglTexture,_t=xe(x),j=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+D:n.TEXTURE_2D,st=x.depthTexture.format===Ds?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===Ii)Ue(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,st,j,dt,0,_t):n.framebufferTexture2D(n.FRAMEBUFFER,st,j,dt,0);else if(x.depthTexture.format===Ds)Ue(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,st,j,dt,0,_t):n.framebufferTexture2D(n.FRAMEBUFFER,st,j,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function re(C){let x=i.get(C),D=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){let Z=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){let tt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",tt)};Z.addEventListener("dispose",tt),x.__depthDisposeCallback=tt}x.__boundDepthTexture=Z}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(D)for(let Z=0;Z<6;Z++)Ye(x.__webglFramebuffer[Z],C,Z);else{let Z=C.texture.mipmaps;Z&&Z.length>0?Ye(x.__webglFramebuffer[0],C,0):Ye(x.__webglFramebuffer,C,0)}else if(D){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=n.createRenderbuffer(),te(x.__webglDepthbuffer[Z],C,!1);else{let tt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=x.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,dt),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,dt)}}else{let Z=C.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),te(x.__webglDepthbuffer,C,!1);else{let tt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,dt),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,dt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(C,x,D){let Z=i.get(C);x!==void 0&&Ct(Z.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&re(C)}function ye(C){let x=C.texture,D=i.get(C),Z=i.get(x);C.addEventListener("dispose",_);let tt=C.textures,dt=C.isWebGLCubeRenderTarget===!0,_t=tt.length>1;if(_t||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=x.version,a.memory.textures++),dt){D.__webglFramebuffer=[];for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer[j]=[];for(let st=0;st<x.mipmaps.length;st++)D.__webglFramebuffer[j][st]=n.createFramebuffer()}else D.__webglFramebuffer[j]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer=[];for(let j=0;j<x.mipmaps.length;j++)D.__webglFramebuffer[j]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(_t)for(let j=0,st=tt.length;j<st;j++){let W=i.get(tt[j]);W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&Ue(C)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let j=0;j<tt.length;j++){let st=tt[j];D.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[j]);let W=r.convert(st.format,st.colorSpace),zt=r.convert(st.type),pt=y(st.internalFormat,W,zt,st.normalized,st.colorSpace,C.isXRRenderTarget===!0),gt=xe(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,gt,pt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,D.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),te(D.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(dt){e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Ht(n.TEXTURE_CUBE_MAP,x);for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0)for(let st=0;st<x.mipmaps.length;st++)Ct(D.__webglFramebuffer[j][st],C,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,st);else Ct(D.__webglFramebuffer[j],C,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);p(x)&&S(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let j=0,st=tt.length;j<st;j++){let W=tt[j],zt=i.get(W),pt=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(pt,zt.__webglTexture),Ht(pt,W),Ct(D.__webglFramebuffer,C,W,n.COLOR_ATTACHMENT0+j,pt,0),p(W)&&S(pt)}e.unbindTexture()}else{let j=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(j=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(j,Z.__webglTexture),Ht(j,x),x.mipmaps&&x.mipmaps.length>0)for(let st=0;st<x.mipmaps.length;st++)Ct(D.__webglFramebuffer[st],C,x,n.COLOR_ATTACHMENT0,j,st);else Ct(D.__webglFramebuffer,C,x,n.COLOR_ATTACHMENT0,j,0);p(x)&&S(j),e.unbindTexture()}C.depthBuffer&&re(C)}function Jt(C){let x=C.textures;for(let D=0,Z=x.length;D<Z;D++){let tt=x[D];if(p(tt)){let dt=E(C),_t=i.get(tt).__webglTexture;e.bindTexture(dt,_t),S(dt),e.unbindTexture()}}}let Re=[],$e=[];function He(C){if(C.samples>0){if(Ue(C)===!1){let x=C.textures,D=C.width,Z=C.height,tt=n.COLOR_BUFFER_BIT,dt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=i.get(C),j=x.length>1;if(j)for(let W=0;W<x.length;W++)e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+W,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+W,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer);let st=C.texture.mipmaps;st&&st.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let W=0;W<x.length;W++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),j){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_t.__webglColorRenderbuffer[W]);let zt=i.get(x[W]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,zt,0)}n.blitFramebuffer(0,0,D,Z,0,0,D,Z,tt,n.NEAREST),l===!0&&(Re.length=0,$e.length=0,Re.push(n.COLOR_ATTACHMENT0+W),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(Re.push(dt),$e.push(dt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,$e)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Re))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),j)for(let W=0;W<x.length;W++){e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+W,n.RENDERBUFFER,_t.__webglColorRenderbuffer[W]);let zt=i.get(x[W]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+W,n.TEXTURE_2D,zt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let x=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function xe(C){return Math.min(s.maxSamples,C.samples)}function Ue(C){let x=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function z(C){let x=a.render.frame;h.get(C)!==x&&(h.set(C,x),C.update())}function un(C,x){let D=C.colorSpace,Z=C.format,tt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||D!==_a&&D!==Yn&&(pe.getTransfer(D)===Te?(Z!==ai||tt!==Bn)&&Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qt("WebGLTextures: Unsupported texture color space:",D)),x}function fe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=O,this.getTextureUnits=L,this.setTextureUnits=P,this.setTexture2D=et,this.setTexture2DArray=$,this.setTexture3D=nt,this.setTextureCube=K,this.rebindTextures=ae,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Ue,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function wy(n,t){function e(i,s=Yn){let r,a=pe.getTransfer(s);if(i===Bn)return n.UNSIGNED_BYTE;if(i===yl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ml)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Xh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===qh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Gh)return n.BYTE;if(i===Wh)return n.SHORT;if(i===Hr)return n.UNSIGNED_SHORT;if(i===vl)return n.INT;if(i===vi)return n.UNSIGNED_INT;if(i===yi)return n.FLOAT;if(i===In)return n.HALF_FLOAT;if(i===Yh)return n.ALPHA;if(i===$h)return n.RGB;if(i===ai)return n.RGBA;if(i===Ii)return n.DEPTH_COMPONENT;if(i===Ds)return n.DEPTH_STENCIL;if(i===er)return n.RED;if(i===Sl)return n.RED_INTEGER;if(i===Us)return n.RG;if(i===bl)return n.RG_INTEGER;if(i===wl)return n.RGBA_INTEGER;if(i===Oa||i===Ba||i===za||i===ka)if(a===Te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ba)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===za)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ka)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===El||i===Tl||i===Al||i===Rl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===El)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Al)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Rl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Cl||i===Pl||i===Il||i===Ll||i===Nl||i===Ha||i===Dl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Cl||i===Pl)return a===Te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Il)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ll)return r.COMPRESSED_R11_EAC;if(i===Nl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ha)return r.COMPRESSED_RG11_EAC;if(i===Dl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ul||i===Fl||i===Ol||i===Bl||i===zl||i===kl||i===Hl||i===Vl||i===Gl||i===Wl||i===Xl||i===ql||i===Yl||i===$l)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ul)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fl)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ol)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bl)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zl)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===kl)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Hl)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vl)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gl)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wl)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xl)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ql)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yl)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$l)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zl||i===Jl||i===Kl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Zl)return a===Te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Jl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jl||i===Ql||i===Va||i===tc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===jl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ql)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Va)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===tc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Vr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Ey=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ty=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,yu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Aa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Pn({vertexShader:Ey,fragmentShader:Ty,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _e(new Ts(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mu=class extends Li{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null,v=typeof XRWebGLBinding<"u",m=new yu,p={},S=e.getContextAttributes(),E=null,y=null,w=[],b=[],R=new Xt,_=null,T=null,I=new yn;I.viewport=new De;let N=new yn;N.viewport=new De;let U=[I,N],O=new pl,L=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let rt=w[Q];return rt===void 0&&(rt=new Nr,w[Q]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(Q){let rt=w[Q];return rt===void 0&&(rt=new Nr,w[Q]=rt),rt.getGripSpace()},this.getHand=function(Q){let rt=w[Q];return rt===void 0&&(rt=new Nr,w[Q]=rt),rt.getHandSpace()};function G(Q){let rt=b.indexOf(Q.inputSource);if(rt===-1)return;let Rt=w[rt];Rt!==void 0&&(Rt.update(Q.inputSource,Q.frame,c||a),Rt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function X(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",et);for(let Q=0;Q<w.length;Q++){let rt=b[Q];rt!==null&&(b[Q]=null,w[Q].disconnect(rt))}L=null,P=null,m.reset();for(let Q in p)delete p[Q];if(t.setRenderTarget(E),d=null,u=null,f=null,s=null,y=null,ft.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(R.width,R.height,!1),T!==null){let Q=T.camera;Q.fov=T.fov,Q.zoom=T.zoom,Q.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&Wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&Wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",X),s.addEventListener("inputsourceschange",et),S.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,Vt=null,Ct=null;S.depth&&(Ct=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Rt=S.stencil?Ds:Ii,Vt=S.stencil?Vr:vi);let te={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(te),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Fn(u.textureWidth,u.textureHeight,{format:ai,type:Bn,depthTexture:new Es(u.textureWidth,u.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Rt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Rt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Fn(d.framebufferWidth,d.framebufferHeight,{format:ai,type:Bn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ft.setContext(s),ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function et(Q){for(let rt=0;rt<Q.removed.length;rt++){let Rt=Q.removed[rt],Vt=b.indexOf(Rt);Vt>=0&&(b[Vt]=null,w[Vt].disconnect(Rt))}for(let rt=0;rt<Q.added.length;rt++){let Rt=Q.added[rt],Vt=b.indexOf(Rt);if(Vt===-1){for(let te=0;te<w.length;te++)if(te>=b.length){b.push(Rt),Vt=te;break}else if(b[te]===null){b[te]=Rt,Vt=te;break}if(Vt===-1)break}let Ct=w[Vt];Ct&&Ct.connect(Rt)}}let $=new V,nt=new V;function K(Q,rt,Rt){$.setFromMatrixPosition(rt.matrixWorld),nt.setFromMatrixPosition(Rt.matrixWorld);let Vt=$.distanceTo(nt),Ct=rt.projectionMatrix.elements,te=Rt.projectionMatrix.elements,Ye=Ct[14]/(Ct[10]-1),re=Ct[14]/(Ct[10]+1),ae=(Ct[9]+1)/Ct[5],ye=(Ct[9]-1)/Ct[5],Jt=(Ct[8]-1)/Ct[0],Re=(te[8]+1)/te[0],$e=Ye*Jt,He=Ye*Re,xe=Vt/(-Jt+Re),Ue=xe*-Jt;if(rt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ue),Q.translateZ(xe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ct[10]===-1)Q.projectionMatrix.copy(rt.projectionMatrix),Q.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let z=Ye+xe,un=re+xe,fe=$e-Ue,C=He+(Vt-Ue),x=ae*re/un*z,D=ye*re/un*z;Q.projectionMatrix.makePerspective(fe,C,x,D,z,un),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function St(Q,rt){rt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(rt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let rt=Q.near,Rt=Q.far;m.texture!==null&&(m.depthNear>0&&(rt=m.depthNear),m.depthFar>0&&(Rt=m.depthFar)),O.near=N.near=I.near=rt,O.far=N.far=I.far=Rt,(L!==O.near||P!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),L=O.near,P=O.far),O.layers.mask=Q.layers.mask|6,I.layers.mask=O.layers.mask&-5,N.layers.mask=O.layers.mask&-3;let Vt=Q.parent,Ct=O.cameras;St(O,Vt);for(let te=0;te<Ct.length;te++)St(Ct[te],Vt);Ct.length===2?K(O,I,N):O.projectionMatrix.copy(I.projectionMatrix),T===null&&Q.isPerspectiveCamera&&(T={camera:Q,fov:Q.fov,zoom:Q.zoom}),xt(Q,O,Vt)};function xt(Q,rt,Rt){Rt===null?Q.matrix.copy(rt.matrixWorld):(Q.matrix.copy(Rt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(rt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(rt.projectionMatrix),Q.projectionMatrixInverse.copy(rt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Pr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Q){l=Q,u!==null&&(u.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Q){return p[Q]};let ne=null;function Ht(Q,rt){if(h=rt.getViewerPose(c||a),g=rt,h!==null){let Rt=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let Vt=!1;Rt.length!==O.cameras.length&&(O.cameras.length=0,Vt=!0);for(let re=0;re<Rt.length;re++){let ae=Rt[re],ye=null;if(d!==null)ye=d.getViewport(ae);else{let Re=f.getViewSubImage(u,ae);ye=Re.viewport,re===0&&(t.setRenderTargetTextures(y,Re.colorTexture,Re.depthStencilTexture),t.setRenderTarget(y))}let Jt=U[re];Jt===void 0&&(Jt=new yn,Jt.layers.enable(re),Jt.viewport=new De,U[re]=Jt),Jt.matrix.fromArray(ae.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(ae.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(ye.x,ye.y,ye.width,ye.height),re===0&&(O.matrix.copy(Jt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Vt===!0&&O.cameras.push(Jt)}let Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=i.getBinding();let re=f.getDepthInformation(Rt[0]);re&&re.isValid&&re.texture&&m.init(re,s.renderState)}if(Ct&&Ct.includes("camera-access")&&v){t.state.unbindTexture(),f=i.getBinding();for(let re=0;re<Rt.length;re++){let ae=Rt[re].camera;if(ae){let ye=p[ae];ye||(ye=new Aa,p[ae]=ye);let Jt=f.getCameraImage(ae);ye.sourceTexture=Jt}}}}for(let Rt=0;Rt<w.length;Rt++){let Vt=b[Rt],Ct=w[Rt];Vt!==null&&Ct!==void 0&&Ct.update(Vt,rt,c||a)}ne&&ne(Q,rt),rt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:rt}),g=null}let ft=new hp;ft.setAnimationLoop(Ht),this.setAnimationLoop=function(Q){ne=Q},this.dispose=function(){}}},Ay=new Fe,gp=new Zt;gp.set(-1,0,0,0,1,0,0,0,1);function Ry(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,jh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,E,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===pn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===pn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=t.get(p),E=S.envMap,y=S.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(Ay.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(gp),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===pn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Cy(n,t,e,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,w){let b=w.program;i.uniformBlockBinding(y,b)}function c(y,w){let b=s[y.id];b===void 0&&(m(y),b=h(y),s[y.id]=b,y.addEventListener("dispose",S));let R=w.program;i.updateUBOMapping(y,R);let _=t.render.frame;r[y.id]!==_&&(u(y),r[y.id]=_)}function h(y){let w=f();y.__bindingPointIndex=w;let b=n.createBuffer(),R=y.__size,_=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,R,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,b),b}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let w=s[y.id],b=y.uniforms,R=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let _=0,T=b.length;_<T;_++){let I=b[_];if(Array.isArray(I))for(let N=0,U=I.length;N<U;N++)d(I[N],_,N,R);else d(I,_,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,w,b,R){if(v(y,w,b,R)===!0){let _=y.__offset,T=y.value;if(Array.isArray(T)){let I=0;for(let N=0;N<T.length;N++){let U=T[N],O=p(U);g(U,y.__data,I),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(I+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,y.__data)}}function g(y,w,b){typeof y=="number"||typeof y=="boolean"?w[0]=y:y.isMatrix3?(w[0]=y.elements[0],w[1]=y.elements[1],w[2]=y.elements[2],w[3]=0,w[4]=y.elements[3],w[5]=y.elements[4],w[6]=y.elements[5],w[7]=0,w[8]=y.elements[6],w[9]=y.elements[7],w[10]=y.elements[8],w[11]=0):ArrayBuffer.isView(y)?w.set(new y.constructor(y.buffer,y.byteOffset,w.length)):y.toArray(w,b)}function v(y,w,b,R){let _=y.value,T=w+"_"+b;if(R[T]===void 0)return typeof _=="number"||typeof _=="boolean"?R[T]=_:ArrayBuffer.isView(_)?R[T]=_.slice():R[T]=_.clone(),!0;{let I=R[T];if(typeof _=="number"||typeof _=="boolean"){if(I!==_)return R[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(I.equals(_)===!1)return I.copy(_),!0}}return!1}function m(y){let w=y.uniforms,b=0,R=16;for(let T=0,I=w.length;T<I;T++){let N=Array.isArray(w[T])?w[T]:[w[T]];for(let U=0,O=N.length;U<O;U++){let L=N[U],P=Array.isArray(L.value)?L.value:[L.value];for(let G=0,X=P.length;G<X;G++){let et=P[G],$=p(et),nt=b%R,K=nt%$.boundary,St=nt+K;b+=K,St!==0&&R-St<$.storage&&(b+=R-St),L.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=$.storage}}}let _=b%R;return _>0&&(b+=R-_),y.__size=b,y.__cache={},this}function p(y){let w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):Wt("WebGLRenderer: Unsupported uniform value type.",y),w}function S(y){let w=y.target;w.removeEventListener("dispose",S);let b=a.indexOf(w.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function E(){for(let y in s)n.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:E}}var Py=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Fi=null;function Iy(){return Fi===null&&(Fi=new bs(Py,16,16,Us,In),Fi.name="DFG_LUT",Fi.minFilter=je,Fi.magFilter=je,Fi.wrapS=Cn,Fi.wrapT=Cn,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}var oc=class{constructor(t={}){let{canvas:e=Ud(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Bn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let v=d,m=new Set([wl,bl,Sl]),p=new Set([Bn,vi,Hr,Vr,yl,Ml]),S=new Uint32Array(4),E=new Int32Array(4),y=new V,w=null,b=null,R=[],_=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,N=!1,U=null,O=null,L=null,P=null;this._outputColorSpace=en;let G=0,X=0,et=null,$=-1,nt=null,K=new De,St=new De,xt=null,ne=new Qt(0),Ht=0,ft=e.width,Q=e.height,rt=1,Rt=null,Vt=null,Ct=new De(0,0,ft,Q),te=new De(0,0,ft,Q),Ye=!1,re=new Fr,ae=!1,ye=!1,Jt=new Fe,Re=new V,$e=new De,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xe=!1;function Ue(){return et===null?rt:1}let z=i;function un(M,F){return e.getContext(M,F)}let fe,C,x,D,Z,tt,dt,_t,j,st,W,zt,pt,gt,Ot,kt,$t,B,vt,it,Mt,Et,lt;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Pe,!1),e.addEventListener("webglcontextrestored",Me,!1),e.addEventListener("webglcontextcreationerror",We,!1),z===null){let F="webgl2";if(z=un(F,M),z===null)throw un(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Dt()}catch(M){throw e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",We,!1),qt("WebGLRenderer: "+M.message),M}function Dt(){fe=new B_(z),fe.init(),Mt=new wy(z,fe),C=new R_(z,fe,t,Mt),x=new Sy(z,fe),C.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),O=z.createFramebuffer(),L=z.createFramebuffer(),P=z.createFramebuffer(),D=new H_(z),Z=new ly,tt=new by(z,fe,x,Z,C,Mt,D),dt=new O_(I),_t=new G0(z),Et=new T_(z,_t),j=new z_(z,_t,D,Et),st=new G_(z,j,_t,Et,D),B=new V_(z,C,tt),Ot=new C_(Z),W=new oy(I,dt,fe,C,Et,Ot),zt=new Ry(I,Z),pt=new hy,gt=new gy(fe),$t=new E_(I,dt,x,st,g,l),kt=new My(I,st,C),lt=new Cy(z,D,C,x),vt=new A_(z,fe,D),it=new k_(z,fe,D),D.programs=W.programs,I.capabilities=C,I.extensions=fe,I.properties=Z,I.renderLists=pt,I.shadowMap=kt,I.state=x,I.info=D}v!==Bn&&(T=new X_(v,e.width,e.height,o,s,r));let Ft=new Mu(I,z);this.xr=Ft,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let M=fe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=fe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return rt},this.setPixelRatio=function(M){M!==void 0&&(rt=M,this.setSize(ft,Q,!1))},this.getSize=function(M){return M.set(ft,Q)},this.setSize=function(M,F,H=!0){if(Ft.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}ft=M,Q=F,e.width=Math.floor(M*rt),e.height=Math.floor(F*rt),H===!0&&(e.style.width=M+"px",e.style.height=F+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(ft*rt,Q*rt).floor()},this.setDrawingBufferSize=function(M,F,H){ft=M,Q=F,rt=H,e.width=Math.floor(M*H),e.height=Math.floor(F*H),this.setViewport(0,0,M,F)},this.setEffects=function(M){if(v===Bn){qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let F=0;F<M.length;F++)if(M[F].isOutputPass===!0){Wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(K)},this.getViewport=function(M){return M.copy(Ct)},this.setViewport=function(M,F,H,q){M.isVector4?Ct.set(M.x,M.y,M.z,M.w):Ct.set(M,F,H,q),x.viewport(K.copy(Ct).multiplyScalar(rt).round())},this.getScissor=function(M){return M.copy(te)},this.setScissor=function(M,F,H,q){M.isVector4?te.set(M.x,M.y,M.z,M.w):te.set(M,F,H,q),x.scissor(St.copy(te).multiplyScalar(rt).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(M){x.setScissorTest(Ye=M)},this.setOpaqueSort=function(M){Rt=M},this.setTransparentSort=function(M){Vt=M},this.getClearColor=function(M){return M.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor(...arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,H=!0){let q=0;if(M){let Y=!1;if(et!==null){let wt=et.texture.format;Y=m.has(wt)}if(Y){let wt=et.texture.type,Pt=p.has(wt),yt=$t.getClearColor(),Ut=$t.getClearAlpha(),Nt=yt.r,Kt=yt.g,jt=yt.b;Pt?(S[0]=Nt,S[1]=Kt,S[2]=jt,S[3]=Ut,z.clearBufferuiv(z.COLOR,0,S)):(E[0]=Nt,E[1]=Kt,E[2]=jt,E[3]=Ut,z.clearBufferiv(z.COLOR,0,E))}else q|=z.COLOR_BUFFER_BIT}F&&(q|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&z.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),U=M},this.dispose=function(){e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",We,!1),$t.dispose(),pt.dispose(),gt.dispose(),Z.dispose(),dt.dispose(),st.dispose(),Et.dispose(),lt.dispose(),W.dispose(),Ft.dispose(),Ft.removeEventListener("sessionstart",hr),Ft.removeEventListener("sessionend",ls),Kn.stop()};function Pe(M){M.preventDefault(),Jh("WebGLRenderer: Context Lost."),N=!0}function Me(){Jh("WebGLRenderer: Context Restored."),N=!1;let M=D.autoReset,F=kt.enabled,H=kt.autoUpdate,q=kt.needsUpdate,Y=kt.type;Dt(),D.autoReset=M,kt.enabled=F,kt.autoUpdate=H,kt.needsUpdate=q,kt.type=Y}function We(M){qt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function En(M){let F=M.target;F.removeEventListener("dispose",En),mo(F)}function mo(M){Gc(M),Z.remove(M)}function Gc(M){let F=Z.get(M).programs;F!==void 0&&(F.forEach(function(H){W.releaseProgram(H)}),M.isShaderMaterial&&W.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,H,q,Y,wt){F===null&&(F=He);let Pt=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,yt=Xc(M,F,H,q,Y);x.setMaterial(q,Pt);let Ut=H.index,Nt=1;if(q.wireframe===!0){if(Ut=j.getWireframeAttribute(H),Ut===void 0)return;Nt=2}let Kt=H.drawRange,jt=H.attributes.position,It=Kt.start*Nt,Ee=(Kt.start+Kt.count)*Nt;wt!==null&&(It=Math.max(It,wt.start*Nt),Ee=Math.min(Ee,(wt.start+wt.count)*Nt)),Ut!==null?(It=Math.max(It,0),Ee=Math.min(Ee,Ut.count)):jt!=null&&(It=Math.max(It,0),Ee=Math.min(Ee,jt.count));let de=Ee-It;if(de<0||de===1/0)return;Et.setup(Y,q,yt,H,Ut);let Ie,be=vt;if(Ut!==null&&(Ie=_t.get(Ut),be=it,be.setIndex(Ie)),Y.isMesh)q.wireframe===!0?(x.setLineWidth(q.wireframeLinewidth*Ue()),be.setMode(z.LINES)):be.setMode(z.TRIANGLES);else if(Y.isLine){let Qe=q.linewidth;Qe===void 0&&(Qe=1),x.setLineWidth(Qe*Ue()),Y.isLineSegments?be.setMode(z.LINES):Y.isLineLoop?be.setMode(z.LINE_LOOP):be.setMode(z.LINE_STRIP)}else Y.isPoints?be.setMode(z.POINTS):Y.isSprite&&be.setMode(z.TRIANGLES);if(Y.isBatchedMesh)if(fe.get("WEBGL_multi_draw"))be.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Qe=Y._multiDrawStarts,At=Y._multiDrawCounts,fn=Y._multiDrawCount,me=Ut?_t.get(Ut).bytesPerElement:1,Un=Z.get(q).currentProgram.getUniforms();for(let Tn=0;Tn<fn;Tn++)Un.setValue(z,"_gl_DrawID",Tn),be.render(Qe[Tn]/me,At[Tn])}else if(Y.isInstancedMesh)be.renderInstances(It,de,Y.count);else if(H.isInstancedBufferGeometry){let Qe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,At=Math.min(H.instanceCount,Qe);be.renderInstances(It,de,At)}else be.render(It,de)};function zs(M,F,H,q){U!==null&&M.isNodeMaterial&&U.setObject(q,M),ae===!0&&Ot.setState(M,H,!1),M.transparent===!0&&M.side===qn&&M.forceSinglePass===!1?(M.side=pn,M.needsUpdate=!0,us(M,F,q),M.side=Ls,M.needsUpdate=!0,us(M,F,q),M.side=qn):us(M,F,q)}this.compile=function(M,F,H=null){H===null&&(H=M),U!==null&&U.renderStart(M,F,H),b=gt.get(H),b.init(F),_.push(b),H.traverseVisible(function(Y){Y.isLight&&Y.layers.test(F.layers)&&(b.pushLight(Y),Y.castShadow&&b.pushShadow(Y))}),M!==H&&M.traverseVisible(function(Y){Y.isLight&&Y.layers.test(F.layers)&&(b.pushLight(Y),Y.castShadow&&b.pushShadow(Y))}),b.setupLights(),U!==null&&U.updateLights(b.state.lightsArray),ye=this.localClippingEnabled,ae=Ot.init(this.clippingPlanes,ye),ae===!0&&Ot.setGlobalState(this.clippingPlanes,F),U!==null&&kt.render(b.state.shadowsArray,H,F);let q=new Set;return M.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let wt=Y.material;if(wt)if(Array.isArray(wt))for(let Pt=0;Pt<wt.length;Pt++){let yt=wt[Pt];zs(yt,H,F,Y),q.add(yt)}else zs(wt,H,F,Y),q.add(wt)}),b=_.pop(),U!==null&&U.renderEnd(),q},this.compileAsync=function(M,F,H=null){let q=this.compile(M,F,H);return new Promise(Y=>{function wt(){if(q.forEach(function(Pt){let Ut=Z.get(Pt).currentProgram;(Ut===void 0||Ut.isReady())&&q.delete(Pt)}),q.size===0){Y(M);return}setTimeout(wt,10)}fe.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let ks=null;function Wc(M){ks&&ks(M)}function hr(){Kn.stop()}function ls(){Kn.start()}let Kn=new hp;Kn.setAnimationLoop(Wc),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(M){ks=M,Ft.setAnimationLoop(M),M===null?Kn.stop():Kn.start()},Ft.addEventListener("sessionstart",hr),Ft.addEventListener("sessionend",ls),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;U!==null&&U.renderStart(M,F);let H=Ft.enabled===!0&&Ft.isPresenting===!0,q=T!==null&&(et===null||H)&&T.begin(I,et);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ft.enabled===!0&&Ft.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ft.cameraAutoUpdate===!0&&Ft.updateCamera(F),F=Ft.getCamera()),M.isScene===!0&&M.onBeforeRender(I,M,F,et),b=gt.get(M,_.length),b.init(F),b.state.textureUnits=tt.getTextureUnits(),_.push(b),Jt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),re.setFromProjectionMatrix(Jt,xi,F.reversedDepth),ye=this.localClippingEnabled,ae=Ot.init(this.clippingPlanes,ye),w=pt.get(M,R.length),w.init(),R.push(w),Ft.enabled===!0&&Ft.isPresenting===!0){let Pt=I.xr.getDepthSensingMesh();Pt!==null&&li(Pt,F,-1/0,I.sortObjects)}li(M,F,0,I.sortObjects),w.finish(),U!==null&&U.updateLights(b.state.lightsArray),I.sortObjects===!0&&w.sort(Rt,Vt),xe=Ft.enabled===!1||Ft.isPresenting===!1||Ft.hasDepthSensing()===!1,xe&&$t.addToRenderList(w,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ae===!0&&Ot.beginShadows();let Y=b.state.shadowsArray;if(kt.render(Y,M,F),ae===!0&&Ot.endShadows(),(q&&T.hasRenderPass())===!1){let Pt=w.opaque,yt=w.transmissive;if(b.setupLights(),F.isArrayCamera){let Ut=F.cameras;if(yt.length>0)for(let Nt=0,Kt=Ut.length;Nt<Kt;Nt++){let jt=Ut[Nt];hs(Pt,yt,M,jt)}xe&&$t.render(M);for(let Nt=0,Kt=Ut.length;Nt<Kt;Nt++){let jt=Ut[Nt];cs(w,M,jt,jt.viewport)}}else yt.length>0&&hs(Pt,yt,M,F),xe&&$t.render(M),cs(w,M,F)}et!==null&&X===0&&(tt.updateMultisampleRenderTarget(et),tt.updateRenderTargetMipmap(et)),q&&T.end(I),M.isScene===!0&&M.onAfterRender(I,M,F),Et.resetDefaultState(),$=-1,nt=null,_.pop(),_.length>0?(b=_[_.length-1],tt.setTextureUnits(b.state.textureUnits),ae===!0&&Ot.setGlobalState(I.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?w=R[R.length-1]:w=null,U!==null&&U.renderEnd()};function li(M,F,H,q){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLightProbeGrid)b.pushLightProbeGrid(M);else if(M.isLight)b.pushLight(M),M.castShadow&&b.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(re)){q&&$e.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Jt);let Pt=st.update(M),yt=M.material;yt.visible&&w.push(M,Pt,yt,H,$e.z,null,F)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(re))){let Pt=st.update(M),yt=M.material;if(q&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),$e.copy(M.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),$e.copy(Pt.boundingSphere.center)),$e.applyMatrix4(M.matrixWorld).applyMatrix4(Jt)),Array.isArray(yt)){let Ut=Pt.groups;for(let Nt=0,Kt=Ut.length;Nt<Kt;Nt++){let jt=Ut[Nt],It=yt[jt.materialIndex];It&&It.visible&&w.push(M,Pt,It,H,$e.z,jt,F)}}else yt.visible&&w.push(M,Pt,yt,H,$e.z,null,F)}}let wt=M.children;for(let Pt=0,yt=wt.length;Pt<yt;Pt++)li(wt[Pt],F,H,q)}function cs(M,F,H,q){let{opaque:Y,transmissive:wt,transparent:Pt}=M;b.setupLightsView(H),ae===!0&&Ot.setGlobalState(I.clippingPlanes,H),q&&x.viewport(K.copy(q)),Y.length>0&&bi(Y,F,H),wt.length>0&&bi(wt,F,H),Pt.length>0&&bi(Pt,F,H),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function hs(M,F,H,q){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[q.id]===void 0){let It=fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[q.id]=new Fn(1,1,{generateMipmaps:!0,type:It?In:Bn,minFilter:ri,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pe.workingColorSpace})}let wt=b.state.transmissionRenderTarget[q.id],Pt=q.viewport||K;wt.setSize(Pt.z*I.transmissionResolutionScale,Pt.w*I.transmissionResolutionScale);let yt=I.getRenderTarget(),Ut=I.getActiveCubeFace(),Nt=I.getActiveMipmapLevel();I.setRenderTarget(wt),I.getClearColor(ne),Ht=I.getClearAlpha(),Ht<1&&I.setClearColor(16777215,.5),I.clear(),xe&&$t.render(H);let Kt=I.toneMapping;I.toneMapping=_i;let jt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),b.setupLightsView(q),ae===!0&&Ot.setGlobalState(I.clippingPlanes,q),bi(M,H,q),tt.updateMultisampleRenderTarget(wt),tt.updateRenderTargetMipmap(wt),fe.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let Ee=0,de=F.length;Ee<de;Ee++){let Ie=F[Ee],{object:be,geometry:Qe,material:At,group:fn}=Ie;if(At.side===qn&&be.layers.test(q.layers)){let me=At.side;At.side=pn,At.needsUpdate=!0,wi(be,H,q,Qe,At,fn),At.side=me,At.needsUpdate=!0,It=!0}}It===!0&&(tt.updateMultisampleRenderTarget(wt),tt.updateRenderTargetMipmap(wt))}I.setRenderTarget(yt,Ut,Nt),I.setClearColor(ne,Ht),jt!==void 0&&(q.viewport=jt),I.toneMapping=Kt}function bi(M,F,H){let q=F.isScene===!0?F.overrideMaterial:null;for(let Y=0,wt=M.length;Y<wt;Y++){let Pt=M[Y],{object:yt,geometry:Ut,group:Nt}=Pt,Kt=Pt.material;Kt.allowOverride===!0&&q!==null&&(Kt=q),yt.layers.test(H.layers)&&wi(yt,F,H,Ut,Kt,Nt)}}function wi(M,F,H,q,Y,wt){U!==null&&Y.isNodeMaterial&&U.setObject(M,Y),M.onBeforeRender(I,F,H,q,Y,wt),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),Y.onBeforeRender(I,F,H,q,M,wt),Y.transparent===!0&&Y.side===qn&&Y.forceSinglePass===!1?(Y.side=pn,Y.needsUpdate=!0,I.renderBufferDirect(H,F,q,Y,M,wt),Y.side=Ls,Y.needsUpdate=!0,I.renderBufferDirect(H,F,q,Y,M,wt),Y.side=qn):I.renderBufferDirect(H,F,q,Y,M,wt),M.onAfterRender(I,F,H,q,Y,wt)}function us(M,F,H){F.isScene!==!0&&(F=He);let q=Z.get(M),Y=b.state.lights,wt=b.state.shadowsArray,Pt=Y.state.version,yt=W.getParameters(M,Y.state,wt,F,H,b.state.lightProbeGridArray),Ut=W.getProgramCacheKey(yt),Nt=q.programs;q.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,q.fog=F.fog;let Kt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;q.envMap=dt.get(M.envMap||q.environment,Kt),q.envMapRotation=q.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Nt===void 0&&(M.addEventListener("dispose",En),Nt=new Map,q.programs=Nt);let jt=Nt.get(Ut);if(jt!==void 0){if(q.currentProgram===jt&&q.lightsStateVersion===Pt)return jn(M,yt),jt}else yt.uniforms=W.getUniforms(M),U!==null&&M.isNodeMaterial&&U.build(M,H,yt),M.onBeforeCompile(yt,I),jt=W.acquireProgram(yt,Ut),Nt.set(Ut,jt),q.uniforms=yt.uniforms;let It=q.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(It.clippingPlanes=Ot.uniform),jn(M,yt),q.needsLights=qc(M),q.lightsStateVersion=Pt,q.needsLights&&(It.ambientLightColor.value=Y.state.ambient,It.lightProbe.value=Y.state.probe,It.sunLights.value=Y.state.sun,It.sunLightShadows.value=Y.state.sunShadow,It.directionalLights.value=Y.state.directional,It.directionalLightShadows.value=Y.state.directionalShadow,It.spotLights.value=Y.state.spot,It.spotLightShadows.value=Y.state.spotShadow,It.rectAreaLights.value=Y.state.rectArea,It.ltc_1.value=Y.state.rectAreaLTC1,It.ltc_2.value=Y.state.rectAreaLTC2,It.pointLights.value=Y.state.point,It.pointLightShadows.value=Y.state.pointShadow,It.hemisphereLights.value=Y.state.hemi,It.sunShadowMatrix.value=Y.state.sunShadowMatrix,It.sunShadowCascade.value=Y.state.sunShadowCascade,It.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,It.spotLightMatrix.value=Y.state.spotLightMatrix,It.spotLightMap.value=Y.state.spotLightMap,It.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.lightProbeGrid=b.state.lightProbeGridArray.length>0,q.currentProgram=jt,q.uniformsList=null,jt}function Hn(M){if(M.uniformsList===null){let F=M.currentProgram.getUniforms();M.uniformsList=qr.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function jn(M,F){let H=Z.get(M);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function oa(M,F){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;y.setFromMatrixPosition(F.matrixWorld);for(let H=0,q=M.length;H<q;H++){let Y=M[H];if(Y.texture!==null&&Y.boundingBox.containsPoint(y))return Y}return null}function Xc(M,F,H,q,Y){F.isScene!==!0&&(F=He),tt.resetTextureUnits();let wt=F.fog,Pt=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?F.environment:null,yt=et===null?I.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:pe.workingColorSpace,Ut=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Nt=dt.get(q.envMap||Pt,Ut),Kt=q.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,jt=!!H.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),It=!!H.morphAttributes.position,Ee=!!H.morphAttributes.normal,de=!!H.morphAttributes.color,Ie=_i;q.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Ie=I.toneMapping);let be=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Qe=be!==void 0?be.length:0,At=Z.get(q),fn=b.state.lights;if(ae===!0&&(ye===!0||M!==nt)){let Le=M===nt&&q.id===$;Ot.setState(q,M,Le)}let me=!1;q.version===At.__version?(At.needsLights&&At.lightsStateVersion!==fn.state.version||At.outputColorSpace!==yt||Y.isBatchedMesh&&At.batching===!1||!Y.isBatchedMesh&&At.batching===!0||Y.isBatchedMesh&&At.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&At.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&At.instancing===!1||!Y.isInstancedMesh&&At.instancing===!0||Y.isSkinnedMesh&&At.skinning===!1||!Y.isSkinnedMesh&&At.skinning===!0||Y.isInstancedMesh&&At.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&At.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&At.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&At.instancingMorph===!1&&Y.morphTexture!==null||At.envMap!==Nt||q.fog===!0&&At.fog!==wt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==Ot.numPlanes||At.numIntersection!==Ot.numIntersection)||At.vertexAlphas!==Kt||At.vertexTangents!==jt||At.morphTargets!==It||At.morphNormals!==Ee||At.morphColors!==de||At.toneMapping!==Ie||At.morphTargetsCount!==Qe||!!At.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(me=!0):(me=!0,At.__version=q.version);let Un=At.currentProgram;me===!0&&(Un=us(q,F,Y),U&&q.isNodeMaterial&&U.onUpdateProgram(q,Un,At));let Tn=!1,hi=!1,fs=!1,we=Un.getUniforms(),Oe=At.uniforms;if(x.useProgram(Un.program)&&(Tn=!0,hi=!0,fs=!0),q.id!==$&&($=q.id,hi=!0),At.needsLights){let Le=oa(b.state.lightProbeGridArray,Y);At.lightProbeGrid!==Le&&(At.lightProbeGrid=Le,hi=!0)}if(Tn||nt!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),we.setValue(z,"projectionMatrix",M.projectionMatrix),we.setValue(z,"viewMatrix",M.matrixWorldInverse);let Ei=we.map.cameraPosition;Ei!==void 0&&Ei.setValue(z,Re.setFromMatrixPosition(M.matrixWorld)),C.logarithmicDepthBuffer&&we.setValue(z,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&we.setValue(z,"isOrthographic",M.isOrthographicCamera===!0),nt!==M&&(nt=M,hi=!0,fs=!0)}if(At.needsLights&&(fn.state.sunShadowMap.length>0&&we.setValue(z,"sunShadowMap",fn.state.sunShadowMap,tt),fn.state.directionalShadowMap.length>0&&we.setValue(z,"directionalShadowMap",fn.state.directionalShadowMap,tt),fn.state.spotShadowMap.length>0&&we.setValue(z,"spotShadowMap",fn.state.spotShadowMap,tt),fn.state.pointShadowMap.length>0&&we.setValue(z,"pointShadowMap",fn.state.pointShadowMap,tt)),Y.isSkinnedMesh){we.setOptional(z,Y,"bindMatrix"),we.setOptional(z,Y,"bindMatrixInverse");let Le=Y.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),we.setValue(z,"boneTexture",Le.boneTexture,tt))}Y.isBatchedMesh&&(we.setOptional(z,Y,"batchingTexture"),we.setValue(z,"batchingTexture",Y._matricesTexture,tt),we.setOptional(z,Y,"batchingIdTexture"),we.setValue(z,"batchingIdTexture",Y._indirectTexture,tt),we.setOptional(z,Y,"batchingColorTexture"),Y._colorsTexture!==null&&we.setValue(z,"batchingColorTexture",Y._colorsTexture,tt));let Qn=H.morphAttributes;if((Qn.position!==void 0||Qn.normal!==void 0||Qn.color!==void 0)&&B.update(Y,H,Un),(hi||At.receiveShadow!==Y.receiveShadow)&&(At.receiveShadow=Y.receiveShadow,we.setValue(z,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&F.environment!==null&&(Oe.envMapIntensity.value=F.environmentIntensity),Oe.dfgLUT!==void 0&&(Oe.dfgLUT.value=Iy()),hi){if(we.setValue(z,"toneMappingExposure",I.toneMappingExposure),At.needsLights&&Hs(Oe,fs),wt&&q.fog===!0&&zt.refreshFogUniforms(Oe,wt),zt.refreshMaterialUniforms(Oe,q,rt,Q,b.state.transmissionRenderTarget[M.id]),At.needsLights&&At.lightProbeGrid){let Le=At.lightProbeGrid;Oe.probesSH.value=Le.texture,Oe.probesMin.value.copy(Le.boundingBox.min),Oe.probesMax.value.copy(Le.boundingBox.max),Oe.probesResolution.value.copy(Le.resolution)}qr.upload(z,Hn(At),Oe,tt)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(qr.upload(z,Hn(At),Oe,tt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&we.setValue(z,"center",Y.center),we.setValue(z,"modelViewMatrix",Y.modelViewMatrix),we.setValue(z,"normalMatrix",Y.normalMatrix),we.setValue(z,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){let Le=q.uniformsGroups;for(let Ei=0,Vi=Le.length;Ei<Vi;Ei++){let Vs=Le[Ei];lt.update(Vs,Un),lt.bind(Vs,Un)}}return Un}function Hs(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.sunLights.needsUpdate=F,M.sunLightShadows.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function qc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(M,F,H){let q=Z.get(M);q.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Z.get(M.texture).__webglTexture=F,Z.get(M.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:H,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){let H=Z.get(M);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(M,F=0,H=0){et=M,G=F,X=H;let q=null,Y=!1,wt=!1;if(M){let yt=Z.get(M);if(yt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(z.FRAMEBUFFER,yt.__webglFramebuffer),K.copy(M.viewport),St.copy(M.scissor),xt=M.scissorTest,x.viewport(K),x.scissor(St),x.setScissorTest(xt),$=-1;return}else if(yt.__webglFramebuffer===void 0)tt.setupRenderTarget(M);else if(yt.__hasExternalTextures)tt.rebindTextures(M,Z.get(M.texture).__webglTexture,Z.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Kt=M.depthTexture;if(yt.__boundDepthTexture!==Kt){if(Kt!==null&&Z.has(Kt)&&(M.width!==Kt.image.width||M.height!==Kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(M)}}let Ut=M.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(wt=!0);let Nt=Z.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Nt[F])?q=Nt[F][H]:q=Nt[F],Y=!0):M.samples>0&&tt.useMultisampledRTT(M)===!1?q=Z.get(M).__webglMultisampledFramebuffer:Array.isArray(Nt)?q=Nt[H]:q=Nt,K.copy(M.viewport),St.copy(M.scissor),xt=M.scissorTest}else K.copy(Ct).multiplyScalar(rt).floor(),St.copy(te).multiplyScalar(rt).floor(),xt=Ye;if(H!==0&&(q=O),x.bindFramebuffer(z.FRAMEBUFFER,q)&&x.drawBuffers(M,q),x.viewport(K),x.scissor(St),x.setScissorTest(xt),Y){let yt=Z.get(M.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+F,yt.__webglTexture,H)}else if(wt){let yt=F;for(let Ut=0;Ut<M.textures.length;Ut++){let Nt=Z.get(M.textures[Ut]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ut,Nt.__webglTexture,H,yt)}}else if(M!==null&&H!==0){let yt=Z.get(M.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,yt.__webglTexture,H)}$=-1};function ci(M){let F=Z.get(M);return(F.__readFormat!==M.format||F.__readType!==M.type)&&(F.__readFormat=M.format,F.__readType=M.type,F.__formatReadable=C.textureFormatReadable(M.format),F.__typeReadable=C.textureTypeReadable(M.type)),F}this.readRenderTargetPixels=function(M,F,H,q,Y,wt,Pt,yt=0){if(!(M&&M.isWebGLRenderTarget)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=Z.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ut=Ut[Pt]),Ut){x.bindFramebuffer(z.FRAMEBUFFER,Ut);try{let Nt=M.textures[yt],Kt=Nt.format,jt=Nt.type;M.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+yt);let It=ci(Nt);if(It.__formatReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(It.__typeReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-q&&H>=0&&H<=M.height-Y&&z.readPixels(F,H,q,Y,Mt.convert(Kt),Mt.convert(jt),wt)}finally{let Nt=et!==null?Z.get(et).__webglFramebuffer:null;x.bindFramebuffer(z.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(M,F,H,q,Y,wt,Pt,yt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=Z.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ut=Ut[Pt]),Ut)if(F>=0&&F<=M.width-q&&H>=0&&H<=M.height-Y){x.bindFramebuffer(z.FRAMEBUFFER,Ut);let Nt=M.textures[yt],Kt=Nt.format,jt=Nt.type;M.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+yt);let It=ci(Nt);if(It.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(It.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ee=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ee),z.bufferData(z.PIXEL_PACK_BUFFER,wt.byteLength,z.STREAM_READ),z.readPixels(F,H,q,Y,Mt.convert(Kt),Mt.convert(jt),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let de=et!==null?Z.get(et).__webglFramebuffer:null;x.bindFramebuffer(z.FRAMEBUFFER,de);let Ie=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Od(z,Ie,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ee),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,wt),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(Ee),z.deleteSync(Ie),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,H=0){let q=Math.pow(2,-H),Y=Math.floor(M.image.width*q),wt=Math.floor(M.image.height*q),Pt=F!==null?F.x:0,yt=F!==null?F.y:0;tt.setTexture2D(M,0),z.copyTexSubImage2D(z.TEXTURE_2D,H,0,0,Pt,yt,Y,wt),x.unbindTexture()},this.copyTextureToTexture=function(M,F,H=null,q=null,Y=0,wt=0){let Pt,yt,Ut,Nt,Kt,jt,It,Ee,de,Ie=M.isCompressedTexture?M.mipmaps[wt]:M.image;if(H!==null)Pt=H.max.x-H.min.x,yt=H.max.y-H.min.y,Ut=H.isBox3?H.max.z-H.min.z:1,Nt=H.min.x,Kt=H.min.y,jt=H.isBox3?H.min.z:0;else{let Oe=Math.pow(2,-Y);Pt=Math.floor(Ie.width*Oe),yt=Math.floor(Ie.height*Oe),M.isDataArrayTexture?Ut=Ie.depth:M.isData3DTexture?Ut=Math.floor(Ie.depth*Oe):Ut=1,Nt=0,Kt=0,jt=0}q!==null?(It=q.x,Ee=q.y,de=q.z):(It=0,Ee=0,de=0);let be=Mt.convert(F.format),Qe=Mt.convert(F.type),At;F.isData3DTexture?(tt.setTexture3D(F,0),At=z.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(tt.setTexture2DArray(F,0),At=z.TEXTURE_2D_ARRAY):(tt.setTexture2D(F,0),At=z.TEXTURE_2D),x.activeTexture(z.TEXTURE0),x.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,F.flipY),x.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),x.pixelStorei(z.UNPACK_ALIGNMENT,F.unpackAlignment);let fn=x.getParameter(z.UNPACK_ROW_LENGTH),me=x.getParameter(z.UNPACK_IMAGE_HEIGHT),Un=x.getParameter(z.UNPACK_SKIP_PIXELS),Tn=x.getParameter(z.UNPACK_SKIP_ROWS),hi=x.getParameter(z.UNPACK_SKIP_IMAGES);x.pixelStorei(z.UNPACK_ROW_LENGTH,Ie.width),x.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ie.height),x.pixelStorei(z.UNPACK_SKIP_PIXELS,Nt),x.pixelStorei(z.UNPACK_SKIP_ROWS,Kt),x.pixelStorei(z.UNPACK_SKIP_IMAGES,jt);let fs=M.isDataArrayTexture||M.isData3DTexture,we=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){let Oe=Z.get(M),Qn=Z.get(F),Le=Z.get(Oe.__renderTarget),Ei=Z.get(Qn.__renderTarget);x.bindFramebuffer(z.READ_FRAMEBUFFER,Le.__webglFramebuffer),x.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let Vi=0;Vi<Ut;Vi++)fs&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Z.get(M).__webglTexture,Y,jt+Vi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Z.get(F).__webglTexture,wt,de+Vi)),z.blitFramebuffer(Nt,Kt,Pt,yt,It,Ee,Pt,yt,z.DEPTH_BUFFER_BIT,z.NEAREST);x.bindFramebuffer(z.READ_FRAMEBUFFER,null),x.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Y!==0||M.isRenderTargetTexture||Z.has(M)){let Oe=Z.get(M),Qn=Z.get(F);x.bindFramebuffer(z.READ_FRAMEBUFFER,L),x.bindFramebuffer(z.DRAW_FRAMEBUFFER,P);for(let Le=0;Le<Ut;Le++)fs?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Oe.__webglTexture,Y,jt+Le):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Oe.__webglTexture,Y),we?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Qn.__webglTexture,wt,de+Le):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Qn.__webglTexture,wt),Y!==0?z.blitFramebuffer(Nt,Kt,Pt,yt,It,Ee,Pt,yt,z.COLOR_BUFFER_BIT,z.NEAREST):we?z.copyTexSubImage3D(At,wt,It,Ee,de+Le,Nt,Kt,Pt,yt):z.copyTexSubImage2D(At,wt,It,Ee,Nt,Kt,Pt,yt);x.bindFramebuffer(z.READ_FRAMEBUFFER,null),x.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else we?M.isDataTexture||M.isData3DTexture?z.texSubImage3D(At,wt,It,Ee,de,Pt,yt,Ut,be,Qe,Ie.data):F.isCompressedArrayTexture?z.compressedTexSubImage3D(At,wt,It,Ee,de,Pt,yt,Ut,be,Ie.data):z.texSubImage3D(At,wt,It,Ee,de,Pt,yt,Ut,be,Qe,Ie):M.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,wt,It,Ee,Pt,yt,be,Qe,Ie.data):M.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,wt,It,Ee,Ie.width,Ie.height,be,Ie.data):z.texSubImage2D(z.TEXTURE_2D,wt,It,Ee,Pt,yt,be,Qe,Ie);x.pixelStorei(z.UNPACK_ROW_LENGTH,fn),x.pixelStorei(z.UNPACK_IMAGE_HEIGHT,me),x.pixelStorei(z.UNPACK_SKIP_PIXELS,Un),x.pixelStorei(z.UNPACK_SKIP_ROWS,Tn),x.pixelStorei(z.UNPACK_SKIP_IMAGES,hi),wt===0&&F.generateMipmaps&&z.generateMipmap(At),x.unbindTexture()},this.initRenderTarget=function(M){Z.get(M).__webglFramebuffer===void 0&&tt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?tt.setTextureCube(M,0):M.isData3DTexture?tt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?tt.setTexture2DArray(M,0):tt.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){G=0,X=0,et=null,x.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}};var Xe=class{constructor(){this._partials=new Float64Array(32),this._n=0}add(t){let e=this._partials,i=0;for(let s=0;s<this._n&&s<32;s++){let r=e[s],a=t+r,o=Math.abs(t)<Math.abs(r)?t-(a-r):r-(a-t);o&&(e[i++]=o),t=a}return e[i]=t,this._n=i+1,this}valueOf(){let t=this._partials,e=this._n,i,s,r,a=0;if(e>0){for(a=t[--e];e>0&&(i=a,s=t[--e],a=i+s,r=s-(a-i),!r););e>0&&(r<0&&t[e-1]<0||r>0&&t[e-1]>0)&&(s=r*2,i=a+s,s==i-a&&(a=i))}return a}};function*Ny(n){for(let t of n)yield*t}function Zr(n){return Array.from(Ny(n))}function es(n,t,e){n=+n,t=+t,e=(s=arguments.length)<2?(t=n,n=0,1):s<3?1:+e;for(var i=-1,s=Math.max(0,Math.ceil((t-n)/e))|0,r=new Array(s);++i<s;)r[i]=n+i*e;return r}var Yt=1e-6,hc=1e-12,he=Math.PI,Ln=he/2,Jr=he/4,rn=he*2,wn=180/he,ve=he/180,se=Math.abs,xp=Math.atan,$n=Math.atan2,ue=Math.cos,qa=Math.ceil;var ge=Math.sin,_p=Math.sign||function(n){return n>0?1:n<0?-1:0},Nn=Math.sqrt;function vp(n){return n>1?0:n<-1?he:Math.acos(n)}function ns(n){return n>1?Ln:n<-1?-Ln:Math.asin(n)}function Ae(){}function uc(n,t){n&&Mp.hasOwnProperty(n.type)&&Mp[n.type](n,t)}var yp={Feature:function(n,t){uc(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,i=-1,s=e.length;++i<s;)uc(e[i].geometry,t)}},Mp={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,i=-1,s=e.length;++i<s;)n=e[i],t.point(n[0],n[1],n[2])},LineString:function(n,t){Su(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,i=-1,s=e.length;++i<s;)Su(e[i],t,0)},Polygon:function(n,t){Sp(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,i=-1,s=e.length;++i<s;)Sp(e[i],t)},GeometryCollection:function(n,t){for(var e=n.geometries,i=-1,s=e.length;++i<s;)uc(e[i],t)}};function Su(n,t,e){var i=-1,s=n.length-e,r;for(t.lineStart();++i<s;)r=n[i],t.point(r[0],r[1],r[2]);t.lineEnd()}function Sp(n,t){var e=-1,i=n.length;for(t.polygonStart();++e<i;)Su(n[e],t,1);t.polygonEnd()}function zn(n,t){n&&yp.hasOwnProperty(n.type)?yp[n.type](n,t):uc(n,t)}var Ya=new Xe,fc=new Xe,bp,wp,bu,wu,Eu,Mi={point:Ae,lineStart:Ae,lineEnd:Ae,polygonStart:function(){Ya=new Xe,Mi.lineStart=Dy,Mi.lineEnd=Uy},polygonEnd:function(){var n=+Ya;fc.add(n<0?rn+n:n),this.lineStart=this.lineEnd=this.point=Ae},sphere:function(){fc.add(rn)}};function Dy(){Mi.point=Fy}function Uy(){Ep(bp,wp)}function Fy(n,t){Mi.point=Ep,bp=n,wp=t,n*=ve,t*=ve,bu=n,wu=ue(t=t/2+Jr),Eu=ge(t)}function Ep(n,t){n*=ve,t*=ve,t=t/2+Jr;var e=n-bu,i=e>=0?1:-1,s=i*e,r=ue(t),a=ge(t),o=Eu*a,l=wu*r+o*ue(s),c=o*i*ge(s);Ya.add($n(c,l)),bu=n,wu=r,Eu=a}function dc(n){return fc=new Xe,zn(n,Mi),fc*2}function sr(n){return[$n(n[1],n[0]),ns(n[2])]}function oi(n){var t=n[0],e=n[1],i=ue(e);return[i*ue(t),i*ge(t),ge(e)]}function $a(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function is(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function pc(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function Za(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function rr(n){var t=Nn(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}var Ve,kn,qe,Jn,ar,Cp,Pp,Kr,Ja,Fs,rs,ss={point:Tu,lineStart:Tp,lineEnd:Ap,polygonStart:function(){ss.point=Lp,ss.lineStart=Oy,ss.lineEnd=By,Ja=new Xe,Mi.polygonStart()},polygonEnd:function(){Mi.polygonEnd(),ss.point=Tu,ss.lineStart=Tp,ss.lineEnd=Ap,Ya<0?(Ve=-(qe=180),kn=-(Jn=90)):Ja>Yt?Jn=90:Ja<-Yt&&(kn=-90),rs[0]=Ve,rs[1]=qe},sphere:function(){Ve=-(qe=180),kn=-(Jn=90)}};function Tu(n,t){Fs.push(rs=[Ve=n,qe=n]),t<kn&&(kn=t),t>Jn&&(Jn=t)}function Ip(n,t){var e=oi([n*ve,t*ve]);if(Kr){var i=is(Kr,e),s=[i[1],-i[0],0],r=is(s,i);rr(r),r=sr(r);var a=n-ar,o=a>0?1:-1,l=r[0]*wn*o,c,h=se(a)>180;h^(o*ar<l&&l<o*n)?(c=r[1]*wn,c>Jn&&(Jn=c)):(l=(l+360)%360-180,h^(o*ar<l&&l<o*n)?(c=-r[1]*wn,c<kn&&(kn=c)):(t<kn&&(kn=t),t>Jn&&(Jn=t))),h?n<ar?Zn(Ve,n)>Zn(Ve,qe)&&(qe=n):Zn(n,qe)>Zn(Ve,qe)&&(Ve=n):qe>=Ve?(n<Ve&&(Ve=n),n>qe&&(qe=n)):n>ar?Zn(Ve,n)>Zn(Ve,qe)&&(qe=n):Zn(n,qe)>Zn(Ve,qe)&&(Ve=n)}else Fs.push(rs=[Ve=n,qe=n]);t<kn&&(kn=t),t>Jn&&(Jn=t),Kr=e,ar=n}function Tp(){ss.point=Ip}function Ap(){rs[0]=Ve,rs[1]=qe,ss.point=Tu,Kr=null}function Lp(n,t){if(Kr){var e=n-ar;Ja.add(se(e)>180?e+(e>0?360:-360):e)}else Cp=n,Pp=t;Mi.point(n,t),Ip(n,t)}function Oy(){Mi.lineStart()}function By(){Lp(Cp,Pp),Mi.lineEnd(),se(Ja)>Yt&&(Ve=-(qe=180)),rs[0]=Ve,rs[1]=qe,Kr=null}function Zn(n,t){return(t-=n)<0?t+360:t}function zy(n,t){return n[0]-t[0]}function Rp(n,t){return n[0]<=n[1]?n[0]<=t&&t<=n[1]:t<n[0]||n[1]<t}function Au(n){var t,e,i,s,r,a,o;if(Jn=qe=-(Ve=kn=1/0),Fs=[],zn(n,ss),e=Fs.length){for(Fs.sort(zy),t=1,i=Fs[0],r=[i];t<e;++t)s=Fs[t],Rp(i,s[0])||Rp(i,s[1])?(Zn(i[0],s[1])>Zn(i[0],i[1])&&(i[1]=s[1]),Zn(s[0],i[1])>Zn(i[0],i[1])&&(i[0]=s[0])):r.push(i=s);for(a=-1/0,e=r.length-1,t=0,i=r[e];t<=e;i=s,++t)s=r[t],(o=Zn(i[1],s[0]))>a&&(a=o,Ve=s[0],qe=i[1])}return Fs=rs=null,Ve===1/0||kn===1/0?[[NaN,NaN],[NaN,NaN]]:[[Ve,kn],[qe,Jn]]}function Ka(n,t){function e(i,s){return i=n(i,s),t(i[0],i[1])}return n.invert&&t.invert&&(e.invert=function(i,s){return i=t.invert(i,s),i&&n.invert(i[0],i[1])}),e}function Ru(n,t){return se(n)>he&&(n-=Math.round(n/rn)*rn),[n,t]}Ru.invert=Ru;function Fp(n,t,e){return(n%=rn)?t||e?Ka(Dp(n),Up(t,e)):Dp(n):t||e?Up(t,e):Ru}function Np(n){return function(t,e){return t+=n,se(t)>he&&(t-=Math.round(t/rn)*rn),[t,e]}}function Dp(n){var t=Np(n);return t.invert=Np(-n),t}function Up(n,t){var e=ue(n),i=ge(n),s=ue(t),r=ge(t);function a(o,l){var c=ue(l),h=ue(o)*c,f=ge(o)*c,u=ge(l),d=u*e+h*i;return[$n(f*s-d*r,h*e-u*i),ns(d*s+f*r)]}return a.invert=function(o,l){var c=ue(l),h=ue(o)*c,f=ge(o)*c,u=ge(l),d=u*s-f*r;return[$n(f*s+u*r,h*e+d*i),ns(d*e-h*i)]},a}function Bp(n,t,e,i,s,r){if(e){var a=ue(t),o=ge(t),l=i*e;s==null?(s=t+i*rn,r=t-l/2):(s=Op(a,s),r=Op(a,r),(i>0?s<r:s>r)&&(s+=i*rn));for(var c,h=s;i>0?h>r:h<r;h-=l)c=sr([a,-o*ue(h),-o*ge(h)]),n.point(c[0],c[1])}}function Op(n,t){t=oi(t),t[0]-=n,rr(t);var e=vp(-t[1]);return((-t[2]<0?-e:e)+rn-Yt)%rn}function mc(){var n=[],t;return{point:function(e,i,s){t.push([e,i,s])},lineStart:function(){n.push(t=[])},lineEnd:Ae,rejoin:function(){n.length>1&&n.push(n.pop().concat(n.shift()))},result:function(){var e=n;return n=[],t=null,e}}}function jr(n,t){return se(n[0]-t[0])<Yt&&se(n[1]-t[1])<Yt}function gc(n,t,e,i){this.x=n,this.z=t,this.o=e,this.e=i,this.v=!1,this.n=this.p=null}function xc(n,t,e,i,s){var r=[],a=[],o,l;if(n.forEach(function(g){if(!((v=g.length-1)<=0)){var v,m=g[0],p=g[v],S;if(jr(m,p)){if(!m[2]&&!p[2]){for(s.lineStart(),o=0;o<v;++o)s.point((m=g[o])[0],m[1]);s.lineEnd();return}p[0]+=2*Yt}r.push(S=new gc(m,g,null,!0)),a.push(S.o=new gc(m,null,S,!1)),r.push(S=new gc(p,g,null,!1)),a.push(S.o=new gc(p,null,S,!0))}}),!!r.length){for(a.sort(t),zp(r),zp(a),o=0,l=a.length;o<l;++o)a[o].e=e=!e;for(var c=r[0],h,f;;){for(var u=c,d=!0;u.v;)if((u=u.n)===c)return;h=u.z,s.lineStart();do{if(u.v=u.o.v=!0,u.e){if(d)for(o=0,l=h.length;o<l;++o)s.point((f=h[o])[0],f[1]);else i(u.x,u.n.x,1,s);u=u.n}else{if(d)for(h=u.p.z,o=h.length-1;o>=0;--o)s.point((f=h[o])[0],f[1]);else i(u.x,u.p.x,-1,s);u=u.p}u=u.o,h=u.z,d=!d}while(!u.v);s.lineEnd()}}}function zp(n){if(t=n.length){for(var t,e=0,i=n[0],s;++e<t;)i.n=s=n[e],s.p=i,i=s;i.n=s=n[0],s.p=i}}function Cu(n){return se(n[0])<=he?n[0]:_p(n[0])*((se(n[0])+he)%rn-he)}function _c(n,t){var e=Cu(t),i=t[1],s=ge(i),r=[ge(e),-ue(e),0],a=0,o=0,l=new Xe;s===1?i=Ln+Yt:s===-1&&(i=-Ln-Yt);for(var c=0,h=n.length;c<h;++c)if(u=(f=n[c]).length)for(var f,u,d=f[u-1],g=Cu(d),v=d[1]/2+Jr,m=ge(v),p=ue(v),S=0;S<u;++S,g=y,m=b,p=R,d=E){var E=f[S],y=Cu(E),w=E[1]/2+Jr,b=ge(w),R=ue(w),_=y-g,T=_>=0?1:-1,I=T*_,N=I>he,U=m*b;if(l.add($n(U*T*ge(I),p*R+U*ue(I))),a+=N?_+T*rn:_,N^g>=e^y>=e){var O=is(oi(d),oi(E));rr(O);var L=is(r,O);rr(L);var P=(N^_>=0?-1:1)*ns(L[2]);(i>P||i===P&&(O[0]||O[1]))&&(o+=N^_>=0?1:-1)}}return(a<-Yt||a<Yt&&l<-hc)^o&1}function vc(n,t,e,i){return function(s){var r=t(s),a=mc(),o=t(a),l=!1,c,h,f,u={point:d,lineStart:v,lineEnd:m,polygonStart:function(){u.point=p,u.lineStart=S,u.lineEnd=E,h=[],c=[]},polygonEnd:function(){u.point=d,u.lineStart=v,u.lineEnd=m,h=Zr(h);var y=_c(c,i);h.length?(l||(s.polygonStart(),l=!0),xc(h,Hy,y,e,s)):y&&(l||(s.polygonStart(),l=!0),s.lineStart(),e(null,null,1,s),s.lineEnd()),l&&(s.polygonEnd(),l=!1),h=c=null},sphere:function(){s.polygonStart(),s.lineStart(),e(null,null,1,s),s.lineEnd(),s.polygonEnd()}};function d(y,w){n(y,w)&&s.point(y,w)}function g(y,w){r.point(y,w)}function v(){u.point=g,r.lineStart()}function m(){u.point=d,r.lineEnd()}function p(y,w){f.push([y,w]),o.point(y,w)}function S(){o.lineStart(),f=[]}function E(){p(f[0][0],f[0][1]),o.lineEnd();var y=o.clean(),w=a.result(),b,R=w.length,_,T,I;if(f.pop(),c.push(f),f=null,!!R){if(y&1){if(T=w[0],(_=T.length-1)>0){for(l||(s.polygonStart(),l=!0),s.lineStart(),b=0;b<_;++b)s.point((I=T[b])[0],I[1]);s.lineEnd()}return}R>1&&y&2&&w.push(w.pop().concat(w.shift())),h.push(w.filter(ky))}}return u}}function ky(n){return n.length>1}function Hy(n,t){return((n=n.x)[0]<0?n[1]-Ln-Yt:Ln-n[1])-((t=t.x)[0]<0?t[1]-Ln-Yt:Ln-t[1])}var Pu=vc(function(){return!0},Vy,Wy,[-he,-Ln]);function Vy(n){var t=NaN,e=NaN,i=NaN,s;return{lineStart:function(){n.lineStart(),s=1},point:function(r,a){var o=r>0?he:-he,l=se(r-t);se(l-he)<Yt?(n.point(t,e=(e+a)/2>0?Ln:-Ln),n.point(i,e),n.lineEnd(),n.lineStart(),n.point(o,e),n.point(r,e),s=0):i!==o&&l>=he&&(se(t-i)<Yt&&(t-=i*Yt),se(r-o)<Yt&&(r-=o*Yt),e=Gy(t,e,r,a),n.point(i,e),n.lineEnd(),n.lineStart(),n.point(o,e),s=0),n.point(t=r,e=a),i=o},lineEnd:function(){n.lineEnd(),t=e=NaN},clean:function(){return 2-s}}}function Gy(n,t,e,i){var s,r,a=ge(n-e);return se(a)>Yt?xp((ge(t)*(r=ue(i))*ge(e)-ge(i)*(s=ue(t))*ge(n))/(s*r*a)):(t+i)/2}function Wy(n,t,e,i){var s;if(n==null)s=e*Ln,i.point(-he,s),i.point(0,s),i.point(he,s),i.point(he,0),i.point(he,-s),i.point(0,-s),i.point(-he,-s),i.point(-he,0),i.point(-he,s);else if(se(n[0]-t[0])>Yt){var r=n[0]<t[0]?he:-he;s=e*r/2,i.point(-r,s),i.point(0,s),i.point(r,s)}else i.point(t[0],t[1])}function kp(n){var t=ue(n),e=2*ve,i=t>0,s=se(t)>Yt;function r(h,f,u,d){Bp(d,n,e,u,h,f)}function a(h,f){return ue(h)*ue(f)>t}function o(h){var f,u,d,g,v;return{lineStart:function(){g=d=!1,v=1},point:function(m,p){var S=[m,p],E,y=a(m,p),w=i?y?0:c(m,p):y?c(m+(m<0?he:-he),p):0;if(!f&&(g=d=y)&&h.lineStart(),y!==d&&(E=l(f,S),(!E||jr(f,E)||jr(S,E))&&(S[2]=1)),y!==d)v=0,y?(h.lineStart(),E=l(S,f),h.point(E[0],E[1])):(E=l(f,S),h.point(E[0],E[1],2),h.lineEnd()),f=E;else if(s&&f&&i^y){var b;!(w&u)&&(b=l(S,f,!0))&&(v=0,i?(h.lineStart(),h.point(b[0][0],b[0][1]),h.point(b[1][0],b[1][1]),h.lineEnd()):(h.point(b[1][0],b[1][1]),h.lineEnd(),h.lineStart(),h.point(b[0][0],b[0][1],3)))}y&&(!f||!jr(f,S))&&h.point(S[0],S[1]),f=S,d=y,u=w},lineEnd:function(){d&&h.lineEnd(),f=null},clean:function(){return v|(g&&d)<<1}}}function l(h,f,u){var d=oi(h),g=oi(f),v=[1,0,0],m=is(d,g),p=$a(m,m),S=m[0],E=p-S*S;if(!E)return!u&&h;var y=t*p/E,w=-t*S/E,b=is(v,m),R=Za(v,y),_=Za(m,w);pc(R,_);var T=b,I=$a(R,T),N=$a(T,T),U=I*I-N*($a(R,R)-1);if(!(U<0)){var O=Nn(U),L=Za(T,(-I-O)/N);if(pc(L,R),L=sr(L),!u)return L;var P=h[0],G=f[0],X=h[1],et=f[1],$;G<P&&($=P,P=G,G=$);var nt=G-P,K=se(nt-he)<Yt,St=K||nt<Yt;if(!K&&et<X&&($=X,X=et,et=$),St?K?X+et>0^L[1]<(se(L[0]-P)<Yt?X:et):X<=L[1]&&L[1]<=et:nt>he^(P<=L[0]&&L[0]<=G)){var xt=Za(T,(-I+O)/N);return pc(xt,R),[L,sr(xt)]}}}function c(h,f){var u=i?n:he-n,d=0;return h<-u?d|=1:h>u&&(d|=2),f<-u?d|=4:f>u&&(d|=8),d}return vc(a,o,r,i?[0,-n]:[-he,n-he])}function Hp(n,t,e,i,s,r){var a=n[0],o=n[1],l=t[0],c=t[1],h=0,f=1,u=l-a,d=c-o,g;if(g=e-a,!(!u&&g>0)){if(g/=u,u<0){if(g<h)return;g<f&&(f=g)}else if(u>0){if(g>f)return;g>h&&(h=g)}if(g=s-a,!(!u&&g<0)){if(g/=u,u<0){if(g>f)return;g>h&&(h=g)}else if(u>0){if(g<h)return;g<f&&(f=g)}if(g=i-o,!(!d&&g>0)){if(g/=d,d<0){if(g<h)return;g<f&&(f=g)}else if(d>0){if(g>f)return;g>h&&(h=g)}if(g=r-o,!(!d&&g<0)){if(g/=d,d<0){if(g>f)return;g>h&&(h=g)}else if(d>0){if(g<h)return;g<f&&(f=g)}return h>0&&(n[0]=a+h*u,n[1]=o+h*d),f<1&&(t[0]=a+f*u,t[1]=o+f*d),!0}}}}}var ja=1e9,yc=-ja;function Iu(n,t,e,i){function s(c,h){return n<=c&&c<=e&&t<=h&&h<=i}function r(c,h,f,u){var d=0,g=0;if(c==null||(d=a(c,f))!==(g=a(h,f))||l(c,h)<0^f>0)do u.point(d===0||d===3?n:e,d>1?i:t);while((d=(d+f+4)%4)!==g);else u.point(h[0],h[1])}function a(c,h){return se(c[0]-n)<Yt?h>0?0:3:se(c[0]-e)<Yt?h>0?2:1:se(c[1]-t)<Yt?h>0?1:0:h>0?3:2}function o(c,h){return l(c.x,h.x)}function l(c,h){var f=a(c,1),u=a(h,1);return f!==u?f-u:f===0?h[1]-c[1]:f===1?c[0]-h[0]:f===2?c[1]-h[1]:h[0]-c[0]}return function(c){var h=c,f=mc(),u,d,g,v,m,p,S,E,y,w,b,R={point:_,lineStart:U,lineEnd:O,polygonStart:I,polygonEnd:N};function _(P,G){s(P,G)&&h.point(P,G)}function T(){for(var P=0,G=0,X=d.length;G<X;++G)for(var et=d[G],$=1,nt=et.length,K=et[0],St,xt,ne=K[0],Ht=K[1];$<nt;++$)St=ne,xt=Ht,K=et[$],ne=K[0],Ht=K[1],xt<=i?Ht>i&&(ne-St)*(i-xt)>(Ht-xt)*(n-St)&&++P:Ht<=i&&(ne-St)*(i-xt)<(Ht-xt)*(n-St)&&--P;return P}function I(){h=f,u=[],d=[],b=!0}function N(){var P=T(),G=b&&P,X=(u=Zr(u)).length;(G||X)&&(c.polygonStart(),G&&(c.lineStart(),r(null,null,1,c),c.lineEnd()),X&&xc(u,o,P,r,c),c.polygonEnd()),h=c,u=d=g=null}function U(){R.point=L,d&&d.push(g=[]),w=!0,y=!1,S=E=NaN}function O(){u&&(L(v,m),p&&y&&f.rejoin(),u.push(f.result())),R.point=_,y&&h.lineEnd()}function L(P,G){var X=s(P,G);if(d&&g.push([P,G]),w)v=P,m=G,p=X,w=!1,X&&(h.lineStart(),h.point(P,G));else if(X&&y)h.point(P,G);else{var et=[S=Math.max(yc,Math.min(ja,S)),E=Math.max(yc,Math.min(ja,E))],$=[P=Math.max(yc,Math.min(ja,P)),G=Math.max(yc,Math.min(ja,G))];Hp(et,$,n,t,e,i)?(y||(h.lineStart(),h.point(et[0],et[1])),h.point($[0],$[1]),X||h.lineEnd(),b=!1):X&&(h.lineStart(),h.point(P,G),b=!1)}S=P,E=G,y=X}return R}}var Lu,Nu,Mc,Sc,Qr={sphere:Ae,point:Ae,lineStart:Xy,lineEnd:Ae,polygonStart:Ae,polygonEnd:Ae};function Xy(){Qr.point=Yy,Qr.lineEnd=qy}function qy(){Qr.point=Qr.lineEnd=Ae}function Yy(n,t){n*=ve,t*=ve,Nu=n,Mc=ge(t),Sc=ue(t),Qr.point=$y}function $y(n,t){n*=ve,t*=ve;var e=ge(t),i=ue(t),s=se(n-Nu),r=ue(s),a=ge(s),o=i*a,l=Sc*e-Mc*i*r,c=Mc*e+Sc*i*r;Lu.add($n(Nn(o*o+l*l),c)),Nu=n,Mc=e,Sc=i}function Vp(n){return Lu=new Xe,zn(n,Qr),+Lu}var Du=[null,null],Zy={type:"LineString",coordinates:Du};function bc(n,t){return Du[0]=n,Du[1]=t,Vp(Zy)}var Gp={Feature:function(n,t){return wc(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,i=-1,s=e.length;++i<s;)if(wc(e[i].geometry,t))return!0;return!1}},Wp={Sphere:function(){return!0},Point:function(n,t){return Xp(n.coordinates,t)},MultiPoint:function(n,t){for(var e=n.coordinates,i=-1,s=e.length;++i<s;)if(Xp(e[i],t))return!0;return!1},LineString:function(n,t){return qp(n.coordinates,t)},MultiLineString:function(n,t){for(var e=n.coordinates,i=-1,s=e.length;++i<s;)if(qp(e[i],t))return!0;return!1},Polygon:function(n,t){return Yp(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,i=-1,s=e.length;++i<s;)if(Yp(e[i],t))return!0;return!1},GeometryCollection:function(n,t){for(var e=n.geometries,i=-1,s=e.length;++i<s;)if(wc(e[i],t))return!0;return!1}};function wc(n,t){return n&&Wp.hasOwnProperty(n.type)?Wp[n.type](n,t):!1}function Xp(n,t){return bc(n,t)===0}function qp(n,t){for(var e,i,s,r=0,a=n.length;r<a;r++){if(i=bc(n[r],t),i===0||r>0&&(s=bc(n[r],n[r-1]),s>0&&e<=s&&i<=s&&(e+i-s)*(1-Math.pow((e-i)/s,2))<hc*s))return!0;e=i}return!1}function Yp(n,t){return!!_c(n.map(Jy),$p(t))}function Jy(n){return n=n.map($p),n.pop(),n}function $p(n){return[n[0]*ve,n[1]*ve]}function Uu(n,t){return(n&&Gp.hasOwnProperty(n.type)?Gp[n.type]:wc)(n,t)}function Zp(n,t,e){var i=es(n,t-Yt,e).concat(t);return function(s){return i.map(function(r){return[s,r]})}}function Jp(n,t,e){var i=es(n,t-Yt,e).concat(t);return function(s){return i.map(function(r){return[r,s]})}}function Ec(){var n,t,e,i,s,r,a,o,l=10,c=l,h=90,f=360,u,d,g,v,m=2.5;function p(){return{type:"MultiLineString",coordinates:S()}}function S(){return es(qa(i/h)*h,e,h).map(g).concat(es(qa(o/f)*f,a,f).map(v)).concat(es(qa(t/l)*l,n,l).filter(function(E){return se(E%h)>Yt}).map(u)).concat(es(qa(r/c)*c,s,c).filter(function(E){return se(E%f)>Yt}).map(d))}return p.lines=function(){return S().map(function(E){return{type:"LineString",coordinates:E}})},p.outline=function(){return{type:"Polygon",coordinates:[g(i).concat(v(a).slice(1),g(e).reverse().slice(1),v(o).reverse().slice(1))]}},p.extent=function(E){return arguments.length?p.extentMajor(E).extentMinor(E):p.extentMinor()},p.extentMajor=function(E){return arguments.length?(i=+E[0][0],e=+E[1][0],o=+E[0][1],a=+E[1][1],i>e&&(E=i,i=e,e=E),o>a&&(E=o,o=a,a=E),p.precision(m)):[[i,o],[e,a]]},p.extentMinor=function(E){return arguments.length?(t=+E[0][0],n=+E[1][0],r=+E[0][1],s=+E[1][1],t>n&&(E=t,t=n,n=E),r>s&&(E=r,r=s,s=E),p.precision(m)):[[t,r],[n,s]]},p.step=function(E){return arguments.length?p.stepMajor(E).stepMinor(E):p.stepMinor()},p.stepMajor=function(E){return arguments.length?(h=+E[0],f=+E[1],p):[h,f]},p.stepMinor=function(E){return arguments.length?(l=+E[0],c=+E[1],p):[l,c]},p.precision=function(E){return arguments.length?(m=+E,u=Zp(r,s,90),d=Jp(t,n,m),g=Zp(o,a,90),v=Jp(i,e,m),p):m},p.extentMajor([[-180,-90+Yt],[180,90-Yt]]).extentMinor([[-180,-80-Yt],[180,80+Yt]])}var Qa=n=>n;var Fu=new Xe,Ou=new Xe,Kp,jp,Bu,zu,Os={point:Ae,lineStart:Ae,lineEnd:Ae,polygonStart:function(){Os.lineStart=Ky,Os.lineEnd=Qy},polygonEnd:function(){Os.lineStart=Os.lineEnd=Os.point=Ae,Fu.add(se(Ou)),Ou=new Xe},result:function(){var n=Fu/2;return Fu=new Xe,n}};function Ky(){Os.point=jy}function jy(n,t){Os.point=Qp,Kp=Bu=n,jp=zu=t}function Qp(n,t){Ou.add(zu*n-Bu*t),Bu=n,zu=t}function Qy(){Qp(Kp,jp)}var ku=Os;var ta=1/0,Tc=ta,to=-ta,Ac=to,tM={point:eM,lineStart:Ae,lineEnd:Ae,polygonStart:Ae,polygonEnd:Ae,result:function(){var n=[[ta,Tc],[to,Ac]];return to=Ac=-(Tc=ta=1/0),n}};function eM(n,t){n<ta&&(ta=n),n>to&&(to=n),t<Tc&&(Tc=t),t>Ac&&(Ac=t)}var ea=tM;var Hu=0,Vu=0,eo=0,Rc=0,Cc=0,na=0,Gu=0,Wu=0,no=0,nm,im,Bi,zi,Si={point:or,lineStart:tm,lineEnd:em,polygonStart:function(){Si.lineStart=sM,Si.lineEnd=rM},polygonEnd:function(){Si.point=or,Si.lineStart=tm,Si.lineEnd=em},result:function(){var n=no?[Gu/no,Wu/no]:na?[Rc/na,Cc/na]:eo?[Hu/eo,Vu/eo]:[NaN,NaN];return Hu=Vu=eo=Rc=Cc=na=Gu=Wu=no=0,n}};function or(n,t){Hu+=n,Vu+=t,++eo}function tm(){Si.point=nM}function nM(n,t){Si.point=iM,or(Bi=n,zi=t)}function iM(n,t){var e=n-Bi,i=t-zi,s=Nn(e*e+i*i);Rc+=s*(Bi+n)/2,Cc+=s*(zi+t)/2,na+=s,or(Bi=n,zi=t)}function em(){Si.point=or}function sM(){Si.point=aM}function rM(){sm(nm,im)}function aM(n,t){Si.point=sm,or(nm=Bi=n,im=zi=t)}function sm(n,t){var e=n-Bi,i=t-zi,s=Nn(e*e+i*i);Rc+=s*(Bi+n)/2,Cc+=s*(zi+t)/2,na+=s,s=zi*n-Bi*t,Gu+=s*(Bi+n),Wu+=s*(zi+t),no+=s*3,or(Bi=n,zi=t)}var Xu=Si;function Pc(n){this._context=n}Pc.prototype={_radius:4.5,pointRadius:function(n){return this._radius=n,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(n,t){switch(this._point){case 0:{this._context.moveTo(n,t),this._point=1;break}case 1:{this._context.lineTo(n,t);break}default:{this._context.moveTo(n+this._radius,t),this._context.arc(n,t,this._radius,0,rn);break}}},result:Ae};var Yu=new Xe,qu,rm,am,io,so,Ic={point:Ae,lineStart:function(){Ic.point=oM},lineEnd:function(){qu&&om(rm,am),Ic.point=Ae},polygonStart:function(){qu=!0},polygonEnd:function(){qu=null},result:function(){var n=+Yu;return Yu=new Xe,n}};function oM(n,t){Ic.point=om,rm=io=n,am=so=t}function om(n,t){io-=n,so-=t,Yu.add(Nn(io*io+so*so)),io=n,so=t}var $u=Ic;var lm,Lc,cm,hm,ia=class{constructor(t){this._append=t==null?um:lM(t),this._radius=4.5,this._=""}pointRadius(t){return this._radius=+t,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(t,e){switch(this._point){case 0:{this._append`M${t},${e}`,this._point=1;break}case 1:{this._append`L${t},${e}`;break}default:{if(this._append`M${t},${e}`,this._radius!==cm||this._append!==Lc){let i=this._radius,s=this._;this._="",this._append`m0,${i}a${i},${i} 0 1,1 0,${-2*i}a${i},${i} 0 1,1 0,${2*i}z`,cm=i,Lc=this._append,hm=this._,this._=s}this._+=hm;break}}}result(){let t=this._;return this._="",t.length?t:null}};function um(n){let t=1;this._+=n[0];for(let e=n.length;t<e;++t)this._+=arguments[t]+n[t]}function lM(n){let t=Math.floor(n);if(!(t>=0))throw new RangeError(`invalid digits: ${n}`);if(t>15)return um;if(t!==lm){let e=10**t;lm=t,Lc=function(s){let r=1;this._+=s[0];for(let a=s.length;r<a;++r)this._+=Math.round(arguments[r]*e)/e+s[r]}}return Lc}function lr(n,t){let e=3,i=4.5,s,r;function a(o){return o&&(typeof i=="function"&&r.pointRadius(+i.apply(this,arguments)),zn(o,s(r))),r.result()}return a.area=function(o){return zn(o,s(ku)),ku.result()},a.measure=function(o){return zn(o,s($u)),$u.result()},a.bounds=function(o){return zn(o,s(ea)),ea.result()},a.centroid=function(o){return zn(o,s(Xu)),Xu.result()},a.projection=function(o){return arguments.length?(s=o==null?(n=null,Qa):(n=o).stream,a):n},a.context=function(o){return arguments.length?(r=o==null?(t=null,new ia(e)):new Pc(t=o),typeof i!="function"&&r.pointRadius(i),a):t},a.pointRadius=function(o){return arguments.length?(i=typeof o=="function"?o:(r.pointRadius(+o),+o),a):i},a.digits=function(o){if(!arguments.length)return e;if(o==null)e=null;else{let l=Math.floor(o);if(!(l>=0))throw new RangeError(`invalid digits: ${o}`);e=l}return t===null&&(r=new ia(e)),a},a.projection(n).digits(e).context(t)}function ro(n){return function(t){var e=new Zu;for(var i in n)e[i]=n[i];return e.stream=t,e}}function Zu(){}Zu.prototype={constructor:Zu,point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function Ju(n,t,e){var i=n.clipExtent&&n.clipExtent();return n.scale(150).translate([0,0]),i!=null&&n.clipExtent(null),zn(e,n.stream(ea)),t(ea.result()),i!=null&&n.clipExtent(i),n}function Ku(n,t,e){return Ju(n,function(i){var s=t[1][0]-t[0][0],r=t[1][1]-t[0][1],a=Math.min(s/(i[1][0]-i[0][0]),r/(i[1][1]-i[0][1])),o=+t[0][0]+(s-a*(i[1][0]+i[0][0]))/2,l=+t[0][1]+(r-a*(i[1][1]+i[0][1]))/2;n.scale(150*a).translate([o,l])},e)}function fm(n,t,e){return Ku(n,[[0,0],t],e)}function dm(n,t,e){return Ju(n,function(i){var s=+t,r=s/(i[1][0]-i[0][0]),a=(s-r*(i[1][0]+i[0][0]))/2,o=-r*i[0][1];n.scale(150*r).translate([a,o])},e)}function pm(n,t,e){return Ju(n,function(i){var s=+t,r=s/(i[1][1]-i[0][1]),a=-r*i[0][0],o=(s-r*(i[1][1]+i[0][1]))/2;n.scale(150*r).translate([a,o])},e)}var mm=16,cM=ue(30*ve);function ju(n,t){return+t?uM(n,t):hM(n)}function hM(n){return ro({point:function(t,e){t=n(t,e),this.stream.point(t[0],t[1])}})}function uM(n,t){function e(i,s,r,a,o,l,c,h,f,u,d,g,v,m){var p=c-i,S=h-s,E=p*p+S*S;if(E>4*t&&v--){var y=a+u,w=o+d,b=l+g,R=Nn(y*y+w*w+b*b),_=ns(b/=R),T=se(se(b)-1)<Yt||se(r-f)<Yt?(r+f)/2:$n(w,y),I=n(T,_),N=I[0],U=I[1],O=N-i,L=U-s,P=S*O-p*L;(P*P/E>t||se((p*O+S*L)/E-.5)>.3||a*u+o*d+l*g<cM)&&(e(i,s,r,a,o,l,N,U,T,y/=R,w/=R,b,v,m),m.point(N,U),e(N,U,T,y,w,b,c,h,f,u,d,g,v,m))}}return function(i){var s,r,a,o,l,c,h,f,u,d,g,v,m={point:p,lineStart:S,lineEnd:y,polygonStart:function(){i.polygonStart(),m.lineStart=w},polygonEnd:function(){i.polygonEnd(),m.lineStart=S}};function p(_,T){_=n(_,T),i.point(_[0],_[1])}function S(){f=NaN,m.point=E,i.lineStart()}function E(_,T){var I=oi([_,T]),N=n(_,T);e(f,u,h,d,g,v,f=N[0],u=N[1],h=_,d=I[0],g=I[1],v=I[2],mm,i),i.point(f,u)}function y(){m.point=p,i.lineEnd()}function w(){S(),m.point=b,m.lineEnd=R}function b(_,T){E(s=_,T),r=f,a=u,o=d,l=g,c=v,m.point=E}function R(){e(f,u,h,d,g,v,r,a,s,o,l,c,mm,i),m.lineEnd=y,y()}return m}}var fM=ro({point:function(n,t){this.stream.point(n*ve,t*ve)}});function dM(n){return ro({point:function(t,e){var i=n(t,e);return this.stream.point(i[0],i[1])}})}function pM(n,t,e,i,s){function r(a,o){return a*=i,o*=s,[t+n*a,e-n*o]}return r.invert=function(a,o){return[(a-t)/n*i,(e-o)/n*s]},r}function gm(n,t,e,i,s,r){if(!r)return pM(n,t,e,i,s);var a=ue(r),o=ge(r),l=a*n,c=o*n,h=a/n,f=o/n,u=(o*e-a*t)/n,d=(o*t+a*e)/n;function g(v,m){return v*=i,m*=s,[l*v-c*m+t,e-c*v-l*m]}return g.invert=function(v,m){return[i*(h*v-f*m+u),s*(d-f*v-h*m)]},g}function Qu(n){return mM(function(){return n})()}function mM(n){var t,e=150,i=480,s=250,r=0,a=0,o=0,l=0,c=0,h,f=0,u=1,d=1,g=null,v=Pu,m=null,p,S,E,y=Qa,w=.5,b,R,_,T,I;function N(P){return _(P[0]*ve,P[1]*ve)}function U(P){return P=_.invert(P[0],P[1]),P&&[P[0]*wn,P[1]*wn]}N.stream=function(P){return T&&I===P?T:T=fM(dM(h)(v(b(y(I=P)))))},N.preclip=function(P){return arguments.length?(v=P,g=void 0,L()):v},N.postclip=function(P){return arguments.length?(y=P,m=p=S=E=null,L()):y},N.clipAngle=function(P){return arguments.length?(v=+P?kp(g=P*ve):(g=null,Pu),L()):g*wn},N.clipExtent=function(P){return arguments.length?(y=P==null?(m=p=S=E=null,Qa):Iu(m=+P[0][0],p=+P[0][1],S=+P[1][0],E=+P[1][1]),L()):m==null?null:[[m,p],[S,E]]},N.scale=function(P){return arguments.length?(e=+P,O()):e},N.translate=function(P){return arguments.length?(i=+P[0],s=+P[1],O()):[i,s]},N.center=function(P){return arguments.length?(r=P[0]%360*ve,a=P[1]%360*ve,O()):[r*wn,a*wn]},N.rotate=function(P){return arguments.length?(o=P[0]%360*ve,l=P[1]%360*ve,c=P.length>2?P[2]%360*ve:0,O()):[o*wn,l*wn,c*wn]},N.angle=function(P){return arguments.length?(f=P%360*ve,O()):f*wn},N.reflectX=function(P){return arguments.length?(u=P?-1:1,O()):u<0},N.reflectY=function(P){return arguments.length?(d=P?-1:1,O()):d<0},N.precision=function(P){return arguments.length?(b=ju(R,w=P*P),L()):Nn(w)},N.fitExtent=function(P,G){return Ku(N,P,G)},N.fitSize=function(P,G){return fm(N,P,G)},N.fitWidth=function(P,G){return dm(N,P,G)},N.fitHeight=function(P,G){return pm(N,P,G)};function O(){var P=gm(e,0,0,u,d,f).apply(null,t(r,a)),G=gm(e,i-P[0],s-P[1],u,d,f);return h=Fp(o,l,c),R=Ka(t,G),_=Ka(h,R),b=ju(R,w),L()}function L(){return T=I=null,N}return function(){return t=n.apply(this,arguments),N.invert=t.invert&&U,O()}}function Nc(n,t){return[n,t]}Nc.invert=Nc;function ao(){return Qu(Nc).scale(152.63)}function tf(n){return n}function Dc(n){if(n==null)return tf;var t,e,i=n.scale[0],s=n.scale[1],r=n.translate[0],a=n.translate[1];return function(o,l){l||(t=e=0);var c=2,h=o.length,f=new Array(h);for(f[0]=(t+=o[0])*i+r,f[1]=(e+=o[1])*s+a;c<h;)f[c]=o[c],++c;return f}}function xm(n,t){for(var e,i=n.length,s=i-t;s<--i;)e=n[s],n[s++]=n[i],n[i]=e}function ef(n,t){return typeof t=="string"&&(t=n.objects[t]),t.type==="GeometryCollection"?{type:"FeatureCollection",features:t.geometries.map(function(e){return _m(n,e)})}:_m(n,t)}function _m(n,t){var e=t.id,i=t.bbox,s=t.properties==null?{}:t.properties,r=Uc(n,t);return e==null&&i==null?{type:"Feature",properties:s,geometry:r}:i==null?{type:"Feature",id:e,properties:s,geometry:r}:{type:"Feature",id:e,bbox:i,properties:s,geometry:r}}function Uc(n,t){var e=Dc(n.transform),i=n.arcs;function s(h,f){f.length&&f.pop();for(var u=i[h<0?~h:h],d=0,g=u.length;d<g;++d)f.push(e(u[d],d));h<0&&xm(f,g)}function r(h){return e(h)}function a(h){for(var f=[],u=0,d=h.length;u<d;++u)s(h[u],f);return f.length<2&&f.push(f[0]),f}function o(h){for(var f=a(h);f.length<4;)f.push(f[0]);return f}function l(h){return h.map(o)}function c(h){var f=h.type,u;switch(f){case"GeometryCollection":return{type:f,geometries:h.geometries.map(c)};case"Point":u=r(h.coordinates);break;case"MultiPoint":u=h.coordinates.map(r);break;case"LineString":u=a(h.arcs);break;case"MultiLineString":u=h.arcs.map(a);break;case"Polygon":u=l(h.arcs);break;case"MultiPolygon":u=h.arcs.map(l);break;default:return null}return{type:f,coordinates:u}}return c(t)}function nf(n,t){var e={},i={},s={},r=[],a=-1;t.forEach(function(c,h){var f=n.arcs[c<0?~c:c],u;f.length<3&&!f[1][0]&&!f[1][1]&&(u=t[++a],t[a]=c,t[h]=u)}),t.forEach(function(c){var h=o(c),f=h[0],u=h[1],d,g;if(d=s[f])if(delete s[d.end],d.push(c),d.end=u,g=i[u]){delete i[g.start];var v=g===d?d:d.concat(g);i[v.start=d.start]=s[v.end=g.end]=v}else i[d.start]=s[d.end]=d;else if(d=i[u])if(delete i[d.start],d.unshift(c),d.start=f,g=s[f]){delete s[g.end];var m=g===d?d:g.concat(d);i[m.start=g.start]=s[m.end=d.end]=m}else i[d.start]=s[d.end]=d;else d=[c],i[d.start=f]=s[d.end=u]=d});function o(c){var h=n.arcs[c<0?~c:c],f=h[0],u;return n.transform?(u=[0,0],h.forEach(function(d){u[0]+=d[0],u[1]+=d[1]})):u=h[h.length-1],c<0?[u,f]:[f,u]}function l(c,h){for(var f in c){var u=c[f];delete h[u.start],delete u.start,delete u.end,u.forEach(function(d){e[d<0?~d:d]=1}),r.push(u)}}return l(s,i),l(i,s),t.forEach(function(c){e[c<0?~c:c]||r.push([c])}),r}function Fc(n){return Uc(n,vm.apply(this,arguments))}function vm(n,t,e){var i,s,r;if(arguments.length>1)i=gM(n,t,e);else for(s=0,i=new Array(r=n.arcs.length);s<r;++s)i[s]=s;return{type:"MultiLineString",arcs:nf(n,i)}}function gM(n,t,e){var i=[],s=[],r;function a(f){var u=f<0?~f:f;(s[u]||(s[u]=[])).push({i:f,g:r})}function o(f){f.forEach(a)}function l(f){f.forEach(o)}function c(f){f.forEach(l)}function h(f){switch(r=f,f.type){case"GeometryCollection":f.geometries.forEach(h);break;case"LineString":o(f.arcs);break;case"MultiLineString":case"Polygon":l(f.arcs);break;case"MultiPolygon":c(f.arcs);break}}return h(t),s.forEach(e==null?function(f){i.push(f[0].i)}:function(f){e(f[0].g,f[f.length-1].g)&&i.push(f[0].i)}),i}function sf(n,t){for(var e=0,i=n.length;e<i;){var s=e+i>>>1;n[s]<t?e=s+1:i=s}return e}function rf(n){var t={},e=n.map(function(){return[]});function i(v,m){v.forEach(function(p){p<0&&(p=~p);var S=t[p];S?S.push(m):t[p]=[m]})}function s(v,m){v.forEach(function(p){i(p,m)})}function r(v,m){v.type==="GeometryCollection"?v.geometries.forEach(function(p){r(p,m)}):v.type in a&&a[v.type](v.arcs,m)}var a={LineString:i,MultiLineString:s,Polygon:s,MultiPolygon:function(v,m){v.forEach(function(p){s(p,m)})}};n.forEach(r);for(var o in t)for(var l=t[o],c=l.length,h=0;h<c;++h)for(var f=h+1;f<c;++f){var u=l[h],d=l[f],g;(g=e[u])[o=sf(g,d)]!==d&&g.splice(o,0,d),(g=e[d])[o=sf(g,u)]!==u&&g.splice(o,0,u)}return e}var ki=8192,an=ki/360,kc={sans:'"RGSans","PingFang SC","Microsoft YaHei","Noto Sans CJK SC",sans-serif',sansB:'"RGSansB","PingFang SC","Microsoft YaHei","Noto Sans CJK SC",sans-serif',serifB:'"RGSerifB","Songti SC","SimSun","Noto Serif CJK SC",serif'},sa=["#fad545","#f59ac3","#a4d65e","#f8a64c","#c49fe9","#78d3c3","#f68b7b","#dbe769"],ym={156:0,643:2,356:1,496:1,398:3,"036":1,840:3,124:4,"076":2,304:5,392:6,"010":-1,360:6};function yM(n){let t=n.objects.countries.geometries,e=ef(n,n.objects.countries).features,i=rf(t),s=e.map((a,o)=>[o,dc(a)]).sort((a,o)=>o[1]-a[1]).map(a=>a[0]),r=new Array(e.length).fill(-2);e.forEach((a,o)=>{let l=String(a.id);ym[l]!==void 0&&(r[o]=ym[l])});for(let a of s){if(r[a]!==-2)continue;let o=new Set(i[a].map(h=>r[h])),l=(a*5+3)%sa.length,c=0;for(;o.has(l)&&c<sa.length;)l=(l+1)%sa.length,c++;r[a]=l}return{feats:e,col:r}}function Mm(n,t){let e=parseInt(n.slice(1),16),i=e>>16&255,s=e>>8&255,r=e&255;return`rgb(${Math.round(i*t)},${Math.round(s*t)},${Math.round(r*t)})`}function lf(n,t,e,i,s,r){let a=lr(t,n);n.clearRect(0,0,e,i);let{feats:o,col:l,bboxes:c}=r,h=r.visible||(()=>!0);o.forEach((u,d)=>{h(c[d])&&(n.beginPath(),a(u),n.fillStyle=l[d]===-1?"#f4f7fa":sa[l[d]],n.fill())});let f=Math.min(.24*s,14);n.lineJoin="round",o.forEach((u,d)=>{l[d]<0||!h(c[d])||(n.save(),n.beginPath(),a(u),n.clip(),n.strokeStyle=Mm(sa[l[d]],.82),n.globalAlpha=.38,n.lineWidth=f*2,n.stroke(),n.strokeStyle=Mm(sa[l[d]],.74),n.globalAlpha=.5,n.lineWidth=f*.8,n.stroke(),n.restore())}),n.globalAlpha=1}function Em(n,t,e,i,s){let r=lr(t,n);n.fillStyle="#000",n.fillRect(0,0,e,i),n.fillStyle="#fff";for(let a of s.glaciers.features)n.beginPath(),r(a),n.fill()}function cf(n,t,e,i,s,r,a){let o=lr(t,n),l=s/an,c=u=>u*Math.pow(l,.55)*(e>=8192||l>1,1),{vec:h,topo:f}=r;n.lineJoin="round",n.lineCap="round",n.beginPath();for(let u of h.lakes.features)o(u);n.fillStyle="#86cdf0",n.fill(),n.strokeStyle="rgba(30,100,190,0.9)",n.lineWidth=c(.7),n.stroke();for(let[u,d,g]of[[9,.75,.75],[5,1.1,.85],[3,1.5,.95]]){n.beginPath();for(let v of h.rivers.features){let m=v.properties.scalerank;m<=u&&(u===9?m>5:u!==5||m>3)&&o(v)}n.strokeStyle=`rgba(28,105,200,${g})`,n.lineWidth=c(d),n.stroke()}if(a.grid){n.beginPath(),o(Ec().step([15,15]).extentMajor([[-180,-80],[180,80]]).extentMinor([[-180,-80],[180,80]])()),n.strokeStyle="rgba(25,60,135,0.5)",n.lineWidth=c(.8),n.stroke();let u=(g,v,m,p)=>{n.beginPath(),o({type:"LineString",coordinates:Array.from({length:361},(S,E)=>[-180+E,g])}),n.setLineDash(m.map(S=>S*l*an/22.75)),n.strokeStyle=v,n.lineWidth=c(p),n.stroke(),n.setLineDash([])};for(let g of[23.44,-23.44])u(g,"rgba(200,35,45,0.9)",[14,9],1.7);for(let g of[66.56,-66.56])u(g,"rgba(30,70,160,0.9)",[14,9],1.7);let d=[[180,90],[180,75],[-169,68],[-169,65.5],[172.5,60],[172.5,52],[180,47.5],[180,-1],[-160,-1],[-160,6],[-150,6],[-150,-10],[-157,-10],[-172.5,-12],[-172.5,-45],[180,-51],[180,-90]];n.beginPath(),o({type:"LineString",coordinates:d}),n.setLineDash([10*l,6*l]),n.strokeStyle="rgba(40,40,60,0.85)",n.lineWidth=c(1.5),n.stroke(),n.setLineDash([])}n.beginPath(),o(r.coast),n.strokeStyle="rgba(25,60,115,0.9)",n.lineWidth=c(1.15),n.stroke(),n.beginPath(),o(h.provLines),n.setLineDash([5*Math.pow(l,.8),2.6*Math.pow(l,.8)]),n.strokeStyle="rgba(255,250,240,0.55)",n.lineWidth=c(1.9),n.stroke(),n.strokeStyle="rgba(236,112,18,0.98)",n.lineWidth=c(1.15),n.stroke(),n.setLineDash([]),n.beginPath(),o(r.borders),n.strokeStyle="rgba(255,255,255,0.55)",n.lineWidth=c(2.6),n.stroke(),n.strokeStyle="rgba(110,30,60,0.95)",n.lineWidth=c(1.35),n.stroke(),n.beginPath();for(let u of h.ninedash.features)o(u);if(n.strokeStyle="rgba(120,25,55,0.95)",n.lineWidth=c(2.2),n.stroke(),a.grid){let u=t([0,0]),d=Math.max(3,Math.min(.42*s,.42*an*Math.pow(s/an,.6)));n.save();let g=(v,m)=>{let p=t([v,0]),S=t([m,0]);!p||!S||S[0]<p[0]||(n.fillStyle="rgba(20,20,25,0.95)",n.fillRect(p[0],u[1]-d/2,S[0]-p[0],d))};for(let v=-180;v<180;v+=10)g(v,v+10.05);n.fillStyle="rgba(255,255,255,0.95)";for(let v=-180;v<180;v+=1){let m=t([v+.2,0]),p=t([v+.8,0]);!m||!p||p[0]<m[0]||n.fillRect(m[0],u[1]-d*.22,p[0]-m[0],d*.44)}n.restore()}}var Tm={cont:{font:"serifB",fill:"rgba(222,28,34,0.92)",halo:"rgba(255,255,255,0.7)",hw:.07},ocean:{font:"serifB",fill:"rgba(22,58,140,0.72)",halo:null,enFont:"serifB",enFill:"rgba(18,42,110,0.78)",enK:.36,enSp:.6},country:{font:"sansB",fill:"#15171c",halo:"rgba(255,255,255,0.6)",hw:.13,enFont:"sansB",enFill:"#2c2f36",enK:.3,enSp:.22,enMin:.3},prov:{font:"sans",fill:"#5b3d2a",halo:"rgba(255,255,255,0.55)",hw:.14,enFont:"sans",enFill:"#6a4a33",enK:.36,enSp:.12},capital:{font:"sansB",fill:"#15171c",halo:"rgba(255,255,255,0.7)",hw:.18,enFont:"sans",enFill:"#25282e",enK:.66},pcap:{font:"sansB",fill:"#1d1f24",halo:"rgba(255,255,255,0.7)",hw:.18,enFont:"sans",enFill:"#25282e",enK:.66},city:{font:"sans",fill:"#202328",halo:"rgba(255,255,255,0.6)",hw:.16,enFont:"sans",enFill:"#2b2e34",enK:.68},sea:{font:"serifB",fill:"rgba(20,62,150,0.85)",halo:null,it:!0,enFont:"sans",enFill:"rgba(20,62,150,0.85)",enK:.5,enIt:!0},island_cn:{font:"sans",fill:"#1d1f24",halo:"rgba(255,255,255,0.6)",hw:.16,enFont:"sans",enFill:"#2b2e34",enK:.66},range:{font:"sansB",fill:"#733812",halo:"rgba(255,245,225,0.55)",hw:.14,enFont:"sans",enFill:"#7a4320",enK:.5,enIt:!0},land:{font:"sansB",fill:"#7d4a1e",halo:"rgba(255,245,225,0.5)",hw:.14,enFont:"sans",enFill:"#80502a",enK:.5,enIt:!0},peak:{font:"sans",fill:"#4a2a12",halo:"rgba(255,255,255,0.6)",hw:.16,enFont:"sans",enFill:"#5a2c0e",enK:.8},island:{font:"sans",fill:"#2a2d33",halo:"rgba(255,255,255,0.5)",hw:.14,enFont:"sans",enFill:"#2a2d33",enK:.62,enIt:!0},lake:{font:"sans",fill:"#1452a8",halo:"rgba(255,255,255,0.55)",hw:.14,it:!0,enFont:"sans",enFill:"#1452a8",enK:.64,enIt:!0},river:{font:"sans",fill:"#1452a8",halo:"rgba(255,255,255,0.55)",hw:.14,it:!0,enFont:"sans",enFill:"#1452a8",enK:.64,enIt:!0},curw:{font:"sans",fill:"rgba(200,30,30,0.95)",halo:"rgba(255,255,255,0.45)",hw:.12,it:!0},curc:{font:"sans",fill:"rgba(25,60,190,0.95)",halo:"rgba(255,255,255,0.45)",hw:.12,it:!0}},Sm=["cont","ocean","country","capital","peak","prov","pcap","island_cn","sea","range","land","curw","curc","city","island","lake","river"],Bc={capital:.46,pcap:.34,city:.2,peak:.32},bm=new Map,Oc=null;function MM(n,t){let e=n+t,i=bm.get(e);return i===void 0&&(Oc||(Oc=document.createElement("canvas").getContext("2d")),Oc.font=`100px ${kc[n]}`,i=Oc.measureText(t).width/100,bm.set(e,i)),i}function af(n,t,e){let i=[...t].map(o=>MM(n,o)),s=i.reduce((o,l)=>o+l,0)+e*Math.max(0,i.length-1),r=-s/2,a=[];return i.forEach(o=>{a.push(r+o/2),r+=o+e}),{ws:i,cx:a,total:s}}var of=class{constructor(t,e,i=48){this.W=t,this.H=e,this.c=i,this.m=new Map}*cells(t){let e=this.c;for(let i=Math.floor(t[1]/e);i<=Math.floor(t[3]/e);i++)for(let s=Math.floor(t[0]/e);s<=Math.floor(t[2]/e);s++)yield(s%(this.W/e)+this.W/e)%(this.W/e)+i*1e5}norm(t){let e=Math.floor(t[0]/this.W)*this.W;return[t[0]-e,t[1],t[2]-e,t[3]]}hit(t){for(let e of t){e=this.norm(e);for(let i of this.cells(e)){let s=this.m.get(i);if(s){for(let r of s)for(let a of[0,this.W,-this.W])if(e[0]<r[2]+a&&e[2]>r[0]+a&&e[1]<r[3]&&e[3]>r[1])return!0}}}return!1}add(t){for(let e of t){e=this.norm(e);for(let i of this.cells(e)){let s=this.m.get(i);s||this.m.set(i,s=[]),s.push(e)}}}};function oo(n,t,e,i,s,r,a){let o=[],l=Math.cos(s),c=Math.sin(s);if(Math.abs(s)<.001&&r.total*e<30*e){let h=r.total*e/2+a,f=e*.55+a;return o.push([n-h*i,t-f,n+h*i,t+f]),o}return r.cx.forEach((h,f)=>{let u=h*e,d=r.ws[f]*e,g=n+i*(u*l),v=t+u*c,m=(Math.abs(l)*d+Math.abs(c)*e)/2+a,p=(Math.abs(c)*d+Math.abs(l)*e)/2+a;o.push([g-m*i,v-p,g+m*i,v+p])}),o}var zc=Math.PI/180;function Am(n,t=1,e=0,i=[]){let s=ki,r=ki/2,a=new of(s,r,48);a.add(i);let o=(h,f)=>[(h+180)/360*s,(90-f)/180*r],l=n.filter(h=>(h[9]||0)<=e).map(h=>({cls:h[0],zh:h[1],en:h[2],lon:h[3],lat:h[4],size:h[5],rot:h[6],sp:h[7],rank:h[8]}));l.sort((h,f)=>Sm.indexOf(h.cls)-Sm.indexOf(f.cls)||h.rank-f.rank);let c=[];for(let h of l){let f=Tm[h.cls];if(!f)continue;let u=1/Math.max(.2,Math.cos(h.lat*zc)),g=h.cls==="cont"||h.cls==="ocean"||h.cls==="country"&&h.size>1.25?Math.max(t,.8):t;if(t<.8&&(h.cls==="cont"||h.cls==="country"&&h.size>1.25))continue;let v=h.size*an*g,[m,p]=o(h.lon,h.lat),S=h.rot*zc,E=af(f.font,h.zh,h.sp),y=v*.08,w=h.en&&f.enFont?af(f.enFont,h.en,f.enSp||0):null,b=Math.max(v*(f.enK||.4),f.enMin?f.enMin*an*g:0);if(h.cls in Bc){let U=Bc[h.cls]*an*g,O=[[m-U*.6*u,p-U*.6,m+U*.6*u,p+U*.6]],L=h.cls==="capital"||h.cls==="pcap";if(!L&&a.hit(O))continue;let P=E.total*v,G=w?w.total*b:0,X=Math.max(P,G),et=U*.55+v*.15,$=v*.5+b*.62,nt=[[1,0],[-1,0],[0,-1],[0,1],[1,-.8],[1,.8],[-1,-.8],[-1,.8]],K=null;for(let[St,xt]of nt){let ne=m+St*(et+X/2)*u,Ht=p;xt<0?Ht=p-(U*.5+v*.15)-(w?$:0)-v*.5*(St===0?1:.4):xt>0&&(Ht=p+(U*.5+v*.15)+v*.5*(St===0?1:.4));let ft=oo(ne,Ht,v,u,0,E,y);if(w&&(ft=ft.concat(oo(ne,Ht+$,b,u,0,w,b*.06))),!a.hit(ft)){K={cx:ne,cy:Ht,bx:ft};break}}if(!K&&!L)continue;a.add(O),K&&a.add(K.bx),c.push({...h,k:u,S:v,x:m,y:p,lx:K?K.cx:null,ly:K?K.cy:null,lay:E,enLay:w,enS:b,eDy:$});continue}let R=v*.62+b*.75,_=(U,O)=>{let L=oo(U,O,v,u,S,E,y);if(w){let P=-Math.sin(S)*R*u,G=Math.cos(S)*R;L=L.concat(oo(U+P,O+G,b,u,S,w,b*.1))}return L},T=h.cls==="cont"||h.cls==="ocean"||h.cls==="country"&&-h.rank>25e4||h.cls==="prov",I=null,N=[[0,0],[0,-.7],[0,.7],[.6,0],[-.6,0],[0,-1.3],[0,1.3]];for(let[U,O]of N){let L=m+U*E.total*v*u,P=p+O*v,G=_(L,P);if(!a.hit(G)){I={cx:L,cy:P,bx:G,en:!0};break}}if(!I&&w&&!T){let U=oo(m,p,v,u,S,E,y);a.hit(U)||(I={cx:m,cy:p,bx:U,en:!1})}if(!I){if(!T)continue;I={cx:m,cy:p,bx:_(m,p),en:!0}}a.add(I.bx),c.push({...h,k:u,S:v,x:m,y:p,lx:I.cx,ly:I.cy,lay:E,enLay:I.en?w:null,enS:b,eDy:R})}return c}function lo(n,t,e,i,s,r,a,o,l,c,h,f,u){n.save(),n.translate(t,e),n.scale(s,1),r&&n.rotate(r),n.font=`${u?"italic ":""}${i}px ${kc[a]}`,n.textAlign="center",n.textBaseline="middle";let d=[...o];h&&(n.strokeStyle=h,n.lineWidth=i*(f||.15),n.lineJoin="round",d.forEach((g,v)=>n.strokeText(g,l.cx[v]*i,0))),n.fillStyle=c,d.forEach((g,v)=>n.fillText(g,l.cx[v]*i,0)),n.restore()}function SM(n,t,e,i,s){n.save(),n.translate(t,e),n.scale(s,1),n.beginPath();for(let r=0;r<10;r++){let a=-Math.PI/2+r*Math.PI/5,o=r%2?i*.42:i;n.lineTo(Math.cos(a)*o,Math.sin(a)*o)}n.closePath(),n.fillStyle="#e3141b",n.fill(),n.lineWidth=i*.22,n.strokeStyle="rgba(255,255,255,0.9)",n.stroke(),n.fill(),n.restore()}function hf(n,t,e,i,s,r){t==="capital"?SM(n,e,i,s*.62,r):t==="pcap"?(n.save(),n.translate(e,i),n.scale(r,1),n.beginPath(),n.arc(0,0,s*.5,0,2*Math.PI),n.fillStyle="#fff",n.fill(),n.lineWidth=s*.16,n.strokeStyle="#1b1b1f",n.stroke(),n.beginPath(),n.arc(0,0,s*.2,0,2*Math.PI),n.fillStyle="#d01818",n.fill(),n.restore()):t==="city"?(n.save(),n.translate(e,i),n.scale(r,1),n.beginPath(),n.arc(0,0,s*.46,0,2*Math.PI),n.fillStyle="#fbfbf7",n.fill(),n.lineWidth=s*.22,n.strokeStyle="#1b1b1f",n.stroke(),n.restore()):t==="peak"&&(n.save(),n.translate(e,i),n.scale(r,1),n.beginPath(),n.moveTo(0,-s*.55),n.lineTo(s*.5,s*.38),n.lineTo(-s*.5,s*.38),n.closePath(),n.fillStyle="#5a2c0e",n.fill(),n.restore())}function uf(n,t,e,i,s,r,a=1,o=!0){for(let l=t.length-1;l>=0;l--){let c=t[l];if(s&&!s(c.lon,c.lat))continue;let h=Tm[c.cls],f=e(c.lon,c.lat);if(!f)continue;let u=r?[0,...f[0]<r*.06?[r]:[],...f[0]>r*.94?[-r]:[]]:[0];for(let d of u){let g=f[0]+d,v=f[1],m=c.S*i*a,p=c.k,S=i*a;if(m<1.2)continue;let E=c.enS*S,y=o&&c.enLay&&E>=2.2;if(c.cls in Bc){if(hf(n,c.cls,g,v,Bc[c.cls]*an*S*(c.S/(c.size*an)),p),c.lx==null)continue;let _=g+(c.lx-c.x)*S,T=v+(c.ly-c.y)*S;lo(n,_,T,m,p,0,h.font,c.zh,c.lay,h.fill,h.halo,h.hw,h.it),y&&lo(n,_,T+c.eDy*S,E,p,0,h.enFont,c.en,c.enLay,h.enFill,h.halo,h.hw,h.enIt);continue}let w=g+(c.lx-c.x)*S,b=v+(c.ly-c.y)*S,R=c.rot*zc;if(lo(n,w,b,m,p,R,h.font,c.zh,c.lay,h.fill,h.halo,h.hw,h.it),y){let _=c.eDy*S;lo(n,w-Math.sin(R)*_*p,b+Math.cos(R)*_,E,p,R,h.enFont,c.en,c.enLay,h.enFill,h.halo,h.hw,h.enIt)}}}}function ff(n,t,e,i,s){let r=.42*an*e;if(r<1.5)return;let a=(l,c,h,f)=>{if(i&&!i(c,h))return;let u=t(c,h);if(!u)return;let d=1/Math.max(.2,Math.cos(h*zc)),g=af("sans",l,0),v=s?[0,...u[0]<s*.03?[s]:[],...u[0]>s*.97?[-s]:[]]:[0];for(let m of v)lo(n,u[0]+m+g.total*r*.5*d+r*.2,u[1]+f*r,r,d,0,"sans",l,g,"rgba(25,55,125,0.9)","rgba(255,255,255,0.5)",.14)};for(let l=-165;l<=180;l+=15){let c=l===0?"0\xB0":l===180?"180\xB0":`${Math.abs(l)}\xB0${l>0?"E":"W"}`;a(c,l,0,-.95)}for(let l of[-150,-60,30,120])for(let c=-75;c<=75;c+=15)c!==0&&a(`${Math.abs(c)}\xB0${c>0?"N":"S"}`,l,c,-.6);let o=(l,c,h)=>a(l,c,h,-.7);for(let l of[-100,15,140])o("\u5317\u56DE\u5F52\u7EBF",l,23.44),o("\u5357\u56DE\u5F52\u7EBF",l,-23.44);for(let l of[-30,100])o("\u5317\u6781\u5708",l,66.56),o("\u5357\u6781\u5708",l,-66.56);for(let l of[-45,75,165])o("\u8D64\u9053",l+7,0)}function wm(n){for(let t of n.features){let e=t.geometry;if(!e)continue;let i=e.type==="Polygon"?[e.coordinates]:e.type==="MultiPolygon"?e.coordinates:[];for(let s of i)if(dc({type:"Polygon",coordinates:[s[0]]})>2*Math.PI)for(let r of s)r.reverse()}}function Rm(n){wm(n.lakes),wm(n.glaciers);let t=n.countries,{feats:e,col:i}=yM(t),s=e.map(r=>Au(r));return{vec:n,topo:t,feats:e,col:i,bboxes:s,borders:Fc(t,t.objects.countries,(r,a)=>r!==a),coast:Fc(t,t.objects.countries,(r,a)=>r===a)}}var Bs=Math.PI/180,bM=[["\u58A8\u897F\u54E5\u6E7E\u6696\u6D41","Gulf Stream",1,[[-81,24.6],[-79.8,27.5],[-79.4,30.5],[-76.5,34],[-72.5,36.8],[-66,39],[-57,40.8],[-47,42.5]],4],["\u5317\u5927\u897F\u6D0B\u6696\u6D41","North Atlantic Drift",1,[[-42,45],[-33,48.5],[-24,52],[-15,56],[-6,60],[3,64],[11,68],[20,71.2],[32,72.5]],3],["\u52A0\u90A3\u5229\u5BD2\u6D41","Canary Current",0,[[-13,41],[-14.5,35.5],[-17,29.5],[-19.5,24],[-22,18.5],[-24,14]],2],["\u5317\u8D64\u9053\u6696\u6D41","N. Equatorial Current",1,[[-24,13],[-34,12.5],[-44,13],[-54,14],[-62,15.5]],2],["\u5357\u8D64\u9053\u6696\u6D41","S. Equatorial Current",1,[[8,-3],[-4,-4],[-16,-5],[-26,-6],[-33,-7.5]],2],["\u5DF4\u897F\u6696\u6D41","Brazil Current",1,[[-34.5,-11],[-37,-16],[-38.8,-21],[-42,-25.5],[-46.5,-30],[-51,-34.5],[-54,-38]],3],["\u798F\u514B\u5170\u5BD2\u6D41","Falklands Current",0,[[-64,-53],[-60.5,-48],[-57.5,-43.5],[-55.5,-40]],1],["\u672C\u683C\u62C9\u5BD2\u6D41","Benguela Current",0,[[16.5,-34.5],[14.5,-30],[12.8,-25],[11.2,-20],[9.5,-15],[7,-10.5]],2],["\u5384\u52A0\u52D2\u65AF\u6696\u6D41","Agulhas Current",1,[[40.8,-15],[40.5,-20],[37.5,-25],[33.5,-29.5],[29.5,-32.8],[25,-35.4],[20.5,-37.2]],4],["\u897F\u6FB3\u5927\u5229\u4E9A\u5BD2\u6D41","W. Australian Current",0,[[113,-36],[111.5,-31],[110.5,-26],[108.5,-21],[105,-17]],2],["\u4E1C\u6FB3\u5927\u5229\u4E9A\u6696\u6D41","E. Australian Current",1,[[154.5,-15],[155,-20],[154.6,-25],[154,-29.5],[153,-33.5],[151.5,-37.5]],3],["\u65E5\u672C\u6696\u6D41","Kuroshio",1,[[122.6,21.5],[123.2,24.5],[125.8,27.8],[129.5,30.3],[133.5,32.5],[138,34.2],[141.5,36],[146,38.2]],4],["\u5343\u5C9B\u5BD2\u6D41","Oyashio",0,[[164,58],[161,53.8],[157,49.5],[152,45.6],[147,42.6],[143.8,40.6]],2],["\u5317\u592A\u5E73\u6D0B\u6696\u6D41","North Pacific Current",1,[[152,40.5],[164,42],[176,43],[-172,44],[-160,45],[-148,46],[-137,47]],3],["\u963F\u62C9\u65AF\u52A0\u6696\u6D41","Alaska Current",1,[[-136,50.5],[-138.5,54.5],[-144,57.8],[-151,57.8],[-158,55.5]],2],["\u52A0\u5229\u798F\u5C3C\u4E9A\u5BD2\u6D41","California Current",0,[[-129,47.5],[-127.5,43],[-125,38.5],[-121.5,33.5],[-117.5,28],[-114.5,23.5]],2],["\u5317\u8D64\u9053\u6696\u6D41","N. Equatorial Current",1,[[-112,13.5],[-130,13],[-148,13],[-166,13.5],[176,14],[158,14.5],[140,15]],3],["\u5357\u8D64\u9053\u6696\u6D41","S. Equatorial Current",1,[[-86,-4.5],[-104,-6],[-122,-7],[-140,-8],[-158,-9.5],[-176,-11],[166,-12.5]],2],["\u79D8\u9C81\u5BD2\u6D41","Peru Current",0,[[-76,-45],[-76.5,-38.5],[-74.8,-31],[-74,-23],[-77.5,-15],[-81.5,-8],[-84,-2.5]],3],["\u62C9\u5E03\u62C9\u591A\u5BD2\u6D41","Labrador Current",0,[[-62,64.5],[-58.5,59.5],[-55.5,54.5],[-52,50.2],[-49.5,46.5]],2],["\u4E1C\u683C\u9675\u5170\u5BD2\u6D41","East Greenland Current",0,[[-12,78],[-17.5,72.5],[-25,67.8],[-33,64.5],[-41,61]],2],["\u7D22\u9A6C\u91CC\u6D0B\u6D41","Somali Current",1,[[42,-1],[46,3],[50,7.5],[53,11]],1],["\u897F\u98CE\u6F02\u6D41","West Wind Drift",0,[[-60,-55],[-30,-51.5],[0,-50],[30,-49.5],[60,-50],[90,-51],[120,-52],[150,-53],[180,-53.5],[-150,-54],[-120,-55],[-90,-56]],7]];function wM(n,t=10){let e=[n[0].slice()];for(let s=1;s<n.length;s++){let r=n[s][0];for(;r-e[s-1][0]>180;)r-=360;for(;r-e[s-1][0]<-180;)r+=360;e.push([r,n[s][1]])}let i=[];for(let s=0;s<e.length-1;s++){let r=e[Math.max(0,s-1)],a=e[s],o=e[s+1],l=e[Math.min(e.length-1,s+2)];for(let c=0;c<t;c++){let h=c/t,f=h*h,u=f*h;i.push([0,1].map(d=>.5*(2*a[d]+(-r[d]+o[d])*h+(2*r[d]-5*a[d]+4*o[d]-l[d])*f+(-r[d]+3*a[d]-3*o[d]+l[d])*u)))}}return i.push(e[e.length-1]),i}var co=n=>(n+540)%360-180,Cm=bM.map(([n,t,e,i,s])=>{let r=wM(i),a=[0];for(let o=1;o<r.length;o++){let l=Math.cos((r[o][1]+r[o-1][1])/2*Bs);a.push(a[o-1]+Math.hypot((r[o][0]-r[o-1][0])*l,r[o][1]-r[o-1][1]))}return{zh:n,en:t,warm:e,d:r,L:a,li:s,pts:i}});function Pm(){return Cm.map(n=>{let t=n.pts[Math.min(n.li,n.pts.length-1)],e=n.pts[Math.min(n.li+1,n.pts.length-1)],i=n.pts[Math.max(0,n.li-1)],s=Math.cos(t[1]*Bs),r=Math.atan2(e[1]-i[1],co(e[0]-i[0])*s)/Bs;r>90&&(r-=180),r<-90&&(r+=180),Math.abs(r)>60&&(r=0);let a=.75,o=-Math.sin(r*Bs),l=Math.cos(r*Bs);return[n.warm?"curw":"curc",n.zh,"",co(t[0]+o*a/s),t[1]+l*a,.4,-r,.05,0,0]})}function pf(n,t,e){let i=lr(t,n),s=e/an,r=3.4*Math.pow(s,.5),a=.62*an*Math.pow(s,.55),o=3.6,l=1.1;n.save(),n.lineCap="round",n.lineJoin="round";let c=(h,f)=>{let u=1;for(;u<h.L.length-1&&h.L[u]<f;)u++;let d=EM((f-h.L[u-1])/Math.max(1e-9,h.L[u]-h.L[u-1]));return{i:u,lo:h.d[u-1][0]+(h.d[u][0]-h.d[u-1][0])*d,la:h.d[u-1][1]+(h.d[u][1]-h.d[u-1][1])*d}};for(let h of Cm){let f=h.warm?"rgb(226,20,20)":"rgb(16,58,210)",u=h.L[h.L.length-1],d=Math.max(1,Math.round(u/(o+l))),g=u/d;for(let v=0;v<d;v++){let m=v*g+l*.5,p=(v+1)*g-l*.5,S=c(h,m),E=c(h,p),y=[[S.lo,S.la]];for(let O=S.i;O<E.i;O++)y.push(h.d[O]);y.push([E.lo,E.la]),n.beginPath(),i({type:"LineString",coordinates:y.map(([O,L])=>[co(O),L])}),n.strokeStyle="rgba(255,255,255,0.35)",n.lineWidth=r*1.8,n.stroke(),n.strokeStyle=f,n.lineWidth=r,n.stroke();let w=c(h,Math.max(0,p-.3)),b=Math.cos(E.la*Bs),R=co(E.lo-w.lo)*b,_=E.la-w.la,T=Math.hypot(R,_)||1;R/=T,_/=T;let I=t([co(E.lo),E.la]);if(!I)continue;let N=1/Math.max(.2,b),U=[[a*.35,0],[-a*.75,a*.5],[-a*.45,0],[-a*.75,-a*.5]];n.beginPath(),U.forEach(([O,L],P)=>{let G=O*R-L*_,X=O*_+L*R,et=I[0]+G*N,$=I[1]-X;P?n.lineTo(et,$):n.moveTo(et,$)}),n.closePath(),n.fillStyle=f,n.strokeStyle="rgba(255,255,255,0.45)",n.lineWidth=r*.5,n.stroke(),n.fill()}}n.restore()}var EM=n=>Math.max(0,Math.min(1,n)),mn={lon:-113,lat:-47,w:15.5,h:15.6};function Im(){let{lon:n,lat:t,w:e,h:i}=mn,s=1/Math.cos((t-i/2)*Bs),r=(n-e*s/2+180)/360*ki,a=(n+e*s/2+180)/360*ki,o=(90-(t+i/2))/180*ki/2,l=(90-(t-i/2))/180*ki/2;return[[r,o,a,l]]}var TM=[[0,"#bdeffa"],[110,"#80dbf5"],[650,"#45b5f0"],[2800,"#2b99eb"],[5e3,"#2180e0"],[7200,"#1a66cc"],[10500,"#0f4299"]],df=new Map;function mf(n){if(n=Math.max(12,Math.min(140,Math.round(n))),df.has(n))return df.get(n);let{w:t,h:e}=mn,i=Math.round(t*n),s=Math.round(e*n),r=document.createElement("canvas");r.width=i,r.height=s;let a=r.getContext("2d"),o=n;a.fillStyle="rgba(250,252,253,0.94)",a.strokeStyle="rgba(30,50,90,0.9)",a.lineWidth=Math.max(1,o*.08),a.beginPath(),a.roundRect?a.roundRect(o*.1,o*.1,i-o*.2,s-o*.2,o*.35):a.rect(o*.1,o*.1,i-o*.2,s-o*.2),a.fill(),a.stroke(),a.strokeStyle="rgba(30,50,90,0.45)",a.lineWidth=Math.max(.5,o*.03),a.strokeRect(o*.35,o*.35,i-o*.7,s-o*.7);let l=(E,y,w,b,R="sans",_="#1c2230",T="left")=>{a.font=`${b*o}px ${kc[R]}`,a.fillStyle=_,a.textAlign=T,a.textBaseline="middle",a.fillText(E,y,w)};l("\u56FE  \u4F8B",i*.36,o*1.25,.95,"serifB","#1c2230","center"),l("LEGEND",i*.66,o*1.3,.62,"sansB","#1c2230","center"),a.fillStyle="rgba(30,50,90,0.5)",a.fillRect(o*.8,o*2.05,i-o*1.6,Math.max(.6,o*.04));let c=[["capital","\u9996\u90FD","Capital"],["pcap","\u7701\u7EA7\u884C\u653F\u4E2D\u5FC3","Provincial capital"],["city","\u57CE\u5E02","City"],["peak","\u5C71\u5CF0","Peak (m)"],["border","\u56FD\u754C","International boundary"],["prov","\u7701\u7EA7\u754C","Provincial boundary"],["river","\u6CB3\u6D41","River"],["lake","\u6E56\u6CCA","Lake"],["warm","\u6696\u6D41","Warm current"],["cold","\u5BD2\u6D41","Cold current"],["tropic","\u56DE\u5F52\u7EBF / \u6781\u5708","Tropic / Polar circle"],["idl","\u56FD\u9645\u65E5\u671F\u53D8\u66F4\u7EBF","Date line"]],h=(i-o*1.4)/2,f=o*1.42,u=o*2.9;c.forEach(([E,y,w],b)=>{let R=b%2,_=Math.floor(b/2),T=o*.75+R*h,I=u+_*f,N=T+o*.75,U=o*1.2;if(a.save(),["capital","pcap","city","peak"].includes(E))hf(a,E,N,I,o*(E==="capital"?.95:E==="pcap"?.8:E==="city"?.6:.75),1);else if(E==="lake")a.fillStyle="#86cdf0",a.strokeStyle="rgba(30,100,190,0.9)",a.lineWidth=o*.06,a.beginPath(),a.ellipse(N,I,U*.5,o*.32,0,0,7),a.fill(),a.stroke();else{a.beginPath(),a.lineCap="round",E==="river"?(a.moveTo(N-U/2,I+o*.15),a.bezierCurveTo(N-U/6,I-o*.35,N+U/6,I+o*.35,N+U/2,I-o*.15)):(a.moveTo(N-U/2,I),a.lineTo(N+U/2,I));let O={border:["rgba(110,30,60,0.95)",.1,null],prov:["rgba(236,112,18,0.98)",.09,[.22,.12]],river:["rgba(28,105,200,0.95)",.08,null],warm:["rgba(214,32,32,0.92)",.07,[.3,.13]],cold:["rgba(28,72,205,0.92)",.07,[.3,.13]],tropic:["rgba(200,35,45,0.9)",.08,[.3,.2]],idl:["rgba(40,40,60,0.85)",.08,[.4,.24]]}[E];a.strokeStyle=O[0],a.lineWidth=o*O[1],O[2]&&a.setLineDash(O[2].map(L=>L*o)),a.stroke(),a.setLineDash([]),(E==="warm"||E==="cold")&&(a.fillStyle=O[0],a.beginPath(),a.moveTo(N+U/2+o*.2,I),a.lineTo(N+U/2-o*.2,I-o*.2),a.lineTo(N+U/2-o*.2,I+o*.2),a.closePath(),a.fill())}a.restore(),l(y,T+o*1.65,I-o*.22,.52),l(w,T+o*1.65,I+o*.36,.34,"sans","#3a4252")});let d=u+6*f+o*.25,g=o*1,v=i-o*2,m=o*.55;l("\u6D77\u6D0B\u6DF1\u5EA6",g,d,.52),l("DEPTH (m)",g+o*2.4,d+o*.03,.36,"sans","#3a4252");let p=a.createLinearGradient(g,0,g+v,0),S=E=>Math.log(1+E/60)/Math.log(1+10500/60);for(let[E,y]of TM)p.addColorStop(S(E),y);a.fillStyle=p,a.fillRect(g,d+o*.55,v,m),a.strokeStyle="rgba(30,50,90,0.6)",a.lineWidth=o*.03,a.strokeRect(g,d+o*.55,v,m);for(let E of[0,200,1e3,3e3,6e3]){let y=g+S(E)*v;a.fillStyle="#1c2230",a.fillRect(y-o*.015,d+o*.55+m,o*.03,o*.15),l(String(E),y,d+o*1.45+m*.5,.34,"sans","#1c2230","center")}return l("\u672C\u56FE\u4E3A\u793A\u610F\u6027\u6570\u5B57\u5730\u7403\u4EEA\uFF0C\u975E\u6B63\u5F0F\u51FA\u7248\u5730\u56FE",i/2,s-o*.7,.32,"sans","#5a6272","center"),df.set(n,r),r}function gf(n,t,e){let{lon:i,lat:s,w:r,h:a}=mn,o=mf(e),l=o.width/r,c=o.height,h=Math.max(1,Math.round(c/160));for(let f=0;f<c;f+=h){let u=s+a/2-(f+h/2)/l,d=1/Math.cos(u*Bs),g=t([i-r*d/2,s+a/2-f/l]),v=t([i+r*d/2,s+a/2-(f+h)/l]);!g||!v||v[0]<g[0]||n.drawImage(o,0,f,o.width,Math.min(h,c-f),g[0],g[1],v[0]-g[0],v[1]-g[1]+.6)}}var gn=Math.PI/180,AM=6371,RM=["\u5317","\u4E1C\u5317","\u4E1C","\u4E1C\u5357","\u5357","\u897F\u5357","\u897F","\u897F\u5317"];function xf(n,t,e,i){let s=Math.sin((i-t)*gn/2)**2+Math.cos(t*gn)*Math.cos(i*gn)*Math.sin((e-n)*gn/2)**2;return 2*AM*Math.asin(Math.min(1,Math.sqrt(s)))}function _f(n,t,e,i){let s=Math.sin((e-n)*gn)*Math.cos(i*gn),r=Math.cos(t*gn)*Math.sin(i*gn)-Math.sin(t*gn)*Math.cos(i*gn)*Math.cos((e-n)*gn);return(Math.atan2(s,r)/gn+360)%360}var yf=n=>RM[Math.round(n/45)%8],uo=(n,t)=>`${Math.abs(t).toFixed(2)}\xB0${t>=0?"N":"S"}, ${Math.abs(n).toFixed(2)}\xB0${n>=0?"E":"W"}`,ra=n=>n<10?`${n.toFixed(1)} km`:`${Math.round(n).toLocaleString("en-US")} km`,vf=/(特别行政区|壮族自治区|回族自治区|维吾尔自治区|自治区|自治州|自治县|地区|新区|林区|特区|盟|省|市|区|县|旗)$/,Hc=class{constructor(t){this.ctx=t.ctx,this.rows=t.gaz,this.feats=t.feats,this.n=this.rows.length,this.keyZh=this.rows.map(e=>e[0]),this.keyZh2=this.rows.map(e=>e[0].replace(vf,"")||e[0]),this.keyEn=this.rows.map(e=>(e[1]||"").toLowerCase()),this.keyEn2=this.rows.map(e=>(e[7]||"").toLowerCase()),this.fb=this.feats.map(e=>{if(e[2]===0)return[e[4],e[5],e[4],e[5]];let i=1e9,s=1e9,r=-1e9,a=-1e9;for(let o of e[4])for(let l=0;l<o.length;l+=2){let c=o[l]/100,h=o[l+1]/100;c<i&&(i=c),c>r&&(r=c),h<s&&(s=h),h>a&&(a=h)}return[i,s,r,a]})}item(t){let e=this.rows[t],i=e[0],s=this.ctx[e[2]];return{i:t,name:i,ctx:s,lon:e[3],lat:e[4],type:e[5],pop:e[6],en:e[7]||""}}label(t){if(t.type===2){let e=t.ctx.split(" \xB7 "),i=e[e.length-1];return{name:i!==t.name?i+t.name:t.name,ctx:e.slice(0,-1).join(" \xB7 ")||e[0]}}return{name:t.name,ctx:t.ctx}}search(t,e=8){let i=t.trim();if(!i)return[];let s=CM(i),r=[];s&&r.push({coord:!0,lon:s[1],lat:s[0],name:`\u5750\u6807 ${uo(s[1],s[0])}`,ctx:"\u6309\u201C\u7EAC\u5EA6,\u7ECF\u5EA6\u201D\u5B9A\u4F4D",score:1e9});let a=i.toLowerCase().replace(/\s+/g," "),o=i.replace(vf,"")||i,l=/[\u4e00-\u9fff]/.test(i),c=[];for(let h=0;h<this.n;h++){let f=0;if(l){let d=this.keyZh[h],g=this.keyZh2[h];if(d===i||g===i||g===o)f=100;else if(d.startsWith(i)||g.startsWith(o))f=75;else if(i.length>=2&&d.includes(i))f=45;else{let v=this.ctx[this.rows[h][2]];i.length>=2&&(d+v).includes(i)&&this.rows[h][5]<=1&&(f=20)}}else{let d=this.keyEn[h],g=this.keyEn2[h];d===a||g===a?f=95:d.startsWith(a)||g.startsWith(a)?f=70:a.length>=3&&(d.includes(a)||g.includes(a))&&(f=35)}if(!f)continue;let u=this.rows[h];!l&&u[5]===2&&(f=Math.min(f,55)),f+=[9,12,3,0,8][u[5]]+(u[6]>0?Math.min(10,Math.log10(u[6])*1.4):u[5]===1?8:u[5]===2?4:0),/[\u4e00-\u9fff]/.test(u[0])&&(f+=3),c.push([f,h])}c.sort((h,f)=>f[0]-h[0]);for(let[h,f]of c.slice(0,e)){let u=this.item(f),d=this.label(u);r.push({...u,name:d.name,ctx:d.ctx,score:h})}return r.slice(0,e)}nearest(t,e,i){let s=-1,r=1e9,a=Math.cos(e*gn);for(let l=0;l<this.n;l++){let c=this.rows[l];if(i&&!i(c))continue;let h=c[3]-t;h=(h+540)%360-180,h*=a;let f=c[4]-e,u=h*h+f*f;u<r&&(r=u,s=l)}if(s<0)return null;let o=this.item(s);return o.dist=xf(t,e,o.lon,o.lat),o}describe(t,e){let i=this.nearest(t,e,r=>r[5]!==0);if(i&&i.dist<25){let r=this.label(i);return{name:r.name,ctx:r.ctx,near:i.dist>6?`${r.name}\u9644\u8FD1`:null}}let s=this.nearest(t,e,r=>r[5]===1||r[5]===4||r[6]>3e5);if(s&&s.dist<400){let r=this.label(s);return{name:`${r.name}${yf(_f(s.lon,s.lat,t,e))} ${Math.round(s.dist)} km`,ctx:r.ctx}}return{name:uo(t,e),ctx:""}}findByNames(t,e){let i=c=>(c||"").replace(vf,""),s=i(e),r=i(t),a=null,o=0;for(let c=0;c<this.n;c++){let h=this.rows[c];if(h[5]>2)continue;let f=i(h[0]),u=this.ctx[h[2]],d=0;s&&f===s?d=h[5]===1?10:6:!s&&r&&f===r&&h[5]===0&&(d=5),d&&r&&u.includes(r)&&(d+=3),d>o&&(o=d,a=c)}if(a==null)return null;let l=this.item(a);return l.type,l}nearby(t,e){let i=Math.cos(e*gn),s=111.195,r=(m,p)=>{let S=m-t;return S=(S+540)%360-180,[S*i*s,(p-e)*s]},a=[],o=[];for(let m=0;m<this.feats.length;m++){let p=this.feats[m],[S,E,y,w]=p,b=this.fb[m],R=S==="\u57CE\u5E02"?380:y===1?140+w*70:140+w*150,_=R/s,T=R/(s*Math.max(i,.05));if(e<b[1]-_||e>b[3]+_)continue;if(b[2]-b[0]<300){let L=(b[0]-t+540)%360-180;if(L>T||L+(b[2]-b[0])<-T)continue}let I=1e9,N=0,U=0;if(y===0){I=xf(t,e,p[4],p[5]);let L=_f(t,e,p[4],p[5]);N=Math.sin(L*gn),U=Math.cos(L*gn)}else{let L=!1;for(let P of p[4]){let G,X,et=!1;for(let $=0;$<P.length;$+=2){let[nt,K]=r(P[$]/100,P[$+1]/100);if($>0){let St=nt-G,xt=K-X,ne=St*St+xt*xt,Ht=ne>0?-(G*St+X*xt)/ne:0;Ht=Math.max(0,Math.min(1,Ht));let ft=G+St*Ht,Q=X+xt*Ht,rt=Math.hypot(ft,Q);rt<I&&(I=rt,N=ft,U=Q),y===2&&Math.abs(St)<15e3&&X>0!=K>0&&G+(0-X)*St/(K-X)>0&&(et=!et)}G=nt,X=K}et&&(L=!0)}if(L){a.push({cat:S,name:E,w,d:0});continue}}if(I>R||S==="\u57CE\u5E02"&&I<20)continue;let O=(Math.atan2(N,U)/gn+360)%360;o.push({cat:S,name:E,w,d:I,b:O,extra:p[6]||"",score:(I+25)/Math.pow(w,1.1),tlon:y===0?p[4]:(t+N/(s*Math.max(i,.05))+540)%360-180,tlat:y===0?p[5]:e+U/s})}let l=(m,p)=>{let S=new Map;for(let E of m){let y=S.get(E.name);(!y||p(E)<p(y))&&S.set(E.name,E)}return[...S.values()]},c=l(a,m=>-m.w).filter(m=>!["\u5927\u6D0B","\u5730\u533A"].includes(m.cat)||a.length<2).sort((m,p)=>p.w-m.w),h=new Set(c.map(m=>m.name)),f=m=>m==="\u5C71\u5CF0"||m==="\u5C71"||m==="\u706B\u5C71"||m==="\u5C71\u8109"?"\u5C71":m==="\u6E56\u6CCA"||m==="\u6C34\u5E93"?"\u6E56":/海|洋|湾|峡/.test(m)?"\u6D77":m,u={\u5C71:4,\u6CB3\u6D41:3,\u6E56:2,\u6D77:2,\u57CE\u5E02:2},d={},g=[];for(let m of l(o,p=>p.score).filter(p=>!h.has(p.name)).sort((p,S)=>p.score-S.score)){let p=f(m.cat);if(!((d[p]||0)>=(u[p]||2))&&(d[p]=(d[p]||0)+1,g.push(m),g.length>=9))break}g.sort((m,p)=>m.d-p.d);let v=[];for(let m of this.feats){if(m[0]!=="\u5C71\u5CF0"||m[2]!==0||!(+m[6]>0)||Math.abs(m[5]-e)>5)continue;let p=xf(t,e,m[4],m[5]);p<=500&&p>.5&&v.push([m,p])}return v.sort((m,p)=>+p[0][6]-+m[0][6]),v.slice(0,2).forEach(([m,p],S)=>{let E=S===0?"500 km \u5185\u6700\u9AD8\u5CF0":"\u533A\u57DF\u9AD8\u5CF0",y=g.find(w=>w.name===m[1]);y?y.top=E:g.push({cat:m[0],name:m[1],w:m[3],d:p,b:_f(t,e,m[4],m[5]),extra:m[6],score:0,tlon:m[4],tlat:m[5],top:E})}),{inside:c.slice(0,3),near:g}}};function CM(n){let t=n.trim().match(/^([+-]?\d+(?:\.\d+)?)\s*°?\s*([NSns北南])?\s*[,，\s]\s*([+-]?\d+(?:\.\d+)?)\s*°?\s*([EWew东西])?$/);if(!t)return null;let e=+t[1],i=+t[3];return t[2]&&/[Ss南]/.test(t[2])&&(e=-e),t[4]&&/[Ww西]/.test(t[4])&&(i=-i),Math.abs(e)>90&&Math.abs(i)<=90&&([e,i]=[i,e]),Math.abs(e)>90||Math.abs(i)>180?null:[e,i]}var PM=(n,t,e)=>Promise.race([n,new Promise((i,s)=>setTimeout(()=>s(new Error(e||"timeout")),t))]);function Lm(n=12e3){return new Promise((t,e)=>{if(!("geolocation"in navigator))return e(new Error("\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u5B9A\u4F4D"));let i=!1,s=setTimeout(()=>{i||(i=!0,e(new Error("\u6D4F\u89C8\u5668\u5B9A\u4F4D\u65E0\u54CD\u5E94")))},n);try{navigator.geolocation.getCurrentPosition(r=>{i||(i=!0,clearTimeout(s),t({lon:r.coords.longitude,lat:r.coords.latitude,acc:r.coords.accuracy}))},r=>{i||(i=!0,clearTimeout(s),e(new Error(r.code===1?"\u5B9A\u4F4D\u6743\u9650\u88AB\u62D2\u7EDD":r.code===2?"\u65E0\u6CD5\u83B7\u53D6\u4F4D\u7F6E":r.code===3?"\u5B9A\u4F4D\u8D85\u65F6":r.message||"\u5B9A\u4F4D\u5931\u8D25")))},{enableHighAccuracy:!1,timeout:n,maximumAge:600*1e3})}catch(r){i=!0,clearTimeout(s),e(r)}})}async function ho(n,t){let e=new AbortController,i=setTimeout(()=>e.abort(),t);try{let s=await fetch(n,{signal:e.signal,cache:"no-store",credentials:"omit"});if(!s.ok)throw new Error("HTTP "+s.status);return await s.json()}finally{clearTimeout(i)}}function Nm(n,t=6e3){if(typeof navigator<"u"&&navigator.onLine===!1)return Promise.reject(new Error("\u5F53\u524D\u5904\u4E8E\u79BB\u7EBF\u72B6\u6001\uFF0C\u65E0\u6CD5\u8FDB\u884C\u7F51\u7EDC IP \u5B9A\u4F4D"));let e=a=>a==null||a===""?NaN:+a,i=(a,o)=>isFinite(a)&&isFinite(o)&&!(a===0&&o===0),s=[["ipip.net",async()=>{let a=await ho("https://myip.ipip.net/json",t),o=a&&a.data&&a.data.location;if(!o)throw 0;if(o[0]!=="\u4E2D\u56FD"||!(o[2]||o[1]))throw new Error("not CN");let l=n.findByNames(o[1],o[2]);if(!l)throw new Error("no match");return{lon:l.lon,lat:l.lat,city:o[2]||o[1]}}],["ipwho.is",async()=>{let a=await ho("https://ipwho.is/",t);if(a.success===!1)throw 0;let o=e(a.longitude),l=e(a.latitude);if(!i(o,l))throw 0;return{lon:o,lat:l,city:a.city}}],["geojs.io",async()=>{let a=await ho("https://get.geojs.io/v1/ip/geo.json",t),o=e(a.longitude),l=e(a.latitude);if(!i(o,l))throw 0;return{lon:o,lat:l,city:a.city}}],["ipinfo.io",async()=>{let a=await ho("https://ipinfo.io/json",t),[o,l]=(a.loc||"").split(",").map(Number);if(!i(l,o))throw 0;return{lon:l,lat:o,city:a.city}}],["bigdatacloud",async()=>{let a=await ho("https://api.bigdatacloud.net/data/reverse-geocode-client?localityLanguage=zh",t),o=e(a.longitude),l=e(a.latitude);if(!i(o,l))throw 0;return{lon:o,lat:l,city:a.city}}]],r=a=>PM(Promise.any(a.map(async([o,l])=>({...await l(),src:o}))),t+500,"IP \u5B9A\u4F4D\u8D85\u65F6");return r(s.slice(0,2)).catch(()=>r(s.slice(2))).catch(a=>{throw new Error(a instanceof AggregateError||/超时/.test(a.message)?"\u7F51\u7EDC IP \u5B9A\u4F4D\u4E0D\u53EF\u7528\uFF08\u53EF\u80FD\u5904\u4E8E\u79BB\u7EBF\u72B6\u6001\uFF09":a.message||"IP \u5B9A\u4F4D\u5931\u8D25")})}var Lt=n=>document.getElementById(n),aa={},IM=[["\u6B63\u5728\u8F7D\u5165\u5B57\u4F53",.8],["\u6B63\u5728\u89E3\u7801",.82],["\u6B63\u5728\u6784\u5EFA\u9AD8\u7A0B\u7EB9\u7406",.88],["\u6B63\u5728\u6392\u7248",.91],["\u6B63\u5728\u5370\u5236\u653F\u533A",.93],["\u6B63\u5728\u5370\u5236\u6CE8\u8BB0",.95],["\u6B63\u5728\u52A0\u8F7D\u536B\u661F",.97]];function Sf(n){let t=document.getElementById("lp-bar"),e=document.getElementById("lp-pct");t&&(t.style.width=(n*100).toFixed(1)+"%"),e&&(e.textContent=Math.round(n*100)+"%")}var os=n=>{let t=Lt("loading-text");t&&(t.textContent=n);let e=IM.find(([i])=>n.startsWith(i));e&&Sf(e[1])};async function LM(n,t,e){let i;for(let s=0;s<3;s++){let r=0;try{let a=await fetch(n);if(!a.ok)throw new Error(`HTTP ${a.status} ${n}`);let o=new Uint8Array(t),l=0,c=a.body.getReader();for(;;){let{done:h,value:f}=await c.read();if(h)break;if(l+f.length>o.length)throw new Error("size mismatch "+n);o.set(f,l),l+=f.length,r+=f.length,e&&e(f.length)}if(l!==t)throw new Error("size mismatch "+n);return o}catch(a){i=a,e&&e(-r),await new Promise(o=>setTimeout(o,800*(s+1)))}}throw i}async function Vc(n,t){let e=window.__MANIFEST[n],i=await Promise.all(e.parts.map(([a,o])=>LM(a,o,t)));if(i.length===1)return i[0];let s=new Uint8Array(e.size),r=0;for(let a of i)s.set(a,r),r+=a.length;return s}var Dm=["d-h2k","d-font-sans-r","d-font-sans-b","d-font-serif-b","d-loc","d-vectors"];async function NM(){let n=window.__MANIFEST;if(!n)return;let t=Dm.reduce((a,o)=>a+n[o].size,0),e=0,i=performance.now(),s=a=>(a/1048576).toFixed(1),r=a=>{e+=a,Sf(.78*e/t);let o=document.getElementById("lp-mb");o&&(o.textContent=`${s(e)} / ${s(t)} MB`)};os("\u6B63\u5728\u4E0B\u8F7D\u5730\u56FE\u6570\u636E\u2026"),r(0),await Promise.all(Dm.map(async a=>{aa[a]=await Vc(a,r)})),window.__dlSeconds=(performance.now()-i)/1e3}var DM=n=>new TextDecoder().decode(aa[n]),cr=()=>new Promise(n=>requestAnimationFrame(()=>setTimeout(n,0))),Ge=Math.PI/180;function Om(n){if(aa[n])return aa[n];let t=atob(Lt(n).textContent.trim()),e=new Uint8Array(t.length);for(let i=0;i<t.length;i++)e[i]=t.charCodeAt(i);return e}async function UM(n){let t=new DecompressionStream("gzip");return new Response(new Blob([n]).stream().pipeThrough(t)).arrayBuffer()}async function FM(){let n=[["RGSans","d-font-sans-r",400],["RGSansB","d-font-sans-b",700],["RGSerifB","d-font-serif-b",700]];await Promise.all(n.map(async([t,e,i])=>{try{let s=new FontFace(t,Om(e).buffer,{weight:String(i)});await s.load(),document.fonts.add(s)}catch(s){console.warn("font",t,s)}}))}var as=8192,fo=4096,OM=`
const toHalf = (() => { const f = new Float32Array(1), u = new Uint32Array(f.buffer);
  return (v) => { f[0] = v; const x = u[0], s = (x >>> 16) & 0x8000; let e = ((x >>> 23) & 0xff) - 112, m = x & 0x7fffff;
    if (e <= 0) return s; if (e > 30) return s | 0x7c00; return s | (e << 10) | ((m + 0x1000) >>> 13); }; })();
function unpredict(q, W, H) { for (let y = 0; y < H; y++) { const o = y * W; for (let x = 0; x < W; x++) { let p;
  if (y === 0) p = x === 0 ? 0 : q[o + x - 1]; else if (x === 0) p = q[o - W]; else p = q[o + x - 1] + q[o - W + x] - q[o - W + x - 1]; q[o + x] += p; } } }
async function gunzip(b) { return new Response(new Blob([b]).stream().pipeThrough(new DecompressionStream('gzip'))).arrayBuffer(); }
onmessage = async (ev) => { try {
  const { kind, W, H, bytes, esc, maxTex } = ev.data; let q;
  if (kind === 'i16') { q = new Int16Array(await gunzip(bytes)); }
  else {
    const bmp = await createImageBitmap(new Blob([bytes], { type: 'image/webp' }), { colorSpaceConversion: 'none', premultiplyAlpha: 'none' });
    const cv = new OffscreenCanvas(W, H); const cx = cv.getContext('2d', { willReadFrequently: true }); cx.drawImage(bmp, 0, 0); bmp.close();
    const px = cx.getImageData(0, 0, W, H).data; q = new Int16Array(W * H); for (let i = 0, j = 0; i < q.length; i++, j += 4) q[i] = px[j] - 128;
    const e = new Uint32Array(await gunzip(esc)); const n = e[0]; let idx = 0; const vals = new Int32Array(e.buffer, 4 + n * 4, n);
    for (let i = 0; i < n; i++) { idx += e[1 + i]; q[idx] = vals[i]; }
  }
  unpredict(q, W, H);
  let sum = 0; for (let i = 0; i < q.length; i += 997) sum = (sum + q[i] * 31 + 7) | 0;
  // half-float mip chain (levels larger than maxTex are skipped)
  let w = W, h = H, cur = new Float32Array(w * h); for (let i = 0; i < cur.length; i++) { const v = q[i]; cur[i] = v >= 0 ? v * 4 : v * 20; }
  let skip = 0; while ((W >> skip) > maxTex) skip++;
  const mips = [];
  for (;;) {
    if (skip === 0) { const hf = new Uint16Array(w * h); for (let i = 0; i < cur.length; i++) hf[i] = toHalf(cur[i]); mips.push({ data: hf, width: w, height: h }); }
    if (w === 1 && h === 1) break;
    const nw = Math.max(1, w >> 1), nh = Math.max(1, h >> 1), nx = new Float32Array(nw * nh);
    for (let y = 0; y < nh; y++) { const y0 = Math.min(h - 1, y * 2) * w, y1 = Math.min(h - 1, y * 2 + 1) * w;
      for (let x = 0; x < nw; x++) { const x0 = Math.min(w - 1, x * 2), x1 = Math.min(w - 1, x * 2 + 1); nx[y * nw + x] = 0.25 * (cur[y0 + x0] + cur[y0 + x1] + cur[y1 + x0] + cur[y1 + x1]); } }
    cur = nx; w = nw; h = nh; if (skip > 0) skip--;
  }
  postMessage({ q, mips, W, H, sum }, [q.buffer, ...mips.map((m) => m.data.buffer)]);
} catch (e) { postMessage({ error: String(e && e.message || e) }); } };
`;function Um(n){return new Promise((t,e)=>{let i=URL.createObjectURL(new Blob([OM],{type:"text/javascript"})),s=new Worker(i);URL.revokeObjectURL(i),s.onmessage=a=>{s.terminate(),a.data.error?e(new Error(a.data.error)):t(a.data)},s.onerror=a=>{s.terminate(),e(new Error(a.message||"worker error"))};let r=[n.bytes.buffer];n.esc&&r.push(n.esc.buffer),s.postMessage(n,r)})}function Fm(n){let t=new bs(n[0].data,n[0].width,n[0].height,er,In);return t.mipmaps=n,t.generateMipmaps=!1,t.minFilter=ri,t.magFilter=je,t.wrapS=Qi,t.wrapT=Cn,t.colorSpace=Yn,t.needsUpdate=!0,{tex:t,w:n[0].width,h:n[0].height}}function Hi(n,t){let e=document.createElement("canvas");return e.width=n,e.height=t,e}function po(n,t,e=!0,i=!0,s=!0){let r=new ws(n);return r.premultiplyAlpha=i,r.wrapS=s?Qi:Cn,r.wrapT=Cn,r.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy()),r.colorSpace=e?en:Yn,r.minFilter=ri,r.generateMipmaps=!0,r}var Mf=n=>ao().scale(n/(2*Math.PI)).translate([n/2,n/4]).precision(.08);function BM(n){let t=new Dr,e=new _e(new As(20,64,32),new Pn({side:pn,depthWrite:!1,vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`varying vec3 vP; void main(){ float y = normalize(vP).y;
      vec3 top = vec3(0.95,0.93,0.90), mid = vec3(0.62,0.58,0.53), flo = vec3(0.30,0.24,0.18);
      vec3 c = y > 0.0 ? mix(mid, top, pow(y, 0.7)) : mix(mid, flo, pow(-y, 0.6));
      gl_FragColor = vec4(c * 0.85, 1.0); }`}));t.add(e);let i=(a,o,l,c,h,f,u=16777215)=>{let d=new _e(new Ts(a,o),new Ss({color:new Qt(u).multiplyScalar(f),side:qn}));d.position.set(l,c,h),d.lookAt(0,0,0),t.add(d)};i(9,6,-9,8,9,8.5,16774374),i(2.2,10,12,2,5,2.6,15397631),i(14,4,0,14,-2,1.6),i(6,5,3,3,-14,1.2,16773344);let s=new Yr(n),r=s.fromScene(t,.035).texture;return s.dispose(),r}function zM(){let e=Hi(1600,1e3),i=e.getContext("2d"),s=i.createLinearGradient(0,0,0,1e3);s.addColorStop(0,"#d9d2c4"),s.addColorStop(.55,"#e9e2d5"),s.addColorStop(1,"#cdbba0"),i.fillStyle=s,i.fillRect(0,0,1600,1e3);let r=(o,l,c,h)=>{let f=i.createRadialGradient(o,l,0,o,l,c);f.addColorStop(0,h),f.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=f,i.fillRect(o-c,l-c,2*c,2*c)};r(1250,260,520,"rgba(70,95,85,0.38)"),r(1350,380,360,"rgba(60,85,75,0.30)"),r(230,230,480,"rgba(255,248,228,0.85)"),r(560,120,320,"rgba(255,250,235,0.6)"),r(150,700,420,"rgba(185,140,90,0.35)");let a=(o=>()=>(o=o*16807%2147483647)/2147483647)(7);for(let o=0;o<26;o++){let l=20+a()*60;r(a()*1600,a()*1e3*.62,l,`rgba(255,${235+a()*20|0},${200+a()*40|0},${.12+a()*.16})`)}return e.toDataURL("image/jpeg",.9)}function kM(){let e=Hi(2048,1024),i=e.getContext("2d");i.fillStyle="#c99d6c",i.fillRect(0,0,2048,1024);let s=(a=>()=>(a=a*16807%2147483647)/2147483647)(11);for(let a=0;a<520;a++){let o=s()*1024,l=.03+s()*.07,c=1+s()*5;i.strokeStyle=s()<.5?`rgba(120,75,35,${l})`:`rgba(240,205,160,${l})`,i.lineWidth=c,i.beginPath(),i.moveTo(0,o);for(let h=0;h<=2048;h+=64)i.lineTo(h,o+Math.sin(h*.004+a)*6+Math.sin(h*.019+a*3)*2);i.stroke()}i.fillStyle="rgba(90,55,25,0.35)";for(let a of[250,520,790])i.fillRect(0,a,2048,3);let r=new ws(e);return r.colorSpace=en,r.wrapS=r.wrapT=Qi,r.anisotropy=8,r}function HM(){let e=Hi(4096,160),i=e.getContext("2d");i.fillStyle="#ffffff",i.fillRect(0,0,4096,160),i.fillStyle="#3a3f46",i.strokeStyle="#3a3f46";for(let r=0;r<=180;r++){let a=r/180*4096,o=90-r,l=o%10===0?.42:o%5===0?.28:.16;i.fillRect(a-(o%10===0?2.2:1.3),160-l*160,o%10===0?4.4:2.6,l*160)}i.font=`bold ${160*.36}px Arial, sans-serif`,i.textAlign="center",i.textBaseline="middle";for(let r=0;r<=180;r+=10){let a=Math.abs(90-r);a!==90&&(i.save(),i.translate(r/180*4096,160*.3),i.fillText(String(a),0,0),i.restore())}let s=new ws(e);return s.colorSpace=en,s.anisotropy=8,s}var ce={exag:40,mode:0,labels:!0,grid:!0,autoRotate:!0,en:!0,extras:!0,local:!0},Dn=(()=>{let n=(location.search.match(/[?&]q=(low|med|high)/)||[])[1],t=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||matchMedia("(pointer: coarse)").matches&&Math.min(screen.width,screen.height)<820,e=navigator.deviceMemory||8,i=n||(e<=2?"low":t||e<=4?"med":"high");return{tier:i,mobile:t,dpr:i==="high"?2:i==="med"?1.5:1,height:i==="high"?"d-h8k":i==="med"?"d-h4k":null,overlay:i==="high"?8192:4096,win:i==="high"?4096:2048,seg:i==="high"?[1024,512]:i==="med"?[768,384]:[512,256],shadow:i==="high"?2048:1024}})();window.__quality=Dn;async function VM(){let n=Lt("c"),t=new oc({canvas:n,antialias:!0,alpha:!0,preserveDrawingBuffer:!0});t.setPixelRatio(Math.min(window.devicePixelRatio||1,Dn.dpr)),t.setSize(window.innerWidth,window.innerHeight,!1),t.toneMapping=Da,t.toneMappingExposure=1,t.outputColorSpace=en,t.shadowMap.enabled=!0,t.shadowMap.type=js,document.body.style.backgroundImage=`url(${zM()})`;let e=new Dr;e.environment=BM(t);let i=new yn(30,window.innerWidth/window.innerHeight,.02,100),s=new Ks(16773596,2.1);e.add(s),e.add(s.target),s.castShadow=!0,s.shadow.mapSize.set(Dn.shadow,Dn.shadow),s.shadow.bias=-4e-4,s.shadow.normalBias=.02,s.shadow.radius=6,Object.assign(s.shadow.camera,{left:-2.6,right:2.6,top:2.6,bottom:-2.6,near:.5,far:16});let r=new Ks(14477567,.6);e.add(r);let a=new Ks(16777215,.55);e.add(a),e.add(new Ia(15922431,10126438,.35)),await NM(),os("\u6B63\u5728\u8F7D\u5165\u5B57\u4F53\u2026"),await FM(),await cr(),os("\u6B63\u5728\u89E3\u7801\u9AD8\u7A0B\u6570\u636E\u2026"),await cr();let o=t.capabilities.maxTextureSize;as=2048,fo=1024;let l=await Um({kind:"i16",W:2048,H:1024,bytes:aa["d-h2k"],maxTex:Math.min(8192,o)});delete aa["d-h2k"];let c=Fm(l.mips),h=c.tex,f=l.q;window.__hres=2048,os("\u6B63\u5728\u6392\u7248\u5730\u56FE\u6CE8\u8BB0\u2026"),await cr();let u=JSON.parse(DM("d-vectors")),d=new Hc(JSON.parse(new TextDecoder().decode(await UM(Om("d-loc"))))),g=Rm(u),v=u.labels.concat(Pm()),m=[{g:1,lvl:0},{g:.75,lvl:0},{g:.55,lvl:1},{g:.4,lvl:2}],p=[],S=A=>p[A]||(p[A]=Am(v,m[A].g,m[A].lvl,Im())),E=S(0);window.__labelsPlaced=E.length,os("\u6B63\u5728\u5370\u5236\u653F\u533A\u5E95\u56FE\u2026"),await cr();let y=Math.min(Dn.overlay,o),w=y/2,b=Math.min(4096,o),R=b/2,_=Hi(b,R);lf(_.getContext("2d"),Mf(b),b,R,b/360,g);let T=po(_,t,!0,!0),I=Hi(2048,1024);Em(I.getContext("2d"),Mf(2048),2048,1024,u);let N=po(I,t,!1,!1),U=Hi(y,w),O=()=>{let A=U.getContext("2d");A.clearRect(0,0,y,w);let k=Mf(y),J=y/ki;cf(A,k,y,w,y/360,g,{grid:ce.grid}),ce.extras&&pf(A,k,y/360),ce.grid&&ff(A,(ut,ht)=>k([ut,ht]),J,null,y),ce.labels&&uf(A,E.filter(ut=>ce.extras||!ut.cls.startsWith("cur")),(ut,ht)=>k([ut,ht]),J,null,y,1,ce.en),ce.extras&&gf(A,k,y/360)};os("\u6B63\u5728\u5370\u5236\u6CE8\u8BB0\u2026"),await cr(),O();let L=po(U,t,!0,!0);os("\u6B63\u5728\u52A0\u8F7D\u536B\u661F\u5F71\u50CF\u2026"),await cr();let P=new dn(Hi(1,1));P.colorSpace=en,P.needsUpdate=!0;let G=async()=>{try{let A=await Vc("d-sat"),k=new Image;k.src=URL.createObjectURL(new Blob([A],{type:"image/jpeg"})),await k.decode(),P.dispose(),P.image=k,P.wrapS=Qi,P.anisotropy=8,P.needsUpdate=!0}catch(A){console.warn("sat",A)}},X=Dn.win,et=Dn.win/2,$=Hi(X,X),nt=Hi(et,et),K=[0,1].map(()=>({ot:po($,t,!0,!0,!1),ft:po(nt,t,!0,!0,!1),rect:new De(0,0,1,1)})),St=0,xt={want:0},ne=K[0].ot,Ht=K[0].ft,ft={uHeight:{value:h},uFill:{value:T},uOver:{value:L},uIce:{value:N},uSat:{value:P},uWinOver:{value:ne},uWinFill:{value:Ht},uWin:{value:K[0].rect},uWinOn:{value:0},uWinOver2:{value:K[1].ot},uWinFill2:{value:K[1].ft},uWin2:{value:K[1].rect},uWinOn2:{value:0},uExag:{value:ce.exag/6371e3},uOcean:{value:.3},uShade:{value:2.6},uCav:{value:.75},uShadow:{value:.85},uMode:{value:0},uVLod:{value:.6},uTexel:{value:new Xt(1/c.w,1/c.h)},uHSize:{value:new Xt(c.w,c.h)},uKeyDir:{value:new V(0,0,1)},uPinDir:{value:new V(0,1,0)},uPinE:{value:new V(1,0,0)},uPinN:{value:new V(0,0,1)},uPinOn:{value:0},uPinT:{value:0},uKmPx:{value:10},uRingsOn:{value:1},uLH:{value:(()=>{let A=new bs(new Uint16Array(1),1,1,er,In);return A.needsUpdate=!0,A})()},uL:{value:new De(0,0,.001,.001)},uLOn:{value:0},uLTexel:{value:new Xt(1,1)},uLGain:{value:.55},uLeg:{value:(()=>{let A=1/Math.cos((mn.lat-mn.h/2)*Ge);return new De((mn.lon-mn.w*A/2+180)/360,(mn.lat-mn.h/2+90)/180,mn.w*A/360,mn.h/180)})()},uLegOn:{value:1},uProfA:{value:new V(0,1,0)},uProfB:{value:new V(0,1,0)},uProfOn:{value:0},uProfP:{value:new V(0,1,0)},uProfPOn:{value:0}},Q=new Rs({color:16777215,roughness:.5,metalness:0,clearcoat:1,clearcoatRoughness:.065,envMapIntensity:.8,specularIntensity:.6});Q.onBeforeCompile=A=>{Object.assign(A.uniforms,ft),A.vertexShader=A.vertexShader.replace("#include <common>",`#include <common>
        uniform sampler2D uHeight; uniform float uExag; uniform float uOcean; uniform float uVLod;
        varying vec2 vHUv; varying vec3 vEastV; varying vec3 vNorthV;`).replace("#include <begin_vertex>",`
        vHUv = uv;
        float hm = textureLod(uHeight, uv, uVLod).r;
        hm = hm > 0.0 ? hm : hm * uOcean;
        vec3 transformed = normalize(position) * (1.0 + clamp(hm * uExag, -0.03, 0.062));
        float aa = uv.x * 6.28318530718;
        vec3 upO = normalize(position);
        vec3 eastO = vec3(sin(aa), 0.0, cos(aa));
        vec3 northO = normalize(cross(upO, eastO));
        vEastV = normalize(normalMatrix * eastO);
        vNorthV = normalize(normalMatrix * northO);`),A.fragmentShader=A.fragmentShader.replace("#include <common>",`#include <common>
        uniform sampler2D uHeight, uFill, uOver, uIce, uSat, uWinOver, uWinFill, uWinOver2, uWinFill2;
        uniform vec4 uWin, uWin2; uniform float uWinOn, uWinOn2;
        uniform float uExag, uOcean, uShade, uMode, uCav, uShadow;
        uniform vec2 uTexel, uHSize; uniform vec3 uKeyDir;
        uniform vec3 uPinDir, uPinE, uPinN; uniform float uPinOn, uPinT, uKmPx, uRingsOn;
        uniform vec4 uLeg; uniform float uLegOn;
        uniform sampler2D uLH; uniform vec4 uL; uniform float uLOn, uLGain; uniform vec2 uLTexel;
        uniform vec3 uProfA, uProfB, uProfP; uniform float uProfOn, uProfPOn;
        varying vec2 vHUv; varying vec3 vEastV; varying vec3 vNorthV;
        float gH(float h){ return h > 0.0 ? h : h * uOcean; }
        float gLw; vec2 gLq;
        vec3 s2l(vec3 c){ return pow(c, vec3(2.2)); }
        vec3 oceanCol(float d){
          float x = clamp(-d, 0.0, 11000.0);
          vec3 c = vec3(0.74,0.94,0.98);
          c = mix(c, vec3(0.50,0.86,0.96), smoothstep(0.0, 110.0, x));
          c = mix(c, vec3(0.27,0.71,0.94), smoothstep(90.0, 650.0, x));
          c = mix(c, vec3(0.17,0.60,0.92), smoothstep(650.0, 2800.0, x));
          c = mix(c, vec3(0.13,0.50,0.88), smoothstep(2800.0, 5000.0, x));
          c = mix(c, vec3(0.10,0.40,0.80), smoothstep(5000.0, 7200.0, x));
          c = mix(c, vec3(0.06,0.26,0.60), smoothstep(7200.0, 10500.0, x));
          return s2l(c);
        }
        vec3 hypso(float h){
          vec3 c = vec3(0.36,0.62,0.36);
          c = mix(c, vec3(0.56,0.74,0.42), smoothstep(0.0, 300.0, h));
          c = mix(c, vec3(0.86,0.84,0.55), smoothstep(250.0, 900.0, h));
          c = mix(c, vec3(0.86,0.67,0.42), smoothstep(900.0, 1900.0, h));
          c = mix(c, vec3(0.70,0.47,0.30), smoothstep(1900.0, 3300.0, h));
          c = mix(c, vec3(0.58,0.45,0.38), smoothstep(3300.0, 4700.0, h));
          c = mix(c, vec3(0.95,0.95,0.97), smoothstep(4900.0, 6000.0, h));
          return s2l(c);
        }
        float gSlope; float gLand; float gH0; float gAO; float gShadowF; float gLod;
        vec2 gGx, gGy;
        vec4 tS(sampler2D t, vec2 p){ return textureGrad(t, p, gGx, gGy); }`).replace("#include <map_fragment>",`
        {
          vec2 uvh = vHUv;
          float cl0 = max(cos((uvh.y - 0.5) * PI), 0.04);
          gGx = dFdx(uvh); gGy = dFdy(uvh); gGx.x *= cl0; gGy.x *= cl0;
          vec2 fwp = fwidth(uvh) * uHSize; gLod = max(0.0, log2(max(fwp.x * cl0, fwp.y)));
          float hRaw = texture(uHeight, uvh).r;
          gLw = 0.0;
          if (uLOn > 0.001) {
            gLq = vec2(fract(uvh.x - uL.x) / uL.z, (uvh.y - uL.y) / uL.w);
            if (gLq.x > 0.0 && gLq.x < 1.0 && gLq.y > 0.0 && gLq.y < 1.0) {
              float e = min(min(gLq.x, 1.0 - gLq.x), min(gLq.y, 1.0 - gLq.y));
              gLw = smoothstep(0.0, 0.1, e) * uLOn;
              hRaw = mix(hRaw, texture(uLH, gLq).r, gLw);
            }
          }
          gH0 = hRaw;
          vec4 fl = tS(uFill, uvh), ov = tS(uOver, uvh);
          if (uWinOn2 > 0.001) {
            vec2 wq = vec2(fract(uvh.x - uWin2.x) / uWin2.z, (uvh.y - uWin2.y) / uWin2.w);
            if (wq.x > 0.0 && wq.x < 1.0 && wq.y > 0.0 && wq.y < 1.0) {
              float e = min(min(wq.x, 1.0 - wq.x), min(wq.y, 1.0 - wq.y));
              float w = smoothstep(0.0, 0.04, e) * uWinOn2;
              vec2 gx = gGx / uWin2.zw, gy = gGy / uWin2.zw;
              fl = mix(fl, textureGrad(uWinFill2, wq, gx, gy), w);
              ov = mix(ov, textureGrad(uWinOver2, wq, gx, gy), w);
            }
          }
          if (uWinOn > 0.001) {
            vec2 wq = vec2(fract(uvh.x - uWin.x) / uWin.z, (uvh.y - uWin.y) / uWin.w);
            if (wq.x > 0.0 && wq.x < 1.0 && wq.y > 0.0 && wq.y < 1.0) {
              float e = min(min(wq.x, 1.0 - wq.x), min(wq.y, 1.0 - wq.y));
              float w = smoothstep(0.0, 0.04, e) * uWinOn;
              vec2 gx = gGx / uWin.zw, gy = gGy / uWin.zw;
              fl = mix(fl, textureGrad(uWinFill, wq, gx, gy), w);
              ov = mix(ov, textureGrad(uWinOver, wq, gx, gy), w);
            }
          }
          float ice = tS(uIce, uvh).r;
          float land = smoothstep(0.3, 0.7, fl.a);
          gLand = land;
          vec3 oc = oceanCol(min(hRaw, -1.0));
          vec3 col;
          if (uMode < 0.5) {
            vec3 lc = fl.rgb / max(fl.a, 0.001);
            lc = mix(lc, vec3(0.96,0.97,1.0), ice * 0.30);
            col = mix(oc, lc, land);
          } else if (uMode < 1.5) {
            vec3 lc = mix(hypso(hRaw), vec3(0.93,0.95,1.0), ice);
            col = mix(oc, lc, land);
          } else {
            col = mix(oc * vec3(0.62, 0.72, 0.88), tS(uSat, uvh).rgb, land);
          }
          col = col * (1.0 - ov.a) + ov.rgb;
          if (uPinOn > 0.5) {
            // "my location": terrain-conforming distance rings + pulsing beacon (drawn in the print layer)
            float phi = uvh.x * 6.28318530718, la = (uvh.y - 0.5) * PI;
            vec3 Q = vec3(-cos(phi) * cos(la), sin(la), sin(phi) * cos(la));
            float dk = 2.0 * asin(clamp(length(Q - uPinDir) * 0.5, 0.0, 1.0)) * 6371.0;
            float aa = max(fwidth(dk), 1e-4);
            float px = dk / uKmPx;
            if (uRingsOn > 0.5 && dk < 1100.0) {
              vec3 tq = Q - uPinDir * dot(Q, uPinDir);
              float az = atan(dot(tq, uPinE), dot(tq, uPinN));
              for (int i = 0; i < 4; i++) {
                float R = i == 0 ? 100.0 : i == 1 ? 250.0 : i == 2 ? 500.0 : 1000.0;
                float rpx = R / uKmPx;
                float vis = smoothstep(45.0, 85.0, rpx) * (1.0 - smoothstep(1500.0, 2600.0, rpx));
                if (vis <= 0.0) continue;
                float e = abs(dk - R);
                float lw = 0.9 * uKmPx;
                float core = 1.0 - smoothstep(lw - aa * 0.5, lw + aa * 0.5, e);
                float halo = 1.0 - smoothstep(lw + uKmPx * 1.3 - aa * 0.5, lw + uKmPx * 1.3 + aa * 0.5, e);
                float nd = max(12.0, floor(R * 6.2831853 / (uKmPx * 13.0)));
                float dash = smoothstep(0.66, 0.6, fract(az / 6.2831853 * nd));
                col = mix(col, vec3(0.01, 0.03, 0.09), halo * 0.42 * vis * dash);
                col = mix(col, vec3(1.0), core * 0.95 * vis * dash);
              }
            }
            if (uProfOn > 0.5) {
              vec3 pn = normalize(cross(uProfA, uProfB));
              float dkm = abs(asin(clamp(dot(Q, pn), -1.0, 1.0))) * 6371.0;
              if (dot(cross(uProfA, Q), pn) > 0.0 && dot(cross(Q, uProfB), pn) > 0.0 && dot(Q, uProfA) > 0.0) {
                float a2 = max(fwidth(dkm), 1e-4), lw = 1.7 * uKmPx;
                float core = 1.0 - smoothstep(lw - a2 * 0.5, lw + a2 * 0.5, dkm);
                float halo = 1.0 - smoothstep(lw + uKmPx * 1.8 - a2 * 0.5, lw + uKmPx * 1.8 + a2 * 0.5, dkm);
                col = mix(col, vec3(0.08, 0.03, 0.0), halo * 0.55);
                col = mix(col, vec3(1.0, 0.42, 0.0), core);
              }
              float dbp = 2.0 * asin(clamp(length(Q - uProfB) * 0.5, 0.0, 1.0)) * 6371.0 / uKmPx;
              col = mix(col, vec3(0.08, 0.03, 0.0), (1.0 - smoothstep(7.0, 8.5, dbp)) * 0.6);
              col = mix(col, vec3(1.0, 0.42, 0.0), 1.0 - smoothstep(5.5, 6.8, dbp));
              col = mix(col, vec3(1.0), 1.0 - smoothstep(2.2, 3.2, dbp));
              if (uProfPOn > 0.5) {
                float dpp = 2.0 * asin(clamp(length(Q - uProfP) * 0.5, 0.0, 1.0)) * 6371.0 / uKmPx;
                col = mix(col, vec3(1.0), 1.0 - smoothstep(5.0, 6.2, dpp));
                col = mix(col, vec3(0.85, 0.12, 0.0), 1.0 - smoothstep(3.0, 4.2, dpp));
              }
            }
            for (int k = 0; k < 2; k++) {
              float ph = fract(uPinT / 2.4 + float(k) * 0.5);
              float rr = 5.0 + ph * 44.0;
              float a = (1.0 - smoothstep(1.0, 2.6, abs(px - rr))) * pow(1.0 - ph, 1.5) * 0.9;
              col = mix(col, vec3(1.0, 0.10, 0.05), a);
            }
            col = mix(col, vec3(1.0, 0.16, 0.06), exp(-px * px / 40.0) * 0.6);
          }
          diffuseColor.rgb *= col;
        }`).replace("#include <roughnessmap_fragment>",`
        float roughnessFactor = mix(0.34, 0.52, gLand);
        if (uMode > 1.5) roughnessFactor = mix(0.40, 0.62, gLand);`).replace("#include <normal_fragment_maps>",`
        {
          vec2 uvh = vHUv;
          vec2 fw = fwidth(uvh);
          float du = max(uTexel.x, min(fw.x, 0.01));
          float dv = max(uTexel.y, min(fw.y, 0.01));
          float hE = gH(texture(uHeight, uvh + vec2(du, 0.0)).r), hW = gH(texture(uHeight, uvh - vec2(du, 0.0)).r);
          float hN = gH(texture(uHeight, uvh + vec2(0.0, dv)).r), hS = gH(texture(uHeight, uvh - vec2(0.0, dv)).r);
          float lat = (uvh.y - 0.5) * PI;
          float cl = max(cos(lat), 0.03);
          float polar = 1.0 - smoothstep(1.40, 1.50, abs(lat));
          float k = uExag * uShade * polar;
          float legM = 0.0;
          { // the printed legend panel sits on a smooth patch of ocean
            vec2 lq = (uvh - uLeg.xy) / uLeg.zw;
            float e = min(min(lq.x, 1.0 - lq.x), min(lq.y, 1.0 - lq.y));
            legM = uLegOn * smoothstep(-0.03, 0.02, e);
            k *= 1.0 - 0.97 * legM;
          }
          float sE = (hE - hW) * k / (2.0 * du * 2.0 * PI * cl);
          float sN = (hN - hS) * k / (2.0 * dv * PI);
          if (gLw > 0.0) {
            // ~1 km Terrarium heights: finer slopes (gain-limited so the exaggerated relief does not turn harsh)
            vec2 lfw = fw / uL.zw;
            float lu = max(uLTexel.x, min(lfw.x, 0.01 / uL.z)), lv = max(uLTexel.y, min(lfw.y, 0.01 / uL.w));
            float lE = gH(texture(uLH, gLq + vec2(lu, 0.0)).r), lW = gH(texture(uLH, gLq - vec2(lu, 0.0)).r);
            float lN = gH(texture(uLH, gLq + vec2(0.0, lv)).r), lS = gH(texture(uLH, gLq - vec2(0.0, lv)).r);
            float kl = k * uLGain;
            float sE2 = (lE - lW) * kl / (2.0 * lu * uL.z * 2.0 * PI * cl), sN2 = (lN - lS) * kl / (2.0 * lv * uL.w * PI);
            sE = mix(sE, sE2, gLw); sN = mix(sN, sN2, gLw);
          }
          gSlope = length(vec2(sE, sN));
          vec3 eV = normalize(vEastV), nV = normalize(vNorthV);
          vec3 upV = normalize(cross(eV, nV));
          normal = normalize(normal - sE * eV - sN * nV);
          // multi-scale cavity: local height vs. blurred surroundings (ridges bright, valleys dark)
          float h0 = gH(gH0);
          float b1 = gH(textureLod(uHeight, uvh, gLod + 2.0).r), b2 = gH(textureLod(uHeight, uvh, gLod + 4.0).r);
          float cav = (h0 - (0.55 * b1 + 0.45 * b2)) * uExag * 6371000.0 / 40.0 / 900.0;
          gAO = clamp(1.0 + uCav * cav * polar * (1.0 - legM), 0.45, 1.3);
          // self-shadowing: short horizon march towards the key light
          gShadowF = 1.0;
          {
            vec3 L = normalize(uKeyDir);
            float lE = dot(L, eV), lN = dot(L, nV), lU = dot(L, upV);
            float dl = length(vec2(lE, lN));
            if (lU > 0.02 && dl > 1e-3 && polar > 0.0) {
              vec2 d = vec2(lE, lN) / dl; float tanE = lU / dl;
              float kk = uExag * uShade * 0.55;
              float occ = 0.0;
              float t0 = max(PI * uTexel.y * 1.5, PI * fw.y * 1.2);
              for (int i = 0; i < 6; i++) {
                float t = t0 * pow(2.0, float(i));
                vec2 off = vec2(d.x * t / (2.0 * PI * cl), d.y * t / PI);
                float hs = gH(textureLod(uHeight, uvh + off, gLod + float(i) * 0.8).r);
                occ = max(occ, ((hs - h0) * kk - t * tanE) / t);
              }
              gShadowF = 1.0 - smoothstep(0.0, 0.35, occ) * polar * (1.0 - legM);
            }
          }
        }`).replace("#include <clearcoat_normal_fragment_begin>",`
        #ifdef USE_CLEARCOAT
          vec3 clearcoatNormal = normalize(mix(nonPerturbedNormal, normal, 0.35));
        #endif`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
        {
          float sh = mix(1.0, gShadowF, uShadow);
          reflectedLight.directDiffuse *= sh * gAO;
          reflectedLight.directSpecular *= sh * min(gAO, 1.0);
          reflectedLight.indirectDiffuse *= gAO;
          #ifdef USE_CLEARCOAT
            clearcoatSpecularDirect *= mix(1.0, sh, 0.8);
          #endif
        }`)};let rt=new As(1,Dn.seg[0],Dn.seg[1]),Rt=new _e(rt,Q);Rt.castShadow=!0,Rt.receiveShadow=!1;let Vt=new Di({color:15922423,metalness:1,roughness:.12,envMapIntensity:1.35}),Ct=new Di({color:12568012,metalness:1,roughness:.22,envMapIntensity:1.2}),te=new Di({color:16777215,map:HM(),metalness:1,roughness:.16,envMapIntensity:1.35}),Ye=new Rs({color:16185337,roughness:.22,metalness:0,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:.9}),re=new Rs({color:2057161,roughness:.25,clearcoat:1,clearcoatRoughness:.08}),ae=23.44*Ge,ye=1.072,Jt=1.112,Re=.01,$e=(ye+Jt)/2,He=new ii;e.add(He);let xe=new ii;xe.rotation.z=ae,He.add(xe);let Ue=new ii;xe.add(Ue),Ue.add(Rt);{let k=(ot,at)=>{let bt=[],Bt=[],le=[];for(let ee=0;ee<=360;ee++){let Ze=Math.PI/2+ee/360*Math.PI,on=Math.cos(Ze),Ce=Math.sin(Ze);if(bt.push(on*ye,Ce*ye,ot,on*Jt,Ce*Jt,ot),Bt.push(ee/360,0,ee/360,1),ee<360){let Se=ee*2;at?le.push(Se,Se+2,Se+1,Se+1,Se+2,Se+3):le.push(Se,Se+1,Se+2,Se+1,Se+3,Se+2)}}let Gt=new Sn;return Gt.setAttribute("position",new ke(bt,3)),Gt.setAttribute("uv",new ke(Bt,2)),Gt.setIndex(le),Gt.computeVertexNormals(),Gt},J=new _e(k(Re/2,!1),te),ut=new _e(k(-Re/2,!0),te);J.castShadow=ut.castShadow=!0,xe.add(J,ut);let ht=(ot,at)=>{let bt=[],Bt=[];for(let Gt=0;Gt<=360;Gt++){let ee=Math.PI/2+Gt/360*Math.PI,Ze=Math.cos(ee),on=Math.sin(ee);if(bt.push(Ze*ot,on*ot,Re/2,Ze*ot,on*ot,-Re/2),Gt<360){let Ce=Gt*2;at?Bt.push(Ce,Ce+1,Ce+2,Ce+1,Ce+3,Ce+2):Bt.push(Ce,Ce+2,Ce+1,Ce+1,Ce+2,Ce+3)}}let le=new Sn;return le.setAttribute("position",new ke(bt,3)),le.setIndex(Bt),le.computeVertexNormals(),le},ct=new _e(ht(Jt,!1),Vt),mt=new _e(ht(ye,!0),Vt);ct.material.side=qn,xe.add(ct,mt);for(let ot of[1,-1]){let at=new _e(new On(.03,.03,.03,32),ot>0?re:Vt);at.position.set(0,ot*(Jt+.004),0),xe.add(at);let bt=new _e(new As(.016,20,12),Vt);bt.position.set(0,ot*(Jt+.022),0),xe.add(bt);let Bt=new _e(new On(.008,.008,ye-.98,16),Ct);Bt.position.set(0,ot*(.98+ye)/2,0),xe.add(Bt);let le=new _e(new On(.028,.018,.01,24),Ct);le.position.set(0,ot*1,0),xe.add(le)}}let z=xe.children.filter(A=>A!==Ue),un=-Jt-.004,fe=-1.66,C=0;{let A=Math.PI*1.5-ae,k=new V(Math.cos(A)*$e,Math.sin(A)*$e,0).applyAxisAngle(new V(0,0,1),ae),J=k.y-.01,ut=J-fe,ht=new _e(new On(.032,.036,ut,40),Vt);ht.position.set(k.x,fe+ut/2,0),ht.castShadow=!0,He.add(ht);let ct=new _e(new On(.05,.044,.06,40),Vt);ct.position.set(k.x,J,0),He.add(ct);let mt=new _e(new On(.055,.085,.07,48),Vt);mt.position.set(k.x,fe+.035,0),He.add(mt);let ot=.72,at=.13,bt=[new Xt(0,0)];for(let Gt=0;Gt<=10;Gt++){let ee=-Math.PI/2+Gt/10*Math.PI/2;bt.push(new Xt(ot-.02+Math.cos(ee)*.02,.02+Math.sin(ee)*.02))}bt.push(new Xt(ot,at*.6));for(let Gt=0;Gt<=16;Gt++){let ee=Gt/16*Math.PI/2;bt.push(new Xt(ot-.07+Math.cos(ee)*.07,at*.6+Math.sin(ee)*at*.4))}bt.push(new Xt(0,at));let Bt=new _e(new Ra(bt,160),Ye);Bt.position.set(k.x,fe-at,0),Bt.castShadow=!0,Bt.receiveShadow=!0,He.add(Bt);let le=new _e(new On(ot+.004,ot+.004,at*.42,160,1,!0),Vt);le.position.set(k.x,fe-at+at*.3,0),He.add(le),C=fe-at}let x=new _e(new Ts(14,7),new Di({map:kM(),roughness:.55,metalness:0,envMapIntensity:.4,transparent:!0}));{let A=Hi(4,256),k=A.getContext("2d"),J=k.createLinearGradient(0,0,0,256);J.addColorStop(0,"#000"),J.addColorStop(.35,"#fff"),J.addColorStop(1,"#fff"),k.fillStyle=J,k.fillRect(0,0,4,256),x.material.alphaMap=new ws(A)}x.material.map.repeat.set(2.2,1.1),x.rotation.x=-Math.PI/2,x.position.set(0,C-.001,1.2),x.receiveShadow=!0,He.add(x);let D=null,Z=!1,tt=.42,dt=1.12,_t=13,j=5.5,st=()=>{let A=window.innerWidth/window.innerHeight;return Math.max(5.5,1.12/(Math.tan(15*Ge)*A))};j=st();let W={spin:0,spinVel:0,pitch:.13,pitchT:.13,dist:j,distT:j,lastInput:-1e9},zt=A=>-Math.PI/2-A*Ge;W.spin=zt(100);let pt=new Map,gt=0,Ot=0,kt=0,$t=0,B=0,vt=0,it=0;n.addEventListener("pointerdown",A=>{if(n.setPointerCapture(A.pointerId),pt.set(A.pointerId,{x:A.clientX,y:A.clientY}),Ot=B=A.clientX,kt=vt=A.clientY,$t=it=performance.now(),W.spinVel=0,W.lastInput=performance.now(),W.fly=null,pt.size===2){let[k,J]=[...pt.values()];gt=Math.hypot(k.x-J.x,k.y-J.y)}}),n.addEventListener("pointermove",A=>{if(!pt.has(A.pointerId))return;if(pt.set(A.pointerId,{x:A.clientX,y:A.clientY}),W.lastInput=performance.now(),pt.size===2){let[mt,ot]=[...pt.values()],at=Math.hypot(mt.x-ot.x,mt.y-ot.y);gt>0&&(W.distT=hn.clamp(W.distT*gt/at,dt,_t)),gt=at;return}let k=performance.now(),J=Math.max(1,k-$t),ut=A.clientX-Ot,ht=A.clientY-kt,ct=2.4*(W.dist-.95)/(window.innerHeight*3.4);W.spin+=ut*ct,W.spinVel=.8*W.spinVel+.2*(ut*ct/J*1e3),W.pitchT=hn.clamp(W.pitchT+ht*ct,-1.25,1.3),Ot=A.clientX,kt=A.clientY,$t=k});let Mt=A=>{pt.delete(A.pointerId),gt=0,performance.now()-$t>80&&(W.spinVel=0),Math.hypot(A.clientX-B,A.clientY-vt)<5&&performance.now()-it<450&&(Z?fs(A.clientX,A.clientY):Me(A.clientX,A.clientY))};n.addEventListener("pointerup",Mt),n.addEventListener("pointercancel",A=>{pt.delete(A.pointerId),gt=0}),n.addEventListener("wheel",A=>{A.preventDefault(),W.lastInput=performance.now(),W.fly=null,W.distT=hn.clamp(W.distT*Math.exp(A.deltaY*.0012),dt,_t)},{passive:!1});let Et=new Na,lt=new Xt,Dt=(A,k,J=1)=>{lt.set(A/window.innerWidth*2-1,-(k/window.innerHeight)*2+1),Et.setFromCamera(lt,i);let ut=new Fe().copy(Rt.matrixWorld).invert(),ht=Et.ray.origin.clone().applyMatrix4(ut),ct=Et.ray.direction.clone().transformDirection(ut),mt=ht.dot(ct),ot=ht.dot(ht)-J*J,at=mt*mt-ot;if(at<0)return null;let bt=-mt-Math.sqrt(at);if(bt<0)return null;let Bt=ht.add(ct.multiplyScalar(bt)).normalize(),le=Math.asin(hn.clamp(Bt.y,-1,1))/Ge,Gt=Math.atan2(Bt.z,-Bt.x)/(2*Math.PI);return Gt=(Gt%1+1)%1,[Gt*360-180,le]},Ft=A=>A>=1e6?`${(A/1e4).toFixed(0)} \u4E07\u5E73\u65B9\u5343\u7C73`:A>=1e4?`${(A/1e4).toFixed(1)} \u4E07\u5E73\u65B9\u5343\u7C73`:`${Math.round(A).toLocaleString()} \u5E73\u65B9\u5343\u7C73`,Pe=A=>A>=1e8?`${(A/1e8).toFixed(2)} \u4EBF`:A>=1e4?`${(A/1e4).toFixed(0)} \u4E07`:`${A}`;function Me(A,k){let J=Dt(A,k),ut=Lt("card");if(!J){ut.classList.remove("on");return}let ht=null;for(let ot=0;ot<g.feats.length;ot++){let at=g.bboxes[ot];if(!(J[1]<at[0][1]-.5||J[1]>at[1][1]+.5)&&Uu(g.feats[ot],J)){ht=g.feats[ot];break}}if(!ht){ut.classList.remove("on");return}let ct=u.props[ht.id];if(!ct)return;Lt("card-name").textContent=ct.zh||ct.en,Lt("card-en").textContent=ct.a3==="CHN"?"People's Republic of China":(ct.en||"").toLowerCase().replace(/\b\w/g,ot=>ot.toUpperCase());let mt=[["\u6240\u5C5E\u5927\u6D32",ct.cont],["\u9996\u90FD",ct.cap||"\u2014"],["\u9762\u79EF",ct.area?Ft(ct.area):"\u2014"],["\u4EBA\u53E3",ct.pop>0?Pe(ct.pop):"\u2014"]];Lt("card-body").innerHTML=mt.map(([ot,at])=>`<div><span>${ot}</span><b>${at}</b></div>`).join(""),ut.style.left=Math.min(window.innerWidth-250,A+16)+"px",ut.style.top=Math.min(window.innerHeight-190,k+10)+"px",ut.classList.add("on")}Lt("card").addEventListener("click",()=>Lt("card").classList.remove("on"));let We=null,En=0,mo="";function Gc(){let A=window.innerWidth,k=window.innerHeight,J=Dt(A/2,k/2);if(!J)return null;let ut=10,ht=90,ct=-90,mt=0,ot=0;for(let le=0;le<=ut;le++)for(let Gt=0;Gt<=ut;Gt++){let ee=Dt(le/ut*A,Gt/ut*k);if(!ee){ot++;continue}ht=Math.min(ht,ee[1]),ct=Math.max(ct,ee[1]);let Ze=ee[0]-J[0];Ze=(Ze+540)%360-180,mt=Math.max(mt,Math.abs(Ze))}let at=Dt(A/2-20,k/2),bt=Dt(A/2+20,k/2),Bt=0;if(at&&bt){let le=bt[0]-at[0];le=(le+540)%360-180;let Gt=Math.hypot(le*Math.cos(J[1]*Ge),bt[1]-at[1]);Bt=40/Math.max(Gt,1e-6)}return{c:J,minLat:ht,maxLat:ct,maxDl:mt,miss:ot,ppdScreen:Bt*t.getPixelRatio()}}function zs(A){let k=Gc();if(!(k&&k.ppdScreen>an*.85)){xt.want=0,We=null;return}let ut=(k.maxLat-k.minLat)*1.25+2,ht=2*k.maxDl*1.25+2,ct=Math.min(X/Math.min(359,ht),X/Math.min(179,ut),Math.max(an*1.5,k.ppdScreen*1.4),420);if(ct<an*1.15){xt.want=0,We=null;return}let mt=X/ct,ot=hn.clamp((k.maxLat+k.minLat)/2,-90+mt/2,90-mt/2),at=ot+mt/2,bt=k.c[0];if(!A&&We&&Math.abs(We.ppd-ct)/ct<.2&&Math.abs((bt-We.lonC+540)%360-180)<mt*.12&&Math.abs(ot-We.latC)<mt*.12)return;We={ppd:ct,lonC:bt,latC:ot};let Bt=ao().rotate([-bt,0]).scale(ct*180/Math.PI).translate([X/2,at*ct]).precision(.05),le=bt-mt/2,Gt=at-mt,ee=(Be,Je)=>{let Ai=(Be-bt+540)%360-180;return Math.abs(Ai)<mt*.6&&Je>Gt-3&&Je<at+3},Ze=Be=>{if(Be[0][1]>at+1||Be[1][1]<Gt-1)return!1;if(Be[1][0]-Be[0][0]>300||Be[0][0]>Be[1][0])return!0;let Je=(Be[0][0]-bt+540)%360-180;return Je+(Be[1][0]-Be[0][0])>-mt*.6&&Je<mt*.6},on=performance.now(),Ce=ao().rotate([-bt,0]).scale(ct/2*180/Math.PI).translate([et/2,at*ct/2]).precision(.05);lf(nt.getContext("2d"),Ce,et,et,ct/2,{...g,visible:Ze});let Se=$.getContext("2d");Se.clearRect(0,0,X,X),cf(Se,Bt,X,X,ct,g,{grid:ce.grid}),ce.extras&&pf(Se,Bt,ct);let Ti=ct/an;if(ce.grid&&ff(Se,(Be,Je)=>Bt([Be,Je]),Ti,ee,0),ce.labels){let Be=Math.min(1,Math.pow(2.2*an/ct,.55)),Je=0;for(let tn=0;tn<m.length;tn++)m[tn].g>=Be-1e-6&&(Je=tn);let Ai=S(Je);window.__winLevel=Je,uf(Se,ce.extras?Ai:Ai.filter(tn=>!tn.cls.startsWith("cur")),(tn,Ri)=>Bt([tn,Ri]),Ti,ee,0,Be/m[Je].g,ce.en)}ce.extras&&Math.abs((mn.lon-bt+540)%360-180)<mt*.6+20&&mn.lat+mn.h>Gt&&mn.lat-mn.h<at&&gf(Se,Bt,ct);let Wi=ft.uWinOn.value,An=K[1-St],Vn=K[St];St=1-St,An.ft.needsUpdate=!0,An.ot.needsUpdate=!0,An.rect.set(((le+180)/360%1+1)%1,(Gt+90)/180,mt/360,mt/180),ft.uWinOver.value=An.ot,ft.uWinFill.value=An.ft,ft.uWin.value=An.rect,ft.uWinOver2.value=Vn.ot,ft.uWinFill2.value=Vn.ft,ft.uWin2.value=Vn.rect,ft.uWinOn2.value=Wi,ft.uWinOn.value=0,xt.want=1,window.__winMs=performance.now()-on}let ks=Lt("exag"),Wc=Lt("exag-val"),hr=A=>{ce.exag=A,ft.uExag.value=A/6371e3,Wc.textContent=`\xD7${A}`,ks.value=A};ks.addEventListener("input",()=>hr(+ks.value));let ls=A=>{ce.mode=A,ft.uMode.value=A,document.querySelectorAll("[data-mode]").forEach(J=>J.classList.toggle("on",+J.dataset.mode===A));let k=document.getElementById("lc-mode");k&&(k.textContent=A===1?"\u5207\u6362\u56DE\u653F\u533A\u914D\u8272":"\u5207\u6362\u4E3A\u5730\u5F62\u914D\u8272\uFF08\u770B\u6E05\u9AD8\u4F4E\u8D77\u4F0F\uFF09")};document.querySelectorAll("[data-mode]").forEach(A=>A.addEventListener("click",()=>ls(+A.dataset.mode)));let Kn=async()=>{os("\u6B63\u5728\u91CD\u65B0\u5370\u5236\u2026"),Lt("busy").classList.add("on"),await cr(),O(),L.needsUpdate=!0,We=null,zs(!0),Lt("busy").classList.remove("on")},li=(A,k)=>{let J=Lt(A);J.addEventListener("change",()=>k(J.checked))};li("t-labels",A=>{ce.labels=A,Kn()}),li("t-grid",A=>{ce.grid=A,Kn()}),li("t-en",A=>{ce.en=A,Kn()}),li("t-extras",A=>{ce.extras=A,ft.uLegOn.value=A?1:0,Kn()}),li("t-rotate",A=>{ce.autoRotate=A}),hr(ce.exag),ls(ce.mode);let cs=(A,k)=>{A=(A%as+as)%as,k=Math.max(0,Math.min(fo-1,k));let J=f[k*as+A];return J>=0?J*4:J*20},hs=(A,k)=>{let J=(A+180)/360*as-.5,ut=(k+90)/180*fo-.5,ht=Math.floor(J),ct=Math.floor(ut),mt=J-ht,ot=ut-ct;return(cs(ht,ct)*(1-mt)+cs(ht+1,ct)*mt)*(1-ot)+(cs(ht,ct+1)*(1-mt)+cs(ht+1,ct+1)*mt)*ot},bi=(A,k)=>{let J=Math.round((A+180)/360*as-.5),ut=Math.round((k+90)/180*fo-.5),ht=0,ct=0,mt=Math.max(1,Math.round(3*as/8192));for(let ot=-mt;ot<=mt;ot++)for(let at=-mt;at<=mt;at++)ht+=cs(J+at,ut+ot),ct++;return ht/ct},wi=(A,k,J=new V)=>{let ut=(A+180)*Ge,ht=k*Ge;return J.set(-Math.cos(ut)*Math.cos(ht),Math.sin(ht),Math.sin(ut)*Math.cos(ht))},us=A=>1+hn.clamp((A>0?A:A*ft.uOcean.value)*ft.uExag.value,-.03,.062),Hn=new ii;Hn.visible=!1,Ue.add(Hn);{let A=new Di({color:14672872,metalness:1,roughness:.18,envMapIntensity:1.3}),k=new Rs({color:15214108,roughness:.25,clearcoat:1,clearcoatRoughness:.06,emissive:5899520,envMapIntensity:1}),J=new _e(new On(.035,.008,1,16),A);J.position.y=.5;let ut=new _e(new As(.26,32,20),k);ut.position.y=1.12;let ht=new _e(new On(.11,.16,.12,24),k);ht.position.y=.86;let ct=new _e(new On(.07,.07,.02,20),new Ss({color:4194304}));ct.position.y=0,Hn.add(J,ht,ut,ct)}let jn={dir:new V,hm:0},oa="reliefGlobe.myLocation.v1",Xc={gps:"\u6D4F\u89C8\u5668\u5B9A\u4F4D\uFF08GPS/Wi-Fi\uFF09",ip:"\u7F51\u7EDC IP \u5B9A\u4F4D\uFF08\u57CE\u5E02\u7EA7\uFF0C\u53EF\u80FD\u504F\u5DEE\u6570\u5341\u516C\u91CC\uFF09",search:"\u57CE\u5E02\u641C\u7D22",click:"\u5728\u5730\u7403\u4E0A\u70B9\u9009",coord:"\u8F93\u5165\u5750\u6807",share:"\u4ED6\u4EBA\u5206\u4EAB\u7684\u94FE\u63A5",saved:""},Hs=(A,k="")=>{let J=Lt("loc-status");J.innerHTML=A,J.className=k};function qc(){let A=jn.dir;ft.uPinDir.value.copy(A);let k=D.lat*Ge,J=(D.lon+180)*Ge;ft.uPinE.value.set(Math.sin(J),0,Math.cos(J)),ft.uPinN.value.set(Math.cos(J)*Math.sin(k),Math.cos(k),-Math.sin(J)*Math.sin(k)),ft.uPinOn.value=1}function ci(A,k={}){let J=(A.lon+540)%360-180,ut=hn.clamp(A.lat,-89.9,89.9),ht=A.name?{name:A.name,ctx:A.ctx||""}:d.describe(J,ut);if(D={lon:J,lat:ut,name:ht.name,ctx:ht.ctx,method:A.method,src:A.src||"",acc:A.acc||0,t:Date.now()},k.save!==!1)try{localStorage.setItem(oa,JSON.stringify(D))}catch{}M(k)}function M(A={}){de&&be(),wi(D.lon,D.lat,jn.dir),jn.hm=bi(D.lon,D.lat),Hn.visible=!0,qc(),Lt("pin-name").textContent=D.name,Lt("b-fly").disabled=!1,Lt("b-clear").style.display="",Lt("prompt").classList.remove("on");let k=D.method==="saved"?"":Xc[D.method]||"";Hs(`<b>${D.name}</b>${D.ctx?`<i>${D.ctx}</i>`:""}<small>${uo(D.lon,D.lat)}${k?" \xB7 "+k:""}</small>`,"set"),F(),A.fly!==!1&&Tn(A.instant)}function F(){let A=It(D.lon,D.lat),k=A??hs(D.lon,D.lat),J=k>=0?`\u7EA6 ${Math.round(k).toLocaleString()} \u7C73`:bi(D.lon,D.lat)<-30?`\u6C34\u6DF1\u7EA6 ${Math.round(-k).toLocaleString()} \u7C73`:`\u7EA6 ${Math.round(k)} \u7C73`,ut=d.nearby(D.lon,D.lat);Lt("lc-name").textContent=D.name,Lt("lc-ctx").textContent=D.ctx||"";let ht={gps:"\u6D4F\u89C8\u5668\u5B9A\u4F4D",ip:"IP \u5B9A\u4F4D\uFF08\u8FD1\u4F3C\uFF09",search:"\u57CE\u5E02\u641C\u7D22",click:"\u5730\u7403\u70B9\u9009",coord:"\u8F93\u5165\u5750\u6807",share:"\u5206\u4EAB\u94FE\u63A5"}[D.method]||"\u5DF2\u4FDD\u5B58",ct=ut.inside.map(ot=>`${ot.name}<em>${ot.cat}</em>`).join("\u3001"),mt=ut.near.map((ot,at)=>`<li class="pf${de&&de.name===ot.name?" sel":""}" data-i="${at}" title="\u67E5\u770B\u4ECE\u6211\u7684\u4F4D\u7F6E\u5230${ot.name}\u7684\u5730\u5F62\u5256\u9762"><span class="dir">${yf(ot.b)} ${ra(ot.d)}</span><span class="nm">${ot.name}${ot.extra&&ot.cat==="\u5C71\u5CF0"?` <small>${(+ot.extra).toLocaleString()} m</small>`:""}</span><em${ot.top?' class="top"':""}>${ot.top||ot.cat}</em><span class="chip">\u5256\u9762</span></li>`).join("");Lt("lc-body").innerHTML=`<div class="kv"><span>\u5750\u6807</span><b>${uo(D.lon,D.lat)}</b></div>
      <div class="kv"><span>\u6D77\u62D4</span><b>${J}<small>${A!=null?`\uFF08AWS Terrarium z${H.z}\uFF0C\u7EA6 ${H.km.toFixed(1)} km \u7F51\u683C\uFF09`:"\uFF08ETOPO1 \u7EA6 3.7 km \u7F51\u683C\uFF0C\u8FD1\u4F3C\uFF09"}</small></b></div>
      <div class="kv"><span>\u5B9A\u4F4D\u65B9\u5F0F</span><b>${ht}${D.method==="ip"?"<small>\uFF08\u57CE\u5E02\u7EA7\uFF0C\u53EF\u641C\u7D22\u6216\u70B9\u9009\u4FEE\u6B63\uFF09</small>":""}</b></div>
      ${ct?`<div class="kv"><span>\u6240\u5728\u5730\u5F62</span><b>${ct}</b></div>`:""}
      <div class="lt" id="lc-lt">${Pt()}</div>
      <div class="nearh" style="display:flex;justify-content:space-between;align-items:center">\u5468\u8FB9\u5C71\u5DDD \xB7 \u65B9\u5411\u4E0E\u76F4\u7EBF\u8DDD\u79BB<small style="font-weight:400;color:#999;font-size:10.5px">\u70B9\u4E00\u9879\u770B\u5256\u9762</small></div><ul class="near">${mt||"<li>\u5468\u8FB9\u65E0\u6536\u5F55\u7684\u4E3B\u8981\u5730\u7406\u8981\u7D20</li>"}</ul>
      <div id="lc-prof"></div>
      <div class="btns" style="margin-top:9px"><button class="btn" id="lc-share">\u5206\u4EAB\u8FD9\u4E2A\u4F4D\u7F6E</button><button class="btn" id="lc-mode2">${ce.mode===1?"\u653F\u533A\u914D\u8272":"\u5730\u5F62\u914D\u8272"}</button></div>
      <button class="btn" id="lc-mode" style="display:none">${ce.mode===1?"\u5207\u6362\u56DE\u653F\u533A\u914D\u8272":"\u5207\u6362\u4E3A\u5730\u5F62\u914D\u8272\uFF08\u770B\u6E05\u9AD8\u4F4E\u8D77\u4F0F\uFF09"}</button>`,Lt("lc-mode").onclick=()=>{ls(ce.mode===1?0:1),F()},Lt("lc-mode2").onclick=()=>{ls(ce.mode===1?0:1),F()},Lt("lc-share").onclick=()=>Ei(),document.querySelectorAll("#lc-body li.pf").forEach(ot=>{ot.onclick=()=>{let at=ut.near[+ot.dataset.i];de&&de.name===at.name?be():Ie(at)}}),window.__nearby=ut,de&&Qe()}let H={cache:new Map,state:"idle",msg:"",req:0,grid:null,N:0,lon0:0,lat0:0,dLon:0,dLat:0,z:0,km:0,want:0,key:""},q=Dn.tier==="high"?1536:Dn.tier==="med"?1024:768,Y=(A,k,J)=>`https://s3.amazonaws.com/elevation-tiles-prod/terrarium/${A}/${k}/${J}.png`,wt=A=>{let k=hn.clamp(A,-85,85)*Ge;return(1-Math.log(Math.tan(k)+1/Math.cos(k))/Math.PI)/2};window.__ltTimeout=1e4;function Pt(){return ce.local?H.state==="loading"?`<span class="spin"></span>\u5C40\u90E8\u9AD8\u7CBE\u5EA6\u5730\u5F62\uFF1A\u6B63\u5728\u4E0B\u8F7D ${H.msg}`:H.state==="ok"?`\u5C40\u90E8\u9AD8\u7CBE\u5EA6\u5730\u5F62\uFF1A<b>\u5DF2\u52A0\u8F7D</b>\uFF08AWS Terrarium z${H.z}\uFF0C\u7EA6 ${H.km.toFixed(1)} km\uFF0C${H.msg}\uFF09`:H.state==="fail"?`\u5C40\u90E8\u9AD8\u7CBE\u5EA6\u5730\u5F62\uFF1A<i>${H.msg}</i>\uFF0C\u7EE7\u7EED\u4F7F\u7528\u5185\u7F6E ETOPO1 \u5730\u5F62`:"\u5C40\u90E8\u9AD8\u7CBE\u5EA6\u5730\u5F62\uFF1A\u98DE\u5230\u4F4D\u7F6E\u540E\u81EA\u52A8\u4ECE\u7F51\u7EDC\u52A0\u8F7D":"\u5C40\u90E8\u9AD8\u7CBE\u5EA6\u5730\u5F62\uFF1A\u5DF2\u5173\u95ED"}let yt=()=>{let A=Lt("lc-lt");A&&(A.innerHTML=Pt())},Ut=`
const toHalf = (() => { const f = new Float32Array(1), u = new Uint32Array(f.buffer);
  return (v) => { f[0] = v; const x = u[0], s = (x >>> 16) & 0x8000; let e = ((x >>> 23) & 0xff) - 112, m = x & 0x7fffff;
    if (e <= 0) return s; if (e > 30) return s | 0x7c00; return s | (e << 10) | ((m + 0x1000) >>> 13); }; })();
const cache = new Map(); let cur = 0;
const mercY = (lat) => { const r = Math.max(-85, Math.min(85, lat)) * Math.PI / 180; return (1 - Math.log(Math.tan(r) + 1 / Math.cos(r)) / Math.PI) / 2; };
async function tile(z, x, y, tmo) {
  const key = z + '/' + x + '/' + y; if (cache.has(key)) return cache.get(key);
  const ac = new AbortController(); const to = setTimeout(() => ac.abort(), tmo);
  try {
    const r = await fetch('https://s3.amazonaws.com/elevation-tiles-prod/terrarium/' + key + '.png', { mode: 'cors', signal: ac.signal });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    const blob = await r.blob(); clearTimeout(to);
    const bmp = await createImageBitmap(blob, { colorSpaceConversion: 'none', premultiplyAlpha: 'none' });
    const c = new OffscreenCanvas(256, 256), cx = c.getContext('2d', { willReadFrequently: true }); cx.drawImage(bmp, 0, 0); bmp.close();
    const px = cx.getImageData(0, 0, 256, 256).data, out = new Float32Array(65536);
    for (let i = 0, j = 0; i < 65536; i++, j += 4) out[i] = px[j] * 256 + px[j + 1] + px[j + 2] / 256 - 32768;
    if (cache.size > 160) cache.delete(cache.keys().next().value);
    cache.set(key, out); return out;
  } finally { clearTimeout(to); }
}
onmessage = async (ev) => {
  const q = ev.data; cur = q.id;
  const { id, z, n, x0, x1, y0, y1, lon0, lat0, dLon, dLat, N, timeout } = q;
  const TW = (x1 - x0 + 1) * 256, TH = (y1 - y0 + 1) * 256, mosaic = new Float32Array(TW * TH).fill(NaN);
  const jobs = []; for (let ty = y0; ty <= y1; ty++) for (let tx = x0; tx <= x1; tx++) jobs.push([tx, ty, 0]);
  let done = 0, ok = 0, fails = 0, hard = 0, tmo = 0, lastErr = '';
  const run = async () => {
    while (jobs.length && cur === id) {
      const [tx, ty, tries] = jobs.shift();
      if ((hard >= 3 || tmo >= 6) && ok === 0) { fails++; done++; lastErr = lastErr || '\u8BF7\u6C42\u8D85\u65F6'; continue; } // blocked / unreachable / hanging
      try {
        const t = await tile(z, ((tx % n) + n) % n, ty, timeout * (1 + tries)); ok++;
        const ox = (tx - x0) * 256, oy = (ty - y0) * 256;
        for (let r = 0; r < 256; r++) mosaic.set(t.subarray(r * 256, r * 256 + 256), (oy + r) * TW + ox);
      } catch (e) {
        const isT = e && e.name === 'AbortError'; if (isT) tmo++; else hard++;
        if (isT && tries < 1) { jobs.push([tx, ty, tries + 1]); continue; }
        fails++; lastErr = isT ? '\u8BF7\u6C42\u8D85\u65F6' : '\u65E0\u6CD5\u8BBF\u95EE AWS \u5730\u5F62\u670D\u52A1';
      }
      done++; postMessage({ id, progress: true, done });
    }
  };
  await Promise.all([0, 1, 2, 3, 4, 5].map(run));
  if (cur !== id) return;
  const grid = new Float32Array(N * N), hf = new Uint16Array(N * N);
  if (ok > 0) for (let j = 0; j < N; j++) {
    const la = lat0 + (j + 0.5) * dLat, fy = (mercY(la) * n - y0) * 256 - 0.5, iy = Math.floor(fy), ty = fy - iy;
    const r0 = Math.max(0, Math.min(TH - 1, iy)) * TW, r1 = Math.max(0, Math.min(TH - 1, iy + 1)) * TW;
    for (let i = 0; i < N; i++) {
      const lo = lon0 + (i + 0.5) * dLon, fx = ((lo + 180) / 360 * n - x0) * 256 - 0.5, ix = Math.floor(fx), tx = fx - ix;
      const c0 = Math.max(0, Math.min(TW - 1, ix)), c1 = Math.max(0, Math.min(TW - 1, ix + 1));
      const v = (mosaic[r0 + c0] * (1 - tx) + mosaic[r0 + c1] * tx) * (1 - ty) + (mosaic[r1 + c0] * (1 - tx) + mosaic[r1 + c1] * tx) * ty;
      grid[j * N + i] = v; hf[j * N + i] = v === v ? toHalf(v) : 0;
    }
  }
  postMessage({ id, ok, fails, lastErr, grid, hf }, [grid.buffer, hf.buffer]);
};`,Nt=null;function Kt(A,k){if(!Nt){let J=URL.createObjectURL(new Blob([Ut],{type:"text/javascript"}));Nt=new Worker(J),URL.revokeObjectURL(J)}return new Promise((J,ut)=>{Nt.onmessage=ht=>{let ct=ht.data;ct.id===A.id&&(ct.progress?k(ct):J(ct))},Nt.onerror=ht=>{ut(new Error(ht.message||"worker error"))},Nt.postMessage(A)})}async function jt(A,k){if(!ce.local)return;let J=`${A.toFixed(3)},${k.toFixed(3)}`;if(H.key===J&&(H.state==="ok"||H.state==="loading"))return;let ut=++H.req;if(H.key=J,navigator.onLine===!1){H.state="fail",H.msg="\u5F53\u524D\u79BB\u7EBF",yt();return}let ht=5.5,ct=Math.min(45,ht/Math.max(.12,Math.cos(k*Ge))),mt=hn.clamp(k-ht,-84,84-2*ht),ot=A-ct,at=q,bt=2*ct/at,Bt=2*ht/at,le=hn.clamp(Math.floor(Math.log2(360/(256*bt))),3,9),Gt,ee=ti=>{let xn=2**ti,fi=Math.floor((ot+180)/360*xn),Xi=Math.floor((ot+2*ct+180)/360*xn),xo=Math.floor(wt(mt+2*ht)*xn),ha=Math.floor(wt(mt)*xn);return{n:xn,x0:fi,x1:Xi,y0:xo,y1:ha,count:(Xi-fi+1)*(ha-xo+1)}};for(;(Gt=ee(le)).count>(Dn.mobile?20:42)&&le>3;)le--;H.state="loading",H.msg=`0/${Gt.count}`,yt();let{n:Ze,x0:on,x1:Ce,y0:Se,y1:Ti}=Gt,Wi=await Kt({id:ut,z:le,n:Ze,x0:on,x1:Ce,y0:Se,y1:Ti,lon0:ot,lat0:mt,dLon:bt,dLat:Bt,N:at,timeout:window.__ltTimeout},ti=>{ut===H.req&&(H.msg=`${ti.done}/${Gt.count}`,yt())});if(ut!==H.req)return;let{ok:An,fails:Vn,lastErr:Be,grid:Je,hf:Ai}=Wi;if(An===0){H.state="fail",H.msg=Be||"\u52A0\u8F7D\u5931\u8D25",H.key="",yt(),window.__lt="fail";return}for(let ti=0,xn=0;ti<at;ti++)for(let fi=0;fi<at;fi++,xn++){if(Je[xn]===Je[xn])continue;let Xi=hs(ot+(fi+.5)*bt,mt+(ti+.5)*Bt);Je[xn]=Xi,Ai[xn]=Sa.toHalfFloat(Xi)}if(ut!==H.req)return;let tn=new bs(Ai,at,at,er,In);tn.generateMipmaps=!0,tn.minFilter=ri,tn.magFilter=je,tn.wrapS=tn.wrapT=Cn,tn.colorSpace=Yn,tn.needsUpdate=!0;let Ri=ft.uLH.value;ft.uLOn.value=0,ft.uLH.value=tn,Ri.dispose(),ft.uL.value.set(((ot+180)/360%1+1)%1,(mt+90)/180,2*ct/360,2*ht/180),ft.uLTexel.value.set(1/at,1/at),Object.assign(H,{state:"ok",grid:Je,N:at,lon0:ot,lat0:mt,dLon:bt,dLat:Bt,z:le,km:40075*Math.cos(k*Ge)/(256*Ze),want:1,msg:`${An} \u5757\u74E6\u7247${Vn?`\uFF0C${Vn} \u5757\u5931\u8D25`:""}`}),window.__lt="ok",D&&F()}function It(A,k){if(H.state!=="ok"||!H.grid||!ce.local)return null;let ut=((A-H.lon0)%360+360)%360/H.dLon-.5,ht=(k-H.lat0)/H.dLat-.5,ct=H.N;if(ut<1||ht<1||ut>ct-2||ht>ct-2)return null;let mt=Math.floor(ut),ot=Math.floor(ht),at=ut-mt,bt=ht-ot,Bt=H.grid;return(Bt[ot*ct+mt]*(1-at)+Bt[ot*ct+mt+1]*at)*(1-bt)+(Bt[(ot+1)*ct+mt]*(1-at)+Bt[(ot+1)*ct+mt+1]*at)*bt}let Ee=(A,k)=>{let J=It(A,k);return J??hs(A,k)},de=null;function Ie(A){de={name:A.name,cat:A.cat,lon:A.tlon,lat:A.tlat},ft.uProfA.value.copy(wi(D.lon,D.lat,new V)),ft.uProfB.value.copy(wi(de.lon,de.lat,new V)),ft.uProfOn.value=1,document.querySelectorAll("#lc-body li.pf").forEach(J=>J.classList.toggle("sel",+J.dataset.i===window.__nearby.near.indexOf(A))),Qe();let k=Lt("lc-prof");k&&k.scrollIntoView&&k.scrollIntoView({block:"nearest",behavior:"smooth"})}function be(){de=null,ft.uProfOn.value=0,ft.uProfPOn.value=0;let A=Lt("lc-prof");A&&(A.innerHTML=""),document.querySelectorAll("#lc-body li.pf").forEach(k=>k.classList.remove("sel"))}function Qe(){let A=Lt("lc-prof");if(!A||!de||!D)return;let k=wi(D.lon,D.lat,new V),J=wi(de.lon,de.lat,new V),ut=k.angleTo(J),ht=ut*6371,ct=240,mt=[],ot="ETOPO1 \u7EA6 3.7 km",at=!1;for(let Ne=0;Ne<=ct;Ne++){let ei=Ne/ct,Kc=Math.sin((1-ei)*ut),jc=Math.sin(ei*ut),Ci=Math.sin(ut)||1,_o=ut<1e-6?k.clone():k.clone().multiplyScalar(Kc/Ci).add(J.clone().multiplyScalar(jc/Ci)),Cf=Math.asin(hn.clamp(_o.y,-1,1))/Ge,Pf=(Math.atan2(_o.z,-_o.x)/(2*Math.PI)*360+720)%360-180,Qc=It(Pf,Cf);Qc!=null&&(at=!0),mt.push({t:ei,d:ei*ht,e:Qc??hs(Pf,Cf),P:_o})}at&&(ot=`AWS Terrarium z${H.z} \u7EA6 ${H.km.toFixed(1)} km`);let bt=Math.min(...mt.map(Ne=>Ne.e)),Bt=Math.max(...mt.map(Ne=>Ne.e)),le=mt.reduce((Ne,ei)=>ei.e>Ne.e?ei:Ne),Gt=0;for(let Ne=1;Ne<mt.length;Ne++)Gt+=Math.max(0,mt[Ne].e-mt[Ne-1].e);let ee=Math.min(bt,0)-(Bt-bt)*.08-20,Ze=Bt+(Bt-bt)*.12+20,on=280,Ce=104,Se=34,Ti=6,Wi=8,An=18,Vn=Ne=>Se+(on-Se-Ti)*Ne/Math.max(ht,1e-6),Be=Ne=>Wi+(Ce-Wi-An)*(1-(Ne-ee)/(Ze-ee)),Je=mt.map((Ne,ei)=>`${ei?"L":"M"}${Vn(Ne.d).toFixed(1)},${Be(Ne.e).toFixed(1)}`).join(""),Ai=`${Je}L${Vn(ht).toFixed(1)},${(Ce-An).toFixed(1)}L${Vn(0).toFixed(1)},${(Ce-An).toFixed(1)}Z`,tn=bt<0?`<line x1="${Se}" x2="${on-Ti}" y1="${Be(0).toFixed(1)}" y2="${Be(0).toFixed(1)}" stroke="#2f6fd0" stroke-dasharray="3 2" stroke-width="0.8"/>`:"",Ri=Ne=>`${Math.round(Ne).toLocaleString()}`;A.innerHTML=`<div class="prof"><div class="ph"><span>\u5730\u5F62\u5256\u9762\uFF1A\u6211\u7684\u4F4D\u7F6E \u2192 ${de.name}</span><button class="px" title="\u5173\u95ED\u5256\u9762">\xD7</button></div>
      <svg viewBox="0 0 ${on} ${Ce}" preserveAspectRatio="none"><defs><linearGradient id="pg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c8743a" stop-opacity="0.85"/><stop offset="1" stop-color="#f2d29b" stop-opacity="0.55"/></linearGradient></defs>
      <rect x="${Se}" y="${Wi}" width="${on-Se-Ti}" height="${Ce-Wi-An}" fill="rgba(255,255,255,0.6)"/>${tn}
      <path d="${Ai}" fill="url(#pg)"/><path d="${Je}" fill="none" stroke="#b24a00" stroke-width="1.3"/>
      <text x="${Se-3}" y="${Be(Bt)+3}" font-size="9" text-anchor="end" fill="#555">${Ri(Bt)}</text><text x="${Se-3}" y="${Be(Math.max(bt,ee))+3}" font-size="9" text-anchor="end" fill="#555">${Ri(bt)}</text>
      <text x="${Se}" y="${Ce-5}" font-size="9" fill="#555">0</text><text x="${on-Ti}" y="${Ce-5}" font-size="9" text-anchor="end" fill="#555">${ra(ht)}</text>
      <text x="${(Se+on)/2}" y="${Ce-5}" font-size="9" text-anchor="middle" fill="#999">\u6D77\u62D4 m / \u8DDD\u79BB</text>
      <line id="pf-cur" x1="0" x2="0" y1="${Wi}" y2="${Ce-An}" stroke="#d0231a" stroke-width="1" visibility="hidden"/><circle id="pf-dot" r="2.6" fill="#d0231a" visibility="hidden"/></svg>
      <div class="pv" id="pf-v">\u6700\u9AD8 ${Ri(le.e)} m\uFF08\u8DDD\u8D77\u70B9 ${ra(le.d)}\uFF09\xB7 \u6700\u4F4E ${Ri(bt)} m \xB7 \u7D2F\u8BA1\u722C\u5347\u7EA6 ${Ri(Gt)} m</div>
      <div class="lt">\u76F4\u7EBF\u8DDD\u79BB ${ra(ht)} \xB7 \u9AD8\u7A0B\uFF1A${ot}</div></div>`,A.querySelector(".px").onclick=Ne=>{Ne.stopPropagation(),be()};let ti=A.querySelector("svg"),xn=A.querySelector("#pf-cur"),fi=A.querySelector("#pf-dot"),Xi=A.querySelector("#pf-v"),xo=Xi.textContent,ha=Ne=>{let ei=ti.getBoundingClientRect(),Kc=(Ne.clientX-ei.left)/ei.width*on,jc=hn.clamp((Kc-Se)/(on-Se-Ti),0,1)*ht,Ci=mt[Math.round(jc/Math.max(ht,1e-6)*ct)];xn.setAttribute("x1",Vn(Ci.d)),xn.setAttribute("x2",Vn(Ci.d)),xn.setAttribute("visibility","visible"),fi.setAttribute("cx",Vn(Ci.d)),fi.setAttribute("cy",Be(Ci.e)),fi.setAttribute("visibility","visible"),Xi.textContent=`\u8DDD\u8D77\u70B9 ${ra(Ci.d)} \xB7 \u6D77\u62D4 ${Ri(Ci.e)} m`,ft.uProfP.value.copy(Ci.P),ft.uProfPOn.value=1},Vm=()=>{xn.setAttribute("visibility","hidden"),fi.setAttribute("visibility","hidden"),Xi.textContent=xo,ft.uProfPOn.value=0};ti.addEventListener("pointermove",ha),ti.addEventListener("pointerdown",ha),ti.addEventListener("pointerleave",Vm),window.__profile={name:de.name,D:ht,mx:Bt,mn:bt,src:ot,n:mt.length}}function At(){D=null,Hn.visible=!1,ft.uPinOn.value=0;try{localStorage.removeItem(oa)}catch{}Lt("b-fly").disabled=!0,Lt("b-clear").style.display="none",Lt("loc-card").classList.remove("on"),Hs("\u5C1A\u672A\u8BBE\u7F6E \xB7 \u53EF\u81EA\u52A8\u5B9A\u4F4D\u3001\u641C\u7D22\u57CE\u5E02\u6216\u5728\u5730\u7403\u4E0A\u70B9\u9009"),Lt("prompt").classList.add("on")}let fn=Math.tan(ae);function me(A,k){let J=wi(A,k,new V),ut=Math.cos(k*Ge),ht=Math.sin(k*Ge)*fn;ht=hn.clamp(ht,-ut*.985,ut*.985);let ct=Math.sqrt(Math.max(0,ut*ut-ht*ht)),mt=Math.atan2(ht,ct)-Math.atan2(J.x,J.z),ot=ht*Math.sin(ae)+J.y*Math.cos(ae);return{spin:mt,pitch:Math.atan2(ot,ct*1+1e-9)}}let Un=1.36;function Tn(A){if(!D)return;ce.autoRotate=!1,Lt("t-rotate").checked=!1;let k=me(D.lon,D.lat),J=k.spin-W.spin;J=Math.atan2(Math.sin(J),Math.cos(J));let ut={spin:W.spin+J,pitch:k.pitch,dist:Un};if(A){W.fly=null,W.spin=ut.spin,W.spinVel=0,W.pitch=W.pitchT=ut.pitch,W.dist=W.distT=ut.dist,hi();return}let ht=Math.hypot(J,k.pitch-W.pitch);W.fly={t0:performance.now(),dur:1400+900*Math.min(1,ht/2),from:{spin:W.spin,pitch:W.pitch,dist:W.dist},to:ut,bump:Math.min(1.6,ht*.9)*(W.dist<3?1:.3)},W.spinVel=0}function hi(){W.lastInput=performance.now(),Lt("loc-card").classList.add("on"),We=null,D&&jt(D.lon,D.lat).catch(A=>{console.warn("local terrain",A),H.state="fail",H.msg="\u5904\u7406\u5931\u8D25",yt()})}function fs(A,k){let J=Dt(A,k);if(J){for(let ut=0;ut<2;ut++){let ht=us(bi(J[0],J[1])),ct=Dt(A,k,ht);ct&&(J=ct)}we(!1),ci({lon:J[0],lat:J[1],method:"click"},{fly:!1}),Lt("loc-card").classList.add("on"),W.dist<2.4&&jt(J[0],J[1]).catch(ut=>console.warn("local terrain",ut))}}function we(A){Z=A,Lt("b-pick").classList.toggle("on",A),n.style.cursor=A?"crosshair":"",Lt("pick-hint").classList.toggle("on",A)}let Oe=!1;async function Qn(A){if(Oe)return;Oe=!0,Lt("b-locate").disabled=!0,Hs('<span class="spin"></span>\u6B63\u5728\u901A\u8FC7\u6D4F\u89C8\u5668\u5B9A\u4F4D\u2026',"busy");let k=null,J=null,ut=()=>(k||(k=Nm(d),k.then(ot=>{J=ot},()=>{})),k),ht=Lm(15e3),ct=await Promise.race([ht.then(ot=>({gps:ot}),ot=>({gpsErr:ot})),new Promise(ot=>setTimeout(()=>ot({slow:!0}),2500))]),mt="";if(ct.gps)ci({...ct.gps,method:"gps"});else{mt=ct.gpsErr?ct.gpsErr.message:"\u6D4F\u89C8\u5668\u5B9A\u4F4D\u672A\u54CD\u5E94",Hs(`<span class="spin"></span>${mt}\uFF0C\u6539\u7528\u7F51\u7EDC IP \u5B9A\u4F4D\u2026`,"busy");try{let ot=await ut(),at=d.describe(ot.lon,ot.lat);ci({lon:ot.lon,lat:ot.lat,name:at.name,ctx:at.ctx,method:"ip",src:ot.src}),Vs(`\u5DF2\u901A\u8FC7\u7F51\u7EDC IP \u5B9A\u4F4D\u5230 <b>${at.name}</b>\uFF08\u57CE\u5E02\u7EA7\uFF0C\u8FD1\u4F3C\uFF09\u3002\u4E0D\u51C6\uFF1F\u53EF\u641C\u7D22\u57CE\u5E02\u6216\u5728\u5730\u7403\u4E0A\u70B9\u9009\u4FEE\u6B63\u3002`)}catch(ot){Hs(`\u81EA\u52A8\u5B9A\u4F4D\u5931\u8D25\uFF1A${mt}\uFF1B${ot.message}\u3002<br>\u8BF7\u5728\u4E0B\u65B9\u641C\u7D22\u57CE\u5E02\uFF0C\u6216\u70B9\u201C\u5728\u5730\u7403\u4E0A\u70B9\u9009\u201D\u3002`,"err"),Lt("prompt").classList.add("on")}ct.slow&&ht.then(ot=>{(!D||D.method==="ip")&&(ci({...ot,method:"gps"}),Vs("\u5DF2\u83B7\u5F97\u6D4F\u89C8\u5668\u7CBE\u786E\u5B9A\u4F4D\uFF0C\u4F4D\u7F6E\u5DF2\u66F4\u65B0\u3002"))},()=>{})}Oe=!1,Lt("b-locate").disabled=!1}function Le(){return`${location.origin}${location.pathname}#loc=${D.lat.toFixed(4)},${D.lon.toFixed(4)},${encodeURIComponent(D.name)}`}async function Ei(){if(!D)return;let A=Le();try{if(navigator.share&&Dn.mobile){await navigator.share({title:`\u6D6E\u96D5\u5730\u7403\u4EEA \xB7 ${D.name}`,text:`\u770B\u770B${D.name}\u5468\u8FB9\u7684\u5C71\u5DDD\u5730\u5F62`,url:A});return}}catch(k){if(k&&k.name==="AbortError")return}try{await navigator.clipboard.writeText(A),Vs(`\u5206\u4EAB\u94FE\u63A5\u5DF2\u590D\u5236\uFF1A<br><b>${A.replace(/</g,"&lt;")}</b>`)}catch{prompt("\u590D\u5236\u8FD9\u4E2A\u94FE\u63A5\u5206\u4EAB\u7ED9\u670B\u53CB\uFF1A",A)}}let Vi=0;function Vs(A){let k=Lt("toast");k.innerHTML=A,k.classList.add("on"),clearTimeout(Vi),Vi=setTimeout(()=>k.classList.remove("on"),6500)}let Gs=Lt("loc-q"),Yc=Lt("loc-sug"),ui=[],ds=-1,ur=()=>{Yc.innerHTML=ui.map((A,k)=>`<div class="s${k===ds?" sel":""}" data-i="${k}"><b>${A.name}</b><span>${A.ctx||""}</span></div>`).join(""),Yc.classList.toggle("on",ui.length>0)},bf=A=>{ui=[],ur(),Gs.value="",Gs.blur(),A.coord?ci({lon:A.lon,lat:A.lat,method:"coord"}):ci({lon:A.lon,lat:A.lat,name:A.name,ctx:A.ctx,method:"search"})};Gs.addEventListener("input",()=>{ui=d.search(Gs.value,8),ds=ui.length?0:-1,ur()}),Gs.addEventListener("keydown",A=>{A.key==="ArrowDown"?(ds=Math.min(ui.length-1,ds+1),ur(),A.preventDefault()):A.key==="ArrowUp"?(ds=Math.max(0,ds-1),ur(),A.preventDefault()):A.key==="Enter"&&ui[ds]?bf(ui[ds]):A.key==="Escape"&&(ui=[],ur())}),Yc.addEventListener("pointerdown",A=>{let k=A.target.closest(".s");k&&(A.preventDefault(),bf(ui[+k.dataset.i]))}),Gs.addEventListener("blur",()=>setTimeout(()=>{ui=[],ur()},150)),Lt("b-locate").addEventListener("click",()=>Qn("manual")),Lt("b-pick").addEventListener("click",()=>we(!Z)),Lt("b-fly").addEventListener("click",()=>Tn(!1)),Lt("b-clear").addEventListener("click",At),Lt("lc-close").addEventListener("click",()=>Lt("loc-card").classList.remove("on")),Lt("prompt").addEventListener("click",()=>{Lt("prompt").classList.remove("on"),Gs.focus()}),li("t-rings",A=>{ft.uRingsOn.value=A?1:0}),li("t-local",A=>{ce.local=A,H.want=A&&H.state==="ok"?1:0,A&&D&&H.state!=="ok"&&jt(D.lon,D.lat).catch(()=>{}),D&&F()});let $c=Lt("pin-label"),wf=[100,250,500,1e3].map(A=>{let k=document.createElement("div");return k.className="ring-lbl",k.textContent=`${A} km`,document.body.appendChild(k),{r:A,el:k}}),Ws=new V,Ef=new V,Bm=(A,k,J,ut)=>{let ht=ut/6371,ct=k*Ge,mt=J*Ge,ot=Math.asin(Math.sin(ct)*Math.cos(ht)+Math.cos(ct)*Math.sin(ht)*Math.cos(mt));return[(A*Ge+Math.atan2(Math.sin(mt)*Math.sin(ht)*Math.cos(ct),Math.cos(ht)-Math.sin(ct)*Math.sin(ot)))/Ge,ot/Ge]},Zc=(A,k)=>{Ws.copy(A).applyMatrix4(Ue.matrixWorld);let J=Ws.dot(Ef.copy(i.position).sub(Ws))>0;return Ws.project(i),k.x=(Ws.x*.5+.5)*window.innerWidth,k.y=(-Ws.y*.5+.5)*window.innerHeight,k.vis=J&&Ws.z<1,k},Gi={};function zm(A){if(!D){$c.classList.remove("on"),wf.forEach(bt=>bt.el.classList.remove("on"));return}let k=us(jn.hm);Hn.position.copy(jn.dir).multiplyScalar(k-.0015),Hn.quaternion.setFromUnitVectors(new V(0,1,0),jn.dir),Hn.updateMatrixWorld(!0);let ut=Hn.getWorldPosition(new V).distanceTo(i.position),ht=Math.min(.021*ut,.085);Hn.scale.setScalar(ht);let ct=window.innerHeight;ft.uKmPx.value=2*ut*Math.tan(i.fov*Ge/2)/ct*6371,ft.uPinT.value=A/1e3,Zc(Ef.copy(jn.dir).multiplyScalar(k),Gi);let mt=Gi.vis,ot=jn.dir.clone().multiplyScalar(k+ht*1.45);Zc(ot,Gi),$c.classList.toggle("on",mt),$c.style.transform=`translate(${Gi.x.toFixed(1)}px, ${Gi.y.toFixed(1)}px)`;let at=ft.uKmPx.value;for(let bt of wf){let Bt=bt.r/at;if(!(ft.uRingsOn.value>.5&&Bt>90&&Bt<1500)){bt.el.classList.remove("on");continue}let[Gt,ee]=Bm(D.lon,D.lat,0,bt.r),Ze=wi(Gt,ee,new V);Ze.multiplyScalar(us(bi(Gt,ee))),Zc(Ze,Gi),bt.el.classList.toggle("on",Gi.vis),bt.el.style.transform=`translate(${Gi.x.toFixed(1)}px, ${Gi.y.toFixed(1)}px)`}}let go=Lt("panel");Lt("sheet-handle").addEventListener("click",()=>go.classList.toggle("open")),Lt("m-fly").addEventListener("click",A=>{A.stopPropagation(),D?Tn(!1):(go.classList.add("open"),Lt("loc-q").focus())}),Lt("m-loc").addEventListener("click",A=>{A.stopPropagation(),go.classList.add("open")}),n.addEventListener("pointerdown",()=>{(Dn.mobile||window.innerWidth<=700)&&go.classList.remove("open")});let Tf=()=>{Lt("m-loc").textContent=D?`\u6211\u7684\u4F4D\u7F6E\uFF1A${D.name}`:"\u8BBE\u7F6E\u6211\u7684\u4F4D\u7F6E",requestAnimationFrame(()=>{})};setInterval(Tf,1e3),Tf();function Af(){let A=window.innerWidth,k=window.innerHeight;t.setSize(A,k,!1),i.aspect=A/k,i.updateProjectionMatrix();let J=st();Math.abs(W.distT-j)<.05&&!W.fly&&(W.distT=J),j=J}window.addEventListener("resize",Af),Af(),window.globe={lookAt(A,k=15,J){W.spin=zt(A),W.spinVel=0,W.pitchT=W.pitch=k*Ge,J&&(W.dist=W.distT=J),W.lastInput=performance.now()},raw(A,k,J){W.spin=A,W.spinVel=0,W.pitch=W.pitchT=k,J&&(W.dist=W.distT=J),W.lastInput=performance.now()},setMode:ls,setExag:hr,setAutoRotate(A){Lt("t-rotate").checked=A,ce.autoRotate=A},setLabels(A){ce.labels!==A&&(Lt("t-labels").checked=A,ce.labels=A,O(),L.needsUpdate=!0,We=null)},renderNow(){Xs(performance.now(),!0),zs(!0),Xs(performance.now(),!0)},renderOnce(A=!0){Jc=!0,Xs(performance.now(),A),Jc=!1,zs(A),Xs(performance.now(),A)},pickAt(A,k){Me(A,k)},freeze(A){t.setAnimationLoop(A?null:()=>Xs(performance.now()))},setLocation:(A,k,J,ut,ht="coord")=>ci({lon:A,lat:k,name:J,ctx:ut,method:ht},{fly:!1}),flyToMe:A=>Tn(A),clearLocation:At,autoLocate:()=>Qn("api"),search:A=>d.search(A),showLocCard:A=>Lt("loc-card").classList.toggle("on",A),setPickMode:we,get myLoc(){return D},elevAt:hs,view:W,uniforms:ft,ready:!1,get LT(){return H},showProfileIdx:A=>Ie(window.__nearby.near[A]),clearProfile:be,loadLocalTerrain:jt,getLayout:S};let Rf=performance.now(),la=0,Jc=!1,ca=new V,km=new V;function Xs(A,k){let J=Math.min(.05,(A-Rf)/1e3);Rf=A;let ut=A-W.lastInput>3e3&&pt.size===0;if(pt.size===0&&(W.spin+=W.spinVel*J,W.spinVel*=Math.exp(-J*2.2),ce.autoRotate&&ut&&(W.spin+=J*.06*Math.min(1,(A-W.lastInput-3e3)/3e3))),W.fly){let at=W.fly,bt=Math.min(1,(A-at.t0)/at.dur),Bt=bt<.5?4*bt*bt*bt:1-Math.pow(-2*bt+2,3)/2;W.spin=at.from.spin+(at.to.spin-at.from.spin)*Bt,W.spinVel=0,W.pitch=W.pitchT=at.from.pitch+(at.to.pitch-at.from.pitch)*Bt,W.dist=W.distT=Math.exp(Math.log(at.from.dist)+(Math.log(at.to.dist)-Math.log(at.from.dist))*Bt)*(1+at.bump*Math.sin(Math.PI*Bt)),W.lastInput=A,bt>=1&&(W.fly=null,hi())}W.pitch+=(W.pitchT-W.pitch)*Math.min(1,J*8),W.dist+=(W.distT-W.dist)*Math.min(1,J*7),k&&(W.pitch=W.pitchT,W.dist=W.distT),Ue.rotation.y=W.spin;let ht=hn.smoothstep(W.dist,2.6,j),ct=tt*(1-hn.smoothstep(W.dist,1.45,2.4));if(ct>1e-4){ca.set(0,Math.sin(W.pitch),Math.cos(W.pitch));let at=W.dist-1;i.position.set(0,Math.sin(W.pitch-ct)*at,Math.cos(W.pitch-ct)*at).add(ca)}else{let at=window.innerWidth<window.innerHeight*.8;ca.set(0,(at?-.62:-.36)*ht,0),i.position.set(0,Math.sin(W.pitch)*W.dist,Math.cos(W.pitch)*W.dist).add(ca)}i.lookAt(ca);let mt=i.quaternion;s.position.copy(km.set(-3.6,3.4,3).applyQuaternion(mt)),s.target.position.set(0,-.4,0),r.position.set(3.5,-.2,2.2).applyQuaternion(mt),a.position.set(1.8,2.6,-3.5).applyQuaternion(mt),e.updateMatrixWorld(),ft.uKeyDir.value.copy(s.position).sub(s.target.position).normalize().transformDirection(i.matrixWorldInverse);let ot=`${W.spin.toFixed(3)}|${W.pitch.toFixed(3)}|${W.dist.toFixed(3)}`;ot!==mo?(mo=ot,En=A):En&&A-En>220&&(En=0,zs(!1));{let at=W.dist>1.9;z[0].visible!==at&&z.forEach(bt=>{bt.visible=at})}{let at=window.innerWidth,bt=window.innerHeight,Bt=at<700&&Lt("loc-card").classList.contains("on")&&W.dist<2.4?bt*.16:0;la+=(Bt-la)*Math.min(1,J*6),k&&(la=Bt),la>.5?i.setViewOffset(at,bt,0,-la,at,bt):i.view&&i.view.enabled&&i.clearViewOffset()}{let at=H.want&&ce.local?1:0,bt=ft.uLOn;bt.value+=hn.clamp(at-bt.value,-J/.5,J/.5),k&&(bt.value=at)}{let at=ft.uWinOn,bt=ft.uWinOn2,Bt=k?1:J/.3;xt.want>at.value?at.value=Math.min(1,at.value+Bt):xt.want<at.value&&(at.value=Math.max(0,at.value-Bt)),(at.value>=1||xt.want===0)&&(bt.value=Math.max(0,bt.value-Bt))}zm(A),Jc||t.render(e,i)}if(t.setAnimationLoop(()=>Xs(performance.now())),Xs(performance.now(),!0),window.__dbg={fillC:_,overC:U,iceC:I,legend:A=>mf(A).toDataURL()},!/debug/.test(location.hash))for(let A of[T,N])t.initTexture(A),A.image&&A.image.width>1&&(A.image.width=1,A.image.height=1);Sf(1),Lt("loading").classList.add("gone"),window.globe.ready=!0,setTimeout(G,1500);async function Hm(){let A=Dn.height;if(!A){window.__hq="skipped";return}window.__MANIFEST[A]||(A="d-h8k");let k=Lt("hq"),J=window.__MANIFEST,ut=A==="d-h8k",ht=J[A].size+(ut?J["d-hesc"].size:0),ct=0,mt=ut?"8K":"4K";k.classList.add("on"),k.textContent=`\u6B63\u5728\u52A0\u8F7D${mt}\u9AD8\u7CBE\u5EA6\u5730\u5F62 0%`;let ot=at=>{ct+=at,k.textContent=`\u6B63\u5728\u52A0\u8F7D${mt}\u9AD8\u7CBE\u5EA6\u5730\u5F62 ${Math.round(ct/ht*100)}%`};try{let[at,bt]=await Promise.all([Vc(A,ot),ut?Vc("d-hesc",ot):null]);k.textContent=`\u6B63\u5728\u89E3\u7801${mt}\u5730\u5F62\u2026`;let Bt=ut?8192:4096,le=Bt/2,Gt=await Um({kind:ut?"webp":"i16",W:Bt,H:le,bytes:at,esc:bt,maxTex:Math.min(8192,o)});ut&&(window.__hcheck=Gt.sum);let ee=Fm(Gt.mips),Ze=ft.uHeight.value;ft.uHeight.value=ee.tex,ft.uTexel.value.set(1/ee.w,1/ee.h),ft.uHSize.value.set(ee.w,ee.h),ft.uVLod.value=Math.max(0,2.6-Math.log2(8192/ee.w)),Ze.dispose(),as=Gt.W,fo=Gt.H,f=Gt.q,window.__hres=ee.w,D&&(jn.hm=bi(D.lon,D.lat),F()),k.textContent=`\u5DF2\u5347\u7EA7\u4E3A ${mt} \u9AD8\u7CBE\u5EA6\u5730\u5F62`,setTimeout(()=>k.classList.remove("on"),2500)}catch(at){console.warn("height upgrade failed",at),k.textContent="\u9AD8\u7CBE\u5EA6\u5730\u5F62\u52A0\u8F7D\u5931\u8D25\uFF0C\u7EE7\u7EED\u4F7F\u7528\u6807\u51C6\u7CBE\u5EA6",setTimeout(()=>k.classList.remove("on"),4e3)}window.__hq="done"}setTimeout(Hm,300);{let A=null;try{A=JSON.parse(localStorage.getItem(oa)||"null")}catch{}let k=decodeURIComponent(location.hash).match(/loc=(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)(?:,([^&]*))?/);if(k&&Math.abs(+k[1])<=90&&Math.abs(+k[2])<=180){let J=d.describe(+k[2],+k[1]);ci({lon:+k[2],lat:+k[1],name:(k[3]||"").slice(0,40)||J.name,ctx:k[3]?"":J.ctx,method:"share"},{save:!1,fly:!/nofly/.test(location.hash)}),Vs("\u6B63\u5728\u67E5\u770B\u5206\u4EAB\u7684\u4F4D\u7F6E\u3002\u70B9\u201C\u91CD\u65B0\u5B9A\u4F4D\u201D\u53EF\u5207\u6362\u5230\u4F60\u81EA\u5DF1\u7684\u4F4D\u7F6E\u3002")}else A&&isFinite(A.lon)&&isFinite(A.lat)?(D=A,M({fly:!/nofly/.test(location.hash)})):/noauto/.test(location.hash)?At():(Lt("prompt").classList.add("on"),Qn("startup"))}}VM().catch(n=>{console.error(n),os("\u52A0\u8F7D\u5931\u8D25\uFF1A"+n.message)});})();
