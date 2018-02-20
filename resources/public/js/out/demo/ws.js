// Compiled by ClojureScript 1.9.946 {}
goog.provide('demo.ws');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('taoensso.sente');
goog.require('re_frame.core');
var map__52823_52825 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492)], null));
var map__52823_52826__$1 = ((((!((map__52823_52825 == null)))?((((map__52823_52825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52823_52825.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52823_52825):map__52823_52825);
var chsk_52827 = cljs.core.get.call(null,map__52823_52826__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_52828 = cljs.core.get.call(null,map__52823_52826__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_52829 = cljs.core.get.call(null,map__52823_52826__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_52830 = cljs.core.get.call(null,map__52823_52826__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
demo.ws.chsk = chsk_52827;

demo.ws.ch_chsk = ch_recv_52828;

demo.ws.chsk_send_BANG_ = send_fn_52829;

demo.ws.chsk_state = state_52830;
if(typeof demo.ws.event_msg_handler !== 'undefined'){
} else {
demo.ws.event_msg_handler = (function (){var method_table__41724__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__41725__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__41726__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__41727__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__41728__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"demo.ws","event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__41728__auto__,method_table__41724__auto__,prefer_table__41725__auto__,method_cache__41726__auto__,cached_hierarchy__41727__auto__));
})();
}
cljs.core._add_method.call(null,demo.ws.event_msg_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__52831){
var map__52832 = p__52831;
var map__52832__$1 = ((((!((map__52832 == null)))?((((map__52832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52832.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52832):map__52832);
var ev_msg = map__52832__$1;
var event = cljs.core.get.call(null,map__52832__$1,new cljs.core.Keyword(null,"event","event",301435442));
return taoensso.encore.debugf.call(null,"Unandled event: %s",event);
}));
cljs.core._add_method.call(null,demo.ws.event_msg_handler,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__52834){
var map__52835 = p__52834;
var map__52835__$1 = ((((!((map__52835 == null)))?((((map__52835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52835.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52835):map__52835);
var ev_msg = map__52835__$1;
var _QMARK_data = cljs.core.get.call(null,map__52835__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var open_QMARK_ = cljs.core.get.call(null,map__52835__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var vec__52837 = ((cljs.core.vector_QMARK_.call(null,_QMARK_data))?_QMARK_data:taoensso.truss.impl._invar_violation_BANG_.call(null,true,"demo.ws",31,"(vector? ?data)",_QMARK_data,null,null));
var old_state_map = cljs.core.nth.call(null,vec__52837,(0),null);
var new_state_map = cljs.core.nth.call(null,vec__52837,(1),null);
taoensso.encore.debugf.call(null,"%s",_QMARK_data);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ws","connected","ws/connected",-169836913),new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state_map)], null));
}));
cljs.core._add_method.call(null,demo.ws.event_msg_handler,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (p__52840){
var map__52841 = p__52840;
var map__52841__$1 = ((((!((map__52841 == null)))?((((map__52841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52841.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52841):map__52841);
var ev_msg = map__52841__$1;
var _QMARK_data = cljs.core.get.call(null,map__52841__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return null;
}));
cljs.core._add_method.call(null,demo.ws.event_msg_handler,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__52843){
var map__52844 = p__52843;
var map__52844__$1 = ((((!((map__52844 == null)))?((((map__52844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52844.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52844):map__52844);
var ev_msg = map__52844__$1;
var _QMARK_data = cljs.core.get.call(null,map__52844__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
taoensso.encore.debugf.call(null,"%s",_QMARK_data);

console.log("hello",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_data)].join(''));

return re_frame.core.dispatch.call(null,_QMARK_data);
}));
demo.ws.event_msg_handler_STAR_ = (function demo$ws$event_msg_handler_STAR_(p__52846){
var map__52847 = p__52846;
var map__52847__$1 = ((((!((map__52847 == null)))?((((map__52847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52847.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52847):map__52847);
var ev_msg = map__52847__$1;
var id = cljs.core.get.call(null,map__52847__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.call(null,map__52847__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.get.call(null,map__52847__$1,new cljs.core.Keyword(null,"event","event",301435442));
return demo.ws.event_msg_handler.call(null,ev_msg);
});
demo.ws.router = cljs.core.atom.call(null,null);
demo.ws.stop_router_BANG_ = (function demo$ws$stop_router_BANG_(){
var temp__5457__auto__ = cljs.core.deref.call(null,demo.ws.router);
if(cljs.core.truth_(temp__5457__auto__)){
var stop_f = temp__5457__auto__;
return stop_f.call(null);
} else {
return null;
}
});
demo.ws.start_router_BANG_ = (function demo$ws$start_router_BANG_(){
demo.ws.stop_router_BANG_.call(null);

return cljs.core.reset_BANG_.call(null,demo.ws.router,taoensso.sente.start_chsk_router_BANG_.call(null,demo.ws.ch_chsk,demo.ws.event_msg_handler_STAR_));
});

//# sourceMappingURL=ws.js.map
