// Compiled by ClojureScript 1.7.122 {}
goog.provide('taoensso.timbre');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('taoensso.encore');
goog.require('taoensso.timbre.appenders.core');
taoensso.timbre.stacktrace;
/**
 * Default (fn [data]) -> string output fn.
 *   You can modify default options with `(partial default-output-fn <opts-map>)`.
 */
taoensso.timbre.default_output_fn = (function taoensso$timbre$default_output_fn(var_args){
var args30600 = [];
var len__22763__auto___30608 = arguments.length;
var i__22764__auto___30609 = (0);
while(true){
if((i__22764__auto___30609 < len__22763__auto___30608)){
args30600.push((arguments[i__22764__auto___30609]));

var G__30610 = (i__22764__auto___30609 + (1));
i__22764__auto___30609 = G__30610;
continue;
} else {
}
break;
}

var G__30602 = args30600.length;
switch (G__30602) {
case 1:
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30600.length)].join('')));

}
});

taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$1 = (function (data){
return taoensso.timbre.default_output_fn.call(null,null,data);
});

taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2 = (function (p__30603,data){
var map__30604 = p__30603;
var map__30604__$1 = ((((!((map__30604 == null)))?((((map__30604.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30604.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30604):map__30604);
var opts = map__30604__$1;
var no_stacktrace_QMARK_ = cljs.core.get.call(null,map__30604__$1,new cljs.core.Keyword(null,"no-stacktrace?","no-stacktrace?",1701072694));
var stacktrace_fonts = cljs.core.get.call(null,map__30604__$1,new cljs.core.Keyword(null,"stacktrace-fonts","stacktrace-fonts",830799382));
var map__30606 = data;
var map__30606__$1 = ((((!((map__30606 == null)))?((((map__30606.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30606.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30606):map__30606);
var level = cljs.core.get.call(null,map__30606__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_err_ = cljs.core.get.call(null,map__30606__$1,new cljs.core.Keyword(null,"?err_","?err_",789480858));
var vargs_ = cljs.core.get.call(null,map__30606__$1,new cljs.core.Keyword(null,"vargs_","vargs_",552132148));
var msg_ = cljs.core.get.call(null,map__30606__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
var _QMARK_ns_str = cljs.core.get.call(null,map__30606__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var hostname_ = cljs.core.get.call(null,map__30606__$1,new cljs.core.Keyword(null,"hostname_","hostname_",-2091647379));
var timestamp_ = cljs.core.get.call(null,map__30606__$1,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417));
return [cljs.core.str(clojure.string.upper_case.call(null,cljs.core.name.call(null,level))),cljs.core.str(" "),cljs.core.str("["),cljs.core.str((function (){var or__21705__auto__ = _QMARK_ns_str;
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
return "?ns";
}
})()),cljs.core.str("] - "),cljs.core.str(cljs.core.force.call(null,msg_)),cljs.core.str((cljs.core.truth_(no_stacktrace_QMARK_)?null:(function (){var temp__4425__auto__ = cljs.core.force.call(null,_QMARK_err_);
if(cljs.core.truth_(temp__4425__auto__)){
var err = temp__4425__auto__;
return [cljs.core.str("\n"),cljs.core.str(taoensso.timbre.stacktrace.call(null,err,opts))].join('');
} else {
return null;
}
})()))].join('');
});

taoensso.timbre.default_output_fn.cljs$lang$maxFixedArity = 2;
taoensso.timbre.default_err;

taoensso.timbre.default_out;
taoensso.timbre.println_appender = taoensso.timbre.appenders.core.println_appender;
taoensso.timbre.console__QMARK_appender = taoensso.timbre.appenders.core.console__QMARK_appender;
/**
 * Example (+default) Timbre v4 config map.
 * 
 *   APPENDERS
 *  An appender is a map with keys:
 *    :min-level       ; Level keyword, or nil (=> no minimum level)
 *    :enabled?        ;
 *    :async?          ; Dispatch using agent? Useful for slow appenders
 *    :rate-limit      ; [[ncalls-limit window-ms] <...>], or nil
 *    :output-fn       ; Optional override for inherited (fn [data]) -> string
 *    :fn              ; (fn [data]) -> side effects, with keys described below
 * 
 *  An appender's fn takes a single data map with keys:
 *    :config          ; Entire config map (this map, etc.)
 *    :appender-id     ; Id of appender currently dispatching
 *    :appender        ; Entire map of appender currently dispatching
 * 
 *    :instant         ; Platform date (java.util.Date or js/Date)
 *    :level           ; Keyword
 *    :error-level?    ; Is level e/o #{:error :fatal}?
 *    :?ns-str         ; String, or nil
 *    :?file           ; String, or nil  ; Waiting on CLJ-865
 *    :?line           ; Integer, or nil ; Waiting on CLJ-865
 * 
 *    :?err_           ; Delay - first-arg platform error, or nil
 *    :vargs_          ; Delay - raw args vector
 *    :hostname_       ; Delay - string (clj only)
 *    :msg_            ; Delay - args string
 *    :timestamp_      ; Delay - string
 *    :output-fn       ; (fn [data]) -> formatted output string
 *                     ; (see `default-output-fn` for details)
 * 
 *    :context         ; *context* value at log time (see `with-context`)
 *    :profile-stats   ; From `profile` macro
 * 
 *   MIDDLEWARE
 *  Middleware are simple (fn [data]) -> ?data fns (applied left->right) that
 *  transform the data map dispatched to appender fns. If any middleware returns
 *  nil, NO dispatching will occur (i.e. the event will be filtered).
 * 
 *   The `example-config` source code contains further settings and details.
 *   See also `set-config!`, `merge-config!`, `set-level!`.
 */
taoensso.timbre.example_config = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"ns-whitelist","ns-whitelist",-1717299774),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"ns-blacklist","ns-blacklist",1957763142),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"middleware","middleware",1462115504),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),taoensso.timbre.default_output_fn,new cljs.core.Keyword(null,"appenders","appenders",1245583998),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"console","console",1228072057),taoensso.timbre.console__QMARK_appender.call(null,cljs.core.PersistentArrayMap.EMPTY)], null)], null);
if(typeof taoensso.timbre._STAR_config_STAR_ !== 'undefined'){
} else {
/**
 * See `example-config` for info.
 */
taoensso.timbre._STAR_config_STAR_ = taoensso.timbre.example_config;
}
taoensso.timbre.swap_config_BANG_ = (function taoensso$timbre$swap_config_BANG_(f){
return taoensso.timbre._STAR_config_STAR_ = f.call(null,taoensso.timbre._STAR_config_STAR_);
});
taoensso.timbre.set_config_BANG_ = (function taoensso$timbre$set_config_BANG_(m){
return taoensso.timbre.swap_config_BANG_.call(null,(function (_old){
return m;
}));
});
taoensso.timbre.merge_config_BANG_ = (function taoensso$timbre$merge_config_BANG_(m){
return taoensso.timbre.swap_config_BANG_.call(null,(function (old){
return taoensso.encore.nested_merge.call(null,old,m);
}));
});
taoensso.timbre.set_level_BANG_ = (function taoensso$timbre$set_level_BANG_(level){
return taoensso.timbre.swap_config_BANG_.call(null,(function (m){
return cljs.core.merge.call(null,m,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"level","level",1290497552),level], null));
}));
});
taoensso.timbre.ordered_levels = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"fatal","fatal",1874419888),new cljs.core.Keyword(null,"report","report",1394055010)], null);
taoensso.timbre.scored_levels = cljs.core.zipmap.call(null,taoensso.timbre.ordered_levels,cljs.core.next.call(null,cljs.core.range.call(null)));
taoensso.timbre.valid_levels = cljs.core.set.call(null,taoensso.timbre.ordered_levels);
taoensso.timbre.valid_level = (function taoensso$timbre$valid_level(level){
var or__21705__auto__ = taoensso.timbre.valid_levels.call(null,level);
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid logging level: "),cljs.core.str(level)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"level","level",1290497552),level], null));
}
});
taoensso.timbre.level_GT__EQ_ = (function taoensso$timbre$level_GT__EQ_(x,y){
return (cljs.core.long$.call(null,taoensso.timbre.scored_levels.call(null,taoensso.timbre.valid_level.call(null,x))) >= cljs.core.long$.call(null,taoensso.timbre.scored_levels.call(null,taoensso.timbre.valid_level.call(null,y))));
});
/**
 * (fn [whitelist blacklist]) -> (fn [ns]) -> ?unfiltered-ns
 */
