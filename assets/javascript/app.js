// on submit I want to return a function called submitAnswer.

  var totalSeconds = 15;
  var timer = setInterval(decrement, 1000);
    function decrement() {
      totalSeconds--;
        $("#timeLeft").html("<h3>Time Remaining: " + totalSeconds + "</h3>");
        if (totalSeconds === 0) {
          clearInterval(timer);
          return submitAnswers();
          
           }
         };
    

      

$("#triviaForm").submit(function(event) {
   event.preventDefault();


	var totalQuestion = 5; 
	var correct = 0;
  var incorrect = 0;

	// Get user input
  var a1 = document.forms["triviaForm"]["a1"].value;
  var a2 = document.forms["triviaForm"]["a2"].value;
  var a3 = document.forms["triviaForm"]["a3"].value;
  var a4 = document.forms["triviaForm"]["a4"].value;
  var a5 = document.forms["triviaForm"]["a5"].value;
  
  
  
  // Correct answers
    var correctAnswers = ["true", "false", "true", "true", "false"];
   
  // Check if answers are correct
    for(i = 1; i <= totalQuestion; i++) {
      if(eval('a'+i) === correctAnswers[i - 1]){
        correct++;
      } else {
        incorrect++;
      };

  // Displaying results on page
     var correctResults = document.getElementById("correctAnswers").innerHTML = "Correct Answers: " + correct;
      
      var incorrectResults = document.getElementById("incorrectAnswers").innerHTML = "Incorrect Answers: " + incorrect;
     
      var finished = document.getElementById("allDone").innerHTML = "All Done!";
     
      document.getElementById("triviaForm").style.display = "none";



   };

    return false;

 });

  
    
