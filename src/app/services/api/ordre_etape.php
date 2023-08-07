<?php
require_once 'init.php';

if($_GET['action'] == 'readOrdre') {
    $sql = "SELECT ordre FROM ordre_etape 
            WHERE id_recette = :id";

    $result = $pdo->prepare($sql);
    $result->execute([':id'=>intval($_GET['id']) ] );

    $data = $result->fetch(PDO::FETCH_ASSOC);

    echo json_encode($data);
}