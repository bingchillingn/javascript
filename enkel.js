// Author: Emanuel eedat2 //
// Funktion för att hantera användarinmatning och lägga till meddelanden
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Förhindra att formuläret skickas på normalt sätt

    // Hämta värdena från formuläret
    var messageText = document.getElementById('message').value;
    var chosenColor = document.getElementById('color').value;

    // Skapa ett nytt paragraf-element för meddelandet
    var newMessage = document.createElement('p');
    newMessage.textContent = messageText;
    newMessage.style.backgroundColor = chosenColor; // Sätt bakgrundsfärgen från inmatningen
    newMessage.style.padding = '10px';
    newMessage.style.borderRadius = '5px';
    newMessage.style.fontWeight = 'bold';
    
    // Lägga till klickhändelse på meddelandet för att göra det interaktivt
    newMessage.addEventListener('click', function() {
        // Byt textfärg på meddelandet när det klickas
        newMessage.style.color = "white";
        alert("Du har klickat på meddelandet: " + messageText);
    });

    // Lägg till meddelandet i meddelandefältet
    var container = document.getElementById('messages-container');
    container.appendChild(newMessage);

    // Rensa fälten efter inmatningen
    document.getElementById('message').value = '';
    document.getElementById('color').value = '#000000';
});
//författare emanuel
