// JS ASSIGNMENT 

// Chapter 1:

// Q. Write a script to greet your website visitor using JS alert box.

    // Ans: alert("Hey! Welcome to my website!!!");

// Q. Write a script to display following message on your web page:

    // Ans: alert("Error! Please enter a valid password");

// Q. Write a script to display following message on your web page

    // Ans: alert("Welcome to JS Land... \nHappy Coding!"); 

//  Q. Write a script to display following messages in sequence: 

    // Ans: alert("Welcome to JS Land");

// Q. Generate the following message through browser’s developer console:

    // Ans: console.log(alert("Hello...  I can run JS through my web browser's console"));

// Q. Make use of alerts in your new/existing HTML & CSS project.

    // Ans:

// <---------Chapter 1 Ends--------->


// Chapter 2:

// Q. Declare a variable called username:

    // Ans: var username;

// Q. Declare a variable called myName & assign to it a string that represents your Full Name.

    // Ans: var myName = "Muhammad Owais"

// Q. Write script to 
    
    // Ans:
    // a) Declare a JS variable, titled message. 
       // var message;
    
    // b) Assign “Hello World” to variable message
       // message = "Hello World";

    // c) Display the message in alert box. 
       // alert(message);

// Q. Write a script to save student’s bio data in JS variables and show the data in alert boxes. 
    
    // Ans:
    // var name = "Muhammad Owais";
    // var age = 22;
    // var course = "Certified Mobile Application Development";
    // alert("Name: "+name);
    // alert("Age: "+age);
    // alert("Course: "+course);

// Q. Write a script to display the following alert using one JS variable:

    // Ans:
    // var piz = "PIZZA\n"+"PIZZ\n"+"PIZ\n"+"PI\n"+"P";
    // alert(piz)

// Q. Declare a variable called email and assign to it a string that represents your 
//    Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)
   
    // Ans:
    // var email = "owaisofficial1998@gmail.com"
    // alert("My Email Address is "+email)

// Q. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. 
//    Display the following message in an alert box:

    // Ans:
    // var book = "I am trying to learn from the Book A smarter \n way to learn JavaScript"
    // alert(book);

// Q. Write a script to display this in browser through JS 

    // Ans:
    // document.write("Yah! I can write HTML content through JavaScript");

//  Q. Store following string in a variable and show in alert and browser through JS

    //Ans:
    // var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
    // alert(design)

// <---------Chapter 2 Ends--------->


// Chapter 3

//  Q. Declare a variable called age & assign to it your age. Show your age in an alert box.

    //Ans:
    // var age = 22;
    // alert("I am "+ age +" years old")

//  Q. Declare & initialize a variable to keep track of how many times a visitor has visited 
//     a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”. 

    //Ans:

//  Q. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser: 

    //Ans:
    // var birthYear = 1998;
    // document.write("My birth year is "+birthYear+"<br> Data type of my declared variable is number");
    
//  Q. A visitor visits an online clothing store www.xyzClothing.com . 
//     Write a script to store in variables the following information: 
//     a. Visitor’s name 
//     b. Product title 
//     c. Quantity i.e. how many products a visitor wants to order
//     Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”

    //Ans:    
    // var visitorName =  "<b> John doe </b>";
    // var productTitle = "<b> T- Shirt</b>";
    // var quantity = "<b> 5 </b>";
    // document.write(visitorName+" ordered "+quantity+" "+productTitle+"(s) on XYZ Clothing store");

// <---------Chapter 3 Ends--------->


// Chapter 4

//  Q. Declare 3 variables in one statement 

    //Ans:
    // var var1,var2,var3;

//  Q. Declare 5 legal & 5 illegal variable names. 

    //Ans:
    //legal
    // var legal1,legal2,legal3,legal4,legal5;
    //illegal
    // var 1illegal,?illegal,for,while,switch;

//  Q. Display this in your browser 
//  a)  A heading stating “Rules for naming JS variables” 
//  b)  Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable 
//  c) Variables must begin with a ______, ______ or _____. For example $name, _name or name 
//  d) Variable names are case _________ 
//  e) Variable names should not be JS _________ 

    //Ans:

    // document.write("<h1>Rules for Naming JS Variables</h1>")
    // document.write("<br><br>")
    // var blank1 = "<b>,</b"">";
    // var blank2 = "<b>numbers</b>"
    // var blank3 = "<b>$</b>"
    // var blank4 = "<b>_</b>"
    // document.write("Variable names can only contain "+blank1+" "+blank2+", "+blank3+" and "+blank4+" . For example $my_1stVariable ");
    // var blank5 = "<b>letter</b>";
    // var blank6 = "<b>$</b>"
    // var blank7 = "<b>_</b>"
    // document.write("<br>Variables must begin with a "+blank5+", "+blank6+" or "+blank7+" . For example $name, _name or name ");
    // var blank8 = "sensitive";
    // document.write("<br>Variable names are case "+blank8);
    // var blank9 = "keywords";
    // document.write("<br>Variable names should not be JS "+blank9);

// <---------Chapter 4 Ends--------->


// Chapter 5

//  Q. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

    //Ans:
    // var num1 = +prompt("Enter First Number");
    // var num2 = +prompt("Enter Second Number");
    // var result = num1 + num2;
    // document.write("Sum of "+num1+" and "+num2+" is "+result)

//  Q. Repeat task1 for subtraction, multiplication, division & modulus

    //Ans:
    // var num1 = +prompt("Enter First Number");
    // var num2 = +prompt("Enter Second Number");
    // var sub = num1 - num2;
    // var multi = num1 * num2;
    // var div = num1 / num2;
    // var mod = num1 % num2;
    // document.write("Subtraction of "+num1+" and "+num2+" is "+sub)
    // document.write("<br> Multiplication of "+num1+" and "+num2+" is "+multi)
    // document.write("<br> Division of "+num1+" and "+num2+" is "+div)
    // document.write("<br> Modulus of "+num1+" and "+num2+" is "+mod)

//  Q. Do the following using JS Mathematic Expressions 
//  a. Declare a variable. 
//  b. Show the value of variable in your browser like “Value after variable declaration is: ??”. 
//  c. Initialize the variable with some number. 
//  d. Show the value of variable in your browser like “Initial value: 5”. 
//  e. Increment the variable. 
//  f. Show the value of variable in your browser like “Value after increment is: 6”. 
//  g. Add 7 to the variable. 
//  h. Show the value of variable in your browser like “Value after addition is: 13”. 
//  i. Decrement the variable. 
//  j. Show the value of variable in your browser like “Value after decrement is: 12”. 
//  k. Show the remainder after dividing the variable’s value by 3.  
//  l. Output : “The remainder is : 0”. 
 

    //Ans:
    // var var1;
    // document.write("Value after variable declaration is: " +var1)
    // var1 = 5;
    // document.write(" <br> Initial value: " +var1)
    // var1 = var1 + 1; 
    // document.write(" <br> Value after increment is: " +var1)
    // var1 = var1 + 7; 
    // document.write(" <br> Value after addition is: " +var1)
    // var1 = var1 - 1; 
    // document.write(" <br> Value after decrement is: " +var1)
    // var1 = var1 % 3; 
    // document.write(" <br> The remainder is : " +var1)
    