taoensso.timbre.compile_ns_filters = (function (){var __GT_re_pattern = (function (x){
if(cljs.core.truth_(taoensso.encore.re_pattern_QMARK_.call(null,x))){
return x;
} else {
if(typeof x === 'string'){
var s = clojure.string.replace.call(null,clojure.string.replace.call(null,[cljs.core.str("^"),cljs.core.str(x),cljs.core.str("$")].join(''),".","\\."),"*","(.*)");
return cljs.core.re_pattern.call(null,s);
} else {
throw cljs.core.ex_info.call(null,"No matching clause",cljs.core.PersistentArrayMap.EMPTY);

}
}
});
return taoensso.encore.memoize_.call(null,((function (__GT_re_pattern){
return (function (whitelist,blacklist){
var whitelist_STAR_ = cljs.core.mapv.call(null,__GT_re_pattern,whitelist);
var blacklist_STAR_ = cljs.core.mapv.call(null,__GT_re_pattern,blacklist);
var white_filter = ((cljs.core.empty_QMARK_.call(null,whitelist_STAR_))?((function (whitelist_STAR_,blacklist_STAR_,__GT_re_pattern){
return (function (ns){
return true;
});})(whitelist_STAR_,blacklist_STAR_,__GT_re_pattern))
:((function (whitelist_STAR_,blacklist_STAR_,__GT_re_pattern){
return (function (ns){
return cljs.core.some.call(null,((function (whitelist_STAR_,blacklist_STAR_,__GT_re_pattern){
return (function (p1__30612_SHARP_){
return cljs.core.re_find.call(null,p1__30612_SHARP_,ns);
});})(whitelist_STAR_,blacklist_STAR_,__GT_re_pattern))
,whitelist_STAR_);
});})(whitelist_STAR_,blacklist_STAR_,__GT_re_pattern))

);
var black_filter = ((cljs.core.empty_QMARK_.call(null,blacklist_STAR_))?((function (whitelist_STAR_,blacklist_STAR_,white_filter,__GT_re_pattern){
return (function (ns){
return true;
});})(whitelist_STAR_,blacklist_STAR_,white_filter,__GT_re_pattern))
:((function (whitelist_STAR_,blacklist_STAR_,white_filter,__GT_re_pattern){
return (function (ns){
return cljs.core.not.call(null,cljs.core.some.call(null,((function (whitelist_STAR_,blacklist_STAR_,white_filter,__GT_re_pattern){
return (function (p1__30613_SHARP_){
return cljs.core.re_find.call(null,p1__30613_SHARP_,ns);
});})(whitelist_STAR_,blacklist_STAR_,white_filter,__GT_re_pattern))
,blacklist_STAR_));
});})(whitelist_STAR_,blacklist_STAR_,white_filter,__GT_re_pattern))

);
return ((function (whitelist_STAR_,blacklist_STAR_,white_filter,black_filter,__GT_re_pattern){
return (function (ns){
if(cljs.core.truth_((function (){var and__21693__auto__ = white_filter.call(null,ns);
if(cljs.core.truth_(and__21693__auto__)){
return black_filter.call(null,ns);
} else {
return and__21693__auto__;
}
})())){
return ns;
} else {
return null;
}
});
;})(whitelist_STAR_,blacklist_STAR_,white_filter,black_filter,__GT_re_pattern))
});})(__GT_re_pattern))
);
})();
/**
 * (fn [whitelist blacklist ns]) -> ?unfiltered-ns
 */
