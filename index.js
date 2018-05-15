//Created by SD on 05.04.2018.

$(document).ready(function () {

var images = {
	mini:{
		door:"img/ситроен/двери.jpg",
		backwings:"img/ситроен/задние-крылья.jpg",
		backbumper:"img/ситроен/задний-бампер.jpg",
		hood:"img/ситроен/капот.jpg",
		minimum:"img/ситроен/минимальный.jpg",
		optics:"img/ситроен/оптика.jpg",
		frontbumper:"img/ситроен/передний-бампер.jpg",
		stepinternal:"img/ситроен/пороги-внутренние.jpg",
		stepouter:"img/ситроен/пороги-наружние.jpg",
		standart3plus:"img/ситроен/стандартттт.jpg",
		standart2plus:"img/ситроен/стандарттт.jpg",
		standart1plus:"img/ситроен/стандартт.jpg",
		standart:"img/ситроен/стандарт.jpg",
		wholly:"img/ситроен/целиком.jpg"
	},
	middle:{
		door:"img/мазда/двери.jpg",
		backwings:"img/мазда/заднее-крыло.jpg",
		backbumper:"img/мазда/задний-бампер.jpg",
		hood:"img/мазда/капот.jpg",
		minimum:"img/мазда/минимальный.jpg",
		optics:"img/мазда/оптика.jpg",
		frontbumper:"img/мазда/передний-бампер.jpg",
		stepinternal:"img/мазда/пороги-внутренние.jpg",
		stepouter:"img/мазда/пороги-наружние.jpg",
		standart3plus:"img/мазда/стандартттт.jpg",
		standart2plus:"img/мазда/стандарттт.jpg",
		standart1plus:"img/мазда/стандартт.jpg",
		standart:"img/мазда/стандарт.jpg",
		wholly:"img/мазда/целиком.jpg"
	},
	premium:{
		door:"img/мерседес/двери.jpg",
		backwings:"img/мерседес/задние-крылья.jpg",
		backbumper:"img/мерседес/задний-бампер.jpg",
		hood:"img/мерседес/капот.jpg",
		minimum:"img/мерседес/минимальный.jpg",
		optics:"img/мерседес/оптика.jpg",
		frontbumper:"img/мерседес/передний-бампер.jpg",
		stepinternal:"img/мерседес/пороги-внутренние.jpg",
		stepouter:"img/мерседес/пороги-наружние.jpg",
		standart3plus:"img/мерседес/стандартттт.jpg",
		standart2plus:"img/мерседес/стандарттт.jpg",
		standart1plus:"img/мерседес/стандартт.jpg",
		standart:"img/мерседес/стандарт.jpg",
		wholly:"img/мерседес/целиком.jpg"
	},
	parts:{
		"зеркала":"img/parts/mirror.png",
		"торцы дверей":"img/parts/двери.png",
		"полка заднего бампера":"img/parts/задний-бампер.png",
		"капот":"img/parts/капот.png",
		"крылья":"img/parts/крылья.png",
		"передний бампер":"img/parts/передний-бампер.png",
		"пороги внутрение":"img/parts/пороги.png",
		"противотуманки":"img/parts/противотуманки.png",
		"ручки":"img/parts/ручки.png",
		"фары":"img/parts/фары.png",
		"часть капота":"img/parts/часть-капота.png",
		"часть крыльев":"img/parts/часть-крыльев.png"

	}
};

//при загрузки страницы
	var display= $(".block").parent().attr('id');
	$('.display_equipment').append('<img src="'+images[display].standart2plus+'" alt="">');
	$('.standart2plus').addClass('bghover');

	//при клике на кнопки класса
$('.calculate').on('click',function (event) {
	event.preventDefault();
	$('.bghover').removeClass('bghover');
	$('.part').remove();
	$('.standart2plus').addClass('bghover');
	$('.display_equipment img').remove() ;
	$('.calculate').removeClass('block');
	$(this).addClass('block');
	  var display= $(".block").parent().attr('id');  
	           $('.display_equipment').append('<img src="'+images[display].standart2plus+'" alt="">');


});



//при наведении мыши по списку
$('nav a').mouseover(function (event) {

	$('.bghover').removeClass('bghover');
	$('.part').remove();
	$(this).addClass('bghover');
		var name =$('.block').parent().attr('id');
	var model;
		switch (name){
			case "mini":  model=images.mini;break;
			case "middle":  model=images.middle;break;
			case "premium":  model=images.premium;break;
		}
		var part = event.target.className.split(' ').shift();

		$('.display_equipment img').remove();
		$('.display_equipment').append('<img class="banner" src="'+model[part]+'" >');
				var parts = images.parts;
				for(var key in parts) {
					var formula = '<div class="part">' + '<img src="' + parts[key] + '"/>' + '<p>' + key + '</p>' + '</div>';
					if (part == "minimum") {
						if (key == "пороги внутрение"
							|| key == "торцы дверей"
							|| key == "полка заднего бампера"
							|| key == "зеркала"
							|| key == "ручки"
							|| key == "фары") {

							$('.parts').append(formula);

						}
					}
						if (part == "standart") {
							if (key == "противотуманки"
								|| key == "часть капота"
								|| key == "часть крыльев"
								|| key == "зеркала"
								|| key == "ручки"
								|| key == "передний бампер"
								|| key == "фары") {

								$('.parts').append(formula);

							}
						}
						if (part == "standart1plus") {
							if (key == "противотуманки"
								|| key == "капот"
								|| key == "часть крыльев"
								|| key == "зеркала"
								|| key == "ручки"
								|| key == "полка заднего бампера"
								|| key == "фары") {

								$('.parts').append(formula);

							}
						}
						if (part == "standart2plus") {
							if (key == "противотуманки"
								|| key == "капот"
								|| key == "крылья"
								|| key == "зеркала"
								|| key == "ручки"
								|| key == "передний бампер"
								|| key == "фары") {

								$('.parts').append(formula);

							}
						}
						if (part == "standart3plus") {
							if (key == "противотуманки"
								|| key == "капот"
								|| key == "крылья"
								|| key == "зеркала"
								|| key == "ручки"
								|| key == "передний бампер"
								|| key == "полка заднего бампера"
								|| key == "фары") {

								$('.parts').append(formula);

							}
						}
					}


});

// скрыть/открыть подменю
$(".partial").click(function () {
	var menuPartial = $(".menuPartial").css('display');
	console.log(menuPartial);
	if(menuPartial == 'none'){
		$(".menuPartial").css({'display':'block'});
	}else{
		$(".menuPartial").css({'display':'none'});
	}

});


});