//  Q. Cost of one movie ticket is 600 PKR. 
    // Write a script to store ticket price in a variable & 
    // calculate the cost of buying 5 tickets to a movie.

    //Ans:
    // var cost = 600;
    // cost = cost * 5;
    // document.write("Total cost to buy 5 Tickets to a movie is "+cost+"PKR")

//  Q. Write a script to display multiplication table of any number in your browser.

    //Ans:
    // var num = +prompt("Which table you want to print?")
    // var value;
    // document.write("Table of "+num)
    
    // for(var i = 1; i<=10; i++){
    //     value = num * i;
    //     document.write(" <br> " +num+ " x "+i+" = " +value)}

//  Q. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. 
 // a. Store a Celsius temperature into a variable. 
 // b. Convert it to Fahrenheit & output “NNoC is NNoF”. 
 // c. Now store a Fahrenheit temperature into a variable. 
 // d. Convert it to Celsius & output “NNoF is NNoC”. 

    //Ans: 
    // var Celsius = 25;
    // var Celsius2Fahrenheit = (Celsius * 9 / 5 ) +32;
    // document.write(Celsius+"°C is "+Celsius2Fahrenheit+"°F")    
    // var Fahrenheit = 70;
    // var Fahrenheit2Celsius = (Fahrenheit -32) * 5 / 9;
    // document.write( " <br> " +Fahrenheit+"°F is "+Fahrenheit2Celsius+"°C") 

//  Q. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables 
 // a. Price of item 1 
 // b. Price of item 2 
 // c. Ordered quantity of item 1 
 // d. Ordered Quantity of item 2 
 // e. Shipping charges 
    
    //Ans:
    // var item1 = 650;
    // var item2= 100;
    // var quan1 = 3;
    // var quan2 = 7;
    // var ship = 100;
    // document.write( " <br><br>")
    // document.write( " <h1> Shopping Cart </h1> ")
    // document.write( " <br><br> Price of item 1 is " +item1) 
    // document.write( " <br>Quantity of item 1 is " +quan1) 
    // document.write( " <br>Price of item 2 is " +item2) 
    // document.write( " <br>Quantity of item 2 is " +quan2) 
    // document.write( " <br>Shipping charges " +ship)
    // var totcost = (item1 * quan1) + (item2 * quan2) + (ship)
    // document.write( " <br><br> Total cost of your is " +totcost) 

//  Q. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

    //Ans:

    // var totMarks = 980;
    // var marksObt = 850;
    // var perc = (850/980) * 100
    // document.write( " <br><br>")
    // document.write( " <h1> MARKS SHEET </h1> ")
    // document.write( " <br><br><br> Total Marks: " +totMarks)
    // document.write( " <br>Marks Obtained: " +marksObt) 
    // document.write( " <br>Percentage: " +perc) 

//  Q. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. 
//     Perform all calculations in a single expression.

    //Ans:
    // document.write( " <br><br>")
    // document.write( " <h1> Currency in PKR  </h1> ")
    // var dol = 104.80;
    // var riy = 28;
    // var rup = (dol * 10) + ( riy * 25);
    // document.write( " <br><br> Total currency in PKR: " +rup)

//  Q. Write a program to initialize a variable with some number and do arithmetic in following sequence: 
 // a. Add 5 
 // b. Multiply by 10 
 // c. Divide the result by 2 
 //Perform all calculations in a single expression 

    //Ans:
    // var amd = 15;
    // var res = ((amd + 5)*(10))/2;

//  Q.  The Age Calculator: Forgot how old someone is? Calculate it! 
 // a. Store the current year in a variable. 
 // b. Store their birth year in a variable.
 // c. Calculate their 2 possible ages based on the stored values. 

    //Ans:
    // var curYear = 2020;
    // var birYear = 1998;
    // var age = curYear - birYear;
    // document.write( " <br><br>")
    // document.write( " <h1> Age Calculator  </h1> ")
    // document.write( " <br> Current Year: " +curYear)
    // document.write( " <br> Birth Year: " +birYear)
    // document.write( " <br> Your Age is: " +age)

//  Q.  The Geometrizer: Calculate properties of a circle. 
 // a. Store a radius into a variable. 
 // b. Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142) 
 // Calculate the area based on the radius, and output “The  area is NN”. (Hint : Area of a circle = π r2, π = 3.142).

    //Ans:
    // var radius = 20;
    // var circum = 2 * 3.142 * radius;
    // var area = 3.142 * radius * radius
    // document.write( " <br><br>")
    // document.write( " <h1> The Geometrizer  </h1> ")
    // document.write("Radius of a circle: "+radius)
    // document.write(" <br> The circumference is: "+circum)
    // document.write(" <br> Radius of a circle: "+area)

//  Q. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. 
 // a. Store your favorite snack into a variable 
 // b. Store your current age into a variable. 
 // c. Store a maximum age into a variable. 
 // d. Store an estimated amount per day (as a number). 
 // e. Calculate how many would you eat total for the rest of your life.

    //Ans:
    // var snack = "Lays French Cheese";
    // var age = 22;
    // var estAge = 60;
    // var snackAmt = 2;
    // var finAmt = (estAge - age) * snackAmt;
    // document.write( " <br><br>")
    // document.write( " <h1> The Lifetime Supply Calculator  </h1> ")
    // document.write(" <br> Favorite Snack: "+snack)
    // document.write(" <br> Current Age : "+age)
    // document.write(" <br> Estimated Maximum Age : "+estAge)
    // document.write(" <br> Amount of Snacks per day : "+snack)
    // document.write(" <br> You will need " +finAmt+ " to last you until the ripe old age of "+estAge);

// <---------Chapter 5 Ends--------->


// Chapter 6-9

//  Q. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser

    //Ans:
    // var a = 10;
    // document.write(" Result: ")
    // document.write(" <br> The value of a is: "+a)
    // document.write(" <br> .........................................")

    // document.write( " <br><br>")
    // a = a + 1;
    // document.write(" <br> The value of ++a is: "+a)
    // document.write(" <br> Now the value of a is: "+a)

    // document.write( " <br><br>")
    // document.write(" <br> The value of a++ is: "+a)
    // a = a + 1;
    // document.write(" <br> Now the value of a is: "+a)

    
    // document.write( " <br><br>")
    // a = a - 1;
    // document.write(" <br> The value of --a is: "+a)
    // document.write(" <br> Now the value of a is: "+a)

    
    // document.write( " <br><br>")
    // document.write(" <br> The value of a-- is: "+a)
    // a = a - 1;
    // document.write(" <br> Now the value of a is: "+a)


//  Q. What will be the output in variables a, b & result after execution of the following script: 

    //Ans:
    // var a = 2, b = 1; 
    // var result = --a - --b + ++b + b--; 
    // document.write("a is: "+a)
    // document.write(" <br> b is: "+b)
    // document.write(" <br> result is: "+result)

    //Explanation at each step:
        // --a; (a = 1 , b =1)
        // --a - --b; (a = 1 , b =0) 
        // --a - --b + ++b; (a = 1 , b =1) 
        // --a - --b + ++b + b--;  (a = 1 , b =1)
    //Result:1 -   0 +   1 + 1 = 3