taoensso.timbre.ns_filter = taoensso.encore.memoize_.call(null,(function (whitelist,blacklist,ns){
return taoensso.timbre.compile_ns_filters.call(null,whitelist,blacklist).call(null,ns);
}));
taoensso.timbre.__GT_delay = (function taoensso$timbre$__GT_delay(x){
if(cljs.core.delay_QMARK_.call(null,x)){
return x;
} else {
return (new cljs.core.Delay((function (){
return x;
}),null));
}
});
taoensso.timbre.vsplit_err1 = (function taoensso$timbre$vsplit_err1(p__30614){
var vec__30616 = p__30614;
var v1 = cljs.core.nth.call(null,vec__30616,(0),null);
var v = vec__30616;
if(cljs.core.not.call(null,taoensso.encore.error_QMARK_.call(null,v1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,v], null);
} else {
return taoensso.encore.vsplit_first.call(null,v);
}
});
/**
 * Used for rate limiters, some appenders (e.g. Carmine), etc.
 *   Goal: (hash data-1) = (hash data-2) iff data-1 "the same" as data-2 for
 *   rate-limiting purposes, etc.
 */
taoensso.timbre.default_data_hash_fn = (function taoensso$timbre$default_data_hash_fn(data){
var map__30620 = data;
var map__30620__$1 = ((((!((map__30620 == null)))?((((map__30620.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30620.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30620):map__30620);
var _QMARK_ns_str = cljs.core.get.call(null,map__30620__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var _QMARK_line = cljs.core.get.call(null,map__30620__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
var vargs_ = cljs.core.get.call(null,map__30620__$1,new cljs.core.Keyword(null,"vargs_","vargs_",552132148));
var vargs = cljs.core.force.call(null,vargs_);
return [cljs.core.str((function (){var or__21705__auto__ = cljs.core.some.call(null,((function (map__30620,map__30620__$1,_QMARK_ns_str,_QMARK_line,vargs_,vargs){
return (function (p1__30617_SHARP_){
var and__21693__auto__ = cljs.core.map_QMARK_.call(null,p1__30617_SHARP_);
if(and__21693__auto__){
return new cljs.core.Keyword("timbre","hash","timbre/hash",-221081827).cljs$core$IFn$_invoke$arity$1(p1__30617_SHARP_);
} else {
return and__21693__auto__;
}
});})(map__30620,map__30620__$1,_QMARK_ns_str,_QMARK_line,vargs_,vargs))
,vargs);
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_ns_str,vargs], null);
}
})())].join('');
});
if(typeof taoensso.timbre.get_rate_limiter !== 'undefined'){
} else {
taoensso.timbre.get_rate_limiter = taoensso.encore.memoize_.call(null,(function (appender_id,specs){
return taoensso.encore.rate_limiter_STAR_.call(null,specs);
}));
}
/**
 * Would Timbre currently log at the given logging level?
 *  * Compile-time `?ns-str` arg required to support ns filtering.
 *  * `config` arg required to support non-global config.
 */
taoensso.timbre.log_QMARK_ = (function taoensso$timbre$log_QMARK_(var_args){
var args__22770__auto__ = [];
var len__22763__auto___30626 = arguments.length;
var i__22764__auto___30627 = (0);
while(true){
if((i__22764__auto___30627 < len__22763__auto___30626)){
args__22770__auto__.push((arguments[i__22764__auto___30627]));

var G__30628 = (i__22764__auto___30627 + (1));
i__22764__auto___30627 = G__30628;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((1) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((1)),(0))):null);
return taoensso.timbre.log_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22771__auto__);
});

taoensso.timbre.log_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (level,p__30624){
var vec__30625 = p__30624;
var _QMARK_ns_str = cljs.core.nth.call(null,vec__30625,(0),null);
var config = cljs.core.nth.call(null,vec__30625,(1),null);
var config__$1 = (function (){var or__21705__auto__ = config;
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
return taoensso.timbre._STAR_config_STAR_;
}
})();
var active_level = (function (){var or__21705__auto__ = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(config__$1);
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
return new cljs.core.Keyword(null,"report","report",1394055010);
}
})();
var and__21693__auto__ = taoensso.timbre.level_GT__EQ_.call(null,level,active_level);
if(cljs.core.truth_(and__21693__auto__)){
var and__21693__auto____$1 = taoensso.timbre.ns_filter.call(null,new cljs.core.Keyword(null,"ns-whitelist","ns-whitelist",-1717299774).cljs$core$IFn$_invoke$arity$1(config__$1),new cljs.core.Keyword(null,"ns-blacklist","ns-blacklist",1957763142).cljs$core$IFn$_invoke$arity$1(config__$1),(function (){var or__21705__auto__ = _QMARK_ns_str;
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
return "";
}
})());
if(cljs.core.truth_(and__21693__auto____$1)){
return true;
} else {
return and__21693__auto____$1;
}
} else {
return and__21693__auto__;
}
});

