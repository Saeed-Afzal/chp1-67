// ==========********* Chap 38 to 42 ********=============
//========================================================

// Q1. Write a custom function power ( a, b ), to calculate the value of a raised to b.


    // function power(){
    //     var a = 5;
    //     var b = 2;
    //     document.write(a*=b);
    // }
    // power();

// Q2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …  

//  var year = parseInt(prompt('Enter A year'));
//  var check_leep_year;
//  if(year % 4 ==0){
//     document.write('Your Enterd year ' + year + ' is a leep year.');
//  }
//  else{
//     document.write('Your Enterd year ' + year + ' is not a leep year.');
//  }

// Q3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

    // function area_triangle() {
    //     var a = 5;
    //     var b = 8;
    //     var c = 4;
    //     var s;
    //     if (a < 0 || b < 0 || c <0 || (a+b <= c) || 
    //     a+c <=b || b+c <=a) 
    //     { 
    //     document.write("Not a valid triangle"); 
    //     } 
    //     else{
    //         s = (a+b+c)/2; 
    //         document.write('Area of triangle is ' + Math.sqrt(s*(s-a)*(s-b)*(s-c))); 
    //     }
    // } 
    // area_triangle();


// Q4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.
   
    // function std_data(eng,math,sci){
    //   var s = eng + math + sci;
    //   return s;
    // }
    // function std_average(s){
    //   var t = s/3;
    //   return t;
    // }
    // function std_percentage(s){
    //   var perc = (s/300)*100;
    //   return perc;
    // }
    // var a = std_data(50,50,50);
    // var b = std_average(a);
    // var c = std_percentage(a);
    // document.write("Obtained Marks: " + a + "<br> Average of Marks:   " + b + 
    // "<br> Percentage of Marks: " + c);



// Q5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

// var letter = ['a','b','c','d'];
// var user = prompt('Check array index our arrays are: a,b,c,d');
// var c = 0;
// for(i=0; i<letter.length; i++){
//   var a = letter[i];
//   var b = c+i;
//   if(user == a ){
//     a = user;
//     document.write('<br> Index of (' +  a + ') is: ' + b);
//   }
// }


// Q6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.


// str = 'The quick brown fox jumps over the lazy dog';
// document.write(str + "<br><br>")
// function removeVowels() {
//   document.write(str.replace(/[aeiou]/gi, ''));
// }
// removeVowels();


// Q7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence

// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;
//     let haveSeenVowel = false;
  
//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }
  
//     return count 
//   }
  
//   console.log(findOccurrences());


// Q8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

  // var city_dist_km = parseInt(prompt('Enter distance between to cities in KM:'));
  // document.write("Distance:  " + city_dist_km);
  // function meter(){
  //   var meter  = city_dist_km*1000;
  //   document.write("<br> Meter:" + meter);
  // }
  // meter();
  // function feet(){
  //   var feet  = city_dist_km*3280.84;
  //   document.write("<br> Feet: " + feet);
  // };
  // feet();
  // function inches(){
  //   var inches  = city_dist_km*39370.1;
  //   document.write("<br> Inches: " + inches);
  // };
  // inches();
  // function centimeters(){
  //   var centimeters  = city_dist_km*100000 ;
  //   document.write("<br> Centimeters: " + centimeters);
  // };
  // centimeters();


//Q9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

  // var working_hours = parseInt(prompt('Enter working hours'));
  // var over_time;
  // var over_time_pay;

  // if(working_hours>40){
  //   over_time = working_hours - 40;
  //   over_time_pay = over_time * 12.00;
  //   document.write("Employee overtime pay is" + over_time_pay);
  // }
  // else{
  //   document.write("You have to work for more than 40 hours to get over time pay");
  //   count++;
  // }


// Q10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.

// var note_10 = 10;
// var note_50 = 50;
// var note_100 = 100;

// function cashier(){

//   var cash_withdraw = 470;
//   document.write("You Will have " + Math.floor(cash_withdraw / 100) + " Hundred Notes ");
//   document.write(Math.floor(cash_withdraw % 100 / 50) + " Fifty Notes ");
//   document.write(Math.floor(((cash_withdraw % 100) % 50) / 10) + " Ten Notes.");
// }
// cashier();




//======================================================================
// ==========********* Chap 43 to 48 ********===========================
//======================================================================

// Q1. Show an alert box on click on a link.
// Q2. Display some Mobile images in browser. On click on an image Show the message in alert to user.

