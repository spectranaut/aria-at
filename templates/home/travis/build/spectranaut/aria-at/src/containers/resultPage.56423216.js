(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{133:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(50),l=n.n(a),r=n(51),c=n.n(r),s=n(52),u=n.n(s),o=n(53),i=n.n(o),m=n(54),d=n.n(m),E=n(0),f=n.n(E),h=n(15),p=function(e){function t(e){return l()(this,t),u()(this,i()(t).call(this,e))}return d()(t,e),c()(t,[{key:"renderResultRow",value:function(e,t){var n=e.details;return f.a.createElement("tr",{key:n.name},f.a.createElement("td",null,f.a.createElement("a",{href:"#test-".concat(t.toString())},n.name)),f.a.createElement("td",null,n.summary[1].pass," / ",n.summary[1].fail),f.a.createElement("td",null,n.summary[2].pass," / ",n.summary[2].fail),f.a.createElement("td",null,n.unexpectedCount))}},{key:"renderResultDetails",value:function(e,t){var n=this,a=e.details;return f.a.createElement("section",null,f.a.createElement("h2",{id:"test-".concat(t.toString())},'Details for test "',a.name,'"'),f.a.createElement("table",{className:"results-table"},f.a.createElement("thead",null,f.a.createElement("tr",null,f.a.createElement("th",null,"Command"),f.a.createElement("th",null,"Support"),f.a.createElement("th",null,"Details"))),f.a.createElement("tbody",null,a.commands.map((function(e){return n.renderCommandResults(e)})))))}},{key:"renderCommandResults",value:function(e){return f.a.createElement("tr",null,f.a.createElement("td",null,e.command),f.a.createElement("td",null,e.support),f.a.createElement("td",null,f.a.createElement("p",null,'Output: "',e.output,'"'),this.renderPassingAssertions(e.assertions),this.renderFailingAssertions(e.assertions),this.renderUnexpectedBehavior(e.unexpected_behaviors)))}},{key:"renderPassingAssertions",value:function(e){var t=e.filter((function(e){return e.pass}));if(t.length)return f.a.createElement("div",null,"Passing Assertions:",f.a.createElement("ul",null,t.map((function(e){return f.a.createElement("li",null,e.assertion)}))))}},{key:"renderFailingAssertions",value:function(e){var t=e.filter((function(e){return e.fail}));if(t.length)return f.a.createElement("div",null,"Failing Assertions:",f.a.createElement("ul",null,t.map((function(e){return f.a.createElement("li",null,e.assertion)}))))}},{key:"renderUnexpectedBehavior",value:function(e){if(e.length)return f.a.createElement("div",null,"Unexpected Behaviors:",f.a.createElement("ul",null,e.map((function(e){return f.a.createElement("li",null,e)}))))}},{key:"render",value:function(){var e=this,t=this.props.resultsData,n=t.assistiveTechnology,a=t.browser,l=t.designPattern,r=t.results,c=r.length,s=!!t.fileName,u=t.fileName?"".concat(t.fileName,".json"):"results_".concat(n.name,"-").concat(n.version,"_").concat(a.name,"-").concat(a.version,"_").concat((new Date).toISOString(),".json"),o=t.dateOfRun?new Date(t.dateOfRun).toLocaleString():void 0,i=t.designPattern,m={checkbox:"../../tests/checkbox/reference/two-state-checkbox.html","menubar-edit":"../../tests/menubar-edit/reference/menubar-editor.html","combobox-autocomplete-both":"../../tests/combobox-autocomplete-both/reference/combobox-autocomplete-both.html"}[i],d={1:[0,0],2:[0,0]},p=0,v=!0,b=!1,y=void 0;try{for(var g,R=r[Symbol.iterator]();!(v=(g=R.next()).done);v=!0){var w=g.value.details;p+=parseInt(w.unexpectedCount);for(var x=1;x<=2;x++)d[x][0]+=w.summary[x].pass,d[x][1]+=w.summary[x].pass+w.summary[x].fail}}catch(T){b=!0,y=T}finally{try{v||null==R.return||R.return()}finally{if(b)throw y}}var A=n.version?" (".concat(n.version,")"):"",k=a.version?" (".concat(a.version,")"):"";return f.a.createElement(E.Fragment,null,f.a.createElement(h.Head,null,f.a.createElement("title",null,"ARIA-AT: Test Run Results")),f.a.createElement("nav",{"aria-label":"Breadcrumb"},f.a.createElement("a",{href:"/aria-at/"},"ARIA-AT Home")," > ",f.a.createElement("a",{href:"/aria-at/results/"},"Test Results")),f.a.createElement("section",null,f.a.createElement("h1",null,'Results for test run of pattern "'.concat(l,'" (').concat(c," test").concat(1===c?"":"s",")")),f.a.createElement("p",null,"CAUTION: The information on this page is preliminary and not for use outside the ARIA-AT project."),f.a.createElement("p",null,"Results for ".concat(n.name).concat(A," in ").concat(a.name).concat(k)),f.a.createElement("ul",null,f.a.createElement("li",null,f.a.createElement("a",{href:m},"Test Case: ",i)),o&&f.a.createElement("li",null,"Updated: ",o),s&&f.a.createElement("li",null,"Loaded from result file: ",u),f.a.createElement("li",null,f.a.createElement("a",{download:u,href:"data:application/json;charset=utf-8;,".concat(encodeURIComponent(JSON.stringify(t)))},"Download Results JSON"))),f.a.createElement("h2",null,"Summary of tests"),f.a.createElement("table",{className:"results-table"},f.a.createElement("thead",null,f.a.createElement("tr",null,f.a.createElement("th",null,"Test"),f.a.createElement("th",null,f.a.createElement("div",null,"Required"),f.a.createElement("div",null,"(pass/fail)")),f.a.createElement("th",null,f.a.createElement("div",null,"Optional"),f.a.createElement("div",null,"(pass/fail)")),f.a.createElement("th",null,f.a.createElement("div",null,"Unexpected Behaviors"),f.a.createElement("div",null,"(total count)")))),f.a.createElement("tbody",null,r.map((function(t,n){return e.renderResultRow(t,n)})),f.a.createElement("tr",null,f.a.createElement("td",null,"Support"),f.a.createElement("td",null,d[1][1]?"".concat(Math.round(d[1][0]/d[1][1]*100),"%"):"-"),f.a.createElement("td",null,d[2][1]?"".concat(Math.round(d[2][0]/d[2][1]*100),"%"):"-"),f.a.createElement("td",null,p?"".concat(p," command(s) produced unexpected behaviors"):"No unexpected behaviors"))))),r.map((function(t,n){return e.renderResultDetails(t,n)})))}}]),t}(E.Component)},61:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n(0),l=n.n(a),r=n(15),c=(n(24),n(133));function s(){var e=Object(r.useRouteData)().result;e.results.length,e.assistiveTechnology.name,e.assistiveTechnology.version,e.browser.name,e.browser.version;return l.a.createElement("div",null,l.a.createElement(c.a,{resultsData:e}))}}}]);