"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[4578],{3765:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>f,frontMatter:()=>c,metadata:()=>h,toc:()=>g});var s=a(87462),n=(a(67294),a(3905)),i=a(26389),o=a(94891),l=a(75190),p=a(47507),r=a(24310),d=a(63303),u=(a(75035),a(85162));const c={id:"update-asset",title:"updateAsset",description:"Updates an asset with the given ID if it exists. If the asset is not found, no further action is taken. DANGER ZONE: Note that updating assets can have unexpected results, especially for contract offers that have been sent out or are ongoing in contract negotiations.",sidebar_label:"updateAsset",hide_title:!0,hide_table_of_contents:!0,api:{description:"Updates an asset with the given ID if it exists. If the asset is not found, no further action is taken. DANGER ZONE: Note that updating assets can have unexpected results, especially for contract offers that have been sent out or are ongoing in contract negotiations.",operationId:"updateAsset",parameters:[{in:"path",name:"assetId",required:!0,schema:{type:"string",example:null}}],requestBody:{content:{"application/json":{schema:{type:"object",example:null,properties:{properties:{type:"object",additionalProperties:{type:"object",example:null},example:null}},required:["properties"],title:"AssetUpdateRequestDto"}}}},responses:{200:{description:"Asset was updated successfully"},400:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},title:"ApiErrorDetail"}}}},description:"Request was malformed, e.g. id was null"},404:{description:"Asset could not be updated, because it does not exist."}},tags:["Asset"],method:"put",path:"/assets/{assetId}",jsonRequestBodyExample:null,info:{title:"EDC Asset API",description:null,version:"0.0.1-SNAPSHOT"},postman:{name:"update Asset",description:{content:"Updates an asset with the given ID if it exists. If the asset is not found, no further action is taken. DANGER ZONE: Note that updating assets can have unexpected results, especially for contract offers that have been sent out or are ongoing in contract negotiations.",type:"text/plain"},url:{path:["assets",":assetId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"assetId"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"./docs/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/asset-api/edc-asset-api",custom_edit_url:null},m=void 0,h={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/asset-api/update-asset",id:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/asset-api/update-asset",title:"updateAsset",description:"Updates an asset with the given ID if it exists. If the asset is not found, no further action is taken. DANGER ZONE: Note that updating assets can have unexpected results, especially for contract offers that have been sent out or are ongoing in contract negotiations.",source:"@site/docs/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/asset-api/update-asset.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/asset-api",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/asset-api/update-asset",permalink:"/docs/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/asset-api/update-asset",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-asset",title:"updateAsset",description:"Updates an asset with the given ID if it exists. If the asset is not found, no further action is taken. DANGER ZONE: Note that updating assets can have unexpected results, especially for contract offers that have been sent out or are ongoing in contract negotiations.",sidebar_label:"updateAsset",hide_title:!0,hide_table_of_contents:!0,api:{description:"Updates an asset with the given ID if it exists. If the asset is not found, no further action is taken. DANGER ZONE: Note that updating assets can have unexpected results, especially for contract offers that have been sent out or are ongoing in contract negotiations.",operationId:"updateAsset",parameters:[{in:"path",name:"assetId",required:!0,schema:{type:"string",example:null}}],requestBody:{content:{"application/json":{schema:{type:"object",example:null,properties:{properties:{type:"object",additionalProperties:{type:"object",example:null},example:null}},required:["properties"],title:"AssetUpdateRequestDto"}}}},responses:{200:{description:"Asset was updated successfully"},400:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},title:"ApiErrorDetail"}}}},description:"Request was malformed, e.g. id was null"},404:{description:"Asset could not be updated, because it does not exist."}},tags:["Asset"],method:"put",path:"/assets/{assetId}",jsonRequestBodyExample:null,info:{title:"EDC Asset API",description:null,version:"0.0.1-SNAPSHOT"},postman:{name:"update Asset",description:{content:"Updates an asset with the given ID if it exists. If the asset is not found, no further action is taken. DANGER ZONE: Note that updating assets can have unexpected results, especially for contract offers that have been sent out or are ongoing in contract negotiations.",type:"text/plain"},url:{path:["assets",":assetId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"assetId"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"./docs/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/asset-api/edc-asset-api",custom_edit_url:null},sidebar:"kits",previous:{title:"requestAssets",permalink:"/docs/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/asset-api/request-assets"},next:{title:"updateDataAddress",permalink:"/docs/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/asset-api/update-data-address"}},y={},g=[{value:"updateAsset",id:"updateasset",level:2}],k={toc:g};function f(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,s.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"updateasset"},"updateAsset"),(0,n.kt)("p",null,"Updates an asset with the given ID if it exists. If the asset is not found, no further action is taken. DANGER ZONE: Note that updating assets can have unexpected results, especially for contract offers that have been sent out or are ongoing in contract negotiations."),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(l.Z,{className:"paramsItem",param:{in:"path",name:"assetId",required:!0,schema:{type:"string",example:null}},mdxType:"ParamsItem"})))),(0,n.kt)(o.Z,{mdxType:"MimeTabs"},(0,n.kt)(u.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(r.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"properties"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("code",null,"property name*"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")))))))))),(0,n.kt)("div",null,(0,n.kt)(i.Z,{mdxType:"ApiTabs"},(0,n.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Asset was updated successfully")),(0,n.kt)("div",null)),(0,n.kt)(u.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Request was malformed, e.g. id was null")),(0,n.kt)("div",null,(0,n.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{mdxType:"SchemaTabs"},(0,n.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(r.Z,{collapsible:!1,name:"invalidValue",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"path",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,n.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(p.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(u.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Asset could not be updated, because it does not exist.")),(0,n.kt)("div",null)))))}f.isMDXComponent=!0}}]);