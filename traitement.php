<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nom = htmlspecialchars($_POST["nom"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    echo "<h2>Récapitulatif du formulaire :</h2>";
    echo "<p><strong>Nom:</strong> " . $nom . "</p>";
    echo "<p><strong>Adresse e-mail:</strong> " . $email . "</p>";
    echo "<p><strong>Message:</strong> " . $message . "</p>";

    $serveur = "localhost";
    $utilisateur = "root";
    $mot_de_passe = "";
    $nom_base_de_donnees = "boutique1";
    $connexion = new mysqli($serveur, $utilisateur,$mot_de_passe ,$nom_base_de_donnees);

    if ($connexion->connect_error) {
        die("La connexion a échoué : " . $connexion->connect_error);
    }

    $sql = "INSERT INTO bijoux1 (nom, email, message) VALUES ('$nom', '$email', '$message')";

    if ($connexion->query($sql) === TRUE) {
        echo "<p>Les données ont été ajoutées à la base de données avec succès.</p>";
    } else {
        echo "<p>Erreur lors de l'ajout des données : " . $connexion->error . "</p>";
    }

    $connexion->close();
} else {
    echo "<p>Erreur : Le formulaire n'a pas été soumis.</p>";
}
?>