//  Q. Write a program that takes input a name from user & greet the user.

    //Ans:
    // var name = prompt("Enter your good name","Enter name here...")
    // document.write(name+", you are welcome to my new web page.")

//  Q. Write a program to take input a number from user & display it’s multiplication table on your browser. 
//     If user does not enter a new number, multiplication table of 5 should be displayed by default.

    //Ans:
    // var num = +prompt("Enter number of table you want to see")
    // if( num == ""){
    //     num = 5;
    //     document.write("Table of  "+num+ " <br> ")
    //     for(var i = 1; i<=10; i++){
    //             value = num * i;
    //             document.write(" <br> " +num+ " x "+i+" = " +value)}}
    //  else{
    //     document.write("Table of  "+num+ " <br> ")
    //     for(var i = 1; i<=10; i++){
    //             value = num * i;
    //             document.write(" <br> " +num+ " x "+i+" = " +value)}}
    
//  Q. Take 
 // a) Take three subjects name from user and store them in 3 different variables. 
 // b) Total marks for each subject is 100, store it in another variable. 
 // c) Take obtained marks for first subject from user and stored it in different variable. 
 // d) Take obtained marks for remaining 2 subjects from user and store them in variables. 
 // e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table) 

    //Ans:
    // var sub1 = prompt("Enter name of subject 1");
    // var sub2 = prompt("Enter name of subject 2");
    // var sub3 = prompt("Enter name of subject 3");
    // var subMarks = 100;
    // var totMarks = 300;
    // var marks1 = +prompt("Enter marks of subject 1");
    // var marks2 = +prompt("Enter marks of subject 2");
    // var marks3 = +prompt("Enter marks of subject 3");
    // var obtMarks = marks1 + marks2 + marks3;
    // var per = (obtMarks/totMarks)*100
    


// <---------Chapter 6-9 Ends--------->


// Chapter 9-11

//  Q. Write a program to take “city” name as input from user. 
//     If user enters “Karachi”, welcome the user like this: “Welcome to city of lights” 

    //Ans:
    // var city = prompt("Enter name of city");
    // city = city.toLowerCase();
    // if( city == "karachi" ){
    //     alert("Welcome to city of lights")
    // } else {
    //     alert("Wrong city entered by you.")}

//  Q.Write a program to take “gender” as input from user. 
// If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am

    //Ans:
    // var gen = prompt("Enter your Gender");
    // gen = gen.toLowerCase();
    // if( gen == "male" ){
    //     alert("Good Morning Sir!")}
    // else if( gen == "female" ) {
    //     alert("Good Morning Ma’am!")}
    //     else{
    //         alert("Sorry, Not Specified Gender.")}

//  Q. Write a program to take input color of road traffic signal from the user & show the message according to table: 

    //Ans:
    // var color = prompt("Enter name of color");
    // color = color.toLowerCase();
    // if( color == "red" ){
    //     alert("Must Stop")}  
    // else if( color == "yellow" ) {
    //     alert("Ready to move")}
    // else if( color == "green" ){
    //         alert("Move now")}


//  Q. Write a program to take input remaining fuel in car (in litres) from user. 
//     If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car” 

    // Ans:
    // var fuel = prompt("Enter your remaining fuel in car (in litres)");
    // if( fuel < 0.25  ){
    //     alert("Please refill the fuel in your car")
    // } else {
    //     alert("Fuel is enough for you.")}

//  Q. Run this script, & check whether alert message would be displayed or not.

    //Ans:   
    // var a = 4; 
    // if (++a === 5)
    // { alert("given condition for variable a is true"); }
    //(Alert is displaying because condition is true)

    // var b = 82; 
    // if (b++ === 83)
    // { alert("given condition for variable b is true"); }
    //(Alert is not displaying because condition is false)

    // var c = 12; 
    // if (c++ === 13){ 
    // alert("condition 1 is true"); } 
    // if (c === 13){
    // alert("condition 2 is true"); }
    // if (++c < 14){
    // alert("condition 3 is true"); }
    // if(c === 14){
    // alert("condition 4 is true"); }
    //(Two Alerts are displaying because condition 2 & 4 are true)

    // var materialCost = 20000;
    // var laborCost = 2000; 
    // var totalCost = materialCost + laborCost; 
    // if (totalCost === laborCost + materialCost){
    // alert("The cost equals"); }
    //(Alert is displaying because condition is true)

    // if (true){
    // alert("True"); } 
    // if (false){
    // alert("False"); }
     //(Alert is displaying because condition is true)

    // if("car" < "cat"){
    // alert("car is smaller than cat"); }
    //(Alert is displaying because condition is true)


//  Q. Write a program to take input the marks obtained in three subjects & total marks. 
//     Compute & show the resulting percentage on your page. Take percentage & compute grade.

    //Ans: 
    // var obtsub1 = +prompt("Enter obtained marks of subject 1");
    // var marks1 = +prompt("Enter total marks of subject 1");
    // var obtsub2 = +prompt("Enter obtained marks of subject 2");
    // var marks2 = +prompt("Enter total marks of subject 2");
    // var obtsub3 = +prompt("Enter obtained marks of subject 3");
    // var marks3 = +prompt("Enter total marks of subject 3");
    // var obtTotal = obtsub1 + obtsub2 + obtsub3;
    // var totMarks = marks1 + marks2 + marks3;
    // var per = (obtTotal/totMarks)*100;
    // var grade,remarks;
    // if( per >= 80 ){
    //     grade="A-one"
    //     remarks="Excellent"}
    // else if( per >= 70 ){
    //     grade="A"
    //     remarks="Good"}
    // else if( per >= 60 ){
    //     grade="B"
    //     remarks="You need to improve"} 
    // else if ( per < 60 ){
    //     grade="Fail"
    //     remarks="Sorry"} 

    // document.write( " <h1> Marks Sheet   </h1> ")
    // document.write( " <br><br>")
    // document.write( " <br> Total Marks: "+totMarks)
    // document.write( " <br> Marks Obtained: "+obtTotal)
    // document.write( " <br> Percentage: "+per+"%")
    // document.write( " <br> Grade: "+grade)
    // document.write( " <br> Remarks: "+remarks)

//  Q. Guess game: Store a secret number (ranging from 1 to 10) in a variable. 
//     Prompt user to guess the secret number. 
//  a. If user guesses the same number, show “Bingo! Correct answer”. 
//  b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”. 

    //Ans
    // var num = 5;
    // var guess = +prompt("Enter your Guess number");
    // if( guess === num ){
    //     alert("Bingo! Correct answer")}
    // if( guess === num + 1){
    //     alert("Close enough to the correct answer")}

//  Q. Write a program to check whether the given number is divisible by 3. 
//     Show the message to the user if the number is divisible by 3. 

    //Ans: 
    // var num = +prompt("Enter your number");
    // if( num % 3 == 0 ){
    //     alert("The number "+num+" is divisible by 3")}
    // else{
    //     alert("The number "+num+" isn't divisible by 3")}

