(function(){

//Inicializamos el navbar
	$(document).ready(function(){
    	$('.sidenav').sidenav();
  	});

//Inicializamos el parallax1
	$(document).ready(function(){
	    $('.parallax').parallax();
	});


//funcion para el menu fixed
		  //var loguito = document.getElementById("logo");

/*		  $(document).ready(function(){
		  		var altura = $('.menu').offset().top;
		  		// alert(altura);

		  		$(window).on('scroll', function(){
		  			if ($(window).scrollTop() > altura ){
		  				$('.menu').addClass("menu-fixed");
		  				$('.menu').addClass("z-depth-2");
		  	//			loguito.setAttribute("src", "static/imagenes/logo-nav.png");

		  			}else{
		  				$('.menu').removeClass("menu-fixed");
		  				$('.menu').removeClass("z-depth-2");
		  	//			loguito.setAttribute("src", "static/imagenes/logo-navv.png");
		  			}

		  		});
		  });
*/
}());