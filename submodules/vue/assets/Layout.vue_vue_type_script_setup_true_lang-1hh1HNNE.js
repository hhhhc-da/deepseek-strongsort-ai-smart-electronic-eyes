import{_ as w}from"./Page.vue_vue_type_script_setup_true_lang-CmbE-wD_.js";import{_ as $,C as I,a as P,b as M,c as B}from"./DropdownMenuTrigger.vue_vue_type_script_setup_true_lang-Dk20vw9c.js";import{h as o,d as b,a8 as D,p as g,$ as r,r as z,o as a,a as _,J as x,V as k,f as s,w as c,c as l,a5 as f,b as n,t as m,n as A,u as t,g as V,e as L}from"./index-zul1sP2k.js";/**
 * @license lucide-vue-next v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=o("BellDotIcon",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M13.916 2.314A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673 9 9 0 0 1-.585-.665",key:"1tip0g"}],["circle",{cx:"18",cy:"8",r:"3",key:"1g0gzu"}]]);/**
 * @license lucide-vue-next v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=o("PaletteIcon",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-vue-next v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=o("PictureInPicture2Icon",[["path",{d:"M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4",key:"daa4of"}],["rect",{width:"10",height:"7",x:"12",y:"13",rx:"2",key:"1nb8gs"}]]);/**
 * @license lucide-vue-next v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=o("UserIcon",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-vue-next v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=o("WrenchIcon",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]),j={class:"flex flex-col gap-2"},q={class:"flex items-center w-48 px-2 py-1 border rounded-md lg:hidden hover:bg-primary/5 border-primary/4"},E="text-primary font-semibold bg-primary/5",F=b({__name:"Aside",setup(C){const i=D(),p=g(()=>i.path),u=[{path:"/settings/",label:"Profile",icon:r(H)},{path:"/settings/account",label:"Account",icon:r(W)},{path:"/settings/appearance",label:"Appearance",icon:r(S)},{path:"/settings/notifications",label:"Notifications",icon:r(N)},{path:"/settings/display",label:"Display",icon:r(U)}],y=g(()=>u.find(d=>d.path===p.value));return(d,R)=>{const v=z("router-link");return a(),_("nav",j,[(a(),_(x,null,k(u,e=>s(v,{key:e.path,to:e.path,class:A(["items-center hidden px-2 py-1 rounded-md lg:flex hover:bg-primary/5",e.path===t(p)?E:""])},{default:c(()=>[(a(),l(f(e.icon),{class:"w-4 h-4 mr-1"})),n("span",null,m(e.label),1)]),_:2},1032,["to","class"])),64)),s(t(B),{class:"lg:hidden"},{default:c(()=>[s(t($),null,{default:c(()=>{var e,h;return[n("div",q,[(a(),l(f((e=t(y))==null?void 0:e.icon),{class:"w-4 h-4 mr-1"})),n("span",null,m((h=t(y))==null?void 0:h.label),1),s(t(I),{class:"w-4 h-4 ml-auto"})])]}),_:1}),s(t(P),{class:"w-48",align:"start"},{default:c(()=>[(a(),_(x,null,k(u,e=>s(t(M),{key:e.path,onClick:h=>d.$router.push(e.path)},{default:c(()=>[(a(),l(f(e.icon),{class:"w-4 h-4 mr-1"})),V(" "+m(e.label),1)]),_:2},1032,["onClick"])),64))]),_:1})]),_:1})])}}}),J={class:"grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-4 w-full"},O=b({__name:"Layout",setup(C){return(i,p)=>(a(),l(w,{title:"Settings",description:"Manage your store settings."},{default:c(()=>[n("main",J,[s(F),n("section",null,[L(i.$slots,"default")])])]),_:3}))}});export{O as _};
