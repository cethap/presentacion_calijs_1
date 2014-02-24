var socket = io.connect(location.origin);
(function($){
	$(function(){
		$(".list a, .bar-title a").click(function(e){
			e.preventDefault();
			var el = $(this);
			$(".list li").each(function(){
				$(this).removeClass("active");
			});
			el.parents("li").addClass("active");
			if(typeof el.attr("data-href") !== "undefined"){
				socket.emit('sendLink',{href:el.attr("data-href")});
			}else{
				socket.emit('sendBook',{
					accion:el.attr("data-book-accion"),
					paso:el.attr("data-book-paso")
				});
			}
		});

		if($("#impress").length){
			socket.on('Linkiar', function (data) {
				location.href = data.href;
			});

			socket.on('Book', function (data) {
				if(data.accion == "open"){
					ll[0]._open();
					ll[0].bb.jump(1);
				}else if(data.accion == "move"){
					data.paso = parseInt(data.paso,10);
					ll[0].bb.jump(data.paso);
				}else if(data.accion == "close"){
					ll[0]._close();
				}
			});

		}
	});
})(jQuery);


// var socket = io.connect('http://localhost:3000');
//   socket.on('news', function (data) {
//     console.log(data);
//     socket.emit('my other event', { my: 'data' });
// });