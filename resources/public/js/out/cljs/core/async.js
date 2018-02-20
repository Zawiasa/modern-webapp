// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__44431 = arguments.length;
switch (G__44431) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async44432 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44432 = (function (f,blockable,meta44433){
this.f = f;
this.blockable = blockable;
this.meta44433 = meta44433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44434,meta44433__$1){
var self__ = this;
var _44434__$1 = this;
return (new cljs.core.async.t_cljs$core$async44432(self__.f,self__.blockable,meta44433__$1));
});

cljs.core.async.t_cljs$core$async44432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44434){
var self__ = this;
var _44434__$1 = this;
return self__.meta44433;
});

cljs.core.async.t_cljs$core$async44432.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44432.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44432.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async44432.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async44432.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44433","meta44433",-55331189,null)], null);
});

cljs.core.async.t_cljs$core$async44432.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44432.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44432";

cljs.core.async.t_cljs$core$async44432.cljs$lang$ctorPrWriter = (function (this__41340__auto__,writer__41341__auto__,opt__41342__auto__){
return cljs.core._write.call(null,writer__41341__auto__,"cljs.core.async/t_cljs$core$async44432");
});

cljs.core.async.__GT_t_cljs$core$async44432 = (function cljs$core$async$__GT_t_cljs$core$async44432(f__$1,blockable__$1,meta44433){
return (new cljs.core.async.t_cljs$core$async44432(f__$1,blockable__$1,meta44433));
});

}

return (new cljs.core.async.t_cljs$core$async44432(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

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
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
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
var G__44438 = arguments.length;
switch (G__44438) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__44441 = arguments.length;
switch (G__44441) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

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
var G__44444 = arguments.length;
switch (G__44444) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_44446 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_44446);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_44446,ret){
return (function (){
return fn1.call(null,val_44446);
});})(val_44446,ret))
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
var G__44448 = arguments.length;
switch (G__44448) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
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
var n__41714__auto___44450 = n;
var x_44451 = (0);
while(true){
if((x_44451 < n__41714__auto___44450)){
(a[x_44451] = (0));

var G__44452 = (x_44451 + (1));
x_44451 = G__44452;
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

var G__44453 = (i + (1));
i = G__44453;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async44454 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44454 = (function (flag,meta44455){
this.flag = flag;
this.meta44455 = meta44455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_44456,meta44455__$1){
var self__ = this;
var _44456__$1 = this;
return (new cljs.core.async.t_cljs$core$async44454(self__.flag,meta44455__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async44454.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_44456){
var self__ = this;
var _44456__$1 = this;
return self__.meta44455;
});})(flag))
;

cljs.core.async.t_cljs$core$async44454.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44454.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async44454.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44454.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44454.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44455","meta44455",-1381800988,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async44454.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44454.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44454";

cljs.core.async.t_cljs$core$async44454.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__41340__auto__,writer__41341__auto__,opt__41342__auto__){
return cljs.core._write.call(null,writer__41341__auto__,"cljs.core.async/t_cljs$core$async44454");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async44454 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44454(flag__$1,meta44455){
return (new cljs.core.async.t_cljs$core$async44454(flag__$1,meta44455));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async44454(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async44457 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44457 = (function (flag,cb,meta44458){
this.flag = flag;
this.cb = cb;
this.meta44458 = meta44458;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44459,meta44458__$1){
var self__ = this;
var _44459__$1 = this;
return (new cljs.core.async.t_cljs$core$async44457(self__.flag,self__.cb,meta44458__$1));
});

cljs.core.async.t_cljs$core$async44457.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44459){
var self__ = this;
var _44459__$1 = this;
return self__.meta44458;
});

cljs.core.async.t_cljs$core$async44457.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44457.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async44457.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44457.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async44457.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44458","meta44458",-2014863973,null)], null);
});

cljs.core.async.t_cljs$core$async44457.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44457.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44457";

cljs.core.async.t_cljs$core$async44457.cljs$lang$ctorPrWriter = (function (this__41340__auto__,writer__41341__auto__,opt__41342__auto__){
return cljs.core._write.call(null,writer__41341__auto__,"cljs.core.async/t_cljs$core$async44457");
});

cljs.core.async.__GT_t_cljs$core$async44457 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44457(flag__$1,cb__$1,meta44458){
return (new cljs.core.async.t_cljs$core$async44457(flag__$1,cb__$1,meta44458));
});

}

