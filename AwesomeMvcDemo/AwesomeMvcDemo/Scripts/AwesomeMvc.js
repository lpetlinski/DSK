var awe=function(){function A(a,b,c){var f="aweready";c||(f+=" change");d.each(a.data.vals,function(a,c){d("#"+c).bind(f,b)})}function r(a,b){var c=0;d.each(a.data.vals,function(a,b){d("#"+b).data("notr")&&c++});0==c&&b()}function B(a,b){var c=function(){};a.v.data("api",c);c.load=function(c){c&&(c.params&&(a.params=c.params),c.oparams&&(a.oparams=c.oparams));b()};return c}function C(a,b,c){a.v.trigger("aweload",[b,c])}function i(a){a.v.change();P(a.v)}function P(a){a.valid&&0<a.closest("form").length&&
a.valid()}function G(a,b){var c;if(a.hasClass("awe-array")){if(c=a.val())try{c=d.parseJSON(c)}catch(f){}else c=0;c=c?c:[]}else c=[a.val()];return z(c,b)}function M(a){var b=[],c;for(c in a)d.isArray(a[c])?b=b.concat(z(a[c],c)):b.push({name:c,value:a[c]});return b}function z(a,b){var c=[];d.isArray(a)||(a=[a]);for(var f=0;f<a.length;f++)c.push({name:b,value:a[f]});return c}function Q(a){a.data&&(a.data={keys:a.data.split("|")[0].split(";"),vals:a.data.split("|")[1].split(";")});a.pars&&(a.pars={keys:a.pars.split("|")[0].split(";"),
vals:a.pars.split("|")[1].split(";")});return a}function p(a,b){var c=[];a.v&&!b&&(c=c.concat(G(a.v,"v")));a.data&&d.each(a.data.keys,function(b,e){c=c.concat(G(d("#"+a.data.vals[b]),e))});a.pars&&d.each(a.pars.keys,function(b,d){c=c.concat(z(a.pars.vals[b],d))});a.params&&(c=c.concat(M(a.params)));a.oparams&&(c=c.concat(M(a.oparams)));a.oparams=0;a.parf&&(c=c.concat(M(a.parf())));return c}function j(a){a.preventDefault?a.preventDefault():a.returnValue=!1}function s(a){a.v=d("#"+a.i);a.f=a.v.parent();
a.d=a.f.find(".awe-display")}function N(a){a=d(a);return a.outerHeight(!0)-a.height()}function R(a,b){a?b.append('<tr class="awe-loadcont"><td>'+u+"</td></tr>"):b.append('<li class="awe-loadcont">'+u+"</li>")}function J(a,b,c){c||(c=1);var d=p(a,a),d=d.concat(b);a.srl.empty();R(a.tl,a.srl);b=[{name:"page",value:c}];if(a.tl)var e=a.srl.closest("table").find("thead:first").html()?!1:!0,b=b.concat({name:"isTheadEmpty",value:e});v(a.searchUrl,d.concat(b),function(b){b=awe.readd(b);a.srl.empty();S(a,b,
d,c)})}function T(a,b,c){if(null!=b){void 0!=b.Thead&&c.closest("table").find("thead:first").html(b.Thead);var f=c.find(".awe-li").map(function(){return d(this).data("val")});void 0!=b.Content?(b=d("<div/>").append(b.Content),b.find(".awe-li").each(function(){0<=d.inArray(d(this).data("val"),f)&&d(this).remove()}),c.append(b.children())):d.each(b.Items,function(b,l){var g=a.mode?"":"<button type='button' class='awe-movebtn awe-btn'><span class='awe-icon'></span></button>";0>d.inArray(l.K,f)&&c.append("<li class='awe-li' data-val='"+
l.K+"'>"+g+l.C+" </li>")});a.dg&&c.find(".awe-li").draggable({cancel:"button",revert:"invalid",helper:"clone",cursor:"move"})}}function S(a,b,c,f){T(a,b,a.srl);if(b.More)if(b=d('<div class="awe-morebtn">'+a.mt+"</div>").click(function(){f++;var b=d(this);b.after("<div class='awe-loading'><span></span></div>");b.hide();var e=[{name:"isMoreClick",value:!0},{name:"page",value:f}];if(a.tl)var m=a.srl.closest("table").find("thead:first").html()?!1:!0,e=e.concat({name:"isTheadEmpty",value:m});v(a.searchUrl,
c.concat(e),function(b){S(a,awe.readd(b),c,f)},function(){b.closest(".awe-li").remove()})}),a.tl){var e=a.srl.find(".awe-li:not(.awe-morecont):first > td").length,e=d('<tr class="awe-li awe-morecont"><td colspan="'+e+'"></td></tr>');a.srl.append(e);a.srl.find("tr:last td").append(b)}else a.srl.append('<li class="awe-li awe-morecont"></li>'),a.srl.find("li:last").append(b)}function K(a,b){return a.replace(/{(\d+)}/g,function(a,d){return"undefined"!=typeof b[d]?b[d]:a})}function U(a,b){for(var c=0;c<
a.length;c++)if(a[c]==b)return parseInt(c,10)+1;return 0}function v(a,b,c,d){q({url:a,data:b,success:c},d)}function q(a,b){a.type||(a.type="post");a.traditional=!0;d.ajax(a).always(b).fail(awe.err)}function O(a){return!d(a.target).parents(".awe-nonselect").length&&!d(a.target).hasClass("awe-nonselect")}function L(a,b,c){for(var d="";a<=b;a++)d+=H(a,c);return d}function H(a,b,c){c||(c=a);return K("<a data-p='{0}' class='awe-btn awe-pager-btn {1}'><span class='awe-btn-content'>{2}</span></a>",[a,b!=
a?"":"awe-selected",c])}function W(){var a=document.createElement("p");a.style.width="100%";a.style.height="200px";var b=document.createElement("div");b.style.position="absolute";b.style.top="0px";b.style.left="0px";b.style.visibility="hidden";b.style.width="200px";b.style.height="150px";b.style.overflow="hidden";b.appendChild(a);document.body.appendChild(b);var c=a.offsetWidth;b.style.overflow="scroll";a=a.offsetWidth;c==a&&(a=b.clientWidth);document.body.removeChild(b);return c-a}var d=jQuery;d(function(){d("body").append('<a href="http://www.aspnetawesome.com">built using Trial version of ASP.net MVC Awesome 3.5 www.aspnetawesome.com</a>')});
var u="<div class='awe-loading'><span></span></div>";return{err:function(){},errMsg:function(){return""},test:function(){},grid:function(a){function b(){t&&t.setItem(a.pk,JSON.stringify([a,w]))}function c(b){return a.columns[b.data("i")]}function f(){E.find(".awe-groupable").draggable({helper:"clone",containment:h,cursorAt:{left:15},distance:5});D.droppable({accept:E.find(".awe-groupable"),activeClass:"awe-highlight",drop:function(b,c){var f=c.draggable.data("i"),f=a.columns[f];if(!f.Gd){var k=0;
d.each(a.columns,function(a,b){b.Gd&&b.Gk>k&&(k=b.Gk)});f.Gd=1;f.Gk=k+1;e(1);m()}}})}function e(b){D.empty();b||(E.empty(),h.find("colgroup").empty());for(var c=[],e=0;e<a.columns.length;e++){var k=a.columns[e];k.i=e;k.Gd&&(c.push(k),k.Sort||(k.Sort=1));if(!(k.Gd&&!a.sgc||b)){var g="<col "+(k.W?"style='width:"+k.W+"'":"")+" />";h.find("colgroup").append(g);a.sh&&(k=K("<th><div class='awe-col {3} {4} {5}' unselectable='on' data-i={0} >{1}{2}</div></th>",[e,k.N,i,k.S?"awe-sortable":"",k.G?"awe-groupable":
"",j[k.Sort]]),E.append(k))}}b||d.each(c,function(){h.find("colgroup").prepend('<col class="awe-idn"/>');E.prepend('<th class="awe-idn"></th>')});a.gl=c.length;c.sort(function(a,b){return a.Gk-b.Gk});d.each(c,function(a,b){D.find(".awe-col").length||D.empty();D.append(K("<div class='awe-col {3}' data-i='{1}'><div class='awe-il awe-sortable'>{2}{0}</div><div class='awe-il'>{4}</span></div></div>",[b.N,b.i,i,j[b.Sort],b.Gr?'<span class="awe-rem">':""]))});c.length||D.html(a.gbt);f();l()}function l(){var b=
h[0],c=null;window.getComputedStyle?c=window.getComputedStyle(b).direction:b.currentStyle&&(c=b.currentStyle.direction);"rtl"==c?h.addClass("awe-rtl"):h.addClass("awe-ltr");var b=h.height(),c=D.outerHeight(!0),e=h.find(".awe-footer").outerHeight(!0),f=h.find(".awe-header"),l=h.find(".awe-content"),g=d("<div></div>");g.css("overflow-y","scroll");g.css("position","relative");g.append("<p/>");h.append(g);var m=g.find("p").position().left;g.remove();g=3>m?"right":"left";a.h&&f[0]&&(l.css("overflow-y",
"scroll"),l.height(b-(c+e+f.outerHeight(!0))-1),f.css("padding-"+g,W()+"px"),f[0].style.display="none",f[0].offsetHeight,f[0].style.display="block");a.mh&&l.css("min-height",a.mh-(c+e+f.outerHeight(!0))-1)}function g(a,b,c,d){for(;;){var e=a.data("lvl");if(!e)break;e=parseInt(e,10);if(e<b)break;if(e==b&&!a.hasClass("awe-gfoot"))break;if(d==e&&!a.hasClass("awe-gfoot")||d>e)d=!1;d||(c?a.hide():a.show());a.hasClass("awe-collapsed")&&!d?g(a.next(),b,c,e):g(a.next(),b,c,d);break}}function m(c){function f(b,
c,e,g){function l(a){for(var b="";0<a&&a--;)b+="<td class='awe-idn'></td>";return b}function k(b,c){b||(b="");if(U(a.dates,c)&&"/Date"==b.substr(0,5))var e=new Date(parseInt(b.substr(6))),b=d.datepicker.formatDate(a.F,e);return b}function V(a,b){var c=a,e=[],f;for(f in b)e.push(f);d.each(e,function(a,d){var e=k(b[d],d);c=c.split("."+d).join(e)});return c}function m(b,c){var e="";d(a.columns).each(function(d,f){if(f.Gd&&!a.sgc)return 1;var g="";!c&&(f.F||f.T)?f.F?g=eval(f.F)(b,f.P):f.T&&(g=V(f.T,b)):
g=k(b[f.P],f.P);if("<td"===g.toString().substring(0,3))e+=g;else{if(!g||""==g)g="&nbsp;";e+="<td>"+g+"</td>"}});return e}function h(a,b,c,d,e){return K("<tr {4} data-lvl='{0}' class='{1}'>{2}{3}</tr>",[b,c,l(g),m(a,e),d?"style='display:none;'":""])}var j=!1,x=[],i=b.Header;if(i){var j=null!=w[i.Key+c.toString()]?w[i.Key+c.toString()]:i.Collapsed,i="<tr "+(e?"style='display:none;'":"")+" data-i='"+i.Key+c.toString()+"' data-lvl='"+c+"' class='awe-ghead"+(j?" awe-collapsed":"")+(a.cohc?" awe-ceb":"")+
"'>",i=i+l(c-1),n=a.columns.length+g-(c-1);a.sgc||(n-=g);i+="<td colspan='"+n+"'><span class='awe-ce-ico"+(!a.cohc?" awe-ceb":"")+"'></span>"+b.Header.Content+"</td>";x=x.concat(i+"</tr>")}!e&&j&&(e=!0);b.Groups&&d.each(b.Groups,function(a,b){x=x.concat(f(b,c+1,e,g))});b.Items&&d.each(b.Items,function(b,f){var g=0==b%2?"":" awe-alt";a.rcf&&(g+=" "+V(a.rcf,f));x=x.concat(d(h(f,c+1,"awe-row"+g,e,0)).data("model",f))});b.Footer&&(x=x.concat(h(b.Footer,c,"awe-gfoot",e,1)));return x}var g,k=[],j=[];d.each(a.columns,
function(a,b){b.Gd?k.push(b):0!=b.Sort&&j.push(b)});k.sort(function(a,b){return a.Gk-b.Gk});j.sort(function(a,b){return a.So-b.So});g=k.concat(j);var i=["","asc","desc"],n=p(a);c&&(a.pg=c);n.push({name:"page",value:a.pg});for(c=0;c<g.length;c++)n.push({name:"SortNames",value:g[c].P}),n.push({name:"SortDirections",value:i[g[c].Sort]});for(g=0;g<k.length;g++)n.push({name:"Groups",value:k[g].P}),n.push({name:"Headers",value:k[g].N});a.sc&&n.push({name:"Cs",value:JSON.stringify(a.columns)});h.find(".awe-relbox").append(u);
v(a.url,n,function(c){var g=awe.readd(c);null!=g&&(a.pg=g.Page,a.pg>g.PageCount&&(a.pg=1,g.PageCount&&0<g.PageCount&&m()),c.Cs&&(a.columns=JSON.parse(c.Cs)),e(),e(),b(),t||(w={}),a.dates=g.Dates,q.find("tbody").empty().append(f(g.Data,0,0,g.GroupCount)),h.find(".awe-pager").html(8>g.PageCount?L(1,g.PageCount,a.pg):5>a.pg?L(1,5,a.pg)+" ... "+H(g.PageCount,a.pg):a.pg>g.PageCount-5?H(1,a.pg)+" ... "+L(g.PageCount-5,g.PageCount,a.pg):H(1,a.pg)+" ... "+L(a.pg-2,a.pg+2,a.pg)+" ... "+H(g.PageCount,a.pg)),
h.find(".awe-pager a").click(function(){h.find(".awe-pager .awe-selected").removeClass("awe-selected");d(this).addClass("awe-selected");a.pg=parseInt(d(this).data("p"));m()}),l(),h.trigger("aweload",[c,n]),a.lreq=n,a.lres=c)},function(){h.find(".awe-relbox .awe-loading").remove()})}var j=["","awe-asc","awe-desc"],i="<span class='awe-sord'></span>",h=d("#"+a.i),q=h.find(".awe-table"),E=h.find(".awe-hrow"),D=h.find(".awe-groupbar"),w={};a.So=100;a.pg=1;a.pk=(!a.pk?a.i:a.pk)+a.prs;var C=d.extend(!0,
{},a),s=null,I=a.st;if(I)h.on("click",".awe-row",function(a){if(O(a)){var b=1;if(a.shiftKey&&null!==s&&2==I){a.ctrlKey||d(this).parent().children().removeClass("awe-selected");var a=d(this).index(),c=s.index();a>c&&(a=-(c=(a+=c)-c)+a);d(this).parent().children().slice(a,c+1).addClass("awe-selected")}else a.ctrlKey&&2==I||3==I?(d(this).toggleClass("awe-selected"),s=d(this)):0<I&&(s=d(this),d(this).siblings(".awe-selected").removeClass("awe-selected"),d(this).hasClass("awe-selected")?b=0:d(this).addClass("awe-selected"));
b&&(window.getSelection?window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges():document.selection&&document.selection.empty());h.trigger("aweselect")}});var t=0;try{if(1==a.prs)var B={},t={setItem:function(a,b){B[a]=b},getItem:function(a){return B[a]}};else 2==a.prs?t=sessionStorage:3==a.prs&&(t=localStorage)}catch(G){}var y=function(){};h.data("api",y);y.lay=l;y.getRequest=function(){return a.lreq};y.getResult=function(){return a.lres};
y.clearpersist=function(){t&&t.removeItem(a.pk)};y.reset=function(){w={};a=d.extend(!0,{},C);e(1);m(1)};y.getSelection=function(){return d(".awe-row.awe-selected",h).map(function(){return d(this).data("model")}).get()};y.load=function(b){if(b&&(b.params&&(a.params=b.params),b.oparams&&(a.oparams=b.oparams),b.group&&d.each(a.columns,function(a,c){var d=U(b.group,c.P);d?(c.Gd=1,c.Gk=d):c.Gd=0}),b.sort)){var c=0;d.each(a.columns,function(a,e){var g=0;d.each(b.sort,function(a,b){if(e.P==b.Prop)return g=
b,!1});g?(e.Sort=g.Sort,e.So=c++):e.Sort=0})}e(1);m()};h.find(".awe-reload").click(function(){y.reset()});h.on("click",".awe-rem",function(){var g=c(d(this).closest(".awe-col")),f=g.Gd=0;d.each(a.columns,function(a,b){b.So<f&&(f=b.So)});g.So=f-1;b();e(1);m(1)});q.on("click",".awe-ceb",function(){var a=d(this).closest(".awe-ghead"),c=parseInt(a.data("lvl"),10),e=a.next(),f=a.data("i");a.hasClass("awe-collapsed")?(a.removeClass("awe-collapsed"),g(e,c,!1),w[f]=0):(a.addClass("awe-collapsed"),g(e,c,!0),
w[f]=1);b()});h.on("click",".awe-sortable",function(){var e=d(this);e.parent().hasClass("awe-col")&&(e=e.parent());var g=c(e),f=g.Sort+1;3==f&&(f=g.Gd?1:0);g.Sort=f;h.find("[data-i="+e.data("i")+"]").removeClass("awe-asc awe-desc").addClass(j[f]);g.Gd||(a.s&&d.each(a.columns,function(a,b){if(b.Gd||b.P==g.P)return 1;b.Sort=0;E.find("[data-i="+a+"]").removeClass("awe-asc awe-desc")}),1==f&&(c(e).So=++a.So));b();m()});if(t){var F=t.getItem(a.pk);if(F&&(F=d.parseJSON(F))&&2==F.length){var z=F[0];a.pg=
z.pg;a.So=z.So;a.columns=z.columns;w=F[1]}}else w={};e();f();r(a,function(){m()});A(a,function(){r(a,function(){m(1)})},!a.lpc)},form:function(a){var b="."+a.cl;d(document).off("submit.awe",b).on("submit.awe",b,function(b){function f(){a.notok=1;if(a.ua){var b=a.u,c=e.attr("action");q({url:!b?c:b,data:e.serialize(),success:function(b){"object"==typeof b||!a.ff?(a.sf&&a.sf(b),e.trigger("aweformsuccess",b)):e.html(b);a.notok=0}})}else e.data("aweex",1),a.u&&e.attr("action",a.u),e.submit()}var e=d(this);
e.data("aweex")||(j(b),!(a.bf&&!1===a.bf(e))&&!a.notok&&(a.c?(a.d=d("<div>"+a.ms+"</div>"),awe.popup({d:a.d,w:a.w,h:a.h,title:a.title,m:a.m,dntr:1,pos:a.pos,btns:[{text:a.yes,click:function(){f();d(this).dialog("close")}},{text:a.no,click:function(){d(this).dialog("close")}}]}),a.d.dialog("open"),d(".ui-dialog-buttonset button").blur()):f()))})},autocomplete:function(a){a.v=a.d=d("#"+a.i);a.v.data("numeric")&&awe.numeric(a.d);var b=null;a.k&&(b=d("#"+a.k));a.d.autocomplete({minLength:a.ml,source:function(b,
f){var e=p(a);q({url:a.url,dataType:"json",data:e,success:function(a){f(d.map(a,function(a){return{label:a.C,value:a.C,id:a.K}}))}})}});a.d.bind("autocompleteselect",function(c,d){b&&b.val(d.item?d.item.id:null).trigger("change");a.d.trigger("change")});b&&a.d.keyup(function(a){"13"!=a.which&&b.val(null).trigger("change")})},numeric:function(a){a.keydown(function(a){var c=a.which;46==c||(8==c||9==c||27==c||13==c||65==c&&!0===a.ctrlKey||35<=c&&39>=c)||((48>c||57<c)&&(96>c||105<c)?a.preventDefault():
!0===a.shiftKey&&j(a))})},txt:function(a){a.d=a.v=d("#"+a.i);a.v.data("numeric")&&awe.numeric(a.d)},dtp:function(a){s(a);var b={dateFormat:a.format,changeMonth:a.cm,changeYear:a.cy};a.min&&(b.minDate=a.min);a.max&&(b.maxDate=a.max);a.dfd&&(b.defaultDate=a.dfd);a.rtl&&(b.isRTL=a.rtl);a.d.datepicker(b);a.f.find(".awe-dpbtn").click(function(b){j(b);a.d.focus()});a.f.find(".awe-clearbtn").click(function(b){j(b);a.d.val("").change()})},ajaxList:function(a){function b(b){b||(b=1);J(a,[],b)}a.v=d("#"+a.i);
a.srl=a.tl?a.v.find(".awe-srl"):a.v;a.mode="s";B(a,b);r(a,b);A(a,function(){r(a,function(){b(1)})},!a.lpc)},checkboxList:function(a){function b(){a.d.before(u);var b=p(a);q({url:a.url,data:b,success:function(f){a.d.empty();var e=awe.readd(f);null!=e&&d.each(e,function(b,c){a.d.append("<li><input "+(a.e?"":"disabled='disabled'")+(c.S?'checked="checked"':"")+'id="'+a.i+"_item_"+b+'" name="'+a.v.data("name")+'" value="'+c.V+'" type="checkbox"/><label for="'+a.i+"_item_"+b+'">'+c.T+"</label></li>")});
e=JSON.stringify(d(a.d.find("input:checked")).map(function(){return d(this).val()}).get());"[]"==e&&(e="");e!=a.v.val()&&(a.v.val(e),i(a));C(a,f,b)}},function(){a.d.prev().remove()})}s(a);B(a,b);r(a,b);A(a,function(){r(a,b)});a.d.on("change","input",function(){var b=JSON.stringify(d(a.d.find("input:checked")).map(function(){return d(this).val()}).get());"[]"==b&&(b="");a.v.val(b);i(a)})},radioList:function(a){function b(){a.d.before(u);var b=p(a);q({url:a.url,data:b,success:function(f){a.d.empty();
var e=awe.readd(f);null!=e&&d.each(e,function(b,c){var e=a.e?"":"disabled='disabled'",d="";!0==c.S&&(d='checked="checked"');a.d.append('<li><input type="radio" '+e+' value="'+c.V+'" name="'+a.i+'" id="'+a.i+"_item_"+b+'"'+d+' /><label for="'+a.i+"_item_"+b+'" >'+c.T+"</label></li>")});var e="",l=a.d.find("input:radio:checked");l.length&&(e=l.val());a.v.val()!=e&&(a.v.val(e),i(a));C(a,f,b)}},function(){a.d.prev().remove()})}s(a);B(a,b);r(a,b);A(a,function(){r(a,b)});a.d.on("change","input",function(){a.v.val(a.d.find("input:checked").val());
i(a)})},lookup:function(a){function b(b){a.d.html("");if(a.v.val()){a.d.html(u);var c=p(a);v(a.getUrl,c,function(d){a.d.html("");var f=awe.readd(d);null!=f&&a.d.html(f.C);a.hi&&1!=b&&(a.d.addClass("awe-changing"),a.d.removeClass("awe-changing",1E3));C(a,d,c)})}}function c(){var b=a.div,c=d("#"+b).height()-(d("#"+b+" .awe-search:first").outerHeight()+N("#"+b+" .awe-srlcont:first")+10);d("#"+b+" .awe-list").css("height",1*c+"px")}s(a);a.div=a.i+"-awepw";a.soc=!0;a.mode="s";A(a,function(){a.soc=!0});
d("#"+a.div).length||a.d.after("<div id='"+a.i+"-awepw' class='awe-lookup-popup' style='display:none;'><form class='awe-search'></form><div class='awe-list awe-srlcont'>"+(a.tl?"<table><thead></thead><tbody class='awe-srl'></tbody></table>":"<ul class='awe-srl'></ul>")+"</div></div>");a.p=d("#"+a.div);awe.popup({d:a.p,w:a.w,h:a.h,fulls:a.fulls,pos:"center",res:!1,title:a.title,m:a.m,dntr:1,pc:a.pc,btns:[{text:a.ok,click:function(){a.v.val(a.p.find(".awe-selected").data("val"));i(a);a.ms=0;a.p.dialog("close")}},
{text:a.cancel,click:function(){d(this).dialog("close")}}]});a.p.bind("dialogclose",function(){a.ms&&a.p.find(".awe-li").removeClass("awe-selected");a.ms=0;a.f.find(".awe-openbtn").focus()});a.srl=a.p.find(".awe-srl");var f="#"+a.div+" .awe-li:not(.awe-morecont)";d(document).off("click",f).on("click",f,function(b){O(b)&&(a.p.find(".awe-li").removeClass("awe-selected"),d(this).addClass("awe-selected"),a.ms=1)}).off("dblclick",f).on("dblclick",f,function(b){O(b)&&(a.v.val(d(this).data("val")),i(a),
a.ms=0,d("#"+a.div).dialog("close"))});d("#"+a.div).bind("dialogresize",c);b(1);a.v.change(b);a.f.find(".awe-clearbtn").click(function(b){j(b);a.v.val("");i(a);a.soc=!0});a.f.find(".awe-openbtn").click(function(b){j(b);a.p.dialog("open");a.fm||(a.fm=a.p.find(".awe-search"),a.fm.on("change","*",c),a.fm.unbind("submit").submit(function(b){j(b);a.fm.find("[data-notr]").length||J(a,a.fm.serializeArray())}));a.soc&&(a.fm.html()?a.fm.submit():a.sf?v(a.sf,{},function(b){a.fm.html(b);a.fm.submit();c();a.sc&&
a.fm.find("input[type=hidden], select[name]").bind("change aweready",function(){a.fm.submit()})}):(a.fm.html('<table><tr><td><input type="text" name="search" class="awe-searchtxt"/></td><td><input type="submit" class="awe-searchbtn awe-btn" value = "'+a.st+'"/></td></tr></table>'),a.fm.submit()));a.soc=!1;c()})},add:function(a){function b(){a.d.before(u);var b=p(a);v(a.url,b,function(f){a.d.empty();var e=awe.readd(f);null!=e&&d.each(e,function(b,c){var d="";!0==c.S&&(d="selected = 'selected'");a.d.append("<option "+
d+' value="'+c.V+'">'+c.T+"</option>")});a.d.change();"1"==a.v.data("notr")&&(a.v.data("notr",0),a.v.removeAttr("data-notr"),a.v.trigger("aweready"));C(a,f,b)},function(){a.d.prev().remove()})}a.v=d("#"+a.i);a.d=a.v.next();B(a,b);r(a,b);A(a,function(){r(a,b)});a.d.keyup(function(){d(this).change()}).change(function(){a.v.val()!=a.d.val()&&(a.v.val(a.d.val()),a.v.attr("data-notr")||i(a))})},readd:function(a,b){return!b&&"object"!=typeof a?(awe.err({responseText:a}),null):("object"==typeof a||"string"==
typeof a)&&null!=a?a:null},pf:function(a,b){j(a);var c;0==d("#"+b.i).length?c=d('<div id="'+b.i+'"></div>'):(c=d("#"+b.i),c.dialog("close"));c.off("submit","form");c.on("submit","form",function(a){j(a);if(!b.notok){b.notok=1;var a=d(this),e=a.attr("method");q({url:a.attr("action"),data:a.serialize(),success:function(a){"object"==typeof a?(b.cs&&c.dialog("close"),b.sf&&b.sf(a,c),c.trigger("awepopupformsuccess",a),b.rs&&location.reload(!0)):c.html(a);b.notok=0},type:e})}});c.html(u);q({type:"get",data:p(Q(b)),
url:b.u,cache:!1,success:function(a){c.html(a);c.find("input:visible:not([readonly],[disabled]):first").focus()}});for(var f=[],e=0;e<b.b.length;e+=2)f.push({text:b.b[e],click:b.b[e+1]});b.udb&&(f=f.concat([{text:b.ot,click:function(){c.find("form:first").submit()}},{text:b.ct,click:function(){c.dialog("close")}}]));awe.popup({w:b.w,h:b.h,pos:b.p,res:b.r,m:b.m,title:b.t,d:c,btns:f,fulls:b.f,dntr:!b.rc,pc:b.pc,cl:b.cl});c.dialog("open")},op:function(a,b){j(a);var c;0==d("#"+b.i).length?c=d('<div id="'+
b.i+'"></div>'):(c=d("#"+b.i),c.dialog("close"));b.c&&c.html(b.c);b.u&&q({type:"get",data:p(Q(b)),url:b.u,cache:!1,success:function(a){c.html(a)}});for(var f=[],e=0;e<b.b.length;e+=2)f.push({text:b.b[e],click:b.b[e+1]});awe.popup({w:b.w,h:b.h,pos:b.p,res:b.r,m:b.m,title:b.t,d:c,btns:f,fulls:b.f,dntr:!b.rc,pc:b.pc,cl:b.cl});c.dialog("open")},autoSize:1,popup:function(a){var b=awe.autoSize,c=a.fulls;draggable=!0;a.pos||(a.pos="center");a.res||(a.res=!1);var f;f=a.d?a.d:d("#"+a.i);c&&(draggable=a.res=
!1);f.dialog({draggable:draggable,width:a.w,height:a.h,modal:a.m,position:a.pos,resizable:a.res,buttons:a.btns,autoOpen:!1,title:a.title,resizeStop:function(){a.w=f.dialog("option","width");a.h=f.dialog("option","height");a.pos=f.dialog("option","position")},dragStop:function(){a.pos=f.dialog("option","position")}});var e="awe-popup";a.pc&&(e=e+" "+a.pc);f.dialog("option",{dialogClass:e});var l=function(){};if(c||b)l=function(b){if(!b||b.target==window||b.target==document){var b=d(window).height(),
e=d(window).width(),b={height:a.h>b-5||c?b-5:a.h,width:a.w>e-10||c?e-10:a.w};c||(b.position=a.pos);f.dialog("option",b).trigger("dialogresize")}},d(window).on("resize",l),l();f.on("dialogopen",function(){l()});f.on("dialogclose",function(){a.cl&&a.cl();a.dntr||(f.find("*").remove(),f.remove(),(b||c)&&d(window).off("resize",l))})},multilookup:function(a){function b(){var b=a.div,c=d("#"+b).height()-(d("#"+b+" .awe-search").outerHeight(!0)+N("#"+b+" .awe-srlcont")+N("#"+b+" .awe-selcont")+10);d("#"+
b+" .awe-list").css("height",0.5*c+"px")}function c(){return a.sel.find(".awe-li").map(function(){return d(this).data("val")}).get()}function f(b){var c=a.d.empty();if(a.v.val()){a.d.html("<li>"+u+"</li>");var f=p(a);v(a.getMultipleUrl,f,function(i){a.d.html("");var j=awe.readd(i);if(null!=j){if("object"!=typeof i){awe.err({responseText:i});return}d.each(j,function(d,f){c.append("<li>"+f.C+"</li>");1==b&&a.v.next().append("<input type='hidden' name='"+a.v.data("name")+"' value='"+f.K+"' />")});c.change();
a.hi&&1!=b&&(a.d.addClass("awe-changing"),a.d.removeClass("awe-changing",1E3))}C(a,i,f)})}}s(a);a.div=a.i+"-awepw";a.soc=!0;a.v.on("change",function(){a.v.val()||a.v.next().empty().append("<input type='hidden' name='"+a.v.data("name")+"' />")});A(a,function(){a.soc=!0});d("#"+a.div).length||a.d.after("<div id='"+a.i+"-awepw' class='awe-multilookup-popup' style='display:none;'><form class='awe-search'></form><div class='awe-list awe-srlcont'>"+(a.tl?"<table><thead></thead><tbody class='awe-srl'></tbody></table>":
"<ul class='awe-srl'></ul>")+"</div><div class='awe-list awe-selcont' >"+(a.tl?"<table><thead></thead><tbody class='awe-sel'></tbody></table>":"<ul class='awe-sel'></ul>")+"</div></div>");a.p=d("#"+a.div);awe.popup({d:a.p,w:a.w,h:a.h,fulls:a.fulls,pos:"center",res:!1,title:a.title,m:a.m,dntr:1,pc:a.pc,btns:[{text:a.ok,click:function(){a.v.val(c().length?JSON.stringify(c()):null);a.v.next().empty();var b=c();d.each(b,function(c){a.v.next().append("<input type='hidden' name='"+a.v.data("name")+"' value='"+
String(b[c]).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")+"' />")});i(a);a.ms=0;d(this).dialog("close")}},{text:a.cancel,click:function(){d(this).dialog("close")}}]});a.p.bind("dialogclose",function(){a.ms&&(a.soc=!0);a.ms=0;a.f.find(".awe-openbtn").focus()});a.srl=a.p.find(".awe-srl");a.sel=a.p.find(".awe-sel");a.srl.on("click",".awe-movebtn",function(){var b=d(this);setTimeout(function(){b.closest(".awe-li").prependTo(a.sel);a.ms=1},
1)});a.sel.on("click",".awe-movebtn",function(){var b=d(this);setTimeout(function(){b.closest(".awe-li").prependTo(a.srl);a.ms=1},1)});a.dg&&(d("#"+a.div+" .awe-srlcont").droppable({accept:"#"+a.div+" .awe-selcont .awe-li",activeClass:"awe-highlight",drop:function(b,c){c.draggable.prependTo(a.srl);a.ms=1}}),d("#"+a.div+" .awe-selcont").droppable({accept:"#"+a.div+" .awe-srlcont .awe-li",activeClass:"awe-highlight",drop:function(b,c){c.draggable.prependTo(a.sel);a.ms=1}}));d("#"+a.div).bind("dialogresize",
b);a.v.change(f);f(1);a.f.find(".awe-clearbtn").click(function(b){j(b);a.v.next().empty();a.v.val("").change();P(a.v);a.soc=!0});a.f.find(".awe-openbtn").click(function(d){j(d);a.p.dialog("open");a.fm||(a.fm=a.p.find(".awe-search"),a.fm.on("change","*",b),a.fm.unbind("submit").submit(function(b){j(b);a.fm.find("[data-notr]").length||(a.loaded?J(a,z(c(),"selected").concat(a.fm.serializeArray())):J(a,G(a.v,"selected").concat(a.fm.serializeArray())))}));if(a.soc){a.loaded=0;a.fm.html()?a.fm.submit():
a.sf?v(a.sf,{},function(c){a.fm.html(c);a.fm.submit();b();a.sc&&a.fm.find("input[type=hidden], select[name]").bind("change aweready",function(){a.fm.submit()})}):(a.fm.html('<table><tr><td><input type="text" name="search" class="awe-searchtxt"/></td><td><button type="submit" class="awe-searchbtn awe-btn">'+a.st+"</button></td></tr></table>"),a.fm.submit());a.sel.html("");R(a.tl,a.sel);d=p(a,a);d=d.concat(G(a.v,"selected"));if(a.tl)var f=a.srl.closest("table").find("thead:first").html()?!1:!0,d=d.concat({name:"isTheadEmpty",
value:f});v(a.selectedUrl,d,function(b){a.sel.empty();b=awe.readd(b);null!=b&&(T(a,b,a.sel),a.loaded=1)})}a.soc=!1;b()})}}}();
