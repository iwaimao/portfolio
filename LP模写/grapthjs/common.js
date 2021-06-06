/* init.js */
/* 繧ｹ繝槭�逕ｨ繝｡繝九Η繝ｼ
-----------------------*/
$(function() {
	"use strict";
	$("#toggle_button").click(function(){
		$("#global_navi").slideToggle();
		return false;
	});
});
$(function() {
	"use strict";
	$("#toggle_button2").click(function(){
		$(".search").slideToggle('fast');
		return false;
	});
});

/* 鬮倥＆謠�∴繧�
-----------------------*/
function getMatchHeight() {
	"use strict";

	$(function(){
		$('.flatten li').matchHeight();
		$('.flatten li a').matchHeight();
	});
}

/* 繧､繝｡繝ｼ繧ｸ繝槭ャ繝励�繝ｬ繧ｹ繝昴Φ繧ｷ繝門ｯｾ蠢� 
-----------------------*/
function getrwdImageMaps() {
	"use strict";
$(function(){
	$('img[usemap]').rwdImageMaps();
});

}



/* 繧ｹ繝�繝ｼ繧ｺ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ
-----------------------*/
$(function(){
	"use strict";
   // #縺ｧ蟋九∪繧九い繝ｳ繧ｫ繝ｼ繧偵け繝ｪ繝�け縺励◆蝣ｴ蜷医↓蜃ｦ逅�
   $('a[href^="#"]').click(function() {
      // 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺ｮ騾溷ｺｦ
      var speed = 400; // 繝溘Μ遘�
      // 繧｢繝ｳ繧ｫ繝ｼ縺ｮ蛟､蜿門ｾ�
      var href= $(this).attr('href');
      // 遘ｻ蜍募�繧貞叙蠕�
      var target = $(href === "#" || href === "" ? 'html' : href);
      // 遘ｻ蜍募�繧呈焚蛟､縺ｧ蜿門ｾ�
      var position = target.offset().top;
	  console.log(position);
      // 繧ｹ繝�繝ｼ繧ｹ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});

/* navi縺ｫ迴ｾ蝨ｨ菴咲ｽｮ繧偵▽縺代ｋ
-----------------------*/
$(function(){
	 "use strict"; 
	var url = window.location; //URL蜿門ｾ�
	var path = url.href.split('/'); //繧ｹ繝ｩ繝�す繝･縺ｧ蛹ｺ蛻�▲縺ｦ驟榊�縺ｫ縺吶ｋ
	var path2 = path.pop().split('#'); //驟榊�縺ｮ譛蠕後ｒ繧ｷ繝｣繝ｼ繝励〒蛹ｺ蛻�ｋ
	var file_name = path2.shift(); //驟榊�縺ｮ蜈磯�ｭ繧帝∈謚槭＠縺ｦfile_name縺ｫ譬ｼ邏�
	$('.nisa_navi li a[href="'+file_name+'"]').parent().addClass('current');
	$('.nisa_navi li a[href="../'+file_name+'"]').parent().addClass('current');
	$('.nisa_navi li a[href="../../'+file_name+'"]').parent().addClass('current');
	$('.nisa_side_navi dd a[href="'+file_name+'"]').parent().addClass('current');
	$('.nisa_side_navi dd a[href="'+file_name+'"]').parent().addClass('active');
	$('.nisa_side_navi dd a[href="../'+file_name+'"]').parent().addClass('current');
	$('.nisa_side_navi dd a[href="../../'+file_name+'"]').parent().addClass('current');
});

/* FAQ
-----------------------*/
$(function(){
	 "use strict";
	$('.faq dt').next().hide();
	$('.faq dt').click(function() {
		$(this).next().slideToggle('fast').prev().toggleClass('open');
	});
	//URL縺ｮHash蛟､繧貞叙蠕�
	var urlHash = location.hash;
	//console.log(urlHash);

	if(urlHash !== '') {
		var targetHash = urlHash + ' dt';
	$(targetHash).next().slideDown('fast').prev().addClass('open'); //URL縺ｫ繝上ャ繧ｷ繝･莉倥″縺ｧFAQ繝壹�繧ｸ縺碁幕縺九ｌ縺滓凾縺ｯ隧ｲ蠖鍋ｮ�園繧帝幕縺�
	}
});
function openFAQ(Qnum) {
	"use strict";
	var Qtarget = '#' + Qnum + ' dt';
	//console.log(Qtarget);
	$(function(){
		$(Qtarget).next().slideDown('fast').prev().addClass('open');
	});
}


/* 逕ｨ隱樣寔繧ｿ繝門�繧頑崛縺�
-----------------------*/
$(function(){
	"use strict";
	$('.glossary_tab_contents').hide(); //縺ｾ縺壹さ繝ｳ繝�Φ繝��驛ｨ髫�縺�
	$('#glossary_tab12').show(); //NISA逕ｨ隱槭□縺題｡ｨ遉ｺ縺吶ｋ
	$('.glossary_tab li:first-child').addClass('current'); //NISA逕ｨ隱槭�li縺ｫcurrent繧定ｿｽ蜉�


//URL縺ｫ繝上ャ繧ｷ繝･縺後▽縺�※縺阪◆譎ゅ�蜃ｦ逅�
	//URL縺ｮHash蛟､繧貞叙蠕�
	var urlHash = location.hash;
	if(urlHash !== '') {
		var tabHash = urlHash.split('-').shift(); //隧ｲ蠖薙ち繝悶�繝上ャ繧ｷ繝･繧貞叙蠕�
		var tabID = tabHash.substr(1); //#繧偵→繧�
		var currentHashTab = '.glossary_tab li a[name="#glossary_' + tabID + '"]'; //迴ｾ蝨ｨ菴咲ｽｮ縺ｮ繧ｿ繝�
		var targetHashTab = '#glossary_' + tabID;
		var st = $(urlHash).offset().top; //隧ｲ蠖灘腰隱槭�菴咲ｽｮ繧貞叙蠕�
		$('.glossary_tab li').removeClass('current'); //current繧ｯ繝ｩ繧ｹ繧貞炎髯､
		$(currentHashTab).parent().addClass('current'); //隧ｲ蠖鍋ｮ�園縺ｫcurrent繧ｯ繝ｩ繧ｹ繧剃ｻ倅ｸ�
		$('.glossary_tab_contents').hide(); //縺ｨ繧翫≠縺医★蜈ｨ驛ｨ髫�縺�
		$(targetHashTab).show(); //隧ｲ蠖薙�繧ゅ�縺�縺題｡ｨ遉ｺ
		$(window).scrollTop(st); //隧ｲ蠖鍋ｮ�園縺ｾ縺ｧ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ
	}

//繧ｯ繝ｪ繝�け縺励◆譎ゅ�蜃ｦ逅�
	$('.glossary_tab li a').on('click',function(){ //tab繧偵け繝ｪ繝�け縺励◆縺ｨ縺�
		var targetTab = $(this).attr('name'); //targetID繧貞叙蠕�
		var currentTab = '.glossary_tab li a[name="' + targetTab + '"]'; //迴ｾ蝨ｨ菴咲ｽｮ縺ｮ繧ｿ繝�
		$('.glossary_tab li').removeClass('current'); //current繧ｯ繝ｩ繧ｹ繧貞炎髯､
		$(currentTab).parent().addClass('current'); //繧ｯ繝ｪ繝�け縺励◆li縺ｫcurrent繧定ｿｽ蜉�
		$('.glossary_tab_contents').hide(); //縺ｨ繧翫≠縺医★蜈ｨ驛ｨ髫�縺�
		$(targetTab).show(); //隧ｲ蠖薙�繧ゅ�縺�縺題｡ｨ遉ｺ
	});

});

//逕ｨ隱樣寔縺ｮ荳ｭ縺九ｉ蛻･縺ｮ蜊倩ｪ槭↓繝ｪ繝ｳ繧ｯ縺吶ｋ蝣ｴ蜷医�蜃ｦ逅�
function openGlossary(tabNum) {
	"use strict";
	$(function(){
		var currentHashTab = '.glossary_tab li a[name="' + tabNum + '"]'; //迴ｾ蝨ｨ菴咲ｽｮ縺ｮ繧ｿ繝�
		console.log(currentHashTab);
		$('.glossary_tab li').removeClass('current'); //current繧ｯ繝ｩ繧ｹ繧貞炎髯､
		$(tabNum).parent().addClass('current'); //繧ｯ繝ｪ繝�け縺励◆li縺ｫcurrent繧定ｿｽ蜉�
		$(currentHashTab).parent().addClass('current'); //隧ｲ蠖鍋ｮ�園縺ｫcurrent繧ｯ繝ｩ繧ｹ繧剃ｻ倅ｸ�
		$('.glossary_tab_contents').hide(); //縺ｨ繧翫≠縺医★蜈ｨ驛ｨ髫�縺�
		$(tabNum).show(); //隧ｲ蠖薙�繧ゅ�縺�縺題｡ｨ遉ｺ
	});
}


/* 繝壹�繧ｸ螟悶ワ繝�す繝･繝ｪ繝ｳ繧ｯ
-----------------------*/
$(function(){
	"use strict";
	var hash = location.hash;
	if (hash) {
		setTimeout(function(){
		// timeout500msec
			var position = $(hash).offset().top;
			//console.log (position);
			$('body,html').animate({scrollTop:position}, 0, 'swing');
			console.log ('hash link test');
			return false;
		}, 500);	
	}
});







