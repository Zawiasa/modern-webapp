// Compiled by ClojureScript 1.9.946 {}
goog.provide('demo.macros');
goog.require('cljs.core');
demo.macros.to_sub = (function demo$macros$to_sub(p__53140){
var vec__53141 = p__53140;
var binding = cljs.core.nth.call(null,vec__53141,(0),null);
var sub = cljs.core.nth.call(null,vec__53141,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41623__auto__ = binding;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41623__auto__);
})(),(function (){var x__41623__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("re-frame.core","subscribe","re-frame.core/subscribe",-774932115,null)),(function (){var x__41623__auto__ = sub;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41623__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41623__auto__);
})()))));
});
demo.macros.to_deref = (function demo$macros$to_deref(binding){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__41623__auto__ = binding;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41623__auto__);
})(),(function (){var x__41623__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null)),(function (){var x__41623__auto__ = binding;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41623__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41623__auto__);
})()))));
});
var ret__41994__auto___53148 = (function (){
demo.macros.with_subs = (function demo$macros$with_subs(var_args){
var args__41955__auto__ = [];
var len__41948__auto___53149 = arguments.length;
var i__41949__auto___53150 = (0);
while(true){
if((i__41949__auto___53150 < len__41948__auto___53149)){
args__41955__auto__.push((arguments[i__41949__auto___53150]));

var G__53151 = (i__41949__auto___53150 + (1));
i__41949__auto___53150 = G__53151;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((3) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((3)),(0),null)):null);
return demo.macros.with_subs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41956__auto__);
});

demo.macros.with_subs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__41623__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,demo.macros.to_sub,cljs.core.partition.call(null,(2),bindings)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41623__auto__);
})(),(function (){var x__41623__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__41623__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41623__auto__);
})(),(function (){var x__41623__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__41623__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,demo.macros.to_deref,cljs.core.take_nth.call(null,(2),bindings)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41623__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41623__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41623__auto__);
})())));
});

demo.macros.with_subs.cljs$lang$maxFixedArity = (3);

demo.macros.with_subs.cljs$lang$applyTo = (function (seq53144){
var G__53145 = cljs.core.first.call(null,seq53144);
var seq53144__$1 = cljs.core.next.call(null,seq53144);
var G__53146 = cljs.core.first.call(null,seq53144__$1);
var seq53144__$2 = cljs.core.next.call(null,seq53144__$1);
var G__53147 = cljs.core.first.call(null,seq53144__$2);
var seq53144__$3 = cljs.core.next.call(null,seq53144__$2);
return demo.macros.with_subs.cljs$core$IFn$_invoke$arity$variadic(G__53145,G__53146,G__53147,seq53144__$3);
});

return null;
})()
;
demo.macros.with_subs.cljs$lang$macro = true;


//# sourceMappingURL=macros.js.map
