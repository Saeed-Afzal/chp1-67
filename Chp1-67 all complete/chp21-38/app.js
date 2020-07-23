
// ============================ Chapter 21 to 25 =================================
// ===========================   STRING METHODS   ===============================


/*********************************************************************************************************
/*********************************************************************************************************
// Q1: Write a program that takes two user inputs for first and last name using prompt
//  and merge them in a new variable titled fullName. Greet the user using his full name.
// var f_name = prompt("Enter your First name");
// var l_name = prompt("Enter your last name");
// var full_name = document.write("Assalamo Alaikom: " + " " + f_name + l_name + " How are You!");
//*********************************************************************************************************/
//*********************************************************************************************************/

// Q2: Write a program to take a user input about his favorite mobile phone model.
//  Find and display the length of user input in your browser


// var f_mobile = prompt("Enter Your Favourate Phone name:");
// var f_name = f_mobile.length
// document.write("<br><br> My Favourate phone is: " + f_mobile + "<br> Length of string is: " + f_name);


/*********************************************************************************************************/
/*********************************************************************************************************/

// Q3: Write a program to find the index of letter “n” in the word “Pakistani” and
// display the result in your browser .


// var pak = "Pakistani";
// var l = pak.indexOf("n");
// document.write("<br><br> String: " + pak);
// document.write("<br> Index of 'n': " + l);


/*********************************************************************************************************/
/*********************************************************************************************************/

// Q4: Write a program to find the last index of letter “l” in the
//   word “Hello World” and display the result in your browser


// var hello = "Hello World";
// var l_l = hello.lastIndexOf("l");
// document.write("<br><br> String: " + hello);
// document.write("<br>Last Index of 'l': " + l_l);


/*********************************************************************************************************/
/*********************************************************************************************************/

// Q5:Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.


// var p = "Pakistani";
// var i = p.indexOf("i");
// document.write("<br><br> String: " + p);
// document.write("<br>Character at Index " + i + " is  :'i'");


/*********************************************************************************************************/
/*********************************************************************************************************/

// Q6: 6. Repeat Q1 using string concat() method.


// var f_name = prompt("Enter your First name");
// var l_name = prompt("Enter your last name");
// var full_name = f_name.concat(l_name);
// var full_name = document.write("Assalamo Alaikom: " + full_name + " How are You!");


/*********************************************************************************************************/
/*********************************************************************************************************/

// Q7: Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.


// var isl = "Islama";
// var bd = "bad";
// var city = isl + bd;
// document.write("City: " + city);
// var city = isl.replace("Islama", "Hydera") + bd;
// document.write("<br> After Replacement: " + city);


/*********************************************************************************************************/
/*********************************************************************************************************/

// Q8: Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and football together.”;


// var message = "“Ali and Sami are best friends. They play cricket and football together.”";
// document.write("<br><br> " + message);
// var rp = message.replace(/and/g, "&");
// document.write("<br><br> " + rp);



/*********************************************************************************************************/
/*********************************************************************************************************/

// Q9: Write a program that converts a string “472” to a number 472.
// Display the values & types in your browser.

// var str = "“472”";
// document.write("<br><br> Value: " + str + "<br> Type: " + typeof(str));
// var str = parseInt(472);
// document.write("<br><br> Value: " + str + "<br> Type: " + typeof(str));



/*********************************************************************************************************/
/*********************************************************************************************************/

// Q10: Write a program that takes user input. Convert and show the input in capital letters.


// var low = prompt("Enter any name: ");
// document.write("<br><br> User input: " + low);
// var upp = low.toUpperCase();
// document.write("<br><br> Upper Case: " + upp);



/*********************************************************************************************************/
/*********************************************************************************************************/

// Q11: Write a program that takes user input. Convert and show the input in title case.

// var user = prompt("Enter any word or something: ");
// document.write("<br><br> User input: " + user)
// var sentence = user.toLowerCase().split(" ");
// for (var i = 0; i < sentence.length; i++) {
//     sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
// }
// document.write("<br><br> Title Case: " + sentence.join(" "));


/*********************************************************************************************************/
/*********************************************************************************************************/

// Q12:Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = 35.36;
// var d = num.toString();
// document.write("<br><br> " + typeof d + ": " + d);


