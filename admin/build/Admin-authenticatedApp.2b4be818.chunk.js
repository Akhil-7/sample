"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[801],{63339:(K,R,n)=>{n.r(R),n.d(R,{default:()=>en});var e=n(53547),i=n(68547),B=n(23724),P=n(27361),Q=n.n(P);const S={i8:"4.1.9"};var W=n(32104),f=n(49656),V=n(99168),x=n(61080),C=n(78384),F=n(45697),s=n.n(F),T=n(97132),G=n(97833),v=n(54035),b=n(15577),l=n(94117),d=n(33483),E=n(9524),M=n(14613),Be=n.n(M),be=n(42075),Ge=n.n(be),Ue=n(80380);const Fe=(0,C.default)(l.Box)`
  width: ${150/16}rem;
  position: absolute;
  bottom: ${({theme:t})=>t.spaces[9]};
  left: ${({theme:t})=>t.spaces[5]};
`,te=(0,C.default)(f.NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  padding: ${({theme:t})=>`${t.spaces[2]} ${t.spaces[4]}`};
  border-radius: ${({theme:t})=>t.spaces[1]};

  &:hover {
    background: ${({theme:t,logout:o})=>o?t.colors.danger100:t.colors.primary100};
    text-decoration: none;
  }

  svg {
    path {
      fill: ${({theme:t})=>t.colors.danger600};
    }
  }
`,ne=({generalSectionLinks:t,pluginsSectionLinks:o})=>{const a=(0,e.useRef)(),[r,c]=(0,e.useState)(!1),{menuLogo:u}=(0,Ue.Z)(),[g,y]=(0,i.usePersistentState)("navbar-condensed",!1),{userDisplayName:h}=(0,i.useAppInfos)(),{formatMessage:m}=(0,T.useIntl)(),L=h.split(" ").map(p=>p.substring(0,1)).join("").substring(0,2),D=()=>c(p=>!p),j=()=>{i.auth.clearAppStorage(),D()},$=p=>{var A,I;!p.currentTarget.contains(p.relatedTarget)&&((I=(A=p.relatedTarget)==null?void 0:A.parentElement)==null?void 0:I.id)!=="main-nav-user-button"&&c(!1)},U=m({id:"app.components.LeftMenu.navbrand.title",defaultMessage:"Strapi Dashboard"});return e.createElement(v.MainNav,{condensed:g},e.createElement(v.NavBrand,{workplace:m({id:"app.components.LeftMenu.navbrand.workplace",defaultMessage:"Workplace"}),title:U,icon:e.createElement("img",{src:u,alt:U})}),e.createElement(G.Divider,null),e.createElement(v.NavSections,null,e.createElement(v.NavLink,{to:"/content-manager",icon:e.createElement(Be(),null)},m({id:"global.content-manager",defaultMessage:"Content manager"})),o.length>0?e.createElement(v.NavSection,{label:"Plugins"},o.map(p=>{const A=p.icon;return e.createElement(v.NavLink,{to:p.to,key:p.to,icon:e.createElement(A,null)},m(p.intlLabel))})):null,t.length>0?e.createElement(v.NavSection,{label:"General"},t.map(p=>{const A=p.icon;return e.createElement(v.NavLink,{badgeContent:p.notificationsCount>0&&p.notificationsCount.toString()||void 0,to:p.to,key:p.to,icon:e.createElement(A,null)},m(p.intlLabel))})):null),e.createElement(v.NavUser,{id:"main-nav-user-button",ref:a,onClick:D,initials:L},h),r&&e.createElement(Fe,{onBlur:$,padding:1,shadow:"tableShadow",background:"neutral0",hasRadius:!0},e.createElement(b.FocusTrap,{onEscape:D},e.createElement(E.Stack,{spacing:0},e.createElement(te,{tabIndex:0,onClick:D,to:"/me"},e.createElement(d.Typography,null,m({id:"global.profile",defaultMessage:"Profile"}))),e.createElement(te,{tabIndex:0,onClick:j,logout:"logout",to:"/auth/login"},e.createElement(d.Typography,{textColor:"danger600"},m({id:"app.components.LeftMenu.logout",defaultMessage:"Logout"})),e.createElement(Ge(),null))))),e.createElement(v.NavCondense,{onClick:()=>y(p=>!p)},m(g?{id:"app.components.LeftMenu.expand",defaultMessage:"Expand the navbar"}:{id:"app.components.LeftMenu.collapse",defaultMessage:"Collapse the navbar"})))};ne.propTypes={generalSectionLinks:s().array.isRequired,pluginsSectionLinks:s().array.isRequired};const Ne=ne;var O=n(40264),We=n(80117);const je=(0,C.default)(l.Box)`
  flex: 1;
`,oe=({children:t,sideNav:o})=>{const{formatMessage:a}=(0,T.useIntl)();return e.createElement(l.Box,{background:"neutral100"},e.createElement(We.SkipToContent,null,a({id:"skipToContent",defaultMessage:"Skip to content"})),e.createElement(O.Flex,{alignItems:"flex-start"},o,e.createElement(je,null,t)))};oe.propTypes={children:s().node.isRequired,sideNav:s().node.isRequired};const $e=oe;var Y=n(67814),ae=n(1200);const Ke=(0,C.default)(l.Box)`
  position: fixed;
  bottom: ${({theme:t})=>t.spaces[2]};
  right: ${({theme:t})=>t.spaces[2]};
`,Ve=C.default.button`
  width: ${({theme:t})=>t.spaces[8]};
  height: ${({theme:t})=>t.spaces[8]};
  background: ${({theme:t})=>t.colors.primary600};
  box-shadow: ${({theme:t})=>t.shadows.tableShadow};
  border-radius: 50%;
  svg {
    color: ${({theme:t})=>t.colors.buttonNeutral0};
  }
`,ze=(0,C.default)(l.Box)`
  position: absolute;
  bottom: ${({theme:t})=>`${t.spaces[9]}`};
  right: 0;
  width: ${200/16}rem;
`,He=C.default.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: ${({theme:t})=>t.spaces[2]};
  padding-left: ${({theme:t})=>t.spaces[5]};

  svg {
    color: ${({theme:t})=>t.colors.neutral600};
    margin-right: ${({theme:t})=>t.spaces[2]};
  }

  &:hover {
    background: ${({theme:t})=>t.colors.neutral100};
    color: ${({theme:t})=>t.colors.neutral500};

    svg {
      color: ${({theme:t})=>t.colors.neutral700};
    }

    ${[d.Typography]} {
      color: ${({theme:t})=>t.colors.neutral700};
    }
  }

  ${[d.Typography]} {
    color: ${({theme:t})=>t.colors.neutral600};
  }