//  Q. Write a program that checks whether the given input is an even number or an odd number.

    //Ans: 
    // var num = +prompt("Enter your number");
    // if( num % 2 == 0 ){
    //     alert("The number "+num+" is Even")}
    // else{
    //     alert("The number "+num+" is Odd")}

//  Q. Write a program that takes temperature as input and shows a message based on following criteria 
//  a. T > 40 then “It is too hot outside.” 
//  b. T > 30 then “The Weather today is Normal.” 
//  c. T > 20 then “Today’s Weather is cool.” 
//  d. T > 10 then “OMG! Today’s weather is so Cool.”

    //Ans:
    // var t = +prompt("Enter Temperature")
    // if( t > 40 ){
    // alert("It's too hot outside")}
    // else if( t > 30 ){
    // alert("The Weather today is Normal.")}
    // else if( t > 20 ){
    // alert("Today’s Weather is cool.")} 
    // else if ( t > 10 ){
    // alert("OMG! Today’s weather is so Cool.")}

//  Q. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: 
//  a. First number 
//  b. Second number 
//  c. Operation (+, -, *, /, %) Compute & show the calculated result to user. 

    //Ans: 
    // var num1 = +prompt("Enter First Number")
    // var operator = prompt("Enter any operation you want to peroform (+ , - , x , / , %) ")
    // var num2 = +prompt("Enter Second Number")
    // var result;
    // if( operator == "+" ){
    //     result = num1 + num2;}
    // if( operator == "-" ){
    //     result = num1 - num2;}
    // if( operator == "x" ){
    //     result = num1 * num2;}
    // if( operator == "/" ){
    //     result = num1 / num2;}
    // if( operator == "%" ){
    //     result = num1 % num2;}
    // document.write(num1+" "+operator+" "+num2+" = "+result)


// <---------Chapter 9-11 Ends--------->


// Chapter 12-13

//  Q. Write a program that takes a character (number or string) in a variable & 
//     checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122). 

    //Ans:
    // var charact = +prompt("Enter any character (number or a letter)");
    // alert(charact);
    // if( charact >= 65  && charact <= 90 ){
    // alert("Character is Uppercase")}

//  Q. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

    //Ans:
    // var num1 = +prompt("Enter First Integer")
    // var num2 = +prompt("Enter Second Second")
    // if( num1 > num2 ){
    // document.write(num1+" is greater")}
    // if( num1 < num2 ){
    //     document.write(num2+" is greater")}
    // if( num1 === num2 ){
    //     document.write(num1+" is equal to "+num2)}

//  Q. Write a program that takes input a number from user & state whether the number is positive, negative or zero

    //Ans:
    //  var num = +prompt("Enter An Integer")
    // if( num > 0 ){
    // document.write(num+" is a positive number")}
    // if( num < 0 ){
    //     document.write(num+" is a negative number")}
    // if( num === 0 ){
    //     document.write("Number is equal to "+num)}
    
//  Q. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

    //Ans:
    // var str = prompt("Enter a character (string of length 1)");
    // str = str.toUpperCase();
    // if( str == "A"  || str == "E" ){
    //     alert("True");
    // }
    // else if (str == "I"  || str == "O") {
    //     alert("True");}
    // else if(str == "U" ){
    //     alert("True");}
    // else {
    //     alert("False");
    // }

//  Q. Write a program that 
//  a. Store correct password in a JS variable. 
//  b. Asks user to enter his/her password 
//  c. Validate the two passwords: 
//     i.  Check if user has entered password. If not, then give message “ Please enter your password” 
//     ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. 
//         Show “Incorrect password” otherwise. 

    //Ans:
    // var pass = prompt("Enter your correct password");
    // var pass2 = prompt("Kindly confirm your password");
    // if( pass === pass2 ){
    //         alert("Correct! The password you entered matches the original password");
    //     }
    // else {
    //     alert("Incorrect password");
    // }

//  Q. This if/else statement does not work. Try to fix it:  

    //Ans:

    // var greeting; 
    // var hour = 13; 
    // if (hour < 18) 
    // { greeting = "Good day";
    // alert(greeting)} 
    // else {greeting = "Good evening"; 
    // alert(greeting)}
    
//  Q. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm 

    //Ans:
    // var time = +prompt("Enter Time in 24 hours clock format like: 1900 = 7pm");
    // if(time>=0000 && time<=1200){
    //     alert("Good morning!")
    // }
    // else if(time>=1200 && time<=1700){
    //     alert("Good afternoon!")
    // }
    // else if(time>=1700 && time<=2100){
    //     alert("Good evening!")
    // }
    // else if(time>=2100 && time<=2359){
    //     alert("Good night!")
    // }
    // else{
    //     alert("Invalid Time");
    // }


// <---------Chapter 12-13 Ends--------->


// Chapter 14-16


 //  Q. Declare an empty array using JS literal notation to store student names in future. 

    //Ans:
    // var studNames=[];
    
 //  Q. Declare an empty array using JS object notation to store student names in future. 

    //Ans:
    // var stuNames = new Array();

 //  Q. Declare and initialize a strings array.  

    //Ans:
    // var studNames=["owais","zeeshan","ahmed"];

 //  Q. Declare and initialize a numbers array

    //Ans:
    // var rollno = new Array(177,180,133);

 //  Q. Declare and initialize a boolean array. . 

    //Ans:
    // var booleanArr = [true,false];

 //  Q. Declare and initialize a mixed array. 

    //Ans:
    // var mix = ["owais",177,"zeeshan",130,"ali",121]

//  Q. Declare and Initialize an array and store available education qualifications in Pakistan
//     (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser 

    //Ans:
    // var faculty =["SSC","HSC","BCS","BS","BCOM","MS","M. Phil.","PhD"];
    // document.write( " <h1> Qualifications  </h1> ")
    // for(var i = 1;i<faculty.length;i++){
    //     document.write(" <br> "+i+") "+faculty[i])}
    
 //  Q. Write a program to store 3 student names in an array.Take another array to store score of these three students. 
//      Assume that total marks are 500 for each student, display the scores & percentages of students:

    //Ans:
    // var stNames=["owais","xyz","abc"];
    // var numbers=[400,320,290];
    // var totMarks = 500;
    // var perc = [];
    // for(var i=1;i=3;i++){
    //     perc[i] = (numbers[i]/totMarks)*100
    // }
    // document.write(perc+"%");

