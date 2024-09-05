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
document.addEventListener("DOMContentLoaded", function() {
  const weddingDate = new Date(2003, 9, 5); // Datum van trouwen (5 september 2003)
  const currentDate = new Date();
  const cheeseCostPerPack = 3; // Kosten per kaaspak
  const packsPerWeek = 5.5; // Gemiddeld aantal pakken kaas per week
  const cheesePerPersonPerDay = 2; // Aantal plakken kaas per persoon per dag

  // Functie om het aantal dagen tussen twee datums te berekenen
  function getDaysBetweenDates(startDate, endDate) {
      const oneDay = 24 * 60 * 60 * 1000; // Aantal milliseconden in een dag
      return Math.floor((endDate - startDate) / oneDay);
  }

  // Functie om de kosten uit te rekenen
  function calculateCheeseCost() {
      const daysMarried = getDaysBetweenDates(weddingDate, currentDate);

      // Ouders en kinderen:
      const initialFamilySize = 2; // Ouders
      const familyGrowth = [
          { years: 5, size: initialFamilySize },
          { years: 10, size: initialFamilySize + 1 }, // Broer
          { years: 5, size: initialFamilySize + 2 }, // Broertje
          { years: 1, size: initialFamilySize + 3 }, // Zus
          { years: 1, size: initialFamilySize + 4 }  // Zus
      ];

      let totalCheeseCost = 0;
      let daysRemaining = daysMarried;

      for (const period of familyGrowth) {
          const periodDays = period.years * 365;
          const familySize = period.size;

          if (daysRemaining <= periodDays) {
              totalCheeseCost += daysRemaining * familySize * cheesePerPersonPerDay * cheeseCostPerPack / 30; // Aantal weken
              break;
          } else {
              totalCheeseCost += periodDays * familySize * cheesePerPersonPerDay * cheeseCostPerPack / 30;
              daysRemaining -= periodDays;
          }
      }

      return totalCheeseCost.toFixed(2);
  }

  // Update de kosten op de pagina
  function updateCheeseCost() {
      document.getElementById("cheese-cost").innerHTML = `Geschatte uitgaven aan<br> kaas:   €${calculateCheeseCost()}`;
  }

  updateCheeseCost();
  // Werk elke dag bij
  setInterval(updateCheeseCost, 24 * 60 * 60 * 1000); // Elke 24 uur
});
document.addEventListener("DOMContentLoaded", function() {
  function kisses() {
      var weddingDate = new Date(2003, 9, 5); // Datum van trouwen (5 oktober 2003)
      var today = new Date();
      
      // Bereken het verschil in milliseconden
      var differenceInMilliseconds = today - weddingDate;
      
      // Zet het verschil om naar dagen
      var differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
      
      // Bereken het aantal kussen (5 kussen per dag)
      var kissesPerDay = 5;
      var totalKisses = differenceInDays * kissesPerDay;
      
      // Functie om de teller bij te werken en weer te geven
      function updateCount() {
          document.getElementById("kisses").innerHTML = "Aantal kusjes sinds <br> trouwdag: " + totalKisses;
      }
      
      // Update onmiddellijk
      updateCount();
      // Update elke dag (24 uur * 60 minuten * 60 seconden * 1000 milliseconden)
      setInterval(function() {
          // Herbereken kussen per dag
          today = new Date();
          differenceInMilliseconds = today - weddingDate;
          differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
          totalKisses = differenceInDays * kissesPerDay;
          updateCount();
      }, 24 * 60 * 60 * 1000); // Elke 24 uur
  }

  kisses();
});

document.addEventListener("DOMContentLoaded", function() {
  function calculateMovieTime(startDate, endDate) {
      // Parse the start and end dates
      const start = new Date(startDate);
      const end = new Date(endDate);

      // Calculate the difference in milliseconds
      const diff = end - start;

      // Convert milliseconds to weeks (1 week = 7 days * 24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
      const weeks = diff / (7 * 24 * 60 * 60 * 1000);

      // Calculate total movie time in hours (2 hours per week)
      const totalHours = weeks * 2;

      return totalHours;
  }

  // Function to update the movie time display in the HTML element with ID 'movies'
  function updateMovieTime() {
      const weddingDate = '2003-09-05'; // Correct wedding date
      const currentDate = new Date().toISOString().split('T')[0]; // Current date

      const totalMovieTime = calculateMovieTime(weddingDate, currentDate);

      // Get the result element and set its content
      document.getElementById('movies').innerHTML = `Totaal aantal uren samen <br> filmpjes zoals<br> keuringsdienst <br> gekeken: ${totalMovieTime.toFixed(2)} uur`;
  }

  // Update immediately
  updateMovieTime();
  // Update daily (24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
  setInterval(updateMovieTime, 24 * 60 * 60 * 1000); // Every 24 hours
});