/*********************************************************************************************************/
/*********************************************************************************************************/

// Q13: Write a program to take user input and store username in a variable.
// If the username contains any special symbol among [@ . , !],
//  prompt the user to enter a valid username. For character codes of [@

// var user = prompt("Enter user name:");
// var pattn = /^[a-zA-Z]+$/;
// if (user.match(pattn)) {
//     alert("User Successfully Login");
// } else {
//     alert("Invalid user name");
// }


/*********************************************************************************************************/
/*********************************************************************************************************/

// Q14: 14. You have an array  A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
//Write a program to enable“ search by user input” in an array.After searching, prompt the user whether the given item is found in the list or not.
//Note: Perform case insensitive search.Whether the user enters cookie, Cookie, COOKIE or coOkIE, program
//should inform about its availability.


// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Search items you want!");
// var casein = search.toLowerCase();


// if (items.indexOf(casein) !== -1) {

//     alert(casein + "  is available in our Bakery.");
// } else {
//     alert("Sorry We don't have " + search + " in our Bakery.");
// }


/*********************************************************************************************************/
/*********************************************************************************************************/

// Q15:Write a program to take password as an input from.
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// var password = prompt("Enter password");
// var pttrn = /^([a-zA-Z]+[0-9]+)$/;
// var min = 6;
// var max = 11;
// if (password.match(pttrn)) {
//     if (password.length >= min && password.length <= max) {
//         alert("password set successfully")
//     } else {
//         alert("Passwor must be 6 characters long and less than 12 characters");
//     }

// } else {
//     alert("Invalid Password");
// }




/*********************************************************************************************************/
/*********************************************************************************************************/


// Q16: Write a program to convert the following string to an array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// var university = "University of Karachi";
// var ar = university.split(" ").join(" ");
// for (i = 0; i < university.length; i++) {
//     document.write(ar[i] + "<br>");
// }




/*********************************************************************************************************/
/*********************************************************************************************************/

// Q17:Write a program to display the last character of a user input.

// var uuser = "Pakistan";
// document.write("User Input :" + uuser);
// var l_user = uuser.substring(7);
// document.write("<br> Last character of input: " + l_user);



/*********************************************************************************************************/
/*********************************************************************************************************/

// Q18: You have a string “The quick brown fox jumps over the lazy dog”.
// Write a program to count number of occurrences of word “the” in given string. 

// var str = "The quick brown fox jumps over the lazy dog";
// document.write(str + "<br><br>");
// var l_case = str.toLowerCase();
// var occur_word = (l_case.match(/the/g)).length;
// document.write("There are " + occur_word + " occurences of word 'the' ");


/********************************************************************************************************************* */
/********************************************************************************************************************* */



// ===================================== Chap 26 to 30 =============================================
//                                       MATH METHODS



/********************************************************************************************************************* */
/********************************************************************************************************************* */

// Q1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// var us = 3.45214;
// document.write("Number: " + us + "<br> Round off value: " + Math.round(us) + "<br> Floor value: " +
//     Math.floor(us) + "<br> Ceil: " + Math.ceil(us));



/*********************************************************************************************************/
/*********************************************************************************************************/

// Q2: Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// var us = -2.673;
// document.write("Number: " + us + "<br> Round off value: " + Math.round(us) + "<br> Floor value: " +
//     Math.floor(us) + "<br> Ceil: " + Math.ceil(us));



/*********************************************************************************************************/
/*********************************************************************************************************/

// Q3: Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 


// var ab = -4;
// document.write("<br> The absolute value of " + ab + "  " + Math.abs(ab));


/*********************************************************************************************************/
/*********************************************************************************************************/

// Q4: Write a program that simulates a dice using random() method of JS Math class.
// Display the value of dice in your browser.:

// var dice = Math.floor(Math.random() * 6) + 2;
// document.write("<br> Random Dice value: " + dice);



/*********************************************************************************************************/
/*********************************************************************************************************/

// Q5:Write a program that simulates a coin toss using random() method of JS Math class. 
// Display the value of coin in your browser


// var coin = Math.floor(Math.random() * 2) + 1;
// if (coin == 1) {
//     document.write(coin + "<br> Random coin value : Heads");
// } else if (coin == 2) {
//     document.write(coin + "<br> Random coin value : Tails: ");
// }


