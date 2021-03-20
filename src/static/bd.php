<?php

$host='pdb50.awardspace.net';
        $db='3343165_chuk';
        $user='3343165_chuk';
        $pass='75uteniv';
$post_id=0;

    $charset = 'utf8';

    $dsn = "mysql:host=$host;dbname=$db;charset=$charset";
    $opt = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ];
    $pdo = new PDO($dsn, $user, $pass, $opt);


if($_POST['action'] == 'getCurr') {
    $idOfUpdate=$_POST['id'];
    // $whatToUpdate=$_POST['wtu'];
    $stmt = null;
    $pdo = null;
    $pdo = new PDO($dsn, $user, $pass, $opt);
    $sql = "SELECT `post_content` FROM `wp_posts` WHERE `ID`=". $idOfUpdate;
    $stmt = $pdo->query('SELECT * FROM `chukPosts`');
    $row = $stmt->fetchAll(PDO::FETCH_UNIQUE);
    $currentVal = $row[$idOfUpdate][$whatToUpdate];
    echo $currentVal;
}


?>