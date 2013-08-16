function loadScripts(paths){
	var //:

	head = document.getElementsByTagName('head')[0],
	script

	paths.forEach(function(path){
		script = document.createElement('script')
		script.type = 'text/javascript'
		script.src = path
		head.appendChild(script)
	})
}




function vendorPrefixes(items,prop,value){
    ['-webkit-','-moz-','-o-','-ms-','']
    	.forEach(function(prefix){
        	items.css(prefix+prop,value)
    	})
}