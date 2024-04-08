<?php
// Connexion à la base de données (remplacez les valeurs par vos propres informations de connexion)
$serveur = "localhost";
$utilisateur = "root";
$mot_de_passe = "";
$base_de_donnees = "recherche";

$connexion = new mysqli($serveur, $utilisateur, $mot_de_passe, $base_de_donnees);

// Vérification de la connexion
if ($connexion->connect_error) {
    die("Échec de la connexion à la base de données: " . $connexion->connect_error);
}

// Vérification si la requête de recherche est soumise
if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET["q"])) {
    // Nettoyage de la chaîne de recherche
    $recherche = htmlspecialchars($_GET["q"]);
    
    // Requête SQL pour rechercher dans la base de données
    $requete = "SELECT * FROM bijoux WHERE nom LIKE '%$recherche%' OR description LIKE '%$recherche%'";
    
    // Exécution de la requête
    $resultat = $connexion->query($requete);
    
    // Vérification s'il y a des résultats
    if ($resultat->num_rows > 0) {
        // Affichage des résultats
        while ($row = $resultat->fetch_assoc()) {
            echo "Nom: " . $row["nom"] . "<br>";
            echo "Description: " . $row["description"] . "<br>";
            echo "Prix: " . $row["prix"] . "<br><br>";
        }
    } else {
        echo "Aucun résultat trouvé.";
    }
}

// Fermeture de la connexion à la base de données
$connexion->close();
?>