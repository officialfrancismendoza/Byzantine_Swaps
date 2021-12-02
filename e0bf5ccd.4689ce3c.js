(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var i=n(3),a=n(7),r=(n(0),n(136)),o={id:"design-principles",title:"Design Principles"},s={unversionedId:"external/design-principles",id:"external/design-principles",isDocsHomePage:!1,title:"Design Principles",description:"\x3c!--",source:"@site/docs/external/design-principles.md",slug:"/external/design-principles",permalink:"/weaver-dlt-interoperability/docs/external/design-principles",editUrl:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/edit/master/docs/external/design-principles.md",version:"current",sidebar:"Documentation",previous:{title:"Interoperability Modes",permalink:"/weaver-dlt-interoperability/docs/external/interoperability-modes"},next:{title:"Overview",permalink:"/weaver-dlt-interoperability/docs/external/user-stories/overview"}},l=[{value:"How to determine need for interoperation, and its mode and mechanics?",id:"how-to-determine-need-for-interoperation-and-its-mode-and-mechanics",children:[]},{value:"Principles and Ideals for Interoperability Solution Design",id:"principles-and-ideals-for-interoperability-solution-design",children:[]},{value:"Design Guidelines for Network Architects and Developers",id:"design-guidelines-for-network-architects-and-developers",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"We list principles and considerations that guide the design of a framework for interoperability between decentralized networks, along with associated reasoning. Our present solution, though a work-in-progress, attempts to adhere to these principles."),Object(r.b)("h3",{id:"how-to-determine-need-for-interoperation-and-its-mode-and-mechanics"},"How to determine need for interoperation, and its mode and mechanics?"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Assess dependence decision (i,e., between networks) to determine goals and required assurances:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"The decision to depend on a network is a complex one, as a network is itself an affiliation of independent parties."),Object(r.b)("li",{parentName:"ul"},"There are different approaches with varying levels of complexity and assurance."),Object(r.b)("li",{parentName:"ul"},"Examine structural assurances provided by networks and their participants, and do a cost-benefit analysis to determine a suitable approach."))),Object(r.b)("li",{parentName:"ul"},"The mechanics of interoperation can be derived from assumptions made in the above assessment."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Our assumptions and aproach"),":",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Individual network participants are untrustworthy."),Object(r.b)("li",{parentName:"ul"},"The network is trustworthy in the collective."),Object(r.b)("li",{parentName:"ul"},"The internal consensus mechanism of a network protects it from Byzantine failures."),Object(r.b)("li",{parentName:"ul"},"Interoperability needs will not force structural changes or forks in a network nor constrain that network's internal evolution.")))),Object(r.b)("h3",{id:"principles-and-ideals-for-interoperability-solution-design"},"Principles and Ideals for Interoperability Solution Design"),Object(r.b)("p",null,"Here are our guiding principles that accord with our assumptions and approach, in no particular order."),Object(r.b)("h4",{id:"favor-technical-assurances-over-social-assurances"},"Favor Technical Assurances over Social Assurances"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Technical assurances are provided by protocols and security mechanisms, including distributed consensus."),Object(r.b)("li",{parentName:"ul"},"Social assurances include governance (collectively, through a consortium, or via a hierarchy), legal rules and regulations, reputations and history of past behavior."),Object(r.b)("li",{parentName:"ul"},"The reason to favor the former is that it can provide provable guarantees that are independent of the trustworthiness of individual participants, whereas the latter can be brittle and rely on participants' compliance.")),Object(r.b)("h4",{id:"be-inclusive-and-accommodate-heterogeneity"},"Be Inclusive and Accommodate Heterogeneity"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Avoid approaches for protocol design that are specific to a particular DLT implementation or network structure."),Object(r.b)("li",{parentName:"ul"},"Specify the communication protocol in a network-neutral language."),Object(r.b)("li",{parentName:"ul"},"Design protocol units that can abstract out common features for information and assurances from diverse DLTs.")),Object(r.b)("h4",{id:"allow-networks-to-retain-independence-and-collective-sovereignty"},"Allow Networks to Retain Independence and Collective Sovereignty"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A network is treated as an independent self-governing system with the freedom of choice to interoperate with another on a need basis."),Object(r.b)("li",{parentName:"ul"},"Network members retain collective sovereignty over their internal processes as well as access control rules governing remote interoperation."),Object(r.b)("li",{parentName:"ul"},"Networks have full and collective control, via their native consensus and smart contract mechanisms, over exposure of data, assets, and transactions to other networks.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"A network acts as a unit for framing and enforcing rules controlling access to information held on its ledger(s) by a remote network."))),Object(r.b)("li",{parentName:"ul"},"Similarly, networks have full and collective control, via their native consensus and smart contract mechanisms, over acceptance of data or assets and verifications of transactions occurring in, other networks.")),Object(r.b)("h4",{id:"minimize-network-coupling"},"Minimize Network Coupling"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Networks/consortia must retain independence for governance and configuration",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Therefore, interoperation must require loose coupling rather than a merging or overlapping of two networks"))),Object(r.b)("li",{parentName:"ul"},"Loose coupling between dependent networks allows changes to counterparty networks' implementations with minimal or no impact to cross-network dependencies."),Object(r.b)("li",{parentName:"ul"},"Domain decoupling:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Define standards for contract interfaces"),Object(r.b)("li",{parentName:"ul"},"Define standards for representing data types and assets types (e.g. ",Object(r.b)("a",{parentName:"li",href:"https://www.gs1.org/traceability"},"https://www.gs1.org/traceability"),")"),Object(r.b)("li",{parentName:"ul"},"Define standards for identity portability"))),Object(r.b)("li",{parentName:"ul"},"Communication decoupling:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Define standards for network interface/API"),Object(r.b)("li",{parentName:"ul"},"Define standards for protocol behavior"),Object(r.b)("li",{parentName:"ul"},"Define standards for messaging formats")))),Object(r.b)("h4",{id:"do-not-compromise-on-privacy-and-confidentiality"},"Do not Compromise on Privacy and Confidentiality"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"By design, a permissioned network should retain its privacy, and interoperation mechanisms should not leak information outside the bounds of what access control rules allow."),Object(r.b)("li",{parentName:"ul"},"Cross-network communications should be kept private and confidential and revealed only to interested parties, applying the principle of least privilege.")),Object(r.b)("h4",{id:"minimize-trust-footprint-and-avoid-centralization"},"Minimize Trust Footprint and Avoid Centralization"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Design for decentralization across networks as within networks:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Avoid introducing centralized services that are easy to compromise"),Object(r.b)("li",{parentName:"ul"},"Assume that failure scenarios that apply to networks also hold for any service coordinating interoperability."))),Object(r.b)("li",{parentName:"ul"},"Reduce trust to only what is essential (i.e. identity providers in the network)."),Object(r.b)("li",{parentName:"ul"},"No trusted third-party intermediary or infrastructure (e.g., Polka Dot, Cosmos) should be relied upon for the purpose of cross network data verification or settlement."),Object(r.b)("li",{parentName:"ul"},"Reduce trust and centralization to only essential functions that cannot be completely decentralized:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Communicate messages across networks using some networking infrastructure:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"This communication infrastructure is not trusted to maintain confidentiality or integrity of messages, and it may mount denial of service attacks."))),Object(r.b)("li",{parentName:"ul"},"Identity provision and verification:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"This is necessary for permissioned networks that have private memberships governed by a ",Object(r.b)("em",{parentName:"li"},"committee")," that may be centralized or distributed.")))))),Object(r.b)("h4",{id:"favor-dependence-on-proofs-over-trust"},"Favor dependence on proofs over trust"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},'This is also implied by the "No Trusted Intermediaries" principle'),"."),Object(r.b)("li",{parentName:"ul"},"Information transferred across networks must carry verifiable proofs."),Object(r.b)("li",{parentName:"ul"},"The receiving network must be able to specify a ",Object(r.b)("em",{parentName:"li"},"verification policy")," for proofs that it can independently and collectively (i.e., through consensus) verify.")),Object(r.b)("h4",{id:"minimize-impact-and-adaptation"},"Minimize Impact and Adaptation"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Enabling interoperation must not require changes to existing network protocols."),Object(r.b)("li",{parentName:"ul"},"Enabling interoperation must not impact existing network operation in any way nor require any blockchain forks."),Object(r.b)("li",{parentName:"ul"},"Adaptation in existing smart contracts and applications must be avoided unless absolutely necessary, and follow modular principles.")),Object(r.b)("h4",{id:"maximize-operational-efficiency"},"Maximize Operational Efficiency"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Minimize payloads in cross-network protocol units."),Object(r.b)("li",{parentName:"ul"},"Strive for event-driven asynchronous messaging architectures (",Object(r.b)("em",{parentName:"li"},'this is also implied by the "Minimal Coupling" principle'),").")),Object(r.b)("h3",{id:"design-guidelines-for-network-architects-and-developers"},"Design Guidelines for Network Architects and Developers"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Architects and application developers (both in the smart contract and services layers) must design with interoperability in mind:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"This has the advantage of minimizing or eliminating any code adaptations required for interoperability during a network's life cycle."))),Object(r.b)("li",{parentName:"ul"},"Apply standards when defining assets, data and logic within network apps to maximize external consumption:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Networks with well-defined standards-based interfaces simplifies interoperability:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Interfaces include: contracts, data/assets, identity, APIs, protocol, messaging."))))),Object(r.b)("li",{parentName:"ul"},"Enables network implementation to evolve while eliminating or minimising external impact:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Implement in a modular way: many patterns and principles exist in the field of web services."),Object(r.b)("li",{parentName:"ul"},"Decouple interoperability-related application modules as much as possible (",Object(r.b)("em",{parentName:"li"},"this guideline applies to blockchain-related modules within enterprise apps too"),").",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"This will make maintenance easier and also allow administrators to minimize the amount of code that needs to be deployed in higher-security enterprise zones.")))))))}p.isMDXComponent=!0},136:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),b=i,m=d["".concat(o,".").concat(b)]||d[b]||u[b]||r;return n?a.a.createElement(m,s(s({ref:t},c),{},{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);