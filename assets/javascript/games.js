$(document).ready(function () {


    //This toggles the game instructions button to hide this lengthy box
    $("#btnGame").on('click', function () {
        $('.hideMe').slideToggle(1000);

    });
    // Initializing Variables
    let computerNumber = Math.floor(Math.random() * 120 + 21);
    //Logging computer's number to console for troubleshooting if necessary
    console.log(computerNumber);

    let wins = 0;
    let losses = 0;
    let crystalSum = 0;
    let redRuby = Math.floor(Math.random() * 12) + 1;
    let diamond = Math.floor(Math.random() * 12) + 1;
    let yellowSapphire = Math.floor(Math.random() * 12) + 1;
    let greenEmerald = Math.floor(Math.random() * 12) + 1;

    function updateLosses() {
        losses++
        document.querySelector("#losses").innerHTML = "Losses: " + losses;
    }

    function updateWins() {
        wins++
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
    }

    function resetComputerNumber() {
        computerNumber = Math.floor(Math.random() * 120 + 21);
        document.querySelector(".score").innerHTML = computerNumber;
    }

    function resetCrystalSum() {
        crystalSum = 0;
        document.getElementById("placeholder").innerHTML = crystalSum;

    }


    function crystalsSum(sum) {
        crystalSum += sum
        console.log(crystalSum);
        $("#placeholder").html(crystalSum);

        if (crystalSum === computerNumber) {

            alert("You win!");
            updateWins();
            resetComputerNumber();
            resetCrystalSum();
        }
        else if (crystalSum >= computerNumber) {
            // let temp = crystalSum;
            updateLosses();
            resetComputerNumber();
            alert("You lose!! " + crystalSum + ' is your guess');
            resetCrystalSum();
        }


    }
    //This displays the computer-generated random number in the html
    $(".score").text(computerNumber);

    //Using jQuery functions to increment scores in each crystal

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



});


// //Hover functions over each ruby set up to alert for troubleshooting.  
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