taoensso.timbre.log_QMARK_.cljs$lang$maxFixedArity = (1);

taoensso.timbre.log_QMARK_.cljs$lang$applyTo = (function (seq30622){
var G__30623 = cljs.core.first.call(null,seq30622);
var seq30622__$1 = cljs.core.next.call(null,seq30622);
return taoensso.timbre.log_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__30623,seq30622__$1);
});
/**
 * General-purpose dynamic logging context. Context will be included in appender
 *   data map at logging time.
 */
taoensso.timbre._STAR_context_STAR_ = null;
taoensso.timbre.get_hostname;
taoensso.timbre.inherit_over = (function taoensso$timbre$inherit_over(k,appender,config,default$){
var or__21705__auto__ = (function (){var a = cljs.core.get.call(null,appender,k);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,a,new cljs.core.Keyword(null,"inherit","inherit",-1840815422)))){
return null;
} else {
return a;
}
})();
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
var or__21705__auto____$1 = cljs.core.get.call(null,config,k);
if(cljs.core.truth_(or__21705__auto____$1)){
return or__21705__auto____$1;
} else {
return default$;
}
}
});
taoensso.timbre.inherit_into = (function taoensso$timbre$inherit_into(k,appender,config,default$){
return cljs.core.merge.call(null,default$,cljs.core.get.call(null,config,k),(function (){var a = cljs.core.get.call(null,appender,k);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,a,new cljs.core.Keyword(null,"inherit","inherit",-1840815422)))){
return null;
} else {
return a;
}
})());
});
/**
 * Core fn-level logger. Implementation detail!
 */
