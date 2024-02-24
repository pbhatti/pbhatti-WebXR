import{ARButton as Hs}from"https://unpkg.com/three@0.126.0/examples/jsm/webxr/ARButton.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}})();(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();/**
* @license
* Copyright 2010-2023 Three.js Authors
* SPDX-License-Identifier: MIT
*/const Jn="158",Li={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Lo=0,ma=1,Co=2,Vs=1,Po=2,qt=3,ui=0,_t=1,Yt=2,oi=0,Ki=1,ga=2,_a=3,va=4,Uo=5,xi=100,Do=101,No=102,xa=103,Ma=104,Io=200,Oo=201,Fo=202,Bo=203,Vn=204,kn=205,zo=206,Go=207,Ho=208,Vo=209,ko=210,Wo=211,Xo=212,jo=213,qo=214,Yo=0,Ko=1,Zo=2,jr=3,Jo=4,$o=5,Qo=6,el=7,ks=0,tl=1,il=2,li=0,rl=1,nl=2,al=3,sl=4,ol=5,Ws=300,Ji=301,$i=302,Wn=303,Xn=304,tn=306,jn=1e3,Nt=1001,qn=1002,gt=1003,Ea=1004,dn=1005,wt=1006,ll=1007,pr=1008,ci=1009,cl=1010,ul=1011,$n=1012,Xs=1013,ai=1014,si=1015,fr=1016,js=1017,qs=1018,Ei=1020,hl=1021,It=1023,dl=1024,pl=1025,Si=1026,Qi=1027,fl=1028,Ys=1029,ml=1030,Ks=1031,Zs=1033,pn=33776,fn=33777,mn=33778,gn=33779,Sa=35840,ya=35841,Ta=35842,ba=35843,gl=36196,Aa=37492,wa=37496,Ra=37808,La=37809,Ca=37810,Pa=37811,Ua=37812,Da=37813,Na=37814,Ia=37815,Oa=37816,Fa=37817,Ba=37818,za=37819,Ga=37820,Ha=37821,_n=36492,Va=36494,ka=36495,_l=36283,Wa=36284,Xa=36285,ja=36286,Js=3e3,yi=3001,vl=3200,xl=3201,$s=0,Ml=1,Lt="",Qe="srgb",Zt="srgb-linear",Qn="display-p3",rn="display-p3-linear",qr="linear",qe="srgb",Yr="rec709",Kr="p3",Pi=7680,qa=519,El=512,Sl=513,yl=514,Tl=515,bl=516,Al=517,wl=518,Rl=519,Ya=35044,Ka="300 es",Yn=1035,Kt=2e3,Zr=2001;class Ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let n=0,a=i.length;n<a;n++)i[n].call(this,e);e.target=null}}}const ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Za=1234567;const ur=Math.PI/180,mr=180/Math.PI;function tr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ct[r&255]+ct[r>>8&255]+ct[r>>16&255]+ct[r>>24&255]+"-"+ct[e&255]+ct[e>>8&255]+"-"+ct[e>>16&15|64]+ct[e>>24&255]+"-"+ct[t&63|128]+ct[t>>8&255]+"-"+ct[t>>16&255]+ct[t>>24&255]+ct[i&255]+ct[i>>8&255]+ct[i>>16&255]+ct[i>>24&255]).toLowerCase()}function ht(r,e,t){return Math.max(e,Math.min(t,r))}function ea(r,e){return(r%e+e)%e}function Ll(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function Cl(r,e,t){return r!==e?(t-r)/(e-r):0}function hr(r,e,t){return(1-t)*r+t*e}function Pl(r,e,t,i){return hr(r,e,1-Math.exp(-t*i))}function Ul(r,e=1){return e-Math.abs(ea(r,e*2)-e)}function Dl(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Nl(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Il(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Ol(r,e){return r+Math.random()*(e-r)}function Fl(r){return r*(.5-Math.random())}function Bl(r){r!==void 0&&(Za=r);let e=Za+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zl(r){return r*ur}function Gl(r){return r*mr}function Kn(r){return(r&r-1)===0&&r!==0}function Hl(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Jr(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Vl(r,e,t,i,n){const a=Math.cos,o=Math.sin,s=a(t/2),l=o(t/2),c=a((e+i)/2),u=o((e+i)/2),p=a((e-i)/2),d=o((e-i)/2),m=a((i-e)/2),g=o((i-e)/2);switch(n){case"XYX":r.set(s*u,l*p,l*d,s*c);break;case"YZY":r.set(l*d,s*u,l*p,s*c);break;case"ZXZ":r.set(l*p,l*d,s*u,s*c);break;case"XZX":r.set(s*u,l*g,l*m,s*c);break;case"YXY":r.set(l*m,s*u,l*g,s*c);break;case"ZYZ":r.set(l*g,l*m,s*u,s*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function qi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ft(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const kl={DEG2RAD:ur,RAD2DEG:mr,generateUUID:tr,clamp:ht,euclideanModulo:ea,mapLinear:Ll,inverseLerp:Cl,lerp:hr,damp:Pl,pingpong:Ul,smoothstep:Dl,smootherstep:Nl,randInt:Il,randFloat:Ol,randFloatSpread:Fl,seededRandom:Bl,degToRad:zl,radToDeg:Gl,isPowerOfTwo:Kn,ceilPowerOfTwo:Hl,floorPowerOfTwo:Jr,setQuaternionFromProperEuler:Vl,normalize:ft,denormalize:qi};class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*n+e.x,this.y=a*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,t,i,n,a,o,s,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,a,o,s,l,c)}set(e,t,i,n,a,o,s,l,c){const u=this.elements;return u[0]=e,u[1]=n,u[2]=s,u[3]=t,u[4]=a,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,a=this.elements,o=i[0],s=i[3],l=i[6],c=i[1],u=i[4],p=i[7],d=i[2],m=i[5],g=i[8],v=n[0],f=n[3],h=n[6],w=n[1],E=n[4],R=n[7],b=n[2],C=n[5],T=n[8];return a[0]=o*v+s*w+l*b,a[3]=o*f+s*E+l*C,a[6]=o*h+s*R+l*T,a[1]=c*v+u*w+p*b,a[4]=c*f+u*E+p*C,a[7]=c*h+u*R+p*T,a[2]=d*v+m*w+g*b,a[5]=d*f+m*E+g*C,a[8]=d*h+m*R+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*s*c-i*a*u+i*s*l+n*a*c-n*o*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],p=u*o-s*c,d=s*l-u*a,m=c*a-o*l,g=t*p+i*d+n*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=p*v,e[1]=(n*c-u*i)*v,e[2]=(s*i-n*o)*v,e[3]=d*v,e[4]=(u*t-n*l)*v,e[5]=(n*a-s*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,a,o,s){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*o+c*s)+o+e,-n*c,n*l,-n*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(vn.makeScale(e,t)),this}rotate(e){return this.premultiply(vn.makeRotation(-e)),this}translate(e,t){return this.premultiply(vn.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vn=new Oe;function Qs(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function gr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Wl(){const r=gr("canvas");return r.style.display="block",r}const Ja={};function dr(r){r in Ja||(Ja[r]=!0,console.warn(r))}const $a=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Qa=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Er={[Zt]:{transfer:qr,primaries:Yr,toReference:r=>r,fromReference:r=>r},[Qe]:{transfer:qe,primaries:Yr,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[rn]:{transfer:qr,primaries:Kr,toReference:r=>r.applyMatrix3(Qa),fromReference:r=>r.applyMatrix3($a)},[Qn]:{transfer:qe,primaries:Kr,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Qa),fromReference:r=>r.applyMatrix3($a).convertLinearToSRGB()}},Xl=new Set([Zt,rn]),Ve={enabled:!0,_workingColorSpace:Zt,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Xl.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const i=Er[e].toReference,n=Er[t].fromReference;return n(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Er[r].primaries},getTransfer:function(r){return r===Lt?qr:Er[r].transfer}};function Zi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function xn(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ui;class eo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ui===void 0&&(Ui=gr("canvas")),Ui.width=e.width,Ui.height=e.height;const i=Ui.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ui}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=gr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),a=n.data;for(let o=0;o<a.length;o++)a[o]=Zi(a[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Zi(t[i]/255)*255):t[i]=Zi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jl=0;class to{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jl++}),this.uuid=tr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let o=0,s=n.length;o<s;o++)n[o].isDataTexture?a.push(Mn(n[o].image)):a.push(Mn(n[o]))}else a=Mn(n);i.url=a}return t||(e.images[this.uuid]=i),i}}function Mn(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?eo.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ql=0;class vt extends Ri{constructor(e=vt.DEFAULT_IMAGE,t=vt.DEFAULT_MAPPING,i=Nt,n=Nt,a=wt,o=pr,s=It,l=ci,c=vt.DEFAULT_ANISOTROPY,u=Lt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ql++}),this.uuid=tr(),this.name="",this.source=new to(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===yi?Qe:Lt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ws)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jn:e.x=e.x-Math.floor(e.x);break;case Nt:e.x=e.x<0?0:1;break;case qn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jn:e.y=e.y-Math.floor(e.y);break;case Nt:e.y=e.y<0?0:1;break;case qn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Qe?yi:Js}set encoding(e){dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===yi?Qe:Lt}}vt.DEFAULT_IMAGE=null;vt.DEFAULT_MAPPING=Ws;vt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,i=0,n=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*a,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*a,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*a,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,a;const o=e.elements,s=o[0],l=o[4],c=o[8],u=o[1],p=o[5],d=o[9],m=o[2],g=o[6],v=o[10];if(Math.abs(l-u)<.01&&Math.abs(c-m)<.01&&Math.abs(d-g)<.01){if(Math.abs(l+u)<.1&&Math.abs(c+m)<.1&&Math.abs(d+g)<.1&&Math.abs(s+p+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const h=(s+1)/2,w=(p+1)/2,E=(v+1)/2,R=(l+u)/4,b=(c+m)/4,C=(d+g)/4;return h>w&&h>E?h<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(h),n=R/i,a=b/i):w>E?w<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(w),i=R/n,a=C/n):E<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(E),i=b/a,n=C/a),this.set(i,n,a,t),this}let f=Math.sqrt((g-d)*(g-d)+(c-m)*(c-m)+(u-l)*(u-l));return Math.abs(f)<.001&&(f=1),this.x=(g-d)/f,this.y=(c-m)/f,this.z=(u-l)/f,this.w=Math.acos((s+p+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yl extends Ri{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const n={width:e,height:t,depth:1};i.encoding!==void 0&&(dr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===yi?Qe:Lt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new vt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new to(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends Yl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class io extends vt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=gt,this.minFilter=gt,this.wrapR=Nt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kl extends vt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=gt,this.minFilter=gt,this.wrapR=Nt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bi{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,a,o,s){let l=i[n+0],c=i[n+1],u=i[n+2],p=i[n+3];const d=a[o+0],m=a[o+1],g=a[o+2],v=a[o+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=p;return}if(s===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(p!==v||l!==d||c!==m||u!==g){let f=1-s;const h=l*d+c*m+u*g+p*v,w=h>=0?1:-1,E=1-h*h;if(E>Number.EPSILON){const b=Math.sqrt(E),C=Math.atan2(b,h*w);f=Math.sin(f*C)/b,s=Math.sin(s*C)/b}const R=s*w;if(l=l*f+d*R,c=c*f+m*R,u=u*f+g*R,p=p*f+v*R,f===1-s){const b=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=b,c*=b,u*=b,p*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,n,a,o){const s=i[n],l=i[n+1],c=i[n+2],u=i[n+3],p=a[o],d=a[o+1],m=a[o+2],g=a[o+3];return e[t]=s*g+u*p+l*m-c*d,e[t+1]=l*g+u*d+c*p-s*m,e[t+2]=c*g+u*m+s*d-l*p,e[t+3]=u*g-s*p-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,n=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(i/2),u=s(n/2),p=s(a/2),d=l(i/2),m=l(n/2),g=l(a/2);switch(o){case"XYZ":this._x=d*u*p+c*m*g,this._y=c*m*p-d*u*g,this._z=c*u*g+d*m*p,this._w=c*u*p-d*m*g;break;case"YXZ":this._x=d*u*p+c*m*g,this._y=c*m*p-d*u*g,this._z=c*u*g-d*m*p,this._w=c*u*p+d*m*g;break;case"ZXY":this._x=d*u*p-c*m*g,this._y=c*m*p+d*u*g,this._z=c*u*g+d*m*p,this._w=c*u*p-d*m*g;break;case"ZYX":this._x=d*u*p-c*m*g,this._y=c*m*p+d*u*g,this._z=c*u*g-d*m*p,this._w=c*u*p+d*m*g;break;case"YZX":this._x=d*u*p+c*m*g,this._y=c*m*p+d*u*g,this._z=c*u*g-d*m*p,this._w=c*u*p-d*m*g;break;case"XZY":this._x=d*u*p-c*m*g,this._y=c*m*p-d*u*g,this._z=c*u*g+d*m*p,this._w=c*u*p+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],a=t[8],o=t[1],s=t[5],l=t[9],c=t[2],u=t[6],p=t[10],d=i+s+p;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(a-c)*m,this._z=(o-n)*m}else if(i>s&&i>p){const m=2*Math.sqrt(1+i-s-p);this._w=(u-l)/m,this._x=.25*m,this._y=(n+o)/m,this._z=(a+c)/m}else if(s>p){const m=2*Math.sqrt(1+s-i-p);this._w=(a-c)/m,this._x=(n+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+p-i-s);this._w=(o-n)/m,this._x=(a+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,a=e._z,o=e._w,s=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*s+n*c-a*l,this._y=n*u+o*l+a*s-i*c,this._z=a*u+o*c+i*l-n*s,this._w=o*u-i*s-n*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,a=this._z,o=this._w;let s=o*e._w+i*e._x+n*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=n,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*n+t*this._y,this._z=m*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),p=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*p+this._w*d,this._x=i*p+this._x*d,this._y=n*p+this._y*d,this._z=a*p+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(a),i*Math.cos(a),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(es.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(es.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*n,this.y=a[1]*t+a[4]*i+a[7]*n,this.z=a[2]*t+a[5]*i+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,a=e.elements,o=1/(a[3]*t+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*n+a[12])*o,this.y=(a[1]*t+a[5]*i+a[9]*n+a[13])*o,this.z=(a[2]*t+a[6]*i+a[10]*n+a[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=2*(o*n-s*i),u=2*(s*t-a*n),p=2*(a*i-o*t);return this.x=t+l*c+o*p-s*u,this.y=i+l*u+s*c-a*p,this.z=n+l*p+a*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n,this.y=a[1]*t+a[5]*i+a[9]*n,this.z=a[2]*t+a[6]*i+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,a=e.z,o=t.x,s=t.y,l=t.z;return this.x=n*l-a*s,this.y=a*o-i*l,this.z=i*s-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return En.copy(this).projectOnVector(e),this.sub(En)}reflect(e){return this.sub(En.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const En=new N,es=new bi;class _r{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ct.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ct.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ct.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,Ct):Ct.fromBufferAttribute(a,o),Ct.applyMatrix4(e.matrixWorld),this.expandByPoint(Ct);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Sr.copy(i.boundingBox)),Sr.applyMatrix4(e.matrixWorld),this.union(Sr)}const n=e.children;for(let a=0,o=n.length;a<o;a++)this.expandByObject(n[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ct),Ct.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ar),yr.subVectors(this.max,ar),Di.subVectors(e.a,ar),Ni.subVectors(e.b,ar),Ii.subVectors(e.c,ar),Qt.subVectors(Ni,Di),ei.subVectors(Ii,Ni),fi.subVectors(Di,Ii);let t=[0,-Qt.z,Qt.y,0,-ei.z,ei.y,0,-fi.z,fi.y,Qt.z,0,-Qt.x,ei.z,0,-ei.x,fi.z,0,-fi.x,-Qt.y,Qt.x,0,-ei.y,ei.x,0,-fi.y,fi.x,0];return!Sn(t,Di,Ni,Ii,yr)||(t=[1,0,0,0,1,0,0,0,1],!Sn(t,Di,Ni,Ii,yr))?!1:(Tr.crossVectors(Qt,ei),t=[Tr.x,Tr.y,Tr.z],Sn(t,Di,Ni,Ii,yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ct).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ct).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vt=[new N,new N,new N,new N,new N,new N,new N,new N],Ct=new N,Sr=new _r,Di=new N,Ni=new N,Ii=new N,Qt=new N,ei=new N,fi=new N,ar=new N,yr=new N,Tr=new N,mi=new N;function Sn(r,e,t,i,n){for(let a=0,o=r.length-3;a<=o;a+=3){mi.fromArray(r,a);const s=n.x*Math.abs(mi.x)+n.y*Math.abs(mi.y)+n.z*Math.abs(mi.z),l=e.dot(mi),c=t.dot(mi),u=i.dot(mi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const Zl=new _r,sr=new N,yn=new N;class ta{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Zl.setFromPoints(e).getCenter(i);let n=0;for(let a=0,o=e.length;a<o;a++)n=Math.max(n,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sr.subVectors(e,this.center);const t=sr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(sr,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sr.copy(e.center).add(yn)),this.expandByPoint(sr.copy(e.center).sub(yn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kt=new N,Tn=new N,br=new N,ti=new N,bn=new N,Ar=new N,An=new N;class ro{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kt.copy(this.origin).addScaledVector(this.direction,t),kt.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Tn.copy(e).add(t).multiplyScalar(.5),br.copy(t).sub(e).normalize(),ti.copy(this.origin).sub(Tn);const a=e.distanceTo(t)*.5,o=-this.direction.dot(br),s=ti.dot(this.direction),l=-ti.dot(br),c=ti.lengthSq(),u=Math.abs(1-o*o);let p,d,m,g;if(u>0)if(p=o*l-s,d=o*s-l,g=a*u,p>=0)if(d>=-g)if(d<=g){const v=1/u;p*=v,d*=v,m=p*(p+o*d+2*s)+d*(o*p+d+2*l)+c}else d=a,p=Math.max(0,-(o*d+s)),m=-p*p+d*(d+2*l)+c;else d=-a,p=Math.max(0,-(o*d+s)),m=-p*p+d*(d+2*l)+c;else d<=-g?(p=Math.max(0,-(-o*a+s)),d=p>0?-a:Math.min(Math.max(-a,-l),a),m=-p*p+d*(d+2*l)+c):d<=g?(p=0,d=Math.min(Math.max(-a,-l),a),m=d*(d+2*l)+c):(p=Math.max(0,-(o*a+s)),d=p>0?a:Math.min(Math.max(-a,-l),a),m=-p*p+d*(d+2*l)+c);else d=o>0?-a:a,p=Math.max(0,-(o*d+s)),m=-p*p+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),n&&n.copy(Tn).addScaledVector(br,d),m}intersectSphere(e,t){kt.subVectors(e.center,this.origin);const i=kt.dot(this.direction),n=kt.dot(kt)-i*i,a=e.radius*e.radius;if(n>a)return null;const o=Math.sqrt(a-n),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,a,o,s,l;const c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),u>=0?(a=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(a=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||a>n||((a>i||isNaN(i))&&(i=a),(o<n||isNaN(n))&&(n=o),p>=0?(s=(e.min.z-d.z)*p,l=(e.max.z-d.z)*p):(s=(e.max.z-d.z)*p,l=(e.min.z-d.z)*p),i>l||s>n)||((s>i||i!==i)&&(i=s),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,kt)!==null}intersectTriangle(e,t,i,n,a){bn.subVectors(t,e),Ar.subVectors(i,e),An.crossVectors(bn,Ar);let o=this.direction.dot(An),s;if(o>0){if(n)return null;s=1}else if(o<0)s=-1,o=-o;else return null;ti.subVectors(this.origin,e);const l=s*this.direction.dot(Ar.crossVectors(ti,Ar));if(l<0)return null;const c=s*this.direction.dot(bn.cross(ti));if(c<0||l+c>o)return null;const u=-s*ti.dot(An);return u<0?null:this.at(u/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,i,n,a,o,s,l,c,u,p,d,m,g,v,f){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,a,o,s,l,c,u,p,d,m,g,v,f)}set(e,t,i,n,a,o,s,l,c,u,p,d,m,g,v,f){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=n,h[1]=a,h[5]=o,h[9]=s,h[13]=l,h[2]=c,h[6]=u,h[10]=p,h[14]=d,h[3]=m,h[7]=g,h[11]=v,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/Oi.setFromMatrixColumn(e,0).length(),a=1/Oi.setFromMatrixColumn(e,1).length(),o=1/Oi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(n),c=Math.sin(n),u=Math.cos(a),p=Math.sin(a);if(e.order==="XYZ"){const d=o*u,m=o*p,g=s*u,v=s*p;t[0]=l*u,t[4]=-l*p,t[8]=c,t[1]=m+g*c,t[5]=d-v*c,t[9]=-s*l,t[2]=v-d*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,m=l*p,g=c*u,v=c*p;t[0]=d+v*s,t[4]=g*s-m,t[8]=o*c,t[1]=o*p,t[5]=o*u,t[9]=-s,t[2]=m*s-g,t[6]=v+d*s,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,m=l*p,g=c*u,v=c*p;t[0]=d-v*s,t[4]=-o*p,t[8]=g+m*s,t[1]=m+g*s,t[5]=o*u,t[9]=v-d*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,m=o*p,g=s*u,v=s*p;t[0]=l*u,t[4]=g*c-m,t[8]=d*c+v,t[1]=l*p,t[5]=v*c+d,t[9]=m*c-g,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,g=s*l,v=s*c;t[0]=l*u,t[4]=v-d*p,t[8]=g*p+m,t[1]=p,t[5]=o*u,t[9]=-s*u,t[2]=-c*u,t[6]=m*p+g,t[10]=d-v*p}else if(e.order==="XZY"){const d=o*l,m=o*c,g=s*l,v=s*c;t[0]=l*u,t[4]=-p,t[8]=c*u,t[1]=d*p+v,t[5]=o*u,t[9]=m*p-g,t[2]=g*p-m,t[6]=s*u,t[10]=v*p+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jl,e,$l)}lookAt(e,t,i){const n=this.elements;return Mt.subVectors(e,t),Mt.lengthSq()===0&&(Mt.z=1),Mt.normalize(),ii.crossVectors(i,Mt),ii.lengthSq()===0&&(Math.abs(i.z)===1?Mt.x+=1e-4:Mt.z+=1e-4,Mt.normalize(),ii.crossVectors(i,Mt)),ii.normalize(),wr.crossVectors(Mt,ii),n[0]=ii.x,n[4]=wr.x,n[8]=Mt.x,n[1]=ii.y,n[5]=wr.y,n[9]=Mt.y,n[2]=ii.z,n[6]=wr.z,n[10]=Mt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,a=this.elements,o=i[0],s=i[4],l=i[8],c=i[12],u=i[1],p=i[5],d=i[9],m=i[13],g=i[2],v=i[6],f=i[10],h=i[14],w=i[3],E=i[7],R=i[11],b=i[15],C=n[0],T=n[4],H=n[8],M=n[12],y=n[1],V=n[5],W=n[9],Z=n[13],P=n[2],G=n[6],q=n[10],j=n[14],re=n[3],K=n[7],J=n[11],U=n[15];return a[0]=o*C+s*y+l*P+c*re,a[4]=o*T+s*V+l*G+c*K,a[8]=o*H+s*W+l*q+c*J,a[12]=o*M+s*Z+l*j+c*U,a[1]=u*C+p*y+d*P+m*re,a[5]=u*T+p*V+d*G+m*K,a[9]=u*H+p*W+d*q+m*J,a[13]=u*M+p*Z+d*j+m*U,a[2]=g*C+v*y+f*P+h*re,a[6]=g*T+v*V+f*G+h*K,a[10]=g*H+v*W+f*q+h*J,a[14]=g*M+v*Z+f*j+h*U,a[3]=w*C+E*y+R*P+b*re,a[7]=w*T+E*V+R*G+b*K,a[11]=w*H+E*W+R*q+b*J,a[15]=w*M+E*Z+R*j+b*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],u=e[2],p=e[6],d=e[10],m=e[14],g=e[3],v=e[7],f=e[11],h=e[15];return g*(+a*l*p-n*c*p-a*s*d+i*c*d+n*s*m-i*l*m)+v*(+t*l*m-t*c*d+a*o*d-n*o*m+n*c*u-a*l*u)+f*(+t*c*p-t*s*m-a*o*p+i*o*m+a*s*u-i*c*u)+h*(-n*s*u-t*l*p+t*s*d+n*o*p-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],p=e[9],d=e[10],m=e[11],g=e[12],v=e[13],f=e[14],h=e[15],w=p*f*c-v*d*c+v*l*m-s*f*m-p*l*h+s*d*h,E=g*d*c-u*f*c-g*l*m+o*f*m+u*l*h-o*d*h,R=u*v*c-g*p*c+g*s*m-o*v*m-u*s*h+o*p*h,b=g*p*l-u*v*l-g*s*d+o*v*d+u*s*f-o*p*f,C=t*w+i*E+n*R+a*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=w*T,e[1]=(v*d*a-p*f*a-v*n*m+i*f*m+p*n*h-i*d*h)*T,e[2]=(s*f*a-v*l*a+v*n*c-i*f*c-s*n*h+i*l*h)*T,e[3]=(p*l*a-s*d*a-p*n*c+i*d*c+s*n*m-i*l*m)*T,e[4]=E*T,e[5]=(u*f*a-g*d*a+g*n*m-t*f*m-u*n*h+t*d*h)*T,e[6]=(g*l*a-o*f*a-g*n*c+t*f*c+o*n*h-t*l*h)*T,e[7]=(o*d*a-u*l*a+u*n*c-t*d*c-o*n*m+t*l*m)*T,e[8]=R*T,e[9]=(g*p*a-u*v*a-g*i*m+t*v*m+u*i*h-t*p*h)*T,e[10]=(o*v*a-g*s*a+g*i*c-t*v*c-o*i*h+t*s*h)*T,e[11]=(u*s*a-o*p*a-u*i*c+t*p*c+o*i*m-t*s*m)*T,e[12]=b*T,e[13]=(u*v*n-g*p*n+g*i*d-t*v*d-u*i*f+t*p*f)*T,e[14]=(g*s*n-o*v*n-g*i*l+t*v*l+o*i*f-t*s*f)*T,e[15]=(o*p*n-u*s*n+u*i*l-t*p*l-o*i*d+t*s*d)*T,this}scale(e){const t=this.elements,i=e.x,n=e.y,a=e.z;return t[0]*=i,t[4]*=n,t[8]*=a,t[1]*=i,t[5]*=n,t[9]*=a,t[2]*=i,t[6]*=n,t[10]*=a,t[3]*=i,t[7]*=n,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),a=1-i,o=e.x,s=e.y,l=e.z,c=a*o,u=a*s;return this.set(c*o+i,c*s-n*l,c*l+n*s,0,c*s+n*l,u*s+i,u*l-n*o,0,c*l-n*s,u*l+n*o,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,a,o){return this.set(1,i,a,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,a=t._x,o=t._y,s=t._z,l=t._w,c=a+a,u=o+o,p=s+s,d=a*c,m=a*u,g=a*p,v=o*u,f=o*p,h=s*p,w=l*c,E=l*u,R=l*p,b=i.x,C=i.y,T=i.z;return n[0]=(1-(v+h))*b,n[1]=(m+R)*b,n[2]=(g-E)*b,n[3]=0,n[4]=(m-R)*C,n[5]=(1-(d+h))*C,n[6]=(f+w)*C,n[7]=0,n[8]=(g+E)*T,n[9]=(f-w)*T,n[10]=(1-(d+v))*T,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let a=Oi.set(n[0],n[1],n[2]).length();const o=Oi.set(n[4],n[5],n[6]).length(),s=Oi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),e.x=n[12],e.y=n[13],e.z=n[14],Pt.copy(this);const l=1/a,c=1/o,u=1/s;return Pt.elements[0]*=l,Pt.elements[1]*=l,Pt.elements[2]*=l,Pt.elements[4]*=c,Pt.elements[5]*=c,Pt.elements[6]*=c,Pt.elements[8]*=u,Pt.elements[9]*=u,Pt.elements[10]*=u,t.setFromRotationMatrix(Pt),i.x=a,i.y=o,i.z=s,this}makePerspective(e,t,i,n,a,o,s=Kt){const l=this.elements,c=2*a/(t-e),u=2*a/(i-n),p=(t+e)/(t-e),d=(i+n)/(i-n);let m,g;if(s===Kt)m=-(o+a)/(o-a),g=-2*o*a/(o-a);else if(s===Zr)m=-o/(o-a),g=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,a,o,s=Kt){const l=this.elements,c=1/(t-e),u=1/(i-n),p=1/(o-a),d=(t+e)*c,m=(i+n)*u;let g,v;if(s===Kt)g=(o+a)*p,v=-2*p;else if(s===Zr)g=a*p,v=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Oi=new N,Pt=new st,Jl=new N(0,0,0),$l=new N(1,1,1),ii=new N,wr=new N,Mt=new N,ts=new st,is=new bi;class nn{constructor(e=0,t=0,i=0,n=nn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,a=n[0],o=n[4],s=n[8],l=n[1],c=n[5],u=n[9],p=n[2],d=n[6],m=n[10];switch(t){case"XYZ":this._y=Math.asin(ht(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-ht(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ts.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ts,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return is.setFromEuler(this),this.setFromQuaternion(is,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nn.DEFAULT_ORDER="XYZ";class no{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ql=0;const rs=new N,Fi=new bi,Wt=new st,Rr=new N,or=new N,ec=new N,tc=new bi,ns=new N(1,0,0),as=new N(0,1,0),ss=new N(0,0,1),ic={type:"added"},rc={type:"removed"};class St extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ql++}),this.uuid=tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new N,t=new nn,i=new bi,n=new N(1,1,1);function a(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new st},normalMatrix:{value:new Oe}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new no,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.premultiply(Fi),this}rotateX(e){return this.rotateOnAxis(ns,e)}rotateY(e){return this.rotateOnAxis(as,e)}rotateZ(e){return this.rotateOnAxis(ss,e)}translateOnAxis(e,t){return rs.copy(e).applyQuaternion(this.quaternion),this.position.add(rs.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ns,e)}translateY(e){return this.translateOnAxis(as,e)}translateZ(e){return this.translateOnAxis(ss,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wt.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Rr.copy(e):Rr.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wt.lookAt(or,Rr,this.up):Wt.lookAt(Rr,or,this.up),this.quaternion.setFromRotationMatrix(Wt),n&&(Wt.extractRotation(n.matrixWorld),Fi.setFromRotationMatrix(Wt),this.quaternion.premultiply(Fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ic)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let n=0,a=this.children.length;n<a;n++){const o=this.children[n].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,e,ec),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,tc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let a=0,o=n.length;a<o;a++){const s=n[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const p=l[c];a(e.shapes,p)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(e.materials,this.material[l]));n.material=s}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let s=0;s<this.children.length;s++)n.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];n.animations.push(a(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),p=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}St.DEFAULT_UP=new N(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ut=new N,Xt=new N,wn=new N,jt=new N,Bi=new N,zi=new N,os=new N,Rn=new N,Ln=new N,Cn=new N;let Lr=!1;class Dt{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Ut.subVectors(e,t),n.cross(Ut);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,t,i,n,a){Ut.subVectors(n,t),Xt.subVectors(i,t),wn.subVectors(e,t);const o=Ut.dot(Ut),s=Ut.dot(Xt),l=Ut.dot(wn),c=Xt.dot(Xt),u=Xt.dot(wn),p=o*c-s*s;if(p===0)return a.set(-2,-1,-1);const d=1/p,m=(c*l-s*u)*d,g=(o*u-s*l)*d;return a.set(1-m-g,g,m)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,jt),jt.x>=0&&jt.y>=0&&jt.x+jt.y<=1}static getUV(e,t,i,n,a,o,s,l){return Lr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Lr=!0),this.getInterpolation(e,t,i,n,a,o,s,l)}static getInterpolation(e,t,i,n,a,o,s,l){return this.getBarycoord(e,t,i,n,jt),l.setScalar(0),l.addScaledVector(a,jt.x),l.addScaledVector(o,jt.y),l.addScaledVector(s,jt.z),l}static isFrontFacing(e,t,i,n){return Ut.subVectors(i,t),Xt.subVectors(e,t),Ut.cross(Xt).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ut.subVectors(this.c,this.b),Xt.subVectors(this.a,this.b),Ut.cross(Xt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,a){return Lr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Lr=!0),Dt.getInterpolation(e,this.a,this.b,this.c,t,i,n,a)}getInterpolation(e,t,i,n,a){return Dt.getInterpolation(e,this.a,this.b,this.c,t,i,n,a)}containsPoint(e){return Dt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,a=this.c;let o,s;Bi.subVectors(n,i),zi.subVectors(a,i),Rn.subVectors(e,i);const l=Bi.dot(Rn),c=zi.dot(Rn);if(l<=0&&c<=0)return t.copy(i);Ln.subVectors(e,n);const u=Bi.dot(Ln),p=zi.dot(Ln);if(u>=0&&p<=u)return t.copy(n);const d=l*p-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Bi,o);Cn.subVectors(e,a);const m=Bi.dot(Cn),g=zi.dot(Cn);if(g>=0&&m<=g)return t.copy(a);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return s=c/(c-g),t.copy(i).addScaledVector(zi,s);const f=u*g-m*p;if(f<=0&&p-u>=0&&m-g>=0)return os.subVectors(a,n),s=(p-u)/(p-u+(m-g)),t.copy(n).addScaledVector(os,s);const h=1/(f+v+d);return o=v*h,s=d*h,t.copy(i).addScaledVector(Bi,o).addScaledVector(zi,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ao={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function Pn(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ve.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=Ve.workingColorSpace){if(e=ea(e,1),t=ht(t,0,1),i=ht(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,o=2*i-a;this.r=Pn(o,a,e+1/3),this.g=Pn(o,a,e),this.b=Pn(o,a,e-1/3)}return Ve.toWorkingColorSpace(this,n),this}setStyle(e,t=Qe){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=n[1],s=n[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=n[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qe){const i=ao[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=xn(e.r),this.g=xn(e.g),this.b=xn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qe){return Ve.fromWorkingColorSpace(ut.copy(this),e),Math.round(ht(ut.r*255,0,255))*65536+Math.round(ht(ut.g*255,0,255))*256+Math.round(ht(ut.b*255,0,255))}getHexString(e=Qe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.fromWorkingColorSpace(ut.copy(this),t);const i=ut.r,n=ut.g,a=ut.b,o=Math.max(i,n,a),s=Math.min(i,n,a);let l,c;const u=(s+o)/2;if(s===o)l=0,c=0;else{const p=o-s;switch(c=u<=.5?p/(o+s):p/(2-o-s),o){case i:l=(n-a)/p+(n<a?6:0);break;case n:l=(a-i)/p+2;break;case a:l=(i-n)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ve.workingColorSpace){return Ve.fromWorkingColorSpace(ut.copy(this),t),e.r=ut.r,e.g=ut.g,e.b=ut.b,e}getStyle(e=Qe){Ve.fromWorkingColorSpace(ut.copy(this),e);const t=ut.r,i=ut.g,n=ut.b;return e!==Qe?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(ri),this.setHSL(ri.h+e,ri.s+t,ri.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ri),e.getHSL(Cr);const i=hr(ri.h,Cr.h,t),n=hr(ri.s,Cr.s,t),a=hr(ri.l,Cr.l,t);return this.setHSL(i,n,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*n,this.g=a[1]*t+a[4]*i+a[7]*n,this.b=a[2]*t+a[5]*i+a[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ut=new ke;ke.NAMES=ao;let nc=0;class vr extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nc++}),this.uuid=tr(),this.name="",this.type="Material",this.blending=Ki,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vn,this.blendDst=kn,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ki&&(i.blending=this.blending),this.side!==ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Vn&&(i.blendSrc=this.blendSrc),this.blendDst!==kn&&(i.blendDst=this.blendDst),this.blendEquation!==xi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==jr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qa&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(t){const a=n(e.textures),o=n(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class so extends vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ks,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Je=new N,Pr=new De;class Gt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ya,this.updateRange={offset:0,count:-1},this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Pr.fromBufferAttribute(this,t),Pr.applyMatrix3(e),this.setXY(t,Pr.x,Pr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Je.fromBufferAttribute(this,t),Je.applyMatrix3(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Je.fromBufferAttribute(this,t),Je.applyMatrix4(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Je.fromBufferAttribute(this,t),Je.applyNormalMatrix(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Je.fromBufferAttribute(this,t),Je.transformDirection(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=qi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qi(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qi(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qi(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,a){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),n=ft(n,this.array),a=ft(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ya&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class oo extends Gt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class lo extends Gt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class yt extends Gt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ac=0;const At=new st,Un=new St,Gi=new N,Et=new _r,lr=new _r,rt=new N;class Jt extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ac++}),this.uuid=tr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qs(e)?lo:oo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Oe().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return At.makeRotationFromQuaternion(e),this.applyMatrix4(At),this}rotateX(e){return At.makeRotationX(e),this.applyMatrix4(At),this}rotateY(e){return At.makeRotationY(e),this.applyMatrix4(At),this}rotateZ(e){return At.makeRotationZ(e),this.applyMatrix4(At),this}translate(e,t,i){return At.makeTranslation(e,t,i),this.applyMatrix4(At),this}scale(e,t,i){return At.makeScale(e,t,i),this.applyMatrix4(At),this}lookAt(e){return Un.lookAt(e),Un.updateMatrix(),this.applyMatrix4(Un.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new yt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _r);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const a=t[i];Et.setFromBufferAttribute(a),this.morphTargetsRelative?(rt.addVectors(this.boundingBox.min,Et.min),this.boundingBox.expandByPoint(rt),rt.addVectors(this.boundingBox.max,Et.max),this.boundingBox.expandByPoint(rt)):(this.boundingBox.expandByPoint(Et.min),this.boundingBox.expandByPoint(Et.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ta);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Et.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];lr.setFromBufferAttribute(s),this.morphTargetsRelative?(rt.addVectors(Et.min,lr.min),Et.expandByPoint(rt),rt.addVectors(Et.max,lr.max),Et.expandByPoint(rt)):(Et.expandByPoint(lr.min),Et.expandByPoint(lr.max))}Et.getCenter(i);let n=0;for(let a=0,o=e.count;a<o;a++)rt.fromBufferAttribute(e,a),n=Math.max(n,i.distanceToSquared(rt));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)rt.fromBufferAttribute(s,c),l&&(Gi.fromBufferAttribute(e,c),rt.add(Gi)),n=Math.max(n,i.distanceToSquared(rt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,n=t.position.array,a=t.normal.array,o=t.uv.array,s=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let y=0;y<s;y++)c[y]=new N,u[y]=new N;const p=new N,d=new N,m=new N,g=new De,v=new De,f=new De,h=new N,w=new N;function E(y,V,W){p.fromArray(n,y*3),d.fromArray(n,V*3),m.fromArray(n,W*3),g.fromArray(o,y*2),v.fromArray(o,V*2),f.fromArray(o,W*2),d.sub(p),m.sub(p),v.sub(g),f.sub(g);const Z=1/(v.x*f.y-f.x*v.y);isFinite(Z)&&(h.copy(d).multiplyScalar(f.y).addScaledVector(m,-v.y).multiplyScalar(Z),w.copy(m).multiplyScalar(v.x).addScaledVector(d,-f.x).multiplyScalar(Z),c[y].add(h),c[V].add(h),c[W].add(h),u[y].add(w),u[V].add(w),u[W].add(w))}let R=this.groups;R.length===0&&(R=[{start:0,count:i.length}]);for(let y=0,V=R.length;y<V;++y){const W=R[y],Z=W.start,P=W.count;for(let G=Z,q=Z+P;G<q;G+=3)E(i[G+0],i[G+1],i[G+2])}const b=new N,C=new N,T=new N,H=new N;function M(y){T.fromArray(a,y*3),H.copy(T);const V=c[y];b.copy(V),b.sub(T.multiplyScalar(T.dot(V))).normalize(),C.crossVectors(H,V);const W=C.dot(u[y])<0?-1:1;l[y*4]=b.x,l[y*4+1]=b.y,l[y*4+2]=b.z,l[y*4+3]=W}for(let y=0,V=R.length;y<V;++y){const W=R[y],Z=W.start,P=W.count;for(let G=Z,q=Z+P;G<q;G+=3)M(i[G+0]),M(i[G+1]),M(i[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const n=new N,a=new N,o=new N,s=new N,l=new N,c=new N,u=new N,p=new N;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),v=e.getX(d+1),f=e.getX(d+2);n.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),o.fromBufferAttribute(t,f),u.subVectors(o,a),p.subVectors(n,a),u.cross(p),s.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,f),s.add(u),l.add(u),c.add(u),i.setXYZ(g,s.x,s.y,s.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)n.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,a),p.subVectors(n,a),u.cross(p),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)rt.fromBufferAttribute(e,t),rt.normalize(),e.setXYZ(t,rt.x,rt.y,rt.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,p=s.normalized,d=new c.constructor(l.length*u);let m=0,g=0;for(let v=0,f=l.length;v<f;v++){s.isInterleavedBufferAttribute?m=l[v]*s.data.stride+s.offset:m=l[v]*u;for(let h=0;h<u;h++)d[g++]=c[m++]}return new Gt(d,u,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Jt,i=this.index.array,n=this.attributes;for(const s in n){const l=n[s],c=e(l,i);t.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let u=0,p=c.length;u<p;u++){const d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let p=0,d=c.length;p<d;p++){const m=c[p];u.push(m.toJSON(e.data))}u.length>0&&(n[l]=u,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(t))}const a=e.morphAttributes;for(const c in a){const u=[],p=a[c];for(let d=0,m=p.length;d<m;d++)u.push(p[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ls=new st,gi=new ro,Ur=new ta,cs=new N,Hi=new N,Vi=new N,ki=new N,Dn=new N,Dr=new N,Nr=new De,Ir=new De,Or=new De,us=new N,hs=new N,ds=new N,Fr=new N,Br=new N;class Ot extends St{constructor(e=new Jt,t=new so){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const o=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const s=this.morphTargetInfluences;if(a&&s){Dr.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=s[l],p=a[l];u!==0&&(Dn.fromBufferAttribute(p,e),o?Dr.addScaledVector(Dn,u):Dr.addScaledVector(Dn.sub(t),u))}t.add(Dr)}return t}raycast(e,t){const i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ur.copy(i.boundingSphere),Ur.applyMatrix4(a),gi.copy(e.ray).recast(e.near),!(Ur.containsPoint(gi.origin)===!1&&(gi.intersectSphere(Ur,cs)===null||gi.origin.distanceToSquared(cs)>(e.far-e.near)**2))&&(ls.copy(a).invert(),gi.copy(e.ray).applyMatrix4(ls),!(i.boundingBox!==null&&gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,gi)))}_computeIntersections(e,t,i){let n;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,p=a.attributes.normal,d=a.groups,m=a.drawRange;if(s!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const f=d[g],h=o[f.materialIndex],w=Math.max(f.start,m.start),E=Math.min(s.count,Math.min(f.start+f.count,m.start+m.count));for(let R=w,b=E;R<b;R+=3){const C=s.getX(R),T=s.getX(R+1),H=s.getX(R+2);n=zr(this,h,e,i,c,u,p,C,T,H),n&&(n.faceIndex=Math.floor(R/3),n.face.materialIndex=f.materialIndex,t.push(n))}}else{const g=Math.max(0,m.start),v=Math.min(s.count,m.start+m.count);for(let f=g,h=v;f<h;f+=3){const w=s.getX(f),E=s.getX(f+1),R=s.getX(f+2);n=zr(this,o,e,i,c,u,p,w,E,R),n&&(n.faceIndex=Math.floor(f/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const f=d[g],h=o[f.materialIndex],w=Math.max(f.start,m.start),E=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let R=w,b=E;R<b;R+=3){const C=R,T=R+1,H=R+2;n=zr(this,h,e,i,c,u,p,C,T,H),n&&(n.faceIndex=Math.floor(R/3),n.face.materialIndex=f.materialIndex,t.push(n))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let f=g,h=v;f<h;f+=3){const w=f,E=f+1,R=f+2;n=zr(this,o,e,i,c,u,p,w,E,R),n&&(n.faceIndex=Math.floor(f/3),t.push(n))}}}}function sc(r,e,t,i,n,a,o,s){let l;if(e.side===_t?l=i.intersectTriangle(o,a,n,!0,s):l=i.intersectTriangle(n,a,o,e.side===ui,s),l===null)return null;Br.copy(s),Br.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Br);return c<t.near||c>t.far?null:{distance:c,point:Br.clone(),object:r}}function zr(r,e,t,i,n,a,o,s,l,c){r.getVertexPosition(s,Hi),r.getVertexPosition(l,Vi),r.getVertexPosition(c,ki);const u=sc(r,e,t,i,Hi,Vi,ki,Fr);if(u){n&&(Nr.fromBufferAttribute(n,s),Ir.fromBufferAttribute(n,l),Or.fromBufferAttribute(n,c),u.uv=Dt.getInterpolation(Fr,Hi,Vi,ki,Nr,Ir,Or,new De)),a&&(Nr.fromBufferAttribute(a,s),Ir.fromBufferAttribute(a,l),Or.fromBufferAttribute(a,c),u.uv1=Dt.getInterpolation(Fr,Hi,Vi,ki,Nr,Ir,Or,new De),u.uv2=u.uv1),o&&(us.fromBufferAttribute(o,s),hs.fromBufferAttribute(o,l),ds.fromBufferAttribute(o,c),u.normal=Dt.getInterpolation(Fr,Hi,Vi,ki,us,hs,ds,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const p={a:s,b:l,c,normal:new N,materialIndex:0};Dt.getNormal(Hi,Vi,ki,p.normal),u.face=p}return u}class ir extends Jt{constructor(e=1,t=1,i=1,n=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:a,depthSegments:o};const s=this;n=Math.floor(n),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],u=[],p=[];let d=0,m=0;g("z","y","x",-1,-1,i,t,e,o,a,0),g("z","y","x",1,-1,i,t,-e,o,a,1),g("x","z","y",1,1,e,i,t,n,o,2),g("x","z","y",1,-1,e,i,-t,n,o,3),g("x","y","z",1,-1,e,t,i,n,a,4),g("x","y","z",-1,-1,e,t,-i,n,a,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(p,2));function g(v,f,h,w,E,R,b,C,T,H,M){const y=R/T,V=b/H,W=R/2,Z=b/2,P=C/2,G=T+1,q=H+1;let j=0,re=0;const K=new N;for(let J=0;J<q;J++){const U=J*V-Z;for(let X=0;X<G;X++){const se=X*y-W;K[v]=se*w,K[f]=U*E,K[h]=P,c.push(K.x,K.y,K.z),K[v]=0,K[f]=0,K[h]=C>0?1:-1,u.push(K.x,K.y,K.z),p.push(X/T),p.push(1-J/H),j+=1}}for(let J=0;J<H;J++)for(let U=0;U<T;U++){const X=d+U+G*J,se=d+U+G*(J+1),de=d+(U+1)+G*(J+1),xe=d+(U+1)+G*J;l.push(X,se,xe),l.push(se,de,xe),re+=6}s.addGroup(m,re,M),m+=re,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function er(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function mt(r){const e={};for(let t=0;t<r.length;t++){const i=er(r[t]);for(const n in i)e[n]=i[n]}return e}function oc(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function co(r){return r.getRenderTarget()===null?r.outputColorSpace:Ve.workingColorSpace}const lc={clone:er,merge:mt};var cc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends vr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cc,this.fragmentShader=uc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=er(e.uniforms),this.uniformsGroups=oc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class uo extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=Kt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Rt extends uo{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ur*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mr*2*Math.atan(Math.tan(ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ur*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,a=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*n/l,t-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Wi=-90,Xi=1;class hc extends St{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Rt(Wi,Xi,e,t);n.layers=this.layers,this.add(n);const a=new Rt(Wi,Xi,e,t);a.layers=this.layers,this.add(a);const o=new Rt(Wi,Xi,e,t);o.layers=this.layers,this.add(o);const s=new Rt(Wi,Xi,e,t);s.layers=this.layers,this.add(s);const l=new Rt(Wi,Xi,e,t);l.layers=this.layers,this.add(l);const c=new Rt(Wi,Xi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,a,o,s,l]=t;for(const c of t)this.remove(c);if(e===Kt)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,l,c,u]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,a),e.setRenderTarget(i,1,n),e.render(t,o),e.setRenderTarget(i,2,n),e.render(t,s),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,n),e.render(t,u),e.setRenderTarget(p,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ho extends vt{constructor(e,t,i,n,a,o,s,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ji,super(e,t,i,n,a,o,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dc extends Ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];t.encoding!==void 0&&(dr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===yi?Qe:Lt),this.texture=new ho(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ir(5,5,5),a=new Ai({name:"CubemapFromEquirect",uniforms:er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_t,blending:oi});a.uniforms.tEquirect.value=t;const o=new Ot(n,a),s=t.minFilter;return t.minFilter===pr&&(t.minFilter=wt),new hc(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,n){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,n);e.setRenderTarget(a)}}const Nn=new N,pc=new N,fc=new Oe;class ni{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Nn.subVectors(i,t).cross(pc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Nn),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||fc.getNormalMatrix(e),n=this.coplanarPoint(Nn).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new ta,Gr=new N;class po{constructor(e=new ni,t=new ni,i=new ni,n=new ni,a=new ni,o=new ni){this.planes=[e,t,i,n,a,o]}set(e,t,i,n,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(n),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Kt){const i=this.planes,n=e.elements,a=n[0],o=n[1],s=n[2],l=n[3],c=n[4],u=n[5],p=n[6],d=n[7],m=n[8],g=n[9],v=n[10],f=n[11],h=n[12],w=n[13],E=n[14],R=n[15];if(i[0].setComponents(l-a,d-c,f-m,R-h).normalize(),i[1].setComponents(l+a,d+c,f+m,R+h).normalize(),i[2].setComponents(l+o,d+u,f+g,R+w).normalize(),i[3].setComponents(l-o,d-u,f-g,R-w).normalize(),i[4].setComponents(l-s,d-p,f-v,R-E).normalize(),t===Kt)i[5].setComponents(l+s,d+p,f+v,R+E).normalize();else if(t===Zr)i[5].setComponents(s,p,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(e){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Gr.x=n.normal.x>0?e.max.x:e.min.x,Gr.y=n.normal.y>0?e.max.y:e.min.y,Gr.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Gr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fo(){let r=null,e=!1,t=null,i=null;function n(a,o){t(a,o),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function mc(r,e){const t=e.isWebGL2,i=new WeakMap;function n(c,u){const p=c.array,d=c.usage,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,p,d),c.onUploadCallback();let g;if(p instanceof Float32Array)g=r.FLOAT;else if(p instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)g=r.SHORT;else if(p instanceof Uint32Array)g=r.UNSIGNED_INT;else if(p instanceof Int32Array)g=r.INT;else if(p instanceof Int8Array)g=r.BYTE;else if(p instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:m,type:g,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version}}function a(c,u,p){const d=u.array,m=u.updateRange;r.bindBuffer(p,c),m.count===-1?r.bufferSubData(p,0,d):(t?r.bufferSubData(p,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):r.bufferSubData(p,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(r.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const p=i.get(c);p===void 0?i.set(c,n(c,u)):p.version<c.version&&(a(p.buffer,c,u),p.version=c.version)}return{get:o,remove:s,update:l}}class ia extends Jt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const a=e/2,o=t/2,s=Math.floor(i),l=Math.floor(n),c=s+1,u=l+1,p=e/s,d=t/l,m=[],g=[],v=[],f=[];for(let h=0;h<u;h++){const w=h*d-o;for(let E=0;E<c;E++){const R=E*p-a;g.push(R,-w,0),v.push(0,0,1),f.push(E/s),f.push(1-h/l)}}for(let h=0;h<l;h++)for(let w=0;w<s;w++){const E=w+c*h,R=w+c*(h+1),b=w+1+c*(h+1),C=w+1+c*h;m.push(E,R,C),m.push(R,b,C)}this.setIndex(m),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(v,3)),this.setAttribute("uv",new yt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ia(e.width,e.height,e.widthSegments,e.heightSegments)}}var gc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_c=`#ifdef USE_ALPHAHASH
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
#endif`,vc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ec=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sc=`#ifdef USE_AOMAP
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
#endif`,yc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ac=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wc=`#ifdef USE_IRIDESCENCE
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
#endif`,Rc=`#ifdef USE_BUMPMAP
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
#endif`,Lc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Cc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ic=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Oc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Fc=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Bc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,zc=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xc=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,jc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yc=`#ifdef USE_ENVMAP
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
#endif`,Kc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$c=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tu=`#ifdef USE_GRADIENTMAP
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
}`,iu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ru=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,au=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,su=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
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
#endif`,ou=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,lu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,du=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,pu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fu=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_u=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Mu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Eu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Su=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tu=`#if defined( USE_POINTS_UV )
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
#endif`,bu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Au=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ru=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Lu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Cu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Pu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Uu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Du=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ou=`#ifdef USE_NORMALMAP
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
#endif`,Fu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ku=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ju=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ku=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Zu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ju=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,$u=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,th=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ih=`#ifdef USE_SKINNING
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
#endif`,rh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ah=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sh=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,oh=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lh=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ch=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ph=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fh=`uniform sampler2D t2D;
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
}`,mh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_h=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xh=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Mh=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Eh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Sh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Th=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bh=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ah=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wh=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,Rh=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Lh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,Ch=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ph=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Uh=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Dh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Nh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ih=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,Oh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Fh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Bh=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,zh=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Gh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Hh=`uniform float size;
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
}`,Vh=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,kh=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,Wh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Xh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,jh=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ue={alphahash_fragment:gc,alphahash_pars_fragment:_c,alphamap_fragment:vc,alphamap_pars_fragment:xc,alphatest_fragment:Mc,alphatest_pars_fragment:Ec,aomap_fragment:Sc,aomap_pars_fragment:yc,begin_vertex:Tc,beginnormal_vertex:bc,bsdfs:Ac,iridescence_fragment:wc,bumpmap_pars_fragment:Rc,clipping_planes_fragment:Lc,clipping_planes_pars_fragment:Cc,clipping_planes_pars_vertex:Pc,clipping_planes_vertex:Uc,color_fragment:Dc,color_pars_fragment:Nc,color_pars_vertex:Ic,color_vertex:Oc,common:Fc,cube_uv_reflection_fragment:Bc,defaultnormal_vertex:zc,displacementmap_pars_vertex:Gc,displacementmap_vertex:Hc,emissivemap_fragment:Vc,emissivemap_pars_fragment:kc,colorspace_fragment:Wc,colorspace_pars_fragment:Xc,envmap_fragment:jc,envmap_common_pars_fragment:qc,envmap_pars_fragment:Yc,envmap_pars_vertex:Kc,envmap_physical_pars_fragment:ou,envmap_vertex:Zc,fog_vertex:Jc,fog_pars_vertex:$c,fog_fragment:Qc,fog_pars_fragment:eu,gradientmap_pars_fragment:tu,lightmap_fragment:iu,lightmap_pars_fragment:ru,lights_lambert_fragment:nu,lights_lambert_pars_fragment:au,lights_pars_begin:su,lights_toon_fragment:lu,lights_toon_pars_fragment:cu,lights_phong_fragment:uu,lights_phong_pars_fragment:hu,lights_physical_fragment:du,lights_physical_pars_fragment:pu,lights_fragment_begin:fu,lights_fragment_maps:mu,lights_fragment_end:gu,logdepthbuf_fragment:_u,logdepthbuf_pars_fragment:vu,logdepthbuf_pars_vertex:xu,logdepthbuf_vertex:Mu,map_fragment:Eu,map_pars_fragment:Su,map_particle_fragment:yu,map_particle_pars_fragment:Tu,metalnessmap_fragment:bu,metalnessmap_pars_fragment:Au,morphcolor_vertex:wu,morphnormal_vertex:Ru,morphtarget_pars_vertex:Lu,morphtarget_vertex:Cu,normal_fragment_begin:Pu,normal_fragment_maps:Uu,normal_pars_fragment:Du,normal_pars_vertex:Nu,normal_vertex:Iu,normalmap_pars_fragment:Ou,clearcoat_normal_fragment_begin:Fu,clearcoat_normal_fragment_maps:Bu,clearcoat_pars_fragment:zu,iridescence_pars_fragment:Gu,opaque_fragment:Hu,packing:Vu,premultiplied_alpha_fragment:ku,project_vertex:Wu,dithering_fragment:Xu,dithering_pars_fragment:ju,roughnessmap_fragment:qu,roughnessmap_pars_fragment:Yu,shadowmap_pars_fragment:Ku,shadowmap_pars_vertex:Zu,shadowmap_vertex:Ju,shadowmask_pars_fragment:$u,skinbase_vertex:Qu,skinning_pars_vertex:eh,skinning_vertex:th,skinnormal_vertex:ih,specularmap_fragment:rh,specularmap_pars_fragment:nh,tonemapping_fragment:ah,tonemapping_pars_fragment:sh,transmission_fragment:oh,transmission_pars_fragment:lh,uv_pars_fragment:ch,uv_pars_vertex:uh,uv_vertex:hh,worldpos_vertex:dh,background_vert:ph,background_frag:fh,backgroundCube_vert:mh,backgroundCube_frag:gh,cube_vert:_h,cube_frag:vh,depth_vert:xh,depth_frag:Mh,distanceRGBA_vert:Eh,distanceRGBA_frag:Sh,equirect_vert:yh,equirect_frag:Th,linedashed_vert:bh,linedashed_frag:Ah,meshbasic_vert:wh,meshbasic_frag:Rh,meshlambert_vert:Lh,meshlambert_frag:Ch,meshmatcap_vert:Ph,meshmatcap_frag:Uh,meshnormal_vert:Dh,meshnormal_frag:Nh,meshphong_vert:Ih,meshphong_frag:Oh,meshphysical_vert:Fh,meshphysical_frag:Bh,meshtoon_vert:zh,meshtoon_frag:Gh,points_vert:Hh,points_frag:Vh,shadow_vert:kh,shadow_frag:Wh,sprite_vert:Xh,sprite_frag:jh},ce={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Bt={basic:{uniforms:mt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:mt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:mt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:mt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:mt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:mt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:mt([ce.points,ce.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:mt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:mt([ce.common,ce.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:mt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:mt([ce.sprite,ce.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:mt([ce.common,ce.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:mt([ce.lights,ce.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Bt.physical={uniforms:mt([Bt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Hr={r:0,b:0,g:0};function qh(r,e,t,i,n,a,o){const s=new ke(0);let l=a===!0?0:1,c,u,p=null,d=0,m=null;function g(f,h){let w=!1,E=h.isScene===!0?h.background:null;E&&E.isTexture&&(E=(h.backgroundBlurriness>0?t:e).get(E)),E===null?v(s,l):E&&E.isColor&&(v(E,1),w=!0);const R=r.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(r.autoClear||w)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),E&&(E.isCubeTexture||E.mapping===tn)?(u===void 0&&(u=new Ot(new ir(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:er(Bt.backgroundCube.uniforms),vertexShader:Bt.backgroundCube.vertexShader,fragmentShader:Bt.backgroundCube.fragmentShader,side:_t,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=Ve.getTransfer(E.colorSpace)!==qe,(p!==E||d!==E.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,p=E,d=E.version,m=r.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Ot(new ia(2,2),new Ai({name:"BackgroundMaterial",uniforms:er(Bt.background.uniforms),vertexShader:Bt.background.vertexShader,fragmentShader:Bt.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=Ve.getTransfer(E.colorSpace)!==qe,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(p!==E||d!==E.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,p=E,d=E.version,m=r.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function v(f,h){f.getRGB(Hr,co(r)),i.buffers.color.setClear(Hr.r,Hr.g,Hr.b,h,o)}return{getClearColor:function(){return s},setClearColor:function(f,h=1){s.set(f),l=h,v(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,v(s,l)},render:g}}function Yh(r,e,t,i){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||a!==null,s={},l=f(null);let c=l,u=!1;function p(P,G,q,j,re){let K=!1;if(o){const J=v(j,q,G);c!==J&&(c=J,m(c.object)),K=h(P,j,q,re),K&&w(P,j,q,re)}else{const J=G.wireframe===!0;(c.geometry!==j.id||c.program!==q.id||c.wireframe!==J)&&(c.geometry=j.id,c.program=q.id,c.wireframe=J,K=!0)}re!==null&&t.update(re,r.ELEMENT_ARRAY_BUFFER),(K||u)&&(u=!1,H(P,G,q,j),re!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(re).buffer))}function d(){return i.isWebGL2?r.createVertexArray():a.createVertexArrayOES()}function m(P){return i.isWebGL2?r.bindVertexArray(P):a.bindVertexArrayOES(P)}function g(P){return i.isWebGL2?r.deleteVertexArray(P):a.deleteVertexArrayOES(P)}function v(P,G,q){const j=q.wireframe===!0;let re=s[P.id];re===void 0&&(re={},s[P.id]=re);let K=re[G.id];K===void 0&&(K={},re[G.id]=K);let J=K[j];return J===void 0&&(J=f(d()),K[j]=J),J}function f(P){const G=[],q=[],j=[];for(let re=0;re<n;re++)G[re]=0,q[re]=0,j[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:q,attributeDivisors:j,object:P,attributes:{},index:null}}function h(P,G,q,j){const re=c.attributes,K=G.attributes;let J=0;const U=q.getAttributes();for(const X in U)if(U[X].location>=0){const se=re[X];let de=K[X];if(de===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(de=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(de=P.instanceColor)),se===void 0||se.attribute!==de||de&&se.data!==de.data)return!0;J++}return c.attributesNum!==J||c.index!==j}function w(P,G,q,j){const re={},K=G.attributes;let J=0;const U=q.getAttributes();for(const X in U)if(U[X].location>=0){let se=K[X];se===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(se=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(se=P.instanceColor));const de={};de.attribute=se,se&&se.data&&(de.data=se.data),re[X]=de,J++}c.attributes=re,c.attributesNum=J,c.index=j}function E(){const P=c.newAttributes;for(let G=0,q=P.length;G<q;G++)P[G]=0}function R(P){b(P,0)}function b(P,G){const q=c.newAttributes,j=c.enabledAttributes,re=c.attributeDivisors;q[P]=1,j[P]===0&&(r.enableVertexAttribArray(P),j[P]=1),re[P]!==G&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,G),re[P]=G)}function C(){const P=c.newAttributes,G=c.enabledAttributes;for(let q=0,j=G.length;q<j;q++)G[q]!==P[q]&&(r.disableVertexAttribArray(q),G[q]=0)}function T(P,G,q,j,re,K,J){J===!0?r.vertexAttribIPointer(P,G,q,re,K):r.vertexAttribPointer(P,G,q,j,re,K)}function H(P,G,q,j){if(i.isWebGL2===!1&&(P.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const re=j.attributes,K=q.getAttributes(),J=G.defaultAttributeValues;for(const U in K){const X=K[U];if(X.location>=0){let se=re[U];if(se===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(se=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(se=P.instanceColor)),se!==void 0){const de=se.normalized,xe=se.itemSize,Se=t.get(se);if(Se===void 0)continue;const Fe=Se.buffer,ye=Se.type,Re=Se.bytesPerElement,je=i.isWebGL2===!0&&(ye===r.INT||ye===r.UNSIGNED_INT||se.gpuType===Xs);if(se.isInterleavedBufferAttribute){const Pe=se.data,I=Pe.stride,ot=se.offset;if(Pe.isInstancedInterleavedBuffer){for(let _e=0;_e<X.locationSize;_e++)b(X.location+_e,Pe.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let _e=0;_e<X.locationSize;_e++)R(X.location+_e);r.bindBuffer(r.ARRAY_BUFFER,Fe);for(let _e=0;_e<X.locationSize;_e++)T(X.location+_e,xe/X.locationSize,ye,de,I*Re,(ot+xe/X.locationSize*_e)*Re,je)}else{if(se.isInstancedBufferAttribute){for(let Pe=0;Pe<X.locationSize;Pe++)b(X.location+Pe,se.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Pe=0;Pe<X.locationSize;Pe++)R(X.location+Pe);r.bindBuffer(r.ARRAY_BUFFER,Fe);for(let Pe=0;Pe<X.locationSize;Pe++)T(X.location+Pe,xe/X.locationSize,ye,de,xe*Re,xe/X.locationSize*Pe*Re,je)}}else if(J!==void 0){const de=J[U];if(de!==void 0)switch(de.length){case 2:r.vertexAttrib2fv(X.location,de);break;case 3:r.vertexAttrib3fv(X.location,de);break;case 4:r.vertexAttrib4fv(X.location,de);break;default:r.vertexAttrib1fv(X.location,de)}}}}C()}function M(){W();for(const P in s){const G=s[P];for(const q in G){const j=G[q];for(const re in j)g(j[re].object),delete j[re];delete G[q]}delete s[P]}}function y(P){if(s[P.id]===void 0)return;const G=s[P.id];for(const q in G){const j=G[q];for(const re in j)g(j[re].object),delete j[re];delete G[q]}delete s[P.id]}function V(P){for(const G in s){const q=s[G];if(q[P.id]===void 0)continue;const j=q[P.id];for(const re in j)g(j[re].object),delete j[re];delete q[P.id]}}function W(){Z(),u=!0,c!==l&&(c=l,m(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:W,resetDefaultState:Z,dispose:M,releaseStatesOfGeometry:y,releaseStatesOfProgram:V,initAttributes:E,enableAttribute:R,disableUnusedAttributes:C}}function Kh(r,e,t,i){const n=i.isWebGL2;let a;function o(c){a=c}function s(c,u){r.drawArrays(a,c,u),t.update(u,a,1)}function l(c,u,p){if(p===0)return;let d,m;if(n)d=r,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](a,c,u,p),t.update(u,a,p)}this.setMode=o,this.render=s,this.renderInstances=l}function Zh(r,e,t){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const l=a(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),f=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),h=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=d>0,R=o||e.has("OES_texture_float"),b=E&&R,C=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:u,maxTextures:p,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:f,maxVaryings:h,maxFragmentUniforms:w,vertexTextures:E,floatFragmentTextures:R,floatVertexTextures:b,maxSamples:C}}function Jh(r){const e=this;let t=null,i=0,n=!1,a=!1;const o=new ni,s=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const m=p.length!==0||d||i!==0||n;return n=d,i=p.length,m},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,d){t=u(p,d,0)},this.setState=function(p,d,m){const g=p.clippingPlanes,v=p.clipIntersection,f=p.clipShadows,h=r.get(p);if(!n||g===null||g.length===0||a&&!f)a?u(null):c();else{const w=a?0:i,E=w*4;let R=h.clippingState||null;l.value=R,R=u(g,d,E,m);for(let b=0;b!==E;++b)R[b]=t[b];h.clippingState=R,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(p,d,m,g){const v=p!==null?p.length:0;let f=null;if(v!==0){if(f=l.value,g!==!0||f===null){const h=m+v*4,w=d.matrixWorldInverse;s.getNormalMatrix(w),(f===null||f.length<h)&&(f=new Float32Array(h));for(let E=0,R=m;E!==v;++E,R+=4)o.copy(p[E]).applyMatrix4(w,s),o.normal.toArray(f,R),f[R+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,f}}function $h(r){let e=new WeakMap;function t(o,s){return s===Wn?o.mapping=Ji:s===Xn&&(o.mapping=$i),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===Wn||s===Xn)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new dc(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",n),t(c.texture,o.mapping)}else return null}}return o}function n(o){const s=o.target;s.removeEventListener("dispose",n);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class Qh extends uo{constructor(e=-1,t=1,i=1,n=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=i-e,o=i+e,s=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Yi=4,ps=[.125,.215,.35,.446,.526,.582],Mi=20,In=new Qh,fs=new ke;let On=null,Fn=0,Bn=0;const vi=(1+Math.sqrt(5))/2,ji=1/vi,ms=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,vi,ji),new N(0,vi,-ji),new N(ji,0,vi),new N(-ji,0,vi),new N(vi,ji,0),new N(-vi,ji,0)];class gs{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){On=this._renderer.getRenderTarget(),Fn=this._renderer.getActiveCubeFace(),Bn=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,n,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(On,Fn,Bn),e.scissorTest=!1,Vr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ji||e.mapping===$i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),On=this._renderer.getRenderTarget(),Fn=this._renderer.getActiveCubeFace(),Bn=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:fr,format:It,colorSpace:Zt,depthBuffer:!1},n=_s(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_s(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ed(a)),this._blurMaterial=td(a,e,t)}return n}_compileMaterial(e){const t=new Ot(this._lodPlanes[0],e);this._renderer.compile(t,In)}_sceneToCubeUV(e,t,i,n){const a=new Rt(90,1,t,i),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,u=l.toneMapping;l.getClearColor(fs),l.toneMapping=li,l.autoClear=!1;const p=new so({name:"PMREM.Background",side:_t,depthWrite:!1,depthTest:!1}),d=new Ot(new ir,p);let m=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,m=!0):(p.color.copy(fs),m=!0);for(let v=0;v<6;v++){const f=v%3;f===0?(a.up.set(0,o[v],0),a.lookAt(s[v],0,0)):f===1?(a.up.set(0,0,o[v]),a.lookAt(0,s[v],0)):(a.up.set(0,o[v],0),a.lookAt(0,0,s[v]));const h=this._cubeSize;Vr(n,f*h,v>2?h:0,h,h),l.setRenderTarget(n),m&&l.render(d,a),l.render(e,a)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=u,l.autoClear=c,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===Ji||e.mapping===$i;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=xs()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vs());const a=n?this._cubemapMaterial:this._equirectMaterial,o=new Ot(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;Vr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,In)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const a=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=ms[(n-1)%ms.length];this._blur(e,n-1,n,a,o)}t.autoClear=i}_blur(e,t,i,n,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,n,"latitudinal",a),this._halfBlur(o,e,i,i,n,"longitudinal",a)}_halfBlur(e,t,i,n,a,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,p=new Ot(this._lodPlanes[n],c),d=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Mi-1),v=a/g,f=isFinite(a)?1+Math.floor(u*v):Mi;f>Mi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Mi}`);const h=[];let w=0;for(let T=0;T<Mi;++T){const H=T/v,M=Math.exp(-H*H/2);h.push(M),T===0?w+=M:T<f&&(w+=2*M)}for(let T=0;T<h.length;T++)h[T]=h[T]/w;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=h,d.latitudinal.value=o==="latitudinal",s&&(d.poleAxis.value=s);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-i;const R=this._sizeLods[n],b=3*R*(n>E-Yi?n-E+Yi:0),C=4*(this._cubeSize-R);Vr(t,b,C,3*R,2*R),l.setRenderTarget(t),l.render(p,In)}}function ed(r){const e=[],t=[],i=[];let n=r;const a=r-Yi+1+ps.length;for(let o=0;o<a;o++){const s=Math.pow(2,n);t.push(s);let l=1/s;o>r-Yi?l=ps[o-r+Yi-1]:o===0&&(l=0),i.push(l);const c=1/(s-2),u=-c,p=1+c,d=[u,u,p,u,p,p,u,u,p,p,u,p],m=6,g=6,v=3,f=2,h=1,w=new Float32Array(v*g*m),E=new Float32Array(f*g*m),R=new Float32Array(h*g*m);for(let C=0;C<m;C++){const T=C%3*2/3-1,H=C>2?0:-1,M=[T,H,0,T+2/3,H,0,T+2/3,H+1,0,T,H,0,T+2/3,H+1,0,T,H+1,0];w.set(M,v*g*C),E.set(d,f*g*C);const y=[C,C,C,C,C,C];R.set(y,h*g*C)}const b=new Jt;b.setAttribute("position",new Gt(w,v)),b.setAttribute("uv",new Gt(E,f)),b.setAttribute("faceIndex",new Gt(R,h)),e.push(b),n>Yi&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function _s(r,e,t){const i=new Ti(r,e,t);return i.texture.mapping=tn,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vr(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function td(r,e,t){const i=new Float32Array(Mi),n=new N(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function vs(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ra(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function xs(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function ra(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function id(r){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const l=s.mapping,c=l===Wn||l===Xn,u=l===Ji||l===$i;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let p=e.get(s);return t===null&&(t=new gs(r)),p=c?t.fromEquirectangular(s,p):t.fromCubemap(s,p),e.set(s,p),p.texture}else{if(e.has(s))return e.get(s).texture;{const p=s.image;if(c&&p&&p.height>0||u&&p&&n(p)){t===null&&(t=new gs(r));const d=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,d),s.addEventListener("dispose",a),d.texture}else return null}}}return s}function n(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function rd(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function nd(r,e,t,i){const n={},a=new WeakMap;function o(p){const d=p.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let f=0,h=v.length;f<h;f++)e.remove(v[f])}d.removeEventListener("dispose",o),delete n[d.id];const m=a.get(d);m&&(e.remove(m),a.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function s(p,d){return n[d.id]===!0||(d.addEventListener("dispose",o),n[d.id]=!0,t.memory.geometries++),d}function l(p){const d=p.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const m=p.morphAttributes;for(const g in m){const v=m[g];for(let f=0,h=v.length;f<h;f++)e.update(v[f],r.ARRAY_BUFFER)}}function c(p){const d=[],m=p.index,g=p.attributes.position;let v=0;if(m!==null){const w=m.array;v=m.version;for(let E=0,R=w.length;E<R;E+=3){const b=w[E+0],C=w[E+1],T=w[E+2];d.push(b,C,C,T,T,b)}}else if(g!==void 0){const w=g.array;v=g.version;for(let E=0,R=w.length/3-1;E<R;E+=3){const b=E+0,C=E+1,T=E+2;d.push(b,C,C,T,T,b)}}else return;const f=new(Qs(d)?lo:oo)(d,1);f.version=v;const h=a.get(p);h&&e.remove(h),a.set(p,f)}function u(p){const d=a.get(p);if(d){const m=p.index;m!==null&&d.version<m.version&&c(p)}else c(p);return a.get(p)}return{get:s,update:l,getWireframeAttribute:u}}function ad(r,e,t,i){const n=i.isWebGL2;let a;function o(d){a=d}let s,l;function c(d){s=d.type,l=d.bytesPerElement}function u(d,m){r.drawElements(a,m,s,d*l),t.update(m,a,1)}function p(d,m,g){if(g===0)return;let v,f;if(n)v=r,f="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[f](a,m,s,d*l,g),t.update(m,a,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=p}function sd(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=s*(a/3);break;case r.LINES:t.lines+=s*(a/2);break;case r.LINE_STRIP:t.lines+=s*(a-1);break;case r.LINE_LOOP:t.lines+=s*a;break;case r.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function od(r,e){return r[0]-e[0]}function ld(r,e){return Math.abs(e[1])-Math.abs(r[1])}function cd(r,e,t){const i={},n=new Float32Array(8),a=new WeakMap,o=new at,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,p){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let v=a.get(u);if(v===void 0||v.count!==g){let w=function(){Z.dispose(),a.delete(u),u.removeEventListener("dispose",w)};v!==void 0&&v.texture.dispose();const E=u.morphAttributes.position!==void 0,R=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],H=u.morphAttributes.color||[];let M=0;E===!0&&(M=1),R===!0&&(M=2),b===!0&&(M=3);let y=u.attributes.position.count*M,V=1;y>e.maxTextureSize&&(V=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const W=new Float32Array(y*V*4*g),Z=new io(W,y,V,g);Z.type=si,Z.needsUpdate=!0;const P=M*4;for(let G=0;G<g;G++){const q=C[G],j=T[G],re=H[G],K=y*V*4*G;for(let J=0;J<q.count;J++){const U=J*P;E===!0&&(o.fromBufferAttribute(q,J),W[K+U+0]=o.x,W[K+U+1]=o.y,W[K+U+2]=o.z,W[K+U+3]=0),R===!0&&(o.fromBufferAttribute(j,J),W[K+U+4]=o.x,W[K+U+5]=o.y,W[K+U+6]=o.z,W[K+U+7]=0),b===!0&&(o.fromBufferAttribute(re,J),W[K+U+8]=o.x,W[K+U+9]=o.y,W[K+U+10]=o.z,W[K+U+11]=re.itemSize===4?o.w:1)}}v={count:g,texture:Z,size:new De(y,V)},a.set(u,v),u.addEventListener("dispose",w)}let f=0;for(let w=0;w<d.length;w++)f+=d[w];const h=u.morphTargetsRelative?1:1-f;p.getUniforms().setValue(r,"morphTargetBaseInfluence",h),p.getUniforms().setValue(r,"morphTargetInfluences",d),p.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),p.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}else{const m=d===void 0?0:d.length;let g=i[u.id];if(g===void 0||g.length!==m){g=[];for(let E=0;E<m;E++)g[E]=[E,0];i[u.id]=g}for(let E=0;E<m;E++){const R=g[E];R[0]=E,R[1]=d[E]}g.sort(ld);for(let E=0;E<8;E++)E<m&&g[E][1]?(s[E][0]=g[E][0],s[E][1]=g[E][1]):(s[E][0]=Number.MAX_SAFE_INTEGER,s[E][1]=0);s.sort(od);const v=u.morphAttributes.position,f=u.morphAttributes.normal;let h=0;for(let E=0;E<8;E++){const R=s[E],b=R[0],C=R[1];b!==Number.MAX_SAFE_INTEGER&&C?(v&&u.getAttribute("morphTarget"+E)!==v[b]&&u.setAttribute("morphTarget"+E,v[b]),f&&u.getAttribute("morphNormal"+E)!==f[b]&&u.setAttribute("morphNormal"+E,f[b]),n[E]=C,h+=C):(v&&u.hasAttribute("morphTarget"+E)===!0&&u.deleteAttribute("morphTarget"+E),f&&u.hasAttribute("morphNormal"+E)===!0&&u.deleteAttribute("morphNormal"+E),n[E]=0)}const w=u.morphTargetsRelative?1:1-h;p.getUniforms().setValue(r,"morphTargetBaseInfluence",w),p.getUniforms().setValue(r,"morphTargetInfluences",n)}}return{update:l}}function ud(r,e,t,i){let n=new WeakMap;function a(l){const c=i.render.frame,u=l.geometry,p=e.get(l,u);if(n.get(p)!==c&&(e.update(p),n.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),n.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return p}function o(){n=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}const mo=new vt,go=new io,_o=new Kl,vo=new ho,Ms=[],Es=[],Ss=new Float32Array(16),ys=new Float32Array(9),Ts=new Float32Array(4);function rr(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let a=Ms[n];if(a===void 0&&(a=new Float32Array(n),Ms[n]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,r[o].toArray(a,s)}return a}function et(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function tt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function an(r,e){let t=Es[e];t===void 0&&(t=new Int32Array(e),Es[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function hd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function dd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(et(t,e))return;r.uniform2fv(this.addr,e),tt(t,e)}}function pd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(et(t,e))return;r.uniform3fv(this.addr,e),tt(t,e)}}function fd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(et(t,e))return;r.uniform4fv(this.addr,e),tt(t,e)}}function md(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(et(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),tt(t,e)}else{if(et(t,i))return;Ts.set(i),r.uniformMatrix2fv(this.addr,!1,Ts),tt(t,i)}}function gd(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(et(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),tt(t,e)}else{if(et(t,i))return;ys.set(i),r.uniformMatrix3fv(this.addr,!1,ys),tt(t,i)}}function _d(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(et(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),tt(t,e)}else{if(et(t,i))return;Ss.set(i),r.uniformMatrix4fv(this.addr,!1,Ss),tt(t,i)}}function vd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function xd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(et(t,e))return;r.uniform2iv(this.addr,e),tt(t,e)}}function Md(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(et(t,e))return;r.uniform3iv(this.addr,e),tt(t,e)}}function Ed(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(et(t,e))return;r.uniform4iv(this.addr,e),tt(t,e)}}function Sd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function yd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(et(t,e))return;r.uniform2uiv(this.addr,e),tt(t,e)}}function Td(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(et(t,e))return;r.uniform3uiv(this.addr,e),tt(t,e)}}function bd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(et(t,e))return;r.uniform4uiv(this.addr,e),tt(t,e)}}function Ad(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2D(e||mo,n)}function wd(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||_o,n)}function Rd(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||vo,n)}function Ld(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||go,n)}function Cd(r){switch(r){case 5126:return hd;case 35664:return dd;case 35665:return pd;case 35666:return fd;case 35674:return md;case 35675:return gd;case 35676:return _d;case 5124:case 35670:return vd;case 35667:case 35671:return xd;case 35668:case 35672:return Md;case 35669:case 35673:return Ed;case 5125:return Sd;case 36294:return yd;case 36295:return Td;case 36296:return bd;case 35678:case 36198:case 36298:case 36306:case 35682:return Ad;case 35679:case 36299:case 36307:return wd;case 35680:case 36300:case 36308:case 36293:return Rd;case 36289:case 36303:case 36311:case 36292:return Ld}}function Pd(r,e){r.uniform1fv(this.addr,e)}function Ud(r,e){const t=rr(e,this.size,2);r.uniform2fv(this.addr,t)}function Dd(r,e){const t=rr(e,this.size,3);r.uniform3fv(this.addr,t)}function Nd(r,e){const t=rr(e,this.size,4);r.uniform4fv(this.addr,t)}function Id(r,e){const t=rr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Od(r,e){const t=rr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Fd(r,e){const t=rr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Bd(r,e){r.uniform1iv(this.addr,e)}function zd(r,e){r.uniform2iv(this.addr,e)}function Gd(r,e){r.uniform3iv(this.addr,e)}function Hd(r,e){r.uniform4iv(this.addr,e)}function Vd(r,e){r.uniform1uiv(this.addr,e)}function kd(r,e){r.uniform2uiv(this.addr,e)}function Wd(r,e){r.uniform3uiv(this.addr,e)}function Xd(r,e){r.uniform4uiv(this.addr,e)}function jd(r,e,t){const i=this.cache,n=e.length,a=an(t,n);et(i,a)||(r.uniform1iv(this.addr,a),tt(i,a));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||mo,a[o])}function qd(r,e,t){const i=this.cache,n=e.length,a=an(t,n);et(i,a)||(r.uniform1iv(this.addr,a),tt(i,a));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||_o,a[o])}function Yd(r,e,t){const i=this.cache,n=e.length,a=an(t,n);et(i,a)||(r.uniform1iv(this.addr,a),tt(i,a));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||vo,a[o])}function Kd(r,e,t){const i=this.cache,n=e.length,a=an(t,n);et(i,a)||(r.uniform1iv(this.addr,a),tt(i,a));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||go,a[o])}function Zd(r){switch(r){case 5126:return Pd;case 35664:return Ud;case 35665:return Dd;case 35666:return Nd;case 35674:return Id;case 35675:return Od;case 35676:return Fd;case 5124:case 35670:return Bd;case 35667:case 35671:return zd;case 35668:case 35672:return Gd;case 35669:case 35673:return Hd;case 5125:return Vd;case 36294:return kd;case 36295:return Wd;case 36296:return Xd;case 35678:case 36198:case 36298:case 36306:case 35682:return jd;case 35679:case 36299:case 36307:return qd;case 35680:case 36300:case 36308:case 36293:return Yd;case 36289:case 36303:case 36311:case 36292:return Kd}}class Jd{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Cd(t.type)}}class $d{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Zd(t.type)}}class Qd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let a=0,o=n.length;a!==o;++a){const s=n[a];s.setValue(e,t[s.id],i)}}}const zn=/(\w+)(\])?(\[|\.)?/g;function bs(r,e){r.seq.push(e),r.map[e.id]=e}function ep(r,e,t){const i=r.name,n=i.length;for(zn.lastIndex=0;;){const a=zn.exec(i),o=zn.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===n){bs(t,c===void 0?new Jd(s,r,e):new $d(s,r,e));break}else{let u=t.map[s];u===void 0&&(u=new Qd(s),bs(t,u)),t=u}}}class Xr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const a=e.getActiveUniform(t,n),o=e.getUniformLocation(t,a.name);ep(a,o,this)}}setValue(e,t,i,n){const a=this.map[t];a!==void 0&&a.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let a=0,o=t.length;a!==o;++a){const s=t[a],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,a=e.length;n!==a;++n){const o=e[n];o.id in t&&i.push(o)}return i}}function As(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const tp=37297;let ip=0;function rp(r,e){const t=r.split(`
`),i=[],n=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=n;o<a;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return i.join(`
`)}function np(r){const e=Ve.getPrimaries(Ve.workingColorSpace),t=Ve.getPrimaries(r);let i;switch(e===t?i="":e===Kr&&t===Yr?i="LinearDisplayP3ToLinearSRGB":e===Yr&&t===Kr&&(i="LinearSRGBToLinearDisplayP3"),r){case Zt:case rn:return[i,"LinearTransferOETF"];case Qe:case Qn:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function ws(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+n+`

`+rp(r.getShaderSource(e),o)}else return n}function ap(r,e){const t=np(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function sp(r,e){let t;switch(e){case rl:t="Linear";break;case nl:t="Reinhard";break;case al:t="OptimizedCineon";break;case sl:t="ACESFilmic";break;case ol:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function op(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(cr).join(`
`)}function lp(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function cp(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const a=r.getActiveAttrib(e,n),o=a.name;let s=1;a.type===r.FLOAT_MAT2&&(s=2),a.type===r.FLOAT_MAT3&&(s=3),a.type===r.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:r.getAttribLocation(e,o),locationSize:s}}return t}function cr(r){return r!==""}function Rs(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ls(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const up=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zn(r){return r.replace(up,dp)}const hp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function dp(r,e){let t=Ue[e];if(t===void 0){const i=hp.get(e);if(i!==void 0)t=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Zn(t)}const pp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cs(r){return r.replace(pp,fp)}function fp(r,e,t,i){let n="";for(let a=parseInt(e);a<parseInt(t);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function Ps(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mp(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Vs?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Po?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===qt&&(e="SHADOWMAP_TYPE_VSM"),e}function gp(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ji:case $i:e="ENVMAP_TYPE_CUBE";break;case tn:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _p(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case $i:e="ENVMAP_MODE_REFRACTION";break}return e}function vp(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ks:e="ENVMAP_BLENDING_MULTIPLY";break;case tl:e="ENVMAP_BLENDING_MIX";break;case il:e="ENVMAP_BLENDING_ADD";break}return e}function xp(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Mp(r,e,t,i){const n=r.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=mp(t),c=gp(t),u=_p(t),p=vp(t),d=xp(t),m=t.isWebGL2?"":op(t),g=lp(a),v=n.createProgram();let f,h,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(cr).join(`
`),f.length>0&&(f+=`
`),h=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(cr).join(`
`),h.length>0&&(h+=`
`)):(f=[Ps(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),h=[m,Ps(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==li?"#define TONE_MAPPING":"",t.toneMapping!==li?Ue.tonemapping_pars_fragment:"",t.toneMapping!==li?sp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,ap("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cr).join(`
`)),o=Zn(o),o=Rs(o,t),o=Ls(o,t),s=Zn(s),s=Rs(s,t),s=Ls(s,t),o=Cs(o),s=Cs(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,h=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ka?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ka?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=w+f+o,R=w+h+s,b=As(n,n.VERTEX_SHADER,E),C=As(n,n.FRAGMENT_SHADER,R);n.attachShader(v,b),n.attachShader(v,C),t.index0AttributeName!==void 0?n.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function T(V){if(r.debug.checkShaderErrors){const W=n.getProgramInfoLog(v).trim(),Z=n.getShaderInfoLog(b).trim(),P=n.getShaderInfoLog(C).trim();let G=!0,q=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,v,b,C);else{const j=ws(n,b,"vertex"),re=ws(n,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Program Info Log: `+W+`
`+j+`
`+re)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(Z===""||P==="")&&(q=!1);q&&(V.diagnostics={runnable:G,programLog:W,vertexShader:{log:Z,prefix:f},fragmentShader:{log:P,prefix:h}})}n.deleteShader(b),n.deleteShader(C),H=new Xr(n,v),M=cp(n,v)}let H;this.getUniforms=function(){return H===void 0&&T(this),H};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=n.getProgramParameter(v,tp)),y},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ip++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=C,this}let Ep=0;class Sp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new yp(e),t.set(e,i)),i}}class yp{constructor(e){this.id=Ep++,this.code=e,this.usedTimes=0}}function Tp(r,e,t,i,n,a,o){const s=new no,l=new Sp,c=[],u=n.isWebGL2,p=n.logarithmicDepthBuffer,d=n.vertexTextures;let m=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return M===0?"uv":`uv${M}`}function f(M,y,V,W,Z){const P=W.fog,G=Z.geometry,q=M.isMeshStandardMaterial?W.environment:null,j=(M.isMeshStandardMaterial?t:e).get(M.envMap||q),re=j&&j.mapping===tn?j.image.height:null,K=g[M.type];M.precision!==null&&(m=n.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const J=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,U=J!==void 0?J.length:0;let X=0;G.morphAttributes.position!==void 0&&(X=1),G.morphAttributes.normal!==void 0&&(X=2),G.morphAttributes.color!==void 0&&(X=3);let se,de,xe,Se;if(K){const We=Bt[K];se=We.vertexShader,de=We.fragmentShader}else se=M.vertexShader,de=M.fragmentShader,l.update(M),xe=l.getVertexShaderID(M),Se=l.getFragmentShaderID(M);const Fe=r.getRenderTarget(),ye=Z.isInstancedMesh===!0,Re=!!M.map,je=!!M.matcap,Pe=!!j,I=!!M.aoMap,ot=!!M.lightMap,_e=!!M.bumpMap,Te=!!M.normalMap,be=!!M.displacementMap,Ye=!!M.emissiveMap,Ce=!!M.metalnessMap,Le=!!M.roughnessMap,He=M.anisotropy>0,Ke=M.clearcoat>0,it=M.iridescence>0,S=M.sheen>0,_=M.transmission>0,O=He&&!!M.anisotropyMap,ne=Ke&&!!M.clearcoatMap,$=Ke&&!!M.clearcoatNormalMap,te=Ke&&!!M.clearcoatRoughnessMap,fe=it&&!!M.iridescenceMap,ae=it&&!!M.iridescenceThicknessMap,ue=S&&!!M.sheenColorMap,A=S&&!!M.sheenRoughnessMap,ee=!!M.specularMap,Y=!!M.specularColorMap,Ae=!!M.specularIntensityMap,ve=_&&!!M.transmissionMap,me=_&&!!M.thicknessMap,ge=!!M.gradientMap,he=!!M.alphaMap,Be=M.alphaTest>0,L=!!M.alphaHash,oe=!!M.extensions,Q=!!G.attributes.uv1,k=!!G.attributes.uv2,ie=!!G.attributes.uv3;let pe=li;return M.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(pe=r.toneMapping),{isWebGL2:u,shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:se,fragmentShader:de,defines:M.defines,customVertexShaderID:xe,customFragmentShaderID:Se,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:ye,instancingColor:ye&&Z.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Fe===null?r.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:Zt,map:Re,matcap:je,envMap:Pe,envMapMode:Pe&&j.mapping,envMapCubeUVHeight:re,aoMap:I,lightMap:ot,bumpMap:_e,normalMap:Te,displacementMap:d&&be,emissiveMap:Ye,normalMapObjectSpace:Te&&M.normalMapType===Ml,normalMapTangentSpace:Te&&M.normalMapType===$s,metalnessMap:Ce,roughnessMap:Le,anisotropy:He,anisotropyMap:O,clearcoat:Ke,clearcoatMap:ne,clearcoatNormalMap:$,clearcoatRoughnessMap:te,iridescence:it,iridescenceMap:fe,iridescenceThicknessMap:ae,sheen:S,sheenColorMap:ue,sheenRoughnessMap:A,specularMap:ee,specularColorMap:Y,specularIntensityMap:Ae,transmission:_,transmissionMap:ve,thicknessMap:me,gradientMap:ge,opaque:M.transparent===!1&&M.blending===Ki,alphaMap:he,alphaTest:Be,alphaHash:L,combine:M.combine,mapUv:Re&&v(M.map.channel),aoMapUv:I&&v(M.aoMap.channel),lightMapUv:ot&&v(M.lightMap.channel),bumpMapUv:_e&&v(M.bumpMap.channel),normalMapUv:Te&&v(M.normalMap.channel),displacementMapUv:be&&v(M.displacementMap.channel),emissiveMapUv:Ye&&v(M.emissiveMap.channel),metalnessMapUv:Ce&&v(M.metalnessMap.channel),roughnessMapUv:Le&&v(M.roughnessMap.channel),anisotropyMapUv:O&&v(M.anisotropyMap.channel),clearcoatMapUv:ne&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:$&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:A&&v(M.sheenRoughnessMap.channel),specularMapUv:ee&&v(M.specularMap.channel),specularColorMapUv:Y&&v(M.specularColorMap.channel),specularIntensityMapUv:Ae&&v(M.specularIntensityMap.channel),transmissionMapUv:ve&&v(M.transmissionMap.channel),thicknessMapUv:me&&v(M.thicknessMap.channel),alphaMapUv:he&&v(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Te||He),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:Q,vertexUv2s:k,vertexUv3s:ie,pointsUvs:Z.isPoints===!0&&!!G.attributes.uv&&(Re||he),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:Z.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:X,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:pe,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Re&&M.map.isVideoTexture===!0&&Ve.getTransfer(M.map.colorSpace)===qe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Yt,flipSided:M.side===_t,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:oe&&M.extensions.derivatives===!0,extensionFragDepth:oe&&M.extensions.fragDepth===!0,extensionDrawBuffers:oe&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const V in M.defines)y.push(V),y.push(M.defines[V]);return M.isRawShaderMaterial===!1&&(w(y,M),E(y,M),y.push(r.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function w(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function E(M,y){s.disableAll(),y.isWebGL2&&s.enable(0),y.supportsVertexTextures&&s.enable(1),y.instancing&&s.enable(2),y.instancingColor&&s.enable(3),y.matcap&&s.enable(4),y.envMap&&s.enable(5),y.normalMapObjectSpace&&s.enable(6),y.normalMapTangentSpace&&s.enable(7),y.clearcoat&&s.enable(8),y.iridescence&&s.enable(9),y.alphaTest&&s.enable(10),y.vertexColors&&s.enable(11),y.vertexAlphas&&s.enable(12),y.vertexUv1s&&s.enable(13),y.vertexUv2s&&s.enable(14),y.vertexUv3s&&s.enable(15),y.vertexTangents&&s.enable(16),y.anisotropy&&s.enable(17),y.alphaHash&&s.enable(18),M.push(s.mask),s.disableAll(),y.fog&&s.enable(0),y.useFog&&s.enable(1),y.flatShading&&s.enable(2),y.logarithmicDepthBuffer&&s.enable(3),y.skinning&&s.enable(4),y.morphTargets&&s.enable(5),y.morphNormals&&s.enable(6),y.morphColors&&s.enable(7),y.premultipliedAlpha&&s.enable(8),y.shadowMapEnabled&&s.enable(9),y.useLegacyLights&&s.enable(10),y.doubleSided&&s.enable(11),y.flipSided&&s.enable(12),y.useDepthPacking&&s.enable(13),y.dithering&&s.enable(14),y.transmission&&s.enable(15),y.sheen&&s.enable(16),y.opaque&&s.enable(17),y.pointsUvs&&s.enable(18),y.decodeVideoTexture&&s.enable(19),M.push(s.mask)}function R(M){const y=g[M.type];let V;if(y){const W=Bt[y];V=lc.clone(W.uniforms)}else V=M.uniforms;return V}function b(M,y){let V;for(let W=0,Z=c.length;W<Z;W++){const P=c[W];if(P.cacheKey===y){V=P,++V.usedTimes;break}}return V===void 0&&(V=new Mp(r,y,M,a),c.push(V)),V}function C(M){if(--M.usedTimes===0){const y=c.indexOf(M);c[y]=c[c.length-1],c.pop(),M.destroy()}}function T(M){l.remove(M)}function H(){l.dispose()}return{getParameters:f,getProgramCacheKey:h,getUniforms:R,acquireProgram:b,releaseProgram:C,releaseShaderCache:T,programs:c,dispose:H}}function bp(){let r=new WeakMap;function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function t(a){r.delete(a)}function i(a,o,s){r.get(a)[o]=s}function n(){r=new WeakMap}return{get:e,remove:t,update:i,dispose:n}}function Ap(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Us(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ds(){const r=[];let e=0;const t=[],i=[],n=[];function a(){e=0,t.length=0,i.length=0,n.length=0}function o(p,d,m,g,v,f){let h=r[e];return h===void 0?(h={id:p.id,object:p,geometry:d,material:m,groupOrder:g,renderOrder:p.renderOrder,z:v,group:f},r[e]=h):(h.id=p.id,h.object=p,h.geometry=d,h.material=m,h.groupOrder=g,h.renderOrder=p.renderOrder,h.z=v,h.group=f),e++,h}function s(p,d,m,g,v,f){const h=o(p,d,m,g,v,f);m.transmission>0?i.push(h):m.transparent===!0?n.push(h):t.push(h)}function l(p,d,m,g,v,f){const h=o(p,d,m,g,v,f);m.transmission>0?i.unshift(h):m.transparent===!0?n.unshift(h):t.unshift(h)}function c(p,d){t.length>1&&t.sort(p||Ap),i.length>1&&i.sort(d||Us),n.length>1&&n.sort(d||Us)}function u(){for(let p=e,d=r.length;p<d;p++){const m=r[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:n,init:a,push:s,unshift:l,finish:u,sort:c}}function wp(){let r=new WeakMap;function e(i,n){const a=r.get(i);let o;return a===void 0?(o=new Ds,r.set(i,[o])):n>=a.length?(o=new Ds,a.push(o)):o=a[n],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Rp(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new ke};break;case"SpotLight":t={position:new N,direction:new N,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new N,halfWidth:new N,halfHeight:new N};break}return r[e.id]=t,t}}}function Lp(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Cp=0;function Pp(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Up(r,e){const t=new Rp,i=Lp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new N);const a=new N,o=new st,s=new st;function l(u,p){let d=0,m=0,g=0;for(let W=0;W<9;W++)n.probe[W].set(0,0,0);let v=0,f=0,h=0,w=0,E=0,R=0,b=0,C=0,T=0,H=0,M=0;u.sort(Pp);const y=p===!0?Math.PI:1;for(let W=0,Z=u.length;W<Z;W++){const P=u[W],G=P.color,q=P.intensity,j=P.distance,re=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=G.r*q*y,m+=G.g*q*y,g+=G.b*q*y;else if(P.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(P.sh.coefficients[K],q);M++}else if(P.isDirectionalLight){const K=t.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity*y),P.castShadow){const J=P.shadow,U=i.get(P);U.shadowBias=J.bias,U.shadowNormalBias=J.normalBias,U.shadowRadius=J.radius,U.shadowMapSize=J.mapSize,n.directionalShadow[v]=U,n.directionalShadowMap[v]=re,n.directionalShadowMatrix[v]=P.shadow.matrix,R++}n.directional[v]=K,v++}else if(P.isSpotLight){const K=t.get(P);K.position.setFromMatrixPosition(P.matrixWorld),K.color.copy(G).multiplyScalar(q*y),K.distance=j,K.coneCos=Math.cos(P.angle),K.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),K.decay=P.decay,n.spot[h]=K;const J=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,J.updateMatrices(P),P.castShadow&&H++),n.spotLightMatrix[h]=J.matrix,P.castShadow){const U=i.get(P);U.shadowBias=J.bias,U.shadowNormalBias=J.normalBias,U.shadowRadius=J.radius,U.shadowMapSize=J.mapSize,n.spotShadow[h]=U,n.spotShadowMap[h]=re,C++}h++}else if(P.isRectAreaLight){const K=t.get(P);K.color.copy(G).multiplyScalar(q),K.halfWidth.set(P.width*.5,0,0),K.halfHeight.set(0,P.height*.5,0),n.rectArea[w]=K,w++}else if(P.isPointLight){const K=t.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity*y),K.distance=P.distance,K.decay=P.decay,P.castShadow){const J=P.shadow,U=i.get(P);U.shadowBias=J.bias,U.shadowNormalBias=J.normalBias,U.shadowRadius=J.radius,U.shadowMapSize=J.mapSize,U.shadowCameraNear=J.camera.near,U.shadowCameraFar=J.camera.far,n.pointShadow[f]=U,n.pointShadowMap[f]=re,n.pointShadowMatrix[f]=P.shadow.matrix,b++}n.point[f]=K,f++}else if(P.isHemisphereLight){const K=t.get(P);K.skyColor.copy(P.color).multiplyScalar(q*y),K.groundColor.copy(P.groundColor).multiplyScalar(q*y),n.hemi[E]=K,E++}}w>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=m,n.ambient[2]=g;const V=n.hash;(V.directionalLength!==v||V.pointLength!==f||V.spotLength!==h||V.rectAreaLength!==w||V.hemiLength!==E||V.numDirectionalShadows!==R||V.numPointShadows!==b||V.numSpotShadows!==C||V.numSpotMaps!==T||V.numLightProbes!==M)&&(n.directional.length=v,n.spot.length=h,n.rectArea.length=w,n.point.length=f,n.hemi.length=E,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=C,n.spotShadowMap.length=C,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=C+T-H,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=H,n.numLightProbes=M,V.directionalLength=v,V.pointLength=f,V.spotLength=h,V.rectAreaLength=w,V.hemiLength=E,V.numDirectionalShadows=R,V.numPointShadows=b,V.numSpotShadows=C,V.numSpotMaps=T,V.numLightProbes=M,n.version=Cp++)}function c(u,p){let d=0,m=0,g=0,v=0,f=0;const h=p.matrixWorldInverse;for(let w=0,E=u.length;w<E;w++){const R=u[w];if(R.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(h),d++}else if(R.isSpotLight){const b=n.spot[g];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(h),b.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(h),g++}else if(R.isRectAreaLight){const b=n.rectArea[v];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(h),s.identity(),o.copy(R.matrixWorld),o.premultiply(h),s.extractRotation(o),b.halfWidth.set(R.width*.5,0,0),b.halfHeight.set(0,R.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),v++}else if(R.isPointLight){const b=n.point[m];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(h),m++}else if(R.isHemisphereLight){const b=n.hemi[f];b.direction.setFromMatrixPosition(R.matrixWorld),b.direction.transformDirection(h),f++}}}return{setup:l,setupView:c,state:n}}function Ns(r,e){const t=new Up(r,e),i=[],n=[];function a(){i.length=0,n.length=0}function o(u){i.push(u)}function s(u){n.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:a,state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function Dp(r,e){let t=new WeakMap;function i(a,o=0){const s=t.get(a);let l;return s===void 0?(l=new Ns(r,e),t.set(a,[l])):o>=s.length?(l=new Ns(r,e),s.push(l)):l=s[o],l}function n(){t=new WeakMap}return{get:i,dispose:n}}class Np extends vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ip extends vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Op=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Bp(r,e,t){let i=new po;const n=new De,a=new De,o=new at,s=new Np({depthPacking:xl}),l=new Ip,c={},u=t.maxTextureSize,p={[ui]:_t,[_t]:ui,[Yt]:Yt},d=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:Op,fragmentShader:Fp}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Jt;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ot(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vs;let h=this.type;this.render=function(b,C,T){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;const H=r.getRenderTarget(),M=r.getActiveCubeFace(),y=r.getActiveMipmapLevel(),V=r.state;V.setBlending(oi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const W=h!==qt&&this.type===qt,Z=h===qt&&this.type!==qt;for(let P=0,G=b.length;P<G;P++){const q=b[P],j=q.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;n.copy(j.mapSize);const re=j.getFrameExtents();if(n.multiply(re),a.copy(j.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(a.x=Math.floor(u/re.x),n.x=a.x*re.x,j.mapSize.x=a.x),n.y>u&&(a.y=Math.floor(u/re.y),n.y=a.y*re.y,j.mapSize.y=a.y)),j.map===null||W===!0||Z===!0){const J=this.type!==qt?{minFilter:gt,magFilter:gt}:{};j.map!==null&&j.map.dispose(),j.map=new Ti(n.x,n.y,J),j.map.texture.name=q.name+".shadowMap",j.camera.updateProjectionMatrix()}r.setRenderTarget(j.map),r.clear();const K=j.getViewportCount();for(let J=0;J<K;J++){const U=j.getViewport(J);o.set(a.x*U.x,a.y*U.y,a.x*U.z,a.y*U.w),V.viewport(o),j.updateMatrices(q,J),i=j.getFrustum(),R(C,T,j.camera,q,this.type)}j.isPointLightShadow!==!0&&this.type===qt&&w(j,T),j.needsUpdate=!1}h=this.type,f.needsUpdate=!1,r.setRenderTarget(H,M,y)};function w(b,C){const T=e.update(v);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ti(n.x,n.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(C,null,T,d,v,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(C,null,T,m,v,null)}function E(b,C,T,H){let M=null;const y=T.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(y!==void 0)M=y;else if(M=T.isPointLight===!0?l:s,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const V=M.uuid,W=C.uuid;let Z=c[V];Z===void 0&&(Z={},c[V]=Z);let P=Z[W];P===void 0&&(P=M.clone(),Z[W]=P),M=P}if(M.visible=C.visible,M.wireframe=C.wireframe,H===qt?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:p[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,T.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=r.properties.get(M);V.light=T}return M}function R(b,C,T,H,M){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===qt)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,b.matrixWorld);const V=e.update(b),W=b.material;if(Array.isArray(W)){const Z=V.groups;for(let P=0,G=Z.length;P<G;P++){const q=Z[P],j=W[q.materialIndex];if(j&&j.visible){const re=E(b,j,H,M);r.renderBufferDirect(T,null,V,re,b,q)}}}else if(W.visible){const Z=E(b,W,H,M);r.renderBufferDirect(T,null,V,Z,b,null)}}const y=b.children;for(let V=0,W=y.length;V<W;V++)R(y[V],C,T,H,M)}}function zp(r,e,t){const i=t.isWebGL2;function n(){let L=!1;const oe=new at;let Q=null;const k=new at(0,0,0,0);return{setMask:function(ie){Q!==ie&&!L&&(r.colorMask(ie,ie,ie,ie),Q=ie)},setLocked:function(ie){L=ie},setClear:function(ie,pe,We,nt,Tt){Tt===!0&&(ie*=nt,pe*=nt,We*=nt),oe.set(ie,pe,We,nt),k.equals(oe)===!1&&(r.clearColor(ie,pe,We,nt),k.copy(oe))},reset:function(){L=!1,Q=null,k.set(-1,0,0,0)}}}function a(){let L=!1,oe=null,Q=null,k=null;return{setTest:function(ie){ie?Re(r.DEPTH_TEST):je(r.DEPTH_TEST)},setMask:function(ie){oe!==ie&&!L&&(r.depthMask(ie),oe=ie)},setFunc:function(ie){if(Q!==ie){switch(ie){case Yo:r.depthFunc(r.NEVER);break;case Ko:r.depthFunc(r.ALWAYS);break;case Zo:r.depthFunc(r.LESS);break;case jr:r.depthFunc(r.LEQUAL);break;case Jo:r.depthFunc(r.EQUAL);break;case $o:r.depthFunc(r.GEQUAL);break;case Qo:r.depthFunc(r.GREATER);break;case el:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Q=ie}},setLocked:function(ie){L=ie},setClear:function(ie){k!==ie&&(r.clearDepth(ie),k=ie)},reset:function(){L=!1,oe=null,Q=null,k=null}}}function o(){let L=!1,oe=null,Q=null,k=null,ie=null,pe=null,We=null,nt=null,Tt=null;return{setTest:function(Xe){L||(Xe?Re(r.STENCIL_TEST):je(r.STENCIL_TEST))},setMask:function(Xe){oe!==Xe&&!L&&(r.stencilMask(Xe),oe=Xe)},setFunc:function(Xe,dt,Ft){(Q!==Xe||k!==dt||ie!==Ft)&&(r.stencilFunc(Xe,dt,Ft),Q=Xe,k=dt,ie=Ft)},setOp:function(Xe,dt,Ft){(pe!==Xe||We!==dt||nt!==Ft)&&(r.stencilOp(Xe,dt,Ft),pe=Xe,We=dt,nt=Ft)},setLocked:function(Xe){L=Xe},setClear:function(Xe){Tt!==Xe&&(r.clearStencil(Xe),Tt=Xe)},reset:function(){L=!1,oe=null,Q=null,k=null,ie=null,pe=null,We=null,nt=null,Tt=null}}}const s=new n,l=new a,c=new o,u=new WeakMap,p=new WeakMap;let d={},m={},g=new WeakMap,v=[],f=null,h=!1,w=null,E=null,R=null,b=null,C=null,T=null,H=null,M=new ke(0,0,0),y=0,V=!1,W=null,Z=null,P=null,G=null,q=null;const j=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,K=0;const J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(J)[1]),re=K>=1):J.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),re=K>=2);let U=null,X={};const se=r.getParameter(r.SCISSOR_BOX),de=r.getParameter(r.VIEWPORT),xe=new at().fromArray(se),Se=new at().fromArray(de);function Fe(L,oe,Q,k){const ie=new Uint8Array(4),pe=r.createTexture();r.bindTexture(L,pe),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let We=0;We<Q;We++)i&&(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)?r.texImage3D(oe,0,r.RGBA,1,1,k,0,r.RGBA,r.UNSIGNED_BYTE,ie):r.texImage2D(oe+We,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ie);return pe}const ye={};ye[r.TEXTURE_2D]=Fe(r.TEXTURE_2D,r.TEXTURE_2D,1),ye[r.TEXTURE_CUBE_MAP]=Fe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ye[r.TEXTURE_2D_ARRAY]=Fe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ye[r.TEXTURE_3D]=Fe(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Re(r.DEPTH_TEST),l.setFunc(jr),Ce(!1),Le(ma),Re(r.CULL_FACE),be(oi);function Re(L){d[L]!==!0&&(r.enable(L),d[L]=!0)}function je(L){d[L]!==!1&&(r.disable(L),d[L]=!1)}function Pe(L,oe){return m[L]!==oe?(r.bindFramebuffer(L,oe),m[L]=oe,i&&(L===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=oe),L===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=oe)),!0):!1}function I(L,oe){let Q=v,k=!1;if(L)if(Q=g.get(oe),Q===void 0&&(Q=[],g.set(oe,Q)),L.isWebGLMultipleRenderTargets){const ie=L.texture;if(Q.length!==ie.length||Q[0]!==r.COLOR_ATTACHMENT0){for(let pe=0,We=ie.length;pe<We;pe++)Q[pe]=r.COLOR_ATTACHMENT0+pe;Q.length=ie.length,k=!0}}else Q[0]!==r.COLOR_ATTACHMENT0&&(Q[0]=r.COLOR_ATTACHMENT0,k=!0);else Q[0]!==r.BACK&&(Q[0]=r.BACK,k=!0);k&&(t.isWebGL2?r.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function ot(L){return f!==L?(r.useProgram(L),f=L,!0):!1}const _e={[xi]:r.FUNC_ADD,[Do]:r.FUNC_SUBTRACT,[No]:r.FUNC_REVERSE_SUBTRACT};if(i)_e[xa]=r.MIN,_e[Ma]=r.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(_e[xa]=L.MIN_EXT,_e[Ma]=L.MAX_EXT)}const Te={[Io]:r.ZERO,[Oo]:r.ONE,[Fo]:r.SRC_COLOR,[Vn]:r.SRC_ALPHA,[ko]:r.SRC_ALPHA_SATURATE,[Ho]:r.DST_COLOR,[zo]:r.DST_ALPHA,[Bo]:r.ONE_MINUS_SRC_COLOR,[kn]:r.ONE_MINUS_SRC_ALPHA,[Vo]:r.ONE_MINUS_DST_COLOR,[Go]:r.ONE_MINUS_DST_ALPHA,[Wo]:r.CONSTANT_COLOR,[Xo]:r.ONE_MINUS_CONSTANT_COLOR,[jo]:r.CONSTANT_ALPHA,[qo]:r.ONE_MINUS_CONSTANT_ALPHA};function be(L,oe,Q,k,ie,pe,We,nt,Tt,Xe){if(L===oi){h===!0&&(je(r.BLEND),h=!1);return}if(h===!1&&(Re(r.BLEND),h=!0),L!==Uo){if(L!==w||Xe!==V){if((E!==xi||C!==xi)&&(r.blendEquation(r.FUNC_ADD),E=xi,C=xi),Xe)switch(L){case Ki:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ga:r.blendFunc(r.ONE,r.ONE);break;case _a:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case va:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ki:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ga:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case _a:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case va:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}R=null,b=null,T=null,H=null,M.set(0,0,0),y=0,w=L,V=Xe}return}ie=ie||oe,pe=pe||Q,We=We||k,(oe!==E||ie!==C)&&(r.blendEquationSeparate(_e[oe],_e[ie]),E=oe,C=ie),(Q!==R||k!==b||pe!==T||We!==H)&&(r.blendFuncSeparate(Te[Q],Te[k],Te[pe],Te[We]),R=Q,b=k,T=pe,H=We),(nt.equals(M)===!1||Tt!==y)&&(r.blendColor(nt.r,nt.g,nt.b,Tt),M.copy(nt),y=Tt),w=L,V=!1}function Ye(L,oe){L.side===Yt?je(r.CULL_FACE):Re(r.CULL_FACE);let Q=L.side===_t;oe&&(Q=!Q),Ce(Q),L.blending===Ki&&L.transparent===!1?be(oi):be(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),s.setMask(L.colorWrite);const k=L.stencilWrite;c.setTest(k),k&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ke(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Re(r.SAMPLE_ALPHA_TO_COVERAGE):je(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(L){W!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),W=L)}function Le(L){L!==Lo?(Re(r.CULL_FACE),L!==Z&&(L===ma?r.cullFace(r.BACK):L===Co?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):je(r.CULL_FACE),Z=L}function He(L){L!==P&&(re&&r.lineWidth(L),P=L)}function Ke(L,oe,Q){L?(Re(r.POLYGON_OFFSET_FILL),(G!==oe||q!==Q)&&(r.polygonOffset(oe,Q),G=oe,q=Q)):je(r.POLYGON_OFFSET_FILL)}function it(L){L?Re(r.SCISSOR_TEST):je(r.SCISSOR_TEST)}function S(L){L===void 0&&(L=r.TEXTURE0+j-1),U!==L&&(r.activeTexture(L),U=L)}function _(L,oe,Q){Q===void 0&&(U===null?Q=r.TEXTURE0+j-1:Q=U);let k=X[Q];k===void 0&&(k={type:void 0,texture:void 0},X[Q]=k),(k.type!==L||k.texture!==oe)&&(U!==Q&&(r.activeTexture(Q),U=Q),r.bindTexture(L,oe||ye[L]),k.type=L,k.texture=oe)}function O(){const L=X[U];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ne(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function A(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(L){xe.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),xe.copy(L))}function me(L){Se.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),Se.copy(L))}function ge(L,oe){let Q=p.get(oe);Q===void 0&&(Q=new WeakMap,p.set(oe,Q));let k=Q.get(L);k===void 0&&(k=r.getUniformBlockIndex(oe,L.name),Q.set(L,k))}function he(L,oe){const Q=p.get(oe).get(L);u.get(oe)!==Q&&(r.uniformBlockBinding(oe,Q,L.__bindingPointIndex),u.set(oe,Q))}function Be(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},U=null,X={},m={},g=new WeakMap,v=[],f=null,h=!1,w=null,E=null,R=null,b=null,C=null,T=null,H=null,M=new ke(0,0,0),y=0,V=!1,W=null,Z=null,P=null,G=null,q=null,xe.set(0,0,r.canvas.width,r.canvas.height),Se.set(0,0,r.canvas.width,r.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:Re,disable:je,bindFramebuffer:Pe,drawBuffers:I,useProgram:ot,setBlending:be,setMaterial:Ye,setFlipSided:Ce,setCullFace:Le,setLineWidth:He,setPolygonOffset:Ke,setScissorTest:it,activeTexture:S,bindTexture:_,unbindTexture:O,compressedTexImage2D:ne,compressedTexImage3D:$,texImage2D:Y,texImage3D:Ae,updateUBOMapping:ge,uniformBlockBinding:he,texStorage2D:A,texStorage3D:ee,texSubImage2D:te,texSubImage3D:fe,compressedTexSubImage2D:ae,compressedTexSubImage3D:ue,scissor:ve,viewport:me,reset:Be}}function Gp(r,e,t,i,n,a,o){const s=n.isWebGL2,l=n.maxTextures,c=n.maxCubemapSize,u=n.maxTextureSize,p=n.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let v;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(S,_){return h?new OffscreenCanvas(S,_):gr("canvas")}function E(S,_,O,ne){let $=1;if((S.width>ne||S.height>ne)&&($=ne/Math.max(S.width,S.height)),$<1||_===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const te=_?Jr:Math.floor,fe=te($*S.width),ae=te($*S.height);v===void 0&&(v=w(fe,ae));const ue=O?w(fe,ae):v;return ue.width=fe,ue.height=ae,ue.getContext("2d").drawImage(S,0,0,fe,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+fe+"x"+ae+")."),ue}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function R(S){return Kn(S.width)&&Kn(S.height)}function b(S){return s?!1:S.wrapS!==Nt||S.wrapT!==Nt||S.minFilter!==gt&&S.minFilter!==wt}function C(S,_){return S.generateMipmaps&&_&&S.minFilter!==gt&&S.minFilter!==wt}function T(S){r.generateMipmap(S)}function H(S,_,O,ne,$=!1){if(s===!1)return _;if(S!==null){if(r[S]!==void 0)return r[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let te=_;if(_===r.RED&&(O===r.FLOAT&&(te=r.R32F),O===r.HALF_FLOAT&&(te=r.R16F),O===r.UNSIGNED_BYTE&&(te=r.R8)),_===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(te=r.R8UI),O===r.UNSIGNED_SHORT&&(te=r.R16UI),O===r.UNSIGNED_INT&&(te=r.R32UI),O===r.BYTE&&(te=r.R8I),O===r.SHORT&&(te=r.R16I),O===r.INT&&(te=r.R32I)),_===r.RG&&(O===r.FLOAT&&(te=r.RG32F),O===r.HALF_FLOAT&&(te=r.RG16F),O===r.UNSIGNED_BYTE&&(te=r.RG8)),_===r.RGBA){const fe=$?qr:Ve.getTransfer(ne);O===r.FLOAT&&(te=r.RGBA32F),O===r.HALF_FLOAT&&(te=r.RGBA16F),O===r.UNSIGNED_BYTE&&(te=fe===qe?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(te=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(te=r.RGB5_A1)}return(te===r.R16F||te===r.R32F||te===r.RG16F||te===r.RG32F||te===r.RGBA16F||te===r.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function M(S,_,O){return C(S,O)===!0||S.isFramebufferTexture&&S.minFilter!==gt&&S.minFilter!==wt?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function y(S){return S===gt||S===Ea||S===dn?r.NEAREST:r.LINEAR}function V(S){const _=S.target;_.removeEventListener("dispose",V),Z(_),_.isVideoTexture&&g.delete(_)}function W(S){const _=S.target;_.removeEventListener("dispose",W),G(_)}function Z(S){const _=i.get(S);if(_.__webglInit===void 0)return;const O=S.source,ne=f.get(O);if(ne){const $=ne[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&P(S),Object.keys(ne).length===0&&f.delete(O)}i.remove(S)}function P(S){const _=i.get(S);r.deleteTexture(_.__webglTexture);const O=S.source,ne=f.get(O);delete ne[_.__cacheKey],o.memory.textures--}function G(S){const _=S.texture,O=i.get(S),ne=i.get(_);if(ne.__webglTexture!==void 0&&(r.deleteTexture(ne.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(O.__webglFramebuffer[$]))for(let te=0;te<O.__webglFramebuffer[$].length;te++)r.deleteFramebuffer(O.__webglFramebuffer[$][te]);else r.deleteFramebuffer(O.__webglFramebuffer[$]);O.__webglDepthbuffer&&r.deleteRenderbuffer(O.__webglDepthbuffer[$])}else{if(Array.isArray(O.__webglFramebuffer))for(let $=0;$<O.__webglFramebuffer.length;$++)r.deleteFramebuffer(O.__webglFramebuffer[$]);else r.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&r.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&r.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let $=0;$<O.__webglColorRenderbuffer.length;$++)O.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(O.__webglColorRenderbuffer[$]);O.__webglDepthRenderbuffer&&r.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let $=0,te=_.length;$<te;$++){const fe=i.get(_[$]);fe.__webglTexture&&(r.deleteTexture(fe.__webglTexture),o.memory.textures--),i.remove(_[$])}i.remove(_),i.remove(S)}let q=0;function j(){q=0}function re(){const S=q;return S>=l&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+l),q+=1,S}function K(S){const _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function J(S,_){const O=i.get(S);if(S.isVideoTexture&&Ke(S),S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){const ne=S.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(O,S,_);return}}t.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+_)}function U(S,_){const O=i.get(S);if(S.version>0&&O.__version!==S.version){Re(O,S,_);return}t.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+_)}function X(S,_){const O=i.get(S);if(S.version>0&&O.__version!==S.version){Re(O,S,_);return}t.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+_)}function se(S,_){const O=i.get(S);if(S.version>0&&O.__version!==S.version){je(O,S,_);return}t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+_)}const de={[jn]:r.REPEAT,[Nt]:r.CLAMP_TO_EDGE,[qn]:r.MIRRORED_REPEAT},xe={[gt]:r.NEAREST,[Ea]:r.NEAREST_MIPMAP_NEAREST,[dn]:r.NEAREST_MIPMAP_LINEAR,[wt]:r.LINEAR,[ll]:r.LINEAR_MIPMAP_NEAREST,[pr]:r.LINEAR_MIPMAP_LINEAR},Se={[El]:r.NEVER,[Rl]:r.ALWAYS,[Sl]:r.LESS,[Tl]:r.LEQUAL,[yl]:r.EQUAL,[wl]:r.GEQUAL,[bl]:r.GREATER,[Al]:r.NOTEQUAL};function Fe(S,_,O){if(O?(r.texParameteri(S,r.TEXTURE_WRAP_S,de[_.wrapS]),r.texParameteri(S,r.TEXTURE_WRAP_T,de[_.wrapT]),(S===r.TEXTURE_3D||S===r.TEXTURE_2D_ARRAY)&&r.texParameteri(S,r.TEXTURE_WRAP_R,de[_.wrapR]),r.texParameteri(S,r.TEXTURE_MAG_FILTER,xe[_.magFilter]),r.texParameteri(S,r.TEXTURE_MIN_FILTER,xe[_.minFilter])):(r.texParameteri(S,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(S,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(S===r.TEXTURE_3D||S===r.TEXTURE_2D_ARRAY)&&r.texParameteri(S,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(_.wrapS!==Nt||_.wrapT!==Nt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(S,r.TEXTURE_MAG_FILTER,y(_.magFilter)),r.texParameteri(S,r.TEXTURE_MIN_FILTER,y(_.minFilter)),_.minFilter!==gt&&_.minFilter!==wt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(r.texParameteri(S,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(S,r.TEXTURE_COMPARE_FUNC,Se[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===gt||_.minFilter!==dn&&_.minFilter!==pr||_.type===si&&e.has("OES_texture_float_linear")===!1||s===!1&&_.type===fr&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||i.get(_).__currentAnisotropy)&&(r.texParameterf(S,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,n.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy)}}function ye(S,_){let O=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",V));const ne=_.source;let $=f.get(ne);$===void 0&&($={},f.set(ne,$));const te=K(_);if(te!==S.__cacheKey){$[te]===void 0&&($[te]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,O=!0),$[te].usedTimes++;const fe=$[S.__cacheKey];fe!==void 0&&($[S.__cacheKey].usedTimes--,fe.usedTimes===0&&P(_)),S.__cacheKey=te,S.__webglTexture=$[te].texture}return O}function Re(S,_,O){let ne=r.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ne=r.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ne=r.TEXTURE_3D);const $=ye(S,_),te=_.source;t.bindTexture(ne,S.__webglTexture,r.TEXTURE0+O);const fe=i.get(te);if(te.version!==fe.__version||$===!0){t.activeTexture(r.TEXTURE0+O);const ae=Ve.getPrimaries(Ve.workingColorSpace),ue=_.colorSpace===Lt?null:Ve.getPrimaries(_.colorSpace),A=_.colorSpace===Lt||ae===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,_.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,_.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,A);const ee=b(_)&&R(_.image)===!1;let Y=E(_.image,ee,!1,u);Y=it(_,Y);const Ae=R(Y)||s,ve=a.convert(_.format,_.colorSpace);let me=a.convert(_.type),ge=H(_.internalFormat,ve,me,_.colorSpace,_.isVideoTexture);Fe(ne,_,Ae);let he;const Be=_.mipmaps,L=s&&_.isVideoTexture!==!0,oe=fe.__version===void 0||$===!0,Q=M(_,Y,Ae);if(_.isDepthTexture)ge=r.DEPTH_COMPONENT,s?_.type===si?ge=r.DEPTH_COMPONENT32F:_.type===ai?ge=r.DEPTH_COMPONENT24:_.type===Ei?ge=r.DEPTH24_STENCIL8:ge=r.DEPTH_COMPONENT16:_.type===si&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===Si&&ge===r.DEPTH_COMPONENT&&_.type!==$n&&_.type!==ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=ai,me=a.convert(_.type)),_.format===Qi&&ge===r.DEPTH_COMPONENT&&(ge=r.DEPTH_STENCIL,_.type!==Ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Ei,me=a.convert(_.type))),oe&&(L?t.texStorage2D(r.TEXTURE_2D,1,ge,Y.width,Y.height):t.texImage2D(r.TEXTURE_2D,0,ge,Y.width,Y.height,0,ve,me,null));else if(_.isDataTexture)if(Be.length>0&&Ae){L&&oe&&t.texStorage2D(r.TEXTURE_2D,Q,ge,Be[0].width,Be[0].height);for(let k=0,ie=Be.length;k<ie;k++)he=Be[k],L?t.texSubImage2D(r.TEXTURE_2D,k,0,0,he.width,he.height,ve,me,he.data):t.texImage2D(r.TEXTURE_2D,k,ge,he.width,he.height,0,ve,me,he.data);_.generateMipmaps=!1}else L?(oe&&t.texStorage2D(r.TEXTURE_2D,Q,ge,Y.width,Y.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Y.width,Y.height,ve,me,Y.data)):t.texImage2D(r.TEXTURE_2D,0,ge,Y.width,Y.height,0,ve,me,Y.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){L&&oe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Q,ge,Be[0].width,Be[0].height,Y.depth);for(let k=0,ie=Be.length;k<ie;k++)he=Be[k],_.format!==It?ve!==null?L?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,k,0,0,0,he.width,he.height,Y.depth,ve,he.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,k,ge,he.width,he.height,Y.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?t.texSubImage3D(r.TEXTURE_2D_ARRAY,k,0,0,0,he.width,he.height,Y.depth,ve,me,he.data):t.texImage3D(r.TEXTURE_2D_ARRAY,k,ge,he.width,he.height,Y.depth,0,ve,me,he.data)}else{L&&oe&&t.texStorage2D(r.TEXTURE_2D,Q,ge,Be[0].width,Be[0].height);for(let k=0,ie=Be.length;k<ie;k++)he=Be[k],_.format!==It?ve!==null?L?t.compressedTexSubImage2D(r.TEXTURE_2D,k,0,0,he.width,he.height,ve,he.data):t.compressedTexImage2D(r.TEXTURE_2D,k,ge,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?t.texSubImage2D(r.TEXTURE_2D,k,0,0,he.width,he.height,ve,me,he.data):t.texImage2D(r.TEXTURE_2D,k,ge,he.width,he.height,0,ve,me,he.data)}else if(_.isDataArrayTexture)L?(oe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Q,ge,Y.width,Y.height,Y.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,ve,me,Y.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,ge,Y.width,Y.height,Y.depth,0,ve,me,Y.data);else if(_.isData3DTexture)L?(oe&&t.texStorage3D(r.TEXTURE_3D,Q,ge,Y.width,Y.height,Y.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,ve,me,Y.data)):t.texImage3D(r.TEXTURE_3D,0,ge,Y.width,Y.height,Y.depth,0,ve,me,Y.data);else if(_.isFramebufferTexture){if(oe)if(L)t.texStorage2D(r.TEXTURE_2D,Q,ge,Y.width,Y.height);else{let k=Y.width,ie=Y.height;for(let pe=0;pe<Q;pe++)t.texImage2D(r.TEXTURE_2D,pe,ge,k,ie,0,ve,me,null),k>>=1,ie>>=1}}else if(Be.length>0&&Ae){L&&oe&&t.texStorage2D(r.TEXTURE_2D,Q,ge,Be[0].width,Be[0].height);for(let k=0,ie=Be.length;k<ie;k++)he=Be[k],L?t.texSubImage2D(r.TEXTURE_2D,k,0,0,ve,me,he):t.texImage2D(r.TEXTURE_2D,k,ge,ve,me,he);_.generateMipmaps=!1}else L?(oe&&t.texStorage2D(r.TEXTURE_2D,Q,ge,Y.width,Y.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,ve,me,Y)):t.texImage2D(r.TEXTURE_2D,0,ge,ve,me,Y);C(_,Ae)&&T(ne),fe.__version=te.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function je(S,_,O){if(_.image.length!==6)return;const ne=ye(S,_),$=_.source;t.bindTexture(r.TEXTURE_CUBE_MAP,S.__webglTexture,r.TEXTURE0+O);const te=i.get($);if($.version!==te.__version||ne===!0){t.activeTexture(r.TEXTURE0+O);const fe=Ve.getPrimaries(Ve.workingColorSpace),ae=_.colorSpace===Lt?null:Ve.getPrimaries(_.colorSpace),ue=_.colorSpace===Lt||fe===ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,_.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,_.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const A=_.isCompressedTexture||_.image[0].isCompressedTexture,ee=_.image[0]&&_.image[0].isDataTexture,Y=[];for(let k=0;k<6;k++)!A&&!ee?Y[k]=E(_.image[k],!1,!0,c):Y[k]=ee?_.image[k].image:_.image[k],Y[k]=it(_,Y[k]);const Ae=Y[0],ve=R(Ae)||s,me=a.convert(_.format,_.colorSpace),ge=a.convert(_.type),he=H(_.internalFormat,me,ge,_.colorSpace),Be=s&&_.isVideoTexture!==!0,L=te.__version===void 0||ne===!0;let oe=M(_,Ae,ve);Fe(r.TEXTURE_CUBE_MAP,_,ve);let Q;if(A){Be&&L&&t.texStorage2D(r.TEXTURE_CUBE_MAP,oe,he,Ae.width,Ae.height);for(let k=0;k<6;k++){Q=Y[k].mipmaps;for(let ie=0;ie<Q.length;ie++){const pe=Q[ie];_.format!==It?me!==null?Be?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,ie,0,0,pe.width,pe.height,me,pe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,ie,he,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,ie,0,0,pe.width,pe.height,me,ge,pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,ie,he,pe.width,pe.height,0,me,ge,pe.data)}}}else{Q=_.mipmaps,Be&&L&&(Q.length>0&&oe++,t.texStorage2D(r.TEXTURE_CUBE_MAP,oe,he,Y[0].width,Y[0].height));for(let k=0;k<6;k++)if(ee){Be?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,Y[k].width,Y[k].height,me,ge,Y[k].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,he,Y[k].width,Y[k].height,0,me,ge,Y[k].data);for(let ie=0;ie<Q.length;ie++){const pe=Q[ie].image[k].image;Be?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,ie+1,0,0,pe.width,pe.height,me,ge,pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,ie+1,he,pe.width,pe.height,0,me,ge,pe.data)}}else{Be?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,me,ge,Y[k]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,he,me,ge,Y[k]);for(let ie=0;ie<Q.length;ie++){const pe=Q[ie];Be?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,ie+1,0,0,me,ge,pe.image[k]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,ie+1,he,me,ge,pe.image[k])}}}C(_,ve)&&T(r.TEXTURE_CUBE_MAP),te.__version=$.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function Pe(S,_,O,ne,$,te){const fe=a.convert(O.format,O.colorSpace),ae=a.convert(O.type),ue=H(O.internalFormat,fe,ae,O.colorSpace);if(!i.get(_).__hasExternalTextures){const A=Math.max(1,_.width>>te),ee=Math.max(1,_.height>>te);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?t.texImage3D($,te,ue,A,ee,_.depth,0,fe,ae,null):t.texImage2D($,te,ue,A,ee,0,fe,ae,null)}t.bindFramebuffer(r.FRAMEBUFFER,S),He(_)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ne,$,i.get(O).__webglTexture,0,Le(_)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ne,$,i.get(O).__webglTexture,te),t.bindFramebuffer(r.FRAMEBUFFER,null)}function I(S,_,O){if(r.bindRenderbuffer(r.RENDERBUFFER,S),_.depthBuffer&&!_.stencilBuffer){let ne=s===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(O||He(_)){const $=_.depthTexture;$&&$.isDepthTexture&&($.type===si?ne=r.DEPTH_COMPONENT32F:$.type===ai&&(ne=r.DEPTH_COMPONENT24));const te=Le(_);He(_)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,te,ne,_.width,_.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,te,ne,_.width,_.height)}else r.renderbufferStorage(r.RENDERBUFFER,ne,_.width,_.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,S)}else if(_.depthBuffer&&_.stencilBuffer){const ne=Le(_);O&&He(_)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,r.DEPTH24_STENCIL8,_.width,_.height):He(_)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ne,r.DEPTH24_STENCIL8,_.width,_.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,_.width,_.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,S)}else{const ne=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let $=0;$<ne.length;$++){const te=ne[$],fe=a.convert(te.format,te.colorSpace),ae=a.convert(te.type),ue=H(te.internalFormat,fe,ae,te.colorSpace),A=Le(_);O&&He(_)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,A,ue,_.width,_.height):He(_)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,A,ue,_.width,_.height):r.renderbufferStorage(r.RENDERBUFFER,ue,_.width,_.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ot(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),J(_.depthTexture,0);const O=i.get(_.depthTexture).__webglTexture,ne=Le(_);if(_.depthTexture.format===Si)He(_)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,O,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,O,0);else if(_.depthTexture.format===Qi)He(_)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,O,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,O,0);else throw new Error("Unknown depthTexture format")}function _e(S){const _=i.get(S),O=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ot(_.__webglFramebuffer,S)}else if(O){_.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(r.FRAMEBUFFER,_.__webglFramebuffer[ne]),_.__webglDepthbuffer[ne]=r.createRenderbuffer(),I(_.__webglDepthbuffer[ne],S,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=r.createRenderbuffer(),I(_.__webglDepthbuffer,S,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Te(S,_,O){const ne=i.get(S);_!==void 0&&Pe(ne.__webglFramebuffer,S,S.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&_e(S)}function be(S){const _=S.texture,O=i.get(S),ne=i.get(_);S.addEventListener("dispose",W),S.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture()),ne.__version=_.version,o.memory.textures++);const $=S.isWebGLCubeRenderTarget===!0,te=S.isWebGLMultipleRenderTargets===!0,fe=R(S)||s;if($){O.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(s&&_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[ae]=[];for(let ue=0;ue<_.mipmaps.length;ue++)O.__webglFramebuffer[ae][ue]=r.createFramebuffer()}else O.__webglFramebuffer[ae]=r.createFramebuffer()}else{if(s&&_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let ae=0;ae<_.mipmaps.length;ae++)O.__webglFramebuffer[ae]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(te)if(n.drawBuffers){const ae=S.texture;for(let ue=0,A=ae.length;ue<A;ue++){const ee=i.get(ae[ue]);ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&S.samples>0&&He(S)===!1){const ae=te?_:[_];O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ue=0;ue<ae.length;ue++){const A=ae[ue];O.__webglColorRenderbuffer[ue]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[ue]);const ee=a.convert(A.format,A.colorSpace),Y=a.convert(A.type),Ae=H(A.internalFormat,ee,Y,A.colorSpace,S.isXRRenderTarget===!0),ve=Le(S);r.renderbufferStorageMultisample(r.RENDERBUFFER,ve,Ae,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,O.__webglColorRenderbuffer[ue])}r.bindRenderbuffer(r.RENDERBUFFER,null),S.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),I(O.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){t.bindTexture(r.TEXTURE_CUBE_MAP,ne.__webglTexture),Fe(r.TEXTURE_CUBE_MAP,_,fe);for(let ae=0;ae<6;ae++)if(s&&_.mipmaps&&_.mipmaps.length>0)for(let ue=0;ue<_.mipmaps.length;ue++)Pe(O.__webglFramebuffer[ae][ue],S,_,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ue);else Pe(O.__webglFramebuffer[ae],S,_,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);C(_,fe)&&T(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const ae=S.texture;for(let ue=0,A=ae.length;ue<A;ue++){const ee=ae[ue],Y=i.get(ee);t.bindTexture(r.TEXTURE_2D,Y.__webglTexture),Fe(r.TEXTURE_2D,ee,fe),Pe(O.__webglFramebuffer,S,ee,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,0),C(ee,fe)&&T(r.TEXTURE_2D)}t.unbindTexture()}else{let ae=r.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(s?ae=S.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,ne.__webglTexture),Fe(ae,_,fe),s&&_.mipmaps&&_.mipmaps.length>0)for(let ue=0;ue<_.mipmaps.length;ue++)Pe(O.__webglFramebuffer[ue],S,_,r.COLOR_ATTACHMENT0,ae,ue);else Pe(O.__webglFramebuffer,S,_,r.COLOR_ATTACHMENT0,ae,0);C(_,fe)&&T(ae),t.unbindTexture()}S.depthBuffer&&_e(S)}function Ye(S){const _=R(S)||s,O=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ne=0,$=O.length;ne<$;ne++){const te=O[ne];if(C(te,_)){const fe=S.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ae=i.get(te).__webglTexture;t.bindTexture(fe,ae),T(fe),t.unbindTexture()}}}function Ce(S){if(s&&S.samples>0&&He(S)===!1){const _=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],O=S.width,ne=S.height;let $=r.COLOR_BUFFER_BIT;const te=[],fe=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=i.get(S),ue=S.isWebGLMultipleRenderTargets===!0;if(ue)for(let A=0;A<_.length;A++)t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+A,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+A,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let A=0;A<_.length;A++){te.push(r.COLOR_ATTACHMENT0+A),S.depthBuffer&&te.push(fe);const ee=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(ee===!1&&(S.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),S.stencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),ue&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ae.__webglColorRenderbuffer[A]),ee===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[fe]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[fe])),ue){const Y=i.get(_[A]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Y,0)}r.blitFramebuffer(0,0,O,ne,0,0,O,ne,$,r.NEAREST),m&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ue)for(let A=0;A<_.length;A++){t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+A,r.RENDERBUFFER,ae.__webglColorRenderbuffer[A]);const ee=i.get(_[A]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+A,r.TEXTURE_2D,ee,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function Le(S){return Math.min(p,S.samples)}function He(S){const _=i.get(S);return s&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ke(S){const _=o.render.frame;g.get(S)!==_&&(g.set(S,_),S.update())}function it(S,_){const O=S.colorSpace,ne=S.format,$=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Yn||O!==Zt&&O!==Lt&&(Ve.getTransfer(O)===qe?s===!1?e.has("EXT_sRGB")===!0&&ne===It?(S.format=Yn,S.minFilter=wt,S.generateMipmaps=!1):_=eo.sRGBToLinear(_):(ne!==It||$!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}this.allocateTextureUnit=re,this.resetTextureUnits=j,this.setTexture2D=J,this.setTexture2DArray=U,this.setTexture3D=X,this.setTextureCube=se,this.rebindTextures=Te,this.setupRenderTarget=be,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=He}function Hp(r,e,t){const i=t.isWebGL2;function n(a,o=Lt){let s;const l=Ve.getTransfer(o);if(a===ci)return r.UNSIGNED_BYTE;if(a===js)return r.UNSIGNED_SHORT_4_4_4_4;if(a===qs)return r.UNSIGNED_SHORT_5_5_5_1;if(a===cl)return r.BYTE;if(a===ul)return r.SHORT;if(a===$n)return r.UNSIGNED_SHORT;if(a===Xs)return r.INT;if(a===ai)return r.UNSIGNED_INT;if(a===si)return r.FLOAT;if(a===fr)return i?r.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===hl)return r.ALPHA;if(a===It)return r.RGBA;if(a===dl)return r.LUMINANCE;if(a===pl)return r.LUMINANCE_ALPHA;if(a===Si)return r.DEPTH_COMPONENT;if(a===Qi)return r.DEPTH_STENCIL;if(a===Yn)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===fl)return r.RED;if(a===Ys)return r.RED_INTEGER;if(a===ml)return r.RG;if(a===Ks)return r.RG_INTEGER;if(a===Zs)return r.RGBA_INTEGER;if(a===pn||a===fn||a===mn||a===gn)if(l===qe)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===pn)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===fn)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===mn)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===gn)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===pn)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===fn)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===mn)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===gn)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Sa||a===ya||a===Ta||a===ba)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===Sa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===ya)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Ta)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===ba)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===gl)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Aa||a===wa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===Aa)return l===qe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===wa)return l===qe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Ra||a===La||a===Ca||a===Pa||a===Ua||a===Da||a===Na||a===Ia||a===Oa||a===Fa||a===Ba||a===za||a===Ga||a===Ha)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===Ra)return l===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===La)return l===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Ca)return l===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Pa)return l===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Ua)return l===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Da)return l===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Na)return l===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Ia)return l===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Oa)return l===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Fa)return l===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Ba)return l===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===za)return l===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Ga)return l===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Ha)return l===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===_n||a===Va||a===ka)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===_n)return l===qe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Va)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===ka)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===_l||a===Wa||a===Xa||a===ja)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===_n)return s.COMPRESSED_RED_RGTC1_EXT;if(a===Wa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Xa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===ja)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ei?i?r.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):r[a]!==void 0?r[a]:null}return{convert:n}}class Vp extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class kr extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kp={type:"move"};class Gn{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const f=t.getJointPose(v,i),h=this._getHandJoint(c,v);f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=f.radius),h.visible=f!==null}const u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=u.position.distanceTo(p.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(s.matrix.fromArray(n.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,n.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(n.linearVelocity)):s.hasLinearVelocity=!1,n.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(n.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(kp)))}return s!==null&&(s.visible=n!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new kr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Wp extends vt{constructor(e,t,i,n,a,o,s,l,c,u){if(u=u!==void 0?u:Si,u!==Si&&u!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Si&&(i=ai),i===void 0&&u===Qi&&(i=Ei),super(null,n,a,o,s,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:gt,this.minFilter=l!==void 0?l:gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Xp extends Ri{constructor(e,t){super();const i=this;let n=null,a=1,o=null,s="local-floor",l=1,c=null,u=null,p=null,d=null,m=null,g=null;const v=t.getContextAttributes();let f=null,h=null;const w=[],E=[],R=new Rt;R.layers.enable(1),R.viewport=new at;const b=new Rt;b.layers.enable(2),b.viewport=new at;const C=[R,b],T=new Vp;T.layers.enable(1),T.layers.enable(2);let H=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let X=w[U];return X===void 0&&(X=new Gn,w[U]=X),X.getTargetRaySpace()},this.getControllerGrip=function(U){let X=w[U];return X===void 0&&(X=new Gn,w[U]=X),X.getGripSpace()},this.getHand=function(U){let X=w[U];return X===void 0&&(X=new Gn,w[U]=X),X.getHandSpace()};function y(U){const X=E.indexOf(U.inputSource);if(X===-1)return;const se=w[X];se!==void 0&&(se.update(U.inputSource,U.frame,c||o),se.dispatchEvent({type:U.type,data:U.inputSource}))}function V(){n.removeEventListener("select",y),n.removeEventListener("selectstart",y),n.removeEventListener("selectend",y),n.removeEventListener("squeeze",y),n.removeEventListener("squeezestart",y),n.removeEventListener("squeezeend",y),n.removeEventListener("end",V),n.removeEventListener("inputsourceschange",W);for(let U=0;U<w.length;U++){const X=E[U];X!==null&&(E[U]=null,w[U].disconnect(X))}H=null,M=null,e.setRenderTarget(f),m=null,d=null,p=null,n=null,h=null,J.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){a=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){s=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(U){if(n=U,n!==null){if(f=e.getRenderTarget(),n.addEventListener("select",y),n.addEventListener("selectstart",y),n.addEventListener("selectend",y),n.addEventListener("squeeze",y),n.addEventListener("squeezestart",y),n.addEventListener("squeezeend",y),n.addEventListener("end",V),n.addEventListener("inputsourceschange",W),v.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const X={antialias:n.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(n,t,X),n.updateRenderState({baseLayer:m}),h=new Ti(m.framebufferWidth,m.framebufferHeight,{format:It,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let X=null,se=null,de=null;v.depth&&(de=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=v.stencil?Qi:Si,se=v.stencil?Ei:ai);const xe={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:a};p=new XRWebGLBinding(n,t),d=p.createProjectionLayer(xe),n.updateRenderState({layers:[d]}),h=new Ti(d.textureWidth,d.textureHeight,{format:It,type:ci,depthTexture:new Wp(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Se=e.properties.get(h);Se.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(s),J.setContext(n),J.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function W(U){for(let X=0;X<U.removed.length;X++){const se=U.removed[X],de=E.indexOf(se);de>=0&&(E[de]=null,w[de].disconnect(se))}for(let X=0;X<U.added.length;X++){const se=U.added[X];let de=E.indexOf(se);if(de===-1){for(let Se=0;Se<w.length;Se++)if(Se>=E.length){E.push(se),de=Se;break}else if(E[Se]===null){E[Se]=se,de=Se;break}if(de===-1)break}const xe=w[de];xe&&xe.connect(se)}}const Z=new N,P=new N;function G(U,X,se){Z.setFromMatrixPosition(X.matrixWorld),P.setFromMatrixPosition(se.matrixWorld);const de=Z.distanceTo(P),xe=X.projectionMatrix.elements,Se=se.projectionMatrix.elements,Fe=xe[14]/(xe[10]-1),ye=xe[14]/(xe[10]+1),Re=(xe[9]+1)/xe[5],je=(xe[9]-1)/xe[5],Pe=(xe[8]-1)/xe[0],I=(Se[8]+1)/Se[0],ot=Fe*Pe,_e=Fe*I,Te=de/(-Pe+I),be=Te*-Pe;X.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(be),U.translateZ(Te),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const Ye=Fe+Te,Ce=ye+Te,Le=ot-be,He=_e+(de-be),Ke=Re*ye/Ce*Ye,it=je*ye/Ce*Ye;U.projectionMatrix.makePerspective(Le,He,Ke,it,Ye,Ce),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}function q(U,X){X===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(X.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(n===null)return;T.near=b.near=R.near=U.near,T.far=b.far=R.far=U.far,(H!==T.near||M!==T.far)&&(n.updateRenderState({depthNear:T.near,depthFar:T.far}),H=T.near,M=T.far);const X=U.parent,se=T.cameras;q(T,X);for(let de=0;de<se.length;de++)q(se[de],X);se.length===2?G(T,R,b):T.projectionMatrix.copy(R.projectionMatrix),j(U,T,X)};function j(U,X,se){se===null?U.matrix.copy(X.matrixWorld):(U.matrix.copy(se.matrixWorld),U.matrix.invert(),U.matrix.multiply(X.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(X.projectionMatrix),U.projectionMatrixInverse.copy(X.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=mr*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(U){l=U,d!==null&&(d.fixedFoveation=U),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=U)};let re=null;function K(U,X){if(u=X.getViewerPose(c||o),g=X,u!==null){const se=u.views;m!==null&&(e.setRenderTargetFramebuffer(h,m.framebuffer),e.setRenderTarget(h));let de=!1;se.length!==T.cameras.length&&(T.cameras.length=0,de=!0);for(let xe=0;xe<se.length;xe++){const Se=se[xe];let Fe=null;if(m!==null)Fe=m.getViewport(Se);else{const Re=p.getViewSubImage(d,Se);Fe=Re.viewport,xe===0&&(e.setRenderTargetTextures(h,Re.colorTexture,d.ignoreDepthValues?void 0:Re.depthStencilTexture),e.setRenderTarget(h))}let ye=C[xe];ye===void 0&&(ye=new Rt,ye.layers.enable(xe),ye.viewport=new at,C[xe]=ye),ye.matrix.fromArray(Se.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(Se.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),xe===0&&(T.matrix.copy(ye.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),de===!0&&T.cameras.push(ye)}}for(let se=0;se<w.length;se++){const de=E[se],xe=w[se];de!==null&&xe!==void 0&&xe.update(de,X,c||o)}re&&re(U,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),g=null}const J=new fo;J.setAnimationLoop(K),this.setAnimationLoop=function(U){re=U},this.dispose=function(){}}}function jp(r,e){function t(f,h){f.matrixAutoUpdate===!0&&f.updateMatrix(),h.value.copy(f.matrix)}function i(f,h){h.color.getRGB(f.fogColor.value,co(r)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function n(f,h,w,E,R){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(f,h):h.isMeshToonMaterial?(a(f,h),p(f,h)):h.isMeshPhongMaterial?(a(f,h),u(f,h)):h.isMeshStandardMaterial?(a(f,h),d(f,h),h.isMeshPhysicalMaterial&&m(f,h,R)):h.isMeshMatcapMaterial?(a(f,h),g(f,h)):h.isMeshDepthMaterial?a(f,h):h.isMeshDistanceMaterial?(a(f,h),v(f,h)):h.isMeshNormalMaterial?a(f,h):h.isLineBasicMaterial?(o(f,h),h.isLineDashedMaterial&&s(f,h)):h.isPointsMaterial?l(f,h,w,E):h.isSpriteMaterial?c(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.bumpMap&&(f.bumpMap.value=h.bumpMap,t(h.bumpMap,f.bumpMapTransform),f.bumpScale.value=h.bumpScale,h.side===_t&&(f.bumpScale.value*=-1)),h.normalMap&&(f.normalMap.value=h.normalMap,t(h.normalMap,f.normalMapTransform),f.normalScale.value.copy(h.normalScale),h.side===_t&&f.normalScale.value.negate()),h.displacementMap&&(f.displacementMap.value=h.displacementMap,t(h.displacementMap,f.displacementMapTransform),f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,f.emissiveMapTransform)),h.specularMap&&(f.specularMap.value=h.specularMap,t(h.specularMap,f.specularMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);const w=e.get(h).envMap;if(w&&(f.envMap.value=w,f.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap){f.lightMap.value=h.lightMap;const E=r._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=h.lightMapIntensity*E,t(h.lightMap,f.lightMapTransform)}h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,f.aoMapTransform))}function o(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform))}function s(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function l(f,h,w,E){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*w,f.scale.value=E*.5,h.map&&(f.map.value=h.map,t(h.map,f.uvTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function c(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function u(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function p(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function d(f,h){f.metalness.value=h.metalness,h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,f.metalnessMapTransform)),f.roughness.value=h.roughness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,f.roughnessMapTransform)),e.get(h).envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function m(f,h,w){f.ior.value=h.ior,h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,f.sheenColorMapTransform)),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,f.sheenRoughnessMapTransform))),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,f.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(f.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===_t&&f.clearcoatNormalScale.value.negate())),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,f.iridescenceMapTransform)),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=w.texture,f.transmissionSamplerSize.value.set(w.width,w.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,f.transmissionMapTransform)),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(f.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(f.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,f.specularColorMapTransform)),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,h){h.matcap&&(f.matcap.value=h.matcap)}function v(f,h){const w=e.get(h).light;f.referencePosition.value.setFromMatrixPosition(w.matrixWorld),f.nearDistance.value=w.shadow.camera.near,f.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function qp(r,e,t,i){let n={},a={},o=[];const s=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(w,E){const R=E.program;i.uniformBlockBinding(w,R)}function c(w,E){let R=n[w.id];R===void 0&&(g(w),R=u(w),n[w.id]=R,w.addEventListener("dispose",f));const b=E.program;i.updateUBOMapping(w,b);const C=e.render.frame;a[w.id]!==C&&(d(w),a[w.id]=C)}function u(w){const E=p();w.__bindingPointIndex=E;const R=r.createBuffer(),b=w.__size,C=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,R),r.bufferData(r.UNIFORM_BUFFER,b,C),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,E,R),R}function p(){for(let w=0;w<s;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const E=n[w.id],R=w.uniforms,b=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,E);for(let C=0,T=R.length;C<T;C++){const H=R[C];if(m(H,C,b)===!0){const M=H.__offset,y=Array.isArray(H.value)?H.value:[H.value];let V=0;for(let W=0;W<y.length;W++){const Z=y[W],P=v(Z);typeof Z=="number"?(H.__data[0]=Z,r.bufferSubData(r.UNIFORM_BUFFER,M+V,H.__data)):Z.isMatrix3?(H.__data[0]=Z.elements[0],H.__data[1]=Z.elements[1],H.__data[2]=Z.elements[2],H.__data[3]=Z.elements[0],H.__data[4]=Z.elements[3],H.__data[5]=Z.elements[4],H.__data[6]=Z.elements[5],H.__data[7]=Z.elements[0],H.__data[8]=Z.elements[6],H.__data[9]=Z.elements[7],H.__data[10]=Z.elements[8],H.__data[11]=Z.elements[0]):(Z.toArray(H.__data,V),V+=P.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,M,H.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(w,E,R){const b=w.value;if(R[E]===void 0){if(typeof b=="number")R[E]=b;else{const C=Array.isArray(b)?b:[b],T=[];for(let H=0;H<C.length;H++)T.push(C[H].clone());R[E]=T}return!0}else if(typeof b=="number"){if(R[E]!==b)return R[E]=b,!0}else{const C=Array.isArray(R[E])?R[E]:[R[E]],T=Array.isArray(b)?b:[b];for(let H=0;H<C.length;H++){const M=C[H];if(M.equals(T[H])===!1)return M.copy(T[H]),!0}}return!1}function g(w){const E=w.uniforms;let R=0;const b=16;let C=0;for(let T=0,H=E.length;T<H;T++){const M=E[T],y={boundary:0,storage:0},V=Array.isArray(M.value)?M.value:[M.value];for(let W=0,Z=V.length;W<Z;W++){const P=V[W],G=v(P);y.boundary+=G.boundary,y.storage+=G.storage}if(M.__data=new Float32Array(y.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=R,T>0){C=R%b;const W=b-C;C!==0&&W-y.boundary<0&&(R+=b-C,M.__offset=R)}R+=y.storage}return C=R%b,C>0&&(R+=b-C),w.__size=R,w.__cache={},this}function v(w){const E={boundary:0,storage:0};return typeof w=="number"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function f(w){const E=w.target;E.removeEventListener("dispose",f);const R=o.indexOf(E.__bindingPointIndex);o.splice(R,1),r.deleteBuffer(n[E.id]),delete n[E.id],delete a[E.id]}function h(){for(const w in n)r.deleteBuffer(n[w]);o=[],n={},a={}}return{bind:l,update:c,dispose:h}}class xo{constructor(e={}){const{canvas:t=Wl(),context:i=null,depth:n=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),g=new Int32Array(4);let v=null,f=null;const h=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qe,this._useLegacyLights=!1,this.toneMapping=li,this.toneMappingExposure=1;const E=this;let R=!1,b=0,C=0,T=null,H=-1,M=null;const y=new at,V=new at;let W=null;const Z=new ke(0);let P=0,G=t.width,q=t.height,j=1,re=null,K=null;const J=new at(0,0,G,q),U=new at(0,0,G,q);let X=!1;const se=new po;let de=!1,xe=!1,Se=null;const Fe=new st,ye=new De,Re=new N,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pe(){return T===null?j:1}let I=i;function ot(x,D){for(let F=0;F<x.length;F++){const z=x[F],B=t.getContext(z,D);if(B!==null)return B}return null}try{const x={alpha:!0,depth:n,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jn}`),t.addEventListener("webglcontextlost",Be,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",oe,!1),I===null){const D=["webgl2","webgl","experimental-webgl"];if(E.isWebGL1Renderer===!0&&D.shift(),I=ot(D,x),I===null)throw ot(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let _e,Te,be,Ye,Ce,Le,He,Ke,it,S,_,O,ne,$,te,fe,ae,ue,A,ee,Y,Ae,ve,me;function ge(){_e=new rd(I),Te=new Zh(I,_e,e),_e.init(Te),Ae=new Hp(I,_e,Te),be=new zp(I,_e,Te),Ye=new sd(I),Ce=new bp,Le=new Gp(I,_e,be,Ce,Te,Ae,Ye),He=new $h(E),Ke=new id(E),it=new mc(I,Te),ve=new Yh(I,_e,it,Te),S=new nd(I,it,Ye,ve),_=new ud(I,S,it,Ye),A=new cd(I,Te,Le),fe=new Jh(Ce),O=new Tp(E,He,Ke,_e,Te,ve,fe),ne=new jp(E,Ce),$=new wp,te=new Dp(_e,Te),ue=new qh(E,He,Ke,be,_,d,l),ae=new Bp(E,_,Te),me=new qp(I,Ye,Te,be),ee=new Kh(I,_e,Ye,Te),Y=new ad(I,_e,Ye,Te),Ye.programs=O.programs,E.capabilities=Te,E.extensions=_e,E.properties=Ce,E.renderLists=$,E.shadowMap=ae,E.state=be,E.info=Ye}ge();const he=new Xp(E,I);this.xr=he,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const x=_e.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=_e.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(x){x!==void 0&&(j=x,this.setSize(G,q,!1))},this.getSize=function(x){return x.set(G,q)},this.setSize=function(x,D,F=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=x,q=D,t.width=Math.floor(x*j),t.height=Math.floor(D*j),F===!0&&(t.style.width=x+"px",t.style.height=D+"px"),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(G*j,q*j).floor()},this.setDrawingBufferSize=function(x,D,F){G=x,q=D,j=F,t.width=Math.floor(x*F),t.height=Math.floor(D*F),this.setViewport(0,0,x,D)},this.getCurrentViewport=function(x){return x.copy(y)},this.getViewport=function(x){return x.copy(J)},this.setViewport=function(x,D,F,z){x.isVector4?J.set(x.x,x.y,x.z,x.w):J.set(x,D,F,z),be.viewport(y.copy(J).multiplyScalar(j).floor())},this.getScissor=function(x){return x.copy(U)},this.setScissor=function(x,D,F,z){x.isVector4?U.set(x.x,x.y,x.z,x.w):U.set(x,D,F,z),be.scissor(V.copy(U).multiplyScalar(j).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(x){be.setScissorTest(X=x)},this.setOpaqueSort=function(x){re=x},this.setTransparentSort=function(x){K=x},this.getClearColor=function(x){return x.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(x=!0,D=!0,F=!0){let z=0;if(x){let B=!1;if(T!==null){const le=T.texture.format;B=le===Zs||le===Ks||le===Ys}if(B){const le=T.texture.type,Me=le===ci||le===ai||le===$n||le===Ei||le===js||le===qs,Ee=ue.getClearColor(),we=ue.getClearAlpha(),ze=Ee.r,Ne=Ee.g,Ie=Ee.b;Me?(m[0]=ze,m[1]=Ne,m[2]=Ie,m[3]=we,I.clearBufferuiv(I.COLOR,0,m)):(g[0]=ze,g[1]=Ne,g[2]=Ie,g[3]=we,I.clearBufferiv(I.COLOR,0,g))}else z|=I.COLOR_BUFFER_BIT}D&&(z|=I.DEPTH_BUFFER_BIT),F&&(z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),$.dispose(),te.dispose(),Ce.dispose(),He.dispose(),Ke.dispose(),_.dispose(),ve.dispose(),me.dispose(),O.dispose(),he.dispose(),he.removeEventListener("sessionstart",Tt),he.removeEventListener("sessionend",Xe),Se&&(Se.dispose(),Se=null),dt.stop()};function Be(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const x=Ye.autoReset,D=ae.enabled,F=ae.autoUpdate,z=ae.needsUpdate,B=ae.type;ge(),Ye.autoReset=x,ae.enabled=D,ae.autoUpdate=F,ae.needsUpdate=z,ae.type=B}function oe(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Q(x){const D=x.target;D.removeEventListener("dispose",Q),k(D)}function k(x){ie(x),Ce.remove(x)}function ie(x){const D=Ce.get(x).programs;D!==void 0&&(D.forEach(function(F){O.releaseProgram(F)}),x.isShaderMaterial&&O.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,F,z,B,le){D===null&&(D=je);const Me=B.isMesh&&B.matrixWorld.determinant()<0,Ee=bo(x,D,F,z,B);be.setMaterial(z,Me);let we=F.index,ze=1;if(z.wireframe===!0){if(we=S.getWireframeAttribute(F),we===void 0)return;ze=2}const Ne=F.drawRange,Ie=F.attributes.position;let lt=Ne.start*ze,$e=(Ne.start+Ne.count)*ze;le!==null&&(lt=Math.max(lt,le.start*ze),$e=Math.min($e,(le.start+le.count)*ze)),we!==null?(lt=Math.max(lt,0),$e=Math.min($e,we.count)):Ie!=null&&(lt=Math.max(lt,0),$e=Math.min($e,Ie.count));const bt=$e-lt;if(bt<0||bt===1/0)return;ve.setup(B,z,Ee,F,we);let Ht,Ze=ee;if(we!==null&&(Ht=it.get(we),Ze=Y,Ze.setIndex(Ht)),B.isMesh)z.wireframe===!0?(be.setLineWidth(z.wireframeLinewidth*Pe()),Ze.setMode(I.LINES)):Ze.setMode(I.TRIANGLES);else if(B.isLine){let Ge=z.linewidth;Ge===void 0&&(Ge=1),be.setLineWidth(Ge*Pe()),B.isLineSegments?Ze.setMode(I.LINES):B.isLineLoop?Ze.setMode(I.LINE_LOOP):Ze.setMode(I.LINE_STRIP)}else B.isPoints?Ze.setMode(I.POINTS):B.isSprite&&Ze.setMode(I.TRIANGLES);if(B.isInstancedMesh)Ze.renderInstances(lt,bt,B.count);else if(F.isInstancedBufferGeometry){const Ge=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,on=Math.min(F.instanceCount,Ge);Ze.renderInstances(lt,bt,on)}else Ze.render(lt,bt)};function pe(x,D,F){x.transparent===!0&&x.side===Yt&&x.forceSinglePass===!1?(x.side=_t,x.needsUpdate=!0,Mr(x,D,F),x.side=ui,x.needsUpdate=!0,Mr(x,D,F),x.side=Yt):Mr(x,D,F)}this.compile=function(x,D,F=null){F===null&&(F=x),f=te.get(F),f.init(),w.push(f),F.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),x!==F&&x.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights(E._useLegacyLights);const z=new Set;return x.traverse(function(B){const le=B.material;if(le)if(Array.isArray(le))for(let Me=0;Me<le.length;Me++){const Ee=le[Me];pe(Ee,F,B),z.add(Ee)}else pe(le,F,B),z.add(le)}),w.pop(),f=null,z},this.compileAsync=function(x,D,F=null){const z=this.compile(x,D,F);return new Promise(B=>{function le(){if(z.forEach(function(Me){Ce.get(Me).currentProgram.isReady()&&z.delete(Me)}),z.size===0){B(x);return}setTimeout(le,10)}_e.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let We=null;function nt(x){We&&We(x)}function Tt(){dt.stop()}function Xe(){dt.start()}const dt=new fo;dt.setAnimationLoop(nt),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(x){We=x,he.setAnimationLoop(x),x===null?dt.stop():dt.start()},he.addEventListener("sessionstart",Tt),he.addEventListener("sessionend",Xe),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(D),D=he.getCamera()),x.isScene===!0&&x.onBeforeRender(E,x,D,T),f=te.get(x,w.length),f.init(),w.push(f),Fe.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),se.setFromProjectionMatrix(Fe),xe=this.localClippingEnabled,de=fe.init(this.clippingPlanes,xe),v=$.get(x,h.length),v.init(),h.push(v),Ft(x,D,0,E.sortObjects),v.finish(),E.sortObjects===!0&&v.sort(re,K),this.info.render.frame++,de===!0&&fe.beginShadows();const F=f.state.shadowsArray;if(ae.render(F,x,D),de===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),ue.render(v,x),f.setupLights(E._useLegacyLights),D.isArrayCamera){const z=D.cameras;for(let B=0,le=z.length;B<le;B++){const Me=z[B];ca(v,x,Me,Me.viewport)}}else ca(v,x,D);T!==null&&(Le.updateMultisampleRenderTarget(T),Le.updateRenderTargetMipmap(T)),x.isScene===!0&&x.onAfterRender(E,x,D),ve.resetDefaultState(),H=-1,M=null,w.pop(),w.length>0?f=w[w.length-1]:f=null,h.pop(),h.length>0?v=h[h.length-1]:v=null};function Ft(x,D,F,z){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)F=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLight)f.pushLight(x),x.castShadow&&f.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||se.intersectsSprite(x)){z&&Re.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Fe);const le=_.update(x),Me=x.material;Me.visible&&v.push(x,le,Me,F,Re.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||se.intersectsObject(x))){const le=_.update(x),Me=x.material;if(z&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Re.copy(x.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Re.copy(le.boundingSphere.center)),Re.applyMatrix4(x.matrixWorld).applyMatrix4(Fe)),Array.isArray(Me)){const Ee=le.groups;for(let we=0,ze=Ee.length;we<ze;we++){const Ne=Ee[we],Ie=Me[Ne.materialIndex];Ie&&Ie.visible&&v.push(x,le,Ie,F,Re.z,Ne)}}else Me.visible&&v.push(x,le,Me,F,Re.z,null)}}const B=x.children;for(let le=0,Me=B.length;le<Me;le++)Ft(B[le],D,F,z)}function ca(x,D,F,z){const B=x.opaque,le=x.transmissive,Me=x.transparent;f.setupLightsView(F),de===!0&&fe.setGlobalState(E.clippingPlanes,F),le.length>0&&To(B,le,D,F),z&&be.viewport(y.copy(z)),B.length>0&&xr(B,D,F),le.length>0&&xr(le,D,F),Me.length>0&&xr(Me,D,F),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function To(x,D,F,z){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;const B=Te.isWebGL2;Se===null&&(Se=new Ti(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?fr:ci,minFilter:pr,samples:B?4:0})),E.getDrawingBufferSize(ye),B?Se.setSize(ye.x,ye.y):Se.setSize(Jr(ye.x),Jr(ye.y));const le=E.getRenderTarget();E.setRenderTarget(Se),E.getClearColor(Z),P=E.getClearAlpha(),P<1&&E.setClearColor(16777215,.5),E.clear();const Me=E.toneMapping;E.toneMapping=li,xr(x,F,z),Le.updateMultisampleRenderTarget(Se),Le.updateRenderTargetMipmap(Se);let Ee=!1;for(let we=0,ze=D.length;we<ze;we++){const Ne=D[we],Ie=Ne.object,lt=Ne.geometry,$e=Ne.material,bt=Ne.group;if($e.side===Yt&&Ie.layers.test(z.layers)){const Ht=$e.side;$e.side=_t,$e.needsUpdate=!0,ua(Ie,F,z,lt,$e,bt),$e.side=Ht,$e.needsUpdate=!0,Ee=!0}}Ee===!0&&(Le.updateMultisampleRenderTarget(Se),Le.updateRenderTargetMipmap(Se)),E.setRenderTarget(le),E.setClearColor(Z,P),E.toneMapping=Me}function xr(x,D,F){const z=D.isScene===!0?D.overrideMaterial:null;for(let B=0,le=x.length;B<le;B++){const Me=x[B],Ee=Me.object,we=Me.geometry,ze=z===null?Me.material:z,Ne=Me.group;Ee.layers.test(F.layers)&&ua(Ee,D,F,we,ze,Ne)}}function ua(x,D,F,z,B,le){x.onBeforeRender(E,D,F,z,B,le),x.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),B.onBeforeRender(E,D,F,z,x,le),B.transparent===!0&&B.side===Yt&&B.forceSinglePass===!1?(B.side=_t,B.needsUpdate=!0,E.renderBufferDirect(F,D,z,B,x,le),B.side=ui,B.needsUpdate=!0,E.renderBufferDirect(F,D,z,B,x,le),B.side=Yt):E.renderBufferDirect(F,D,z,B,x,le),x.onAfterRender(E,D,F,z,B,le)}function Mr(x,D,F){D.isScene!==!0&&(D=je);const z=Ce.get(x),B=f.state.lights,le=f.state.shadowsArray,Me=B.state.version,Ee=O.getParameters(x,B.state,le,D,F),we=O.getProgramCacheKey(Ee);let ze=z.programs;z.environment=x.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(x.isMeshStandardMaterial?Ke:He).get(x.envMap||z.environment),ze===void 0&&(x.addEventListener("dispose",Q),ze=new Map,z.programs=ze);let Ne=ze.get(we);if(Ne!==void 0){if(z.currentProgram===Ne&&z.lightsStateVersion===Me)return da(x,Ee),Ne}else Ee.uniforms=O.getUniforms(x),x.onBuild(F,Ee,E),x.onBeforeCompile(Ee,E),Ne=O.acquireProgram(Ee,we),ze.set(we,Ne),z.uniforms=Ee.uniforms;const Ie=z.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ie.clippingPlanes=fe.uniform),da(x,Ee),z.needsLights=wo(x),z.lightsStateVersion=Me,z.needsLights&&(Ie.ambientLightColor.value=B.state.ambient,Ie.lightProbe.value=B.state.probe,Ie.directionalLights.value=B.state.directional,Ie.directionalLightShadows.value=B.state.directionalShadow,Ie.spotLights.value=B.state.spot,Ie.spotLightShadows.value=B.state.spotShadow,Ie.rectAreaLights.value=B.state.rectArea,Ie.ltc_1.value=B.state.rectAreaLTC1,Ie.ltc_2.value=B.state.rectAreaLTC2,Ie.pointLights.value=B.state.point,Ie.pointLightShadows.value=B.state.pointShadow,Ie.hemisphereLights.value=B.state.hemi,Ie.directionalShadowMap.value=B.state.directionalShadowMap,Ie.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ie.spotShadowMap.value=B.state.spotShadowMap,Ie.spotLightMatrix.value=B.state.spotLightMatrix,Ie.spotLightMap.value=B.state.spotLightMap,Ie.pointShadowMap.value=B.state.pointShadowMap,Ie.pointShadowMatrix.value=B.state.pointShadowMatrix),z.currentProgram=Ne,z.uniformsList=null,Ne}function ha(x){if(x.uniformsList===null){const D=x.currentProgram.getUniforms();x.uniformsList=Xr.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function da(x,D){const F=Ce.get(x);F.outputColorSpace=D.outputColorSpace,F.instancing=D.instancing,F.instancingColor=D.instancingColor,F.skinning=D.skinning,F.morphTargets=D.morphTargets,F.morphNormals=D.morphNormals,F.morphColors=D.morphColors,F.morphTargetsCount=D.morphTargetsCount,F.numClippingPlanes=D.numClippingPlanes,F.numIntersection=D.numClipIntersection,F.vertexAlphas=D.vertexAlphas,F.vertexTangents=D.vertexTangents,F.toneMapping=D.toneMapping}function bo(x,D,F,z,B){D.isScene!==!0&&(D=je),Le.resetTextureUnits();const le=D.fog,Me=z.isMeshStandardMaterial?D.environment:null,Ee=T===null?E.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Zt,we=(z.isMeshStandardMaterial?Ke:He).get(z.envMap||Me),ze=z.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ne=!!F.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ie=!!F.morphAttributes.position,lt=!!F.morphAttributes.normal,$e=!!F.morphAttributes.color;let bt=li;z.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(bt=E.toneMapping);const Ht=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Ze=Ht!==void 0?Ht.length:0,Ge=Ce.get(z),on=f.state.lights;if(de===!0&&(xe===!0||x!==M)){const xt=x===M&&z.id===H;fe.setState(z,x,xt)}let ln=!1;z.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==on.state.version||Ge.outputColorSpace!==Ee||B.isInstancedMesh&&Ge.instancing===!1||!B.isInstancedMesh&&Ge.instancing===!0||B.isSkinnedMesh&&Ge.skinning===!1||!B.isSkinnedMesh&&Ge.skinning===!0||B.isInstancedMesh&&Ge.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ge.instancingColor===!1&&B.instanceColor!==null||Ge.envMap!==we||z.fog===!0&&Ge.fog!==le||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==fe.numPlanes||Ge.numIntersection!==fe.numIntersection)||Ge.vertexAlphas!==ze||Ge.vertexTangents!==Ne||Ge.morphTargets!==Ie||Ge.morphNormals!==lt||Ge.morphColors!==$e||Ge.toneMapping!==bt||Te.isWebGL2===!0&&Ge.morphTargetsCount!==Ze)&&(ln=!0):(ln=!0,Ge.__version=z.version);let di=Ge.currentProgram;ln===!0&&(di=Mr(z,D,B));let pa=!1,nr=!1,cn=!1;const pt=di.getUniforms(),pi=Ge.uniforms;if(be.useProgram(di.program)&&(pa=!0,nr=!0,cn=!0),z.id!==H&&(H=z.id,nr=!0),pa||M!==x){pt.setValue(I,"projectionMatrix",x.projectionMatrix),pt.setValue(I,"viewMatrix",x.matrixWorldInverse);const xt=pt.map.cameraPosition;xt!==void 0&&xt.setValue(I,Re.setFromMatrixPosition(x.matrixWorld)),Te.logarithmicDepthBuffer&&pt.setValue(I,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&pt.setValue(I,"isOrthographic",x.isOrthographicCamera===!0),M!==x&&(M=x,nr=!0,cn=!0)}if(B.isSkinnedMesh){pt.setOptional(I,B,"bindMatrix"),pt.setOptional(I,B,"bindMatrixInverse");const xt=B.skeleton;xt&&(Te.floatVertexTextures?(xt.boneTexture===null&&xt.computeBoneTexture(),pt.setValue(I,"boneTexture",xt.boneTexture,Le),pt.setValue(I,"boneTextureSize",xt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const un=F.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0&&Te.isWebGL2===!0)&&A.update(B,F,di),(nr||Ge.receiveShadow!==B.receiveShadow)&&(Ge.receiveShadow=B.receiveShadow,pt.setValue(I,"receiveShadow",B.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(pi.envMap.value=we,pi.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),nr&&(pt.setValue(I,"toneMappingExposure",E.toneMappingExposure),Ge.needsLights&&Ao(pi,cn),le&&z.fog===!0&&ne.refreshFogUniforms(pi,le),ne.refreshMaterialUniforms(pi,z,j,q,Se),Xr.upload(I,ha(Ge),pi,Le)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Xr.upload(I,ha(Ge),pi,Le),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&pt.setValue(I,"center",B.center),pt.setValue(I,"modelViewMatrix",B.modelViewMatrix),pt.setValue(I,"normalMatrix",B.normalMatrix),pt.setValue(I,"modelMatrix",B.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const xt=z.uniformsGroups;for(let hn=0,Ro=xt.length;hn<Ro;hn++)if(Te.isWebGL2){const fa=xt[hn];me.update(fa,di),me.bind(fa,di)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return di}function Ao(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function wo(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(x,D,F){Ce.get(x.texture).__webglTexture=D,Ce.get(x.depthTexture).__webglTexture=F;const z=Ce.get(x);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=F===void 0,z.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(x,D){const F=Ce.get(x);F.__webglFramebuffer=D,F.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(x,D=0,F=0){T=x,b=D,C=F;let z=!0,B=null,le=!1,Me=!1;if(x){const Ee=Ce.get(x);Ee.__useDefaultFramebuffer!==void 0?(be.bindFramebuffer(I.FRAMEBUFFER,null),z=!1):Ee.__webglFramebuffer===void 0?Le.setupRenderTarget(x):Ee.__hasExternalTextures&&Le.rebindTextures(x,Ce.get(x.texture).__webglTexture,Ce.get(x.depthTexture).__webglTexture);const we=x.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(Me=!0);const ze=Ce.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(ze[D])?B=ze[D][F]:B=ze[D],le=!0):Te.isWebGL2&&x.samples>0&&Le.useMultisampledRTT(x)===!1?B=Ce.get(x).__webglMultisampledFramebuffer:Array.isArray(ze)?B=ze[F]:B=ze,y.copy(x.viewport),V.copy(x.scissor),W=x.scissorTest}else y.copy(J).multiplyScalar(j).floor(),V.copy(U).multiplyScalar(j).floor(),W=X;if(be.bindFramebuffer(I.FRAMEBUFFER,B)&&Te.drawBuffers&&z&&be.drawBuffers(x,B),be.viewport(y),be.scissor(V),be.setScissorTest(W),le){const Ee=Ce.get(x.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,Ee.__webglTexture,F)}else if(Me){const Ee=Ce.get(x.texture),we=D||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ee.__webglTexture,F||0,we)}H=-1},this.readRenderTargetPixels=function(x,D,F,z,B,le,Me){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Ce.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee){be.bindFramebuffer(I.FRAMEBUFFER,Ee);try{const we=x.texture,ze=we.format,Ne=we.type;if(ze!==It&&Ae.convert(ze)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=Ne===fr&&(_e.has("EXT_color_buffer_half_float")||Te.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Ne!==ci&&Ae.convert(Ne)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===si&&(Te.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-z&&F>=0&&F<=x.height-B&&I.readPixels(D,F,z,B,Ae.convert(ze),Ae.convert(Ne),le)}finally{const we=T!==null?Ce.get(T).__webglFramebuffer:null;be.bindFramebuffer(I.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(x,D,F=0){const z=Math.pow(2,-F),B=Math.floor(D.image.width*z),le=Math.floor(D.image.height*z);Le.setTexture2D(D,0),I.copyTexSubImage2D(I.TEXTURE_2D,F,0,0,x.x,x.y,B,le),be.unbindTexture()},this.copyTextureToTexture=function(x,D,F,z=0){const B=D.image.width,le=D.image.height,Me=Ae.convert(F.format),Ee=Ae.convert(F.type);Le.setTexture2D(F,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment),D.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,z,x.x,x.y,B,le,Me,Ee,D.image.data):D.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,z,x.x,x.y,D.mipmaps[0].width,D.mipmaps[0].height,Me,D.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,z,x.x,x.y,Me,Ee,D.image),z===0&&F.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(x,D,F,z,B=0){if(E.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const le=x.max.x-x.min.x+1,Me=x.max.y-x.min.y+1,Ee=x.max.z-x.min.z+1,we=Ae.convert(z.format),ze=Ae.convert(z.type);let Ne;if(z.isData3DTexture)Le.setTexture3D(z,0),Ne=I.TEXTURE_3D;else if(z.isDataArrayTexture)Le.setTexture2DArray(z,0),Ne=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,z.unpackAlignment);const Ie=I.getParameter(I.UNPACK_ROW_LENGTH),lt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),$e=I.getParameter(I.UNPACK_SKIP_PIXELS),bt=I.getParameter(I.UNPACK_SKIP_ROWS),Ht=I.getParameter(I.UNPACK_SKIP_IMAGES),Ze=F.isCompressedTexture?F.mipmaps[0]:F.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Ze.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ze.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,x.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,x.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,x.min.z),F.isDataTexture||F.isData3DTexture?I.texSubImage3D(Ne,B,D.x,D.y,D.z,le,Me,Ee,we,ze,Ze.data):F.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Ne,B,D.x,D.y,D.z,le,Me,Ee,we,Ze.data)):I.texSubImage3D(Ne,B,D.x,D.y,D.z,le,Me,Ee,we,ze,Ze),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ie),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,lt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,$e),I.pixelStorei(I.UNPACK_SKIP_ROWS,bt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ht),B===0&&z.generateMipmaps&&I.generateMipmap(Ne),be.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?Le.setTextureCube(x,0):x.isData3DTexture?Le.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Le.setTexture2DArray(x,0):Le.setTexture2D(x,0),be.unbindTexture()},this.resetState=function(){b=0,C=0,T=null,be.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Qn?"display-p3":"srgb",t.unpackColorSpace=Ve.workingColorSpace===rn?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Qe?yi:Js}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===yi?Qe:Zt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Yp extends xo{}Yp.prototype.isWebGL1Renderer=!0;class Kp extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class na extends Jt{constructor(e=1,t=1,i=1,n=32,a=1,o=!1,s=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:a,openEnded:o,thetaStart:s,thetaLength:l};const c=this;n=Math.floor(n),a=Math.floor(a);const u=[],p=[],d=[],m=[];let g=0;const v=[],f=i/2;let h=0;w(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new yt(p,3)),this.setAttribute("normal",new yt(d,3)),this.setAttribute("uv",new yt(m,2));function w(){const R=new N,b=new N;let C=0;const T=(t-e)/i;for(let H=0;H<=a;H++){const M=[],y=H/a,V=y*(t-e)+e;for(let W=0;W<=n;W++){const Z=W/n,P=Z*l+s,G=Math.sin(P),q=Math.cos(P);b.x=V*G,b.y=-y*i+f,b.z=V*q,p.push(b.x,b.y,b.z),R.set(G,T,q).normalize(),d.push(R.x,R.y,R.z),m.push(Z,1-y),M.push(g++)}v.push(M)}for(let H=0;H<n;H++)for(let M=0;M<a;M++){const y=v[M][H],V=v[M+1][H],W=v[M+1][H+1],Z=v[M][H+1];u.push(y,V,Z),u.push(V,W,Z),C+=6}c.addGroup(h,C,0),h+=C}function E(R){const b=g,C=new De,T=new N;let H=0;const M=R===!0?e:t,y=R===!0?1:-1;for(let W=1;W<=n;W++)p.push(0,f*y,0),d.push(0,y,0),m.push(.5,.5),g++;const V=g;for(let W=0;W<=n;W++){const Z=W/n*l+s,P=Math.cos(Z),G=Math.sin(Z);T.x=M*G,T.y=f*y,T.z=M*P,p.push(T.x,T.y,T.z),d.push(0,y,0),C.x=P*.5+.5,C.y=G*.5*y+.5,m.push(C.x,C.y),g++}for(let W=0;W<n;W++){const Z=b+W,P=V+W;R===!0?u.push(P,P+1,Z):u.push(P+1,P,Z),H+=3}c.addGroup(h,H,R===!0?1:2),h+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new na(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class aa extends na{constructor(e=1,t=1,i=32,n=1,a=!1,o=0,s=Math.PI*2){super(0,e,t,i,n,a,o,s),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:a,thetaStart:o,thetaLength:s}}static fromJSON(e){return new aa(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sa extends Jt{constructor(e=1,t=.4,i=12,n=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:a},i=Math.floor(i),n=Math.floor(n);const o=[],s=[],l=[],c=[],u=new N,p=new N,d=new N;for(let m=0;m<=i;m++)for(let g=0;g<=n;g++){const v=g/n*a,f=m/i*Math.PI*2;p.x=(e+t*Math.cos(f))*Math.cos(v),p.y=(e+t*Math.cos(f))*Math.sin(v),p.z=t*Math.sin(f),s.push(p.x,p.y,p.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),d.subVectors(p,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/n),c.push(m/i)}for(let m=1;m<=i;m++)for(let g=1;g<=n;g++){const v=(n+1)*m+g-1,f=(n+1)*(m-1)+g-1,h=(n+1)*(m-1)+g,w=(n+1)*m+g;o.push(v,f,w),o.push(f,h,w)}this.setIndex(o),this.setAttribute("position",new yt(s,3)),this.setAttribute("normal",new yt(l,3)),this.setAttribute("uv",new yt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sa(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Zp extends vr{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$s,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}const Is={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Jp{constructor(e,t,i){const n=this;let a=!1,o=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){s++,a===!1&&n.onStart!==void 0&&n.onStart(u,o,s),a=!0},this.itemEnd=function(u){o++,n.onProgress!==void 0&&n.onProgress(u,o,s),o===s&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,p){return c.push(u,p),this},this.removeHandler=function(u){const p=c.indexOf(u);return p!==-1&&c.splice(p,2),this},this.getHandler=function(u){for(let p=0,d=c.length;p<d;p+=2){const m=c[p],g=c[p+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const $p=new Jp;class oa{constructor(e){this.manager=e!==void 0?e:$p,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,a){i.load(e,n,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}oa.DEFAULT_MATERIAL_NAME="__DEFAULT";class Qp extends oa{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,o=Is.get(e);if(o!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(o),a.manager.itemEnd(e)},0),o;const s=gr("img");function l(){u(),Is.add(e,this),t&&t(this),a.manager.itemEnd(e)}function c(p){u(),n&&n(p),a.manager.itemError(e),a.manager.itemEnd(e)}function u(){s.removeEventListener("load",l,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),a.manager.itemStart(e),s.src=e,s}}class ef extends oa{constructor(e){super(e)}load(e,t,i,n){const a=new vt,o=new Qp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(s){a.image=s,a.needsUpdate=!0,t!==void 0&&t(a)},i,n),a}}class tf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Os(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Os();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Os(){return(typeof performance>"u"?Date:performance).now()}class Fs{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jn}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jn);const Bs={type:"change"},Hn={type:"start"},zs={type:"end"},Wr=new ro,Gs=new ni,rf=Math.cos(70*kl.DEG2RAD);class nf extends Ri{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Li.ROTATE,MIDDLE:Li.DOLLY,RIGHT:Li.PAN},this.touches={ONE:Ci.ROTATE,TWO:Ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",_),this._domElementKeyEvents=A},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",_),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Bs),i.update(),a=n.NONE},this.update=function(){const A=new N,ee=new bi().setFromUnitVectors(e.up,new N(0,1,0)),Y=ee.clone().invert(),Ae=new N,ve=new bi,me=new N,ge=2*Math.PI;return function(he=null){const Be=i.object.position;A.copy(Be).sub(i.target),A.applyQuaternion(ee),s.setFromVector3(A),i.autoRotate&&a===n.NONE&&V(M(he)),i.enableDamping?(s.theta+=l.theta*i.dampingFactor,s.phi+=l.phi*i.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let L=i.minAzimuthAngle,oe=i.maxAzimuthAngle;isFinite(L)&&isFinite(oe)&&(L<-Math.PI?L+=ge:L>Math.PI&&(L-=ge),oe<-Math.PI?oe+=ge:oe>Math.PI&&(oe-=ge),L<=oe?s.theta=Math.max(L,Math.min(oe,s.theta)):s.theta=s.theta>(L+oe)/2?Math.max(L,s.theta):Math.min(oe,s.theta)),s.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,s.phi)),s.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&C||i.object.isOrthographicCamera?s.radius=K(s.radius):s.radius=K(s.radius*c),A.setFromSpherical(s),A.applyQuaternion(Y),Be.copy(i.target).add(A),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let Q=!1;if(i.zoomToCursor&&C){let k=null;if(i.object.isPerspectiveCamera){const ie=A.length();k=K(ie*c);const pe=ie-k;i.object.position.addScaledVector(R,pe),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const ie=new N(b.x,b.y,0);ie.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Q=!0;const pe=new N(b.x,b.y,0);pe.unproject(i.object),i.object.position.sub(pe).add(ie),i.object.updateMatrixWorld(),k=A.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;k!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(k).add(i.object.position):(Wr.origin.copy(i.object.position),Wr.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Wr.direction))<rf?e.lookAt(i.target):(Gs.setFromNormalAndCoplanarPoint(i.object.up,i.target),Wr.intersectPlane(Gs,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Q=!0);return c=1,C=!1,Q||Ae.distanceToSquared(i.object.position)>o||8*(1-ve.dot(i.object.quaternion))>o||me.distanceToSquared(i.target)>0?(i.dispatchEvent(Bs),Ae.copy(i.object.position),ve.copy(i.object.quaternion),me.copy(i.target),Q=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",$),i.domElement.removeEventListener("pointerdown",Ce),i.domElement.removeEventListener("pointercancel",He),i.domElement.removeEventListener("wheel",S),i.domElement.removeEventListener("pointermove",Le),i.domElement.removeEventListener("pointerup",He),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",_),i._domElementKeyEvents=null)};const i=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=n.NONE;const o=1e-6,s=new Fs,l=new Fs;let c=1;const u=new N,p=new De,d=new De,m=new De,g=new De,v=new De,f=new De,h=new De,w=new De,E=new De,R=new N,b=new De;let C=!1;const T=[],H={};function M(A){return A!==null?2*Math.PI/60*i.autoRotateSpeed*A:2*Math.PI/60/60*i.autoRotateSpeed}function y(){return Math.pow(.95,i.zoomSpeed)}function V(A){l.theta-=A}function W(A){l.phi-=A}const Z=function(){const A=new N;return function(ee,Y){A.setFromMatrixColumn(Y,0),A.multiplyScalar(-ee),u.add(A)}}(),P=function(){const A=new N;return function(ee,Y){i.screenSpacePanning===!0?A.setFromMatrixColumn(Y,1):(A.setFromMatrixColumn(Y,0),A.crossVectors(i.object.up,A)),A.multiplyScalar(ee),u.add(A)}}(),G=function(){const A=new N;return function(ee,Y){const Ae=i.domElement;if(i.object.isPerspectiveCamera){const ve=i.object.position;A.copy(ve).sub(i.target);let me=A.length();me*=Math.tan(i.object.fov/2*Math.PI/180),Z(2*ee*me/Ae.clientHeight,i.object.matrix),P(2*Y*me/Ae.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Z(ee*(i.object.right-i.object.left)/i.object.zoom/Ae.clientWidth,i.object.matrix),P(Y*(i.object.top-i.object.bottom)/i.object.zoom/Ae.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function q(A){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function j(A){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function re(A){if(!i.zoomToCursor)return;C=!0;const ee=i.domElement.getBoundingClientRect(),Y=A.clientX-ee.left,Ae=A.clientY-ee.top,ve=ee.width,me=ee.height;b.x=Y/ve*2-1,b.y=-(Ae/me)*2+1,R.set(b.x,b.y,1).unproject(i.object).sub(i.object.position).normalize()}function K(A){return Math.max(i.minDistance,Math.min(i.maxDistance,A))}function J(A){p.set(A.clientX,A.clientY)}function U(A){re(A),h.set(A.clientX,A.clientY)}function X(A){g.set(A.clientX,A.clientY)}function se(A){d.set(A.clientX,A.clientY),m.subVectors(d,p).multiplyScalar(i.rotateSpeed);const ee=i.domElement;V(2*Math.PI*m.x/ee.clientHeight),W(2*Math.PI*m.y/ee.clientHeight),p.copy(d),i.update()}function de(A){w.set(A.clientX,A.clientY),E.subVectors(w,h),E.y>0?q(y()):E.y<0&&j(y()),h.copy(w),i.update()}function xe(A){v.set(A.clientX,A.clientY),f.subVectors(v,g).multiplyScalar(i.panSpeed),G(f.x,f.y),g.copy(v),i.update()}function Se(A){re(A),A.deltaY<0?j(y()):A.deltaY>0&&q(y()),i.update()}function Fe(A){let ee=!1;switch(A.code){case i.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?W(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,i.keyPanSpeed),ee=!0;break;case i.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?W(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,-i.keyPanSpeed),ee=!0;break;case i.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?V(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(i.keyPanSpeed,0),ee=!0;break;case i.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?V(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(-i.keyPanSpeed,0),ee=!0;break}ee&&(A.preventDefault(),i.update())}function ye(){if(T.length===1)p.set(T[0].pageX,T[0].pageY);else{const A=.5*(T[0].pageX+T[1].pageX),ee=.5*(T[0].pageY+T[1].pageY);p.set(A,ee)}}function Re(){if(T.length===1)g.set(T[0].pageX,T[0].pageY);else{const A=.5*(T[0].pageX+T[1].pageX),ee=.5*(T[0].pageY+T[1].pageY);g.set(A,ee)}}function je(){const A=T[0].pageX-T[1].pageX,ee=T[0].pageY-T[1].pageY,Y=Math.sqrt(A*A+ee*ee);h.set(0,Y)}function Pe(){i.enableZoom&&je(),i.enablePan&&Re()}function I(){i.enableZoom&&je(),i.enableRotate&&ye()}function ot(A){if(T.length==1)d.set(A.pageX,A.pageY);else{const Y=ue(A),Ae=.5*(A.pageX+Y.x),ve=.5*(A.pageY+Y.y);d.set(Ae,ve)}m.subVectors(d,p).multiplyScalar(i.rotateSpeed);const ee=i.domElement;V(2*Math.PI*m.x/ee.clientHeight),W(2*Math.PI*m.y/ee.clientHeight),p.copy(d)}function _e(A){if(T.length===1)v.set(A.pageX,A.pageY);else{const ee=ue(A),Y=.5*(A.pageX+ee.x),Ae=.5*(A.pageY+ee.y);v.set(Y,Ae)}f.subVectors(v,g).multiplyScalar(i.panSpeed),G(f.x,f.y),g.copy(v)}function Te(A){const ee=ue(A),Y=A.pageX-ee.x,Ae=A.pageY-ee.y,ve=Math.sqrt(Y*Y+Ae*Ae);w.set(0,ve),E.set(0,Math.pow(w.y/h.y,i.zoomSpeed)),q(E.y),h.copy(w)}function be(A){i.enableZoom&&Te(A),i.enablePan&&_e(A)}function Ye(A){i.enableZoom&&Te(A),i.enableRotate&&ot(A)}function Ce(A){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(A.pointerId),i.domElement.addEventListener("pointermove",Le),i.domElement.addEventListener("pointerup",He)),te(A),A.pointerType==="touch"?O(A):Ke(A))}function Le(A){i.enabled!==!1&&(A.pointerType==="touch"?ne(A):it(A))}function He(A){fe(A),T.length===0&&(i.domElement.releasePointerCapture(A.pointerId),i.domElement.removeEventListener("pointermove",Le),i.domElement.removeEventListener("pointerup",He)),i.dispatchEvent(zs),a=n.NONE}function Ke(A){let ee;switch(A.button){case 0:ee=i.mouseButtons.LEFT;break;case 1:ee=i.mouseButtons.MIDDLE;break;case 2:ee=i.mouseButtons.RIGHT;break;default:ee=-1}switch(ee){case Li.DOLLY:if(i.enableZoom===!1)return;U(A),a=n.DOLLY;break;case Li.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(i.enablePan===!1)return;X(A),a=n.PAN}else{if(i.enableRotate===!1)return;J(A),a=n.ROTATE}break;case Li.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(i.enableRotate===!1)return;J(A),a=n.ROTATE}else{if(i.enablePan===!1)return;X(A),a=n.PAN}break;default:a=n.NONE}a!==n.NONE&&i.dispatchEvent(Hn)}function it(A){switch(a){case n.ROTATE:if(i.enableRotate===!1)return;se(A);break;case n.DOLLY:if(i.enableZoom===!1)return;de(A);break;case n.PAN:if(i.enablePan===!1)return;xe(A);break}}function S(A){i.enabled===!1||i.enableZoom===!1||a!==n.NONE||(A.preventDefault(),i.dispatchEvent(Hn),Se(A),i.dispatchEvent(zs))}function _(A){i.enabled===!1||i.enablePan===!1||Fe(A)}function O(A){switch(ae(A),T.length){case 1:switch(i.touches.ONE){case Ci.ROTATE:if(i.enableRotate===!1)return;ye(),a=n.TOUCH_ROTATE;break;case Ci.PAN:if(i.enablePan===!1)return;Re(),a=n.TOUCH_PAN;break;default:a=n.NONE}break;case 2:switch(i.touches.TWO){case Ci.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Pe(),a=n.TOUCH_DOLLY_PAN;break;case Ci.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;I(),a=n.TOUCH_DOLLY_ROTATE;break;default:a=n.NONE}break;default:a=n.NONE}a!==n.NONE&&i.dispatchEvent(Hn)}function ne(A){switch(ae(A),a){case n.TOUCH_ROTATE:if(i.enableRotate===!1)return;ot(A),i.update();break;case n.TOUCH_PAN:if(i.enablePan===!1)return;_e(A),i.update();break;case n.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;be(A),i.update();break;case n.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ye(A),i.update();break;default:a=n.NONE}}function $(A){i.enabled!==!1&&A.preventDefault()}function te(A){T.push(A)}function fe(A){delete H[A.pointerId];for(let ee=0;ee<T.length;ee++)if(T[ee].pointerId==A.pointerId){T.splice(ee,1);return}}function ae(A){let ee=H[A.pointerId];ee===void 0&&(ee=new De,H[A.pointerId]=ee),ee.set(A.pageX,A.pageY)}function ue(A){const ee=A.pointerId===T[0].pointerId?T[1]:T[0];return H[ee.pointerId]}i.domElement.addEventListener("contextmenu",$),i.domElement.addEventListener("pointerdown",Ce),i.domElement.addEventListener("pointercancel",He),i.domElement.addEventListener("wheel",S,{passive:!1}),this.update()}}console.log(Hs);const Mo=document.querySelector("canvas.webgl"),la=new Kp,$t=new ef,af=$t.load("./textures/door/color.jpg");$t.load("./textures/door/alpha.jpg");$t.load("./textures/door/ambientOcclusion.jpg");$t.load("./textures/door/height.jpg");$t.load("./textures/door/normal.jpg");$t.load("./textures/door/metalness.jpg");$t.load("./textures/door/roughness.jpg");const Eo=$t.load("./textures/matcaps/2.png");$t.load("./textures/gradients/3.jpg");af.colorSpace=Qe;Eo.colorSpace=Qe;const sn=new Zp;sn.matcap=Eo;const $r=new Ot(new ir(1,1,1),sn),Qr=new Ot(new sa(.3,.2,16,32),sn),en=new Ot(new aa(1,3,5),sn);la.add($r,Qr,en);$r.position.x=-1;Qr.position.x=1;en.position.x=3.5;const zt={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{zt.width=window.innerWidth,zt.height=window.innerHeight,hi.aspect=zt.width/zt.height,hi.updateProjectionMatrix(),wi.setSize(zt.width,zt.height),wi.setPixelRatio(Math.min(window.devicePixelRatio,2))});const hi=new Rt(75,zt.width/zt.height,.1,100);hi.position.x=1;hi.position.y=1;hi.position.z=2;la.add(hi);const So=new nf(hi,Mo);So.enableDamping=!0;const wi=new xo({canvas:Mo});wi.setSize(zt.width,zt.height);wi.setPixelRatio(Math.min(window.devicePixelRatio,2));wi.xr.enabled=!0;const sf=Hs.createButton(wi);document.body.appendChild(sf);const of=new tf,yo=()=>{const r=of.getElapsedTime();$r.rotation.x=.1*r,Qr.rotation.x=.1*r,en.rotation.x=.1*r,$r.rotation.y=-.2*r,Qr.rotation.y=-.2*r,en.rotation.y=-.2*r,So.update(),wi.render(la,hi),window.requestAnimationFrame(yo)};yo();
//# sourceMappingURL=index-066dd599.js.map