//  Q. Initialize an array with color names. Display the array elements in your browser. 
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.  
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. 
// c. Add two more color to the beginning of the array. Display the updated array in your browser. 
// d. Delete the first color in the array. Display the updated array in your browser. 
// e. Delete the last color in the array. Display the updated array in your browser. 
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. 
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. 
// Then remove the same number of color(s) from user-defined position/index. 
 
    //Ans:
    // var color = ["Red","Green","Blue"];
    // for(var i=0;i<color.length;i++){
        //     console.log(color[i]);
    // }
    // var newColor = prompt("Enter any color you want to add at the beginning");
    // color.unshift(newColor);
    
    // console.log("Updated List of Colors")
    // for(var i=0;i<color.length;i++){
    //     console.log(color[i]);
    // }
    
    // var newColor = prompt("Enter any color you want to add at the end");
    // color.push(newColor);

    // console.log("Updated List of Colors")
    // for(var i=0;i<color.length;i++){
    //     console.log(color[i]);
    // }

    // console.log("Some New Colors")
    // color.splice(0,0,"violet","indigo");
    // for(var i=0;i<color.length;i++){
    //     console.log(color[i]);
    // }

    // console.log("Colors after deletion of first color")
    // color.splice(0,1);
    // for(var i=0;i<color.length;i++){
    //     console.log(color[i]);
    // }
    
    // console.log("Colors after deletion of last color")
    // var lastElem = color.length;
    // color.splice(5,lastElem);
    // for(var i=0;i<color.length;i++){
    //     console.log(color[i]);
    // }
    
    // var ind = +prompt("At which index you want to add a color?")
    // var col = prompt("which color you want to add?")
    // color.splice(ind,0,col);
    // for(var i=0;i<color.length;i++){
    //     console.log(color[i]);
    // }
    
    // var ind = +prompt("At which index you want to delete a color?")
    // var del = +prompt("How many color(s) you want to delete?")
    // color.splice(ind,del);
    // for(var i=0;i<color.length;i++){
    //     console.log(color[i]);
    // }


 //  Q. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.  

    //Ans:
    // var score = [230,480,320,120];
    // document.write("Scores of Students: "+score);
    // score.sort();
    // document.write(" <br> Ordered Scores of Students: "+score);

 //  Q. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array. 

    //Ans
    // var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
    // var selectedCities = cities.slice(2,5);
    // document.write("<br> Cities List: <br> "+cities);
    // document.write("<br>");
    // document.write(" <br> Selected Cities List: <br> "+selectedCities);
    
    //  Q. Write a program to create a single string from the below mentioned array: 
    
    //Ans
    // var arr = ["This ", " is ", " my ", " cat"];
    // document.write(" <br> Array:  <br> "+arr);
    // document.write("<br>");
    // var joinn = arr.join('');
    // document.write(" <br> String:  <br> "+joinn);

 //  Q. Create a new array. Store values one by one in such a way that you can access the values in the order 
//      in which they were stored. (FIFO-First In First Out) 

    //Ans
    // var newArr  = new Array();
    // newArr[0] = "Keyboard";
    // newArr[1] = "Mouse";
    // newArr[2] = "Printer";
    // newArr[3] = "Monitor";
    // document.write("<br> Devices: <br>"+newArr)
    // document.write("<br>");
    // for(var i=0; i<newArr.length;i++){
    //     document.write(" <br> Out: <br> "+newArr[i])}


//  Q. Create a new array. Store values one by one in such a way that you can access the values in the order 
//      reverse order. (Last InFirst Out) 

    //Ans
    // var newArr  = new Array();
    // newArr[0] = "Keyboard";
    // newArr[1] = "Mouse";
    // newArr[2] = "Printer";
    // newArr[3] = "Monitor";
    // document.write("<br> Devices: <br>"+newArr)
    // document.write("<br>");
    // newArr.reverse();
    // for(var i=0;i<3;i++){
    //     document.write(" <br> Out: <br> "+newArr[i])}

//  Q.  Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.
//      Display the following dropdown/select menu in your browser using document.write() method: 
    //Ans
//     var phone = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
// document.write("<select> <option>Phone Manufacturers</option> <option>"+phone[0]+"</option> <option>"+phone[1]+"</option> <option>"+phone[2]+"</option> <option>"+phone[4]+"</option> <option>"+phone[5]+"</option>  </select>")

// <---------Chapter 14-16 Ends--------->


// Chapter 17-20

//  Q.  Declare and initialize an empty multidimensional array. (Array of arrays)
    
    //Ans
    // var arr = []; 
    // var arr1 = []; 
    // var arr2 = [];
    // var multiArray = [arr,arr1,arr2];

//  Q.  Declare and initialize a multidimensional array representing the following matrix: 
    
    //Ans
    // var arr0 = ["0123"]; 
    // var arr1 = [1012]; 
    // var arr2 = [2101];
    // var multiArray = [arr0,arr1,arr2];
    // for(var i=0;i<multiArray.length;i++){
    //     document.write(" <br> "+multiArray[i])
    // }

//  Q.  Write a program to print numeric counting from 1 to 10.  

    //Ans
    // for(var i=1;i<11;i++){
    //         document.write(" <br> "+i)
    //     }
 
//  Q.  Write a program to print multiplication table of any number using for loop. 
//      Table number & length should be taken as an input from user

    //Ans
    // var num1 = +prompt("Enter a number to show its multiplication table")
    // var num2 = +prompt("Enter length of multiplication table")
    // var res = 0;
    // for(var i=1;i<=num2;i++){
    //             res = num1 * i;
    //             document.write(num1+" x "+i+ " = "+res+ " <br> ")}

//  Q.  Write a program to print items of the following array using 
//      for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”] 

    //Ans
    // var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
    // for(var i=0;i<fruits.length;i++){
    //         document.write(" <br> "+fruits[i])
    //     }
    //     document.write(" <br>")
    // for(var j=0;j<fruits.length;j++){
    //     document.write(" <br> Element at index "+j+" is "+fruits[j])
    //     }

//  Q.  Generate the following series in your browser. See example output.  

    //Ans
    // document.write("<h3>Counting</h3>")
    // for(var i=1;i<=15;i++){
    //             document.write(i+",")}
                
    // document.write("<h3>Reverse Counting</h3>")
    // for(var i=10;i>=1;){
    //             document.write(i+",")
    //             i--;}

    // document.write("<h3>Even</h3>")
    // for(var i=0;i<=20;i++){
    //     if(i % 2 == 0){
    //         document.write(i+",")
    //         }}
    // document.write("<h3>Even</h3>")
    // for(var i=0;i<=20;i++){
    //     if(i % 2 != 0){
    //         document.write(i+",")
    //         }}
            
    // document.write("<h3>Series</h3>")
    // for(var i=2;i<=20;i++){
    //     if(i % 2 == 0){
    //         document.write(i+"k,")}}
    
//  Q.   You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
//       Write a program to enable “search by user input” in an array. After searching, 
//       prompt the user whether the given item is found in the list or not.

    //Ans
//     var A = ["cake", "apple pie", "cookie", "chips", "patties"];
//     var ques = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")
//     var ans,ind;
//     for(var i=0;i<A.length;i++){
//     ans = ques.search(A[i]);
//     if(ans==0){
//         ind = i;
//         break;
//     }
// }
//     if(ans == 0){
//             document.write(" <br> "+ques+" is <b>available</b>  at index "+ind+" in our bakery")
//     }
//     else{
//         document.write(" <br> We are sorry. "+ques+" is <b>not available</b> in our bakery")
//     }

//  Q.  Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12] 

    //Ans
    // var A = [24, 53, 78, 91, 12];
    // A.sort();
    // A.reverse();
    // document.write("Array items: "+A)
    // document.write(" <br> The smallest number is "+A[0])
    
    
//  Q.  Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12] 

    //Ans
    // var A = [24, 53, 78, 91, 12];
    // A.sort();
    // document.write("Array items: "+A)
    // document.write(" <br> The smallest number is "+A[0])
    
    
