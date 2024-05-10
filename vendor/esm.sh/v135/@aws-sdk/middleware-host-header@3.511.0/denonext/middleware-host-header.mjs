/* esm.sh - esbuild bundle(@aws-sdk/middleware-host-header@3.511.0) denonext production */
import{HttpRequest as d}from"/v135/@smithy/protocol-http@3.1.1/denonext/protocol-http.mjs";function l(t){return t}var n=t=>r=>async o=>{if(!d.isInstance(o.request))return r(o);let{request:e}=o,{handlerProtocol:a=""}=t.requestHandler.metadata||{};if(a.indexOf("h2")>=0&&!e.headers[":authority"])delete e.headers.host,e.headers[":authority"]=e.hostname+(e.port?":"+e.port:"");else if(!e.headers.host){let s=e.hostname;e.port!=null&&(s+=`:${e.port}`),e.headers.host=s}return r(o)},i={name:"hostHeaderMiddleware",step:"build",priority:"low",tags:["HOST"],override:!0},p=t=>({applyToStack:r=>{r.add(n(t),i)}});export{p as getHostHeaderPlugin,n as hostHeaderMiddleware,i as hostHeaderMiddlewareOptions,l as resolveHostHeaderConfig};
//# sourceMappingURL=middleware-host-header.mjs.map