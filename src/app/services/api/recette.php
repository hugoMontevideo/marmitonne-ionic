<?php
require_once 'init.php';

// lorsqu'on crée une recette on doit créer
// un enregistrement dans la table ordre_etape
if($_GET['action'] == 'create' ) {
    $data = json_decode(file_get_contents('php://input'), true); // recuperation names

    // $sql = "REPLACE INTO recette 
    //             (id, titre,description,cout, tempsprep, tempscuisson,difficulte,id_categorie) 
    //         VALUES (:id, :titre,:description,:cout, :tempsprep, :tempscuisson,:difficulte,:id_categorie)";
            
    $sql = "REPLACE INTO recette 
    (id, titre,description,cout, tempsprep, tempscuisson,difficulte,photo,id_categorie) 
     VALUES (:id, :titre,:description,:cout, :tempsprep, :tempscuisson,:difficulte,:photo,:id_categorie)";
    $result = $pdo->prepare($sql);
    $result->execute($data);
    $lastId = $pdo->lastInsertId(); // dernier id_recette

    // créer un enregistrement dans ordre_etape 
    // $sql_ordre_etape = "INSERT INTO ordre_etape
    //                             (ordre, id_recette)
    //                     VALUES (:ordre, :id_recette)";
    // $result = $pdo->prepare($sql_ordre_etape);
    // $ok = $result->execute([':ordre'=> '',
    //                   ':id_recette'=>$lastId
    //                 ]);

    echo json_encode($lastId); // pour la reponse on encode en json
}

if($_GET['action'] == 'readOneRecipe')
{
    $sql = "SELECT * FROM recette
            WHERE id = :id";

    $result = $pdo->prepare($sql);
    $result->execute([':id'=>$_GET['id']]);
    $data = $result->fetch(PDO::FETCH_ASSOC);
    
    echo json_encode($data);
}

if($_GET['action'] == 'readAll')
{
    $sql = "SELECT r.*, c.titre as categorie FROM categorie c 
            INNER JOIN recette r ON r.id_categorie=c.id";

    $result = $pdo->prepare($sql);
    $result->execute();

    $data = $result->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($data);
}

if($_GET['action'] == 'readOne')
{
    $sql = "SELECT r.*, c.titre as categorie FROM categorie c 
            INNER JOIN recette r ON r.id_categorie=c.id
            WHERE r.id = :id";

    $result = $pdo->prepare($sql);
    $result->execute([':id'=>$_GET['id']]);
    $data = $result->fetch(PDO::FETCH_ASSOC);
    

    echo json_encode($data);
}

if($_GET['action'] == 'delete' )
{
    $sql = "DELETE FROM recette WHERE id = :id";
    
    $result = $pdo->prepare($sql);
    $result->execute( [':id'=>$_GET['id']] );

}

