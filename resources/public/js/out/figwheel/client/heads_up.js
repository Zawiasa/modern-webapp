// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__22770__auto__ = [];
var len__22763__auto___35870 = arguments.length;
var i__22764__auto___35871 = (0);
while(true){
if((i__22764__auto___35871 < len__22763__auto___35870)){
args__22770__auto__.push((arguments[i__22764__auto___35871]));

var G__35872 = (i__22764__auto___35871 + (1));
i__22764__auto___35871 = G__35872;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((2) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22771__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__35862_35873 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__35863_35874 = null;
var count__35864_35875 = (0);
var i__35865_35876 = (0);
while(true){
if((i__35865_35876 < count__35864_35875)){
var k_35877 = cljs.core._nth.call(null,chunk__35863_35874,i__35865_35876);
e.setAttribute(cljs.core.name.call(null,k_35877),cljs.core.get.call(null,attrs,k_35877));

var G__35878 = seq__35862_35873;
var G__35879 = chunk__35863_35874;
var G__35880 = count__35864_35875;
var G__35881 = (i__35865_35876 + (1));
seq__35862_35873 = G__35878;
chunk__35863_35874 = G__35879;
count__35864_35875 = G__35880;
i__35865_35876 = G__35881;
continue;
} else {
var temp__4425__auto___35882 = cljs.core.seq.call(null,seq__35862_35873);
if(temp__4425__auto___35882){
var seq__35862_35883__$1 = temp__4425__auto___35882;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35862_35883__$1)){
var c__22508__auto___35884 = cljs.core.chunk_first.call(null,seq__35862_35883__$1);
var G__35885 = cljs.core.chunk_rest.call(null,seq__35862_35883__$1);
var G__35886 = c__22508__auto___35884;
var G__35887 = cljs.core.count.call(null,c__22508__auto___35884);
var G__35888 = (0);
seq__35862_35873 = G__35885;
chunk__35863_35874 = G__35886;
count__35864_35875 = G__35887;
i__35865_35876 = G__35888;
continue;
} else {
var k_35889 = cljs.core.first.call(null,seq__35862_35883__$1);
e.setAttribute(cljs.core.name.call(null,k_35889),cljs.core.get.call(null,attrs,k_35889));

var G__35890 = cljs.core.next.call(null,seq__35862_35883__$1);
var G__35891 = null;
var G__35892 = (0);
var G__35893 = (0);
seq__35862_35873 = G__35890;
chunk__35863_35874 = G__35891;
count__35864_35875 = G__35892;
i__35865_35876 = G__35893;
continue;
}
} else {
}
}
break;
}

var seq__35866_35894 = cljs.core.seq.call(null,children);
var chunk__35867_35895 = null;
var count__35868_35896 = (0);
var i__35869_35897 = (0);
while(true){
if((i__35869_35897 < count__35868_35896)){
var ch_35898 = cljs.core._nth.call(null,chunk__35867_35895,i__35869_35897);
e.appendChild(ch_35898);

var G__35899 = seq__35866_35894;
var G__35900 = chunk__35867_35895;
var G__35901 = count__35868_35896;
var G__35902 = (i__35869_35897 + (1));
seq__35866_35894 = G__35899;
chunk__35867_35895 = G__35900;
count__35868_35896 = G__35901;
i__35869_35897 = G__35902;
continue;
} else {
var temp__4425__auto___35903 = cljs.core.seq.call(null,seq__35866_35894);
if(temp__4425__auto___35903){
var seq__35866_35904__$1 = temp__4425__auto___35903;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35866_35904__$1)){
var c__22508__auto___35905 = cljs.core.chunk_first.call(null,seq__35866_35904__$1);
var G__35906 = cljs.core.chunk_rest.call(null,seq__35866_35904__$1);
var G__35907 = c__22508__auto___35905;
var G__35908 = cljs.core.count.call(null,c__22508__auto___35905);
var G__35909 = (0);
seq__35866_35894 = G__35906;
chunk__35867_35895 = G__35907;
count__35868_35896 = G__35908;
i__35869_35897 = G__35909;
continue;
} else {
var ch_35910 = cljs.core.first.call(null,seq__35866_35904__$1);
e.appendChild(ch_35910);

var G__35911 = cljs.core.next.call(null,seq__35866_35904__$1);
var G__35912 = null;
var G__35913 = (0);
var G__35914 = (0);
seq__35866_35894 = G__35911;
chunk__35867_35895 = G__35912;
count__35868_35896 = G__35913;
i__35869_35897 = G__35914;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq35859){
var G__35860 = cljs.core.first.call(null,seq35859);
var seq35859__$1 = cljs.core.next.call(null,seq35859);
var G__35861 = cljs.core.first.call(null,seq35859__$1);
var seq35859__$2 = cljs.core.next.call(null,seq35859__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__35860,G__35861,seq35859__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__22618__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22622__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__22618__auto__,prefer_table__22619__auto__,method_cache__22620__auto__,cached_hierarchy__22621__auto__,hierarchy__22622__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__22618__auto__,prefer_table__22619__auto__,method_cache__22620__auto__,cached_hierarchy__22621__auto__,hierarchy__22622__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__22622__auto__,method_table__22618__auto__,prefer_table__22619__auto__,method_cache__22620__auto__,cached_hierarchy__22621__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_35915 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_35915.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_35915.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_35915.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_35915);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__35916,st_map){
var map__35921 = p__35916;
var map__35921__$1 = ((((!((map__35921 == null)))?((((map__35921.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35921.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35921):map__35921);
var container_el = cljs.core.get.call(null,map__35921__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__35921,map__35921__$1,container_el){
return (function (p__35923){
var vec__35924 = p__35923;
var k = cljs.core.nth.call(null,vec__35924,(0),null);
var v = cljs.core.nth.call(null,vec__35924,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__35921,map__35921__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__35925,dom_str){
var map__35928 = p__35925;
var map__35928__$1 = ((((!((map__35928 == null)))?((((map__35928.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35928.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35928):map__35928);
var c = map__35928__$1;
var content_area_el = cljs.core.get.call(null,map__35928__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__35930){
var map__35933 = p__35930;
var map__35933__$1 = ((((!((map__35933 == null)))?((((map__35933.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35933.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35933):map__35933);
var content_area_el = cljs.core.get.call(null,map__35933__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__24785__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24785__auto__){
return (function (){
var f__24786__auto__ = (function (){var switch__24720__auto__ = ((function (c__24785__auto__){
return (function (state_35976){
var state_val_35977 = (state_35976[(1)]);
if((state_val_35977 === (1))){
var inst_35961 = (state_35976[(7)]);
var inst_35961__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_35962 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_35963 = ["10px","10px","100%","68px","1.0"];
var inst_35964 = cljs.core.PersistentHashMap.fromArrays(inst_35962,inst_35963);
var inst_35965 = cljs.core.merge.call(null,inst_35964,style);
var inst_35966 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35961__$1,inst_35965);
var inst_35967 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_35961__$1,msg);
var inst_35968 = cljs.core.async.timeout.call(null,(300));
var state_35976__$1 = (function (){var statearr_35978 = state_35976;
(statearr_35978[(7)] = inst_35961__$1);

(statearr_35978[(8)] = inst_35967);

(statearr_35978[(9)] = inst_35966);

return statearr_35978;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35976__$1,(2),inst_35968);
} else {
if((state_val_35977 === (2))){
var inst_35961 = (state_35976[(7)]);
var inst_35970 = (state_35976[(2)]);
var inst_35971 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_35972 = ["auto"];
var inst_35973 = cljs.core.PersistentHashMap.fromArrays(inst_35971,inst_35972);
var inst_35974 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35961,inst_35973);
var state_35976__$1 = (function (){var statearr_35979 = state_35976;
(statearr_35979[(10)] = inst_35970);

return statearr_35979;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35976__$1,inst_35974);
} else {
return null;
}
}
});})(c__24785__auto__))
;
return ((function (switch__24720__auto__,c__24785__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__24721__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__24721__auto____0 = (function (){
var statearr_35983 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35983[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__24721__auto__);

(statearr_35983[(1)] = (1));

return statearr_35983;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__24721__auto____1 = (function (state_35976){
while(true){
var ret_value__24722__auto__ = (function (){try{while(true){
var result__24723__auto__ = switch__24720__auto__.call(null,state_35976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24723__auto__;
}
break;
}
}catch (e35984){if((e35984 instanceof Object)){
var ex__24724__auto__ = e35984;
var statearr_35985_35987 = state_35976;
(statearr_35985_35987[(5)] = ex__24724__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35988 = state_35976;
state_35976 = G__35988;
continue;
} else {
return ret_value__24722__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__24721__auto__ = function(state_35976){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__24721__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__24721__auto____1.call(this,state_35976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__24721__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__24721__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__24721__auto__;
})()
;})(switch__24720__auto__,c__24785__auto__))
})();
var state__24787__auto__ = (function (){var statearr_35986 = f__24786__auto__.call(null);
(statearr_35986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24785__auto__);

return statearr_35986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24787__auto__);
});})(c__24785__auto__))
);

return c__24785__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__35990 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__35990,(0),null);
var ln = cljs.core.nth.call(null,vec__35990,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__35993 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__35993,(0),null);
var file_line = cljs.core.nth.call(null,vec__35993,(1),null);
var file_column = cljs.core.nth.call(null,vec__35993,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__35993,file_name,file_line,file_column){
return (function (p1__35991_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__35991_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__35993,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__21705__auto__ = file_line;
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
var and__21693__auto__ = cause;
if(cljs.core.truth_(and__21693__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__21693__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__35996 = figwheel.client.heads_up.ensure_container.call(null);
var map__35996__$1 = ((((!((map__35996 == null)))?((((map__35996.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35996.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35996):map__35996);
var content_area_el = cljs.core.get.call(null,map__35996__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__24785__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24785__auto__){
return (function (){
var f__24786__auto__ = (function (){var switch__24720__auto__ = ((function (c__24785__auto__){
return (function (state_36044){
var state_val_36045 = (state_36044[(1)]);
if((state_val_36045 === (1))){
var inst_36027 = (state_36044[(7)]);
var inst_36027__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_36028 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_36029 = ["0.0"];
var inst_36030 = cljs.core.PersistentHashMap.fromArrays(inst_36028,inst_36029);
var inst_36031 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_36027__$1,inst_36030);
var inst_36032 = cljs.core.async.timeout.call(null,(300));
var state_36044__$1 = (function (){var statearr_36046 = state_36044;
(statearr_36046[(8)] = inst_36031);

(statearr_36046[(7)] = inst_36027__$1);

return statearr_36046;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36044__$1,(2),inst_36032);
} else {
if((state_val_36045 === (2))){
var inst_36027 = (state_36044[(7)]);
var inst_36034 = (state_36044[(2)]);
var inst_36035 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_36036 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_36037 = cljs.core.PersistentHashMap.fromArrays(inst_36035,inst_36036);
var inst_36038 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_36027,inst_36037);
var inst_36039 = cljs.core.async.timeout.call(null,(200));
var state_36044__$1 = (function (){var statearr_36047 = state_36044;
(statearr_36047[(9)] = inst_36034);

(statearr_36047[(10)] = inst_36038);

return statearr_36047;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36044__$1,(3),inst_36039);
} else {
if((state_val_36045 === (3))){
var inst_36027 = (state_36044[(7)]);
var inst_36041 = (state_36044[(2)]);
var inst_36042 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_36027,"");
var state_36044__$1 = (function (){var statearr_36048 = state_36044;
(statearr_36048[(11)] = inst_36041);

return statearr_36048;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36044__$1,inst_36042);
} else {
return null;
}
}
}
});})(c__24785__auto__))
;
return ((function (switch__24720__auto__,c__24785__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__24721__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__24721__auto____0 = (function (){
var statearr_36052 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36052[(0)] = figwheel$client$heads_up$clear_$_state_machine__24721__auto__);

(statearr_36052[(1)] = (1));

return statearr_36052;
});
var figwheel$client$heads_up$clear_$_state_machine__24721__auto____1 = (function (state_36044){
while(true){
var ret_value__24722__auto__ = (function (){try{while(true){
var result__24723__auto__ = switch__24720__auto__.call(null,state_36044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24723__auto__;
}
break;
}
}catch (e36053){if((e36053 instanceof Object)){
var ex__24724__auto__ = e36053;
var statearr_36054_36056 = state_36044;
(statearr_36054_36056[(5)] = ex__24724__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36057 = state_36044;
state_36044 = G__36057;
continue;
} else {
return ret_value__24722__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__24721__auto__ = function(state_36044){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__24721__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__24721__auto____1.call(this,state_36044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__24721__auto____0;
figwheel$client$heads_up$clear_$_state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__24721__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__24721__auto__;
})()
;})(switch__24720__auto__,c__24785__auto__))
})();
var state__24787__auto__ = (function (){var statearr_36055 = f__24786__auto__.call(null);
(statearr_36055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24785__auto__);

return statearr_36055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24787__auto__);
});})(c__24785__auto__))
);

return c__24785__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__24785__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24785__auto__){
return (function (){
var f__24786__auto__ = (function (){var switch__24720__auto__ = ((function (c__24785__auto__){
return (function (state_36089){
var state_val_36090 = (state_36089[(1)]);
if((state_val_36090 === (1))){
var inst_36079 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_36089__$1 = state_36089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36089__$1,(2),inst_36079);
} else {
if((state_val_36090 === (2))){
var inst_36081 = (state_36089[(2)]);
var inst_36082 = cljs.core.async.timeout.call(null,(400));
var state_36089__$1 = (function (){var statearr_36091 = state_36089;
(statearr_36091[(7)] = inst_36081);

return statearr_36091;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36089__$1,(3),inst_36082);
} else {
if((state_val_36090 === (3))){
var inst_36084 = (state_36089[(2)]);
var inst_36085 = figwheel.client.heads_up.clear.call(null);
var state_36089__$1 = (function (){var statearr_36092 = state_36089;
(statearr_36092[(8)] = inst_36084);

return statearr_36092;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36089__$1,(4),inst_36085);
} else {
if((state_val_36090 === (4))){
var inst_36087 = (state_36089[(2)]);
var state_36089__$1 = state_36089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36089__$1,inst_36087);
} else {
return null;
}
}
}
}
});})(c__24785__auto__))
;
return ((function (switch__24720__auto__,c__24785__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__24721__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__24721__auto____0 = (function (){
var statearr_36096 = [null,null,null,null,null,null,null,null,null];
(statearr_36096[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__24721__auto__);

(statearr_36096[(1)] = (1));

return statearr_36096;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__24721__auto____1 = (function (state_36089){
while(true){
var ret_value__24722__auto__ = (function (){try{while(true){
var result__24723__auto__ = switch__24720__auto__.call(null,state_36089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24723__auto__;
}
break;
}
}catch (e36097){if((e36097 instanceof Object)){
var ex__24724__auto__ = e36097;
var statearr_36098_36100 = state_36089;
(statearr_36098_36100[(5)] = ex__24724__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36101 = state_36089;
state_36089 = G__36101;
continue;
} else {
return ret_value__24722__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__24721__auto__ = function(state_36089){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__24721__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__24721__auto____1.call(this,state_36089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__24721__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__24721__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__24721__auto__;
})()
;})(switch__24720__auto__,c__24785__auto__))
})();
var state__24787__auto__ = (function (){var statearr_36099 = f__24786__auto__.call(null);
(statearr_36099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24785__auto__);

return statearr_36099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24787__auto__);
});})(c__24785__auto__))
);

return c__24785__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map