"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8299],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(r),m=a,d=h["".concat(l,".").concat(m)]||h[m]||p[m]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3774:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return h}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={id:"algorithms-introduction",title:"Introduction",slug:"introduction"},l=void 0,u={unversionedId:"algorithms/algorithms-introduction",id:"algorithms/algorithms-introduction",isDocsHomePage:!1,title:"Introduction",description:"This section dives deep into practical tips for specific topics of algorithms and data structures which appear frequently in coding questions. Many algorithm questions involve techniques that can be applied to questions of similar nature. The more techniques you have in your arsenal, the higher the chances of passing the interview. They may lead you to discover corner cases you might have missed out or even lead you towards the optimal approach!",source:"@site/../contents/algorithms/introduction.md",sourceDirName:"algorithms",slug:"/algorithms/introduction",permalink:"/algorithms/introduction",editUrl:"https://github.com/yangshun/tech-interview-handbook/edit/master/contents/../contents/algorithms/introduction.md",tags:[],version:"current",lastUpdatedBy:"Yangshun",lastUpdatedAt:1631987901,formattedLastUpdatedAt:"9/18/2021",frontMatter:{id:"algorithms-introduction",title:"Introduction",slug:"introduction"},sidebar:"docs",previous:{title:"Engineering Levels",permalink:"/engineering-levels"},next:{title:"Array",permalink:"/algorithms/array"}},c=[{value:"General tips",id:"general-tips",children:[],level:2},{value:"Algorithm courses",id:"algorithm-courses",children:[],level:2},{value:"References",id:"references",children:[],level:2}],p={toc:c};function h(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section dives deep into practical tips for specific topics of algorithms and data structures which appear frequently in coding questions. Many algorithm questions involve techniques that can be applied to questions of similar nature. The more techniques you have in your arsenal, the higher the chances of passing the interview. They may lead you to discover corner cases you might have missed out or even lead you towards the optimal approach!"),(0,o.kt)("p",null,"For each topic, study links are recommended to help you master the topic. There is a list of recommended common questions to practice which in my opinion is highly valuable for mastering the core concepts for the topic."),(0,o.kt)("p",null,"If you are interested in how data structures are implemented, check out ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yangshun/lago"},"Lago"),", a Data Structures and Algorithms library for JavaScript. It is pretty much still WIP but I intend to make it into a library that is able to be used in production and also a reference resource for revising Data Structures and Algorithms."),(0,o.kt)("h2",{id:"general-tips"},"General tips"),(0,o.kt)("p",null,"Clarify any assumptions you made subconsciously. Many questions are under-specified on purpose."),(0,o.kt)("p",null,"Always validate input first. Check for invalid/empty/negative/different type input. Never assume you are given the valid parameters. Alternatively, clarify with the interviewer whether you can assume valid input (usually yes), which can save you time from writing code that does input validation."),(0,o.kt)("p",null,"Are there any time/space complexity requirements/constraints?"),(0,o.kt)("p",null,"Check for off-by-one errors."),(0,o.kt)("p",null,"In languages where there are no automatic type coercion, check that concatenation of values are of the same type: ",(0,o.kt)("inlineCode",{parentName:"p"},"int"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"str"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"list"),"."),(0,o.kt)("p",null,"After finishing your code, use a few example inputs to test your solution."),(0,o.kt)("p",null,"Is the algorithm meant to be run multiple times, for example in a web server? If yes, the input is likely to be preprocess-able to improve the efficiency in each call."),(0,o.kt)("p",null,"Use a mix of functional and imperative programming paradigms:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Write pure functions as much as possible."),(0,o.kt)("li",{parentName:"ul"},"Pure functions are easier to reason about and can help to reduce bugs in your implementation."),(0,o.kt)("li",{parentName:"ul"},"Avoid mutating the parameters passed into your function especially if they are passed by reference unless you are sure of what you are doing."),(0,o.kt)("li",{parentName:"ul"},"However, functional programming is usually expensive in terms of space complexity because of non-mutation and the repeated allocation of new objects. On the other hand, imperative code is faster because you operate on existing objects. Hence you will need to achieve a balance between accuracy vs efficiency, by using the right amount of functional and imperative code where appropriate."),(0,o.kt)("li",{parentName:"ul"},"Avoid relying on and mutating global variables. Global variables introduce state."),(0,o.kt)("li",{parentName:"ul"},"If you have to rely on global variables, make sure that you do not mutate it by accident.")),(0,o.kt)("p",null,"Generally, to improve the speed of a program, we can either: (1) choose a more appropriate data structure/algorithm; or (2) use more memory. The latter demonstrates a classic space vs. time tradeoff, but it is not necessarily the case that you can only achieve better speed at the expense of space. Also, note that there is often a theoretical limit to how fast your program can run (in terms of time complexity). For instance, a question that requires you to find the smallest/largest element in an unsorted array cannot run faster than O(N)."),(0,o.kt)("p",null,"Data structures are your weapons. Choosing the right weapon for the right battle is the key to victory. Be very familiar about the strengths of each data structure and the time complexities for its various operations."),(0,o.kt)("p",null,"Data structures can be augmented to achieve efficient time complexities across different operations. For example, a hash map can be used together with a doubly-linked list to achieve O(1) time complexity for both the ",(0,o.kt)("inlineCode",{parentName:"p"},"get")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"put")," operation in an ",(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/lru-cache/"},"LRU cache"),"."),(0,o.kt)("p",null,"Hashmaps are probably the most commonly used data structure for algorithm questions. If you are stuck on a question, your last resort can be to enumerate through the common possible data structures (thankfully there aren't that many of them) and consider whether each of them can be applied to the problem. This has worked for me sometimes."),(0,o.kt)("p",null,"If you are cutting corners in your code, state that out loud to your interviewer and say what you would do in a non-interview setting (no time constraints). E.g., I would write a regex to parse this string rather than using ",(0,o.kt)("inlineCode",{parentName:"p"},"split()")," which may not cover all cases."),(0,o.kt)("h2",{id:"algorithm-courses"},"Algorithm courses"),(0,o.kt)("p",null,"If you want more structured algorithms practice, I recommend ",(0,o.kt)("a",{parentName:"p",href:"https://www.educative.io/courses/grokking-the-coding-interview?aff=x23W"},"Educative's Grokking the Coding Interview: Patterns for Coding Questions")," course. This course essentially expands upon the questions here but approaches the practicing from a questions pattern perspective rather than data structures, which is an approach I agree with for learning and getting better at algorithmic problems."),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.educative.io/courses/grokking-the-coding-interview?aff=x23W"},"Educative's Grokking the Coding Interview: Patterns for Coding Questions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://blog.triplebyte.com/how-to-pass-a-programming-interview"},"http://blog.triplebyte.com/how-to-pass-a-programming-interview")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://quip.com/q41AA3OmoZbC"},"https://quip.com/q41AA3OmoZbC")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/"},"http://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/basecs"},"https://medium.com/basecs"))))}h.isMDXComponent=!0}}]);