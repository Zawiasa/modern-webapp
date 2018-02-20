// Compiled by ClojureScript 1.9.946 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor.call(null,reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__41955__auto__ = [];
var len__41948__auto___52854 = arguments.length;
var i__41949__auto___52855 = (0);
while(true){
if((i__41949__auto___52855 < len__41948__auto___52854)){
args__41955__auto__.push((arguments[i__41949__auto___52855]));

var G__52856 = (i__41949__auto___52855 + (1));
i__41949__auto___52855 = G__52856;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((1) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41956__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__52850){
var vec__52851 = p__52850;
var default$ = cljs.core.nth.call(null,vec__52851,(0),null);
var temp_a = reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!((cljs.core.deref.call(null,temp_a) == null))){
return cljs.core.deref.call(null,temp_a);
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq52848){
var G__52849 = cljs.core.first.call(null,seq52848);
var seq52848__$1 = cljs.core.next.call(null,seq52848);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__52849,seq52848__$1);
});

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__41955__auto__ = [];
var len__41948__auto___52863 = arguments.length;
var i__41949__auto___52864 = (0);
while(true){
if((i__41949__auto___52864 < len__41948__auto___52863)){
args__41955__auto__.push((arguments[i__41949__auto___52864]));

var G__52865 = (i__41949__auto___52864 + (1));
i__41949__auto___52864 = G__52865;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((1) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41956__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__52859){
var vec__52860 = p__52859;
var default$ = cljs.core.nth.call(null,vec__52860,(0),null);
var or__40669__auto__ = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq52857){
var G__52858 = cljs.core.first.call(null,seq52857);
var seq52857__$1 = cljs.core.next.call(null,seq52857);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__52858,seq52857__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__41955__auto__ = [];
var len__41948__auto___52868 = arguments.length;
var i__41949__auto___52869 = (0);
while(true){
if((i__41949__auto___52869 < len__41948__auto___52868)){
args__41955__auto__.push((arguments[i__41949__auto___52869]));

var G__52870 = (i__41949__auto___52869 + (1));
i__41949__auto___52869 = G__52870;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((1) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41956__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq52866){
var G__52867 = cljs.core.first.call(null,seq52866);
var seq52866__$1 = cljs.core.next.call(null,seq52866);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52867,seq52866__$1);
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
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__41955__auto__ = [];
var len__41948__auto___52877 = arguments.length;
var i__41949__auto___52878 = (0);
while(true){
if((i__41949__auto___52878 < len__41948__auto___52877)){
args__41955__auto__.push((arguments[i__41949__auto___52878]));

var G__52879 = (i__41949__auto___52878 + (1));
i__41949__auto___52878 = G__52879;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((1) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41956__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__52873){
var vec__52874 = p__52873;
var default$ = cljs.core.nth.call(null,vec__52874,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq52871){
var G__52872 = cljs.core.first.call(null,seq52871);
var seq52871__$1 = cljs.core.next.call(null,seq52871);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52872,seq52871__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__41955__auto__ = [];
var len__41948__auto___52886 = arguments.length;
var i__41949__auto___52887 = (0);
while(true){
if((i__41949__auto___52887 < len__41948__auto___52886)){
args__41955__auto__.push((arguments[i__41949__auto___52887]));

var G__52888 = (i__41949__auto___52887 + (1));
i__41949__auto___52887 = G__52888;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((1) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41956__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__52882){
var vec__52883 = p__52882;
var default$ = cljs.core.nth.call(null,vec__52883,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq52880){
var G__52881 = cljs.core.first.call(null,seq52880);
var seq52880__$1 = cljs.core.next.call(null,seq52880);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52881,seq52880__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__41955__auto__ = [];
var len__41948__auto___52893 = arguments.length;
var i__41949__auto___52894 = (0);
while(true){
if((i__41949__auto___52894 < len__41948__auto___52893)){
args__41955__auto__.push((arguments[i__41949__auto___52894]));

var G__52895 = (i__41949__auto___52894 + (1));
i__41949__auto___52894 = G__52895;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((2) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41956__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__52889_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__52889_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq52890){
var G__52891 = cljs.core.first.call(null,seq52890);
var seq52890__$1 = cljs.core.next.call(null,seq52890);
var G__52892 = cljs.core.first.call(null,seq52890__$1);
var seq52890__$2 = cljs.core.next.call(null,seq52890__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52891,G__52892,seq52890__$2);
});

/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__41955__auto__ = [];
var len__41948__auto___52900 = arguments.length;
var i__41949__auto___52901 = (0);
while(true){
if((i__41949__auto___52901 < len__41948__auto___52900)){
args__41955__auto__.push((arguments[i__41949__auto___52901]));

var G__52902 = (i__41949__auto___52901 + (1));
i__41949__auto___52901 = G__52902;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((2) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41956__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__52896_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__52896_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq52897){
var G__52898 = cljs.core.first.call(null,seq52897);
var seq52897__$1 = cljs.core.next.call(null,seq52897);
var G__52899 = cljs.core.first.call(null,seq52897__$1);
var seq52897__$2 = cljs.core.next.call(null,seq52897__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52898,G__52899,seq52897__$2);
});


//# sourceMappingURL=session.js.map
