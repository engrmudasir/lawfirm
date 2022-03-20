"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[927],{5860:(e,r,t)=>{t.d(r,{Z:()=>d});var n=t(7757),o=t.n(n),a=t(821),s=t(9669),l=t.n(s),u=t(8637),c=t(2119),i=t(4400);function f(e,r,t,n,o,a,s){try{var l=e[a](s),u=l.value}catch(e){return void t(e)}l.done?r(u):Promise.resolve(u).then(n,o)}function p(e){return function(){var r=this,t=arguments;return new Promise((function(n,o){var a=e.apply(r,t);function s(e){f(a,n,o,s,l,"next",e)}function l(e){f(a,n,o,s,l,"throw",e)}s(void 0)}))}}function d(){var e=(0,a.iH)([]),r=(0,a.iH)([]),t=(0,a.iH)(""),n=(0,c.tv)(),s=(0,i.pm)(),f=(0,i.dd)(),d=(0,u.oR)(),v=function(){var e=p(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Getting offices"),e.prev=1,e.next=4,d.dispatch("office/getOffices").then((function(e){r.value=e.data.data})).catch((function(e){console.log("error Getting Offices"),console.log(e)}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log("Main JS error Getting Offices");case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var r=p(o().mark((function r(t){var n;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,l().get("/api/offices/".concat(t));case 2:n=r.sent,e.value=n.data.data;case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),h=function(){var e=p(o().mark((function e(r){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.value="",e.prev=1,e.next=4,d.dispatch("office/createOffice",r).then((function(e){console.log("response Create Office"),console.log(e),s.show({type:"success",message:"Office Created Successfully."}),n.push({name:"List Offices"})})).catch((function(e){if(console.log("error Creating Offices"),console.log(e),422===e.response.status)for(var r in e.response.data.errors)t.value+=e.response.data.errors[r][0]+" ";else if(500===e.response.status)f.show({type:"danger",title:"Server Error",body:e.response.data.message,primary:{label:"Ok",theme:"red",action:function(){return!1}}});else f.show({type:"danger",title:"Server Error",body:"There is some Server Error.",primary:{label:"Ok",theme:"red",action:function(){return!1}}})}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log("Error Creating Office in JS");case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(r){return e.apply(this,arguments)}}(),g=function(){var r=p(o().mark((function r(a){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.value="",r.prev=1,r.next=4,d.dispatch("office/updateOffice",{id:a,office:e.value}).then((function(e){console.log("response Updating Office"),s.show({type:"success",message:"Office Updated Successfully."}),n.push({name:"List Offices"})})).catch((function(e){if(console.log("error Updating Offices"),422===e.response.status)for(var r in e.response.data.errors)t.value+=e.response.data.errors[r][0]+" ";else if(500===e.response.status)f.show({type:"danger",title:"Server Error",body:e.response.data.message,primary:{label:"Ok",theme:"red",action:function(){return!1}}});else f.show({type:"danger",title:"Server Error",body:"There is some Server Error.",primary:{label:"Ok",theme:"red",action:function(){return!1}}})}));case 4:r.next=9;break;case 6:r.prev=6,r.t0=r.catch(1),console.log("Error while updating in JS");case 9:case"end":return r.stop()}}),r,null,[[1,6]])})));return function(e){return r.apply(this,arguments)}}(),y=function(){var e=p(o().mark((function e(r){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l().delete("/api/offices/".concat(r)).then((function(e){s.show({type:"danger",message:"Office Deleted Successfully."})}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return{errors:t,office:e,offices:r,getOffice:m,getOffices:v,storeOffice:h,updateOffice:g,destroyOffice:y}}},964:(e,r,t)=>{t.d(r,{Z:()=>d});var n=t(7757),o=t.n(n),a=t(821),s=t(9669),l=t.n(s),u=t(8637),c=t(2119),i=t(4400);function f(e,r,t,n,o,a,s){try{var l=e[a](s),u=l.value}catch(e){return void t(e)}l.done?r(u):Promise.resolve(u).then(n,o)}function p(e){return function(){var r=this,t=arguments;return new Promise((function(n,o){var a=e.apply(r,t);function s(e){f(a,n,o,s,l,"next",e)}function l(e){f(a,n,o,s,l,"throw",e)}s(void 0)}))}}function d(){var e=(0,a.iH)([]),r=(0,a.iH)([]),t=(0,a.iH)(""),n=(0,c.tv)(),s=(0,i.pm)(),f=(0,i.dd)(),d=(0,u.oR)(),v=function(){var e=p(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Getting roles"),e.prev=1,e.next=4,d.dispatch("role/getRoles").then((function(e){r.value=e.data.data})).catch((function(e){console.log("error Getting Roles"),console.log(e)}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log("Main JS error Getting Roles");case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var r=p(o().mark((function r(t){var n;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,l().get("/api/roles/".concat(t));case 2:n=r.sent,e.value=n.data.data;case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),h=function(){var e=p(o().mark((function e(r){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.value="",e.prev=1,e.next=4,d.dispatch("role/createRole",r).then((function(e){console.log("response Create Role"),console.log(e),s.show({type:"success",message:"Role Created Successfully."}),n.push({name:"List Roles"})})).catch((function(e){if(console.log("error Creating Roles"),console.log(e),422===e.response.status)for(var r in e.response.data.errors)t.value+=e.response.data.errors[r][0]+" ";else if(500===e.response.status)f.show({type:"danger",title:"Server Error",body:e.response.data.message,primary:{label:"Ok",theme:"red",action:function(){return!1}}});else f.show({type:"danger",title:"Server Error",body:"There is some Server Error.",primary:{label:"Ok",theme:"red",action:function(){return!1}}})}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log("Error Creating Role in JS");case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(r){return e.apply(this,arguments)}}(),g=function(){var r=p(o().mark((function r(a){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.value="",r.prev=1,r.next=4,d.dispatch("role/updateRole",{id:a,role:e.value}).then((function(e){console.log("response Updating Role"),s.show({type:"success",message:"Role Updated Successfully."}),n.push({name:"List Roles"})})).catch((function(e){if(console.log("error Updating Roles"),422===e.response.status)for(var r in e.response.data.errors)t.value+=e.response.data.errors[r][0]+" ";else if(500===e.response.status)f.show({type:"danger",title:"Server Error",body:e.response.data.message,primary:{label:"Ok",theme:"red",action:function(){return!1}}});else f.show({type:"danger",title:"Server Error",body:"There is some Server Error.",primary:{label:"Ok",theme:"red",action:function(){return!1}}})}));case 4:r.next=9;break;case 6:r.prev=6,r.t0=r.catch(1),console.log("Error while updating in JS");case 9:case"end":return r.stop()}}),r,null,[[1,6]])})));return function(e){return r.apply(this,arguments)}}(),y=function(){var e=p(o().mark((function e(r){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l().delete("/api/roles/".concat(r)).then((function(e){s.show({type:"danger",message:"Role Deleted Successfully."})}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return{errors:t,role:e,roles:r,getRole:m,getRoles:v,storeRole:h,updateRole:g,destroyRole:y}}},6276:(e,r,t)=>{t.d(r,{Z:()=>d});var n=t(7757),o=t.n(n),a=t(821),s=t(9669),l=t.n(s),u=t(8637),c=t(2119),i=t(4400);function f(e,r,t,n,o,a,s){try{var l=e[a](s),u=l.value}catch(e){return void t(e)}l.done?r(u):Promise.resolve(u).then(n,o)}function p(e){return function(){var r=this,t=arguments;return new Promise((function(n,o){var a=e.apply(r,t);function s(e){f(a,n,o,s,l,"next",e)}function l(e){f(a,n,o,s,l,"throw",e)}s(void 0)}))}}function d(){var e=(0,a.iH)([]),r=(0,a.iH)([]),t=(0,a.iH)(""),n=(0,c.tv)(),s=(0,i.pm)(),f=(0,i.dd)(),d=(0,u.oR)(),v=function(){var e=p(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Getting users"),e.prev=1,e.next=4,d.dispatch("user/getUsers").then((function(e){r.value=e.data.data})).catch((function(e){console.log("error Getting Users"),console.log(e)}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log("Main JS error Getting Users");case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var r=p(o().mark((function r(t){var n;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,l().get("/api/users/".concat(t));case 2:n=r.sent,e.value=n.data.data,console.log(e.value);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),h=function(){var e=p(o().mark((function e(r){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.value="",e.prev=1,e.next=4,d.dispatch("user/createUser",r).then((function(e){console.log("response Create User"),console.log(e),s.show({type:"success",message:"User Created Successfully."}),n.push({name:"List Users"})})).catch((function(e){if(console.log("error Creating Users"),console.log(e),422===e.response.status)for(var r in e.response.data.errors)t.value+=e.response.data.errors[r][0]+" ";else if(500===e.response.status)f.show({type:"danger",title:"Server Error",body:e.response.data.message,primary:{label:"Ok",theme:"red",action:function(){return!1}}});else f.show({type:"danger",title:"Server Error",body:"There is some Server Error.",primary:{label:"Ok",theme:"red",action:function(){return!1}}})}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log("Error Creating User in JS");case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(r){return e.apply(this,arguments)}}(),g=function(){var r=p(o().mark((function r(a){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.value="",r.prev=1,r.next=4,d.dispatch("user/updateUser",{id:a,user:e.value}).then((function(e){console.log("response Updating User"),s.show({type:"success",message:"User Updated Successfully."}),n.push({name:"List Users"})})).catch((function(e){if(console.log("error Updating Users"),422===e.response.status)for(var r in e.response.data.errors)t.value+=e.response.data.errors[r][0]+" ";else if(500===e.response.status)f.show({type:"danger",title:"Server Error",body:e.response.data.message,primary:{label:"Ok",theme:"red",action:function(){return!1}}});else f.show({type:"danger",title:"Server Error",body:"There is some Server Error.",primary:{label:"Ok",theme:"red",action:function(){return!1}}})}));case 4:r.next=9;break;case 6:r.prev=6,r.t0=r.catch(1),console.log("Error while updating in JS");case 9:case"end":return r.stop()}}),r,null,[[1,6]])})));return function(e){return r.apply(this,arguments)}}(),y=function(){var e=p(o().mark((function e(r){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l().delete("/api/users/".concat(r)).then((function(e){s.show({type:"danger",message:"User Deleted Successfully."})}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return{errors:t,user:e,users:r,getUser:m,getUsers:v,storeUser:h,updateUser:g,destroyUser:y}}},7007:(e,r,t)=>{t.d(r,{Z:()=>l});var n=t(821),o=["type","name","value"],a=(0,n._)("span",{class:"check"},null,-1),s={class:"control-label"};const l={props:{options:{type:Object,default:function(){}},name:{type:String,required:!0},type:{type:String,default:"checkbox"},column:Boolean,modelValue:{type:[Object,Array,String,Number],default:null}},emits:["update:modelValue"],setup:function(e,r){var t=r.emit,l=e,u=(0,n.Fl)({get:function(){return l.modelValue},set:function(e){t("update:modelValue",e)}}),c=(0,n.Fl)((function(){return"radio"===l.type?"radio":"checkbox"}));return function(r,t){return(0,n.wg)(),(0,n.iD)("div",{class:(0,n.C_)(["flex justify-start flex-wrap -mb-3",{"flex-col":e.column}])},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.options,(function(r,l){return(0,n.wg)(),(0,n.iD)("label",{key:l,class:(0,n.C_)([e.type,"mr-6 mb-3 last:mr-0"])},[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return(0,n.dq)(u)?u.value=e:null}),type:(0,n.SU)(c),name:e.name,value:l},null,8,o),[[n.YZ,(0,n.SU)(u)]]),a,(0,n._)("span",s,(0,n.zw)(r),1)],2)})),128))],2)}}}},9938:(e,r,t)=>{t.d(r,{Z:()=>c});var n=t(821),o={class:"mb-6 last:mb-0"},a={key:0,class:"block font-bold mb-2"},s={key:1,class:"text-xs text-gray-500 dark:text-gray-400 mt-1"},l={key:2,class:"text-xs text-blue-500 dark:text-blue-400 mt-1"},u={key:3,class:"text-xs text-red-500 dark:text-red-400 mt-1"};const c={props:{label:{type:String,default:null},help:{type:String,default:null},info:{type:String,default:null},error:{type:String,default:null}},setup:function(e){var r=(0,n.Rr)(),t=(0,n.Fl)((function(){var e=[],t=r.default().length;return t>1&&e.push("grid grid-cols-1 gap-3"),2===t&&e.push("md:grid-cols-2"),e}));return function(r,c){return(0,n.wg)(),(0,n.iD)("div",o,[e.label?((0,n.wg)(),(0,n.iD)("label",a,(0,n.zw)(e.label),1)):(0,n.kq)("",!0),(0,n._)("div",{class:(0,n.C_)((0,n.SU)(t))},[(0,n.WI)(r.$slots,"default")],2),e.help?((0,n.wg)(),(0,n.iD)("div",s,(0,n.zw)(e.help),1)):(0,n.kq)("",!0),e.info?((0,n.wg)(),(0,n.iD)("div",l,(0,n.zw)(e.info),1)):e.error?((0,n.wg)(),(0,n.iD)("div",u,(0,n.zw)(e.error),1)):(0,n.kq)("",!0)])}}}},1809:(e,r,t)=>{t.d(r,{Z:()=>f});var n=t(821),o=t(5317),a=t(8685),s={class:"flex items-stretch justify-start relative"},l={class:"inline-flex"},u=["accept"],c={key:0},i={class:"inline-flex px-4 py-2 justify-center bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 border rounded-r"};const f={props:{modelValue:{type:[Object,File,Array],default:null},label:{type:String,default:"Upload"},icon:{type:String,default:o.xyB},accept:{type:String,default:null},color:{type:String,default:"info"}},emits:["update:modelValue"],setup:function(e,r){var t=r.emit,o=e,f=(0,n.iH)(null),p=(0,n.iH)(o.modelValue),d=(0,n.Fl)((function(){return o.modelValue}));(0,n.YP)(d,(function(e){p.value=e,e||(f.value.input.value=null)}));var v=function(e){var r=e.target.files||e.dataTransfer.files;p.value=r[0],t("update:modelValue",p.value)};return function(r,t){return(0,n.wg)(),(0,n.iD)("div",s,[(0,n._)("label",l,[(0,n.Wm)(a.Z,{as:"a",label:e.label,icon:e.icon,color:e.color,class:(0,n.C_)({"rounded-r-none":p.value})},null,8,["label","icon","color","class"]),(0,n._)("input",{ref_key:"root",ref:f,type:"file",class:"absolute top-0 left-0 w-full h-full opacity-0 outline-none cursor-pointer -z-1",accept:e.accept,onInput:v},null,40,u)]),p.value?((0,n.wg)(),(0,n.iD)("div",c,[(0,n._)("span",i,(0,n.zw)(p.value.name),1)])):(0,n.kq)("",!0)])}}}},625:(e,r,t)=>{t.d(r,{Z:()=>a});var n=t(821),o={key:1,class:"text-2xl text-gray-500 dark:text-gray-400"};const a={props:{custom:Boolean,first:Boolean,last:Boolean},setup:function(e){return function(r,t){return(0,n.wg)(),(0,n.iD)("section",{class:(0,n.C_)(["py-24 px-6 lg:px-0 lg:max-w-2xl lg:mx-auto text-center",{"-mb-6":e.first,"-mt-6":e.last,"-my-6":!e.first&&!e.last}])},[e.custom?(0,n.WI)(r.$slots,"default",{key:0}):((0,n.wg)(),(0,n.iD)("h1",o,[(0,n.WI)(r.$slots,"default")]))],2)}}}},6285:(e,r,t)=>{t.r(r),t.d(r,{default:()=>_});var n=t(7757),o=t.n(n),a=t(821),s=t(8637),l=t(5317),u=t(2338),c=t(711),i=t(3743),f=t(7856),p=(t(7007),t(1809),t(7100)),d=t(9938),v=t(8734),m=t(3053),h=t(8685),g=t(2576),y=(t(625),t(2961),t(6276)),b=t(5860),w=t(964);function x(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function S(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?x(Object(t),!0).forEach((function(r){k(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function k(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function U(e,r,t,n,o,a,s){try{var l=e[a](s),u=l.value}catch(e){return void t(e)}l.done?r(u):Promise.resolve(u).then(n,o)}var O=(0,a.Uk)("Create User");const _={setup:function(e){var r=(0,s.oR)(),t=(0,a.iH)(!1),n=(0,y.Z)(),x=n.errors,k=n.storeUser,_=(0,b.Z)(),Z=_.offices,R=_.getOffices,E=(0,w.Z)(),V=E.roles,P=E.getRoles,C=(0,a.iH)(["Admin","Users","Create"]),j=((0,a.qj)({checkbox:["lorem"],radio:"one",switch:["one"],file:null}),function(){var e,r=(e=o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.value=!0,e.prev=1,e.next=4,k(S({},W));case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),console.log("Error on Create User"),console.log(e.t0);case 10:t.value=!1;case 11:case"end":return e.stop()}}),e,null,[[1,6]])})),function(){var r=this,t=arguments;return new Promise((function(n,o){var a=e.apply(r,t);function s(e){U(a,n,o,s,l,"next",e)}function l(e){U(a,n,o,s,l,"throw",e)}s(void 0)}))});return function(){return r.apply(this,arguments)}}());(0,a.bv)(R),(0,a.bv)(P);var W=(0,a.qj)({name:"",email:"",password:"",password_confirmation:"",role_id:"",office_id:""}),D=(0,a.Fl)((function(){return r.state.auth.user.roles?r.state.auth.user.roles[0].name:null}));return function(e,r){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(i.Z,{"title-stack":C.value},null,8,["title-stack"]),(0,a.Wm)(p.Z,{buttonLabel:"Users List",buttonIcon:(0,a.SU)(l.DP7),buttonTo:"/admin/users"},{default:(0,a.w5)((function(){return[O]})),_:1},8,["buttonIcon"]),(0,a.Wm)(u.Z,null,{default:(0,a.w5)((function(){return[(0,a.SU)(x)?((0,a.wg)(),(0,a.j4)(c.Z,{key:0,color:"danger",icon:(0,a.SU)(l.fr4)},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,a.zw)((0,a.SU)(x)),1)]})),_:1},8,["icon"])):(0,a.kq)("",!0),(0,a.Wm)(f.Z,{form:"",onSubmit:(0,a.iM)(j,["prevent"]),autocomplete:"off"},{default:(0,a.w5)((function(){return[(0,a.Wm)(d.Z,{label:"Name",help:"Please enter name."},{default:(0,a.w5)((function(){return[(0,a.Wm)(v.Z,{modelValue:(0,a.SU)(W).name,"onUpdate:modelValue":r[0]||(r[0]=function(e){return(0,a.SU)(W).name=e}),placeholder:"Name",icon:(0,a.SU)(l.rI3),disabled:t.value},null,8,["modelValue","icon","disabled"])]})),_:1}),(0,a.Wm)(d.Z,{label:"Email",help:"Please enter email of the user."},{default:(0,a.w5)((function(){return[(0,a.Wm)(v.Z,{modelValue:(0,a.SU)(W).email,"onUpdate:modelValue":r[1]||(r[1]=function(e){return(0,a.SU)(W).email=e}),placeholder:"Email Address",icon:(0,a.SU)(l.xaU),disabled:t.value},null,8,["modelValue","icon","disabled"])]})),_:1}),(0,a.Wm)(d.Z,{label:"Password"},{default:(0,a.w5)((function(){return[(0,a.Wm)(v.Z,{modelValue:(0,a.SU)(W).password,"onUpdate:modelValue":r[2]||(r[2]=function(e){return(0,a.SU)(W).password=e}),type:"password",icon:(0,a.SU)(l.$_S),placeholder:"Password",disabled:t.value},null,8,["modelValue","icon","disabled"]),(0,a.Wm)(v.Z,{modelValue:(0,a.SU)(W).password_confirmation,"onUpdate:modelValue":r[3]||(r[3]=function(e){return(0,a.SU)(W).password_confirmation=e}),type:"password",icon:(0,a.SU)(l.$_S),placeholder:"Password Confirmation",disabled:t.value},null,8,["modelValue","icon","disabled"])]})),_:1}),(0,a.Wm)(d.Z,{label:"Role"},{default:(0,a.w5)((function(){return[(0,a.Wm)(v.Z,{modelValue:(0,a.SU)(W).role_id,"onUpdate:modelValue":r[4]||(r[4]=function(e){return(0,a.SU)(W).role_id=e}),options:(0,a.SU)(V),placeholder:"Role",defaultOptionText:"Please Select Role",disabled:t.value},null,8,["modelValue","options","disabled"])]})),_:1}),"Super Admin"==(0,a.SU)(D)?((0,a.wg)(),(0,a.j4)(d.Z,{key:0,label:"Office"},{default:(0,a.w5)((function(){return[(0,a.Wm)(v.Z,{modelValue:(0,a.SU)(W).office_id,"onUpdate:modelValue":r[5]||(r[5]=function(e){return(0,a.SU)(W).office_id=e}),options:(0,a.SU)(Z),placeholder:"Office",defaultOptionText:"Please Select Office",disabled:t.value},null,8,["modelValue","options","disabled"])]})),_:1})):(0,a.kq)("",!0),(0,a.Wm)(m.Z),(0,a.Wm)(g.Z,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(h.Z,{type:"submit",color:"info",label:"Create",busy:t.value,disabled:t.value},null,8,["busy","disabled"]),(0,a.Wm)(h.Z,{type:"reset",color:"info",outline:"",label:"Reset"})]})),_:1})]})),_:1},8,["onSubmit"])]})),_:1})],64)}}}}}]);