<?php
require_once 'init.php';

// etapes de la recette
if($_GET['action'] == 'readEtapes')
{
    $sql = "SELECT e.*, r.titre as recette FROM etape e
            INNER JOIN recette r ON r.id = e.id_recette
            WHERE id_recette = :id_recette
            ORDER BY e.place";

    $result = $pdo->prepare($sql);
    $result->execute([':id_recette'=>$_GET['id']]);

    $data = $result->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($data); // echo envoie les data en json
}

// lorsqu'on crée une étape on doit metre à jour
// la table ordre_etape
if($_GET['action'] == 'create' ) {
    // recuperation names du form dans tableau assoc (true)
    $data = json_decode(file_get_contents('php://input'), true); 

    $sql = "REPLACE INTO etape 
                    (id, description,place, id_recette) 
            VALUES (:id, :description,:place, :id_recette)";
    $result = $pdo->prepare($sql);
    $result->execute([
                ':id'=> $data['id'],
                ':description'=> $data['description'],
                ':place'=> $data['place'],
                ':id_recette'=> $data['id_recette']
    ]);
    $lastId = $pdo->lastInsertId(); // dernier id_recette

    // 
    $newArr = explode("," , $data['orderToString']);
    array_splice(   $newArr, 
                    intval($data['place'])-1,
                    0,
                    [$lastId]
                );
    $data['orderToString'] = implode(",", $newArr);

    $sql_ordre_etape = "UPDATE ordre_etape
                        SET ordre = :ordre
                        WHERE id_recette = :id_recette";
    $result = $pdo->prepare($sql_ordre_etape);
    $ok = $result->execute([':ordre'=> $data['orderToString'],
                            ':id_recette'=>$data['id_recette']
                        ]); 

    foreach ($newArr as $key => $value ){
        $newSql = "UPDATE etape 
                    SET place = :place 
                    WHERE id = :id";
        $result = $pdo->prepare($newSql);
        $result -> execute([ ':place' => $key + 1,
                                ':id' => $value                            
                        ]);
    }

    echo json_encode($data); // pour la reponse on encode en json
}

if($_GET['action'] == 'delete' )
{
    $sql = "DELETE FROM etape WHERE id = :id";
    
    $result = $pdo->prepare($sql);
    $result->execute( [':id'=>$_GET['id']] );

}