// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async32309 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32309 = (function (fn_handler,f,meta32310){
this.fn_handler = fn_handler;
this.f = f;
this.meta32310 = meta32310;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32309.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32311,meta32310__$1){
var self__ = this;
var _32311__$1 = this;
return (new cljs.core.async.t_cljs$core$async32309(self__.fn_handler,self__.f,meta32310__$1));
});

cljs.core.async.t_cljs$core$async32309.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32311){
var self__ = this;
var _32311__$1 = this;
return self__.meta32310;
});

cljs.core.async.t_cljs$core$async32309.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32309.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32309.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32309.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta32310","meta32310",-971114767,null)], null);
});

cljs.core.async.t_cljs$core$async32309.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32309.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32309";

cljs.core.async.t_cljs$core$async32309.cljs$lang$ctorPrWriter = (function (this__22303__auto__,writer__22304__auto__,opt__22305__auto__){
return cljs.core._write.call(null,writer__22304__auto__,"cljs.core.async/t_cljs$core$async32309");
});

cljs.core.async.__GT_t_cljs$core$async32309 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async32309(fn_handler__$1,f__$1,meta32310){
return (new cljs.core.async.t_cljs$core$async32309(fn_handler__$1,f__$1,meta32310));
});

}

return (new cljs.core.async.t_cljs$core$async32309(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args32314 = [];
var len__22763__auto___32317 = arguments.length;
var i__22764__auto___32318 = (0);
while(true){
if((i__22764__auto___32318 < len__22763__auto___32317)){
args32314.push((arguments[i__22764__auto___32318]));

var G__32319 = (i__22764__auto___32318 + (1));
i__22764__auto___32318 = G__32319;
continue;
} else {
}
break;
}

var G__32316 = args32314.length;
switch (G__32316) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32314.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args32321 = [];
var len__22763__auto___32324 = arguments.length;
var i__22764__auto___32325 = (0);
while(true){
if((i__22764__auto___32325 < len__22763__auto___32324)){
args32321.push((arguments[i__22764__auto___32325]));

var G__32326 = (i__22764__auto___32325 + (1));
i__22764__auto___32325 = G__32326;
continue;
} else {
}
break;
}

var G__32323 = args32321.length;
switch (G__32323) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32321.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_32328 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32328);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32328,ret){
return (function (){
return fn1.call(null,val_32328);
});})(val_32328,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args32329 = [];
var len__22763__auto___32332 = arguments.length;
var i__22764__auto___32333 = (0);
while(true){
if((i__22764__auto___32333 < len__22763__auto___32332)){
args32329.push((arguments[i__22764__auto___32333]));

var G__32334 = (i__22764__auto___32333 + (1));
i__22764__auto___32333 = G__32334;
continue;
} else {
}
break;
}

var G__32331 = args32329.length;
switch (G__32331) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32329.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__22608__auto___32336 = n;
var x_32337 = (0);
while(true){
if((x_32337 < n__22608__auto___32336)){
(a[x_32337] = (0));

var G__32338 = (x_32337 + (1));
x_32337 = G__32338;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__32339 = (i + (1));
i = G__32339;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async32343 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32343 = (function (alt_flag,flag,meta32344){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta32344 = meta32344;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32345,meta32344__$1){
var self__ = this;
var _32345__$1 = this;
return (new cljs.core.async.t_cljs$core$async32343(self__.alt_flag,self__.flag,meta32344__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32343.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32345){
var self__ = this;
var _32345__$1 = this;
return self__.meta32344;
});})(flag))
;

cljs.core.async.t_cljs$core$async32343.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32343.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32343.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32343.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32344","meta32344",1587303047,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32343.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32343.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32343";

cljs.core.async.t_cljs$core$async32343.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22303__auto__,writer__22304__auto__,opt__22305__auto__){
return cljs.core._write.call(null,writer__22304__auto__,"cljs.core.async/t_cljs$core$async32343");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async32343 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32343(alt_flag__$1,flag__$1,meta32344){
return (new cljs.core.async.t_cljs$core$async32343(alt_flag__$1,flag__$1,meta32344));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32343(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async32349 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32349 = (function (alt_handler,flag,cb,meta32350){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta32350 = meta32350;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32351,meta32350__$1){
var self__ = this;
var _32351__$1 = this;
return (new cljs.core.async.t_cljs$core$async32349(self__.alt_handler,self__.flag,self__.cb,meta32350__$1));
});

cljs.core.async.t_cljs$core$async32349.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32351){
var self__ = this;
var _32351__$1 = this;
return self__.meta32350;
});

cljs.core.async.t_cljs$core$async32349.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32349.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32349.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32349.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32350","meta32350",2098952999,null)], null);
});

cljs.core.async.t_cljs$core$async32349.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32349.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32349";

cljs.core.async.t_cljs$core$async32349.cljs$lang$ctorPrWriter = (function (this__22303__auto__,writer__22304__auto__,opt__22305__auto__){
return cljs.core._write.call(null,writer__22304__auto__,"cljs.core.async/t_cljs$core$async32349");
});

cljs.core.async.__GT_t_cljs$core$async32349 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32349(alt_handler__$1,flag__$1,cb__$1,meta32350){
return (new cljs.core.async.t_cljs$core$async32349(alt_handler__$1,flag__$1,cb__$1,meta32350));
});

}

