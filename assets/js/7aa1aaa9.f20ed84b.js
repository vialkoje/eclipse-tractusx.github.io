"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[6958],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>g});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},v=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),v=r,g=p["".concat(s,".").concat(v)]||p[v]||u[v]||i;return t?n.createElement(g,o(o({ref:a},d),{},{components:t})):n.createElement(g,o({ref:a},d))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=v;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},99242:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(87462),r=(t(67294),t(3905));const i={},o="Migration Version 0.0.x to 0.1.x",l={unversionedId:"kits/tractusx-edc/docs/migration/Version_0.0.x_0.1.x",id:"kits/tractusx-edc/docs/migration/Version_0.0.x_0.1.x",title:"Migration Version 0.0.x to 0.1.x",description:"This document contains a list of breaking changes that are introduced in version 0.1.x.",source:"@site/docs/kits/tractusx-edc/docs/migration/Version_0.0.x_0.1.x.md",sourceDirName:"kits/tractusx-edc/docs/migration",slug:"/kits/tractusx-edc/docs/migration/Version_0.0.x_0.1.x",permalink:"/docs/kits/tractusx-edc/docs/migration/Version_0.0.x_0.1.x",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/kits/tractusx-edc/docs/migration/Version_0.0.x_0.1.x.md",tags:[],version:"current",frontMatter:{},sidebar:"kits",previous:{title:"Upgrading TractusX EDC",permalink:"/docs/kits/tractusx-edc/docs/kit/operation-view/page09_upgrading"},next:{title:"Migration Version 0.1.0 to 0.1.1",permalink:"/docs/kits/tractusx-edc/docs/migration/Version_0.1.0_0.1.1"}},s={},c=[{value:"0. Summary",id:"0-summary",level:2},{value:"1. PostgreSQL Database",id:"1-postgresql-database",level:2},{value:"1.1 Criteria in Policy &amp; Contract Definitions Table",id:"11-criteria-in-policy--contract-definitions-table",level:3},{value:"Example Exception",id:"example-exception",level:4},{value:"Solution 1: Update all Criteria manually",id:"solution-1-update-all-criteria-manually",level:4},{value:"Solution 2: Delete all rows containing Constraints",id:"solution-2-delete-all-rows-containing-constraints",level:4},{value:"Required Queries",id:"required-queries",level:5},{value:"1.2 Delete Contract Agreements",id:"12-delete-contract-agreements",level:3},{value:"Required Query",id:"required-query",level:4},{value:"2. Data Management API",id:"2-data-management-api",level:2},{value:"2.1 Policy Path",id:"21-policy-path",level:3},{value:"Get All Policies",id:"get-all-policies",level:4},{value:"2.2 Policy Payload",id:"22-policy-payload",level:3},{value:"New Payload",id:"new-payload",level:4},{value:"Old Payload",id:"old-payload",level:4},{value:"2.3 Criteria in Payload of Contract Definitions and Policies",id:"23-criteria-in-payload-of-contract-definitions-and-policies",level:3},{value:"Old Criterion Format",id:"old-criterion-format",level:4},{value:"New Criterion Format",id:"new-criterion-format",level:4},{value:"Example Call",id:"example-call",level:4},{value:"2.4 Data Address",id:"24-data-address",level:3},{value:"Old Asset format",id:"old-asset-format",level:4},{value:"New Asset format",id:"new-asset-format",level:4},{value:"Example Call",id:"example-call-1",level:4},{value:"3. Connector Configuration",id:"3-connector-configuration",level:2},{value:"3.1 Token Validation Endpoint Setting",id:"31-token-validation-endpoint-setting",level:3},{value:"3.2 DataPlane Selector",id:"32-dataplane-selector",level:3}],d={toc:c};function p(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"migration-version-00x-to-01x"},"Migration Version 0.0.x to 0.1.x"),(0,r.kt)("p",null,"This document contains a list of breaking changes that are introduced in version 0.1.x."),(0,r.kt)("h2",{id:"0-summary"},"0. Summary"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"PostgreSQL Database",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Criteria in Policy & Contract Definitions Table"),(0,r.kt)("li",{parentName:"ol"},"Delete Contract Agreements"))),(0,r.kt)("li",{parentName:"ol"},"Data Management API",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Policy Path"),(0,r.kt)("li",{parentName:"ol"},"Policy Payload"),(0,r.kt)("li",{parentName:"ol"},"Criteria in Payload of Contract Definitions and Policies"),(0,r.kt)("li",{parentName:"ol"},"Data Address"))),(0,r.kt)("li",{parentName:"ol"},"Connector Configuration",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Token Validation Endpoint Setting"),(0,r.kt)("li",{parentName:"ol"},"DataPlane Selector")))),(0,r.kt)("h2",{id:"1-postgresql-database"},"1. PostgreSQL Database"),(0,r.kt)("p",null,"The Tractus-X EDC ",(0,r.kt)("a",{parentName:"p",href:"/docs/kits/tractusx-edc/edc-extensions/postgresql-migration/"},"PostgreSQL Migration Extension")," is able to run\nnormal migrations. But the extension will never cause a data loss automatically, therefore part of this migration must\nbe done by the user itself."),(0,r.kt)("h3",{id:"11-criteria-in-policy--contract-definitions-table"},"1.1 Criteria in Policy & Contract Definitions Table"),(0,r.kt)("p",null,"Criteria in Policies and Contract Definitions are serialized as JSON and put into the database. The Criteria schema\nchanged and already existing database entries will cause ",(0,r.kt)("em",{parentName:"p"},"NullPointerExceptions"),"."),(0,r.kt)("h4",{id:"example-exception"},"Example Exception"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"[2022-08-02 09:32:37] [SEVERE ] Could not handle multipart request: null\norg.eclipse.dataspaceconnector.spi.EdcException\n        at org.eclipse.dataspaceconnector.transaction.local.LocalTransactionContext.execute(LocalTransactionContext.java:70)\n        at org.eclipse.dataspaceconnector.sql.assetindex.SqlAssetIndex.queryAssets(SqlAssetIndex.java:141)\n        at org.eclipse.dataspaceconnector.sql.assetindex.SqlAssetIndex.queryAssets(SqlAssetIndex.java:134)\n        at org.eclipse.dataspaceconnector.contract.offer.ContractOfferServiceImpl.lambda$queryContractOffers$2(ContractOfferServiceImpl.java:61)\n        at java.base/java.util.stream.ReferencePipeline$7$1.accept(ReferencePipeline.java:271)\n        at java.base/java.util.stream.ReferencePipeline$2$1.accept(ReferencePipeline.java:177)\n        at java.base/java.util.LinkedList$LLSpliterator.forEachRemaining(LinkedList.java:1239)\n        at java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:484)\n        at java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\n        at java.base/java.util.stream.ReduceOps$ReduceOp.evaluateSequential(ReduceOps.java:913)\n        at java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n        at java.base/java.util.stream.ReferencePipeline.collect(ReferencePipeline.java:578)\n        at org.eclipse.dataspaceconnector.ids.core.service.CatalogServiceImpl.getDataCatalog(CatalogServiceImpl.java:55)\n        at org.eclipse.dataspaceconnector.ids.core.service.ConnectorServiceImpl.getConnector(ConnectorServiceImpl.java:51)\n        at org.eclipse.dataspaceconnector.ids.api.multipart.handler.description.ConnectorDescriptionRequestHandler.handle(ConnectorDescriptionRequestHandler.java:74)\n        at org.eclipse.dataspaceconnector.ids.api.multipart.handler.DescriptionHandler.handleRequestInternal(DescriptionHandler.java:117)\n        at org.eclipse.dataspaceconnector.ids.api.multipart.handler.DescriptionHandler.handleRequest(DescriptionHandler.java:82)\n        at org.eclipse.dataspaceconnector.ids.api.multipart.controller.MultipartController.request(MultipartController.java:146)\n        at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n        at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n        at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n        at java.base/java.lang.reflect.Method.invoke(Method.java:566)\n        at org.glassfish.jersey.server.model.internal.ResourceMethodInvocationHandlerFactory.lambda$static$0(ResourceMethodInvocationHandlerFactory.java:52)\n        at org.glassfish.jersey.server.model.internal.AbstractJavaResourceMethodDispatcher$1.run(AbstractJavaResourceMethodDispatcher.java:124)\n        at org.glassfish.jersey.server.model.internal.AbstractJavaResourceMethodDispatcher.invoke(AbstractJavaResourceMethodDispatcher.java:167)\n        at org.glassfish.jersey.server.model.internal.JavaResourceMethodDispatcherProvider$ResponseOutInvoker.doDispatch(JavaResourceMethodDispatcherProvider.java:176)\n        at org.glassfish.jersey.server.model.internal.AbstractJavaResourceMethodDispatcher.dispatch(AbstractJavaResourceMethodDispatcher.java:79)\n        at org.glassfish.jersey.server.model.ResourceMethodInvoker.invoke(ResourceMethodInvoker.java:475)\n        at org.glassfish.jersey.server.model.ResourceMethodInvoker.apply(ResourceMethodInvoker.java:397)\n        at org.glassfish.jersey.server.model.ResourceMethodInvoker.apply(ResourceMethodInvoker.java:81)\n        at org.glassfish.jersey.server.ServerRuntime$1.run(ServerRuntime.java:255)\n        at org.glassfish.jersey.internal.Errors$1.call(Errors.java:248)\n        at org.glassfish.jersey.internal.Errors$1.call(Errors.java:244)\n        at org.glassfish.jersey.internal.Errors.process(Errors.java:292)\n        at org.glassfish.jersey.internal.Errors.process(Errors.java:274)\n        at org.glassfish.jersey.internal.Errors.process(Errors.java:244)\n        at org.glassfish.jersey.process.internal.RequestScope.runInScope(RequestScope.java:265)\n        at org.glassfish.jersey.server.ServerRuntime.process(ServerRuntime.java:234)\n        at org.glassfish.jersey.server.ApplicationHandler.handle(ApplicationHandler.java:684)\n        at org.glassfish.jersey.servlet.WebComponent.serviceImpl(WebComponent.java:394)\n        at org.glassfish.jersey.servlet.WebComponent.service(WebComponent.java:346)\n        at org.glassfish.jersey.servlet.ServletContainer.service(ServletContainer.java:358)\n        at org.glassfish.jersey.servlet.ServletContainer.service(ServletContainer.java:311)\n        at org.glassfish.jersey.servlet.ServletContainer.service(ServletContainer.java:205)\n        at org.eclipse.jetty.servlet.ServletHolder.handle(ServletHolder.java:764)\n        at org.eclipse.jetty.servlet.ServletHandler.doHandle(ServletHandler.java:508)\n        at org.eclipse.jetty.server.handler.ScopedHandler.nextHandle(ScopedHandler.java:221)\n        at org.eclipse.jetty.server.handler.ContextHandler.doHandle(ContextHandler.java:1375)\n        at org.eclipse.jetty.server.handler.ScopedHandler.nextScope(ScopedHandler.java:176)\n        at org.eclipse.jetty.servlet.ServletHandler.doScope(ServletHandler.java:463)\n        at org.eclipse.jetty.server.handler.ScopedHandler.nextScope(ScopedHandler.java:174)\n        at org.eclipse.jetty.server.handler.ContextHandler.doScope(ContextHandler.java:1297)\n        at org.eclipse.jetty.server.handler.ScopedHandler.handle(ScopedHandler.java:129)\n        at org.eclipse.jetty.server.handler.ContextHandlerCollection.handle(ContextHandlerCollection.java:192)\n        at org.eclipse.jetty.server.handler.HandlerWrapper.handle(HandlerWrapper.java:122)\n        at org.eclipse.jetty.server.Server.handle(Server.java:562)\n        at org.eclipse.jetty.server.HttpChannel.lambda$handle$0(HttpChannel.java:505)\n        at org.eclipse.jetty.server.HttpChannel.dispatch(HttpChannel.java:762)\n        at org.eclipse.jetty.server.HttpChannel.handle(HttpChannel.java:497)\n        at org.eclipse.jetty.server.HttpConnection.onFillable(HttpConnection.java:282)\n        at org.eclipse.jetty.io.AbstractConnection$ReadCallback.succeeded(AbstractConnection.java:319)\n        at org.eclipse.jetty.io.FillInterest.fillable(FillInterest.java:100)\n        at org.eclipse.jetty.io.SelectableChannelEndPoint$1.run(SelectableChannelEndPoint.java:53)\n        at org.eclipse.jetty.util.thread.strategy.AdaptiveExecutionStrategy.runTask(AdaptiveExecutionStrategy.java:412)\n        at org.eclipse.jetty.util.thread.strategy.AdaptiveExecutionStrategy.consumeTask(AdaptiveExecutionStrategy.java:381)\n        at org.eclipse.jetty.util.thread.strategy.AdaptiveExecutionStrategy.tryProduce(AdaptiveExecutionStrategy.java:268)\n        at org.eclipse.jetty.util.thread.strategy.AdaptiveExecutionStrategy.produce(AdaptiveExecutionStrategy.java:190)\n        at org.eclipse.jetty.util.thread.QueuedThreadPool.runJob(QueuedThreadPool.java:894)\n        at org.eclipse.jetty.util.thread.QueuedThreadPool$Runner.run(QueuedThreadPool.java:1038)\n        at java.base/java.lang.Thread.run(Thread.java:829)\nCaused by: java.lang.NullPointerException\n        at org.eclipse.dataspaceconnector.sql.translation.SqlConditionExpression.isValidExpression(SqlConditionExpression.java:53)\n        at java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\n        at java.base/java.util.ArrayList$ArrayListSpliterator.forEachRemaining(ArrayList.java:1655)\n        at java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:484)\n        at java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\n        at java.base/java.util.stream.ReduceOps$ReduceOp.evaluateSequential(ReduceOps.java:913)\n        at java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n        at java.base/java.util.stream.ReferencePipeline.collect(ReferencePipeline.java:578)\n        at org.eclipse.dataspaceconnector.sql.assetindex.schema.BaseSqlDialectStatements.createQuery(BaseSqlDialectStatements.java:108)\n        at org.eclipse.dataspaceconnector.sql.assetindex.SqlAssetIndex.lambda$queryAssets$2(SqlAssetIndex.java:144)\n        at org.eclipse.dataspaceconnector.transaction.local.LocalTransactionContext.execute(LocalTransactionContext.java:63)\n        ... 69 more\n")),(0,r.kt)("h4",{id:"solution-1-update-all-criteria-manually"},"Solution 1: Update all Criteria manually"),(0,r.kt)("p",null,"Root of this issue is that the operator, left- and right-operand Criteria field names changed."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Old"),(0,r.kt)("th",{parentName:"tr",align:"left"},"New"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"left"),(0,r.kt)("td",{parentName:"tr",align:"left"},"operandLeft")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"right"),(0,r.kt)("td",{parentName:"tr",align:"left"},"operandRight")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"op"),(0,r.kt)("td",{parentName:"tr",align:"left"},"operator")))),(0,r.kt)("p",null,"It is possible to resolve this issue by updating the content of the column, that contain JSON serialized constraints,\nfrom"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"criteria":[{"left":"asset:prop:id","op":"=","right":"asset-1"}]}\n')),(0,r.kt)("p",null,"to"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"criteria":[{"operandLeft":"asset:prop:id","operator":"=","operandRight":"asset-1"}]}\n')),(0,r.kt)("h4",{id:"solution-2-delete-all-rows-containing-constraints"},"Solution 2: Delete all rows containing Constraints"),(0,r.kt)("p",null,"Instead of updating each row in the database it's also possible to delete all Contract Definitions and Policies.\nAdditionally it's necessary to delete all Negotiations, as they might reference existing Contract Definitions and/or\nPolicies."),(0,r.kt)("p",null,"Theoretically it's also necessary to delete Contract Agreements. As their deletion is already described in another\nsection, we can skip them here."),(0,r.kt)("h5",{id:"required-queries"},"Required Queries"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE\nFROM edc_contract_negotiation;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE\nFROM edc_contract_definitions;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE\nFROM edc_policydefinitins;\n")),(0,r.kt)("h3",{id:"12-delete-contract-agreements"},"1.2 Delete Contract Agreements"),(0,r.kt)("p",null,"In the new version contract agreement rows contain a serialized policy at the time, the contract was concluded.\nWith the EDC update all existing Contract Agreements must be deleted."),(0,r.kt)("h4",{id:"required-query"},"Required Query"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE\nFROM edc_contract_agreement;\n")),(0,r.kt)("h2",{id:"2-data-management-api"},"2. Data Management API"),(0,r.kt)("p",null,"It might be necessary to update applications and scripts that use the Data Management API. This section covers the most\nimportant changes in endpoints and payloads."),(0,r.kt)("h3",{id:"21-policy-path"},"2.1 Policy Path"),(0,r.kt)("p",null,"The Data Management API Path for Policies changes from\n",(0,r.kt)("inlineCode",{parentName:"p"},"/policies")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"/policydefinitions"),"."),(0,r.kt)("h4",{id:"get-all-policies"},"Get All Policies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "${DATA_MGMT_ENDPOINT}/data/policydefinitions" --header "X-Api-Key: <key>" --header "Content-Type: application/json"\n')),(0,r.kt)("h3",{id:"22-policy-payload"},"2.2 Policy Payload"),(0,r.kt)("p",null,"The Policy Payload now wraps the policy details in an additional policy object."),(0,r.kt)("h4",{id:"new-payload"},"New Payload"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uid": "1",\n  "policy": {\n    "prohibitions": [],\n    "obligations": [],\n    "permissions": []\n  }\n}\n')),(0,r.kt)("h4",{id:"old-payload"},"Old Payload"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uid": "1",\n  "prohibitions": [],\n  "obligations": [],\n  "permissions": []\n}\n')),(0,r.kt)("h3",{id:"23-criteria-in-payload-of-contract-definitions-and-policies"},"2.3 Criteria in Payload of Contract Definitions and Policies"),(0,r.kt)("p",null,"The payload of a Policy or a Contract Definition may contain one or more Criteria. The format of these serialized Criteria changed.\nPlease note that there is no input validation, that detects errors when the old Criteria format is used!"),(0,r.kt)("h4",{id:"old-criterion-format"},"Old Criterion Format"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "left": "asset:prop:id", "op": "=", "right": "1" }\n')),(0,r.kt)("h4",{id:"new-criterion-format"},"New Criterion Format"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "operandLeft": "asset:prop:id", "operator": "=", "operandRight": "1" }\n')),(0,r.kt)("h4",{id:"example-call"},"Example Call"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "${DATA_MGMT_ENDPOINT}/data/contractdefinitions" --header "X-Api-Key: <key>" --header "Content-Type: application/json" --data "{ \\"id\\": \\"1\\", \\"criteria\\": [ { \\"operandLeft\\": \\"asset:prop:id\\", \\"operator\\": \\"=\\", \\"operandRight\\": \\"1\\" } ], \\"accessPolicyId\\": \\"1\\", \\"contractPolicyId\\": \\"1\\" }"\n')),(0,r.kt)("h3",{id:"24-data-address"},"2.4 Data Address"),(0,r.kt)("p",null,"When using a Data Address of type ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpData")," please notice that the property ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoint")," changed to ",(0,r.kt)("inlineCode",{parentName:"p"},"baseUrl"),". This\nproperty is mostly used when creating assets."),(0,r.kt)("h4",{id:"old-asset-format"},"Old Asset format"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "asset": {\n    ...\n  },\n  "dataAddress": {\n    "properties": {\n      "endpoint": "http://provider-backend-service:8080/data/asset-1",\n      "type": "HttpData"\n    }\n  }\n}\n')),(0,r.kt)("h4",{id:"new-asset-format"},"New Asset format"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "asset": {\n    ...\n  },\n  "dataAddress": {\n    "properties": {\n      "baseUrl": "http://provider-backend-service:8080/data/asset-1",\n      "type": "HttpData"\n    }\n  }\n}\n')),(0,r.kt)("h4",{id:"example-call-1"},"Example Call"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "$PLATO_DATAMGMT_URL/data/assets" --header "X-Api-Key: password" --header "Content-Type: application/json" --data "{ \\"asset\\": { \\"properties\\": { \\"asset:prop:id\\": \\"1\\", \\"asset:prop:description\\": \\"Tractus-X EDC Demo Asset\\" } }, \\"dataAddress\\": { \\"properties\\": { \\"type\\": \\"HttpData\\", \\"baseUrl\\": \\"https://jsonplaceholder.typicode.com/todos/1\\" } } }" -s -o /dev/null -w \'Response Code: %{http_code}\\n\'\n')),(0,r.kt)("h2",{id:"3-connector-configuration"},"3. Connector Configuration"),(0,r.kt)("h3",{id:"31-token-validation-endpoint-setting"},"3.1 Token Validation Endpoint Setting"),(0,r.kt)("p",null,"In the past the token validation endpoint was configured in ",(0,r.kt)("inlineCode",{parentName:"p"},"edc.controlplane.validation-endpoint"),". This setting key\nmust be renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"edc.dataplane.token.validation.endpoint"),"."),(0,r.kt)("h3",{id:"32-dataplane-selector"},"3.2 DataPlane Selector"),(0,r.kt)("p",null,"With this version a new feature was introduced which allows to have separate DataPlane instances for different\ntransfer-flows (HttpProxy, S3, etc.). The Catena-X EDC team has additionally a new extension created which allows a\nsimpler registration of additional dataplanes. Therefor some changes needs to be applied. Further documentation can\nbe found in the extension folder:\n",(0,r.kt)("a",{parentName:"p",href:"/docs/kits/tractusx-edc/edc-extensions/dataplane-selector-configuration/"},"dataplane-selector-configuration")))}p.isMDXComponent=!0}}]);