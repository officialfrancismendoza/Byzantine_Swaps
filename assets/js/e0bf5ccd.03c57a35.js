"use strict";(self.webpackChunkweaver_dlt_interoperability=self.webpackChunkweaver_dlt_interoperability||[]).push([[881],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?i.createElement(f,o(o({ref:t},p),{},{components:n})):i.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7820:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],l={id:"design-principles",title:"Design Principles"},s=void 0,c={unversionedId:"external/design-principles",id:"external/design-principles",isDocsHomePage:!1,title:"Design Principles",description:"\x3c!--",source:"@site/docs/external/design-principles.md",sourceDirName:"external",slug:"/external/design-principles",permalink:"/weaver-dlt-interoperability/docs/external/design-principles",editUrl:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/edit/master/docs/external/design-principles.md",tags:[],version:"current",frontMatter:{id:"design-principles",title:"Design Principles"},sidebar:"Documentation",previous:{title:"Interoperability Modes",permalink:"/weaver-dlt-interoperability/docs/external/interoperability-modes"},next:{title:"Overview",permalink:"/weaver-dlt-interoperability/docs/external/user-stories/overview"}},p=[{value:"How to determine need for interoperation, and its mode and mechanics?",id:"how-to-determine-need-for-interoperation-and-its-mode-and-mechanics",children:[],level:3},{value:"Principles and Ideals for Interoperability Solution Design",id:"principles-and-ideals-for-interoperability-solution-design",children:[{value:"Favor Technical Assurances over Social Assurances",id:"favor-technical-assurances-over-social-assurances",children:[],level:4},{value:"Be Inclusive and Accommodate Heterogeneity",id:"be-inclusive-and-accommodate-heterogeneity",children:[],level:4},{value:"Allow Networks to Retain Independence and Collective Sovereignty",id:"allow-networks-to-retain-independence-and-collective-sovereignty",children:[],level:4},{value:"Minimize Network Coupling",id:"minimize-network-coupling",children:[],level:4},{value:"Do not Compromise on Privacy and Confidentiality",id:"do-not-compromise-on-privacy-and-confidentiality",children:[],level:4},{value:"Minimize Trust Footprint and Avoid Centralization",id:"minimize-trust-footprint-and-avoid-centralization",children:[],level:4},{value:"Favor dependence on proofs over trust",id:"favor-dependence-on-proofs-over-trust",children:[],level:4},{value:"Minimize Impact and Adaptation",id:"minimize-impact-and-adaptation",children:[],level:4},{value:"Maximize Operational Efficiency",id:"maximize-operational-efficiency",children:[],level:4}],level:3},{value:"Design Guidelines for Network Architects and Developers",id:"design-guidelines-for-network-architects-and-developers",children:[],level:3}],d={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We list principles and considerations that guide the design of a framework for interoperability between decentralized networks, along with associated reasoning. Our present solution, though a work-in-progress, attempts to adhere to these principles."),(0,r.kt)("h3",{id:"how-to-determine-need-for-interoperation-and-its-mode-and-mechanics"},"How to determine need for interoperation, and its mode and mechanics?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Assess dependence decision (i,e., between networks) to determine goals and required assurances:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The decision to depend on a network is a complex one, as a network is itself an affiliation of independent parties."),(0,r.kt)("li",{parentName:"ul"},"There are different approaches with varying levels of complexity and assurance."),(0,r.kt)("li",{parentName:"ul"},"Examine structural assurances provided by networks and their participants, and do a cost-benefit analysis to determine a suitable approach."))),(0,r.kt)("li",{parentName:"ul"},"The mechanics of interoperation can be derived from assumptions made in the above assessment."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Our assumptions and aproach"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Individual network participants are untrustworthy."),(0,r.kt)("li",{parentName:"ul"},"The network is trustworthy in the collective."),(0,r.kt)("li",{parentName:"ul"},"The internal consensus mechanism of a network protects it from Byzantine failures."),(0,r.kt)("li",{parentName:"ul"},"Interoperability needs will not force structural changes or forks in a network nor constrain that network's internal evolution.")))),(0,r.kt)("h3",{id:"principles-and-ideals-for-interoperability-solution-design"},"Principles and Ideals for Interoperability Solution Design"),(0,r.kt)("p",null,"Here are our guiding principles that accord with our assumptions and approach, in no particular order."),(0,r.kt)("h4",{id:"favor-technical-assurances-over-social-assurances"},"Favor Technical Assurances over Social Assurances"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Technical assurances are provided by protocols and security mechanisms, including distributed consensus."),(0,r.kt)("li",{parentName:"ul"},"Social assurances include governance (collectively, through a consortium, or via a hierarchy), legal rules and regulations, reputations and history of past behavior."),(0,r.kt)("li",{parentName:"ul"},"The reason to favor the former is that it can provide provable guarantees that are independent of the trustworthiness of individual participants, whereas the latter can be brittle and rely on participants' compliance.")),(0,r.kt)("h4",{id:"be-inclusive-and-accommodate-heterogeneity"},"Be Inclusive and Accommodate Heterogeneity"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Avoid approaches for protocol design that are specific to a particular DLT implementation or network structure."),(0,r.kt)("li",{parentName:"ul"},"Specify the communication protocol in a network-neutral language."),(0,r.kt)("li",{parentName:"ul"},"Design protocol units that can abstract out common features for information and assurances from diverse DLTs.")),(0,r.kt)("h4",{id:"allow-networks-to-retain-independence-and-collective-sovereignty"},"Allow Networks to Retain Independence and Collective Sovereignty"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A network is treated as an independent self-governing system with the freedom of choice to interoperate with another on a need basis."),(0,r.kt)("li",{parentName:"ul"},"Network members retain collective sovereignty over their internal processes as well as access control rules governing remote interoperation."),(0,r.kt)("li",{parentName:"ul"},"Networks have full and collective control, via their native consensus and smart contract mechanisms, over exposure of data, assets, and transactions to other networks.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A network acts as a unit for framing and enforcing rules controlling access to information held on its ledger(s) by a remote network."))),(0,r.kt)("li",{parentName:"ul"},"Similarly, networks have full and collective control, via their native consensus and smart contract mechanisms, over acceptance of data or assets and verifications of transactions occurring in, other networks.")),(0,r.kt)("h4",{id:"minimize-network-coupling"},"Minimize Network Coupling"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Networks/consortia must retain independence for governance and configuration",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Therefore, interoperation must require loose coupling rather than a merging or overlapping of two networks"))),(0,r.kt)("li",{parentName:"ul"},"Loose coupling between dependent networks allows changes to counterparty networks' implementations with minimal or no impact to cross-network dependencies."),(0,r.kt)("li",{parentName:"ul"},"Domain decoupling:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Define standards for contract interfaces"),(0,r.kt)("li",{parentName:"ul"},"Define standards for representing data types and assets types (e.g. ",(0,r.kt)("a",{parentName:"li",href:"https://www.gs1.org/traceability"},"https://www.gs1.org/traceability"),")"),(0,r.kt)("li",{parentName:"ul"},"Define standards for identity portability"))),(0,r.kt)("li",{parentName:"ul"},"Communication decoupling:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Define standards for network interface/API"),(0,r.kt)("li",{parentName:"ul"},"Define standards for protocol behavior"),(0,r.kt)("li",{parentName:"ul"},"Define standards for messaging formats")))),(0,r.kt)("h4",{id:"do-not-compromise-on-privacy-and-confidentiality"},"Do not Compromise on Privacy and Confidentiality"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"By design, a permissioned network should retain its privacy, and interoperation mechanisms should not leak information outside the bounds of what access control rules allow."),(0,r.kt)("li",{parentName:"ul"},"Cross-network communications should be kept private and confidential and revealed only to interested parties, applying the principle of least privilege.")),(0,r.kt)("h4",{id:"minimize-trust-footprint-and-avoid-centralization"},"Minimize Trust Footprint and Avoid Centralization"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Design for decentralization across networks as within networks:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Avoid introducing centralized services that are easy to compromise"),(0,r.kt)("li",{parentName:"ul"},"Assume that failure scenarios that apply to networks also hold for any service coordinating interoperability."))),(0,r.kt)("li",{parentName:"ul"},"Reduce trust to only what is essential (i.e. identity providers in the network)."),(0,r.kt)("li",{parentName:"ul"},"No trusted third-party intermediary or infrastructure (e.g., Polka Dot, Cosmos) should be relied upon for the purpose of cross network data verification or settlement."),(0,r.kt)("li",{parentName:"ul"},"Reduce trust and centralization to only essential functions that cannot be completely decentralized:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Communicate messages across networks using some networking infrastructure:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This communication infrastructure is not trusted to maintain confidentiality or integrity of messages, and it may mount denial of service attacks."))),(0,r.kt)("li",{parentName:"ul"},"Identity provision and verification:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This is necessary for permissioned networks that have private memberships governed by a ",(0,r.kt)("em",{parentName:"li"},"committee")," that may be centralized or distributed.")))))),(0,r.kt)("h4",{id:"favor-dependence-on-proofs-over-trust"},"Favor dependence on proofs over trust"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},'This is also implied by the "No Trusted Intermediaries" principle'),"."),(0,r.kt)("li",{parentName:"ul"},"Information transferred across networks must carry verifiable proofs."),(0,r.kt)("li",{parentName:"ul"},"The receiving network must be able to specify a ",(0,r.kt)("em",{parentName:"li"},"verification policy")," for proofs that it can independently and collectively (i.e., through consensus) verify.")),(0,r.kt)("h4",{id:"minimize-impact-and-adaptation"},"Minimize Impact and Adaptation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enabling interoperation must not require changes to existing network protocols."),(0,r.kt)("li",{parentName:"ul"},"Enabling interoperation must not impact existing network operation in any way nor require any blockchain forks."),(0,r.kt)("li",{parentName:"ul"},"Adaptation in existing smart contracts and applications must be avoided unless absolutely necessary, and follow modular principles.")),(0,r.kt)("h4",{id:"maximize-operational-efficiency"},"Maximize Operational Efficiency"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Minimize payloads in cross-network protocol units."),(0,r.kt)("li",{parentName:"ul"},"Strive for event-driven asynchronous messaging architectures (",(0,r.kt)("em",{parentName:"li"},'this is also implied by the "Minimal Coupling" principle'),").")),(0,r.kt)("h3",{id:"design-guidelines-for-network-architects-and-developers"},"Design Guidelines for Network Architects and Developers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Architects and application developers (both in the smart contract and services layers) must design with interoperability in mind:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This has the advantage of minimizing or eliminating any code adaptations required for interoperability during a network's life cycle."))),(0,r.kt)("li",{parentName:"ul"},"Apply standards when defining assets, data and logic within network apps to maximize external consumption:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Networks with well-defined standards-based interfaces simplifies interoperability:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Interfaces include: contracts, data/assets, identity, APIs, protocol, messaging."))))),(0,r.kt)("li",{parentName:"ul"},"Enables network implementation to evolve while eliminating or minimising external impact:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Implement in a modular way: many patterns and principles exist in the field of web services."),(0,r.kt)("li",{parentName:"ul"},"Decouple interoperability-related application modules as much as possible (",(0,r.kt)("em",{parentName:"li"},"this guideline applies to blockchain-related modules within enterprise apps too"),").",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This will make maintenance easier and also allow administrators to minimize the amount of code that needs to be deployed in higher-security enterprise zones.")))))))}u.isMDXComponent=!0}}]);