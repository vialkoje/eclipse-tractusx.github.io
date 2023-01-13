"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[5708,829],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var l=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=l.createContext({}),s=function(e){var t=l.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return l.createElement(o.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},E=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),f=s(a),E=r,m=f["".concat(o,".").concat(E)]||f[E]||u[E]||n;return a?l.createElement(m,i(i({ref:t},d),{},{components:a})):l.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=E;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[f]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<n;s++)i[s]=a[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}E.displayName="MDXCreateElement"},3709:(e,t,a)=>{a.d(t,{Z:()=>f});var l=a(7294);const r="kits_card_ejFA",n="container_VLQw",i="img_container_bcAh",c="img_ZIYG",o="information_container_weUW",s="title_SXU5",d="subtitle_kygm";function f(e){let{title:t,subtitle:a,img:f}=e;return l.createElement("section",{className:r},l.createElement("div",{className:n},l.createElement("div",{className:o},l.createElement("h2",{className:s},t),l.createElement("p",{className:d},a)),l.createElement("div",{className:i},l.createElement("img",{className:c,src:f}))))}},2445:(e,t,a)=>{a.d(t,{Z:()=>B});var l=a(7294),r=a(9960),n=a(6550);const i="kits_header_vqsG",c="container_wFjZ",o="go_back_bonO",s="go_back_link_vly9",d="logo_container_P0j4",f="svg_container_iTL0",u="svg_KN8G",E="information_container_ksME",m="title_iAOe",p="subtitle_jP3N",h="links_container_SFcl",A="link_YcnN",S="button_MjOv",g="selected_i_CJ";function B(e){let{title:t,subtitle:a,SVG:B}=e;const v=(0,n.TH)(),{pathname:_}=v,C=_.split("/");return l.createElement("header",{className:i},l.createElement("div",{className:c},l.createElement("div",{className:d},l.createElement("div",{className:o},l.createElement(r.Z,{className:s,to:"/developer"},"\u2190 Back to All Kits")),l.createElement("div",{className:f},l.createElement(B,{className:u})),l.createElement("div",{className:E},l.createElement("h2",{className:m},t),l.createElement("p",{className:p},a))),l.createElement("div",{className:h},l.createElement("div",{className:A},l.createElement(r.Z,{className:"adoptionview"==C[2]?g:S,to:`/${C[1]}/adoptionview`},"ADOPTION VIEW")),l.createElement("div",{className:A},l.createElement(r.Z,{className:"softwaredevelopmentview"==C[2]?g:S},"SOFTWARE DEVELOPMENT VIEW")),l.createElement("div",{className:A},l.createElement(r.Z,{className:"softwareoperationview"==C[2]?g:S},"SOFTWARE OPERATION VIEW")),l.createElement("div",{className:A},l.createElement(r.Z,{className:"documentation"==C[2]?g:S},"DOCUMENTATION")))))}},4813:(e,t,a)=>{a.r(t),a.d(t,{default:()=>C});var l,r,n,i,c,o,s,d,f,u,E=a(7294),m=a(2263),p=a(3285),h=a(2445),A=a(3709),S=a(6434);function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},g.apply(this,arguments)}const B=e=>{let{title:t,titleId:a,...m}=e;return E.createElement("svg",g({width:493,height:349,viewBox:"0 0 493 349",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},m),t?E.createElement("title",{id:a},t):null,l||(l=E.createElement("g",{filter:"url(#a)"},E.createElement("path",{d:"M176.677 101.098c11.797-6.811 30.925-6.811 42.722 0l102.62 59.242c11.797 6.811 11.797 17.853 0 24.664l-102.62 59.242c-11.797 6.81-30.925 6.81-42.722 0l-102.62-59.242c-11.797-6.811-11.797-17.853 0-24.664l102.62-59.242Z",fill:"#84A8CA",fillOpacity:.9}))),r||(r=E.createElement("g",{filter:"url(#b)"},E.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m320.951 174.461-102.62-59.243c-11.207-6.47-29.379-6.47-40.586 0l-102.62 59.243c-11.207 6.47-11.207 16.96 0 23.43l102.62 59.242c11.208 6.47 29.379 6.47 40.586 0l102.62-59.242c11.207-6.47 11.207-16.96 0-23.43Zm-101.552-59.859c-11.797-6.811-30.925-6.811-42.722 0l-102.62 59.242c-11.797 6.811-11.797 17.853 0 24.664l102.62 59.242c11.797 6.811 30.925 6.811 42.722 0l102.62-59.242c11.797-6.811 11.797-17.853 0-24.664l-102.62-59.242Z",fill:"#84A8CA"}))),n||(n=E.createElement("g",{filter:"url(#c)"},E.createElement("path",{d:"M177.359 71.054c11.798-6.81 30.925-6.81 42.723 0l102.619 59.242c11.798 6.811 11.798 17.853 0 24.664l-102.619 59.242c-11.798 6.811-30.925 6.811-42.723 0L74.74 154.96c-11.797-6.811-11.797-17.853 0-24.664L177.36 71.054Z",fill:"#4E6D8C",fillOpacity:.9}))),i||(i=E.createElement("g",{filter:"url(#d)"},E.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M321.633 144.417 219.014 85.175c-11.208-6.47-29.379-6.47-40.587 0L75.808 144.417c-11.208 6.47-11.208 16.961 0 23.431l102.619 59.242c11.208 6.47 29.379 6.47 40.587 0l102.619-59.242c11.208-6.47 11.208-16.961 0-23.431ZM220.082 84.558c-11.798-6.81-30.925-6.81-42.723 0L74.74 143.801c-11.797 6.81-11.797 17.853 0 24.663l102.619 59.242c11.798 6.811 30.925 6.811 42.723 0l102.619-59.242c11.798-6.81 11.798-17.853 0-24.663L220.082 84.558Z",fill:"#4E6D8C"}))),c||(c=E.createElement("g",{filter:"url(#e)"},E.createElement("path",{d:"M177.359 42.376c11.798-6.81 30.925-6.81 42.723 0l102.619 59.242c11.798 6.811 11.798 17.853 0 24.664l-102.619 59.242c-11.798 6.811-30.925 6.811-42.723 0L74.74 126.282c-11.797-6.811-11.797-17.853 0-24.664L177.36 42.376Z",fill:"#5D768F",fillOpacity:.9}))),o||(o=E.createElement("g",{filter:"url(#f)"},E.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m321.634 115.738-102.62-59.242c-11.207-6.47-29.378-6.47-40.586 0l-102.62 59.242c-11.207 6.471-11.207 16.961 0 23.431l102.62 59.242c11.208 6.47 29.379 6.47 40.586 0l102.62-59.242c11.207-6.47 11.207-16.96 0-23.431ZM220.082 55.88c-11.797-6.811-30.925-6.811-42.722 0L74.74 115.122c-11.797 6.811-11.797 17.853 0 24.664l102.62 59.242c11.797 6.81 30.925 6.81 42.722 0l102.62-59.242c11.797-6.811 11.797-17.853 0-24.664L220.082 55.88Z",fill:"#5D768F"}))),s||(s=E.createElement("g",{filter:"url(#g)"},E.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M321.633 85.695 219.014 26.453c-11.208-6.47-29.379-6.47-40.587 0L75.808 85.695c-11.208 6.47-11.208 16.96 0 23.431l102.619 59.242c11.208 6.47 29.379 6.47 40.587 0l102.619-59.242c11.208-6.471 11.208-16.96 0-23.431ZM220.082 25.836c-11.798-6.81-30.925-6.81-42.723 0L74.74 85.078c-11.797 6.811-11.797 17.853 0 24.664l102.619 59.242c11.798 6.811 30.925 6.811 42.723 0l102.619-59.242c11.798-6.811 11.798-17.853 0-24.664L220.082 25.836Z",fill:"#6F879E"}))),d||(d=E.createElement("path",{d:"M177.359 12.332c11.798-6.81 30.925-6.81 42.723 0l102.619 59.242c11.798 6.81 11.798 17.853 0 24.664L220.082 155.48c-11.798 6.811-30.925 6.811-42.723 0L74.74 96.238c-11.797-6.811-11.797-17.853 0-24.664L177.36 12.332Z",fill:"url(#h)"})),f||(f=E.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M240.661 95.705c-4.438 2.562-11.664 2.567-16.11 0-4.447-2.567-4.446-6.743 0-9.3 4.438-2.563 11.664-2.568 16.11 0 4.439 2.561 4.447 6.733 0 9.3Zm-2.371-1.37c3.133-1.81 3.133-4.753 0-6.562-3.133-1.808-8.233-1.809-11.366 0-3.133 1.809-3.133 4.753 0 6.562 3.133 1.808 8.233 1.808 11.366 0ZM218.702 83.85c-5.161 2.979-13.562 2.979-18.723 0-5.161-2.98-5.161-7.83 0-10.809 5.161-2.98 13.562-2.98 18.723 0 5.16 2.98 5.16 7.83 0 10.809Zm-2.366-1.375c3.855-2.225 3.855-5.843 0-8.068-3.847-2.221-10.129-2.221-13.977 0-3.855 2.225-3.855 5.843 0 8.068 3.855 2.226 10.122 2.226 13.977 0Zm10.32 27.824a.158.158 0 0 0 .027-.02.21.21 0 0 1 .027-.02l7.341-5.87c1.89-1.516 1.605-3.568-.683-4.89l-.522-.3c-.307-.178-.73-.28-1.168-.284-3.356-.032-6.512-.807-8.885-2.177-2.38-1.374-3.716-3.192-3.763-5.125-.008-.253-.184-.497-.491-.674l-.952-.55c-1.728-.998-4.223-1.32-6.466-.948a5.846 5.846 0 0 0-1.106-.816l-.614-.355c-.307-.177-.73-.28-1.167-.283-4.07-.036-7.903-.971-10.79-2.638-2.887-1.667-4.508-3.88-4.577-6.233-.008-.253-.176-.492-.491-.674l-1.136-.656a8.492 8.492 0 0 0-1.359-.617c.653-1.299.092-2.721-1.644-3.723l-.522-.302c-.307-.177-.73-.28-1.167-.283-3.356-.032-6.512-.807-8.885-2.177-2.381-1.374-3.717-3.192-3.763-5.125-.009-.253-.185-.497-.492-.674l-.952-.55c-2.296-1.325-5.86-1.494-8.478-.4l-10.16 4.244c-.011.006-.023.01-.034.015a.255.255 0 0 0-.035.016c-1.305.603-2.096 1.503-2.188 2.47-.092.966.538 1.905 1.721 2.588l15.973 9.221c-1.382.683-2.228 1.667-2.335 2.722-.1 1.095.607 2.168 1.951 2.944l23.191 13.388c1.344.776 3.21 1.188 5.107 1.131 1.82-.058 3.525-.546 4.707-1.344l16.012 9.244c1.182.682 2.818 1.041 4.492.988 1.673-.054 3.223-.515 4.275-1.264l.001.001Zm-71.747-39.514c.038-.412.361-.785.914-1.05l10.128-4.226c1.275-.531 3.011-.452 4.132.195l.492.284c.23 2.288 1.888 4.434 4.722 6.07 2.834 1.635 6.543 2.597 10.513 2.726l.054.03c.806.466 1.106 1.118.852 1.725-.039-.004-.085-.004-.131-.004a7.945 7.945 0 0 0-.806-.013c-.042.002-.083.002-.125.002-.043 0-.086 0-.128.002a9.414 9.414 0 0 0-.615.036 1.956 1.956 0 0 1-.084.004 2.404 2.404 0 0 0-.085.005c-.261.026-.514.057-.767.097-.031.005-.061.011-.092.018a1.415 1.415 0 0 1-.092.017c-.192.031-.385.071-.569.116l-.119.029c-.04.01-.08.02-.119.028-.168.045-.345.093-.506.142l-.089.026a8.405 8.405 0 0 0-.809.289l-9.593 3.995-16.333-9.43c-.515-.297-.783-.691-.745-1.112Zm42.074 29.946c-.96.031-1.866-.172-2.542-.563L171.25 86.78c-.676-.39-1.021-.909-.975-1.467.054-.546.476-1.038 1.205-1.38l1.313-.544.007-.004h.003l.005.004 10.729-4.482c1.067-.448 2.403-.572 3.663-.333.629.115 1.205.315 1.674.586l.668.385c.246 2.713 2.196 5.25 5.537 7.178 3.34 1.928 7.732 3.054 12.425 3.192l.146.084c.491.284.837.616 1.036.997.376.714.161 1.467-.606 2.08l-7.749 6.202-.952.762c-.606.413-1.451.661-2.396.692v-.001Zm25.219 8.893c-.73.023-1.421-.128-1.935-.425l-16.387-9.46 6.918-5.529c.154-.123.3-.252.423-.385l.012-.013c.034-.035.069-.072.103-.115.084-.094.161-.191.238-.289l.028-.037.026-.034c.017-.023.034-.046.054-.07a3.34 3.34 0 0 0 .184-.311l.069-.12c.062-.142.123-.283.169-.425l.008-.043.004-.017.011-.06c.031-.106.054-.217.062-.328l.001-.005a.673.673 0 0 0 .007-.168 1.63 1.63 0 0 0-.008-.28c-.004-.028-.006-.058-.008-.088-.002-.03-.004-.06-.008-.088-.003-.011-.003-.022-.003-.033-.001-.011-.001-.023-.005-.034 1.06-.15 2.22.022 3.034.492l.491.284c.231 2.288 1.889 4.433 4.723 6.07 2.834 1.635 6.543 2.597 10.513 2.725l.053.031c1.114.643 1.252 1.645.33 2.381l-7.31 5.843c-.438.324-1.082.51-1.797.532v-.001Zm-26.671-39.973c-4.438 2.563-11.664 2.567-16.111 0-4.446-2.566-4.437-6.738 0-9.3 4.439-2.563 11.673-2.563 16.111 0 4.438 2.562 4.447 6.733 0 9.3Zm-2.372-1.37c3.133-1.809 3.134-4.753 0-6.561-3.133-1.809-8.231-1.809-11.365 0-3.133 1.808-3.133 4.752 0 6.561 3.133 1.809 8.232 1.809 11.365 0Z",fill:"#fff"})),u||(u=E.createElement("defs",null,E.createElement("filter",{id:"a",x:.209,y:81.99,width:417.657,height:433.364,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},E.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),E.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),E.createElement("feOffset",null),E.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}),E.createElement("feBlend",{in2:"BackgroundImageFix",result:"effect1_dropShadow_575_11645"}),E.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),E.createElement("feOffset",{dx:1,dy:12}),E.createElement("feGaussianBlur",{stdDeviation:13}),E.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}),E.createElement("feBlend",{in2:"effect1_dropShadow_575_11645",result:"effect2_dropShadow_575_11645"}),E.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),E.createElement("feOffset",{dx:3,dy:47}),E.createElement("feGaussianBlur",{stdDeviation:24}),E.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"}),E.createElement("feBlend",{in2:"effect2_dropShadow_575_11645",result:"effect3_dropShadow_575_11645"}),E.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),E.createElement("feOffset",{dx:6,dy:107}),E.createElement("feGaussianBlur",{stdDeviation:32}),E.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"}),E.createElement("feBlend",{in2:"effect3_dropShadow_575_11645",result:"effect4_dropShadow_575_11645"}),E.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),E.createElement("feOffset",{dx:11,dy:190}),E.createElement("feGaussianBlur",{stdDeviation:38}),E.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"}),E.createElement("feBlend",{in2:"effect4_dropShadow_575_11645",result:"effect5_dropShadow_575_11645"}),E.createElement("feBlend",{in:"SourceGraphic",in2:"effect5_dropShadow_575_11645",result:"shape"})),E.createElement("filter",{id:"b",x:.209,y:95.494,width:417.657,height:433.364,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},E.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),E.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),E.createElement("feOffset",null),E.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}),E.createElement("feBlend",{in2:"BackgroundImageFix",result:"effect1_dropShadow_575_11645"}),E.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),E.createElement("feOffset",{dx:1,dy:12}),E.createElement("feGaussianBlur",{stdDeviation:13}),E.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}),E.createElement("feBlend",{in2:"effect1_dropShadow_575_11645",result:"effect2_dropShadow_575_11645"}),E.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),E.createElement("feOffset",{dx:3,dy:47}),E.createElement("feGaussianBlur",{stdDeviation:24}),E.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"}),E.createElement("feBlend",{in2:"effect2_dropShadow_575_11645",result:"effect3_dropShadow_575_11645"}),E.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),E.createElement("feOffset",{dx:6,dy:107}),E.createElement("feGaussianBlur",{stdDeviation:32}),E.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"}),E.createElement("feBlend",{in2:"effect3_dropShadow_575_11645",result:"effect4_dropShadow_575_11645"}),E.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),E.createElement("feOffset",{dx:11,dy:190}),E.createElement("feGaussianBlur",{stdDeviation:38}),E.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"}),E.createElement("feBlend",{in2:"effect4_dropShadow_575_11645",result:"effect5_dropShadow_575_11645"}),E.createElement("feBlend",{in:"SourceGraphic",in2:"effect5_dropShadow_575_11645",result:"shape"})),E.createElement("filter",{id:"c",x:.892,y:51.946,width:417.657,height:433.364,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},E.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),E.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),E.createElement("feOffset",null),E.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}),E.createElement("feBlend",{in2:"BackgroundImageFix",result:"effect1_dropShadow_575_11645"}),E.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),E.createElement("feOffset",{dx:1,dy:12}),E.createElement("feGaussianBlur",{stdDeviation:13}),E.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}),E.createElement("feBlend",{in2:"effect1_dropShadow_575_11645",result:"effect2_dropShadow_575_11645"}),E.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),E.createElement("feOffset",{dx:3,dy:47}),E.createElement("feGaussianBlur",{stdDeviation:24}),E.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"}),E.createElement("feBlend",{in2:"effect2_dropShadow_575_11645",result:"effect3_dropShadow_575_11645"}),E.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),E.createElement("feOffset",{dx:6,dy:107}),E.createElement("feGaussianBlur",{stdDeviation:32}),E.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"}),E.createElement("feBlend",{in2:"effect3_dropShadow_575_11645",result:"effect4_dropShadow_575_11645"}),E.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),E.createElement("feOffset",{dx:11,dy:190}),E.createElement("feGaussianBlur",{stdDeviation:38}),E.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"}),E.createElement("feBlend",{in2:"effect4_dropShadow_575_11645",result:"effect5_dropShadow_575_11645"}),E.createElement("feBlend",{in:"SourceGraphic",in2:"effect5_dropShadow_575_11645",result:"shape"})),E.createElement("filter",{id:"d",x:.892,y:65.45,width:417.657,height:433.364,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},E.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),E.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),E.createElement("feOffset",null),E.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}),E.createElement("feBlend",{in2:"BackgroundImageFix",result:"effect1_dropShadow_575_11645"}),E.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),E.createElement("feOffset",{dx:1,dy:12}),E.createElement("feGaussianBlur",{stdDeviation:13}),E.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}),E.createElement("feBlend",{in2:"effect1_dropShadow_575_11645",result:"effect2_dropShadow_575_11645"}),E.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),E.createElement("feOffset",{dx:3,dy:47}),E.createElement("feGaussianBlur",{stdDeviation:24}),E.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"}),E.createElement("feBlend",{in2:"effect2_dropShadow_575_11645",result:"effect3_dropShadow_575_11645"}),E.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),E.createElement("feOffset",{dx:6,dy:107}),E.createElement("feGaussianBlur",{stdDeviation:32}),E.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"}),E.createElement("feBlend",{in2:"effect3_dropShadow_575_11645",result:"effect4_dropShadow_575_11645"}),E.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),E.createElement("feOffset",{dx:11,dy:190}),E.createElement("feGaussianBlur",{stdDeviation:38}),E.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"}),E.createElement("feBlend",{in2:"effect4_dropShadow_575_11645",result:"effect5_dropShadow_575_11645"}),E.createElement("feBlend",{in:"SourceGraphic",in2:"effect5_dropShadow_575_11645",result:"shape"})),E.createElement("filter",{id:"e",x:.892,y:23.268,width:417.657,height:433.364,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},E.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),E.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),E.createElement("feOffset",null),E.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}),E.createElement("feBlend",{in2:"BackgroundImageFix",result:"effect1_dropShadow_575_11645"}),E.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),E.createElement("feOffset",{dx:1,dy:12}),E.createElement("feGaussianBlur",{stdDeviation:13}),E.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}),E.createElement("feBlend",{in2:"effect1_dropShadow_575_11645",result:"effect2_dropShadow_575_11645"}),E.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),E.createElement("feOffset",{dx:3,dy:47}),E.createElement("feGaussianBlur",{stdDeviation:24}),E.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"}),E.createElement("feBlend",{in2:"effect2_dropShadow_575_11645",result:"effect3_dropShadow_575_11645"}),E.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),E.createElement("feOffset",{dx:6,dy:107}),E.createElement("feGaussianBlur",{stdDeviation:32}),E.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"}),E.createElement("feBlend",{in2:"effect3_dropShadow_575_11645",result:"effect4_dropShadow_575_11645"}),E.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),E.createElement("feOffset",{dx:11,dy:190}),E.createElement("feGaussianBlur",{stdDeviation:38}),E.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"}),E.createElement("feBlend",{in2:"effect4_dropShadow_575_11645",result:"effect5_dropShadow_575_11645"}),E.createElement("feBlend",{in:"SourceGraphic",in2:"effect5_dropShadow_575_11645",result:"shape"})),E.createElement("filter",{id:"f",x:.893,y:36.772,width:417.657,height:433.364,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},E.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),E.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),E.createElement("feOffset",null),E.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}),E.createElement("feBlend",{in2:"BackgroundImageFix",result:"effect1_dropShadow_575_11645"}),E.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),E.createElement("feOffset",{dx:1,dy:12}),E.createElement("feGaussianBlur",{stdDeviation:13}),E.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}),E.createElement("feBlend",{in2:"effect1_dropShadow_575_11645",result:"effect2_dropShadow_575_11645"}),E.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),E.createElement("feOffset",{dx:3,dy:47}),E.createElement("feGaussianBlur",{stdDeviation:24}),E.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"}),E.createElement("feBlend",{in2:"effect2_dropShadow_575_11645",result:"effect3_dropShadow_575_11645"}),E.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),E.createElement("feOffset",{dx:6,dy:107}),E.createElement("feGaussianBlur",{stdDeviation:32}),E.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"}),E.createElement("feBlend",{in2:"effect3_dropShadow_575_11645",result:"effect4_dropShadow_575_11645"}),E.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),E.createElement("feOffset",{dx:11,dy:190}),E.createElement("feGaussianBlur",{stdDeviation:38}),E.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"}),E.createElement("feBlend",{in2:"effect4_dropShadow_575_11645",result:"effect5_dropShadow_575_11645"}),E.createElement("feBlend",{in:"SourceGraphic",in2:"effect5_dropShadow_575_11645",result:"shape"})),E.createElement("filter",{id:"g",x:.892,y:6.728,width:417.657,height:433.364,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},E.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),E.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),E.createElement("feOffset",null),E.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}),E.createElement("feBlend",{in2:"BackgroundImageFix",result:"effect1_dropShadow_575_11645"}),E.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),E.createElement("feOffset",{dx:1,dy:12}),E.createElement("feGaussianBlur",{stdDeviation:13}),E.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}),E.createElement("feBlend",{in2:"effect1_dropShadow_575_11645",result:"effect2_dropShadow_575_11645"}),E.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),E.createElement("feOffset",{dx:3,dy:47}),E.createElement("feGaussianBlur",{stdDeviation:24}),E.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"}),E.createElement("feBlend",{in2:"effect2_dropShadow_575_11645",result:"effect3_dropShadow_575_11645"}),E.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),E.createElement("feOffset",{dx:6,dy:107}),E.createElement("feGaussianBlur",{stdDeviation:32}),E.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"}),E.createElement("feBlend",{in2:"effect3_dropShadow_575_11645",result:"effect4_dropShadow_575_11645"}),E.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),E.createElement("feOffset",{dx:11,dy:190}),E.createElement("feGaussianBlur",{stdDeviation:38}),E.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"}),E.createElement("feBlend",{in2:"effect4_dropShadow_575_11645",result:"effect5_dropShadow_575_11645"}),E.createElement("feBlend",{in:"SourceGraphic",in2:"effect5_dropShadow_575_11645",result:"shape"})),E.createElement("linearGradient",{id:"h",x1:198.721,y1:0,x2:172.069,y2:163.466,gradientUnits:"userSpaceOnUse"},E.createElement("stop",{stopColor:"#6F879E"}),E.createElement("stop",{offset:1,stopColor:"#153351"})))))},v=a.p+"assets/images/benefits-min-0cfeca83126690ae1c415d7eca6eb2a5.png",_={info_container:"info_container_RxoT",paragraph:"paragraph_uO_Y",benefits:"benefits_bjuc",title:"title_bAR2",subtitle:"subtitle_hjZo"};function C(){const{siteConfig:e}=(0,m.Z)();return E.createElement(p.Z,{title:"Adoption View",description:"Description will go into a meta tag in <head />"},E.createElement(h.Z,{title:"Business Partner Kit",subtitle:"Use BusinessParterKit in your app or service to get a high-quality data record including a unique identifier of business partners or to connect as a sharing member.",SVG:B}),E.createElement("main",null,E.createElement("div",{className:_.info_container},E.createElement("div",{className:_.paragraph},E.createElement(S.default,null)),E.createElement("div",{className:_.benefits},E.createElement("h2",{className:_.title},"Benefits"),E.createElement("p",{className:_.subtitle},"The three main benefits of using the BP KIT (Business Partner Kit)."),E.createElement("img",{src:v,className:_.img}))),E.createElement(A.Z,{title:"Explore the business partner data managment.",subtitle:"Especially the  Golden Records for business partners and the Value Added Services (VAS).",img:"data:image/png;base64,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"})))}},6434:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>f,frontMatter:()=>n,metadata:()=>c,toc:()=>s});var l=a(7462),r=(a(7294),a(3905));const n={id:"adoption",title:"Adoption"},i=void 0,c={unversionedId:"kits/Business-Kit/adoption",id:"kits/Business-Kit/adoption",title:"Adoption",description:"The BusinessPartnerKit provides high-quality data records of business partners including a unique identifier, the business partner number (BPN). The BPN provides a standardized and unique identifier on legal entity, site and address level. The connected backend service removes duplicate data, adds missing information, and improves data quality from different data sources so-called sharing member.",source:"@site/docs/kits/Business-Kit/adoption-view.md",sourceDirName:"kits/Business-Kit",slug:"/kits/Business-Kit/adoption",permalink:"/docs/kits/Business-Kit/adoption",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/kits/Business-Kit/adoption-view.md",tags:[],version:"current",frontMatter:{id:"adoption",title:"Adoption"},sidebar:"kits",previous:{title:"What are KITs",permalink:"/docs/kits"},next:{title:"Adoption",permalink:"/docs/kits/DataChain-Kit/adoption"}},o={},s=[],d={toc:s};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The BusinessPartnerKit provides high-quality data records of business partners including a unique identifier, the business partner number (BPN). The BPN provides a standardized and unique identifier on legal entity, site and address level. The connected backend service removes duplicate data, adds missing information, and improves data quality from different data sources so-called sharing member."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Legal Entity Level (BPN L)"),": Search for a legal entity and get the high-quality data set."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Site Level (BPN S)"),": Get the site information of a legal entity. A legal entity can have one or more sites."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Adress Level (BPN A)"),": Each legal entity and site has an address to find the company.")))}f.isMDXComponent=!0}}]);