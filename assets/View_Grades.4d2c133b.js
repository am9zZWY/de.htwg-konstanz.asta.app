import{_ as j,d as w,T as E,k as N,f as _,u as $,l as k,g as B,m as V,c,e as a,a as G,w as v,F as d,n as P,p as y,r as C,o as l,q as T,i as F,t as h,b as O}from"./index.fc66a900.js";const q=w({name:"View_Grades",components:{Tile:E,TileGroup:N},setup(){const e=_(1),u=_([]),p=_(0),S=$(),b=async()=>{const t=await P("noten",S);u.value=t.content,p.value=t.status},m=t=>t.replace(/(\\n|\\t)/g,"").trim(),g=t=>t.reduce((n,o)=>parseInt(o.ects)+n,0),f=()=>e.value*=-1,s=k(()=>u.value.reduce((t,n)=>(n.semester in t||(t[n.semester]=[]),t[n.semester].push(Object.assign({},...Object.entries(n).map(([o,i])=>({[m(o)]:m(i)})))),t),{})),r=k(()=>Object.keys(s.value).sort((t,n)=>{const o=t.match(/(\d+\/\d+)|(\d+)/),i=n.match(/(\d+\/\d+)|(\d+)/);return!y(o)&&!y(i)?e.value===1?o[0].localeCompare(i[0]):i[0].localeCompare(o[0]):1}));return B(b),V(b),{status:p,semesters:r,gradePerSemester:s,changeOrder:f,calcECTS:g,cleanString:m}}}),A=["aria-describedby"],D=a("tr",null,[a("th",{id:"subject",class:"subject"},"Fach"),a("th",{id:"status",class:"status"},"Status/Note")],-1),I={class:"subject"},L={class:"status"};function M(e,u,p,S,b,m){const g=C("tile"),f=C("tile-group");return l(),c(d,null,[a("div",null,[a("button",{class:"button dark-bg",role:"button",onClick:u[0]||(u[0]=(...s)=>e.changeOrder&&e.changeOrder(...s))}," Sortierung \xE4ndern ")]),G(f,{status:e.status,"tile-title":"Noten"},{default:v(()=>[(l(!0),c(d,null,T(e.semesters,s=>(l(),F(g,{key:s,"tile-title":s,"tile-subtitle":`${e.calcECTS(e.gradePerSemester[s])} ECTS-Punkte`},{default:v(()=>[a("table",{"aria-describedby":`Tabelle mit Noten des ${s}`,class:"grades"},[D,(l(!0),c(d,null,T(e.gradePerSemester[s],r=>(l(),c("tr",{key:r.number,class:"grade"},[a("td",I,h(r.name),1),a("td",L,[e.cleanString(r.grade)===""?(l(),c(d,{key:0},[O(h(e.cleanString(r.status)),1)],64)):(l(),c(d,{key:1},[O(h(e.cleanString(r.grade)),1)],64))])]))),128))],8,A)]),_:2},1032,["tile-title","tile-subtitle"]))),128))]),_:1},8,["status"])],64)}var z=j(q,[["render",M]]);export{z as default};