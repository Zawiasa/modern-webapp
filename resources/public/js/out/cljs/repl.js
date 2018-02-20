// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49337){
var map__49338 = p__49337;
var map__49338__$1 = ((((!((map__49338 == null)))?((((map__49338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49338.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49338):map__49338);
var m = map__49338__$1;
var n = cljs.core.get.call(null,map__49338__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__49338__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__49340_49362 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49341_49363 = null;
var count__49342_49364 = (0);
var i__49343_49365 = (0);
while(true){
if((i__49343_49365 < count__49342_49364)){
var f_49366 = cljs.core._nth.call(null,chunk__49341_49363,i__49343_49365);
cljs.core.println.call(null,"  ",f_49366);

var G__49367 = seq__49340_49362;
var G__49368 = chunk__49341_49363;
var G__49369 = count__49342_49364;
var G__49370 = (i__49343_49365 + (1));
seq__49340_49362 = G__49367;
chunk__49341_49363 = G__49368;
count__49342_49364 = G__49369;
i__49343_49365 = G__49370;
continue;
} else {
var temp__5457__auto___49371 = cljs.core.seq.call(null,seq__49340_49362);
if(temp__5457__auto___49371){
var seq__49340_49372__$1 = temp__5457__auto___49371;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49340_49372__$1)){
var c__41600__auto___49373 = cljs.core.chunk_first.call(null,seq__49340_49372__$1);
var G__49374 = cljs.core.chunk_rest.call(null,seq__49340_49372__$1);
var G__49375 = c__41600__auto___49373;
var G__49376 = cljs.core.count.call(null,c__41600__auto___49373);
var G__49377 = (0);
seq__49340_49362 = G__49374;
chunk__49341_49363 = G__49375;
count__49342_49364 = G__49376;
i__49343_49365 = G__49377;
continue;
} else {
var f_49378 = cljs.core.first.call(null,seq__49340_49372__$1);
cljs.core.println.call(null,"  ",f_49378);

var G__49379 = cljs.core.next.call(null,seq__49340_49372__$1);
var G__49380 = null;
var G__49381 = (0);
var G__49382 = (0);
seq__49340_49362 = G__49379;
chunk__49341_49363 = G__49380;
count__49342_49364 = G__49381;
i__49343_49365 = G__49382;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_49383 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__40669__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_49383);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_49383)))?cljs.core.second.call(null,arglists_49383):arglists_49383));
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
var seq__49344_49384 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49345_49385 = null;
var count__49346_49386 = (0);
var i__49347_49387 = (0);
while(true){
if((i__49347_49387 < count__49346_49386)){
var vec__49348_49388 = cljs.core._nth.call(null,chunk__49345_49385,i__49347_49387);
var name_49389 = cljs.core.nth.call(null,vec__49348_49388,(0),null);
var map__49351_49390 = cljs.core.nth.call(null,vec__49348_49388,(1),null);
var map__49351_49391__$1 = ((((!((map__49351_49390 == null)))?((((map__49351_49390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49351_49390.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49351_49390):map__49351_49390);
var doc_49392 = cljs.core.get.call(null,map__49351_49391__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49393 = cljs.core.get.call(null,map__49351_49391__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_49389);

cljs.core.println.call(null," ",arglists_49393);

if(cljs.core.truth_(doc_49392)){
cljs.core.println.call(null," ",doc_49392);
} else {
}

var G__49394 = seq__49344_49384;
var G__49395 = chunk__49345_49385;
var G__49396 = count__49346_49386;
var G__49397 = (i__49347_49387 + (1));
seq__49344_49384 = G__49394;
chunk__49345_49385 = G__49395;
count__49346_49386 = G__49396;
i__49347_49387 = G__49397;
continue;
} else {
var temp__5457__auto___49398 = cljs.core.seq.call(null,seq__49344_49384);
if(temp__5457__auto___49398){
var seq__49344_49399__$1 = temp__5457__auto___49398;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49344_49399__$1)){
var c__41600__auto___49400 = cljs.core.chunk_first.call(null,seq__49344_49399__$1);
var G__49401 = cljs.core.chunk_rest.call(null,seq__49344_49399__$1);
var G__49402 = c__41600__auto___49400;
var G__49403 = cljs.core.count.call(null,c__41600__auto___49400);
var G__49404 = (0);
seq__49344_49384 = G__49401;
chunk__49345_49385 = G__49402;
count__49346_49386 = G__49403;
i__49347_49387 = G__49404;
continue;
} else {
var vec__49353_49405 = cljs.core.first.call(null,seq__49344_49399__$1);
var name_49406 = cljs.core.nth.call(null,vec__49353_49405,(0),null);
var map__49356_49407 = cljs.core.nth.call(null,vec__49353_49405,(1),null);
var map__49356_49408__$1 = ((((!((map__49356_49407 == null)))?((((map__49356_49407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49356_49407.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49356_49407):map__49356_49407);
var doc_49409 = cljs.core.get.call(null,map__49356_49408__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49410 = cljs.core.get.call(null,map__49356_49408__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_49406);

cljs.core.println.call(null," ",arglists_49410);

if(cljs.core.truth_(doc_49409)){
cljs.core.println.call(null," ",doc_49409);
} else {
}

var G__49411 = cljs.core.next.call(null,seq__49344_49399__$1);
var G__49412 = null;
var G__49413 = (0);
var G__49414 = (0);
seq__49344_49384 = G__49411;
chunk__49345_49385 = G__49412;
count__49346_49386 = G__49413;
i__49347_49387 = G__49414;
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

var seq__49358 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__49359 = null;
var count__49360 = (0);
var i__49361 = (0);
while(true){
if((i__49361 < count__49360)){
var role = cljs.core._nth.call(null,chunk__49359,i__49361);
var temp__5457__auto___49415__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___49415__$1)){
var spec_49416 = temp__5457__auto___49415__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_49416));
} else {
}

var G__49417 = seq__49358;
var G__49418 = chunk__49359;
var G__49419 = count__49360;
var G__49420 = (i__49361 + (1));
seq__49358 = G__49417;
chunk__49359 = G__49418;
count__49360 = G__49419;
i__49361 = G__49420;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__49358);
if(temp__5457__auto____$1){
var seq__49358__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49358__$1)){
var c__41600__auto__ = cljs.core.chunk_first.call(null,seq__49358__$1);
var G__49421 = cljs.core.chunk_rest.call(null,seq__49358__$1);
var G__49422 = c__41600__auto__;
var G__49423 = cljs.core.count.call(null,c__41600__auto__);
var G__49424 = (0);
seq__49358 = G__49421;
chunk__49359 = G__49422;
count__49360 = G__49423;
i__49361 = G__49424;
continue;
} else {
var role = cljs.core.first.call(null,seq__49358__$1);
var temp__5457__auto___49425__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___49425__$2)){
var spec_49426 = temp__5457__auto___49425__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_49426));
} else {
}

var G__49427 = cljs.core.next.call(null,seq__49358__$1);
var G__49428 = null;
var G__49429 = (0);
var G__49430 = (0);
seq__49358 = G__49427;
chunk__49359 = G__49428;
count__49360 = G__49429;
i__49361 = G__49430;
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
