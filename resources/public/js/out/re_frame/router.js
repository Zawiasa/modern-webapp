// Compiled by ClojureScript 1.7.122 {}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.handlers');
goog.require('re_frame.utils');
goog.require('cljs.core.async');
re_frame.router.event_chan = cljs.core.async.chan.call(null);
/**
 * read all pending events from the channel and drop them on the floor
 */
re_frame.router.purge_chan = (function re_frame$router$purge_chan(){
return null;
});
re_frame.router.router_loop = (function re_frame$router$router_loop(){
var c__24785__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24785__auto__){
return (function (){
var f__24786__auto__ = (function (){var switch__24720__auto__ = ((function (c__24785__auto__){
return (function (state_32064){
var state_val_32065 = (state_32064[(1)]);
if((state_val_32065 === (7))){
var inst_32049 = (state_32064[(2)]);
var state_32064__$1 = (function (){var statearr_32066 = state_32064;
(statearr_32066[(7)] = inst_32049);

return statearr_32066;
})();
var statearr_32067_32087 = state_32064__$1;
(statearr_32067_32087[(2)] = null);

(statearr_32067_32087[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32065 === (1))){
var state_32064__$1 = state_32064;
var statearr_32068_32088 = state_32064__$1;
(statearr_32068_32088[(2)] = null);

(statearr_32068_32088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32065 === (4))){
var inst_32036 = (state_32064[(8)]);
var inst_32036__$1 = (state_32064[(2)]);
var inst_32037 = cljs.core.meta.call(null,inst_32036__$1);
var inst_32038 = new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816).cljs$core$IFn$_invoke$arity$1(inst_32037);
var state_32064__$1 = (function (){var statearr_32069 = state_32064;
(statearr_32069[(8)] = inst_32036__$1);

return statearr_32069;
})();
if(cljs.core.truth_(inst_32038)){
var statearr_32070_32089 = state_32064__$1;
(statearr_32070_32089[(1)] = (5));

} else {
var statearr_32071_32090 = state_32064__$1;
(statearr_32071_32090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32065 === (6))){
var inst_32045 = cljs.core.async.timeout.call(null,(0));
var state_32064__$1 = state_32064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32064__$1,(9),inst_32045);
} else {
if((state_val_32065 === (3))){
var inst_32062 = (state_32064[(2)]);
var state_32064__$1 = state_32064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32064__$1,inst_32062);
} else {
if((state_val_32065 === (12))){
var inst_32036 = (state_32064[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32064,(11),Object,null,(10));
var inst_32057 = re_frame.handlers.handle.call(null,inst_32036);
var state_32064__$1 = state_32064;
var statearr_32072_32091 = state_32064__$1;
(statearr_32072_32091[(2)] = inst_32057);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32064__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32065 === (2))){
var state_32064__$1 = state_32064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32064__$1,(4),re_frame.router.event_chan);
} else {
if((state_val_32065 === (11))){
var inst_32050 = (state_32064[(2)]);
var inst_32051 = re_frame.router.purge_chan.call(null);
var inst_32052 = re_frame$router$router_loop.call(null);
var inst_32053 = (function(){throw inst_32050})();
var state_32064__$1 = (function (){var statearr_32073 = state_32064;
(statearr_32073[(9)] = inst_32052);

(statearr_32073[(10)] = inst_32051);

return statearr_32073;
})();
var statearr_32074_32092 = state_32064__$1;
(statearr_32074_32092[(2)] = inst_32053);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32064__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32065 === (9))){
var inst_32047 = (state_32064[(2)]);
var state_32064__$1 = state_32064;
var statearr_32075_32093 = state_32064__$1;
(statearr_32075_32093[(2)] = inst_32047);

(statearr_32075_32093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32065 === (5))){
var inst_32040 = reagent.core.flush.call(null);
var inst_32041 = cljs.core.async.timeout.call(null,(20));
var state_32064__$1 = (function (){var statearr_32076 = state_32064;
(statearr_32076[(11)] = inst_32040);

return statearr_32076;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32064__$1,(8),inst_32041);
} else {
if((state_val_32065 === (10))){
var inst_32059 = (state_32064[(2)]);
var state_32064__$1 = (function (){var statearr_32077 = state_32064;
(statearr_32077[(12)] = inst_32059);

return statearr_32077;
})();
var statearr_32078_32094 = state_32064__$1;
(statearr_32078_32094[(2)] = null);

(statearr_32078_32094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32065 === (8))){
var inst_32043 = (state_32064[(2)]);
var state_32064__$1 = state_32064;
var statearr_32079_32095 = state_32064__$1;
(statearr_32079_32095[(2)] = inst_32043);

(statearr_32079_32095[(1)] = (7));


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
});})(c__24785__auto__))
;
return ((function (switch__24720__auto__,c__24785__auto__){
return (function() {
var re_frame$router$router_loop_$_state_machine__24721__auto__ = null;
var re_frame$router$router_loop_$_state_machine__24721__auto____0 = (function (){
var statearr_32083 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32083[(0)] = re_frame$router$router_loop_$_state_machine__24721__auto__);

(statearr_32083[(1)] = (1));

return statearr_32083;
});
var re_frame$router$router_loop_$_state_machine__24721__auto____1 = (function (state_32064){
while(true){
var ret_value__24722__auto__ = (function (){try{while(true){
var result__24723__auto__ = switch__24720__auto__.call(null,state_32064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24723__auto__;
}
break;
}
}catch (e32084){if((e32084 instanceof Object)){
var ex__24724__auto__ = e32084;
var statearr_32085_32096 = state_32064;
(statearr_32085_32096[(5)] = ex__24724__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32097 = state_32064;
state_32064 = G__32097;
continue;
} else {
return ret_value__24722__auto__;
}
break;
}
});
re_frame$router$router_loop_$_state_machine__24721__auto__ = function(state_32064){
switch(arguments.length){
case 0:
return re_frame$router$router_loop_$_state_machine__24721__auto____0.call(this);
case 1:
return re_frame$router$router_loop_$_state_machine__24721__auto____1.call(this,state_32064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$router$router_loop_$_state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$0 = re_frame$router$router_loop_$_state_machine__24721__auto____0;
re_frame$router$router_loop_$_state_machine__24721__auto__.cljs$core$IFn$_invoke$arity$1 = re_frame$router$router_loop_$_state_machine__24721__auto____1;
return re_frame$router$router_loop_$_state_machine__24721__auto__;
})()
;})(switch__24720__auto__,c__24785__auto__))
})();
var state__24787__auto__ = (function (){var statearr_32086 = f__24786__auto__.call(null);
(statearr_32086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24785__auto__);

return statearr_32086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24787__auto__);
});})(c__24785__auto__))
);

return c__24785__auto__;
});
re_frame.router.router_loop.call(null);
/**
 * Send an event to be processed by the registered handler.
 * 
 *   Usage example:
 *   (dispatch [:delete-item 42])
 *   
 */
re_frame.router.dispatch = (function re_frame$router$dispatch(event_v){
if((event_v == null)){
re_frame.utils.error.call(null,"re-frame: \"dispatch\" is ignoring a nil event.");
} else {
cljs.core.async.put_BANG_.call(null,re_frame.router.event_chan,event_v);
}

return null;
});
/**
 * Send an event to be processed by the registered handler, but avoid the async-inducing
 *   use of core.async/chan.
 * 
 *   Usage example:
 *   (dispatch-sync [:delete-item 42])
 */
re_frame.router.dispatch_sync = (function re_frame$router$dispatch_sync(event_v){
re_frame.handlers.handle.call(null,event_v);

return null;
});

//# sourceMappingURL=router.js.map