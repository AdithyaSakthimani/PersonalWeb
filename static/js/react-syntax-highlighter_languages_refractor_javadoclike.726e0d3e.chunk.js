"use strict";(self.webpackChunkpersonalweb=self.webpackChunkpersonalweb||[]).push([[5655],{4854:e=>{function a(e){!function(e){var a=e.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(a,"addSupport",{value:function(a,n){"string"===typeof a&&(a=[a]),a.forEach((function(a){!function(a,n){var t="doc-comment",r=e.languages[a];if(r){var i=r[t];if(!i){var o={};o[t]={pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"},i=(r=e.languages.insertBefore(a,"comment",o))[t]}if(i instanceof RegExp&&(i=r[t]={pattern:i}),Array.isArray(i))for(var s=0,p=i.length;s<p;s++)i[s]instanceof RegExp&&(i[s]={pattern:i[s]}),n(i[s]);else n(i)}}(a,(function(e){e.inside||(e.inside={}),e.inside.rest=n}))}))}}),a.addSupport(["java","javascript","php"],a)}(e)}e.exports=a,a.displayName="javadoclike",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_javadoclike.726e0d3e.chunk.js.map