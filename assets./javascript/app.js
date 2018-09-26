$('#start').on('click',function(){
    game.start();
})

var question =[{
    question:"Wich country won the World Cup in 1994?",
    answers:["Germany", "Italy", "Brazil", "Argentina"],
    correctAnswer: "Brazil"
},{
    question:"Which of these star soccer players has never played for Real Madrid?",
    answers:["Zidane", "Messi", "Ronaldo", "Figo"],
    correctAnswer: "Messi"
},{
    question:"According to the official FIFA rulebook, how long can a goalkeeper hold onto the ball for?",
    answers:["6 seconds", "30 seconds", "1 minute", "Until he feels like letting go"],
    correctAnswer: "6 seconds"
},{
    question:"Stanford Bridge is the home of which English Premier League club?",
    answers:["Liverpool", "Everton", "Arsenal", "Chelsea"],
    correctAnswer: "Chelsea"
},{
    question:"What are the home colors of the FC Barcelona soccer uniform?",
    answers:["Blue and Red", "White and Green", "Black and Yellow", "Blue and Black"],
    correctAnswer: "Blue and Red"
}]
var game = {
    correct: 0,
    incorrect: 0,
    counter: 60,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0){
            console.log("Time is up!");
            game.done();
        }
    },
    start: function(){
        timer = setInterval(game.countdown,500);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
        $('#start').remove();
        for(var i=0; i<question.length; i++){
            $('#subwrapper').append('<h2>'+question[i].question+'</h2>');
            for(var j=0; j<question[i].answers.length; j++){
                $('#subwrapper').append("<input type='radio' name= 'question-"+i+"' value'"+question[i].answers[j]+"'>"+question[i].answers[j])
            }
        }
    
    },
    done: function(){
        $.each($("input[name='question-0']:checked"),function(){
            if($(this).val()===question[0].correctAnswer){
                game.correct++;
            } else{
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"),function(){
            if($(this).val()===question[1].correctAnswer){
                game.correct++;
            } else{
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"),function(){
            if($(this).val()===question[2].correctAnswer){
                game.correct++;
            } else{
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"),function(){
            if($(this).val()===question[3].correctAnswer){
                game.correct++;
            } else{
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"),function(){
            if($(this).val()===question[4].correctAnswer){
                game.correct++;
            } else{
                game.incorrect++;
            }
        });
        this.result();
        },
        result: function(){
            clearInterval(timer);
            $('#subwrapper h2').remove();

            $('#subwrapper').html("<h2>All done!</h2>");
            $('#subwrapper').append("<h3>Correct Answer: "+this.correct+"</h3>");
            $('#subwrapper').append("<h3>Incorrect Answer: "+this.incorrect+"</h3>");
            $('#subwrapper').append("<h3>Unanswer: "+(question.length-(this.incorrect+this.correct))+"</h3>");
        }

}