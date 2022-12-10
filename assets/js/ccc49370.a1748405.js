"use strict";(self.webpackChunkweaver_dlt_interoperability=self.webpackChunkweaver_dlt_interoperability||[]).push([[6103],{6165:(e,t,a)=>{a.d(t,{Z:()=>v});var l=a(7294),n=a(6010),r=a(3938),i=a(6742);const s="sidebar_q+wC",m="sidebarItemTitle_9G5K",o="sidebarItemList_6T4b",c="sidebarItem_cjdF",d="sidebarItemLink_zyXk",g="sidebarItemLinkActive_wcJs";var p=a(4973);function u(e){let{sidebar:t}=e;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(s,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(m,"margin-bottom--md")},t.title),l.createElement("ul",{className:o},t.items.map((e=>l.createElement("li",{key:e.permalink,className:c},l.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))))))}const v=function(e){const{sidebar:t,toc:a,children:i,...s}=e,m=t&&t.items.length>0;return l.createElement(r.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},m&&l.createElement("aside",{className:"col col--3"},l.createElement(u,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&l.createElement("div",{className:"col col--2"},a))))}},9093:(e,t,a)=>{a.d(t,{Z:()=>N});var l=a(7294),n=a(6010),r=a(3905),i=a(4973),s=a(6742),m=a(4996),o=a(3773),c=a(6845),d=a(6146);const g="blogPostTitle_d4p0",p="blogPostData_-Im+",u="blogPostDetailsFull_xD8n";var v=a(9817);const h="image_9q7L";const E=function(e){let{author:t}=e;const{name:a,title:n,url:r,imageURL:i}=t;return l.createElement("div",{className:"avatar margin-bottom--sm"},i&&l.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:r},l.createElement("img",{className:h,src:i,alt:a})),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(s.Z,{href:r,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),n&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))},b="authorCol_8c0z";function _(e){let{authors:t,assets:a}=e;return 0===t.length?l.createElement(l.Fragment,null):l.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map(((e,t)=>l.createElement("div",{className:(0,n.Z)("col col--6",b),key:t},l.createElement(E,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})))))}const N=function(e){const t=function(){const{selectMessage:e}=(0,o.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:a}=(0,m.C)(),{children:h,frontMatter:E,assets:b,metadata:N,truncated:f,isBlogPostPage:k=!1}=e,{date:Z,formattedDate:P,permalink:L,tags:C,readingTime:w,title:T,editUrl:y,authors:I}=N,x=b.image??E.image,M=!k&&f,A=C.length>0;return l.createElement("article",{className:k?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(()=>{const e=k?"h1":"h2";return l.createElement("header",null,l.createElement(e,{className:g,itemProp:"headline"},k?T:l.createElement(s.Z,{itemProp:"url",to:L},T)),l.createElement("div",{className:(0,n.Z)(p,"margin-vert--md")},l.createElement("time",{dateTime:Z,itemProp:"datePublished"},P),void 0!==w&&l.createElement(l.Fragment,null," \xb7 ",t(w))),l.createElement(_,{authors:I,assets:b}))})(),x&&l.createElement("meta",{itemProp:"image",content:a(x,{absolute:!0})}),l.createElement("div",{className:"markdown",itemProp:"articleBody"},l.createElement(r.Zo,{components:c.Z},h)),(A||f)&&l.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",{[u]:k})},A&&l.createElement("div",{className:(0,n.Z)("col",{"col--9":M})},l.createElement(v.Z,{tags:C})),k&&y&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(d.Z,{editUrl:y})),M&&l.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":A})},l.createElement(s.Z,{to:N.permalink,"aria-label":`Read more about ${T}`},l.createElement("b",null,l.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},4147:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var l=a(7294),n=a(1217),r=a(6165),i=a(9093),s=a(4973),m=a(6742);const o=function(e){const{nextItem:t,prevItem:a}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},l.createElement("div",{className:"pagination-nav__item"},a&&l.createElement(m.Z,{className:"pagination-nav__link",to:a.permalink},l.createElement("div",{className:"pagination-nav__sublabel"},l.createElement(s.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),l.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&l.createElement(m.Z,{className:"pagination-nav__link",to:t.permalink},l.createElement("div",{className:"pagination-nav__sublabel"},l.createElement(s.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),l.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))};var c=a(3773),d=a(7588);const g=function(e){const{content:t,sidebar:a}=e,{frontMatter:s,assets:m,metadata:g}=t,{title:p,description:u,nextItem:v,prevItem:h,date:E,tags:b,authors:_}=g,{hide_table_of_contents:N,keywords:f,toc_min_heading_level:k,toc_max_heading_level:Z}=s,P=m.image??s.image;return l.createElement(r.Z,{wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogPostPage,sidebar:a,toc:!N&&t.toc&&t.toc.length>0?l.createElement(d.Z,{toc:t.toc,minHeadingLevel:k,maxHeadingLevel:Z}):void 0},l.createElement(n.Z,{title:p,description:u,keywords:f,image:P},l.createElement("meta",{property:"og:type",content:"article"}),l.createElement("meta",{property:"article:published_time",content:E}),_.some((e=>e.url))&&l.createElement("meta",{property:"article:author",content:_.map((e=>e.url)).filter(Boolean).join(",")}),b.length>0&&l.createElement("meta",{property:"article:tag",content:b.map((e=>e.label)).join(",")})),l.createElement(i.Z,{frontMatter:s,assets:m,metadata:g,isBlogPostPage:!0},l.createElement(t,null)),(v||h)&&l.createElement(o,{nextItem:v,prevItem:h}))}},6146:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(7294),n=a(4973),r=a(7462),i=a(6010);const s="iconEdit_mS5F",m=e=>{let{className:t,...a}=e;return l.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(s,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};var o=a(3773);function c(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:o.kM.common.editThisPage},l.createElement(m,null),l.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},7588:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(7462),n=a(7294),r=a(6010),i=a(5002);const s="tableOfContents_vrFS";const m=function(e){let{className:t,...a}=e;return n.createElement("div",{className:(0,r.Z)(s,"thin-scrollbar",t)},n.createElement(i.Z,(0,l.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7462),n=a(7294),r=a(3773);function i(e){let{toc:t,className:a,linkClassName:l,isChild:r}=e;return t.length?n.createElement("ul",{className:r?void 0:a},t.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(i,{isChild:!0,toc:e.children,className:a,linkClassName:l}))))):null}function s(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:m,minHeadingLevel:o,maxHeadingLevel:c,...d}=e;const g=(0,r.LU)(),p=o??g.tableOfContents.minHeadingLevel,u=c??g.tableOfContents.maxHeadingLevel,v=(0,r.DA)({toc:t,minHeadingLevel:p,maxHeadingLevel:u}),h=(0,n.useMemo)((()=>{if(s&&m)return{linkClassName:s,linkActiveClassName:m,minHeadingLevel:p,maxHeadingLevel:u}}),[s,m,p,u]);return(0,r.Si)(h),n.createElement(i,(0,l.Z)({toc:v,className:a,linkClassName:s},d))}},9817:(e,t,a)=>{a.d(t,{Z:()=>p});var l=a(7294),n=a(6010),r=a(4973),i=a(6742);const s="tag_WK-t",m="tagRegular_LXbV",o="tagWithCount_S5Zl";const c=function(e){const{permalink:t,name:a,count:r}=e;return l.createElement(i.Z,{href:t,className:(0,n.Z)(s,{[m]:!r,[o]:r})},a,r&&l.createElement("span",null,r))},d="tags_NBRY",g="tag_F03v";function p(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,n.Z)(d,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:g},l.createElement(c,{name:t,permalink:a}))}))))}}}]);