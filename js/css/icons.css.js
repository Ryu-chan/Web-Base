$(function(){
	//File Icons
	$('a').each(function(){
		var ico = $(this).attr('href').match(/\.[0-9a-z]+$/i)[0].substring(1)
		$(this).css({
			'background-image':'url(../res/icons/files/'+ico+'.png)'
		})
	})
})
