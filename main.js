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
      document.getElementById("date-time").innerHTML = "Al" + " " + differenceInDays + " " + "dagen getrouwd";
      setTimeout(clock, 1000);
    }
  });