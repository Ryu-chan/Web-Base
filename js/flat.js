$(function(){
	//Tooltips

	/** Requires jquery, qtip */
	$('[tooltip]').each(function(){
		$(this).qtip({
			content: $(this).attr('tooltip'),
			show: 'mouseover',
			hide: 'mouseout'
		})
	})


})