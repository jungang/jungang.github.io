import{P as a,S as e,f as t,o as s,c,w as o,b as l,q as i,C as n,k as p,i as u,I as h}from"./index.18541c3e.js";import{_ as r}from"./uni-icons.1f9744ac.js";import{r as d}from"./uni-app.es.aff9600a.js";import{_ as m}from"./plugin-vue_export-helper.21dcd24c.js";var g=m({props:{modelValue:String,value:String,scene:{type:String,default:()=>""},focus:{type:Boolean,default:()=>!1}},computed:{val:{get(){return this.value||this.modelValue},set(a){this.$emit("update:modelValue",a)}}},data:()=>({focusCaptchaInput:!1,captchaBase64:"",loging:!1}),watch:{scene:{handler(e){e?this.getImageCaptcha(this.focus):a({title:"scene不能为空",icon:"none"})},immediate:!0}},methods:{getImageCaptcha(t=!0){this.loging=!0,t&&(this.val="",this.focusCaptchaInput=!0);e.importObject("uni-captcha-co",{customUI:!0}).getImageCaptcha({scene:this.scene}).then((a=>{this.captchaBase64=a.captchaBase64})).catch((e=>{a({title:e.message,icon:"none"})})).finally((a=>{this.loging=!1}))}}},[["render",function(a,e,m,g,f,C){const I=d(t("uni-icons"),r),B=p,v=u,x=h;return s(),c(v,{class:"captcha-box"},{default:o((()=>[l(v,{class:"captcha-img-box"},{default:o((()=>[f.loging?(s(),c(I,{key:0,class:"loding",size:"20px",color:"#BBB",type:"spinner-cycle"})):i("",!0),l(B,{class:n(["captcha-img",{opacity:f.loging}]),onClick:C.getImageCaptcha,src:f.captchaBase64,mode:"widthFix"},null,8,["class","onClick","src"])])),_:1}),l(x,{onBlur:e[0]||(e[0]=a=>f.focusCaptchaInput=!1),focus:f.focusCaptchaInput,type:"text",class:"captcha",inputBorder:!1,maxlength:"4",modelValue:C.val,"onUpdate:modelValue":e[1]||(e[1]=a=>C.val=a),placeholder:"请输入验证码"},null,8,["focus","modelValue"])])),_:1})}],["__scopeId","data-v-5d8d17f8"]]);export{g as _};
