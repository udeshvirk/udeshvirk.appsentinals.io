(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{BJHQ:function(t,e,a){"use strict";a.r(e),a.d(e,"UsersModule",(function(){return J}));var n=a("ofXK"),b=a("tyNb"),s=a("fXoL"),i=a("tk/3"),c=function(){function t(t){this.http=t}return t.prototype.getUsers=function(){return this.http.get("/assets/server/users.json")},t.\u0275fac=function(e){return new(e||t)(s.Vb(i.a))},t.\u0275prov=s.Hb({token:t,factory:t.\u0275fac}),t}(),o=a("M9IT"),l=a("Dh3D"),r=a("+0xr"),m=a("/dVW"),p=a("XWCR"),R=a("wZkO"),d=a("MutI"),Q=a("f0Cb"),u=function(){function t(){this.selectedIndex=0}return t.prototype.ngOnInit=function(){var t=this;setTimeout((function(){t.selectedIndex=0}),0)},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Fb({type:t,selectors:[["app-users-flypanel"]],decls:167,vars:1,consts:[[3,"selectedIndex"],["label","Summary"],[1,"col-4"],[1,"col-8"],["label","Stats"]],template:function(t,e){1&t&&(s.Rb(0,"mat-tab-group",0),s.Rb(1,"mat-tab",1),s.Rb(2,"mat-list"),s.Rb(3,"mat-list-item"),s.Rb(4,"span",2),s.Rb(5,"strong"),s.Bc(6,"Concurrent users:"),s.Qb(),s.Qb(),s.Rb(7,"span",3),s.Bc(8," 121342 "),s.Qb(),s.Qb(),s.Rb(9,"mat-list-item"),s.Rb(10,"span",2),s.Rb(11,"strong"),s.Bc(12,"Concurrent users trend last x hrs:"),s.Qb(),s.Qb(),s.Rb(13,"span",3),s.Bc(14," 123 "),s.Qb(),s.Qb(),s.Rb(15,"mat-list-item"),s.Rb(16,"span",2),s.Rb(17,"strong"),s.Bc(18,"Bad Reputation accesses:"),s.Qb(),s.Qb(),s.Rb(19,"span",3),s.Bc(20," 12 "),s.Qb(),s.Qb(),s.Rb(21,"mat-list-item"),s.Rb(22,"span",2),s.Rb(23,"strong"),s.Bc(24,"World map on number of calls:"),s.Qb(),s.Qb(),s.Rb(25,"span",3),s.Bc(26," NA "),s.Qb(),s.Qb(),s.Rb(27,"mat-list-item"),s.Rb(28,"span",2),s.Rb(29,"strong"),s.Bc(30,"World map data-transfer:"),s.Qb(),s.Qb(),s.Rb(31,"span",3),s.Bc(32," NA "),s.Qb(),s.Qb(),s.Rb(33,"mat-list-item"),s.Rb(34,"span",2),s.Rb(35,"strong"),s.Bc(36,"World map Bad Reputation access:"),s.Qb(),s.Qb(),s.Rb(37,"span",3),s.Bc(38," Yes "),s.Qb(),s.Qb(),s.Rb(39,"mat-list-item"),s.Rb(40,"span",2),s.Rb(41,"strong"),s.Bc(42,"Security stats:"),s.Qb(),s.Qb(),s.Rb(43,"span",3),s.Bc(44," NA "),s.Qb(),s.Qb(),s.Qb(),s.Mb(45,"mat-divider"),s.Rb(46,"h6"),s.Bc(47,"Discovered Groups & Roles"),s.Qb(),s.Rb(48,"mat-list"),s.Rb(49,"mat-list-item"),s.Rb(50,"span",2),s.Rb(51,"strong"),s.Bc(52,"User cohorts:"),s.Qb(),s.Qb(),s.Rb(53,"span",3),s.Bc(54," NA "),s.Qb(),s.Qb(),s.Rb(55,"mat-list-item"),s.Rb(56,"span",2),s.Rb(57,"strong"),s.Bc(58,"Set of API's cohorts are invoking:"),s.Qb(),s.Qb(),s.Rb(59,"span",3),s.Bc(60," 123B "),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Rb(61,"mat-tab",4),s.Rb(62,"mat-list"),s.Rb(63,"mat-list-item"),s.Rb(64,"span",2),s.Rb(65,"strong"),s.Bc(66,"Name:"),s.Qb(),s.Qb(),s.Rb(67,"span",3),s.Bc(68," Aron Jacob "),s.Qb(),s.Qb(),s.Rb(69,"mat-list-item"),s.Rb(70,"span",2),s.Rb(71,"strong"),s.Bc(72,"User ID:"),s.Qb(),s.Qb(),s.Rb(73,"span",3),s.Bc(74," aron.jacob "),s.Qb(),s.Qb(),s.Rb(75,"mat-list-item"),s.Rb(76,"span",2),s.Rb(77,"strong"),s.Bc(78,"Last Login:"),s.Qb(),s.Qb(),s.Rb(79,"span",3),s.Bc(80," None "),s.Qb(),s.Qb(),s.Rb(81,"mat-list-item"),s.Rb(82,"span",2),s.Rb(83,"strong"),s.Bc(84,"Last Location:"),s.Qb(),s.Qb(),s.Rb(85,"span",3),s.Bc(86," Bangalore "),s.Qb(),s.Qb(),s.Rb(87,"mat-list-item"),s.Rb(88,"span",2),s.Rb(89,"strong"),s.Bc(90,"Change in Location:"),s.Qb(),s.Qb(),s.Rb(91,"span",3),s.Bc(92," NA "),s.Qb(),s.Qb(),s.Rb(93,"mat-list-item"),s.Rb(94,"span",2),s.Rb(95,"strong"),s.Bc(96,"Device:"),s.Qb(),s.Qb(),s.Rb(97,"span",3),s.Bc(98," Macbook Pro "),s.Qb(),s.Qb(),s.Qb(),s.Mb(99,"mat-divider"),s.Rb(100,"h6"),s.Bc(101,"Usage/Activity Stats"),s.Qb(),s.Rb(102,"mat-list"),s.Rb(103,"mat-list-item"),s.Rb(104,"span",2),s.Rb(105,"strong"),s.Bc(106,"Session Time:"),s.Qb(),s.Qb(),s.Rb(107,"span",3),s.Bc(108," 129 mins "),s.Qb(),s.Qb(),s.Rb(109,"mat-list-item"),s.Rb(110,"span",2),s.Rb(111,"strong"),s.Bc(112,"# of API's invoked:"),s.Qb(),s.Qb(),s.Rb(113,"span",3),s.Bc(114," 145 "),s.Qb(),s.Qb(),s.Rb(115,"mat-list-item"),s.Rb(116,"span",2),s.Rb(117,"strong"),s.Bc(118,"Calls:"),s.Qb(),s.Qb(),s.Rb(119,"span",3),s.Bc(120," 12 "),s.Qb(),s.Qb(),s.Rb(121,"mat-list-item"),s.Rb(122,"span",2),s.Rb(123,"strong"),s.Bc(124,"Data transfer:"),s.Qb(),s.Qb(),s.Rb(125,"span",3),s.Bc(126," 345B "),s.Qb(),s.Qb(),s.Rb(127,"mat-list-item"),s.Rb(128,"span",2),s.Rb(129,"strong"),s.Bc(130,"Response Time:"),s.Qb(),s.Qb(),s.Rb(131,"span",3),s.Bc(132," 12ms "),s.Qb(),s.Qb(),s.Rb(133,"mat-list-item"),s.Rb(134,"span",2),s.Rb(135,"strong"),s.Bc(136,"Errors:"),s.Qb(),s.Qb(),s.Rb(137,"span",3),s.Bc(138," 1 "),s.Qb(),s.Qb(),s.Qb(),s.Mb(139,"mat-divider"),s.Rb(140,"h6"),s.Bc(141,"Security Stats"),s.Qb(),s.Rb(142,"mat-list"),s.Rb(143,"mat-list-item"),s.Rb(144,"span",2),s.Rb(145,"strong"),s.Bc(146,"Usage Anomalies:"),s.Qb(),s.Qb(),s.Rb(147,"span",3),s.Bc(148," NA "),s.Qb(),s.Qb(),s.Rb(149,"mat-list-item"),s.Rb(150,"span",2),s.Rb(151,"strong"),s.Bc(152,"Malicious activities (CRS):"),s.Qb(),s.Qb(),s.Rb(153,"span",3),s.Bc(154," NA "),s.Qb(),s.Qb(),s.Rb(155,"mat-list-item"),s.Rb(156,"span",2),s.Rb(157,"strong"),s.Bc(158,"Schema deviations:"),s.Qb(),s.Qb(),s.Rb(159,"span",3),s.Bc(160," None "),s.Qb(),s.Qb(),s.Rb(161,"mat-list-item"),s.Rb(162,"span",2),s.Rb(163,"strong"),s.Bc(164,"ML based anomalies:"),s.Qb(),s.Qb(),s.Rb(165,"span",3),s.Bc(166," None "),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb()),2&t&&s.ic("selectedIndex",e.selectedIndex)},directives:[R.b,R.a,d.a,d.b,Q.a],styles:[""]}),t}(),f=a("xJkR");function h(t,e){1&t&&(s.Rb(0,"mat-header-cell",21),s.Bc(1," Name "),s.Qb())}function g(t,e){if(1&t&&(s.Rb(0,"mat-cell"),s.Bc(1),s.Qb()),2&t){var a=e.$implicit;s.Ab(1),s.Dc(" ",a.name,"")}}function B(t,e){1&t&&(s.Rb(0,"mat-header-cell",21),s.Bc(1," Last Login "),s.Qb())}function v(t,e){if(1&t&&(s.Rb(0,"mat-cell"),s.Bc(1),s.Qb()),2&t){var a=e.$implicit;s.Ab(1),s.Dc(" ",a.last_login,"")}}function y(t,e){1&t&&(s.Rb(0,"mat-header-cell",21),s.Bc(1," Last Location "),s.Qb())}function w(t,e){if(1&t&&(s.Rb(0,"mat-cell"),s.Bc(1),s.Qb()),2&t){var a=e.$implicit;s.Ab(1),s.Dc(" ",a.last_location,"")}}function C(t,e){1&t&&(s.Rb(0,"mat-header-cell",21),s.Bc(1," Device "),s.Qb())}function A(t,e){if(1&t&&(s.Rb(0,"mat-cell"),s.Bc(1),s.Qb()),2&t){var a=e.$implicit;s.Ab(1),s.Dc(" ",a.device," ")}}function D(t,e){1&t&&(s.Rb(0,"mat-header-cell",21),s.Bc(1," Calls "),s.Qb())}function k(t,e){if(1&t&&(s.Rb(0,"mat-cell"),s.Bc(1),s.Qb()),2&t){var a=e.$implicit;s.Ab(1),s.Dc(" ",a.calls,"")}}function S(t,e){1&t&&s.Mb(0,"mat-header-row",22)}function z(t,e){if(1&t){var a=s.Sb();s.Rb(0,"mat-row",23),s.Yb("click",(function(){s.tc(a);var t=e.$implicit;return s.cc().onRowClicked(t)})),s.Qb()}}function L(t,e){1&t&&s.Mb(0,"ngx-skeleton-loader",24)}var x=[{path:"",component:function(){function t(t,e){this.service=t,this.router=e,this._subscriptions=[],this.displayedColumns=["name","last_login","last_location","device","calls"],this.dataSource=new r.k,this.isLoadingResults=!0,this.pageSize=10,this.showFlypanel=!1,this.state=m.b.DEFAULT,this.size=m.a.LARGE,this.showPanelContent=!1,this.selectedIndex=2}return t.prototype.ngOnInit=function(){this.getList()},t.prototype.ngAfterViewInit=function(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort},t.prototype.getList=function(){var t=this;this.isLoadingResults=!0,this._subscriptions.push(this.service.getUsers().subscribe((function(e){e.data&&(t.dataSource.data=e.data),t.isLoadingResults=!1})))},t.prototype.onRowClicked=function(t){var e=this;this.showFlypanel=!0,this.selectedUser=t,setTimeout((function(){e.selectedIndex=0}),0)},t.prototype.handleFlyPanelClose=function(){this.showFlypanel=!1},t.prototype.handleFlyPanelExpand=function(){this.state=m.b.EXPAND},t.prototype.handleFlyPanelOpen=function(){this.showPanelContent=!0},t.prototype.ngOnDestroy=function(){this._subscriptions.forEach((function(t){t&&t.unsubscribe()}))},t.\u0275fac=function(e){return new(e||t)(s.Lb(c),s.Lb(b.d))},t.\u0275cmp=s.Fb({type:t,selectors:[["app-users"]],viewQuery:function(t,e){var a;1&t&&(s.Fc(o.a,!0),s.Fc(l.a,!0)),2&t&&(s.qc(a=s.Zb())&&(e.paginator=a.first),s.qc(a=s.Zb())&&(e.sort=a.first))},decls:31,vars:10,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-lg-12","col-md-12"],[1,"mat-title"],[1,"card"],[1,"card-body","table-responsive"],["matSort","",1,"table","table-striped",3,"dataSource"],["matColumnDef","name"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","last_login"],["matColumnDef","last_location"],["matColumnDef","device"],["matColumnDef","calls"],["class","thead-dark",4,"matHeaderRowDef"],[3,"click",4,"matRowDef","matRowDefColumns"],[3,"pageSize","hidden"],["count","8","class","table-skelton",4,"ngIf"],[3,"state","show","size","title","onClose","onExpand"],["panelContent","",1,"panel-content"],["mat-sort-header",""],[1,"thead-dark"],[3,"click"],["count","8",1,"table-skelton"]],template:function(t,e){1&t&&(s.Rb(0,"div",0),s.Rb(1,"div",1),s.Rb(2,"div",2),s.Rb(3,"div",3),s.Rb(4,"h2",4),s.Bc(5,"Users"),s.Qb(),s.Rb(6,"div",5),s.Rb(7,"div",6),s.Rb(8,"mat-table",7),s.Pb(9,8),s.zc(10,h,2,0,"mat-header-cell",9),s.zc(11,g,2,1,"mat-cell",10),s.Ob(),s.Pb(12,11),s.zc(13,B,2,0,"mat-header-cell",9),s.zc(14,v,2,1,"mat-cell",10),s.Ob(),s.Pb(15,12),s.zc(16,y,2,0,"mat-header-cell",9),s.zc(17,w,2,1,"mat-cell",10),s.Ob(),s.Pb(18,13),s.zc(19,C,2,0,"mat-header-cell",9),s.zc(20,A,2,1,"mat-cell",10),s.Ob(),s.Pb(21,14),s.zc(22,D,2,0,"mat-header-cell",9),s.zc(23,k,2,1,"mat-cell",10),s.Ob(),s.zc(24,S,1,0,"mat-header-row",15),s.zc(25,z,1,0,"mat-row",16),s.Qb(),s.Mb(26,"mat-paginator",17),s.zc(27,L,1,0,"ngx-skeleton-loader",18),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Rb(28,"app-fly-panel",19),s.Yb("onClose",(function(){return e.handleFlyPanelClose()}))("onExpand",(function(){return e.handleFlyPanelExpand()})),s.Rb(29,"div",20),s.Mb(30,"app-users-flypanel"),s.Qb(),s.Qb()),2&t&&(s.Ab(8),s.ic("dataSource",e.dataSource),s.Ab(16),s.ic("matHeaderRowDef",e.displayedColumns),s.Ab(1),s.ic("matRowDefColumns",e.displayedColumns),s.Ab(1),s.ic("pageSize",e.pageSize)("hidden",e.isLoadingResults),s.Ab(1),s.ic("ngIf",e.isLoadingResults),s.Ab(1),s.ic("state",e.state)("show",e.showFlypanel)("size",e.size)("title",null==e.selectedUser?null:e.selectedUser.name))},directives:[r.j,l.a,r.c,r.e,r.b,r.g,r.i,o.a,n.l,p.a,u,r.d,l.b,r.a,r.f,r.h,f.a],styles:[".thead-dark[_ngcontent-%COMP%]{background-color:#29539b;background-image:linear-gradient(315deg,#29539b,#1e3b70 74%);border-top-left-radius:6px;border-top-right-radius:6px}.mat-header-cell[_ngcontent-%COMP%]{font-size:15px;font-weight:700;color:#fff!important}mat-row[_ngcontent-%COMP%]:nth-child(2n){background-color:#f9f9f9}mat-table[_ngcontent-%COMP%]{border:1px solid #ddd;border-radius:6px}"]}),t}()}],P=a("3Pt+"),F=a("bTqV"),I=a("kmnG"),M=a("FKr1"),N=a("qFsG"),O=a("d3UM"),U=a("Qu3c"),_=a("FpXt"),E=a("NFeN"),T=a("7EHt"),H=a("TU8p"),J=function(){function t(){}return t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({factory:function(e){return new(e||t)},providers:[c],imports:[[n.c,b.h.forChild(x),P.g,_.a,P.o,F.b,M.p,I.e,N.b,O.b,U.b,f.b,r.l,o.b,l.c,E.b,R.c,d.c,T.a,H.a]]}),t}()}}]);