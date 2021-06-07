/**/

$(function() {
 "use strict"; 
	$('.tab li').click(function() {

		//.index()繧剃ｽｿ縺�け繝ｪ繝�け縺輔ｌ縺溘ち繝悶′菴慕分逶ｮ縺九ｒ隱ｿ縺ｹ縲�
		//index縺ｨ縺�≧螟画焚縺ｫ莉｣蜈･縺励∪縺吶�
		var index = $('.tab li').index(this);

		//繧ｳ繝ｳ繝�Φ繝�ｒ荳蠎ｦ縺吶∋縺ｦ髱櫁｡ｨ遉ｺ縺ｫ縺励�
		$('.content li').css('display','none');

		//繧ｯ繝ｪ繝�け縺輔ｌ縺溘ち繝悶→蜷後§鬆�分縺ｮ繧ｳ繝ｳ繝�Φ繝�ｒ陦ｨ遉ｺ縺励∪縺吶�
		$('.content li').eq(index).css('display','block');

		//荳蠎ｦ繧ｿ繝悶↓縺､縺�※縺�ｋ繧ｯ繝ｩ繧ｹselect繧呈ｶ医＠縲�
		$('.tab li').removeClass('select');

		//繧ｯ繝ｪ繝�け縺輔ｌ縺溘ち繝悶�縺ｿ縺ｫ繧ｯ繝ｩ繧ｹselect繧偵▽縺代∪縺吶�
		$(this).addClass('select');
	});
});