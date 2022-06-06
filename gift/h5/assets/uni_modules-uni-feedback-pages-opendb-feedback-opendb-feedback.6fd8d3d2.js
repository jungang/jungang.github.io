var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(t,s,i)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[s]=i,r=(e,t)=>{for(var s in t||(t={}))l.call(t,s)&&o(e,s,t[s]);if(i)for(var s of i(t))a.call(t,s)&&o(e,s,t[s]);return e};import{S as n,as as d,ay as u,az as c,P as h,at as p,aA as f,o as m,c as y,w as g,e as b,r as F,d as x,b as _,ae as k,q as w,j as v,F as P,p as I,k as S,i as O,am as T,C as $,t as C,ad as j,l as L,_ as M,O as V,R as D,a5 as E,Q as U,ab as B,f as A}from"./index.9588ac03.js";import{_ as z}from"./uni-forms-item.52d7bd77.js";import{r as N}from"./uni-app.es.3623048a.js";import{_ as R}from"./plugin-vue_export-helper.21dcd24c.js";import{_ as q}from"./uni-easyinput.9830cc65.js";import{_ as J}from"./uni-forms.21f09ba3.js";import"./uni-icons.66bbb871.js";const Q="chooseAndUploadFile:fail";function G(e,t){return e.tempFiles.forEach(((e,s)=>{e.name||(e.name=e.path.substring(e.path.lastIndexOf("/")+1)),t&&(e.fileType=t),e.cloudPath=Date.now()+"_"+s+e.name.substring(e.name.lastIndexOf("."))})),e.tempFilePaths||(e.tempFilePaths=e.tempFiles.map((e=>e.path))),e}function H(e,t=5,s){const i=(e=JSON.parse(JSON.stringify(e))).length;let l=0,a=this;return new Promise((o=>{for(;l<t;)r();function r(){let t=l++;if(t>=i)return void(!e.find((e=>!e.url&&!e.errMsg))&&o(e));const d=e[t],u=a.files.findIndex((e=>e.uuid===d.uuid));d.url="",delete d.errMsg,n.uploadFile({filePath:d.path,cloudPath:d.cloudPath,fileType:d.fileType,onUploadProgress:e=>{e.index=u,s&&s(e)}}).then((e=>{d.url=e.fileID,d.index=u,t<i&&r()})).catch((e=>{d.errMsg=e.errMsg||e.message,d.index=u,t<i&&r()}))}}))}function K(e,{onChooseFile:t,onUploadProgress:s}){return e.then((e=>{if(t){const s=t(e);if(void 0!==s)return Promise.resolve(s).then((t=>void 0===t?e:t))}return e})).then((e=>!1===e?{errMsg:"chooseAndUploadFile:ok",tempFilePaths:[],tempFiles:[]}:e))}function W(e={type:"all"}){return"image"===e.type?K(function(e){const{count:t,sizeType:s=["original","compressed"],sourceType:i=["album","camera"],extension:l}=e;return new Promise(((e,a)=>{d({count:t,sizeType:s,sourceType:i,extension:l,success(t){e(G(t,"image"))},fail(e){a({errMsg:e.errMsg.replace("chooseImage:fail",Q)})}})}))}(e),e):"video"===e.type?K(function(e){const{camera:t,compressed:s,maxDuration:i,sourceType:l=["album","camera"],extension:a}=e;return new Promise(((e,o)=>{u({camera:t,compressed:s,maxDuration:i,sourceType:l,extension:a,success(t){const{tempFilePath:s,duration:i,size:l,height:a,width:o}=t;e(G({errMsg:"chooseVideo:ok",tempFilePaths:[s],tempFiles:[{name:t.tempFile&&t.tempFile.name||"",path:s,size:l,type:t.tempFile&&t.tempFile.type||"",width:o,height:a,duration:i,fileType:"video",cloudPath:""}]},"video"))},fail(e){o({errMsg:e.errMsg.replace("chooseVideo:fail",Q)})}})}))}(e),e):K(function(e){const{count:t,extension:s}=e;return new Promise(((e,i)=>{let l=c;if("undefined"!=typeof wx&&"function"==typeof wx.chooseMessageFile&&(l=wx.chooseMessageFile),"function"!=typeof l)return i({errMsg:Q+" 请指定 type 类型，该平台仅支持选择 image 或 video。"});l({type:"all",count:t,extension:s,success(t){e(G(t))},fail(e){i({errMsg:e.errMsg.replace("chooseFile:fail",Q)})}})}))}(e),e)}const X=e=>{const t=e.lastIndexOf("."),s=e.length;return{name:e.substring(0,t),ext:e.substring(t+1,s)}},Y=e=>{if(Array.isArray(e))return e;return e.replace(/(\[|\])/g,"").split(",")},Z=async(e,t="image")=>{const s=X(e.name).ext.toLowerCase();let i={name:e.name,uuid:e.uuid,extname:s||"",cloudPath:e.cloudPath,fileType:e.fileType,url:e.path||e.path,size:e.size,image:{},path:e.path,video:{}};if("image"===t){const t=await(l=e.path,new Promise(((e,t)=>{p({src:l,success(t){e(t)},fail(e){t(e)}})})));delete i.video,i.image.width=t.width,i.image.height=t.height,i.image.location=t.path}else delete i.image;var l;return i};var ee=R({name:"uniFilePicker",components:{uploadImage:R({name:"uploadImage",emits:["uploadFiles","choose","delFile"],props:{filesList:{type:Array,default:()=>[]},disabled:{type:Boolean,default:!1},disablePreview:{type:Boolean,default:!1},limit:{type:[Number,String],default:9},imageStyles:{type:Object,default:()=>({width:"auto",height:"auto",border:{}})},delIcon:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1}},computed:{styles(){return Object.assign({width:"auto",height:"auto",border:{}},this.imageStyles)},boxStyle(){const{width:e="auto",height:t="auto"}=this.styles;let s={};"auto"===t?"auto"!==e?(s.height=this.value2px(e),s["padding-top"]=0):s.height=0:(s.height=this.value2px(t),s["padding-top"]=0),s.width="auto"===e?"auto"!==t?this.value2px(t):"33.3%":this.value2px(e);let i="";for(let l in s)i+=`${l}:${s[l]};`;return i},borderStyle(){let{border:e}=this.styles,t={};if("boolean"==typeof e)t.border=e?"1px #eee solid":"none";else{let s=e&&e.width||1;s=this.value2px(s);let i=e&&e.radius||3;i=this.value2px(i),t={"border-width":s,"border-style":e&&e.style||"solid","border-color":e&&e.color||"#eee","border-radius":i}}let s="";for(let i in t)s+=`${i}:${t[i]};`;return s}},methods:{uploadFiles(e,t){this.$emit("uploadFiles",e)},choose(){this.$emit("choose")},delFile(e){this.$emit("delFile",e)},prviewImage(e,t){let s=[];1===Number(this.limit)&&this.disablePreview&&!this.disabled&&this.$emit("choose"),this.disablePreview||(this.filesList.forEach((e=>{s.push(e.url)})),f({urls:s,current:t}))},value2px:e=>("number"==typeof e?e+="px":-1===e.indexOf("%")&&(e=-1!==e.indexOf("px")?e:e+"px"),e)}},[["render",function(e,t,s,i,l,a){const o=S,r=O,n=T;return m(),y(r,{class:"uni-file-picker__container"},{default:g((()=>[(m(!0),b(P,null,F(s.filesList,((e,t)=>(m(),y(r,{class:"file-picker__box",key:t,style:x(a.boxStyle)},{default:g((()=>[_(r,{class:"file-picker__box-content",style:x(a.borderStyle)},{default:g((()=>[_(o,{class:"file-image",src:e.url,mode:"aspectFill",onClick:k((s=>a.prviewImage(e,t)),["stop"])},null,8,["src","onClick"]),s.delIcon&&!s.readonly?(m(),y(r,{key:0,class:"icon-del-box",onClick:k((e=>a.delFile(t)),["stop"])},{default:g((()=>[_(r,{class:"icon-del"}),_(r,{class:"icon-del rotate"})])),_:2},1032,["onClick"])):w("",!0),e.progress&&100!==e.progress||0===e.progress?(m(),y(r,{key:1,class:"file-picker__progress"},{default:g((()=>[_(n,{class:"file-picker__progress-item",percent:-1===e.progress?0:e.progress,"stroke-width":"4",backgroundColor:e.errMsg?"#ff5a5f":"#EBEBEB"},null,8,["percent","backgroundColor"])])),_:2},1024)):w("",!0),e.errMsg?(m(),y(r,{key:2,class:"file-picker__mask",onClick:k((s=>a.uploadFiles(e,t)),["stop"])},{default:g((()=>[v(" 点击重试 ")])),_:2},1032,["onClick"])):w("",!0)])),_:2},1032,["style"])])),_:2},1032,["style"])))),128)),s.filesList.length<s.limit&&!s.readonly?(m(),y(r,{key:0,class:"file-picker__box",style:x(a.boxStyle)},{default:g((()=>[_(r,{class:"file-picker__box-content is-add",style:x(a.borderStyle),onClick:a.choose},{default:g((()=>[I(e.$slots,"default",{},(()=>[_(r,{class:"icon-add"}),_(r,{class:"icon-add rotate"})]),!0)])),_:3},8,["style","onClick"])])),_:3},8,["style"])):w("",!0)])),_:3})}],["__scopeId","data-v-6073ce03"]]),uploadFile:R({name:"uploadFile",emits:["uploadFiles","choose","delFile"],props:{filesList:{type:Array,default:()=>[]},delIcon:{type:Boolean,default:!0},limit:{type:[Number,String],default:9},showType:{type:String,default:""},listStyles:{type:Object,default:()=>({border:!0,dividline:!0,borderStyle:{}})},readonly:{type:Boolean,default:!1}},computed:{list(){let e=[];return this.filesList.forEach((t=>{e.push(t)})),e},styles(){return Object.assign({border:!0,dividline:!0,"border-style":{}},this.listStyles)},borderStyle(){let{borderStyle:e,border:t}=this.styles,s={};if(t){let t=e&&e.width||1;t=this.value2px(t);let i=e&&e.radius||5;i=this.value2px(i),s={"border-width":t,"border-style":e&&e.style||"solid","border-color":e&&e.color||"#eee","border-radius":i}}else s.border="none";let i="";for(let l in s)i+=`${l}:${s[l]};`;return i},borderLineStyle(){let e={},{borderStyle:t}=this.styles;if(t&&t.color&&(e["border-color"]=t.color),t&&t.width){let s=t&&t.width||1,i=t&&t.style||0;"number"==typeof s?s+="px":s=s.indexOf("px")?s:s+"px",e["border-width"]=s,"number"==typeof i?i+="px":i=i.indexOf("px")?i:i+"px",e["border-top-style"]=i}let s="";for(let i in e)s+=`${i}:${e[i]};`;return s}},methods:{uploadFiles(e,t){this.$emit("uploadFiles",{item:e,index:t})},choose(){this.$emit("choose")},delFile(e){this.$emit("delFile",e)},value2px:e=>("number"==typeof e?e+="px":e=-1!==e.indexOf("px")?e:e+"px",e)}},[["render",function(e,t,s,i,l,a){const o=O,r=T;return m(),y(o,{class:"uni-file-picker__files"},{default:g((()=>[s.readonly?w("",!0):(m(),y(o,{key:0,class:"files-button",onClick:a.choose},{default:g((()=>[I(e.$slots,"default",{},void 0,!0)])),_:3},8,["onClick"])),a.list.length>0?(m(),y(o,{key:1,class:"uni-file-picker__lists is-text-box",style:x(a.borderStyle)},{default:g((()=>[(m(!0),b(P,null,F(a.list,((e,t)=>(m(),y(o,{class:$(["uni-file-picker__lists-box",{"files-border":0!==t&&a.styles.dividline}]),key:t,style:x(0!==t&&a.styles.dividline&&a.borderLineStyle)},{default:g((()=>[_(o,{class:"uni-file-picker__item"},{default:g((()=>[_(o,{class:"files__name"},{default:g((()=>[v(C(e.name),1)])),_:2},1024),s.delIcon&&!s.readonly?(m(),y(o,{key:0,class:"icon-del-box icon-files",onClick:e=>a.delFile(t)},{default:g((()=>[_(o,{class:"icon-del icon-files"}),_(o,{class:"icon-del rotate"})])),_:2},1032,["onClick"])):w("",!0)])),_:2},1024),e.progress&&100!==e.progress||0===e.progress?(m(),y(o,{key:0,class:"file-picker__progress"},{default:g((()=>[_(r,{class:"file-picker__progress-item",percent:-1===e.progress?0:e.progress,"stroke-width":"4",backgroundColor:e.errMsg?"#ff5a5f":"#EBEBEB"},null,8,["percent","backgroundColor"])])),_:2},1024)):w("",!0),"error"===e.status?(m(),y(o,{key:1,class:"file-picker__mask",onClick:k((s=>a.uploadFiles(e,t)),["stop"])},{default:g((()=>[v(" 点击重试 ")])),_:2},1032,["onClick"])):w("",!0)])),_:2},1032,["class","style"])))),128))])),_:1},8,["style"])):w("",!0)])),_:3})}],["__scopeId","data-v-1328bd72"]])},emits:["select","success","fail","progress","delete","update:modelValue","input"],props:{modelValue:{type:[Array,Object],default:()=>[]},disabled:{type:Boolean,default:!1},disablePreview:{type:Boolean,default:!1},delIcon:{type:Boolean,default:!0},autoUpload:{type:Boolean,default:!0},limit:{type:[Number,String],default:9},mode:{type:String,default:"grid"},fileMediatype:{type:String,default:"image"},fileExtname:{type:[Array,String],default:()=>[]},title:{type:String,default:""},listStyles:{type:Object,default:()=>({border:!0,dividline:!0,borderStyle:{}})},imageStyles:{type:Object,default:()=>({width:"auto",height:"auto"})},readonly:{type:Boolean,default:!1},returnType:{type:String,default:"array"},sizeType:{type:Array,default:()=>["original","compressed"]}},data:()=>({files:[],localValue:[]}),watch:{modelValue:{handler(e,t){this.setValue(e,t)},immediate:!0}},computed:{filesList(){let e=[];return this.files.forEach((t=>{e.push(t)})),e},showType(){return"image"===this.fileMediatype?this.mode:"list"},limitLength(){return"object"===this.returnType?1:this.limit?this.limit>=9?9:this.limit:1}},created(){n.config&&n.config.provider||(this.noSpace=!0,n.chooseAndUploadFile=W),this.form=this.getForm("uniForms"),this.formItem=this.getForm("uniFormsItem"),this.form&&this.formItem&&this.formItem.name&&(this.rename=this.formItem.name,this.form.inputChildrens.push(this))},methods:{clearFiles(e){0===e||e?this.files.splice(e,1):(this.files=[],this.$nextTick((()=>{this.setEmit()}))),this.$nextTick((()=>{this.setEmit()}))},upload(){let e=[];this.files.forEach(((t,s)=>{"ready"!==t.status&&"error"!==t.status||e.push(Object.assign({},t))})),this.uploadFiles(e)},async setValue(e,t){const s=async e=>{let t="";return t=e.fileID?e.fileID:e.url,/cloud:\/\/([\w.]+\/?)\S*/.test(t)&&(e.fileID=t,e.url=await this.getTempFileURL(t)),e.url&&(e.path=e.url),e};if("object"===this.returnType)e?await s(e):e={};else{e||(e=[]);for(let t=0;t<e.length;t++){let i=e[t];await s(i)}}this.localValue=e,this.form&&this.formItem&&!this.is_reset&&(this.is_reset=!1,this.formItem.setValue(this.localValue));let i=Object.keys(e).length>0?e:[];this.files=[].concat(i)},choose(){this.disabled||(this.files.length>=Number(this.limitLength)&&"grid"!==this.showType&&"array"===this.returnType?h({title:`您最多选择 ${this.limitLength} 个文件`,icon:"none"}):this.chooseFiles())},chooseFiles(){const e=Y(this.fileExtname);n.chooseAndUploadFile({type:this.fileMediatype,compressed:!1,sizeType:this.sizeType,extension:e.length>0?e:void 0,count:this.limitLength-this.files.length,onChooseFile:this.chooseFileCallback,onUploadProgress:e=>{this.setProgress(e,e.index)}}).then((e=>{this.setSuccessAndError(e.tempFiles)})).catch((e=>{console.log("选择失败",e)}))},async chooseFileCallback(e){const i=Y(this.fileExtname);(1===Number(this.limitLength)&&this.disablePreview&&!this.disabled||"object"===this.returnType)&&(this.files=[]);let{filePaths:l,files:a}=((e,t)=>{let s=[],i=[];return t&&0!==t.length?(e.tempFiles.forEach((e=>{const l=X(e.name).ext.toLowerCase();-1!==t.indexOf(l)&&(i.push(e),s.push(e.path))})),i.length!==e.tempFiles.length&&h({title:`当前选择了${e.tempFiles.length}个文件 ，${e.tempFiles.length-i.length} 个文件格式不正确`,icon:"none",duration:5e3}),{filePaths:s,files:i}):{filePaths:s,files:i}})(e,i);i&&i.length>0||(l=e.tempFilePaths,a=e.tempFiles);let o=[];for(let u=0;u<a.length&&!(this.limitLength-this.files.length<=0);u++){a[u].uuid=Date.now();let e=await Z(a[u],this.fileMediatype);e.progress=0,e.status="ready",this.files.push(e),o.push((n=r({},e),d={file:a[u]},t(n,s(d))))}var n,d;this.$emit("select",{tempFiles:o,tempFilePaths:l}),e.tempFiles=a,this.autoUpload&&!this.noSpace||(e.tempFiles=[])},uploadFiles(e){e=[].concat(e),H.call(this,e,5,(e=>{this.setProgress(e,e.index,!0)})).then((e=>{this.setSuccessAndError(e)})).catch((e=>{console.log(e)}))},async setSuccessAndError(e,t){let s=[],i=[],l=[],a=[];for(let o=0;o<e.length;o++){const t=e[o],r=t.uuid?this.files.findIndex((e=>e.uuid===t.uuid)):t.index;if(-1===r||!this.files)break;if("request:fail"===t.errMsg)this.files[r].url=t.path,this.files[r].status="error",this.files[r].errMsg=t.errMsg,i.push(this.files[r]),a.push(this.files[r].url);else{this.files[r].errMsg="",this.files[r].fileID=t.url;/cloud:\/\/([\w.]+\/?)\S*/.test(t.url)?this.files[r].url=await this.getTempFileURL(t.url):this.files[r].url=t.url,this.files[r].status="success",this.files[r].progress+=1,s.push(this.files[r]),l.push(this.files[r].fileID)}}s.length>0&&(this.setEmit(),this.$emit("success",{tempFiles:this.backObject(s),tempFilePaths:l})),i.length>0&&this.$emit("fail",{tempFiles:this.backObject(i),tempFilePaths:a})},setProgress(e,t,s){this.files.length;const i=Math.round(100*e.loaded/e.total);let l=t;s||(l=this.files.findIndex((t=>t.uuid===e.tempFile.uuid))),-1!==l&&this.files[l]&&(this.files[l].progress=i-1,this.$emit("progress",{index:l,progress:parseInt(i),tempFile:this.files[l]}))},delFile(e){this.$emit("delete",{tempFile:this.files[e],tempFilePath:this.files[e].url}),this.files.splice(e,1),this.$nextTick((()=>{this.setEmit()}))},getFileExt(e){const t=e.lastIndexOf("."),s=e.length;return{name:e.substring(0,t),ext:e.substring(t+1,s)}},setEmit(){let e=[];"object"===this.returnType?(e=this.backObject(this.files)[0],this.localValue=e||null):(e=this.backObject(this.files),this.localValue||(this.localValue=[]),this.localValue=[...e]),this.$emit("update:modelValue",this.localValue)},backObject(e){let t=[];return e.forEach((e=>{t.push({extname:e.extname,fileType:e.fileType,image:e.image,name:e.name,path:e.path,size:e.size,fileID:e.fileID,url:e.url})})),t},async getTempFileURL(e){e={fileList:[].concat(e)};return(await n.getTempFileURL(e)).fileList[0].tempFileURL||""},getForm(e="uniForms"){let t=this.$parent,s=t.$options.name;for(;s!==e;){if(t=t.$parent,!t)return!1;s=t.$options.name}return t}}},[["render",function(e,t,s,i,l,a){const o=L,r=O,n=j("upload-image"),d=M,u=j("upload-file");return m(),y(r,{class:"uni-file-picker"},{default:g((()=>[s.title?(m(),y(r,{key:0,class:"uni-file-picker__header"},{default:g((()=>[_(o,{class:"file-title"},{default:g((()=>[v(C(s.title),1)])),_:1}),_(o,{class:"file-count"},{default:g((()=>[v(C(a.filesList.length)+"/"+C(a.limitLength),1)])),_:1})])),_:1})):w("",!0),"image"===s.fileMediatype&&"grid"===a.showType?(m(),y(n,{key:1,readonly:s.readonly,"image-styles":s.imageStyles,"files-list":a.filesList,limit:a.limitLength,disablePreview:s.disablePreview,delIcon:s.delIcon,onUploadFiles:a.uploadFiles,onChoose:a.choose,onDelFile:a.delFile},{default:g((()=>[I(e.$slots,"default",{},(()=>[_(r,{class:"is-add"},{default:g((()=>[_(r,{class:"icon-add"}),_(r,{class:"icon-add rotate"})])),_:1})]),!0)])),_:3},8,["readonly","image-styles","files-list","limit","disablePreview","delIcon","onUploadFiles","onChoose","onDelFile"])):w("",!0),"image"!==s.fileMediatype||"grid"!==a.showType?(m(),y(u,{key:2,readonly:s.readonly,"list-styles":s.listStyles,"files-list":a.filesList,showType:a.showType,delIcon:s.delIcon,onUploadFiles:a.uploadFiles,onChoose:a.choose,onDelFile:a.delFile},{default:g((()=>[I(e.$slots,"default",{},(()=>[_(d,{type:"primary",size:"mini"},{default:g((()=>[v("选择文件")])),_:1})]),!0)])),_:3},8,["readonly","list-styles","files-list","showType","delIcon","onUploadFiles","onChoose","onDelFile"])):w("",!0)])),_:3})}],["__scopeId","data-v-52a612e4"]]);const te={content:{rules:[{required:!0},{format:"string"}],label:"留言内容/回复内容"},imgs:{rules:[{format:"array"},{arrayType:"file"},{maxLength:6}],label:"图片列表"},contact:{rules:[{format:"string"}],label:"联系人"},mobile:{rules:[{format:"string"},{pattern:"^\\+?[0-9-]{3,20}$"}],label:"联系电话"}};console.log(te);const se=n.database();function ie(e){let t={};for(let s in te)e.indexOf(s)>-1&&(t[s]=te[s]);return t}var le=R({data(){let e={content:"",imgs:[],contact:"",mobile:""};return{formData:e,formOptions:{},rules:r({},ie(Object.keys(e)))}},onReady(){this.$refs.form.setRules(this.rules)},methods:{submit(){V({mask:!0}),this.$refs.form.validate().then((e=>{this.submitForm(e)})).catch((()=>{D()}))},submitForm(e){se.collection("opendb-feedback").add(e).then((e=>{h({icon:"none",title:"提交成功"}),this.getOpenerEventChannel().emit("refreshData"),setTimeout((()=>E()),500)})).catch((e=>{U({content:e.message||"请求服务失败",showCancel:!1})})).finally((()=>{D()}))}}},[["render",function(e,t,s,i,l,a){const o=B,r=N(A("uni-forms-item"),z),n=N(A("uni-file-picker"),ee),d=N(A("uni-easyinput"),q),u=M,c=O,h=N(A("uni-forms"),J);return m(),y(c,{class:"uni-container"},{default:g((()=>[_(h,{ref:"form",value:l.formData,"validate-trigger":"submit","err-show-type":"toast"},{default:g((()=>[_(r,{name:"content",label:"留言内容/回复内容",required:""},{default:g((()=>[_(o,{onInput:t[0]||(t[0]=t=>e.binddata("content",t.detail.value)),class:"uni-textarea-border",modelValue:l.formData.content,"onUpdate:modelValue":t[1]||(t[1]=e=>l.formData.content=e),trim:"right"},null,8,["modelValue"])])),_:1}),_(r,{name:"imgs",label:"图片列表"},{default:g((()=>[_(n,{"file-mediatype":"image",limit:6,"return-type":"array",modelValue:l.formData.imgs,"onUpdate:modelValue":t[2]||(t[2]=e=>l.formData.imgs=e)},null,8,["modelValue"])])),_:1}),_(r,{name:"contact",label:"联系人"},{default:g((()=>[_(d,{modelValue:l.formData.contact,"onUpdate:modelValue":t[3]||(t[3]=e=>l.formData.contact=e),trim:"both"},null,8,["modelValue"])])),_:1}),_(r,{name:"mobile",label:"联系电话"},{default:g((()=>[_(d,{modelValue:l.formData.mobile,"onUpdate:modelValue":t[4]||(t[4]=e=>l.formData.mobile=e),trim:"both"},null,8,["modelValue"])])),_:1}),_(c,{class:"uni-button-group"},{default:g((()=>[_(u,{type:"primary",class:"uni-button",onClick:a.submit},{default:g((()=>[v("提交")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["value"])])),_:1})}],["__scopeId","data-v-770654ce"]]);export{le as default};
