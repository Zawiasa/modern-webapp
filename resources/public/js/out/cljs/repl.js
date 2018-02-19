// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36118_36132 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36119_36133 = null;
var count__36120_36134 = (0);
var i__36121_36135 = (0);
while(true){
if((i__36121_36135 < count__36120_36134)){
var f_36136 = cljs.core._nth.call(null,chunk__36119_36133,i__36121_36135);
cljs.core.println.call(null,"  ",f_36136);

var G__36137 = seq__36118_36132;
var G__36138 = chunk__36119_36133;
var G__36139 = count__36120_36134;
var G__36140 = (i__36121_36135 + (1));
seq__36118_36132 = G__36137;
chunk__36119_36133 = G__36138;
count__36120_36134 = G__36139;
i__36121_36135 = G__36140;
continue;
} else {
var temp__4425__auto___36141 = cljs.core.seq.call(null,seq__36118_36132);
if(temp__4425__auto___36141){
var seq__36118_36142__$1 = temp__4425__auto___36141;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36118_36142__$1)){
var c__22508__auto___36143 = cljs.core.chunk_first.call(null,seq__36118_36142__$1);
var G__36144 = cljs.core.chunk_rest.call(null,seq__36118_36142__$1);
var G__36145 = c__22508__auto___36143;
var G__36146 = cljs.core.count.call(null,c__22508__auto___36143);
var G__36147 = (0);
seq__36118_36132 = G__36144;
chunk__36119_36133 = G__36145;
count__36120_36134 = G__36146;
i__36121_36135 = G__36147;
continue;
} else {
var f_36148 = cljs.core.first.call(null,seq__36118_36142__$1);
cljs.core.println.call(null,"  ",f_36148);

var G__36149 = cljs.core.next.call(null,seq__36118_36142__$1);
var G__36150 = null;
var G__36151 = (0);
var G__36152 = (0);
seq__36118_36132 = G__36149;
chunk__36119_36133 = G__36150;
count__36120_36134 = G__36151;
i__36121_36135 = G__36152;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36153 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__21705__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36153);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36153)))?cljs.core.second.call(null,arglists_36153):arglists_36153));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36122 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36123 = null;
var count__36124 = (0);
var i__36125 = (0);
while(true){
if((i__36125 < count__36124)){
var vec__36126 = cljs.core._nth.call(null,chunk__36123,i__36125);
var name = cljs.core.nth.call(null,vec__36126,(0),null);
var map__36127 = cljs.core.nth.call(null,vec__36126,(1),null);
var map__36127__$1 = ((((!((map__36127 == null)))?((((map__36127.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36127.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36127):map__36127);
var doc = cljs.core.get.call(null,map__36127__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__36127__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__36154 = seq__36122;
var G__36155 = chunk__36123;
var G__36156 = count__36124;
var G__36157 = (i__36125 + (1));
seq__36122 = G__36154;
chunk__36123 = G__36155;
count__36124 = G__36156;
i__36125 = G__36157;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__36122);
if(temp__4425__auto__){
var seq__36122__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36122__$1)){
var c__22508__auto__ = cljs.core.chunk_first.call(null,seq__36122__$1);
var G__36158 = cljs.core.chunk_rest.call(null,seq__36122__$1);
var G__36159 = c__22508__auto__;
var G__36160 = cljs.core.count.call(null,c__22508__auto__);
var G__36161 = (0);
seq__36122 = G__36158;
chunk__36123 = G__36159;
count__36124 = G__36160;
i__36125 = G__36161;
continue;
} else {
var vec__36129 = cljs.core.first.call(null,seq__36122__$1);
var name = cljs.core.nth.call(null,vec__36129,(0),null);
var map__36130 = cljs.core.nth.call(null,vec__36129,(1),null);
var map__36130__$1 = ((((!((map__36130 == null)))?((((map__36130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36130):map__36130);
var doc = cljs.core.get.call(null,map__36130__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__36130__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__36162 = cljs.core.next.call(null,seq__36122__$1);
var G__36163 = null;
var G__36164 = (0);
var G__36165 = (0);
seq__36122 = G__36162;
chunk__36123 = G__36163;
count__36124 = G__36164;
i__36125 = G__36165;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map