let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');
let header =document.querySelector('.header') ;
menu.onclick = () => {
    menu.classList.toggle('fa-times') ;
    navbar.classList.toggle('active') ;
}
window.onscroll = () => {
    menu.classList.remove('fa-times') ;
    navbar.classList.remove('active') ;
    if (window.scrollY >0){
        header.classList.add('active');
    }else{
        header.classList.remove('active');

    }
}

document.querySelector("form").addEventListener("submit", function(event) {
    // Empêche l'envoi du formulaire
    event.preventDefault();
  
    // Obtient les valeurs des champs du formulaire
    var name = document.querySelector('input[name="name"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var number = document.querySelector('input[name="number"]').value;
    var date = document.querySelector('input[name="date"]').value;
  
    // Vérifiez si les champs sont valides
    // Exemple de validation simple : vérifier si les champs ne sont pas vides
    if (name.trim() === "" || email.trim() === "" || number.trim() === "" || date.trim() === "") {
      alert("Veuillez remplir tous les champs du formulaire.");
      return;
    }
  
    // Faites quelque chose avec les données du formulaire, par exemple, envoyer une demande de rendez-vous à un serveur.
  
    // Réinitialise le formulaire après la soumission
    document.querySelector("form").reset();
  
    // Affiche un message de confirmation ou redirige l'utilisateur vers une autre page
    alert("Votre rendez-vous a été enregistré avec succès !");
  });


  
  document.addEventListener("DOMContentLoaded", function() {
    // Get the delete button and add a click event listener
    var deleteButton = document.querySelector('button.link-btn');
    deleteButton.addEventListener("click", function() {
      // Get the element to delete
      var elementToDelete = document.getElementById("element-id");
      
      // Check if the element exists
      if (elementToDelete) {
        // Delete the element
        elementToDelete.parentNode.removeChild(elementToDelete);
        console.log("Element deleted successfully!");
      }
    });
  });
  
  