//  Q.  Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12] 
    
    //Ans
    // var num = 5;
    // var res = 0;
    // for(var i=1;i<=20;i++){
    //             res = num * i;
    //             document.write(res+ ",")}

// <---------Chapter 17-20 Ends--------->


// Chapter 21-25

//  Q.  Write a program that takes two user inputs for first and last name 
//      using prompt and merge them in a new variable titled fullName. Greet the user using his full name
    
    //Ans
    // var fname = prompt("Enter your first name: ")
    // var lname = prompt("Enter your last name: ")
    // var space = " ";
    // var fullName = fname + space + lname;
    // document.write("Welcome to my webpage "+fullName)

//  Q.  Write a program to take a user input about his favorite mobile phone model. 
//      Find and display the length of user input in your browser
    
    //Ans
    // var favMob = prompt("Enter your favorite mobile model")
    // var count = favMob.length;
    // document.write("‏My favorite phone is: "+favMob)
    // document.write(" <br> Length of String: "+count)

//  Q.  Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser 
    
    //Ans
    // var nation = "Pakistani";
    // var ind = nation.indexOf('n');
    // document.write("Index of 'n' is "+ind)

//  Q.  Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser
    
    //Ans
    // var msg = "Hello World";
    // var ind = msg.indexOf("l",4);
    // document.write("String: "+msg);
    // document.write(" <br> Last Index of 'l' is "+ind);

//  Q.  Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser
    
    //Ans
    // var nation = "Pakistani";
    // var ch = nation.charAt(3);
    // document.write("String: "+nation);
    // document.write(" <br> Character at index 3 is: "+ch)

//  Q.   Repeat Q1 using string concat() method.
    
    //Ans
    // var fname = prompt("Enter your first name: ")
    // var lname = prompt("Enter your last name: ")
    // var space = " ";
    // var fullName = fname.concat(space,lname);
    // document.write("Welcome to my webpage "+fullName)
    
//  Q. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser. 
    
    //Ans
    // var city = "Hyderabad";
    // var newCity = city.replace("Hyder","Islam");
    // document.write("City: "+city)
    // document.write(" <br> After Replacement: "+newCity)

//  Q.Write a program to replace all occurrences of “and” in the string with “&” and 
//    display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”; 
    
    //Ans
    // var message = "Ali and Sami are best friends. They play cricket and football together.";
    // var newMsg = message.replace(/and/g,'&');
    // document.write(newMsg);

//  Q. Write a program that converts a string “472” to a number 472. Display the values & types in your browser
    
    //Ans
    // var str = "472";
    // document.write("Value: "+str)
    // document.write(" <br> Type: String");
    // var num = parseInt(str);
    // document.write(" <br> Value: "+num)
    // document.write(" <br> Type: Number");
    
//  Q. Write a program that takes user input. Convert and show the input in capital letters
        
    //Ans
    // var fruit = prompt("Enter your favorite Dryfruit name: ")
    // document.write("User Input: "+fruit)
    // fruit = fruit.toUpperCase();
    // document.write(" <br>  Upper Case: "+fruit)
    
    
//  Q. Write a program that takes user input. Convert and show the input in title case
            
    //Ans
    // var fruit = prompt("Enter any word: ")
    // document.write("User Input: "+fruit)
    // var up = fruit.slice(0,1);
    // var low = fruit.slice(1);
    // fruit = fruit.toUpperCase();
    // up = up.toUpperCase();
    // fruit = up.concat(low)
    // document.write(" <br>  Title Case: "+fruit)

//  Q. Write a program that converts the variable num to string. var num = 35.36 ; Remove the dot to display “3536” display in your browser
            
    //Ans
    // var num = 35.36;
    // document.write("Number: "+num)
    // num = num.toString()
    // num = num.replace('.','')
    // document.write(" <br>  Result: "+num);

    // var num = 35.36;
    // document.write("Number: "+num)
    // num = num.toString()
    // var up = num.slice(0,2);
    // var low = num.slice(3);
    // num = up.concat(low)
    // document.write(" <br>  Result: "+num);

//  Q. Write a program to take user input and store username in a variable. If the username contains any 
//     special symbol among [@ . , !], prompt the user to enter a valid username

    //Ans
    // var username = prompt("Enter your username");    
    // var charact = new Array();
    // charact[0] = username.includes("@")
    // charact[1] = username.includes("!")
    // charact[2] = username.includes(".")
    // charact[3] = username.includes(",")
    // var checker = charact.includes(true)
    // if( checker == true){
    //     alert("Please enter a valid username")}
    // else{
    //     alert("valid username")}

//  Q. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] 
//     Write a program to enable “search by user input” in an array. After searching, 
//     prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search.
//     Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability.
            
    //Ans
    // var A = ["cake", "apple pie", "cookie", "chips", "patties"];
    // var ques = prompt("Welcome to ABC Bakery. What do you want to order \nsir/ma'am?")
    // ques = ques.toLowerCase();
    // var ans,ind;
    // for(var i=0;i<A.length;i++){
    // ans = ques.search(A[i]);
    // if(ans==0){
    //     ind = i;
    //     break;
    // }
    // }
    // if(ans == 0){
    //         document.write(" <br> "+ques+" is <b>available</b>  at index "+ind+" in our bakery")
    // }
    // else{
    //     document.write(" <br> We are sorry. "+ques+" is <b>not available</b> in our bakery")
    // }

//  Q.Write a program to take password as an input from user. The password must qualify these requirements: 
// a. It should contain alphabets and numbers 
// b. It should not start with a number 
// c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password. 
            
    //Ans dont.slice(0)
    // var password = prompt("Enter your password");
    // document.write("Entered password: "+password)
    
    

    // var dont = [0,1,2,3,4,5,6,7,8,9];
    // var must = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o"]
    // for(var i=0;i<dont.length;i++){
    //     if(password.startsWith(dont[i])==true){
    //         document.write("password cannot begin with a number")
    //         document.write(" <br> Please enter a valid password.")
    //     }
    // }
    // if(password.length<6){
    //     document.write(" <br> Please enter a valid password.")
    // }


    // var status,numstatus;
    // var codess = new Array();
    // for(var i=0;i<password.length;i++){
    //     codess[i] = password.charCodeAt(i);
    // }

    // for(var j=0;j<codess.length;j++){
        
    //         if(codess[j]>=97 && codess[j]<=122 || codess[j]>=65 && codess[j]<=90){
    //             if(codess[j]>=48 && codess[j]<=57)
    //             {status = "pass";}
    //         }
    //         else
    //         {status = "fail";}
    //     }
            
    //         // if(codess[j]>=48 && codess[j]<=57){
    //         //         numstatus = "pass";}
    //         // }

    //         document.write(" <br> Alphabet Status "+status)




            // document.write(" <br> Num Stat   us "+numstatus)
    
    // document.write(" <br> "+password)
    // var n = password.charCodeAt(2)
    // document.write(" <br> "+n)
    
    

















//  Q. Write a program to convert the following string to an array using string split method. 
//     var university = “University of Karachi”; Display the elements of array in your browser. 
            
    //Ans
    // var university = "University of Karachi";
    // var splitt =  university.split("");
    // for(var i=0;i<splitt.length;i++){
    //     document.write(" <br> "+splitt[i])}

