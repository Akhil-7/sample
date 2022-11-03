"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[3677],{35762:(I,d,t)=>{t.d(d,{Z:()=>i});var e=t(23724),u=t(68547),c=t(63955),g=(a,s,n)=>new Promise((h,y)=>{var f=l=>{try{r(n.next(l))}catch(o){y(o)}},E=l=>{try{r(n.throw(l))}catch(o){y(o)}},r=l=>l.done?h(l.value):Promise.resolve(l.value).then(f,E);r((n=n.apply(a,s)).next())});const m=()=>g(void 0,null,function*(){const{data:a}=yield c.be.get("/admin/plugins");return a}),i=a=>{const s=(0,u.useNotification)();return(0,e.useQuery)("list-installed-plugins",()=>m(),{onSuccess:()=>{a&&a()},onError:()=>{s({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})}},7235:(I,d,t)=>{t.r(d),t.d(d,{default:()=>r});var e=t(53547),u=t(68547),c=t(15482),g=t(97132),m=t(92699),P=t(67422),i=t(35395),a=t(80117),s=t(33483),n=t(43546),h=t(35762);const f=()=>{const{formatMessage:l}=(0,g.useIntl)(),{notifyStatus:o}=(0,P.useNotifyAT)();(0,u.useFocusWhenNavigate)();const p=l({id:"global.plugins",defaultMessage:"Plugins"}),M=()=>{o(l({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:p}))},{status:T,data:v}=(0,h.Z)(M);return T!=="success"&&T!=="error"?e.createElement(i.Layout,null,e.createElement(a.Main,{"aria-busy":!0},e.createElement(u.LoadingIndicatorPage,null))):e.createElement(i.Layout,null,e.createElement(a.Main,null,e.createElement(i.HeaderLayout,{title:p,subtitle:l({id:"app.components.ListPluginsPage.description",defaultMessage:"List of the installed plugins in the project."})}),e.createElement(i.ContentLayout,null,e.createElement(n.Table,{colCount:2,rowCount:(v==null?void 0:v.plugins.length)+1},e.createElement(n.Thead,null,e.createElement(n.Tr,null,e.createElement(n.Th,null,e.createElement(s.Typography,{variant:"sigma",textColor:"neutral600"},l({id:"global.name",defaultMessage:"Name"}))),e.createElement(n.Th,null,e.createElement(s.Typography,{variant:"sigma",textColor:"neutral600"},l({id:"global.description",defaultMessage:"description"}))))),e.createElement(n.Tbody,null,v.plugins.map(({name:L,displayName:C,description:F})=>e.createElement(n.Tr,{key:L},e.createElement(n.Td,null,e.createElement(s.Typography,{textColor:"neutral800",variant:"omega",fontWeight:"bold"},C)),e.createElement(n.Td,null,e.createElement(s.Typography,{textColor:"neutral800"},F)))))))))},r=()=>{const{formatMessage:l}=(0,g.useIntl)(),o=l({id:"global.plugins",defaultMessage:"Plugins"});return e.createElement(u.CheckPagePermissions,{permissions:m.Z.marketplace.main},e.createElement(c.Helmet,{title:o}),e.createElement(f,null))}}}]);
