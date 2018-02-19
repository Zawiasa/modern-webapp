// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
if(typeof figwheel.client.autoload !== 'undefined'){
} else {
figwheel.client.autoload = cljs.core.atom.call(null,true);
}
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
return cljs.core.swap_BANG_.call(null,figwheel.client.autoload,cljs.core.not);
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35140__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__35140 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35141__i = 0, G__35141__a = new Array(arguments.length -  0);
while (G__35141__i < G__35141__a.length) {G__35141__a[G__35141__i] = arguments[G__35141__i + 0]; ++G__35141__i;}
  args = new cljs.core.IndexedSeq(G__35141__a,0);
} 
return G__35140__delegate.call(this,args);};
G__35140.cljs$lang$maxFixedArity = 0;
G__35140.cljs$lang$applyTo = (function (arglist__35142){
var args = cljs.core.seq(arglist__35142);
return G__35140__delegate(args);
});
G__35140.cljs$core$IFn$_invoke$arity$variadic = G__35140__delegate;
return G__35140;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35143){
var map__35146 = p__35143;
var map__35146__$1 = ((((!((map__35146 == null)))?((((map__35146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35146):map__35146);
var message = cljs.core.get.call(null,map__35146__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35146__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__21705__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21705__auto__)){
return or__21705__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__21693__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__21693__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__21693__auto__;
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
var c__24785__auto___35294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24785__auto___35294,ch){
return (function (){
var f__24786__auto__ = (function (){var switch__24720__auto__ = ((function (c__24785__auto___35294,ch){
return (function (state_35264){
var state_val_35265 = (state_35264[(1)]);
if((state_val_35265 === (7))){
var inst_35260 = (state_35264[(2)]);
var state_35264__$1 = state_35264;
var statearr_35266_35295 = state_35264__$1;
(statearr_35266_35295[(2)] = inst_35260);

(statearr_35266_35295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (1))){
var state_35264__$1 = state_35264;
var statearr_35267_35296 = state_35264__$1;
(statearr_35267_35296[(2)] = null);

(statearr_35267_35296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (4))){
var inst_35223 = (state_35264[(7)]);
var inst_35223__$1 = (state_35264[(2)]);
var state_35264__$1 = (function (){var statearr_35268 = state_35264;
(statearr_35268[(7)] = inst_35223__$1);

return statearr_35268;
})();
if(cljs.core.truth_(inst_35223__$1)){
var statearr_35269_35297 = state_35264__$1;
(statearr_35269_35297[(1)] = (5));

} else {
var statearr_35270_35298 = state_35264__$1;
(statearr_35270_35298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (15))){
var inst_35230 = (state_35264[(8)]);
var inst_35245 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35230);
var inst_35246 = cljs.core.first.call(null,inst_35245);
var inst_35247 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35246);
var inst_35248 = console.warn("Figwheel: Not loading code with warnings - ",inst_35247);
var state_35264__$1 = state_35264;
var statearr_35271_35299 = state_35264__$1;
(statearr_35271_35299[(2)] = inst_35248);

(statearr_35271_35299[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (13))){
var inst_35253 = (state_35264[(2)]);
var state_35264__$1 = state_35264;
var statearr_35272_35300 = state_35264__$1;
(statearr_35272_35300[(2)] = inst_35253);

(statearr_35272_35300[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (6))){
var state_35264__$1 = state_35264;
var statearr_35273_35301 = state_35264__$1;
(statearr_35273_35301[(2)] = null);

(statearr_35273_35301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (17))){
var inst_35251 = (state_35264[(2)]);
var state_35264__$1 = state_35264;
var statearr_35274_35302 = state_35264__$1;
(statearr_35274_35302[(2)] = inst_35251);

(statearr_35274_35302[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (3))){
var inst_35262 = (state_35264[(2)]);
var state_35264__$1 = state_35264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35264__$1,inst_35262);
} else {
if((state_val_35265 === (12))){
var inst_35229 = (state_35264[(9)]);
var inst_35243 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35229,opts);
var state_35264__$1 = state_35264;
if(cljs.core.truth_(inst_35243)){
var statearr_35275_35303 = state_35264__$1;
(statearr_35275_35303[(1)] = (15));

} else {
var statearr_35276_35304 = state_35264__$1;
(statearr_35276_35304[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (2))){
var state_35264__$1 = state_35264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35264__$1,(4),ch);
} else {
if((state_val_35265 === (11))){
var inst_35230 = (state_35264[(8)]);
var inst_35235 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35236 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35230);
var inst_35237 = cljs.core.async.timeout.call(null,(1000));
var inst_35238 = [inst_35236,inst_35237];
var inst_35239 = (new cljs.core.PersistentVector(null,2,(5),inst_35235,inst_35238,null));
var state_35264__$1 = state_35264;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35264__$1,(14),inst_35239);
} else {
if((state_val_35265 === (9))){
var state_35264__$1 = state_35264;
var statearr_35277_35305 = state_35264__$1;
(statearr_35277_35305[(2)] = null);

(statearr_35277_35305[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (5))){
var inst_35223 = (state_35264[(7)]);
var inst_35225 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35226 = (new cljs.core.PersistentArrayMap(null,2,inst_35225,null));
var inst_35227 = (new cljs.core.PersistentHashSet(null,inst_35226,null));
var inst_35228 = figwheel.client.focus_msgs.call(null,inst_35227,inst_35223);
var inst_35229 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35228);
var inst_35230 = cljs.core.first.call(null,inst_35228);
var inst_35231 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_35264__$1 = (function (){var statearr_35278 = state_35264;
(statearr_35278[(8)] = inst_35230);

(statearr_35278[(9)] = inst_35229);

return statearr_35278;
})();
if(cljs.core.truth_(inst_35231)){
var statearr_35279_35306 = state_35264__$1;
(statearr_35279_35306[(1)] = (8));

} else {
var statearr_35280_35307 = state_35264__$1;
(statearr_35280_35307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (14))){
var inst_35241 = (state_35264[(2)]);
var state_35264__$1 = state_35264;
var statearr_35281_35308 = state_35264__$1;
(statearr_35281_35308[(2)] = inst_35241);

(statearr_35281_35308[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (16))){
var state_35264__$1 = state_35264;
var statearr_35282_35309 = state_35264__$1;
(statearr_35282_35309[(2)] = null);

(statearr_35282_35309[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (10))){
var inst_35256 = (state_35264[(2)]);
var state_35264__$1 = (function (){var statearr_35283 = state_35264;
(statearr_35283[(10)] = inst_35256);

return statearr_35283;
})();
var statearr_35284_35310 = state_35264__$1;
(statearr_35284_35310[(2)] = null);

(statearr_35284_35310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (8))){
var inst_35229 = (state_35264[(9)]);
var inst_35233 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35229,opts);
var state_35264__$1 = state_35264;
if(cljs.core.truth_(inst_35233)){
var statearr_35285_35311 = state_35264__$1;
(statearr_35285_35311[(1)] = (11));

} else {
var statearr_35286_35312 = state_35264__$1;
(statearr_35286_35312[(1)] = (12));

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
});})(c__24785__auto___35294,ch))
;
return ((function (switch__24720__auto__,c__24785__auto___35294,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24721__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24721__auto____0 = (function (){
var statearr_35290 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35290[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24721__auto__);

(statearr_35290[(1)] = (1));

return statearr_35290;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24721__auto____1 = (function (state_35264){
while(true){
var ret_value__24722__auto__ = (function (){try{while(true){
var result__24723__auto__ = switch__24720__auto__.call(null,state_35264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24723__auto__;
}
break;
}
}catch (e35291){if((e35291 instanceof Object)){
var ex__24724__auto__ = e35291;
var statearr_35292_35313 = state_35264;
(statearr_35292_35313[(5)] = ex__24724__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35314 = state_35264;
state_35264 = G__35314;
continue;
} else {
return ret_value__24722__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24721__auto__ = function(state_35264){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24721__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24721__auto____1.call(this,state_35264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24721__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24721__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24721__auto__;
})()
;})(switch__24720__auto__,c__24785__auto___35294,ch))
})();
var state__24787__auto__ = (function (){var statearr_35293 = f__24786__auto__.call(null);
(statearr_35293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24785__auto___35294);

return statearr_35293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24787__auto__);
});})(c__24785__auto___35294,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35315_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35315_SHARP_));
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
var base_path_35322 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_35322){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_35320 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_35321 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_35320,_STAR_print_newline_STAR_35321,base_path_35322){
return (function() { 
var G__35323__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__35323 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35324__i = 0, G__35324__a = new Array(arguments.length -  0);
while (G__35324__i < G__35324__a.length) {G__35324__a[G__35324__i] = arguments[G__35324__i + 0]; ++G__35324__i;}
  args = new cljs.core.IndexedSeq(G__35324__a,0);
} 
return G__35323__delegate.call(this,args);};
G__35323.cljs$lang$maxFixedArity = 0;
G__35323.cljs$lang$applyTo = (function (arglist__35325){
var args = cljs.core.seq(arglist__35325);
return G__35323__delegate(args);
});
G__35323.cljs$core$IFn$_invoke$arity$variadic = G__35323__delegate;
return G__35323;
})()
;})(_STAR_print_fn_STAR_35320,_STAR_print_newline_STAR_35321,base_path_35322))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_35321;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_35320;
}}catch (e35319){if((e35319 instanceof Error)){
var e = e35319;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35322], null));
} else {
var e = e35319;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_35322))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35326){
var map__35333 = p__35326;
var map__35333__$1 = ((((!((map__35333 == null)))?((((map__35333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35333):map__35333);
var opts = map__35333__$1;
var build_id = cljs.core.get.call(null,map__35333__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35333,map__35333__$1,opts,build_id){
return (function (p__35335){
var vec__35336 = p__35335;
var map__35337 = cljs.core.nth.call(null,vec__35336,(0),null);
var map__35337__$1 = ((((!((map__35337 == null)))?((((map__35337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35337):map__35337);
var msg = map__35337__$1;
var msg_name = cljs.core.get.call(null,map__35337__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__35336,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__35336,map__35337,map__35337__$1,msg,msg_name,_,map__35333,map__35333__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35336,map__35337,map__35337__$1,msg,msg_name,_,map__35333,map__35333__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35333,map__35333__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__35343){
var vec__35344 = p__35343;
var map__35345 = cljs.core.nth.call(null,vec__35344,(0),null);
var map__35345__$1 = ((((!((map__35345 == null)))?((((map__35345.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35345.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35345):map__35345);
var msg = map__35345__$1;
var msg_name = cljs.core.get.call(null,map__35345__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__35344,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35347){
var map__35357 = p__35347;
var map__35357__$1 = ((((!((map__35357 == null)))?((((map__35357.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35357.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35357):map__35357);
var on_compile_warning = cljs.core.get.call(null,map__35357__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__35357__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__35357,map__35357__$1,on_compile_warning,on_compile_fail){
return (function (p__35359){
var vec__35360 = p__35359;
var map__35361 = cljs.core.nth.call(null,vec__35360,(0),null);
var map__35361__$1 = ((((!((map__35361 == null)))?((((map__35361.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35361.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35361):map__35361);
var msg = map__35361__$1;
var msg_name = cljs.core.get.call(null,map__35361__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__35360,(1));
var pred__35363 = cljs.core._EQ_;
var expr__35364 = msg_name;
if(cljs.core.truth_(pred__35363.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35364))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35363.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35364))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__35357,map__35357__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24785__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24785__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24786__auto__ = (function (){var switch__24720__auto__ = ((function (c__24785__auto__,msg_hist,msg_names,msg){
return (function (state_35580){
var state_val_35581 = (state_35580[(1)]);
if((state_val_35581 === (7))){
var inst_35504 = (state_35580[(2)]);
var state_35580__$1 = state_35580;
if(cljs.core.truth_(inst_35504)){
var statearr_35582_35628 = state_35580__$1;
(statearr_35582_35628[(1)] = (8));

} else {
var statearr_35583_35629 = state_35580__$1;
(statearr_35583_35629[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35581 === (20))){
var inst_35574 = (state_35580[(2)]);
var state_35580__$1 = state_35580;
var statearr_35584_35630 = state_35580__$1;
(statearr_35584_35630[(2)] = inst_35574);

(statearr_35584_35630[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35581 === (27))){
var inst_35570 = (state_35580[(2)]);
var state_35580__$1 = state_35580;
var statearr_35585_35631 = state_35580__$1;
(statearr_35585_35631[(2)] = inst_35570);

(statearr_35585_35631[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35581 === (1))){
var inst_35497 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35580__$1 = state_35580;
if(cljs.core.truth_(inst_35497)){
var statearr_35586_35632 = state_35580__$1;
(statearr_35586_35632[(1)] = (2));

} else {
var statearr_35587_35633 = state_35580__$1;
(statearr_35587_35633[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35581 === (24))){
var inst_35572 = (state_35580[(2)]);
var state_35580__$1 = state_35580;
var statearr_35588_35634 = state_35580__$1;
(statearr_35588_35634[(2)] = inst_35572);

(statearr_35588_35634[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35581 === (4))){
var inst_35578 = (state_35580[(2)]);
var state_35580__$1 = state_35580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35580__$1,inst_35578);
} else {
if((state_val_35581 === (15))){
var inst_35576 = (state_35580[(2)]);
var state_35580__$1 = state_35580;
var statearr_35589_35635 = state_35580__$1;
(statearr_35589_35635[(2)] = inst_35576);

(statearr_35589_35635[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35581 === (21))){
var inst_35535 = (state_35580[(2)]);
var state_35580__$1 = state_35580;
var statearr_35590_35636 = state_35580__$1;
(statearr_35590_35636[(2)] = inst_35535);

(statearr_35590_35636[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35581 === (31))){
var inst_35559 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35580__$1 = state_35580;
if(cljs.core.truth_(inst_35559)){
var statearr_35591_35637 = state_35580__$1;
(statearr_35591_35637[(1)] = (34));

} else {
var statearr_35592_35638 = state_35580__$1;
(statearr_35592_35638[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35581 === (32))){
var inst_35568 = (state_35580[(2)]);
var state_35580__$1 = state_35580;
var statearr_35593_35639 = state_35580__$1;
(statearr_35593_35639[(2)] = inst_35568);

(statearr_35593_35639[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35581 === (33))){
var inst_35557 = (state_35580[(2)]);
var state_35580__$1 = state_35580;
var statearr_35594_35640 = state_35580__$1;
(statearr_35594_35640[(2)] = inst_35557);

(statearr_35594_35640[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35581 === (13))){
var inst_35518 = figwheel.client.heads_up.clear.call(null);
var state_35580__$1 = state_35580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35580__$1,(16),inst_35518);
} else {
if((state_val_35581 === (22))){
var inst_35539 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35540 = figwheel.client.heads_up.append_message.call(null,inst_35539);
var state_35580__$1 = state_35580;
var statearr_35595_35641 = state_35580__$1;
(statearr_35595_35641[(2)] = inst_35540);

(statearr_35595_35641[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35581 === (36))){
var inst_35566 = (state_35580[(2)]);
var state_35580__$1 = state_35580;
var statearr_35596_35642 = state_35580__$1;
(statearr_35596_35642[(2)] = inst_35566);

(statearr_35596_35642[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35581 === (29))){
var inst_35550 = (state_35580[(2)]);
var state_35580__$1 = state_35580;
var statearr_35597_35643 = state_35580__$1;
(statearr_35597_35643[(2)] = inst_35550);

(statearr_35597_35643[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35581 === (6))){
var inst_35499 = (state_35580[(7)]);
var state_35580__$1 = state_35580;
var statearr_35598_35644 = state_35580__$1;
(statearr_35598_35644[(2)] = inst_35499);

(statearr_35598_35644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35581 === (28))){
var inst_35546 = (state_35580[(2)]);
var inst_35547 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35548 = figwheel.client.heads_up.display_warning.call(null,inst_35547);
var state_35580__$1 = (function (){var statearr_35599 = state_35580;
(statearr_35599[(8)] = inst_35546);

return statearr_35599;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35580__$1,(29),inst_35548);
} else {
if((state_val_35581 === (25))){
var inst_35544 = figwheel.client.heads_up.clear.call(null);
var state_35580__$1 = state_35580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35580__$1,(28),inst_35544);
} else {
if((state_val_35581 === (34))){
var inst_35561 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35580__$1 = state_35580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35580__$1,(37),inst_35561);
} else {
if((state_val_35581 === (17))){
var inst_35526 = (state_35580[(2)]);
var state_35580__$1 = state_35580;
var statearr_35600_35645 = state_35580__$1;
(statearr_35600_35645[(2)] = inst_35526);

(statearr_35600_35645[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35581 === (3))){
var inst_35516 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35580__$1 = state_35580;
if(cljs.core.truth_(inst_35516)){
var statearr_35601_35646 = state_35580__$1;
(statearr_35601_35646[(1)] = (13));

} else {
var statearr_35602_35647 = state_35580__$1;
(statearr_35602_35647[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35581 === (12))){
var inst_35512 = (state_35580[(2)]);
var state_35580__$1 = state_35580;
var statearr_35603_35648 = state_35580__$1;
(statearr_35603_35648[(2)] = inst_35512);

(statearr_35603_35648[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35581 === (2))){
var inst_35499 = (state_35580[(7)]);
var inst_35499__$1 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_35580__$1 = (function (){var statearr_35604 = state_35580;
(statearr_35604[(7)] = inst_35499__$1);

return statearr_35604;
})();
if(cljs.core.truth_(inst_35499__$1)){
var statearr_35605_35649 = state_35580__$1;
(statearr_35605_35649[(1)] = (5));

} else {
var statearr_35606_35650 = state_35580__$1;
(statearr_35606_35650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35581 === (23))){
var inst_35542 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35580__$1 = state_35580;
if(cljs.core.truth_(inst_35542)){
var statearr_35607_35651 = state_35580__$1;
(statearr_35607_35651[(1)] = (25));

} else {
var statearr_35608_35652 = state_35580__$1;
(statearr_35608_35652[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35581 === (35))){
var state_35580__$1 = state_35580;
var statearr_35609_35653 = state_35580__$1;
(statearr_35609_35653[(2)] = null);

(statearr_35609_35653[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35581 === (19))){
var inst_35537 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35580__$1 = state_35580;
if(cljs.core.truth_(inst_35537)){
var statearr_35610_35654 = state_35580__$1;
(statearr_35610_35654[(1)] = (22));

} else {
var statearr_35611_35655 = state_35580__$1;
(statearr_35611_35655[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35581 === (11))){
var inst_35508 = (state_35580[(2)]);
var state_35580__$1 = state_35580;
var statearr_35612_35656 = state_35580__$1;
(statearr_35612_35656[(2)] = inst_35508);

(statearr_35612_35656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35581 === (9))){
var inst_35510 = figwheel.client.heads_up.clear.call(null);
var state_35580__$1 = state_35580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35580__$1,(12),inst_35510);
} else {
if((state_val_35581 === (5))){
var inst_35501 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35580__$1 = state_35580;
var statearr_35613_35657 = state_35580__$1;
(statearr_35613_35657[(2)] = inst_35501);

(statearr_35613_35657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35581 === (14))){
var inst_35528 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35580__$1 = state_35580;
if(cljs.core.truth_(inst_35528)){
var statearr_35614_35658 = state_35580__$1;
(statearr_35614_35658[(1)] = (18));

} else {
var statearr_35615_35659 = state_35580__$1;
(statearr_35615_35659[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35581 === (26))){
var inst_35552 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35580__$1 = state_35580;
if(cljs.core.truth_(inst_35552)){
var statearr_35616_35660 = state_35580__$1;
(statearr_35616_35660[(1)] = (30));

} else {
var statearr_35617_35661 = state_35580__$1;
(statearr_35617_35661[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35581 === (16))){
var inst_35520 = (state_35580[(2)]);
var inst_35521 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35522 = figwheel.client.format_messages.call(null,inst_35521);
var inst_35523 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35524 = figwheel.client.heads_up.display_error.call(null,inst_35522,inst_35523);
var state_35580__$1 = (function (){var statearr_35618 = state_35580;
(statearr_35618[(9)] = inst_35520);

return statearr_35618;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35580__$1,(17),inst_35524);
} else {
if((state_val_35581 === (30))){
var inst_35554 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35555 = figwheel.client.heads_up.display_warning.call(null,inst_35554);
var state_35580__$1 = state_35580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35580__$1,(33),inst_35555);
} else {
if((state_val_35581 === (10))){
var inst_35514 = (state_35580[(2)]);
var state_35580__$1 = state_35580;
var statearr_35619_35662 = state_35580__$1;
(statearr_35619_35662[(2)] = inst_35514);

(statearr_35619_35662[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35581 === (18))){
var inst_35530 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35531 = figwheel.client.format_messages.call(null,inst_35530);
var inst_35532 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35533 = figwheel.client.heads_up.display_error.call(null,inst_35531,inst_35532);
var state_35580__$1 = state_35580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35580__$1,(21),inst_35533);
} else {
if((state_val_35581 === (37))){
var inst_35563 = (state_35580[(2)]);
var state_35580__$1 = state_35580;
var statearr_35620_35663 = state_35580__$1;
(statearr_35620_35663[(2)] = inst_35563);

(statearr_35620_35663[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35581 === (8))){
var inst_35506 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35580__$1 = state_35580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35580__$1,(11),inst_35506);
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
});})(c__24785__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24720__auto__,c__24785__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24721__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24721__auto____0 = (function (){
var statearr_35624 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35624[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24721__auto__);

(statearr_35624[(1)] = (1));

return statearr_35624;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24721__auto____1 = (function (state_35580){
while(true){
var ret_value__24722__auto__ = (function (){try{while(true){
var result__24723__auto__ = switch__24720__auto__.call(null,state_35580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24723__auto__;
}
break;
}
}catch (e35625){if((e35625 instanceof Object)){
var ex__24724__auto__ = e35625;
var statearr_35626_35664 = state_35580;
(statearr_35626_35664[(5)] = ex__24724__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35665 = state_35580;
state_35580 = G__35665;
continue;
} else {
return ret_value__24722__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24721__auto__ = function(state_35580){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24721__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24721__auto____1.call(this,state_35580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24721__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24721__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24721__auto__;
})()
;})(switch__24720__auto__,c__24785__auto__,msg_hist,msg_names,msg))
})();
var state__24787__auto__ = (function (){var statearr_35627 = f__24786__auto__.call(null);
(statearr_35627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24785__auto__);

return statearr_35627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24787__auto__);
});})(c__24785__auto__,msg_hist,msg_names,msg))
);

return c__24785__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24785__auto___35728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24785__auto___35728,ch){
return (function (){
var f__24786__auto__ = (function (){var switch__24720__auto__ = ((function (c__24785__auto___35728,ch){
return (function (state_35711){
var state_val_35712 = (state_35711[(1)]);
if((state_val_35712 === (1))){
var state_35711__$1 = state_35711;
var statearr_35713_35729 = state_35711__$1;
(statearr_35713_35729[(2)] = null);

(statearr_35713_35729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35712 === (2))){
var state_35711__$1 = state_35711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35711__$1,(4),ch);
} else {
if((state_val_35712 === (3))){
var inst_35709 = (state_35711[(2)]);
var state_35711__$1 = state_35711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35711__$1,inst_35709);
} else {
if((state_val_35712 === (4))){
var inst_35699 = (state_35711[(7)]);
var inst_35699__$1 = (state_35711[(2)]);
var state_35711__$1 = (function (){var statearr_35714 = state_35711;
(statearr_35714[(7)] = inst_35699__$1);

return statearr_35714;
})();
if(cljs.core.truth_(inst_35699__$1)){
var statearr_35715_35730 = state_35711__$1;
(statearr_35715_35730[(1)] = (5));

} else {
var statearr_35716_35731 = state_35711__$1;
(statearr_35716_35731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35712 === (5))){
var inst_35699 = (state_35711[(7)]);
var inst_35701 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35699);
var state_35711__$1 = state_35711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35711__$1,(8),inst_35701);
} else {
if((state_val_35712 === (6))){
var state_35711__$1 = state_35711;
var statearr_35717_35732 = state_35711__$1;
(statearr_35717_35732[(2)] = null);

(statearr_35717_35732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35712 === (7))){
var inst_35707 = (state_35711[(2)]);
var state_35711__$1 = state_35711;
var statearr_35718_35733 = state_35711__$1;
(statearr_35718_35733[(2)] = inst_35707);

(statearr_35718_35733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35712 === (8))){
var inst_35703 = (state_35711[(2)]);
var state_35711__$1 = (function (){var statearr_35719 = state_35711;
(statearr_35719[(8)] = inst_35703);

return statearr_35719;
})();
var statearr_35720_35734 = state_35711__$1;
(statearr_35720_35734[(2)] = null);

(statearr_35720_35734[(1)] = (2));


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
});})(c__24785__auto___35728,ch))
;
return ((function (switch__24720__auto__,c__24785__auto___35728,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24721__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24721__auto____0 = (function (){
var statearr_35724 = [null,null,null,null,null,null,null,null,null];
(statearr_35724[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24721__auto__);

(statearr_35724[(1)] = (1));

return statearr_35724;
});
var figwheel$client$heads_up_plugin_$_state_machine__24721__auto____1 = (function (state_35711){
while(true){
var ret_value__24722__auto__ = (function (){try{while(true){
var result__24723__auto__ = switch__24720__auto__.call(null,state_35711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24723__auto__;
}
break;
}
}catch (e35725){if((e35725 instanceof Object)){
var ex__24724__auto__ = e35725;
var statearr_35726_35735 = state_35711;
(statearr_35726_35735[(5)] = ex__24724__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35736 = state_35711;
state_35711 = G__35736;
continue;
} else {
return ret_value__24722__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24721__auto__ = function(state_35711){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24721__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24721__auto____1.call(this,state_35711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24721__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24721__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24721__auto__;
})()
;})(switch__24720__auto__,c__24785__auto___35728,ch))
})();
var state__24787__auto__ = (function (){var statearr_35727 = f__24786__auto__.call(null);
(statearr_35727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24785__auto___35728);

return statearr_35727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24787__auto__);
});})(c__24785__auto___35728,ch))
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
var c__24785__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24785__auto__){
return (function (){
var f__24786__auto__ = (function (){var switch__24720__auto__ = ((function (c__24785__auto__){
return (function (state_35757){
var state_val_35758 = (state_35757[(1)]);
if((state_val_35758 === (1))){
var inst_35752 = cljs.core.async.timeout.call(null,(3000));
var state_35757__$1 = state_35757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35757__$1,(2),inst_35752);
} else {
if((state_val_35758 === (2))){
var inst_35754 = (state_35757[(2)]);
var inst_35755 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35757__$1 = (function (){var statearr_35759 = state_35757;
(statearr_35759[(7)] = inst_35754);

return statearr_35759;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35757__$1,inst_35755);
} else {
return null;
}
}
});})(c__24785__auto__))
;
return ((function (switch__24720__auto__,c__24785__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24721__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24721__auto____0 = (function (){
var statearr_35763 = [null,null,null,null,null,null,null,null];
(statearr_35763[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24721__auto__);

(statearr_35763[(1)] = (1));

return statearr_35763;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24721__auto____1 = (function (state_35757){
while(true){
var ret_value__24722__auto__ = (function (){try{while(true){
var result__24723__auto__ = switch__24720__auto__.call(null,state_35757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24723__auto__;
}
break;
}
}catch (e35764){if((e35764 instanceof Object)){
var ex__24724__auto__ = e35764;
var statearr_35765_35767 = state_35757;
(statearr_35765_35767[(5)] = ex__24724__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35768 = state_35757;
state_35757 = G__35768;
continue;
} else {
return ret_value__24722__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24721__auto__ = function(state_35757){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24721__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24721__auto____1.call(this,state_35757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24721__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24721__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24721__auto__;
})()
;})(switch__24720__auto__,c__24785__auto__))
})();
var state__24787__auto__ = (function (){var statearr_35766 = f__24786__auto__.call(null);
(statearr_35766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24785__auto__);

return statearr_35766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24787__auto__);
});})(c__24785__auto__))
);

return c__24785__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35769){
var map__35776 = p__35769;
var map__35776__$1 = ((((!((map__35776 == null)))?((((map__35776.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35776.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35776):map__35776);
var ed = map__35776__$1;
var formatted_exception = cljs.core.get.call(null,map__35776__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__35776__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35776__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35778_35782 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35779_35783 = null;
var count__35780_35784 = (0);
var i__35781_35785 = (0);
while(true){
if((i__35781_35785 < count__35780_35784)){
var msg_35786 = cljs.core._nth.call(null,chunk__35779_35783,i__35781_35785);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35786);

var G__35787 = seq__35778_35782;
var G__35788 = chunk__35779_35783;
var G__35789 = count__35780_35784;
var G__35790 = (i__35781_35785 + (1));
seq__35778_35782 = G__35787;
chunk__35779_35783 = G__35788;
count__35780_35784 = G__35789;
i__35781_35785 = G__35790;
continue;
} else {
var temp__4425__auto___35791 = cljs.core.seq.call(null,seq__35778_35782);
if(temp__4425__auto___35791){
var seq__35778_35792__$1 = temp__4425__auto___35791;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35778_35792__$1)){
var c__22508__auto___35793 = cljs.core.chunk_first.call(null,seq__35778_35792__$1);
var G__35794 = cljs.core.chunk_rest.call(null,seq__35778_35792__$1);
var G__35795 = c__22508__auto___35793;
var G__35796 = cljs.core.count.call(null,c__22508__auto___35793);
var G__35797 = (0);
seq__35778_35782 = G__35794;
chunk__35779_35783 = G__35795;
count__35780_35784 = G__35796;
i__35781_35785 = G__35797;
continue;
} else {
var msg_35798 = cljs.core.first.call(null,seq__35778_35792__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35798);

var G__35799 = cljs.core.next.call(null,seq__35778_35792__$1);
var G__35800 = null;
var G__35801 = (0);
var G__35802 = (0);
seq__35778_35782 = G__35799;
chunk__35779_35783 = G__35800;
count__35780_35784 = G__35801;
i__35781_35785 = G__35802;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35803){
var map__35806 = p__35803;
var map__35806__$1 = ((((!((map__35806 == null)))?((((map__35806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35806):map__35806);
var w = map__35806__$1;
var message = cljs.core.get.call(null,map__35806__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__21693__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__21693__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__21693__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__35814 = cljs.core.seq.call(null,plugins);
var chunk__35815 = null;
var count__35816 = (0);
var i__35817 = (0);
while(true){
if((i__35817 < count__35816)){
var vec__35818 = cljs.core._nth.call(null,chunk__35815,i__35817);
var k = cljs.core.nth.call(null,vec__35818,(0),null);
var plugin = cljs.core.nth.call(null,vec__35818,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35820 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35814,chunk__35815,count__35816,i__35817,pl_35820,vec__35818,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35820.call(null,msg_hist);
});})(seq__35814,chunk__35815,count__35816,i__35817,pl_35820,vec__35818,k,plugin))
);
} else {
}

var G__35821 = seq__35814;
var G__35822 = chunk__35815;
var G__35823 = count__35816;
var G__35824 = (i__35817 + (1));
seq__35814 = G__35821;
chunk__35815 = G__35822;
count__35816 = G__35823;
i__35817 = G__35824;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__35814);
if(temp__4425__auto__){
var seq__35814__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35814__$1)){
var c__22508__auto__ = cljs.core.chunk_first.call(null,seq__35814__$1);
var G__35825 = cljs.core.chunk_rest.call(null,seq__35814__$1);
var G__35826 = c__22508__auto__;
var G__35827 = cljs.core.count.call(null,c__22508__auto__);
var G__35828 = (0);
seq__35814 = G__35825;
chunk__35815 = G__35826;
count__35816 = G__35827;
i__35817 = G__35828;
continue;
} else {
var vec__35819 = cljs.core.first.call(null,seq__35814__$1);
var k = cljs.core.nth.call(null,vec__35819,(0),null);
var plugin = cljs.core.nth.call(null,vec__35819,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35829 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35814,chunk__35815,count__35816,i__35817,pl_35829,vec__35819,k,plugin,seq__35814__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35829.call(null,msg_hist);
});})(seq__35814,chunk__35815,count__35816,i__35817,pl_35829,vec__35819,k,plugin,seq__35814__$1,temp__4425__auto__))
);
} else {
}

var G__35830 = cljs.core.next.call(null,seq__35814__$1);
var G__35831 = null;
var G__35832 = (0);
var G__35833 = (0);
seq__35814 = G__35830;
chunk__35815 = G__35831;
count__35816 = G__35832;
i__35817 = G__35833;
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
var args35834 = [];
var len__22763__auto___35837 = arguments.length;
var i__22764__auto___35838 = (0);
while(true){
if((i__22764__auto___35838 < len__22763__auto___35837)){
args35834.push((arguments[i__22764__auto___35838]));

var G__35839 = (i__22764__auto___35838 + (1));
i__22764__auto___35838 = G__35839;
continue;
} else {
}
break;
}

var G__35836 = args35834.length;
switch (G__35836) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35834.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__22770__auto__ = [];
var len__22763__auto___35845 = arguments.length;
var i__22764__auto___35846 = (0);
while(true){
if((i__22764__auto___35846 < len__22763__auto___35845)){
args__22770__auto__.push((arguments[i__22764__auto___35846]));

var G__35847 = (i__22764__auto___35846 + (1));
i__22764__auto___35846 = G__35847;
continue;
} else {
}
break;
}

var argseq__22771__auto__ = ((((0) < args__22770__auto__.length))?(new cljs.core.IndexedSeq(args__22770__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__22771__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35842){
var map__35843 = p__35842;
var map__35843__$1 = ((((!((map__35843 == null)))?((((map__35843.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35843.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35843):map__35843);
var opts = map__35843__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35841){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35841));
});

//# sourceMappingURL=client.js.map