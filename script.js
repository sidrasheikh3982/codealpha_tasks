
let display = document.querySelector(".display");


let buttons = document.querySelectorAll(".button");


let string = "";


buttons.forEach(function(button){

    button.addEventListener("click", function(){

        let value = button.innerText;

      
        if(value == "="){

            try{

                string = eval(string).toString();
                display.value = string;

            }

            catch{

                display.value = "Error";
                string = "";

            }

        }


        else if(value == "C"){

            string = "";
            display.value = "";

        }

        else if(value == "⌫"){

            string = string.slice(0,-1);
            display.value = string;

        }

       
        else{

            string += value;
            display.value = string;

        }

    });

});


document.addEventListener("keydown", function(e){

    
    if(e.key >= "0" && e.key <= "9"){

        string += e.key;
        display.value = string;

    }

  
    else if(
        e.key == "+" ||
        e.key == "-" ||
        e.key == "*" ||
        e.key == "/" ||
        e.key == "." ||
        e.key == "%"
    ){

        string += e.key;
        display.value = string;

    }

   
    else if(e.key == "Enter"){

        try{

            string = eval(string).toString();
            display.value = string;

        }

        catch{

            display.value = "Error";
            string = "";

        }

    }

    
    else if(e.key == "Backspace"){

        string = string.slice(0,-1);
        display.value = string;

    }

    else if(e.key == "Escape"){

        string = "";
        display.value = "";

    }

});