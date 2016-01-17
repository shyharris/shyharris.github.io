function askQuestion () {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName= firstName + " " + lastName;

	// $('h4').text('Hello ' + fullName);

	var userAge = prompt('How old are you?');
	userAge = parseInt (userAge);

	if (userAge >= 18) {
			console.log('user is an adult.');
	}
	else if (userAge >= 13) {
			console.log('User is a teenager.');
	}
	else {
			console.log('User is a child.')
	}

	$('h4').text('Hello ' + fullName + ' you are ' + userAge);

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName= firstName + " " + lastName;

	if (fullName.toLowerCase() == "general assembly") {
			console.log('Get out, you are not a general.');
			 } 
	else if 
	 (firstNametoLowerCase() == "general") {
	 		console.log('Yo Yo general');
	 		 }
	else {
			console.log('Nope, you are not a general');
		}



	var faveColour= prompt('What is your favourite colour?');

	if (faveColour.toLowerCase() == "yellow"|| 
		faveColour.toLowerCase() == "blue"||
		faveColour.toLowerCase() == "red"||
		faveColour.toLowerCase() == "green")
		 {
			$('h1').css('color',faveColour);
			 } 

}








/* pop alert can be done when loaded "alert("Are you ready for white powder");"   DOM = DOCUMENT OBJECT MODEL - BROWSER CREATES THIS WHICH IS BASICALLY HIERARCHY I.E BODY THEN DIV  THEN HEADINGS ETC, NEED TO TELL JAVA TO ALLOW THIS TO BE CREATED FIRST*/
/* $ sign equals jQuery*/

//when the page has loaded
$ (function() { /* do this when the page is ready. function is to say do something in between the curly brackets*/
$('img').on('click',askQuestion);
	//hide all sections to begin with//
	$('h3').next().hide();

	//when the user clicks a h3 element//
	$('h3').on('click', function(){

		//hide the next element//
		$(this).next().slideToggle(1000); /*t in pbrackets can put time in ms eg 1000 is 1 sechis refers to the h3 thats been clicked in, then will move to next and then hide if you put hide, show if you want to show and toggle for that, in this case the paragraph. slide toggle makes it smoother*/


	})
})