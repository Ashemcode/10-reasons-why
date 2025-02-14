// 📜 Liste des raisons avec images associées
const reasons = [
    { text: "Parce que quand je t'ai vu la première fois, je suis direct tombée sous ton charme.", media: "image1.jpg" },
    { text: "Parce que quand tu es content, c'est tout mon univers qui s'illumine. 😆", media: "image2.jpg" },
    { text: "Parce que tu es toujours là pour moi, pour nous, et tu me montres chaque jour que tu crois en nous. 💪", media: "image3.jpg" },
    { text: "Parce que tu es incroyablement gentil et aimant envers tes proches. 🥰", media: "image4.jpg" },
    { text: "Parce que tu me fais me sentir encore plus belle. 😍", media: "image5.jpg" },
    { text: "Parce que tu me connais bien et tu sais comment me parler. 🙌", media: "image6.jpg" },
    { text: "Parce qu'avec toi, l'amour a pris une nouvelle dimension. Je deviens meilleure. 💖", media: "image7.jpg" },
    { text: "Parce que tu me fais me sentir en sécurité. 🌟", media: "image8.jpg" },
    { text: "Parce que tu es Brave, tu n'es pas seulement chanceux. 🥺", media: "image9.jpg" },
    { text: "Parce que tu es sexy et charismatique, et que je veux retirer tes habits quand je te regarde trop longtemps. 💕", media: "image10.jpg" }
];

let index = 0; // Pour suivre quelle raison afficher

function showReason() {
    let reason = reasons[index]; // Sélectionne la raison actuelle

    document.getElementById("message").textContent = reason.text; // Change le texte

    let imgElement = document.getElementById("image");
    imgElement.src = reason.media; // Met à jour l'image
    imgElement.style.display = "block"; // Affiche l'image

    index = (index + 1) % reasons.length; // Passe à la raison suivante (revient à 0 après 10)
}
