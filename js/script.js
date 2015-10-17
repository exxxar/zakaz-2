var phoneModal;
var phoneForm;

var mailModal;
var mailForm;

var politicModal;

var bottomMailForm;
function validatePhone(fld) {
	
   var error = "";
	var tfld = fld.val();   
   if (tfld == "") {
        error = "Вы не ввели номер телефона\n";
        fld.css({'border' : '2px red solid'});
    } 
	else {
		fld.css({'border' : '1px #CCCCCC solid'});
	}

    return error;
}

function validateName(fld)
{
	var error = "";
	var tfld = fld.val();
	if (tfld == "") {
		fld.css({'border' : '2px red solid'});
        error = "Вы не ввели Ваше имя\n";
    }
	else
	{
		fld.css({'border' : '1px #CCCCCC solid'});
	}
	return error;
}
function validateEmail(fld) {
	
    var error="";
    var tfld = fld.val();                        // value of field with whitespace trimmed off
    var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/ ;
    var illegalChars= /[\(\)\<\>\,\;\:\\\"\[\]]/ ;
  
    if (tfld == "") {
		fld.css({'border' : '2px red solid'});
        error = "Вы не ввели адрес email\n";
    } else if (!emailFilter.test(tfld)) {              //test email for illegal characters
        fld.css({'border' : '2px red solid'});
        error = "Вы ввели некорректный адрес email\n";
    } else if (tfld.match(illegalChars)) {
        fld.css({'border' : '2px red solid'});
        error = "Email содержит некорректные символы\n";
    } else {
        fld.css({'border' : '1px #CCCCCC solid'});
    }
    return error;
}


$(document).ready(function(){
	  		
		$(window).scroll(function(){
			var h = $(window).scrollTop();
			$('nav ul li:nth-of-type(1)').removeClass('i1');
			$('nav ul li:nth-of-type(2)').removeClass('i2');
			$('nav ul li:nth-of-type(3)').removeClass('i3');
			$('nav ul li:nth-of-type(4)').removeClass('i4');
			$('nav ul li:nth-of-type(5)').removeClass('i5');
			$('nav ul li:nth-of-type(6)').removeClass('i6');
			$('nav ul li:nth-of-type(7)').removeClass('i7');
			$('nav ul li:nth-of-type(8)').removeClass('i8');
			
			if (h >= 0 && h < 1000)			
				$('nav ul li:nth-of-type(1)').addClass('i1');
			if (h >= 1000 && h < 2600)	
				$('nav ul li:nth-of-type(2)').addClass('i2');
			if (h >= 2600 && h < 3800)	
				$('nav ul li:nth-of-type(3)').addClass('i3');
			if (h >= 3800 && h < 6000)	
				$('nav ul li:nth-of-type(4)').addClass('i4');
			if (h >= 6000 && h < 7500)
				$('nav ul li:nth-of-type(5)').addClass('i5');
			if (h >= 7500 && h < 9100)
				$('nav ul li:nth-of-type(6)').addClass('i6');		
			if (h >= 9100 && h < 10500)
				$('nav ul li:nth-of-type(7)').addClass('i7');	
			if (h >= 10500 && h < 12000)
				$('nav ul li:nth-of-type(8)').addClass('i8');	
			//$('header').html(h);
			if (h>=130)
				$('nav').addClass("menu-fixed");
			else
				$('nav').removeClass("menu-fixed");
		});
				
	phoneModal = $('#call-me-modal');
	phoneForm = $('#form-template1');
	
	mailModal = $('#mail-me-modal');
	mailForm = $('#form-template2');
	
	politicModal = $("#politic");
	
	$('.bxslider').bxSlider();	
	$("input[name=tel]").mask("+7 (999) 999-9999");
		

	$(".show-callback-form").click(function(event){
		event.preventDefault();
		var prevActionName = $(this).find('input[name=actname]').val();
		var prevAction = $(this).find('input[name=act]').val();
		phoneModal.find('input[name=prevactname]').val(prevActionName);
		phoneModal.find('input[name=prevact]').val(prevAction);
		mailModal.find('input[name=prevactname]').val(prevActionName);
		mailModal.find('input[name=prevact]').val(prevAction);
		
		phoneModal.find("#name-form").val("");
		phoneModal.find("#name-form").attr("placeholder","Введите ваше имя");
		phoneModal.find("#name-form").css({'border' : '1px #CCCCCC solid'});

		
		phoneModal.find("#tel-form").val("");
		phoneModal.find("#tel-form").attr("placeholder","Введите ваш № телефона");
		phoneModal.find("#tel-form").css({'border' : '1px #CCCCCC solid'});
		
		mailModal.find("#name-form").val("");
		mailModal.find("#name-form").attr("placeholder","Введите ваше имя");
		mailModal.find("#name-form").css({'border' : '1px #CCCCCC solid'});
		
		mailModal.find("#tel-form").val("");
		mailModal.find("#tel-form").attr("placeholder","Введите ваш № телефона");
		mailModal.find("#tel-form").css({'border' : '1px #CCCCCC solid'});
		
		mailModal.find("#email-form").val("");
		mailModal.find("#email-form").attr("placeholder","Введите ваш e-mail");
		mailModal.find("#email-form").css({'border' : '1px #CCCCCC solid'});
	
		
		if(prevAction === "form1" || prevAction === "form13")
		{
			$('#form-template1 h1').text('ВВЕДИТЕ ВАШ № ТЕЛЕФОНА');
			$('#form-template1 p').html('мы перезвоним вам в течении часа <br> и ответим на все интересующие вас вопросы');
			$('.send-tel').html('ПЕРЕЗВОНИТЕ МНЕ!');
			$('.send-tel').css({'font-size' : '24px'});
			phoneModal.arcticmodal();
		}
		else if(prevAction === "form2")
		{
			$('#form-template2 h1').text('ВВЕДИТЕ ВАШИ КОНТАКТНЫЕ ДАННЫЕ');
			$('#form-template2 p').html('наш специалист свяжется с вами в течении часа <br> и ответит на все интересующие вас вопросы');
			$('.send-email').html('ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ СПЕЦИАЛИСТА В ТЕЧЕНИИ ЧАСА');
			$('.send-email').css({'font-size' : '18px'});
			mailModal.arcticmodal();
		}
		else if(prevAction === "form3" || prevAction === "form4" || prevAction === "form11")
		{
			$('#form-template2 h1').text('ВВЕДИТЕ ВАШИ КОНТАКТНЫЕ ДАННЫЕ');
			$('#form-template2 p').html('мы вышлем вам анкету-заявление <br> на получение банковской гарантии');
			$('.send-email').html('ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ ПО СВОЕЙ СИТУАЦИИ');
			$('.send-email').css({'font-size' : '24px'});
			mailModal.arcticmodal();
		}
		else if(prevAction === "form5" )
		{
			$('#form-template2 h1').text('ВВЕДИТЕ ВАШИ КОНТАКТНЫЕ ДАННЫЕ');
			$('#form-template2 p').html('наш специалист свяжется с вами в течении часа <br> и ответит на все интересующие вас вопросы');
			$('.send-email').html('УЗНАТЬ СТОИМОСТЬ БУХГАЛТЕРСКИХ УСЛУГ');
			$('.send-email').css({'font-size' : '24px'});
			mailModal.arcticmodal();
		}
		else if(prevAction === "form6" || prevAction === "form8")
		{
			$('#form-template2 h1').text('ВВЕДИТЕ ВАШИ КОНТАКТНЫЕ ДАННЫЕ');
			$('#form-template2 p').html('наш специалист свяжется с вами в течении часа <br> и ответит на все интересующие вас вопросы');
			$('.send-email').html('УЗНАТЬ СТОИМОСТЬ АУДИТОРСКИХ УСЛУГ');
			$('.send-email').css({'font-size' : '18px'});
			mailModal.arcticmodal();
		}
		else if(prevAction === "form7" || prevAction === "form9")
		{
			$('#form-template2 h1').text('ВВЕДИТЕ ВАШИ КОНТАКТНЫЕ ДАННЫЕ');
			$('#form-template2 p').html('наш специалист свяжется с вами в течении часа <br> и ответит на все интересующие вас вопросы');
			$('.send-email').html('ПОЛУЧИТЬ ПОЛНОЕ РАСПИСАНИЕ ЗАНЯТИЙ УЧЕБНОГО ЦЕНТРА');
			$('.send-email').css({'font-size' : '18px'});
			mailModal.arcticmodal();
		}
		else if(prevAction === "form10")
		{
			$('#form-template1 h1').text('ВВЕДИТЕ ВАШ № ТЕЛЕФОНА');
			$('#form-template1 p').html('мы перезвоним вам в течении часа <br> и ответим на все интересующие вас вопросы');
			$('.send-tel').html('ЗАДАЙ СВОЙ ВОПРОС СПЕЦИАЛИСТУ ПРЯМО СЕЙЧАС!');
			$('.send-tel').css({'font-size' : '24px'});
			phoneModal.arcticmodal();
		}
		
	});	
	
	$(".callback-form a").click(function(event){
		event.preventDefault();
		$.arcticmodal('close');
		politicModal.arcticmodal();
	});
	
	
	$('.send-tel').click(function( event ) {
  		event.preventDefault();
		var telErrorCode  = validatePhone(phoneForm.find('input[name=tel]'));
		var nameErrorCode = validateName(phoneForm.find('input[name=name]'));
		var can_send = true;
		if (telErrorCode!=="") 
		{
			can_send = false;
			phoneForm.find('input[name=tel]').attr("placeholder",telErrorCode);
		}
		if(nameErrorCode!=="")
		{
			can_send = false;
			phoneForm.find('input[name=name]').attr("placeholder",nameErrorCode);
		}
		if(can_send)
		{
			var cel= phoneForm.find('input[name=prevact]').val();
		
				yaCounter31256038.reachGoal(cel);
				$.post("send.php", phoneForm.serialize(),  function(data) {   });
				phoneForm.find('input[name=name]').val("");
				phoneForm.find('input[name=name]').attr("placeholder","Введите ваше имя");
				phoneForm.find('input[name=name]').css({'border' : '1px #CCCCCC solid'});
				
				phoneForm.find('input[name=tel]').val("");
				phoneForm.find('input[name=tel]').attr("placeholder","Введите ваш номер телефона");
				phoneForm.find('input[name=tel]').css({'border' : '1px #CCCCCC solid'});
		
			phoneModal.arcticmodal('close');
			$("#application_accept_modal").arcticmodal();
		}
	});

	$('.send-email').click(function( event ) {
  		event.preventDefault();
		var can_send = true;
		
		bottomMailForm = $("#"+this.parentNode.id);
		
		var mailErrorCode =validateEmail(bottomMailForm.find('input[name=email]'));
		var telErrorCode  = validatePhone(bottomMailForm.find('input[name=tel]'));
		var nameErrorCode = validateName(bottomMailForm.find('input[name=name]'));
		if (mailErrorCode !=="")
		{
			can_send = false;
			bottomMailForm.find('input[name=email]').attr("placeholder",mailErrorCode);
		}		
		if(telErrorCode !== "")
		{
			can_send = false;
			bottomMailForm.find('input[name=tel]').attr("placeholder",telErrorCode);
		}
		if(nameErrorCode !=="")
		{
			can_send = false;
			bottomMailForm.find('input[name=name]').attr("placeholder",nameErrorCode);
		}
		if(can_send)
		{
			var  cel= bottomMailForm.find('input[name=prevact]').val();
			yaCounter31256038.reachGoal(cel);
			
			$.post("send.php", bottomMailForm.serialize(),  function(data) {   });
			
			bottomMailForm.find("#email").val("");
			bottomMailForm.find("#email").attr("placeholder","Введите ваш e-mail");
			bottomMailForm.find("#email").css({'border' : 'none'});
			
			bottomMailForm.find("#tel").val("");	
			bottomMailForm.find("#tel").attr("placeholder","Введите ваш № телефона");
			bottomMailForm.find("#tel").css({'border' : 'none'});
			
			bottomMailForm.find("#name").val("");	
			bottomMailForm.find("#name").attr("placeholder","Введите ваше имя");
			bottomMailForm.find("#name").css({'border' : 'none'});
			if(this.parentNode.id === "form-template2")
			{
				bottomMailForm.arcticmodal('close');
			}
			$("#application_accept_modal").arcticmodal();	
		}
	});

});