/*********************************************************************************************************/
/*********************************************************************************************************/

// Q6: Write a program that shows a random number between 1 and 100 in your browser

// var randomm = Math.floor(Math.random() * 100) + 1;
// document.write("<br> random Number between 1 to 100: " + randomm);



/*********************************************************************************************************/
/*********************************************************************************************************/

// Q7: Write a program that asks the user about his weight. Parse the user input and
// display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms


// var user_weight = parseInt(prompt("Enter your Weight in kg:"));
// var d_weight = user_weight.toFixed(1);
// document.write("<br> The weight of user is: " + d_weight + " Kilograms");




/*********************************************************************************************************/
/*********************************************************************************************************/

// Q8: Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.


// var user_guess = parseInt(prompt("Guess the Secret Number!"));
// var secret_num = 7;
// if (user_guess == secret_num) {
//     alert("Congractulations! You guess the lucky Number");
// } else {
//     alert("Try Again!");
// }



/********************************************************************************************************************* */
/********************************************************************************************************************* */



// ===================================== Chap 31 to 34 =============================================
//                                       DATE METHODS



/********************************************************************************************************************* */
/********************************************************************************************************************* */


// Q1: Write a program that displays current date and time in your browser.

// var d = new Date();
// document.write(d);



/********************************************************************************************************************* */
/********************************************************************************************************************* */


// Q2: Write a program that alerts the current month in words. For example December

// var d = new Date();
// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";

// var m = month[d.getMonth()];
// alert(m);



/********************************************************************************************************************* */
/********************************************************************************************************************* */


// Q3:Write a program that alerts the first 3 letters of the current day,
// for example if today is Sunday then alert will show Sun.

// var d = new Date();
// var day = new Array();
// day[0] = "Sunday";
// day[1] = "Monday";
// day[2] = "Tuesday";
// day[3] = "Wednesday";
// day[4] = "Thursday";
// day[5] = "Friday";
// day[6] = "Saturday";

// var a = day[d.getDay()];
// alert("Today is " + a);



/********************************************************************************************************************* */
/********************************************************************************************************************* */

// Q4: Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

// var d = new Date();
// var days = new Array();
// days[0] = "Sunday";
// days[1] = "Monday";
// days[2] = "Tuesday";
// days[3] = "Wednesday";
// days[4] = "Thursday";
// days[5] = "Friday";
// days[6] = "Saturday";

// var b = days[d.getDay()];

// if (b == days[6] || b == days[0]) {
//     alert("Today is " + b + " Funday");
// } else {
//     alert("Today is " + b);
// }



/********************************************************************************************************************* */
/********************************************************************************************************************* */

// Q5: Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.


// var d = new Date();
// var s = 15;
// if (s < 16) {
//     document.write("First Fifteen Days of the Month: " + s);
// } else {
//     document.write("Last days of the month: " + s);
// }


/********************************************************************************************************************* */
/********************************************************************************************************************* */

// Q6: Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.


// var now = new Date();
// document.write("Current Date: " + now);
// var elapsed_date = new Date("jan 1,1970 18:50:40");
// var date = elapsed_date.getDate();
// var year = elapsed_date.getFullYear();
// var milisecond = now - elapsed_date;
// document.write("<br> Elapsed miliseconds Since january " + date + ", " + year + ": " + milisecond);
// var minutes = milisecond / (1000 * 60 / 60) / (1000 / 60);
// document.write("<br> Elapsed minutes Since january " + date + ", " + year + ": " + minutes);



/********************************************************************************************************************* */
/********************************************************************************************************************* */

// Q7: Write a program that tests whether it's before noon and alert “Its AM” else “its PM”


// var d = new Date();
// var hours = d.getHours();
// if (hours >= 12) {
//     alert("It's  PM");
// } else {
//     alert("It's  AM");
// }


/********************************************************************************************************************* */
/********************************************************************************************************************* */

// Q8:Write a program that creates a Date object for the last day of the last month of 2020
//  and assigns it to variable named laterDate.

// var leterDate = new Date(" Dec 31,2020,00:00:00");
// document.write("Later Date: " + leterDate);