//  Write a program to display the last character of a user input.
            
    //Ans
    // var inp = prompt("Enter a word")
    // document.write("User Input: "+inp)
    // var res = inp.charAt(inp.length-1);
    // document.write(" <br> Last character of Input: "+res)

// Q. You have a string “The quick brown fox jumps over the lazy dog”. 
// Write a program to count number of occurrences of word “the” in given string. 
            
    //Ans
    // var str = "The quick brown fox jumps over the lazy dog";
    // document.write("Text: "+str)
    // str = str.toLowerCase();
    // str = str.split(" ")
    // var count=0;
    // for(var i=0;i<str.length;i++){
    //     if(str[i] == "the") {
    //         count++}
    // }
    // document.write(" <br> There are "+count+" occurrence(s) of word “the”")


// <---------Chapter 21-25 Ends--------->


// Chapter 26-30


//  Q.  Write a program that takes a positive integer from user & display the following in your browser. 
//  a.  number 
//  b.  round off value of the number 
//  c.  floor value of the number 
//  d.  ceil value of the number 

    //Ans
    // var num = +prompt("Enter a postive integer")
    // if(num >= 0){
    // document.write("Number: "+num)
    // var round = Math.round(num)
    // document.write(" <br> Round off value: "+round)
    // var floor = Math.floor(num)
    // document.write(" <br> Floor value: "+floor)
    // var ceil = Math.ceil(num)
    // document.write(" <br> Ceil value: "+ceil)
    // }
    // else{
    //     document.write("Please enter a postive integer")
    // }

//  Q.  Write a program that takes a positive integer from user & display the following in your browser. 
//  a.  number 
//  b.  round off value of the number 
//  c.  floor value of the number 
//  d.  ceil value of the number 

    //Ans
    // var num = +prompt("Enter a negative integer")
    // if(num < 0){
    // document.write("Number: "+num)
    // var round = Math.round(num)
    // document.write(" <br> Round off value: "+round)
    // var floor = Math.floor(num)
    // document.write(" <br> Floor value: "+floor)
    // var ceil = Math.ceil(num)
    // document.write(" <br> Ceil value: "+ceil)
    // }
    // else{
    //     document.write("Please enter a negative integer")
    // }

//  Q.  Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of -5 is 5.

    //Ans
    // var num = +prompt("Enter a negative integer for its absolute value")
    // var absolute = Math.abs(num);
    // document.write("The absolute value of "+num+" is "+absolute);

//  Q.   Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser

    //Ans
    //var dice = Math.floor(Math.random() * 10);
    //var dice2 = Math.floor(Math.random() * 10);

    // document.write("Random dice value is " +dice)
    // document.write(" <br> Random dice value is " +dice2)

//  Q.   Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser

    //Ans
    // var coin = Math.floor(Math.random() * 2);
    // var ans;
    // if(coin == 1){
    //     ans = "Heads"
    // }
    // else{
    //     ans = "Tails"
    // }

    // document.write("2")
    // document.write(" <br> Random coin value is " +ans)

    // var coin2 = Math.floor(Math.random() * 2);
    // var ans1;
    // if(coin2 == 1){
    //     ans1 = "Heads"
    // }
    // else{
    //     ans1 = "Tails"
    // }
    // document.write(" <br>  1")
    // document.write(" <br> Random coin value is " +ans1)

//  Q.   Write a program that shows a random number between 1 and 100 in your browser. 

    //Ans
    // var dice = Math.floor((Math.random() * 100) +1);
    // document.write(" <br> Random number betwwen 1 and 100: "+dice)

//  Q.   Write a program that asks the user about his weight. Parse the user input and display his weight in your browser.
//       Possible user inputs can be: a. 50 b. 50kgs c. 50.2kgs d. 50.2kilograms 
    //Ans
    // var weight = prompt("Enter your weight in Kilograms")
    // var ind = weight.indexOf(".")
    // if(ind <= 0) {
    //     weight = parseInt(weight);   
    // } 
    // else{
    //     weight = weight.slice(0,ind+2)
    // }
    // document.write(" <br> The weight of user is "+weight+ " Kilograms");

//  Q.   Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. 
//       If the user input equals the secret number, congratulate the user. 

    //Ans
    // var num = 8;
    // var guess = +prompt("Input a number between 1 and 10");
    // if(num == guess) { 
    //         alert("Congratulations! You have guessed the number right.");
    //     } 
    //     else{
    //         alert("Try again!");
    //     }

// <---------Chapter 26-30 Ends--------->


// Chapter 31-34

//  Q.  Write a program that displays current date and time in your browser. 

    //Ans
        // var date = new Date();
        // document.write(date)

//  Q.  Write a program that alerts the current month in words. For example December.  

    //Ans
    // var date = new Date();
    // var months = new Array();
    // months[0] = "January";
    // months[1] = "February";
    // months[2] = "March";
    // months[3] = "April";
    // months[4] = "May";
    // months[5] = "June";
    // months[6] = "July";
    // months[7] = "August";
    // months[8] = "September";
    // months[9] = "October";
    // months[10] = "November";
    // months[11] = "December";
    // var month = months[date.getMonth()];
    // document.write("Current Month: "+month)
    
//  Q. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

    //Ans
    // var date = new Date();
    // var days = new Array();
    // days[0] = "Sun";
    // days[1] = "Mon";
    // days[2] = "Tue";
    // days[3] = "Wed";
    // days[4] = "Thurs";
    // days[5] = "Fri";
    // days[6] = "Sat";
    // var day = days[date.getDay()];
    // document.write("Today is "+day)

//  Q. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

    //Ans
    // var date = new Date();
    // var day = date.getDay();
    // if(day == 0 || day == 6){
    //     document.write("It's Funday")
    // }
    // else{
    //     document.write("It's not a Funday")
    // }

//  Q. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the 
//     month else shows “Last days of the month”.

    //Ans
    // var date = new Date();
    // var date = date.getDate();
    // if(date <=15){
    //     document.write("First Fifteen days of the month")
    // }
    // else{
    //     document.write("Last days of the month")
    // }
        
//  Q. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable 
//     that hasn't been declared beforehand. Use any variable you like to represent the Date object

    //Ans
    // var date = new Date();
    // document.write("Current Date: "+date)
    // var mili = date.getTime()
    // document.write("<br>Elapsed milliseconds since January 1, 1970: "+mili)
    // var min = mili / (1000*60)
    // document.write("<br>Elapsed minutes since January 1, 1970: "+min)
    
    
//  Q.  Write a program that tests whether it's before noon and alert “Its AM” else “its PM”. 

    //Ans
    // var date = new Date();
    // var hours = date.getHours();
    // if(hours < 12){
    //         document.write("It's AM")
    //     }
    //     else{
    //         document.write("It's PM")
    //     }

//  Q.  Write a program that tests whether it's before noon and alert “Its AM” else “its PM”. 

    //Ans
    // var laterDate = new Date(2020,11,31,00,00,00,00);
    // document.write("Later Date: "+laterDate)
    
