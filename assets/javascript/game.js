$( document ).ready(function(){


    var random = Math.floor(Math.random() * 101 + 19);
    $("#randomNumber").text(random);
    console.log("Random Number is: " + random);


    var num1= Math.floor(Math.random()*11+1)
    $("#crystalValue1").text(num1);
    console.log("Crystal Random number 1 : " + num1);
    var num2= Math.floor(Math.random()*11+1)
    $("#crystalValue2").text(num2);
    console.log("Crystal Random number 2 : " + num2);
    var num3= Math.floor(Math.random()*11+1)
    $("#crystalValue3").text(num3);
    console.log("Crystal Random number 3 : " + num3);
    var num4= Math.floor(Math.random()*11+1)
    $("#crystalValue4").text(num4);
    console.log("Crystal Random number 4 : " + num4);

    var tscore = 0
    $("#tscore").text(tscore);
    var wins = 0
    $("#wins").text(wins);
    var losses = 0
    $("#losses").text(losses);
    var guessTotal = 0
    $("#guessTotal").text(guessTotal);

    $('#winsNum').text(wins);
    $('#lossNum').text(losses);

    function reset() {
        random = Math.floor(Math.random() * 101 +19);
        $("#randomNumber").text(random);


        var num1 = Math.floor(Math.random() *11+1);
        $("#crystalValue1").text(num1);
        var num2 = Math.floor(Math.random() *11+1);
        $("#crystalValue2").text(num2);
        var num3 = Math.floor(Math.random() *11+1);
        $("#crystalValue3").text(num3);
        var num4 = Math.floor(Math.random() *11+1);
        $("#crystalValue4").text(num4);
    }

    $('#crystal1').on ('click', function(){
        guessTotal = guessTotal + num1;
        console.log("click " + guessTotal);

        if (guessTotal > random) {
            alert("You Lose!");
            losses++;
            reset();
        }
        else if (guessTotal == random) {
            alert("You Win!");
            wins++;
            reset();
        }
    })

    $('#crystal2').on ('click', function(){
        guessTotal = guessTotal + num2;
        console.log("click " + guessTotal);

        if (guessTotal > random) {
            alert("You Lose!");
            losses++;
            reset();
        }
        else if (guessTotal == random) {
            alert("You Win!");
            wins++;
            reset();
        }
    })

    $('#crystal3').on ('click', function(){
        guessTotal = guessTotal + num3;
        console.log("click " + guessTotal);

        if (guessTotal > random) {
            alert("You Lose!");
            losses++;
            reset();
        }
        else if (guessTotal == random) {
            alert("You Win!");
            wins++;
            reset();
        }
    })

    $('#crystal4').on ('click', function(){
        guessTotal = guessTotal + num4;
        console.log("click " + guessTotal);

        if (guessTotal > random) {
            alert("You Lose!");
            losses++;
            reset();
        }
        else if (guessTotal == random) {
            alert("You Win!");
            wins++;
            reset();
        }
    })

    tscore = tscore + random;
    console.log("tscore is: " + tscore);
    $('.totalScore').text(tscore);
        
    })


    // function yay(){
    //     alert("You won!");
    //       wins++; 
    //       $('#numberWins').text(wins);
    //       reset();
    //     }
    //     //addes the losses to the userTotal
    //     function loser(){
    //     alert ("You lose!");
    //       losses++;
    //       $('#numberLosses').text(losses);
    //       reset()
    //     }


    
    
    

