// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50348){
var map__50349 = p__50348;
var map__50349__$1 = ((((!((map__50349 == null)))?((((map__50349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50349.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50349):map__50349);
var m = map__50349__$1;
var n = cljs.core.get.call(null,map__50349__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__50349__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50351_50373 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50352_50374 = null;
var count__50353_50375 = (0);
var i__50354_50376 = (0);
while(true){
if((i__50354_50376 < count__50353_50375)){
var f_50377 = cljs.core._nth.call(null,chunk__50352_50374,i__50354_50376);
cljs.core.println.call(null,"  ",f_50377);

var G__50378 = seq__50351_50373;
var G__50379 = chunk__50352_50374;
var G__50380 = count__50353_50375;
var G__50381 = (i__50354_50376 + (1));
seq__50351_50373 = G__50378;
chunk__50352_50374 = G__50379;
count__50353_50375 = G__50380;
i__50354_50376 = G__50381;
continue;
} else {
var temp__5457__auto___50382 = cljs.core.seq.call(null,seq__50351_50373);
if(temp__5457__auto___50382){
var seq__50351_50383__$1 = temp__5457__auto___50382;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50351_50383__$1)){
var c__41600__auto___50384 = cljs.core.chunk_first.call(null,seq__50351_50383__$1);
var G__50385 = cljs.core.chunk_rest.call(null,seq__50351_50383__$1);
var G__50386 = c__41600__auto___50384;
var G__50387 = cljs.core.count.call(null,c__41600__auto___50384);
var G__50388 = (0);
seq__50351_50373 = G__50385;
chunk__50352_50374 = G__50386;
count__50353_50375 = G__50387;
i__50354_50376 = G__50388;
continue;
} else {
var f_50389 = cljs.core.first.call(null,seq__50351_50383__$1);
cljs.core.println.call(null,"  ",f_50389);

var G__50390 = cljs.core.next.call(null,seq__50351_50383__$1);
var G__50391 = null;
var G__50392 = (0);
var G__50393 = (0);
seq__50351_50373 = G__50390;
chunk__50352_50374 = G__50391;
count__50353_50375 = G__50392;
i__50354_50376 = G__50393;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_50394 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__40669__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_50394);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_50394)))?cljs.core.second.call(null,arglists_50394):arglists_50394));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__50355_50395 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50356_50396 = null;
var count__50357_50397 = (0);
var i__50358_50398 = (0);
while(true){
if((i__50358_50398 < count__50357_50397)){
var vec__50359_50399 = cljs.core._nth.call(null,chunk__50356_50396,i__50358_50398);
var name_50400 = cljs.core.nth.call(null,vec__50359_50399,(0),null);
var map__50362_50401 = cljs.core.nth.call(null,vec__50359_50399,(1),null);
var map__50362_50402__$1 = ((((!((map__50362_50401 == null)))?((((map__50362_50401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50362_50401.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50362_50401):map__50362_50401);
var doc_50403 = cljs.core.get.call(null,map__50362_50402__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50404 = cljs.core.get.call(null,map__50362_50402__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_50400);

cljs.core.println.call(null," ",arglists_50404);

if(cljs.core.truth_(doc_50403)){
cljs.core.println.call(null," ",doc_50403);
} else {
}

var G__50405 = seq__50355_50395;
var G__50406 = chunk__50356_50396;
var G__50407 = count__50357_50397;
var G__50408 = (i__50358_50398 + (1));
seq__50355_50395 = G__50405;
chunk__50356_50396 = G__50406;
count__50357_50397 = G__50407;
i__50358_50398 = G__50408;
continue;
} else {
var temp__5457__auto___50409 = cljs.core.seq.call(null,seq__50355_50395);
if(temp__5457__auto___50409){
var seq__50355_50410__$1 = temp__5457__auto___50409;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50355_50410__$1)){
var c__41600__auto___50411 = cljs.core.chunk_first.call(null,seq__50355_50410__$1);
var G__50412 = cljs.core.chunk_rest.call(null,seq__50355_50410__$1);
var G__50413 = c__41600__auto___50411;
var G__50414 = cljs.core.count.call(null,c__41600__auto___50411);
var G__50415 = (0);
seq__50355_50395 = G__50412;
chunk__50356_50396 = G__50413;
count__50357_50397 = G__50414;
i__50358_50398 = G__50415;
continue;
} else {
var vec__50364_50416 = cljs.core.first.call(null,seq__50355_50410__$1);
var name_50417 = cljs.core.nth.call(null,vec__50364_50416,(0),null);
var map__50367_50418 = cljs.core.nth.call(null,vec__50364_50416,(1),null);
var map__50367_50419__$1 = ((((!((map__50367_50418 == null)))?((((map__50367_50418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50367_50418.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50367_50418):map__50367_50418);
var doc_50420 = cljs.core.get.call(null,map__50367_50419__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50421 = cljs.core.get.call(null,map__50367_50419__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_50417);

cljs.core.println.call(null," ",arglists_50421);

if(cljs.core.truth_(doc_50420)){
cljs.core.println.call(null," ",doc_50420);
} else {
}

var G__50422 = cljs.core.next.call(null,seq__50355_50410__$1);
var G__50423 = null;
var G__50424 = (0);
var G__50425 = (0);
seq__50355_50395 = G__50422;
chunk__50356_50396 = G__50423;
count__50357_50397 = G__50424;
i__50358_50398 = G__50425;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__50369 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__50370 = null;
var count__50371 = (0);
var i__50372 = (0);
while(true){
if((i__50372 < count__50371)){
var role = cljs.core._nth.call(null,chunk__50370,i__50372);
var temp__5457__auto___50426__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___50426__$1)){
var spec_50427 = temp__5457__auto___50426__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_50427));
} else {
}

var G__50428 = seq__50369;
var G__50429 = chunk__50370;
var G__50430 = count__50371;
var G__50431 = (i__50372 + (1));
seq__50369 = G__50428;
chunk__50370 = G__50429;
count__50371 = G__50430;
i__50372 = G__50431;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__50369);
if(temp__5457__auto____$1){
var seq__50369__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50369__$1)){
var c__41600__auto__ = cljs.core.chunk_first.call(null,seq__50369__$1);
var G__50432 = cljs.core.chunk_rest.call(null,seq__50369__$1);
var G__50433 = c__41600__auto__;
var G__50434 = cljs.core.count.call(null,c__41600__auto__);
var G__50435 = (0);
seq__50369 = G__50432;
chunk__50370 = G__50433;
count__50371 = G__50434;
i__50372 = G__50435;
continue;
} else {
var role = cljs.core.first.call(null,seq__50369__$1);
var temp__5457__auto___50436__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___50436__$2)){
var spec_50437 = temp__5457__auto___50436__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_50437));
} else {
}

var G__50438 = cljs.core.next.call(null,seq__50369__$1);
var G__50439 = null;
var G__50440 = (0);
var G__50441 = (0);
seq__50369 = G__50438;
chunk__50370 = G__50439;
count__50371 = G__50440;
i__50372 = G__50441;
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
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