/********************************************************************************************************************* */
/********************************************************************************************************************* */

// Q9: Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// var d = new Date();
// var a = new Date("25 april,2020");
// var Distance = d.getTime() - a.getTime();
// var calc = Math.floor(Distance / (1000 * 3600 * 24));
// document.write(calc + " Days have passes since 1st Ramadan, 2020 <br>");


/********************************************************************************************************************* */
/********************************************************************************************************************* */

//Q:10 Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.


// var d = new Date();
// var a = new Date("dec 5,2015 22:50");
// var Distance = d.getTime() - a.getTime();
// var calc = Math.floor(Distance * (1000 * 60) / 1000);
// document.write(calc + " seconds have passed since begining of 2015");



/********************************************************************************************************************* */
/********************************************************************************************************************* */

// Q11: Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.


// var a = new Date("dec 5,2015 23:08:16");
// document.write("current Date: " + a + " <br> ");
// var hours = a.getHours();
// var res = a.setHours(hours - 1);
// var h = new Date(a);
// document.write("1 hour ago it was: " + h);


/********************************************************************************************************************* */
/********************************************************************************************************************* */

// Q12:Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// var c = new Date("dec 5,2015 23:09:37");
// document.write("current Date: " + c + " <br> ");
// var year = c.getFullYear();
// var res = c.setFullYear(year - 100);
// var y = new Date(c);
// document.write("100 hour back,  it was: " + y);



/********************************************************************************************************************* */
/********************************************************************************************************************* */

//Q13: Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

// var d = new Date();
// var days = d.getUTCFullYear();
// var user_date = parseInt(prompt("Enter your Age: "));
// var cal_age = days - user_date;
// alert("Your Birth of year is: " + cal_age);



/********************************************************************************************************************* */
/********************************************************************************************************************* */

//Q14: Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,


// var customer_name = "Muhammad Saeed";
// var d = new Date();
// var month_name = new Array();
// month_name[1] = "February";
// month_name[2] = "March";
// month_name[0] = "January";
// month_name[3] = "April";
// month_name[4] = "May";
// month_name[5] = "June";
// month_name[6] = "July";
// month_name[7] = "August";
// month_name[8] = "September";
// month_name[9] = "October";
// month_name[10] = "November";
// month_name[11] = "December";
// var current_month = month_name[d.getMonth()];
// var no_units = 410;
// var charges_per_unit = 16;
// var net_amount = no_units * charges_per_unit;
// var late_payment_charges = 350;
// var after_late_payment = net_amount + late_payment_charges;
// document.write("<h1> K-Electric Bill </h1> Customer name: " + customer_name +
//     "<br> Month: " + current_month + "<br> Number of units: " + no_units +
//     "<br> Charges per unit: " + charges_per_unit +
//     " <br><br> Net Amount payable (within Due Date): " + net_amount +
//     "<br> Late Payment charges: " + late_payment_charges +
//     "<br> Gross Amout payable (after Due Date): " + after_late_payment);




/********************************************************************************************************************* */
/********************************************************************************************************************* */



// ===================================== Chap 35 to 38 =============================================
//                                        FUNCTION



/********************************************************************************************************************* */
/********************************************************************************************************************* */

//Q1: Write a function that displays current date & time in your browser.

// function date() {
//     var d = new Date();
//     document.write(d);
// }
// date();



/********************************************************************************************************************* */
/********************************************************************************************************************* */

//Q2: Write a function that displays current date & time in your browser.

// var first_name = prompt("Enter your first name");
// var last_name = prompt("Enter your last name");
// var greets = first_name + last_name;
// document.write("Hello! " + greets);



/********************************************************************************************************************* */
/********************************************************************************************************************* */

//Q3: Write a function that adds two numbers (input by user) and returns the sum of two numbers.


// var first_number = parseInt(prompt("Enter first number"));
// var second_number = parseInt(prompt("Enter second number"));
// var sum = first_number + second_number;
// document.write("<br>" + sum);


/********************************************************************************************************************* */
/********************************************************************************************************************* */

//Q4: Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.



