$(document).ready(function(){

	/*message for required entry*/
	var required = "You must select an answer before submitting.";

	/*question number*/

	var questionNumber = 1;

	var questionCount = function () {
		questionNumber = questionNumber + 1;
		$(".number-container > p").text(questionNumber);
	};

	/*correct answer counter*/

	/*question objects*/
	/*function Question(questionText, optionOne, optionTwo, optionThree, optionFour) {
		this.questionText = questionText;
		this.optionOne = optionOne;
		this.optionTwo = optionTwo;
		this.optionThree = optionThree;
		this.optionFour = optionFour;
		this.correctAnswer = correctAnswer;
	};*/

	var questionOne = {
		question: "Which one of the following is not a nickname for longtime comedian, Don Rickles?",
		optionOne: 'Mr. Warmth',
		optionTwo: 'The Merchant of Venom',
		optionThree: 'The Roastmaster General', 
		optionFour: 'Glass Head',
		correctAnswer: 'answerC'
	};

	var questionTwo = {
		question: "Comedians such as Louis CK, Chris Rock and Dave Chapelle frequently drop in to this NYC comedy club to work on material.",
		optionOne: 'Comic Strip Live',
		optionTwo: 'The Comedy Cellar',
		optionThree: 'Dangerfields',
		optionFour: 'The Pit',
		correctAnswer: 'answerB'
	};

	var questionThree = {
		question: 'What was Sam Kinison’s profession before he became a stand-up comedian?',
		optionOne: 'Plumber',
		optionTwo: 'High School Teacher',
		optionThree: 'Accountant',
		optionFour: 'Preacher',
		correctAnswer: 'answerD'
	};

	var questionFour = {
		question: 'This comedian was once arrested for performing his “Seven Words You Can Never Say on Television” routine.',
		optionOne: 'Andrew Dice Clay',
		optionTwo: 'George Carlin',
		optionThree: 'Lenny Bruce',
		optionFour: 'Bill Hicks',
		correctAnswer: 'answerB'
	};

	var questionFive = {
		question: 'Steve Martin was known for wearing all but which of the following objects on his head as part of his act?',
		optionOne: 'A dunce cap',
		optionTwo: 'An arrow',
		optionThree: 'Bunny ears',
		optionFour: 'Balloon animals',
		correctAnswer: 'answerA'
	};

	var questionSix = {
		question: 'Eddie Murphy, Aziz Ansari and Dane Cook are three of only a handful of comedians who have played this historic NYC venue.',
		optionOne: 'Carnegie Hall',
		optionTwo: 'Yankee Stadium',
		optionThree: 'Madison Square Garden', 
		optionFour: 'Radio City Music Hall',
		correctAnswer: 'answerC'
	};

	var questionSeven = {
		question: 'Sarah Silverman made a video entitled “The Great Schlep” in support of what presidential hopeful?',
		optionOne: 'Joe Lieberman',
		optionTwo: 'Hillary Clinton',
		optionThree: 'John McCain', 
		optionFour: 'Barack Obama',
		correctAnswer: 'answerD'
	};

	var questionEight = {
		question: 'Which one of these stand-up comedians was a writer on the movie “Blazing Saddles”?',
		optionOne: 'Richard Pryor',
		optionTwo: 'Shecky Greene',
		optionThree: 'Joan Rivers', 
		optionFour: 'Buddy Hackett',
		correctAnswer: 'answerA'
	};

	var questionNine = {
		question: 'Which one of the following is the largest international comedy festival in the world?',
		optionOne: 'Edinburgh Festival Fringe',
		optionTwo: 'Melbourne International <span class="list-indent">Comedy Festival</span>',
		optionThree: 'Los Angeles Comedy Festival', 
		optionFour: 'Just For Laughs Montreal',
		correctAnswer: 'answerD'
	};

	var questionTen = {
		question: 'Which comedian is known to refer to her mental illness and time spent in a psychiatric ward as part of her act?',
		optionOne: 'Chelsea Peretti',
		optionTwo: 'Maria Bamford',
		optionThree: 'Kathy Griffin', 
		optionFour: 'Tig Notaro',
		correctAnswer: 'answerB'
	};

	/*cycling questions*/

	var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen];

	/*display score*/

	/*start new game*/

	var newGame = function() {
		i = 0;
		questionNumber = 1;
		correctCount=0;
		$(".number-container > p").text(questionNumber);
		generateQuestion();
		$('.quiz-container').show();
		$('.final-score').hide();
		submitButtonFocus();
	};

	var i=0;

	var generateQuestion = function() {

		$("#option-list").find("li").remove();
		$(".question-container > p").text(questions[i].question);
		$("#option-list").append("<li><input type='radio' name='answer' id='answerA' required>" + questions[i].optionOne + "</li>");
		$("#option-list").append("<li><input type='radio' name='answer' id='answerB'>" + questions[i].optionTwo + "</li>");
		$("#option-list").append("<li><input type='radio' name='answer' id='answerC'>" + questions[i].optionThree + "</li>");
		$("#option-list").append("<li><input type='radio' name='answer' id='answerD'>" + questions[i].optionFour + "</li>");		
	};

	/*var changeQuestion = function () {

	};*/

	

	/*var compareAnswer = function () {

	};*/

	

	var correctCount = 0;

	generateQuestion();

	$("#new-game").on("click", function(){
		newGame();
	});

	var submitButtonFocus = function() {
		$("input[name=answer]:radio").on("click", function() {
			$(".submit-button > a").focus();
		});
	};

	submitButtonFocus();

	$(".submit-button").click(function(event){

		event.preventDefault();

		var userAnswer = $("input[type=radio][name=answer]:checked").attr('id');

		if ($("input[type=radio][name=answer]:checked").length == 0) {
			alert("Please select an answer before submitting.")
		} else {

		if (userAnswer ==  questions[i].correctAnswer) {
				correctCount = correctCount + 1;
				console.log(correctCount);
			};

		if (questionNumber > 9) {

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
			
		} else {			

			i = i+1;

			generateQuestion();

			questionCount();

			$(".submit-button > a").blur();	

			submitButtonFocus();
	
		};
	}; 
	});
});