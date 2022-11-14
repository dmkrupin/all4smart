<?php
$fio = $_POST['fio'];
$tel = $_POST['tel'];
$msg = $_POST['msg'];

$fio = htmlspecialchars($fio);
$tel = htmlspecialchars($tel);
$msg = htmlspecialchars($msg);

$fio = urldecode($fio);
$tel = urldecode($tel);
$msg = urldecode($msg);

$fio = trim($fio);
$tel = trim($tel);
$msg = trim($msg);

if (mail("all4smart69@gmail.com", "Заявка с сайта", "ФИО: ".$fio.". Телефон: ".$tel.". Заявка: ".$msg.".","From: all4smart@site.ru \r\n"))
{
    echo "сообщение успешно отправлено";
}
else
{
    echo "при отправке сообщения возникли ошибки";
}
?>