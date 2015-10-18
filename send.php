<?php

	$to = 'knovt@mail.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
	$subject = ''; //Загаловок сообщения
	$message = '';
	$headers = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
	$headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
	if($_POST['act']=='recall_me_form')
	{ 
		$subject = 'Обратный звонок'; //Загаловок сообщения
		$message = '
			<html>
				<head>
					<title>'.$subject.'</title>
				</head>
				<body>
					<p>'.$_POST['prevact'].'</p>
					<p>Имя: '.$_POST['name'].'</p>
					<p>Телефон: '.$_POST['tel'].'</p> 
				</body>
			</html>'; //Текст нащего сообщения можно использовать HTML теги
	}
	else if($_POST['act']=='mail_form')
	{
		$subject = 'Обратная связь'; //Загаловок сообщения
		$message = '
			<html>
				<head>
					<title>'.$subject.'</title>
				</head>
				<body>
					<p>'.$_POST['prevact'].'</p>
					<p>Имя: '.$_POST['name'].'</p>
					<p>Телефон: '.$_POST['tel'].'</p> 
					<p>Почта: '.$_POST['email'].'</p> 
				</body>
			</html>'; //Текст нащего сообщения можно использовать HTML теги
	}
	else
	{
		$subject = 'Обратный звонок'; //Загаловок сообщения
		$message = '
			<html>
				<head>
					<title>'.$subject.'</title>
				</head>
				<body>
					<p>'.$_POST['prevact'].'</p>
					<p>Имя: '.$_POST['name'].'</p>
					<p>Телефон: '.$_POST['tel'].'</p> 
				</body>
			</html>'; //Текст нащего сообщения можно использовать HTML теги
	}
	mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
	
?>