return (new cljs.core.async.t_cljs$core$async32349(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32352_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32352_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32353_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32353_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__21705__auto__ = wport;
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32354 = (i + (1));
i = G__32354;
continue;
}
} else {
return null;
}
break;
}
})();
var or__21705__auto__ = ret;
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__21693__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__21693__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__21693__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__22770__auto__ = [];
var len__22763__auto___32360 = arguments.length;
var i__22764__auto___32361 = (0);
while(true){
if((i__22764__auto___32361 < len__22763__auto___32360)){
args__22770__auto__.push((arguments[i__22764__auto___32361]));

var G__32362 = (i__22764__auto___32361 + (1));
i__22764__auto___32361 = G__32362;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((1) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22771__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32357){
var map__32358 = p__32357;
var map__32358__$1 = ((((!((map__32358 == null)))?((((map__32358.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32358.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32358):map__32358);
var opts = map__32358__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32355){
var G__32356 = cljs.core.first.call(null,seq32355);
var seq32355__$1 = cljs.core.next.call(null,seq32355);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32356,seq32355__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args32363 = [];
var len__22763__auto___32413 = arguments.length;
var i__22764__auto___32414 = (0);
while(true){
if((i__22764__auto___32414 < len__22763__auto___32413)){
args32363.push((arguments[i__22764__auto___32414]));

var G__32415 = (i__22764__auto___32414 + (1));
i__22764__auto___32414 = G__32415;
continue;
} else {
}
break;
}

var G__32365 = args32363.length;
switch (G__32365) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32363.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24785__auto___32417 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24785__auto___32417){
return (function (){
var f__24786__auto__ = (function (){var switch__24720__auto__ = ((function (c__24785__auto___32417){
return (function (state_32389){
var state_val_32390 = (state_32389[(1)]);
if((state_val_32390 === (7))){
var inst_32385 = (state_32389[(2)]);
var state_32389__$1 = state_32389;
var statearr_32391_32418 = state_32389__$1;
(statearr_32391_32418[(2)] = inst_32385);

(statearr_32391_32418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (1))){
var state_32389__$1 = state_32389;
var statearr_32392_32419 = state_32389__$1;
(statearr_32392_32419[(2)] = null);

(statearr_32392_32419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (4))){
var inst_32368 = (state_32389[(7)]);
var inst_32368__$1 = (state_32389[(2)]);
var inst_32369 = (inst_32368__$1 == null);
var state_32389__$1 = (function (){var statearr_32393 = state_32389;
(statearr_32393[(7)] = inst_32368__$1);

return statearr_32393;
})();
if(cljs.core.truth_(inst_32369)){
var statearr_32394_32420 = state_32389__$1;
(statearr_32394_32420[(1)] = (5));

} else {
var statearr_32395_32421 = state_32389__$1;
(statearr_32395_32421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (13))){
var state_32389__$1 = state_32389;
var statearr_32396_32422 = state_32389__$1;
(statearr_32396_32422[(2)] = null);

(statearr_32396_32422[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (6))){
var inst_32368 = (state_32389[(7)]);
var state_32389__$1 = state_32389;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32389__$1,(11),to,inst_32368);
} else {
if((state_val_32390 === (3))){
var inst_32387 = (state_32389[(2)]);
var state_32389__$1 = state_32389;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32389__$1,inst_32387);
} else {
if((state_val_32390 === (12))){
var state_32389__$1 = state_32389;
var statearr_32397_32423 = state_32389__$1;
(statearr_32397_32423[(2)] = null);

(statearr_32397_32423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (2))){
var state_32389__$1 = state_32389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32389__$1,(4),from);
} else {
if((state_val_32390 === (11))){
var inst_32378 = (state_32389[(2)]);
var state_32389__$1 = state_32389;
if(cljs.core.truth_(inst_32378)){
var statearr_32398_32424 = state_32389__$1;
(statearr_32398_32424[(1)] = (12));

} else {
var statearr_32399_32425 = state_32389__$1;
(statearr_32399_32425[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (9))){
var state_32389__$1 = state_32389;
var statearr_32400_32426 = state_32389__$1;
(statearr_32400_32426[(2)] = null);

(statearr_32400_32426[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (5))){
var state_32389__$1 = state_32389;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32401_32427 = state_32389__$1;
(statearr_32401_32427[(1)] = (8));

} else {
var statearr_32402_32428 = state_32389__$1;
(statearr_32402_32428[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (14))){
var inst_32383 = (state_32389[(2)]);
var state_32389__$1 = state_32389;
var statearr_32403_32429 = state_32389__$1;
(statearr_32403_32429[(2)] = inst_32383);

(statearr_32403_32429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (10))){
var inst_32375 = (state_32389[(2)]);
var state_32389__$1 = state_32389;
var statearr_32404_32430 = state_32389__$1;
(statearr_32404_32430[(2)] = inst_32375);

(statearr_32404_32430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (8))){
var inst_32372 = cljs.core.async.close_BANG_.call(null,to);
var state_32389__$1 = state_32389;
var statearr_32405_32431 = state_32389__$1;
(statearr_32405_32431[(2)] = inst_32372);

(statearr_32405_32431[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24785__auto___32417))
;
return ((function (switch__24720__auto__,c__24785__auto___32417){
return (function() {
var cljs$core$async$state_machine__24721__auto__ = null;
var cljs$core$async$state_machine__24721__auto____0 = (function (){
var statearr_32409 = [null,null,null,null,null,null,null,null];
(statearr_32409[(0)] = cljs$core$async$state_machine__24721__auto__);

(statearr_32409[(1)] = (1));

return statearr_32409;
});
var cljs$core$async$state_machine__24721__auto____1 = (function (state_32389){
while(true){
var ret_value__24722__auto__ = (function (){try{while(true){
var result__24723__auto__ = switch__24720__auto__.call(null,state_32389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24723__auto__;
}
break;
}
}catch (e32410){if((e32410 instanceof Object)){
var ex__24724__auto__ = e32410;
var statearr_32411_32432 = state_32389;
(statearr_32411_32432[(5)] = ex__24724__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32433 = state_32389;
state_32389 = G__32433;
continue;
} else {
return ret_value__24722__auto__;
}
break;
}
});
cljs$core$async$state_machine__24721__auto__ = function(state_32389){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24721__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24721__auto____1.call(this,state_32389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24721__auto____0;
cljs$core$async$state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24721__auto____1;
return cljs$core$async$state_machine__24721__auto__;
})()
;})(switch__24720__auto__,c__24785__auto___32417))
})();
var state__24787__auto__ = (function (){var statearr_32412 = f__24786__auto__.call(null);
(statearr_32412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24785__auto___32417);

return statearr_32412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24787__auto__);
});})(c__24785__auto___32417))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__32617){
var vec__32618 = p__32617;
var v = cljs.core.nth.call(null,vec__32618,(0),null);
var p = cljs.core.nth.call(null,vec__32618,(1),null);
var job = vec__32618;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24785__auto___32800 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24785__auto___32800,res,vec__32618,v,p,job,jobs,results){
return (function (){
var f__24786__auto__ = (function (){var switch__24720__auto__ = ((function (c__24785__auto___32800,res,vec__32618,v,p,job,jobs,results){
return (function (state_32623){
var state_val_32624 = (state_32623[(1)]);
if((state_val_32624 === (1))){
var state_32623__$1 = state_32623;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32623__$1,(2),res,v);
} else {
if((state_val_32624 === (2))){
var inst_32620 = (state_32623[(2)]);
var inst_32621 = cljs.core.async.close_BANG_.call(null,res);
var state_32623__$1 = (function (){var statearr_32625 = state_32623;
(statearr_32625[(7)] = inst_32620);

return statearr_32625;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32623__$1,inst_32621);
} else {
return null;
}
}
});})(c__24785__auto___32800,res,vec__32618,v,p,job,jobs,results))
;
return ((function (switch__24720__auto__,c__24785__auto___32800,res,vec__32618,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24721__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24721__auto____0 = (function (){
var statearr_32629 = [null,null,null,null,null,null,null,null];
(statearr_32629[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24721__auto__);

(statearr_32629[(1)] = (1));

return statearr_32629;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24721__auto____1 = (function (state_32623){
while(true){
var ret_value__24722__auto__ = (function (){try{while(true){
var result__24723__auto__ = switch__24720__auto__.call(null,state_32623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24723__auto__;
}
break;
}
}catch (e32630){if((e32630 instanceof Object)){
var ex__24724__auto__ = e32630;
var statearr_32631_32801 = state_32623;
(statearr_32631_32801[(5)] = ex__24724__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32802 = state_32623;
state_32623 = G__32802;
continue;
} else {
return ret_value__24722__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24721__auto__ = function(state_32623){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24721__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24721__auto____1.call(this,state_32623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24721__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24721__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24721__auto__;
})()
;})(switch__24720__auto__,c__24785__auto___32800,res,vec__32618,v,p,job,jobs,results))
})();
var state__24787__auto__ = (function (){var statearr_32632 = f__24786__auto__.call(null);
(statearr_32632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24785__auto___32800);

return statearr_32632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24787__auto__);
});})(c__24785__auto___32800,res,vec__32618,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32633){
var vec__32634 = p__32633;
var v = cljs.core.nth.call(null,vec__32634,(0),null);
var p = cljs.core.nth.call(null,vec__32634,(1),null);
var job = vec__32634;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__22608__auto___32803 = n;
var __32804 = (0);
while(true){
if((__32804 < n__22608__auto___32803)){
var G__32635_32805 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__32635_32805) {
case "compute":
var c__24785__auto___32807 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32804,c__24785__auto___32807,G__32635_32805,n__22608__auto___32803,jobs,results,process,async){
return (function (){
var f__24786__auto__ = (function (){var switch__24720__auto__ = ((function (__32804,c__24785__auto___32807,G__32635_32805,n__22608__auto___32803,jobs,results,process,async){
return (function (state_32648){
var state_val_32649 = (state_32648[(1)]);
if((state_val_32649 === (1))){
var state_32648__$1 = state_32648;
var statearr_32650_32808 = state_32648__$1;
(statearr_32650_32808[(2)] = null);

(statearr_32650_32808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32649 === (2))){
var state_32648__$1 = state_32648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32648__$1,(4),jobs);
} else {
if((state_val_32649 === (3))){
var inst_32646 = (state_32648[(2)]);
var state_32648__$1 = state_32648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32648__$1,inst_32646);
} else {
if((state_val_32649 === (4))){
var inst_32638 = (state_32648[(2)]);
var inst_32639 = process.call(null,inst_32638);
var state_32648__$1 = state_32648;
if(cljs.core.truth_(inst_32639)){
var statearr_32651_32809 = state_32648__$1;
(statearr_32651_32809[(1)] = (5));

} else {
var statearr_32652_32810 = state_32648__$1;
(statearr_32652_32810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32649 === (5))){
var state_32648__$1 = state_32648;
var statearr_32653_32811 = state_32648__$1;
(statearr_32653_32811[(2)] = null);

(statearr_32653_32811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32649 === (6))){
var state_32648__$1 = state_32648;
var statearr_32654_32812 = state_32648__$1;
(statearr_32654_32812[(2)] = null);

(statearr_32654_32812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32649 === (7))){
var inst_32644 = (state_32648[(2)]);
var state_32648__$1 = state_32648;
var statearr_32655_32813 = state_32648__$1;
(statearr_32655_32813[(2)] = inst_32644);

(statearr_32655_32813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32804,c__24785__auto___32807,G__32635_32805,n__22608__auto___32803,jobs,results,process,async))
;
return ((function (__32804,switch__24720__auto__,c__24785__auto___32807,G__32635_32805,n__22608__auto___32803,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24721__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24721__auto____0 = (function (){
var statearr_32659 = [null,null,null,null,null,null,null];
(statearr_32659[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24721__auto__);

(statearr_32659[(1)] = (1));

return statearr_32659;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24721__auto____1 = (function (state_32648){
while(true){
var ret_value__24722__auto__ = (function (){try{while(true){
var result__24723__auto__ = switch__24720__auto__.call(null,state_32648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24723__auto__;
}
break;
}
}catch (e32660){if((e32660 instanceof Object)){
var ex__24724__auto__ = e32660;
var statearr_32661_32814 = state_32648;
(statearr_32661_32814[(5)] = ex__24724__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32815 = state_32648;
state_32648 = G__32815;
continue;
} else {
return ret_value__24722__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24721__auto__ = function(state_32648){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24721__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24721__auto____1.call(this,state_32648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24721__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24721__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24721__auto__;
})()
;})(__32804,switch__24720__auto__,c__24785__auto___32807,G__32635_32805,n__22608__auto___32803,jobs,results,process,async))
})();
var state__24787__auto__ = (function (){var statearr_32662 = f__24786__auto__.call(null);
(statearr_32662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24785__auto___32807);

return statearr_32662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24787__auto__);
});})(__32804,c__24785__auto___32807,G__32635_32805,n__22608__auto___32803,jobs,results,process,async))
);


break;
case "async":
var c__24785__auto___32816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32804,c__24785__auto___32816,G__32635_32805,n__22608__auto___32803,jobs,results,process,async){
return (function (){
var f__24786__auto__ = (function (){var switch__24720__auto__ = ((function (__32804,c__24785__auto___32816,G__32635_32805,n__22608__auto___32803,jobs,results,process,async){
return (function (state_32675){
var state_val_32676 = (state_32675[(1)]);
if((state_val_32676 === (1))){
var state_32675__$1 = state_32675;
var statearr_32677_32817 = state_32675__$1;
(statearr_32677_32817[(2)] = null);

(statearr_32677_32817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32676 === (2))){
var state_32675__$1 = state_32675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32675__$1,(4),jobs);
} else {
if((state_val_32676 === (3))){
var inst_32673 = (state_32675[(2)]);
var state_32675__$1 = state_32675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32675__$1,inst_32673);
} else {
if((state_val_32676 === (4))){
var inst_32665 = (state_32675[(2)]);
var inst_32666 = async.call(null,inst_32665);
var state_32675__$1 = state_32675;
if(cljs.core.truth_(inst_32666)){
var statearr_32678_32818 = state_32675__$1;
(statearr_32678_32818[(1)] = (5));

} else {
var statearr_32679_32819 = state_32675__$1;
(statearr_32679_32819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32676 === (5))){
var state_32675__$1 = state_32675;
var statearr_32680_32820 = state_32675__$1;
(statearr_32680_32820[(2)] = null);

(statearr_32680_32820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32676 === (6))){
var state_32675__$1 = state_32675;
var statearr_32681_32821 = state_32675__$1;
(statearr_32681_32821[(2)] = null);

(statearr_32681_32821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32676 === (7))){
var inst_32671 = (state_32675[(2)]);
var state_32675__$1 = state_32675;
var statearr_32682_32822 = state_32675__$1;
(statearr_32682_32822[(2)] = inst_32671);

(statearr_32682_32822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32804,c__24785__auto___32816,G__32635_32805,n__22608__auto___32803,jobs,results,process,async))
;
return ((function (__32804,switch__24720__auto__,c__24785__auto___32816,G__32635_32805,n__22608__auto___32803,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24721__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24721__auto____0 = (function (){
var statearr_32686 = [null,null,null,null,null,null,null];
(statearr_32686[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24721__auto__);

(statearr_32686[(1)] = (1));

return statearr_32686;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24721__auto____1 = (function (state_32675){
while(true){
var ret_value__24722__auto__ = (function (){try{while(true){
var result__24723__auto__ = switch__24720__auto__.call(null,state_32675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24723__auto__;
}
break;
}
}catch (e32687){if((e32687 instanceof Object)){
var ex__24724__auto__ = e32687;
var statearr_32688_32823 = state_32675;
(statearr_32688_32823[(5)] = ex__24724__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32824 = state_32675;
state_32675 = G__32824;
continue;
} else {
return ret_value__24722__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24721__auto__ = function(state_32675){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24721__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24721__auto____1.call(this,state_32675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24721__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24721__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24721__auto__;
})()
;})(__32804,switch__24720__auto__,c__24785__auto___32816,G__32635_32805,n__22608__auto___32803,jobs,results,process,async))
})();
var state__24787__auto__ = (function (){var statearr_32689 = f__24786__auto__.call(null);
(statearr_32689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24785__auto___32816);

return statearr_32689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24787__auto__);
});})(__32804,c__24785__auto___32816,G__32635_32805,n__22608__auto___32803,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__32825 = (__32804 + (1));
__32804 = G__32825;
continue;
} else {
}
break;
}

var c__24785__auto___32826 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24785__auto___32826,jobs,results,process,async){
return (function (){
var f__24786__auto__ = (function (){var switch__24720__auto__ = ((function (c__24785__auto___32826,jobs,results,process,async){
return (function (state_32711){
var state_val_32712 = (state_32711[(1)]);
if((state_val_32712 === (1))){
var state_32711__$1 = state_32711;
var statearr_32713_32827 = state_32711__$1;
(statearr_32713_32827[(2)] = null);

(statearr_32713_32827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32712 === (2))){
var state_32711__$1 = state_32711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32711__$1,(4),from);
} else {
if((state_val_32712 === (3))){
var inst_32709 = (state_32711[(2)]);
var state_32711__$1 = state_32711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32711__$1,inst_32709);
} else {
if((state_val_32712 === (4))){
var inst_32692 = (state_32711[(7)]);
var inst_32692__$1 = (state_32711[(2)]);
var inst_32693 = (inst_32692__$1 == null);
var state_32711__$1 = (function (){var statearr_32714 = state_32711;
(statearr_32714[(7)] = inst_32692__$1);

return statearr_32714;
})();
if(cljs.core.truth_(inst_32693)){
var statearr_32715_32828 = state_32711__$1;
(statearr_32715_32828[(1)] = (5));

} else {
var statearr_32716_32829 = state_32711__$1;
(statearr_32716_32829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32712 === (5))){
var inst_32695 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32711__$1 = state_32711;
var statearr_32717_32830 = state_32711__$1;
(statearr_32717_32830[(2)] = inst_32695);

(statearr_32717_32830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32712 === (6))){
var inst_32692 = (state_32711[(7)]);
var inst_32697 = (state_32711[(8)]);
var inst_32697__$1 = cljs.core.async.chan.call(null,(1));
var inst_32698 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32699 = [inst_32692,inst_32697__$1];
var inst_32700 = (new cljs.core.PersistentVector(null,2,(5),inst_32698,inst_32699,null));
var state_32711__$1 = (function (){var statearr_32718 = state_32711;
(statearr_32718[(8)] = inst_32697__$1);

return statearr_32718;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32711__$1,(8),jobs,inst_32700);
} else {
if((state_val_32712 === (7))){
var inst_32707 = (state_32711[(2)]);
var state_32711__$1 = state_32711;
var statearr_32719_32831 = state_32711__$1;
(statearr_32719_32831[(2)] = inst_32707);

(statearr_32719_32831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32712 === (8))){
var inst_32697 = (state_32711[(8)]);
var inst_32702 = (state_32711[(2)]);
var state_32711__$1 = (function (){var statearr_32720 = state_32711;
(statearr_32720[(9)] = inst_32702);

return statearr_32720;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32711__$1,(9),results,inst_32697);
} else {
if((state_val_32712 === (9))){
var inst_32704 = (state_32711[(2)]);
var state_32711__$1 = (function (){var statearr_32721 = state_32711;
(statearr_32721[(10)] = inst_32704);

return statearr_32721;
})();
var statearr_32722_32832 = state_32711__$1;
(statearr_32722_32832[(2)] = null);

(statearr_32722_32832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__24785__auto___32826,jobs,results,process,async))
;
return ((function (switch__24720__auto__,c__24785__auto___32826,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24721__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24721__auto____0 = (function (){
var statearr_32726 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32726[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24721__auto__);

(statearr_32726[(1)] = (1));

return statearr_32726;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24721__auto____1 = (function (state_32711){
while(true){
var ret_value__24722__auto__ = (function (){try{while(true){
var result__24723__auto__ = switch__24720__auto__.call(null,state_32711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24723__auto__;
}
break;
}
}catch (e32727){if((e32727 instanceof Object)){
var ex__24724__auto__ = e32727;
var statearr_32728_32833 = state_32711;
(statearr_32728_32833[(5)] = ex__24724__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32834 = state_32711;
state_32711 = G__32834;
continue;
} else {
return ret_value__24722__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24721__auto__ = function(state_32711){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24721__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24721__auto____1.call(this,state_32711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24721__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24721__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24721__auto__;
})()
;})(switch__24720__auto__,c__24785__auto___32826,jobs,results,process,async))
})();
var state__24787__auto__ = (function (){var statearr_32729 = f__24786__auto__.call(null);
(statearr_32729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24785__auto___32826);

return statearr_32729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24787__auto__);
});})(c__24785__auto___32826,jobs,results,process,async))
);


var c__24785__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24785__auto__,jobs,results,process,async){
return (function (){
var f__24786__auto__ = (function (){var switch__24720__auto__ = ((function (c__24785__auto__,jobs,results,process,async){
return (function (state_32767){
var state_val_32768 = (state_32767[(1)]);
if((state_val_32768 === (7))){
var inst_32763 = (state_32767[(2)]);
var state_32767__$1 = state_32767;
var statearr_32769_32835 = state_32767__$1;
(statearr_32769_32835[(2)] = inst_32763);

(statearr_32769_32835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (20))){
var state_32767__$1 = state_32767;
var statearr_32770_32836 = state_32767__$1;
(statearr_32770_32836[(2)] = null);

(statearr_32770_32836[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (1))){
var state_32767__$1 = state_32767;
var statearr_32771_32837 = state_32767__$1;
(statearr_32771_32837[(2)] = null);

(statearr_32771_32837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (4))){
var inst_32732 = (state_32767[(7)]);
var inst_32732__$1 = (state_32767[(2)]);
var inst_32733 = (inst_32732__$1 == null);
var state_32767__$1 = (function (){var statearr_32772 = state_32767;
(statearr_32772[(7)] = inst_32732__$1);

return statearr_32772;
})();
if(cljs.core.truth_(inst_32733)){
var statearr_32773_32838 = state_32767__$1;
(statearr_32773_32838[(1)] = (5));

} else {
var statearr_32774_32839 = state_32767__$1;
(statearr_32774_32839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (15))){
var inst_32745 = (state_32767[(8)]);
var state_32767__$1 = state_32767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32767__$1,(18),to,inst_32745);
} else {
if((state_val_32768 === (21))){
var inst_32758 = (state_32767[(2)]);
var state_32767__$1 = state_32767;
var statearr_32775_32840 = state_32767__$1;
(statearr_32775_32840[(2)] = inst_32758);

(statearr_32775_32840[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (13))){
var inst_32760 = (state_32767[(2)]);
var state_32767__$1 = (function (){var statearr_32776 = state_32767;
(statearr_32776[(9)] = inst_32760);

return statearr_32776;
})();
var statearr_32777_32841 = state_32767__$1;
(statearr_32777_32841[(2)] = null);

(statearr_32777_32841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (6))){
var inst_32732 = (state_32767[(7)]);
var state_32767__$1 = state_32767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32767__$1,(11),inst_32732);
} else {
if((state_val_32768 === (17))){
var inst_32753 = (state_32767[(2)]);
var state_32767__$1 = state_32767;
if(cljs.core.truth_(inst_32753)){
var statearr_32778_32842 = state_32767__$1;
(statearr_32778_32842[(1)] = (19));

} else {
var statearr_32779_32843 = state_32767__$1;
(statearr_32779_32843[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (3))){
var inst_32765 = (state_32767[(2)]);
var state_32767__$1 = state_32767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32767__$1,inst_32765);
} else {
if((state_val_32768 === (12))){
var inst_32742 = (state_32767[(10)]);
var state_32767__$1 = state_32767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32767__$1,(14),inst_32742);
} else {
if((state_val_32768 === (2))){
var state_32767__$1 = state_32767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32767__$1,(4),results);
} else {
if((state_val_32768 === (19))){
var state_32767__$1 = state_32767;
var statearr_32780_32844 = state_32767__$1;
(statearr_32780_32844[(2)] = null);

(statearr_32780_32844[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (11))){
var inst_32742 = (state_32767[(2)]);
var state_32767__$1 = (function (){var statearr_32781 = state_32767;
(statearr_32781[(10)] = inst_32742);

return statearr_32781;
})();
var statearr_32782_32845 = state_32767__$1;
(statearr_32782_32845[(2)] = null);

(statearr_32782_32845[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (9))){
var state_32767__$1 = state_32767;
var statearr_32783_32846 = state_32767__$1;
(statearr_32783_32846[(2)] = null);

(statearr_32783_32846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (5))){
var state_32767__$1 = state_32767;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32784_32847 = state_32767__$1;
(statearr_32784_32847[(1)] = (8));

} else {
var statearr_32785_32848 = state_32767__$1;
(statearr_32785_32848[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (14))){
var inst_32747 = (state_32767[(11)]);
var inst_32745 = (state_32767[(8)]);
var inst_32745__$1 = (state_32767[(2)]);
var inst_32746 = (inst_32745__$1 == null);
var inst_32747__$1 = cljs.core.not.call(null,inst_32746);
var state_32767__$1 = (function (){var statearr_32786 = state_32767;
(statearr_32786[(11)] = inst_32747__$1);

(statearr_32786[(8)] = inst_32745__$1);

return statearr_32786;
})();
if(inst_32747__$1){
var statearr_32787_32849 = state_32767__$1;
(statearr_32787_32849[(1)] = (15));

} else {
var statearr_32788_32850 = state_32767__$1;
(statearr_32788_32850[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (16))){
var inst_32747 = (state_32767[(11)]);
var state_32767__$1 = state_32767;
var statearr_32789_32851 = state_32767__$1;
(statearr_32789_32851[(2)] = inst_32747);

(statearr_32789_32851[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (10))){
var inst_32739 = (state_32767[(2)]);
var state_32767__$1 = state_32767;
var statearr_32790_32852 = state_32767__$1;
(statearr_32790_32852[(2)] = inst_32739);

(statearr_32790_32852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (18))){
var inst_32750 = (state_32767[(2)]);
var state_32767__$1 = state_32767;
var statearr_32791_32853 = state_32767__$1;
(statearr_32791_32853[(2)] = inst_32750);

(statearr_32791_32853[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (8))){
var inst_32736 = cljs.core.async.close_BANG_.call(null,to);
var state_32767__$1 = state_32767;
var statearr_32792_32854 = state_32767__$1;
(statearr_32792_32854[(2)] = inst_32736);

(statearr_32792_32854[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24785__auto__,jobs,results,process,async))
;
return ((function (switch__24720__auto__,c__24785__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24721__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24721__auto____0 = (function (){
var statearr_32796 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32796[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24721__auto__);

(statearr_32796[(1)] = (1));

return statearr_32796;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24721__auto____1 = (function (state_32767){
while(true){
var ret_value__24722__auto__ = (function (){try{while(true){
var result__24723__auto__ = switch__24720__auto__.call(null,state_32767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24723__auto__;
}
break;
}
}catch (e32797){if((e32797 instanceof Object)){
var ex__24724__auto__ = e32797;
var statearr_32798_32855 = state_32767;
(statearr_32798_32855[(5)] = ex__24724__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32856 = state_32767;
state_32767 = G__32856;
continue;
} else {
return ret_value__24722__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24721__auto__ = function(state_32767){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24721__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24721__auto____1.call(this,state_32767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24721__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24721__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24721__auto__;
})()
;})(switch__24720__auto__,c__24785__auto__,jobs,results,process,async))
})();
var state__24787__auto__ = (function (){var statearr_32799 = f__24786__auto__.call(null);
(statearr_32799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24785__auto__);

return statearr_32799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24787__auto__);
});})(c__24785__auto__,jobs,results,process,async))
);

return c__24785__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args32857 = [];
var len__22763__auto___32860 = arguments.length;
var i__22764__auto___32861 = (0);
while(true){
if((i__22764__auto___32861 < len__22763__auto___32860)){
args32857.push((arguments[i__22764__auto___32861]));

var G__32862 = (i__22764__auto___32861 + (1));
i__22764__auto___32861 = G__32862;
continue;
} else {
}
break;
}

var G__32859 = args32857.length;
switch (G__32859) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32857.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args32864 = [];
var len__22763__auto___32867 = arguments.length;
var i__22764__auto___32868 = (0);
while(true){
if((i__22764__auto___32868 < len__22763__auto___32867)){
args32864.push((arguments[i__22764__auto___32868]));

var G__32869 = (i__22764__auto___32868 + (1));
i__22764__auto___32868 = G__32869;
continue;
} else {
}
break;
}

var G__32866 = args32864.length;
switch (G__32866) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32864.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args32871 = [];
var len__22763__auto___32924 = arguments.length;
var i__22764__auto___32925 = (0);
while(true){
if((i__22764__auto___32925 < len__22763__auto___32924)){
args32871.push((arguments[i__22764__auto___32925]));

var G__32926 = (i__22764__auto___32925 + (1));
i__22764__auto___32925 = G__32926;
continue;
} else {
}
break;
}

var G__32873 = args32871.length;
switch (G__32873) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32871.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24785__auto___32928 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24785__auto___32928,tc,fc){
return (function (){
var f__24786__auto__ = (function (){var switch__24720__auto__ = ((function (c__24785__auto___32928,tc,fc){
return (function (state_32899){
var state_val_32900 = (state_32899[(1)]);
if((state_val_32900 === (7))){
var inst_32895 = (state_32899[(2)]);
var state_32899__$1 = state_32899;
var statearr_32901_32929 = state_32899__$1;
(statearr_32901_32929[(2)] = inst_32895);

(statearr_32901_32929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32900 === (1))){
var state_32899__$1 = state_32899;
var statearr_32902_32930 = state_32899__$1;
(statearr_32902_32930[(2)] = null);

(statearr_32902_32930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32900 === (4))){
var inst_32876 = (state_32899[(7)]);
var inst_32876__$1 = (state_32899[(2)]);
var inst_32877 = (inst_32876__$1 == null);
var state_32899__$1 = (function (){var statearr_32903 = state_32899;
(statearr_32903[(7)] = inst_32876__$1);

return statearr_32903;
})();
if(cljs.core.truth_(inst_32877)){
var statearr_32904_32931 = state_32899__$1;
(statearr_32904_32931[(1)] = (5));

} else {
var statearr_32905_32932 = state_32899__$1;
(statearr_32905_32932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32900 === (13))){
var state_32899__$1 = state_32899;
var statearr_32906_32933 = state_32899__$1;
(statearr_32906_32933[(2)] = null);

(statearr_32906_32933[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32900 === (6))){
var inst_32876 = (state_32899[(7)]);
var inst_32882 = p.call(null,inst_32876);
var state_32899__$1 = state_32899;
if(cljs.core.truth_(inst_32882)){
var statearr_32907_32934 = state_32899__$1;
(statearr_32907_32934[(1)] = (9));

} else {
var statearr_32908_32935 = state_32899__$1;
(statearr_32908_32935[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32900 === (3))){
var inst_32897 = (state_32899[(2)]);
var state_32899__$1 = state_32899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32899__$1,inst_32897);
} else {
if((state_val_32900 === (12))){
var state_32899__$1 = state_32899;
var statearr_32909_32936 = state_32899__$1;
(statearr_32909_32936[(2)] = null);

(statearr_32909_32936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32900 === (2))){
var state_32899__$1 = state_32899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32899__$1,(4),ch);
} else {
if((state_val_32900 === (11))){
var inst_32876 = (state_32899[(7)]);
var inst_32886 = (state_32899[(2)]);
var state_32899__$1 = state_32899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32899__$1,(8),inst_32886,inst_32876);
} else {
if((state_val_32900 === (9))){
var state_32899__$1 = state_32899;
var statearr_32910_32937 = state_32899__$1;
(statearr_32910_32937[(2)] = tc);

(statearr_32910_32937[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32900 === (5))){
var inst_32879 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32880 = cljs.core.async.close_BANG_.call(null,fc);
var state_32899__$1 = (function (){var statearr_32911 = state_32899;
(statearr_32911[(8)] = inst_32879);

return statearr_32911;
})();
var statearr_32912_32938 = state_32899__$1;
(statearr_32912_32938[(2)] = inst_32880);

(statearr_32912_32938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32900 === (14))){
var inst_32893 = (state_32899[(2)]);
var state_32899__$1 = state_32899;
var statearr_32913_32939 = state_32899__$1;
(statearr_32913_32939[(2)] = inst_32893);

(statearr_32913_32939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32900 === (10))){
var state_32899__$1 = state_32899;
var statearr_32914_32940 = state_32899__$1;
(statearr_32914_32940[(2)] = fc);

(statearr_32914_32940[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32900 === (8))){
var inst_32888 = (state_32899[(2)]);
var state_32899__$1 = state_32899;
if(cljs.core.truth_(inst_32888)){
var statearr_32915_32941 = state_32899__$1;
(statearr_32915_32941[(1)] = (12));

} else {
var statearr_32916_32942 = state_32899__$1;
(statearr_32916_32942[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24785__auto___32928,tc,fc))
;
return ((function (switch__24720__auto__,c__24785__auto___32928,tc,fc){
return (function() {
var cljs$core$async$state_machine__24721__auto__ = null;
var cljs$core$async$state_machine__24721__auto____0 = (function (){
var statearr_32920 = [null,null,null,null,null,null,null,null,null];
(statearr_32920[(0)] = cljs$core$async$state_machine__24721__auto__);

(statearr_32920[(1)] = (1));

return statearr_32920;
});
var cljs$core$async$state_machine__24721__auto____1 = (function (state_32899){
while(true){
var ret_value__24722__auto__ = (function (){try{while(true){
var result__24723__auto__ = switch__24720__auto__.call(null,state_32899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24723__auto__;
}
break;
}
}catch (e32921){if((e32921 instanceof Object)){
var ex__24724__auto__ = e32921;
var statearr_32922_32943 = state_32899;
(statearr_32922_32943[(5)] = ex__24724__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32944 = state_32899;
state_32899 = G__32944;
continue;
} else {
return ret_value__24722__auto__;
}
break;
}
});
cljs$core$async$state_machine__24721__auto__ = function(state_32899){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24721__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24721__auto____1.call(this,state_32899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24721__auto____0;
cljs$core$async$state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24721__auto____1;
return cljs$core$async$state_machine__24721__auto__;
})()
;})(switch__24720__auto__,c__24785__auto___32928,tc,fc))
})();
var state__24787__auto__ = (function (){var statearr_32923 = f__24786__auto__.call(null);
(statearr_32923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24785__auto___32928);

return statearr_32923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24787__auto__);
});})(c__24785__auto___32928,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__24785__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24785__auto__){
return (function (){
var f__24786__auto__ = (function (){var switch__24720__auto__ = ((function (c__24785__auto__){
return (function (state_32991){
var state_val_32992 = (state_32991[(1)]);
if((state_val_32992 === (1))){
var inst_32977 = init;
var state_32991__$1 = (function (){var statearr_32993 = state_32991;
(statearr_32993[(7)] = inst_32977);

return statearr_32993;
})();
var statearr_32994_33009 = state_32991__$1;
(statearr_32994_33009[(2)] = null);

(statearr_32994_33009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32992 === (2))){
var state_32991__$1 = state_32991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32991__$1,(4),ch);
} else {
if((state_val_32992 === (3))){
var inst_32989 = (state_32991[(2)]);
var state_32991__$1 = state_32991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32991__$1,inst_32989);
} else {
if((state_val_32992 === (4))){
var inst_32980 = (state_32991[(8)]);
var inst_32980__$1 = (state_32991[(2)]);
var inst_32981 = (inst_32980__$1 == null);
var state_32991__$1 = (function (){var statearr_32995 = state_32991;
(statearr_32995[(8)] = inst_32980__$1);

return statearr_32995;
})();
if(cljs.core.truth_(inst_32981)){
var statearr_32996_33010 = state_32991__$1;
(statearr_32996_33010[(1)] = (5));

} else {
var statearr_32997_33011 = state_32991__$1;
(statearr_32997_33011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32992 === (5))){
var inst_32977 = (state_32991[(7)]);
var state_32991__$1 = state_32991;
var statearr_32998_33012 = state_32991__$1;
(statearr_32998_33012[(2)] = inst_32977);

(statearr_32998_33012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32992 === (6))){
var inst_32977 = (state_32991[(7)]);
var inst_32980 = (state_32991[(8)]);
var inst_32984 = f.call(null,inst_32977,inst_32980);
var inst_32977__$1 = inst_32984;
var state_32991__$1 = (function (){var statearr_32999 = state_32991;
(statearr_32999[(7)] = inst_32977__$1);

return statearr_32999;
})();
var statearr_33000_33013 = state_32991__$1;
(statearr_33000_33013[(2)] = null);

(statearr_33000_33013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32992 === (7))){
var inst_32987 = (state_32991[(2)]);
var state_32991__$1 = state_32991;
var statearr_33001_33014 = state_32991__$1;
(statearr_33001_33014[(2)] = inst_32987);

(statearr_33001_33014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__24785__auto__))
;
return ((function (switch__24720__auto__,c__24785__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24721__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24721__auto____0 = (function (){
var statearr_33005 = [null,null,null,null,null,null,null,null,null];
(statearr_33005[(0)] = cljs$core$async$reduce_$_state_machine__24721__auto__);

(statearr_33005[(1)] = (1));

return statearr_33005;
});
var cljs$core$async$reduce_$_state_machine__24721__auto____1 = (function (state_32991){
while(true){
var ret_value__24722__auto__ = (function (){try{while(true){
var result__24723__auto__ = switch__24720__auto__.call(null,state_32991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24723__auto__;
}
break;
}
}catch (e33006){if((e33006 instanceof Object)){
var ex__24724__auto__ = e33006;
var statearr_33007_33015 = state_32991;
(statearr_33007_33015[(5)] = ex__24724__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33016 = state_32991;
state_32991 = G__33016;
continue;
} else {
return ret_value__24722__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24721__auto__ = function(state_32991){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24721__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24721__auto____1.call(this,state_32991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24721__auto____0;
cljs$core$async$reduce_$_state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24721__auto____1;
return cljs$core$async$reduce_$_state_machine__24721__auto__;
})()
;})(switch__24720__auto__,c__24785__auto__))
})();
var state__24787__auto__ = (function (){var statearr_33008 = f__24786__auto__.call(null);
(statearr_33008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24785__auto__);

return statearr_33008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24787__auto__);
});})(c__24785__auto__))
);

return c__24785__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args33017 = [];
var len__22763__auto___33069 = arguments.length;
var i__22764__auto___33070 = (0);
while(true){
if((i__22764__auto___33070 < len__22763__auto___33069)){
args33017.push((arguments[i__22764__auto___33070]));

var G__33071 = (i__22764__auto___33070 + (1));
i__22764__auto___33070 = G__33071;
continue;
} else {
}
break;
}

var G__33019 = args33017.length;
switch (G__33019) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33017.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24785__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24785__auto__){
return (function (){
var f__24786__auto__ = (function (){var switch__24720__auto__ = ((function (c__24785__auto__){
return (function (state_33044){
var state_val_33045 = (state_33044[(1)]);
if((state_val_33045 === (7))){
var inst_33026 = (state_33044[(2)]);
var state_33044__$1 = state_33044;
var statearr_33046_33073 = state_33044__$1;
(statearr_33046_33073[(2)] = inst_33026);

(statearr_33046_33073[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33045 === (1))){
var inst_33020 = cljs.core.seq.call(null,coll);
var inst_33021 = inst_33020;
var state_33044__$1 = (function (){var statearr_33047 = state_33044;
(statearr_33047[(7)] = inst_33021);

return statearr_33047;
})();
var statearr_33048_33074 = state_33044__$1;
(statearr_33048_33074[(2)] = null);

(statearr_33048_33074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33045 === (4))){
var inst_33021 = (state_33044[(7)]);
var inst_33024 = cljs.core.first.call(null,inst_33021);
var state_33044__$1 = state_33044;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33044__$1,(7),ch,inst_33024);
} else {
if((state_val_33045 === (13))){
var inst_33038 = (state_33044[(2)]);
var state_33044__$1 = state_33044;
var statearr_33049_33075 = state_33044__$1;
(statearr_33049_33075[(2)] = inst_33038);

(statearr_33049_33075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33045 === (6))){
var inst_33029 = (state_33044[(2)]);
var state_33044__$1 = state_33044;
if(cljs.core.truth_(inst_33029)){
var statearr_33050_33076 = state_33044__$1;
(statearr_33050_33076[(1)] = (8));

} else {
var statearr_33051_33077 = state_33044__$1;
(statearr_33051_33077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33045 === (3))){
var inst_33042 = (state_33044[(2)]);
var state_33044__$1 = state_33044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33044__$1,inst_33042);
} else {
if((state_val_33045 === (12))){
var state_33044__$1 = state_33044;
var statearr_33052_33078 = state_33044__$1;
(statearr_33052_33078[(2)] = null);

(statearr_33052_33078[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33045 === (2))){
var inst_33021 = (state_33044[(7)]);
var state_33044__$1 = state_33044;
if(cljs.core.truth_(inst_33021)){
var statearr_33053_33079 = state_33044__$1;
(statearr_33053_33079[(1)] = (4));

} else {
var statearr_33054_33080 = state_33044__$1;
(statearr_33054_33080[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33045 === (11))){
var inst_33035 = cljs.core.async.close_BANG_.call(null,ch);
var state_33044__$1 = state_33044;
var statearr_33055_33081 = state_33044__$1;
(statearr_33055_33081[(2)] = inst_33035);

(statearr_33055_33081[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33045 === (9))){
var state_33044__$1 = state_33044;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33056_33082 = state_33044__$1;
(statearr_33056_33082[(1)] = (11));

} else {
var statearr_33057_33083 = state_33044__$1;
(statearr_33057_33083[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33045 === (5))){
var inst_33021 = (state_33044[(7)]);
var state_33044__$1 = state_33044;
var statearr_33058_33084 = state_33044__$1;
(statearr_33058_33084[(2)] = inst_33021);

(statearr_33058_33084[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33045 === (10))){
var inst_33040 = (state_33044[(2)]);
var state_33044__$1 = state_33044;
var statearr_33059_33085 = state_33044__$1;
(statearr_33059_33085[(2)] = inst_33040);

(statearr_33059_33085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33045 === (8))){
var inst_33021 = (state_33044[(7)]);
var inst_33031 = cljs.core.next.call(null,inst_33021);
var inst_33021__$1 = inst_33031;
var state_33044__$1 = (function (){var statearr_33060 = state_33044;
(statearr_33060[(7)] = inst_33021__$1);

return statearr_33060;
})();
var statearr_33061_33086 = state_33044__$1;
(statearr_33061_33086[(2)] = null);

(statearr_33061_33086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24785__auto__))
;
return ((function (switch__24720__auto__,c__24785__auto__){
return (function() {
var cljs$core$async$state_machine__24721__auto__ = null;
var cljs$core$async$state_machine__24721__auto____0 = (function (){
var statearr_33065 = [null,null,null,null,null,null,null,null];
(statearr_33065[(0)] = cljs$core$async$state_machine__24721__auto__);

(statearr_33065[(1)] = (1));

return statearr_33065;
});
var cljs$core$async$state_machine__24721__auto____1 = (function (state_33044){
while(true){
var ret_value__24722__auto__ = (function (){try{while(true){
var result__24723__auto__ = switch__24720__auto__.call(null,state_33044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24723__auto__;
}
break;
}
}catch (e33066){if((e33066 instanceof Object)){
var ex__24724__auto__ = e33066;
var statearr_33067_33087 = state_33044;
(statearr_33067_33087[(5)] = ex__24724__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33088 = state_33044;
state_33044 = G__33088;
continue;
} else {
return ret_value__24722__auto__;
}
break;
}
});
cljs$core$async$state_machine__24721__auto__ = function(state_33044){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24721__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24721__auto____1.call(this,state_33044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24721__auto____0;
cljs$core$async$state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24721__auto____1;
return cljs$core$async$state_machine__24721__auto__;
})()
;})(switch__24720__auto__,c__24785__auto__))
})();
var state__24787__auto__ = (function (){var statearr_33068 = f__24786__auto__.call(null);
(statearr_33068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24785__auto__);

return statearr_33068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24787__auto__);
});})(c__24785__auto__))
);

return c__24785__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__22360__auto__ = (((_ == null))?null:_);
var m__22361__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__22360__auto__)]);
if(!((m__22361__auto__ == null))){
return m__22361__auto__.call(null,_);
} else {
var m__22361__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__22361__auto____$1 == null))){
return m__22361__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__22360__auto__ = (((m == null))?null:m);
var m__22361__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__22360__auto__)]);
if(!((m__22361__auto__ == null))){
return m__22361__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__22361__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__22361__auto____$1 == null))){
return m__22361__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__22360__auto__ = (((m == null))?null:m);
var m__22361__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__22360__auto__)]);
if(!((m__22361__auto__ == null))){
return m__22361__auto__.call(null,m,ch);
} else {
var m__22361__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__22361__auto____$1 == null))){
return m__22361__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__22360__auto__ = (((m == null))?null:m);
var m__22361__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__22360__auto__)]);
if(!((m__22361__auto__ == null))){
return m__22361__auto__.call(null,m);
} else {
var m__22361__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__22361__auto____$1 == null))){
return m__22361__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async33310 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33310 = (function (mult,ch,cs,meta33311){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta33311 = meta33311;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33312,meta33311__$1){
var self__ = this;
var _33312__$1 = this;
return (new cljs.core.async.t_cljs$core$async33310(self__.mult,self__.ch,self__.cs,meta33311__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33310.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33312){
var self__ = this;
var _33312__$1 = this;
return self__.meta33311;
});})(cs))
;

cljs.core.async.t_cljs$core$async33310.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33310.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33310.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async33310.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33310.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33310.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33310.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33311","meta33311",329076191,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33310.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33310.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33310";

cljs.core.async.t_cljs$core$async33310.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22303__auto__,writer__22304__auto__,opt__22305__auto__){
return cljs.core._write.call(null,writer__22304__auto__,"cljs.core.async/t_cljs$core$async33310");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async33310 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33310(mult__$1,ch__$1,cs__$1,meta33311){
return (new cljs.core.async.t_cljs$core$async33310(mult__$1,ch__$1,cs__$1,meta33311));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33310(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__24785__auto___33531 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24785__auto___33531,cs,m,dchan,dctr,done){
return (function (){
var f__24786__auto__ = (function (){var switch__24720__auto__ = ((function (c__24785__auto___33531,cs,m,dchan,dctr,done){
return (function (state_33443){
var state_val_33444 = (state_33443[(1)]);
if((state_val_33444 === (7))){
var inst_33439 = (state_33443[(2)]);
var state_33443__$1 = state_33443;
var statearr_33445_33532 = state_33443__$1;
(statearr_33445_33532[(2)] = inst_33439);

(statearr_33445_33532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (20))){
var inst_33344 = (state_33443[(7)]);
var inst_33354 = cljs.core.first.call(null,inst_33344);
var inst_33355 = cljs.core.nth.call(null,inst_33354,(0),null);
var inst_33356 = cljs.core.nth.call(null,inst_33354,(1),null);
var state_33443__$1 = (function (){var statearr_33446 = state_33443;
(statearr_33446[(8)] = inst_33355);

return statearr_33446;
})();
if(cljs.core.truth_(inst_33356)){
var statearr_33447_33533 = state_33443__$1;
(statearr_33447_33533[(1)] = (22));

} else {
var statearr_33448_33534 = state_33443__$1;
(statearr_33448_33534[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (27))){
var inst_33386 = (state_33443[(9)]);
var inst_33391 = (state_33443[(10)]);
var inst_33384 = (state_33443[(11)]);
var inst_33315 = (state_33443[(12)]);
var inst_33391__$1 = cljs.core._nth.call(null,inst_33384,inst_33386);
var inst_33392 = cljs.core.async.put_BANG_.call(null,inst_33391__$1,inst_33315,done);
var state_33443__$1 = (function (){var statearr_33449 = state_33443;
(statearr_33449[(10)] = inst_33391__$1);

return statearr_33449;
})();
if(cljs.core.truth_(inst_33392)){
var statearr_33450_33535 = state_33443__$1;
(statearr_33450_33535[(1)] = (30));

} else {
var statearr_33451_33536 = state_33443__$1;
(statearr_33451_33536[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (1))){
var state_33443__$1 = state_33443;
var statearr_33452_33537 = state_33443__$1;
(statearr_33452_33537[(2)] = null);

(statearr_33452_33537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (24))){
var inst_33344 = (state_33443[(7)]);
var inst_33361 = (state_33443[(2)]);
var inst_33362 = cljs.core.next.call(null,inst_33344);
var inst_33324 = inst_33362;
var inst_33325 = null;
var inst_33326 = (0);
var inst_33327 = (0);
var state_33443__$1 = (function (){var statearr_33453 = state_33443;
(statearr_33453[(13)] = inst_33327);

(statearr_33453[(14)] = inst_33325);

(statearr_33453[(15)] = inst_33324);

(statearr_33453[(16)] = inst_33361);

(statearr_33453[(17)] = inst_33326);

return statearr_33453;
})();
var statearr_33454_33538 = state_33443__$1;
(statearr_33454_33538[(2)] = null);

(statearr_33454_33538[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (39))){
var state_33443__$1 = state_33443;
var statearr_33458_33539 = state_33443__$1;
(statearr_33458_33539[(2)] = null);

(statearr_33458_33539[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (4))){
var inst_33315 = (state_33443[(12)]);
var inst_33315__$1 = (state_33443[(2)]);
var inst_33316 = (inst_33315__$1 == null);
var state_33443__$1 = (function (){var statearr_33459 = state_33443;
(statearr_33459[(12)] = inst_33315__$1);

return statearr_33459;
})();
if(cljs.core.truth_(inst_33316)){
var statearr_33460_33540 = state_33443__$1;
(statearr_33460_33540[(1)] = (5));

} else {
var statearr_33461_33541 = state_33443__$1;
(statearr_33461_33541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (15))){
var inst_33327 = (state_33443[(13)]);
var inst_33325 = (state_33443[(14)]);
var inst_33324 = (state_33443[(15)]);
var inst_33326 = (state_33443[(17)]);
var inst_33340 = (state_33443[(2)]);
var inst_33341 = (inst_33327 + (1));
var tmp33455 = inst_33325;
var tmp33456 = inst_33324;
var tmp33457 = inst_33326;
var inst_33324__$1 = tmp33456;
var inst_33325__$1 = tmp33455;
var inst_33326__$1 = tmp33457;
var inst_33327__$1 = inst_33341;
var state_33443__$1 = (function (){var statearr_33462 = state_33443;
(statearr_33462[(13)] = inst_33327__$1);

(statearr_33462[(14)] = inst_33325__$1);

(statearr_33462[(15)] = inst_33324__$1);

(statearr_33462[(18)] = inst_33340);

(statearr_33462[(17)] = inst_33326__$1);

return statearr_33462;
})();
var statearr_33463_33542 = state_33443__$1;
(statearr_33463_33542[(2)] = null);

(statearr_33463_33542[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (21))){
var inst_33365 = (state_33443[(2)]);
var state_33443__$1 = state_33443;
var statearr_33467_33543 = state_33443__$1;
(statearr_33467_33543[(2)] = inst_33365);

(statearr_33467_33543[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (31))){
var inst_33391 = (state_33443[(10)]);
var inst_33395 = done.call(null,null);
var inst_33396 = cljs.core.async.untap_STAR_.call(null,m,inst_33391);
var state_33443__$1 = (function (){var statearr_33468 = state_33443;
(statearr_33468[(19)] = inst_33395);

return statearr_33468;
})();
var statearr_33469_33544 = state_33443__$1;
(statearr_33469_33544[(2)] = inst_33396);

(statearr_33469_33544[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (32))){
var inst_33386 = (state_33443[(9)]);
var inst_33383 = (state_33443[(20)]);
var inst_33384 = (state_33443[(11)]);
var inst_33385 = (state_33443[(21)]);
var inst_33398 = (state_33443[(2)]);
var inst_33399 = (inst_33386 + (1));
var tmp33464 = inst_33383;
var tmp33465 = inst_33384;
var tmp33466 = inst_33385;
var inst_33383__$1 = tmp33464;
var inst_33384__$1 = tmp33465;
var inst_33385__$1 = tmp33466;
var inst_33386__$1 = inst_33399;
var state_33443__$1 = (function (){var statearr_33470 = state_33443;
(statearr_33470[(9)] = inst_33386__$1);

(statearr_33470[(20)] = inst_33383__$1);

(statearr_33470[(22)] = inst_33398);

(statearr_33470[(11)] = inst_33384__$1);

(statearr_33470[(21)] = inst_33385__$1);

return statearr_33470;
})();
var statearr_33471_33545 = state_33443__$1;
(statearr_33471_33545[(2)] = null);

(statearr_33471_33545[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (40))){
var inst_33411 = (state_33443[(23)]);
var inst_33415 = done.call(null,null);
var inst_33416 = cljs.core.async.untap_STAR_.call(null,m,inst_33411);
var state_33443__$1 = (function (){var statearr_33472 = state_33443;
(statearr_33472[(24)] = inst_33415);

return statearr_33472;
})();
var statearr_33473_33546 = state_33443__$1;
(statearr_33473_33546[(2)] = inst_33416);

(statearr_33473_33546[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (33))){
var inst_33402 = (state_33443[(25)]);
var inst_33404 = cljs.core.chunked_seq_QMARK_.call(null,inst_33402);
var state_33443__$1 = state_33443;
if(inst_33404){
var statearr_33474_33547 = state_33443__$1;
(statearr_33474_33547[(1)] = (36));

} else {
var statearr_33475_33548 = state_33443__$1;
(statearr_33475_33548[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (13))){
var inst_33334 = (state_33443[(26)]);
var inst_33337 = cljs.core.async.close_BANG_.call(null,inst_33334);
var state_33443__$1 = state_33443;
var statearr_33476_33549 = state_33443__$1;
(statearr_33476_33549[(2)] = inst_33337);

(statearr_33476_33549[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (22))){
var inst_33355 = (state_33443[(8)]);
var inst_33358 = cljs.core.async.close_BANG_.call(null,inst_33355);
var state_33443__$1 = state_33443;
var statearr_33477_33550 = state_33443__$1;
(statearr_33477_33550[(2)] = inst_33358);

(statearr_33477_33550[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (36))){
var inst_33402 = (state_33443[(25)]);
var inst_33406 = cljs.core.chunk_first.call(null,inst_33402);
var inst_33407 = cljs.core.chunk_rest.call(null,inst_33402);
var inst_33408 = cljs.core.count.call(null,inst_33406);
var inst_33383 = inst_33407;
var inst_33384 = inst_33406;
var inst_33385 = inst_33408;
var inst_33386 = (0);
var state_33443__$1 = (function (){var statearr_33478 = state_33443;
(statearr_33478[(9)] = inst_33386);

(statearr_33478[(20)] = inst_33383);

(statearr_33478[(11)] = inst_33384);

(statearr_33478[(21)] = inst_33385);

return statearr_33478;
})();
var statearr_33479_33551 = state_33443__$1;
(statearr_33479_33551[(2)] = null);

(statearr_33479_33551[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (41))){
var inst_33402 = (state_33443[(25)]);
var inst_33418 = (state_33443[(2)]);
var inst_33419 = cljs.core.next.call(null,inst_33402);
var inst_33383 = inst_33419;
var inst_33384 = null;
var inst_33385 = (0);
var inst_33386 = (0);
var state_33443__$1 = (function (){var statearr_33480 = state_33443;
(statearr_33480[(9)] = inst_33386);

(statearr_33480[(20)] = inst_33383);

(statearr_33480[(11)] = inst_33384);

(statearr_33480[(21)] = inst_33385);

(statearr_33480[(27)] = inst_33418);

return statearr_33480;
})();
var statearr_33481_33552 = state_33443__$1;
(statearr_33481_33552[(2)] = null);

(statearr_33481_33552[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (43))){
var state_33443__$1 = state_33443;
var statearr_33482_33553 = state_33443__$1;
(statearr_33482_33553[(2)] = null);

(statearr_33482_33553[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (29))){
var inst_33427 = (state_33443[(2)]);
var state_33443__$1 = state_33443;
var statearr_33483_33554 = state_33443__$1;
(statearr_33483_33554[(2)] = inst_33427);

(statearr_33483_33554[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (44))){
var inst_33436 = (state_33443[(2)]);
var state_33443__$1 = (function (){var statearr_33484 = state_33443;
(statearr_33484[(28)] = inst_33436);

return statearr_33484;
})();
var statearr_33485_33555 = state_33443__$1;
(statearr_33485_33555[(2)] = null);

(statearr_33485_33555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (6))){
var inst_33375 = (state_33443[(29)]);
var inst_33374 = cljs.core.deref.call(null,cs);
var inst_33375__$1 = cljs.core.keys.call(null,inst_33374);
var inst_33376 = cljs.core.count.call(null,inst_33375__$1);
var inst_33377 = cljs.core.reset_BANG_.call(null,dctr,inst_33376);
var inst_33382 = cljs.core.seq.call(null,inst_33375__$1);
var inst_33383 = inst_33382;
var inst_33384 = null;
var inst_33385 = (0);
var inst_33386 = (0);
var state_33443__$1 = (function (){var statearr_33486 = state_33443;
(statearr_33486[(9)] = inst_33386);

(statearr_33486[(29)] = inst_33375__$1);

(statearr_33486[(30)] = inst_33377);

(statearr_33486[(20)] = inst_33383);

(statearr_33486[(11)] = inst_33384);

(statearr_33486[(21)] = inst_33385);

return statearr_33486;
})();
var statearr_33487_33556 = state_33443__$1;
(statearr_33487_33556[(2)] = null);

(statearr_33487_33556[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (28))){
var inst_33383 = (state_33443[(20)]);
var inst_33402 = (state_33443[(25)]);
var inst_33402__$1 = cljs.core.seq.call(null,inst_33383);
var state_33443__$1 = (function (){var statearr_33488 = state_33443;
(statearr_33488[(25)] = inst_33402__$1);

return statearr_33488;
})();
if(inst_33402__$1){
var statearr_33489_33557 = state_33443__$1;
(statearr_33489_33557[(1)] = (33));

} else {
var statearr_33490_33558 = state_33443__$1;
(statearr_33490_33558[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (25))){
var inst_33386 = (state_33443[(9)]);
var inst_33385 = (state_33443[(21)]);
var inst_33388 = (inst_33386 < inst_33385);
var inst_33389 = inst_33388;
var state_33443__$1 = state_33443;
if(cljs.core.truth_(inst_33389)){
var statearr_33491_33559 = state_33443__$1;
(statearr_33491_33559[(1)] = (27));

} else {
var statearr_33492_33560 = state_33443__$1;
(statearr_33492_33560[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (34))){
var state_33443__$1 = state_33443;
var statearr_33493_33561 = state_33443__$1;
(statearr_33493_33561[(2)] = null);

(statearr_33493_33561[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (17))){
var state_33443__$1 = state_33443;
var statearr_33494_33562 = state_33443__$1;
(statearr_33494_33562[(2)] = null);

(statearr_33494_33562[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (3))){
var inst_33441 = (state_33443[(2)]);
var state_33443__$1 = state_33443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33443__$1,inst_33441);
} else {
if((state_val_33444 === (12))){
var inst_33370 = (state_33443[(2)]);
var state_33443__$1 = state_33443;
var statearr_33495_33563 = state_33443__$1;
(statearr_33495_33563[(2)] = inst_33370);

(statearr_33495_33563[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (2))){
var state_33443__$1 = state_33443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33443__$1,(4),ch);
} else {
if((state_val_33444 === (23))){
var state_33443__$1 = state_33443;
var statearr_33496_33564 = state_33443__$1;
(statearr_33496_33564[(2)] = null);

(statearr_33496_33564[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (35))){
var inst_33425 = (state_33443[(2)]);
var state_33443__$1 = state_33443;
var statearr_33497_33565 = state_33443__$1;
(statearr_33497_33565[(2)] = inst_33425);

(statearr_33497_33565[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (19))){
var inst_33344 = (state_33443[(7)]);
var inst_33348 = cljs.core.chunk_first.call(null,inst_33344);
var inst_33349 = cljs.core.chunk_rest.call(null,inst_33344);
var inst_33350 = cljs.core.count.call(null,inst_33348);
var inst_33324 = inst_33349;
var inst_33325 = inst_33348;
var inst_33326 = inst_33350;
var inst_33327 = (0);
var state_33443__$1 = (function (){var statearr_33498 = state_33443;
(statearr_33498[(13)] = inst_33327);

(statearr_33498[(14)] = inst_33325);

(statearr_33498[(15)] = inst_33324);

(statearr_33498[(17)] = inst_33326);

return statearr_33498;
})();
var statearr_33499_33566 = state_33443__$1;
(statearr_33499_33566[(2)] = null);

(statearr_33499_33566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (11))){
var inst_33324 = (state_33443[(15)]);
var inst_33344 = (state_33443[(7)]);
var inst_33344__$1 = cljs.core.seq.call(null,inst_33324);
var state_33443__$1 = (function (){var statearr_33500 = state_33443;
(statearr_33500[(7)] = inst_33344__$1);

return statearr_33500;
})();
if(inst_33344__$1){
var statearr_33501_33567 = state_33443__$1;
(statearr_33501_33567[(1)] = (16));

} else {
var statearr_33502_33568 = state_33443__$1;
(statearr_33502_33568[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (9))){
var inst_33372 = (state_33443[(2)]);
var state_33443__$1 = state_33443;
var statearr_33503_33569 = state_33443__$1;
(statearr_33503_33569[(2)] = inst_33372);

(statearr_33503_33569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (5))){
var inst_33322 = cljs.core.deref.call(null,cs);
var inst_33323 = cljs.core.seq.call(null,inst_33322);
var inst_33324 = inst_33323;
var inst_33325 = null;
var inst_33326 = (0);
var inst_33327 = (0);
var state_33443__$1 = (function (){var statearr_33504 = state_33443;
(statearr_33504[(13)] = inst_33327);

(statearr_33504[(14)] = inst_33325);

(statearr_33504[(15)] = inst_33324);

(statearr_33504[(17)] = inst_33326);

return statearr_33504;
})();
var statearr_33505_33570 = state_33443__$1;
(statearr_33505_33570[(2)] = null);

(statearr_33505_33570[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (14))){
var state_33443__$1 = state_33443;
var statearr_33506_33571 = state_33443__$1;
(statearr_33506_33571[(2)] = null);

(statearr_33506_33571[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (45))){
var inst_33433 = (state_33443[(2)]);
var state_33443__$1 = state_33443;
var statearr_33507_33572 = state_33443__$1;
(statearr_33507_33572[(2)] = inst_33433);

(statearr_33507_33572[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (26))){
var inst_33375 = (state_33443[(29)]);
var inst_33429 = (state_33443[(2)]);
var inst_33430 = cljs.core.seq.call(null,inst_33375);
var state_33443__$1 = (function (){var statearr_33508 = state_33443;
(statearr_33508[(31)] = inst_33429);

return statearr_33508;
})();
if(inst_33430){
var statearr_33509_33573 = state_33443__$1;
(statearr_33509_33573[(1)] = (42));

} else {
var statearr_33510_33574 = state_33443__$1;
(statearr_33510_33574[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (16))){
var inst_33344 = (state_33443[(7)]);
var inst_33346 = cljs.core.chunked_seq_QMARK_.call(null,inst_33344);
var state_33443__$1 = state_33443;
if(inst_33346){
var statearr_33511_33575 = state_33443__$1;
(statearr_33511_33575[(1)] = (19));

} else {
var statearr_33512_33576 = state_33443__$1;
(statearr_33512_33576[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (38))){
var inst_33422 = (state_33443[(2)]);
var state_33443__$1 = state_33443;
var statearr_33513_33577 = state_33443__$1;
(statearr_33513_33577[(2)] = inst_33422);

(statearr_33513_33577[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (30))){
var state_33443__$1 = state_33443;
var statearr_33514_33578 = state_33443__$1;
(statearr_33514_33578[(2)] = null);

(statearr_33514_33578[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (10))){
var inst_33327 = (state_33443[(13)]);
var inst_33325 = (state_33443[(14)]);
var inst_33333 = cljs.core._nth.call(null,inst_33325,inst_33327);
var inst_33334 = cljs.core.nth.call(null,inst_33333,(0),null);
var inst_33335 = cljs.core.nth.call(null,inst_33333,(1),null);
var state_33443__$1 = (function (){var statearr_33515 = state_33443;
(statearr_33515[(26)] = inst_33334);

return statearr_33515;
})();
if(cljs.core.truth_(inst_33335)){
var statearr_33516_33579 = state_33443__$1;
(statearr_33516_33579[(1)] = (13));

} else {
var statearr_33517_33580 = state_33443__$1;
(statearr_33517_33580[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (18))){
var inst_33368 = (state_33443[(2)]);
var state_33443__$1 = state_33443;
var statearr_33518_33581 = state_33443__$1;
(statearr_33518_33581[(2)] = inst_33368);

(statearr_33518_33581[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (42))){
var state_33443__$1 = state_33443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33443__$1,(45),dchan);
} else {
if((state_val_33444 === (37))){
var inst_33411 = (state_33443[(23)]);
var inst_33402 = (state_33443[(25)]);
var inst_33315 = (state_33443[(12)]);
var inst_33411__$1 = cljs.core.first.call(null,inst_33402);
var inst_33412 = cljs.core.async.put_BANG_.call(null,inst_33411__$1,inst_33315,done);
var state_33443__$1 = (function (){var statearr_33519 = state_33443;
(statearr_33519[(23)] = inst_33411__$1);

return statearr_33519;
})();
if(cljs.core.truth_(inst_33412)){
var statearr_33520_33582 = state_33443__$1;
(statearr_33520_33582[(1)] = (39));

} else {
var statearr_33521_33583 = state_33443__$1;
(statearr_33521_33583[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (8))){
var inst_33327 = (state_33443[(13)]);
var inst_33326 = (state_33443[(17)]);
var inst_33329 = (inst_33327 < inst_33326);
var inst_33330 = inst_33329;
var state_33443__$1 = state_33443;
if(cljs.core.truth_(inst_33330)){
var statearr_33522_33584 = state_33443__$1;
(statearr_33522_33584[(1)] = (10));

} else {
var statearr_33523_33585 = state_33443__$1;
(statearr_33523_33585[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24785__auto___33531,cs,m,dchan,dctr,done))
;
return ((function (switch__24720__auto__,c__24785__auto___33531,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24721__auto__ = null;
var cljs$core$async$mult_$_state_machine__24721__auto____0 = (function (){
var statearr_33527 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33527[(0)] = cljs$core$async$mult_$_state_machine__24721__auto__);

(statearr_33527[(1)] = (1));

return statearr_33527;
});
var cljs$core$async$mult_$_state_machine__24721__auto____1 = (function (state_33443){
while(true){
var ret_value__24722__auto__ = (function (){try{while(true){
var result__24723__auto__ = switch__24720__auto__.call(null,state_33443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24723__auto__;
}
break;
}
}catch (e33528){if((e33528 instanceof Object)){
var ex__24724__auto__ = e33528;
var statearr_33529_33586 = state_33443;
(statearr_33529_33586[(5)] = ex__24724__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33587 = state_33443;
state_33443 = G__33587;
continue;
} else {
return ret_value__24722__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24721__auto__ = function(state_33443){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24721__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24721__auto____1.call(this,state_33443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24721__auto____0;
cljs$core$async$mult_$_state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24721__auto____1;
return cljs$core$async$mult_$_state_machine__24721__auto__;
})()
;})(switch__24720__auto__,c__24785__auto___33531,cs,m,dchan,dctr,done))
})();
var state__24787__auto__ = (function (){var statearr_33530 = f__24786__auto__.call(null);
(statearr_33530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24785__auto___33531);

return statearr_33530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24787__auto__);
});})(c__24785__auto___33531,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args33588 = [];
var len__22763__auto___33591 = arguments.length;
var i__22764__auto___33592 = (0);
while(true){
if((i__22764__auto___33592 < len__22763__auto___33591)){
args33588.push((arguments[i__22764__auto___33592]));

var G__33593 = (i__22764__auto___33592 + (1));
i__22764__auto___33592 = G__33593;
continue;
} else {
}
break;
}

var G__33590 = args33588.length;
switch (G__33590) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33588.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__22360__auto__ = (((m == null))?null:m);
var m__22361__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__22360__auto__)]);
if(!((m__22361__auto__ == null))){
return m__22361__auto__.call(null,m,ch);
} else {
var m__22361__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__22361__auto____$1 == null))){
return m__22361__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__22360__auto__ = (((m == null))?null:m);
var m__22361__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__22360__auto__)]);
if(!((m__22361__auto__ == null))){
return m__22361__auto__.call(null,m,ch);
} else {
var m__22361__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__22361__auto____$1 == null))){
return m__22361__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__22360__auto__ = (((m == null))?null:m);
var m__22361__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__22360__auto__)]);
if(!((m__22361__auto__ == null))){
return m__22361__auto__.call(null,m);
} else {
var m__22361__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__22361__auto____$1 == null))){
return m__22361__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__22360__auto__ = (((m == null))?null:m);
var m__22361__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__22360__auto__)]);
if(!((m__22361__auto__ == null))){
return m__22361__auto__.call(null,m,state_map);
} else {
var m__22361__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__22361__auto____$1 == null))){
return m__22361__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__22360__auto__ = (((m == null))?null:m);
var m__22361__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__22360__auto__)]);
if(!((m__22361__auto__ == null))){
return m__22361__auto__.call(null,m,mode);
} else {
var m__22361__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__22361__auto____$1 == null))){
return m__22361__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__22770__auto__ = [];
var len__22763__auto___33605 = arguments.length;
var i__22764__auto___33606 = (0);
while(true){
if((i__22764__auto___33606 < len__22763__auto___33605)){
args__22770__auto__.push((arguments[i__22764__auto___33606]));

var G__33607 = (i__22764__auto___33606 + (1));
i__22764__auto___33606 = G__33607;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((3) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22771__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33599){
var map__33600 = p__33599;
var map__33600__$1 = ((((!((map__33600 == null)))?((((map__33600.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33600.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33600):map__33600);
var opts = map__33600__$1;
var statearr_33602_33608 = state;
(statearr_33602_33608[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__33600,map__33600__$1,opts){
return (function (val){
var statearr_33603_33609 = state;
(statearr_33603_33609[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33600,map__33600__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_33604_33610 = state;
(statearr_33604_33610[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33595){
var G__33596 = cljs.core.first.call(null,seq33595);
var seq33595__$1 = cljs.core.next.call(null,seq33595);
var G__33597 = cljs.core.first.call(null,seq33595__$1);
var seq33595__$2 = cljs.core.next.call(null,seq33595__$1);
var G__33598 = cljs.core.first.call(null,seq33595__$2);
var seq33595__$3 = cljs.core.next.call(null,seq33595__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33596,G__33597,G__33598,seq33595__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async33774 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33774 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33775){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33775 = meta33775;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33776,meta33775__$1){
var self__ = this;
var _33776__$1 = this;
return (new cljs.core.async.t_cljs$core$async33774(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33775__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33774.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33776){
var self__ = this;
var _33776__$1 = this;
return self__.meta33775;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33774.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33774.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33774.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async33774.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33774.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33774.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33774.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33774.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33774.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33775","meta33775",-1862239068,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33774.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33774.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33774";

cljs.core.async.t_cljs$core$async33774.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22303__auto__,writer__22304__auto__,opt__22305__auto__){
return cljs.core._write.call(null,writer__22304__auto__,"cljs.core.async/t_cljs$core$async33774");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async33774 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33774(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33775){
return (new cljs.core.async.t_cljs$core$async33774(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33775));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33774(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24785__auto___33937 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24785__auto___33937,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24786__auto__ = (function (){var switch__24720__auto__ = ((function (c__24785__auto___33937,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33874){
var state_val_33875 = (state_33874[(1)]);
if((state_val_33875 === (7))){
var inst_33792 = (state_33874[(2)]);
var state_33874__$1 = state_33874;
var statearr_33876_33938 = state_33874__$1;
(statearr_33876_33938[(2)] = inst_33792);

(statearr_33876_33938[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (20))){
var inst_33804 = (state_33874[(7)]);
var state_33874__$1 = state_33874;
var statearr_33877_33939 = state_33874__$1;
(statearr_33877_33939[(2)] = inst_33804);

(statearr_33877_33939[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (27))){
var state_33874__$1 = state_33874;
var statearr_33878_33940 = state_33874__$1;
(statearr_33878_33940[(2)] = null);

(statearr_33878_33940[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (1))){
var inst_33780 = (state_33874[(8)]);
var inst_33780__$1 = calc_state.call(null);
var inst_33782 = (inst_33780__$1 == null);
var inst_33783 = cljs.core.not.call(null,inst_33782);
var state_33874__$1 = (function (){var statearr_33879 = state_33874;
(statearr_33879[(8)] = inst_33780__$1);

return statearr_33879;
})();
if(inst_33783){
var statearr_33880_33941 = state_33874__$1;
(statearr_33880_33941[(1)] = (2));

} else {
var statearr_33881_33942 = state_33874__$1;
(statearr_33881_33942[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (24))){
var inst_33827 = (state_33874[(9)]);
var inst_33834 = (state_33874[(10)]);
var inst_33848 = (state_33874[(11)]);
var inst_33848__$1 = inst_33827.call(null,inst_33834);
var state_33874__$1 = (function (){var statearr_33882 = state_33874;
(statearr_33882[(11)] = inst_33848__$1);

return statearr_33882;
})();
if(cljs.core.truth_(inst_33848__$1)){
var statearr_33883_33943 = state_33874__$1;
(statearr_33883_33943[(1)] = (29));

} else {
var statearr_33884_33944 = state_33874__$1;
(statearr_33884_33944[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (4))){
var inst_33795 = (state_33874[(2)]);
var state_33874__$1 = state_33874;
if(cljs.core.truth_(inst_33795)){
var statearr_33885_33945 = state_33874__$1;
(statearr_33885_33945[(1)] = (8));

} else {
var statearr_33886_33946 = state_33874__$1;
(statearr_33886_33946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (15))){
var inst_33821 = (state_33874[(2)]);
var state_33874__$1 = state_33874;
if(cljs.core.truth_(inst_33821)){
var statearr_33887_33947 = state_33874__$1;
(statearr_33887_33947[(1)] = (19));

} else {
var statearr_33888_33948 = state_33874__$1;
(statearr_33888_33948[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (21))){
var inst_33826 = (state_33874[(12)]);
var inst_33826__$1 = (state_33874[(2)]);
var inst_33827 = cljs.core.get.call(null,inst_33826__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33828 = cljs.core.get.call(null,inst_33826__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33829 = cljs.core.get.call(null,inst_33826__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33874__$1 = (function (){var statearr_33889 = state_33874;
(statearr_33889[(12)] = inst_33826__$1);

(statearr_33889[(9)] = inst_33827);

(statearr_33889[(13)] = inst_33828);

return statearr_33889;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33874__$1,(22),inst_33829);
} else {
if((state_val_33875 === (31))){
var inst_33856 = (state_33874[(2)]);
var state_33874__$1 = state_33874;
if(cljs.core.truth_(inst_33856)){
var statearr_33890_33949 = state_33874__$1;
(statearr_33890_33949[(1)] = (32));

} else {
var statearr_33891_33950 = state_33874__$1;
(statearr_33891_33950[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (32))){
var inst_33833 = (state_33874[(14)]);
var state_33874__$1 = state_33874;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33874__$1,(35),out,inst_33833);
} else {
if((state_val_33875 === (33))){
var inst_33826 = (state_33874[(12)]);
var inst_33804 = inst_33826;
var state_33874__$1 = (function (){var statearr_33892 = state_33874;
(statearr_33892[(7)] = inst_33804);

return statearr_33892;
})();
var statearr_33893_33951 = state_33874__$1;
(statearr_33893_33951[(2)] = null);

(statearr_33893_33951[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (13))){
var inst_33804 = (state_33874[(7)]);
var inst_33811 = inst_33804.cljs$lang$protocol_mask$partition0$;
var inst_33812 = (inst_33811 & (64));
var inst_33813 = inst_33804.cljs$core$ISeq$;
var inst_33814 = (inst_33812) || (inst_33813);
var state_33874__$1 = state_33874;
if(cljs.core.truth_(inst_33814)){
var statearr_33894_33952 = state_33874__$1;
(statearr_33894_33952[(1)] = (16));

} else {
var statearr_33895_33953 = state_33874__$1;
(statearr_33895_33953[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (22))){
var inst_33834 = (state_33874[(10)]);
var inst_33833 = (state_33874[(14)]);
var inst_33832 = (state_33874[(2)]);
var inst_33833__$1 = cljs.core.nth.call(null,inst_33832,(0),null);
var inst_33834__$1 = cljs.core.nth.call(null,inst_33832,(1),null);
var inst_33835 = (inst_33833__$1 == null);
var inst_33836 = cljs.core._EQ_.call(null,inst_33834__$1,change);
var inst_33837 = (inst_33835) || (inst_33836);
var state_33874__$1 = (function (){var statearr_33896 = state_33874;
(statearr_33896[(10)] = inst_33834__$1);

(statearr_33896[(14)] = inst_33833__$1);

return statearr_33896;
})();
if(cljs.core.truth_(inst_33837)){
var statearr_33897_33954 = state_33874__$1;
(statearr_33897_33954[(1)] = (23));

} else {
var statearr_33898_33955 = state_33874__$1;
(statearr_33898_33955[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (36))){
var inst_33826 = (state_33874[(12)]);
var inst_33804 = inst_33826;
var state_33874__$1 = (function (){var statearr_33899 = state_33874;
(statearr_33899[(7)] = inst_33804);

return statearr_33899;
})();
var statearr_33900_33956 = state_33874__$1;
(statearr_33900_33956[(2)] = null);

(statearr_33900_33956[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (29))){
var inst_33848 = (state_33874[(11)]);
var state_33874__$1 = state_33874;
var statearr_33901_33957 = state_33874__$1;
(statearr_33901_33957[(2)] = inst_33848);

(statearr_33901_33957[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (6))){
var state_33874__$1 = state_33874;
var statearr_33902_33958 = state_33874__$1;
(statearr_33902_33958[(2)] = false);

(statearr_33902_33958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (28))){
var inst_33844 = (state_33874[(2)]);
var inst_33845 = calc_state.call(null);
var inst_33804 = inst_33845;
var state_33874__$1 = (function (){var statearr_33903 = state_33874;
(statearr_33903[(15)] = inst_33844);

(statearr_33903[(7)] = inst_33804);

return statearr_33903;
})();
var statearr_33904_33959 = state_33874__$1;
(statearr_33904_33959[(2)] = null);

(statearr_33904_33959[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (25))){
var inst_33870 = (state_33874[(2)]);
var state_33874__$1 = state_33874;
var statearr_33905_33960 = state_33874__$1;
(statearr_33905_33960[(2)] = inst_33870);

(statearr_33905_33960[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (34))){
var inst_33868 = (state_33874[(2)]);
var state_33874__$1 = state_33874;
var statearr_33906_33961 = state_33874__$1;
(statearr_33906_33961[(2)] = inst_33868);

(statearr_33906_33961[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (17))){
var state_33874__$1 = state_33874;
var statearr_33907_33962 = state_33874__$1;
(statearr_33907_33962[(2)] = false);

(statearr_33907_33962[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (3))){
var state_33874__$1 = state_33874;
var statearr_33908_33963 = state_33874__$1;
(statearr_33908_33963[(2)] = false);

(statearr_33908_33963[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (12))){
var inst_33872 = (state_33874[(2)]);
var state_33874__$1 = state_33874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33874__$1,inst_33872);
} else {
if((state_val_33875 === (2))){
var inst_33780 = (state_33874[(8)]);
var inst_33785 = inst_33780.cljs$lang$protocol_mask$partition0$;
var inst_33786 = (inst_33785 & (64));
var inst_33787 = inst_33780.cljs$core$ISeq$;
var inst_33788 = (inst_33786) || (inst_33787);
var state_33874__$1 = state_33874;
if(cljs.core.truth_(inst_33788)){
var statearr_33909_33964 = state_33874__$1;
(statearr_33909_33964[(1)] = (5));

} else {
var statearr_33910_33965 = state_33874__$1;
(statearr_33910_33965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (23))){
var inst_33833 = (state_33874[(14)]);
var inst_33839 = (inst_33833 == null);
var state_33874__$1 = state_33874;
if(cljs.core.truth_(inst_33839)){
var statearr_33911_33966 = state_33874__$1;
(statearr_33911_33966[(1)] = (26));

} else {
var statearr_33912_33967 = state_33874__$1;
(statearr_33912_33967[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (35))){
var inst_33859 = (state_33874[(2)]);
var state_33874__$1 = state_33874;
if(cljs.core.truth_(inst_33859)){
var statearr_33913_33968 = state_33874__$1;
(statearr_33913_33968[(1)] = (36));

} else {
var statearr_33914_33969 = state_33874__$1;
(statearr_33914_33969[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (19))){
var inst_33804 = (state_33874[(7)]);
var inst_33823 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33804);
var state_33874__$1 = state_33874;
var statearr_33915_33970 = state_33874__$1;
(statearr_33915_33970[(2)] = inst_33823);

(statearr_33915_33970[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (11))){
var inst_33804 = (state_33874[(7)]);
var inst_33808 = (inst_33804 == null);
var inst_33809 = cljs.core.not.call(null,inst_33808);
var state_33874__$1 = state_33874;
if(inst_33809){
var statearr_33916_33971 = state_33874__$1;
(statearr_33916_33971[(1)] = (13));

} else {
var statearr_33917_33972 = state_33874__$1;
(statearr_33917_33972[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (9))){
var inst_33780 = (state_33874[(8)]);
var state_33874__$1 = state_33874;
var statearr_33918_33973 = state_33874__$1;
(statearr_33918_33973[(2)] = inst_33780);

(statearr_33918_33973[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (5))){
var state_33874__$1 = state_33874;
var statearr_33919_33974 = state_33874__$1;
(statearr_33919_33974[(2)] = true);

(statearr_33919_33974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (14))){
var state_33874__$1 = state_33874;
var statearr_33920_33975 = state_33874__$1;
(statearr_33920_33975[(2)] = false);

(statearr_33920_33975[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (26))){
var inst_33834 = (state_33874[(10)]);
var inst_33841 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33834);
var state_33874__$1 = state_33874;
var statearr_33921_33976 = state_33874__$1;
(statearr_33921_33976[(2)] = inst_33841);

(statearr_33921_33976[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (16))){
var state_33874__$1 = state_33874;
var statearr_33922_33977 = state_33874__$1;
(statearr_33922_33977[(2)] = true);

(statearr_33922_33977[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (38))){
var inst_33864 = (state_33874[(2)]);
var state_33874__$1 = state_33874;
var statearr_33923_33978 = state_33874__$1;
(statearr_33923_33978[(2)] = inst_33864);

(statearr_33923_33978[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (30))){
var inst_33827 = (state_33874[(9)]);
var inst_33834 = (state_33874[(10)]);
var inst_33828 = (state_33874[(13)]);
var inst_33851 = cljs.core.empty_QMARK_.call(null,inst_33827);
var inst_33852 = inst_33828.call(null,inst_33834);
var inst_33853 = cljs.core.not.call(null,inst_33852);
var inst_33854 = (inst_33851) && (inst_33853);
var state_33874__$1 = state_33874;
var statearr_33924_33979 = state_33874__$1;
(statearr_33924_33979[(2)] = inst_33854);

(statearr_33924_33979[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (10))){
var inst_33780 = (state_33874[(8)]);
var inst_33800 = (state_33874[(2)]);
var inst_33801 = cljs.core.get.call(null,inst_33800,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33802 = cljs.core.get.call(null,inst_33800,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33803 = cljs.core.get.call(null,inst_33800,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33804 = inst_33780;
var state_33874__$1 = (function (){var statearr_33925 = state_33874;
(statearr_33925[(16)] = inst_33802);

(statearr_33925[(17)] = inst_33803);

(statearr_33925[(7)] = inst_33804);

(statearr_33925[(18)] = inst_33801);

return statearr_33925;
})();
var statearr_33926_33980 = state_33874__$1;
(statearr_33926_33980[(2)] = null);

(statearr_33926_33980[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (18))){
var inst_33818 = (state_33874[(2)]);
var state_33874__$1 = state_33874;
var statearr_33927_33981 = state_33874__$1;
(statearr_33927_33981[(2)] = inst_33818);

(statearr_33927_33981[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (37))){
var state_33874__$1 = state_33874;
var statearr_33928_33982 = state_33874__$1;
(statearr_33928_33982[(2)] = null);

(statearr_33928_33982[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33875 === (8))){
var inst_33780 = (state_33874[(8)]);
var inst_33797 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33780);
var state_33874__$1 = state_33874;
var statearr_33929_33983 = state_33874__$1;
(statearr_33929_33983[(2)] = inst_33797);

(statearr_33929_33983[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24785__auto___33937,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24720__auto__,c__24785__auto___33937,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24721__auto__ = null;
var cljs$core$async$mix_$_state_machine__24721__auto____0 = (function (){
var statearr_33933 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33933[(0)] = cljs$core$async$mix_$_state_machine__24721__auto__);

(statearr_33933[(1)] = (1));

return statearr_33933;
});
var cljs$core$async$mix_$_state_machine__24721__auto____1 = (function (state_33874){
while(true){
var ret_value__24722__auto__ = (function (){try{while(true){
var result__24723__auto__ = switch__24720__auto__.call(null,state_33874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24723__auto__;
}
break;
}
}catch (e33934){if((e33934 instanceof Object)){
var ex__24724__auto__ = e33934;
var statearr_33935_33984 = state_33874;
(statearr_33935_33984[(5)] = ex__24724__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33985 = state_33874;
state_33874 = G__33985;
continue;
} else {
return ret_value__24722__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24721__auto__ = function(state_33874){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24721__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24721__auto____1.call(this,state_33874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24721__auto____0;
cljs$core$async$mix_$_state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24721__auto____1;
return cljs$core$async$mix_$_state_machine__24721__auto__;
})()
;})(switch__24720__auto__,c__24785__auto___33937,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24787__auto__ = (function (){var statearr_33936 = f__24786__auto__.call(null);
(statearr_33936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24785__auto___33937);

return statearr_33936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24787__auto__);
});})(c__24785__auto___33937,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__22360__auto__ = (((p == null))?null:p);
var m__22361__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__22360__auto__)]);
if(!((m__22361__auto__ == null))){
return m__22361__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__22361__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__22361__auto____$1 == null))){
return m__22361__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__22360__auto__ = (((p == null))?null:p);
var m__22361__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__22360__auto__)]);
if(!((m__22361__auto__ == null))){
return m__22361__auto__.call(null,p,v,ch);
} else {
var m__22361__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__22361__auto____$1 == null))){
return m__22361__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args33986 = [];
var len__22763__auto___33989 = arguments.length;
var i__22764__auto___33990 = (0);
while(true){
if((i__22764__auto___33990 < len__22763__auto___33989)){
args33986.push((arguments[i__22764__auto___33990]));

var G__33991 = (i__22764__auto___33990 + (1));
i__22764__auto___33990 = G__33991;
continue;
} else {
}
break;
}

var G__33988 = args33986.length;
switch (G__33988) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33986.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__22360__auto__ = (((p == null))?null:p);
var m__22361__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22360__auto__)]);
if(!((m__22361__auto__ == null))){
return m__22361__auto__.call(null,p);
} else {
var m__22361__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22361__auto____$1 == null))){
return m__22361__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__22360__auto__ = (((p == null))?null:p);
var m__22361__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22360__auto__)]);
if(!((m__22361__auto__ == null))){
return m__22361__auto__.call(null,p,v);
} else {
var m__22361__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22361__auto____$1 == null))){
return m__22361__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args33994 = [];
var len__22763__auto___34119 = arguments.length;
var i__22764__auto___34120 = (0);
while(true){
if((i__22764__auto___34120 < len__22763__auto___34119)){
args33994.push((arguments[i__22764__auto___34120]));

var G__34121 = (i__22764__auto___34120 + (1));
i__22764__auto___34120 = G__34121;
continue;
} else {
}
break;
}

var G__33996 = args33994.length;
switch (G__33996) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33994.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__21705__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__21705__auto__,mults){
return (function (p1__33993_SHARP_){
if(cljs.core.truth_(p1__33993_SHARP_.call(null,topic))){
return p1__33993_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33993_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__21705__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async33997 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33997 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33998){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33998 = meta33998;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33999,meta33998__$1){
var self__ = this;
var _33999__$1 = this;
return (new cljs.core.async.t_cljs$core$async33997(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33998__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33997.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33999){
var self__ = this;
var _33999__$1 = this;
return self__.meta33998;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33997.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33997.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33997.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async33997.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33997.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33997.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33997.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33997.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33998","meta33998",1470805854,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33997.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33997.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33997";

cljs.core.async.t_cljs$core$async33997.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22303__auto__,writer__22304__auto__,opt__22305__auto__){
return cljs.core._write.call(null,writer__22304__auto__,"cljs.core.async/t_cljs$core$async33997");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async33997 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33997(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33998){
return (new cljs.core.async.t_cljs$core$async33997(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33998));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33997(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24785__auto___34123 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24785__auto___34123,mults,ensure_mult,p){
return (function (){
var f__24786__auto__ = (function (){var switch__24720__auto__ = ((function (c__24785__auto___34123,mults,ensure_mult,p){
return (function (state_34071){
var state_val_34072 = (state_34071[(1)]);
if((state_val_34072 === (7))){
var inst_34067 = (state_34071[(2)]);
var state_34071__$1 = state_34071;
var statearr_34073_34124 = state_34071__$1;
(statearr_34073_34124[(2)] = inst_34067);

(statearr_34073_34124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34072 === (20))){
var state_34071__$1 = state_34071;
var statearr_34074_34125 = state_34071__$1;
(statearr_34074_34125[(2)] = null);

(statearr_34074_34125[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34072 === (1))){
var state_34071__$1 = state_34071;
var statearr_34075_34126 = state_34071__$1;
(statearr_34075_34126[(2)] = null);

(statearr_34075_34126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34072 === (24))){
var inst_34050 = (state_34071[(7)]);
var inst_34059 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34050);
var state_34071__$1 = state_34071;
var statearr_34076_34127 = state_34071__$1;
(statearr_34076_34127[(2)] = inst_34059);

(statearr_34076_34127[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34072 === (4))){
var inst_34002 = (state_34071[(8)]);
var inst_34002__$1 = (state_34071[(2)]);
var inst_34003 = (inst_34002__$1 == null);
var state_34071__$1 = (function (){var statearr_34077 = state_34071;
(statearr_34077[(8)] = inst_34002__$1);

return statearr_34077;
})();
if(cljs.core.truth_(inst_34003)){
var statearr_34078_34128 = state_34071__$1;
(statearr_34078_34128[(1)] = (5));

} else {
var statearr_34079_34129 = state_34071__$1;
(statearr_34079_34129[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34072 === (15))){
var inst_34044 = (state_34071[(2)]);
var state_34071__$1 = state_34071;
var statearr_34080_34130 = state_34071__$1;
(statearr_34080_34130[(2)] = inst_34044);

(statearr_34080_34130[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34072 === (21))){
var inst_34064 = (state_34071[(2)]);
var state_34071__$1 = (function (){var statearr_34081 = state_34071;
(statearr_34081[(9)] = inst_34064);

return statearr_34081;
})();
var statearr_34082_34131 = state_34071__$1;
(statearr_34082_34131[(2)] = null);

(statearr_34082_34131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34072 === (13))){
var inst_34026 = (state_34071[(10)]);
var inst_34028 = cljs.core.chunked_seq_QMARK_.call(null,inst_34026);
var state_34071__$1 = state_34071;
if(inst_34028){
var statearr_34083_34132 = state_34071__$1;
(statearr_34083_34132[(1)] = (16));

} else {
var statearr_34084_34133 = state_34071__$1;
(statearr_34084_34133[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34072 === (22))){
var inst_34056 = (state_34071[(2)]);
var state_34071__$1 = state_34071;
if(cljs.core.truth_(inst_34056)){
var statearr_34085_34134 = state_34071__$1;
(statearr_34085_34134[(1)] = (23));

} else {
var statearr_34086_34135 = state_34071__$1;
(statearr_34086_34135[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34072 === (6))){
var inst_34052 = (state_34071[(11)]);
var inst_34002 = (state_34071[(8)]);
var inst_34050 = (state_34071[(7)]);
var inst_34050__$1 = topic_fn.call(null,inst_34002);
var inst_34051 = cljs.core.deref.call(null,mults);
var inst_34052__$1 = cljs.core.get.call(null,inst_34051,inst_34050__$1);
var state_34071__$1 = (function (){var statearr_34087 = state_34071;
(statearr_34087[(11)] = inst_34052__$1);

(statearr_34087[(7)] = inst_34050__$1);

return statearr_34087;
})();
if(cljs.core.truth_(inst_34052__$1)){
var statearr_34088_34136 = state_34071__$1;
(statearr_34088_34136[(1)] = (19));

} else {
var statearr_34089_34137 = state_34071__$1;
(statearr_34089_34137[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34072 === (25))){
var inst_34061 = (state_34071[(2)]);
var state_34071__$1 = state_34071;
var statearr_34090_34138 = state_34071__$1;
(statearr_34090_34138[(2)] = inst_34061);

(statearr_34090_34138[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34072 === (17))){
var inst_34026 = (state_34071[(10)]);
var inst_34035 = cljs.core.first.call(null,inst_34026);
var inst_34036 = cljs.core.async.muxch_STAR_.call(null,inst_34035);
var inst_34037 = cljs.core.async.close_BANG_.call(null,inst_34036);
var inst_34038 = cljs.core.next.call(null,inst_34026);
var inst_34012 = inst_34038;
var inst_34013 = null;
var inst_34014 = (0);
var inst_34015 = (0);
var state_34071__$1 = (function (){var statearr_34091 = state_34071;
(statearr_34091[(12)] = inst_34012);

(statearr_34091[(13)] = inst_34015);

(statearr_34091[(14)] = inst_34037);

(statearr_34091[(15)] = inst_34014);

(statearr_34091[(16)] = inst_34013);

return statearr_34091;
})();
var statearr_34092_34139 = state_34071__$1;
(statearr_34092_34139[(2)] = null);

(statearr_34092_34139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34072 === (3))){
var inst_34069 = (state_34071[(2)]);
var state_34071__$1 = state_34071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34071__$1,inst_34069);
} else {
if((state_val_34072 === (12))){
var inst_34046 = (state_34071[(2)]);
var state_34071__$1 = state_34071;
var statearr_34093_34140 = state_34071__$1;
(statearr_34093_34140[(2)] = inst_34046);

(statearr_34093_34140[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34072 === (2))){
var state_34071__$1 = state_34071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34071__$1,(4),ch);
} else {
if((state_val_34072 === (23))){
var state_34071__$1 = state_34071;
var statearr_34094_34141 = state_34071__$1;
(statearr_34094_34141[(2)] = null);

(statearr_34094_34141[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34072 === (19))){
var inst_34052 = (state_34071[(11)]);
var inst_34002 = (state_34071[(8)]);
var inst_34054 = cljs.core.async.muxch_STAR_.call(null,inst_34052);
var state_34071__$1 = state_34071;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34071__$1,(22),inst_34054,inst_34002);
} else {
if((state_val_34072 === (11))){
var inst_34012 = (state_34071[(12)]);
var inst_34026 = (state_34071[(10)]);
var inst_34026__$1 = cljs.core.seq.call(null,inst_34012);
var state_34071__$1 = (function (){var statearr_34095 = state_34071;
(statearr_34095[(10)] = inst_34026__$1);

return statearr_34095;
})();
if(inst_34026__$1){
var statearr_34096_34142 = state_34071__$1;
(statearr_34096_34142[(1)] = (13));

} else {
var statearr_34097_34143 = state_34071__$1;
(statearr_34097_34143[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34072 === (9))){
var inst_34048 = (state_34071[(2)]);
var state_34071__$1 = state_34071;
var statearr_34098_34144 = state_34071__$1;
(statearr_34098_34144[(2)] = inst_34048);

(statearr_34098_34144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34072 === (5))){
var inst_34009 = cljs.core.deref.call(null,mults);
var inst_34010 = cljs.core.vals.call(null,inst_34009);
var inst_34011 = cljs.core.seq.call(null,inst_34010);
var inst_34012 = inst_34011;
var inst_34013 = null;
var inst_34014 = (0);
var inst_34015 = (0);
var state_34071__$1 = (function (){var statearr_34099 = state_34071;
(statearr_34099[(12)] = inst_34012);

(statearr_34099[(13)] = inst_34015);

(statearr_34099[(15)] = inst_34014);

(statearr_34099[(16)] = inst_34013);

return statearr_34099;
})();
var statearr_34100_34145 = state_34071__$1;
(statearr_34100_34145[(2)] = null);

(statearr_34100_34145[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34072 === (14))){
var state_34071__$1 = state_34071;
var statearr_34104_34146 = state_34071__$1;
(statearr_34104_34146[(2)] = null);

(statearr_34104_34146[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34072 === (16))){
var inst_34026 = (state_34071[(10)]);
var inst_34030 = cljs.core.chunk_first.call(null,inst_34026);
var inst_34031 = cljs.core.chunk_rest.call(null,inst_34026);
var inst_34032 = cljs.core.count.call(null,inst_34030);
var inst_34012 = inst_34031;
var inst_34013 = inst_34030;
var inst_34014 = inst_34032;
var inst_34015 = (0);
var state_34071__$1 = (function (){var statearr_34105 = state_34071;
(statearr_34105[(12)] = inst_34012);

(statearr_34105[(13)] = inst_34015);

(statearr_34105[(15)] = inst_34014);

(statearr_34105[(16)] = inst_34013);

return statearr_34105;
})();
var statearr_34106_34147 = state_34071__$1;
(statearr_34106_34147[(2)] = null);

(statearr_34106_34147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34072 === (10))){
var inst_34012 = (state_34071[(12)]);
var inst_34015 = (state_34071[(13)]);
var inst_34014 = (state_34071[(15)]);
var inst_34013 = (state_34071[(16)]);
var inst_34020 = cljs.core._nth.call(null,inst_34013,inst_34015);
var inst_34021 = cljs.core.async.muxch_STAR_.call(null,inst_34020);
var inst_34022 = cljs.core.async.close_BANG_.call(null,inst_34021);
var inst_34023 = (inst_34015 + (1));
var tmp34101 = inst_34012;
var tmp34102 = inst_34014;
var tmp34103 = inst_34013;
var inst_34012__$1 = tmp34101;
var inst_34013__$1 = tmp34103;
var inst_34014__$1 = tmp34102;
var inst_34015__$1 = inst_34023;
var state_34071__$1 = (function (){var statearr_34107 = state_34071;
(statearr_34107[(12)] = inst_34012__$1);

(statearr_34107[(13)] = inst_34015__$1);

(statearr_34107[(15)] = inst_34014__$1);

(statearr_34107[(17)] = inst_34022);

(statearr_34107[(16)] = inst_34013__$1);

return statearr_34107;
})();
var statearr_34108_34148 = state_34071__$1;
(statearr_34108_34148[(2)] = null);

(statearr_34108_34148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34072 === (18))){
var inst_34041 = (state_34071[(2)]);
var state_34071__$1 = state_34071;
var statearr_34109_34149 = state_34071__$1;
(statearr_34109_34149[(2)] = inst_34041);

(statearr_34109_34149[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34072 === (8))){
var inst_34015 = (state_34071[(13)]);
var inst_34014 = (state_34071[(15)]);
var inst_34017 = (inst_34015 < inst_34014);
var inst_34018 = inst_34017;
var state_34071__$1 = state_34071;
if(cljs.core.truth_(inst_34018)){
var statearr_34110_34150 = state_34071__$1;
(statearr_34110_34150[(1)] = (10));

} else {
var statearr_34111_34151 = state_34071__$1;
(statearr_34111_34151[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24785__auto___34123,mults,ensure_mult,p))
;
return ((function (switch__24720__auto__,c__24785__auto___34123,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24721__auto__ = null;
var cljs$core$async$state_machine__24721__auto____0 = (function (){
var statearr_34115 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34115[(0)] = cljs$core$async$state_machine__24721__auto__);

(statearr_34115[(1)] = (1));

return statearr_34115;
});
var cljs$core$async$state_machine__24721__auto____1 = (function (state_34071){
while(true){
var ret_value__24722__auto__ = (function (){try{while(true){
var result__24723__auto__ = switch__24720__auto__.call(null,state_34071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24723__auto__;
}
break;
}
}catch (e34116){if((e34116 instanceof Object)){
var ex__24724__auto__ = e34116;
var statearr_34117_34152 = state_34071;
(statearr_34117_34152[(5)] = ex__24724__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34153 = state_34071;
state_34071 = G__34153;
continue;
} else {
return ret_value__24722__auto__;
}
break;
}
});
cljs$core$async$state_machine__24721__auto__ = function(state_34071){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24721__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24721__auto____1.call(this,state_34071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24721__auto____0;
cljs$core$async$state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24721__auto____1;
return cljs$core$async$state_machine__24721__auto__;
})()
;})(switch__24720__auto__,c__24785__auto___34123,mults,ensure_mult,p))
})();
var state__24787__auto__ = (function (){var statearr_34118 = f__24786__auto__.call(null);
(statearr_34118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24785__auto___34123);

return statearr_34118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24787__auto__);
});})(c__24785__auto___34123,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args34154 = [];
var len__22763__auto___34157 = arguments.length;
var i__22764__auto___34158 = (0);
while(true){
if((i__22764__auto___34158 < len__22763__auto___34157)){
args34154.push((arguments[i__22764__auto___34158]));

var G__34159 = (i__22764__auto___34158 + (1));
i__22764__auto___34158 = G__34159;
continue;
} else {
}
break;
}

var G__34156 = args34154.length;
switch (G__34156) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34154.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args34161 = [];
var len__22763__auto___34164 = arguments.length;
var i__22764__auto___34165 = (0);
while(true){
if((i__22764__auto___34165 < len__22763__auto___34164)){
args34161.push((arguments[i__22764__auto___34165]));

var G__34166 = (i__22764__auto___34165 + (1));
i__22764__auto___34165 = G__34166;
continue;
} else {
}
break;
}

var G__34163 = args34161.length;
switch (G__34163) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34161.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args34168 = [];
var len__22763__auto___34239 = arguments.length;
var i__22764__auto___34240 = (0);
while(true){
if((i__22764__auto___34240 < len__22763__auto___34239)){
args34168.push((arguments[i__22764__auto___34240]));

var G__34241 = (i__22764__auto___34240 + (1));
i__22764__auto___34240 = G__34241;
continue;
} else {
}
break;
}

var G__34170 = args34168.length;
switch (G__34170) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34168.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__24785__auto___34243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24785__auto___34243,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24786__auto__ = (function (){var switch__24720__auto__ = ((function (c__24785__auto___34243,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34209){
var state_val_34210 = (state_34209[(1)]);
if((state_val_34210 === (7))){
var state_34209__$1 = state_34209;
var statearr_34211_34244 = state_34209__$1;
(statearr_34211_34244[(2)] = null);

(statearr_34211_34244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (1))){
var state_34209__$1 = state_34209;
var statearr_34212_34245 = state_34209__$1;
(statearr_34212_34245[(2)] = null);

(statearr_34212_34245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (4))){
var inst_34173 = (state_34209[(7)]);
var inst_34175 = (inst_34173 < cnt);
var state_34209__$1 = state_34209;
if(cljs.core.truth_(inst_34175)){
var statearr_34213_34246 = state_34209__$1;
(statearr_34213_34246[(1)] = (6));

} else {
var statearr_34214_34247 = state_34209__$1;
(statearr_34214_34247[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (15))){
var inst_34205 = (state_34209[(2)]);
var state_34209__$1 = state_34209;
var statearr_34215_34248 = state_34209__$1;
(statearr_34215_34248[(2)] = inst_34205);

(statearr_34215_34248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (13))){
var inst_34198 = cljs.core.async.close_BANG_.call(null,out);
var state_34209__$1 = state_34209;
var statearr_34216_34249 = state_34209__$1;
(statearr_34216_34249[(2)] = inst_34198);

(statearr_34216_34249[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (6))){
var state_34209__$1 = state_34209;
var statearr_34217_34250 = state_34209__$1;
(statearr_34217_34250[(2)] = null);

(statearr_34217_34250[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (3))){
var inst_34207 = (state_34209[(2)]);
var state_34209__$1 = state_34209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34209__$1,inst_34207);
} else {
if((state_val_34210 === (12))){
var inst_34195 = (state_34209[(8)]);
var inst_34195__$1 = (state_34209[(2)]);
var inst_34196 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34195__$1);
var state_34209__$1 = (function (){var statearr_34218 = state_34209;
(statearr_34218[(8)] = inst_34195__$1);

return statearr_34218;
})();
if(cljs.core.truth_(inst_34196)){
var statearr_34219_34251 = state_34209__$1;
(statearr_34219_34251[(1)] = (13));

} else {
var statearr_34220_34252 = state_34209__$1;
(statearr_34220_34252[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (2))){
var inst_34172 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34173 = (0);
var state_34209__$1 = (function (){var statearr_34221 = state_34209;
(statearr_34221[(9)] = inst_34172);

(statearr_34221[(7)] = inst_34173);

return statearr_34221;
})();
var statearr_34222_34253 = state_34209__$1;
(statearr_34222_34253[(2)] = null);

(statearr_34222_34253[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (11))){
var inst_34173 = (state_34209[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34209,(10),Object,null,(9));
var inst_34182 = chs__$1.call(null,inst_34173);
var inst_34183 = done.call(null,inst_34173);
var inst_34184 = cljs.core.async.take_BANG_.call(null,inst_34182,inst_34183);
var state_34209__$1 = state_34209;
var statearr_34223_34254 = state_34209__$1;
(statearr_34223_34254[(2)] = inst_34184);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34209__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (9))){
var inst_34173 = (state_34209[(7)]);
var inst_34186 = (state_34209[(2)]);
var inst_34187 = (inst_34173 + (1));
var inst_34173__$1 = inst_34187;
var state_34209__$1 = (function (){var statearr_34224 = state_34209;
(statearr_34224[(10)] = inst_34186);

(statearr_34224[(7)] = inst_34173__$1);

return statearr_34224;
})();
var statearr_34225_34255 = state_34209__$1;
(statearr_34225_34255[(2)] = null);

(statearr_34225_34255[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (5))){
var inst_34193 = (state_34209[(2)]);
var state_34209__$1 = (function (){var statearr_34226 = state_34209;
(statearr_34226[(11)] = inst_34193);

return statearr_34226;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34209__$1,(12),dchan);
} else {
if((state_val_34210 === (14))){
var inst_34195 = (state_34209[(8)]);
var inst_34200 = cljs.core.apply.call(null,f,inst_34195);
var state_34209__$1 = state_34209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34209__$1,(16),out,inst_34200);
} else {
if((state_val_34210 === (16))){
var inst_34202 = (state_34209[(2)]);
var state_34209__$1 = (function (){var statearr_34227 = state_34209;
(statearr_34227[(12)] = inst_34202);

return statearr_34227;
})();
var statearr_34228_34256 = state_34209__$1;
(statearr_34228_34256[(2)] = null);

(statearr_34228_34256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (10))){
var inst_34177 = (state_34209[(2)]);
var inst_34178 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34209__$1 = (function (){var statearr_34229 = state_34209;
(statearr_34229[(13)] = inst_34177);

return statearr_34229;
})();
var statearr_34230_34257 = state_34209__$1;
(statearr_34230_34257[(2)] = inst_34178);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34209__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (8))){
var inst_34191 = (state_34209[(2)]);
var state_34209__$1 = state_34209;
var statearr_34231_34258 = state_34209__$1;
(statearr_34231_34258[(2)] = inst_34191);

(statearr_34231_34258[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24785__auto___34243,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24720__auto__,c__24785__auto___34243,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24721__auto__ = null;
var cljs$core$async$state_machine__24721__auto____0 = (function (){
var statearr_34235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34235[(0)] = cljs$core$async$state_machine__24721__auto__);

(statearr_34235[(1)] = (1));

return statearr_34235;
});
var cljs$core$async$state_machine__24721__auto____1 = (function (state_34209){
while(true){
var ret_value__24722__auto__ = (function (){try{while(true){
var result__24723__auto__ = switch__24720__auto__.call(null,state_34209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24723__auto__;
}
break;
}
}catch (e34236){if((e34236 instanceof Object)){
var ex__24724__auto__ = e34236;
var statearr_34237_34259 = state_34209;
(statearr_34237_34259[(5)] = ex__24724__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34260 = state_34209;
state_34209 = G__34260;
continue;
} else {
return ret_value__24722__auto__;
}
break;
}
});
cljs$core$async$state_machine__24721__auto__ = function(state_34209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24721__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24721__auto____1.call(this,state_34209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24721__auto____0;
cljs$core$async$state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24721__auto____1;
return cljs$core$async$state_machine__24721__auto__;
})()
;})(switch__24720__auto__,c__24785__auto___34243,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24787__auto__ = (function (){var statearr_34238 = f__24786__auto__.call(null);
(statearr_34238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24785__auto___34243);

return statearr_34238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24787__auto__);
});})(c__24785__auto___34243,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args34262 = [];
var len__22763__auto___34318 = arguments.length;
var i__22764__auto___34319 = (0);
while(true){
if((i__22764__auto___34319 < len__22763__auto___34318)){
args34262.push((arguments[i__22764__auto___34319]));

var G__34320 = (i__22764__auto___34319 + (1));
i__22764__auto___34319 = G__34320;
continue;
} else {
}
break;
}

var G__34264 = args34262.length;
switch (G__34264) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34262.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24785__auto___34322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24785__auto___34322,out){
return (function (){
var f__24786__auto__ = (function (){var switch__24720__auto__ = ((function (c__24785__auto___34322,out){
return (function (state_34294){
var state_val_34295 = (state_34294[(1)]);
if((state_val_34295 === (7))){
var inst_34274 = (state_34294[(7)]);
var inst_34273 = (state_34294[(8)]);
var inst_34273__$1 = (state_34294[(2)]);
var inst_34274__$1 = cljs.core.nth.call(null,inst_34273__$1,(0),null);
var inst_34275 = cljs.core.nth.call(null,inst_34273__$1,(1),null);
var inst_34276 = (inst_34274__$1 == null);
var state_34294__$1 = (function (){var statearr_34296 = state_34294;
(statearr_34296[(7)] = inst_34274__$1);

(statearr_34296[(9)] = inst_34275);

(statearr_34296[(8)] = inst_34273__$1);

return statearr_34296;
})();
if(cljs.core.truth_(inst_34276)){
var statearr_34297_34323 = state_34294__$1;
(statearr_34297_34323[(1)] = (8));

} else {
var statearr_34298_34324 = state_34294__$1;
(statearr_34298_34324[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (1))){
var inst_34265 = cljs.core.vec.call(null,chs);
var inst_34266 = inst_34265;
var state_34294__$1 = (function (){var statearr_34299 = state_34294;
(statearr_34299[(10)] = inst_34266);

return statearr_34299;
})();
var statearr_34300_34325 = state_34294__$1;
(statearr_34300_34325[(2)] = null);

(statearr_34300_34325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (4))){
var inst_34266 = (state_34294[(10)]);
var state_34294__$1 = state_34294;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34294__$1,(7),inst_34266);
} else {
if((state_val_34295 === (6))){
var inst_34290 = (state_34294[(2)]);
var state_34294__$1 = state_34294;
var statearr_34301_34326 = state_34294__$1;
(statearr_34301_34326[(2)] = inst_34290);

(statearr_34301_34326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (3))){
var inst_34292 = (state_34294[(2)]);
var state_34294__$1 = state_34294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34294__$1,inst_34292);
} else {
if((state_val_34295 === (2))){
var inst_34266 = (state_34294[(10)]);
var inst_34268 = cljs.core.count.call(null,inst_34266);
var inst_34269 = (inst_34268 > (0));
var state_34294__$1 = state_34294;
if(cljs.core.truth_(inst_34269)){
var statearr_34303_34327 = state_34294__$1;
(statearr_34303_34327[(1)] = (4));

} else {
var statearr_34304_34328 = state_34294__$1;
(statearr_34304_34328[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (11))){
var inst_34266 = (state_34294[(10)]);
var inst_34283 = (state_34294[(2)]);
var tmp34302 = inst_34266;
var inst_34266__$1 = tmp34302;
var state_34294__$1 = (function (){var statearr_34305 = state_34294;
(statearr_34305[(10)] = inst_34266__$1);

(statearr_34305[(11)] = inst_34283);

return statearr_34305;
})();
var statearr_34306_34329 = state_34294__$1;
(statearr_34306_34329[(2)] = null);

(statearr_34306_34329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (9))){
var inst_34274 = (state_34294[(7)]);
var state_34294__$1 = state_34294;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34294__$1,(11),out,inst_34274);
} else {
if((state_val_34295 === (5))){
var inst_34288 = cljs.core.async.close_BANG_.call(null,out);
var state_34294__$1 = state_34294;
var statearr_34307_34330 = state_34294__$1;
(statearr_34307_34330[(2)] = inst_34288);

(statearr_34307_34330[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (10))){
var inst_34286 = (state_34294[(2)]);
var state_34294__$1 = state_34294;
var statearr_34308_34331 = state_34294__$1;
(statearr_34308_34331[(2)] = inst_34286);

(statearr_34308_34331[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (8))){
var inst_34274 = (state_34294[(7)]);
var inst_34275 = (state_34294[(9)]);
var inst_34266 = (state_34294[(10)]);
var inst_34273 = (state_34294[(8)]);
var inst_34278 = (function (){var cs = inst_34266;
var vec__34271 = inst_34273;
var v = inst_34274;
var c = inst_34275;
return ((function (cs,vec__34271,v,c,inst_34274,inst_34275,inst_34266,inst_34273,state_val_34295,c__24785__auto___34322,out){
return (function (p1__34261_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34261_SHARP_);
});
;})(cs,vec__34271,v,c,inst_34274,inst_34275,inst_34266,inst_34273,state_val_34295,c__24785__auto___34322,out))
})();
var inst_34279 = cljs.core.filterv.call(null,inst_34278,inst_34266);
var inst_34266__$1 = inst_34279;
var state_34294__$1 = (function (){var statearr_34309 = state_34294;
(statearr_34309[(10)] = inst_34266__$1);

return statearr_34309;
})();
var statearr_34310_34332 = state_34294__$1;
(statearr_34310_34332[(2)] = null);

(statearr_34310_34332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__24785__auto___34322,out))
;
return ((function (switch__24720__auto__,c__24785__auto___34322,out){
return (function() {
var cljs$core$async$state_machine__24721__auto__ = null;
var cljs$core$async$state_machine__24721__auto____0 = (function (){
var statearr_34314 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34314[(0)] = cljs$core$async$state_machine__24721__auto__);

(statearr_34314[(1)] = (1));

return statearr_34314;
});
var cljs$core$async$state_machine__24721__auto____1 = (function (state_34294){
while(true){
var ret_value__24722__auto__ = (function (){try{while(true){
var result__24723__auto__ = switch__24720__auto__.call(null,state_34294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24723__auto__;
}
break;
}
}catch (e34315){if((e34315 instanceof Object)){
var ex__24724__auto__ = e34315;
var statearr_34316_34333 = state_34294;
(statearr_34316_34333[(5)] = ex__24724__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34334 = state_34294;
state_34294 = G__34334;
continue;
} else {
return ret_value__24722__auto__;
}
break;
}
});
cljs$core$async$state_machine__24721__auto__ = function(state_34294){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24721__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24721__auto____1.call(this,state_34294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24721__auto____0;
cljs$core$async$state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24721__auto____1;
return cljs$core$async$state_machine__24721__auto__;
})()
;})(switch__24720__auto__,c__24785__auto___34322,out))
})();
var state__24787__auto__ = (function (){var statearr_34317 = f__24786__auto__.call(null);
(statearr_34317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24785__auto___34322);

return statearr_34317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24787__auto__);
});})(c__24785__auto___34322,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args34335 = [];
var len__22763__auto___34384 = arguments.length;
var i__22764__auto___34385 = (0);
while(true){
if((i__22764__auto___34385 < len__22763__auto___34384)){
args34335.push((arguments[i__22764__auto___34385]));

var G__34386 = (i__22764__auto___34385 + (1));
i__22764__auto___34385 = G__34386;
continue;
} else {
}
break;
}

var G__34337 = args34335.length;
switch (G__34337) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34335.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24785__auto___34388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24785__auto___34388,out){
return (function (){
var f__24786__auto__ = (function (){var switch__24720__auto__ = ((function (c__24785__auto___34388,out){
return (function (state_34361){
var state_val_34362 = (state_34361[(1)]);
if((state_val_34362 === (7))){
var inst_34343 = (state_34361[(7)]);
var inst_34343__$1 = (state_34361[(2)]);
var inst_34344 = (inst_34343__$1 == null);
var inst_34345 = cljs.core.not.call(null,inst_34344);
var state_34361__$1 = (function (){var statearr_34363 = state_34361;
(statearr_34363[(7)] = inst_34343__$1);

return statearr_34363;
})();
if(inst_34345){
var statearr_34364_34389 = state_34361__$1;
(statearr_34364_34389[(1)] = (8));

} else {
var statearr_34365_34390 = state_34361__$1;
(statearr_34365_34390[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (1))){
var inst_34338 = (0);
var state_34361__$1 = (function (){var statearr_34366 = state_34361;
(statearr_34366[(8)] = inst_34338);

return statearr_34366;
})();
var statearr_34367_34391 = state_34361__$1;
(statearr_34367_34391[(2)] = null);

(statearr_34367_34391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (4))){
var state_34361__$1 = state_34361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34361__$1,(7),ch);
} else {
if((state_val_34362 === (6))){
var inst_34356 = (state_34361[(2)]);
var state_34361__$1 = state_34361;
var statearr_34368_34392 = state_34361__$1;
(statearr_34368_34392[(2)] = inst_34356);

(statearr_34368_34392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (3))){
var inst_34358 = (state_34361[(2)]);
var inst_34359 = cljs.core.async.close_BANG_.call(null,out);
var state_34361__$1 = (function (){var statearr_34369 = state_34361;
(statearr_34369[(9)] = inst_34358);

return statearr_34369;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34361__$1,inst_34359);
} else {
if((state_val_34362 === (2))){
var inst_34338 = (state_34361[(8)]);
var inst_34340 = (inst_34338 < n);
var state_34361__$1 = state_34361;
if(cljs.core.truth_(inst_34340)){
var statearr_34370_34393 = state_34361__$1;
(statearr_34370_34393[(1)] = (4));

} else {
var statearr_34371_34394 = state_34361__$1;
(statearr_34371_34394[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (11))){
var inst_34338 = (state_34361[(8)]);
var inst_34348 = (state_34361[(2)]);
var inst_34349 = (inst_34338 + (1));
var inst_34338__$1 = inst_34349;
var state_34361__$1 = (function (){var statearr_34372 = state_34361;
(statearr_34372[(8)] = inst_34338__$1);

(statearr_34372[(10)] = inst_34348);

return statearr_34372;
})();
var statearr_34373_34395 = state_34361__$1;
(statearr_34373_34395[(2)] = null);

(statearr_34373_34395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (9))){
var state_34361__$1 = state_34361;
var statearr_34374_34396 = state_34361__$1;
(statearr_34374_34396[(2)] = null);

(statearr_34374_34396[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (5))){
var state_34361__$1 = state_34361;
var statearr_34375_34397 = state_34361__$1;
(statearr_34375_34397[(2)] = null);

(statearr_34375_34397[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (10))){
var inst_34353 = (state_34361[(2)]);
var state_34361__$1 = state_34361;
var statearr_34376_34398 = state_34361__$1;
(statearr_34376_34398[(2)] = inst_34353);

(statearr_34376_34398[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (8))){
var inst_34343 = (state_34361[(7)]);
var state_34361__$1 = state_34361;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34361__$1,(11),out,inst_34343);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__24785__auto___34388,out))
;
return ((function (switch__24720__auto__,c__24785__auto___34388,out){
return (function() {
var cljs$core$async$state_machine__24721__auto__ = null;
var cljs$core$async$state_machine__24721__auto____0 = (function (){
var statearr_34380 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34380[(0)] = cljs$core$async$state_machine__24721__auto__);

(statearr_34380[(1)] = (1));

return statearr_34380;
});
var cljs$core$async$state_machine__24721__auto____1 = (function (state_34361){
while(true){
var ret_value__24722__auto__ = (function (){try{while(true){
var result__24723__auto__ = switch__24720__auto__.call(null,state_34361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24723__auto__;
}
break;
}
}catch (e34381){if((e34381 instanceof Object)){
var ex__24724__auto__ = e34381;
var statearr_34382_34399 = state_34361;
(statearr_34382_34399[(5)] = ex__24724__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34400 = state_34361;
state_34361 = G__34400;
continue;
} else {
return ret_value__24722__auto__;
}
break;
}
});
cljs$core$async$state_machine__24721__auto__ = function(state_34361){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24721__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24721__auto____1.call(this,state_34361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24721__auto____0;
cljs$core$async$state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24721__auto____1;
return cljs$core$async$state_machine__24721__auto__;
})()
;})(switch__24720__auto__,c__24785__auto___34388,out))
})();
var state__24787__auto__ = (function (){var statearr_34383 = f__24786__auto__.call(null);
(statearr_34383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24785__auto___34388);

return statearr_34383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24787__auto__);
});})(c__24785__auto___34388,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34408 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34408 = (function (map_LT_,f,ch,meta34409){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta34409 = meta34409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34410,meta34409__$1){
var self__ = this;
var _34410__$1 = this;
return (new cljs.core.async.t_cljs$core$async34408(self__.map_LT_,self__.f,self__.ch,meta34409__$1));
});

cljs.core.async.t_cljs$core$async34408.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34410){
var self__ = this;
var _34410__$1 = this;
return self__.meta34409;
});

cljs.core.async.t_cljs$core$async34408.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34408.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34408.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34408.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34408.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async34411 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34411 = (function (map_LT_,f,ch,meta34409,_,fn1,meta34412){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta34409 = meta34409;
this._ = _;
this.fn1 = fn1;
this.meta34412 = meta34412;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34413,meta34412__$1){
var self__ = this;
var _34413__$1 = this;
return (new cljs.core.async.t_cljs$core$async34411(self__.map_LT_,self__.f,self__.ch,self__.meta34409,self__._,self__.fn1,meta34412__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34411.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34413){
var self__ = this;
var _34413__$1 = this;
return self__.meta34412;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34411.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34411.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34411.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34401_SHARP_){
return f1.call(null,(((p1__34401_SHARP_ == null))?null:self__.f.call(null,p1__34401_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34411.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34409","meta34409",12506569,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34408","cljs.core.async/t_cljs$core$async34408",878710209,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34412","meta34412",-1901723496,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34411.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34411.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34411";

cljs.core.async.t_cljs$core$async34411.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22303__auto__,writer__22304__auto__,opt__22305__auto__){
return cljs.core._write.call(null,writer__22304__auto__,"cljs.core.async/t_cljs$core$async34411");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async34411 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34411(map_LT___$1,f__$1,ch__$1,meta34409__$1,___$2,fn1__$1,meta34412){
return (new cljs.core.async.t_cljs$core$async34411(map_LT___$1,f__$1,ch__$1,meta34409__$1,___$2,fn1__$1,meta34412));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34411(self__.map_LT_,self__.f,self__.ch,self__.meta34409,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__21693__auto__ = ret;
if(cljs.core.truth_(and__21693__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__21693__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34408.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34408.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34408.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34409","meta34409",12506569,null)], null);
});

cljs.core.async.t_cljs$core$async34408.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34408.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34408";

cljs.core.async.t_cljs$core$async34408.cljs$lang$ctorPrWriter = (function (this__22303__auto__,writer__22304__auto__,opt__22305__auto__){
return cljs.core._write.call(null,writer__22304__auto__,"cljs.core.async/t_cljs$core$async34408");
});

cljs.core.async.__GT_t_cljs$core$async34408 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34408(map_LT___$1,f__$1,ch__$1,meta34409){
return (new cljs.core.async.t_cljs$core$async34408(map_LT___$1,f__$1,ch__$1,meta34409));
});

}

return (new cljs.core.async.t_cljs$core$async34408(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34417 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34417 = (function (map_GT_,f,ch,meta34418){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta34418 = meta34418;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34419,meta34418__$1){
var self__ = this;
var _34419__$1 = this;
return (new cljs.core.async.t_cljs$core$async34417(self__.map_GT_,self__.f,self__.ch,meta34418__$1));
});

cljs.core.async.t_cljs$core$async34417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34419){
var self__ = this;
var _34419__$1 = this;
return self__.meta34418;
});

cljs.core.async.t_cljs$core$async34417.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34417.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34417.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34417.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34417.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34417.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34417.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34418","meta34418",-1868282899,null)], null);
});

cljs.core.async.t_cljs$core$async34417.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34417.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34417";

cljs.core.async.t_cljs$core$async34417.cljs$lang$ctorPrWriter = (function (this__22303__auto__,writer__22304__auto__,opt__22305__auto__){
return cljs.core._write.call(null,writer__22304__auto__,"cljs.core.async/t_cljs$core$async34417");
});

cljs.core.async.__GT_t_cljs$core$async34417 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34417(map_GT___$1,f__$1,ch__$1,meta34418){
return (new cljs.core.async.t_cljs$core$async34417(map_GT___$1,f__$1,ch__$1,meta34418));
});

}

return (new cljs.core.async.t_cljs$core$async34417(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async34423 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34423 = (function (filter_GT_,p,ch,meta34424){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta34424 = meta34424;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34425,meta34424__$1){
var self__ = this;
var _34425__$1 = this;
return (new cljs.core.async.t_cljs$core$async34423(self__.filter_GT_,self__.p,self__.ch,meta34424__$1));
});

cljs.core.async.t_cljs$core$async34423.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34425){
var self__ = this;
var _34425__$1 = this;
return self__.meta34424;
});

cljs.core.async.t_cljs$core$async34423.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34423.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34423.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34423.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34423.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34423.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34423.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34423.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34424","meta34424",-1213748829,null)], null);
});

cljs.core.async.t_cljs$core$async34423.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34423.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34423";

cljs.core.async.t_cljs$core$async34423.cljs$lang$ctorPrWriter = (function (this__22303__auto__,writer__22304__auto__,opt__22305__auto__){
return cljs.core._write.call(null,writer__22304__auto__,"cljs.core.async/t_cljs$core$async34423");
});

cljs.core.async.__GT_t_cljs$core$async34423 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34423(filter_GT___$1,p__$1,ch__$1,meta34424){
return (new cljs.core.async.t_cljs$core$async34423(filter_GT___$1,p__$1,ch__$1,meta34424));
});

}

return (new cljs.core.async.t_cljs$core$async34423(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args34426 = [];
var len__22763__auto___34470 = arguments.length;
var i__22764__auto___34471 = (0);
while(true){
if((i__22764__auto___34471 < len__22763__auto___34470)){
args34426.push((arguments[i__22764__auto___34471]));

var G__34472 = (i__22764__auto___34471 + (1));
i__22764__auto___34471 = G__34472;
continue;
} else {
}
break;
}

var G__34428 = args34426.length;
switch (G__34428) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34426.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24785__auto___34474 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24785__auto___34474,out){
return (function (){
var f__24786__auto__ = (function (){var switch__24720__auto__ = ((function (c__24785__auto___34474,out){
return (function (state_34449){
var state_val_34450 = (state_34449[(1)]);
if((state_val_34450 === (7))){
var inst_34445 = (state_34449[(2)]);
var state_34449__$1 = state_34449;
var statearr_34451_34475 = state_34449__$1;
(statearr_34451_34475[(2)] = inst_34445);

(statearr_34451_34475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34450 === (1))){
var state_34449__$1 = state_34449;
var statearr_34452_34476 = state_34449__$1;
(statearr_34452_34476[(2)] = null);

(statearr_34452_34476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34450 === (4))){
var inst_34431 = (state_34449[(7)]);
var inst_34431__$1 = (state_34449[(2)]);
var inst_34432 = (inst_34431__$1 == null);
var state_34449__$1 = (function (){var statearr_34453 = state_34449;
(statearr_34453[(7)] = inst_34431__$1);

return statearr_34453;
})();
if(cljs.core.truth_(inst_34432)){
var statearr_34454_34477 = state_34449__$1;
(statearr_34454_34477[(1)] = (5));

} else {
var statearr_34455_34478 = state_34449__$1;
(statearr_34455_34478[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34450 === (6))){
var inst_34431 = (state_34449[(7)]);
var inst_34436 = p.call(null,inst_34431);
var state_34449__$1 = state_34449;
if(cljs.core.truth_(inst_34436)){
var statearr_34456_34479 = state_34449__$1;
(statearr_34456_34479[(1)] = (8));

} else {
var statearr_34457_34480 = state_34449__$1;
(statearr_34457_34480[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34450 === (3))){
var inst_34447 = (state_34449[(2)]);
var state_34449__$1 = state_34449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34449__$1,inst_34447);
} else {
if((state_val_34450 === (2))){
var state_34449__$1 = state_34449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34449__$1,(4),ch);
} else {
if((state_val_34450 === (11))){
var inst_34439 = (state_34449[(2)]);
var state_34449__$1 = state_34449;
var statearr_34458_34481 = state_34449__$1;
(statearr_34458_34481[(2)] = inst_34439);

(statearr_34458_34481[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34450 === (9))){
var state_34449__$1 = state_34449;
var statearr_34459_34482 = state_34449__$1;
(statearr_34459_34482[(2)] = null);

(statearr_34459_34482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34450 === (5))){
var inst_34434 = cljs.core.async.close_BANG_.call(null,out);
var state_34449__$1 = state_34449;
var statearr_34460_34483 = state_34449__$1;
(statearr_34460_34483[(2)] = inst_34434);

(statearr_34460_34483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34450 === (10))){
var inst_34442 = (state_34449[(2)]);
var state_34449__$1 = (function (){var statearr_34461 = state_34449;
(statearr_34461[(8)] = inst_34442);

return statearr_34461;
})();
var statearr_34462_34484 = state_34449__$1;
(statearr_34462_34484[(2)] = null);

(statearr_34462_34484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34450 === (8))){
var inst_34431 = (state_34449[(7)]);
var state_34449__$1 = state_34449;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34449__$1,(11),out,inst_34431);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__24785__auto___34474,out))
;
return ((function (switch__24720__auto__,c__24785__auto___34474,out){
return (function() {
var cljs$core$async$state_machine__24721__auto__ = null;
var cljs$core$async$state_machine__24721__auto____0 = (function (){
var statearr_34466 = [null,null,null,null,null,null,null,null,null];
(statearr_34466[(0)] = cljs$core$async$state_machine__24721__auto__);

(statearr_34466[(1)] = (1));

return statearr_34466;
});
var cljs$core$async$state_machine__24721__auto____1 = (function (state_34449){
while(true){
var ret_value__24722__auto__ = (function (){try{while(true){
var result__24723__auto__ = switch__24720__auto__.call(null,state_34449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24723__auto__;
}
break;
}
}catch (e34467){if((e34467 instanceof Object)){
var ex__24724__auto__ = e34467;
var statearr_34468_34485 = state_34449;
(statearr_34468_34485[(5)] = ex__24724__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34486 = state_34449;
state_34449 = G__34486;
continue;
} else {
return ret_value__24722__auto__;
}
break;
}
});
cljs$core$async$state_machine__24721__auto__ = function(state_34449){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24721__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24721__auto____1.call(this,state_34449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24721__auto____0;
cljs$core$async$state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24721__auto____1;
return cljs$core$async$state_machine__24721__auto__;
})()
;})(switch__24720__auto__,c__24785__auto___34474,out))
})();
var state__24787__auto__ = (function (){var statearr_34469 = f__24786__auto__.call(null);
(statearr_34469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24785__auto___34474);

return statearr_34469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24787__auto__);
});})(c__24785__auto___34474,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args34487 = [];
var len__22763__auto___34490 = arguments.length;
var i__22764__auto___34491 = (0);
while(true){
if((i__22764__auto___34491 < len__22763__auto___34490)){
args34487.push((arguments[i__22764__auto___34491]));

var G__34492 = (i__22764__auto___34491 + (1));
i__22764__auto___34491 = G__34492;
continue;
} else {
}
break;
}

var G__34489 = args34487.length;
switch (G__34489) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34487.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24785__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24785__auto__){
return (function (){
var f__24786__auto__ = (function (){var switch__24720__auto__ = ((function (c__24785__auto__){
return (function (state_34659){
var state_val_34660 = (state_34659[(1)]);
if((state_val_34660 === (7))){
var inst_34655 = (state_34659[(2)]);
var state_34659__$1 = state_34659;
var statearr_34661_34702 = state_34659__$1;
(statearr_34661_34702[(2)] = inst_34655);

(statearr_34661_34702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (20))){
var inst_34625 = (state_34659[(7)]);
var inst_34636 = (state_34659[(2)]);
var inst_34637 = cljs.core.next.call(null,inst_34625);
var inst_34611 = inst_34637;
var inst_34612 = null;
var inst_34613 = (0);
var inst_34614 = (0);
var state_34659__$1 = (function (){var statearr_34662 = state_34659;
(statearr_34662[(8)] = inst_34636);

(statearr_34662[(9)] = inst_34614);

(statearr_34662[(10)] = inst_34613);

(statearr_34662[(11)] = inst_34611);

(statearr_34662[(12)] = inst_34612);

return statearr_34662;
})();
var statearr_34663_34703 = state_34659__$1;
(statearr_34663_34703[(2)] = null);

(statearr_34663_34703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (1))){
var state_34659__$1 = state_34659;
var statearr_34664_34704 = state_34659__$1;
(statearr_34664_34704[(2)] = null);

(statearr_34664_34704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (4))){
var inst_34600 = (state_34659[(13)]);
var inst_34600__$1 = (state_34659[(2)]);
var inst_34601 = (inst_34600__$1 == null);
var state_34659__$1 = (function (){var statearr_34665 = state_34659;
(statearr_34665[(13)] = inst_34600__$1);

return statearr_34665;
})();
if(cljs.core.truth_(inst_34601)){
var statearr_34666_34705 = state_34659__$1;
(statearr_34666_34705[(1)] = (5));

} else {
var statearr_34667_34706 = state_34659__$1;
(statearr_34667_34706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (15))){
var state_34659__$1 = state_34659;
var statearr_34671_34707 = state_34659__$1;
(statearr_34671_34707[(2)] = null);

(statearr_34671_34707[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (21))){
var state_34659__$1 = state_34659;
var statearr_34672_34708 = state_34659__$1;
(statearr_34672_34708[(2)] = null);

(statearr_34672_34708[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (13))){
var inst_34614 = (state_34659[(9)]);
var inst_34613 = (state_34659[(10)]);
var inst_34611 = (state_34659[(11)]);
var inst_34612 = (state_34659[(12)]);
var inst_34621 = (state_34659[(2)]);
var inst_34622 = (inst_34614 + (1));
var tmp34668 = inst_34613;
var tmp34669 = inst_34611;
var tmp34670 = inst_34612;
var inst_34611__$1 = tmp34669;
var inst_34612__$1 = tmp34670;
var inst_34613__$1 = tmp34668;
var inst_34614__$1 = inst_34622;
var state_34659__$1 = (function (){var statearr_34673 = state_34659;
(statearr_34673[(14)] = inst_34621);

(statearr_34673[(9)] = inst_34614__$1);

(statearr_34673[(10)] = inst_34613__$1);

(statearr_34673[(11)] = inst_34611__$1);

(statearr_34673[(12)] = inst_34612__$1);

return statearr_34673;
})();
var statearr_34674_34709 = state_34659__$1;
(statearr_34674_34709[(2)] = null);

(statearr_34674_34709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (22))){
var state_34659__$1 = state_34659;
var statearr_34675_34710 = state_34659__$1;
(statearr_34675_34710[(2)] = null);

(statearr_34675_34710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (6))){
var inst_34600 = (state_34659[(13)]);
var inst_34609 = f.call(null,inst_34600);
var inst_34610 = cljs.core.seq.call(null,inst_34609);
var inst_34611 = inst_34610;
var inst_34612 = null;
var inst_34613 = (0);
var inst_34614 = (0);
var state_34659__$1 = (function (){var statearr_34676 = state_34659;
(statearr_34676[(9)] = inst_34614);

(statearr_34676[(10)] = inst_34613);

(statearr_34676[(11)] = inst_34611);

(statearr_34676[(12)] = inst_34612);

return statearr_34676;
})();
var statearr_34677_34711 = state_34659__$1;
(statearr_34677_34711[(2)] = null);

(statearr_34677_34711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (17))){
var inst_34625 = (state_34659[(7)]);
var inst_34629 = cljs.core.chunk_first.call(null,inst_34625);
var inst_34630 = cljs.core.chunk_rest.call(null,inst_34625);
var inst_34631 = cljs.core.count.call(null,inst_34629);
var inst_34611 = inst_34630;
var inst_34612 = inst_34629;
var inst_34613 = inst_34631;
var inst_34614 = (0);
var state_34659__$1 = (function (){var statearr_34678 = state_34659;
(statearr_34678[(9)] = inst_34614);

(statearr_34678[(10)] = inst_34613);

(statearr_34678[(11)] = inst_34611);

(statearr_34678[(12)] = inst_34612);

return statearr_34678;
})();
var statearr_34679_34712 = state_34659__$1;
(statearr_34679_34712[(2)] = null);

(statearr_34679_34712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (3))){
var inst_34657 = (state_34659[(2)]);
var state_34659__$1 = state_34659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34659__$1,inst_34657);
} else {
if((state_val_34660 === (12))){
var inst_34645 = (state_34659[(2)]);
var state_34659__$1 = state_34659;
var statearr_34680_34713 = state_34659__$1;
(statearr_34680_34713[(2)] = inst_34645);

(statearr_34680_34713[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (2))){
var state_34659__$1 = state_34659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34659__$1,(4),in$);
} else {
if((state_val_34660 === (23))){
var inst_34653 = (state_34659[(2)]);
var state_34659__$1 = state_34659;
var statearr_34681_34714 = state_34659__$1;
(statearr_34681_34714[(2)] = inst_34653);

(statearr_34681_34714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (19))){
var inst_34640 = (state_34659[(2)]);
var state_34659__$1 = state_34659;
var statearr_34682_34715 = state_34659__$1;
(statearr_34682_34715[(2)] = inst_34640);

(statearr_34682_34715[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (11))){
var inst_34625 = (state_34659[(7)]);
var inst_34611 = (state_34659[(11)]);
var inst_34625__$1 = cljs.core.seq.call(null,inst_34611);
var state_34659__$1 = (function (){var statearr_34683 = state_34659;
(statearr_34683[(7)] = inst_34625__$1);

return statearr_34683;
})();
if(inst_34625__$1){
var statearr_34684_34716 = state_34659__$1;
(statearr_34684_34716[(1)] = (14));

} else {
var statearr_34685_34717 = state_34659__$1;
(statearr_34685_34717[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (9))){
var inst_34647 = (state_34659[(2)]);
var inst_34648 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34659__$1 = (function (){var statearr_34686 = state_34659;
(statearr_34686[(15)] = inst_34647);

return statearr_34686;
})();
if(cljs.core.truth_(inst_34648)){
var statearr_34687_34718 = state_34659__$1;
(statearr_34687_34718[(1)] = (21));

} else {
var statearr_34688_34719 = state_34659__$1;
(statearr_34688_34719[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (5))){
var inst_34603 = cljs.core.async.close_BANG_.call(null,out);
var state_34659__$1 = state_34659;
var statearr_34689_34720 = state_34659__$1;
(statearr_34689_34720[(2)] = inst_34603);

(statearr_34689_34720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (14))){
var inst_34625 = (state_34659[(7)]);
var inst_34627 = cljs.core.chunked_seq_QMARK_.call(null,inst_34625);
var state_34659__$1 = state_34659;
if(inst_34627){
var statearr_34690_34721 = state_34659__$1;
(statearr_34690_34721[(1)] = (17));

} else {
var statearr_34691_34722 = state_34659__$1;
(statearr_34691_34722[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (16))){
var inst_34643 = (state_34659[(2)]);
var state_34659__$1 = state_34659;
var statearr_34692_34723 = state_34659__$1;
(statearr_34692_34723[(2)] = inst_34643);

(statearr_34692_34723[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (10))){
var inst_34614 = (state_34659[(9)]);
var inst_34612 = (state_34659[(12)]);
var inst_34619 = cljs.core._nth.call(null,inst_34612,inst_34614);
var state_34659__$1 = state_34659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34659__$1,(13),out,inst_34619);
} else {
if((state_val_34660 === (18))){
var inst_34625 = (state_34659[(7)]);
var inst_34634 = cljs.core.first.call(null,inst_34625);
var state_34659__$1 = state_34659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34659__$1,(20),out,inst_34634);
} else {
if((state_val_34660 === (8))){
var inst_34614 = (state_34659[(9)]);
var inst_34613 = (state_34659[(10)]);
var inst_34616 = (inst_34614 < inst_34613);
var inst_34617 = inst_34616;
var state_34659__$1 = state_34659;
if(cljs.core.truth_(inst_34617)){
var statearr_34693_34724 = state_34659__$1;
(statearr_34693_34724[(1)] = (10));

} else {
var statearr_34694_34725 = state_34659__$1;
(statearr_34694_34725[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24785__auto__))
;
return ((function (switch__24720__auto__,c__24785__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24721__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24721__auto____0 = (function (){
var statearr_34698 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34698[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24721__auto__);

(statearr_34698[(1)] = (1));

return statearr_34698;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24721__auto____1 = (function (state_34659){
while(true){
var ret_value__24722__auto__ = (function (){try{while(true){
var result__24723__auto__ = switch__24720__auto__.call(null,state_34659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24723__auto__;
}
break;
}
}catch (e34699){if((e34699 instanceof Object)){
var ex__24724__auto__ = e34699;
var statearr_34700_34726 = state_34659;
(statearr_34700_34726[(5)] = ex__24724__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34727 = state_34659;
state_34659 = G__34727;
continue;
} else {
return ret_value__24722__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24721__auto__ = function(state_34659){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24721__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24721__auto____1.call(this,state_34659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24721__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24721__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24721__auto__;
})()
;})(switch__24720__auto__,c__24785__auto__))
})();
var state__24787__auto__ = (function (){var statearr_34701 = f__24786__auto__.call(null);
(statearr_34701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24785__auto__);

return statearr_34701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24787__auto__);
});})(c__24785__auto__))
);

return c__24785__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args34728 = [];
var len__22763__auto___34731 = arguments.length;
var i__22764__auto___34732 = (0);
while(true){
if((i__22764__auto___34732 < len__22763__auto___34731)){
args34728.push((arguments[i__22764__auto___34732]));

var G__34733 = (i__22764__auto___34732 + (1));
i__22764__auto___34732 = G__34733;
continue;
} else {
}
break;
}

var G__34730 = args34728.length;
switch (G__34730) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34728.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args34735 = [];
var len__22763__auto___34738 = arguments.length;
var i__22764__auto___34739 = (0);
while(true){
if((i__22764__auto___34739 < len__22763__auto___34738)){
args34735.push((arguments[i__22764__auto___34739]));

var G__34740 = (i__22764__auto___34739 + (1));
i__22764__auto___34739 = G__34740;
continue;
} else {
}
break;
}

var G__34737 = args34735.length;
switch (G__34737) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34735.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args34742 = [];
var len__22763__auto___34793 = arguments.length;
var i__22764__auto___34794 = (0);
while(true){
if((i__22764__auto___34794 < len__22763__auto___34793)){
args34742.push((arguments[i__22764__auto___34794]));

var G__34795 = (i__22764__auto___34794 + (1));
i__22764__auto___34794 = G__34795;
continue;
} else {
}
break;
}

var G__34744 = args34742.length;
switch (G__34744) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34742.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24785__auto___34797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24785__auto___34797,out){
return (function (){
var f__24786__auto__ = (function (){var switch__24720__auto__ = ((function (c__24785__auto___34797,out){
return (function (state_34768){
var state_val_34769 = (state_34768[(1)]);
if((state_val_34769 === (7))){
var inst_34763 = (state_34768[(2)]);
var state_34768__$1 = state_34768;
var statearr_34770_34798 = state_34768__$1;
(statearr_34770_34798[(2)] = inst_34763);

(statearr_34770_34798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34769 === (1))){
var inst_34745 = null;
var state_34768__$1 = (function (){var statearr_34771 = state_34768;
(statearr_34771[(7)] = inst_34745);

return statearr_34771;
})();
var statearr_34772_34799 = state_34768__$1;
(statearr_34772_34799[(2)] = null);

(statearr_34772_34799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34769 === (4))){
var inst_34748 = (state_34768[(8)]);
var inst_34748__$1 = (state_34768[(2)]);
var inst_34749 = (inst_34748__$1 == null);
var inst_34750 = cljs.core.not.call(null,inst_34749);
var state_34768__$1 = (function (){var statearr_34773 = state_34768;
(statearr_34773[(8)] = inst_34748__$1);

return statearr_34773;
})();
if(inst_34750){
var statearr_34774_34800 = state_34768__$1;
(statearr_34774_34800[(1)] = (5));

} else {
var statearr_34775_34801 = state_34768__$1;
(statearr_34775_34801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34769 === (6))){
var state_34768__$1 = state_34768;
var statearr_34776_34802 = state_34768__$1;
(statearr_34776_34802[(2)] = null);

(statearr_34776_34802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34769 === (3))){
var inst_34765 = (state_34768[(2)]);
var inst_34766 = cljs.core.async.close_BANG_.call(null,out);
var state_34768__$1 = (function (){var statearr_34777 = state_34768;
(statearr_34777[(9)] = inst_34765);

return statearr_34777;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34768__$1,inst_34766);
} else {
if((state_val_34769 === (2))){
var state_34768__$1 = state_34768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34768__$1,(4),ch);
} else {
if((state_val_34769 === (11))){
var inst_34748 = (state_34768[(8)]);
var inst_34757 = (state_34768[(2)]);
var inst_34745 = inst_34748;
var state_34768__$1 = (function (){var statearr_34778 = state_34768;
(statearr_34778[(10)] = inst_34757);

(statearr_34778[(7)] = inst_34745);

return statearr_34778;
})();
var statearr_34779_34803 = state_34768__$1;
(statearr_34779_34803[(2)] = null);

(statearr_34779_34803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34769 === (9))){
var inst_34748 = (state_34768[(8)]);
var state_34768__$1 = state_34768;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34768__$1,(11),out,inst_34748);
} else {
if((state_val_34769 === (5))){
var inst_34748 = (state_34768[(8)]);
var inst_34745 = (state_34768[(7)]);
var inst_34752 = cljs.core._EQ_.call(null,inst_34748,inst_34745);
var state_34768__$1 = state_34768;
if(inst_34752){
var statearr_34781_34804 = state_34768__$1;
(statearr_34781_34804[(1)] = (8));

} else {
var statearr_34782_34805 = state_34768__$1;
(statearr_34782_34805[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34769 === (10))){
var inst_34760 = (state_34768[(2)]);
var state_34768__$1 = state_34768;
var statearr_34783_34806 = state_34768__$1;
(statearr_34783_34806[(2)] = inst_34760);

(statearr_34783_34806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34769 === (8))){
var inst_34745 = (state_34768[(7)]);
var tmp34780 = inst_34745;
var inst_34745__$1 = tmp34780;
var state_34768__$1 = (function (){var statearr_34784 = state_34768;
(statearr_34784[(7)] = inst_34745__$1);

return statearr_34784;
})();
var statearr_34785_34807 = state_34768__$1;
(statearr_34785_34807[(2)] = null);

(statearr_34785_34807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__24785__auto___34797,out))
;
return ((function (switch__24720__auto__,c__24785__auto___34797,out){
return (function() {
var cljs$core$async$state_machine__24721__auto__ = null;
var cljs$core$async$state_machine__24721__auto____0 = (function (){
var statearr_34789 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34789[(0)] = cljs$core$async$state_machine__24721__auto__);

(statearr_34789[(1)] = (1));

return statearr_34789;
});
var cljs$core$async$state_machine__24721__auto____1 = (function (state_34768){
while(true){
var ret_value__24722__auto__ = (function (){try{while(true){
var result__24723__auto__ = switch__24720__auto__.call(null,state_34768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24723__auto__;
}
break;
}
}catch (e34790){if((e34790 instanceof Object)){
var ex__24724__auto__ = e34790;
var statearr_34791_34808 = state_34768;
(statearr_34791_34808[(5)] = ex__24724__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34809 = state_34768;
state_34768 = G__34809;
continue;
} else {
return ret_value__24722__auto__;
}
break;
}
});
cljs$core$async$state_machine__24721__auto__ = function(state_34768){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24721__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24721__auto____1.call(this,state_34768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24721__auto____0;
cljs$core$async$state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24721__auto____1;
return cljs$core$async$state_machine__24721__auto__;
})()
;})(switch__24720__auto__,c__24785__auto___34797,out))
})();
var state__24787__auto__ = (function (){var statearr_34792 = f__24786__auto__.call(null);
(statearr_34792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24785__auto___34797);

return statearr_34792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24787__auto__);
});})(c__24785__auto___34797,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args34810 = [];
var len__22763__auto___34880 = arguments.length;
var i__22764__auto___34881 = (0);
while(true){
if((i__22764__auto___34881 < len__22763__auto___34880)){
args34810.push((arguments[i__22764__auto___34881]));

var G__34882 = (i__22764__auto___34881 + (1));
i__22764__auto___34881 = G__34882;
continue;
} else {
}
break;
}

var G__34812 = args34810.length;
switch (G__34812) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34810.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24785__auto___34884 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24785__auto___34884,out){
return (function (){
var f__24786__auto__ = (function (){var switch__24720__auto__ = ((function (c__24785__auto___34884,out){
return (function (state_34850){
var state_val_34851 = (state_34850[(1)]);
if((state_val_34851 === (7))){
var inst_34846 = (state_34850[(2)]);
var state_34850__$1 = state_34850;
var statearr_34852_34885 = state_34850__$1;
(statearr_34852_34885[(2)] = inst_34846);

(statearr_34852_34885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34851 === (1))){
var inst_34813 = (new Array(n));
var inst_34814 = inst_34813;
var inst_34815 = (0);
var state_34850__$1 = (function (){var statearr_34853 = state_34850;
(statearr_34853[(7)] = inst_34814);

(statearr_34853[(8)] = inst_34815);

return statearr_34853;
})();
var statearr_34854_34886 = state_34850__$1;
(statearr_34854_34886[(2)] = null);

(statearr_34854_34886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34851 === (4))){
var inst_34818 = (state_34850[(9)]);
var inst_34818__$1 = (state_34850[(2)]);
var inst_34819 = (inst_34818__$1 == null);
var inst_34820 = cljs.core.not.call(null,inst_34819);
var state_34850__$1 = (function (){var statearr_34855 = state_34850;
(statearr_34855[(9)] = inst_34818__$1);

return statearr_34855;
})();
if(inst_34820){
var statearr_34856_34887 = state_34850__$1;
(statearr_34856_34887[(1)] = (5));

} else {
var statearr_34857_34888 = state_34850__$1;
(statearr_34857_34888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34851 === (15))){
var inst_34840 = (state_34850[(2)]);
var state_34850__$1 = state_34850;
var statearr_34858_34889 = state_34850__$1;
(statearr_34858_34889[(2)] = inst_34840);

(statearr_34858_34889[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34851 === (13))){
var state_34850__$1 = state_34850;
var statearr_34859_34890 = state_34850__$1;
(statearr_34859_34890[(2)] = null);

(statearr_34859_34890[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34851 === (6))){
var inst_34815 = (state_34850[(8)]);
var inst_34836 = (inst_34815 > (0));
var state_34850__$1 = state_34850;
if(cljs.core.truth_(inst_34836)){
var statearr_34860_34891 = state_34850__$1;
(statearr_34860_34891[(1)] = (12));

} else {
var statearr_34861_34892 = state_34850__$1;
(statearr_34861_34892[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34851 === (3))){
var inst_34848 = (state_34850[(2)]);
var state_34850__$1 = state_34850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34850__$1,inst_34848);
} else {
if((state_val_34851 === (12))){
var inst_34814 = (state_34850[(7)]);
var inst_34838 = cljs.core.vec.call(null,inst_34814);
var state_34850__$1 = state_34850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34850__$1,(15),out,inst_34838);
} else {
if((state_val_34851 === (2))){
var state_34850__$1 = state_34850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34850__$1,(4),ch);
} else {
if((state_val_34851 === (11))){
var inst_34830 = (state_34850[(2)]);
var inst_34831 = (new Array(n));
var inst_34814 = inst_34831;
var inst_34815 = (0);
var state_34850__$1 = (function (){var statearr_34862 = state_34850;
(statearr_34862[(10)] = inst_34830);

(statearr_34862[(7)] = inst_34814);

(statearr_34862[(8)] = inst_34815);

return statearr_34862;
})();
var statearr_34863_34893 = state_34850__$1;
(statearr_34863_34893[(2)] = null);

(statearr_34863_34893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34851 === (9))){
var inst_34814 = (state_34850[(7)]);
var inst_34828 = cljs.core.vec.call(null,inst_34814);
var state_34850__$1 = state_34850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34850__$1,(11),out,inst_34828);
} else {
if((state_val_34851 === (5))){
var inst_34818 = (state_34850[(9)]);
var inst_34823 = (state_34850[(11)]);
var inst_34814 = (state_34850[(7)]);
var inst_34815 = (state_34850[(8)]);
var inst_34822 = (inst_34814[inst_34815] = inst_34818);
var inst_34823__$1 = (inst_34815 + (1));
var inst_34824 = (inst_34823__$1 < n);
var state_34850__$1 = (function (){var statearr_34864 = state_34850;
(statearr_34864[(12)] = inst_34822);

(statearr_34864[(11)] = inst_34823__$1);

return statearr_34864;
})();
if(cljs.core.truth_(inst_34824)){
var statearr_34865_34894 = state_34850__$1;
(statearr_34865_34894[(1)] = (8));

} else {
var statearr_34866_34895 = state_34850__$1;
(statearr_34866_34895[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34851 === (14))){
var inst_34843 = (state_34850[(2)]);
var inst_34844 = cljs.core.async.close_BANG_.call(null,out);
var state_34850__$1 = (function (){var statearr_34868 = state_34850;
(statearr_34868[(13)] = inst_34843);

return statearr_34868;
})();
var statearr_34869_34896 = state_34850__$1;
(statearr_34869_34896[(2)] = inst_34844);

(statearr_34869_34896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34851 === (10))){
var inst_34834 = (state_34850[(2)]);
var state_34850__$1 = state_34850;
var statearr_34870_34897 = state_34850__$1;
(statearr_34870_34897[(2)] = inst_34834);

(statearr_34870_34897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34851 === (8))){
var inst_34823 = (state_34850[(11)]);
var inst_34814 = (state_34850[(7)]);
var tmp34867 = inst_34814;
var inst_34814__$1 = tmp34867;
var inst_34815 = inst_34823;
var state_34850__$1 = (function (){var statearr_34871 = state_34850;
(statearr_34871[(7)] = inst_34814__$1);

(statearr_34871[(8)] = inst_34815);

return statearr_34871;
})();
var statearr_34872_34898 = state_34850__$1;
(statearr_34872_34898[(2)] = null);

(statearr_34872_34898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24785__auto___34884,out))
;
return ((function (switch__24720__auto__,c__24785__auto___34884,out){
return (function() {
var cljs$core$async$state_machine__24721__auto__ = null;
var cljs$core$async$state_machine__24721__auto____0 = (function (){
var statearr_34876 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34876[(0)] = cljs$core$async$state_machine__24721__auto__);

(statearr_34876[(1)] = (1));

return statearr_34876;
});
var cljs$core$async$state_machine__24721__auto____1 = (function (state_34850){
while(true){
var ret_value__24722__auto__ = (function (){try{while(true){
var result__24723__auto__ = switch__24720__auto__.call(null,state_34850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24723__auto__;
}
break;
}
}catch (e34877){if((e34877 instanceof Object)){
var ex__24724__auto__ = e34877;
var statearr_34878_34899 = state_34850;
(statearr_34878_34899[(5)] = ex__24724__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34900 = state_34850;
state_34850 = G__34900;
continue;
} else {
return ret_value__24722__auto__;
}
break;
}
});
cljs$core$async$state_machine__24721__auto__ = function(state_34850){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24721__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24721__auto____1.call(this,state_34850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24721__auto____0;
cljs$core$async$state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24721__auto____1;
return cljs$core$async$state_machine__24721__auto__;
})()
;})(switch__24720__auto__,c__24785__auto___34884,out))
})();
var state__24787__auto__ = (function (){var statearr_34879 = f__24786__auto__.call(null);
(statearr_34879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24785__auto___34884);

return statearr_34879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24787__auto__);
});})(c__24785__auto___34884,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args34901 = [];
var len__22763__auto___34975 = arguments.length;
var i__22764__auto___34976 = (0);
while(true){
if((i__22764__auto___34976 < len__22763__auto___34975)){
args34901.push((arguments[i__22764__auto___34976]));

var G__34977 = (i__22764__auto___34976 + (1));
i__22764__auto___34976 = G__34977;
continue;
} else {
}
break;
}

var G__34903 = args34901.length;
switch (G__34903) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34901.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24785__auto___34979 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24785__auto___34979,out){
return (function (){
var f__24786__auto__ = (function (){var switch__24720__auto__ = ((function (c__24785__auto___34979,out){
return (function (state_34945){
var state_val_34946 = (state_34945[(1)]);
if((state_val_34946 === (7))){
var inst_34941 = (state_34945[(2)]);
var state_34945__$1 = state_34945;
var statearr_34947_34980 = state_34945__$1;
(statearr_34947_34980[(2)] = inst_34941);

(statearr_34947_34980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (1))){
var inst_34904 = [];
var inst_34905 = inst_34904;
var inst_34906 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34945__$1 = (function (){var statearr_34948 = state_34945;
(statearr_34948[(7)] = inst_34905);

(statearr_34948[(8)] = inst_34906);

return statearr_34948;
})();
var statearr_34949_34981 = state_34945__$1;
(statearr_34949_34981[(2)] = null);

(statearr_34949_34981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (4))){
var inst_34909 = (state_34945[(9)]);
var inst_34909__$1 = (state_34945[(2)]);
var inst_34910 = (inst_34909__$1 == null);
var inst_34911 = cljs.core.not.call(null,inst_34910);
var state_34945__$1 = (function (){var statearr_34950 = state_34945;
(statearr_34950[(9)] = inst_34909__$1);

return statearr_34950;
})();
if(inst_34911){
var statearr_34951_34982 = state_34945__$1;
(statearr_34951_34982[(1)] = (5));

} else {
var statearr_34952_34983 = state_34945__$1;
(statearr_34952_34983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (15))){
var inst_34935 = (state_34945[(2)]);
var state_34945__$1 = state_34945;
var statearr_34953_34984 = state_34945__$1;
(statearr_34953_34984[(2)] = inst_34935);

(statearr_34953_34984[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (13))){
var state_34945__$1 = state_34945;
var statearr_34954_34985 = state_34945__$1;
(statearr_34954_34985[(2)] = null);

(statearr_34954_34985[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (6))){
var inst_34905 = (state_34945[(7)]);
var inst_34930 = inst_34905.length;
var inst_34931 = (inst_34930 > (0));
var state_34945__$1 = state_34945;
if(cljs.core.truth_(inst_34931)){
var statearr_34955_34986 = state_34945__$1;
(statearr_34955_34986[(1)] = (12));

} else {
var statearr_34956_34987 = state_34945__$1;
(statearr_34956_34987[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (3))){
var inst_34943 = (state_34945[(2)]);
var state_34945__$1 = state_34945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34945__$1,inst_34943);
} else {
if((state_val_34946 === (12))){
var inst_34905 = (state_34945[(7)]);
var inst_34933 = cljs.core.vec.call(null,inst_34905);
var state_34945__$1 = state_34945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34945__$1,(15),out,inst_34933);
} else {
if((state_val_34946 === (2))){
var state_34945__$1 = state_34945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34945__$1,(4),ch);
} else {
if((state_val_34946 === (11))){
var inst_34913 = (state_34945[(10)]);
var inst_34909 = (state_34945[(9)]);
var inst_34923 = (state_34945[(2)]);
var inst_34924 = [];
var inst_34925 = inst_34924.push(inst_34909);
var inst_34905 = inst_34924;
var inst_34906 = inst_34913;
var state_34945__$1 = (function (){var statearr_34957 = state_34945;
(statearr_34957[(7)] = inst_34905);

(statearr_34957[(11)] = inst_34923);

(statearr_34957[(12)] = inst_34925);

(statearr_34957[(8)] = inst_34906);

return statearr_34957;
})();
var statearr_34958_34988 = state_34945__$1;
(statearr_34958_34988[(2)] = null);

(statearr_34958_34988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (9))){
var inst_34905 = (state_34945[(7)]);
var inst_34921 = cljs.core.vec.call(null,inst_34905);
var state_34945__$1 = state_34945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34945__$1,(11),out,inst_34921);
} else {
if((state_val_34946 === (5))){
var inst_34913 = (state_34945[(10)]);
var inst_34909 = (state_34945[(9)]);
var inst_34906 = (state_34945[(8)]);
var inst_34913__$1 = f.call(null,inst_34909);
var inst_34914 = cljs.core._EQ_.call(null,inst_34913__$1,inst_34906);
var inst_34915 = cljs.core.keyword_identical_QMARK_.call(null,inst_34906,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34916 = (inst_34914) || (inst_34915);
var state_34945__$1 = (function (){var statearr_34959 = state_34945;
(statearr_34959[(10)] = inst_34913__$1);

return statearr_34959;
})();
if(cljs.core.truth_(inst_34916)){
var statearr_34960_34989 = state_34945__$1;
(statearr_34960_34989[(1)] = (8));

} else {
var statearr_34961_34990 = state_34945__$1;
(statearr_34961_34990[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (14))){
var inst_34938 = (state_34945[(2)]);
var inst_34939 = cljs.core.async.close_BANG_.call(null,out);
var state_34945__$1 = (function (){var statearr_34963 = state_34945;
(statearr_34963[(13)] = inst_34938);

return statearr_34963;
})();
var statearr_34964_34991 = state_34945__$1;
(statearr_34964_34991[(2)] = inst_34939);

(statearr_34964_34991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (10))){
var inst_34928 = (state_34945[(2)]);
var state_34945__$1 = state_34945;
var statearr_34965_34992 = state_34945__$1;
(statearr_34965_34992[(2)] = inst_34928);

(statearr_34965_34992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (8))){
var inst_34905 = (state_34945[(7)]);
var inst_34913 = (state_34945[(10)]);
var inst_34909 = (state_34945[(9)]);
var inst_34918 = inst_34905.push(inst_34909);
var tmp34962 = inst_34905;
var inst_34905__$1 = tmp34962;
var inst_34906 = inst_34913;
var state_34945__$1 = (function (){var statearr_34966 = state_34945;
(statearr_34966[(7)] = inst_34905__$1);

(statearr_34966[(14)] = inst_34918);

(statearr_34966[(8)] = inst_34906);

return statearr_34966;
})();
var statearr_34967_34993 = state_34945__$1;
(statearr_34967_34993[(2)] = null);

(statearr_34967_34993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24785__auto___34979,out))
;
return ((function (switch__24720__auto__,c__24785__auto___34979,out){
return (function() {
var cljs$core$async$state_machine__24721__auto__ = null;
var cljs$core$async$state_machine__24721__auto____0 = (function (){
var statearr_34971 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34971[(0)] = cljs$core$async$state_machine__24721__auto__);

(statearr_34971[(1)] = (1));

return statearr_34971;
});
var cljs$core$async$state_machine__24721__auto____1 = (function (state_34945){
while(true){
var ret_value__24722__auto__ = (function (){try{while(true){
var result__24723__auto__ = switch__24720__auto__.call(null,state_34945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24723__auto__;
}
break;
}
}catch (e34972){if((e34972 instanceof Object)){
var ex__24724__auto__ = e34972;
var statearr_34973_34994 = state_34945;
(statearr_34973_34994[(5)] = ex__24724__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34995 = state_34945;
state_34945 = G__34995;
continue;
} else {
return ret_value__24722__auto__;
}
break;
}
});
cljs$core$async$state_machine__24721__auto__ = function(state_34945){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24721__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24721__auto____1.call(this,state_34945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24721__auto____0;
cljs$core$async$state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24721__auto____1;
return cljs$core$async$state_machine__24721__auto__;
})()
;})(switch__24720__auto__,c__24785__auto___34979,out))
})();
var state__24787__auto__ = (function (){var statearr_34974 = f__24786__auto__.call(null);
(statearr_34974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24785__auto___34979);

return statearr_34974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24787__auto__);
});})(c__24785__auto___34979,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map