$(function(){
	$.fn.filter_blur = function(px){
		return $(this).filter_filler('blur',px+'px')	
	}
	$.fn.filter_greyscale = function(percent){
		return $(this).filter_filler('grayscale',percent)
	}
	$.fn.filter_drop_shadow = function(rule){
		return $(this).filter_filler('drop-shadow',rule)
	}
	$.fn.filter_sepia = function(percent){
		return $(this).filter_filler('sepia',precent)
	}
	$.fn.filter_brightness = function(amount){
		return $(this).filter_filler('brightness',amount)
	}
	$.fn.filter_contrast = function(amount){
		return $(this).filter_filler('contrast',amount)
	}
	$.fn.filter_hue_rotate = function(degrees){
		return $(this).filter_filler('hue-rotate',degrees+'deg')
	}
	$.fn.filter_invert = function(percent){
		return $(this).filter_filler('invert',percent)
	}
	$.fn.filter_saturate = function(amount){
		return $(this).filter_filler('saturate',amount)
	}
	$.fn.filter_opacity = function(percent){
		return $(this).filter_filler('opacity',percent)
	}

	$.fn.filter_filler = function(filter,amount){
		//Webkit
		if($(this).css('-webkit-filter')!='none'){
			$(this).css('-webkit-filter',
				$(this).css('-webkit-filter')+" "+filter+"("+amount+")"
			)
		}else{
		$(this).css('-webkit-filter',filter+"("+amount+")")
		}//Mozilla
		if($(this).css('-moz-filter')!='none'){
			$(this).css('-moz-filter',
				$(this).css('-moz-filter')+" "+filter+"("+amount+")"
			)
		}else{
		$(this).css('-moz-filter',filter+"("+amount+")")
		}//Plain
		if($(this).css('filter')!='none'){
			return $(this).css('filter',
				$(this).css('filter')+" "+filter+"("+amount+")"
			)
		}
		return $(this).css('filter',filter+"("+amount+")")
	}
})