return (new cljs.core.async.t_cljs$core$async44457(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__44460_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44460_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44461_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44461_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__40669__auto__ = wport;
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return port;
}
})()], null));
} else {
var G__44462 = (i + (1));
i = G__44462;
continue;
}
} else {
return null;
}
break;
}
})();
var or__40669__auto__ = ret;
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__40657__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__40657__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__40657__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
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
var args__41955__auto__ = [];
var len__41948__auto___44468 = arguments.length;
var i__41949__auto___44469 = (0);
while(true){
if((i__41949__auto___44469 < len__41948__auto___44468)){
args__41955__auto__.push((arguments[i__41949__auto___44469]));

var G__44470 = (i__41949__auto___44469 + (1));
i__41949__auto___44469 = G__44470;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((1) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41956__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44465){
var map__44466 = p__44465;
var map__44466__$1 = ((((!((map__44466 == null)))?((((map__44466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44466.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44466):map__44466);
var opts = map__44466__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44463){
var G__44464 = cljs.core.first.call(null,seq44463);
var seq44463__$1 = cljs.core.next.call(null,seq44463);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44464,seq44463__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__44472 = arguments.length;
switch (G__44472) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__44371__auto___44518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44371__auto___44518){
return (function (){
var f__44372__auto__ = (function (){var switch__44281__auto__ = ((function (c__44371__auto___44518){
return (function (state_44496){
var state_val_44497 = (state_44496[(1)]);
if((state_val_44497 === (7))){
var inst_44492 = (state_44496[(2)]);
var state_44496__$1 = state_44496;
var statearr_44498_44519 = state_44496__$1;
(statearr_44498_44519[(2)] = inst_44492);

(statearr_44498_44519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44497 === (1))){
var state_44496__$1 = state_44496;
var statearr_44499_44520 = state_44496__$1;
(statearr_44499_44520[(2)] = null);

(statearr_44499_44520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44497 === (4))){
var inst_44475 = (state_44496[(7)]);
var inst_44475__$1 = (state_44496[(2)]);
var inst_44476 = (inst_44475__$1 == null);
var state_44496__$1 = (function (){var statearr_44500 = state_44496;
(statearr_44500[(7)] = inst_44475__$1);

return statearr_44500;
})();
if(cljs.core.truth_(inst_44476)){
var statearr_44501_44521 = state_44496__$1;
(statearr_44501_44521[(1)] = (5));

} else {
var statearr_44502_44522 = state_44496__$1;
(statearr_44502_44522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44497 === (13))){
var state_44496__$1 = state_44496;
var statearr_44503_44523 = state_44496__$1;
(statearr_44503_44523[(2)] = null);

(statearr_44503_44523[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44497 === (6))){
var inst_44475 = (state_44496[(7)]);
var state_44496__$1 = state_44496;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44496__$1,(11),to,inst_44475);
} else {
if((state_val_44497 === (3))){
var inst_44494 = (state_44496[(2)]);
var state_44496__$1 = state_44496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44496__$1,inst_44494);
} else {
if((state_val_44497 === (12))){
var state_44496__$1 = state_44496;
var statearr_44504_44524 = state_44496__$1;
(statearr_44504_44524[(2)] = null);

(statearr_44504_44524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44497 === (2))){
var state_44496__$1 = state_44496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44496__$1,(4),from);
} else {
if((state_val_44497 === (11))){
var inst_44485 = (state_44496[(2)]);
var state_44496__$1 = state_44496;
if(cljs.core.truth_(inst_44485)){
var statearr_44505_44525 = state_44496__$1;
(statearr_44505_44525[(1)] = (12));

} else {
var statearr_44506_44526 = state_44496__$1;
(statearr_44506_44526[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44497 === (9))){
var state_44496__$1 = state_44496;
var statearr_44507_44527 = state_44496__$1;
(statearr_44507_44527[(2)] = null);

(statearr_44507_44527[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44497 === (5))){
var state_44496__$1 = state_44496;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44508_44528 = state_44496__$1;
(statearr_44508_44528[(1)] = (8));

} else {
var statearr_44509_44529 = state_44496__$1;
(statearr_44509_44529[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44497 === (14))){
var inst_44490 = (state_44496[(2)]);
var state_44496__$1 = state_44496;
var statearr_44510_44530 = state_44496__$1;
(statearr_44510_44530[(2)] = inst_44490);

(statearr_44510_44530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44497 === (10))){
var inst_44482 = (state_44496[(2)]);
var state_44496__$1 = state_44496;
var statearr_44511_44531 = state_44496__$1;
(statearr_44511_44531[(2)] = inst_44482);

(statearr_44511_44531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44497 === (8))){
var inst_44479 = cljs.core.async.close_BANG_.call(null,to);
var state_44496__$1 = state_44496;
var statearr_44512_44532 = state_44496__$1;
(statearr_44512_44532[(2)] = inst_44479);

(statearr_44512_44532[(1)] = (10));


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
});})(c__44371__auto___44518))
;
return ((function (switch__44281__auto__,c__44371__auto___44518){
return (function() {
var cljs$core$async$state_machine__44282__auto__ = null;
var cljs$core$async$state_machine__44282__auto____0 = (function (){
var statearr_44513 = [null,null,null,null,null,null,null,null];
(statearr_44513[(0)] = cljs$core$async$state_machine__44282__auto__);

(statearr_44513[(1)] = (1));

return statearr_44513;
});
var cljs$core$async$state_machine__44282__auto____1 = (function (state_44496){
while(true){
var ret_value__44283__auto__ = (function (){try{while(true){
var result__44284__auto__ = switch__44281__auto__.call(null,state_44496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44284__auto__;
}
break;
}
}catch (e44514){if((e44514 instanceof Object)){
var ex__44285__auto__ = e44514;
var statearr_44515_44533 = state_44496;
(statearr_44515_44533[(5)] = ex__44285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44534 = state_44496;
state_44496 = G__44534;
continue;
} else {
return ret_value__44283__auto__;
}
break;
}
});
cljs$core$async$state_machine__44282__auto__ = function(state_44496){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44282__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44282__auto____1.call(this,state_44496);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44282__auto____0;
cljs$core$async$state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44282__auto____1;
return cljs$core$async$state_machine__44282__auto__;
})()
;})(switch__44281__auto__,c__44371__auto___44518))
})();
var state__44373__auto__ = (function (){var statearr_44516 = f__44372__auto__.call(null);
(statearr_44516[(6)] = c__44371__auto___44518);

return statearr_44516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44373__auto__);
});})(c__44371__auto___44518))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__44535){
var vec__44536 = p__44535;
var v = cljs.core.nth.call(null,vec__44536,(0),null);
var p = cljs.core.nth.call(null,vec__44536,(1),null);
var job = vec__44536;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__44371__auto___44707 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44371__auto___44707,res,vec__44536,v,p,job,jobs,results){
return (function (){
var f__44372__auto__ = (function (){var switch__44281__auto__ = ((function (c__44371__auto___44707,res,vec__44536,v,p,job,jobs,results){
return (function (state_44543){
var state_val_44544 = (state_44543[(1)]);
if((state_val_44544 === (1))){
var state_44543__$1 = state_44543;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44543__$1,(2),res,v);
} else {
if((state_val_44544 === (2))){
var inst_44540 = (state_44543[(2)]);
var inst_44541 = cljs.core.async.close_BANG_.call(null,res);
var state_44543__$1 = (function (){var statearr_44545 = state_44543;
(statearr_44545[(7)] = inst_44540);

return statearr_44545;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44543__$1,inst_44541);
} else {
return null;
}
}
});})(c__44371__auto___44707,res,vec__44536,v,p,job,jobs,results))
;
return ((function (switch__44281__auto__,c__44371__auto___44707,res,vec__44536,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44282__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44282__auto____0 = (function (){
var statearr_44546 = [null,null,null,null,null,null,null,null];
(statearr_44546[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44282__auto__);

(statearr_44546[(1)] = (1));

return statearr_44546;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44282__auto____1 = (function (state_44543){
while(true){
var ret_value__44283__auto__ = (function (){try{while(true){
var result__44284__auto__ = switch__44281__auto__.call(null,state_44543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44284__auto__;
}
break;
}
}catch (e44547){if((e44547 instanceof Object)){
var ex__44285__auto__ = e44547;
var statearr_44548_44708 = state_44543;
(statearr_44548_44708[(5)] = ex__44285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44709 = state_44543;
state_44543 = G__44709;
continue;
} else {
return ret_value__44283__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44282__auto__ = function(state_44543){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44282__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44282__auto____1.call(this,state_44543);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44282__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44282__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44282__auto__;
})()
;})(switch__44281__auto__,c__44371__auto___44707,res,vec__44536,v,p,job,jobs,results))
})();
var state__44373__auto__ = (function (){var statearr_44549 = f__44372__auto__.call(null);
(statearr_44549[(6)] = c__44371__auto___44707);

return statearr_44549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44373__auto__);
});})(c__44371__auto___44707,res,vec__44536,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__44550){
var vec__44551 = p__44550;
var v = cljs.core.nth.call(null,vec__44551,(0),null);
var p = cljs.core.nth.call(null,vec__44551,(1),null);
var job = vec__44551;
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
var n__41714__auto___44710 = n;
var __44711 = (0);
while(true){
if((__44711 < n__41714__auto___44710)){
var G__44554_44712 = type;
var G__44554_44713__$1 = (((G__44554_44712 instanceof cljs.core.Keyword))?G__44554_44712.fqn:null);
switch (G__44554_44713__$1) {
case "compute":
var c__44371__auto___44715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44711,c__44371__auto___44715,G__44554_44712,G__44554_44713__$1,n__41714__auto___44710,jobs,results,process,async){
return (function (){
var f__44372__auto__ = (function (){var switch__44281__auto__ = ((function (__44711,c__44371__auto___44715,G__44554_44712,G__44554_44713__$1,n__41714__auto___44710,jobs,results,process,async){
return (function (state_44567){
var state_val_44568 = (state_44567[(1)]);
if((state_val_44568 === (1))){
var state_44567__$1 = state_44567;
var statearr_44569_44716 = state_44567__$1;
(statearr_44569_44716[(2)] = null);

(statearr_44569_44716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44568 === (2))){
var state_44567__$1 = state_44567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44567__$1,(4),jobs);
} else {
if((state_val_44568 === (3))){
var inst_44565 = (state_44567[(2)]);
var state_44567__$1 = state_44567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44567__$1,inst_44565);
} else {
if((state_val_44568 === (4))){
var inst_44557 = (state_44567[(2)]);
var inst_44558 = process.call(null,inst_44557);
var state_44567__$1 = state_44567;
if(cljs.core.truth_(inst_44558)){
var statearr_44570_44717 = state_44567__$1;
(statearr_44570_44717[(1)] = (5));

} else {
var statearr_44571_44718 = state_44567__$1;
(statearr_44571_44718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44568 === (5))){
var state_44567__$1 = state_44567;
var statearr_44572_44719 = state_44567__$1;
(statearr_44572_44719[(2)] = null);

(statearr_44572_44719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44568 === (6))){
var state_44567__$1 = state_44567;
var statearr_44573_44720 = state_44567__$1;
(statearr_44573_44720[(2)] = null);

(statearr_44573_44720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44568 === (7))){
var inst_44563 = (state_44567[(2)]);
var state_44567__$1 = state_44567;
var statearr_44574_44721 = state_44567__$1;
(statearr_44574_44721[(2)] = inst_44563);

(statearr_44574_44721[(1)] = (3));


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
});})(__44711,c__44371__auto___44715,G__44554_44712,G__44554_44713__$1,n__41714__auto___44710,jobs,results,process,async))
;
return ((function (__44711,switch__44281__auto__,c__44371__auto___44715,G__44554_44712,G__44554_44713__$1,n__41714__auto___44710,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44282__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44282__auto____0 = (function (){
var statearr_44575 = [null,null,null,null,null,null,null];
(statearr_44575[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44282__auto__);

(statearr_44575[(1)] = (1));

return statearr_44575;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44282__auto____1 = (function (state_44567){
while(true){
var ret_value__44283__auto__ = (function (){try{while(true){
var result__44284__auto__ = switch__44281__auto__.call(null,state_44567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44284__auto__;
}
break;
}
}catch (e44576){if((e44576 instanceof Object)){
var ex__44285__auto__ = e44576;
var statearr_44577_44722 = state_44567;
(statearr_44577_44722[(5)] = ex__44285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44723 = state_44567;
state_44567 = G__44723;
continue;
} else {
return ret_value__44283__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44282__auto__ = function(state_44567){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44282__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44282__auto____1.call(this,state_44567);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44282__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44282__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44282__auto__;
})()
;})(__44711,switch__44281__auto__,c__44371__auto___44715,G__44554_44712,G__44554_44713__$1,n__41714__auto___44710,jobs,results,process,async))
})();
var state__44373__auto__ = (function (){var statearr_44578 = f__44372__auto__.call(null);
(statearr_44578[(6)] = c__44371__auto___44715);

return statearr_44578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44373__auto__);
});})(__44711,c__44371__auto___44715,G__44554_44712,G__44554_44713__$1,n__41714__auto___44710,jobs,results,process,async))
);


break;
case "async":
var c__44371__auto___44724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44711,c__44371__auto___44724,G__44554_44712,G__44554_44713__$1,n__41714__auto___44710,jobs,results,process,async){
return (function (){
var f__44372__auto__ = (function (){var switch__44281__auto__ = ((function (__44711,c__44371__auto___44724,G__44554_44712,G__44554_44713__$1,n__41714__auto___44710,jobs,results,process,async){
return (function (state_44591){
var state_val_44592 = (state_44591[(1)]);
if((state_val_44592 === (1))){
var state_44591__$1 = state_44591;
var statearr_44593_44725 = state_44591__$1;
(statearr_44593_44725[(2)] = null);

(statearr_44593_44725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44592 === (2))){
var state_44591__$1 = state_44591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44591__$1,(4),jobs);
} else {
if((state_val_44592 === (3))){
var inst_44589 = (state_44591[(2)]);
var state_44591__$1 = state_44591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44591__$1,inst_44589);
} else {
if((state_val_44592 === (4))){
var inst_44581 = (state_44591[(2)]);
var inst_44582 = async.call(null,inst_44581);
var state_44591__$1 = state_44591;
if(cljs.core.truth_(inst_44582)){
var statearr_44594_44726 = state_44591__$1;
(statearr_44594_44726[(1)] = (5));

} else {
var statearr_44595_44727 = state_44591__$1;
(statearr_44595_44727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44592 === (5))){
var state_44591__$1 = state_44591;
var statearr_44596_44728 = state_44591__$1;
(statearr_44596_44728[(2)] = null);

(statearr_44596_44728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44592 === (6))){
var state_44591__$1 = state_44591;
var statearr_44597_44729 = state_44591__$1;
(statearr_44597_44729[(2)] = null);

(statearr_44597_44729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44592 === (7))){
var inst_44587 = (state_44591[(2)]);
var state_44591__$1 = state_44591;
var statearr_44598_44730 = state_44591__$1;
(statearr_44598_44730[(2)] = inst_44587);

(statearr_44598_44730[(1)] = (3));


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
});})(__44711,c__44371__auto___44724,G__44554_44712,G__44554_44713__$1,n__41714__auto___44710,jobs,results,process,async))
;
return ((function (__44711,switch__44281__auto__,c__44371__auto___44724,G__44554_44712,G__44554_44713__$1,n__41714__auto___44710,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44282__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44282__auto____0 = (function (){
var statearr_44599 = [null,null,null,null,null,null,null];
(statearr_44599[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44282__auto__);

(statearr_44599[(1)] = (1));

return statearr_44599;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44282__auto____1 = (function (state_44591){
while(true){
var ret_value__44283__auto__ = (function (){try{while(true){
var result__44284__auto__ = switch__44281__auto__.call(null,state_44591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44284__auto__;
}
break;
}
}catch (e44600){if((e44600 instanceof Object)){
var ex__44285__auto__ = e44600;
var statearr_44601_44731 = state_44591;
(statearr_44601_44731[(5)] = ex__44285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44732 = state_44591;
state_44591 = G__44732;
continue;
} else {
return ret_value__44283__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44282__auto__ = function(state_44591){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44282__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44282__auto____1.call(this,state_44591);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44282__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44282__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44282__auto__;
})()
;})(__44711,switch__44281__auto__,c__44371__auto___44724,G__44554_44712,G__44554_44713__$1,n__41714__auto___44710,jobs,results,process,async))
})();
var state__44373__auto__ = (function (){var statearr_44602 = f__44372__auto__.call(null);
(statearr_44602[(6)] = c__44371__auto___44724);

return statearr_44602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44373__auto__);
});})(__44711,c__44371__auto___44724,G__44554_44712,G__44554_44713__$1,n__41714__auto___44710,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44554_44713__$1)].join('')));

}

var G__44733 = (__44711 + (1));
__44711 = G__44733;
continue;
} else {
}
break;
}

var c__44371__auto___44734 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44371__auto___44734,jobs,results,process,async){
return (function (){
var f__44372__auto__ = (function (){var switch__44281__auto__ = ((function (c__44371__auto___44734,jobs,results,process,async){
return (function (state_44624){
var state_val_44625 = (state_44624[(1)]);
if((state_val_44625 === (1))){
var state_44624__$1 = state_44624;
var statearr_44626_44735 = state_44624__$1;
(statearr_44626_44735[(2)] = null);

(statearr_44626_44735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44625 === (2))){
var state_44624__$1 = state_44624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44624__$1,(4),from);
} else {
if((state_val_44625 === (3))){
var inst_44622 = (state_44624[(2)]);
var state_44624__$1 = state_44624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44624__$1,inst_44622);
} else {
if((state_val_44625 === (4))){
var inst_44605 = (state_44624[(7)]);
var inst_44605__$1 = (state_44624[(2)]);
var inst_44606 = (inst_44605__$1 == null);
var state_44624__$1 = (function (){var statearr_44627 = state_44624;
(statearr_44627[(7)] = inst_44605__$1);

return statearr_44627;
})();
if(cljs.core.truth_(inst_44606)){
var statearr_44628_44736 = state_44624__$1;
(statearr_44628_44736[(1)] = (5));

} else {
var statearr_44629_44737 = state_44624__$1;
(statearr_44629_44737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44625 === (5))){
var inst_44608 = cljs.core.async.close_BANG_.call(null,jobs);
var state_44624__$1 = state_44624;
var statearr_44630_44738 = state_44624__$1;
(statearr_44630_44738[(2)] = inst_44608);

(statearr_44630_44738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44625 === (6))){
var inst_44605 = (state_44624[(7)]);
var inst_44610 = (state_44624[(8)]);
var inst_44610__$1 = cljs.core.async.chan.call(null,(1));
var inst_44611 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44612 = [inst_44605,inst_44610__$1];
var inst_44613 = (new cljs.core.PersistentVector(null,2,(5),inst_44611,inst_44612,null));
var state_44624__$1 = (function (){var statearr_44631 = state_44624;
(statearr_44631[(8)] = inst_44610__$1);

return statearr_44631;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44624__$1,(8),jobs,inst_44613);
} else {
if((state_val_44625 === (7))){
var inst_44620 = (state_44624[(2)]);
var state_44624__$1 = state_44624;
var statearr_44632_44739 = state_44624__$1;
(statearr_44632_44739[(2)] = inst_44620);

(statearr_44632_44739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44625 === (8))){
var inst_44610 = (state_44624[(8)]);
var inst_44615 = (state_44624[(2)]);
var state_44624__$1 = (function (){var statearr_44633 = state_44624;
(statearr_44633[(9)] = inst_44615);

return statearr_44633;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44624__$1,(9),results,inst_44610);
} else {
if((state_val_44625 === (9))){
var inst_44617 = (state_44624[(2)]);
var state_44624__$1 = (function (){var statearr_44634 = state_44624;
(statearr_44634[(10)] = inst_44617);

return statearr_44634;
})();
var statearr_44635_44740 = state_44624__$1;
(statearr_44635_44740[(2)] = null);

(statearr_44635_44740[(1)] = (2));


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
});})(c__44371__auto___44734,jobs,results,process,async))
;
return ((function (switch__44281__auto__,c__44371__auto___44734,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44282__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44282__auto____0 = (function (){
var statearr_44636 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44636[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44282__auto__);

(statearr_44636[(1)] = (1));

return statearr_44636;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44282__auto____1 = (function (state_44624){
while(true){
var ret_value__44283__auto__ = (function (){try{while(true){
var result__44284__auto__ = switch__44281__auto__.call(null,state_44624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44284__auto__;
}
break;
}
}catch (e44637){if((e44637 instanceof Object)){
var ex__44285__auto__ = e44637;
var statearr_44638_44741 = state_44624;
(statearr_44638_44741[(5)] = ex__44285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44742 = state_44624;
state_44624 = G__44742;
continue;
} else {
return ret_value__44283__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44282__auto__ = function(state_44624){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44282__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44282__auto____1.call(this,state_44624);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44282__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44282__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44282__auto__;
})()
;})(switch__44281__auto__,c__44371__auto___44734,jobs,results,process,async))
})();
var state__44373__auto__ = (function (){var statearr_44639 = f__44372__auto__.call(null);
(statearr_44639[(6)] = c__44371__auto___44734);

return statearr_44639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44373__auto__);
});})(c__44371__auto___44734,jobs,results,process,async))
);


var c__44371__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44371__auto__,jobs,results,process,async){
return (function (){
var f__44372__auto__ = (function (){var switch__44281__auto__ = ((function (c__44371__auto__,jobs,results,process,async){
return (function (state_44677){
var state_val_44678 = (state_44677[(1)]);
if((state_val_44678 === (7))){
var inst_44673 = (state_44677[(2)]);
var state_44677__$1 = state_44677;
var statearr_44679_44743 = state_44677__$1;
(statearr_44679_44743[(2)] = inst_44673);

(statearr_44679_44743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44678 === (20))){
var state_44677__$1 = state_44677;
var statearr_44680_44744 = state_44677__$1;
(statearr_44680_44744[(2)] = null);

(statearr_44680_44744[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44678 === (1))){
var state_44677__$1 = state_44677;
var statearr_44681_44745 = state_44677__$1;
(statearr_44681_44745[(2)] = null);

(statearr_44681_44745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44678 === (4))){
var inst_44642 = (state_44677[(7)]);
var inst_44642__$1 = (state_44677[(2)]);
var inst_44643 = (inst_44642__$1 == null);
var state_44677__$1 = (function (){var statearr_44682 = state_44677;
(statearr_44682[(7)] = inst_44642__$1);

return statearr_44682;
})();
if(cljs.core.truth_(inst_44643)){
var statearr_44683_44746 = state_44677__$1;
(statearr_44683_44746[(1)] = (5));

} else {
var statearr_44684_44747 = state_44677__$1;
(statearr_44684_44747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44678 === (15))){
var inst_44655 = (state_44677[(8)]);
var state_44677__$1 = state_44677;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44677__$1,(18),to,inst_44655);
} else {
if((state_val_44678 === (21))){
var inst_44668 = (state_44677[(2)]);
var state_44677__$1 = state_44677;
var statearr_44685_44748 = state_44677__$1;
(statearr_44685_44748[(2)] = inst_44668);

(statearr_44685_44748[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44678 === (13))){
var inst_44670 = (state_44677[(2)]);
var state_44677__$1 = (function (){var statearr_44686 = state_44677;
(statearr_44686[(9)] = inst_44670);

return statearr_44686;
})();
var statearr_44687_44749 = state_44677__$1;
(statearr_44687_44749[(2)] = null);

(statearr_44687_44749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44678 === (6))){
var inst_44642 = (state_44677[(7)]);
var state_44677__$1 = state_44677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44677__$1,(11),inst_44642);
} else {
if((state_val_44678 === (17))){
var inst_44663 = (state_44677[(2)]);
var state_44677__$1 = state_44677;
if(cljs.core.truth_(inst_44663)){
var statearr_44688_44750 = state_44677__$1;
(statearr_44688_44750[(1)] = (19));

} else {
var statearr_44689_44751 = state_44677__$1;
(statearr_44689_44751[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44678 === (3))){
var inst_44675 = (state_44677[(2)]);
var state_44677__$1 = state_44677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44677__$1,inst_44675);
} else {
if((state_val_44678 === (12))){
var inst_44652 = (state_44677[(10)]);
var state_44677__$1 = state_44677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44677__$1,(14),inst_44652);
} else {
if((state_val_44678 === (2))){
var state_44677__$1 = state_44677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44677__$1,(4),results);
} else {
if((state_val_44678 === (19))){
var state_44677__$1 = state_44677;
var statearr_44690_44752 = state_44677__$1;
(statearr_44690_44752[(2)] = null);

(statearr_44690_44752[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44678 === (11))){
var inst_44652 = (state_44677[(2)]);
var state_44677__$1 = (function (){var statearr_44691 = state_44677;
(statearr_44691[(10)] = inst_44652);

return statearr_44691;
})();
var statearr_44692_44753 = state_44677__$1;
(statearr_44692_44753[(2)] = null);

(statearr_44692_44753[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44678 === (9))){
var state_44677__$1 = state_44677;
var statearr_44693_44754 = state_44677__$1;
(statearr_44693_44754[(2)] = null);

(statearr_44693_44754[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44678 === (5))){
var state_44677__$1 = state_44677;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44694_44755 = state_44677__$1;
(statearr_44694_44755[(1)] = (8));

} else {
var statearr_44695_44756 = state_44677__$1;
(statearr_44695_44756[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44678 === (14))){
var inst_44657 = (state_44677[(11)]);
var inst_44655 = (state_44677[(8)]);
var inst_44655__$1 = (state_44677[(2)]);
var inst_44656 = (inst_44655__$1 == null);
var inst_44657__$1 = cljs.core.not.call(null,inst_44656);
var state_44677__$1 = (function (){var statearr_44696 = state_44677;
(statearr_44696[(11)] = inst_44657__$1);

(statearr_44696[(8)] = inst_44655__$1);

return statearr_44696;
})();
if(inst_44657__$1){
var statearr_44697_44757 = state_44677__$1;
(statearr_44697_44757[(1)] = (15));

} else {
var statearr_44698_44758 = state_44677__$1;
(statearr_44698_44758[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44678 === (16))){
var inst_44657 = (state_44677[(11)]);
var state_44677__$1 = state_44677;
var statearr_44699_44759 = state_44677__$1;
(statearr_44699_44759[(2)] = inst_44657);

(statearr_44699_44759[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44678 === (10))){
var inst_44649 = (state_44677[(2)]);
var state_44677__$1 = state_44677;
var statearr_44700_44760 = state_44677__$1;
(statearr_44700_44760[(2)] = inst_44649);

(statearr_44700_44760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44678 === (18))){
var inst_44660 = (state_44677[(2)]);
var state_44677__$1 = state_44677;
var statearr_44701_44761 = state_44677__$1;
(statearr_44701_44761[(2)] = inst_44660);

(statearr_44701_44761[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44678 === (8))){
var inst_44646 = cljs.core.async.close_BANG_.call(null,to);
var state_44677__$1 = state_44677;
var statearr_44702_44762 = state_44677__$1;
(statearr_44702_44762[(2)] = inst_44646);

(statearr_44702_44762[(1)] = (10));


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
});})(c__44371__auto__,jobs,results,process,async))
;
return ((function (switch__44281__auto__,c__44371__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44282__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44282__auto____0 = (function (){
var statearr_44703 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44703[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44282__auto__);

(statearr_44703[(1)] = (1));

return statearr_44703;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44282__auto____1 = (function (state_44677){
while(true){
var ret_value__44283__auto__ = (function (){try{while(true){
var result__44284__auto__ = switch__44281__auto__.call(null,state_44677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44284__auto__;
}
break;
}
}catch (e44704){if((e44704 instanceof Object)){
var ex__44285__auto__ = e44704;
var statearr_44705_44763 = state_44677;
(statearr_44705_44763[(5)] = ex__44285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44764 = state_44677;
state_44677 = G__44764;
continue;
} else {
return ret_value__44283__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44282__auto__ = function(state_44677){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44282__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44282__auto____1.call(this,state_44677);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44282__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44282__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44282__auto__;
})()
;})(switch__44281__auto__,c__44371__auto__,jobs,results,process,async))
})();
var state__44373__auto__ = (function (){var statearr_44706 = f__44372__auto__.call(null);
(statearr_44706[(6)] = c__44371__auto__);

return statearr_44706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44373__auto__);
});})(c__44371__auto__,jobs,results,process,async))
);

return c__44371__auto__;
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
var G__44766 = arguments.length;
switch (G__44766) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__44769 = arguments.length;
switch (G__44769) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__44772 = arguments.length;
switch (G__44772) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__44371__auto___44821 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44371__auto___44821,tc,fc){
return (function (){
var f__44372__auto__ = (function (){var switch__44281__auto__ = ((function (c__44371__auto___44821,tc,fc){
return (function (state_44798){
var state_val_44799 = (state_44798[(1)]);
if((state_val_44799 === (7))){
var inst_44794 = (state_44798[(2)]);
var state_44798__$1 = state_44798;
var statearr_44800_44822 = state_44798__$1;
(statearr_44800_44822[(2)] = inst_44794);

(statearr_44800_44822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44799 === (1))){
var state_44798__$1 = state_44798;
var statearr_44801_44823 = state_44798__$1;
(statearr_44801_44823[(2)] = null);

(statearr_44801_44823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44799 === (4))){
var inst_44775 = (state_44798[(7)]);
var inst_44775__$1 = (state_44798[(2)]);
var inst_44776 = (inst_44775__$1 == null);
var state_44798__$1 = (function (){var statearr_44802 = state_44798;
(statearr_44802[(7)] = inst_44775__$1);

return statearr_44802;
})();
if(cljs.core.truth_(inst_44776)){
var statearr_44803_44824 = state_44798__$1;
(statearr_44803_44824[(1)] = (5));

} else {
var statearr_44804_44825 = state_44798__$1;
(statearr_44804_44825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44799 === (13))){
var state_44798__$1 = state_44798;
var statearr_44805_44826 = state_44798__$1;
(statearr_44805_44826[(2)] = null);

(statearr_44805_44826[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44799 === (6))){
var inst_44775 = (state_44798[(7)]);
var inst_44781 = p.call(null,inst_44775);
var state_44798__$1 = state_44798;
if(cljs.core.truth_(inst_44781)){
var statearr_44806_44827 = state_44798__$1;
(statearr_44806_44827[(1)] = (9));

} else {
var statearr_44807_44828 = state_44798__$1;
(statearr_44807_44828[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44799 === (3))){
var inst_44796 = (state_44798[(2)]);
var state_44798__$1 = state_44798;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44798__$1,inst_44796);
} else {
if((state_val_44799 === (12))){
var state_44798__$1 = state_44798;
var statearr_44808_44829 = state_44798__$1;
(statearr_44808_44829[(2)] = null);

(statearr_44808_44829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44799 === (2))){
var state_44798__$1 = state_44798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44798__$1,(4),ch);
} else {
if((state_val_44799 === (11))){
var inst_44775 = (state_44798[(7)]);
var inst_44785 = (state_44798[(2)]);
var state_44798__$1 = state_44798;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44798__$1,(8),inst_44785,inst_44775);
} else {
if((state_val_44799 === (9))){
var state_44798__$1 = state_44798;
var statearr_44809_44830 = state_44798__$1;
(statearr_44809_44830[(2)] = tc);

(statearr_44809_44830[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44799 === (5))){
var inst_44778 = cljs.core.async.close_BANG_.call(null,tc);
var inst_44779 = cljs.core.async.close_BANG_.call(null,fc);
var state_44798__$1 = (function (){var statearr_44810 = state_44798;
(statearr_44810[(8)] = inst_44778);

return statearr_44810;
})();
var statearr_44811_44831 = state_44798__$1;
(statearr_44811_44831[(2)] = inst_44779);

(statearr_44811_44831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44799 === (14))){
var inst_44792 = (state_44798[(2)]);
var state_44798__$1 = state_44798;
var statearr_44812_44832 = state_44798__$1;
(statearr_44812_44832[(2)] = inst_44792);

(statearr_44812_44832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44799 === (10))){
var state_44798__$1 = state_44798;
var statearr_44813_44833 = state_44798__$1;
(statearr_44813_44833[(2)] = fc);

(statearr_44813_44833[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44799 === (8))){
var inst_44787 = (state_44798[(2)]);
var state_44798__$1 = state_44798;
if(cljs.core.truth_(inst_44787)){
var statearr_44814_44834 = state_44798__$1;
(statearr_44814_44834[(1)] = (12));

} else {
var statearr_44815_44835 = state_44798__$1;
(statearr_44815_44835[(1)] = (13));

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
});})(c__44371__auto___44821,tc,fc))
;
return ((function (switch__44281__auto__,c__44371__auto___44821,tc,fc){
return (function() {
var cljs$core$async$state_machine__44282__auto__ = null;
var cljs$core$async$state_machine__44282__auto____0 = (function (){
var statearr_44816 = [null,null,null,null,null,null,null,null,null];
(statearr_44816[(0)] = cljs$core$async$state_machine__44282__auto__);

(statearr_44816[(1)] = (1));

return statearr_44816;
});
var cljs$core$async$state_machine__44282__auto____1 = (function (state_44798){
while(true){
var ret_value__44283__auto__ = (function (){try{while(true){
var result__44284__auto__ = switch__44281__auto__.call(null,state_44798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44284__auto__;
}
break;
}
}catch (e44817){if((e44817 instanceof Object)){
var ex__44285__auto__ = e44817;
var statearr_44818_44836 = state_44798;
(statearr_44818_44836[(5)] = ex__44285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44837 = state_44798;
state_44798 = G__44837;
continue;
} else {
return ret_value__44283__auto__;
}
break;
}
});
cljs$core$async$state_machine__44282__auto__ = function(state_44798){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44282__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44282__auto____1.call(this,state_44798);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44282__auto____0;
cljs$core$async$state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44282__auto____1;
return cljs$core$async$state_machine__44282__auto__;
})()
;})(switch__44281__auto__,c__44371__auto___44821,tc,fc))
})();
var state__44373__auto__ = (function (){var statearr_44819 = f__44372__auto__.call(null);
(statearr_44819[(6)] = c__44371__auto___44821);

return statearr_44819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44373__auto__);
});})(c__44371__auto___44821,tc,fc))
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
var c__44371__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44371__auto__){
return (function (){
var f__44372__auto__ = (function (){var switch__44281__auto__ = ((function (c__44371__auto__){
return (function (state_44858){
var state_val_44859 = (state_44858[(1)]);
if((state_val_44859 === (7))){
var inst_44854 = (state_44858[(2)]);
var state_44858__$1 = state_44858;
var statearr_44860_44878 = state_44858__$1;
(statearr_44860_44878[(2)] = inst_44854);

(statearr_44860_44878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44859 === (1))){
var inst_44838 = init;
var state_44858__$1 = (function (){var statearr_44861 = state_44858;
(statearr_44861[(7)] = inst_44838);

return statearr_44861;
})();
var statearr_44862_44879 = state_44858__$1;
(statearr_44862_44879[(2)] = null);

(statearr_44862_44879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44859 === (4))){
var inst_44841 = (state_44858[(8)]);
var inst_44841__$1 = (state_44858[(2)]);
var inst_44842 = (inst_44841__$1 == null);
var state_44858__$1 = (function (){var statearr_44863 = state_44858;
(statearr_44863[(8)] = inst_44841__$1);

return statearr_44863;
})();
if(cljs.core.truth_(inst_44842)){
var statearr_44864_44880 = state_44858__$1;
(statearr_44864_44880[(1)] = (5));

} else {
var statearr_44865_44881 = state_44858__$1;
(statearr_44865_44881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44859 === (6))){
var inst_44841 = (state_44858[(8)]);
var inst_44845 = (state_44858[(9)]);
var inst_44838 = (state_44858[(7)]);
var inst_44845__$1 = f.call(null,inst_44838,inst_44841);
var inst_44846 = cljs.core.reduced_QMARK_.call(null,inst_44845__$1);
var state_44858__$1 = (function (){var statearr_44866 = state_44858;
(statearr_44866[(9)] = inst_44845__$1);

return statearr_44866;
})();
if(inst_44846){
var statearr_44867_44882 = state_44858__$1;
(statearr_44867_44882[(1)] = (8));

} else {
var statearr_44868_44883 = state_44858__$1;
(statearr_44868_44883[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44859 === (3))){
var inst_44856 = (state_44858[(2)]);
var state_44858__$1 = state_44858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44858__$1,inst_44856);
} else {
if((state_val_44859 === (2))){
var state_44858__$1 = state_44858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44858__$1,(4),ch);
} else {
if((state_val_44859 === (9))){
var inst_44845 = (state_44858[(9)]);
var inst_44838 = inst_44845;
var state_44858__$1 = (function (){var statearr_44869 = state_44858;
(statearr_44869[(7)] = inst_44838);

return statearr_44869;
})();
var statearr_44870_44884 = state_44858__$1;
(statearr_44870_44884[(2)] = null);

(statearr_44870_44884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44859 === (5))){
var inst_44838 = (state_44858[(7)]);
var state_44858__$1 = state_44858;
var statearr_44871_44885 = state_44858__$1;
(statearr_44871_44885[(2)] = inst_44838);

(statearr_44871_44885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44859 === (10))){
var inst_44852 = (state_44858[(2)]);
var state_44858__$1 = state_44858;
var statearr_44872_44886 = state_44858__$1;
(statearr_44872_44886[(2)] = inst_44852);

(statearr_44872_44886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44859 === (8))){
var inst_44845 = (state_44858[(9)]);
var inst_44848 = cljs.core.deref.call(null,inst_44845);
var state_44858__$1 = state_44858;
var statearr_44873_44887 = state_44858__$1;
(statearr_44873_44887[(2)] = inst_44848);

(statearr_44873_44887[(1)] = (10));


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
});})(c__44371__auto__))
;
return ((function (switch__44281__auto__,c__44371__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__44282__auto__ = null;
var cljs$core$async$reduce_$_state_machine__44282__auto____0 = (function (){
var statearr_44874 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44874[(0)] = cljs$core$async$reduce_$_state_machine__44282__auto__);

(statearr_44874[(1)] = (1));

return statearr_44874;
});
var cljs$core$async$reduce_$_state_machine__44282__auto____1 = (function (state_44858){
while(true){
var ret_value__44283__auto__ = (function (){try{while(true){
var result__44284__auto__ = switch__44281__auto__.call(null,state_44858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44284__auto__;
}
break;
}
}catch (e44875){if((e44875 instanceof Object)){
var ex__44285__auto__ = e44875;
var statearr_44876_44888 = state_44858;
(statearr_44876_44888[(5)] = ex__44285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44889 = state_44858;
state_44858 = G__44889;
continue;
} else {
return ret_value__44283__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__44282__auto__ = function(state_44858){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__44282__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__44282__auto____1.call(this,state_44858);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__44282__auto____0;
cljs$core$async$reduce_$_state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__44282__auto____1;
return cljs$core$async$reduce_$_state_machine__44282__auto__;
})()
;})(switch__44281__auto__,c__44371__auto__))
})();
var state__44373__auto__ = (function (){var statearr_44877 = f__44372__auto__.call(null);
(statearr_44877[(6)] = c__44371__auto__);

return statearr_44877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44373__auto__);
});})(c__44371__auto__))
);

return c__44371__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__44371__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44371__auto__,f__$1){
return (function (){
var f__44372__auto__ = (function (){var switch__44281__auto__ = ((function (c__44371__auto__,f__$1){
return (function (state_44895){
var state_val_44896 = (state_44895[(1)]);
if((state_val_44896 === (1))){
var inst_44890 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_44895__$1 = state_44895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44895__$1,(2),inst_44890);
} else {
if((state_val_44896 === (2))){
var inst_44892 = (state_44895[(2)]);
var inst_44893 = f__$1.call(null,inst_44892);
var state_44895__$1 = state_44895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44895__$1,inst_44893);
} else {
return null;
}
}
});})(c__44371__auto__,f__$1))
;
return ((function (switch__44281__auto__,c__44371__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__44282__auto__ = null;
var cljs$core$async$transduce_$_state_machine__44282__auto____0 = (function (){
var statearr_44897 = [null,null,null,null,null,null,null];
(statearr_44897[(0)] = cljs$core$async$transduce_$_state_machine__44282__auto__);

(statearr_44897[(1)] = (1));

return statearr_44897;
});
var cljs$core$async$transduce_$_state_machine__44282__auto____1 = (function (state_44895){
while(true){
var ret_value__44283__auto__ = (function (){try{while(true){
var result__44284__auto__ = switch__44281__auto__.call(null,state_44895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44284__auto__;
}
break;
}
}catch (e44898){if((e44898 instanceof Object)){
var ex__44285__auto__ = e44898;
var statearr_44899_44901 = state_44895;
(statearr_44899_44901[(5)] = ex__44285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44902 = state_44895;
state_44895 = G__44902;
continue;
} else {
return ret_value__44283__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__44282__auto__ = function(state_44895){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__44282__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__44282__auto____1.call(this,state_44895);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__44282__auto____0;
cljs$core$async$transduce_$_state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__44282__auto____1;
return cljs$core$async$transduce_$_state_machine__44282__auto__;
})()
;})(switch__44281__auto__,c__44371__auto__,f__$1))
})();
var state__44373__auto__ = (function (){var statearr_44900 = f__44372__auto__.call(null);
(statearr_44900[(6)] = c__44371__auto__);

return statearr_44900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44373__auto__);
});})(c__44371__auto__,f__$1))
);

return c__44371__auto__;
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
var G__44904 = arguments.length;
switch (G__44904) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__44371__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44371__auto__){
return (function (){
var f__44372__auto__ = (function (){var switch__44281__auto__ = ((function (c__44371__auto__){
return (function (state_44929){
var state_val_44930 = (state_44929[(1)]);
if((state_val_44930 === (7))){
var inst_44911 = (state_44929[(2)]);
var state_44929__$1 = state_44929;
var statearr_44931_44952 = state_44929__$1;
(statearr_44931_44952[(2)] = inst_44911);

(statearr_44931_44952[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44930 === (1))){
var inst_44905 = cljs.core.seq.call(null,coll);
var inst_44906 = inst_44905;
var state_44929__$1 = (function (){var statearr_44932 = state_44929;
(statearr_44932[(7)] = inst_44906);

return statearr_44932;
})();
var statearr_44933_44953 = state_44929__$1;
(statearr_44933_44953[(2)] = null);

(statearr_44933_44953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44930 === (4))){
var inst_44906 = (state_44929[(7)]);
var inst_44909 = cljs.core.first.call(null,inst_44906);
var state_44929__$1 = state_44929;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44929__$1,(7),ch,inst_44909);
} else {
if((state_val_44930 === (13))){
var inst_44923 = (state_44929[(2)]);
var state_44929__$1 = state_44929;
var statearr_44934_44954 = state_44929__$1;
(statearr_44934_44954[(2)] = inst_44923);

(statearr_44934_44954[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44930 === (6))){
var inst_44914 = (state_44929[(2)]);
var state_44929__$1 = state_44929;
if(cljs.core.truth_(inst_44914)){
var statearr_44935_44955 = state_44929__$1;
(statearr_44935_44955[(1)] = (8));

} else {
var statearr_44936_44956 = state_44929__$1;
(statearr_44936_44956[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44930 === (3))){
var inst_44927 = (state_44929[(2)]);
var state_44929__$1 = state_44929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44929__$1,inst_44927);
} else {
if((state_val_44930 === (12))){
var state_44929__$1 = state_44929;
var statearr_44937_44957 = state_44929__$1;
(statearr_44937_44957[(2)] = null);

(statearr_44937_44957[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44930 === (2))){
var inst_44906 = (state_44929[(7)]);
var state_44929__$1 = state_44929;
if(cljs.core.truth_(inst_44906)){
var statearr_44938_44958 = state_44929__$1;
(statearr_44938_44958[(1)] = (4));

} else {
var statearr_44939_44959 = state_44929__$1;
(statearr_44939_44959[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44930 === (11))){
var inst_44920 = cljs.core.async.close_BANG_.call(null,ch);
var state_44929__$1 = state_44929;
var statearr_44940_44960 = state_44929__$1;
(statearr_44940_44960[(2)] = inst_44920);

(statearr_44940_44960[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44930 === (9))){
var state_44929__$1 = state_44929;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44941_44961 = state_44929__$1;
(statearr_44941_44961[(1)] = (11));

} else {
var statearr_44942_44962 = state_44929__$1;
(statearr_44942_44962[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44930 === (5))){
var inst_44906 = (state_44929[(7)]);
var state_44929__$1 = state_44929;
var statearr_44943_44963 = state_44929__$1;
(statearr_44943_44963[(2)] = inst_44906);

(statearr_44943_44963[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44930 === (10))){
var inst_44925 = (state_44929[(2)]);
var state_44929__$1 = state_44929;
var statearr_44944_44964 = state_44929__$1;
(statearr_44944_44964[(2)] = inst_44925);

(statearr_44944_44964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44930 === (8))){
var inst_44906 = (state_44929[(7)]);
var inst_44916 = cljs.core.next.call(null,inst_44906);
var inst_44906__$1 = inst_44916;
var state_44929__$1 = (function (){var statearr_44945 = state_44929;
(statearr_44945[(7)] = inst_44906__$1);

return statearr_44945;
})();
var statearr_44946_44965 = state_44929__$1;
(statearr_44946_44965[(2)] = null);

(statearr_44946_44965[(1)] = (2));


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
});})(c__44371__auto__))
;
return ((function (switch__44281__auto__,c__44371__auto__){
return (function() {
var cljs$core$async$state_machine__44282__auto__ = null;
var cljs$core$async$state_machine__44282__auto____0 = (function (){
var statearr_44947 = [null,null,null,null,null,null,null,null];
(statearr_44947[(0)] = cljs$core$async$state_machine__44282__auto__);

(statearr_44947[(1)] = (1));

return statearr_44947;
});
var cljs$core$async$state_machine__44282__auto____1 = (function (state_44929){
while(true){
var ret_value__44283__auto__ = (function (){try{while(true){
var result__44284__auto__ = switch__44281__auto__.call(null,state_44929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44284__auto__;
}
break;
}
}catch (e44948){if((e44948 instanceof Object)){
var ex__44285__auto__ = e44948;
var statearr_44949_44966 = state_44929;
(statearr_44949_44966[(5)] = ex__44285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44967 = state_44929;
state_44929 = G__44967;
continue;
} else {
return ret_value__44283__auto__;
}
break;
}
});
cljs$core$async$state_machine__44282__auto__ = function(state_44929){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44282__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44282__auto____1.call(this,state_44929);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44282__auto____0;
cljs$core$async$state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44282__auto____1;
return cljs$core$async$state_machine__44282__auto__;
})()
;})(switch__44281__auto__,c__44371__auto__))
})();
var state__44373__auto__ = (function (){var statearr_44950 = f__44372__auto__.call(null);
(statearr_44950[(6)] = c__44371__auto__);

return statearr_44950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44373__auto__);
});})(c__44371__auto__))
);

return c__44371__auto__;
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
var x__41402__auto__ = (((_ == null))?null:_);
var m__41403__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__41402__auto__)]);
if(!((m__41403__auto__ == null))){
return m__41403__auto__.call(null,_);
} else {
var m__41403__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__41403__auto____$1 == null))){
return m__41403__auto____$1.call(null,_);
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
var x__41402__auto__ = (((m == null))?null:m);
var m__41403__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__41402__auto__)]);
if(!((m__41403__auto__ == null))){
return m__41403__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__41403__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__41403__auto____$1 == null))){
return m__41403__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__41402__auto__ = (((m == null))?null:m);
var m__41403__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__41402__auto__)]);
if(!((m__41403__auto__ == null))){
return m__41403__auto__.call(null,m,ch);
} else {
var m__41403__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__41403__auto____$1 == null))){
return m__41403__auto____$1.call(null,m,ch);
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
var x__41402__auto__ = (((m == null))?null:m);
var m__41403__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__41402__auto__)]);
if(!((m__41403__auto__ == null))){
return m__41403__auto__.call(null,m);
} else {
var m__41403__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__41403__auto____$1 == null))){
return m__41403__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async44968 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44968 = (function (ch,cs,meta44969){
this.ch = ch;
this.cs = cs;
this.meta44969 = meta44969;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_44970,meta44969__$1){
var self__ = this;
var _44970__$1 = this;
return (new cljs.core.async.t_cljs$core$async44968(self__.ch,self__.cs,meta44969__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async44968.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_44970){
var self__ = this;
var _44970__$1 = this;
return self__.meta44969;
});})(cs))
;

cljs.core.async.t_cljs$core$async44968.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44968.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async44968.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44968.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44968.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44968.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44968.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44969","meta44969",-1577693314,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async44968.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44968.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44968";

cljs.core.async.t_cljs$core$async44968.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__41340__auto__,writer__41341__auto__,opt__41342__auto__){
return cljs.core._write.call(null,writer__41341__auto__,"cljs.core.async/t_cljs$core$async44968");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async44968 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async44968(ch__$1,cs__$1,meta44969){
return (new cljs.core.async.t_cljs$core$async44968(ch__$1,cs__$1,meta44969));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async44968(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__44371__auto___45190 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44371__auto___45190,cs,m,dchan,dctr,done){
return (function (){
var f__44372__auto__ = (function (){var switch__44281__auto__ = ((function (c__44371__auto___45190,cs,m,dchan,dctr,done){
return (function (state_45105){
var state_val_45106 = (state_45105[(1)]);
if((state_val_45106 === (7))){
var inst_45101 = (state_45105[(2)]);
var state_45105__$1 = state_45105;
var statearr_45107_45191 = state_45105__$1;
(statearr_45107_45191[(2)] = inst_45101);

(statearr_45107_45191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (20))){
var inst_45004 = (state_45105[(7)]);
var inst_45016 = cljs.core.first.call(null,inst_45004);
var inst_45017 = cljs.core.nth.call(null,inst_45016,(0),null);
var inst_45018 = cljs.core.nth.call(null,inst_45016,(1),null);
var state_45105__$1 = (function (){var statearr_45108 = state_45105;
(statearr_45108[(8)] = inst_45017);

return statearr_45108;
})();
if(cljs.core.truth_(inst_45018)){
var statearr_45109_45192 = state_45105__$1;
(statearr_45109_45192[(1)] = (22));

} else {
var statearr_45110_45193 = state_45105__$1;
(statearr_45110_45193[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (27))){
var inst_45053 = (state_45105[(9)]);
var inst_45046 = (state_45105[(10)]);
var inst_45048 = (state_45105[(11)]);
var inst_44973 = (state_45105[(12)]);
var inst_45053__$1 = cljs.core._nth.call(null,inst_45046,inst_45048);
var inst_45054 = cljs.core.async.put_BANG_.call(null,inst_45053__$1,inst_44973,done);
var state_45105__$1 = (function (){var statearr_45111 = state_45105;
(statearr_45111[(9)] = inst_45053__$1);

return statearr_45111;
})();
if(cljs.core.truth_(inst_45054)){
var statearr_45112_45194 = state_45105__$1;
(statearr_45112_45194[(1)] = (30));

} else {
var statearr_45113_45195 = state_45105__$1;
(statearr_45113_45195[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (1))){
var state_45105__$1 = state_45105;
var statearr_45114_45196 = state_45105__$1;
(statearr_45114_45196[(2)] = null);

(statearr_45114_45196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (24))){
var inst_45004 = (state_45105[(7)]);
var inst_45023 = (state_45105[(2)]);
var inst_45024 = cljs.core.next.call(null,inst_45004);
var inst_44982 = inst_45024;
var inst_44983 = null;
var inst_44984 = (0);
var inst_44985 = (0);
var state_45105__$1 = (function (){var statearr_45115 = state_45105;
(statearr_45115[(13)] = inst_44985);

(statearr_45115[(14)] = inst_44982);

(statearr_45115[(15)] = inst_44984);

(statearr_45115[(16)] = inst_44983);

(statearr_45115[(17)] = inst_45023);

return statearr_45115;
})();
var statearr_45116_45197 = state_45105__$1;
(statearr_45116_45197[(2)] = null);

(statearr_45116_45197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (39))){
var state_45105__$1 = state_45105;
var statearr_45120_45198 = state_45105__$1;
(statearr_45120_45198[(2)] = null);

(statearr_45120_45198[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (4))){
var inst_44973 = (state_45105[(12)]);
var inst_44973__$1 = (state_45105[(2)]);
var inst_44974 = (inst_44973__$1 == null);
var state_45105__$1 = (function (){var statearr_45121 = state_45105;
(statearr_45121[(12)] = inst_44973__$1);

return statearr_45121;
})();
if(cljs.core.truth_(inst_44974)){
var statearr_45122_45199 = state_45105__$1;
(statearr_45122_45199[(1)] = (5));

} else {
var statearr_45123_45200 = state_45105__$1;
(statearr_45123_45200[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (15))){
var inst_44985 = (state_45105[(13)]);
var inst_44982 = (state_45105[(14)]);
var inst_44984 = (state_45105[(15)]);
var inst_44983 = (state_45105[(16)]);
var inst_45000 = (state_45105[(2)]);
var inst_45001 = (inst_44985 + (1));
var tmp45117 = inst_44982;
var tmp45118 = inst_44984;
var tmp45119 = inst_44983;
var inst_44982__$1 = tmp45117;
var inst_44983__$1 = tmp45119;
var inst_44984__$1 = tmp45118;
var inst_44985__$1 = inst_45001;
var state_45105__$1 = (function (){var statearr_45124 = state_45105;
(statearr_45124[(18)] = inst_45000);

(statearr_45124[(13)] = inst_44985__$1);

(statearr_45124[(14)] = inst_44982__$1);

(statearr_45124[(15)] = inst_44984__$1);

(statearr_45124[(16)] = inst_44983__$1);

return statearr_45124;
})();
var statearr_45125_45201 = state_45105__$1;
(statearr_45125_45201[(2)] = null);

(statearr_45125_45201[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (21))){
var inst_45027 = (state_45105[(2)]);
var state_45105__$1 = state_45105;
var statearr_45129_45202 = state_45105__$1;
(statearr_45129_45202[(2)] = inst_45027);

(statearr_45129_45202[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (31))){
var inst_45053 = (state_45105[(9)]);
var inst_45057 = done.call(null,null);
var inst_45058 = cljs.core.async.untap_STAR_.call(null,m,inst_45053);
var state_45105__$1 = (function (){var statearr_45130 = state_45105;
(statearr_45130[(19)] = inst_45057);

return statearr_45130;
})();
var statearr_45131_45203 = state_45105__$1;
(statearr_45131_45203[(2)] = inst_45058);

(statearr_45131_45203[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (32))){
var inst_45047 = (state_45105[(20)]);
var inst_45046 = (state_45105[(10)]);
var inst_45045 = (state_45105[(21)]);
var inst_45048 = (state_45105[(11)]);
var inst_45060 = (state_45105[(2)]);
var inst_45061 = (inst_45048 + (1));
var tmp45126 = inst_45047;
var tmp45127 = inst_45046;
var tmp45128 = inst_45045;
var inst_45045__$1 = tmp45128;
var inst_45046__$1 = tmp45127;
var inst_45047__$1 = tmp45126;
var inst_45048__$1 = inst_45061;
var state_45105__$1 = (function (){var statearr_45132 = state_45105;
(statearr_45132[(20)] = inst_45047__$1);

(statearr_45132[(10)] = inst_45046__$1);

(statearr_45132[(21)] = inst_45045__$1);

(statearr_45132[(11)] = inst_45048__$1);

(statearr_45132[(22)] = inst_45060);

return statearr_45132;
})();
var statearr_45133_45204 = state_45105__$1;
(statearr_45133_45204[(2)] = null);

(statearr_45133_45204[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (40))){
var inst_45073 = (state_45105[(23)]);
var inst_45077 = done.call(null,null);
var inst_45078 = cljs.core.async.untap_STAR_.call(null,m,inst_45073);
var state_45105__$1 = (function (){var statearr_45134 = state_45105;
(statearr_45134[(24)] = inst_45077);

return statearr_45134;
})();
var statearr_45135_45205 = state_45105__$1;
(statearr_45135_45205[(2)] = inst_45078);

(statearr_45135_45205[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (33))){
var inst_45064 = (state_45105[(25)]);
var inst_45066 = cljs.core.chunked_seq_QMARK_.call(null,inst_45064);
var state_45105__$1 = state_45105;
if(inst_45066){
var statearr_45136_45206 = state_45105__$1;
(statearr_45136_45206[(1)] = (36));

} else {
var statearr_45137_45207 = state_45105__$1;
(statearr_45137_45207[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (13))){
var inst_44994 = (state_45105[(26)]);
var inst_44997 = cljs.core.async.close_BANG_.call(null,inst_44994);
var state_45105__$1 = state_45105;
var statearr_45138_45208 = state_45105__$1;
(statearr_45138_45208[(2)] = inst_44997);

(statearr_45138_45208[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (22))){
var inst_45017 = (state_45105[(8)]);
var inst_45020 = cljs.core.async.close_BANG_.call(null,inst_45017);
var state_45105__$1 = state_45105;
var statearr_45139_45209 = state_45105__$1;
(statearr_45139_45209[(2)] = inst_45020);

(statearr_45139_45209[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (36))){
var inst_45064 = (state_45105[(25)]);
var inst_45068 = cljs.core.chunk_first.call(null,inst_45064);
var inst_45069 = cljs.core.chunk_rest.call(null,inst_45064);
var inst_45070 = cljs.core.count.call(null,inst_45068);
var inst_45045 = inst_45069;
var inst_45046 = inst_45068;
var inst_45047 = inst_45070;
var inst_45048 = (0);
var state_45105__$1 = (function (){var statearr_45140 = state_45105;
(statearr_45140[(20)] = inst_45047);

(statearr_45140[(10)] = inst_45046);

(statearr_45140[(21)] = inst_45045);

(statearr_45140[(11)] = inst_45048);

return statearr_45140;
})();
var statearr_45141_45210 = state_45105__$1;
(statearr_45141_45210[(2)] = null);

(statearr_45141_45210[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (41))){
var inst_45064 = (state_45105[(25)]);
var inst_45080 = (state_45105[(2)]);
var inst_45081 = cljs.core.next.call(null,inst_45064);
var inst_45045 = inst_45081;
var inst_45046 = null;
var inst_45047 = (0);
var inst_45048 = (0);
var state_45105__$1 = (function (){var statearr_45142 = state_45105;
(statearr_45142[(20)] = inst_45047);

(statearr_45142[(10)] = inst_45046);

(statearr_45142[(21)] = inst_45045);

(statearr_45142[(11)] = inst_45048);

(statearr_45142[(27)] = inst_45080);

return statearr_45142;
})();
var statearr_45143_45211 = state_45105__$1;
(statearr_45143_45211[(2)] = null);

(statearr_45143_45211[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (43))){
var state_45105__$1 = state_45105;
var statearr_45144_45212 = state_45105__$1;
(statearr_45144_45212[(2)] = null);

(statearr_45144_45212[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (29))){
var inst_45089 = (state_45105[(2)]);
var state_45105__$1 = state_45105;
var statearr_45145_45213 = state_45105__$1;
(statearr_45145_45213[(2)] = inst_45089);

(statearr_45145_45213[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (44))){
var inst_45098 = (state_45105[(2)]);
var state_45105__$1 = (function (){var statearr_45146 = state_45105;
(statearr_45146[(28)] = inst_45098);

return statearr_45146;
})();
var statearr_45147_45214 = state_45105__$1;
(statearr_45147_45214[(2)] = null);

(statearr_45147_45214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (6))){
var inst_45037 = (state_45105[(29)]);
var inst_45036 = cljs.core.deref.call(null,cs);
var inst_45037__$1 = cljs.core.keys.call(null,inst_45036);
var inst_45038 = cljs.core.count.call(null,inst_45037__$1);
var inst_45039 = cljs.core.reset_BANG_.call(null,dctr,inst_45038);
var inst_45044 = cljs.core.seq.call(null,inst_45037__$1);
var inst_45045 = inst_45044;
var inst_45046 = null;
var inst_45047 = (0);
var inst_45048 = (0);
var state_45105__$1 = (function (){var statearr_45148 = state_45105;
(statearr_45148[(29)] = inst_45037__$1);

(statearr_45148[(20)] = inst_45047);

(statearr_45148[(10)] = inst_45046);

(statearr_45148[(21)] = inst_45045);

(statearr_45148[(11)] = inst_45048);

(statearr_45148[(30)] = inst_45039);

return statearr_45148;
})();
var statearr_45149_45215 = state_45105__$1;
(statearr_45149_45215[(2)] = null);

(statearr_45149_45215[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (28))){
var inst_45045 = (state_45105[(21)]);
var inst_45064 = (state_45105[(25)]);
var inst_45064__$1 = cljs.core.seq.call(null,inst_45045);
var state_45105__$1 = (function (){var statearr_45150 = state_45105;
(statearr_45150[(25)] = inst_45064__$1);

return statearr_45150;
})();
if(inst_45064__$1){
var statearr_45151_45216 = state_45105__$1;
(statearr_45151_45216[(1)] = (33));

} else {
var statearr_45152_45217 = state_45105__$1;
(statearr_45152_45217[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (25))){
var inst_45047 = (state_45105[(20)]);
var inst_45048 = (state_45105[(11)]);
var inst_45050 = (inst_45048 < inst_45047);
var inst_45051 = inst_45050;
var state_45105__$1 = state_45105;
if(cljs.core.truth_(inst_45051)){
var statearr_45153_45218 = state_45105__$1;
(statearr_45153_45218[(1)] = (27));

} else {
var statearr_45154_45219 = state_45105__$1;
(statearr_45154_45219[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (34))){
var state_45105__$1 = state_45105;
var statearr_45155_45220 = state_45105__$1;
(statearr_45155_45220[(2)] = null);

(statearr_45155_45220[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (17))){
var state_45105__$1 = state_45105;
var statearr_45156_45221 = state_45105__$1;
(statearr_45156_45221[(2)] = null);

(statearr_45156_45221[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (3))){
var inst_45103 = (state_45105[(2)]);
var state_45105__$1 = state_45105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45105__$1,inst_45103);
} else {
if((state_val_45106 === (12))){
var inst_45032 = (state_45105[(2)]);
var state_45105__$1 = state_45105;
var statearr_45157_45222 = state_45105__$1;
(statearr_45157_45222[(2)] = inst_45032);

(statearr_45157_45222[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (2))){
var state_45105__$1 = state_45105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45105__$1,(4),ch);
} else {
if((state_val_45106 === (23))){
var state_45105__$1 = state_45105;
var statearr_45158_45223 = state_45105__$1;
(statearr_45158_45223[(2)] = null);

(statearr_45158_45223[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (35))){
var inst_45087 = (state_45105[(2)]);
var state_45105__$1 = state_45105;
var statearr_45159_45224 = state_45105__$1;
(statearr_45159_45224[(2)] = inst_45087);

(statearr_45159_45224[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (19))){
var inst_45004 = (state_45105[(7)]);
var inst_45008 = cljs.core.chunk_first.call(null,inst_45004);
var inst_45009 = cljs.core.chunk_rest.call(null,inst_45004);
var inst_45010 = cljs.core.count.call(null,inst_45008);
var inst_44982 = inst_45009;
var inst_44983 = inst_45008;
var inst_44984 = inst_45010;
var inst_44985 = (0);
var state_45105__$1 = (function (){var statearr_45160 = state_45105;
(statearr_45160[(13)] = inst_44985);

(statearr_45160[(14)] = inst_44982);

(statearr_45160[(15)] = inst_44984);

(statearr_45160[(16)] = inst_44983);

return statearr_45160;
})();
var statearr_45161_45225 = state_45105__$1;
(statearr_45161_45225[(2)] = null);

(statearr_45161_45225[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (11))){
var inst_44982 = (state_45105[(14)]);
var inst_45004 = (state_45105[(7)]);
var inst_45004__$1 = cljs.core.seq.call(null,inst_44982);
var state_45105__$1 = (function (){var statearr_45162 = state_45105;
(statearr_45162[(7)] = inst_45004__$1);

return statearr_45162;
})();
if(inst_45004__$1){
var statearr_45163_45226 = state_45105__$1;
(statearr_45163_45226[(1)] = (16));

} else {
var statearr_45164_45227 = state_45105__$1;
(statearr_45164_45227[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (9))){
var inst_45034 = (state_45105[(2)]);
var state_45105__$1 = state_45105;
var statearr_45165_45228 = state_45105__$1;
(statearr_45165_45228[(2)] = inst_45034);

(statearr_45165_45228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (5))){
var inst_44980 = cljs.core.deref.call(null,cs);
var inst_44981 = cljs.core.seq.call(null,inst_44980);
var inst_44982 = inst_44981;
var inst_44983 = null;
var inst_44984 = (0);
var inst_44985 = (0);
var state_45105__$1 = (function (){var statearr_45166 = state_45105;
(statearr_45166[(13)] = inst_44985);

(statearr_45166[(14)] = inst_44982);

(statearr_45166[(15)] = inst_44984);

(statearr_45166[(16)] = inst_44983);

return statearr_45166;
})();
var statearr_45167_45229 = state_45105__$1;
(statearr_45167_45229[(2)] = null);

(statearr_45167_45229[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (14))){
var state_45105__$1 = state_45105;
var statearr_45168_45230 = state_45105__$1;
(statearr_45168_45230[(2)] = null);

(statearr_45168_45230[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (45))){
var inst_45095 = (state_45105[(2)]);
var state_45105__$1 = state_45105;
var statearr_45169_45231 = state_45105__$1;
(statearr_45169_45231[(2)] = inst_45095);

(statearr_45169_45231[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (26))){
var inst_45037 = (state_45105[(29)]);
var inst_45091 = (state_45105[(2)]);
var inst_45092 = cljs.core.seq.call(null,inst_45037);
var state_45105__$1 = (function (){var statearr_45170 = state_45105;
(statearr_45170[(31)] = inst_45091);

return statearr_45170;
})();
if(inst_45092){
var statearr_45171_45232 = state_45105__$1;
(statearr_45171_45232[(1)] = (42));

} else {
var statearr_45172_45233 = state_45105__$1;
(statearr_45172_45233[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (16))){
var inst_45004 = (state_45105[(7)]);
var inst_45006 = cljs.core.chunked_seq_QMARK_.call(null,inst_45004);
var state_45105__$1 = state_45105;
if(inst_45006){
var statearr_45173_45234 = state_45105__$1;
(statearr_45173_45234[(1)] = (19));

} else {
var statearr_45174_45235 = state_45105__$1;
(statearr_45174_45235[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (38))){
var inst_45084 = (state_45105[(2)]);
var state_45105__$1 = state_45105;
var statearr_45175_45236 = state_45105__$1;
(statearr_45175_45236[(2)] = inst_45084);

(statearr_45175_45236[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (30))){
var state_45105__$1 = state_45105;
var statearr_45176_45237 = state_45105__$1;
(statearr_45176_45237[(2)] = null);

(statearr_45176_45237[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (10))){
var inst_44985 = (state_45105[(13)]);
var inst_44983 = (state_45105[(16)]);
var inst_44993 = cljs.core._nth.call(null,inst_44983,inst_44985);
var inst_44994 = cljs.core.nth.call(null,inst_44993,(0),null);
var inst_44995 = cljs.core.nth.call(null,inst_44993,(1),null);
var state_45105__$1 = (function (){var statearr_45177 = state_45105;
(statearr_45177[(26)] = inst_44994);

return statearr_45177;
})();
if(cljs.core.truth_(inst_44995)){
var statearr_45178_45238 = state_45105__$1;
(statearr_45178_45238[(1)] = (13));

} else {
var statearr_45179_45239 = state_45105__$1;
(statearr_45179_45239[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (18))){
var inst_45030 = (state_45105[(2)]);
var state_45105__$1 = state_45105;
var statearr_45180_45240 = state_45105__$1;
(statearr_45180_45240[(2)] = inst_45030);

(statearr_45180_45240[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (42))){
var state_45105__$1 = state_45105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45105__$1,(45),dchan);
} else {
if((state_val_45106 === (37))){
var inst_45073 = (state_45105[(23)]);
var inst_45064 = (state_45105[(25)]);
var inst_44973 = (state_45105[(12)]);
var inst_45073__$1 = cljs.core.first.call(null,inst_45064);
var inst_45074 = cljs.core.async.put_BANG_.call(null,inst_45073__$1,inst_44973,done);
var state_45105__$1 = (function (){var statearr_45181 = state_45105;
(statearr_45181[(23)] = inst_45073__$1);

return statearr_45181;
})();
if(cljs.core.truth_(inst_45074)){
var statearr_45182_45241 = state_45105__$1;
(statearr_45182_45241[(1)] = (39));

} else {
var statearr_45183_45242 = state_45105__$1;
(statearr_45183_45242[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45106 === (8))){
var inst_44985 = (state_45105[(13)]);
var inst_44984 = (state_45105[(15)]);
var inst_44987 = (inst_44985 < inst_44984);
var inst_44988 = inst_44987;
var state_45105__$1 = state_45105;
if(cljs.core.truth_(inst_44988)){
var statearr_45184_45243 = state_45105__$1;
(statearr_45184_45243[(1)] = (10));

} else {
var statearr_45185_45244 = state_45105__$1;
(statearr_45185_45244[(1)] = (11));

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
});})(c__44371__auto___45190,cs,m,dchan,dctr,done))
;
return ((function (switch__44281__auto__,c__44371__auto___45190,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__44282__auto__ = null;
var cljs$core$async$mult_$_state_machine__44282__auto____0 = (function (){
var statearr_45186 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45186[(0)] = cljs$core$async$mult_$_state_machine__44282__auto__);

(statearr_45186[(1)] = (1));

return statearr_45186;
});
var cljs$core$async$mult_$_state_machine__44282__auto____1 = (function (state_45105){
while(true){
var ret_value__44283__auto__ = (function (){try{while(true){
var result__44284__auto__ = switch__44281__auto__.call(null,state_45105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44284__auto__;
}
break;
}
}catch (e45187){if((e45187 instanceof Object)){
var ex__44285__auto__ = e45187;
var statearr_45188_45245 = state_45105;
(statearr_45188_45245[(5)] = ex__44285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45246 = state_45105;
state_45105 = G__45246;
continue;
} else {
return ret_value__44283__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__44282__auto__ = function(state_45105){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__44282__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__44282__auto____1.call(this,state_45105);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__44282__auto____0;
cljs$core$async$mult_$_state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__44282__auto____1;
return cljs$core$async$mult_$_state_machine__44282__auto__;
})()
;})(switch__44281__auto__,c__44371__auto___45190,cs,m,dchan,dctr,done))
})();
var state__44373__auto__ = (function (){var statearr_45189 = f__44372__auto__.call(null);
(statearr_45189[(6)] = c__44371__auto___45190);

return statearr_45189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44373__auto__);
});})(c__44371__auto___45190,cs,m,dchan,dctr,done))
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
var G__45248 = arguments.length;
switch (G__45248) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var x__41402__auto__ = (((m == null))?null:m);
var m__41403__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__41402__auto__)]);
if(!((m__41403__auto__ == null))){
return m__41403__auto__.call(null,m,ch);
} else {
var m__41403__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__41403__auto____$1 == null))){
return m__41403__auto____$1.call(null,m,ch);
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
var x__41402__auto__ = (((m == null))?null:m);
var m__41403__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__41402__auto__)]);
if(!((m__41403__auto__ == null))){
return m__41403__auto__.call(null,m,ch);
} else {
var m__41403__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__41403__auto____$1 == null))){
return m__41403__auto____$1.call(null,m,ch);
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
var x__41402__auto__ = (((m == null))?null:m);
var m__41403__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__41402__auto__)]);
if(!((m__41403__auto__ == null))){
return m__41403__auto__.call(null,m);
} else {
var m__41403__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__41403__auto____$1 == null))){
return m__41403__auto____$1.call(null,m);
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
var x__41402__auto__ = (((m == null))?null:m);
var m__41403__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__41402__auto__)]);
if(!((m__41403__auto__ == null))){
return m__41403__auto__.call(null,m,state_map);
} else {
var m__41403__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__41403__auto____$1 == null))){
return m__41403__auto____$1.call(null,m,state_map);
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
var x__41402__auto__ = (((m == null))?null:m);
var m__41403__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__41402__auto__)]);
if(!((m__41403__auto__ == null))){
return m__41403__auto__.call(null,m,mode);
} else {
var m__41403__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__41403__auto____$1 == null))){
return m__41403__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__41955__auto__ = [];
var len__41948__auto___45260 = arguments.length;
var i__41949__auto___45261 = (0);
while(true){
if((i__41949__auto___45261 < len__41948__auto___45260)){
args__41955__auto__.push((arguments[i__41949__auto___45261]));

var G__45262 = (i__41949__auto___45261 + (1));
i__41949__auto___45261 = G__45262;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((3) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41956__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45254){
var map__45255 = p__45254;
var map__45255__$1 = ((((!((map__45255 == null)))?((((map__45255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45255.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45255):map__45255);
var opts = map__45255__$1;
var statearr_45257_45263 = state;
(statearr_45257_45263[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__45255,map__45255__$1,opts){
return (function (val){
var statearr_45258_45264 = state;
(statearr_45258_45264[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__45255,map__45255__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_45259_45265 = state;
(statearr_45259_45265[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45250){
var G__45251 = cljs.core.first.call(null,seq45250);
var seq45250__$1 = cljs.core.next.call(null,seq45250);
var G__45252 = cljs.core.first.call(null,seq45250__$1);
var seq45250__$2 = cljs.core.next.call(null,seq45250__$1);
var G__45253 = cljs.core.first.call(null,seq45250__$2);
var seq45250__$3 = cljs.core.next.call(null,seq45250__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45251,G__45252,G__45253,seq45250__$3);
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
if(typeof cljs.core.async.t_cljs$core$async45266 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45266 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta45267){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta45267 = meta45267;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_45268,meta45267__$1){
var self__ = this;
var _45268__$1 = this;
return (new cljs.core.async.t_cljs$core$async45266(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta45267__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45266.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_45268){
var self__ = this;
var _45268__$1 = this;
return self__.meta45267;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45266.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45266.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45266.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45266.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45266.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45266.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45266.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45266.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45266.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta45267","meta45267",1319297182,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45266.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45266.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45266";

cljs.core.async.t_cljs$core$async45266.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__41340__auto__,writer__41341__auto__,opt__41342__auto__){
return cljs.core._write.call(null,writer__41341__auto__,"cljs.core.async/t_cljs$core$async45266");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async45266 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async45266(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta45267){
return (new cljs.core.async.t_cljs$core$async45266(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta45267));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async45266(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44371__auto___45430 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44371__auto___45430,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__44372__auto__ = (function (){var switch__44281__auto__ = ((function (c__44371__auto___45430,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_45370){
var state_val_45371 = (state_45370[(1)]);
if((state_val_45371 === (7))){
var inst_45285 = (state_45370[(2)]);
var state_45370__$1 = state_45370;
var statearr_45372_45431 = state_45370__$1;
(statearr_45372_45431[(2)] = inst_45285);

(statearr_45372_45431[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (20))){
var inst_45297 = (state_45370[(7)]);
var state_45370__$1 = state_45370;
var statearr_45373_45432 = state_45370__$1;
(statearr_45373_45432[(2)] = inst_45297);

(statearr_45373_45432[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (27))){
var state_45370__$1 = state_45370;
var statearr_45374_45433 = state_45370__$1;
(statearr_45374_45433[(2)] = null);

(statearr_45374_45433[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (1))){
var inst_45272 = (state_45370[(8)]);
var inst_45272__$1 = calc_state.call(null);
var inst_45274 = (inst_45272__$1 == null);
var inst_45275 = cljs.core.not.call(null,inst_45274);
var state_45370__$1 = (function (){var statearr_45375 = state_45370;
(statearr_45375[(8)] = inst_45272__$1);

return statearr_45375;
})();
if(inst_45275){
var statearr_45376_45434 = state_45370__$1;
(statearr_45376_45434[(1)] = (2));

} else {
var statearr_45377_45435 = state_45370__$1;
(statearr_45377_45435[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (24))){
var inst_45321 = (state_45370[(9)]);
var inst_45344 = (state_45370[(10)]);
var inst_45330 = (state_45370[(11)]);
var inst_45344__$1 = inst_45321.call(null,inst_45330);
var state_45370__$1 = (function (){var statearr_45378 = state_45370;
(statearr_45378[(10)] = inst_45344__$1);

return statearr_45378;
})();
if(cljs.core.truth_(inst_45344__$1)){
var statearr_45379_45436 = state_45370__$1;
(statearr_45379_45436[(1)] = (29));

} else {
var statearr_45380_45437 = state_45370__$1;
(statearr_45380_45437[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (4))){
var inst_45288 = (state_45370[(2)]);
var state_45370__$1 = state_45370;
if(cljs.core.truth_(inst_45288)){
var statearr_45381_45438 = state_45370__$1;
(statearr_45381_45438[(1)] = (8));

} else {
var statearr_45382_45439 = state_45370__$1;
(statearr_45382_45439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (15))){
var inst_45315 = (state_45370[(2)]);
var state_45370__$1 = state_45370;
if(cljs.core.truth_(inst_45315)){
var statearr_45383_45440 = state_45370__$1;
(statearr_45383_45440[(1)] = (19));

} else {
var statearr_45384_45441 = state_45370__$1;
(statearr_45384_45441[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (21))){
var inst_45320 = (state_45370[(12)]);
var inst_45320__$1 = (state_45370[(2)]);
var inst_45321 = cljs.core.get.call(null,inst_45320__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45322 = cljs.core.get.call(null,inst_45320__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45323 = cljs.core.get.call(null,inst_45320__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45370__$1 = (function (){var statearr_45385 = state_45370;
(statearr_45385[(12)] = inst_45320__$1);

(statearr_45385[(13)] = inst_45322);

(statearr_45385[(9)] = inst_45321);

return statearr_45385;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_45370__$1,(22),inst_45323);
} else {
if((state_val_45371 === (31))){
var inst_45352 = (state_45370[(2)]);
var state_45370__$1 = state_45370;
if(cljs.core.truth_(inst_45352)){
var statearr_45386_45442 = state_45370__$1;
(statearr_45386_45442[(1)] = (32));

} else {
var statearr_45387_45443 = state_45370__$1;
(statearr_45387_45443[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (32))){
var inst_45329 = (state_45370[(14)]);
var state_45370__$1 = state_45370;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45370__$1,(35),out,inst_45329);
} else {
if((state_val_45371 === (33))){
var inst_45320 = (state_45370[(12)]);
var inst_45297 = inst_45320;
var state_45370__$1 = (function (){var statearr_45388 = state_45370;
(statearr_45388[(7)] = inst_45297);

return statearr_45388;
})();
var statearr_45389_45444 = state_45370__$1;
(statearr_45389_45444[(2)] = null);

(statearr_45389_45444[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (13))){
var inst_45297 = (state_45370[(7)]);
var inst_45304 = inst_45297.cljs$lang$protocol_mask$partition0$;
var inst_45305 = (inst_45304 & (64));
var inst_45306 = inst_45297.cljs$core$ISeq$;
var inst_45307 = (cljs.core.PROTOCOL_SENTINEL === inst_45306);
var inst_45308 = (inst_45305) || (inst_45307);
var state_45370__$1 = state_45370;
if(cljs.core.truth_(inst_45308)){
var statearr_45390_45445 = state_45370__$1;
(statearr_45390_45445[(1)] = (16));

} else {
var statearr_45391_45446 = state_45370__$1;
(statearr_45391_45446[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (22))){
var inst_45329 = (state_45370[(14)]);
var inst_45330 = (state_45370[(11)]);
var inst_45328 = (state_45370[(2)]);
var inst_45329__$1 = cljs.core.nth.call(null,inst_45328,(0),null);
var inst_45330__$1 = cljs.core.nth.call(null,inst_45328,(1),null);
var inst_45331 = (inst_45329__$1 == null);
var inst_45332 = cljs.core._EQ_.call(null,inst_45330__$1,change);
var inst_45333 = (inst_45331) || (inst_45332);
var state_45370__$1 = (function (){var statearr_45392 = state_45370;
(statearr_45392[(14)] = inst_45329__$1);

(statearr_45392[(11)] = inst_45330__$1);

return statearr_45392;
})();
if(cljs.core.truth_(inst_45333)){
var statearr_45393_45447 = state_45370__$1;
(statearr_45393_45447[(1)] = (23));

} else {
var statearr_45394_45448 = state_45370__$1;
(statearr_45394_45448[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (36))){
var inst_45320 = (state_45370[(12)]);
var inst_45297 = inst_45320;
var state_45370__$1 = (function (){var statearr_45395 = state_45370;
(statearr_45395[(7)] = inst_45297);

return statearr_45395;
})();
var statearr_45396_45449 = state_45370__$1;
(statearr_45396_45449[(2)] = null);

(statearr_45396_45449[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (29))){
var inst_45344 = (state_45370[(10)]);
var state_45370__$1 = state_45370;
var statearr_45397_45450 = state_45370__$1;
(statearr_45397_45450[(2)] = inst_45344);

(statearr_45397_45450[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (6))){
var state_45370__$1 = state_45370;
var statearr_45398_45451 = state_45370__$1;
(statearr_45398_45451[(2)] = false);

(statearr_45398_45451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (28))){
var inst_45340 = (state_45370[(2)]);
var inst_45341 = calc_state.call(null);
var inst_45297 = inst_45341;
var state_45370__$1 = (function (){var statearr_45399 = state_45370;
(statearr_45399[(15)] = inst_45340);

(statearr_45399[(7)] = inst_45297);

return statearr_45399;
})();
var statearr_45400_45452 = state_45370__$1;
(statearr_45400_45452[(2)] = null);

(statearr_45400_45452[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (25))){
var inst_45366 = (state_45370[(2)]);
var state_45370__$1 = state_45370;
var statearr_45401_45453 = state_45370__$1;
(statearr_45401_45453[(2)] = inst_45366);

(statearr_45401_45453[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (34))){
var inst_45364 = (state_45370[(2)]);
var state_45370__$1 = state_45370;
var statearr_45402_45454 = state_45370__$1;
(statearr_45402_45454[(2)] = inst_45364);

(statearr_45402_45454[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (17))){
var state_45370__$1 = state_45370;
var statearr_45403_45455 = state_45370__$1;
(statearr_45403_45455[(2)] = false);

(statearr_45403_45455[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (3))){
var state_45370__$1 = state_45370;
var statearr_45404_45456 = state_45370__$1;
(statearr_45404_45456[(2)] = false);

(statearr_45404_45456[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (12))){
var inst_45368 = (state_45370[(2)]);
var state_45370__$1 = state_45370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45370__$1,inst_45368);
} else {
if((state_val_45371 === (2))){
var inst_45272 = (state_45370[(8)]);
var inst_45277 = inst_45272.cljs$lang$protocol_mask$partition0$;
var inst_45278 = (inst_45277 & (64));
var inst_45279 = inst_45272.cljs$core$ISeq$;
var inst_45280 = (cljs.core.PROTOCOL_SENTINEL === inst_45279);
var inst_45281 = (inst_45278) || (inst_45280);
var state_45370__$1 = state_45370;
if(cljs.core.truth_(inst_45281)){
var statearr_45405_45457 = state_45370__$1;
(statearr_45405_45457[(1)] = (5));

} else {
var statearr_45406_45458 = state_45370__$1;
(statearr_45406_45458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (23))){
var inst_45329 = (state_45370[(14)]);
var inst_45335 = (inst_45329 == null);
var state_45370__$1 = state_45370;
if(cljs.core.truth_(inst_45335)){
var statearr_45407_45459 = state_45370__$1;
(statearr_45407_45459[(1)] = (26));

} else {
var statearr_45408_45460 = state_45370__$1;
(statearr_45408_45460[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (35))){
var inst_45355 = (state_45370[(2)]);
var state_45370__$1 = state_45370;
if(cljs.core.truth_(inst_45355)){
var statearr_45409_45461 = state_45370__$1;
(statearr_45409_45461[(1)] = (36));

} else {
var statearr_45410_45462 = state_45370__$1;
(statearr_45410_45462[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (19))){
var inst_45297 = (state_45370[(7)]);
var inst_45317 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45297);
var state_45370__$1 = state_45370;
var statearr_45411_45463 = state_45370__$1;
(statearr_45411_45463[(2)] = inst_45317);

(statearr_45411_45463[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (11))){
var inst_45297 = (state_45370[(7)]);
var inst_45301 = (inst_45297 == null);
var inst_45302 = cljs.core.not.call(null,inst_45301);
var state_45370__$1 = state_45370;
if(inst_45302){
var statearr_45412_45464 = state_45370__$1;
(statearr_45412_45464[(1)] = (13));

} else {
var statearr_45413_45465 = state_45370__$1;
(statearr_45413_45465[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (9))){
var inst_45272 = (state_45370[(8)]);
var state_45370__$1 = state_45370;
var statearr_45414_45466 = state_45370__$1;
(statearr_45414_45466[(2)] = inst_45272);

(statearr_45414_45466[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (5))){
var state_45370__$1 = state_45370;
var statearr_45415_45467 = state_45370__$1;
(statearr_45415_45467[(2)] = true);

(statearr_45415_45467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (14))){
var state_45370__$1 = state_45370;
var statearr_45416_45468 = state_45370__$1;
(statearr_45416_45468[(2)] = false);

(statearr_45416_45468[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (26))){
var inst_45330 = (state_45370[(11)]);
var inst_45337 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_45330);
var state_45370__$1 = state_45370;
var statearr_45417_45469 = state_45370__$1;
(statearr_45417_45469[(2)] = inst_45337);

(statearr_45417_45469[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (16))){
var state_45370__$1 = state_45370;
var statearr_45418_45470 = state_45370__$1;
(statearr_45418_45470[(2)] = true);

(statearr_45418_45470[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (38))){
var inst_45360 = (state_45370[(2)]);
var state_45370__$1 = state_45370;
var statearr_45419_45471 = state_45370__$1;
(statearr_45419_45471[(2)] = inst_45360);

(statearr_45419_45471[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (30))){
var inst_45322 = (state_45370[(13)]);
var inst_45321 = (state_45370[(9)]);
var inst_45330 = (state_45370[(11)]);
var inst_45347 = cljs.core.empty_QMARK_.call(null,inst_45321);
var inst_45348 = inst_45322.call(null,inst_45330);
var inst_45349 = cljs.core.not.call(null,inst_45348);
var inst_45350 = (inst_45347) && (inst_45349);
var state_45370__$1 = state_45370;
var statearr_45420_45472 = state_45370__$1;
(statearr_45420_45472[(2)] = inst_45350);

(statearr_45420_45472[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (10))){
var inst_45272 = (state_45370[(8)]);
var inst_45293 = (state_45370[(2)]);
var inst_45294 = cljs.core.get.call(null,inst_45293,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45295 = cljs.core.get.call(null,inst_45293,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45296 = cljs.core.get.call(null,inst_45293,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45297 = inst_45272;
var state_45370__$1 = (function (){var statearr_45421 = state_45370;
(statearr_45421[(16)] = inst_45295);

(statearr_45421[(7)] = inst_45297);

(statearr_45421[(17)] = inst_45296);

(statearr_45421[(18)] = inst_45294);

return statearr_45421;
})();
var statearr_45422_45473 = state_45370__$1;
(statearr_45422_45473[(2)] = null);

(statearr_45422_45473[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (18))){
var inst_45312 = (state_45370[(2)]);
var state_45370__$1 = state_45370;
var statearr_45423_45474 = state_45370__$1;
(statearr_45423_45474[(2)] = inst_45312);

(statearr_45423_45474[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (37))){
var state_45370__$1 = state_45370;
var statearr_45424_45475 = state_45370__$1;
(statearr_45424_45475[(2)] = null);

(statearr_45424_45475[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (8))){
var inst_45272 = (state_45370[(8)]);
var inst_45290 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45272);
var state_45370__$1 = state_45370;
var statearr_45425_45476 = state_45370__$1;
(statearr_45425_45476[(2)] = inst_45290);

(statearr_45425_45476[(1)] = (10));


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
});})(c__44371__auto___45430,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__44281__auto__,c__44371__auto___45430,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__44282__auto__ = null;
var cljs$core$async$mix_$_state_machine__44282__auto____0 = (function (){
var statearr_45426 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45426[(0)] = cljs$core$async$mix_$_state_machine__44282__auto__);

(statearr_45426[(1)] = (1));

return statearr_45426;
});
var cljs$core$async$mix_$_state_machine__44282__auto____1 = (function (state_45370){
while(true){
var ret_value__44283__auto__ = (function (){try{while(true){
var result__44284__auto__ = switch__44281__auto__.call(null,state_45370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44284__auto__;
}
break;
}
}catch (e45427){if((e45427 instanceof Object)){
var ex__44285__auto__ = e45427;
var statearr_45428_45477 = state_45370;
(statearr_45428_45477[(5)] = ex__44285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45478 = state_45370;
state_45370 = G__45478;
continue;
} else {
return ret_value__44283__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__44282__auto__ = function(state_45370){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__44282__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__44282__auto____1.call(this,state_45370);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__44282__auto____0;
cljs$core$async$mix_$_state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__44282__auto____1;
return cljs$core$async$mix_$_state_machine__44282__auto__;
})()
;})(switch__44281__auto__,c__44371__auto___45430,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__44373__auto__ = (function (){var statearr_45429 = f__44372__auto__.call(null);
(statearr_45429[(6)] = c__44371__auto___45430);

return statearr_45429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44373__auto__);
});})(c__44371__auto___45430,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__41402__auto__ = (((p == null))?null:p);
var m__41403__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__41402__auto__)]);
if(!((m__41403__auto__ == null))){
return m__41403__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__41403__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__41403__auto____$1 == null))){
return m__41403__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__41402__auto__ = (((p == null))?null:p);
var m__41403__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__41402__auto__)]);
if(!((m__41403__auto__ == null))){
return m__41403__auto__.call(null,p,v,ch);
} else {
var m__41403__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__41403__auto____$1 == null))){
return m__41403__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__45480 = arguments.length;
switch (G__45480) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__41402__auto__ = (((p == null))?null:p);
var m__41403__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__41402__auto__)]);
if(!((m__41403__auto__ == null))){
return m__41403__auto__.call(null,p);
} else {
var m__41403__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__41403__auto____$1 == null))){
return m__41403__auto____$1.call(null,p);
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
var x__41402__auto__ = (((p == null))?null:p);
var m__41403__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__41402__auto__)]);
if(!((m__41403__auto__ == null))){
return m__41403__auto__.call(null,p,v);
} else {
var m__41403__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__41403__auto____$1 == null))){
return m__41403__auto____$1.call(null,p,v);
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
var G__45484 = arguments.length;
switch (G__45484) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__40669__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__40669__auto__,mults){
return (function (p1__45482_SHARP_){
if(cljs.core.truth_(p1__45482_SHARP_.call(null,topic))){
return p1__45482_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__45482_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__40669__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async45485 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45485 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45486){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45486 = meta45486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_45487,meta45486__$1){
var self__ = this;
var _45487__$1 = this;
return (new cljs.core.async.t_cljs$core$async45485(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45486__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45485.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_45487){
var self__ = this;
var _45487__$1 = this;
return self__.meta45486;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45485.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45485.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45485.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45485.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45485.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45485.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45485.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45485.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45486","meta45486",1866182982,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45485.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45485.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45485";

cljs.core.async.t_cljs$core$async45485.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__41340__auto__,writer__41341__auto__,opt__41342__auto__){
return cljs.core._write.call(null,writer__41341__auto__,"cljs.core.async/t_cljs$core$async45485");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async45485 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async45485(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45486){
return (new cljs.core.async.t_cljs$core$async45485(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45486));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async45485(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44371__auto___45605 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44371__auto___45605,mults,ensure_mult,p){
return (function (){
var f__44372__auto__ = (function (){var switch__44281__auto__ = ((function (c__44371__auto___45605,mults,ensure_mult,p){
return (function (state_45559){
var state_val_45560 = (state_45559[(1)]);
if((state_val_45560 === (7))){
var inst_45555 = (state_45559[(2)]);
var state_45559__$1 = state_45559;
var statearr_45561_45606 = state_45559__$1;
(statearr_45561_45606[(2)] = inst_45555);

(statearr_45561_45606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (20))){
var state_45559__$1 = state_45559;
var statearr_45562_45607 = state_45559__$1;
(statearr_45562_45607[(2)] = null);

(statearr_45562_45607[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (1))){
var state_45559__$1 = state_45559;
var statearr_45563_45608 = state_45559__$1;
(statearr_45563_45608[(2)] = null);

(statearr_45563_45608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (24))){
var inst_45538 = (state_45559[(7)]);
var inst_45547 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_45538);
var state_45559__$1 = state_45559;
var statearr_45564_45609 = state_45559__$1;
(statearr_45564_45609[(2)] = inst_45547);

(statearr_45564_45609[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (4))){
var inst_45490 = (state_45559[(8)]);
var inst_45490__$1 = (state_45559[(2)]);
var inst_45491 = (inst_45490__$1 == null);
var state_45559__$1 = (function (){var statearr_45565 = state_45559;
(statearr_45565[(8)] = inst_45490__$1);

return statearr_45565;
})();
if(cljs.core.truth_(inst_45491)){
var statearr_45566_45610 = state_45559__$1;
(statearr_45566_45610[(1)] = (5));

} else {
var statearr_45567_45611 = state_45559__$1;
(statearr_45567_45611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (15))){
var inst_45532 = (state_45559[(2)]);
var state_45559__$1 = state_45559;
var statearr_45568_45612 = state_45559__$1;
(statearr_45568_45612[(2)] = inst_45532);

(statearr_45568_45612[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (21))){
var inst_45552 = (state_45559[(2)]);
var state_45559__$1 = (function (){var statearr_45569 = state_45559;
(statearr_45569[(9)] = inst_45552);

return statearr_45569;
})();
var statearr_45570_45613 = state_45559__$1;
(statearr_45570_45613[(2)] = null);

(statearr_45570_45613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (13))){
var inst_45514 = (state_45559[(10)]);
var inst_45516 = cljs.core.chunked_seq_QMARK_.call(null,inst_45514);
var state_45559__$1 = state_45559;
if(inst_45516){
var statearr_45571_45614 = state_45559__$1;
(statearr_45571_45614[(1)] = (16));

} else {
var statearr_45572_45615 = state_45559__$1;
(statearr_45572_45615[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (22))){
var inst_45544 = (state_45559[(2)]);
var state_45559__$1 = state_45559;
if(cljs.core.truth_(inst_45544)){
var statearr_45573_45616 = state_45559__$1;
(statearr_45573_45616[(1)] = (23));

} else {
var statearr_45574_45617 = state_45559__$1;
(statearr_45574_45617[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (6))){
var inst_45490 = (state_45559[(8)]);
var inst_45538 = (state_45559[(7)]);
var inst_45540 = (state_45559[(11)]);
var inst_45538__$1 = topic_fn.call(null,inst_45490);
var inst_45539 = cljs.core.deref.call(null,mults);
var inst_45540__$1 = cljs.core.get.call(null,inst_45539,inst_45538__$1);
var state_45559__$1 = (function (){var statearr_45575 = state_45559;
(statearr_45575[(7)] = inst_45538__$1);

(statearr_45575[(11)] = inst_45540__$1);

return statearr_45575;
})();
if(cljs.core.truth_(inst_45540__$1)){
var statearr_45576_45618 = state_45559__$1;
(statearr_45576_45618[(1)] = (19));

} else {
var statearr_45577_45619 = state_45559__$1;
(statearr_45577_45619[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (25))){
var inst_45549 = (state_45559[(2)]);
var state_45559__$1 = state_45559;
var statearr_45578_45620 = state_45559__$1;
(statearr_45578_45620[(2)] = inst_45549);

(statearr_45578_45620[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (17))){
var inst_45514 = (state_45559[(10)]);
var inst_45523 = cljs.core.first.call(null,inst_45514);
var inst_45524 = cljs.core.async.muxch_STAR_.call(null,inst_45523);
var inst_45525 = cljs.core.async.close_BANG_.call(null,inst_45524);
var inst_45526 = cljs.core.next.call(null,inst_45514);
var inst_45500 = inst_45526;
var inst_45501 = null;
var inst_45502 = (0);
var inst_45503 = (0);
var state_45559__$1 = (function (){var statearr_45579 = state_45559;
(statearr_45579[(12)] = inst_45503);

(statearr_45579[(13)] = inst_45500);

(statearr_45579[(14)] = inst_45525);

(statearr_45579[(15)] = inst_45502);

(statearr_45579[(16)] = inst_45501);

return statearr_45579;
})();
var statearr_45580_45621 = state_45559__$1;
(statearr_45580_45621[(2)] = null);

(statearr_45580_45621[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (3))){
var inst_45557 = (state_45559[(2)]);
var state_45559__$1 = state_45559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45559__$1,inst_45557);
} else {
if((state_val_45560 === (12))){
var inst_45534 = (state_45559[(2)]);
var state_45559__$1 = state_45559;
var statearr_45581_45622 = state_45559__$1;
(statearr_45581_45622[(2)] = inst_45534);

(statearr_45581_45622[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (2))){
var state_45559__$1 = state_45559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45559__$1,(4),ch);
} else {
if((state_val_45560 === (23))){
var state_45559__$1 = state_45559;
var statearr_45582_45623 = state_45559__$1;
(statearr_45582_45623[(2)] = null);

(statearr_45582_45623[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (19))){
var inst_45490 = (state_45559[(8)]);
var inst_45540 = (state_45559[(11)]);
var inst_45542 = cljs.core.async.muxch_STAR_.call(null,inst_45540);
var state_45559__$1 = state_45559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45559__$1,(22),inst_45542,inst_45490);
} else {
if((state_val_45560 === (11))){
var inst_45500 = (state_45559[(13)]);
var inst_45514 = (state_45559[(10)]);
var inst_45514__$1 = cljs.core.seq.call(null,inst_45500);
var state_45559__$1 = (function (){var statearr_45583 = state_45559;
(statearr_45583[(10)] = inst_45514__$1);

return statearr_45583;
})();
if(inst_45514__$1){
var statearr_45584_45624 = state_45559__$1;
(statearr_45584_45624[(1)] = (13));

} else {
var statearr_45585_45625 = state_45559__$1;
(statearr_45585_45625[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (9))){
var inst_45536 = (state_45559[(2)]);
var state_45559__$1 = state_45559;
var statearr_45586_45626 = state_45559__$1;
(statearr_45586_45626[(2)] = inst_45536);

(statearr_45586_45626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (5))){
var inst_45497 = cljs.core.deref.call(null,mults);
var inst_45498 = cljs.core.vals.call(null,inst_45497);
var inst_45499 = cljs.core.seq.call(null,inst_45498);
var inst_45500 = inst_45499;
var inst_45501 = null;
var inst_45502 = (0);
var inst_45503 = (0);
var state_45559__$1 = (function (){var statearr_45587 = state_45559;
(statearr_45587[(12)] = inst_45503);

(statearr_45587[(13)] = inst_45500);

(statearr_45587[(15)] = inst_45502);

(statearr_45587[(16)] = inst_45501);

return statearr_45587;
})();
var statearr_45588_45627 = state_45559__$1;
(statearr_45588_45627[(2)] = null);

(statearr_45588_45627[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (14))){
var state_45559__$1 = state_45559;
var statearr_45592_45628 = state_45559__$1;
(statearr_45592_45628[(2)] = null);

(statearr_45592_45628[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (16))){
var inst_45514 = (state_45559[(10)]);
var inst_45518 = cljs.core.chunk_first.call(null,inst_45514);
var inst_45519 = cljs.core.chunk_rest.call(null,inst_45514);
var inst_45520 = cljs.core.count.call(null,inst_45518);
var inst_45500 = inst_45519;
var inst_45501 = inst_45518;
var inst_45502 = inst_45520;
var inst_45503 = (0);
var state_45559__$1 = (function (){var statearr_45593 = state_45559;
(statearr_45593[(12)] = inst_45503);

(statearr_45593[(13)] = inst_45500);

(statearr_45593[(15)] = inst_45502);

(statearr_45593[(16)] = inst_45501);

return statearr_45593;
})();
var statearr_45594_45629 = state_45559__$1;
(statearr_45594_45629[(2)] = null);

(statearr_45594_45629[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (10))){
var inst_45503 = (state_45559[(12)]);
var inst_45500 = (state_45559[(13)]);
var inst_45502 = (state_45559[(15)]);
var inst_45501 = (state_45559[(16)]);
var inst_45508 = cljs.core._nth.call(null,inst_45501,inst_45503);
var inst_45509 = cljs.core.async.muxch_STAR_.call(null,inst_45508);
var inst_45510 = cljs.core.async.close_BANG_.call(null,inst_45509);
var inst_45511 = (inst_45503 + (1));
var tmp45589 = inst_45500;
var tmp45590 = inst_45502;
var tmp45591 = inst_45501;
var inst_45500__$1 = tmp45589;
var inst_45501__$1 = tmp45591;
var inst_45502__$1 = tmp45590;
var inst_45503__$1 = inst_45511;
var state_45559__$1 = (function (){var statearr_45595 = state_45559;
(statearr_45595[(12)] = inst_45503__$1);

(statearr_45595[(13)] = inst_45500__$1);

(statearr_45595[(17)] = inst_45510);

(statearr_45595[(15)] = inst_45502__$1);

(statearr_45595[(16)] = inst_45501__$1);

return statearr_45595;
})();
var statearr_45596_45630 = state_45559__$1;
(statearr_45596_45630[(2)] = null);

(statearr_45596_45630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (18))){
var inst_45529 = (state_45559[(2)]);
var state_45559__$1 = state_45559;
var statearr_45597_45631 = state_45559__$1;
(statearr_45597_45631[(2)] = inst_45529);

(statearr_45597_45631[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (8))){
var inst_45503 = (state_45559[(12)]);
var inst_45502 = (state_45559[(15)]);
var inst_45505 = (inst_45503 < inst_45502);
var inst_45506 = inst_45505;
var state_45559__$1 = state_45559;
if(cljs.core.truth_(inst_45506)){
var statearr_45598_45632 = state_45559__$1;
(statearr_45598_45632[(1)] = (10));

} else {
var statearr_45599_45633 = state_45559__$1;
(statearr_45599_45633[(1)] = (11));

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
});})(c__44371__auto___45605,mults,ensure_mult,p))
;
return ((function (switch__44281__auto__,c__44371__auto___45605,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__44282__auto__ = null;
var cljs$core$async$state_machine__44282__auto____0 = (function (){
var statearr_45600 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45600[(0)] = cljs$core$async$state_machine__44282__auto__);

(statearr_45600[(1)] = (1));

return statearr_45600;
});
var cljs$core$async$state_machine__44282__auto____1 = (function (state_45559){
while(true){
var ret_value__44283__auto__ = (function (){try{while(true){
var result__44284__auto__ = switch__44281__auto__.call(null,state_45559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44284__auto__;
}
break;
}
}catch (e45601){if((e45601 instanceof Object)){
var ex__44285__auto__ = e45601;
var statearr_45602_45634 = state_45559;
(statearr_45602_45634[(5)] = ex__44285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45635 = state_45559;
state_45559 = G__45635;
continue;
} else {
return ret_value__44283__auto__;
}
break;
}
});
cljs$core$async$state_machine__44282__auto__ = function(state_45559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44282__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44282__auto____1.call(this,state_45559);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44282__auto____0;
cljs$core$async$state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44282__auto____1;
return cljs$core$async$state_machine__44282__auto__;
})()
;})(switch__44281__auto__,c__44371__auto___45605,mults,ensure_mult,p))
})();
var state__44373__auto__ = (function (){var statearr_45603 = f__44372__auto__.call(null);
(statearr_45603[(6)] = c__44371__auto___45605);

return statearr_45603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44373__auto__);
});})(c__44371__auto___45605,mults,ensure_mult,p))
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
var G__45637 = arguments.length;
switch (G__45637) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__45640 = arguments.length;
switch (G__45640) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__45643 = arguments.length;
switch (G__45643) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__44371__auto___45710 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44371__auto___45710,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__44372__auto__ = (function (){var switch__44281__auto__ = ((function (c__44371__auto___45710,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_45682){
var state_val_45683 = (state_45682[(1)]);
if((state_val_45683 === (7))){
var state_45682__$1 = state_45682;
var statearr_45684_45711 = state_45682__$1;
(statearr_45684_45711[(2)] = null);

(statearr_45684_45711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45683 === (1))){
var state_45682__$1 = state_45682;
var statearr_45685_45712 = state_45682__$1;
(statearr_45685_45712[(2)] = null);

(statearr_45685_45712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45683 === (4))){
var inst_45646 = (state_45682[(7)]);
var inst_45648 = (inst_45646 < cnt);
var state_45682__$1 = state_45682;
if(cljs.core.truth_(inst_45648)){
var statearr_45686_45713 = state_45682__$1;
(statearr_45686_45713[(1)] = (6));

} else {
var statearr_45687_45714 = state_45682__$1;
(statearr_45687_45714[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45683 === (15))){
var inst_45678 = (state_45682[(2)]);
var state_45682__$1 = state_45682;
var statearr_45688_45715 = state_45682__$1;
(statearr_45688_45715[(2)] = inst_45678);

(statearr_45688_45715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45683 === (13))){
var inst_45671 = cljs.core.async.close_BANG_.call(null,out);
var state_45682__$1 = state_45682;
var statearr_45689_45716 = state_45682__$1;
(statearr_45689_45716[(2)] = inst_45671);

(statearr_45689_45716[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45683 === (6))){
var state_45682__$1 = state_45682;
var statearr_45690_45717 = state_45682__$1;
(statearr_45690_45717[(2)] = null);

(statearr_45690_45717[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45683 === (3))){
var inst_45680 = (state_45682[(2)]);
var state_45682__$1 = state_45682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45682__$1,inst_45680);
} else {
if((state_val_45683 === (12))){
var inst_45668 = (state_45682[(8)]);
var inst_45668__$1 = (state_45682[(2)]);
var inst_45669 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_45668__$1);
var state_45682__$1 = (function (){var statearr_45691 = state_45682;
(statearr_45691[(8)] = inst_45668__$1);

return statearr_45691;
})();
if(cljs.core.truth_(inst_45669)){
var statearr_45692_45718 = state_45682__$1;
(statearr_45692_45718[(1)] = (13));

} else {
var statearr_45693_45719 = state_45682__$1;
(statearr_45693_45719[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45683 === (2))){
var inst_45645 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_45646 = (0);
var state_45682__$1 = (function (){var statearr_45694 = state_45682;
(statearr_45694[(9)] = inst_45645);

(statearr_45694[(7)] = inst_45646);

return statearr_45694;
})();
var statearr_45695_45720 = state_45682__$1;
(statearr_45695_45720[(2)] = null);

(statearr_45695_45720[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45683 === (11))){
var inst_45646 = (state_45682[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_45682,(10),Object,null,(9));
var inst_45655 = chs__$1.call(null,inst_45646);
var inst_45656 = done.call(null,inst_45646);
var inst_45657 = cljs.core.async.take_BANG_.call(null,inst_45655,inst_45656);
var state_45682__$1 = state_45682;
var statearr_45696_45721 = state_45682__$1;
(statearr_45696_45721[(2)] = inst_45657);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45682__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45683 === (9))){
var inst_45646 = (state_45682[(7)]);
var inst_45659 = (state_45682[(2)]);
var inst_45660 = (inst_45646 + (1));
var inst_45646__$1 = inst_45660;
var state_45682__$1 = (function (){var statearr_45697 = state_45682;
(statearr_45697[(7)] = inst_45646__$1);

(statearr_45697[(10)] = inst_45659);

return statearr_45697;
})();
var statearr_45698_45722 = state_45682__$1;
(statearr_45698_45722[(2)] = null);

(statearr_45698_45722[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45683 === (5))){
var inst_45666 = (state_45682[(2)]);
var state_45682__$1 = (function (){var statearr_45699 = state_45682;
(statearr_45699[(11)] = inst_45666);

return statearr_45699;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45682__$1,(12),dchan);
} else {
if((state_val_45683 === (14))){
var inst_45668 = (state_45682[(8)]);
var inst_45673 = cljs.core.apply.call(null,f,inst_45668);
var state_45682__$1 = state_45682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45682__$1,(16),out,inst_45673);
} else {
if((state_val_45683 === (16))){
var inst_45675 = (state_45682[(2)]);
var state_45682__$1 = (function (){var statearr_45700 = state_45682;
(statearr_45700[(12)] = inst_45675);

return statearr_45700;
})();
var statearr_45701_45723 = state_45682__$1;
(statearr_45701_45723[(2)] = null);

(statearr_45701_45723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45683 === (10))){
var inst_45650 = (state_45682[(2)]);
var inst_45651 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_45682__$1 = (function (){var statearr_45702 = state_45682;
(statearr_45702[(13)] = inst_45650);

return statearr_45702;
})();
var statearr_45703_45724 = state_45682__$1;
(statearr_45703_45724[(2)] = inst_45651);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45682__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45683 === (8))){
var inst_45664 = (state_45682[(2)]);
var state_45682__$1 = state_45682;
var statearr_45704_45725 = state_45682__$1;
(statearr_45704_45725[(2)] = inst_45664);

(statearr_45704_45725[(1)] = (5));


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
});})(c__44371__auto___45710,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__44281__auto__,c__44371__auto___45710,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__44282__auto__ = null;
var cljs$core$async$state_machine__44282__auto____0 = (function (){
var statearr_45705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45705[(0)] = cljs$core$async$state_machine__44282__auto__);

(statearr_45705[(1)] = (1));

return statearr_45705;
});
var cljs$core$async$state_machine__44282__auto____1 = (function (state_45682){
while(true){
var ret_value__44283__auto__ = (function (){try{while(true){
var result__44284__auto__ = switch__44281__auto__.call(null,state_45682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44284__auto__;
}
break;
}
}catch (e45706){if((e45706 instanceof Object)){
var ex__44285__auto__ = e45706;
var statearr_45707_45726 = state_45682;
(statearr_45707_45726[(5)] = ex__44285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45727 = state_45682;
state_45682 = G__45727;
continue;
} else {
return ret_value__44283__auto__;
}
break;
}
});
cljs$core$async$state_machine__44282__auto__ = function(state_45682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44282__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44282__auto____1.call(this,state_45682);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44282__auto____0;
cljs$core$async$state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44282__auto____1;
return cljs$core$async$state_machine__44282__auto__;
})()
;})(switch__44281__auto__,c__44371__auto___45710,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__44373__auto__ = (function (){var statearr_45708 = f__44372__auto__.call(null);
(statearr_45708[(6)] = c__44371__auto___45710);

return statearr_45708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44373__auto__);
});})(c__44371__auto___45710,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__45730 = arguments.length;
switch (G__45730) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44371__auto___45784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44371__auto___45784,out){
return (function (){
var f__44372__auto__ = (function (){var switch__44281__auto__ = ((function (c__44371__auto___45784,out){
return (function (state_45762){
var state_val_45763 = (state_45762[(1)]);
if((state_val_45763 === (7))){
var inst_45741 = (state_45762[(7)]);
var inst_45742 = (state_45762[(8)]);
var inst_45741__$1 = (state_45762[(2)]);
var inst_45742__$1 = cljs.core.nth.call(null,inst_45741__$1,(0),null);
var inst_45743 = cljs.core.nth.call(null,inst_45741__$1,(1),null);
var inst_45744 = (inst_45742__$1 == null);
var state_45762__$1 = (function (){var statearr_45764 = state_45762;
(statearr_45764[(9)] = inst_45743);

(statearr_45764[(7)] = inst_45741__$1);

(statearr_45764[(8)] = inst_45742__$1);

return statearr_45764;
})();
if(cljs.core.truth_(inst_45744)){
var statearr_45765_45785 = state_45762__$1;
(statearr_45765_45785[(1)] = (8));

} else {
var statearr_45766_45786 = state_45762__$1;
(statearr_45766_45786[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (1))){
var inst_45731 = cljs.core.vec.call(null,chs);
var inst_45732 = inst_45731;
var state_45762__$1 = (function (){var statearr_45767 = state_45762;
(statearr_45767[(10)] = inst_45732);

return statearr_45767;
})();
var statearr_45768_45787 = state_45762__$1;
(statearr_45768_45787[(2)] = null);

(statearr_45768_45787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (4))){
var inst_45732 = (state_45762[(10)]);
var state_45762__$1 = state_45762;
return cljs.core.async.ioc_alts_BANG_.call(null,state_45762__$1,(7),inst_45732);
} else {
if((state_val_45763 === (6))){
var inst_45758 = (state_45762[(2)]);
var state_45762__$1 = state_45762;
var statearr_45769_45788 = state_45762__$1;
(statearr_45769_45788[(2)] = inst_45758);

(statearr_45769_45788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (3))){
var inst_45760 = (state_45762[(2)]);
var state_45762__$1 = state_45762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45762__$1,inst_45760);
} else {
if((state_val_45763 === (2))){
var inst_45732 = (state_45762[(10)]);
var inst_45734 = cljs.core.count.call(null,inst_45732);
var inst_45735 = (inst_45734 > (0));
var state_45762__$1 = state_45762;
if(cljs.core.truth_(inst_45735)){
var statearr_45771_45789 = state_45762__$1;
(statearr_45771_45789[(1)] = (4));

} else {
var statearr_45772_45790 = state_45762__$1;
(statearr_45772_45790[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (11))){
var inst_45732 = (state_45762[(10)]);
var inst_45751 = (state_45762[(2)]);
var tmp45770 = inst_45732;
var inst_45732__$1 = tmp45770;
var state_45762__$1 = (function (){var statearr_45773 = state_45762;
(statearr_45773[(11)] = inst_45751);

(statearr_45773[(10)] = inst_45732__$1);

return statearr_45773;
})();
var statearr_45774_45791 = state_45762__$1;
(statearr_45774_45791[(2)] = null);

(statearr_45774_45791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (9))){
var inst_45742 = (state_45762[(8)]);
var state_45762__$1 = state_45762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45762__$1,(11),out,inst_45742);
} else {
if((state_val_45763 === (5))){
var inst_45756 = cljs.core.async.close_BANG_.call(null,out);
var state_45762__$1 = state_45762;
var statearr_45775_45792 = state_45762__$1;
(statearr_45775_45792[(2)] = inst_45756);

(statearr_45775_45792[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (10))){
var inst_45754 = (state_45762[(2)]);
var state_45762__$1 = state_45762;
var statearr_45776_45793 = state_45762__$1;
(statearr_45776_45793[(2)] = inst_45754);

(statearr_45776_45793[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (8))){
var inst_45743 = (state_45762[(9)]);
var inst_45741 = (state_45762[(7)]);
var inst_45742 = (state_45762[(8)]);
var inst_45732 = (state_45762[(10)]);
var inst_45746 = (function (){var cs = inst_45732;
var vec__45737 = inst_45741;
var v = inst_45742;
var c = inst_45743;
return ((function (cs,vec__45737,v,c,inst_45743,inst_45741,inst_45742,inst_45732,state_val_45763,c__44371__auto___45784,out){
return (function (p1__45728_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__45728_SHARP_);
});
;})(cs,vec__45737,v,c,inst_45743,inst_45741,inst_45742,inst_45732,state_val_45763,c__44371__auto___45784,out))
})();
var inst_45747 = cljs.core.filterv.call(null,inst_45746,inst_45732);
var inst_45732__$1 = inst_45747;
var state_45762__$1 = (function (){var statearr_45777 = state_45762;
(statearr_45777[(10)] = inst_45732__$1);

return statearr_45777;
})();
var statearr_45778_45794 = state_45762__$1;
(statearr_45778_45794[(2)] = null);

(statearr_45778_45794[(1)] = (2));


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
});})(c__44371__auto___45784,out))
;
return ((function (switch__44281__auto__,c__44371__auto___45784,out){
return (function() {
var cljs$core$async$state_machine__44282__auto__ = null;
var cljs$core$async$state_machine__44282__auto____0 = (function (){
var statearr_45779 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45779[(0)] = cljs$core$async$state_machine__44282__auto__);

(statearr_45779[(1)] = (1));

return statearr_45779;
});
var cljs$core$async$state_machine__44282__auto____1 = (function (state_45762){
while(true){
var ret_value__44283__auto__ = (function (){try{while(true){
var result__44284__auto__ = switch__44281__auto__.call(null,state_45762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44284__auto__;
}
break;
}
}catch (e45780){if((e45780 instanceof Object)){
var ex__44285__auto__ = e45780;
var statearr_45781_45795 = state_45762;
(statearr_45781_45795[(5)] = ex__44285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45796 = state_45762;
state_45762 = G__45796;
continue;
} else {
return ret_value__44283__auto__;
}
break;
}
});
cljs$core$async$state_machine__44282__auto__ = function(state_45762){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44282__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44282__auto____1.call(this,state_45762);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44282__auto____0;
cljs$core$async$state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44282__auto____1;
return cljs$core$async$state_machine__44282__auto__;
})()
;})(switch__44281__auto__,c__44371__auto___45784,out))
})();
var state__44373__auto__ = (function (){var statearr_45782 = f__44372__auto__.call(null);
(statearr_45782[(6)] = c__44371__auto___45784);

return statearr_45782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44373__auto__);
});})(c__44371__auto___45784,out))
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
var G__45798 = arguments.length;
switch (G__45798) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44371__auto___45843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44371__auto___45843,out){
return (function (){
var f__44372__auto__ = (function (){var switch__44281__auto__ = ((function (c__44371__auto___45843,out){
return (function (state_45822){
var state_val_45823 = (state_45822[(1)]);
if((state_val_45823 === (7))){
var inst_45804 = (state_45822[(7)]);
var inst_45804__$1 = (state_45822[(2)]);
var inst_45805 = (inst_45804__$1 == null);
var inst_45806 = cljs.core.not.call(null,inst_45805);
var state_45822__$1 = (function (){var statearr_45824 = state_45822;
(statearr_45824[(7)] = inst_45804__$1);

return statearr_45824;
})();
if(inst_45806){
var statearr_45825_45844 = state_45822__$1;
(statearr_45825_45844[(1)] = (8));

} else {
var statearr_45826_45845 = state_45822__$1;
(statearr_45826_45845[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45823 === (1))){
var inst_45799 = (0);
var state_45822__$1 = (function (){var statearr_45827 = state_45822;
(statearr_45827[(8)] = inst_45799);

return statearr_45827;
})();
var statearr_45828_45846 = state_45822__$1;
(statearr_45828_45846[(2)] = null);

(statearr_45828_45846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45823 === (4))){
var state_45822__$1 = state_45822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45822__$1,(7),ch);
} else {
if((state_val_45823 === (6))){
var inst_45817 = (state_45822[(2)]);
var state_45822__$1 = state_45822;
var statearr_45829_45847 = state_45822__$1;
(statearr_45829_45847[(2)] = inst_45817);

(statearr_45829_45847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45823 === (3))){
var inst_45819 = (state_45822[(2)]);
var inst_45820 = cljs.core.async.close_BANG_.call(null,out);
var state_45822__$1 = (function (){var statearr_45830 = state_45822;
(statearr_45830[(9)] = inst_45819);

return statearr_45830;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45822__$1,inst_45820);
} else {
if((state_val_45823 === (2))){
var inst_45799 = (state_45822[(8)]);
var inst_45801 = (inst_45799 < n);
var state_45822__$1 = state_45822;
if(cljs.core.truth_(inst_45801)){
var statearr_45831_45848 = state_45822__$1;
(statearr_45831_45848[(1)] = (4));

} else {
var statearr_45832_45849 = state_45822__$1;
(statearr_45832_45849[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45823 === (11))){
var inst_45799 = (state_45822[(8)]);
var inst_45809 = (state_45822[(2)]);
var inst_45810 = (inst_45799 + (1));
var inst_45799__$1 = inst_45810;
var state_45822__$1 = (function (){var statearr_45833 = state_45822;
(statearr_45833[(8)] = inst_45799__$1);

(statearr_45833[(10)] = inst_45809);

return statearr_45833;
})();
var statearr_45834_45850 = state_45822__$1;
(statearr_45834_45850[(2)] = null);

(statearr_45834_45850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45823 === (9))){
var state_45822__$1 = state_45822;
var statearr_45835_45851 = state_45822__$1;
(statearr_45835_45851[(2)] = null);

(statearr_45835_45851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45823 === (5))){
var state_45822__$1 = state_45822;
var statearr_45836_45852 = state_45822__$1;
(statearr_45836_45852[(2)] = null);

(statearr_45836_45852[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45823 === (10))){
var inst_45814 = (state_45822[(2)]);
var state_45822__$1 = state_45822;
var statearr_45837_45853 = state_45822__$1;
(statearr_45837_45853[(2)] = inst_45814);

(statearr_45837_45853[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45823 === (8))){
var inst_45804 = (state_45822[(7)]);
var state_45822__$1 = state_45822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45822__$1,(11),out,inst_45804);
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
});})(c__44371__auto___45843,out))
;
return ((function (switch__44281__auto__,c__44371__auto___45843,out){
return (function() {
var cljs$core$async$state_machine__44282__auto__ = null;
var cljs$core$async$state_machine__44282__auto____0 = (function (){
var statearr_45838 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45838[(0)] = cljs$core$async$state_machine__44282__auto__);

(statearr_45838[(1)] = (1));

return statearr_45838;
});
var cljs$core$async$state_machine__44282__auto____1 = (function (state_45822){
while(true){
var ret_value__44283__auto__ = (function (){try{while(true){
var result__44284__auto__ = switch__44281__auto__.call(null,state_45822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44284__auto__;
}
break;
}
}catch (e45839){if((e45839 instanceof Object)){
var ex__44285__auto__ = e45839;
var statearr_45840_45854 = state_45822;
(statearr_45840_45854[(5)] = ex__44285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45855 = state_45822;
state_45822 = G__45855;
continue;
} else {
return ret_value__44283__auto__;
}
break;
}
});
cljs$core$async$state_machine__44282__auto__ = function(state_45822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44282__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44282__auto____1.call(this,state_45822);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44282__auto____0;
cljs$core$async$state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44282__auto____1;
return cljs$core$async$state_machine__44282__auto__;
})()
;})(switch__44281__auto__,c__44371__auto___45843,out))
})();
var state__44373__auto__ = (function (){var statearr_45841 = f__44372__auto__.call(null);
(statearr_45841[(6)] = c__44371__auto___45843);

return statearr_45841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44373__auto__);
});})(c__44371__auto___45843,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async45857 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45857 = (function (f,ch,meta45858){
this.f = f;
this.ch = ch;
this.meta45858 = meta45858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45859,meta45858__$1){
var self__ = this;
var _45859__$1 = this;
return (new cljs.core.async.t_cljs$core$async45857(self__.f,self__.ch,meta45858__$1));
});

cljs.core.async.t_cljs$core$async45857.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45859){
var self__ = this;
var _45859__$1 = this;
return self__.meta45858;
});

cljs.core.async.t_cljs$core$async45857.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45857.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45857.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45857.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45857.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async45860 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45860 = (function (f,ch,meta45858,_,fn1,meta45861){
this.f = f;
this.ch = ch;
this.meta45858 = meta45858;
this._ = _;
this.fn1 = fn1;
this.meta45861 = meta45861;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_45862,meta45861__$1){
var self__ = this;
var _45862__$1 = this;
return (new cljs.core.async.t_cljs$core$async45860(self__.f,self__.ch,self__.meta45858,self__._,self__.fn1,meta45861__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async45860.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_45862){
var self__ = this;
var _45862__$1 = this;
return self__.meta45861;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45860.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45860.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45860.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45860.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__45856_SHARP_){
return f1.call(null,(((p1__45856_SHARP_ == null))?null:self__.f.call(null,p1__45856_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async45860.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45858","meta45858",-865857533,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async45857","cljs.core.async/t_cljs$core$async45857",541257437,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta45861","meta45861",622098228,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45860.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45860.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45860";

cljs.core.async.t_cljs$core$async45860.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__41340__auto__,writer__41341__auto__,opt__41342__auto__){
return cljs.core._write.call(null,writer__41341__auto__,"cljs.core.async/t_cljs$core$async45860");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async45860 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45860(f__$1,ch__$1,meta45858__$1,___$2,fn1__$1,meta45861){
return (new cljs.core.async.t_cljs$core$async45860(f__$1,ch__$1,meta45858__$1,___$2,fn1__$1,meta45861));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async45860(self__.f,self__.ch,self__.meta45858,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__40657__auto__ = ret;
if(cljs.core.truth_(and__40657__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__40657__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async45857.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45857.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async45857.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45858","meta45858",-865857533,null)], null);
});

cljs.core.async.t_cljs$core$async45857.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45857.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45857";

cljs.core.async.t_cljs$core$async45857.cljs$lang$ctorPrWriter = (function (this__41340__auto__,writer__41341__auto__,opt__41342__auto__){
return cljs.core._write.call(null,writer__41341__auto__,"cljs.core.async/t_cljs$core$async45857");
});

cljs.core.async.__GT_t_cljs$core$async45857 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45857(f__$1,ch__$1,meta45858){
return (new cljs.core.async.t_cljs$core$async45857(f__$1,ch__$1,meta45858));
});

}

return (new cljs.core.async.t_cljs$core$async45857(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async45863 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45863 = (function (f,ch,meta45864){
this.f = f;
this.ch = ch;
this.meta45864 = meta45864;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45865,meta45864__$1){
var self__ = this;
var _45865__$1 = this;
return (new cljs.core.async.t_cljs$core$async45863(self__.f,self__.ch,meta45864__$1));
});

cljs.core.async.t_cljs$core$async45863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45865){
var self__ = this;
var _45865__$1 = this;
return self__.meta45864;
});

cljs.core.async.t_cljs$core$async45863.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45863.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45863.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45863.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45863.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45863.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async45863.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45864","meta45864",-1713399067,null)], null);
});

cljs.core.async.t_cljs$core$async45863.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45863.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45863";

cljs.core.async.t_cljs$core$async45863.cljs$lang$ctorPrWriter = (function (this__41340__auto__,writer__41341__auto__,opt__41342__auto__){
return cljs.core._write.call(null,writer__41341__auto__,"cljs.core.async/t_cljs$core$async45863");
});

cljs.core.async.__GT_t_cljs$core$async45863 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async45863(f__$1,ch__$1,meta45864){
return (new cljs.core.async.t_cljs$core$async45863(f__$1,ch__$1,meta45864));
});

}

return (new cljs.core.async.t_cljs$core$async45863(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async45866 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45866 = (function (p,ch,meta45867){
this.p = p;
this.ch = ch;
this.meta45867 = meta45867;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45868,meta45867__$1){
var self__ = this;
var _45868__$1 = this;
return (new cljs.core.async.t_cljs$core$async45866(self__.p,self__.ch,meta45867__$1));
});

cljs.core.async.t_cljs$core$async45866.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45868){
var self__ = this;
var _45868__$1 = this;
return self__.meta45867;
});

cljs.core.async.t_cljs$core$async45866.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45866.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45866.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45866.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45866.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45866.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45866.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async45866.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45867","meta45867",-1651150468,null)], null);
});

cljs.core.async.t_cljs$core$async45866.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45866.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45866";

cljs.core.async.t_cljs$core$async45866.cljs$lang$ctorPrWriter = (function (this__41340__auto__,writer__41341__auto__,opt__41342__auto__){
return cljs.core._write.call(null,writer__41341__auto__,"cljs.core.async/t_cljs$core$async45866");
});

cljs.core.async.__GT_t_cljs$core$async45866 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async45866(p__$1,ch__$1,meta45867){
return (new cljs.core.async.t_cljs$core$async45866(p__$1,ch__$1,meta45867));
});

}

return (new cljs.core.async.t_cljs$core$async45866(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__45870 = arguments.length;
switch (G__45870) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44371__auto___45910 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44371__auto___45910,out){
return (function (){
var f__44372__auto__ = (function (){var switch__44281__auto__ = ((function (c__44371__auto___45910,out){
return (function (state_45891){
var state_val_45892 = (state_45891[(1)]);
if((state_val_45892 === (7))){
var inst_45887 = (state_45891[(2)]);
var state_45891__$1 = state_45891;
var statearr_45893_45911 = state_45891__$1;
(statearr_45893_45911[(2)] = inst_45887);

(statearr_45893_45911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45892 === (1))){
var state_45891__$1 = state_45891;
var statearr_45894_45912 = state_45891__$1;
(statearr_45894_45912[(2)] = null);

(statearr_45894_45912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45892 === (4))){
var inst_45873 = (state_45891[(7)]);
var inst_45873__$1 = (state_45891[(2)]);
var inst_45874 = (inst_45873__$1 == null);
var state_45891__$1 = (function (){var statearr_45895 = state_45891;
(statearr_45895[(7)] = inst_45873__$1);

return statearr_45895;
})();
if(cljs.core.truth_(inst_45874)){
var statearr_45896_45913 = state_45891__$1;
(statearr_45896_45913[(1)] = (5));

} else {
var statearr_45897_45914 = state_45891__$1;
(statearr_45897_45914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45892 === (6))){
var inst_45873 = (state_45891[(7)]);
var inst_45878 = p.call(null,inst_45873);
var state_45891__$1 = state_45891;
if(cljs.core.truth_(inst_45878)){
var statearr_45898_45915 = state_45891__$1;
(statearr_45898_45915[(1)] = (8));

} else {
var statearr_45899_45916 = state_45891__$1;
(statearr_45899_45916[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45892 === (3))){
var inst_45889 = (state_45891[(2)]);
var state_45891__$1 = state_45891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45891__$1,inst_45889);
} else {
if((state_val_45892 === (2))){
var state_45891__$1 = state_45891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45891__$1,(4),ch);
} else {
if((state_val_45892 === (11))){
var inst_45881 = (state_45891[(2)]);
var state_45891__$1 = state_45891;
var statearr_45900_45917 = state_45891__$1;
(statearr_45900_45917[(2)] = inst_45881);

(statearr_45900_45917[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45892 === (9))){
var state_45891__$1 = state_45891;
var statearr_45901_45918 = state_45891__$1;
(statearr_45901_45918[(2)] = null);

(statearr_45901_45918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45892 === (5))){
var inst_45876 = cljs.core.async.close_BANG_.call(null,out);
var state_45891__$1 = state_45891;
var statearr_45902_45919 = state_45891__$1;
(statearr_45902_45919[(2)] = inst_45876);

(statearr_45902_45919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45892 === (10))){
var inst_45884 = (state_45891[(2)]);
var state_45891__$1 = (function (){var statearr_45903 = state_45891;
(statearr_45903[(8)] = inst_45884);

return statearr_45903;
})();
var statearr_45904_45920 = state_45891__$1;
(statearr_45904_45920[(2)] = null);

(statearr_45904_45920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45892 === (8))){
var inst_45873 = (state_45891[(7)]);
var state_45891__$1 = state_45891;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45891__$1,(11),out,inst_45873);
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
});})(c__44371__auto___45910,out))
;
return ((function (switch__44281__auto__,c__44371__auto___45910,out){
return (function() {
var cljs$core$async$state_machine__44282__auto__ = null;
var cljs$core$async$state_machine__44282__auto____0 = (function (){
var statearr_45905 = [null,null,null,null,null,null,null,null,null];
(statearr_45905[(0)] = cljs$core$async$state_machine__44282__auto__);

(statearr_45905[(1)] = (1));

return statearr_45905;
});
var cljs$core$async$state_machine__44282__auto____1 = (function (state_45891){
while(true){
var ret_value__44283__auto__ = (function (){try{while(true){
var result__44284__auto__ = switch__44281__auto__.call(null,state_45891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44284__auto__;
}
break;
}
}catch (e45906){if((e45906 instanceof Object)){
var ex__44285__auto__ = e45906;
var statearr_45907_45921 = state_45891;
(statearr_45907_45921[(5)] = ex__44285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45922 = state_45891;
state_45891 = G__45922;
continue;
} else {
return ret_value__44283__auto__;
}
break;
}
});
cljs$core$async$state_machine__44282__auto__ = function(state_45891){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44282__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44282__auto____1.call(this,state_45891);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44282__auto____0;
cljs$core$async$state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44282__auto____1;
return cljs$core$async$state_machine__44282__auto__;
})()
;})(switch__44281__auto__,c__44371__auto___45910,out))
})();
var state__44373__auto__ = (function (){var statearr_45908 = f__44372__auto__.call(null);
(statearr_45908[(6)] = c__44371__auto___45910);

return statearr_45908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44373__auto__);
});})(c__44371__auto___45910,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__45924 = arguments.length;
switch (G__45924) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__44371__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44371__auto__){
return (function (){
var f__44372__auto__ = (function (){var switch__44281__auto__ = ((function (c__44371__auto__){
return (function (state_45987){
var state_val_45988 = (state_45987[(1)]);
if((state_val_45988 === (7))){
var inst_45983 = (state_45987[(2)]);
var state_45987__$1 = state_45987;
var statearr_45989_46027 = state_45987__$1;
(statearr_45989_46027[(2)] = inst_45983);

(statearr_45989_46027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45988 === (20))){
var inst_45953 = (state_45987[(7)]);
var inst_45964 = (state_45987[(2)]);
var inst_45965 = cljs.core.next.call(null,inst_45953);
var inst_45939 = inst_45965;
var inst_45940 = null;
var inst_45941 = (0);
var inst_45942 = (0);
var state_45987__$1 = (function (){var statearr_45990 = state_45987;
(statearr_45990[(8)] = inst_45941);

(statearr_45990[(9)] = inst_45964);

(statearr_45990[(10)] = inst_45939);

(statearr_45990[(11)] = inst_45942);

(statearr_45990[(12)] = inst_45940);

return statearr_45990;
})();
var statearr_45991_46028 = state_45987__$1;
(statearr_45991_46028[(2)] = null);

(statearr_45991_46028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45988 === (1))){
var state_45987__$1 = state_45987;
var statearr_45992_46029 = state_45987__$1;
(statearr_45992_46029[(2)] = null);

(statearr_45992_46029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45988 === (4))){
var inst_45928 = (state_45987[(13)]);
var inst_45928__$1 = (state_45987[(2)]);
var inst_45929 = (inst_45928__$1 == null);
var state_45987__$1 = (function (){var statearr_45993 = state_45987;
(statearr_45993[(13)] = inst_45928__$1);

return statearr_45993;
})();
if(cljs.core.truth_(inst_45929)){
var statearr_45994_46030 = state_45987__$1;
(statearr_45994_46030[(1)] = (5));

} else {
var statearr_45995_46031 = state_45987__$1;
(statearr_45995_46031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45988 === (15))){
var state_45987__$1 = state_45987;
var statearr_45999_46032 = state_45987__$1;
(statearr_45999_46032[(2)] = null);

(statearr_45999_46032[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45988 === (21))){
var state_45987__$1 = state_45987;
var statearr_46000_46033 = state_45987__$1;
(statearr_46000_46033[(2)] = null);

(statearr_46000_46033[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45988 === (13))){
var inst_45941 = (state_45987[(8)]);
var inst_45939 = (state_45987[(10)]);
var inst_45942 = (state_45987[(11)]);
var inst_45940 = (state_45987[(12)]);
var inst_45949 = (state_45987[(2)]);
var inst_45950 = (inst_45942 + (1));
var tmp45996 = inst_45941;
var tmp45997 = inst_45939;
var tmp45998 = inst_45940;
var inst_45939__$1 = tmp45997;
var inst_45940__$1 = tmp45998;
var inst_45941__$1 = tmp45996;
var inst_45942__$1 = inst_45950;
var state_45987__$1 = (function (){var statearr_46001 = state_45987;
(statearr_46001[(8)] = inst_45941__$1);

(statearr_46001[(10)] = inst_45939__$1);

(statearr_46001[(11)] = inst_45942__$1);

(statearr_46001[(14)] = inst_45949);

(statearr_46001[(12)] = inst_45940__$1);

return statearr_46001;
})();
var statearr_46002_46034 = state_45987__$1;
(statearr_46002_46034[(2)] = null);

(statearr_46002_46034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45988 === (22))){
var state_45987__$1 = state_45987;
var statearr_46003_46035 = state_45987__$1;
(statearr_46003_46035[(2)] = null);

(statearr_46003_46035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45988 === (6))){
var inst_45928 = (state_45987[(13)]);
var inst_45937 = f.call(null,inst_45928);
var inst_45938 = cljs.core.seq.call(null,inst_45937);
var inst_45939 = inst_45938;
var inst_45940 = null;
var inst_45941 = (0);
var inst_45942 = (0);
var state_45987__$1 = (function (){var statearr_46004 = state_45987;
(statearr_46004[(8)] = inst_45941);

(statearr_46004[(10)] = inst_45939);

(statearr_46004[(11)] = inst_45942);

(statearr_46004[(12)] = inst_45940);

return statearr_46004;
})();
var statearr_46005_46036 = state_45987__$1;
(statearr_46005_46036[(2)] = null);

(statearr_46005_46036[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45988 === (17))){
var inst_45953 = (state_45987[(7)]);
var inst_45957 = cljs.core.chunk_first.call(null,inst_45953);
var inst_45958 = cljs.core.chunk_rest.call(null,inst_45953);
var inst_45959 = cljs.core.count.call(null,inst_45957);
var inst_45939 = inst_45958;
var inst_45940 = inst_45957;
var inst_45941 = inst_45959;
var inst_45942 = (0);
var state_45987__$1 = (function (){var statearr_46006 = state_45987;
(statearr_46006[(8)] = inst_45941);

(statearr_46006[(10)] = inst_45939);

(statearr_46006[(11)] = inst_45942);

(statearr_46006[(12)] = inst_45940);

return statearr_46006;
})();
var statearr_46007_46037 = state_45987__$1;
(statearr_46007_46037[(2)] = null);

(statearr_46007_46037[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45988 === (3))){
var inst_45985 = (state_45987[(2)]);
var state_45987__$1 = state_45987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45987__$1,inst_45985);
} else {
if((state_val_45988 === (12))){
var inst_45973 = (state_45987[(2)]);
var state_45987__$1 = state_45987;
var statearr_46008_46038 = state_45987__$1;
(statearr_46008_46038[(2)] = inst_45973);

(statearr_46008_46038[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45988 === (2))){
var state_45987__$1 = state_45987;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45987__$1,(4),in$);
} else {
if((state_val_45988 === (23))){
var inst_45981 = (state_45987[(2)]);
var state_45987__$1 = state_45987;
var statearr_46009_46039 = state_45987__$1;
(statearr_46009_46039[(2)] = inst_45981);

(statearr_46009_46039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45988 === (19))){
var inst_45968 = (state_45987[(2)]);
var state_45987__$1 = state_45987;
var statearr_46010_46040 = state_45987__$1;
(statearr_46010_46040[(2)] = inst_45968);

(statearr_46010_46040[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45988 === (11))){
var inst_45953 = (state_45987[(7)]);
var inst_45939 = (state_45987[(10)]);
var inst_45953__$1 = cljs.core.seq.call(null,inst_45939);
var state_45987__$1 = (function (){var statearr_46011 = state_45987;
(statearr_46011[(7)] = inst_45953__$1);

return statearr_46011;
})();
if(inst_45953__$1){
var statearr_46012_46041 = state_45987__$1;
(statearr_46012_46041[(1)] = (14));

} else {
var statearr_46013_46042 = state_45987__$1;
(statearr_46013_46042[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45988 === (9))){
var inst_45975 = (state_45987[(2)]);
var inst_45976 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_45987__$1 = (function (){var statearr_46014 = state_45987;
(statearr_46014[(15)] = inst_45975);

return statearr_46014;
})();
if(cljs.core.truth_(inst_45976)){
var statearr_46015_46043 = state_45987__$1;
(statearr_46015_46043[(1)] = (21));

} else {
var statearr_46016_46044 = state_45987__$1;
(statearr_46016_46044[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45988 === (5))){
var inst_45931 = cljs.core.async.close_BANG_.call(null,out);
var state_45987__$1 = state_45987;
var statearr_46017_46045 = state_45987__$1;
(statearr_46017_46045[(2)] = inst_45931);

(statearr_46017_46045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45988 === (14))){
var inst_45953 = (state_45987[(7)]);
var inst_45955 = cljs.core.chunked_seq_QMARK_.call(null,inst_45953);
var state_45987__$1 = state_45987;
if(inst_45955){
var statearr_46018_46046 = state_45987__$1;
(statearr_46018_46046[(1)] = (17));

} else {
var statearr_46019_46047 = state_45987__$1;
(statearr_46019_46047[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45988 === (16))){
var inst_45971 = (state_45987[(2)]);
var state_45987__$1 = state_45987;
var statearr_46020_46048 = state_45987__$1;
(statearr_46020_46048[(2)] = inst_45971);

(statearr_46020_46048[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45988 === (10))){
var inst_45942 = (state_45987[(11)]);
var inst_45940 = (state_45987[(12)]);
var inst_45947 = cljs.core._nth.call(null,inst_45940,inst_45942);
var state_45987__$1 = state_45987;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45987__$1,(13),out,inst_45947);
} else {
if((state_val_45988 === (18))){
var inst_45953 = (state_45987[(7)]);
var inst_45962 = cljs.core.first.call(null,inst_45953);
var state_45987__$1 = state_45987;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45987__$1,(20),out,inst_45962);
} else {
if((state_val_45988 === (8))){
var inst_45941 = (state_45987[(8)]);
var inst_45942 = (state_45987[(11)]);
var inst_45944 = (inst_45942 < inst_45941);
var inst_45945 = inst_45944;
var state_45987__$1 = state_45987;
if(cljs.core.truth_(inst_45945)){
var statearr_46021_46049 = state_45987__$1;
(statearr_46021_46049[(1)] = (10));

} else {
var statearr_46022_46050 = state_45987__$1;
(statearr_46022_46050[(1)] = (11));

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
});})(c__44371__auto__))
;
return ((function (switch__44281__auto__,c__44371__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__44282__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__44282__auto____0 = (function (){
var statearr_46023 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46023[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__44282__auto__);

(statearr_46023[(1)] = (1));

return statearr_46023;
});
var cljs$core$async$mapcat_STAR__$_state_machine__44282__auto____1 = (function (state_45987){
while(true){
var ret_value__44283__auto__ = (function (){try{while(true){
var result__44284__auto__ = switch__44281__auto__.call(null,state_45987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44284__auto__;
}
break;
}
}catch (e46024){if((e46024 instanceof Object)){
var ex__44285__auto__ = e46024;
var statearr_46025_46051 = state_45987;
(statearr_46025_46051[(5)] = ex__44285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46052 = state_45987;
state_45987 = G__46052;
continue;
} else {
return ret_value__44283__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__44282__auto__ = function(state_45987){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__44282__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__44282__auto____1.call(this,state_45987);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__44282__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__44282__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__44282__auto__;
})()
;})(switch__44281__auto__,c__44371__auto__))
})();
var state__44373__auto__ = (function (){var statearr_46026 = f__44372__auto__.call(null);
(statearr_46026[(6)] = c__44371__auto__);

return statearr_46026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44373__auto__);
});})(c__44371__auto__))
);

return c__44371__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__46054 = arguments.length;
switch (G__46054) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__46057 = arguments.length;
switch (G__46057) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__46060 = arguments.length;
switch (G__46060) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44371__auto___46107 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44371__auto___46107,out){
return (function (){
var f__44372__auto__ = (function (){var switch__44281__auto__ = ((function (c__44371__auto___46107,out){
return (function (state_46084){
var state_val_46085 = (state_46084[(1)]);
if((state_val_46085 === (7))){
var inst_46079 = (state_46084[(2)]);
var state_46084__$1 = state_46084;
var statearr_46086_46108 = state_46084__$1;
(statearr_46086_46108[(2)] = inst_46079);

(statearr_46086_46108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46085 === (1))){
var inst_46061 = null;
var state_46084__$1 = (function (){var statearr_46087 = state_46084;
(statearr_46087[(7)] = inst_46061);

return statearr_46087;
})();
var statearr_46088_46109 = state_46084__$1;
(statearr_46088_46109[(2)] = null);

(statearr_46088_46109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46085 === (4))){
var inst_46064 = (state_46084[(8)]);
var inst_46064__$1 = (state_46084[(2)]);
var inst_46065 = (inst_46064__$1 == null);
var inst_46066 = cljs.core.not.call(null,inst_46065);
var state_46084__$1 = (function (){var statearr_46089 = state_46084;
(statearr_46089[(8)] = inst_46064__$1);

return statearr_46089;
})();
if(inst_46066){
var statearr_46090_46110 = state_46084__$1;
(statearr_46090_46110[(1)] = (5));

} else {
var statearr_46091_46111 = state_46084__$1;
(statearr_46091_46111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46085 === (6))){
var state_46084__$1 = state_46084;
var statearr_46092_46112 = state_46084__$1;
(statearr_46092_46112[(2)] = null);

(statearr_46092_46112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46085 === (3))){
var inst_46081 = (state_46084[(2)]);
var inst_46082 = cljs.core.async.close_BANG_.call(null,out);
var state_46084__$1 = (function (){var statearr_46093 = state_46084;
(statearr_46093[(9)] = inst_46081);

return statearr_46093;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46084__$1,inst_46082);
} else {
if((state_val_46085 === (2))){
var state_46084__$1 = state_46084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46084__$1,(4),ch);
} else {
if((state_val_46085 === (11))){
var inst_46064 = (state_46084[(8)]);
var inst_46073 = (state_46084[(2)]);
var inst_46061 = inst_46064;
var state_46084__$1 = (function (){var statearr_46094 = state_46084;
(statearr_46094[(7)] = inst_46061);

(statearr_46094[(10)] = inst_46073);

return statearr_46094;
})();
var statearr_46095_46113 = state_46084__$1;
(statearr_46095_46113[(2)] = null);

(statearr_46095_46113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46085 === (9))){
var inst_46064 = (state_46084[(8)]);
var state_46084__$1 = state_46084;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46084__$1,(11),out,inst_46064);
} else {
if((state_val_46085 === (5))){
var inst_46064 = (state_46084[(8)]);
var inst_46061 = (state_46084[(7)]);
var inst_46068 = cljs.core._EQ_.call(null,inst_46064,inst_46061);
var state_46084__$1 = state_46084;
if(inst_46068){
var statearr_46097_46114 = state_46084__$1;
(statearr_46097_46114[(1)] = (8));

} else {
var statearr_46098_46115 = state_46084__$1;
(statearr_46098_46115[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46085 === (10))){
var inst_46076 = (state_46084[(2)]);
var state_46084__$1 = state_46084;
var statearr_46099_46116 = state_46084__$1;
(statearr_46099_46116[(2)] = inst_46076);

(statearr_46099_46116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46085 === (8))){
var inst_46061 = (state_46084[(7)]);
var tmp46096 = inst_46061;
var inst_46061__$1 = tmp46096;
var state_46084__$1 = (function (){var statearr_46100 = state_46084;
(statearr_46100[(7)] = inst_46061__$1);

return statearr_46100;
})();
var statearr_46101_46117 = state_46084__$1;
(statearr_46101_46117[(2)] = null);

(statearr_46101_46117[(1)] = (2));


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
});})(c__44371__auto___46107,out))
;
return ((function (switch__44281__auto__,c__44371__auto___46107,out){
return (function() {
var cljs$core$async$state_machine__44282__auto__ = null;
var cljs$core$async$state_machine__44282__auto____0 = (function (){
var statearr_46102 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46102[(0)] = cljs$core$async$state_machine__44282__auto__);

(statearr_46102[(1)] = (1));

return statearr_46102;
});
var cljs$core$async$state_machine__44282__auto____1 = (function (state_46084){
while(true){
var ret_value__44283__auto__ = (function (){try{while(true){
var result__44284__auto__ = switch__44281__auto__.call(null,state_46084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44284__auto__;
}
break;
}
}catch (e46103){if((e46103 instanceof Object)){
var ex__44285__auto__ = e46103;
var statearr_46104_46118 = state_46084;
(statearr_46104_46118[(5)] = ex__44285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46119 = state_46084;
state_46084 = G__46119;
continue;
} else {
return ret_value__44283__auto__;
}
break;
}
});
cljs$core$async$state_machine__44282__auto__ = function(state_46084){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44282__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44282__auto____1.call(this,state_46084);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44282__auto____0;
cljs$core$async$state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44282__auto____1;
return cljs$core$async$state_machine__44282__auto__;
})()
;})(switch__44281__auto__,c__44371__auto___46107,out))
})();
var state__44373__auto__ = (function (){var statearr_46105 = f__44372__auto__.call(null);
(statearr_46105[(6)] = c__44371__auto___46107);

return statearr_46105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44373__auto__);
});})(c__44371__auto___46107,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__46121 = arguments.length;
switch (G__46121) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44371__auto___46187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44371__auto___46187,out){
return (function (){
var f__44372__auto__ = (function (){var switch__44281__auto__ = ((function (c__44371__auto___46187,out){
return (function (state_46159){
var state_val_46160 = (state_46159[(1)]);
if((state_val_46160 === (7))){
var inst_46155 = (state_46159[(2)]);
var state_46159__$1 = state_46159;
var statearr_46161_46188 = state_46159__$1;
(statearr_46161_46188[(2)] = inst_46155);

(statearr_46161_46188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46160 === (1))){
var inst_46122 = (new Array(n));
var inst_46123 = inst_46122;
var inst_46124 = (0);
var state_46159__$1 = (function (){var statearr_46162 = state_46159;
(statearr_46162[(7)] = inst_46124);

(statearr_46162[(8)] = inst_46123);

return statearr_46162;
})();
var statearr_46163_46189 = state_46159__$1;
(statearr_46163_46189[(2)] = null);

(statearr_46163_46189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46160 === (4))){
var inst_46127 = (state_46159[(9)]);
var inst_46127__$1 = (state_46159[(2)]);
var inst_46128 = (inst_46127__$1 == null);
var inst_46129 = cljs.core.not.call(null,inst_46128);
var state_46159__$1 = (function (){var statearr_46164 = state_46159;
(statearr_46164[(9)] = inst_46127__$1);

return statearr_46164;
})();
if(inst_46129){
var statearr_46165_46190 = state_46159__$1;
(statearr_46165_46190[(1)] = (5));

} else {
var statearr_46166_46191 = state_46159__$1;
(statearr_46166_46191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46160 === (15))){
var inst_46149 = (state_46159[(2)]);
var state_46159__$1 = state_46159;
var statearr_46167_46192 = state_46159__$1;
(statearr_46167_46192[(2)] = inst_46149);

(statearr_46167_46192[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46160 === (13))){
var state_46159__$1 = state_46159;
var statearr_46168_46193 = state_46159__$1;
(statearr_46168_46193[(2)] = null);

(statearr_46168_46193[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46160 === (6))){
var inst_46124 = (state_46159[(7)]);
var inst_46145 = (inst_46124 > (0));
var state_46159__$1 = state_46159;
if(cljs.core.truth_(inst_46145)){
var statearr_46169_46194 = state_46159__$1;
(statearr_46169_46194[(1)] = (12));

} else {
var statearr_46170_46195 = state_46159__$1;
(statearr_46170_46195[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46160 === (3))){
var inst_46157 = (state_46159[(2)]);
var state_46159__$1 = state_46159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46159__$1,inst_46157);
} else {
if((state_val_46160 === (12))){
var inst_46123 = (state_46159[(8)]);
var inst_46147 = cljs.core.vec.call(null,inst_46123);
var state_46159__$1 = state_46159;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46159__$1,(15),out,inst_46147);
} else {
if((state_val_46160 === (2))){
var state_46159__$1 = state_46159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46159__$1,(4),ch);
} else {
if((state_val_46160 === (11))){
var inst_46139 = (state_46159[(2)]);
var inst_46140 = (new Array(n));
var inst_46123 = inst_46140;
var inst_46124 = (0);
var state_46159__$1 = (function (){var statearr_46171 = state_46159;
(statearr_46171[(7)] = inst_46124);

(statearr_46171[(8)] = inst_46123);

(statearr_46171[(10)] = inst_46139);

return statearr_46171;
})();
var statearr_46172_46196 = state_46159__$1;
(statearr_46172_46196[(2)] = null);

(statearr_46172_46196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46160 === (9))){
var inst_46123 = (state_46159[(8)]);
var inst_46137 = cljs.core.vec.call(null,inst_46123);
var state_46159__$1 = state_46159;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46159__$1,(11),out,inst_46137);
} else {
if((state_val_46160 === (5))){
var inst_46124 = (state_46159[(7)]);
var inst_46127 = (state_46159[(9)]);
var inst_46123 = (state_46159[(8)]);
var inst_46132 = (state_46159[(11)]);
var inst_46131 = (inst_46123[inst_46124] = inst_46127);
var inst_46132__$1 = (inst_46124 + (1));
var inst_46133 = (inst_46132__$1 < n);
var state_46159__$1 = (function (){var statearr_46173 = state_46159;
(statearr_46173[(12)] = inst_46131);

(statearr_46173[(11)] = inst_46132__$1);

return statearr_46173;
})();
if(cljs.core.truth_(inst_46133)){
var statearr_46174_46197 = state_46159__$1;
(statearr_46174_46197[(1)] = (8));

} else {
var statearr_46175_46198 = state_46159__$1;
(statearr_46175_46198[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46160 === (14))){
var inst_46152 = (state_46159[(2)]);
var inst_46153 = cljs.core.async.close_BANG_.call(null,out);
var state_46159__$1 = (function (){var statearr_46177 = state_46159;
(statearr_46177[(13)] = inst_46152);

return statearr_46177;
})();
var statearr_46178_46199 = state_46159__$1;
(statearr_46178_46199[(2)] = inst_46153);

(statearr_46178_46199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46160 === (10))){
var inst_46143 = (state_46159[(2)]);
var state_46159__$1 = state_46159;
var statearr_46179_46200 = state_46159__$1;
(statearr_46179_46200[(2)] = inst_46143);

(statearr_46179_46200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46160 === (8))){
var inst_46123 = (state_46159[(8)]);
var inst_46132 = (state_46159[(11)]);
var tmp46176 = inst_46123;
var inst_46123__$1 = tmp46176;
var inst_46124 = inst_46132;
var state_46159__$1 = (function (){var statearr_46180 = state_46159;
(statearr_46180[(7)] = inst_46124);

(statearr_46180[(8)] = inst_46123__$1);

return statearr_46180;
})();
var statearr_46181_46201 = state_46159__$1;
(statearr_46181_46201[(2)] = null);

(statearr_46181_46201[(1)] = (2));


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
});})(c__44371__auto___46187,out))
;
return ((function (switch__44281__auto__,c__44371__auto___46187,out){
return (function() {
var cljs$core$async$state_machine__44282__auto__ = null;
var cljs$core$async$state_machine__44282__auto____0 = (function (){
var statearr_46182 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46182[(0)] = cljs$core$async$state_machine__44282__auto__);

(statearr_46182[(1)] = (1));

return statearr_46182;
});
var cljs$core$async$state_machine__44282__auto____1 = (function (state_46159){
while(true){
var ret_value__44283__auto__ = (function (){try{while(true){
var result__44284__auto__ = switch__44281__auto__.call(null,state_46159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44284__auto__;
}
break;
}
}catch (e46183){if((e46183 instanceof Object)){
var ex__44285__auto__ = e46183;
var statearr_46184_46202 = state_46159;
(statearr_46184_46202[(5)] = ex__44285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46203 = state_46159;
state_46159 = G__46203;
continue;
} else {
return ret_value__44283__auto__;
}
break;
}
});
cljs$core$async$state_machine__44282__auto__ = function(state_46159){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44282__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44282__auto____1.call(this,state_46159);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44282__auto____0;
cljs$core$async$state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44282__auto____1;
return cljs$core$async$state_machine__44282__auto__;
})()
;})(switch__44281__auto__,c__44371__auto___46187,out))
})();
var state__44373__auto__ = (function (){var statearr_46185 = f__44372__auto__.call(null);
(statearr_46185[(6)] = c__44371__auto___46187);

return statearr_46185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44373__auto__);
});})(c__44371__auto___46187,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__46205 = arguments.length;
switch (G__46205) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44371__auto___46275 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44371__auto___46275,out){
return (function (){
var f__44372__auto__ = (function (){var switch__44281__auto__ = ((function (c__44371__auto___46275,out){
return (function (state_46247){
var state_val_46248 = (state_46247[(1)]);
if((state_val_46248 === (7))){
var inst_46243 = (state_46247[(2)]);
var state_46247__$1 = state_46247;
var statearr_46249_46276 = state_46247__$1;
(statearr_46249_46276[(2)] = inst_46243);

(statearr_46249_46276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46248 === (1))){
var inst_46206 = [];
var inst_46207 = inst_46206;
var inst_46208 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46247__$1 = (function (){var statearr_46250 = state_46247;
(statearr_46250[(7)] = inst_46208);

(statearr_46250[(8)] = inst_46207);

return statearr_46250;
})();
var statearr_46251_46277 = state_46247__$1;
(statearr_46251_46277[(2)] = null);

(statearr_46251_46277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46248 === (4))){
var inst_46211 = (state_46247[(9)]);
var inst_46211__$1 = (state_46247[(2)]);
var inst_46212 = (inst_46211__$1 == null);
var inst_46213 = cljs.core.not.call(null,inst_46212);
var state_46247__$1 = (function (){var statearr_46252 = state_46247;
(statearr_46252[(9)] = inst_46211__$1);

return statearr_46252;
})();
if(inst_46213){
var statearr_46253_46278 = state_46247__$1;
(statearr_46253_46278[(1)] = (5));

} else {
var statearr_46254_46279 = state_46247__$1;
(statearr_46254_46279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46248 === (15))){
var inst_46237 = (state_46247[(2)]);
var state_46247__$1 = state_46247;
var statearr_46255_46280 = state_46247__$1;
(statearr_46255_46280[(2)] = inst_46237);

(statearr_46255_46280[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46248 === (13))){
var state_46247__$1 = state_46247;
var statearr_46256_46281 = state_46247__$1;
(statearr_46256_46281[(2)] = null);

(statearr_46256_46281[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46248 === (6))){
var inst_46207 = (state_46247[(8)]);
var inst_46232 = inst_46207.length;
var inst_46233 = (inst_46232 > (0));
var state_46247__$1 = state_46247;
if(cljs.core.truth_(inst_46233)){
var statearr_46257_46282 = state_46247__$1;
(statearr_46257_46282[(1)] = (12));

} else {
var statearr_46258_46283 = state_46247__$1;
(statearr_46258_46283[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46248 === (3))){
var inst_46245 = (state_46247[(2)]);
var state_46247__$1 = state_46247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46247__$1,inst_46245);
} else {
if((state_val_46248 === (12))){
var inst_46207 = (state_46247[(8)]);
var inst_46235 = cljs.core.vec.call(null,inst_46207);
var state_46247__$1 = state_46247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46247__$1,(15),out,inst_46235);
} else {
if((state_val_46248 === (2))){
var state_46247__$1 = state_46247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46247__$1,(4),ch);
} else {
if((state_val_46248 === (11))){
var inst_46215 = (state_46247[(10)]);
var inst_46211 = (state_46247[(9)]);
var inst_46225 = (state_46247[(2)]);
var inst_46226 = [];
var inst_46227 = inst_46226.push(inst_46211);
var inst_46207 = inst_46226;
var inst_46208 = inst_46215;
var state_46247__$1 = (function (){var statearr_46259 = state_46247;
(statearr_46259[(7)] = inst_46208);

(statearr_46259[(11)] = inst_46227);

(statearr_46259[(12)] = inst_46225);

(statearr_46259[(8)] = inst_46207);

return statearr_46259;
})();
var statearr_46260_46284 = state_46247__$1;
(statearr_46260_46284[(2)] = null);

(statearr_46260_46284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46248 === (9))){
var inst_46207 = (state_46247[(8)]);
var inst_46223 = cljs.core.vec.call(null,inst_46207);
var state_46247__$1 = state_46247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46247__$1,(11),out,inst_46223);
} else {
if((state_val_46248 === (5))){
var inst_46208 = (state_46247[(7)]);
var inst_46215 = (state_46247[(10)]);
var inst_46211 = (state_46247[(9)]);
var inst_46215__$1 = f.call(null,inst_46211);
var inst_46216 = cljs.core._EQ_.call(null,inst_46215__$1,inst_46208);
var inst_46217 = cljs.core.keyword_identical_QMARK_.call(null,inst_46208,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_46218 = (inst_46216) || (inst_46217);
var state_46247__$1 = (function (){var statearr_46261 = state_46247;
(statearr_46261[(10)] = inst_46215__$1);

return statearr_46261;
})();
if(cljs.core.truth_(inst_46218)){
var statearr_46262_46285 = state_46247__$1;
(statearr_46262_46285[(1)] = (8));

} else {
var statearr_46263_46286 = state_46247__$1;
(statearr_46263_46286[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46248 === (14))){
var inst_46240 = (state_46247[(2)]);
var inst_46241 = cljs.core.async.close_BANG_.call(null,out);
var state_46247__$1 = (function (){var statearr_46265 = state_46247;
(statearr_46265[(13)] = inst_46240);

return statearr_46265;
})();
var statearr_46266_46287 = state_46247__$1;
(statearr_46266_46287[(2)] = inst_46241);

(statearr_46266_46287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46248 === (10))){
var inst_46230 = (state_46247[(2)]);
var state_46247__$1 = state_46247;
var statearr_46267_46288 = state_46247__$1;
(statearr_46267_46288[(2)] = inst_46230);

(statearr_46267_46288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46248 === (8))){
var inst_46215 = (state_46247[(10)]);
var inst_46211 = (state_46247[(9)]);
var inst_46207 = (state_46247[(8)]);
var inst_46220 = inst_46207.push(inst_46211);
var tmp46264 = inst_46207;
var inst_46207__$1 = tmp46264;
var inst_46208 = inst_46215;
var state_46247__$1 = (function (){var statearr_46268 = state_46247;
(statearr_46268[(14)] = inst_46220);

(statearr_46268[(7)] = inst_46208);

(statearr_46268[(8)] = inst_46207__$1);

return statearr_46268;
})();
var statearr_46269_46289 = state_46247__$1;
(statearr_46269_46289[(2)] = null);

(statearr_46269_46289[(1)] = (2));


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
});})(c__44371__auto___46275,out))
;
return ((function (switch__44281__auto__,c__44371__auto___46275,out){
return (function() {
var cljs$core$async$state_machine__44282__auto__ = null;
var cljs$core$async$state_machine__44282__auto____0 = (function (){
var statearr_46270 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46270[(0)] = cljs$core$async$state_machine__44282__auto__);

(statearr_46270[(1)] = (1));

return statearr_46270;
});
var cljs$core$async$state_machine__44282__auto____1 = (function (state_46247){
while(true){
var ret_value__44283__auto__ = (function (){try{while(true){
var result__44284__auto__ = switch__44281__auto__.call(null,state_46247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44284__auto__;
}
break;
}
}catch (e46271){if((e46271 instanceof Object)){
var ex__44285__auto__ = e46271;
var statearr_46272_46290 = state_46247;
(statearr_46272_46290[(5)] = ex__44285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46291 = state_46247;
state_46247 = G__46291;
continue;
} else {
return ret_value__44283__auto__;
}
break;
}
});
cljs$core$async$state_machine__44282__auto__ = function(state_46247){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44282__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44282__auto____1.call(this,state_46247);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44282__auto____0;
cljs$core$async$state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44282__auto____1;
return cljs$core$async$state_machine__44282__auto__;
})()
;})(switch__44281__auto__,c__44371__auto___46275,out))
})();
var state__44373__auto__ = (function (){var statearr_46273 = f__44372__auto__.call(null);
(statearr_46273[(6)] = c__44371__auto___46275);

return statearr_46273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44373__auto__);
});})(c__44371__auto___46275,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
