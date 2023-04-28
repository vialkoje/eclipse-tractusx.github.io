"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[8469],{81190:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>x,frontMatter:()=>d,metadata:()=>g,toc:()=>f});var a=s(87462),l=(s(67294),s(3905)),r=s(26389),i=s(94891),n=s(75190),p=s(47507),o=s(24310),m=s(63303),c=(s(75035),s(85162));const d={id:"get-transfer-process-state",title:"getTransferProcessState",description:"Gets the state of a transfer process with the given ID",sidebar_label:"getTransferProcessState",hide_title:!0,hide_table_of_contents:!0,api:{description:"Gets the state of a transfer process with the given ID",operationId:"getTransferProcessState",parameters:[{in:"path",name:"id",required:!0,schema:{type:"string",example:null}}],responses:{200:{content:{"application/json":{schema:{type:"object",example:null,properties:{state:{type:"string",example:null}},title:"TransferState"}}},description:"The  transfer process's state"},400:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},title:"ApiErrorDetail"}}}},description:"Request was malformed, e.g. id was null"},404:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},title:"ApiErrorDetail"}}}},description:"An  transfer process with the given ID does not exist"}},tags:["Transfer Process"],method:"get",path:"/transferprocess/{id}/state",info:{title:"EDC Transfer Process API",description:null,version:"0.0.1-SNAPSHOT"},postman:{name:"get Transfer Process State",description:{content:"Gets the state of a transfer process with the given ID",type:"text/plain"},url:{path:["transferprocess",":id","state"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"./docs/kits/tractusx-edc/docs/kit/development-view/openAPI/transfer-process-api/edc-transfer-process-api",custom_edit_url:null},u=void 0,g={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/transfer-process-api/get-transfer-process-state",id:"kits/tractusx-edc/docs/kit/development-view/openAPI/transfer-process-api/get-transfer-process-state",title:"getTransferProcessState",description:"Gets the state of a transfer process with the given ID",source:"@site/docs/kits/tractusx-edc/docs/kit/development-view/openAPI/transfer-process-api/get-transfer-process-state.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/transfer-process-api",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/transfer-process-api/get-transfer-process-state",permalink:"/docs/kits/tractusx-edc/docs/kit/development-view/openAPI/transfer-process-api/get-transfer-process-state",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-transfer-process-state",title:"getTransferProcessState",description:"Gets the state of a transfer process with the given ID",sidebar_label:"getTransferProcessState",hide_title:!0,hide_table_of_contents:!0,api:{description:"Gets the state of a transfer process with the given ID",operationId:"getTransferProcessState",parameters:[{in:"path",name:"id",required:!0,schema:{type:"string",example:null}}],responses:{200:{content:{"application/json":{schema:{type:"object",example:null,properties:{state:{type:"string",example:null}},title:"TransferState"}}},description:"The  transfer process's state"},400:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},title:"ApiErrorDetail"}}}},description:"Request was malformed, e.g. id was null"},404:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},title:"ApiErrorDetail"}}}},description:"An  transfer process with the given ID does not exist"}},tags:["Transfer Process"],method:"get",path:"/transferprocess/{id}/state",info:{title:"EDC Transfer Process API",description:null,version:"0.0.1-SNAPSHOT"},postman:{name:"get Transfer Process State",description:{content:"Gets the state of a transfer process with the given ID",type:"text/plain"},url:{path:["transferprocess",":id","state"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"./docs/kits/tractusx-edc/docs/kit/development-view/openAPI/transfer-process-api/edc-transfer-process-api",custom_edit_url:null},sidebar:"kits",previous:{title:"getAllTransferProcesses",permalink:"/docs/kits/tractusx-edc/docs/kit/development-view/openAPI/transfer-process-api/get-all-transfer-processes"},next:{title:"getTransferProcess",permalink:"/docs/kits/tractusx-edc/docs/kit/development-view/openAPI/transfer-process-api/get-transfer-process"}},y={},f=[{value:"getTransferProcessState",id:"gettransferprocessstate",level:2}],h={toc:f};function x(e){let{components:t,...s}=e;return(0,l.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"gettransferprocessstate"},"getTransferProcessState"),(0,l.kt)("p",null,"Gets the state of a transfer process with the given ID"),(0,l.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"Path Parameters")),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)(n.Z,{className:"paramsItem",param:{in:"path",name:"id",required:!0,schema:{type:"string",example:null}},mdxType:"ParamsItem"})))),(0,l.kt)("div",null,(0,l.kt)(r.Z,{mdxType:"ApiTabs"},(0,l.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"The  transfer process's state")),(0,l.kt)("div",null,(0,l.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(m.Z,{mdxType:"SchemaTabs"},(0,l.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(o.Z,{collapsible:!1,name:"state",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"})))),(0,l.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(p.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Request was malformed, e.g. id was null")),(0,l.kt)("div",null,(0,l.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(m.Z,{mdxType:"SchemaTabs"},(0,l.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(o.Z,{collapsible:!1,name:"invalidValue",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"path",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(p.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(c.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"An  transfer process with the given ID does not exist")),(0,l.kt)("div",null,(0,l.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(m.Z,{mdxType:"SchemaTabs"},(0,l.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(o.Z,{collapsible:!1,name:"invalidValue",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"path",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(p.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))))))}x.isMDXComponent=!0}}]);