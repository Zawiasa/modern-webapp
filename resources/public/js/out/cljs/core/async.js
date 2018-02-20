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
var G__46958 = arguments.length;
switch (G__46958) {
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
if(typeof cljs.core.async.t_cljs$core$async46959 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46959 = (function (f,blockable,meta46960){
this.f = f;
this.blockable = blockable;
this.meta46960 = meta46960;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46961,meta46960__$1){
var self__ = this;
var _46961__$1 = this;
return (new cljs.core.async.t_cljs$core$async46959(self__.f,self__.blockable,meta46960__$1));
});

cljs.core.async.t_cljs$core$async46959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46961){
var self__ = this;
var _46961__$1 = this;
return self__.meta46960;
});

cljs.core.async.t_cljs$core$async46959.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46959.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46959.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async46959.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async46959.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46960","meta46960",2146614626,null)], null);
});

cljs.core.async.t_cljs$core$async46959.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46959.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46959";

cljs.core.async.t_cljs$core$async46959.cljs$lang$ctorPrWriter = (function (this__41340__auto__,writer__41341__auto__,opt__41342__auto__){
return cljs.core._write.call(null,writer__41341__auto__,"cljs.core.async/t_cljs$core$async46959");
});

cljs.core.async.__GT_t_cljs$core$async46959 = (function cljs$core$async$__GT_t_cljs$core$async46959(f__$1,blockable__$1,meta46960){
return (new cljs.core.async.t_cljs$core$async46959(f__$1,blockable__$1,meta46960));
});

}

return (new cljs.core.async.t_cljs$core$async46959(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__46965 = arguments.length;
switch (G__46965) {
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
var G__46968 = arguments.length;
switch (G__46968) {
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
var G__46971 = arguments.length;
switch (G__46971) {
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
var val_46973 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_46973);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_46973,ret){
return (function (){
return fn1.call(null,val_46973);
});})(val_46973,ret))
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
var G__46975 = arguments.length;
switch (G__46975) {
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
var n__41714__auto___46977 = n;
var x_46978 = (0);
while(true){
if((x_46978 < n__41714__auto___46977)){
(a[x_46978] = (0));

var G__46979 = (x_46978 + (1));
x_46978 = G__46979;
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

var G__46980 = (i + (1));
i = G__46980;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async46981 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46981 = (function (flag,meta46982){
this.flag = flag;
this.meta46982 = meta46982;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_46983,meta46982__$1){
var self__ = this;
var _46983__$1 = this;
return (new cljs.core.async.t_cljs$core$async46981(self__.flag,meta46982__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async46981.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_46983){
var self__ = this;
var _46983__$1 = this;
return self__.meta46982;
});})(flag))
;

cljs.core.async.t_cljs$core$async46981.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46981.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async46981.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46981.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46981.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46982","meta46982",1434184613,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async46981.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46981.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46981";

cljs.core.async.t_cljs$core$async46981.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__41340__auto__,writer__41341__auto__,opt__41342__auto__){
return cljs.core._write.call(null,writer__41341__auto__,"cljs.core.async/t_cljs$core$async46981");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async46981 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46981(flag__$1,meta46982){
return (new cljs.core.async.t_cljs$core$async46981(flag__$1,meta46982));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async46981(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async46984 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46984 = (function (flag,cb,meta46985){
this.flag = flag;
this.cb = cb;
this.meta46985 = meta46985;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46986,meta46985__$1){
var self__ = this;
var _46986__$1 = this;
return (new cljs.core.async.t_cljs$core$async46984(self__.flag,self__.cb,meta46985__$1));
});

cljs.core.async.t_cljs$core$async46984.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46986){
var self__ = this;
var _46986__$1 = this;
return self__.meta46985;
});

cljs.core.async.t_cljs$core$async46984.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46984.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async46984.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46984.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async46984.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46985","meta46985",-926944107,null)], null);
});

cljs.core.async.t_cljs$core$async46984.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46984.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46984";

cljs.core.async.t_cljs$core$async46984.cljs$lang$ctorPrWriter = (function (this__41340__auto__,writer__41341__auto__,opt__41342__auto__){
return cljs.core._write.call(null,writer__41341__auto__,"cljs.core.async/t_cljs$core$async46984");
});

cljs.core.async.__GT_t_cljs$core$async46984 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46984(flag__$1,cb__$1,meta46985){
return (new cljs.core.async.t_cljs$core$async46984(flag__$1,cb__$1,meta46985));
});

}

