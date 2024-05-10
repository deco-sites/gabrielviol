/* esm.sh - esbuild bundle(prismjs@1.27.0/components/prism-jsx) denonext production */
var B=Object.create;var j=Object.defineProperty;var A=Object.getOwnPropertyDescriptor;var E=Object.getOwnPropertyNames;var R=Object.getPrototypeOf,w=Object.prototype.hasOwnProperty;var _=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports),C=(e,n)=>{for(var r in n)j(e,r,{get:n[r],enumerable:!0})},d=(e,n,r,i)=>{if(n&&typeof n=="object"||typeof n=="function")for(let c of E(n))!w.call(e,c)&&c!==r&&j(e,c,{get:()=>n[c],enumerable:!(i=A(n,c))||i.enumerable});return e},p=(e,n,r)=>(d(e,n,"default"),r&&d(r,n,"default")),y=(e,n,r)=>(r=e!=null?B(R(e)):{},d(n||!e||!e.__esModule?j(r,"default",{value:e,enumerable:!0}):r,e));var x=_(()=>{(function(e){var n=e.util.clone(e.languages.javascript),r=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,i=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,c=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function o(t,a){return t=t.replace(/<S>/g,function(){return r}).replace(/<BRACES>/g,function(){return i}).replace(/<SPREAD>/g,function(){return c}),RegExp(t,a)}c=o(c).source,e.languages.jsx=e.languages.extend("markup",n),e.languages.jsx.tag.pattern=o(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=n.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:o(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:o(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var l=function(t){return t?typeof t=="string"?t:typeof t.content=="string"?t.content:t.content.map(l).join(""):""},S=function(t){for(var a=[],s=0;s<t.length;s++){var g=t[s],h=!1;if(typeof g!="string"&&(g.type==="tag"&&g.content[0]&&g.content[0].type==="tag"?g.content[0].content[0].content==="</"?a.length>0&&a[a.length-1].tagName===l(g.content[0].content[1])&&a.pop():g.content[g.content.length-1].content==="/>"||a.push({tagName:l(g.content[0].content[1]),openedBraces:0}):a.length>0&&g.type==="punctuation"&&g.content==="{"?a[a.length-1].openedBraces++:a.length>0&&a[a.length-1].openedBraces>0&&g.type==="punctuation"&&g.content==="}"?a[a.length-1].openedBraces--:h=!0),(h||typeof g=="string")&&a.length>0&&a[a.length-1].openedBraces===0){var f=l(g);s<t.length-1&&(typeof t[s+1]=="string"||t[s+1].type==="plain-text")&&(f+=l(t[s+1]),t.splice(s+1,1)),s>0&&(typeof t[s-1]=="string"||t[s-1].type==="plain-text")&&(f=l(t[s-1])+f,t.splice(s-1,1),s--),t[s]=new e.Token("plain-text",f,null,f)}g.content&&typeof g.content!="string"&&S(g.content)}};e.hooks.add("after-tokenize",function(t){t.language!=="jsx"&&t.language!=="tsx"||S(t.tokens)})})(Prism)});var u={};C(u,{default:()=>$});var D=y(x());p(u,y(x()));var{default:v,...Z}=D,$=v!==void 0?v:Z;export{$ as default};
//# sourceMappingURL=prism-jsx.js.map