// Compiled by ClojureScript 1.7.122 {}
goog.provide('re_frame.utils');
goog.require('cljs.core');
goog.require('clojure.set');
re_frame.utils.default_loggers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),(function (p1__31955_SHARP_){
return console.log(p1__31955_SHARP_);
}),new cljs.core.Keyword(null,"warn","warn",-436710552),(function (p1__31956_SHARP_){
return console.warn(p1__31956_SHARP_);
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (p1__31957_SHARP_){
return console.error(p1__31957_SHARP_);
}),new cljs.core.Keyword(null,"group","group",582596132),(function (p1__31958_SHARP_){
if(cljs.core.truth_(console.group())){
return console.group(p1__31958_SHARP_);
} else {
return console.log(p1__31958_SHARP_);
}
}),new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382),(function (){
if(cljs.core.truth_(console.groupEnd())){
return console.groupEnd();
} else {
return null;
}
})], null);
re_frame.utils.loggers = cljs.core.atom.call(null,re_frame.utils.default_loggers);
/**
 * Change the set (subset?) of logging functions used by re-frame.
 *   'new-loggers' should be a map which looks like default-loggers
 */
re_frame.utils.set_loggers_BANG_ = (function re_frame$utils$set_loggers_BANG_(new_loggers){
if(cljs.core.empty_QMARK_.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_loggers)),cljs.core.set.call(null,cljs.core.keys.call(null,re_frame.utils.default_loggers))))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Unknown keys in new-loggers"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"difference","difference",-738334373,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"new-loggers","new-loggers",-1268568509,null))),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"default-loggers","default-loggers",387733219,null)))))))].join('')));
}

return cljs.core.swap_BANG_.call(null,re_frame.utils.loggers,cljs.core.merge,new_loggers);
});
re_frame.utils.log = (function re_frame$utils$log(var_args){
var args__22770__auto__ = [];
var len__22763__auto___31960 = arguments.length;
var i__22764__auto___31961 = (0);
while(true){
if((i__22764__auto___31961 < len__22763__auto___31960)){
args__22770__auto__.push((arguments[i__22764__auto___31961]));

var G__31962 = (i__22764__auto___31961 + (1));
i__22764__auto___31961 = G__31962;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((0) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((0)),(0))):null);
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(argseq__22771__auto__);
});

re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.log.cljs$lang$maxFixedArity = (0);

re_frame.utils.log.cljs$lang$applyTo = (function (seq31959){
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31959));
});
re_frame.utils.warn = (function re_frame$utils$warn(var_args){
var args__22770__auto__ = [];
var len__22763__auto___31964 = arguments.length;
var i__22764__auto___31965 = (0);
while(true){
if((i__22764__auto___31965 < len__22763__auto___31964)){
args__22770__auto__.push((arguments[i__22764__auto___31965]));

var G__31966 = (i__22764__auto___31965 + (1));
i__22764__auto___31965 = G__31966;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((0) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((0)),(0))):null);
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__22771__auto__);
});

re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"warn","warn",-436710552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.warn.cljs$lang$maxFixedArity = (0);

re_frame.utils.warn.cljs$lang$applyTo = (function (seq31963){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31963));
});
re_frame.utils.group = (function re_frame$utils$group(var_args){
var args__22770__auto__ = [];
var len__22763__auto___31968 = arguments.length;
var i__22764__auto___31969 = (0);
while(true){
if((i__22764__auto___31969 < len__22763__auto___31968)){
args__22770__auto__.push((arguments[i__22764__auto___31969]));

var G__31970 = (i__22764__auto___31969 + (1));
i__22764__auto___31969 = G__31970;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((0) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((0)),(0))):null);
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(argseq__22771__auto__);
});

re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.group.cljs$lang$maxFixedArity = (0);

re_frame.utils.group.cljs$lang$applyTo = (function (seq31967){
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31967));
});
re_frame.utils.groupEnd = (function re_frame$utils$groupEnd(var_args){
var args__22770__auto__ = [];
var len__22763__auto___31972 = arguments.length;
var i__22764__auto___31973 = (0);
while(true){
if((i__22764__auto___31973 < len__22763__auto___31972)){
args__22770__auto__.push((arguments[i__22764__auto___31973]));

var G__31974 = (i__22764__auto___31973 + (1));
i__22764__auto___31973 = G__31974;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((0) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((0)),(0))):null);
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(argseq__22771__auto__);
});

re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.groupEnd.cljs$lang$maxFixedArity = (0);

re_frame.utils.groupEnd.cljs$lang$applyTo = (function (seq31971){
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31971));
});
re_frame.utils.error = (function re_frame$utils$error(var_args){
var args__22770__auto__ = [];
var len__22763__auto___31976 = arguments.length;
var i__22764__auto___31977 = (0);
while(true){
if((i__22764__auto___31977 < len__22763__auto___31976)){
args__22770__auto__.push((arguments[i__22764__auto___31977]));

var G__31978 = (i__22764__auto___31977 + (1));
i__22764__auto___31977 = G__31978;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((0) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((0)),(0))):null);
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(argseq__22771__auto__);
});

re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.error.cljs$lang$maxFixedArity = (0);

re_frame.utils.error.cljs$lang$applyTo = (function (seq31975){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31975));
});
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return re_frame.utils.error.call(null,"re-frame: expected a vector event, but got: ",v);
}
});

//# sourceMappingURL=utils.js.map