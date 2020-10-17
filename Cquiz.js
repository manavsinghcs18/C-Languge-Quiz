function check(){
	var c=0;
	var q1=document.quiz.question1.value;
	var q2=document.quiz.question2.value;
	var q3=document.quiz.question3.value;
	var q4=document.quiz.question4.value;
	var q5=document.quiz.question5.value;
	var q6=document.quiz.question6.value;
	var q7=document.quiz.question7.value;
	var q8=document.quiz.question8.value;
	var q9=document.quiz.question9.value;
	var q10=document.quiz.question10.value;
	var result = document.getElementById('result');
	var quiz = document.getElementById("quiz");

	if (q1=="ERROR: ++needs a value"){c++}
	if (q2=="20"){c++}
	if (q3==" ptr is a pointer to an array of 10 integers"){c++}
	if (q4=="12,6,12"){c++}
	if (q5=="Representation of NULL pointer"){c++}
	if (q6=="11"){c++}
	if (q7=="10"){c++}
	if (q8=="In the first statement 6 specifies a array size, whereas in the second statement it specifies a particular element of array."){c++}
	if (q9=="1"){c++}
	if (q10=="garbage value 1,2,3,4"){c++}


	quiz.style.display="none";
	if(c<=5){
		result.textContent='Your result is ' + c + "." + ' It is not so good please try to work on yourself.'
	}
	else{
		result.textContent='Your result is ' + c + "." + ' It is awesome keep it up.'
	}
}