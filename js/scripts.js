var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();

console.clear();
document.getElementById("hand").addEventListener("transitionend", function(){
    if (document.getElementById("useless").checked == true) {
        document.getElementById("useless").checked = false;
    }
});
