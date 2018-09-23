var choice;

var correctAnswer = 0;

var incorrectAnswer = 0;

var answer = 0;

var question = 0;

var count=30;

var questionOne = [{
question: "with stage dorections hows point of vue is used?",
choices: ["the director", "the actor", "the audience ", "the set designer" ],

validAnswer: 1
}, {
question:"who makes hats in a costume shop?",
choices: ["Draper", "Stitcher", "Seamstresst", " milliner"],
validAnswer: 3

}, {
question:"where is down stage?",
choices: ["towards the audience", "away from the audience", "does not exist", "none the above"],
validAnswer: 0

}, {
question:"where id up stage?",
choices: ["towards the audience", "away from the audience", "does not exist", "none the above"],
validAnswer: 1

}

];

$("#start_button").click(function(){
$(this).hide();
counter = setInterval(timer, 1000); 
displayTrivia();
}); 


function timer(){
count--;
if (count <= 0) {
 clearInterval(counter);
 return;
}

 $("#timer").html("Time remaining: " + "00:" + count + " secs");
}


function displayTrivia() {
$("#question_div").html(questionOne[0].question);
question++;

  var choicesArr = disneyQuestion[0].choices;
  var buttonsArr = [];

  for (let i = 0; i < choicesArr.length; i++) {
    var button = $('<button>');
    button.text(choicesArr[i]);
    button.attr('data-id', i);
    $('#choices_div').append(button);
   }

  } 

 $('#choices_div').on('click', 'button', function(e){
 userPick = $(this).data("id");
 questionOne[0].validAnswer;
 if(userPick != questionOne[0].validAnswer) {

 $('#choices_div').text("Wrong Answer! The correct answer is Rajah.");
 incorrectAnswer++;

} else if (userPick === questionOne[0].validAnswer) {
$('#choices_div').text("Correct!!! The pet tiger name is Rajah");
correctAnswer++;

}

});

console.log(questionOne);
$("#questions").prepend(questionOne);

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>