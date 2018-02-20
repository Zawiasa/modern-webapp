// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.14";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e49625){if((e49625 instanceof Error)){
var e = e49625;
return "Error: Unable to stringify";
} else {
throw e49625;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__49628 = arguments.length;
switch (G__49628) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__49626_SHARP_){
if(typeof p1__49626_SHARP_ === 'string'){
return p1__49626_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__49626_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49631 = arguments.length;
var i__41949__auto___49632 = (0);
while(true){
if((i__41949__auto___49632 < len__41948__auto___49631)){
args__41955__auto__.push((arguments[i__41949__auto___49632]));

var G__49633 = (i__41949__auto___49632 + (1));
i__41949__auto___49632 = G__49633;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq49630){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49630));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__41955__auto__ = [];
var len__41948__auto___49635 = arguments.length;
var i__41949__auto___49636 = (0);
while(true){
if((i__41949__auto___49636 < len__41948__auto___49635)){
args__41955__auto__.push((arguments[i__41949__auto___49636]));

var G__49637 = (i__41949__auto___49636 + (1));
i__41949__auto___49636 = G__49637;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq49634){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49634));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__49638){
var map__49639 = p__49638;
var map__49639__$1 = ((((!((map__49639 == null)))?((((map__49639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49639.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49639):map__49639);
var message = cljs.core.get.call(null,map__49639__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__49639__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__40669__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__40669__auto__)){
return or__40669__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__40657__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__40657__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__40657__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__44371__auto___49718 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44371__auto___49718,ch){
return (function (){
var f__44372__auto__ = (function (){var switch__44281__auto__ = ((function (c__44371__auto___49718,ch){
return (function (state_49690){
var state_val_49691 = (state_49690[(1)]);
if((state_val_49691 === (7))){
var inst_49686 = (state_49690[(2)]);
var state_49690__$1 = state_49690;
var statearr_49692_49719 = state_49690__$1;
(statearr_49692_49719[(2)] = inst_49686);

(statearr_49692_49719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49691 === (1))){
var state_49690__$1 = state_49690;
var statearr_49693_49720 = state_49690__$1;
(statearr_49693_49720[(2)] = null);

(statearr_49693_49720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49691 === (4))){
var inst_49643 = (state_49690[(7)]);
var inst_49643__$1 = (state_49690[(2)]);
var state_49690__$1 = (function (){var statearr_49694 = state_49690;
(statearr_49694[(7)] = inst_49643__$1);

return statearr_49694;
})();
if(cljs.core.truth_(inst_49643__$1)){
var statearr_49695_49721 = state_49690__$1;
(statearr_49695_49721[(1)] = (5));

} else {
var statearr_49696_49722 = state_49690__$1;
(statearr_49696_49722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49691 === (15))){
var inst_49650 = (state_49690[(8)]);
var inst_49665 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_49650);
var inst_49666 = cljs.core.first.call(null,inst_49665);
var inst_49667 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_49666);
var inst_49668 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49667)].join('');
var inst_49669 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_49668);
var state_49690__$1 = state_49690;
var statearr_49697_49723 = state_49690__$1;
(statearr_49697_49723[(2)] = inst_49669);

(statearr_49697_49723[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49691 === (13))){
var inst_49674 = (state_49690[(2)]);
var state_49690__$1 = state_49690;
var statearr_49698_49724 = state_49690__$1;
(statearr_49698_49724[(2)] = inst_49674);

(statearr_49698_49724[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49691 === (6))){
var state_49690__$1 = state_49690;
var statearr_49699_49725 = state_49690__$1;
(statearr_49699_49725[(2)] = null);

(statearr_49699_49725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49691 === (17))){
var inst_49672 = (state_49690[(2)]);
var state_49690__$1 = state_49690;
var statearr_49700_49726 = state_49690__$1;
(statearr_49700_49726[(2)] = inst_49672);

(statearr_49700_49726[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49691 === (3))){
var inst_49688 = (state_49690[(2)]);
var state_49690__$1 = state_49690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49690__$1,inst_49688);
} else {
if((state_val_49691 === (12))){
var inst_49649 = (state_49690[(9)]);
var inst_49663 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_49649,opts);
var state_49690__$1 = state_49690;
if(cljs.core.truth_(inst_49663)){
var statearr_49701_49727 = state_49690__$1;
(statearr_49701_49727[(1)] = (15));

} else {
var statearr_49702_49728 = state_49690__$1;
(statearr_49702_49728[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49691 === (2))){
var state_49690__$1 = state_49690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49690__$1,(4),ch);
} else {
if((state_val_49691 === (11))){
var inst_49650 = (state_49690[(8)]);
var inst_49655 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49656 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_49650);
var inst_49657 = cljs.core.async.timeout.call(null,(1000));
var inst_49658 = [inst_49656,inst_49657];
var inst_49659 = (new cljs.core.PersistentVector(null,2,(5),inst_49655,inst_49658,null));
var state_49690__$1 = state_49690;
return cljs.core.async.ioc_alts_BANG_.call(null,state_49690__$1,(14),inst_49659);
} else {
if((state_val_49691 === (9))){
var inst_49650 = (state_49690[(8)]);
var inst_49676 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_49677 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_49650);
var inst_49678 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_49677);
var inst_49679 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49678)].join('');
var inst_49680 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_49679);
var state_49690__$1 = (function (){var statearr_49703 = state_49690;
(statearr_49703[(10)] = inst_49676);

return statearr_49703;
})();
var statearr_49704_49729 = state_49690__$1;
(statearr_49704_49729[(2)] = inst_49680);

(statearr_49704_49729[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49691 === (5))){
var inst_49643 = (state_49690[(7)]);
var inst_49645 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_49646 = (new cljs.core.PersistentArrayMap(null,2,inst_49645,null));
var inst_49647 = (new cljs.core.PersistentHashSet(null,inst_49646,null));
var inst_49648 = figwheel.client.focus_msgs.call(null,inst_49647,inst_49643);
var inst_49649 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_49648);
var inst_49650 = cljs.core.first.call(null,inst_49648);
var inst_49651 = figwheel.client.autoload_QMARK_.call(null);
var state_49690__$1 = (function (){var statearr_49705 = state_49690;
(statearr_49705[(9)] = inst_49649);

(statearr_49705[(8)] = inst_49650);

return statearr_49705;
})();
if(cljs.core.truth_(inst_49651)){
var statearr_49706_49730 = state_49690__$1;
(statearr_49706_49730[(1)] = (8));

} else {
var statearr_49707_49731 = state_49690__$1;
(statearr_49707_49731[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49691 === (14))){
var inst_49661 = (state_49690[(2)]);
var state_49690__$1 = state_49690;
var statearr_49708_49732 = state_49690__$1;
(statearr_49708_49732[(2)] = inst_49661);

(statearr_49708_49732[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49691 === (16))){
var state_49690__$1 = state_49690;
var statearr_49709_49733 = state_49690__$1;
(statearr_49709_49733[(2)] = null);

(statearr_49709_49733[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49691 === (10))){
var inst_49682 = (state_49690[(2)]);
var state_49690__$1 = (function (){var statearr_49710 = state_49690;
(statearr_49710[(11)] = inst_49682);

return statearr_49710;
})();
var statearr_49711_49734 = state_49690__$1;
(statearr_49711_49734[(2)] = null);

(statearr_49711_49734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49691 === (8))){
var inst_49649 = (state_49690[(9)]);
var inst_49653 = figwheel.client.reload_file_state_QMARK_.call(null,inst_49649,opts);
var state_49690__$1 = state_49690;
if(cljs.core.truth_(inst_49653)){
var statearr_49712_49735 = state_49690__$1;
(statearr_49712_49735[(1)] = (11));

} else {
var statearr_49713_49736 = state_49690__$1;
(statearr_49713_49736[(1)] = (12));

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
});})(c__44371__auto___49718,ch))
;
return ((function (switch__44281__auto__,c__44371__auto___49718,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__44282__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__44282__auto____0 = (function (){
var statearr_49714 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49714[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__44282__auto__);

(statearr_49714[(1)] = (1));

return statearr_49714;
});
var figwheel$client$file_reloader_plugin_$_state_machine__44282__auto____1 = (function (state_49690){
while(true){
var ret_value__44283__auto__ = (function (){try{while(true){
var result__44284__auto__ = switch__44281__auto__.call(null,state_49690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44284__auto__;
}
break;
}
}catch (e49715){if((e49715 instanceof Object)){
var ex__44285__auto__ = e49715;
var statearr_49716_49737 = state_49690;
(statearr_49716_49737[(5)] = ex__44285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49738 = state_49690;
state_49690 = G__49738;
continue;
} else {
return ret_value__44283__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__44282__auto__ = function(state_49690){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__44282__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__44282__auto____1.call(this,state_49690);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__44282__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__44282__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__44282__auto__;
})()
;})(switch__44281__auto__,c__44371__auto___49718,ch))
})();
var state__44373__auto__ = (function (){var statearr_49717 = f__44372__auto__.call(null);
(statearr_49717[(6)] = c__44371__auto___49718);

return statearr_49717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44373__auto__);
});})(c__44371__auto___49718,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__49739_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__49739_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_49741 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_49741){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e49740){if((e49740 instanceof Error)){
var e = e49740;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_49741], null));
} else {
var e = e49740;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_49741))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__49742){
var map__49743 = p__49742;
var map__49743__$1 = ((((!((map__49743 == null)))?((((map__49743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49743.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49743):map__49743);
var opts = map__49743__$1;
var build_id = cljs.core.get.call(null,map__49743__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__49743,map__49743__$1,opts,build_id){
return (function (p__49745){
var vec__49746 = p__49745;
var seq__49747 = cljs.core.seq.call(null,vec__49746);
var first__49748 = cljs.core.first.call(null,seq__49747);
var seq__49747__$1 = cljs.core.next.call(null,seq__49747);
var map__49749 = first__49748;
var map__49749__$1 = ((((!((map__49749 == null)))?((((map__49749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49749.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49749):map__49749);
var msg = map__49749__$1;
var msg_name = cljs.core.get.call(null,map__49749__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49747__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__49746,seq__49747,first__49748,seq__49747__$1,map__49749,map__49749__$1,msg,msg_name,_,map__49743,map__49743__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__49746,seq__49747,first__49748,seq__49747__$1,map__49749,map__49749__$1,msg,msg_name,_,map__49743,map__49743__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__49743,map__49743__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__49751){
var vec__49752 = p__49751;
var seq__49753 = cljs.core.seq.call(null,vec__49752);
var first__49754 = cljs.core.first.call(null,seq__49753);
var seq__49753__$1 = cljs.core.next.call(null,seq__49753);
var map__49755 = first__49754;
var map__49755__$1 = ((((!((map__49755 == null)))?((((map__49755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49755.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49755):map__49755);
var msg = map__49755__$1;
var msg_name = cljs.core.get.call(null,map__49755__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49753__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__49757){
var map__49758 = p__49757;
var map__49758__$1 = ((((!((map__49758 == null)))?((((map__49758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49758.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49758):map__49758);
var on_compile_warning = cljs.core.get.call(null,map__49758__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__49758__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__49758,map__49758__$1,on_compile_warning,on_compile_fail){
return (function (p__49760){
var vec__49761 = p__49760;
var seq__49762 = cljs.core.seq.call(null,vec__49761);
var first__49763 = cljs.core.first.call(null,seq__49762);
var seq__49762__$1 = cljs.core.next.call(null,seq__49762);
var map__49764 = first__49763;
var map__49764__$1 = ((((!((map__49764 == null)))?((((map__49764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49764.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49764):map__49764);
var msg = map__49764__$1;
var msg_name = cljs.core.get.call(null,map__49764__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49762__$1;
var pred__49766 = cljs.core._EQ_;
var expr__49767 = msg_name;
if(cljs.core.truth_(pred__49766.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__49767))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__49766.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__49767))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__49758,map__49758__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__44371__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44371__auto__,msg_hist,msg_names,msg){
return (function (){
var f__44372__auto__ = (function (){var switch__44281__auto__ = ((function (c__44371__auto__,msg_hist,msg_names,msg){
return (function (state_49856){
var state_val_49857 = (state_49856[(1)]);
if((state_val_49857 === (7))){
var inst_49776 = (state_49856[(2)]);
var state_49856__$1 = state_49856;
if(cljs.core.truth_(inst_49776)){
var statearr_49858_49905 = state_49856__$1;
(statearr_49858_49905[(1)] = (8));

} else {
var statearr_49859_49906 = state_49856__$1;
(statearr_49859_49906[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49857 === (20))){
var inst_49850 = (state_49856[(2)]);
var state_49856__$1 = state_49856;
var statearr_49860_49907 = state_49856__$1;
(statearr_49860_49907[(2)] = inst_49850);

(statearr_49860_49907[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49857 === (27))){
var inst_49846 = (state_49856[(2)]);
var state_49856__$1 = state_49856;
var statearr_49861_49908 = state_49856__$1;
(statearr_49861_49908[(2)] = inst_49846);

(statearr_49861_49908[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49857 === (1))){
var inst_49769 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_49856__$1 = state_49856;
if(cljs.core.truth_(inst_49769)){
var statearr_49862_49909 = state_49856__$1;
(statearr_49862_49909[(1)] = (2));

} else {
var statearr_49863_49910 = state_49856__$1;
(statearr_49863_49910[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49857 === (24))){
var inst_49848 = (state_49856[(2)]);
var state_49856__$1 = state_49856;
var statearr_49864_49911 = state_49856__$1;
(statearr_49864_49911[(2)] = inst_49848);

(statearr_49864_49911[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49857 === (4))){
var inst_49854 = (state_49856[(2)]);
var state_49856__$1 = state_49856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49856__$1,inst_49854);
} else {
if((state_val_49857 === (15))){
var inst_49852 = (state_49856[(2)]);
var state_49856__$1 = state_49856;
var statearr_49865_49912 = state_49856__$1;
(statearr_49865_49912[(2)] = inst_49852);

(statearr_49865_49912[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49857 === (21))){
var inst_49805 = (state_49856[(2)]);
var inst_49806 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49807 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49806);
var state_49856__$1 = (function (){var statearr_49866 = state_49856;
(statearr_49866[(7)] = inst_49805);

return statearr_49866;
})();
var statearr_49867_49913 = state_49856__$1;
(statearr_49867_49913[(2)] = inst_49807);

(statearr_49867_49913[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49857 === (31))){
var inst_49835 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_49856__$1 = state_49856;
if(cljs.core.truth_(inst_49835)){
var statearr_49868_49914 = state_49856__$1;
(statearr_49868_49914[(1)] = (34));

} else {
var statearr_49869_49915 = state_49856__$1;
(statearr_49869_49915[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49857 === (32))){
var inst_49844 = (state_49856[(2)]);
var state_49856__$1 = state_49856;
var statearr_49870_49916 = state_49856__$1;
(statearr_49870_49916[(2)] = inst_49844);

(statearr_49870_49916[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49857 === (33))){
var inst_49831 = (state_49856[(2)]);
var inst_49832 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49833 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49832);
var state_49856__$1 = (function (){var statearr_49871 = state_49856;
(statearr_49871[(8)] = inst_49831);

return statearr_49871;
})();
var statearr_49872_49917 = state_49856__$1;
(statearr_49872_49917[(2)] = inst_49833);

(statearr_49872_49917[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49857 === (13))){
var inst_49790 = figwheel.client.heads_up.clear.call(null);
var state_49856__$1 = state_49856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49856__$1,(16),inst_49790);
} else {
if((state_val_49857 === (22))){
var inst_49811 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49812 = figwheel.client.heads_up.append_warning_message.call(null,inst_49811);
var state_49856__$1 = state_49856;
var statearr_49873_49918 = state_49856__$1;
(statearr_49873_49918[(2)] = inst_49812);

(statearr_49873_49918[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49857 === (36))){
var inst_49842 = (state_49856[(2)]);
var state_49856__$1 = state_49856;
var statearr_49874_49919 = state_49856__$1;
(statearr_49874_49919[(2)] = inst_49842);

(statearr_49874_49919[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49857 === (29))){
var inst_49822 = (state_49856[(2)]);
var inst_49823 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49824 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49823);
var state_49856__$1 = (function (){var statearr_49875 = state_49856;
(statearr_49875[(9)] = inst_49822);

return statearr_49875;
})();
var statearr_49876_49920 = state_49856__$1;
(statearr_49876_49920[(2)] = inst_49824);

(statearr_49876_49920[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49857 === (6))){
var inst_49771 = (state_49856[(10)]);
var state_49856__$1 = state_49856;
var statearr_49877_49921 = state_49856__$1;
(statearr_49877_49921[(2)] = inst_49771);

(statearr_49877_49921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49857 === (28))){
var inst_49818 = (state_49856[(2)]);
var inst_49819 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49820 = figwheel.client.heads_up.display_warning.call(null,inst_49819);
var state_49856__$1 = (function (){var statearr_49878 = state_49856;
(statearr_49878[(11)] = inst_49818);

return statearr_49878;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49856__$1,(29),inst_49820);
} else {
if((state_val_49857 === (25))){
var inst_49816 = figwheel.client.heads_up.clear.call(null);
var state_49856__$1 = state_49856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49856__$1,(28),inst_49816);
} else {
if((state_val_49857 === (34))){
var inst_49837 = figwheel.client.heads_up.flash_loaded.call(null);
var state_49856__$1 = state_49856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49856__$1,(37),inst_49837);
} else {
if((state_val_49857 === (17))){
var inst_49796 = (state_49856[(2)]);
var inst_49797 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49798 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49797);
var state_49856__$1 = (function (){var statearr_49879 = state_49856;
(statearr_49879[(12)] = inst_49796);

return statearr_49879;
})();
var statearr_49880_49922 = state_49856__$1;
(statearr_49880_49922[(2)] = inst_49798);

(statearr_49880_49922[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49857 === (3))){
var inst_49788 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_49856__$1 = state_49856;
if(cljs.core.truth_(inst_49788)){
var statearr_49881_49923 = state_49856__$1;
(statearr_49881_49923[(1)] = (13));

} else {
var statearr_49882_49924 = state_49856__$1;
(statearr_49882_49924[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49857 === (12))){
var inst_49784 = (state_49856[(2)]);
var state_49856__$1 = state_49856;
var statearr_49883_49925 = state_49856__$1;
(statearr_49883_49925[(2)] = inst_49784);

(statearr_49883_49925[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49857 === (2))){
var inst_49771 = (state_49856[(10)]);
var inst_49771__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_49856__$1 = (function (){var statearr_49884 = state_49856;
(statearr_49884[(10)] = inst_49771__$1);

return statearr_49884;
})();
if(cljs.core.truth_(inst_49771__$1)){
var statearr_49885_49926 = state_49856__$1;
(statearr_49885_49926[(1)] = (5));

} else {
var statearr_49886_49927 = state_49856__$1;
(statearr_49886_49927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49857 === (23))){
var inst_49814 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_49856__$1 = state_49856;
if(cljs.core.truth_(inst_49814)){
var statearr_49887_49928 = state_49856__$1;
(statearr_49887_49928[(1)] = (25));

} else {
var statearr_49888_49929 = state_49856__$1;
(statearr_49888_49929[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49857 === (35))){
var state_49856__$1 = state_49856;
var statearr_49889_49930 = state_49856__$1;
(statearr_49889_49930[(2)] = null);

(statearr_49889_49930[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49857 === (19))){
var inst_49809 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_49856__$1 = state_49856;
if(cljs.core.truth_(inst_49809)){
var statearr_49890_49931 = state_49856__$1;
(statearr_49890_49931[(1)] = (22));

} else {
var statearr_49891_49932 = state_49856__$1;
(statearr_49891_49932[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49857 === (11))){
var inst_49780 = (state_49856[(2)]);
var state_49856__$1 = state_49856;
var statearr_49892_49933 = state_49856__$1;
(statearr_49892_49933[(2)] = inst_49780);

(statearr_49892_49933[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49857 === (9))){
var inst_49782 = figwheel.client.heads_up.clear.call(null);
var state_49856__$1 = state_49856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49856__$1,(12),inst_49782);
} else {
if((state_val_49857 === (5))){
var inst_49773 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_49856__$1 = state_49856;
var statearr_49893_49934 = state_49856__$1;
(statearr_49893_49934[(2)] = inst_49773);

(statearr_49893_49934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49857 === (14))){
var inst_49800 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_49856__$1 = state_49856;
if(cljs.core.truth_(inst_49800)){
var statearr_49894_49935 = state_49856__$1;
(statearr_49894_49935[(1)] = (18));

} else {
var statearr_49895_49936 = state_49856__$1;
(statearr_49895_49936[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49857 === (26))){
var inst_49826 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_49856__$1 = state_49856;
if(cljs.core.truth_(inst_49826)){
var statearr_49896_49937 = state_49856__$1;
(statearr_49896_49937[(1)] = (30));

} else {
var statearr_49897_49938 = state_49856__$1;
(statearr_49897_49938[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49857 === (16))){
var inst_49792 = (state_49856[(2)]);
var inst_49793 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49794 = figwheel.client.heads_up.display_exception.call(null,inst_49793);
var state_49856__$1 = (function (){var statearr_49898 = state_49856;
(statearr_49898[(13)] = inst_49792);

return statearr_49898;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49856__$1,(17),inst_49794);
} else {
if((state_val_49857 === (30))){
var inst_49828 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49829 = figwheel.client.heads_up.display_warning.call(null,inst_49828);
var state_49856__$1 = state_49856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49856__$1,(33),inst_49829);
} else {
if((state_val_49857 === (10))){
var inst_49786 = (state_49856[(2)]);
var state_49856__$1 = state_49856;
var statearr_49899_49939 = state_49856__$1;
(statearr_49899_49939[(2)] = inst_49786);

(statearr_49899_49939[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49857 === (18))){
var inst_49802 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49803 = figwheel.client.heads_up.display_exception.call(null,inst_49802);
var state_49856__$1 = state_49856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49856__$1,(21),inst_49803);
} else {
if((state_val_49857 === (37))){
var inst_49839 = (state_49856[(2)]);
var state_49856__$1 = state_49856;
var statearr_49900_49940 = state_49856__$1;
(statearr_49900_49940[(2)] = inst_49839);

(statearr_49900_49940[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49857 === (8))){
var inst_49778 = figwheel.client.heads_up.flash_loaded.call(null);
var state_49856__$1 = state_49856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49856__$1,(11),inst_49778);
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
});})(c__44371__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__44281__auto__,c__44371__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44282__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44282__auto____0 = (function (){
var statearr_49901 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49901[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44282__auto__);

(statearr_49901[(1)] = (1));

return statearr_49901;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44282__auto____1 = (function (state_49856){
while(true){
var ret_value__44283__auto__ = (function (){try{while(true){
var result__44284__auto__ = switch__44281__auto__.call(null,state_49856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44284__auto__;
}
break;
}
}catch (e49902){if((e49902 instanceof Object)){
var ex__44285__auto__ = e49902;
var statearr_49903_49941 = state_49856;
(statearr_49903_49941[(5)] = ex__44285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49942 = state_49856;
state_49856 = G__49942;
continue;
} else {
return ret_value__44283__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44282__auto__ = function(state_49856){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44282__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44282__auto____1.call(this,state_49856);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44282__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44282__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44282__auto__;
})()
;})(switch__44281__auto__,c__44371__auto__,msg_hist,msg_names,msg))
})();
var state__44373__auto__ = (function (){var statearr_49904 = f__44372__auto__.call(null);
(statearr_49904[(6)] = c__44371__auto__);

return statearr_49904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44373__auto__);
});})(c__44371__auto__,msg_hist,msg_names,msg))
);

return c__44371__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__44371__auto___49971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44371__auto___49971,ch){
return (function (){
var f__44372__auto__ = (function (){var switch__44281__auto__ = ((function (c__44371__auto___49971,ch){
return (function (state_49957){
var state_val_49958 = (state_49957[(1)]);
if((state_val_49958 === (1))){
var state_49957__$1 = state_49957;
var statearr_49959_49972 = state_49957__$1;
(statearr_49959_49972[(2)] = null);

(statearr_49959_49972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49958 === (2))){
var state_49957__$1 = state_49957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49957__$1,(4),ch);
} else {
if((state_val_49958 === (3))){
var inst_49955 = (state_49957[(2)]);
var state_49957__$1 = state_49957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49957__$1,inst_49955);
} else {
if((state_val_49958 === (4))){
var inst_49945 = (state_49957[(7)]);
var inst_49945__$1 = (state_49957[(2)]);
var state_49957__$1 = (function (){var statearr_49960 = state_49957;
(statearr_49960[(7)] = inst_49945__$1);

return statearr_49960;
})();
if(cljs.core.truth_(inst_49945__$1)){
var statearr_49961_49973 = state_49957__$1;
(statearr_49961_49973[(1)] = (5));

} else {
var statearr_49962_49974 = state_49957__$1;
(statearr_49962_49974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49958 === (5))){
var inst_49945 = (state_49957[(7)]);
var inst_49947 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_49945);
var state_49957__$1 = state_49957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49957__$1,(8),inst_49947);
} else {
if((state_val_49958 === (6))){
var state_49957__$1 = state_49957;
var statearr_49963_49975 = state_49957__$1;
(statearr_49963_49975[(2)] = null);

(statearr_49963_49975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49958 === (7))){
var inst_49953 = (state_49957[(2)]);
var state_49957__$1 = state_49957;
var statearr_49964_49976 = state_49957__$1;
(statearr_49964_49976[(2)] = inst_49953);

(statearr_49964_49976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49958 === (8))){
var inst_49949 = (state_49957[(2)]);
var state_49957__$1 = (function (){var statearr_49965 = state_49957;
(statearr_49965[(8)] = inst_49949);

return statearr_49965;
})();
var statearr_49966_49977 = state_49957__$1;
(statearr_49966_49977[(2)] = null);

(statearr_49966_49977[(1)] = (2));


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
});})(c__44371__auto___49971,ch))
;
return ((function (switch__44281__auto__,c__44371__auto___49971,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__44282__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__44282__auto____0 = (function (){
var statearr_49967 = [null,null,null,null,null,null,null,null,null];
(statearr_49967[(0)] = figwheel$client$heads_up_plugin_$_state_machine__44282__auto__);

(statearr_49967[(1)] = (1));

return statearr_49967;
});
var figwheel$client$heads_up_plugin_$_state_machine__44282__auto____1 = (function (state_49957){
while(true){
var ret_value__44283__auto__ = (function (){try{while(true){
var result__44284__auto__ = switch__44281__auto__.call(null,state_49957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44284__auto__;
}
break;
}
}catch (e49968){if((e49968 instanceof Object)){
var ex__44285__auto__ = e49968;
var statearr_49969_49978 = state_49957;
(statearr_49969_49978[(5)] = ex__44285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49979 = state_49957;
state_49957 = G__49979;
continue;
} else {
return ret_value__44283__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__44282__auto__ = function(state_49957){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__44282__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__44282__auto____1.call(this,state_49957);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__44282__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__44282__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__44282__auto__;
})()
;})(switch__44281__auto__,c__44371__auto___49971,ch))
})();
var state__44373__auto__ = (function (){var statearr_49970 = f__44372__auto__.call(null);
(statearr_49970[(6)] = c__44371__auto___49971);

return statearr_49970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44373__auto__);
});})(c__44371__auto___49971,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__44371__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44371__auto__){
return (function (){
var f__44372__auto__ = (function (){var switch__44281__auto__ = ((function (c__44371__auto__){
return (function (state_49985){
var state_val_49986 = (state_49985[(1)]);
if((state_val_49986 === (1))){
var inst_49980 = cljs.core.async.timeout.call(null,(3000));
var state_49985__$1 = state_49985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49985__$1,(2),inst_49980);
} else {
if((state_val_49986 === (2))){
var inst_49982 = (state_49985[(2)]);
var inst_49983 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_49985__$1 = (function (){var statearr_49987 = state_49985;
(statearr_49987[(7)] = inst_49982);

return statearr_49987;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49985__$1,inst_49983);
} else {
return null;
}
}
});})(c__44371__auto__))
;
return ((function (switch__44281__auto__,c__44371__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__44282__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__44282__auto____0 = (function (){
var statearr_49988 = [null,null,null,null,null,null,null,null];
(statearr_49988[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__44282__auto__);

(statearr_49988[(1)] = (1));

return statearr_49988;
});
var figwheel$client$enforce_project_plugin_$_state_machine__44282__auto____1 = (function (state_49985){
while(true){
var ret_value__44283__auto__ = (function (){try{while(true){
var result__44284__auto__ = switch__44281__auto__.call(null,state_49985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44284__auto__;
}
break;
}
}catch (e49989){if((e49989 instanceof Object)){
var ex__44285__auto__ = e49989;
var statearr_49990_49992 = state_49985;
(statearr_49990_49992[(5)] = ex__44285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49993 = state_49985;
state_49985 = G__49993;
continue;
} else {
return ret_value__44283__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__44282__auto__ = function(state_49985){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__44282__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__44282__auto____1.call(this,state_49985);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__44282__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__44282__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__44282__auto__;
})()
;})(switch__44281__auto__,c__44371__auto__))
})();
var state__44373__auto__ = (function (){var statearr_49991 = f__44372__auto__.call(null);
(statearr_49991[(6)] = c__44371__auto__);

return statearr_49991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44373__auto__);
});})(c__44371__auto__))
);

return c__44371__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__44371__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44371__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__44372__auto__ = (function (){var switch__44281__auto__ = ((function (c__44371__auto__,figwheel_version,temp__5457__auto__){
return (function (state_50000){
var state_val_50001 = (state_50000[(1)]);
if((state_val_50001 === (1))){
var inst_49994 = cljs.core.async.timeout.call(null,(2000));
var state_50000__$1 = state_50000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50000__$1,(2),inst_49994);
} else {
if((state_val_50001 === (2))){
var inst_49996 = (state_50000[(2)]);
var inst_49997 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_49998 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_49997);
var state_50000__$1 = (function (){var statearr_50002 = state_50000;
(statearr_50002[(7)] = inst_49996);

return statearr_50002;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50000__$1,inst_49998);
} else {
return null;
}
}
});})(c__44371__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__44281__auto__,c__44371__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44282__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44282__auto____0 = (function (){
var statearr_50003 = [null,null,null,null,null,null,null,null];
(statearr_50003[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44282__auto__);

(statearr_50003[(1)] = (1));

return statearr_50003;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44282__auto____1 = (function (state_50000){
while(true){
var ret_value__44283__auto__ = (function (){try{while(true){
var result__44284__auto__ = switch__44281__auto__.call(null,state_50000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44284__auto__;
}
break;
}
}catch (e50004){if((e50004 instanceof Object)){
var ex__44285__auto__ = e50004;
var statearr_50005_50007 = state_50000;
(statearr_50005_50007[(5)] = ex__44285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50008 = state_50000;
state_50000 = G__50008;
continue;
} else {
return ret_value__44283__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44282__auto__ = function(state_50000){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44282__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44282__auto____1.call(this,state_50000);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44282__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44282__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44282__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44282__auto__;
})()
;})(switch__44281__auto__,c__44371__auto__,figwheel_version,temp__5457__auto__))
})();
var state__44373__auto__ = (function (){var statearr_50006 = f__44372__auto__.call(null);
(statearr_50006[(6)] = c__44371__auto__);

return statearr_50006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44373__auto__);
});})(c__44371__auto__,figwheel_version,temp__5457__auto__))
);

return c__44371__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__50009){
var map__50010 = p__50009;
var map__50010__$1 = ((((!((map__50010 == null)))?((((map__50010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50010.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50010):map__50010);
var file = cljs.core.get.call(null,map__50010__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__50010__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__50010__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__50012 = "";
var G__50012__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50012),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__50012);
var G__50012__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50012__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__50012__$1);
if(cljs.core.truth_((function (){var and__40657__auto__ = line;
if(cljs.core.truth_(and__40657__auto__)){
return column;
} else {
return and__40657__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50012__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__50012__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__50013){
var map__50014 = p__50013;
var map__50014__$1 = ((((!((map__50014 == null)))?((((map__50014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50014.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50014):map__50014);
var ed = map__50014__$1;
var formatted_exception = cljs.core.get.call(null,map__50014__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__50014__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__50014__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__50016_50020 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__50017_50021 = null;
var count__50018_50022 = (0);
var i__50019_50023 = (0);
while(true){
if((i__50019_50023 < count__50018_50022)){
var msg_50024 = cljs.core._nth.call(null,chunk__50017_50021,i__50019_50023);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_50024);

var G__50025 = seq__50016_50020;
var G__50026 = chunk__50017_50021;
var G__50027 = count__50018_50022;
var G__50028 = (i__50019_50023 + (1));
seq__50016_50020 = G__50025;
chunk__50017_50021 = G__50026;
count__50018_50022 = G__50027;
i__50019_50023 = G__50028;
continue;
} else {
var temp__5457__auto___50029 = cljs.core.seq.call(null,seq__50016_50020);
if(temp__5457__auto___50029){
var seq__50016_50030__$1 = temp__5457__auto___50029;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50016_50030__$1)){
var c__41600__auto___50031 = cljs.core.chunk_first.call(null,seq__50016_50030__$1);
var G__50032 = cljs.core.chunk_rest.call(null,seq__50016_50030__$1);
var G__50033 = c__41600__auto___50031;
var G__50034 = cljs.core.count.call(null,c__41600__auto___50031);
var G__50035 = (0);
seq__50016_50020 = G__50032;
chunk__50017_50021 = G__50033;
count__50018_50022 = G__50034;
i__50019_50023 = G__50035;
continue;
} else {
var msg_50036 = cljs.core.first.call(null,seq__50016_50030__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_50036);

var G__50037 = cljs.core.next.call(null,seq__50016_50030__$1);
var G__50038 = null;
var G__50039 = (0);
var G__50040 = (0);
seq__50016_50020 = G__50037;
chunk__50017_50021 = G__50038;
count__50018_50022 = G__50039;
i__50019_50023 = G__50040;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__50041){
var map__50042 = p__50041;
var map__50042__$1 = ((((!((map__50042 == null)))?((((map__50042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50042.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50042):map__50042);
var w = map__50042__$1;
var message = cljs.core.get.call(null,map__50042__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__40657__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__40657__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__40657__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__50044 = cljs.core.seq.call(null,plugins);
var chunk__50045 = null;
var count__50046 = (0);
var i__50047 = (0);
while(true){
if((i__50047 < count__50046)){
var vec__50048 = cljs.core._nth.call(null,chunk__50045,i__50047);
var k = cljs.core.nth.call(null,vec__50048,(0),null);
var plugin = cljs.core.nth.call(null,vec__50048,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50054 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__50044,chunk__50045,count__50046,i__50047,pl_50054,vec__50048,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_50054.call(null,msg_hist);
});})(seq__50044,chunk__50045,count__50046,i__50047,pl_50054,vec__50048,k,plugin))
);
} else {
}

var G__50055 = seq__50044;
var G__50056 = chunk__50045;
var G__50057 = count__50046;
var G__50058 = (i__50047 + (1));
seq__50044 = G__50055;
chunk__50045 = G__50056;
count__50046 = G__50057;
i__50047 = G__50058;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__50044);
if(temp__5457__auto__){
var seq__50044__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50044__$1)){
var c__41600__auto__ = cljs.core.chunk_first.call(null,seq__50044__$1);
var G__50059 = cljs.core.chunk_rest.call(null,seq__50044__$1);
var G__50060 = c__41600__auto__;
var G__50061 = cljs.core.count.call(null,c__41600__auto__);
var G__50062 = (0);
seq__50044 = G__50059;
chunk__50045 = G__50060;
count__50046 = G__50061;
i__50047 = G__50062;
continue;
} else {
var vec__50051 = cljs.core.first.call(null,seq__50044__$1);
var k = cljs.core.nth.call(null,vec__50051,(0),null);
var plugin = cljs.core.nth.call(null,vec__50051,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50063 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__50044,chunk__50045,count__50046,i__50047,pl_50063,vec__50051,k,plugin,seq__50044__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_50063.call(null,msg_hist);
});})(seq__50044,chunk__50045,count__50046,i__50047,pl_50063,vec__50051,k,plugin,seq__50044__$1,temp__5457__auto__))
);
} else {
}

var G__50064 = cljs.core.next.call(null,seq__50044__$1);
var G__50065 = null;
var G__50066 = (0);
var G__50067 = (0);
seq__50044 = G__50064;
chunk__50045 = G__50065;
count__50046 = G__50066;
i__50047 = G__50067;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__50069 = arguments.length;
switch (G__50069) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__50070_50075 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__50071_50076 = null;
var count__50072_50077 = (0);
var i__50073_50078 = (0);
while(true){
if((i__50073_50078 < count__50072_50077)){
var msg_50079 = cljs.core._nth.call(null,chunk__50071_50076,i__50073_50078);
figwheel.client.socket.handle_incoming_message.call(null,msg_50079);

var G__50080 = seq__50070_50075;
var G__50081 = chunk__50071_50076;
var G__50082 = count__50072_50077;
var G__50083 = (i__50073_50078 + (1));
seq__50070_50075 = G__50080;
chunk__50071_50076 = G__50081;
count__50072_50077 = G__50082;
i__50073_50078 = G__50083;
continue;
} else {
var temp__5457__auto___50084 = cljs.core.seq.call(null,seq__50070_50075);
if(temp__5457__auto___50084){
var seq__50070_50085__$1 = temp__5457__auto___50084;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50070_50085__$1)){
var c__41600__auto___50086 = cljs.core.chunk_first.call(null,seq__50070_50085__$1);
var G__50087 = cljs.core.chunk_rest.call(null,seq__50070_50085__$1);
var G__50088 = c__41600__auto___50086;
var G__50089 = cljs.core.count.call(null,c__41600__auto___50086);
var G__50090 = (0);
seq__50070_50075 = G__50087;
chunk__50071_50076 = G__50088;
count__50072_50077 = G__50089;
i__50073_50078 = G__50090;
continue;
} else {
var msg_50091 = cljs.core.first.call(null,seq__50070_50085__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_50091);

var G__50092 = cljs.core.next.call(null,seq__50070_50085__$1);
var G__50093 = null;
var G__50094 = (0);
var G__50095 = (0);
seq__50070_50075 = G__50092;
chunk__50071_50076 = G__50093;
count__50072_50077 = G__50094;
i__50073_50078 = G__50095;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__41955__auto__ = [];
var len__41948__auto___50100 = arguments.length;
var i__41949__auto___50101 = (0);
while(true){
if((i__41949__auto___50101 < len__41948__auto___50100)){
args__41955__auto__.push((arguments[i__41949__auto___50101]));

var G__50102 = (i__41949__auto___50101 + (1));
i__41949__auto___50101 = G__50102;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__50097){
var map__50098 = p__50097;
var map__50098__$1 = ((((!((map__50098 == null)))?((((map__50098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50098.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50098):map__50098);
var opts = map__50098__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq50096){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50096));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e50103){if((e50103 instanceof Error)){
var e = e50103;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e50103;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__50104){
var map__50105 = p__50104;
var map__50105__$1 = ((((!((map__50105 == null)))?((((map__50105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50105.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50105):map__50105);
var msg_name = cljs.core.get.call(null,map__50105__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map
