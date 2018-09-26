// array of question, answer and right answer
var questions = [{
    question: "What team won the very first NBA game?",
    answers: ["NEW YORK KNICKS", "PHILADELPHIA WARRIORS", "TORONTO HUSKIES", "CHICAGO STAGS"],
    rightAnswer: "NEW YORK KNICKS",
    // image: "assets/images/New-York-Knicks.jpg",
}, {
    question: "Who was the first player in NBA history to be elected league MVP by a unanimous vote?",
    answers: ["LEBRON JAMES", "STEPHEN CURRY", "MAGIC JOHNSON", "MICHAEL JORDAN"],
    rightAnswer: "STEPHEN CURRY",
    // image: "assets/images/New-York-Knicks.jpg", 
}, {
    question: "Who scored the first three-point basket in NBA history?",
    answers: ["WES UNSELD", "GENE STUMP", "CHRIS FORD", "LARRY BIRD"],
    rightAnswer: "CHRIS FORD",
    // image: "assets/images/New-York-Knicks.jpg",
}, {
    question: "Who was the youngest player to score 10,000 points in the NBA?",
    answers: ["MICHAEL JORDAN", "LEBRON JAMES", "KOBE BRYANT", "WILT CHAMBERLAIN"],
    rightAnswer: "LEBRON JAMES",
    // image: "assets/images/New-York-Knicks.jpg",
}, {
    question: "What team owns the longest winning streak in NBA history?",
    answers: ["LOS ANGELES LAKES", "MIAMI HEAT", "CHICAGO BULLS", "GOLDEN STATE WARRIORS"],
    rightAnswer: "LOS ANGELES LAKES",
}, {
    question: "Who is the all-time leading scorer in men's college basketball?",
    answers: ["FREEMAN WILLIAMS", "PETER MARAVICH", "LARRY BIRD", "STEPHEN CURRY"],
    rightAnswer: "PETER MARAVICH",
}, {
    question: "What player won All-Star Game MVP, NBA MVP, and NBA Finals MVP awards in 2000?",
    answers: ["MICHAEL JORDAN", "KOBE BRYANT", "SHAQUILLE O'NEAL", "TIM DUNCAN"],
    rightAnswer: "SHAQUILLE O'NEAL",
}, {
    question: "What NBA player retired unexpectedly on November 7, 1991?",
    answers: ["MOSES MALONE", "LARRY BIRD", "MAGIC JOHNSON", "MICHAEL JORDAN"],
    rightAnswer: "MAGIC JOHNSON",
}, {
    question: "Who won the Nestle Crunch Slam Dunk Contest on February 6, 1988?",
    answers: ["DOMINIQUE WILKINS", "SPUD WEBB", "MAGIC JOHNSON", "MICHAEL JORDAN"],
    rightAnswer: "MICHAEL JORDAN",
}, {
    question: "Why did Kevin Durant choose the jersey number 35?",
    answers: ["HERO WAS REGGIE LEWIS", "IT'S THE FIRST TETRAHEDRAL NUMBER", "HE PLANS TO PLAY UNTIL AGE 35", "HIS FIRST COACH WAS MURDERED AT 35"],
    rightAnswer: "HIS FIRST COACH WAS MURDERED AT 35",
}]

// click event to post the question to the page
$("#start").on('click', function(){
    newGame.start();
})

$(document).on('click', '#submit', function(){
    newGame.over();
})
// new game varaible 

var newGame = {
    right: 0,
    wrong: 0,
    counter: 100,
    // function need to move
    // $("#submit").hide();
    
    start: function(){
        // to remove the start button
        $("#start").hide();
        $("#submit").show();

        // to set up the timer inside of the start function
        timer = setInterval(newGame.countdown, 1000);
        $("#display").prepend('Time Remaining: <span id="counter">100</span> seconds');
        for (var i = 0; i < questions.length; i++){
            $("#display").append('<h4>' + questions[i].question + '</h4>')
            for (var j = 0; j < questions[i].answers.length; j++){
                $("#display").append("<input type='radio' name='question "+ i +"' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }
        }
        // creater a new button for to su
        // $("display").append('<br><button id="submit">Submit</button>')
    },


    countdown: function(){
        newGame.counter--;
        $("#counter").html(newGame.counter);
        if(newGame.counter == 0){
            console.log("Time is up")
            newGame.over();
        }
    },
    // to check if the right answer was pick
    over: function(){
        $.each($("input[name = 'question 0']:checked"), function(){
            if($(this).val() == questions[0].rightAnswer){
                newGame.right++;
            } else {
                newGame.wrong++;
            }
        });
        $.each($("input[name = 'question 1']:checked"), function(){
            if($(this).val() == questions[1].rightAnswer){
                newGame.right++;
            } else {
                newGame.wrong++;
            }
        });
        $.each($("input[name = 'question 2']:checked"), function(){
            if($(this).val() == questions[2].rightAnswer){
                newGame.right++;
            } else {
                newGame.wrong++;
            }
        });
        $.each($("input[name = 'question 3']:checked"), function(){
            if($(this).val() == questions[3].rightAnswer){
                newGame.right++;
            } else {
                newGame.wrong++;
            }
        });
        $.each($("input[name = 'question 4']:checked"), function(){
            if($(this).val() == questions[4].rightAnswer){
                newGame.right++;
            } else {
                newGame.wrong++;
            }
        });
        $.each($("input[name = 'question 5']:checked"), function(){
            if($(this).val() == questions[5].rightAnswer){
                newGame.right++;
            } else {
                newGame.wrong++;
            }
        });
        $.each($("input[name = 'question 6']:checked"), function(){
            if($(this).val() == questions[6].rightAnswer){
                newGame.right++;
            } else {
                newGame.wrong++;
            }
        });
        $.each($("input[name = 'question 7']:checked"), function(){
            if($(this).val() == questions[7].rightAnswer){
                newGame.right++;
            } else {
                newGame.wrong++;
            }
        });
        $.each($("input[name = 'question 8']:checked"), function(){
            if($(this).val() == questions[8].rightAnswer){
                newGame.right++;
            } else {
                newGame.wrong++;
            }
        });
        $.each($("input[name = 'question 9']:checked"), function(){
            if($(this).val() == questions[9].rightAnswer){
                newGame.right++;
            } else {
                newGame.wrong++;
            }
        });

        this.result()
    },
    // this function to display the result
    result: function(){
        clearInterval(timer);
        $("#display h2").remove();

        $("#display").html("All Over");
        $("#display").append("Right Answers: " + this.right);
        $("#display").append("Wrong Answers: " + this.wrong);
        $("#display").append("Unanswered: " + (questions.length-(this.wrong + this.right)));
    }


}