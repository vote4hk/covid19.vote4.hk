(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"0BW2":function(e,a,t){"use strict";t.r(a);var n=t("zLVn"),r=t("q1tI"),i=t.n(r),o=t("9Koi"),l=t("vOnD"),d=t("hlFM"),c=t("ofer"),s=t("AaR6"),m=t("7Qib"),f=t("Wbzz"),u=t("i+AT"),b=t("hlie"),g=t("6shs"),p=["badSign","children"],h=Object(l.e)(d.a).withConfig({displayName:"PassengerDailyFigure__DailyStatsContainer",componentId:"sc-jy7nkr-0"})(["display:flex;justify-content:space-between;"]),y=Object(l.e)((function(e){e.badSign;var a=e.children,t=Object(n.a)(e,p);return i.a.createElement(c.a,t,a)})).withConfig({displayName:"PassengerDailyFigure__DailyChange",componentId:"sc-jy7nkr-1"})(["font-size:14px;font-weight:700;color:",";"],(function(e){return e.badSign?e.theme.palette.secondary.dark:e.theme.palette.trafficLight.green})),_=Object(l.e)(d.a).withConfig({displayName:"PassengerDailyFigure__DailyStat",componentId:"sc-jy7nkr-2"})(["display:flex;flex-direction:column;align-items:center;"]),w=Object(l.e)(c.a).withConfig({displayName:"PassengerDailyFigure__DailyStatFigureLabel",componentId:"sc-jy7nkr-3"})(["text-align:center;font-size:",";","{font-size:11px;}"],(function(e){return e.theme.typography.xsmallFontSize}),s.b.down("sm")),v=Object(l.e)(c.a).withConfig({displayName:"PassengerDailyFigure__PassengerDailyStatFigure",componentId:"sc-jy7nkr-4"})(["font-size:20px;font-weight:700;"]);a.default=function(){var e=Object(f.useStaticQuery)("773165777"),a=Object(o.a)().t,t=e.allImmdShenzhenBay.edges,n=t[0].node,r=t[1].node,l=e.allImmdHongKongZhuhaiMacaoBridge.edges,d=l[0].node,s=l[1].node,p=e.allImmdAirport.edges,j=p[0].node,x=p[1].node,O=e.allImmdTotal.edges,k=O[0].node,z=O[1].node,I=[{label:a("dashboard.airport"),today_stat:j.arrival_total,diff:j.arrival_total-x.arrival_total},{label:a("dashboard.bay"),today_stat:n.arrival_total||0,diff:n.arrival_total-r.arrival_total},{label:a("dashboard.bridge"),today_stat:d.arrival_total,diff:d.arrival_total-s.arrival_total},{label:a("dashboard.total"),today_stat:k.arrival_total,diff:k.arrival_total-z.arrival_total}];return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.b,null,a("dashboard.reference_only")),i.a.createElement(c.a,{variant:"body2"},i.a.createElement(b.a,{href:"https://www.immd.gov.hk/hkt/message_from_us/stat_menu.html",target:"_blank"},a("dashboard.source_immd"))),i.a.createElement(g.a,null,i.a.createElement(h,null,I.map((function(e,a){return i.a.createElement(_,{key:a},i.a.createElement(w,null,e.label),i.a.createElement(v,null,Object(m.b)(e.today_stat)),i.a.createElement(y,{badSign:e.diff>0},e.diff>0?"▲ "+Object(m.b)(e.diff):e.diff<0?"▼ "+Object(m.b)(Math.abs(e.diff)):"-"))})))))}},"6shs":function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t("zLVn"),r=t("q1tI"),i=t.n(r),o=t("vOnD"),l=t("hlFM"),d=["children"],c=Object(o.e)(l.a).withConfig({displayName:"Card__StyledBox",componentId:"sc-wdkuw5-0"})(["background:",";border-radius:12px;padding:16px;margin:16px 0;box-shadow:none;"],(function(e){return e.theme.palette.background.paper}));function s(e){var a=e.children,t=Object(n.a)(e,d);return i.a.createElement(c,t,a)}},"i+AT":function(e,a,t){"use strict";t.d(a,"a",(function(){return i})),t.d(a,"b",(function(){return o}));var n=t("vOnD"),r=t("ofer"),i=Object(n.e)(r.a).withConfig({displayName:"Text__Label",componentId:"sc-1qimiaf-0"})(["margin-bottom:3px;font-size:","px;color:",";"],(function(e){return e.theme.typography.xsmallFontSize}),(function(e){return e.theme.palette.primary.dark})),o=Object(n.e)(r.a).withConfig({displayName:"Text__Paragraph",componentId:"sc-1qimiaf-1"})(["margin-bottom:8px;font-size:","px;&& b{font-weight:800;}"],(function(e){return e.theme.typography.smallFontSize}))}}]);