taoensso.timbre.log1_fn = (function taoensso$timbre$log1_fn(config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,vargs_,_QMARK_base_data){
if(cljs.core.truth_(taoensso.timbre.log_QMARK_.call(null,level,_QMARK_ns_str,config))){
var instant_30637 = taoensso.encore.now_dt.call(null);
var vargs_STAR___30638 = (new cljs.core.Delay(((function (instant_30637){
return (function (){
return taoensso.timbre.vsplit_err1.call(null,cljs.core.force.call(null,vargs_));
});})(instant_30637))
,null));
var _QMARK_err__30639 = (new cljs.core.Delay(((function (instant_30637,vargs_STAR___30638){
return (function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,vargs_STAR___30638),(0));
});})(instant_30637,vargs_STAR___30638))
,null));
var vargs__30640__$1 = (new cljs.core.Delay(((function (instant_30637,vargs_STAR___30638,_QMARK_err__30639){
return (function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,vargs_STAR___30638),(1));
});})(instant_30637,vargs_STAR___30638,_QMARK_err__30639))
,null));
var context_30641 = taoensso.timbre._STAR_context_STAR_;
var data_30642 = cljs.core.merge.call(null,_QMARK_base_data,((cljs.core.map_QMARK_.call(null,context_30641))?context_30641:null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"instant","instant",655498374),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"?file","?file",1533429675),new cljs.core.Keyword(null,"error-level?","error-level?",778415885),new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"vargs_","vargs_",552132148),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"?line","?line",-631853385),new cljs.core.Keyword(null,"?err_","?err_",789480858)],[instant_30637,config,_QMARK_file,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fatal","fatal",1874419888),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,level),_QMARK_ns_str,level,vargs__30640__$1,context_30641,_QMARK_line,_QMARK_err__30639]));
var msg_fn_30643 = ((function (instant_30637,vargs_STAR___30638,_QMARK_err__30639,vargs__30640__$1,context_30641,data_30642){
return (function (vargs___$2){
if((msg_type == null)){
return null;
} else {
var temp__4425__auto__ = taoensso.encore.hcond.call(null,false,"taoensso.timbre",348,(new cljs.core.Delay(((function (instant_30637,vargs_STAR___30638,_QMARK_err__30639,vargs__30640__$1,context_30641,data_30642){
return (function (){
return cljs.core.force.call(null,vargs___$2);
});})(instant_30637,vargs_STAR___30638,_QMARK_err__30639,vargs__30640__$1,context_30641,data_30642))
,null)),cljs.core.list(new cljs.core.Symbol(null,"force","force",-1872478483,null),new cljs.core.Symbol(null,"vargs_","vargs_",-2102303621,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.vector_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null)], null));
if(cljs.core.truth_(temp__4425__auto__)){
var vargs = temp__4425__auto__;
var G__30633 = (((msg_type instanceof cljs.core.Keyword))?msg_type.fqn:null);
switch (G__30633) {
case "p":
return taoensso.encore.spaced_str.call(null,vargs);

break;
case "f":
var vec__30634 = taoensso.encore.vsplit_first.call(null,vargs);
var fmt = cljs.core.nth.call(null,vec__30634,(0),null);
var args = cljs.core.nth.call(null,vec__30634,(1),null);
return taoensso.encore.format_STAR_.call(null,fmt,args);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(msg_type)].join('')));

}
} else {
return null;
}
}
});})(instant_30637,vargs_STAR___30638,_QMARK_err__30639,vargs__30640__$1,context_30641,data_30642))
;
var _QMARK_data_30644 = cljs.core.reduce.call(null,((function (instant_30637,vargs_STAR___30638,_QMARK_err__30639,vargs__30640__$1,context_30641,data_30642,msg_fn_30643){
return (function (acc,mf){
var result = mf.call(null,acc);
if((result == null)){
return cljs.core.reduced.call(null,null);
} else {
return result;
}
});})(instant_30637,vargs_STAR___30638,_QMARK_err__30639,vargs__30640__$1,context_30641,data_30642,msg_fn_30643))
,data_30642,new cljs.core.Keyword(null,"middleware","middleware",1462115504).cljs$core$IFn$_invoke$arity$1(config));
var temp__4425__auto___30646 = _QMARK_data_30644;
if(cljs.core.truth_(temp__4425__auto___30646)){
var data_30647__$1 = temp__4425__auto___30646;
cljs.core.reduce_kv.call(null,((function (data_30647__$1,temp__4425__auto___30646,instant_30637,vargs_STAR___30638,_QMARK_err__30639,vargs__30640__$1,context_30641,data_30642,msg_fn_30643,_QMARK_data_30644){
return (function (_,id,appender){
if(cljs.core.truth_((function (){var and__21693__auto__ = new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057).cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_(and__21693__auto__)){
return taoensso.timbre.level_GT__EQ_.call(null,level,(function (){var or__21705__auto__ = new cljs.core.Keyword(null,"min-level","min-level",1634684919).cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
return new cljs.core.Keyword(null,"trace","trace",-1082747415);
}
})());
} else {
return and__21693__auto__;
}
})())){
var rate_limit_specs = new cljs.core.Keyword(null,"rate-limit","rate-limit",1748082022).cljs$core$IFn$_invoke$arity$1(appender);
var data_hash_fn = taoensso.timbre.inherit_over.call(null,new cljs.core.Keyword(null,"data-hash-fn","data-hash-fn",1552406760),appender,config,taoensso.timbre.default_data_hash_fn);
var rate_limit_okay_QMARK_ = (function (){var or__21705__auto__ = cljs.core.empty_QMARK_.call(null,rate_limit_specs);
if(or__21705__auto__){
return or__21705__auto__;
} else {
var rl_fn = taoensso.timbre.get_rate_limiter.call(null,id,rate_limit_specs);
var data_hash = data_hash_fn.call(null,data_30647__$1);
return cljs.core.not.call(null,rl_fn.call(null,data_hash));
}
})();
if(rate_limit_okay_QMARK_){
var map__30635 = appender;
var map__30635__$1 = ((((!((map__30635 == null)))?((((map__30635.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30635.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30635):map__30635);
var apfn = cljs.core.get.call(null,map__30635__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var async_QMARK_ = cljs.core.get.call(null,map__30635__$1,new cljs.core.Keyword(null,"async?","async?",1523057758));
var msg_ = (new cljs.core.Delay(((function (map__30635,map__30635__$1,apfn,async_QMARK_,rate_limit_specs,data_hash_fn,rate_limit_okay_QMARK_,data_30647__$1,temp__4425__auto___30646,instant_30637,vargs_STAR___30638,_QMARK_err__30639,vargs__30640__$1,context_30641,data_30642,msg_fn_30643,_QMARK_data_30644){
return (function (){
return msg_fn_30643.call(null,new cljs.core.Keyword(null,"vargs_","vargs_",552132148).cljs$core$IFn$_invoke$arity$1(data_30647__$1));
});})(map__30635,map__30635__$1,apfn,async_QMARK_,rate_limit_specs,data_hash_fn,rate_limit_okay_QMARK_,data_30647__$1,temp__4425__auto___30646,instant_30637,vargs_STAR___30638,_QMARK_err__30639,vargs__30640__$1,context_30641,data_30642,msg_fn_30643,_QMARK_data_30644))
,null));
var output_fn = taoensso.timbre.inherit_over.call(null,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),appender,config,taoensso.timbre.default_output_fn);
var data__$2 = cljs.core.merge.call(null,data_30647__$1,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"appender-id","appender-id",-1917983538),id,new cljs.core.Keyword(null,"appender","appender",1267426510),appender,new cljs.core.Keyword(null,"msg_","msg_",-1925147000),msg_,new cljs.core.Keyword(null,"msg-fn","msg-fn",-1873033940),msg_fn_30643,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),output_fn,new cljs.core.Keyword(null,"data-hash-fn","data-hash-fn",1552406760),data_hash_fn], null));
if(cljs.core.not.call(null,async_QMARK_)){
return apfn.call(null,data__$2);
} else {
return apfn.call(null,data__$2);
}
} else {
return null;
}
} else {
return null;
}
});})(data_30647__$1,temp__4425__auto___30646,instant_30637,vargs_STAR___30638,_QMARK_err__30639,vargs__30640__$1,context_30641,data_30642,msg_fn_30643,_QMARK_data_30644))
,null,taoensso.encore.clj1098.call(null,new cljs.core.Keyword(null,"appenders","appenders",1245583998).cljs$core$IFn$_invoke$arity$1(config)));
} else {
}
} else {
}