`,ke=()=>{const[t,o]=(0,e.useState)(!1),{formatMessage:a}=(0,T.useIntl)(),{showTutorials:r}=(0,W.um)();if(!r)return null;const c=[{icon:"book",label:a({id:"global.documentation",defaultMessage:"Documentation"}),destination:"https://docs.strapi.io"},{icon:"file",label:a({id:"app.static.links.cheatsheet",defaultMessage:"CheatSheet"}),destination:"https://strapi-showcase.s3-us-west-2.amazonaws.com/CheatSheet.pdf"}],u=()=>{o(g=>!g)};return e.createElement(Ke,{as:"aside"},e.createElement(Ve,{id:"onboarding","aria-label":a({id:"app.components.Onboarding.help.button",defaultMessage:"Help button"}),onClick:u},!t&&e.createElement(Y.G,{icon:ae.faQuestion}),t&&e.createElement(Y.G,{icon:ae.faTimes})),t&&e.createElement(b.FocusTrap,{onEscape:u},e.createElement(ze,{background:"neutral0",hasRadius:!0,shadow:"tableShadow",paddingBottom:2,paddingTop:2},c.map(g=>e.createElement(He,{key:g.label,rel:"nofollow noreferrer noopener",target:"_blank",href:g.destination},e.createElement(Y.G,{icon:g.icon}),e.createElement(d.Typography,null,g.label))))))};var se=n(58836),Ze=n(38914),re=n.n(Ze),Qe=n(76910),Ye=n(54451),Xe=n(49549),ie=n(64459),Je=n(7228),we=n.n(Je);const qe=(0,C.default)(O.Flex)`
  position: fixed;
  z-index: 4;
  inset: 0;
  /* this is theme.colors.neutral800 with opacity */
  background: ${({theme:t})=>`${t.colors.neutral800}1F`};
