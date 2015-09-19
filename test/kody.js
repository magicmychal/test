         document.getElementById("kliktutaj").onclick = function() {clickHere()};
        function clickHere(){
            var person = prompt("Aby skorzystać podaj swoje imię");
            window.location="http://"+person+".wp.pl";
        }
