<?php

	$to = 'knovt@mail.ru'; //����� ����������, ����� ������� ����� ������� ������� ������ �������
	$subject = ''; //��������� ���������
	$message = '';
	$headers = "Content-type: text/html; charset=utf-8 \r\n"; //��������� ������
	$headers .= "From: ����������� <from@example.com>\r\n"; //������������ � ����� �����������
	if($_POST['act']=='recall_me_form')
	{ 
		$subject = '�������� ������'; //��������� ���������
		$message = '
			<html>
				<head>
					<title>'.$subject.'</title>
				</head>
				<body>
					<p>'.$_POST['prevact'].'</p>
					<p>���: '.$_POST['name'].'</p>
					<p>�������: '.$_POST['tel'].'</p> 
				</body>
			</html>'; //����� ������ ��������� ����� ������������ HTML ����
	}
	else if($_POST['act']=='mail_form')
	{
		$subject = '�������� �����'; //��������� ���������
		$message = '
			<html>
				<head>
					<title>'.$subject.'</title>
				</head>
				<body>
					<p>'.$_POST['prevact'].'</p>
					<p>���: '.$_POST['name'].'</p>
					<p>�������: '.$_POST['tel'].'</p> 
					<p>�����: '.$_POST['email'].'</p> 
				</body>
			</html>'; //����� ������ ��������� ����� ������������ HTML ����
	}
	else
	{
		$subject = '�������� ������'; //��������� ���������
		$message = '
			<html>
				<head>
					<title>'.$subject.'</title>
				</head>
				<body>
					<p>'.$_POST['prevact'].'</p>
					<p>���: '.$_POST['name'].'</p>
					<p>�������: '.$_POST['tel'].'</p> 
				</body>
			</html>'; //����� ������ ��������� ����� ������������ HTML ����
	}
	mail($to, $subject, $message, $headers); //�������� ������ � ������� ������� mail
	
?>