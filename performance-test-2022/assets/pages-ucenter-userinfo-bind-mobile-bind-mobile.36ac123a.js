var e=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(o,a,t)=>a in o?e(o,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[a]=t;import{a5 as i,R as l,W as c,a8 as p,o as m,c as u,w as d,b as f,d as b,l as h,m as y,i as D}from"./index.45e10b73.js";import{_ as j}from"./uni-easyinput.d7f9f53b.js";import{r as g}from"./uni-app.es.af6e5358.js";import{_ as C}from"./uni-send-sms-code.80002855.js";import{_ as P}from"./uni-popup-captcha.0837ee8f.js";import{_}from"./plugin-vue_export-helper.21dcd24c.js";import"./uni-icons.4aeae8d3.js";import"./uni-captcha.0a325143.js";import"./uni-popup.c41ffb1b.js";const v={data:()=>({currenPhoneArea:"",formData:{phone:"",code:"",captcha:!1}}),computed:{tipText(){return`验证码已通过短信发送至${this.currenPhoneArea} ${this.formData.mobile}。密码为6 - 20位`},canSubmit(){return this.isPhone()&&this.isCode()}},onLoad(e){},onReady(){},methods:(x=((e,o)=>{for(var a in o||(o={}))r.call(o,a)&&s(e,a,o[a]);if(t)for(var a of t(o))n.call(o,a)&&s(e,a,o[a]);return e})({},i({setUserInfo:"user/login"})),O={submit(){console.log(this.formData),l.callFunction({name:"uni-id-cf",data:{action:"bindMobileBySms",params:this.formData},success:({result:e})=>{if(console.log(e),c({title:e.msg||e.errMsg,icon:"none"}),"CAPTCHA_REQUIRED"==e.errCode)return this.$refs["popup-captcha"].open();0===e.code&&(this.setUserInfo({mobile:e.mobile}),p())},complete:()=>{this.formData.captcha=!1}})},isPhone(){return/^1\d{10}$/.test(this.formData.mobile)},isCode(){return/^\d{6}$/.test(this.formData.code)}},o(x,a(O)))};var x,O;var V=_(v,[["render",function(e,o,a,t,r,n){const s=g(h("uni-easyinput"),j),i=g(h("uni-send-sms-code"),C),l=y,c=g(h("uni-popup-captcha"),P),p=D;return m(),u(p,{class:"uni-content"},{default:d((()=>[f(s,{clearable:"",focus:"",type:"number",class:"input-box",inputBorder:!1,modelValue:r.formData.mobile,"onUpdate:modelValue":o[0]||(o[0]=e=>r.formData.mobile=e),maxlength:"11",placeholder:"请输入手机号"},null,8,["modelValue"]),f(s,{clearable:"",type:"number",class:"input-box",inputBorder:!1,modelValue:r.formData.code,"onUpdate:modelValue":o[1]||(o[1]=e=>r.formData.code=e),maxlength:"6",placeholder:e.$t("common.verifyCodePlaceholder")},{right:d((()=>[f(i,{ref:"shortCode","code-type":"bind",phone:r.formData.mobile},null,8,["phone"])])),_:1},8,["modelValue","placeholder"]),f(l,{class:"uni-btn send-btn-box",disabled:!n.canSubmit,type:n.canSubmit?"primary":"default",onClick:n.submit},{default:d((()=>[b("提交")])),_:1},8,["disabled","type","onClick"]),f(c,{ref:"popup-captcha",onConfirm:n.submit,modelValue:r.formData.captcha,"onUpdate:modelValue":o[2]||(o[2]=e=>r.formData.captcha=e),scene:"bindMobileBySms"},null,8,["onConfirm","modelValue"])])),_:1})}],["__scopeId","data-v-f3c4dfd2"]]);export{V as default};
