window.addEventListener("load", () => {
    clock();
    function clock() {
        var a = new Date(2003, 9, 10); // 29 januari 2007
        var b = new Date(); // Huidige datum en tijd

        // Bereken het verschil in milliseconden
        var differenceInMillis = b - a;

        // Zet het verschil om naar dagen
        var differenceInDays = Math.floor(differenceInMillis / (1000 * 60 * 60 * 24));
  
      //print current date and time to the DOM
      document.getElementById("date-time").innerHTML = differenceInDays + " " + "dagen getrouwd";
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
            document.getElementById("dad-jokes").innerHTML = counter + " dad jokes";
            counter++; // Verhoog de teller met 1
        }
        
        // Update onmiddellijk en daarna elke seconde
        updateCount();
        setInterval(updateCount, 1000);
    }
  });