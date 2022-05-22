"use strict";(self.webpackChunkweaver_dlt_interoperability=self.webpackChunkweaver_dlt_interoperability||[]).push([[54],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8552:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={id:"relay",title:"Relay"},c=void 0,s={unversionedId:"external/architecture-and-design/relay",id:"external/architecture-and-design/relay",isDocsHomePage:!1,title:"Relay",description:"\x3c!--",source:"@site/docs/external/architecture-and-design/relay.md",sourceDirName:"external/architecture-and-design",slug:"/external/architecture-and-design/relay",permalink:"/weaver-dlt-interoperability/docs/external/architecture-and-design/relay",editUrl:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/edit/master/docs/external/architecture-and-design/relay.md",tags:[],version:"current",frontMatter:{id:"relay",title:"Relay"},sidebar:"Documentation",previous:{title:"Overview",permalink:"/weaver-dlt-interoperability/docs/external/architecture-and-design/overview"},next:{title:"Drivers",permalink:"/weaver-dlt-interoperability/docs/external/architecture-and-design/drivers"}},p=[],u={toc:p};function d(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(2777).Z})),(0,i.kt)("p",null,"As mentioned in the overview, relays facilitate communication of protocols between networks. To do this, they are composed of three main pieces:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Relay service")," - A gRPC server that listens for and handles incoming requests from other relays. For example, a remote network requesting state."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"App service")," - A gRPC server that listens for and handles requests from applications that are requesting an asset from a remote network."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Driver")," - The driver is responsible for all communication between the relay and its network. The driver is described in more detail in ",(0,i.kt)("a",{parentName:"li",href:"/weaver-dlt-interoperability/docs/external/architecture-and-design/drivers"},"drivers"),".")),(0,i.kt)("p",null,"The diagram below shows an example communication between two networks, A and B, where network A is requesting state from network B."),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(4861).Z})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"An application sends a request to their networks relay over gRPC"),(0,i.kt)("li",{parentName:"ol"},"The local relay inspects the query within the request and uses the relevant information to forward the request to the correct remote relay"),(0,i.kt)("li",{parentName:"ol"},"The remote relay's driver interprets the query and invokes the smart contract for the query"),(0,i.kt)("li",{parentName:"ol"},"Once network B has returned a response to its relay, the relay forwards the response back to relay A"),(0,i.kt)("li",{parentName:"ol"},"The application gets the response from the relay, this can either be via a push or pull mechanism"),(0,i.kt)("li",{parentName:"ol"},"The application invokes a domain specific smart contract to process the response from network B")))}d.isMDXComponent=!0},2777:function(e,t,r){t.Z=r.p+"assets/images/relay_architecture-26238a46409ead54fb26da49e2df22c7.png"},4861:function(e,t,r){t.Z=r.p+"assets/images/relay_flow-a6320d0cf553ee5b95a94cab63f44883.png"}}]);