<?php
// Connexion à la base de données MySQL
$connexion = new mysqli("localhost", "votre_utilisateur", "votre_mot_de_passe", "votre_base_de_donnees");

// Vérifier la connexion
if ($connexion->connect_error) {
    die("La connexion a échoué : " . $connexion->connect_error);
}

// Sélectionner toutes les données de la table 'bagues'
$resultat = $connexion->query("SELECT * FROM bagues");

// Vérifier s'il y a des résultats
if ($resultat->num_rows > 0) {
    // Afficher les données
    while ($row = $resultat->fetch_assoc()) {
        echo "<img src='" . $row["image"] . "' alt='Bague'>";
        echo "<p>Description : " . $row["description"] . "</p>";
        echo "<p>Prix : $" . $row["prix"] . "</p>";
    }
} else {
    echo "Aucune bague trouvée.";
}

// Fermer la connexion à la base de données
$connexion->close();
?>