return (new cljs.core.async.t_cljs$core$async46984(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__46987_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46987_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46988_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46988_SHARP_,port], null));
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
var G__46989 = (i + (1));
i = G__46989;
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
var len__41948__auto___46995 = arguments.length;
var i__41949__auto___46996 = (0);
while(true){
if((i__41949__auto___46996 < len__41948__auto___46995)){
args__41955__auto__.push((arguments[i__41949__auto___46996]));

var G__46997 = (i__41949__auto___46996 + (1));
i__41949__auto___46996 = G__46997;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((1) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41956__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46992){
var map__46993 = p__46992;
var map__46993__$1 = ((((!((map__46993 == null)))?((((map__46993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46993.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46993):map__46993);
var opts = map__46993__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46990){
var G__46991 = cljs.core.first.call(null,seq46990);
var seq46990__$1 = cljs.core.next.call(null,seq46990);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46991,seq46990__$1);
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
var G__46999 = arguments.length;
switch (G__46999) {
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
var c__46898__auto___47045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46898__auto___47045){
return (function (){
var f__46899__auto__ = (function (){var switch__46808__auto__ = ((function (c__46898__auto___47045){
return (function (state_47023){
var state_val_47024 = (state_47023[(1)]);
if((state_val_47024 === (7))){
var inst_47019 = (state_47023[(2)]);
var state_47023__$1 = state_47023;
var statearr_47025_47046 = state_47023__$1;
(statearr_47025_47046[(2)] = inst_47019);

(statearr_47025_47046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47024 === (1))){
var state_47023__$1 = state_47023;
var statearr_47026_47047 = state_47023__$1;
(statearr_47026_47047[(2)] = null);

(statearr_47026_47047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47024 === (4))){
var inst_47002 = (state_47023[(7)]);
var inst_47002__$1 = (state_47023[(2)]);
var inst_47003 = (inst_47002__$1 == null);
var state_47023__$1 = (function (){var statearr_47027 = state_47023;
(statearr_47027[(7)] = inst_47002__$1);

return statearr_47027;
})();
if(cljs.core.truth_(inst_47003)){
var statearr_47028_47048 = state_47023__$1;
(statearr_47028_47048[(1)] = (5));

} else {
var statearr_47029_47049 = state_47023__$1;
(statearr_47029_47049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47024 === (13))){
var state_47023__$1 = state_47023;
var statearr_47030_47050 = state_47023__$1;
(statearr_47030_47050[(2)] = null);

(statearr_47030_47050[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47024 === (6))){
var inst_47002 = (state_47023[(7)]);
var state_47023__$1 = state_47023;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47023__$1,(11),to,inst_47002);
} else {
if((state_val_47024 === (3))){
var inst_47021 = (state_47023[(2)]);
var state_47023__$1 = state_47023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47023__$1,inst_47021);
} else {
if((state_val_47024 === (12))){
var state_47023__$1 = state_47023;
var statearr_47031_47051 = state_47023__$1;
(statearr_47031_47051[(2)] = null);

(statearr_47031_47051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47024 === (2))){
var state_47023__$1 = state_47023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47023__$1,(4),from);
} else {
if((state_val_47024 === (11))){
var inst_47012 = (state_47023[(2)]);
var state_47023__$1 = state_47023;
if(cljs.core.truth_(inst_47012)){
var statearr_47032_47052 = state_47023__$1;
(statearr_47032_47052[(1)] = (12));

} else {
var statearr_47033_47053 = state_47023__$1;
(statearr_47033_47053[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47024 === (9))){
var state_47023__$1 = state_47023;
var statearr_47034_47054 = state_47023__$1;
(statearr_47034_47054[(2)] = null);

(statearr_47034_47054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47024 === (5))){
var state_47023__$1 = state_47023;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47035_47055 = state_47023__$1;
(statearr_47035_47055[(1)] = (8));

} else {
var statearr_47036_47056 = state_47023__$1;
(statearr_47036_47056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47024 === (14))){
var inst_47017 = (state_47023[(2)]);
var state_47023__$1 = state_47023;
var statearr_47037_47057 = state_47023__$1;
(statearr_47037_47057[(2)] = inst_47017);

(statearr_47037_47057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47024 === (10))){
var inst_47009 = (state_47023[(2)]);
var state_47023__$1 = state_47023;
var statearr_47038_47058 = state_47023__$1;
(statearr_47038_47058[(2)] = inst_47009);

(statearr_47038_47058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47024 === (8))){
var inst_47006 = cljs.core.async.close_BANG_.call(null,to);
var state_47023__$1 = state_47023;
var statearr_47039_47059 = state_47023__$1;
(statearr_47039_47059[(2)] = inst_47006);

(statearr_47039_47059[(1)] = (10));


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
});})(c__46898__auto___47045))
;
return ((function (switch__46808__auto__,c__46898__auto___47045){
return (function() {
var cljs$core$async$state_machine__46809__auto__ = null;
var cljs$core$async$state_machine__46809__auto____0 = (function (){
var statearr_47040 = [null,null,null,null,null,null,null,null];
(statearr_47040[(0)] = cljs$core$async$state_machine__46809__auto__);

(statearr_47040[(1)] = (1));

return statearr_47040;
});
var cljs$core$async$state_machine__46809__auto____1 = (function (state_47023){
while(true){
var ret_value__46810__auto__ = (function (){try{while(true){
var result__46811__auto__ = switch__46808__auto__.call(null,state_47023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46811__auto__;
}
break;
}
}catch (e47041){if((e47041 instanceof Object)){
var ex__46812__auto__ = e47041;
var statearr_47042_47060 = state_47023;
(statearr_47042_47060[(5)] = ex__46812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47061 = state_47023;
state_47023 = G__47061;
continue;
} else {
return ret_value__46810__auto__;
}
break;
}
});
cljs$core$async$state_machine__46809__auto__ = function(state_47023){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46809__auto____1.call(this,state_47023);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46809__auto____0;
cljs$core$async$state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46809__auto____1;
return cljs$core$async$state_machine__46809__auto__;
})()
;})(switch__46808__auto__,c__46898__auto___47045))
})();
var state__46900__auto__ = (function (){var statearr_47043 = f__46899__auto__.call(null);
(statearr_47043[(6)] = c__46898__auto___47045);

return statearr_47043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46900__auto__);
});})(c__46898__auto___47045))
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
return (function (p__47062){
var vec__47063 = p__47062;
var v = cljs.core.nth.call(null,vec__47063,(0),null);
var p = cljs.core.nth.call(null,vec__47063,(1),null);
var job = vec__47063;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__46898__auto___47234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46898__auto___47234,res,vec__47063,v,p,job,jobs,results){
return (function (){
var f__46899__auto__ = (function (){var switch__46808__auto__ = ((function (c__46898__auto___47234,res,vec__47063,v,p,job,jobs,results){
return (function (state_47070){
var state_val_47071 = (state_47070[(1)]);
if((state_val_47071 === (1))){
var state_47070__$1 = state_47070;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47070__$1,(2),res,v);
} else {
if((state_val_47071 === (2))){
var inst_47067 = (state_47070[(2)]);
var inst_47068 = cljs.core.async.close_BANG_.call(null,res);
var state_47070__$1 = (function (){var statearr_47072 = state_47070;
(statearr_47072[(7)] = inst_47067);

return statearr_47072;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47070__$1,inst_47068);
} else {
return null;
}
}
});})(c__46898__auto___47234,res,vec__47063,v,p,job,jobs,results))
;
return ((function (switch__46808__auto__,c__46898__auto___47234,res,vec__47063,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46809__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46809__auto____0 = (function (){
var statearr_47073 = [null,null,null,null,null,null,null,null];
(statearr_47073[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46809__auto__);

(statearr_47073[(1)] = (1));

return statearr_47073;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46809__auto____1 = (function (state_47070){
while(true){
var ret_value__46810__auto__ = (function (){try{while(true){
var result__46811__auto__ = switch__46808__auto__.call(null,state_47070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46811__auto__;
}
break;
}
}catch (e47074){if((e47074 instanceof Object)){
var ex__46812__auto__ = e47074;
var statearr_47075_47235 = state_47070;
(statearr_47075_47235[(5)] = ex__46812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47236 = state_47070;
state_47070 = G__47236;
continue;
} else {
return ret_value__46810__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46809__auto__ = function(state_47070){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46809__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46809__auto____1.call(this,state_47070);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46809__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46809__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46809__auto__;
})()
;})(switch__46808__auto__,c__46898__auto___47234,res,vec__47063,v,p,job,jobs,results))
})();
var state__46900__auto__ = (function (){var statearr_47076 = f__46899__auto__.call(null);
(statearr_47076[(6)] = c__46898__auto___47234);

return statearr_47076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46900__auto__);
});})(c__46898__auto___47234,res,vec__47063,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__47077){
var vec__47078 = p__47077;
var v = cljs.core.nth.call(null,vec__47078,(0),null);
var p = cljs.core.nth.call(null,vec__47078,(1),null);
var job = vec__47078;
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
var n__41714__auto___47237 = n;
var __47238 = (0);
while(true){
if((__47238 < n__41714__auto___47237)){
var G__47081_47239 = type;
var G__47081_47240__$1 = (((G__47081_47239 instanceof cljs.core.Keyword))?G__47081_47239.fqn:null);
switch (G__47081_47240__$1) {
case "compute":
var c__46898__auto___47242 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__47238,c__46898__auto___47242,G__47081_47239,G__47081_47240__$1,n__41714__auto___47237,jobs,results,process,async){
return (function (){
var f__46899__auto__ = (function (){var switch__46808__auto__ = ((function (__47238,c__46898__auto___47242,G__47081_47239,G__47081_47240__$1,n__41714__auto___47237,jobs,results,process,async){
return (function (state_47094){
var state_val_47095 = (state_47094[(1)]);
if((state_val_47095 === (1))){
var state_47094__$1 = state_47094;
var statearr_47096_47243 = state_47094__$1;
(statearr_47096_47243[(2)] = null);

(statearr_47096_47243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47095 === (2))){
var state_47094__$1 = state_47094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47094__$1,(4),jobs);
} else {
if((state_val_47095 === (3))){
var inst_47092 = (state_47094[(2)]);
var state_47094__$1 = state_47094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47094__$1,inst_47092);
} else {
if((state_val_47095 === (4))){
var inst_47084 = (state_47094[(2)]);
var inst_47085 = process.call(null,inst_47084);
var state_47094__$1 = state_47094;
if(cljs.core.truth_(inst_47085)){
var statearr_47097_47244 = state_47094__$1;
(statearr_47097_47244[(1)] = (5));

} else {
var statearr_47098_47245 = state_47094__$1;
(statearr_47098_47245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47095 === (5))){
var state_47094__$1 = state_47094;
var statearr_47099_47246 = state_47094__$1;
(statearr_47099_47246[(2)] = null);

(statearr_47099_47246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47095 === (6))){
var state_47094__$1 = state_47094;
var statearr_47100_47247 = state_47094__$1;
(statearr_47100_47247[(2)] = null);

(statearr_47100_47247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47095 === (7))){
var inst_47090 = (state_47094[(2)]);
var state_47094__$1 = state_47094;
var statearr_47101_47248 = state_47094__$1;
(statearr_47101_47248[(2)] = inst_47090);

(statearr_47101_47248[(1)] = (3));


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
});})(__47238,c__46898__auto___47242,G__47081_47239,G__47081_47240__$1,n__41714__auto___47237,jobs,results,process,async))
;
return ((function (__47238,switch__46808__auto__,c__46898__auto___47242,G__47081_47239,G__47081_47240__$1,n__41714__auto___47237,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46809__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46809__auto____0 = (function (){
var statearr_47102 = [null,null,null,null,null,null,null];
(statearr_47102[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46809__auto__);

(statearr_47102[(1)] = (1));

return statearr_47102;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46809__auto____1 = (function (state_47094){
while(true){
var ret_value__46810__auto__ = (function (){try{while(true){
var result__46811__auto__ = switch__46808__auto__.call(null,state_47094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46811__auto__;
}
break;
}
}catch (e47103){if((e47103 instanceof Object)){
var ex__46812__auto__ = e47103;
var statearr_47104_47249 = state_47094;
(statearr_47104_47249[(5)] = ex__46812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47250 = state_47094;
state_47094 = G__47250;
continue;
} else {
return ret_value__46810__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46809__auto__ = function(state_47094){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46809__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46809__auto____1.call(this,state_47094);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46809__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46809__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46809__auto__;
})()
;})(__47238,switch__46808__auto__,c__46898__auto___47242,G__47081_47239,G__47081_47240__$1,n__41714__auto___47237,jobs,results,process,async))
})();
var state__46900__auto__ = (function (){var statearr_47105 = f__46899__auto__.call(null);
(statearr_47105[(6)] = c__46898__auto___47242);

return statearr_47105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46900__auto__);
});})(__47238,c__46898__auto___47242,G__47081_47239,G__47081_47240__$1,n__41714__auto___47237,jobs,results,process,async))
);


break;
case "async":
var c__46898__auto___47251 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__47238,c__46898__auto___47251,G__47081_47239,G__47081_47240__$1,n__41714__auto___47237,jobs,results,process,async){
return (function (){
var f__46899__auto__ = (function (){var switch__46808__auto__ = ((function (__47238,c__46898__auto___47251,G__47081_47239,G__47081_47240__$1,n__41714__auto___47237,jobs,results,process,async){
return (function (state_47118){
var state_val_47119 = (state_47118[(1)]);
if((state_val_47119 === (1))){
var state_47118__$1 = state_47118;
var statearr_47120_47252 = state_47118__$1;
(statearr_47120_47252[(2)] = null);

(statearr_47120_47252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47119 === (2))){
var state_47118__$1 = state_47118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47118__$1,(4),jobs);
} else {
if((state_val_47119 === (3))){
var inst_47116 = (state_47118[(2)]);
var state_47118__$1 = state_47118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47118__$1,inst_47116);
} else {
if((state_val_47119 === (4))){
var inst_47108 = (state_47118[(2)]);
var inst_47109 = async.call(null,inst_47108);
var state_47118__$1 = state_47118;
if(cljs.core.truth_(inst_47109)){
var statearr_47121_47253 = state_47118__$1;
(statearr_47121_47253[(1)] = (5));

} else {
var statearr_47122_47254 = state_47118__$1;
(statearr_47122_47254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47119 === (5))){
var state_47118__$1 = state_47118;
var statearr_47123_47255 = state_47118__$1;
(statearr_47123_47255[(2)] = null);

(statearr_47123_47255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47119 === (6))){
var state_47118__$1 = state_47118;
var statearr_47124_47256 = state_47118__$1;
(statearr_47124_47256[(2)] = null);

(statearr_47124_47256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47119 === (7))){
var inst_47114 = (state_47118[(2)]);
var state_47118__$1 = state_47118;
var statearr_47125_47257 = state_47118__$1;
(statearr_47125_47257[(2)] = inst_47114);

(statearr_47125_47257[(1)] = (3));


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
});})(__47238,c__46898__auto___47251,G__47081_47239,G__47081_47240__$1,n__41714__auto___47237,jobs,results,process,async))
;
return ((function (__47238,switch__46808__auto__,c__46898__auto___47251,G__47081_47239,G__47081_47240__$1,n__41714__auto___47237,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46809__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46809__auto____0 = (function (){
var statearr_47126 = [null,null,null,null,null,null,null];
(statearr_47126[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46809__auto__);

(statearr_47126[(1)] = (1));

return statearr_47126;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46809__auto____1 = (function (state_47118){
while(true){
var ret_value__46810__auto__ = (function (){try{while(true){
var result__46811__auto__ = switch__46808__auto__.call(null,state_47118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46811__auto__;
}
break;
}
}catch (e47127){if((e47127 instanceof Object)){
var ex__46812__auto__ = e47127;
var statearr_47128_47258 = state_47118;
(statearr_47128_47258[(5)] = ex__46812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47259 = state_47118;
state_47118 = G__47259;
continue;
} else {
return ret_value__46810__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46809__auto__ = function(state_47118){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46809__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46809__auto____1.call(this,state_47118);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46809__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46809__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46809__auto__;
})()
;})(__47238,switch__46808__auto__,c__46898__auto___47251,G__47081_47239,G__47081_47240__$1,n__41714__auto___47237,jobs,results,process,async))
})();
var state__46900__auto__ = (function (){var statearr_47129 = f__46899__auto__.call(null);
(statearr_47129[(6)] = c__46898__auto___47251);

return statearr_47129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46900__auto__);
});})(__47238,c__46898__auto___47251,G__47081_47239,G__47081_47240__$1,n__41714__auto___47237,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47081_47240__$1)].join('')));

}

var G__47260 = (__47238 + (1));
__47238 = G__47260;
continue;
} else {
}
break;
}

var c__46898__auto___47261 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46898__auto___47261,jobs,results,process,async){
return (function (){
var f__46899__auto__ = (function (){var switch__46808__auto__ = ((function (c__46898__auto___47261,jobs,results,process,async){
return (function (state_47151){
var state_val_47152 = (state_47151[(1)]);
if((state_val_47152 === (1))){
var state_47151__$1 = state_47151;
var statearr_47153_47262 = state_47151__$1;
(statearr_47153_47262[(2)] = null);

(statearr_47153_47262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47152 === (2))){
var state_47151__$1 = state_47151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47151__$1,(4),from);
} else {
if((state_val_47152 === (3))){
var inst_47149 = (state_47151[(2)]);
var state_47151__$1 = state_47151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47151__$1,inst_47149);
} else {
if((state_val_47152 === (4))){
var inst_47132 = (state_47151[(7)]);
var inst_47132__$1 = (state_47151[(2)]);
var inst_47133 = (inst_47132__$1 == null);
var state_47151__$1 = (function (){var statearr_47154 = state_47151;
(statearr_47154[(7)] = inst_47132__$1);

return statearr_47154;
})();
if(cljs.core.truth_(inst_47133)){
var statearr_47155_47263 = state_47151__$1;
(statearr_47155_47263[(1)] = (5));

} else {
var statearr_47156_47264 = state_47151__$1;
(statearr_47156_47264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47152 === (5))){
var inst_47135 = cljs.core.async.close_BANG_.call(null,jobs);
var state_47151__$1 = state_47151;
var statearr_47157_47265 = state_47151__$1;
(statearr_47157_47265[(2)] = inst_47135);

(statearr_47157_47265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47152 === (6))){
var inst_47137 = (state_47151[(8)]);
var inst_47132 = (state_47151[(7)]);
var inst_47137__$1 = cljs.core.async.chan.call(null,(1));
var inst_47138 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47139 = [inst_47132,inst_47137__$1];
var inst_47140 = (new cljs.core.PersistentVector(null,2,(5),inst_47138,inst_47139,null));
var state_47151__$1 = (function (){var statearr_47158 = state_47151;
(statearr_47158[(8)] = inst_47137__$1);

return statearr_47158;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47151__$1,(8),jobs,inst_47140);
} else {
if((state_val_47152 === (7))){
var inst_47147 = (state_47151[(2)]);
var state_47151__$1 = state_47151;
var statearr_47159_47266 = state_47151__$1;
(statearr_47159_47266[(2)] = inst_47147);

(statearr_47159_47266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47152 === (8))){
var inst_47137 = (state_47151[(8)]);
var inst_47142 = (state_47151[(2)]);
var state_47151__$1 = (function (){var statearr_47160 = state_47151;
(statearr_47160[(9)] = inst_47142);

return statearr_47160;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47151__$1,(9),results,inst_47137);
} else {
if((state_val_47152 === (9))){
var inst_47144 = (state_47151[(2)]);
var state_47151__$1 = (function (){var statearr_47161 = state_47151;
(statearr_47161[(10)] = inst_47144);

return statearr_47161;
})();
var statearr_47162_47267 = state_47151__$1;
(statearr_47162_47267[(2)] = null);

(statearr_47162_47267[(1)] = (2));


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
});})(c__46898__auto___47261,jobs,results,process,async))
;
return ((function (switch__46808__auto__,c__46898__auto___47261,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46809__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46809__auto____0 = (function (){
var statearr_47163 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47163[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46809__auto__);

(statearr_47163[(1)] = (1));

return statearr_47163;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46809__auto____1 = (function (state_47151){
while(true){
var ret_value__46810__auto__ = (function (){try{while(true){
var result__46811__auto__ = switch__46808__auto__.call(null,state_47151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46811__auto__;
}
break;
}
}catch (e47164){if((e47164 instanceof Object)){
var ex__46812__auto__ = e47164;
var statearr_47165_47268 = state_47151;
(statearr_47165_47268[(5)] = ex__46812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47269 = state_47151;
state_47151 = G__47269;
continue;
} else {
return ret_value__46810__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46809__auto__ = function(state_47151){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46809__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46809__auto____1.call(this,state_47151);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46809__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46809__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46809__auto__;
})()
;})(switch__46808__auto__,c__46898__auto___47261,jobs,results,process,async))
})();
var state__46900__auto__ = (function (){var statearr_47166 = f__46899__auto__.call(null);
(statearr_47166[(6)] = c__46898__auto___47261);

return statearr_47166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46900__auto__);
});})(c__46898__auto___47261,jobs,results,process,async))
);


var c__46898__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46898__auto__,jobs,results,process,async){
return (function (){
var f__46899__auto__ = (function (){var switch__46808__auto__ = ((function (c__46898__auto__,jobs,results,process,async){
return (function (state_47204){
var state_val_47205 = (state_47204[(1)]);
if((state_val_47205 === (7))){
var inst_47200 = (state_47204[(2)]);
var state_47204__$1 = state_47204;
var statearr_47206_47270 = state_47204__$1;
(statearr_47206_47270[(2)] = inst_47200);

(statearr_47206_47270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47205 === (20))){
var state_47204__$1 = state_47204;
var statearr_47207_47271 = state_47204__$1;
(statearr_47207_47271[(2)] = null);

(statearr_47207_47271[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47205 === (1))){
var state_47204__$1 = state_47204;
var statearr_47208_47272 = state_47204__$1;
(statearr_47208_47272[(2)] = null);

(statearr_47208_47272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47205 === (4))){
var inst_47169 = (state_47204[(7)]);
var inst_47169__$1 = (state_47204[(2)]);
var inst_47170 = (inst_47169__$1 == null);
var state_47204__$1 = (function (){var statearr_47209 = state_47204;
(statearr_47209[(7)] = inst_47169__$1);

return statearr_47209;
})();
if(cljs.core.truth_(inst_47170)){
var statearr_47210_47273 = state_47204__$1;
(statearr_47210_47273[(1)] = (5));

} else {
var statearr_47211_47274 = state_47204__$1;
(statearr_47211_47274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47205 === (15))){
var inst_47182 = (state_47204[(8)]);
var state_47204__$1 = state_47204;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47204__$1,(18),to,inst_47182);
} else {
if((state_val_47205 === (21))){
var inst_47195 = (state_47204[(2)]);
var state_47204__$1 = state_47204;
var statearr_47212_47275 = state_47204__$1;
(statearr_47212_47275[(2)] = inst_47195);

(statearr_47212_47275[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47205 === (13))){
var inst_47197 = (state_47204[(2)]);
var state_47204__$1 = (function (){var statearr_47213 = state_47204;
(statearr_47213[(9)] = inst_47197);

return statearr_47213;
})();
var statearr_47214_47276 = state_47204__$1;
(statearr_47214_47276[(2)] = null);

(statearr_47214_47276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47205 === (6))){
var inst_47169 = (state_47204[(7)]);
var state_47204__$1 = state_47204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47204__$1,(11),inst_47169);
} else {
if((state_val_47205 === (17))){
var inst_47190 = (state_47204[(2)]);
var state_47204__$1 = state_47204;
if(cljs.core.truth_(inst_47190)){
var statearr_47215_47277 = state_47204__$1;
(statearr_47215_47277[(1)] = (19));

} else {
var statearr_47216_47278 = state_47204__$1;
(statearr_47216_47278[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47205 === (3))){
var inst_47202 = (state_47204[(2)]);
var state_47204__$1 = state_47204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47204__$1,inst_47202);
} else {
if((state_val_47205 === (12))){
var inst_47179 = (state_47204[(10)]);
var state_47204__$1 = state_47204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47204__$1,(14),inst_47179);
} else {
if((state_val_47205 === (2))){
var state_47204__$1 = state_47204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47204__$1,(4),results);
} else {
if((state_val_47205 === (19))){
var state_47204__$1 = state_47204;
var statearr_47217_47279 = state_47204__$1;
(statearr_47217_47279[(2)] = null);

(statearr_47217_47279[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47205 === (11))){
var inst_47179 = (state_47204[(2)]);
var state_47204__$1 = (function (){var statearr_47218 = state_47204;
(statearr_47218[(10)] = inst_47179);

return statearr_47218;
})();
var statearr_47219_47280 = state_47204__$1;
(statearr_47219_47280[(2)] = null);

(statearr_47219_47280[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47205 === (9))){
var state_47204__$1 = state_47204;
var statearr_47220_47281 = state_47204__$1;
(statearr_47220_47281[(2)] = null);

(statearr_47220_47281[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47205 === (5))){
var state_47204__$1 = state_47204;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47221_47282 = state_47204__$1;
(statearr_47221_47282[(1)] = (8));

} else {
var statearr_47222_47283 = state_47204__$1;
(statearr_47222_47283[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47205 === (14))){
var inst_47184 = (state_47204[(11)]);
var inst_47182 = (state_47204[(8)]);
var inst_47182__$1 = (state_47204[(2)]);
var inst_47183 = (inst_47182__$1 == null);
var inst_47184__$1 = cljs.core.not.call(null,inst_47183);
var state_47204__$1 = (function (){var statearr_47223 = state_47204;
(statearr_47223[(11)] = inst_47184__$1);

(statearr_47223[(8)] = inst_47182__$1);

return statearr_47223;
})();
if(inst_47184__$1){
var statearr_47224_47284 = state_47204__$1;
(statearr_47224_47284[(1)] = (15));

} else {
var statearr_47225_47285 = state_47204__$1;
(statearr_47225_47285[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47205 === (16))){
var inst_47184 = (state_47204[(11)]);
var state_47204__$1 = state_47204;
var statearr_47226_47286 = state_47204__$1;
(statearr_47226_47286[(2)] = inst_47184);

(statearr_47226_47286[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47205 === (10))){
var inst_47176 = (state_47204[(2)]);
var state_47204__$1 = state_47204;
var statearr_47227_47287 = state_47204__$1;
(statearr_47227_47287[(2)] = inst_47176);

(statearr_47227_47287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47205 === (18))){
var inst_47187 = (state_47204[(2)]);
var state_47204__$1 = state_47204;
var statearr_47228_47288 = state_47204__$1;
(statearr_47228_47288[(2)] = inst_47187);

(statearr_47228_47288[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47205 === (8))){
var inst_47173 = cljs.core.async.close_BANG_.call(null,to);
var state_47204__$1 = state_47204;
var statearr_47229_47289 = state_47204__$1;
(statearr_47229_47289[(2)] = inst_47173);

(statearr_47229_47289[(1)] = (10));


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
});})(c__46898__auto__,jobs,results,process,async))
;
return ((function (switch__46808__auto__,c__46898__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46809__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46809__auto____0 = (function (){
var statearr_47230 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47230[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46809__auto__);

(statearr_47230[(1)] = (1));

return statearr_47230;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46809__auto____1 = (function (state_47204){
while(true){
var ret_value__46810__auto__ = (function (){try{while(true){
var result__46811__auto__ = switch__46808__auto__.call(null,state_47204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46811__auto__;
}
break;
}
}catch (e47231){if((e47231 instanceof Object)){
var ex__46812__auto__ = e47231;
var statearr_47232_47290 = state_47204;
(statearr_47232_47290[(5)] = ex__46812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47291 = state_47204;
state_47204 = G__47291;
continue;
} else {
return ret_value__46810__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46809__auto__ = function(state_47204){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46809__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46809__auto____1.call(this,state_47204);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46809__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46809__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46809__auto__;
})()
;})(switch__46808__auto__,c__46898__auto__,jobs,results,process,async))
})();
var state__46900__auto__ = (function (){var statearr_47233 = f__46899__auto__.call(null);
(statearr_47233[(6)] = c__46898__auto__);

return statearr_47233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46900__auto__);
});})(c__46898__auto__,jobs,results,process,async))
);

return c__46898__auto__;
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
var G__47293 = arguments.length;
switch (G__47293) {
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
var G__47296 = arguments.length;
switch (G__47296) {
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
var G__47299 = arguments.length;
switch (G__47299) {
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
var c__46898__auto___47348 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46898__auto___47348,tc,fc){
return (function (){
var f__46899__auto__ = (function (){var switch__46808__auto__ = ((function (c__46898__auto___47348,tc,fc){
return (function (state_47325){
var state_val_47326 = (state_47325[(1)]);
if((state_val_47326 === (7))){
var inst_47321 = (state_47325[(2)]);
var state_47325__$1 = state_47325;
var statearr_47327_47349 = state_47325__$1;
(statearr_47327_47349[(2)] = inst_47321);

(statearr_47327_47349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47326 === (1))){
var state_47325__$1 = state_47325;
var statearr_47328_47350 = state_47325__$1;
(statearr_47328_47350[(2)] = null);

(statearr_47328_47350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47326 === (4))){
var inst_47302 = (state_47325[(7)]);
var inst_47302__$1 = (state_47325[(2)]);
var inst_47303 = (inst_47302__$1 == null);
var state_47325__$1 = (function (){var statearr_47329 = state_47325;
(statearr_47329[(7)] = inst_47302__$1);

return statearr_47329;
})();
if(cljs.core.truth_(inst_47303)){
var statearr_47330_47351 = state_47325__$1;
(statearr_47330_47351[(1)] = (5));

} else {
var statearr_47331_47352 = state_47325__$1;
(statearr_47331_47352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47326 === (13))){
var state_47325__$1 = state_47325;
var statearr_47332_47353 = state_47325__$1;
(statearr_47332_47353[(2)] = null);

(statearr_47332_47353[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47326 === (6))){
var inst_47302 = (state_47325[(7)]);
var inst_47308 = p.call(null,inst_47302);
var state_47325__$1 = state_47325;
if(cljs.core.truth_(inst_47308)){
var statearr_47333_47354 = state_47325__$1;
(statearr_47333_47354[(1)] = (9));

} else {
var statearr_47334_47355 = state_47325__$1;
(statearr_47334_47355[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47326 === (3))){
var inst_47323 = (state_47325[(2)]);
var state_47325__$1 = state_47325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47325__$1,inst_47323);
} else {
if((state_val_47326 === (12))){
var state_47325__$1 = state_47325;
var statearr_47335_47356 = state_47325__$1;
(statearr_47335_47356[(2)] = null);

(statearr_47335_47356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47326 === (2))){
var state_47325__$1 = state_47325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47325__$1,(4),ch);
} else {
if((state_val_47326 === (11))){
var inst_47302 = (state_47325[(7)]);
var inst_47312 = (state_47325[(2)]);
var state_47325__$1 = state_47325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47325__$1,(8),inst_47312,inst_47302);
} else {
if((state_val_47326 === (9))){
var state_47325__$1 = state_47325;
var statearr_47336_47357 = state_47325__$1;
(statearr_47336_47357[(2)] = tc);

(statearr_47336_47357[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47326 === (5))){
var inst_47305 = cljs.core.async.close_BANG_.call(null,tc);
var inst_47306 = cljs.core.async.close_BANG_.call(null,fc);
var state_47325__$1 = (function (){var statearr_47337 = state_47325;
(statearr_47337[(8)] = inst_47305);

return statearr_47337;
})();
var statearr_47338_47358 = state_47325__$1;
(statearr_47338_47358[(2)] = inst_47306);

(statearr_47338_47358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47326 === (14))){
var inst_47319 = (state_47325[(2)]);
var state_47325__$1 = state_47325;
var statearr_47339_47359 = state_47325__$1;
(statearr_47339_47359[(2)] = inst_47319);

(statearr_47339_47359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47326 === (10))){
var state_47325__$1 = state_47325;
var statearr_47340_47360 = state_47325__$1;
(statearr_47340_47360[(2)] = fc);

(statearr_47340_47360[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47326 === (8))){
var inst_47314 = (state_47325[(2)]);
var state_47325__$1 = state_47325;
if(cljs.core.truth_(inst_47314)){
var statearr_47341_47361 = state_47325__$1;
(statearr_47341_47361[(1)] = (12));

} else {
var statearr_47342_47362 = state_47325__$1;
(statearr_47342_47362[(1)] = (13));

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
});})(c__46898__auto___47348,tc,fc))
;
return ((function (switch__46808__auto__,c__46898__auto___47348,tc,fc){
return (function() {
var cljs$core$async$state_machine__46809__auto__ = null;
var cljs$core$async$state_machine__46809__auto____0 = (function (){
var statearr_47343 = [null,null,null,null,null,null,null,null,null];
(statearr_47343[(0)] = cljs$core$async$state_machine__46809__auto__);

(statearr_47343[(1)] = (1));

return statearr_47343;
});
var cljs$core$async$state_machine__46809__auto____1 = (function (state_47325){
while(true){
var ret_value__46810__auto__ = (function (){try{while(true){
var result__46811__auto__ = switch__46808__auto__.call(null,state_47325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46811__auto__;
}
break;
}
}catch (e47344){if((e47344 instanceof Object)){
var ex__46812__auto__ = e47344;
var statearr_47345_47363 = state_47325;
(statearr_47345_47363[(5)] = ex__46812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47344;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47364 = state_47325;
state_47325 = G__47364;
continue;
} else {
return ret_value__46810__auto__;
}
break;
}
});
cljs$core$async$state_machine__46809__auto__ = function(state_47325){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46809__auto____1.call(this,state_47325);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46809__auto____0;
cljs$core$async$state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46809__auto____1;
return cljs$core$async$state_machine__46809__auto__;
})()
;})(switch__46808__auto__,c__46898__auto___47348,tc,fc))
})();
var state__46900__auto__ = (function (){var statearr_47346 = f__46899__auto__.call(null);
(statearr_47346[(6)] = c__46898__auto___47348);

return statearr_47346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46900__auto__);
});})(c__46898__auto___47348,tc,fc))
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
var c__46898__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46898__auto__){
return (function (){
var f__46899__auto__ = (function (){var switch__46808__auto__ = ((function (c__46898__auto__){
return (function (state_47385){
var state_val_47386 = (state_47385[(1)]);
if((state_val_47386 === (7))){
var inst_47381 = (state_47385[(2)]);
var state_47385__$1 = state_47385;
var statearr_47387_47405 = state_47385__$1;
(statearr_47387_47405[(2)] = inst_47381);

(statearr_47387_47405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47386 === (1))){
var inst_47365 = init;
var state_47385__$1 = (function (){var statearr_47388 = state_47385;
(statearr_47388[(7)] = inst_47365);

return statearr_47388;
})();
var statearr_47389_47406 = state_47385__$1;
(statearr_47389_47406[(2)] = null);

(statearr_47389_47406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47386 === (4))){
var inst_47368 = (state_47385[(8)]);
var inst_47368__$1 = (state_47385[(2)]);
var inst_47369 = (inst_47368__$1 == null);
var state_47385__$1 = (function (){var statearr_47390 = state_47385;
(statearr_47390[(8)] = inst_47368__$1);

return statearr_47390;
})();
if(cljs.core.truth_(inst_47369)){
var statearr_47391_47407 = state_47385__$1;
(statearr_47391_47407[(1)] = (5));

} else {
var statearr_47392_47408 = state_47385__$1;
(statearr_47392_47408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47386 === (6))){
var inst_47372 = (state_47385[(9)]);
var inst_47365 = (state_47385[(7)]);
var inst_47368 = (state_47385[(8)]);
var inst_47372__$1 = f.call(null,inst_47365,inst_47368);
var inst_47373 = cljs.core.reduced_QMARK_.call(null,inst_47372__$1);
var state_47385__$1 = (function (){var statearr_47393 = state_47385;
(statearr_47393[(9)] = inst_47372__$1);

return statearr_47393;
})();
if(inst_47373){
var statearr_47394_47409 = state_47385__$1;
(statearr_47394_47409[(1)] = (8));

} else {
var statearr_47395_47410 = state_47385__$1;
(statearr_47395_47410[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47386 === (3))){
var inst_47383 = (state_47385[(2)]);
var state_47385__$1 = state_47385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47385__$1,inst_47383);
} else {
if((state_val_47386 === (2))){
var state_47385__$1 = state_47385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47385__$1,(4),ch);
} else {
if((state_val_47386 === (9))){
var inst_47372 = (state_47385[(9)]);
var inst_47365 = inst_47372;
var state_47385__$1 = (function (){var statearr_47396 = state_47385;
(statearr_47396[(7)] = inst_47365);

return statearr_47396;
})();
var statearr_47397_47411 = state_47385__$1;
(statearr_47397_47411[(2)] = null);

(statearr_47397_47411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47386 === (5))){
var inst_47365 = (state_47385[(7)]);
var state_47385__$1 = state_47385;
var statearr_47398_47412 = state_47385__$1;
(statearr_47398_47412[(2)] = inst_47365);

(statearr_47398_47412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47386 === (10))){
var inst_47379 = (state_47385[(2)]);
var state_47385__$1 = state_47385;
var statearr_47399_47413 = state_47385__$1;
(statearr_47399_47413[(2)] = inst_47379);

(statearr_47399_47413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47386 === (8))){
var inst_47372 = (state_47385[(9)]);
var inst_47375 = cljs.core.deref.call(null,inst_47372);
var state_47385__$1 = state_47385;
var statearr_47400_47414 = state_47385__$1;
(statearr_47400_47414[(2)] = inst_47375);

(statearr_47400_47414[(1)] = (10));


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
});})(c__46898__auto__))
;
return ((function (switch__46808__auto__,c__46898__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__46809__auto__ = null;
var cljs$core$async$reduce_$_state_machine__46809__auto____0 = (function (){
var statearr_47401 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47401[(0)] = cljs$core$async$reduce_$_state_machine__46809__auto__);

(statearr_47401[(1)] = (1));

return statearr_47401;
});
var cljs$core$async$reduce_$_state_machine__46809__auto____1 = (function (state_47385){
while(true){
var ret_value__46810__auto__ = (function (){try{while(true){
var result__46811__auto__ = switch__46808__auto__.call(null,state_47385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46811__auto__;
}
break;
}
}catch (e47402){if((e47402 instanceof Object)){
var ex__46812__auto__ = e47402;
var statearr_47403_47415 = state_47385;
(statearr_47403_47415[(5)] = ex__46812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47416 = state_47385;
state_47385 = G__47416;
continue;
} else {
return ret_value__46810__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__46809__auto__ = function(state_47385){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__46809__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__46809__auto____1.call(this,state_47385);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__46809__auto____0;
cljs$core$async$reduce_$_state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__46809__auto____1;
return cljs$core$async$reduce_$_state_machine__46809__auto__;
})()
;})(switch__46808__auto__,c__46898__auto__))
})();
var state__46900__auto__ = (function (){var statearr_47404 = f__46899__auto__.call(null);
(statearr_47404[(6)] = c__46898__auto__);

return statearr_47404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46900__auto__);
});})(c__46898__auto__))
);

return c__46898__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__46898__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46898__auto__,f__$1){
return (function (){
var f__46899__auto__ = (function (){var switch__46808__auto__ = ((function (c__46898__auto__,f__$1){
return (function (state_47422){
var state_val_47423 = (state_47422[(1)]);
if((state_val_47423 === (1))){
var inst_47417 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_47422__$1 = state_47422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47422__$1,(2),inst_47417);
} else {
if((state_val_47423 === (2))){
var inst_47419 = (state_47422[(2)]);
var inst_47420 = f__$1.call(null,inst_47419);
var state_47422__$1 = state_47422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47422__$1,inst_47420);
} else {
return null;
}
}
});})(c__46898__auto__,f__$1))
;
return ((function (switch__46808__auto__,c__46898__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__46809__auto__ = null;
var cljs$core$async$transduce_$_state_machine__46809__auto____0 = (function (){
var statearr_47424 = [null,null,null,null,null,null,null];
(statearr_47424[(0)] = cljs$core$async$transduce_$_state_machine__46809__auto__);

(statearr_47424[(1)] = (1));

return statearr_47424;
});
var cljs$core$async$transduce_$_state_machine__46809__auto____1 = (function (state_47422){
while(true){
var ret_value__46810__auto__ = (function (){try{while(true){
var result__46811__auto__ = switch__46808__auto__.call(null,state_47422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46811__auto__;
}
break;
}
}catch (e47425){if((e47425 instanceof Object)){
var ex__46812__auto__ = e47425;
var statearr_47426_47428 = state_47422;
(statearr_47426_47428[(5)] = ex__46812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47429 = state_47422;
state_47422 = G__47429;
continue;
} else {
return ret_value__46810__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__46809__auto__ = function(state_47422){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__46809__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__46809__auto____1.call(this,state_47422);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__46809__auto____0;
cljs$core$async$transduce_$_state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__46809__auto____1;
return cljs$core$async$transduce_$_state_machine__46809__auto__;
})()
;})(switch__46808__auto__,c__46898__auto__,f__$1))
})();
var state__46900__auto__ = (function (){var statearr_47427 = f__46899__auto__.call(null);
(statearr_47427[(6)] = c__46898__auto__);

return statearr_47427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46900__auto__);
});})(c__46898__auto__,f__$1))
);

return c__46898__auto__;
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
var G__47431 = arguments.length;
switch (G__47431) {
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
var c__46898__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46898__auto__){
return (function (){
var f__46899__auto__ = (function (){var switch__46808__auto__ = ((function (c__46898__auto__){
return (function (state_47456){
var state_val_47457 = (state_47456[(1)]);
if((state_val_47457 === (7))){
var inst_47438 = (state_47456[(2)]);
var state_47456__$1 = state_47456;
var statearr_47458_47479 = state_47456__$1;
(statearr_47458_47479[(2)] = inst_47438);

(statearr_47458_47479[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47457 === (1))){
var inst_47432 = cljs.core.seq.call(null,coll);
var inst_47433 = inst_47432;
var state_47456__$1 = (function (){var statearr_47459 = state_47456;
(statearr_47459[(7)] = inst_47433);

return statearr_47459;
})();
var statearr_47460_47480 = state_47456__$1;
(statearr_47460_47480[(2)] = null);

(statearr_47460_47480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47457 === (4))){
var inst_47433 = (state_47456[(7)]);
var inst_47436 = cljs.core.first.call(null,inst_47433);
var state_47456__$1 = state_47456;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47456__$1,(7),ch,inst_47436);
} else {
if((state_val_47457 === (13))){
var inst_47450 = (state_47456[(2)]);
var state_47456__$1 = state_47456;
var statearr_47461_47481 = state_47456__$1;
(statearr_47461_47481[(2)] = inst_47450);

(statearr_47461_47481[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47457 === (6))){
var inst_47441 = (state_47456[(2)]);
var state_47456__$1 = state_47456;
if(cljs.core.truth_(inst_47441)){
var statearr_47462_47482 = state_47456__$1;
(statearr_47462_47482[(1)] = (8));

} else {
var statearr_47463_47483 = state_47456__$1;
(statearr_47463_47483[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47457 === (3))){
var inst_47454 = (state_47456[(2)]);
var state_47456__$1 = state_47456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47456__$1,inst_47454);
} else {
if((state_val_47457 === (12))){
var state_47456__$1 = state_47456;
var statearr_47464_47484 = state_47456__$1;
(statearr_47464_47484[(2)] = null);

(statearr_47464_47484[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47457 === (2))){
var inst_47433 = (state_47456[(7)]);
var state_47456__$1 = state_47456;
if(cljs.core.truth_(inst_47433)){
var statearr_47465_47485 = state_47456__$1;
(statearr_47465_47485[(1)] = (4));

} else {
var statearr_47466_47486 = state_47456__$1;
(statearr_47466_47486[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47457 === (11))){
var inst_47447 = cljs.core.async.close_BANG_.call(null,ch);
var state_47456__$1 = state_47456;
var statearr_47467_47487 = state_47456__$1;
(statearr_47467_47487[(2)] = inst_47447);

(statearr_47467_47487[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47457 === (9))){
var state_47456__$1 = state_47456;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47468_47488 = state_47456__$1;
(statearr_47468_47488[(1)] = (11));

} else {
var statearr_47469_47489 = state_47456__$1;
(statearr_47469_47489[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47457 === (5))){
var inst_47433 = (state_47456[(7)]);
var state_47456__$1 = state_47456;
var statearr_47470_47490 = state_47456__$1;
(statearr_47470_47490[(2)] = inst_47433);

(statearr_47470_47490[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47457 === (10))){
var inst_47452 = (state_47456[(2)]);
var state_47456__$1 = state_47456;
var statearr_47471_47491 = state_47456__$1;
(statearr_47471_47491[(2)] = inst_47452);

(statearr_47471_47491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47457 === (8))){
var inst_47433 = (state_47456[(7)]);
var inst_47443 = cljs.core.next.call(null,inst_47433);
var inst_47433__$1 = inst_47443;
var state_47456__$1 = (function (){var statearr_47472 = state_47456;
(statearr_47472[(7)] = inst_47433__$1);

return statearr_47472;
})();
var statearr_47473_47492 = state_47456__$1;
(statearr_47473_47492[(2)] = null);

(statearr_47473_47492[(1)] = (2));


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
});})(c__46898__auto__))
;
return ((function (switch__46808__auto__,c__46898__auto__){
return (function() {
var cljs$core$async$state_machine__46809__auto__ = null;
var cljs$core$async$state_machine__46809__auto____0 = (function (){
var statearr_47474 = [null,null,null,null,null,null,null,null];
(statearr_47474[(0)] = cljs$core$async$state_machine__46809__auto__);

(statearr_47474[(1)] = (1));

return statearr_47474;
});
var cljs$core$async$state_machine__46809__auto____1 = (function (state_47456){
while(true){
var ret_value__46810__auto__ = (function (){try{while(true){
var result__46811__auto__ = switch__46808__auto__.call(null,state_47456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46811__auto__;
}
break;
}
}catch (e47475){if((e47475 instanceof Object)){
var ex__46812__auto__ = e47475;
var statearr_47476_47493 = state_47456;
(statearr_47476_47493[(5)] = ex__46812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47494 = state_47456;
state_47456 = G__47494;
continue;
} else {
return ret_value__46810__auto__;
}
break;
}
});
cljs$core$async$state_machine__46809__auto__ = function(state_47456){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46809__auto____1.call(this,state_47456);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46809__auto____0;
cljs$core$async$state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46809__auto____1;
return cljs$core$async$state_machine__46809__auto__;
})()
;})(switch__46808__auto__,c__46898__auto__))
})();
var state__46900__auto__ = (function (){var statearr_47477 = f__46899__auto__.call(null);
(statearr_47477[(6)] = c__46898__auto__);

return statearr_47477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46900__auto__);
});})(c__46898__auto__))
);

return c__46898__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async47495 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47495 = (function (ch,cs,meta47496){
this.ch = ch;
this.cs = cs;
this.meta47496 = meta47496;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_47497,meta47496__$1){
var self__ = this;
var _47497__$1 = this;
return (new cljs.core.async.t_cljs$core$async47495(self__.ch,self__.cs,meta47496__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async47495.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_47497){
var self__ = this;
var _47497__$1 = this;
return self__.meta47496;
});})(cs))
;

cljs.core.async.t_cljs$core$async47495.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47495.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async47495.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47495.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47495.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47495.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47495.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta47496","meta47496",722991921,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async47495.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47495.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47495";

cljs.core.async.t_cljs$core$async47495.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__41340__auto__,writer__41341__auto__,opt__41342__auto__){
return cljs.core._write.call(null,writer__41341__auto__,"cljs.core.async/t_cljs$core$async47495");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async47495 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async47495(ch__$1,cs__$1,meta47496){
return (new cljs.core.async.t_cljs$core$async47495(ch__$1,cs__$1,meta47496));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async47495(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__46898__auto___47717 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46898__auto___47717,cs,m,dchan,dctr,done){
return (function (){
var f__46899__auto__ = (function (){var switch__46808__auto__ = ((function (c__46898__auto___47717,cs,m,dchan,dctr,done){
return (function (state_47632){
var state_val_47633 = (state_47632[(1)]);
if((state_val_47633 === (7))){
var inst_47628 = (state_47632[(2)]);
var state_47632__$1 = state_47632;
var statearr_47634_47718 = state_47632__$1;
(statearr_47634_47718[(2)] = inst_47628);

(statearr_47634_47718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (20))){
var inst_47531 = (state_47632[(7)]);
var inst_47543 = cljs.core.first.call(null,inst_47531);
var inst_47544 = cljs.core.nth.call(null,inst_47543,(0),null);
var inst_47545 = cljs.core.nth.call(null,inst_47543,(1),null);
var state_47632__$1 = (function (){var statearr_47635 = state_47632;
(statearr_47635[(8)] = inst_47544);

return statearr_47635;
})();
if(cljs.core.truth_(inst_47545)){
var statearr_47636_47719 = state_47632__$1;
(statearr_47636_47719[(1)] = (22));

} else {
var statearr_47637_47720 = state_47632__$1;
(statearr_47637_47720[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (27))){
var inst_47500 = (state_47632[(9)]);
var inst_47573 = (state_47632[(10)]);
var inst_47575 = (state_47632[(11)]);
var inst_47580 = (state_47632[(12)]);
var inst_47580__$1 = cljs.core._nth.call(null,inst_47573,inst_47575);
var inst_47581 = cljs.core.async.put_BANG_.call(null,inst_47580__$1,inst_47500,done);
var state_47632__$1 = (function (){var statearr_47638 = state_47632;
(statearr_47638[(12)] = inst_47580__$1);

return statearr_47638;
})();
if(cljs.core.truth_(inst_47581)){
var statearr_47639_47721 = state_47632__$1;
(statearr_47639_47721[(1)] = (30));

} else {
var statearr_47640_47722 = state_47632__$1;
(statearr_47640_47722[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (1))){
var state_47632__$1 = state_47632;
var statearr_47641_47723 = state_47632__$1;
(statearr_47641_47723[(2)] = null);

(statearr_47641_47723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (24))){
var inst_47531 = (state_47632[(7)]);
var inst_47550 = (state_47632[(2)]);
var inst_47551 = cljs.core.next.call(null,inst_47531);
var inst_47509 = inst_47551;
var inst_47510 = null;
var inst_47511 = (0);
var inst_47512 = (0);
var state_47632__$1 = (function (){var statearr_47642 = state_47632;
(statearr_47642[(13)] = inst_47510);

(statearr_47642[(14)] = inst_47512);

(statearr_47642[(15)] = inst_47509);

(statearr_47642[(16)] = inst_47511);

(statearr_47642[(17)] = inst_47550);

return statearr_47642;
})();
var statearr_47643_47724 = state_47632__$1;
(statearr_47643_47724[(2)] = null);

(statearr_47643_47724[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (39))){
var state_47632__$1 = state_47632;
var statearr_47647_47725 = state_47632__$1;
(statearr_47647_47725[(2)] = null);

(statearr_47647_47725[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (4))){
var inst_47500 = (state_47632[(9)]);
var inst_47500__$1 = (state_47632[(2)]);
var inst_47501 = (inst_47500__$1 == null);
var state_47632__$1 = (function (){var statearr_47648 = state_47632;
(statearr_47648[(9)] = inst_47500__$1);

return statearr_47648;
})();
if(cljs.core.truth_(inst_47501)){
var statearr_47649_47726 = state_47632__$1;
(statearr_47649_47726[(1)] = (5));

} else {
var statearr_47650_47727 = state_47632__$1;
(statearr_47650_47727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (15))){
var inst_47510 = (state_47632[(13)]);
var inst_47512 = (state_47632[(14)]);
var inst_47509 = (state_47632[(15)]);
var inst_47511 = (state_47632[(16)]);
var inst_47527 = (state_47632[(2)]);
var inst_47528 = (inst_47512 + (1));
var tmp47644 = inst_47510;
var tmp47645 = inst_47509;
var tmp47646 = inst_47511;
var inst_47509__$1 = tmp47645;
var inst_47510__$1 = tmp47644;
var inst_47511__$1 = tmp47646;
var inst_47512__$1 = inst_47528;
var state_47632__$1 = (function (){var statearr_47651 = state_47632;
(statearr_47651[(13)] = inst_47510__$1);

(statearr_47651[(14)] = inst_47512__$1);

(statearr_47651[(18)] = inst_47527);

(statearr_47651[(15)] = inst_47509__$1);

(statearr_47651[(16)] = inst_47511__$1);

return statearr_47651;
})();
var statearr_47652_47728 = state_47632__$1;
(statearr_47652_47728[(2)] = null);

(statearr_47652_47728[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (21))){
var inst_47554 = (state_47632[(2)]);
var state_47632__$1 = state_47632;
var statearr_47656_47729 = state_47632__$1;
(statearr_47656_47729[(2)] = inst_47554);

(statearr_47656_47729[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (31))){
var inst_47580 = (state_47632[(12)]);
var inst_47584 = done.call(null,null);
var inst_47585 = cljs.core.async.untap_STAR_.call(null,m,inst_47580);
var state_47632__$1 = (function (){var statearr_47657 = state_47632;
(statearr_47657[(19)] = inst_47584);

return statearr_47657;
})();
var statearr_47658_47730 = state_47632__$1;
(statearr_47658_47730[(2)] = inst_47585);

(statearr_47658_47730[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (32))){
var inst_47573 = (state_47632[(10)]);
var inst_47574 = (state_47632[(20)]);
var inst_47575 = (state_47632[(11)]);
var inst_47572 = (state_47632[(21)]);
var inst_47587 = (state_47632[(2)]);
var inst_47588 = (inst_47575 + (1));
var tmp47653 = inst_47573;
var tmp47654 = inst_47574;
var tmp47655 = inst_47572;
var inst_47572__$1 = tmp47655;
var inst_47573__$1 = tmp47653;
var inst_47574__$1 = tmp47654;
var inst_47575__$1 = inst_47588;
var state_47632__$1 = (function (){var statearr_47659 = state_47632;
(statearr_47659[(22)] = inst_47587);

(statearr_47659[(10)] = inst_47573__$1);

(statearr_47659[(20)] = inst_47574__$1);

(statearr_47659[(11)] = inst_47575__$1);

(statearr_47659[(21)] = inst_47572__$1);

return statearr_47659;
})();
var statearr_47660_47731 = state_47632__$1;
(statearr_47660_47731[(2)] = null);

(statearr_47660_47731[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (40))){
var inst_47600 = (state_47632[(23)]);
var inst_47604 = done.call(null,null);
var inst_47605 = cljs.core.async.untap_STAR_.call(null,m,inst_47600);
var state_47632__$1 = (function (){var statearr_47661 = state_47632;
(statearr_47661[(24)] = inst_47604);

return statearr_47661;
})();
var statearr_47662_47732 = state_47632__$1;
(statearr_47662_47732[(2)] = inst_47605);

(statearr_47662_47732[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (33))){
var inst_47591 = (state_47632[(25)]);
var inst_47593 = cljs.core.chunked_seq_QMARK_.call(null,inst_47591);
var state_47632__$1 = state_47632;
if(inst_47593){
var statearr_47663_47733 = state_47632__$1;
(statearr_47663_47733[(1)] = (36));

} else {
var statearr_47664_47734 = state_47632__$1;
(statearr_47664_47734[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (13))){
var inst_47521 = (state_47632[(26)]);
var inst_47524 = cljs.core.async.close_BANG_.call(null,inst_47521);
var state_47632__$1 = state_47632;
var statearr_47665_47735 = state_47632__$1;
(statearr_47665_47735[(2)] = inst_47524);

(statearr_47665_47735[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (22))){
var inst_47544 = (state_47632[(8)]);
var inst_47547 = cljs.core.async.close_BANG_.call(null,inst_47544);
var state_47632__$1 = state_47632;
var statearr_47666_47736 = state_47632__$1;
(statearr_47666_47736[(2)] = inst_47547);

(statearr_47666_47736[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (36))){
var inst_47591 = (state_47632[(25)]);
var inst_47595 = cljs.core.chunk_first.call(null,inst_47591);
var inst_47596 = cljs.core.chunk_rest.call(null,inst_47591);
var inst_47597 = cljs.core.count.call(null,inst_47595);
var inst_47572 = inst_47596;
var inst_47573 = inst_47595;
var inst_47574 = inst_47597;
var inst_47575 = (0);
var state_47632__$1 = (function (){var statearr_47667 = state_47632;
(statearr_47667[(10)] = inst_47573);

(statearr_47667[(20)] = inst_47574);

(statearr_47667[(11)] = inst_47575);

(statearr_47667[(21)] = inst_47572);

return statearr_47667;
})();
var statearr_47668_47737 = state_47632__$1;
(statearr_47668_47737[(2)] = null);

(statearr_47668_47737[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (41))){
var inst_47591 = (state_47632[(25)]);
var inst_47607 = (state_47632[(2)]);
var inst_47608 = cljs.core.next.call(null,inst_47591);
var inst_47572 = inst_47608;
var inst_47573 = null;
var inst_47574 = (0);
var inst_47575 = (0);
var state_47632__$1 = (function (){var statearr_47669 = state_47632;
(statearr_47669[(27)] = inst_47607);

(statearr_47669[(10)] = inst_47573);

(statearr_47669[(20)] = inst_47574);

(statearr_47669[(11)] = inst_47575);

(statearr_47669[(21)] = inst_47572);

return statearr_47669;
})();
var statearr_47670_47738 = state_47632__$1;
(statearr_47670_47738[(2)] = null);

(statearr_47670_47738[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (43))){
var state_47632__$1 = state_47632;
var statearr_47671_47739 = state_47632__$1;
(statearr_47671_47739[(2)] = null);

(statearr_47671_47739[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (29))){
var inst_47616 = (state_47632[(2)]);
var state_47632__$1 = state_47632;
var statearr_47672_47740 = state_47632__$1;
(statearr_47672_47740[(2)] = inst_47616);

(statearr_47672_47740[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (44))){
var inst_47625 = (state_47632[(2)]);
var state_47632__$1 = (function (){var statearr_47673 = state_47632;
(statearr_47673[(28)] = inst_47625);

return statearr_47673;
})();
var statearr_47674_47741 = state_47632__$1;
(statearr_47674_47741[(2)] = null);

(statearr_47674_47741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (6))){
var inst_47564 = (state_47632[(29)]);
var inst_47563 = cljs.core.deref.call(null,cs);
var inst_47564__$1 = cljs.core.keys.call(null,inst_47563);
var inst_47565 = cljs.core.count.call(null,inst_47564__$1);
var inst_47566 = cljs.core.reset_BANG_.call(null,dctr,inst_47565);
var inst_47571 = cljs.core.seq.call(null,inst_47564__$1);
var inst_47572 = inst_47571;
var inst_47573 = null;
var inst_47574 = (0);
var inst_47575 = (0);
var state_47632__$1 = (function (){var statearr_47675 = state_47632;
(statearr_47675[(29)] = inst_47564__$1);

(statearr_47675[(10)] = inst_47573);

(statearr_47675[(20)] = inst_47574);

(statearr_47675[(11)] = inst_47575);

(statearr_47675[(21)] = inst_47572);

(statearr_47675[(30)] = inst_47566);

return statearr_47675;
})();
var statearr_47676_47742 = state_47632__$1;
(statearr_47676_47742[(2)] = null);

(statearr_47676_47742[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (28))){
var inst_47591 = (state_47632[(25)]);
var inst_47572 = (state_47632[(21)]);
var inst_47591__$1 = cljs.core.seq.call(null,inst_47572);
var state_47632__$1 = (function (){var statearr_47677 = state_47632;
(statearr_47677[(25)] = inst_47591__$1);

return statearr_47677;
})();
if(inst_47591__$1){
var statearr_47678_47743 = state_47632__$1;
(statearr_47678_47743[(1)] = (33));

} else {
var statearr_47679_47744 = state_47632__$1;
(statearr_47679_47744[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (25))){
var inst_47574 = (state_47632[(20)]);
var inst_47575 = (state_47632[(11)]);
var inst_47577 = (inst_47575 < inst_47574);
var inst_47578 = inst_47577;
var state_47632__$1 = state_47632;
if(cljs.core.truth_(inst_47578)){
var statearr_47680_47745 = state_47632__$1;
(statearr_47680_47745[(1)] = (27));

} else {
var statearr_47681_47746 = state_47632__$1;
(statearr_47681_47746[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (34))){
var state_47632__$1 = state_47632;
var statearr_47682_47747 = state_47632__$1;
(statearr_47682_47747[(2)] = null);

(statearr_47682_47747[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (17))){
var state_47632__$1 = state_47632;
var statearr_47683_47748 = state_47632__$1;
(statearr_47683_47748[(2)] = null);

(statearr_47683_47748[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (3))){
var inst_47630 = (state_47632[(2)]);
var state_47632__$1 = state_47632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47632__$1,inst_47630);
} else {
if((state_val_47633 === (12))){
var inst_47559 = (state_47632[(2)]);
var state_47632__$1 = state_47632;
var statearr_47684_47749 = state_47632__$1;
(statearr_47684_47749[(2)] = inst_47559);

(statearr_47684_47749[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (2))){
var state_47632__$1 = state_47632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47632__$1,(4),ch);
} else {
if((state_val_47633 === (23))){
var state_47632__$1 = state_47632;
var statearr_47685_47750 = state_47632__$1;
(statearr_47685_47750[(2)] = null);

(statearr_47685_47750[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (35))){
var inst_47614 = (state_47632[(2)]);
var state_47632__$1 = state_47632;
var statearr_47686_47751 = state_47632__$1;
(statearr_47686_47751[(2)] = inst_47614);

(statearr_47686_47751[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (19))){
var inst_47531 = (state_47632[(7)]);
var inst_47535 = cljs.core.chunk_first.call(null,inst_47531);
var inst_47536 = cljs.core.chunk_rest.call(null,inst_47531);
var inst_47537 = cljs.core.count.call(null,inst_47535);
var inst_47509 = inst_47536;
var inst_47510 = inst_47535;
var inst_47511 = inst_47537;
var inst_47512 = (0);
var state_47632__$1 = (function (){var statearr_47687 = state_47632;
(statearr_47687[(13)] = inst_47510);

(statearr_47687[(14)] = inst_47512);

(statearr_47687[(15)] = inst_47509);

(statearr_47687[(16)] = inst_47511);

return statearr_47687;
})();
var statearr_47688_47752 = state_47632__$1;
(statearr_47688_47752[(2)] = null);

(statearr_47688_47752[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (11))){
var inst_47509 = (state_47632[(15)]);
var inst_47531 = (state_47632[(7)]);
var inst_47531__$1 = cljs.core.seq.call(null,inst_47509);
var state_47632__$1 = (function (){var statearr_47689 = state_47632;
(statearr_47689[(7)] = inst_47531__$1);

return statearr_47689;
})();
if(inst_47531__$1){
var statearr_47690_47753 = state_47632__$1;
(statearr_47690_47753[(1)] = (16));

} else {
var statearr_47691_47754 = state_47632__$1;
(statearr_47691_47754[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (9))){
var inst_47561 = (state_47632[(2)]);
var state_47632__$1 = state_47632;
var statearr_47692_47755 = state_47632__$1;
(statearr_47692_47755[(2)] = inst_47561);

(statearr_47692_47755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (5))){
var inst_47507 = cljs.core.deref.call(null,cs);
var inst_47508 = cljs.core.seq.call(null,inst_47507);
var inst_47509 = inst_47508;
var inst_47510 = null;
var inst_47511 = (0);
var inst_47512 = (0);
var state_47632__$1 = (function (){var statearr_47693 = state_47632;
(statearr_47693[(13)] = inst_47510);

(statearr_47693[(14)] = inst_47512);

(statearr_47693[(15)] = inst_47509);

(statearr_47693[(16)] = inst_47511);

return statearr_47693;
})();
var statearr_47694_47756 = state_47632__$1;
(statearr_47694_47756[(2)] = null);

(statearr_47694_47756[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (14))){
var state_47632__$1 = state_47632;
var statearr_47695_47757 = state_47632__$1;
(statearr_47695_47757[(2)] = null);

(statearr_47695_47757[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (45))){
var inst_47622 = (state_47632[(2)]);
var state_47632__$1 = state_47632;
var statearr_47696_47758 = state_47632__$1;
(statearr_47696_47758[(2)] = inst_47622);

(statearr_47696_47758[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (26))){
var inst_47564 = (state_47632[(29)]);
var inst_47618 = (state_47632[(2)]);
var inst_47619 = cljs.core.seq.call(null,inst_47564);
var state_47632__$1 = (function (){var statearr_47697 = state_47632;
(statearr_47697[(31)] = inst_47618);

return statearr_47697;
})();
if(inst_47619){
var statearr_47698_47759 = state_47632__$1;
(statearr_47698_47759[(1)] = (42));

} else {
var statearr_47699_47760 = state_47632__$1;
(statearr_47699_47760[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (16))){
var inst_47531 = (state_47632[(7)]);
var inst_47533 = cljs.core.chunked_seq_QMARK_.call(null,inst_47531);
var state_47632__$1 = state_47632;
if(inst_47533){
var statearr_47700_47761 = state_47632__$1;
(statearr_47700_47761[(1)] = (19));

} else {
var statearr_47701_47762 = state_47632__$1;
(statearr_47701_47762[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (38))){
var inst_47611 = (state_47632[(2)]);
var state_47632__$1 = state_47632;
var statearr_47702_47763 = state_47632__$1;
(statearr_47702_47763[(2)] = inst_47611);

(statearr_47702_47763[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (30))){
var state_47632__$1 = state_47632;
var statearr_47703_47764 = state_47632__$1;
(statearr_47703_47764[(2)] = null);

(statearr_47703_47764[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (10))){
var inst_47510 = (state_47632[(13)]);
var inst_47512 = (state_47632[(14)]);
var inst_47520 = cljs.core._nth.call(null,inst_47510,inst_47512);
var inst_47521 = cljs.core.nth.call(null,inst_47520,(0),null);
var inst_47522 = cljs.core.nth.call(null,inst_47520,(1),null);
var state_47632__$1 = (function (){var statearr_47704 = state_47632;
(statearr_47704[(26)] = inst_47521);

return statearr_47704;
})();
if(cljs.core.truth_(inst_47522)){
var statearr_47705_47765 = state_47632__$1;
(statearr_47705_47765[(1)] = (13));

} else {
var statearr_47706_47766 = state_47632__$1;
(statearr_47706_47766[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (18))){
var inst_47557 = (state_47632[(2)]);
var state_47632__$1 = state_47632;
var statearr_47707_47767 = state_47632__$1;
(statearr_47707_47767[(2)] = inst_47557);

(statearr_47707_47767[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (42))){
var state_47632__$1 = state_47632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47632__$1,(45),dchan);
} else {
if((state_val_47633 === (37))){
var inst_47500 = (state_47632[(9)]);
var inst_47600 = (state_47632[(23)]);
var inst_47591 = (state_47632[(25)]);
var inst_47600__$1 = cljs.core.first.call(null,inst_47591);
var inst_47601 = cljs.core.async.put_BANG_.call(null,inst_47600__$1,inst_47500,done);
var state_47632__$1 = (function (){var statearr_47708 = state_47632;
(statearr_47708[(23)] = inst_47600__$1);

return statearr_47708;
})();
if(cljs.core.truth_(inst_47601)){
var statearr_47709_47768 = state_47632__$1;
(statearr_47709_47768[(1)] = (39));

} else {
var statearr_47710_47769 = state_47632__$1;
(statearr_47710_47769[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (8))){
var inst_47512 = (state_47632[(14)]);
var inst_47511 = (state_47632[(16)]);
var inst_47514 = (inst_47512 < inst_47511);
var inst_47515 = inst_47514;
var state_47632__$1 = state_47632;
if(cljs.core.truth_(inst_47515)){
var statearr_47711_47770 = state_47632__$1;
(statearr_47711_47770[(1)] = (10));

} else {
var statearr_47712_47771 = state_47632__$1;
(statearr_47712_47771[(1)] = (11));

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
});})(c__46898__auto___47717,cs,m,dchan,dctr,done))
;
return ((function (switch__46808__auto__,c__46898__auto___47717,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__46809__auto__ = null;
var cljs$core$async$mult_$_state_machine__46809__auto____0 = (function (){
var statearr_47713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47713[(0)] = cljs$core$async$mult_$_state_machine__46809__auto__);

(statearr_47713[(1)] = (1));

return statearr_47713;
});
var cljs$core$async$mult_$_state_machine__46809__auto____1 = (function (state_47632){
while(true){
var ret_value__46810__auto__ = (function (){try{while(true){
var result__46811__auto__ = switch__46808__auto__.call(null,state_47632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46811__auto__;
}
break;
}
}catch (e47714){if((e47714 instanceof Object)){
var ex__46812__auto__ = e47714;
var statearr_47715_47772 = state_47632;
(statearr_47715_47772[(5)] = ex__46812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47773 = state_47632;
state_47632 = G__47773;
continue;
} else {
return ret_value__46810__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__46809__auto__ = function(state_47632){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__46809__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__46809__auto____1.call(this,state_47632);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__46809__auto____0;
cljs$core$async$mult_$_state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__46809__auto____1;
return cljs$core$async$mult_$_state_machine__46809__auto__;
})()
;})(switch__46808__auto__,c__46898__auto___47717,cs,m,dchan,dctr,done))
})();
var state__46900__auto__ = (function (){var statearr_47716 = f__46899__auto__.call(null);
(statearr_47716[(6)] = c__46898__auto___47717);

return statearr_47716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46900__auto__);
});})(c__46898__auto___47717,cs,m,dchan,dctr,done))
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
var G__47775 = arguments.length;
switch (G__47775) {
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
var len__41948__auto___47787 = arguments.length;
var i__41949__auto___47788 = (0);
while(true){
if((i__41949__auto___47788 < len__41948__auto___47787)){
args__41955__auto__.push((arguments[i__41949__auto___47788]));

var G__47789 = (i__41949__auto___47788 + (1));
i__41949__auto___47788 = G__47789;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((3) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__41956__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__47781){
var map__47782 = p__47781;
var map__47782__$1 = ((((!((map__47782 == null)))?((((map__47782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47782.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47782):map__47782);
var opts = map__47782__$1;
var statearr_47784_47790 = state;
(statearr_47784_47790[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__47782,map__47782__$1,opts){
return (function (val){
var statearr_47785_47791 = state;
(statearr_47785_47791[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__47782,map__47782__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_47786_47792 = state;
(statearr_47786_47792[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq47777){
var G__47778 = cljs.core.first.call(null,seq47777);
var seq47777__$1 = cljs.core.next.call(null,seq47777);
var G__47779 = cljs.core.first.call(null,seq47777__$1);
var seq47777__$2 = cljs.core.next.call(null,seq47777__$1);
var G__47780 = cljs.core.first.call(null,seq47777__$2);
var seq47777__$3 = cljs.core.next.call(null,seq47777__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47778,G__47779,G__47780,seq47777__$3);
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
if(typeof cljs.core.async.t_cljs$core$async47793 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47793 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta47794){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta47794 = meta47794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47795,meta47794__$1){
var self__ = this;
var _47795__$1 = this;
return (new cljs.core.async.t_cljs$core$async47793(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta47794__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47793.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47795){
var self__ = this;
var _47795__$1 = this;
return self__.meta47794;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47793.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47793.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47793.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47793.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47793.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47793.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47793.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47793.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async47793.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta47794","meta47794",-386456927,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47793.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47793.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47793";

cljs.core.async.t_cljs$core$async47793.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__41340__auto__,writer__41341__auto__,opt__41342__auto__){
return cljs.core._write.call(null,writer__41341__auto__,"cljs.core.async/t_cljs$core$async47793");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async47793 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async47793(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta47794){
return (new cljs.core.async.t_cljs$core$async47793(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta47794));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async47793(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46898__auto___47957 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46898__auto___47957,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__46899__auto__ = (function (){var switch__46808__auto__ = ((function (c__46898__auto___47957,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_47897){
var state_val_47898 = (state_47897[(1)]);
if((state_val_47898 === (7))){
var inst_47812 = (state_47897[(2)]);
var state_47897__$1 = state_47897;
var statearr_47899_47958 = state_47897__$1;
(statearr_47899_47958[(2)] = inst_47812);

(statearr_47899_47958[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (20))){
var inst_47824 = (state_47897[(7)]);
var state_47897__$1 = state_47897;
var statearr_47900_47959 = state_47897__$1;
(statearr_47900_47959[(2)] = inst_47824);

(statearr_47900_47959[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (27))){
var state_47897__$1 = state_47897;
var statearr_47901_47960 = state_47897__$1;
(statearr_47901_47960[(2)] = null);

(statearr_47901_47960[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (1))){
var inst_47799 = (state_47897[(8)]);
var inst_47799__$1 = calc_state.call(null);
var inst_47801 = (inst_47799__$1 == null);
var inst_47802 = cljs.core.not.call(null,inst_47801);
var state_47897__$1 = (function (){var statearr_47902 = state_47897;
(statearr_47902[(8)] = inst_47799__$1);

return statearr_47902;
})();
if(inst_47802){
var statearr_47903_47961 = state_47897__$1;
(statearr_47903_47961[(1)] = (2));

} else {
var statearr_47904_47962 = state_47897__$1;
(statearr_47904_47962[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (24))){
var inst_47871 = (state_47897[(9)]);
var inst_47857 = (state_47897[(10)]);
var inst_47848 = (state_47897[(11)]);
var inst_47871__$1 = inst_47848.call(null,inst_47857);
var state_47897__$1 = (function (){var statearr_47905 = state_47897;
(statearr_47905[(9)] = inst_47871__$1);

return statearr_47905;
})();
if(cljs.core.truth_(inst_47871__$1)){
var statearr_47906_47963 = state_47897__$1;
(statearr_47906_47963[(1)] = (29));

} else {
var statearr_47907_47964 = state_47897__$1;
(statearr_47907_47964[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (4))){
var inst_47815 = (state_47897[(2)]);
var state_47897__$1 = state_47897;
if(cljs.core.truth_(inst_47815)){
var statearr_47908_47965 = state_47897__$1;
(statearr_47908_47965[(1)] = (8));

} else {
var statearr_47909_47966 = state_47897__$1;
(statearr_47909_47966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (15))){
var inst_47842 = (state_47897[(2)]);
var state_47897__$1 = state_47897;
if(cljs.core.truth_(inst_47842)){
var statearr_47910_47967 = state_47897__$1;
(statearr_47910_47967[(1)] = (19));

} else {
var statearr_47911_47968 = state_47897__$1;
(statearr_47911_47968[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (21))){
var inst_47847 = (state_47897[(12)]);
var inst_47847__$1 = (state_47897[(2)]);
var inst_47848 = cljs.core.get.call(null,inst_47847__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47849 = cljs.core.get.call(null,inst_47847__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47850 = cljs.core.get.call(null,inst_47847__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_47897__$1 = (function (){var statearr_47912 = state_47897;
(statearr_47912[(12)] = inst_47847__$1);

(statearr_47912[(11)] = inst_47848);

(statearr_47912[(13)] = inst_47849);

return statearr_47912;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_47897__$1,(22),inst_47850);
} else {
if((state_val_47898 === (31))){
var inst_47879 = (state_47897[(2)]);
var state_47897__$1 = state_47897;
if(cljs.core.truth_(inst_47879)){
var statearr_47913_47969 = state_47897__$1;
(statearr_47913_47969[(1)] = (32));

} else {
var statearr_47914_47970 = state_47897__$1;
(statearr_47914_47970[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (32))){
var inst_47856 = (state_47897[(14)]);
var state_47897__$1 = state_47897;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47897__$1,(35),out,inst_47856);
} else {
if((state_val_47898 === (33))){
var inst_47847 = (state_47897[(12)]);
var inst_47824 = inst_47847;
var state_47897__$1 = (function (){var statearr_47915 = state_47897;
(statearr_47915[(7)] = inst_47824);

return statearr_47915;
})();
var statearr_47916_47971 = state_47897__$1;
(statearr_47916_47971[(2)] = null);

(statearr_47916_47971[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (13))){
var inst_47824 = (state_47897[(7)]);
var inst_47831 = inst_47824.cljs$lang$protocol_mask$partition0$;
var inst_47832 = (inst_47831 & (64));
var inst_47833 = inst_47824.cljs$core$ISeq$;
var inst_47834 = (cljs.core.PROTOCOL_SENTINEL === inst_47833);
var inst_47835 = (inst_47832) || (inst_47834);
var state_47897__$1 = state_47897;
if(cljs.core.truth_(inst_47835)){
var statearr_47917_47972 = state_47897__$1;
(statearr_47917_47972[(1)] = (16));

} else {
var statearr_47918_47973 = state_47897__$1;
(statearr_47918_47973[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (22))){
var inst_47856 = (state_47897[(14)]);
var inst_47857 = (state_47897[(10)]);
var inst_47855 = (state_47897[(2)]);
var inst_47856__$1 = cljs.core.nth.call(null,inst_47855,(0),null);
var inst_47857__$1 = cljs.core.nth.call(null,inst_47855,(1),null);
var inst_47858 = (inst_47856__$1 == null);
var inst_47859 = cljs.core._EQ_.call(null,inst_47857__$1,change);
var inst_47860 = (inst_47858) || (inst_47859);
var state_47897__$1 = (function (){var statearr_47919 = state_47897;
(statearr_47919[(14)] = inst_47856__$1);

(statearr_47919[(10)] = inst_47857__$1);

return statearr_47919;
})();
if(cljs.core.truth_(inst_47860)){
var statearr_47920_47974 = state_47897__$1;
(statearr_47920_47974[(1)] = (23));

} else {
var statearr_47921_47975 = state_47897__$1;
(statearr_47921_47975[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (36))){
var inst_47847 = (state_47897[(12)]);
var inst_47824 = inst_47847;
var state_47897__$1 = (function (){var statearr_47922 = state_47897;
(statearr_47922[(7)] = inst_47824);

return statearr_47922;
})();
var statearr_47923_47976 = state_47897__$1;
(statearr_47923_47976[(2)] = null);

(statearr_47923_47976[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (29))){
var inst_47871 = (state_47897[(9)]);
var state_47897__$1 = state_47897;
var statearr_47924_47977 = state_47897__$1;
(statearr_47924_47977[(2)] = inst_47871);

(statearr_47924_47977[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (6))){
var state_47897__$1 = state_47897;
var statearr_47925_47978 = state_47897__$1;
(statearr_47925_47978[(2)] = false);

(statearr_47925_47978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (28))){
var inst_47867 = (state_47897[(2)]);
var inst_47868 = calc_state.call(null);
var inst_47824 = inst_47868;
var state_47897__$1 = (function (){var statearr_47926 = state_47897;
(statearr_47926[(15)] = inst_47867);

(statearr_47926[(7)] = inst_47824);

return statearr_47926;
})();
var statearr_47927_47979 = state_47897__$1;
(statearr_47927_47979[(2)] = null);

(statearr_47927_47979[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (25))){
var inst_47893 = (state_47897[(2)]);
var state_47897__$1 = state_47897;
var statearr_47928_47980 = state_47897__$1;
(statearr_47928_47980[(2)] = inst_47893);

(statearr_47928_47980[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (34))){
var inst_47891 = (state_47897[(2)]);
var state_47897__$1 = state_47897;
var statearr_47929_47981 = state_47897__$1;
(statearr_47929_47981[(2)] = inst_47891);

(statearr_47929_47981[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (17))){
var state_47897__$1 = state_47897;
var statearr_47930_47982 = state_47897__$1;
(statearr_47930_47982[(2)] = false);

(statearr_47930_47982[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (3))){
var state_47897__$1 = state_47897;
var statearr_47931_47983 = state_47897__$1;
(statearr_47931_47983[(2)] = false);

(statearr_47931_47983[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (12))){
var inst_47895 = (state_47897[(2)]);
var state_47897__$1 = state_47897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47897__$1,inst_47895);
} else {
if((state_val_47898 === (2))){
var inst_47799 = (state_47897[(8)]);
var inst_47804 = inst_47799.cljs$lang$protocol_mask$partition0$;
var inst_47805 = (inst_47804 & (64));
var inst_47806 = inst_47799.cljs$core$ISeq$;
var inst_47807 = (cljs.core.PROTOCOL_SENTINEL === inst_47806);
var inst_47808 = (inst_47805) || (inst_47807);
var state_47897__$1 = state_47897;
if(cljs.core.truth_(inst_47808)){
var statearr_47932_47984 = state_47897__$1;
(statearr_47932_47984[(1)] = (5));

} else {
var statearr_47933_47985 = state_47897__$1;
(statearr_47933_47985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (23))){
var inst_47856 = (state_47897[(14)]);
var inst_47862 = (inst_47856 == null);
var state_47897__$1 = state_47897;
if(cljs.core.truth_(inst_47862)){
var statearr_47934_47986 = state_47897__$1;
(statearr_47934_47986[(1)] = (26));

} else {
var statearr_47935_47987 = state_47897__$1;
(statearr_47935_47987[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (35))){
var inst_47882 = (state_47897[(2)]);
var state_47897__$1 = state_47897;
if(cljs.core.truth_(inst_47882)){
var statearr_47936_47988 = state_47897__$1;
(statearr_47936_47988[(1)] = (36));

} else {
var statearr_47937_47989 = state_47897__$1;
(statearr_47937_47989[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (19))){
var inst_47824 = (state_47897[(7)]);
var inst_47844 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47824);
var state_47897__$1 = state_47897;
var statearr_47938_47990 = state_47897__$1;
(statearr_47938_47990[(2)] = inst_47844);

(statearr_47938_47990[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (11))){
var inst_47824 = (state_47897[(7)]);
var inst_47828 = (inst_47824 == null);
var inst_47829 = cljs.core.not.call(null,inst_47828);
var state_47897__$1 = state_47897;
if(inst_47829){
var statearr_47939_47991 = state_47897__$1;
(statearr_47939_47991[(1)] = (13));

} else {
var statearr_47940_47992 = state_47897__$1;
(statearr_47940_47992[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (9))){
var inst_47799 = (state_47897[(8)]);
var state_47897__$1 = state_47897;
var statearr_47941_47993 = state_47897__$1;
(statearr_47941_47993[(2)] = inst_47799);

(statearr_47941_47993[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (5))){
var state_47897__$1 = state_47897;
var statearr_47942_47994 = state_47897__$1;
(statearr_47942_47994[(2)] = true);

(statearr_47942_47994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (14))){
var state_47897__$1 = state_47897;
var statearr_47943_47995 = state_47897__$1;
(statearr_47943_47995[(2)] = false);

(statearr_47943_47995[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (26))){
var inst_47857 = (state_47897[(10)]);
var inst_47864 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_47857);
var state_47897__$1 = state_47897;
var statearr_47944_47996 = state_47897__$1;
(statearr_47944_47996[(2)] = inst_47864);

(statearr_47944_47996[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (16))){
var state_47897__$1 = state_47897;
var statearr_47945_47997 = state_47897__$1;
(statearr_47945_47997[(2)] = true);

(statearr_47945_47997[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (38))){
var inst_47887 = (state_47897[(2)]);
var state_47897__$1 = state_47897;
var statearr_47946_47998 = state_47897__$1;
(statearr_47946_47998[(2)] = inst_47887);

(statearr_47946_47998[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (30))){
var inst_47857 = (state_47897[(10)]);
var inst_47848 = (state_47897[(11)]);
var inst_47849 = (state_47897[(13)]);
var inst_47874 = cljs.core.empty_QMARK_.call(null,inst_47848);
var inst_47875 = inst_47849.call(null,inst_47857);
var inst_47876 = cljs.core.not.call(null,inst_47875);
var inst_47877 = (inst_47874) && (inst_47876);
var state_47897__$1 = state_47897;
var statearr_47947_47999 = state_47897__$1;
(statearr_47947_47999[(2)] = inst_47877);

(statearr_47947_47999[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (10))){
var inst_47799 = (state_47897[(8)]);
var inst_47820 = (state_47897[(2)]);
var inst_47821 = cljs.core.get.call(null,inst_47820,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47822 = cljs.core.get.call(null,inst_47820,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47823 = cljs.core.get.call(null,inst_47820,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_47824 = inst_47799;
var state_47897__$1 = (function (){var statearr_47948 = state_47897;
(statearr_47948[(16)] = inst_47823);

(statearr_47948[(17)] = inst_47822);

(statearr_47948[(18)] = inst_47821);

(statearr_47948[(7)] = inst_47824);

return statearr_47948;
})();
var statearr_47949_48000 = state_47897__$1;
(statearr_47949_48000[(2)] = null);

(statearr_47949_48000[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (18))){
var inst_47839 = (state_47897[(2)]);
var state_47897__$1 = state_47897;
var statearr_47950_48001 = state_47897__$1;
(statearr_47950_48001[(2)] = inst_47839);

(statearr_47950_48001[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (37))){
var state_47897__$1 = state_47897;
var statearr_47951_48002 = state_47897__$1;
(statearr_47951_48002[(2)] = null);

(statearr_47951_48002[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (8))){
var inst_47799 = (state_47897[(8)]);
var inst_47817 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47799);
var state_47897__$1 = state_47897;
var statearr_47952_48003 = state_47897__$1;
(statearr_47952_48003[(2)] = inst_47817);

(statearr_47952_48003[(1)] = (10));


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
});})(c__46898__auto___47957,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__46808__auto__,c__46898__auto___47957,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__46809__auto__ = null;
var cljs$core$async$mix_$_state_machine__46809__auto____0 = (function (){
var statearr_47953 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47953[(0)] = cljs$core$async$mix_$_state_machine__46809__auto__);

(statearr_47953[(1)] = (1));

return statearr_47953;
});
var cljs$core$async$mix_$_state_machine__46809__auto____1 = (function (state_47897){
while(true){
var ret_value__46810__auto__ = (function (){try{while(true){
var result__46811__auto__ = switch__46808__auto__.call(null,state_47897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46811__auto__;
}
break;
}
}catch (e47954){if((e47954 instanceof Object)){
var ex__46812__auto__ = e47954;
var statearr_47955_48004 = state_47897;
(statearr_47955_48004[(5)] = ex__46812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48005 = state_47897;
state_47897 = G__48005;
continue;
} else {
return ret_value__46810__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__46809__auto__ = function(state_47897){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__46809__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__46809__auto____1.call(this,state_47897);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__46809__auto____0;
cljs$core$async$mix_$_state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__46809__auto____1;
return cljs$core$async$mix_$_state_machine__46809__auto__;
})()
;})(switch__46808__auto__,c__46898__auto___47957,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__46900__auto__ = (function (){var statearr_47956 = f__46899__auto__.call(null);
(statearr_47956[(6)] = c__46898__auto___47957);

return statearr_47956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46900__auto__);
});})(c__46898__auto___47957,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__48007 = arguments.length;
switch (G__48007) {
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
var G__48011 = arguments.length;
switch (G__48011) {
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
return (function (p1__48009_SHARP_){
if(cljs.core.truth_(p1__48009_SHARP_.call(null,topic))){
return p1__48009_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__48009_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__40669__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async48012 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48012 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48013){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48013 = meta48013;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_48014,meta48013__$1){
var self__ = this;
var _48014__$1 = this;
return (new cljs.core.async.t_cljs$core$async48012(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48013__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48012.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_48014){
var self__ = this;
var _48014__$1 = this;
return self__.meta48013;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48012.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48012.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48012.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48012.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48012.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async48012.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48012.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48012.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48013","meta48013",61659784,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48012.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48012.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48012";

cljs.core.async.t_cljs$core$async48012.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__41340__auto__,writer__41341__auto__,opt__41342__auto__){
return cljs.core._write.call(null,writer__41341__auto__,"cljs.core.async/t_cljs$core$async48012");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async48012 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async48012(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48013){
return (new cljs.core.async.t_cljs$core$async48012(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48013));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async48012(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46898__auto___48132 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46898__auto___48132,mults,ensure_mult,p){
return (function (){
var f__46899__auto__ = (function (){var switch__46808__auto__ = ((function (c__46898__auto___48132,mults,ensure_mult,p){
return (function (state_48086){
var state_val_48087 = (state_48086[(1)]);
if((state_val_48087 === (7))){
var inst_48082 = (state_48086[(2)]);
var state_48086__$1 = state_48086;
var statearr_48088_48133 = state_48086__$1;
(statearr_48088_48133[(2)] = inst_48082);

(statearr_48088_48133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (20))){
var state_48086__$1 = state_48086;
var statearr_48089_48134 = state_48086__$1;
(statearr_48089_48134[(2)] = null);

(statearr_48089_48134[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (1))){
var state_48086__$1 = state_48086;
var statearr_48090_48135 = state_48086__$1;
(statearr_48090_48135[(2)] = null);

(statearr_48090_48135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (24))){
var inst_48065 = (state_48086[(7)]);
var inst_48074 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_48065);
var state_48086__$1 = state_48086;
var statearr_48091_48136 = state_48086__$1;
(statearr_48091_48136[(2)] = inst_48074);

(statearr_48091_48136[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (4))){
var inst_48017 = (state_48086[(8)]);
var inst_48017__$1 = (state_48086[(2)]);
var inst_48018 = (inst_48017__$1 == null);
var state_48086__$1 = (function (){var statearr_48092 = state_48086;
(statearr_48092[(8)] = inst_48017__$1);

return statearr_48092;
})();
if(cljs.core.truth_(inst_48018)){
var statearr_48093_48137 = state_48086__$1;
(statearr_48093_48137[(1)] = (5));

} else {
var statearr_48094_48138 = state_48086__$1;
(statearr_48094_48138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (15))){
var inst_48059 = (state_48086[(2)]);
var state_48086__$1 = state_48086;
var statearr_48095_48139 = state_48086__$1;
(statearr_48095_48139[(2)] = inst_48059);

(statearr_48095_48139[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (21))){
var inst_48079 = (state_48086[(2)]);
var state_48086__$1 = (function (){var statearr_48096 = state_48086;
(statearr_48096[(9)] = inst_48079);

return statearr_48096;
})();
var statearr_48097_48140 = state_48086__$1;
(statearr_48097_48140[(2)] = null);

(statearr_48097_48140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (13))){
var inst_48041 = (state_48086[(10)]);
var inst_48043 = cljs.core.chunked_seq_QMARK_.call(null,inst_48041);
var state_48086__$1 = state_48086;
if(inst_48043){
var statearr_48098_48141 = state_48086__$1;
(statearr_48098_48141[(1)] = (16));

} else {
var statearr_48099_48142 = state_48086__$1;
(statearr_48099_48142[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (22))){
var inst_48071 = (state_48086[(2)]);
var state_48086__$1 = state_48086;
if(cljs.core.truth_(inst_48071)){
var statearr_48100_48143 = state_48086__$1;
(statearr_48100_48143[(1)] = (23));

} else {
var statearr_48101_48144 = state_48086__$1;
(statearr_48101_48144[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (6))){
var inst_48017 = (state_48086[(8)]);
var inst_48067 = (state_48086[(11)]);
var inst_48065 = (state_48086[(7)]);
var inst_48065__$1 = topic_fn.call(null,inst_48017);
var inst_48066 = cljs.core.deref.call(null,mults);
var inst_48067__$1 = cljs.core.get.call(null,inst_48066,inst_48065__$1);
var state_48086__$1 = (function (){var statearr_48102 = state_48086;
(statearr_48102[(11)] = inst_48067__$1);

(statearr_48102[(7)] = inst_48065__$1);

return statearr_48102;
})();
if(cljs.core.truth_(inst_48067__$1)){
var statearr_48103_48145 = state_48086__$1;
(statearr_48103_48145[(1)] = (19));

} else {
var statearr_48104_48146 = state_48086__$1;
(statearr_48104_48146[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (25))){
var inst_48076 = (state_48086[(2)]);
var state_48086__$1 = state_48086;
var statearr_48105_48147 = state_48086__$1;
(statearr_48105_48147[(2)] = inst_48076);

(statearr_48105_48147[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (17))){
var inst_48041 = (state_48086[(10)]);
var inst_48050 = cljs.core.first.call(null,inst_48041);
var inst_48051 = cljs.core.async.muxch_STAR_.call(null,inst_48050);
var inst_48052 = cljs.core.async.close_BANG_.call(null,inst_48051);
var inst_48053 = cljs.core.next.call(null,inst_48041);
var inst_48027 = inst_48053;
var inst_48028 = null;
var inst_48029 = (0);
var inst_48030 = (0);
var state_48086__$1 = (function (){var statearr_48106 = state_48086;
(statearr_48106[(12)] = inst_48029);

(statearr_48106[(13)] = inst_48027);

(statearr_48106[(14)] = inst_48030);

(statearr_48106[(15)] = inst_48028);

(statearr_48106[(16)] = inst_48052);

return statearr_48106;
})();
var statearr_48107_48148 = state_48086__$1;
(statearr_48107_48148[(2)] = null);

(statearr_48107_48148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (3))){
var inst_48084 = (state_48086[(2)]);
var state_48086__$1 = state_48086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48086__$1,inst_48084);
} else {
if((state_val_48087 === (12))){
var inst_48061 = (state_48086[(2)]);
var state_48086__$1 = state_48086;
var statearr_48108_48149 = state_48086__$1;
(statearr_48108_48149[(2)] = inst_48061);

(statearr_48108_48149[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (2))){
var state_48086__$1 = state_48086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48086__$1,(4),ch);
} else {
if((state_val_48087 === (23))){
var state_48086__$1 = state_48086;
var statearr_48109_48150 = state_48086__$1;
(statearr_48109_48150[(2)] = null);

(statearr_48109_48150[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (19))){
var inst_48017 = (state_48086[(8)]);
var inst_48067 = (state_48086[(11)]);
var inst_48069 = cljs.core.async.muxch_STAR_.call(null,inst_48067);
var state_48086__$1 = state_48086;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48086__$1,(22),inst_48069,inst_48017);
} else {
if((state_val_48087 === (11))){
var inst_48027 = (state_48086[(13)]);
var inst_48041 = (state_48086[(10)]);
var inst_48041__$1 = cljs.core.seq.call(null,inst_48027);
var state_48086__$1 = (function (){var statearr_48110 = state_48086;
(statearr_48110[(10)] = inst_48041__$1);

return statearr_48110;
})();
if(inst_48041__$1){
var statearr_48111_48151 = state_48086__$1;
(statearr_48111_48151[(1)] = (13));

} else {
var statearr_48112_48152 = state_48086__$1;
(statearr_48112_48152[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (9))){
var inst_48063 = (state_48086[(2)]);
var state_48086__$1 = state_48086;
var statearr_48113_48153 = state_48086__$1;
(statearr_48113_48153[(2)] = inst_48063);

(statearr_48113_48153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (5))){
var inst_48024 = cljs.core.deref.call(null,mults);
var inst_48025 = cljs.core.vals.call(null,inst_48024);
var inst_48026 = cljs.core.seq.call(null,inst_48025);
var inst_48027 = inst_48026;
var inst_48028 = null;
var inst_48029 = (0);
var inst_48030 = (0);
var state_48086__$1 = (function (){var statearr_48114 = state_48086;
(statearr_48114[(12)] = inst_48029);

(statearr_48114[(13)] = inst_48027);

(statearr_48114[(14)] = inst_48030);

(statearr_48114[(15)] = inst_48028);

return statearr_48114;
})();
var statearr_48115_48154 = state_48086__$1;
(statearr_48115_48154[(2)] = null);

(statearr_48115_48154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (14))){
var state_48086__$1 = state_48086;
var statearr_48119_48155 = state_48086__$1;
(statearr_48119_48155[(2)] = null);

(statearr_48119_48155[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (16))){
var inst_48041 = (state_48086[(10)]);
var inst_48045 = cljs.core.chunk_first.call(null,inst_48041);
var inst_48046 = cljs.core.chunk_rest.call(null,inst_48041);
var inst_48047 = cljs.core.count.call(null,inst_48045);
var inst_48027 = inst_48046;
var inst_48028 = inst_48045;
var inst_48029 = inst_48047;
var inst_48030 = (0);
var state_48086__$1 = (function (){var statearr_48120 = state_48086;
(statearr_48120[(12)] = inst_48029);

(statearr_48120[(13)] = inst_48027);

(statearr_48120[(14)] = inst_48030);

(statearr_48120[(15)] = inst_48028);

return statearr_48120;
})();
var statearr_48121_48156 = state_48086__$1;
(statearr_48121_48156[(2)] = null);

(statearr_48121_48156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (10))){
var inst_48029 = (state_48086[(12)]);
var inst_48027 = (state_48086[(13)]);
var inst_48030 = (state_48086[(14)]);
var inst_48028 = (state_48086[(15)]);
var inst_48035 = cljs.core._nth.call(null,inst_48028,inst_48030);
var inst_48036 = cljs.core.async.muxch_STAR_.call(null,inst_48035);
var inst_48037 = cljs.core.async.close_BANG_.call(null,inst_48036);
var inst_48038 = (inst_48030 + (1));
var tmp48116 = inst_48029;
var tmp48117 = inst_48027;
var tmp48118 = inst_48028;
var inst_48027__$1 = tmp48117;
var inst_48028__$1 = tmp48118;
var inst_48029__$1 = tmp48116;
var inst_48030__$1 = inst_48038;
var state_48086__$1 = (function (){var statearr_48122 = state_48086;
(statearr_48122[(12)] = inst_48029__$1);

(statearr_48122[(13)] = inst_48027__$1);

(statearr_48122[(14)] = inst_48030__$1);

(statearr_48122[(15)] = inst_48028__$1);

(statearr_48122[(17)] = inst_48037);

return statearr_48122;
})();
var statearr_48123_48157 = state_48086__$1;
(statearr_48123_48157[(2)] = null);

(statearr_48123_48157[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (18))){
var inst_48056 = (state_48086[(2)]);
var state_48086__$1 = state_48086;
var statearr_48124_48158 = state_48086__$1;
(statearr_48124_48158[(2)] = inst_48056);

(statearr_48124_48158[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48087 === (8))){
var inst_48029 = (state_48086[(12)]);
var inst_48030 = (state_48086[(14)]);
var inst_48032 = (inst_48030 < inst_48029);
var inst_48033 = inst_48032;
var state_48086__$1 = state_48086;
if(cljs.core.truth_(inst_48033)){
var statearr_48125_48159 = state_48086__$1;
(statearr_48125_48159[(1)] = (10));

} else {
var statearr_48126_48160 = state_48086__$1;
(statearr_48126_48160[(1)] = (11));

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
});})(c__46898__auto___48132,mults,ensure_mult,p))
;
return ((function (switch__46808__auto__,c__46898__auto___48132,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__46809__auto__ = null;
var cljs$core$async$state_machine__46809__auto____0 = (function (){
var statearr_48127 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48127[(0)] = cljs$core$async$state_machine__46809__auto__);

(statearr_48127[(1)] = (1));

return statearr_48127;
});
var cljs$core$async$state_machine__46809__auto____1 = (function (state_48086){
while(true){
var ret_value__46810__auto__ = (function (){try{while(true){
var result__46811__auto__ = switch__46808__auto__.call(null,state_48086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46811__auto__;
}
break;
}
}catch (e48128){if((e48128 instanceof Object)){
var ex__46812__auto__ = e48128;
var statearr_48129_48161 = state_48086;
(statearr_48129_48161[(5)] = ex__46812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48162 = state_48086;
state_48086 = G__48162;
continue;
} else {
return ret_value__46810__auto__;
}
break;
}
});
cljs$core$async$state_machine__46809__auto__ = function(state_48086){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46809__auto____1.call(this,state_48086);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46809__auto____0;
cljs$core$async$state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46809__auto____1;
return cljs$core$async$state_machine__46809__auto__;
})()
;})(switch__46808__auto__,c__46898__auto___48132,mults,ensure_mult,p))
})();
var state__46900__auto__ = (function (){var statearr_48130 = f__46899__auto__.call(null);
(statearr_48130[(6)] = c__46898__auto___48132);

return statearr_48130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46900__auto__);
});})(c__46898__auto___48132,mults,ensure_mult,p))
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
var G__48164 = arguments.length;
switch (G__48164) {
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
var G__48167 = arguments.length;
switch (G__48167) {
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
var G__48170 = arguments.length;
switch (G__48170) {
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
var c__46898__auto___48237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46898__auto___48237,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__46899__auto__ = (function (){var switch__46808__auto__ = ((function (c__46898__auto___48237,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_48209){
var state_val_48210 = (state_48209[(1)]);
if((state_val_48210 === (7))){
var state_48209__$1 = state_48209;
var statearr_48211_48238 = state_48209__$1;
(statearr_48211_48238[(2)] = null);

(statearr_48211_48238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (1))){
var state_48209__$1 = state_48209;
var statearr_48212_48239 = state_48209__$1;
(statearr_48212_48239[(2)] = null);

(statearr_48212_48239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (4))){
var inst_48173 = (state_48209[(7)]);
var inst_48175 = (inst_48173 < cnt);
var state_48209__$1 = state_48209;
if(cljs.core.truth_(inst_48175)){
var statearr_48213_48240 = state_48209__$1;
(statearr_48213_48240[(1)] = (6));

} else {
var statearr_48214_48241 = state_48209__$1;
(statearr_48214_48241[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (15))){
var inst_48205 = (state_48209[(2)]);
var state_48209__$1 = state_48209;
var statearr_48215_48242 = state_48209__$1;
(statearr_48215_48242[(2)] = inst_48205);

(statearr_48215_48242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (13))){
var inst_48198 = cljs.core.async.close_BANG_.call(null,out);
var state_48209__$1 = state_48209;
var statearr_48216_48243 = state_48209__$1;
(statearr_48216_48243[(2)] = inst_48198);

(statearr_48216_48243[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (6))){
var state_48209__$1 = state_48209;
var statearr_48217_48244 = state_48209__$1;
(statearr_48217_48244[(2)] = null);

(statearr_48217_48244[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (3))){
var inst_48207 = (state_48209[(2)]);
var state_48209__$1 = state_48209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48209__$1,inst_48207);
} else {
if((state_val_48210 === (12))){
var inst_48195 = (state_48209[(8)]);
var inst_48195__$1 = (state_48209[(2)]);
var inst_48196 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_48195__$1);
var state_48209__$1 = (function (){var statearr_48218 = state_48209;
(statearr_48218[(8)] = inst_48195__$1);

return statearr_48218;
})();
if(cljs.core.truth_(inst_48196)){
var statearr_48219_48245 = state_48209__$1;
(statearr_48219_48245[(1)] = (13));

} else {
var statearr_48220_48246 = state_48209__$1;
(statearr_48220_48246[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (2))){
var inst_48172 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_48173 = (0);
var state_48209__$1 = (function (){var statearr_48221 = state_48209;
(statearr_48221[(7)] = inst_48173);

(statearr_48221[(9)] = inst_48172);

return statearr_48221;
})();
var statearr_48222_48247 = state_48209__$1;
(statearr_48222_48247[(2)] = null);

(statearr_48222_48247[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (11))){
var inst_48173 = (state_48209[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48209,(10),Object,null,(9));
var inst_48182 = chs__$1.call(null,inst_48173);
var inst_48183 = done.call(null,inst_48173);
var inst_48184 = cljs.core.async.take_BANG_.call(null,inst_48182,inst_48183);
var state_48209__$1 = state_48209;
var statearr_48223_48248 = state_48209__$1;
(statearr_48223_48248[(2)] = inst_48184);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48209__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (9))){
var inst_48173 = (state_48209[(7)]);
var inst_48186 = (state_48209[(2)]);
var inst_48187 = (inst_48173 + (1));
var inst_48173__$1 = inst_48187;
var state_48209__$1 = (function (){var statearr_48224 = state_48209;
(statearr_48224[(10)] = inst_48186);

(statearr_48224[(7)] = inst_48173__$1);

return statearr_48224;
})();
var statearr_48225_48249 = state_48209__$1;
(statearr_48225_48249[(2)] = null);

(statearr_48225_48249[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (5))){
var inst_48193 = (state_48209[(2)]);
var state_48209__$1 = (function (){var statearr_48226 = state_48209;
(statearr_48226[(11)] = inst_48193);

return statearr_48226;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48209__$1,(12),dchan);
} else {
if((state_val_48210 === (14))){
var inst_48195 = (state_48209[(8)]);
var inst_48200 = cljs.core.apply.call(null,f,inst_48195);
var state_48209__$1 = state_48209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48209__$1,(16),out,inst_48200);
} else {
if((state_val_48210 === (16))){
var inst_48202 = (state_48209[(2)]);
var state_48209__$1 = (function (){var statearr_48227 = state_48209;
(statearr_48227[(12)] = inst_48202);

return statearr_48227;
})();
var statearr_48228_48250 = state_48209__$1;
(statearr_48228_48250[(2)] = null);

(statearr_48228_48250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (10))){
var inst_48177 = (state_48209[(2)]);
var inst_48178 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_48209__$1 = (function (){var statearr_48229 = state_48209;
(statearr_48229[(13)] = inst_48177);

return statearr_48229;
})();
var statearr_48230_48251 = state_48209__$1;
(statearr_48230_48251[(2)] = inst_48178);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48209__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (8))){
var inst_48191 = (state_48209[(2)]);
var state_48209__$1 = state_48209;
var statearr_48231_48252 = state_48209__$1;
(statearr_48231_48252[(2)] = inst_48191);

(statearr_48231_48252[(1)] = (5));


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
});})(c__46898__auto___48237,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__46808__auto__,c__46898__auto___48237,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__46809__auto__ = null;
var cljs$core$async$state_machine__46809__auto____0 = (function (){
var statearr_48232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48232[(0)] = cljs$core$async$state_machine__46809__auto__);

(statearr_48232[(1)] = (1));

return statearr_48232;
});
var cljs$core$async$state_machine__46809__auto____1 = (function (state_48209){
while(true){
var ret_value__46810__auto__ = (function (){try{while(true){
var result__46811__auto__ = switch__46808__auto__.call(null,state_48209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46811__auto__;
}
break;
}
}catch (e48233){if((e48233 instanceof Object)){
var ex__46812__auto__ = e48233;
var statearr_48234_48253 = state_48209;
(statearr_48234_48253[(5)] = ex__46812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48254 = state_48209;
state_48209 = G__48254;
continue;
} else {
return ret_value__46810__auto__;
}
break;
}
});
cljs$core$async$state_machine__46809__auto__ = function(state_48209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46809__auto____1.call(this,state_48209);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46809__auto____0;
cljs$core$async$state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46809__auto____1;
return cljs$core$async$state_machine__46809__auto__;
})()
;})(switch__46808__auto__,c__46898__auto___48237,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__46900__auto__ = (function (){var statearr_48235 = f__46899__auto__.call(null);
(statearr_48235[(6)] = c__46898__auto___48237);

return statearr_48235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46900__auto__);
});})(c__46898__auto___48237,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__48257 = arguments.length;
switch (G__48257) {
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
var c__46898__auto___48311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46898__auto___48311,out){
return (function (){
var f__46899__auto__ = (function (){var switch__46808__auto__ = ((function (c__46898__auto___48311,out){
return (function (state_48289){
var state_val_48290 = (state_48289[(1)]);
if((state_val_48290 === (7))){
var inst_48268 = (state_48289[(7)]);
var inst_48269 = (state_48289[(8)]);
var inst_48268__$1 = (state_48289[(2)]);
var inst_48269__$1 = cljs.core.nth.call(null,inst_48268__$1,(0),null);
var inst_48270 = cljs.core.nth.call(null,inst_48268__$1,(1),null);
var inst_48271 = (inst_48269__$1 == null);
var state_48289__$1 = (function (){var statearr_48291 = state_48289;
(statearr_48291[(7)] = inst_48268__$1);

(statearr_48291[(9)] = inst_48270);

(statearr_48291[(8)] = inst_48269__$1);

return statearr_48291;
})();
if(cljs.core.truth_(inst_48271)){
var statearr_48292_48312 = state_48289__$1;
(statearr_48292_48312[(1)] = (8));

} else {
var statearr_48293_48313 = state_48289__$1;
(statearr_48293_48313[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (1))){
var inst_48258 = cljs.core.vec.call(null,chs);
var inst_48259 = inst_48258;
var state_48289__$1 = (function (){var statearr_48294 = state_48289;
(statearr_48294[(10)] = inst_48259);

return statearr_48294;
})();
var statearr_48295_48314 = state_48289__$1;
(statearr_48295_48314[(2)] = null);

(statearr_48295_48314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (4))){
var inst_48259 = (state_48289[(10)]);
var state_48289__$1 = state_48289;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48289__$1,(7),inst_48259);
} else {
if((state_val_48290 === (6))){
var inst_48285 = (state_48289[(2)]);
var state_48289__$1 = state_48289;
var statearr_48296_48315 = state_48289__$1;
(statearr_48296_48315[(2)] = inst_48285);

(statearr_48296_48315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (3))){
var inst_48287 = (state_48289[(2)]);
var state_48289__$1 = state_48289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48289__$1,inst_48287);
} else {
if((state_val_48290 === (2))){
var inst_48259 = (state_48289[(10)]);
var inst_48261 = cljs.core.count.call(null,inst_48259);
var inst_48262 = (inst_48261 > (0));
var state_48289__$1 = state_48289;
if(cljs.core.truth_(inst_48262)){
var statearr_48298_48316 = state_48289__$1;
(statearr_48298_48316[(1)] = (4));

} else {
var statearr_48299_48317 = state_48289__$1;
(statearr_48299_48317[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (11))){
var inst_48259 = (state_48289[(10)]);
var inst_48278 = (state_48289[(2)]);
var tmp48297 = inst_48259;
var inst_48259__$1 = tmp48297;
var state_48289__$1 = (function (){var statearr_48300 = state_48289;
(statearr_48300[(11)] = inst_48278);

(statearr_48300[(10)] = inst_48259__$1);

return statearr_48300;
})();
var statearr_48301_48318 = state_48289__$1;
(statearr_48301_48318[(2)] = null);

(statearr_48301_48318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (9))){
var inst_48269 = (state_48289[(8)]);
var state_48289__$1 = state_48289;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48289__$1,(11),out,inst_48269);
} else {
if((state_val_48290 === (5))){
var inst_48283 = cljs.core.async.close_BANG_.call(null,out);
var state_48289__$1 = state_48289;
var statearr_48302_48319 = state_48289__$1;
(statearr_48302_48319[(2)] = inst_48283);

(statearr_48302_48319[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (10))){
var inst_48281 = (state_48289[(2)]);
var state_48289__$1 = state_48289;
var statearr_48303_48320 = state_48289__$1;
(statearr_48303_48320[(2)] = inst_48281);

(statearr_48303_48320[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (8))){
var inst_48268 = (state_48289[(7)]);
var inst_48270 = (state_48289[(9)]);
var inst_48269 = (state_48289[(8)]);
var inst_48259 = (state_48289[(10)]);
var inst_48273 = (function (){var cs = inst_48259;
var vec__48264 = inst_48268;
var v = inst_48269;
var c = inst_48270;
return ((function (cs,vec__48264,v,c,inst_48268,inst_48270,inst_48269,inst_48259,state_val_48290,c__46898__auto___48311,out){
return (function (p1__48255_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__48255_SHARP_);
});
;})(cs,vec__48264,v,c,inst_48268,inst_48270,inst_48269,inst_48259,state_val_48290,c__46898__auto___48311,out))
})();
var inst_48274 = cljs.core.filterv.call(null,inst_48273,inst_48259);
var inst_48259__$1 = inst_48274;
var state_48289__$1 = (function (){var statearr_48304 = state_48289;
(statearr_48304[(10)] = inst_48259__$1);

return statearr_48304;
})();
var statearr_48305_48321 = state_48289__$1;
(statearr_48305_48321[(2)] = null);

(statearr_48305_48321[(1)] = (2));


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
});})(c__46898__auto___48311,out))
;
return ((function (switch__46808__auto__,c__46898__auto___48311,out){
return (function() {
var cljs$core$async$state_machine__46809__auto__ = null;
var cljs$core$async$state_machine__46809__auto____0 = (function (){
var statearr_48306 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48306[(0)] = cljs$core$async$state_machine__46809__auto__);

(statearr_48306[(1)] = (1));

return statearr_48306;
});
var cljs$core$async$state_machine__46809__auto____1 = (function (state_48289){
while(true){
var ret_value__46810__auto__ = (function (){try{while(true){
var result__46811__auto__ = switch__46808__auto__.call(null,state_48289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46811__auto__;
}
break;
}
}catch (e48307){if((e48307 instanceof Object)){
var ex__46812__auto__ = e48307;
var statearr_48308_48322 = state_48289;
(statearr_48308_48322[(5)] = ex__46812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48323 = state_48289;
state_48289 = G__48323;
continue;
} else {
return ret_value__46810__auto__;
}
break;
}
});
cljs$core$async$state_machine__46809__auto__ = function(state_48289){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46809__auto____1.call(this,state_48289);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46809__auto____0;
cljs$core$async$state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46809__auto____1;
return cljs$core$async$state_machine__46809__auto__;
})()
;})(switch__46808__auto__,c__46898__auto___48311,out))
})();
var state__46900__auto__ = (function (){var statearr_48309 = f__46899__auto__.call(null);
(statearr_48309[(6)] = c__46898__auto___48311);

return statearr_48309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46900__auto__);
});})(c__46898__auto___48311,out))
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
var G__48325 = arguments.length;
switch (G__48325) {
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
var c__46898__auto___48370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46898__auto___48370,out){
return (function (){
var f__46899__auto__ = (function (){var switch__46808__auto__ = ((function (c__46898__auto___48370,out){
return (function (state_48349){
var state_val_48350 = (state_48349[(1)]);
if((state_val_48350 === (7))){
var inst_48331 = (state_48349[(7)]);
var inst_48331__$1 = (state_48349[(2)]);
var inst_48332 = (inst_48331__$1 == null);
var inst_48333 = cljs.core.not.call(null,inst_48332);
var state_48349__$1 = (function (){var statearr_48351 = state_48349;
(statearr_48351[(7)] = inst_48331__$1);

return statearr_48351;
})();
if(inst_48333){
var statearr_48352_48371 = state_48349__$1;
(statearr_48352_48371[(1)] = (8));

} else {
var statearr_48353_48372 = state_48349__$1;
(statearr_48353_48372[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48350 === (1))){
var inst_48326 = (0);
var state_48349__$1 = (function (){var statearr_48354 = state_48349;
(statearr_48354[(8)] = inst_48326);

return statearr_48354;
})();
var statearr_48355_48373 = state_48349__$1;
(statearr_48355_48373[(2)] = null);

(statearr_48355_48373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48350 === (4))){
var state_48349__$1 = state_48349;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48349__$1,(7),ch);
} else {
if((state_val_48350 === (6))){
var inst_48344 = (state_48349[(2)]);
var state_48349__$1 = state_48349;
var statearr_48356_48374 = state_48349__$1;
(statearr_48356_48374[(2)] = inst_48344);

(statearr_48356_48374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48350 === (3))){
var inst_48346 = (state_48349[(2)]);
var inst_48347 = cljs.core.async.close_BANG_.call(null,out);
var state_48349__$1 = (function (){var statearr_48357 = state_48349;
(statearr_48357[(9)] = inst_48346);

return statearr_48357;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48349__$1,inst_48347);
} else {
if((state_val_48350 === (2))){
var inst_48326 = (state_48349[(8)]);
var inst_48328 = (inst_48326 < n);
var state_48349__$1 = state_48349;
if(cljs.core.truth_(inst_48328)){
var statearr_48358_48375 = state_48349__$1;
(statearr_48358_48375[(1)] = (4));

} else {
var statearr_48359_48376 = state_48349__$1;
(statearr_48359_48376[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48350 === (11))){
var inst_48326 = (state_48349[(8)]);
var inst_48336 = (state_48349[(2)]);
var inst_48337 = (inst_48326 + (1));
var inst_48326__$1 = inst_48337;
var state_48349__$1 = (function (){var statearr_48360 = state_48349;
(statearr_48360[(8)] = inst_48326__$1);

(statearr_48360[(10)] = inst_48336);

return statearr_48360;
})();
var statearr_48361_48377 = state_48349__$1;
(statearr_48361_48377[(2)] = null);

(statearr_48361_48377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48350 === (9))){
var state_48349__$1 = state_48349;
var statearr_48362_48378 = state_48349__$1;
(statearr_48362_48378[(2)] = null);

(statearr_48362_48378[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48350 === (5))){
var state_48349__$1 = state_48349;
var statearr_48363_48379 = state_48349__$1;
(statearr_48363_48379[(2)] = null);

(statearr_48363_48379[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48350 === (10))){
var inst_48341 = (state_48349[(2)]);
var state_48349__$1 = state_48349;
var statearr_48364_48380 = state_48349__$1;
(statearr_48364_48380[(2)] = inst_48341);

(statearr_48364_48380[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48350 === (8))){
var inst_48331 = (state_48349[(7)]);
var state_48349__$1 = state_48349;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48349__$1,(11),out,inst_48331);
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
});})(c__46898__auto___48370,out))
;
return ((function (switch__46808__auto__,c__46898__auto___48370,out){
return (function() {
var cljs$core$async$state_machine__46809__auto__ = null;
var cljs$core$async$state_machine__46809__auto____0 = (function (){
var statearr_48365 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48365[(0)] = cljs$core$async$state_machine__46809__auto__);

(statearr_48365[(1)] = (1));

return statearr_48365;
});
var cljs$core$async$state_machine__46809__auto____1 = (function (state_48349){
while(true){
var ret_value__46810__auto__ = (function (){try{while(true){
var result__46811__auto__ = switch__46808__auto__.call(null,state_48349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46811__auto__;
}
break;
}
}catch (e48366){if((e48366 instanceof Object)){
var ex__46812__auto__ = e48366;
var statearr_48367_48381 = state_48349;
(statearr_48367_48381[(5)] = ex__46812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48382 = state_48349;
state_48349 = G__48382;
continue;
} else {
return ret_value__46810__auto__;
}
break;
}
});
cljs$core$async$state_machine__46809__auto__ = function(state_48349){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46809__auto____1.call(this,state_48349);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46809__auto____0;
cljs$core$async$state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46809__auto____1;
return cljs$core$async$state_machine__46809__auto__;
})()
;})(switch__46808__auto__,c__46898__auto___48370,out))
})();
var state__46900__auto__ = (function (){var statearr_48368 = f__46899__auto__.call(null);
(statearr_48368[(6)] = c__46898__auto___48370);

return statearr_48368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46900__auto__);
});})(c__46898__auto___48370,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48384 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48384 = (function (f,ch,meta48385){
this.f = f;
this.ch = ch;
this.meta48385 = meta48385;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48386,meta48385__$1){
var self__ = this;
var _48386__$1 = this;
return (new cljs.core.async.t_cljs$core$async48384(self__.f,self__.ch,meta48385__$1));
});

cljs.core.async.t_cljs$core$async48384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48386){
var self__ = this;
var _48386__$1 = this;
return self__.meta48385;
});

cljs.core.async.t_cljs$core$async48384.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48384.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48384.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48384.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48384.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async48387 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48387 = (function (f,ch,meta48385,_,fn1,meta48388){
this.f = f;
this.ch = ch;
this.meta48385 = meta48385;
this._ = _;
this.fn1 = fn1;
this.meta48388 = meta48388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_48389,meta48388__$1){
var self__ = this;
var _48389__$1 = this;
return (new cljs.core.async.t_cljs$core$async48387(self__.f,self__.ch,self__.meta48385,self__._,self__.fn1,meta48388__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async48387.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_48389){
var self__ = this;
var _48389__$1 = this;
return self__.meta48388;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48387.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48387.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48387.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48387.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__48383_SHARP_){
return f1.call(null,(((p1__48383_SHARP_ == null))?null:self__.f.call(null,p1__48383_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async48387.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48385","meta48385",-1838644706,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48384","cljs.core.async/t_cljs$core$async48384",1663718727,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48388","meta48388",571434327,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48387.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48387";

cljs.core.async.t_cljs$core$async48387.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__41340__auto__,writer__41341__auto__,opt__41342__auto__){
return cljs.core._write.call(null,writer__41341__auto__,"cljs.core.async/t_cljs$core$async48387");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async48387 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48387(f__$1,ch__$1,meta48385__$1,___$2,fn1__$1,meta48388){
return (new cljs.core.async.t_cljs$core$async48387(f__$1,ch__$1,meta48385__$1,___$2,fn1__$1,meta48388));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async48387(self__.f,self__.ch,self__.meta48385,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async48384.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48384.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async48384.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48385","meta48385",-1838644706,null)], null);
});

cljs.core.async.t_cljs$core$async48384.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48384.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48384";

cljs.core.async.t_cljs$core$async48384.cljs$lang$ctorPrWriter = (function (this__41340__auto__,writer__41341__auto__,opt__41342__auto__){
return cljs.core._write.call(null,writer__41341__auto__,"cljs.core.async/t_cljs$core$async48384");
});

cljs.core.async.__GT_t_cljs$core$async48384 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48384(f__$1,ch__$1,meta48385){
return (new cljs.core.async.t_cljs$core$async48384(f__$1,ch__$1,meta48385));
});

}

return (new cljs.core.async.t_cljs$core$async48384(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48390 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48390 = (function (f,ch,meta48391){
this.f = f;
this.ch = ch;
this.meta48391 = meta48391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48392,meta48391__$1){
var self__ = this;
var _48392__$1 = this;
return (new cljs.core.async.t_cljs$core$async48390(self__.f,self__.ch,meta48391__$1));
});

cljs.core.async.t_cljs$core$async48390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48392){
var self__ = this;
var _48392__$1 = this;
return self__.meta48391;
});

cljs.core.async.t_cljs$core$async48390.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48390.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48390.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48390.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48390.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48390.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async48390.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48391","meta48391",-1155643946,null)], null);
});

cljs.core.async.t_cljs$core$async48390.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48390.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48390";

cljs.core.async.t_cljs$core$async48390.cljs$lang$ctorPrWriter = (function (this__41340__auto__,writer__41341__auto__,opt__41342__auto__){
return cljs.core._write.call(null,writer__41341__auto__,"cljs.core.async/t_cljs$core$async48390");
});

cljs.core.async.__GT_t_cljs$core$async48390 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async48390(f__$1,ch__$1,meta48391){
return (new cljs.core.async.t_cljs$core$async48390(f__$1,ch__$1,meta48391));
});

}

return (new cljs.core.async.t_cljs$core$async48390(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async48393 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48393 = (function (p,ch,meta48394){
this.p = p;
this.ch = ch;
this.meta48394 = meta48394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48395,meta48394__$1){
var self__ = this;
var _48395__$1 = this;
return (new cljs.core.async.t_cljs$core$async48393(self__.p,self__.ch,meta48394__$1));
});

cljs.core.async.t_cljs$core$async48393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48395){
var self__ = this;
var _48395__$1 = this;
return self__.meta48394;
});

cljs.core.async.t_cljs$core$async48393.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48393.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48393.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48393.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48393.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48393.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48393.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async48393.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48394","meta48394",-547585823,null)], null);
});

cljs.core.async.t_cljs$core$async48393.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48393.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48393";

cljs.core.async.t_cljs$core$async48393.cljs$lang$ctorPrWriter = (function (this__41340__auto__,writer__41341__auto__,opt__41342__auto__){
return cljs.core._write.call(null,writer__41341__auto__,"cljs.core.async/t_cljs$core$async48393");
});

cljs.core.async.__GT_t_cljs$core$async48393 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async48393(p__$1,ch__$1,meta48394){
return (new cljs.core.async.t_cljs$core$async48393(p__$1,ch__$1,meta48394));
});

}

return (new cljs.core.async.t_cljs$core$async48393(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__48397 = arguments.length;
switch (G__48397) {
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
var c__46898__auto___48437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46898__auto___48437,out){
return (function (){
var f__46899__auto__ = (function (){var switch__46808__auto__ = ((function (c__46898__auto___48437,out){
return (function (state_48418){
var state_val_48419 = (state_48418[(1)]);
if((state_val_48419 === (7))){
var inst_48414 = (state_48418[(2)]);
var state_48418__$1 = state_48418;
var statearr_48420_48438 = state_48418__$1;
(statearr_48420_48438[(2)] = inst_48414);

(statearr_48420_48438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48419 === (1))){
var state_48418__$1 = state_48418;
var statearr_48421_48439 = state_48418__$1;
(statearr_48421_48439[(2)] = null);

(statearr_48421_48439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48419 === (4))){
var inst_48400 = (state_48418[(7)]);
var inst_48400__$1 = (state_48418[(2)]);
var inst_48401 = (inst_48400__$1 == null);
var state_48418__$1 = (function (){var statearr_48422 = state_48418;
(statearr_48422[(7)] = inst_48400__$1);

return statearr_48422;
})();
if(cljs.core.truth_(inst_48401)){
var statearr_48423_48440 = state_48418__$1;
(statearr_48423_48440[(1)] = (5));

} else {
var statearr_48424_48441 = state_48418__$1;
(statearr_48424_48441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48419 === (6))){
var inst_48400 = (state_48418[(7)]);
var inst_48405 = p.call(null,inst_48400);
var state_48418__$1 = state_48418;
if(cljs.core.truth_(inst_48405)){
var statearr_48425_48442 = state_48418__$1;
(statearr_48425_48442[(1)] = (8));

} else {
var statearr_48426_48443 = state_48418__$1;
(statearr_48426_48443[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48419 === (3))){
var inst_48416 = (state_48418[(2)]);
var state_48418__$1 = state_48418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48418__$1,inst_48416);
} else {
if((state_val_48419 === (2))){
var state_48418__$1 = state_48418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48418__$1,(4),ch);
} else {
if((state_val_48419 === (11))){
var inst_48408 = (state_48418[(2)]);
var state_48418__$1 = state_48418;
var statearr_48427_48444 = state_48418__$1;
(statearr_48427_48444[(2)] = inst_48408);

(statearr_48427_48444[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48419 === (9))){
var state_48418__$1 = state_48418;
var statearr_48428_48445 = state_48418__$1;
(statearr_48428_48445[(2)] = null);

(statearr_48428_48445[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48419 === (5))){
var inst_48403 = cljs.core.async.close_BANG_.call(null,out);
var state_48418__$1 = state_48418;
var statearr_48429_48446 = state_48418__$1;
(statearr_48429_48446[(2)] = inst_48403);

(statearr_48429_48446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48419 === (10))){
var inst_48411 = (state_48418[(2)]);
var state_48418__$1 = (function (){var statearr_48430 = state_48418;
(statearr_48430[(8)] = inst_48411);

return statearr_48430;
})();
var statearr_48431_48447 = state_48418__$1;
(statearr_48431_48447[(2)] = null);

(statearr_48431_48447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48419 === (8))){
var inst_48400 = (state_48418[(7)]);
var state_48418__$1 = state_48418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48418__$1,(11),out,inst_48400);
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
});})(c__46898__auto___48437,out))
;
return ((function (switch__46808__auto__,c__46898__auto___48437,out){
return (function() {
var cljs$core$async$state_machine__46809__auto__ = null;
var cljs$core$async$state_machine__46809__auto____0 = (function (){
var statearr_48432 = [null,null,null,null,null,null,null,null,null];
(statearr_48432[(0)] = cljs$core$async$state_machine__46809__auto__);

(statearr_48432[(1)] = (1));

return statearr_48432;
});
var cljs$core$async$state_machine__46809__auto____1 = (function (state_48418){
while(true){
var ret_value__46810__auto__ = (function (){try{while(true){
var result__46811__auto__ = switch__46808__auto__.call(null,state_48418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46811__auto__;
}
break;
}
}catch (e48433){if((e48433 instanceof Object)){
var ex__46812__auto__ = e48433;
var statearr_48434_48448 = state_48418;
(statearr_48434_48448[(5)] = ex__46812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48449 = state_48418;
state_48418 = G__48449;
continue;
} else {
return ret_value__46810__auto__;
}
break;
}
});
cljs$core$async$state_machine__46809__auto__ = function(state_48418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46809__auto____1.call(this,state_48418);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46809__auto____0;
cljs$core$async$state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46809__auto____1;
return cljs$core$async$state_machine__46809__auto__;
})()
;})(switch__46808__auto__,c__46898__auto___48437,out))
})();
var state__46900__auto__ = (function (){var statearr_48435 = f__46899__auto__.call(null);
(statearr_48435[(6)] = c__46898__auto___48437);

return statearr_48435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46900__auto__);
});})(c__46898__auto___48437,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__48451 = arguments.length;
switch (G__48451) {
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
var c__46898__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46898__auto__){
return (function (){
var f__46899__auto__ = (function (){var switch__46808__auto__ = ((function (c__46898__auto__){
return (function (state_48514){
var state_val_48515 = (state_48514[(1)]);
if((state_val_48515 === (7))){
var inst_48510 = (state_48514[(2)]);
var state_48514__$1 = state_48514;
var statearr_48516_48554 = state_48514__$1;
(statearr_48516_48554[(2)] = inst_48510);

(statearr_48516_48554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (20))){
var inst_48480 = (state_48514[(7)]);
var inst_48491 = (state_48514[(2)]);
var inst_48492 = cljs.core.next.call(null,inst_48480);
var inst_48466 = inst_48492;
var inst_48467 = null;
var inst_48468 = (0);
var inst_48469 = (0);
var state_48514__$1 = (function (){var statearr_48517 = state_48514;
(statearr_48517[(8)] = inst_48467);

(statearr_48517[(9)] = inst_48491);

(statearr_48517[(10)] = inst_48469);

(statearr_48517[(11)] = inst_48466);

(statearr_48517[(12)] = inst_48468);

return statearr_48517;
})();
var statearr_48518_48555 = state_48514__$1;
(statearr_48518_48555[(2)] = null);

(statearr_48518_48555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (1))){
var state_48514__$1 = state_48514;
var statearr_48519_48556 = state_48514__$1;
(statearr_48519_48556[(2)] = null);

(statearr_48519_48556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (4))){
var inst_48455 = (state_48514[(13)]);
var inst_48455__$1 = (state_48514[(2)]);
var inst_48456 = (inst_48455__$1 == null);
var state_48514__$1 = (function (){var statearr_48520 = state_48514;
(statearr_48520[(13)] = inst_48455__$1);

return statearr_48520;
})();
if(cljs.core.truth_(inst_48456)){
var statearr_48521_48557 = state_48514__$1;
(statearr_48521_48557[(1)] = (5));

} else {
var statearr_48522_48558 = state_48514__$1;
(statearr_48522_48558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (15))){
var state_48514__$1 = state_48514;
var statearr_48526_48559 = state_48514__$1;
(statearr_48526_48559[(2)] = null);

(statearr_48526_48559[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (21))){
var state_48514__$1 = state_48514;
var statearr_48527_48560 = state_48514__$1;
(statearr_48527_48560[(2)] = null);

(statearr_48527_48560[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (13))){
var inst_48467 = (state_48514[(8)]);
var inst_48469 = (state_48514[(10)]);
var inst_48466 = (state_48514[(11)]);
var inst_48468 = (state_48514[(12)]);
var inst_48476 = (state_48514[(2)]);
var inst_48477 = (inst_48469 + (1));
var tmp48523 = inst_48467;
var tmp48524 = inst_48466;
var tmp48525 = inst_48468;
var inst_48466__$1 = tmp48524;
var inst_48467__$1 = tmp48523;
var inst_48468__$1 = tmp48525;
var inst_48469__$1 = inst_48477;
var state_48514__$1 = (function (){var statearr_48528 = state_48514;
(statearr_48528[(14)] = inst_48476);

(statearr_48528[(8)] = inst_48467__$1);

(statearr_48528[(10)] = inst_48469__$1);

(statearr_48528[(11)] = inst_48466__$1);

(statearr_48528[(12)] = inst_48468__$1);

return statearr_48528;
})();
var statearr_48529_48561 = state_48514__$1;
(statearr_48529_48561[(2)] = null);

(statearr_48529_48561[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (22))){
var state_48514__$1 = state_48514;
var statearr_48530_48562 = state_48514__$1;
(statearr_48530_48562[(2)] = null);

(statearr_48530_48562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (6))){
var inst_48455 = (state_48514[(13)]);
var inst_48464 = f.call(null,inst_48455);
var inst_48465 = cljs.core.seq.call(null,inst_48464);
var inst_48466 = inst_48465;
var inst_48467 = null;
var inst_48468 = (0);
var inst_48469 = (0);
var state_48514__$1 = (function (){var statearr_48531 = state_48514;
(statearr_48531[(8)] = inst_48467);

(statearr_48531[(10)] = inst_48469);

(statearr_48531[(11)] = inst_48466);

(statearr_48531[(12)] = inst_48468);

return statearr_48531;
})();
var statearr_48532_48563 = state_48514__$1;
(statearr_48532_48563[(2)] = null);

(statearr_48532_48563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (17))){
var inst_48480 = (state_48514[(7)]);
var inst_48484 = cljs.core.chunk_first.call(null,inst_48480);
var inst_48485 = cljs.core.chunk_rest.call(null,inst_48480);
var inst_48486 = cljs.core.count.call(null,inst_48484);
var inst_48466 = inst_48485;
var inst_48467 = inst_48484;
var inst_48468 = inst_48486;
var inst_48469 = (0);
var state_48514__$1 = (function (){var statearr_48533 = state_48514;
(statearr_48533[(8)] = inst_48467);

(statearr_48533[(10)] = inst_48469);

(statearr_48533[(11)] = inst_48466);

(statearr_48533[(12)] = inst_48468);

return statearr_48533;
})();
var statearr_48534_48564 = state_48514__$1;
(statearr_48534_48564[(2)] = null);

(statearr_48534_48564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (3))){
var inst_48512 = (state_48514[(2)]);
var state_48514__$1 = state_48514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48514__$1,inst_48512);
} else {
if((state_val_48515 === (12))){
var inst_48500 = (state_48514[(2)]);
var state_48514__$1 = state_48514;
var statearr_48535_48565 = state_48514__$1;
(statearr_48535_48565[(2)] = inst_48500);

(statearr_48535_48565[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (2))){
var state_48514__$1 = state_48514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48514__$1,(4),in$);
} else {
if((state_val_48515 === (23))){
var inst_48508 = (state_48514[(2)]);
var state_48514__$1 = state_48514;
var statearr_48536_48566 = state_48514__$1;
(statearr_48536_48566[(2)] = inst_48508);

(statearr_48536_48566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (19))){
var inst_48495 = (state_48514[(2)]);
var state_48514__$1 = state_48514;
var statearr_48537_48567 = state_48514__$1;
(statearr_48537_48567[(2)] = inst_48495);

(statearr_48537_48567[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (11))){
var inst_48480 = (state_48514[(7)]);
var inst_48466 = (state_48514[(11)]);
var inst_48480__$1 = cljs.core.seq.call(null,inst_48466);
var state_48514__$1 = (function (){var statearr_48538 = state_48514;
(statearr_48538[(7)] = inst_48480__$1);

return statearr_48538;
})();
if(inst_48480__$1){
var statearr_48539_48568 = state_48514__$1;
(statearr_48539_48568[(1)] = (14));

} else {
var statearr_48540_48569 = state_48514__$1;
(statearr_48540_48569[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (9))){
var inst_48502 = (state_48514[(2)]);
var inst_48503 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_48514__$1 = (function (){var statearr_48541 = state_48514;
(statearr_48541[(15)] = inst_48502);

return statearr_48541;
})();
if(cljs.core.truth_(inst_48503)){
var statearr_48542_48570 = state_48514__$1;
(statearr_48542_48570[(1)] = (21));

} else {
var statearr_48543_48571 = state_48514__$1;
(statearr_48543_48571[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (5))){
var inst_48458 = cljs.core.async.close_BANG_.call(null,out);
var state_48514__$1 = state_48514;
var statearr_48544_48572 = state_48514__$1;
(statearr_48544_48572[(2)] = inst_48458);

(statearr_48544_48572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (14))){
var inst_48480 = (state_48514[(7)]);
var inst_48482 = cljs.core.chunked_seq_QMARK_.call(null,inst_48480);
var state_48514__$1 = state_48514;
if(inst_48482){
var statearr_48545_48573 = state_48514__$1;
(statearr_48545_48573[(1)] = (17));

} else {
var statearr_48546_48574 = state_48514__$1;
(statearr_48546_48574[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (16))){
var inst_48498 = (state_48514[(2)]);
var state_48514__$1 = state_48514;
var statearr_48547_48575 = state_48514__$1;
(statearr_48547_48575[(2)] = inst_48498);

(statearr_48547_48575[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (10))){
var inst_48467 = (state_48514[(8)]);
var inst_48469 = (state_48514[(10)]);
var inst_48474 = cljs.core._nth.call(null,inst_48467,inst_48469);
var state_48514__$1 = state_48514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48514__$1,(13),out,inst_48474);
} else {
if((state_val_48515 === (18))){
var inst_48480 = (state_48514[(7)]);
var inst_48489 = cljs.core.first.call(null,inst_48480);
var state_48514__$1 = state_48514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48514__$1,(20),out,inst_48489);
} else {
if((state_val_48515 === (8))){
var inst_48469 = (state_48514[(10)]);
var inst_48468 = (state_48514[(12)]);
var inst_48471 = (inst_48469 < inst_48468);
var inst_48472 = inst_48471;
var state_48514__$1 = state_48514;
if(cljs.core.truth_(inst_48472)){
var statearr_48548_48576 = state_48514__$1;
(statearr_48548_48576[(1)] = (10));

} else {
var statearr_48549_48577 = state_48514__$1;
(statearr_48549_48577[(1)] = (11));

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
});})(c__46898__auto__))
;
return ((function (switch__46808__auto__,c__46898__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__46809__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__46809__auto____0 = (function (){
var statearr_48550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48550[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__46809__auto__);

(statearr_48550[(1)] = (1));

return statearr_48550;
});
var cljs$core$async$mapcat_STAR__$_state_machine__46809__auto____1 = (function (state_48514){
while(true){
var ret_value__46810__auto__ = (function (){try{while(true){
var result__46811__auto__ = switch__46808__auto__.call(null,state_48514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46811__auto__;
}
break;
}
}catch (e48551){if((e48551 instanceof Object)){
var ex__46812__auto__ = e48551;
var statearr_48552_48578 = state_48514;
(statearr_48552_48578[(5)] = ex__46812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48579 = state_48514;
state_48514 = G__48579;
continue;
} else {
return ret_value__46810__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__46809__auto__ = function(state_48514){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__46809__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__46809__auto____1.call(this,state_48514);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__46809__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__46809__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__46809__auto__;
})()
;})(switch__46808__auto__,c__46898__auto__))
})();
var state__46900__auto__ = (function (){var statearr_48553 = f__46899__auto__.call(null);
(statearr_48553[(6)] = c__46898__auto__);

return statearr_48553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46900__auto__);
});})(c__46898__auto__))
);

return c__46898__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__48581 = arguments.length;
switch (G__48581) {
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
var G__48584 = arguments.length;
switch (G__48584) {
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
var G__48587 = arguments.length;
switch (G__48587) {
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
var c__46898__auto___48634 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46898__auto___48634,out){
return (function (){
var f__46899__auto__ = (function (){var switch__46808__auto__ = ((function (c__46898__auto___48634,out){
return (function (state_48611){
var state_val_48612 = (state_48611[(1)]);
if((state_val_48612 === (7))){
var inst_48606 = (state_48611[(2)]);
var state_48611__$1 = state_48611;
var statearr_48613_48635 = state_48611__$1;
(statearr_48613_48635[(2)] = inst_48606);

(statearr_48613_48635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48612 === (1))){
var inst_48588 = null;
var state_48611__$1 = (function (){var statearr_48614 = state_48611;
(statearr_48614[(7)] = inst_48588);

return statearr_48614;
})();
var statearr_48615_48636 = state_48611__$1;
(statearr_48615_48636[(2)] = null);

(statearr_48615_48636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48612 === (4))){
var inst_48591 = (state_48611[(8)]);
var inst_48591__$1 = (state_48611[(2)]);
var inst_48592 = (inst_48591__$1 == null);
var inst_48593 = cljs.core.not.call(null,inst_48592);
var state_48611__$1 = (function (){var statearr_48616 = state_48611;
(statearr_48616[(8)] = inst_48591__$1);

return statearr_48616;
})();
if(inst_48593){
var statearr_48617_48637 = state_48611__$1;
(statearr_48617_48637[(1)] = (5));

} else {
var statearr_48618_48638 = state_48611__$1;
(statearr_48618_48638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48612 === (6))){
var state_48611__$1 = state_48611;
var statearr_48619_48639 = state_48611__$1;
(statearr_48619_48639[(2)] = null);

(statearr_48619_48639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48612 === (3))){
var inst_48608 = (state_48611[(2)]);
var inst_48609 = cljs.core.async.close_BANG_.call(null,out);
var state_48611__$1 = (function (){var statearr_48620 = state_48611;
(statearr_48620[(9)] = inst_48608);

return statearr_48620;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48611__$1,inst_48609);
} else {
if((state_val_48612 === (2))){
var state_48611__$1 = state_48611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48611__$1,(4),ch);
} else {
if((state_val_48612 === (11))){
var inst_48591 = (state_48611[(8)]);
var inst_48600 = (state_48611[(2)]);
var inst_48588 = inst_48591;
var state_48611__$1 = (function (){var statearr_48621 = state_48611;
(statearr_48621[(10)] = inst_48600);

(statearr_48621[(7)] = inst_48588);

return statearr_48621;
})();
var statearr_48622_48640 = state_48611__$1;
(statearr_48622_48640[(2)] = null);

(statearr_48622_48640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48612 === (9))){
var inst_48591 = (state_48611[(8)]);
var state_48611__$1 = state_48611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48611__$1,(11),out,inst_48591);
} else {
if((state_val_48612 === (5))){
var inst_48588 = (state_48611[(7)]);
var inst_48591 = (state_48611[(8)]);
var inst_48595 = cljs.core._EQ_.call(null,inst_48591,inst_48588);
var state_48611__$1 = state_48611;
if(inst_48595){
var statearr_48624_48641 = state_48611__$1;
(statearr_48624_48641[(1)] = (8));

} else {
var statearr_48625_48642 = state_48611__$1;
(statearr_48625_48642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48612 === (10))){
var inst_48603 = (state_48611[(2)]);
var state_48611__$1 = state_48611;
var statearr_48626_48643 = state_48611__$1;
(statearr_48626_48643[(2)] = inst_48603);

(statearr_48626_48643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48612 === (8))){
var inst_48588 = (state_48611[(7)]);
var tmp48623 = inst_48588;
var inst_48588__$1 = tmp48623;
var state_48611__$1 = (function (){var statearr_48627 = state_48611;
(statearr_48627[(7)] = inst_48588__$1);

return statearr_48627;
})();
var statearr_48628_48644 = state_48611__$1;
(statearr_48628_48644[(2)] = null);

(statearr_48628_48644[(1)] = (2));


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
});})(c__46898__auto___48634,out))
;
return ((function (switch__46808__auto__,c__46898__auto___48634,out){
return (function() {
var cljs$core$async$state_machine__46809__auto__ = null;
var cljs$core$async$state_machine__46809__auto____0 = (function (){
var statearr_48629 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48629[(0)] = cljs$core$async$state_machine__46809__auto__);

(statearr_48629[(1)] = (1));

return statearr_48629;
});
var cljs$core$async$state_machine__46809__auto____1 = (function (state_48611){
while(true){
var ret_value__46810__auto__ = (function (){try{while(true){
var result__46811__auto__ = switch__46808__auto__.call(null,state_48611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46811__auto__;
}
break;
}
}catch (e48630){if((e48630 instanceof Object)){
var ex__46812__auto__ = e48630;
var statearr_48631_48645 = state_48611;
(statearr_48631_48645[(5)] = ex__46812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48646 = state_48611;
state_48611 = G__48646;
continue;
} else {
return ret_value__46810__auto__;
}
break;
}
});
cljs$core$async$state_machine__46809__auto__ = function(state_48611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46809__auto____1.call(this,state_48611);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46809__auto____0;
cljs$core$async$state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46809__auto____1;
return cljs$core$async$state_machine__46809__auto__;
})()
;})(switch__46808__auto__,c__46898__auto___48634,out))
})();
var state__46900__auto__ = (function (){var statearr_48632 = f__46899__auto__.call(null);
(statearr_48632[(6)] = c__46898__auto___48634);

return statearr_48632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46900__auto__);
});})(c__46898__auto___48634,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__48648 = arguments.length;
switch (G__48648) {
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
var c__46898__auto___48714 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46898__auto___48714,out){
return (function (){
var f__46899__auto__ = (function (){var switch__46808__auto__ = ((function (c__46898__auto___48714,out){
return (function (state_48686){
var state_val_48687 = (state_48686[(1)]);
if((state_val_48687 === (7))){
var inst_48682 = (state_48686[(2)]);
var state_48686__$1 = state_48686;
var statearr_48688_48715 = state_48686__$1;
(statearr_48688_48715[(2)] = inst_48682);

(statearr_48688_48715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48687 === (1))){
var inst_48649 = (new Array(n));
var inst_48650 = inst_48649;
var inst_48651 = (0);
var state_48686__$1 = (function (){var statearr_48689 = state_48686;
(statearr_48689[(7)] = inst_48650);

(statearr_48689[(8)] = inst_48651);

return statearr_48689;
})();
var statearr_48690_48716 = state_48686__$1;
(statearr_48690_48716[(2)] = null);

(statearr_48690_48716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48687 === (4))){
var inst_48654 = (state_48686[(9)]);
var inst_48654__$1 = (state_48686[(2)]);
var inst_48655 = (inst_48654__$1 == null);
var inst_48656 = cljs.core.not.call(null,inst_48655);
var state_48686__$1 = (function (){var statearr_48691 = state_48686;
(statearr_48691[(9)] = inst_48654__$1);

return statearr_48691;
})();
if(inst_48656){
var statearr_48692_48717 = state_48686__$1;
(statearr_48692_48717[(1)] = (5));

} else {
var statearr_48693_48718 = state_48686__$1;
(statearr_48693_48718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48687 === (15))){
var inst_48676 = (state_48686[(2)]);
var state_48686__$1 = state_48686;
var statearr_48694_48719 = state_48686__$1;
(statearr_48694_48719[(2)] = inst_48676);

(statearr_48694_48719[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48687 === (13))){
var state_48686__$1 = state_48686;
var statearr_48695_48720 = state_48686__$1;
(statearr_48695_48720[(2)] = null);

(statearr_48695_48720[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48687 === (6))){
var inst_48651 = (state_48686[(8)]);
var inst_48672 = (inst_48651 > (0));
var state_48686__$1 = state_48686;
if(cljs.core.truth_(inst_48672)){
var statearr_48696_48721 = state_48686__$1;
(statearr_48696_48721[(1)] = (12));

} else {
var statearr_48697_48722 = state_48686__$1;
(statearr_48697_48722[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48687 === (3))){
var inst_48684 = (state_48686[(2)]);
var state_48686__$1 = state_48686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48686__$1,inst_48684);
} else {
if((state_val_48687 === (12))){
var inst_48650 = (state_48686[(7)]);
var inst_48674 = cljs.core.vec.call(null,inst_48650);
var state_48686__$1 = state_48686;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48686__$1,(15),out,inst_48674);
} else {
if((state_val_48687 === (2))){
var state_48686__$1 = state_48686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48686__$1,(4),ch);
} else {
if((state_val_48687 === (11))){
var inst_48666 = (state_48686[(2)]);
var inst_48667 = (new Array(n));
var inst_48650 = inst_48667;
var inst_48651 = (0);
var state_48686__$1 = (function (){var statearr_48698 = state_48686;
(statearr_48698[(10)] = inst_48666);

(statearr_48698[(7)] = inst_48650);

(statearr_48698[(8)] = inst_48651);

return statearr_48698;
})();
var statearr_48699_48723 = state_48686__$1;
(statearr_48699_48723[(2)] = null);

(statearr_48699_48723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48687 === (9))){
var inst_48650 = (state_48686[(7)]);
var inst_48664 = cljs.core.vec.call(null,inst_48650);
var state_48686__$1 = state_48686;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48686__$1,(11),out,inst_48664);
} else {
if((state_val_48687 === (5))){
var inst_48650 = (state_48686[(7)]);
var inst_48659 = (state_48686[(11)]);
var inst_48654 = (state_48686[(9)]);
var inst_48651 = (state_48686[(8)]);
var inst_48658 = (inst_48650[inst_48651] = inst_48654);
var inst_48659__$1 = (inst_48651 + (1));
var inst_48660 = (inst_48659__$1 < n);
var state_48686__$1 = (function (){var statearr_48700 = state_48686;
(statearr_48700[(11)] = inst_48659__$1);

(statearr_48700[(12)] = inst_48658);

return statearr_48700;
})();
if(cljs.core.truth_(inst_48660)){
var statearr_48701_48724 = state_48686__$1;
(statearr_48701_48724[(1)] = (8));

} else {
var statearr_48702_48725 = state_48686__$1;
(statearr_48702_48725[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48687 === (14))){
var inst_48679 = (state_48686[(2)]);
var inst_48680 = cljs.core.async.close_BANG_.call(null,out);
var state_48686__$1 = (function (){var statearr_48704 = state_48686;
(statearr_48704[(13)] = inst_48679);

return statearr_48704;
})();
var statearr_48705_48726 = state_48686__$1;
(statearr_48705_48726[(2)] = inst_48680);

(statearr_48705_48726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48687 === (10))){
var inst_48670 = (state_48686[(2)]);
var state_48686__$1 = state_48686;
var statearr_48706_48727 = state_48686__$1;
(statearr_48706_48727[(2)] = inst_48670);

(statearr_48706_48727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48687 === (8))){
var inst_48650 = (state_48686[(7)]);
var inst_48659 = (state_48686[(11)]);
var tmp48703 = inst_48650;
var inst_48650__$1 = tmp48703;
var inst_48651 = inst_48659;
var state_48686__$1 = (function (){var statearr_48707 = state_48686;
(statearr_48707[(7)] = inst_48650__$1);

(statearr_48707[(8)] = inst_48651);

return statearr_48707;
})();
var statearr_48708_48728 = state_48686__$1;
(statearr_48708_48728[(2)] = null);

(statearr_48708_48728[(1)] = (2));


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
});})(c__46898__auto___48714,out))
;
return ((function (switch__46808__auto__,c__46898__auto___48714,out){
return (function() {
var cljs$core$async$state_machine__46809__auto__ = null;
var cljs$core$async$state_machine__46809__auto____0 = (function (){
var statearr_48709 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48709[(0)] = cljs$core$async$state_machine__46809__auto__);

(statearr_48709[(1)] = (1));

return statearr_48709;
});
var cljs$core$async$state_machine__46809__auto____1 = (function (state_48686){
while(true){
var ret_value__46810__auto__ = (function (){try{while(true){
var result__46811__auto__ = switch__46808__auto__.call(null,state_48686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46811__auto__;
}
break;
}
}catch (e48710){if((e48710 instanceof Object)){
var ex__46812__auto__ = e48710;
var statearr_48711_48729 = state_48686;
(statearr_48711_48729[(5)] = ex__46812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48730 = state_48686;
state_48686 = G__48730;
continue;
} else {
return ret_value__46810__auto__;
}
break;
}
});
cljs$core$async$state_machine__46809__auto__ = function(state_48686){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46809__auto____1.call(this,state_48686);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46809__auto____0;
cljs$core$async$state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46809__auto____1;
return cljs$core$async$state_machine__46809__auto__;
})()
;})(switch__46808__auto__,c__46898__auto___48714,out))
})();
var state__46900__auto__ = (function (){var statearr_48712 = f__46899__auto__.call(null);
(statearr_48712[(6)] = c__46898__auto___48714);

return statearr_48712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46900__auto__);
});})(c__46898__auto___48714,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__48732 = arguments.length;
switch (G__48732) {
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
var c__46898__auto___48802 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46898__auto___48802,out){
return (function (){
var f__46899__auto__ = (function (){var switch__46808__auto__ = ((function (c__46898__auto___48802,out){
return (function (state_48774){
var state_val_48775 = (state_48774[(1)]);
if((state_val_48775 === (7))){
var inst_48770 = (state_48774[(2)]);
var state_48774__$1 = state_48774;
var statearr_48776_48803 = state_48774__$1;
(statearr_48776_48803[(2)] = inst_48770);

(statearr_48776_48803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48775 === (1))){
var inst_48733 = [];
var inst_48734 = inst_48733;
var inst_48735 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_48774__$1 = (function (){var statearr_48777 = state_48774;
(statearr_48777[(7)] = inst_48734);

(statearr_48777[(8)] = inst_48735);

return statearr_48777;
})();
var statearr_48778_48804 = state_48774__$1;
(statearr_48778_48804[(2)] = null);

(statearr_48778_48804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48775 === (4))){
var inst_48738 = (state_48774[(9)]);
var inst_48738__$1 = (state_48774[(2)]);
var inst_48739 = (inst_48738__$1 == null);
var inst_48740 = cljs.core.not.call(null,inst_48739);
var state_48774__$1 = (function (){var statearr_48779 = state_48774;
(statearr_48779[(9)] = inst_48738__$1);

return statearr_48779;
})();
if(inst_48740){
var statearr_48780_48805 = state_48774__$1;
(statearr_48780_48805[(1)] = (5));

} else {
var statearr_48781_48806 = state_48774__$1;
(statearr_48781_48806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48775 === (15))){
var inst_48764 = (state_48774[(2)]);
var state_48774__$1 = state_48774;
var statearr_48782_48807 = state_48774__$1;
(statearr_48782_48807[(2)] = inst_48764);

(statearr_48782_48807[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48775 === (13))){
var state_48774__$1 = state_48774;
var statearr_48783_48808 = state_48774__$1;
(statearr_48783_48808[(2)] = null);

(statearr_48783_48808[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48775 === (6))){
var inst_48734 = (state_48774[(7)]);
var inst_48759 = inst_48734.length;
var inst_48760 = (inst_48759 > (0));
var state_48774__$1 = state_48774;
if(cljs.core.truth_(inst_48760)){
var statearr_48784_48809 = state_48774__$1;
(statearr_48784_48809[(1)] = (12));

} else {
var statearr_48785_48810 = state_48774__$1;
(statearr_48785_48810[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48775 === (3))){
var inst_48772 = (state_48774[(2)]);
var state_48774__$1 = state_48774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48774__$1,inst_48772);
} else {
if((state_val_48775 === (12))){
var inst_48734 = (state_48774[(7)]);
var inst_48762 = cljs.core.vec.call(null,inst_48734);
var state_48774__$1 = state_48774;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48774__$1,(15),out,inst_48762);
} else {
if((state_val_48775 === (2))){
var state_48774__$1 = state_48774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48774__$1,(4),ch);
} else {
if((state_val_48775 === (11))){
var inst_48738 = (state_48774[(9)]);
var inst_48742 = (state_48774[(10)]);
var inst_48752 = (state_48774[(2)]);
var inst_48753 = [];
var inst_48754 = inst_48753.push(inst_48738);
var inst_48734 = inst_48753;
var inst_48735 = inst_48742;
var state_48774__$1 = (function (){var statearr_48786 = state_48774;
(statearr_48786[(7)] = inst_48734);

(statearr_48786[(8)] = inst_48735);

(statearr_48786[(11)] = inst_48752);

(statearr_48786[(12)] = inst_48754);

return statearr_48786;
})();
var statearr_48787_48811 = state_48774__$1;
(statearr_48787_48811[(2)] = null);

(statearr_48787_48811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48775 === (9))){
var inst_48734 = (state_48774[(7)]);
var inst_48750 = cljs.core.vec.call(null,inst_48734);
var state_48774__$1 = state_48774;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48774__$1,(11),out,inst_48750);
} else {
if((state_val_48775 === (5))){
var inst_48735 = (state_48774[(8)]);
var inst_48738 = (state_48774[(9)]);
var inst_48742 = (state_48774[(10)]);
var inst_48742__$1 = f.call(null,inst_48738);
var inst_48743 = cljs.core._EQ_.call(null,inst_48742__$1,inst_48735);
var inst_48744 = cljs.core.keyword_identical_QMARK_.call(null,inst_48735,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_48745 = (inst_48743) || (inst_48744);
var state_48774__$1 = (function (){var statearr_48788 = state_48774;
(statearr_48788[(10)] = inst_48742__$1);

return statearr_48788;
})();
if(cljs.core.truth_(inst_48745)){
var statearr_48789_48812 = state_48774__$1;
(statearr_48789_48812[(1)] = (8));

} else {
var statearr_48790_48813 = state_48774__$1;
(statearr_48790_48813[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48775 === (14))){
var inst_48767 = (state_48774[(2)]);
var inst_48768 = cljs.core.async.close_BANG_.call(null,out);
var state_48774__$1 = (function (){var statearr_48792 = state_48774;
(statearr_48792[(13)] = inst_48767);

return statearr_48792;
})();
var statearr_48793_48814 = state_48774__$1;
(statearr_48793_48814[(2)] = inst_48768);

(statearr_48793_48814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48775 === (10))){
var inst_48757 = (state_48774[(2)]);
var state_48774__$1 = state_48774;
var statearr_48794_48815 = state_48774__$1;
(statearr_48794_48815[(2)] = inst_48757);

(statearr_48794_48815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48775 === (8))){
var inst_48734 = (state_48774[(7)]);
var inst_48738 = (state_48774[(9)]);
var inst_48742 = (state_48774[(10)]);
var inst_48747 = inst_48734.push(inst_48738);
var tmp48791 = inst_48734;
var inst_48734__$1 = tmp48791;
var inst_48735 = inst_48742;
var state_48774__$1 = (function (){var statearr_48795 = state_48774;
(statearr_48795[(7)] = inst_48734__$1);

(statearr_48795[(8)] = inst_48735);

(statearr_48795[(14)] = inst_48747);

return statearr_48795;
})();
var statearr_48796_48816 = state_48774__$1;
(statearr_48796_48816[(2)] = null);

(statearr_48796_48816[(1)] = (2));


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
});})(c__46898__auto___48802,out))
;
return ((function (switch__46808__auto__,c__46898__auto___48802,out){
return (function() {
var cljs$core$async$state_machine__46809__auto__ = null;
var cljs$core$async$state_machine__46809__auto____0 = (function (){
var statearr_48797 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48797[(0)] = cljs$core$async$state_machine__46809__auto__);

(statearr_48797[(1)] = (1));

return statearr_48797;
});
var cljs$core$async$state_machine__46809__auto____1 = (function (state_48774){
while(true){
var ret_value__46810__auto__ = (function (){try{while(true){
var result__46811__auto__ = switch__46808__auto__.call(null,state_48774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46811__auto__;
}
break;
}
}catch (e48798){if((e48798 instanceof Object)){
var ex__46812__auto__ = e48798;
var statearr_48799_48817 = state_48774;
(statearr_48799_48817[(5)] = ex__46812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48818 = state_48774;
state_48774 = G__48818;
continue;
} else {
return ret_value__46810__auto__;
}
break;
}
});
cljs$core$async$state_machine__46809__auto__ = function(state_48774){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46809__auto____1.call(this,state_48774);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46809__auto____0;
cljs$core$async$state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46809__auto____1;
return cljs$core$async$state_machine__46809__auto__;
})()
;})(switch__46808__auto__,c__46898__auto___48802,out))
})();
var state__46900__auto__ = (function (){var statearr_48800 = f__46899__auto__.call(null);
(statearr_48800[(6)] = c__46898__auto___48802);

return statearr_48800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46900__auto__);
});})(c__46898__auto___48802,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