// var num1 = parseInt(prompt("Enter first number"))
// var num2 = parseInt(prompt("Enter second numbsecond"));
// var operat = prompt("Enter Operator: + , - , * , /");
// switch (operat) {
//     case "+":
//         document.write(num1 + num2);
//         break
//     case "-":
//         document.write(num1 - num2);
//         break
//     case "*":
//         document.write(num1 * num2);
//         break
//     case "/":
//         document.write(num1 / num2);
//         break
//     default:
//         alert('Enter proper airthmatic oprator.');
//         break
// }



/********************************************************************************************************************* */
/********************************************************************************************************************* */

//Q5:Write a function that squares its argument

// var a = parseInt(prompt("Enter number to calculate its square"));
// var square = a * a;
// document.write("<br> Square of " + a + " is: " + square);


/********************************************************************************************************************* */
/********************************************************************************************************************* */

//Q6: Write a function that computes factorial of a number.


// var userr = parseInt(prompt("Enter a number for Factorial"));
// var answer = 1;
// if (userr == 0 || userr == 1) {
//     document.write(userr * answer);
// } else {
//     for (var i = userr; i >= 1; i--) {
//         answer = answer * i;
//     }
//     document.write("The factorial of " + userr + " is " + answer);
// }



/********************************************************************************************************************* */
/********************************************************************************************************************* */

//Q7: Write a function that take start and end number as inputs
// & display counting in your browser.



// var star_value = parseInt(prompt("Enter starting value"));
// var end_value = parseInt(prompt("Enter ending value"));
// if (end_value < star_value) {
//     for (i = star_value; i >= end_value; i--) {
//         document.write(i + "<br>");
//     }
// } else {
//     for (i = star_value; i <= end_value; i++) {
//         document.write(i + "<br>");
//     }
// }


/********************************************************************************************************************* */
/********************************************************************************************************************* */

//Q8: Write a nested function that computes hypotenuse of a
// right angle triangle.




/********************************************************************************************************************* */
/********************************************************************************************************************* */

//Q9: Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// var length = prompt("Enter the length of your rectangle.");
// var width = prompt("Enter the width of your rectangle.");

// function area(length, width) {
//     return length * width;
// }
// document.writeln('The area of your rectangle is ' + area(length, width));




/********************************************************************************************************************* */
/********************************************************************************************************************* */

//Q10: Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

// var u_pal = prompt("Enter a word palindrome");
// var pal = "palindrome";

// function pali() {
//     if (u_pal != pal) {
//         document.write("<br> Fail Enter Wrong word!");
//     } else {
//         document.write("<br> Passed");
//     }
// }
// pali();



/********************************************************************************************************************* */
/********************************************************************************************************************* */

//Q11:  Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'


// function con_word(word) {
//     var word = prompt("Enter any sentence");
//     document.write("<br><br> User input: " + word);
//     var sentence = word.toLowerCase().split(" ");
//     for (var i = 0; i < sentence.length; i++) {
//         sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//     }
//     document.write("<br><br> Title Case: " + sentence.join(" "));
// }
// con_word()




/********************************************************************************************************************* */
/********************************************************************************************************************* */


//Q12: Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'


// function find_longest_word(str) {
//     var array1 = str.match(/\w[a-z]{0,}/gi);
//     var result = array1[0];

//     for (var x = 1; x < array1.length; x++) {
//         if (result.length < array1[x].length) {
//             result = array1[x];
//         }
//     }
//     return result;
// }
// document.write(find_longest_word(prompt("Enter any sentence")));


/********************************************************************************************************************* */
/********************************************************************************************************************* */


//Q13: Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of 
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'


// function gfg() {
//     var s = prompt("Enter a sentense");
//     var f = prompt("Enter a character to check occurences of this word");
//     var r = s.split(f).length - 1;
//     alert("you Entered word: (" + f + ") " + r + " times");
// }
// gfg();



/********************************************************************************************************************* */
/********************************************************************************************************************* */


//Q14: The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2


// var r = parseInt(prompt("Enter a radius of circle"));
// var pi = 3.14;

// function calcCircumference() {
//     var c = 2;
//     var circumference = c * pi * r;
//     alert("Circumference of circle is: " + circumference)
// }

// function calcArea() {
//     var area = pi * r * r;
//     alert("Area of circle is: " + area);
// }
// calcCircumference();
// calcArea();

