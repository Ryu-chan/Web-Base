$(function(){
	//Tooltips

	/** Requires jquery, qtip */
	$('[tooltip]').each(function(){
		$(this).qtip({
			content: $(this).attr('tooltip'),
			position: {
				target: 'mouse',
            	adjust: { x: 5, y: 5 },
            	viewport: $(window)
            }
		})
	})

	//Accordion

	/** Requires jquery, jqueryui */
	$('[data-accordion]').each(function(){
		$(this).accordion($.parseJSON($(this).data('accordion')));
	})


})