//  Q. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? 
//     Note: 1st Ramadan was on June 18, 2015 

    //Ans
    // var date1 = new Date("06/18/2018"); 
    // var date2 = new Date();
    // var time = date2.getTime() - date1.getTime(); 
    // var days = time / (1000 * 3600 * 24);  
    // days = parseInt(days)
    // alert(days +" days have passed since 1st Ramzan 2015.");

//  Q.  Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

    //Ans
    // var refDate = new Date(2015,11,5,22,50,16,00);
    // var start = new Date(2015,0,1,00,00,00,00);
    // var time = refDate.getTime()  - start.getTime()
    // time = time/1000
    // document.write("On reference date "+refDate+ ", " +time+ " seconds had passed since beginning of 2015.")

//  Q.  Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and 
//      finally display the date object in your browser.

    //Ans
    // var date = new Date();
    // document.write("current date: "+date)
    // var hour = date.getHours()
    // var lesshour = new Date()
    // lesshour.setHours(hour-1)
    // document.write("<br> 1 hour ago, it was "+lesshour)

//  Q.  Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

    //Ans
    // var date = new Date();
    // document.write("current date: "+date)
    // var year = date.getFullYear()
    // var lessyear = new Date()
    // lessyear.setFullYear(year-100)
    // document.write("<br> 100 years back, it was "+lessyear)
    
//  Q.  Write a program to ask the user about his age. Calculate and show his birth year in your browser. 
    
    //Ans
    // var age = +prompt("Enter your age in numbers")
    // document.write("Your age is "+age)
    // var date = new Date();
    // var year = date.getFullYear();
    // var birthYear = year - age;
    // document.write("<br> Your birth year is "+birthYear)

//  Q.  Write a program to ask the user about his age. Calculate and show his birth year in your browser. 
    
    //Ans
    // document.write("<h1>K-Electric Bill</h1>")
    // var custName = "<b>Muhammad Owais</b>"
    // var month = "January"
    // var units = 550;
    // var charges = 16;
    // var surcharge = 350
    // var bill = units * charges;
    // var newbill = bill + surcharge;
    // document.write("<br> Customer Name:  <b>"+custName+ "</b>")
    // document.write("<br> Month: <b>"+month+ "</b>")
    // document.write("<br>Number of units: <b>"+units+ "</b>")
    // document.write("<br> Charges per unit: <b>"+charges+ "</b>")
    // document.write("<br><br> Net Amount Payable (Within Due Date):<b> "+bill+ "</b>")
    // document.write("<br> Late payment surharges: <b>"+surcharge+ "</b>")
    // document.write("<br> Gross Amount Payable (After Due Date):<b> "+newbill+ "</>")


// <---------Chapter 31-34 Ends--------->



// Chapter 35-38

//  Q.   Write a function that displays current date & time in your browser. 
    
    //Ans
    // function dateTime() {
    //     var date = new Date()
    //     document.write(date)
    // }
    // dateTime();

//  Q.    Write a function that takes first & last name and then it greets the user using his full name. 
    
    //Ans
    // function name(){
    //     var fname = prompt("Enter your first name")
    //     var lname = prompt("Enter your last name")
    //     var greet = fname + " " + lname;
    //     document.write("Welcome to my webpage " +greet)
    // }
    // name();
    
//  Q.  Write a function that adds two numbers (input by user) and returns the sum of two numbers
    
    //Ans
    //  function sum(){
    //         var num1 = +prompt("Enter first number")
    //         var num2 = +prompt("Enter second number")
    //         var add = num1 + num2;
    //         document.write("Sum of "+num1+" and " +num2+ " = " +add)
    //     }
    //     sum();

//  Q.  Write a function that takes three arguments num1, num2 & operator & compute the desired operation. 
//      Return and show the desired result in your browser
    
    //Ans
    //  function calculator(){
    //         var num1 = +prompt("Enter first number")
    //         var operator = prompt("Enter operation you want to perform (+,-,*,/)")
    //         var num2 = +prompt("Enter second number")
    //         var result;
    //         if(operator == "+"){
    //             result = num1 + num2;
    //         document.write("Addition: "+num1+" + " +num2+ " = " +result)}
    //         else if(operator == "-"){
    //             result = num1 - num2;
    //         document.write("Subtraction: "+num1+" - " +num2+ " = " +result)}
    //         else if(operator == "*"){
    //             result = num1 * num2;
    //         document.write("Multiplication: "+num1+" x " +num2+ " = " +result)}
    //         else if(operator == "/"){
    //             result = num1 / num2;
    //         document.write("Division: "+num1+" / " +num2+ " = " +result)}
    //         else{
    //             document.write("Wrong Operator")}
    //     }
    //     calculator();


//  Q.  Write a function that squares its argument. 
    
    //Ans
    // function square(){
    //             var num = +prompt("Enter an integer")
    //             var square = num * num
    //             document.write("Square of "+num+" is " +square)
    //         }
    //         square();

//  Q.  Write a function that computes factorial of a number
    
    //Ans
    // var fact = +prompt("Enter the number for factorial")
    // var num = fact -1 ;
    // while(num>0){
    //     fact = fact * num;
    //     num--;
    // }
    // document.write(fact)


//  Q.  Write a function that take start and end number as inputs & display counting in your browse
    
    //Ans
    // function counting(){
    //     var start = +prompt("Enter starting number")
    //     var end = +prompt("Enter ending number")
    //     for( var i = start; i<=end ;i++){
    //         document.write(i+"<br>")
    //     }
    // }
    // counting();

//  Q. Write a nested function that computes hypotenuse of a right angle triangle. 
    
    //Ans
    // var x;
    // function  calculateHypotenuse(){
    //     var h,p,b;
    //     p = +prompt("Enter the value or perpendicluar")
    //     b = +prompt("Enter the value or base")
    //     function  calculateSquare(x) {
    //         x = x * x;
    //         return x;
    //     }
    //     p =  calculateSquare(p);
    //     b =  calculateSquare(b);
    //     h = p + b;
    //     h = calculateSquare(h)
    //     document.write("Hypotenuse of right angle triangle is: "+h)
    // }
    // calculateHypotenuse();

//  Q. Write a function that calculates the area of a rectangle.      
//          A = width * height     
//     Pass width and height in following manner: 
    // i. Arguments as value 
    // ii. Arguments as variables 
    
    //Ans
    // function area(w,h){
    //     if(w==0 && h==0){
    //          w = 20;
    //          h = 10;        }
    //     var a = w * h;
    //     document.write("Area of Triangle = "+a)
    // }
    // w = +prompt("Enter width")
    // h = +prompt("Enter height")
    // area(w,h);

//  Q. Write a JavaScript function that checks whether a passed string is palindrome or not? 
    
    //Ans
    var word;
    function palindrome(word){
        var word = prompt("Enter a word to check if it is palindrome or not")
        var l = (word.length)-1;
        var sp = word.split("")
        var sp1 = sp;
        var num1 = l; 
        var num2 = 0; 
        while(num1>=0 && num2<=l){
            if(sp[num1] == sp1[num2]){
                status = word+" is a palindrome";
            }
            else {
                status = word+" is not a palindrome";
            }
            num1--;
            num2++;
        }
        document.write(status)
    }
    palindrome(word);
