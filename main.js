window.addEventListener("load", () => {
    clock();
    function clock() {
        var a = new Date(2003, 9, 5); // 29 januari 2007
        var b = new Date(); // Huidige datum en tijd

        // Bereken het verschil in milliseconden
        var differenceInMillis = b - a;

        // Zet het verschil om naar dagen
        var differenceInDays = Math.floor(differenceInMillis / (1000 * 60 * 60 * 24));
  
      //print current date and time to the DOM
      document.getElementById("date-time").innerHTML = "     " + differenceInDays + " " + "dagen getrouwd";
      setTimeout(clock, 1000);
    }
    dadjokes();
    function dadjokes() {
        var startDate = new Date(2003, 9, 10); // 10 oktober 2003
        var today = new Date();
        
        // Bereken het verschil in milliseconden
        var differenceInMilliseconds = today - startDate;
        
        // Zet het verschil om naar seconden
        var differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
        
        // Initialiseer de teller
        var counter = differenceInSeconds + 234867;
        
        // Functie om de teller bij te werken en weer te geven
        function updateCount() {
            document.getElementById("dad-jokes").innerHTML = "     " + counter + " dad jokes";
            counter++; // Verhoog de teller met 1
        }
        
        // Update onmiddellijk en daarna elke seconde
        updateCount();
        setInterval(updateCount, 1000);
    }
    laughing();
    function laughing() {
      const startDate = new Date("2003-09-05");
  
      // Huidige tijd
      let currentDate = new Date();
  
      // Het aantal milliseconden dat overeenkomt met 3.428571428571429 uur (1 verhogingstijd)
      const incrementInterval = 3.428571428571429 * 60 * 60 * 1000; // uren omzetten naar milliseconden
  
      // Bereken hoeveel tijd er verstreken is sinds de startdatum
      let timeDifference = currentDate - startDate;
  
      // Bereken hoeveel 'tikken' de teller sinds 5 september 2003 moet verhogen
      let counter = Math.floor(timeDifference / incrementInterval);
  
      // Toon de huidige tellerstand meteen bij het laden van de pagina
      document.getElementById("laugh-together").innerHTML = counter + " keer samen gelachen";
  }
  calculatePizzaCount();
  // Roep de functie aancalculatePizzaCount(); 
  function calculatePizzaCount() {
    var weddingDate = new Date(2003, 9, 5); // Huwelijksdatum (5 oktober 2003)
    var today = new Date(); // Huidige datum en tijd

    // Bereken het verschil in milliseconden
    var differenceInMillis = today - weddingDate;

    // Zet het verschil om naar dagen
    var differenceInDays = Math.floor(differenceInMillis / (1000 * 60 * 60 * 24));

    // Bereken het aantal weken
    var differenceInWeeks = Math.floor(differenceInDays / 7);

    // Stel het aantal Turkse pizza’s in (1 pizza per week)
    var pizzaCount = differenceInWeeks;

    // Toon de resultaten in de DOM
    document.getElementById("pizzacount").innerHTML = 
    differenceInWeeks + " weken getrouwd =<br>" +
    pizzaCount + " Turkse pizza's gegeten";
}
 
  });
  document.addEventListener("DOMContentLoaded", function() {
    function checkScreenWidth() {
        var width = window.innerWidth;

        if (width > 1000) {
            var userConfirmed = confirm("Deze site is alleen voor mobiel ontworpen.");
            if (userConfirmed) {
                window.location.href = "https://giphy.com/embed/Ty9Sg8oHghPWg";
            }
        }
    }

    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
});
