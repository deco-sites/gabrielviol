/* esm.sh - esbuild bundle(marked@9.1.1) denonext production */
function B(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var z=B();function U(c){z=c}var H=/[&<>"']/,F=new RegExp(H.source,"g"),N=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,K=new RegExp(N.source,"g"),X={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},O=c=>X[c];function m(c,n){if(n){if(H.test(c))return c.replace(F,O)}else if(N.test(c))return c.replace(K,O);return c}var W=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function G(c){return c.replace(W,(n,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}var J=/(^|[^\[])\^/g;function k(c,n){c=typeof c=="string"?c:c.source,n=n||"";let t={replace:(e,s)=>(s=typeof s=="object"&&"source"in s?s.source:s,s=s.replace(J,"$1"),c=c.replace(e,s),t),getRegex:()=>new RegExp(c,n)};return t}function Q(c){try{c=encodeURI(c).replace(/%25/g,"%")}catch{return null}return c}var E={exec:()=>null};function j(c,n){let t=c.replace(/\|/g,(i,r,o)=>{let l=!1,f=r;for(;--f>=0&&o[f]==="\\";)l=!l;return l?"|":" |"}),e=t.split(/ \|/),s=0;if(e[0].trim()||e.shift(),e.length>0&&!e[e.length-1].trim()&&e.pop(),n)if(e.length>n)e.splice(n);else for(;e.length<n;)e.push("");for(;s<e.length;s++)e[s]=e[s].trim().replace(/\\\|/g,"|");return e}function Z(c,n,t){let e=c.length;if(e===0)return"";let s=0;for(;s<e;){let i=c.charAt(e-s-1);if(i===n&&!t)s++;else if(i!==n&&t)s++;else break}return c.slice(0,e-s)}function V(c,n){if(c.indexOf(n[1])===-1)return-1;let t=0;for(let e=0;e<c.length;e++)if(c[e]==="\\")e++;else if(c[e]===n[0])t++;else if(c[e]===n[1]&&(t--,t<0))return e;return-1}function M(c,n,t,e){let s=n.href,i=n.title?m(n.title):null,r=c[1].replace(/\\([\[\]])/g,"$1");if(c[0].charAt(0)!=="!"){e.state.inLink=!0;let o={type:"link",raw:t,href:s,title:i,text:r,tokens:e.inlineTokens(r)};return e.state.inLink=!1,o}return{type:"image",raw:t,href:s,title:i,text:m(r)}}function Y(c,n){let t=c.match(/^(\s+)(?:```)/);if(t===null)return n;let e=t[1];return n.split(`
`).map(s=>{let i=s.match(/^\s+/);if(i===null)return s;let[r]=i;return r.length>=e.length?s.slice(e.length):s}).join(`
`)}var S=class{options;rules;lexer;constructor(n){this.options=n||z}space(n){let t=this.rules.block.newline.exec(n);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(n){let t=this.rules.block.code.exec(n);if(t){let e=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:Z(e,`
`)}}}fences(n){let t=this.rules.block.fences.exec(n);if(t){let e=t[0],s=Y(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:s}}}heading(n){let t=this.rules.block.heading.exec(n);if(t){let e=t[2].trim();if(/#$/.test(e)){let s=Z(e,"#");(this.options.pedantic||!s||/ $/.test(s))&&(e=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(n){let t=this.rules.block.hr.exec(n);if(t)return{type:"hr",raw:t[0]}}blockquote(n){let t=this.rules.block.blockquote.exec(n);if(t){let e=t[0].replace(/^ *>[ \t]?/gm,""),s=this.lexer.state.top;this.lexer.state.top=!0;let i=this.lexer.blockTokens(e);return this.lexer.state.top=s,{type:"blockquote",raw:t[0],tokens:i,text:e}}}list(n){let t=this.rules.block.list.exec(n);if(t){let e=t[1].trim(),s=e.length>1,i={type:"list",raw:"",ordered:s,start:s?+e.slice(0,-1):"",loose:!1,items:[]};e=s?`\\d{1,9}\\${e.slice(-1)}`:`\\${e}`,this.options.pedantic&&(e=s?e:"[*+-]");let r=new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),o="",l="",f=!1;for(;n;){let h=!1;if(!(t=r.exec(n))||this.rules.block.hr.test(n))break;o=t[0],n=n.substring(o.length);let g=t[2].split(`
`,1)[0].replace(/^\t+/,L=>" ".repeat(3*L.length)),u=n.split(`
`,1)[0],x=0;this.options.pedantic?(x=2,l=g.trimStart()):(x=t[2].search(/[^ ]/),x=x>4?1:x,l=g.slice(x),x+=t[1].length);let y=!1;if(!g&&/^ *$/.test(u)&&(o+=u+`
`,n=n.substring(u.length+1),h=!0),!h){let L=new RegExp(`^ {0,${Math.min(3,x-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),D=new RegExp(`^ {0,${Math.min(3,x-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),P=new RegExp(`^ {0,${Math.min(3,x-1)}}(?:\`\`\`|~~~)`),v=new RegExp(`^ {0,${Math.min(3,x-1)}}#`);for(;n;){let C=n.split(`
`,1)[0];if(u=C,this.options.pedantic&&(u=u.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),P.test(u)||v.test(u)||L.test(u)||D.test(n))break;if(u.search(/[^ ]/)>=x||!u.trim())l+=`
`+u.slice(x);else{if(y||g.search(/[^ ]/)>=4||P.test(g)||v.test(g)||D.test(g))break;l+=`
`+u}!y&&!u.trim()&&(y=!0),o+=C+`
`,n=n.substring(C.length+1),g=u.slice(x)}}i.loose||(f?i.loose=!0:/\n *\n *$/.test(o)&&(f=!0));let _=null,$;this.options.gfm&&(_=/^\[[ xX]\] /.exec(l),_&&($=_[0]!=="[ ] ",l=l.replace(/^\[[ xX]\] +/,""))),i.items.push({type:"list_item",raw:o,task:!!_,checked:$,loose:!1,text:l,tokens:[]}),i.raw+=o}i.items[i.items.length-1].raw=o.trimEnd(),i.items[i.items.length-1].text=l.trimEnd(),i.raw=i.raw.trimEnd();for(let h=0;h<i.items.length;h++)if(this.lexer.state.top=!1,i.items[h].tokens=this.lexer.blockTokens(i.items[h].text,[]),!i.loose){let g=i.items[h].tokens.filter(x=>x.type==="space"),u=g.length>0&&g.some(x=>/\n.*\n/.test(x.raw));i.loose=u}if(i.loose)for(let h=0;h<i.items.length;h++)i.items[h].loose=!0;return i}}html(n){let t=this.rules.block.html.exec(n);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(n){let t=this.rules.block.def.exec(n);if(t){let e=t[1].toLowerCase().replace(/\s+/g," "),s=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",i=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:e,raw:t[0],href:s,title:i}}}table(n){let t=this.rules.block.table.exec(n);if(t){if(!/[:|]/.test(t[2]))return;let e={type:"table",raw:t[0],header:j(t[1]).map(s=>({text:s,tokens:[]})),align:t[2].replace(/^\||\| *$/g,"").split("|"),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(e.header.length===e.align.length){let s=e.align.length,i,r,o,l;for(i=0;i<s;i++){let f=e.align[i];f&&(/^ *-+: *$/.test(f)?e.align[i]="right":/^ *:-+: *$/.test(f)?e.align[i]="center":/^ *:-+ *$/.test(f)?e.align[i]="left":e.align[i]=null)}for(s=e.rows.length,i=0;i<s;i++)e.rows[i]=j(e.rows[i],e.header.length).map(f=>({text:f,tokens:[]}));for(s=e.header.length,r=0;r<s;r++)e.header[r].tokens=this.lexer.inline(e.header[r].text);for(s=e.rows.length,r=0;r<s;r++)for(l=e.rows[r],o=0;o<l.length;o++)l[o].tokens=this.lexer.inline(l[o].text);return e}}}lheading(n){let t=this.rules.block.lheading.exec(n);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(n){let t=this.rules.block.paragraph.exec(n);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(n){let t=this.rules.block.text.exec(n);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(n){let t=this.rules.inline.escape.exec(n);if(t)return{type:"escape",raw:t[0],text:m(t[1])}}tag(n){let t=this.rules.inline.tag.exec(n);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(n){let t=this.rules.inline.link.exec(n);if(t){let e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;let r=Z(e.slice(0,-1),"\\");if((e.length-r.length)%2===0)return}else{let r=V(t[2],"()");if(r>-1){let l=(t[0].indexOf("!")===0?5:4)+t[1].length+r;t[2]=t[2].substring(0,r),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let s=t[2],i="";if(this.options.pedantic){let r=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);r&&(s=r[1],i=r[3])}else i=t[3]?t[3].slice(1,-1):"";return s=s.trim(),/^</.test(s)&&(this.options.pedantic&&!/>$/.test(e)?s=s.slice(1):s=s.slice(1,-1)),M(t,{href:s&&s.replace(this.rules.inline._escapes,"$1"),title:i&&i.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(n,t){let e;if((e=this.rules.inline.reflink.exec(n))||(e=this.rules.inline.nolink.exec(n))){let s=(e[2]||e[1]).replace(/\s+/g," ");if(s=t[s.toLowerCase()],!s){let i=e[0].charAt(0);return{type:"text",raw:i,text:i}}return M(e,s,e[0],this.lexer)}}emStrong(n,t,e=""){let s=this.rules.inline.emStrong.lDelim.exec(n);if(!s||s[3]&&e.match(/[\p{L}\p{N}]/u))return;if(!(s[1]||s[2]||"")||!e||this.rules.inline.punctuation.exec(e)){let r=[...s[0]].length-1,o,l,f=r,h=0,g=s[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(g.lastIndex=0,t=t.slice(-1*n.length+s[0].length-1);(s=g.exec(t))!=null;){if(o=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!o)continue;if(l=[...o].length,s[3]||s[4]){f+=l;continue}else if((s[5]||s[6])&&r%3&&!((r+l)%3)){h+=l;continue}if(f-=l,f>0)continue;l=Math.min(l,l+f+h);let u=[...n].slice(0,r+s.index+l+1).join("");if(Math.min(r,l)%2){let y=u.slice(1,-1);return{type:"em",raw:u,text:y,tokens:this.lexer.inlineTokens(y)}}let x=u.slice(2,-2);return{type:"strong",raw:u,text:x,tokens:this.lexer.inlineTokens(x)}}}}codespan(n){let t=this.rules.inline.code.exec(n);if(t){let e=t[2].replace(/\n/g," "),s=/[^ ]/.test(e),i=/^ /.test(e)&&/ $/.test(e);return s&&i&&(e=e.substring(1,e.length-1)),e=m(e,!0),{type:"codespan",raw:t[0],text:e}}}br(n){let t=this.rules.inline.br.exec(n);if(t)return{type:"br",raw:t[0]}}del(n){let t=this.rules.inline.del.exec(n);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(n){let t=this.rules.inline.autolink.exec(n);if(t){let e,s;return t[2]==="@"?(e=m(t[1]),s="mailto:"+e):(e=m(t[1]),s=e),{type:"link",raw:t[0],text:e,href:s,tokens:[{type:"text",raw:e,text:e}]}}}url(n){let t;if(t=this.rules.inline.url.exec(n)){let e,s;if(t[2]==="@")e=m(t[0]),s="mailto:"+e;else{let i;do i=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])[0];while(i!==t[0]);e=m(t[0]),t[1]==="www."?s="http://"+t[0]:s=t[0]}return{type:"link",raw:t[0],text:e,href:s,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(n){let t=this.rules.inline.text.exec(n);if(t){let e;return this.lexer.state.inRawBlock?e=t[0]:e=m(t[0]),{type:"text",raw:t[0],text:e}}}},p={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:E,lheading:/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};p._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;p._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;p.def=k(p.def).replace("label",p._label).replace("title",p._title).getRegex();p.bullet=/(?:[*+-]|\d{1,9}[.)])/;p.listItemStart=k(/^( *)(bull) */).replace("bull",p.bullet).getRegex();p.list=k(p.list).replace(/bull/g,p.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+p.def.source+")").getRegex();p._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";p._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;p.html=k(p.html,"i").replace("comment",p._comment).replace("tag",p._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();p.lheading=k(p.lheading).replace(/bull/g,p.bullet).getRegex();p.paragraph=k(p._paragraph).replace("hr",p.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",p._tag).getRegex();p.blockquote=k(p.blockquote).replace("paragraph",p.paragraph).getRegex();p.normal={...p};p.gfm={...p.normal,table:"^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};p.gfm.table=k(p.gfm.table).replace("hr",p.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",p._tag).getRegex();p.gfm.paragraph=k(p._paragraph).replace("hr",p.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",p.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",p._tag).getRegex();p.pedantic={...p.normal,html:k(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",p._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:E,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:k(p.normal._paragraph).replace("hr",p.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",p.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};var a={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:E,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,rDelimAst:/^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:E,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^((?![*_])[\spunctuation])/};a._punctuation="\\p{P}$+<=>`^|~";a.punctuation=k(a.punctuation,"u").replace(/punctuation/g,a._punctuation).getRegex();a.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;a.anyPunctuation=/\\[punct]/g;a._escapes=/\\([punct])/g;a._comment=k(p._comment).replace("(?:-->|$)","-->").getRegex();a.emStrong.lDelim=k(a.emStrong.lDelim,"u").replace(/punct/g,a._punctuation).getRegex();a.emStrong.rDelimAst=k(a.emStrong.rDelimAst,"gu").replace(/punct/g,a._punctuation).getRegex();a.emStrong.rDelimUnd=k(a.emStrong.rDelimUnd,"gu").replace(/punct/g,a._punctuation).getRegex();a.anyPunctuation=k(a.anyPunctuation,"gu").replace(/punct/g,a._punctuation).getRegex();a._escapes=k(a._escapes,"gu").replace(/punct/g,a._punctuation).getRegex();a._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;a._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;a.autolink=k(a.autolink).replace("scheme",a._scheme).replace("email",a._email).getRegex();a._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;a.tag=k(a.tag).replace("comment",a._comment).replace("attribute",a._attribute).getRegex();a._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;a._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;a._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;a.link=k(a.link).replace("label",a._label).replace("href",a._href).replace("title",a._title).getRegex();a.reflink=k(a.reflink).replace("label",a._label).replace("ref",p._label).getRegex();a.nolink=k(a.nolink).replace("ref",p._label).getRegex();a.reflinkSearch=k(a.reflinkSearch,"g").replace("reflink",a.reflink).replace("nolink",a.nolink).getRegex();a.normal={...a};a.pedantic={...a.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:k(/^!?\[(label)\]\((.*?)\)/).replace("label",a._label).getRegex(),reflink:k(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",a._label).getRegex()};a.gfm={...a.normal,escape:k(a.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};a.gfm.url=k(a.gfm.url,"i").replace("email",a.gfm._extended_email).getRegex();a.breaks={...a.gfm,br:k(a.br).replace("{2,}","*").getRegex(),text:k(a.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};var b=class c{tokens;options;state;tokenizer;inlineQueue;constructor(n){this.tokens=[],this.tokens.links=Object.create(null),this.options=n||z,this.options.tokenizer=this.options.tokenizer||new S,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={block:p.normal,inline:a.normal};this.options.pedantic?(t.block=p.pedantic,t.inline=a.pedantic):this.options.gfm&&(t.block=p.gfm,this.options.breaks?t.inline=a.breaks:t.inline=a.gfm),this.tokenizer.rules=t}static get rules(){return{block:p,inline:a}}static lex(n,t){return new c(t).lex(n)}static lexInline(n,t){return new c(t).inlineTokens(n)}lex(n){n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(n,t=[]){this.options.pedantic?n=n.replace(/\t/g,"    ").replace(/^ +$/gm,""):n=n.replace(/^( *)(\t+)/gm,(o,l,f)=>l+"    ".repeat(f.length));let e,s,i,r;for(;n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(o=>(e=o.call({lexer:this},n,t))?(n=n.substring(e.raw.length),t.push(e),!0):!1))){if(e=this.tokenizer.space(n)){n=n.substring(e.raw.length),e.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(e);continue}if(e=this.tokenizer.code(n)){n=n.substring(e.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+e.raw,s.text+=`
`+e.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(e);continue}if(e=this.tokenizer.fences(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.heading(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.hr(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.blockquote(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.list(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.html(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.def(n)){n=n.substring(e.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+e.raw,s.text+=`
`+e.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text):this.tokens.links[e.tag]||(this.tokens.links[e.tag]={href:e.href,title:e.title});continue}if(e=this.tokenizer.table(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.lheading(n)){n=n.substring(e.raw.length),t.push(e);continue}if(i=n,this.options.extensions&&this.options.extensions.startBlock){let o=1/0,l=n.slice(1),f;this.options.extensions.startBlock.forEach(h=>{f=h.call({lexer:this},l),typeof f=="number"&&f>=0&&(o=Math.min(o,f))}),o<1/0&&o>=0&&(i=n.substring(0,o+1))}if(this.state.top&&(e=this.tokenizer.paragraph(i))){s=t[t.length-1],r&&s.type==="paragraph"?(s.raw+=`
`+e.raw,s.text+=`
`+e.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(e),r=i.length!==n.length,n=n.substring(e.raw.length);continue}if(e=this.tokenizer.text(n)){n=n.substring(e.raw.length),s=t[t.length-1],s&&s.type==="text"?(s.raw+=`
`+e.raw,s.text+=`
`+e.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(e);continue}if(n){let o="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,t}inline(n,t=[]){return this.inlineQueue.push({src:n,tokens:t}),t}inlineTokens(n,t=[]){let e,s,i,r=n,o,l,f;if(this.tokens.links){let h=Object.keys(this.tokens.links);if(h.length>0)for(;(o=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)h.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(o=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(o=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,o.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;n;)if(l||(f=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(h=>(e=h.call({lexer:this},n,t))?(n=n.substring(e.raw.length),t.push(e),!0):!1))){if(e=this.tokenizer.escape(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.tag(n)){n=n.substring(e.raw.length),s=t[t.length-1],s&&e.type==="text"&&s.type==="text"?(s.raw+=e.raw,s.text+=e.text):t.push(e);continue}if(e=this.tokenizer.link(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(e.raw.length),s=t[t.length-1],s&&e.type==="text"&&s.type==="text"?(s.raw+=e.raw,s.text+=e.text):t.push(e);continue}if(e=this.tokenizer.emStrong(n,r,f)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.codespan(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.br(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.del(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.autolink(n)){n=n.substring(e.raw.length),t.push(e);continue}if(!this.state.inLink&&(e=this.tokenizer.url(n))){n=n.substring(e.raw.length),t.push(e);continue}if(i=n,this.options.extensions&&this.options.extensions.startInline){let h=1/0,g=n.slice(1),u;this.options.extensions.startInline.forEach(x=>{u=x.call({lexer:this},g),typeof u=="number"&&u>=0&&(h=Math.min(h,u))}),h<1/0&&h>=0&&(i=n.substring(0,h+1))}if(e=this.tokenizer.inlineText(i)){n=n.substring(e.raw.length),e.raw.slice(-1)!=="_"&&(f=e.raw.slice(-1)),l=!0,s=t[t.length-1],s&&s.type==="text"?(s.raw+=e.raw,s.text+=e.text):t.push(e);continue}if(n){let h="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(h);break}else throw new Error(h)}}return t}},I=class{options;constructor(n){this.options=n||z}code(n,t,e){let s=(t||"").match(/^\S*/)?.[0];return n=n.replace(/\n$/,"")+`
`,s?'<pre><code class="language-'+m(s)+'">'+(e?n:m(n,!0))+`</code></pre>
`:"<pre><code>"+(e?n:m(n,!0))+`</code></pre>
`}blockquote(n){return`<blockquote>
${n}</blockquote>
`}html(n,t){return n}heading(n,t,e){return`<h${t}>${n}</h${t}>
`}hr(){return`<hr>
`}list(n,t,e){let s=t?"ol":"ul",i=t&&e!==1?' start="'+e+'"':"";return"<"+s+i+`>
`+n+"</"+s+`>
`}listitem(n,t,e){return`<li>${n}</li>
`}checkbox(n){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(n){return`<p>${n}</p>
`}table(n,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+t+`</table>
`}tablerow(n){return`<tr>
${n}</tr>
`}tablecell(n,t){let e=t.header?"th":"td";return(t.align?`<${e} align="${t.align}">`:`<${e}>`)+n+`</${e}>
`}strong(n){return`<strong>${n}</strong>`}em(n){return`<em>${n}</em>`}codespan(n){return`<code>${n}</code>`}br(){return"<br>"}del(n){return`<del>${n}</del>`}link(n,t,e){let s=Q(n);if(s===null)return e;n=s;let i='<a href="'+n+'"';return t&&(i+=' title="'+t+'"'),i+=">"+e+"</a>",i}image(n,t,e){let s=Q(n);if(s===null)return e;n=s;let i=`<img src="${n}" alt="${e}"`;return t&&(i+=` title="${t}"`),i+=">",i}text(n){return n}},A=class{strong(n){return n}em(n){return n}codespan(n){return n}del(n){return n}html(n){return n}text(n){return n}link(n,t,e){return""+e}image(n,t,e){return""+e}br(){return""}},w=class c{options;renderer;textRenderer;constructor(n){this.options=n||z,this.options.renderer=this.options.renderer||new I,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new A}static parse(n,t){return new c(t).parse(n)}static parseInline(n,t){return new c(t).parseInline(n)}parse(n,t=!0){let e="";for(let s=0;s<n.length;s++){let i=n[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]){let r=i,o=this.options.extensions.renderers[r.type].call({parser:this},r);if(o!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(r.type)){e+=o||"";continue}}switch(i.type){case"space":continue;case"hr":{e+=this.renderer.hr();continue}case"heading":{let r=i;e+=this.renderer.heading(this.parseInline(r.tokens),r.depth,G(this.parseInline(r.tokens,this.textRenderer)));continue}case"code":{let r=i;e+=this.renderer.code(r.text,r.lang,!!r.escaped);continue}case"table":{let r=i,o="",l="";for(let h=0;h<r.header.length;h++)l+=this.renderer.tablecell(this.parseInline(r.header[h].tokens),{header:!0,align:r.align[h]});o+=this.renderer.tablerow(l);let f="";for(let h=0;h<r.rows.length;h++){let g=r.rows[h];l="";for(let u=0;u<g.length;u++)l+=this.renderer.tablecell(this.parseInline(g[u].tokens),{header:!1,align:r.align[u]});f+=this.renderer.tablerow(l)}e+=this.renderer.table(o,f);continue}case"blockquote":{let r=i,o=this.parse(r.tokens);e+=this.renderer.blockquote(o);continue}case"list":{let r=i,o=r.ordered,l=r.start,f=r.loose,h="";for(let g=0;g<r.items.length;g++){let u=r.items[g],x=u.checked,y=u.task,_="";if(u.task){let $=this.renderer.checkbox(!!x);f?u.tokens.length>0&&u.tokens[0].type==="paragraph"?(u.tokens[0].text=$+" "+u.tokens[0].text,u.tokens[0].tokens&&u.tokens[0].tokens.length>0&&u.tokens[0].tokens[0].type==="text"&&(u.tokens[0].tokens[0].text=$+" "+u.tokens[0].tokens[0].text)):u.tokens.unshift({type:"text",text:$+" "}):_+=$+" "}_+=this.parse(u.tokens,f),h+=this.renderer.listitem(_,y,!!x)}e+=this.renderer.list(h,o,l);continue}case"html":{let r=i;e+=this.renderer.html(r.text,r.block);continue}case"paragraph":{let r=i;e+=this.renderer.paragraph(this.parseInline(r.tokens));continue}case"text":{let r=i,o=r.tokens?this.parseInline(r.tokens):r.text;for(;s+1<n.length&&n[s+1].type==="text";)r=n[++s],o+=`
`+(r.tokens?this.parseInline(r.tokens):r.text);e+=t?this.renderer.paragraph(o):o;continue}default:{let r='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(r),"";throw new Error(r)}}}return e}parseInline(n,t){t=t||this.renderer;let e="";for(let s=0;s<n.length;s++){let i=n[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]){let r=this.options.extensions.renderers[i.type].call({parser:this},i);if(r!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)){e+=r||"";continue}}switch(i.type){case"escape":{let r=i;e+=t.text(r.text);break}case"html":{let r=i;e+=t.html(r.text);break}case"link":{let r=i;e+=t.link(r.href,r.title,this.parseInline(r.tokens,t));break}case"image":{let r=i;e+=t.image(r.href,r.title,r.text);break}case"strong":{let r=i;e+=t.strong(this.parseInline(r.tokens,t));break}case"em":{let r=i;e+=t.em(this.parseInline(r.tokens,t));break}case"codespan":{let r=i;e+=t.codespan(r.text);break}case"br":{e+=t.br();break}case"del":{let r=i;e+=t.del(this.parseInline(r.tokens,t));break}case"text":{let r=i;e+=t.text(r.text);break}default:{let r='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(r),"";throw new Error(r)}}}return e}},R=class{options;constructor(n){this.options=n||z}static passThroughHooks=new Set(["preprocess","postprocess"]);preprocess(n){return n}postprocess(n){return n}},q=class{defaults=B();options=this.setOptions;parse=this.#e(b.lex,w.parse);parseInline=this.#e(b.lexInline,w.parseInline);Parser=w;parser=w.parse;Renderer=I;TextRenderer=A;Lexer=b;lexer=b.lex;Tokenizer=S;Hooks=R;constructor(...n){this.use(...n)}walkTokens(n,t){let e=[];for(let s of n)switch(e=e.concat(t.call(this,s)),s.type){case"table":{let i=s;for(let r of i.header)e=e.concat(this.walkTokens(r.tokens,t));for(let r of i.rows)for(let o of r)e=e.concat(this.walkTokens(o.tokens,t));break}case"list":{let i=s;e=e.concat(this.walkTokens(i.items,t));break}default:{let i=s;this.defaults.extensions?.childTokens?.[i.type]?this.defaults.extensions.childTokens[i.type].forEach(r=>{e=e.concat(this.walkTokens(i[r],t))}):i.tokens&&(e=e.concat(this.walkTokens(i.tokens,t)))}}return e}use(...n){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(e=>{let s={...e};if(s.async=this.defaults.async||s.async||!1,e.extensions&&(e.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){let r=t.renderers[i.name];r?t.renderers[i.name]=function(...o){let l=i.renderer.apply(this,o);return l===!1&&(l=r.apply(this,o)),l}:t.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let r=t[i.level];r?r.unshift(i.tokenizer):t[i.level]=[i.tokenizer],i.start&&(i.level==="block"?t.startBlock?t.startBlock.push(i.start):t.startBlock=[i.start]:i.level==="inline"&&(t.startInline?t.startInline.push(i.start):t.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(t.childTokens[i.name]=i.childTokens)}),s.extensions=t),e.renderer){let i=this.defaults.renderer||new I(this.defaults);for(let r in e.renderer){let o=e.renderer[r],l=r,f=i[l];i[l]=(...h)=>{let g=o.apply(i,h);return g===!1&&(g=f.apply(i,h)),g||""}}s.renderer=i}if(e.tokenizer){let i=this.defaults.tokenizer||new S(this.defaults);for(let r in e.tokenizer){let o=e.tokenizer[r],l=r,f=i[l];i[l]=(...h)=>{let g=o.apply(i,h);return g===!1&&(g=f.apply(i,h)),g}}s.tokenizer=i}if(e.hooks){let i=this.defaults.hooks||new R;for(let r in e.hooks){let o=e.hooks[r],l=r,f=i[l];R.passThroughHooks.has(r)?i[l]=h=>{if(this.defaults.async)return Promise.resolve(o.call(i,h)).then(u=>f.call(i,u));let g=o.call(i,h);return f.call(i,g)}:i[l]=(...h)=>{let g=o.apply(i,h);return g===!1&&(g=f.apply(i,h)),g}}s.hooks=i}if(e.walkTokens){let i=this.defaults.walkTokens,r=e.walkTokens;s.walkTokens=function(o){let l=[];return l.push(r.call(this,o)),i&&(l=l.concat(i.call(this,o))),l}}this.defaults={...this.defaults,...s}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}#e(n,t){return(e,s)=>{let i={...s},r={...this.defaults,...i};this.defaults.async===!0&&i.async===!1&&(r.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),r.async=!0);let o=this.#t(!!r.silent,!!r.async);if(typeof e>"u"||e===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(r.hooks&&(r.hooks.options=r),r.async)return Promise.resolve(r.hooks?r.hooks.preprocess(e):e).then(l=>n(l,r)).then(l=>r.walkTokens?Promise.all(this.walkTokens(l,r.walkTokens)).then(()=>l):l).then(l=>t(l,r)).then(l=>r.hooks?r.hooks.postprocess(l):l).catch(o);try{r.hooks&&(e=r.hooks.preprocess(e));let l=n(e,r);r.walkTokens&&this.walkTokens(l,r.walkTokens);let f=t(l,r);return r.hooks&&(f=r.hooks.postprocess(f)),f}catch(l){return o(l)}}}#t(n,t){return e=>{if(e.message+=`
Please report this to https://github.com/markedjs/marked.`,n){let s="<p>An error occurred:</p><pre>"+m(e.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(e);throw e}}},T=new q;function d(c,n){return T.parse(c,n)}d.options=d.setOptions=function(c){return T.setOptions(c),d.defaults=T.defaults,U(d.defaults),d};d.getDefaults=B;d.defaults=z;d.use=function(...c){return T.use(...c),d.defaults=T.defaults,U(d.defaults),d};d.walkTokens=function(c,n){return T.walkTokens(c,n)};d.parseInline=T.parseInline;d.Parser=w;d.parser=w.parse;d.Renderer=I;d.TextRenderer=A;d.Lexer=b;d.lexer=b.lex;d.Tokenizer=S;d.Hooks=R;d.parse=d;var ee=d.options,te=d.setOptions,ne=d.use,se=d.walkTokens,ie=d.parseInline,re=d,le=w.parse,oe=b.lex;export{R as Hooks,b as Lexer,q as Marked,w as Parser,I as Renderer,A as TextRenderer,S as Tokenizer,z as defaults,B as getDefaults,oe as lexer,d as marked,ee as options,re as parse,ie as parseInline,le as parser,te as setOptions,ne as use,se as walkTokens};
//# sourceMappingURL=marked.mjs.map