function alerts(){
    alert('Added To Cart');
  }
  
  
  // Q3. Display 10 student records in table and each row should contain a delete
  // button. If you click on a button to delete a record, entire row should be
  // deleted. 
  
  
  function delete_row(){
    var td = event.target.parentNode; 
    var tr = td.parentNode; 
    tr.parentNode.removeChild(tr);
  }
  
  
  // Q4. Display an image in browser. Change the picture on mouseover and set the
  // first picture on mouseout.
  
  function mouseaway(my_image){
    my_image.src = "images/bg.jpg";
  }
  function rollover(my_image){
    my_image.src = 'images/3.jpg';
  }
  
  
  // Q5. Show a counter in browser. Counter should increase on click on increase
  // button and decrease on click on decrease button. And show updated counter
  // value in browser.
  
  
  var clicks = 0;
  function add() {
      clicks += 1;
      document.getElementById("clicks").innerHTML = clicks;
  };
  
  function rem(){
    clicks -= 1;
    document.getElementById("clicks").innerHTML = clicks;
  }
  
  
  
  //======================================================================
  // ==========********* Chap 49 to 52 ********===========================
  //======================================================================
  
  
  // Q1. Create a signup form and display form data in your web
  // page on submission.
  
  function submits(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var num = document.getElementById('num').value;
    var pass = document.getElementById('pass').value;
  
    document.getElementById('form_data').innerHTML='Name: ' + name +
    '<br> Email: ' + email + '<br> Phone: ' + num + '<br> Password: ' + pass;
  }
  
  
  // Q2 2. Suppose in your webpage there is content area in which
  // you have entered your item details, but user can only see
  // some details on first look. When user clicks on “Read
  // more” button, full detail of that particular item will be
  // displayed. 
  
  function readmore(){
    document.getElementById('more').style.display='block';
    document.getElementById('btn1').style.display='block';
    document.getElementById('btn').style.display='none';
  }
  
  function readless(){
    document.getElementById('more').style.display='none';
    document.getElementById('btn1').style.display='none';
    document.getElementById('btn').style.display='block';
  }
  
  // Q3. In previous assignment you have created a tabular data
  // using javascript. Let’s modify that. Create a form which
  // takes student’s details and show each student detail in
  // table. Each row of table must contain a delete button and
  // an edit button. On click on delete button entire row should
  // be deleted. On click on edit button, a hidden form will
  // appear with the values of that row.
  
  
  function details(){
    var name = document.getElementById('std_name').value;
    var email = document.getElementById('std_email').value;
    var num = document.getElementById('std_num').value;
    var table = document.getElementById('myTable1');
    var row = table.insertRow(2);
    row.innerHTML=' <td>'+ name +'</td>'+ 
    '<td>'+ email +'</td>'+'<td>'+ num +'</td> ' + 
    "<td><input type='button' value='Delete' onclick='delete_row()'></td>";
  }
  
  
  //======================================================================
  // ==========********* Chap 52 to 57 ********===========================
  //======================================================================
  
  
  // Q1 Image Light box With Array
  
  function open_img_box(){
    document.getElementById('model_gallery').style.display = 'block';
    document.getElementById('gallery').style.display = 'none';
  }
  
  var img_arr = [
    'images/10.jpg',
    'images/8.jpg',
    'images/6.jpg',
    'images/11.jpg',
    'images/1.jpg',
    'images/2.jpg',
    'images/4.png',
    'images/6.jpg'
  ];
  
  var img = document.getElementById('model_img');
  var i = img_arr.length;
  function previous_img(){
    i--;
    img.src = img_arr[i];
    if(i<0){
      i = 7;
      img.src = img_arr[i];
    }
  }
  
  function next_img(){
    i++;
    img.src = img_arr[i];
    if(i>7){
      i = 0;
      img.src = img_arr[i];
    }
  }
  
  function close_img_model(){
    document.getElementById('model_gallery').style.display = 'none';
    document.getElementById('gallery').style.display = 'block';
  }
  
  
  // Q2 Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-).
  //  On each click on “zoom in”(+) , add 10px in font size of paragraph.
  //  And on each click on “zoom out”(-) , minus 10px in font size of paragraph
  
  var p = document.getElementById('para');
  
  function incr_f_size(){
    p.style.fontSize = '30px';
  }
  
  function dcr_f_size(){
    p.style.fontSize = '15px';
  }
  
  
  
  
  //======================================================================
  // ==========********* Chap 58 to 67 ********===========================
  //======================================================================
  
  //    ********************     DOM     ************************
  
  // Q1
  // i. Get element of id “main-content” and assign them in a variable.
  // ii. Display all child elements of “main-content” element.
  
  var d = document.getElementById('main-content');
  d.childNodes;
  console.log(d);
  
  
  // iii. Get all elements of class “render” and show their innerHTML
  // in browser.
  
  var r = document.getElementsByClassName('render');
  console.log(r);
  
  // iv. Fill input value whose element id first-name using javascript.
  
  document.getElementById('first-name').value = 'Muhammad';
  
  //// v. Repeat part iv for id ”last-name” and “email”.
  
  document.getElementById('last-name').value = 'Saeed';
  
  document.getElementById('emaill').value = 'admin@22gmail.com';
  
  
  // Q2 use HTML code of question 1 and show the result on browser.
  
  
  // i. What is node type of element having id “form-content”.
  
  var x = document.getElementById("form-content").nodeType;
  console.log(x);
  
  
  // ii. Show node type of element having id “lastName” and its child node.
  
  var x = document.getElementById("lastName");
  x.nodeType;
  x.childNodes;
  console.log(x)
  
  // iv. Get First and last child of id “main-content”.
  
  var a = document.getElementById('main-content').firstChild;
  var b = document.getElementById('main-content').lastChild;
  console.log(a,b);
  
  // v. Get next and previous siblings of id “lastName”.
  
  var l = document.getElementById('lastName').previousSibling;
  var m = document.getElementById('lastName').nextSibling;
  console.log(l,m);
  
  // vi. Get parent node and node type of element having id “email”
  
  var e = document.getElementById('emaill');
  e.parentNode;
  s = e.nodeType;
  console.log(e,s);
  //===================================================The End of this Assignment========================================