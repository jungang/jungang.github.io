var e=Object.defineProperty,r=Object.defineProperties,t=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,i=(r,t,o)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o;import{a2 as a}from"./index.18541c3e.js";import{l}from"./loginSuccess.1f625296.js";let p={methods:(c=((e,r)=>{for(var t in r||(r={}))s.call(r,t)&&i(e,t,r[t]);if(o)for(var t of o(r))n.call(r,t)&&i(e,t,r[t]);return e})({},a({setUserInfo:"user/login"})),f={loginSuccess(e){l(e),delete e.userInfo.token,"register"==e.type&&(e.userInfo._id=e.uid),this.setUserInfo(e.userInfo)}},r(c,t(f)))};var c,f;export{p as m};
