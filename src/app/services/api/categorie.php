<?php
require_once 'init.php';

if($_GET['action'] == 'create' )
{
    // var_dump('hello');
    $data = json_decode(file_get_contents('php://input'), true); // recuperation names

    $sql = "INSERT INTO categorie (id, titre) VALUES (:id, :titre)";
    $result = $pdo->prepare($sql);
    $result->execute($data);

    $lastId = $pdo->lastInsertId(); // dernier id_categorie
    echo json_encode($lastId); // pour la reponse on encode en json

}

if($_GET['action'] == 'readAll')
{
    $sql = "SELECT * FROM categorie";

    $result = $pdo->prepare($sql);
    $result->execute();

    $data = $result->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($data); // echo envoie les data en json
}

if($_GET['action'] == 'delete' )
{
    $sql = "DELETE FROM categorie WHERE id = :id";
    
    $result = $pdo->prepare($sql);
    $result->execute( [':id'=>$_GET['id']] );

}
if($_GET['action'] == 'update')
{

}


