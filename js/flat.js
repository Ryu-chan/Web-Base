$(function(){
	//Tooltips

	/** Requires jquery, jqueryui */
	$('[tooltip]').each(function(){
		$(this).tooltip({
			content: $(this).attr('tooltip'),
			track:true,
			items:$(this)
		})
		console.log($(this).attr('tooltip'))
	})

	//Accordion

	/** Requires jquery, jqueryui */
	$('[accordion]').each(function(){
		$(this).accordion({
			collapsible:true,
			heightStyle: "content",
			header:$(this).attr('accordion'),
			active: false
		});
	})

	//Icons
	$('[icon]').each(function(){
		$(this).addClass($(this).attr('icon'))
	})


})