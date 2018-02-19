// Compiled by ClojureScript 1.7.122 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__22770__auto__ = [];
var len__22763__auto___32104 = arguments.length;
var i__22764__auto___32105 = (0);
while(true){
if((i__22764__auto___32105 < len__22763__auto___32104)){
args__22770__auto__.push((arguments[i__22764__auto___32105]));

var G__32106 = (i__22764__auto___32105 + (1));
i__22764__auto___32105 = G__32106;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((1) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((1)),(0))):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22771__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__32102){
var vec__32103 = p__32102;
var default$ = cljs.core.nth.call(null,vec__32103,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq32100){
var G__32101 = cljs.core.first.call(null,seq32100);
var seq32100__$1 = cljs.core.next.call(null,seq32100);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__32101,seq32100__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__22770__auto__ = [];
var len__22763__auto___32111 = arguments.length;
var i__22764__auto___32112 = (0);
while(true){
if((i__22764__auto___32112 < len__22763__auto___32111)){
args__22770__auto__.push((arguments[i__22764__auto___32112]));

var G__32113 = (i__22764__auto___32112 + (1));
i__22764__auto___32112 = G__32113;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((1) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((1)),(0))):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22771__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__32109){
var vec__32110 = p__32109;
var default$ = cljs.core.nth.call(null,vec__32110,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq32107){
var G__32108 = cljs.core.first.call(null,seq32107);
var seq32107__$1 = cljs.core.next.call(null,seq32107);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__32108,seq32107__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__22770__auto__ = [];
var len__22763__auto___32116 = arguments.length;
var i__22764__auto___32117 = (0);
while(true){
if((i__22764__auto___32117 < len__22763__auto___32116)){
args__22770__auto__.push((arguments[i__22764__auto___32117]));

var G__32118 = (i__22764__auto___32117 + (1));
i__22764__auto___32117 = G__32118;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((1) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((1)),(0))):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22771__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq32114){
var G__32115 = cljs.core.first.call(null,seq32114);
var seq32114__$1 = cljs.core.next.call(null,seq32114);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32115,seq32114__$1);
});
/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__32119_SHARP_){
return cljs.core.assoc_in.call(null,p1__32119_SHARP_,ks,v);
}));
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__22770__auto__ = [];
var len__22763__auto___32124 = arguments.length;
var i__22764__auto___32125 = (0);
while(true){
if((i__22764__auto___32125 < len__22763__auto___32124)){
args__22770__auto__.push((arguments[i__22764__auto___32125]));

var G__32126 = (i__22764__auto___32125 + (1));
i__22764__auto___32125 = G__32126;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((1) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((1)),(0))):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22771__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__32122){
var vec__32123 = p__32122;
var default$ = cljs.core.nth.call(null,vec__32123,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq32120){
var G__32121 = cljs.core.first.call(null,seq32120);
var seq32120__$1 = cljs.core.next.call(null,seq32120);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32121,seq32120__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__22770__auto__ = [];
var len__22763__auto___32131 = arguments.length;
var i__22764__auto___32132 = (0);
while(true){
if((i__22764__auto___32132 < len__22763__auto___32131)){
args__22770__auto__.push((arguments[i__22764__auto___32132]));

var G__32133 = (i__22764__auto___32132 + (1));
i__22764__auto___32132 = G__32133;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((1) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((1)),(0))):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22771__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__32129){
var vec__32130 = p__32129;
var default$ = cljs.core.nth.call(null,vec__32130,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq32127){
var G__32128 = cljs.core.first.call(null,seq32127);
var seq32127__$1 = cljs.core.next.call(null,seq32127);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32128,seq32127__$1);
});
/**
 * 'Updates' a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__22770__auto__ = [];
var len__22763__auto___32138 = arguments.length;
var i__22764__auto___32139 = (0);
while(true){
if((i__22764__auto___32139 < len__22763__auto___32138)){
args__22770__auto__.push((arguments[i__22764__auto___32139]));

var G__32140 = (i__22764__auto___32139 + (1));
i__22764__auto___32139 = G__32140;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((2) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((2)),(0))):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22771__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__32134_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__32134_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq32135){
var G__32136 = cljs.core.first.call(null,seq32135);
var seq32135__$1 = cljs.core.next.call(null,seq32135);
var G__32137 = cljs.core.first.call(null,seq32135__$1);
var seq32135__$2 = cljs.core.next.call(null,seq32135__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32136,G__32137,seq32135__$2);
});

//# sourceMappingURL=session.js.map