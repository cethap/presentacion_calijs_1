var socket = io.connect(location.origin);

(function($){
	$(function(){
		$(".list a").click(function(e){
			e.preventDefault();
			var el = $(this);
			$(".list li").each(function(){
				$(this).removeClass("active");
			});
			el.parents("li").addClass("active");
			socket.emit('sendLink',{href:el.attr("data-href")});
		});

		if($("#impress").length){
			socket.on('Linkiar', function (data) {
				location.href = data.href;
			});
		}
	});
})(jQuery);


// var socket = io.connect('http://localhost:3000');
//   socket.on('news', function (data) {
//     console.log(data);
//     socket.emit('my other event', { my: 'data' });
// });