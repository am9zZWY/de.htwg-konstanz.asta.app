import{_ as p,d as m,T as f,f as r,x as v,u as c,c as w,a as _,w as C,r as g,o as V,e as o,y as l,z as i,A as b}from"./index.fc66a900.js";const h=m({name:"View_Login",components:{Tile:f},setup(){const e=r(""),s=r(""),n=v(),t=c();return{username:e,password:s,saveCredentials:()=>{t.commit("storeCredentials",{username:e.value,password:s.value}),e.value="",s.value="",n.push({name:"Home"})}}}}),B={class:"tile-group no-pointer"},y={class:"form"},$={class:"form-group"},k=o("label",{class:"form-label",for:"username"},"RZ-Benutzername",-1),T={class:"form-group"},z=o("label",{class:"form-label",for:"password"},"Passwort",-1),E={class:"form-group"};function K(e,s,n,t,d,L){const u=g("tile");return V(),w("div",B,[_(u,null,{default:C(()=>[o("div",y,[o("div",$,[k,l(o("input",{id:"username",class:"form-input",placeholder:"Bsp. jo391mue","onUpdate:modelValue":s[0]||(s[0]=a=>e.username=a)},null,512),[[i,e.username]])]),o("div",T,[z,l(o("input",{id:"password",class:"form-input",type:"password","onUpdate:modelValue":s[1]||(s[1]=a=>e.password=a),onKeydown:s[2]||(s[2]=b((...a)=>e.saveCredentials&&e.saveCredentials(...a),["enter"]))},null,544),[[i,e.password]])]),o("div",E,[o("button",{onClick:s[3]||(s[3]=(...a)=>e.saveCredentials&&e.saveCredentials(...a))},"Einloggen")])])]),_:1})])}var R=p(h,[["render",K]]);export{R as default};