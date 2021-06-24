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

if($_POST['whatToDo'] == '+') {

    $url = 'https://chuk.dx.am/cock/api/collections/save/name';
    $data = array('Authorization' => 'Bearer 66bf7825cc605231eccd49b4dfaad7');
    
    // use key 'http' even if you send the request to https://...
    $options = array(
        'http' => array(
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($data)
        )
    );
    $context  = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    if ($result === FALSE) { /* Handle error */ }
    
    var_dump($result);
   echo $result;
}

if($_POST['action'] == 'connectBD') {
    $stmt = null;
    $pdo = null;
    $pdo = new PDO($dsn, $user, $pass, $opt);
    $stmt = $pdo->query('SELECT * FROM `chat`');
    $row = $stmt->fetchAll(PDO::FETCH_UNIQUE);
    echo json_encode($row);
}



?>