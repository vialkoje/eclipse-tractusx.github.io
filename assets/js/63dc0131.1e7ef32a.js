"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[7947],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||c;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<c;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},82858:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const c={},a="Notice for Docker image",l={unversionedId:"kits/tractusx-edc/edc-controlplane/edc-controlplane-postgresql/notice",id:"kits/tractusx-edc/edc-controlplane/edc-controlplane-postgresql/notice",title:"Notice for Docker image",description:"An EDC Control Plane using PostgreSQL as persistence backend, and Azure KeyVault as secret store.",source:"@site/docs/kits/tractusx-edc/edc-controlplane/edc-controlplane-postgresql/notice.md",sourceDirName:"kits/tractusx-edc/edc-controlplane/edc-controlplane-postgresql",slug:"/kits/tractusx-edc/edc-controlplane/edc-controlplane-postgresql/notice",permalink:"/docs/kits/tractusx-edc/edc-controlplane/edc-controlplane-postgresql/notice",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/kits/tractusx-edc/edc-controlplane/edc-controlplane-postgresql/notice.md",tags:[],version:"current",frontMatter:{},sidebar:"kits",previous:{title:"EDC Control-Plane backed by Postgresql",permalink:"/docs/kits/tractusx-edc/edc-controlplane/edc-controlplane-postgresql/"},next:{title:"EDC Control-Plane backed by Postgresql and HashiCorp vault",permalink:"/docs/kits/tractusx-edc/edc-controlplane/edc-controlplane-postgresql-hashicorp-vault/"}},i={},s=[{value:"TractusX-EDC Control Plane",id:"tractusx-edc-control-plane",level:2},{value:"Used base image",id:"used-base-image",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"notice-for-docker-image"},"Notice for Docker image"),(0,o.kt)("p",null,"An EDC Control Plane using PostgreSQL as persistence backend, and Azure KeyVault as secret store."),(0,o.kt)("p",null,"DockerHub: ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/tractusx/edc-controlplane-postgresql"},"https://hub.docker.com/r/tractusx/edc-controlplane-postgresql")),(0,o.kt)("p",null,"Eclipse Tractus-X product(s) installed within the image:"),(0,o.kt)("h2",{id:"tractusx-edc-control-plane"},"TractusX-EDC Control Plane"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GitHub: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/tractusx-edc"},"https://github.com/eclipse-tractusx/tractusx-edc")),(0,o.kt)("li",{parentName:"ul"},"Project home: ",(0,o.kt)("a",{parentName:"li",href:"https://projects.eclipse.org/projects/automotive.tractusx"},"https://projects.eclipse.org/projects/automotive.tractusx")),(0,o.kt)("li",{parentName:"ul"},"Dockerfile: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/tractusx-edc/blob/main/edc-controlplane/edc-controlplane-postgresql/src/main/docker/Dockerfile"},"https://github.com/eclipse-tractusx/tractusx-edc/blob/main/edc-controlplane/edc-controlplane-postgresql/src/main/docker/Dockerfile")),(0,o.kt)("li",{parentName:"ul"},"Project license: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/tractusx-edc/blob/main/LICENSE"},"Apache License, Version 2.0"))),(0,o.kt)("h2",{id:"used-base-image"},"Used base image"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/adoptium/containers"},"eclipse-temurin:17.0.6_10-jre-alpine")),(0,o.kt)("li",{parentName:"ul"},"Official Eclipse Temurin DockerHub page: ",(0,o.kt)("a",{parentName:"li",href:"https://hub.docker.com/_/eclipse-temurin"},"https://hub.docker.com/_/eclipse-temurin")),(0,o.kt)("li",{parentName:"ul"},"Eclipse Temurin Project: ",(0,o.kt)("a",{parentName:"li",href:"https://projects.eclipse.org/projects/adoptium.temurin"},"https://projects.eclipse.org/projects/adoptium.temurin")),(0,o.kt)("li",{parentName:"ul"},"Additional information about the Eclipse Temurin\nimages: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/docker-library/repo-info/tree/master/repos/eclipse-temurin"},"https://github.com/docker-library/repo-info/tree/master/repos/eclipse-temurin"))),(0,o.kt)("p",null,"As with all Docker images, these likely also contain other software which may be under other licenses (such as Bash, etc\nfrom the base distribution, along with any direct or indirect dependencies of the primary software being contained)."),(0,o.kt)("p",null,"As for any pre-built image usage, it is the image user's responsibility to ensure that any use of this image complies\nwith any relevant licenses for all software contained within."))}u.isMDXComponent=!0}}]);