`,le=({onClose:t,onSkip:o,children:a,hideSkip:r})=>{const{formatMessage:c}=(0,T.useIntl)();return e.createElement(Ye.Portal,null,e.createElement(qe,{onClick:t,padding:8,justifyContent:"center"},e.createElement(b.FocusTrap,{onEscape:t},e.createElement(E.Stack,{background:"neutral0",width:(0,i.pxToRem)(660),shadow:"popupShadow",hasRadius:!0,padding:4,spacing:8,role:"dialog","aria-modal":!0,onClick:u=>u.stopPropagation()},e.createElement(O.Flex,{justifyContent:"flex-end"},e.createElement(Xe.IconButton,{onClick:t,"aria-label":c({id:"app.utils.close-label",defaultMessage:"Close"}),icon:e.createElement(we(),null)})),e.createElement(l.Box,{paddingLeft:7,paddingRight:7,paddingBottom:r?8:0},a),!r&&e.createElement(O.Flex,{justifyContent:"flex-end"},e.createElement(ie.Button,{variant:"tertiary",onClick:o},c({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"})))))))};le.propTypes={children:s().node.isRequired,onClose:s().func.isRequired,onSkip:s().func.isRequired,hideSkip:s().bool.isRequired};const _e=le;var de=n(8041);const ce={stepContent:null,sectionIndex:null,stepIndex:null,hasSectionAfter:!1,hasStepAfter:!1},et=(t=ce,o)=>(0,de.default)(t,a=>{switch(o.type){case"UPDATE_MODAL":{a.stepContent=o.content,a.sectionIndex=o.newSectionIndex,a.stepIndex=o.newStepIndex,a.hasSectionAfter=o.newHasSectionAfter,a.hasStepAfter=o.newHasStepAfter;break}default:return a}});var tt=n(31512),nt=n(64290),ue=n.n(nt);const ot=C.default.li`
  list-style: disc;
