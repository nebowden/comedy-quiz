$(document).ready(function(){

	/*message for required selection of answer*/

	var required = "You must select an answer before submitting.";

	
	/*question number counter*/

	var questionNumber = 1;

	var questionCount = function () {
		questionNumber = questionNumber + 1;
		$(".number-container > p").text(questionNumber);
	};

	
	/*question object constructor*/

	function Question(questionText, optionOne, optionTwo, optionThree, optionFour, correctAnswer) {
		this.questionText = questionText;
		this.optionOne = optionOne;
		this.optionTwo = optionTwo;
		this.optionThree = optionThree;
		this.optionFour = optionFour;
		this.correctAnswer = correctAnswer;
	};

	var questionOne = new Question(
		"Which one of the following is not a nickname for longtime comedian, Don Rickles?",
		'Mr. Warmth',
		'The Merchant of Venom',
		'The Roastmaster General', 
		'Glass Head',
		'answerC'
	);

	var questionTwo = new Question(
		"Comedians such as Louis CK, Chris Rock and Dave Chapelle frequently drop in to this NYC comedy club to work on material.",
		'Comic Strip Live',
		'The Comedy Cellar',
		'Dangerfields',
		'The Pit',
		'answerB'
	);

	var questionThree = new Question(
		'What was Sam Kinison’s profession before he became a stand-up comedian?',
		'Plumber',
		'High School Teacher',
		'Accountant',
		'Preacher',
		'answerD'
	);

	var questionFour = new Question(
		'This comedian was once arrested for performing his “Seven Words You Can Never Say on Television” routine.',
		'Andrew Dice Clay',
		'George Carlin',
		'Lenny Bruce',
		'Bill Hicks',
		'answerB'
	);

	var questionFive = new Question(
		'Steve Martin was known for wearing all but which of the following objects on his head as part of his act?',
		'A dunce cap',
		'An arrow',
		'Bunny ears',
		'Balloon animals',
		'answerA'
	);

	var questionSix = new Question (
		'Eddie Murphy, Aziz Ansari and Dane Cook are three of only a handful of comedians who have played this historic NYC venue.',
		'Carnegie Hall',
		'Yankee Stadium',
		'Madison Square Garden', 
		'Radio City Music Hall',
		'answerC'
	);

	var questionSeven = new Question (
		'Sarah Silverman made a video entitled “The Great Schlep” in support of what presidential hopeful?',
		'Joe Lieberman',
		'Hillary Clinton',
		'John McCain', 
		'Barack Obama',
		'answerD'
	);

	var questionEight = new Question (
		'Which one of these stand-up comedians was a writer on the movie “Blazing Saddles”?',
		'Richard Pryor',
		'Shecky Greene',
		'Joan Rivers', 
		'Buddy Hackett',
		'answerA'
	);

	var questionNine = new Question (
		'Which one of the following is the largest international comedy festival in the world?',
		'Edinburgh Festival Fringe',
		'Melbourne International <span class="list-indent">Comedy Festival</span>',
		'Los Angeles Comedy Festival', 
		'Just For Laughs Montreal',
		'answerD'
	);

	var questionTen = new Question (
		'Which comedian is known to refer to her mental illness and time spent in a psychiatric ward as part of her act?',
		'Chelsea Peretti',
		'Maria Bamford',
		'Kathy Griffin', 
		'Tig Notaro',
		'answerB'
	);

	
	/*question array*/

	var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen];


	/*start new game function*/

	var newGame = function() {
		arrayCount = 0;
		questionNumber = 1;
		correctCount=0;
		$(".number-container > p").text(questionNumber);
		generateQuestion();
		$('.quiz-container').show();
		$('.final-score').hide();
		submitButtonFocus();
	};

	
	/*set question array number to 0*/

	var arrayCount=0;

	
	/*function for displaying next question*/

	var generateQuestion = function() {

		$("#option-list").find("li").remove();
		$(".question-container > p").text(questions[arrayCount].questionText);
		$("#option-list").append("<li><input type='radio' name='answer' id='answerA' required>" + questions[arrayCount].optionOne + "</li>");
		$("#option-list").append("<li><input type='radio' name='answer' id='answerB'>" + questions[arrayCount].optionTwo + "</li>");
		$("#option-list").append("<li><input type='radio' name='answer' id='answerC'>" + questions[arrayCount].optionThree + "</li>");
		$("#option-list").append("<li><input type='radio' name='answer' id='answerD'>" + questions[arrayCount].optionFour + "</li>");		
	};

	
	/*function for displaying player's final score*/

	var displayScore = function() {

		if (correctCount > 8) {
				$('#nickname').text("Headliner");
			} else if (correctCount > 5) {
				$('#nickname').text("Feature Act");
			} else if (correctCount > 2) {
				$('#nickname').text("Opener");
			};

			$('.quiz-container').hide();

			$('#num-correct').text(correctCount);

			$('.final-score').fadeIn(900);

	};	

	
	/* setting number of correct answers to 0*/

	var correctCount = 0;

	
	/*function for focusing on highlighting selection and submitting button after an option has been selected*/

	var submitButtonFocus = function() {
		$("input[name=answer]:radio").on("click", function() {
			$(this).closest("ul").find("li").removeClass("selected");
			$(this).closest("li").addClass("selected");
			$(".submit-button > a").focus();
		});
	};


	/*display first question*/

	generateQuestion();


	/*game play*/

	$("#new-game").on("click", function(){
		newGame();
	});

	submitButtonFocus();

	$(".submit-button").click(function(event){

		event.preventDefault();

		var userAnswer = $("input[type=radio][name=answer]:checked").attr('id');

		if ($("input[type=radio][name=answer]:checked").length == 0) {
			alert("Please select an answer before submitting.")
		} else {

			if (userAnswer ==  questions[arrayCount].correctAnswer) {
					correctCount = correctCount + 1;
					$(".submit-button > a").html("<i class='fa fa-check fa-4x'></i>");
					$(".submit-button > a").css({"padding-top":"9px", "color":"#77FF66"});
				} else {
					$(".submit-button > a").html("<i class='fa fa-times fa-4x'></i>");
					$(".submit-button > a").css({"padding-top":"4px", "color":"#CC1C18"})
				};

			setTimeout(function(){

				$(".submit-button > a").html("submit");
				$(".submit-button > a").css({"padding-top":"", "color":""});

				if (questionNumber > 9) {

					displayScore();
					
				} else {			

					arrayCount = arrayCount+1;

					generateQuestion();

					questionCount();

					$(".submit-button > a").blur();	

					submitButtonFocus();
			
				};

			}, 1000);

		}; 

	});
});