$(document).ready(function () {

    // Initial Variables
    let computerNumber = Math.floor(Math.random() * 120 + 21);
    //Logging computer's number to console for troubleshooting if necessary
    console.log(computerNumber);
    let wins = '';
    let losses = '';
    let userTotal = 0;
    let redRuby = Math.floor(Math.random() * 12) + 1;
    let diamond = Math.floor(Math.random() * 12) + 1;
    let yellowSapphire = Math.floor(Math.random() * 12) + 1;
    let greenEmerald = Math.floor(Math.random() * 12) + 1;
    let crystalsValue = //sum of four crystals

        //This toggles the game instructions button to hide the lengthy instructions
        $(".btn").on('click', function () {
            $('.hideMe').slideToggle(1000);

        });

    //This will display the sum of the crystal values
    $("#placeholder").text(userTotal);

    //Below item will test ruby adding and data transfer function
    $("#redRuby").click(function () {
        $("#placeholder").text(redRuby);
    });
    //Delete above item before git push




    //Hover functions over each ruby setup for alerts for troubleshooting.  
    $("#redRuby").hover(function () {
        console.log(redRuby);
    });

    $("#diamond").hover(function () {
        console.log(diamond);
    });
    $("#yellowSapphire").hover(function () {
        console.log(yellowSapphire);
    });
    $("#greenEmerald").hover(function () {
        console.log(greenEmerald);
    });

    //This displays the computer-generated random number in the html
    $(".score").text(computerNumber);


    //This alerts User when his score matches the computer's Number

    if (userTotal === computerNumber) {
        alert("You win!");
    }

    else if (userTotal >= computerNumber) {
        alert("You lose!!");
        //resetGame //create function to reset game without resetting Wins/Losses variable
    }



    // $('#random-button').click(function() {
    //     let lottoNumber = '';

    //     for(let i = 0 ; i < 9; i++) {
    //       const random = Math.floor(Math.random() * 10);

    //       lottoNumber = random + lottoNumber;
    //     } // loop end

    //     $('#random-number').text(lottoNumber);
    //   })






});















//});