`,pe=({id:t,defaultMessage:o})=>{const{formatMessage:a}=(0,T.useIntl)();return e.createElement(E.Stack,{spacing:4,paddingBottom:6},a({id:t,defaultMessage:o},{documentationLink:r=>e.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html#api-parameters"},r),b:r=>e.createElement(d.Typography,{fontWeight:"semiBold"},r),p:r=>e.createElement(d.Typography,null,r),light:r=>e.createElement(d.Typography,{textColor:"neutral600"},r),ul:r=>e.createElement(l.Box,{paddingLeft:6},e.createElement("ul",null,r)),li:r=>e.createElement(ot,null,r)}))};pe.propTypes={id:s().string.isRequired,defaultMessage:s().string.isRequired};const at=pe;var X=n(66952),st=n(71289);const J=({number:t,last:o,type:a})=>e.createElement(l.Box,{paddingTop:3,paddingBottom:o?0:3},e.createElement(st.Z,{number:t,type:a}));J.defaultProps={number:void 0,last:!1,type:""},J.propTypes={number:s().number,last:s().bool,type:s().string};const me=J;var N=n(16289),rt=Object.defineProperty,ge=Object.getOwnPropertySymbols,it=Object.prototype.hasOwnProperty,lt=Object.prototype.propertyIsEnumerable,fe=(t,o,a)=>o in t?rt(t,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[o]=a,dt=(t,o)=>{for(var a in o||(o={}))it.call(o,a)&&fe(t,a,o[a]);if(ge)for(var a of ge(o))lt.call(o,a)&&fe(t,a,o[a]);return t};const w=({title:t,content:o,cta:a,onCtaClick:r,sectionIndex:c,stepIndex:u,hasSectionAfter:g})=>{const{formatMessage:y}=(0,T.useIntl)(),h=c>0,m=u>0,L=c+1;return e.createElement(e.Fragment,null,e.createElement(O.Flex,{alignItems:"stretch"},e.createElement(O.Flex,{marginRight:8,justifyContent:"center",minWidth:(0,i.pxToRem)(30)},h&&e.createElement(X.Z,{type:N.hx,minHeight:(0,i.pxToRem)(24)})),e.createElement(d.Typography,{variant:"sigma",textColor:"primary600"},y({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"}))),e.createElement(O.Flex,null,e.createElement(O.Flex,{marginRight:8,minWidth:(0,i.pxToRem)(30)},e.createElement(me,{number:c+1,type:m?N.hx:N.lW})),e.createElement(d.Typography,{variant:"alpha",fontWeight:"bold",textColor:"neutral800",as:"h3",id:"title"},y(t))),e.createElement(O.Flex,{alignItems:"stretch"},e.createElement(O.Flex,{marginRight:8,direction:"column",justifyContent:"center",minWidth:(0,i.pxToRem)(30)},g&&e.createElement(e.Fragment,null,e.createElement(X.Z,{type:N.hx}),m&&e.createElement(me,{number:L+1,type:N.lW,last:!0}))),e.createElement(l.Box,null,e.createElement(at,dt({},o)),a&&(a.target?e.createElement(tt.LinkButton,{endIcon:e.createElement(ue(),null),onClick:r,to:a.target},y(a.title)):e.createElement(ie.Button,{endIcon:e.createElement(ue(),null),onClick:r},y(a.title))))),m&&g&&e.createElement(l.Box,{paddingTop:3},e.createElement(O.Flex,{marginRight:8,justifyContent:"center",width:(0,i.pxToRem)(30)},e.createElement(X.Z,{type:N.hx,minHeight:(0,i.pxToRem)(24)}))))};w.defaultProps={currentStep:null,cta:void 0},w.propTypes={sectionIndex:s().number.isRequired,stepIndex:s().number.isRequired,hasSectionAfter:s().bool.isRequired,content:s().shape({id:s().string.isRequired,defaultMessage:s().string.isRequired}).isRequired,cta:s().shape({target:s().string,title:s().shape({id:s().string.isRequired,defaultMessage:s().string.isRequired})}),currentStep:s().string,onCtaClick:s().func.isRequired,title:s().shape({id:s().string.isRequired,defaultMessage:s().string.isRequired}).isRequired};const ct=w;var ut=Object.defineProperty,pt=Object.defineProperties,mt=Object.getOwnPropertyDescriptors,he=Object.getOwnPropertySymbols,gt=Object.prototype.hasOwnProperty,ft=Object.prototype.propertyIsEnumerable,Ee=(t,o,a)=>o in t?ut(t,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[o]=a,ht=(t,o)=>{for(var a in o||(o={}))gt.call(o,a)&&Ee(t,a,o[a]);if(he)for(var a of he(o))ft.call(o,a)&&Ee(t,a,o[a]);return t},Et=(t,o)=>pt(t,mt(o));const yt=()=>{const{currentStep:t,guidedTourState:o,setCurrentStep:a,setStepState:r,isGuidedTourVisible:c,setSkipped:u}=(0,i.useGuidedTour)(),[g,y]=(0,e.useState)(t),[{stepContent:h,sectionIndex:m,stepIndex:L,hasSectionAfter:D,hasStepAfter:j},$]=(0,e.useReducer)(et,ce),{trackUsage:U}=(0,i.useTracking)();(0,e.useEffect)(()=>{if(!t){y(!1);return}const[I]=re()(o,t);y(!I&&c)},[t,o,c]),(0,e.useEffect)(()=>{if(t){const[I]=re()(Qe.Z,t),H=Object.keys(o),[k,De]=t.split("."),ee=H.indexOf(k),Z=Object.keys(o[k]).indexOf(De),tn=ee<H.length-1,nn=Z<Object.keys(o[k]).length-1;$({type:"UPDATE_MODAL",content:I,newSectionIndex:ee,newStepIndex:Z,newHasSectionAfter:tn,newHasStepAfter:nn})}},[t,o]);const p=()=>{r(t,!0),U(h.trackingEvent),a(null)},A=()=>{u(!0),a(null),U("didSkipGuidedtour")};return g&&h?e.createElement(_e,{hideSkip:!j&&!D,onSkip:A,onClose:p},e.createElement(ct,Et(ht({},h),{onCtaClick:p,currentStep:t,sectionIndex:m,stepIndex:L,hasSectionAfter:D}))):null},vt=(0,e.lazy)(()=>Promise.all([n.e(3852),n.e(9491),n.e(7169),n.e(6561),n.e(3714),n.e(994)]).then(n.bind(n,50706))),Tt=(0,e.lazy)(()=>Promise.all([n.e(6798),n.e(3981)]).then(n.bind(n,87512))),Pt=(0,e.lazy)(()=>n.e(3677).then(n.bind(n,7235))),Ct=(0,e.lazy)(()=>Promise.all([n.e(3852),n.e(5516)]).then(n.bind(n,65560))),ye=(0,e.lazy)(()=>Promise.resolve().then(n.bind(n,92776))),Mt=(0,e.lazy)(()=>n.e(3224).then(n.bind(n,40953))),Ot=(0,e.lazy)(()=>n.e(9497).then(n.bind(n,60762))),ve=(0,e.lazy)(()=>Promise.all([n.e(3852),n.e(9491),n.e(7169),n.e(3667),n.e(5895)]).then(n.bind(n,34759))),Rt=()=>{const{trackUsage:t}=(0,i.useTracking)();(0,e.useEffect)(()=>{t("didAccessAuthenticatedAdministration")},[])},St=()=>{Rt();const{isLoading:t,generalSectionLinks:o,pluginsSectionLinks:a}=(0,W.H9)(),{menu:r}=(0,i.useStrapiApp)(),c=(0,e.useMemo)(()=>r.filter(u=>u.Component).map(({to:u,Component:g,exact:y})=>(0,se.ot)(g,u,y)),[r]);return t?e.createElement(i.LoadingIndicatorPage,null):e.createElement(V.DndProvider,{backend:x.PD},e.createElement($e,{sideNav:e.createElement(Ne,{generalSectionLinks:o,pluginsSectionLinks:a})},e.createElement(e.Suspense,{fallback:e.createElement(i.LoadingIndicatorPage,null)},e.createElement(f.Switch,null,e.createElement(f.Route,{path:"/",component:Tt,exact:!0}),e.createElement(f.Route,{path:"/me",component:Ot,exact:!0}),e.createElement(f.Route,{path:"/content-manager",component:vt}),c,e.createElement(f.Route,{path:"/settings/:settingId",component:ve}),e.createElement(f.Route,{path:"/settings",component:ve,exact:!0}),e.createElement(f.Route,{path:"/marketplace"},e.createElement(Ct,null)),e.createElement(f.Route,{path:"/list-plugins",exact:!0},e.createElement(Pt,null)),e.createElement(f.Route,{path:"/404",component:ye}),e.createElement(f.Route,{path:"/500",component:Mt}),e.createElement(f.Route,{path:"",component:ye}))),e.createElement(yt,null),e.createElement(ke,null)))};var At=Object.defineProperty,Te=Object.getOwnPropertySymbols,It=Object.prototype.hasOwnProperty,xt=Object.prototype.propertyIsEnumerable,Pe=(t,o,a)=>o in t?At(t,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[o]=a,Lt=(t,o)=>{for(var a in o||(o={}))It.call(o,a)&&Pe(t,a,o[a]);if(Te)for(var a of Te(o))xt.call(o,a)&&Pe(t,a,o[a]);return t};const Dt=t=>({plugins:Object.keys(t).reduce((o,a)=>(o[a]=Lt({},t[a]),o),{})});var Bt=n(36968),bt=n.n(Bt);const Ce={plugins:null},Gt=(t=Ce,o)=>(0,de.default)(t,a=>{switch(o.type){case"SET_PLUGIN_READY":{bt()(a,["plugins",o.pluginId,"isReady"],!0);break}default:return a}}),Ut=()=>{const{plugins:t}=(0,i.useStrapiApp)(),[{plugins:o},a]=(0,e.useReducer)(Gt,Ce,()=>Dt(t)),r=(0,e.useRef)(u=>{a({type:"SET_PLUGIN_READY",pluginId:u})});if(Object.keys(o).some(u=>o[u].isReady===!1)){const u=Object.keys(o).reduce((g,y)=>{const h=o[y].initializer;if(h){const m=o[y].pluginId;g.push(e.createElement(h,{key:m,setPlugin:r.current}))}return g},[]);return e.createElement(e.Fragment,null,u,e.createElement(i.LoadingIndicatorPage,null))}return e.createElement(St,null)};var Me=n(37424),Oe=n(68493);const Ft=()=>({type:Oe.l}),Nt=t=>({type:Oe.m,permissions:t}),Re=({children:t,permissions:o,refetchPermissions:a})=>{const{allPermissions:r}=(0,Me.v9)(u=>u.rbacProvider),c=(0,Me.I0)();return(0,e.useEffect)(()=>(c(Nt(o)),()=>{c(Ft())}),[o,c]),r?e.createElement(i.RBACProviderContext.Provider,{value:{allPermissions:r,refetchPermissions:a}},t):e.createElement(i.LoadingIndicatorPage,null)};Re.propTypes={children:s().element.isRequired,permissions:s().array.isRequired,refetchPermissions:s().func.isRequired};const Wt=Re;var jt=n(9669),$t=n.n(jt),Kt=n(81249),q=n.n(Kt);const Se=(t,o)=>!q().valid(t)||!q().valid(o)?!1:q().lt(t,o);var _=n(63955),z=(t,o,a)=>new Promise((r,c)=>{var u=h=>{try{y(a.next(h))}catch(m){c(m)}},g=h=>{try{y(a.throw(h))}catch(m){c(m)}},y=h=>h.done?r(h.value):Promise.resolve(h.value).then(u,g);y((a=a.apply(t,o)).next())});const Ae=S.i8,Vt=!JSON.parse(localStorage.getItem("STRAPI_UPDATE_NOTIF")),zt=t=>z(void 0,null,function*(){try{const{data:{tag_name:o}}=yield $t().get("https://api.github.com/repos/strapi/strapi/releases/latest");return Se(Ae,o)&&Vt&&t({type:"info",message:{id:"notification.version.update.message"},link:{url:`https://github.com/strapi/strapi/releases/tag/${o}`,label:{id:"global.see-more"}},blockTransition:!0,onClose:()=>localStorage.setItem("STRAPI_UPDATE_NOTIF",!0)}),o}catch(o){return Ae}}),Ht=()=>z(void 0,null,function*(){try{const{data:t,headers:o}=yield _.be.get("/admin/information");if(!o["content-type"].includes("application/json"))throw new Error("Not found");return t.data}catch(t){throw new Error(t)}}),kt=()=>z(void 0,null,function*(){try{const{data:t,headers:o}=yield _.be.get("/admin/users/me/permissions");if(!o["content-type"].includes("application/json"))throw new Error("Not found");return t.data}catch(t){throw new Error(t)}}),Zt=()=>z(void 0,null,function*(){try{const{data:{data:{roles:t}}}=yield _.be.get("/admin/users/me");return t}catch(t){throw new Error(t)}});var Qt=Object.defineProperty,Yt=Object.defineProperties,Xt=Object.getOwnPropertyDescriptors,Ie=Object.getOwnPropertySymbols,Jt=Object.prototype.hasOwnProperty,wt=Object.prototype.propertyIsEnumerable,xe=(t,o,a)=>o in t?Qt(t,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[o]=a,qt=(t,o)=>{for(var a in o||(o={}))Jt.call(o,a)&&xe(t,a,o[a]);if(Ie)for(var a of Ie(o))wt.call(o,a)&&xe(t,a,o[a]);return t},_t=(t,o)=>Yt(t,Xt(o));const Le=S.i8,en=()=>{const{setGuidedTourVisibility:t}=(0,i.useGuidedTour)(),o=(0,i.useNotification)(),a=(0,e.useRef)(t),r=i.auth.getUserInfo(),c=Q()(r,"username")||(0,se.Pp)(r.firstname,r.lastname),[u,g]=(0,e.useState)(c),{showReleaseNotification:y}=(0,W.um)(),[{data:h,status:m},{data:L,isLoading:D},{data:j,status:$,refetch:U,isFetched:p,isFetching:A},{data:I}]=(0,B.useQueries)([{queryKey:"app-infos",queryFn:Ht},{queryKey:"strapi-release",queryFn:()=>zt(o),enabled:y,initialData:Le},{queryKey:"admin-users-permission",queryFn:kt,initialData:[]},{queryKey:"user-roles",queryFn:Zt}]),H=(0,e.useMemo)(()=>Se(Le,L),[L]);return(0,e.useEffect)(()=>{I&&I.find(({code:Z})=>Z==="strapi-super-admin")&&a.current(!0)},[I]),D||(A&&p||m==="loading"||$==="loading")?e.createElement(i.LoadingIndicatorPage,null):m==="error"?e.createElement("div",null,"error..."):e.createElement(i.AppInfosContext.Provider,{value:_t(qt({},h),{latestStrapiReleaseTag:L,setUserDisplayName:g,shouldUpdateStrapi:H,userDisplayName:u})},e.createElement(Wt,{permissions:j,refetchPermissions:U},e.createElement(Ut,null)))}},66952:(K,R,n)=>{n.d(R,{Z:()=>b});var e=n(53547),i=n(45697),B=n.n(i),P=n(68547),Q=n.n(P),S=n(94117),W=n.n(S),f=n(16289),V=Object.defineProperty,x=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,s=(l,d,E)=>d in l?V(l,d,{enumerable:!0,configurable:!0,writable:!0,value:E}):l[d]=E,T=(l,d)=>{for(var E in d||(d={}))C.call(d,E)&&s(l,E,d[E]);if(x)for(var E of x(d))F.call(d,E)&&s(l,E,d[E]);return l},G=(l,d)=>{var E={};for(var M in l)C.call(l,M)&&d.indexOf(M)<0&&(E[M]=l[M]);if(l!=null&&x)for(var M of x(l))d.indexOf(M)<0&&F.call(l,M)&&(E[M]=l[M]);return E};const v=l=>{var d=l,{type:E}=d,M=G(d,["type"]);return e.createElement(S.Box,T({width:(0,P.pxToRem)(2),height:"100%",background:E===f.VM?"neutral300":"primary500",hasRadius:!0},M))};v.defaultProps={type:f.VM},v.propTypes={type:B().oneOf([f.lW,f.hx,f.VM])};const b=v},71289:(K,R,n)=>{n.d(R,{Z:()=>v});var e=n(53547),i=n(45697),B=n.n(i),P=n(68547),Q=n.n(P),S=n(40264),W=n.n(S),f=n(33483),V=n.n(f),x=n(33699),C=n.n(x),F=n(22754),s=n.n(F),T=n(16289);const G=({type:b,number:l})=>b===T.hx?e.createElement(S.Flex,{background:"primary600",padding:2,borderRadius:"50%",width:(0,P.pxToRem)(30),height:(0,P.pxToRem)(30),justifyContent:"center"},e.createElement(x.Icon,{as:s(),"aria-hidden":!0,width:(0,P.pxToRem)(16),color:"neutral0"})):b===T.lW?e.createElement(S.Flex,{background:"primary600",padding:2,borderRadius:"50%",width:(0,P.pxToRem)(30),height:(0,P.pxToRem)(30),justifyContent:"center"},e.createElement(f.Typography,{fontWeight:"semiBold",textColor:"neutral0"},l)):e.createElement(S.Flex,{borderColor:"neutral500",borderWidth:"1px",borderStyle:"solid",padding:2,borderRadius:"50%",width:(0,P.pxToRem)(30),height:(0,P.pxToRem)(30),justifyContent:"center"},e.createElement(f.Typography,{fontWeight:"semiBold",textColor:"neutral600"},l));G.defaultProps={number:void 0,type:T.VM},G.propTypes={number:B().number,type:B().oneOf([T.lW,T.hx,T.VM])};const v=G},16289:(K,R,n)=>{n.d(R,{lW:()=>e,hx:()=>i,VM:()=>B});const e="isActive",i="isDone",B="isNotDone"},76910:(K,R,n)=>{n.d(R,{Z:()=>i});const i={contentTypeBuilder:{home:{title:{id:"app.components.GuidedTour.home.CTB.title",defaultMessage:"\u{1F9E0} Build the content structure"},cta:{title:{id:"app.components.GuidedTour.home.CTB.cta.title",defaultMessage:"Go to the Content type Builder"},type:"REDIRECT",target:"/plugins/content-type-builder"},trackingEvent:"didClickGuidedTourHomepageContentTypeBuilder"},create:{title:{id:"app.components.GuidedTour.CTB.create.title",defaultMessage:"\u{1F9E0} Create a first Collection type"},content:{id:"app.components.GuidedTour.CTB.create.content",defaultMessage:"<p>Collection types help you manage several entries, Single types are suitable to manage only one entry.</p> <p>Ex: For a Blog website, Articles would be a Collection type whereas a Homepage would be a Single type.</p>"},cta:{title:{id:"app.components.GuidedTour.CTB.create.cta.title",defaultMessage:"Build a Collection type"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep1CollectionType"},success:{title:{id:"app.components.GuidedTour.CTB.success.title",defaultMessage:"Step 1: Completed \u2705"},content:{id:"app.components.GuidedTour.CTB.success.content",defaultMessage:"<p>Good going!</p><b>\u26A1\uFE0F What would you like to share with the world?</b>"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"REDIRECT",target:"/content-manager"},trackingEvent:"didCreateGuidedTourCollectionType"}},contentManager:{home:{title:{id:"app.components.GuidedTour.home.CM.title",defaultMessage:"\u26A1\uFE0F What would you like to share with the world?"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"REDIRECT",target:"/content-manager"},trackingEvent:"didClickGuidedTourHomepageContentManager"},create:{title:{id:"app.components.GuidedTour.CM.create.title",defaultMessage:"\u26A1\uFE0F Create content"},content:{id:"app.components.GuidedTour.CM.create.content",defaultMessage:"<p>Create and manage all the content here in the Content Manager.</p><p>Ex: Taking the Blog website example further, one can write an Article, save and publish it as they like.</p><p>\u{1F4A1} Quick tip - Don't forget to hit publish on the content you create.</p>"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep2ContentManager"},success:{title:{id:"app.components.GuidedTour.CM.success.title",defaultMessage:"Step 2: Completed \u2705"},content:{id:"app.components.GuidedTour.CM.success.content",defaultMessage:"<p>Awesome, one last step to go!</p><b>\u{1F680}  See content in action</b>"},cta:{title:{id:"app.components.GuidedTour.CM.success.cta.title",defaultMessage:"Test the API"},type:"REDIRECT",target:"/settings/api-tokens"},trackingEvent:"didCreateGuidedTourEntry"}},apiTokens:{home:{title:{id:"app.components.GuidedTour.apiTokens.create.title",defaultMessage:"\u{1F680} See content in action"},cta:{title:{id:"app.components.GuidedTour.home.apiTokens.cta.title",defaultMessage:"Test the API"},type:"REDIRECT",target:"/settings/api-tokens"},trackingEvent:"didClickGuidedTourHomepageApiTokens"},create:{title:{id:"app.components.GuidedTour.apiTokens.create.title",defaultMessage:"\u{1F680} See content in action"},content:{id:"app.components.GuidedTour.apiTokens.create.content",defaultMessage:"<p>Generate an authentication token here and retrieve the content you just created.</p>"},cta:{title:{id:"app.components.GuidedTour.apiTokens.create.cta.title",defaultMessage:"Generate an API Token"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep3ApiTokens"},success:{title:{id:"app.components.GuidedTour.apiTokens.success.title",defaultMessage:"Step 3: Completed \u2705"},content:{id:"app.components.GuidedTour.apiTokens.success.content",defaultMessage:"<p>See content in action by making an HTTP request:</p><ul><li><p>To this URL: <light>https://'<'YOUR_DOMAIN'>'/api/'<'YOUR_CT'>'</light></p></li><li><p>With the header: <light>Authorization: bearer '<'YOUR_API_TOKEN'>'</light></p></li></ul><p>For more ways to interact with content, see the <documentationLink>documentation</documentationLink>.</p>"},trackingEvent:"didGenerateGuidedTourApiTokens"}}}}}]);
