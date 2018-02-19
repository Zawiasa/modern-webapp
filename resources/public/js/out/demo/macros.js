// Compiled by ClojureScript 1.7.122 {}
goog.provide('demo.macros');
goog.require('cljs.core');
demo.macros.to_sub = (function demo$macros$to_sub(p__28341){
var vec__28343 = p__28341;
var binding = cljs.core.nth.call(null,vec__28343,(0),null);
var sub = cljs.core.nth.call(null,vec__28343,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,binding),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("re-frame.core","subscribe","re-frame.core/subscribe",-774932115,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,sub)))))))));
});
demo.macros.to_deref = (function demo$macros$to_deref(binding){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,binding),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,binding)))))))));
});
demo.macros.with_subs = (function demo$macros$with_subs(var_args){
var args__22770__auto__ = [];
var len__22763__auto___28348 = arguments.length;
var i__22764__auto___28349 = (0);
while(true){
if((i__22764__auto___28349 < len__22763__auto___28348)){
args__22770__auto__.push((arguments[i__22764__auto___28349]));

var G__28350 = (i__22764__auto___28349 + (1));
i__22764__auto___28349 = G__28350;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((3) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((3)),(0))):null);
return demo.macros.with_subs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22771__auto__);
});

demo.macros.with_subs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,demo.macros.to_sub,cljs.core.partition.call(null,(2),bindings)))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,demo.macros.to_deref,cljs.core.take_nth.call(null,(2),bindings)))))))),body)))))))))));
});

demo.macros.with_subs.cljs$lang$maxFixedArity = (3);

demo.macros.with_subs.cljs$lang$applyTo = (function (seq28344){
var G__28345 = cljs.core.first.call(null,seq28344);
var seq28344__$1 = cljs.core.next.call(null,seq28344);
var G__28346 = cljs.core.first.call(null,seq28344__$1);
var seq28344__$2 = cljs.core.next.call(null,seq28344__$1);
var G__28347 = cljs.core.first.call(null,seq28344__$2);
var seq28344__$3 = cljs.core.next.call(null,seq28344__$2);
return demo.macros.with_subs.cljs$core$IFn$_invoke$arity$variadic(G__28345,G__28346,G__28347,seq28344__$3);
});

demo.macros.with_subs.cljs$lang$macro = true;

//# sourceMappingURL=macros.js.map