return null;
});
taoensso.timbre.stacktrace = (function taoensso$timbre$stacktrace(var_args){
var args__22770__auto__ = [];
var len__22763__auto___30654 = arguments.length;
var i__22764__auto___30655 = (0);
while(true){
if((i__22764__auto___30655 < len__22763__auto___30654)){
args__22770__auto__.push((arguments[i__22764__auto___30655]));

var G__30656 = (i__22764__auto___30655 + (1));
i__22764__auto___30655 = G__30656;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((1) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((1)),(0))):null);
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22771__auto__);
});

taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$variadic = (function (err,p__30650){
var vec__30651 = p__30650;
var map__30652 = cljs.core.nth.call(null,vec__30651,(0),null);
var map__30652__$1 = ((((!((map__30652 == null)))?((((map__30652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30652):map__30652);
var opts = map__30652__$1;
var stacktrace_fonts = cljs.core.get.call(null,map__30652__$1,new cljs.core.Keyword(null,"stacktrace-fonts","stacktrace-fonts",830799382));
return [cljs.core.str(err)].join('');
});

taoensso.timbre.stacktrace.cljs$lang$maxFixedArity = (1);

taoensso.timbre.stacktrace.cljs$lang$applyTo = (function (seq30648){
var G__30649 = cljs.core.first.call(null,seq30648);
var seq30648__$1 = cljs.core.next.call(null,seq30648);
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$variadic(G__30649,seq30648__$1);
});
taoensso.timbre.str_println = (function taoensso$timbre$str_println(var_args){
var args__22770__auto__ = [];
var len__22763__auto___30658 = arguments.length;
var i__22764__auto___30659 = (0);
while(true){
if((i__22764__auto___30659 < len__22763__auto___30658)){
args__22770__auto__.push((arguments[i__22764__auto___30659]));

var G__30660 = (i__22764__auto___30659 + (1));
i__22764__auto___30659 = G__30660;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((0) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((0)),(0))):null);
return taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic(argseq__22771__auto__);
});

taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.spaced_str.call(null,xs);
});

taoensso.timbre.str_println.cljs$lang$maxFixedArity = (0);

taoensso.timbre.str_println.cljs$lang$applyTo = (function (seq30657){
return taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30657));
});
taoensso.timbre.logging_enabled_QMARK_ = (function taoensso$timbre$logging_enabled_QMARK_(level,compile_time_ns){
return taoensso.timbre.log_QMARK_.call(null,level,[cljs.core.str(compile_time_ns)].join(''));
});

//# sourceMappingURL=timbre.js.map