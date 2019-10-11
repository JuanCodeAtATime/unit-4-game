$(document).ready(function () {

    //This toggles the game instructions button to hide this lengthy box
    $(".btn").on('click', function () {
        $('.hideMe').slideToggle(1000);

    });
    // Initial Variables
    let computerNumber = Math.floor(Math.random() * 120 + 21);
    //Logging computer's number to console for troubleshooting if necessary
    console.log(computerNumber);

    let wins = 1;
    let losses = 1;
    let userTotal = 0;
    let redRuby = Math.floor(Math.random() * 12) + 1;
    let diamond = Math.floor(Math.random() * 12) + 1;
    let yellowSapphire = Math.floor(Math.random() * 12) + 1;
    let greenEmerald = Math.floor(Math.random() * 12) + 1;
    let crystalSum = 0;


    function updateLosses() {
        document.querySelector("#losses").innerHTML = "Losses: " + losses;
    }

    function updateWins() {
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
    }

    // function resetComputerNumber() {
    //     document.querySelector(".score").innerHTML = Math.floor(Math.random() * 120 + 21);
    // }

    function crystalRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;



    }
    function crystalsSum(sum) {
        crystalSum += sum
        console.log(crystalSum);
        $("#placeholder").html(crystalSum);

        if (crystalSum === computerNumber) {
            alert("You win!");
            updateWins();
            // resetComputerNumber();

        }

        else if (crystalSum > computerNumber) {
            alert("You lose!!");
            updateLosses()
            losses++;
            // resetComputerNumber();

        }

    }
    //This displays the computer-generated random number in the html
    $(".score").text(computerNumber);

    $('#redRuby').click(function () {
        crystalsSum(redRuby);
    })

    $("#diamond").click(function () {
        crystalsSum(diamond);
    })

    $("#yellowSapphire").click(function () {
        crystalsSum(yellowSapphire);
    })

    $("#greenEmerald").click(function () {
        crystalsSum(greenEmerald);
    })


    // if (crystalSum === computerNumber) {
    //     alert("You win!");
    // }

    // else if (crystalSum > computerNumber) {
    //     alert("You lose!!");
    //     losses++;
    // }



});




//This alerts User when his score matches the computer's Number

// if (crystalSum === computerNumber) {
//     alert("You win!");
// }

// else if (crystalSum > computerNumber) {
//     alert("You lose!!");
//     losses++;
// }

//     //resetGame //create function to reset game without resetting Wins/Losses variable


// //Hover functions over each ruby setup for alerts for troubleshooting.  
// $("#redRuby").hover(function () {
//     console.log(redRuby);
// });

// $("#diamond").hover(function () {
//     console.log(diamond);
// });
// $("#yellowSapphire").hover(function () {
//     console.log(yellowSapphire);
// });
// $("#greenEmerald").hover(function () {
//     console.log(greenEmerald);
 //});




