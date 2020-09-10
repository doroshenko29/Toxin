console.log(parseInt(119/10));
var divblock = document.querySelector('.popUp');

$("#guests").click(function(){

divblock.classList.toggle('hidden');
});

$(".minus").click(function(){
	var $input = $(this).parent().find('.block');
var num = $input.text();
if(num>0)
	num--;
$input.text(num);
});

$(".plus").click(function(){
	var $input = $(this).parent().find('.block');
var num = $input.text();
	num++;
$input.text(num);
});


$(".accept").click(function(){
	var $num1 = $(".popUp div:first-child>div").find('.block').text();
	var $num2 = $(".popUp div:nth-child(2)>div").find('.block').text();
	var $num3 = $(".popUp div:nth-child(3)>div").find('.block').text();

	if($num1!=0||$num2!=0||$num3!=0){
		var rez = parseInt($num1)+parseInt($num2)+parseInt($num3);
		var wordEnd;
		if(parseInt(rez/10)%10==1){wordEnd="ей";}
		else{
			switch(rez%10){
				case 1:wordEnd="ь";break;
				case 2:;
				case 3:;
				case 4:wordEnd="я";break;
				case 5:;
				case 6:;
				case 7:;
				case 8:;
				case 9:;
				case 0:wordEnd="ей";break;
			}
		}

		$("#guests").val(rez+" гост" + wordEnd);
	}
	else{
		$("#guests").val("Сколько гостей");
	}

	divblock.classList.toggle('hidden');
});


$(".clear").click(function(){
	$(".popUp div:first-child>div").find('.block').text("0");
	$(".popUp div:nth-child(2)>div").find('.block').text("0");
	$(".popUp div:nth-child(3)>div").find('.block').text("0");

	$("#guests").val("Сколько гостей");
	 divblock.classList.toggle('hidden');
});

$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $("#guests");
		var div2 = $(".popUp");
		 
		if (!div.is(e.target) && !div2.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0&& div2.has(e.target).length === 0) { // и не по его дочерним элементам
			divblock.classList.add('hidden'); // скрываем его
		}
});