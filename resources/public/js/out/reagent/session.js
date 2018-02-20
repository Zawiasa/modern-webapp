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
var len__41948__auto___52857 = arguments.length;
var i__41949__auto___52858 = (0);
while(true){
if((i__41949__auto___52858 < len__41948__auto___52857)){
args__41955__auto__.push((arguments[i__41949__auto___52858]));

var G__52859 = (i__41949__auto___52858 + (1));
i__41949__auto___52858 = G__52859;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((1) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41956__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__52853){
var vec__52854 = p__52853;
var default$ = cljs.core.nth.call(null,vec__52854,(0),null);
var temp_a = reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!((cljs.core.deref.call(null,temp_a) == null))){
return cljs.core.deref.call(null,temp_a);
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq52851){
var G__52852 = cljs.core.first.call(null,seq52851);
var seq52851__$1 = cljs.core.next.call(null,seq52851);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__52852,seq52851__$1);
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
var len__41948__auto___52866 = arguments.length;
var i__41949__auto___52867 = (0);
while(true){
if((i__41949__auto___52867 < len__41948__auto___52866)){
args__41955__auto__.push((arguments[i__41949__auto___52867]));

var G__52868 = (i__41949__auto___52867 + (1));
i__41949__auto___52867 = G__52868;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((1) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41956__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__52862){
var vec__52863 = p__52862;
var default$ = cljs.core.nth.call(null,vec__52863,(0),null);
var or__40669__auto__ = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq52860){
var G__52861 = cljs.core.first.call(null,seq52860);
var seq52860__$1 = cljs.core.next.call(null,seq52860);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__52861,seq52860__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__41955__auto__ = [];
var len__41948__auto___52871 = arguments.length;
var i__41949__auto___52872 = (0);
while(true){
if((i__41949__auto___52872 < len__41948__auto___52871)){
args__41955__auto__.push((arguments[i__41949__auto___52872]));

var G__52873 = (i__41949__auto___52872 + (1));
i__41949__auto___52872 = G__52873;
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

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq52869){
var G__52870 = cljs.core.first.call(null,seq52869);
var seq52869__$1 = cljs.core.next.call(null,seq52869);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52870,seq52869__$1);
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
var len__41948__auto___52880 = arguments.length;
var i__41949__auto___52881 = (0);
while(true){
if((i__41949__auto___52881 < len__41948__auto___52880)){
args__41955__auto__.push((arguments[i__41949__auto___52881]));

var G__52882 = (i__41949__auto___52881 + (1));
i__41949__auto___52881 = G__52882;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((1) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41956__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__52876){
var vec__52877 = p__52876;
var default$ = cljs.core.nth.call(null,vec__52877,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq52874){
var G__52875 = cljs.core.first.call(null,seq52874);
var seq52874__$1 = cljs.core.next.call(null,seq52874);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52875,seq52874__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__41955__auto__ = [];
var len__41948__auto___52889 = arguments.length;
var i__41949__auto___52890 = (0);
while(true){
if((i__41949__auto___52890 < len__41948__auto___52889)){
args__41955__auto__.push((arguments[i__41949__auto___52890]));

var G__52891 = (i__41949__auto___52890 + (1));
i__41949__auto___52890 = G__52891;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((1) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41956__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__52885){
var vec__52886 = p__52885;
var default$ = cljs.core.nth.call(null,vec__52886,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq52883){
var G__52884 = cljs.core.first.call(null,seq52883);
var seq52883__$1 = cljs.core.next.call(null,seq52883);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52884,seq52883__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__41955__auto__ = [];
var len__41948__auto___52896 = arguments.length;
var i__41949__auto___52897 = (0);
while(true){
if((i__41949__auto___52897 < len__41948__auto___52896)){
args__41955__auto__.push((arguments[i__41949__auto___52897]));

var G__52898 = (i__41949__auto___52897 + (1));
i__41949__auto___52897 = G__52898;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((2) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41956__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__52892_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__52892_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq52893){
var G__52894 = cljs.core.first.call(null,seq52893);
var seq52893__$1 = cljs.core.next.call(null,seq52893);
var G__52895 = cljs.core.first.call(null,seq52893__$1);
var seq52893__$2 = cljs.core.next.call(null,seq52893__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52894,G__52895,seq52893__$2);
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
var len__41948__auto___52903 = arguments.length;
var i__41949__auto___52904 = (0);
while(true){
if((i__41949__auto___52904 < len__41948__auto___52903)){
args__41955__auto__.push((arguments[i__41949__auto___52904]));

var G__52905 = (i__41949__auto___52904 + (1));
i__41949__auto___52904 = G__52905;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((2) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__41956__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__52899_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__52899_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq52900){
var G__52901 = cljs.core.first.call(null,seq52900);
var seq52900__$1 = cljs.core.next.call(null,seq52900);
var G__52902 = cljs.core.first.call(null,seq52900__$1);
var seq52900__$2 = cljs.core.next.call(null,seq52900__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52901,G__52902,seq52900__$2);
});


//# sourceMappingURL=session.js.map
