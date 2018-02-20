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
}catch (e50636){if((e50636 instanceof Error)){
var e = e50636;
return "Error: Unable to stringify";
} else {
throw e50636;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__50639 = arguments.length;
switch (G__50639) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__50637_SHARP_){
if(typeof p1__50637_SHARP_ === 'string'){
return p1__50637_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__50637_SHARP_);
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
var len__41948__auto___50642 = arguments.length;
var i__41949__auto___50643 = (0);
while(true){
if((i__41949__auto___50643 < len__41948__auto___50642)){
args__41955__auto__.push((arguments[i__41949__auto___50643]));

var G__50644 = (i__41949__auto___50643 + (1));
i__41949__auto___50643 = G__50644;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq50641){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50641));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__41955__auto__ = [];
var len__41948__auto___50646 = arguments.length;
var i__41949__auto___50647 = (0);
while(true){
if((i__41949__auto___50647 < len__41948__auto___50646)){
args__41955__auto__.push((arguments[i__41949__auto___50647]));

var G__50648 = (i__41949__auto___50647 + (1));
i__41949__auto___50647 = G__50648;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq50645){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50645));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__50649){
var map__50650 = p__50649;
var map__50650__$1 = ((((!((map__50650 == null)))?((((map__50650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50650.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50650):map__50650);
var message = cljs.core.get.call(null,map__50650__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__50650__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__46898__auto___50729 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46898__auto___50729,ch){
return (function (){
var f__46899__auto__ = (function (){var switch__46808__auto__ = ((function (c__46898__auto___50729,ch){
return (function (state_50701){
var state_val_50702 = (state_50701[(1)]);
if((state_val_50702 === (7))){
var inst_50697 = (state_50701[(2)]);
var state_50701__$1 = state_50701;
var statearr_50703_50730 = state_50701__$1;
(statearr_50703_50730[(2)] = inst_50697);

(statearr_50703_50730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50702 === (1))){
var state_50701__$1 = state_50701;
var statearr_50704_50731 = state_50701__$1;
(statearr_50704_50731[(2)] = null);

(statearr_50704_50731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50702 === (4))){
var inst_50654 = (state_50701[(7)]);
var inst_50654__$1 = (state_50701[(2)]);
var state_50701__$1 = (function (){var statearr_50705 = state_50701;
(statearr_50705[(7)] = inst_50654__$1);

return statearr_50705;
})();
if(cljs.core.truth_(inst_50654__$1)){
var statearr_50706_50732 = state_50701__$1;
(statearr_50706_50732[(1)] = (5));

} else {
var statearr_50707_50733 = state_50701__$1;
(statearr_50707_50733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50702 === (15))){
var inst_50661 = (state_50701[(8)]);
var inst_50676 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_50661);
var inst_50677 = cljs.core.first.call(null,inst_50676);
var inst_50678 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_50677);
var inst_50679 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50678)].join('');
var inst_50680 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_50679);
var state_50701__$1 = state_50701;
var statearr_50708_50734 = state_50701__$1;
(statearr_50708_50734[(2)] = inst_50680);

(statearr_50708_50734[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50702 === (13))){
var inst_50685 = (state_50701[(2)]);
var state_50701__$1 = state_50701;
var statearr_50709_50735 = state_50701__$1;
(statearr_50709_50735[(2)] = inst_50685);

(statearr_50709_50735[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50702 === (6))){
var state_50701__$1 = state_50701;
var statearr_50710_50736 = state_50701__$1;
(statearr_50710_50736[(2)] = null);

(statearr_50710_50736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50702 === (17))){
var inst_50683 = (state_50701[(2)]);
var state_50701__$1 = state_50701;
var statearr_50711_50737 = state_50701__$1;
(statearr_50711_50737[(2)] = inst_50683);

(statearr_50711_50737[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50702 === (3))){
var inst_50699 = (state_50701[(2)]);
var state_50701__$1 = state_50701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50701__$1,inst_50699);
} else {
if((state_val_50702 === (12))){
var inst_50660 = (state_50701[(9)]);
var inst_50674 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_50660,opts);
var state_50701__$1 = state_50701;
if(cljs.core.truth_(inst_50674)){
var statearr_50712_50738 = state_50701__$1;
(statearr_50712_50738[(1)] = (15));

} else {
var statearr_50713_50739 = state_50701__$1;
(statearr_50713_50739[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50702 === (2))){
var state_50701__$1 = state_50701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50701__$1,(4),ch);
} else {
if((state_val_50702 === (11))){
var inst_50661 = (state_50701[(8)]);
var inst_50666 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50667 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_50661);
var inst_50668 = cljs.core.async.timeout.call(null,(1000));
var inst_50669 = [inst_50667,inst_50668];
var inst_50670 = (new cljs.core.PersistentVector(null,2,(5),inst_50666,inst_50669,null));
var state_50701__$1 = state_50701;
return cljs.core.async.ioc_alts_BANG_.call(null,state_50701__$1,(14),inst_50670);
} else {
if((state_val_50702 === (9))){
var inst_50661 = (state_50701[(8)]);
var inst_50687 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_50688 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_50661);
var inst_50689 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_50688);
var inst_50690 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50689)].join('');
var inst_50691 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_50690);
var state_50701__$1 = (function (){var statearr_50714 = state_50701;
(statearr_50714[(10)] = inst_50687);

return statearr_50714;
})();
var statearr_50715_50740 = state_50701__$1;
(statearr_50715_50740[(2)] = inst_50691);

(statearr_50715_50740[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50702 === (5))){
var inst_50654 = (state_50701[(7)]);
var inst_50656 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_50657 = (new cljs.core.PersistentArrayMap(null,2,inst_50656,null));
var inst_50658 = (new cljs.core.PersistentHashSet(null,inst_50657,null));
var inst_50659 = figwheel.client.focus_msgs.call(null,inst_50658,inst_50654);
var inst_50660 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_50659);
var inst_50661 = cljs.core.first.call(null,inst_50659);
var inst_50662 = figwheel.client.autoload_QMARK_.call(null);
var state_50701__$1 = (function (){var statearr_50716 = state_50701;
(statearr_50716[(8)] = inst_50661);

(statearr_50716[(9)] = inst_50660);

return statearr_50716;
})();
if(cljs.core.truth_(inst_50662)){
var statearr_50717_50741 = state_50701__$1;
(statearr_50717_50741[(1)] = (8));

} else {
var statearr_50718_50742 = state_50701__$1;
(statearr_50718_50742[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50702 === (14))){
var inst_50672 = (state_50701[(2)]);
var state_50701__$1 = state_50701;
var statearr_50719_50743 = state_50701__$1;
(statearr_50719_50743[(2)] = inst_50672);

(statearr_50719_50743[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50702 === (16))){
var state_50701__$1 = state_50701;
var statearr_50720_50744 = state_50701__$1;
(statearr_50720_50744[(2)] = null);

(statearr_50720_50744[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50702 === (10))){
var inst_50693 = (state_50701[(2)]);
var state_50701__$1 = (function (){var statearr_50721 = state_50701;
(statearr_50721[(11)] = inst_50693);

return statearr_50721;
})();
var statearr_50722_50745 = state_50701__$1;
(statearr_50722_50745[(2)] = null);

(statearr_50722_50745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50702 === (8))){
var inst_50660 = (state_50701[(9)]);
var inst_50664 = figwheel.client.reload_file_state_QMARK_.call(null,inst_50660,opts);
var state_50701__$1 = state_50701;
if(cljs.core.truth_(inst_50664)){
var statearr_50723_50746 = state_50701__$1;
(statearr_50723_50746[(1)] = (11));

} else {
var statearr_50724_50747 = state_50701__$1;
(statearr_50724_50747[(1)] = (12));

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
});})(c__46898__auto___50729,ch))
;
return ((function (switch__46808__auto__,c__46898__auto___50729,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__46809__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__46809__auto____0 = (function (){
var statearr_50725 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50725[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__46809__auto__);

(statearr_50725[(1)] = (1));

return statearr_50725;
});
var figwheel$client$file_reloader_plugin_$_state_machine__46809__auto____1 = (function (state_50701){
while(true){
var ret_value__46810__auto__ = (function (){try{while(true){
var result__46811__auto__ = switch__46808__auto__.call(null,state_50701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46811__auto__;
}
break;
}
}catch (e50726){if((e50726 instanceof Object)){
var ex__46812__auto__ = e50726;
var statearr_50727_50748 = state_50701;
(statearr_50727_50748[(5)] = ex__46812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50749 = state_50701;
state_50701 = G__50749;
continue;
} else {
return ret_value__46810__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__46809__auto__ = function(state_50701){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__46809__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__46809__auto____1.call(this,state_50701);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__46809__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__46809__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__46809__auto__;
})()
;})(switch__46808__auto__,c__46898__auto___50729,ch))
})();
var state__46900__auto__ = (function (){var statearr_50728 = f__46899__auto__.call(null);
(statearr_50728[(6)] = c__46898__auto___50729);

return statearr_50728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46900__auto__);
});})(c__46898__auto___50729,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__50750_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__50750_SHARP_));
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
var base_path_50752 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_50752){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e50751){if((e50751 instanceof Error)){
var e = e50751;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_50752], null));
} else {
var e = e50751;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_50752))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__50753){
var map__50754 = p__50753;
var map__50754__$1 = ((((!((map__50754 == null)))?((((map__50754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50754.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50754):map__50754);
var opts = map__50754__$1;
var build_id = cljs.core.get.call(null,map__50754__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__50754,map__50754__$1,opts,build_id){
return (function (p__50756){
var vec__50757 = p__50756;
var seq__50758 = cljs.core.seq.call(null,vec__50757);
var first__50759 = cljs.core.first.call(null,seq__50758);
var seq__50758__$1 = cljs.core.next.call(null,seq__50758);
var map__50760 = first__50759;
var map__50760__$1 = ((((!((map__50760 == null)))?((((map__50760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50760.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50760):map__50760);
var msg = map__50760__$1;
var msg_name = cljs.core.get.call(null,map__50760__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__50758__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__50757,seq__50758,first__50759,seq__50758__$1,map__50760,map__50760__$1,msg,msg_name,_,map__50754,map__50754__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__50757,seq__50758,first__50759,seq__50758__$1,map__50760,map__50760__$1,msg,msg_name,_,map__50754,map__50754__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__50754,map__50754__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__50762){
var vec__50763 = p__50762;
var seq__50764 = cljs.core.seq.call(null,vec__50763);
var first__50765 = cljs.core.first.call(null,seq__50764);
var seq__50764__$1 = cljs.core.next.call(null,seq__50764);
var map__50766 = first__50765;
var map__50766__$1 = ((((!((map__50766 == null)))?((((map__50766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50766.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50766):map__50766);
var msg = map__50766__$1;
var msg_name = cljs.core.get.call(null,map__50766__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__50764__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__50768){
var map__50769 = p__50768;
var map__50769__$1 = ((((!((map__50769 == null)))?((((map__50769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50769.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50769):map__50769);
var on_compile_warning = cljs.core.get.call(null,map__50769__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__50769__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__50769,map__50769__$1,on_compile_warning,on_compile_fail){
return (function (p__50771){
var vec__50772 = p__50771;
var seq__50773 = cljs.core.seq.call(null,vec__50772);
var first__50774 = cljs.core.first.call(null,seq__50773);
var seq__50773__$1 = cljs.core.next.call(null,seq__50773);
var map__50775 = first__50774;
var map__50775__$1 = ((((!((map__50775 == null)))?((((map__50775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50775.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50775):map__50775);
var msg = map__50775__$1;
var msg_name = cljs.core.get.call(null,map__50775__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__50773__$1;
var pred__50777 = cljs.core._EQ_;
var expr__50778 = msg_name;
if(cljs.core.truth_(pred__50777.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__50778))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__50777.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__50778))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__50769,map__50769__$1,on_compile_warning,on_compile_fail))
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
var c__46898__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46898__auto__,msg_hist,msg_names,msg){
return (function (){
var f__46899__auto__ = (function (){var switch__46808__auto__ = ((function (c__46898__auto__,msg_hist,msg_names,msg){
return (function (state_50867){
var state_val_50868 = (state_50867[(1)]);
if((state_val_50868 === (7))){
var inst_50787 = (state_50867[(2)]);
var state_50867__$1 = state_50867;
if(cljs.core.truth_(inst_50787)){
var statearr_50869_50916 = state_50867__$1;
(statearr_50869_50916[(1)] = (8));

} else {
var statearr_50870_50917 = state_50867__$1;
(statearr_50870_50917[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50868 === (20))){
var inst_50861 = (state_50867[(2)]);
var state_50867__$1 = state_50867;
var statearr_50871_50918 = state_50867__$1;
(statearr_50871_50918[(2)] = inst_50861);

(statearr_50871_50918[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50868 === (27))){
var inst_50857 = (state_50867[(2)]);
var state_50867__$1 = state_50867;
var statearr_50872_50919 = state_50867__$1;
(statearr_50872_50919[(2)] = inst_50857);

(statearr_50872_50919[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50868 === (1))){
var inst_50780 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_50867__$1 = state_50867;
if(cljs.core.truth_(inst_50780)){
var statearr_50873_50920 = state_50867__$1;
(statearr_50873_50920[(1)] = (2));

} else {
var statearr_50874_50921 = state_50867__$1;
(statearr_50874_50921[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50868 === (24))){
var inst_50859 = (state_50867[(2)]);
var state_50867__$1 = state_50867;
var statearr_50875_50922 = state_50867__$1;
(statearr_50875_50922[(2)] = inst_50859);

(statearr_50875_50922[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50868 === (4))){
var inst_50865 = (state_50867[(2)]);
var state_50867__$1 = state_50867;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50867__$1,inst_50865);
} else {
if((state_val_50868 === (15))){
var inst_50863 = (state_50867[(2)]);
var state_50867__$1 = state_50867;
var statearr_50876_50923 = state_50867__$1;
(statearr_50876_50923[(2)] = inst_50863);

(statearr_50876_50923[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50868 === (21))){
var inst_50816 = (state_50867[(2)]);
var inst_50817 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50818 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50817);
var state_50867__$1 = (function (){var statearr_50877 = state_50867;
(statearr_50877[(7)] = inst_50816);

return statearr_50877;
})();
var statearr_50878_50924 = state_50867__$1;
(statearr_50878_50924[(2)] = inst_50818);

(statearr_50878_50924[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50868 === (31))){
var inst_50846 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_50867__$1 = state_50867;
if(cljs.core.truth_(inst_50846)){
var statearr_50879_50925 = state_50867__$1;
(statearr_50879_50925[(1)] = (34));

} else {
var statearr_50880_50926 = state_50867__$1;
(statearr_50880_50926[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50868 === (32))){
var inst_50855 = (state_50867[(2)]);
var state_50867__$1 = state_50867;
var statearr_50881_50927 = state_50867__$1;
(statearr_50881_50927[(2)] = inst_50855);

(statearr_50881_50927[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50868 === (33))){
var inst_50842 = (state_50867[(2)]);
var inst_50843 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50844 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50843);
var state_50867__$1 = (function (){var statearr_50882 = state_50867;
(statearr_50882[(8)] = inst_50842);

return statearr_50882;
})();
var statearr_50883_50928 = state_50867__$1;
(statearr_50883_50928[(2)] = inst_50844);

(statearr_50883_50928[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50868 === (13))){
var inst_50801 = figwheel.client.heads_up.clear.call(null);
var state_50867__$1 = state_50867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50867__$1,(16),inst_50801);
} else {
if((state_val_50868 === (22))){
var inst_50822 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50823 = figwheel.client.heads_up.append_warning_message.call(null,inst_50822);
var state_50867__$1 = state_50867;
var statearr_50884_50929 = state_50867__$1;
(statearr_50884_50929[(2)] = inst_50823);

(statearr_50884_50929[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50868 === (36))){
var inst_50853 = (state_50867[(2)]);
var state_50867__$1 = state_50867;
var statearr_50885_50930 = state_50867__$1;
(statearr_50885_50930[(2)] = inst_50853);

(statearr_50885_50930[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50868 === (29))){
var inst_50833 = (state_50867[(2)]);
var inst_50834 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50835 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50834);
var state_50867__$1 = (function (){var statearr_50886 = state_50867;
(statearr_50886[(9)] = inst_50833);

return statearr_50886;
})();
var statearr_50887_50931 = state_50867__$1;
(statearr_50887_50931[(2)] = inst_50835);

(statearr_50887_50931[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50868 === (6))){
var inst_50782 = (state_50867[(10)]);
var state_50867__$1 = state_50867;
var statearr_50888_50932 = state_50867__$1;
(statearr_50888_50932[(2)] = inst_50782);

(statearr_50888_50932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50868 === (28))){
var inst_50829 = (state_50867[(2)]);
var inst_50830 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50831 = figwheel.client.heads_up.display_warning.call(null,inst_50830);
var state_50867__$1 = (function (){var statearr_50889 = state_50867;
(statearr_50889[(11)] = inst_50829);

return statearr_50889;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50867__$1,(29),inst_50831);
} else {
if((state_val_50868 === (25))){
var inst_50827 = figwheel.client.heads_up.clear.call(null);
var state_50867__$1 = state_50867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50867__$1,(28),inst_50827);
} else {
if((state_val_50868 === (34))){
var inst_50848 = figwheel.client.heads_up.flash_loaded.call(null);
var state_50867__$1 = state_50867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50867__$1,(37),inst_50848);
} else {
if((state_val_50868 === (17))){
var inst_50807 = (state_50867[(2)]);
var inst_50808 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50809 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50808);
var state_50867__$1 = (function (){var statearr_50890 = state_50867;
(statearr_50890[(12)] = inst_50807);

return statearr_50890;
})();
var statearr_50891_50933 = state_50867__$1;
(statearr_50891_50933[(2)] = inst_50809);

(statearr_50891_50933[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50868 === (3))){
var inst_50799 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_50867__$1 = state_50867;
if(cljs.core.truth_(inst_50799)){
var statearr_50892_50934 = state_50867__$1;
(statearr_50892_50934[(1)] = (13));

} else {
var statearr_50893_50935 = state_50867__$1;
(statearr_50893_50935[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50868 === (12))){
var inst_50795 = (state_50867[(2)]);
var state_50867__$1 = state_50867;
var statearr_50894_50936 = state_50867__$1;
(statearr_50894_50936[(2)] = inst_50795);

(statearr_50894_50936[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50868 === (2))){
var inst_50782 = (state_50867[(10)]);
var inst_50782__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_50867__$1 = (function (){var statearr_50895 = state_50867;
(statearr_50895[(10)] = inst_50782__$1);

return statearr_50895;
})();
if(cljs.core.truth_(inst_50782__$1)){
var statearr_50896_50937 = state_50867__$1;
(statearr_50896_50937[(1)] = (5));

} else {
var statearr_50897_50938 = state_50867__$1;
(statearr_50897_50938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50868 === (23))){
var inst_50825 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_50867__$1 = state_50867;
if(cljs.core.truth_(inst_50825)){
var statearr_50898_50939 = state_50867__$1;
(statearr_50898_50939[(1)] = (25));

} else {
var statearr_50899_50940 = state_50867__$1;
(statearr_50899_50940[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50868 === (35))){
var state_50867__$1 = state_50867;
var statearr_50900_50941 = state_50867__$1;
(statearr_50900_50941[(2)] = null);

(statearr_50900_50941[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50868 === (19))){
var inst_50820 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_50867__$1 = state_50867;
if(cljs.core.truth_(inst_50820)){
var statearr_50901_50942 = state_50867__$1;
(statearr_50901_50942[(1)] = (22));

} else {
var statearr_50902_50943 = state_50867__$1;
(statearr_50902_50943[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50868 === (11))){
var inst_50791 = (state_50867[(2)]);
var state_50867__$1 = state_50867;
var statearr_50903_50944 = state_50867__$1;
(statearr_50903_50944[(2)] = inst_50791);

(statearr_50903_50944[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50868 === (9))){
var inst_50793 = figwheel.client.heads_up.clear.call(null);
var state_50867__$1 = state_50867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50867__$1,(12),inst_50793);
} else {
if((state_val_50868 === (5))){
var inst_50784 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_50867__$1 = state_50867;
var statearr_50904_50945 = state_50867__$1;
(statearr_50904_50945[(2)] = inst_50784);

(statearr_50904_50945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50868 === (14))){
var inst_50811 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_50867__$1 = state_50867;
if(cljs.core.truth_(inst_50811)){
var statearr_50905_50946 = state_50867__$1;
(statearr_50905_50946[(1)] = (18));

} else {
var statearr_50906_50947 = state_50867__$1;
(statearr_50906_50947[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50868 === (26))){
var inst_50837 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_50867__$1 = state_50867;
if(cljs.core.truth_(inst_50837)){
var statearr_50907_50948 = state_50867__$1;
(statearr_50907_50948[(1)] = (30));

} else {
var statearr_50908_50949 = state_50867__$1;
(statearr_50908_50949[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50868 === (16))){
var inst_50803 = (state_50867[(2)]);
var inst_50804 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50805 = figwheel.client.heads_up.display_exception.call(null,inst_50804);
var state_50867__$1 = (function (){var statearr_50909 = state_50867;
(statearr_50909[(13)] = inst_50803);

return statearr_50909;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50867__$1,(17),inst_50805);
} else {
if((state_val_50868 === (30))){
var inst_50839 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50840 = figwheel.client.heads_up.display_warning.call(null,inst_50839);
var state_50867__$1 = state_50867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50867__$1,(33),inst_50840);
} else {
if((state_val_50868 === (10))){
var inst_50797 = (state_50867[(2)]);
var state_50867__$1 = state_50867;
var statearr_50910_50950 = state_50867__$1;
(statearr_50910_50950[(2)] = inst_50797);

(statearr_50910_50950[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50868 === (18))){
var inst_50813 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50814 = figwheel.client.heads_up.display_exception.call(null,inst_50813);
var state_50867__$1 = state_50867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50867__$1,(21),inst_50814);
} else {
if((state_val_50868 === (37))){
var inst_50850 = (state_50867[(2)]);
var state_50867__$1 = state_50867;
var statearr_50911_50951 = state_50867__$1;
(statearr_50911_50951[(2)] = inst_50850);

(statearr_50911_50951[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50868 === (8))){
var inst_50789 = figwheel.client.heads_up.flash_loaded.call(null);
var state_50867__$1 = state_50867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50867__$1,(11),inst_50789);
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
});})(c__46898__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__46808__auto__,c__46898__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46809__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46809__auto____0 = (function (){
var statearr_50912 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50912[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46809__auto__);

(statearr_50912[(1)] = (1));

return statearr_50912;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46809__auto____1 = (function (state_50867){
while(true){
var ret_value__46810__auto__ = (function (){try{while(true){
var result__46811__auto__ = switch__46808__auto__.call(null,state_50867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46811__auto__;
}
break;
}
}catch (e50913){if((e50913 instanceof Object)){
var ex__46812__auto__ = e50913;
var statearr_50914_50952 = state_50867;
(statearr_50914_50952[(5)] = ex__46812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50953 = state_50867;
state_50867 = G__50953;
continue;
} else {
return ret_value__46810__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46809__auto__ = function(state_50867){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46809__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46809__auto____1.call(this,state_50867);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46809__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46809__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46809__auto__;
})()
;})(switch__46808__auto__,c__46898__auto__,msg_hist,msg_names,msg))
})();
var state__46900__auto__ = (function (){var statearr_50915 = f__46899__auto__.call(null);
(statearr_50915[(6)] = c__46898__auto__);

return statearr_50915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46900__auto__);
});})(c__46898__auto__,msg_hist,msg_names,msg))
);

return c__46898__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__46898__auto___50982 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46898__auto___50982,ch){
return (function (){
var f__46899__auto__ = (function (){var switch__46808__auto__ = ((function (c__46898__auto___50982,ch){
return (function (state_50968){
var state_val_50969 = (state_50968[(1)]);
if((state_val_50969 === (1))){
var state_50968__$1 = state_50968;
var statearr_50970_50983 = state_50968__$1;
(statearr_50970_50983[(2)] = null);

(statearr_50970_50983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50969 === (2))){
var state_50968__$1 = state_50968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50968__$1,(4),ch);
} else {
if((state_val_50969 === (3))){
var inst_50966 = (state_50968[(2)]);
var state_50968__$1 = state_50968;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50968__$1,inst_50966);
} else {
if((state_val_50969 === (4))){
var inst_50956 = (state_50968[(7)]);
var inst_50956__$1 = (state_50968[(2)]);
var state_50968__$1 = (function (){var statearr_50971 = state_50968;
(statearr_50971[(7)] = inst_50956__$1);

return statearr_50971;
})();
if(cljs.core.truth_(inst_50956__$1)){
var statearr_50972_50984 = state_50968__$1;
(statearr_50972_50984[(1)] = (5));

} else {
var statearr_50973_50985 = state_50968__$1;
(statearr_50973_50985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50969 === (5))){
var inst_50956 = (state_50968[(7)]);
var inst_50958 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_50956);
var state_50968__$1 = state_50968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50968__$1,(8),inst_50958);
} else {
if((state_val_50969 === (6))){
var state_50968__$1 = state_50968;
var statearr_50974_50986 = state_50968__$1;
(statearr_50974_50986[(2)] = null);

(statearr_50974_50986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50969 === (7))){
var inst_50964 = (state_50968[(2)]);
var state_50968__$1 = state_50968;
var statearr_50975_50987 = state_50968__$1;
(statearr_50975_50987[(2)] = inst_50964);

(statearr_50975_50987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50969 === (8))){
var inst_50960 = (state_50968[(2)]);
var state_50968__$1 = (function (){var statearr_50976 = state_50968;
(statearr_50976[(8)] = inst_50960);

return statearr_50976;
})();
var statearr_50977_50988 = state_50968__$1;
(statearr_50977_50988[(2)] = null);

(statearr_50977_50988[(1)] = (2));


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
});})(c__46898__auto___50982,ch))
;
return ((function (switch__46808__auto__,c__46898__auto___50982,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__46809__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__46809__auto____0 = (function (){
var statearr_50978 = [null,null,null,null,null,null,null,null,null];
(statearr_50978[(0)] = figwheel$client$heads_up_plugin_$_state_machine__46809__auto__);

(statearr_50978[(1)] = (1));

return statearr_50978;
});
var figwheel$client$heads_up_plugin_$_state_machine__46809__auto____1 = (function (state_50968){
while(true){
var ret_value__46810__auto__ = (function (){try{while(true){
var result__46811__auto__ = switch__46808__auto__.call(null,state_50968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46811__auto__;
}
break;
}
}catch (e50979){if((e50979 instanceof Object)){
var ex__46812__auto__ = e50979;
var statearr_50980_50989 = state_50968;
(statearr_50980_50989[(5)] = ex__46812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50990 = state_50968;
state_50968 = G__50990;
continue;
} else {
return ret_value__46810__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__46809__auto__ = function(state_50968){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__46809__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__46809__auto____1.call(this,state_50968);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__46809__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__46809__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__46809__auto__;
})()
;})(switch__46808__auto__,c__46898__auto___50982,ch))
})();
var state__46900__auto__ = (function (){var statearr_50981 = f__46899__auto__.call(null);
(statearr_50981[(6)] = c__46898__auto___50982);

return statearr_50981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46900__auto__);
});})(c__46898__auto___50982,ch))
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
var c__46898__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46898__auto__){
return (function (){
var f__46899__auto__ = (function (){var switch__46808__auto__ = ((function (c__46898__auto__){
return (function (state_50996){
var state_val_50997 = (state_50996[(1)]);
if((state_val_50997 === (1))){
var inst_50991 = cljs.core.async.timeout.call(null,(3000));
var state_50996__$1 = state_50996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50996__$1,(2),inst_50991);
} else {
if((state_val_50997 === (2))){
var inst_50993 = (state_50996[(2)]);
var inst_50994 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_50996__$1 = (function (){var statearr_50998 = state_50996;
(statearr_50998[(7)] = inst_50993);

return statearr_50998;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50996__$1,inst_50994);
} else {
return null;
}
}
});})(c__46898__auto__))
;
return ((function (switch__46808__auto__,c__46898__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__46809__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__46809__auto____0 = (function (){
var statearr_50999 = [null,null,null,null,null,null,null,null];
(statearr_50999[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__46809__auto__);

(statearr_50999[(1)] = (1));

return statearr_50999;
});
var figwheel$client$enforce_project_plugin_$_state_machine__46809__auto____1 = (function (state_50996){
while(true){
var ret_value__46810__auto__ = (function (){try{while(true){
var result__46811__auto__ = switch__46808__auto__.call(null,state_50996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46811__auto__;
}
break;
}
}catch (e51000){if((e51000 instanceof Object)){
var ex__46812__auto__ = e51000;
var statearr_51001_51003 = state_50996;
(statearr_51001_51003[(5)] = ex__46812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51004 = state_50996;
state_50996 = G__51004;
continue;
} else {
return ret_value__46810__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__46809__auto__ = function(state_50996){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__46809__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__46809__auto____1.call(this,state_50996);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__46809__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__46809__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__46809__auto__;
})()
;})(switch__46808__auto__,c__46898__auto__))
})();
var state__46900__auto__ = (function (){var statearr_51002 = f__46899__auto__.call(null);
(statearr_51002[(6)] = c__46898__auto__);

return statearr_51002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46900__auto__);
});})(c__46898__auto__))
);

return c__46898__auto__;
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
var c__46898__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46898__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__46899__auto__ = (function (){var switch__46808__auto__ = ((function (c__46898__auto__,figwheel_version,temp__5457__auto__){
return (function (state_51011){
var state_val_51012 = (state_51011[(1)]);
if((state_val_51012 === (1))){
var inst_51005 = cljs.core.async.timeout.call(null,(2000));
var state_51011__$1 = state_51011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51011__$1,(2),inst_51005);
} else {
if((state_val_51012 === (2))){
var inst_51007 = (state_51011[(2)]);
var inst_51008 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_51009 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_51008);
var state_51011__$1 = (function (){var statearr_51013 = state_51011;
(statearr_51013[(7)] = inst_51007);

return statearr_51013;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51011__$1,inst_51009);
} else {
return null;
}
}
});})(c__46898__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__46808__auto__,c__46898__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46809__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46809__auto____0 = (function (){
var statearr_51014 = [null,null,null,null,null,null,null,null];
(statearr_51014[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46809__auto__);

(statearr_51014[(1)] = (1));

return statearr_51014;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46809__auto____1 = (function (state_51011){
while(true){
var ret_value__46810__auto__ = (function (){try{while(true){
var result__46811__auto__ = switch__46808__auto__.call(null,state_51011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46811__auto__;
}
break;
}
}catch (e51015){if((e51015 instanceof Object)){
var ex__46812__auto__ = e51015;
var statearr_51016_51018 = state_51011;
(statearr_51016_51018[(5)] = ex__46812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51019 = state_51011;
state_51011 = G__51019;
continue;
} else {
return ret_value__46810__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46809__auto__ = function(state_51011){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46809__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46809__auto____1.call(this,state_51011);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46809__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46809__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46809__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46809__auto__;
})()
;})(switch__46808__auto__,c__46898__auto__,figwheel_version,temp__5457__auto__))
})();
var state__46900__auto__ = (function (){var statearr_51017 = f__46899__auto__.call(null);
(statearr_51017[(6)] = c__46898__auto__);

return statearr_51017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46900__auto__);
});})(c__46898__auto__,figwheel_version,temp__5457__auto__))
);

return c__46898__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__51020){
var map__51021 = p__51020;
var map__51021__$1 = ((((!((map__51021 == null)))?((((map__51021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51021.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51021):map__51021);
var file = cljs.core.get.call(null,map__51021__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__51021__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__51021__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__51023 = "";
var G__51023__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51023),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__51023);
var G__51023__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51023__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__51023__$1);
if(cljs.core.truth_((function (){var and__40657__auto__ = line;
if(cljs.core.truth_(and__40657__auto__)){
return column;
} else {
return and__40657__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51023__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__51023__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__51024){
var map__51025 = p__51024;
var map__51025__$1 = ((((!((map__51025 == null)))?((((map__51025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51025.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51025):map__51025);
var ed = map__51025__$1;
var formatted_exception = cljs.core.get.call(null,map__51025__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__51025__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__51025__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__51027_51031 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__51028_51032 = null;
var count__51029_51033 = (0);
var i__51030_51034 = (0);
while(true){
if((i__51030_51034 < count__51029_51033)){
var msg_51035 = cljs.core._nth.call(null,chunk__51028_51032,i__51030_51034);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_51035);

var G__51036 = seq__51027_51031;
var G__51037 = chunk__51028_51032;
var G__51038 = count__51029_51033;
var G__51039 = (i__51030_51034 + (1));
seq__51027_51031 = G__51036;
chunk__51028_51032 = G__51037;
count__51029_51033 = G__51038;
i__51030_51034 = G__51039;
continue;
} else {
var temp__5457__auto___51040 = cljs.core.seq.call(null,seq__51027_51031);
if(temp__5457__auto___51040){
var seq__51027_51041__$1 = temp__5457__auto___51040;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51027_51041__$1)){
var c__41600__auto___51042 = cljs.core.chunk_first.call(null,seq__51027_51041__$1);
var G__51043 = cljs.core.chunk_rest.call(null,seq__51027_51041__$1);
var G__51044 = c__41600__auto___51042;
var G__51045 = cljs.core.count.call(null,c__41600__auto___51042);
var G__51046 = (0);
seq__51027_51031 = G__51043;
chunk__51028_51032 = G__51044;
count__51029_51033 = G__51045;
i__51030_51034 = G__51046;
continue;
} else {
var msg_51047 = cljs.core.first.call(null,seq__51027_51041__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_51047);

var G__51048 = cljs.core.next.call(null,seq__51027_51041__$1);
var G__51049 = null;
var G__51050 = (0);
var G__51051 = (0);
seq__51027_51031 = G__51048;
chunk__51028_51032 = G__51049;
count__51029_51033 = G__51050;
i__51030_51034 = G__51051;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__51052){
var map__51053 = p__51052;
var map__51053__$1 = ((((!((map__51053 == null)))?((((map__51053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51053.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51053):map__51053);
var w = map__51053__$1;
var message = cljs.core.get.call(null,map__51053__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__51055 = cljs.core.seq.call(null,plugins);
var chunk__51056 = null;
var count__51057 = (0);
var i__51058 = (0);
while(true){
if((i__51058 < count__51057)){
var vec__51059 = cljs.core._nth.call(null,chunk__51056,i__51058);
var k = cljs.core.nth.call(null,vec__51059,(0),null);
var plugin = cljs.core.nth.call(null,vec__51059,(1),null);
if(cljs.core.truth_(plugin)){
var pl_51065 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__51055,chunk__51056,count__51057,i__51058,pl_51065,vec__51059,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_51065.call(null,msg_hist);
});})(seq__51055,chunk__51056,count__51057,i__51058,pl_51065,vec__51059,k,plugin))
);
} else {
}

var G__51066 = seq__51055;
var G__51067 = chunk__51056;
var G__51068 = count__51057;
var G__51069 = (i__51058 + (1));
seq__51055 = G__51066;
chunk__51056 = G__51067;
count__51057 = G__51068;
i__51058 = G__51069;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__51055);
if(temp__5457__auto__){
var seq__51055__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51055__$1)){
var c__41600__auto__ = cljs.core.chunk_first.call(null,seq__51055__$1);
var G__51070 = cljs.core.chunk_rest.call(null,seq__51055__$1);
var G__51071 = c__41600__auto__;
var G__51072 = cljs.core.count.call(null,c__41600__auto__);
var G__51073 = (0);
seq__51055 = G__51070;
chunk__51056 = G__51071;
count__51057 = G__51072;
i__51058 = G__51073;
continue;
} else {
var vec__51062 = cljs.core.first.call(null,seq__51055__$1);
var k = cljs.core.nth.call(null,vec__51062,(0),null);
var plugin = cljs.core.nth.call(null,vec__51062,(1),null);
if(cljs.core.truth_(plugin)){
var pl_51074 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__51055,chunk__51056,count__51057,i__51058,pl_51074,vec__51062,k,plugin,seq__51055__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_51074.call(null,msg_hist);
});})(seq__51055,chunk__51056,count__51057,i__51058,pl_51074,vec__51062,k,plugin,seq__51055__$1,temp__5457__auto__))
);
} else {
}

var G__51075 = cljs.core.next.call(null,seq__51055__$1);
var G__51076 = null;
var G__51077 = (0);
var G__51078 = (0);
seq__51055 = G__51075;
chunk__51056 = G__51076;
count__51057 = G__51077;
i__51058 = G__51078;
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
var G__51080 = arguments.length;
switch (G__51080) {
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

var seq__51081_51086 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__51082_51087 = null;
var count__51083_51088 = (0);
var i__51084_51089 = (0);
while(true){
if((i__51084_51089 < count__51083_51088)){
var msg_51090 = cljs.core._nth.call(null,chunk__51082_51087,i__51084_51089);
figwheel.client.socket.handle_incoming_message.call(null,msg_51090);

var G__51091 = seq__51081_51086;
var G__51092 = chunk__51082_51087;
var G__51093 = count__51083_51088;
var G__51094 = (i__51084_51089 + (1));
seq__51081_51086 = G__51091;
chunk__51082_51087 = G__51092;
count__51083_51088 = G__51093;
i__51084_51089 = G__51094;
continue;
} else {
var temp__5457__auto___51095 = cljs.core.seq.call(null,seq__51081_51086);
if(temp__5457__auto___51095){
var seq__51081_51096__$1 = temp__5457__auto___51095;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51081_51096__$1)){
var c__41600__auto___51097 = cljs.core.chunk_first.call(null,seq__51081_51096__$1);
var G__51098 = cljs.core.chunk_rest.call(null,seq__51081_51096__$1);
var G__51099 = c__41600__auto___51097;
var G__51100 = cljs.core.count.call(null,c__41600__auto___51097);
var G__51101 = (0);
seq__51081_51086 = G__51098;
chunk__51082_51087 = G__51099;
count__51083_51088 = G__51100;
i__51084_51089 = G__51101;
continue;
} else {
var msg_51102 = cljs.core.first.call(null,seq__51081_51096__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_51102);

var G__51103 = cljs.core.next.call(null,seq__51081_51096__$1);
var G__51104 = null;
var G__51105 = (0);
var G__51106 = (0);
seq__51081_51086 = G__51103;
chunk__51082_51087 = G__51104;
count__51083_51088 = G__51105;
i__51084_51089 = G__51106;
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
var len__41948__auto___51111 = arguments.length;
var i__41949__auto___51112 = (0);
while(true){
if((i__41949__auto___51112 < len__41948__auto___51111)){
args__41955__auto__.push((arguments[i__41949__auto___51112]));

var G__51113 = (i__41949__auto___51112 + (1));
i__41949__auto___51112 = G__51113;
continue;
} else {
}
break;
}

var argseq__41956__auto__ = ((((0) < args__41955__auto__.length))?(new cljs.core.IndexedSeq(args__41955__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__41956__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__51108){
var map__51109 = p__51108;
var map__51109__$1 = ((((!((map__51109 == null)))?((((map__51109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51109.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51109):map__51109);
var opts = map__51109__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq51107){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51107));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e51114){if((e51114 instanceof Error)){
var e = e51114;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e51114;

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
return (function (p__51115){
var map__51116 = p__51115;
var map__51116__$1 = ((((!((map__51116 == null)))?((((map__51116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51116.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51116):map__51116);
var msg_name = cljs.core.get.call(null,map__51116__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map
