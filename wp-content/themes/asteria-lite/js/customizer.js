    ( function( $ ){
	//Primary Color change
    wp.customize('asteria[prim_color_id]',function( value ) {value.bind(function(newval) {$('.fixed_wrap, #ast_nextprev, #ast_related ul li.active, .single_post .tabs li.active, .single_post .tabs li, .trigger_wrap, .single_post, .comment-body, #ast_related, #ast_related ul, .comm_wrap input, .comment-form-comment textarea, .lay4 .hentry, .lay2 .hentry, .lay3 .hentry, .search_term, .author_div').attr('style', 'background:'+ newval + '!important');});});
	//Secondary Color change
    wp.customize('asteria[sec_color_id]',function( value ) {value.bind(function(newval) {$('#topmenu ul li ul li a:hover, .nivo-caption .sldcontent1 h3 a, .nivo-controlNav a.active, .banner .sldcontent1 h3 a, .acc-sldcontent1 h3 a, .tab.active, .thn_post_wrap .more-link:hover, .moretag:hover, #submit, .page_tt, #searchsubmit, .contact_submit input, .pad_menutitle, .to_top:hover, .page-numbers:hover, .ast_pagenav .current, .progrssn, .midrow_block:hover').attr('style', 'background:'+ newval + '!important');});});	
    wp.customize('asteria[sec_color_id]',function( value ) {value.bind(function(newval) {$('#sidebar .widget .widgettitle, #home_widgets .widget .widgettitle, .single_post .postitle, .nivo-caption p a, .banner .sldcontent1 p a, .banner .sldcontent2 p a, .banner .wrap-sld_layout3 p a, .acord_text p a, .lay2 h2 a, .lay3 h2 a, .lay4 h2 a, .lay5 .postitle a, #ast_nextprev .ast-prev:hover .left_arro i, #ast_nextprev .ast-next:hover .right_arro i, .rel_content a, #reply-title small a, .logged-in-as a, .thn_post_wrap a:link, .thn_post_wrap a:visited, .single_metainfo a i:hover, .edit_wrap i:hover, .single_post .postitle, #sidebar .widget .widgettitle, #sidebar .widget .widgettitle a, #home_widgets .widget a:link, #home_widgets .widget a:visited, #home_widgets .widget .thn_wgt_tt, #sidebar .widget .thn_wgt_tt, #footer .widget .thn_wgt_tt, .widget_calendar td a, .astwt_iframe a, .ast_countdown li, .ast_biotxt a, .ast_bio .ast_biotxt h3, .search_term h2, .author_right h2, .author_right a, #contact_block .widgettitle, #contact_block a:link, #contact_block a:visited, .ast_maintanace .logo h1 a, #ast_nextprev .ast-prev:hover .left_arro i, #ast_nextprev .ast-next:hover .right_arro i').attr('style', 'background:'+ newval + '!important');});});	

	//TEXT COLORS=======================
	wp.customize('asteria[primtxt_color_id]',function( value ) {value.bind(function(newval) {$('body, .single_metainfo, .single_post .single_metainfo a, .midrow_block h3').attr('style', 'color:'+ newval + '!important');});});	
	wp.customize('asteria[sectxt_color_id]',function( value ) {value.bind(function(newval) {$('#topmenu ul li ul li a:hover, .tab a.active, #ast_nextprev .ast-prev:hover .left_arro, #ast_nextprev .ast-next:hover .right_arro, .page-numbers:hover').attr('style', 'color:'+ newval + '!important');});});
	wp.customize('asteria[leavreplytxt_color_id]',function( value ) {value.bind(function(newval) {$('.comments_template #comments, #comments_ping, #reply-title, .related_h3').attr('style', 'color:'+ newval + '!important');});});
	
    } )( jQuery )