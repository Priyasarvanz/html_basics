
//1. Write a functiom that counts the number of character
//in a string.should return the number.

function stringcount(){
string1="joy"
string2=string1.length
console.log(string2);
}
stringcount();
//stringcount();


//2. Write a function that accept 2 numbers and return largest number.
function numbers(a,b){
    
    if (a > b)
    console.log('a is bigger')
    else
    console.log('b is bigger')
}
numbers(100,20);
numbers(1002,3000);
numbers(0,1);

//3.Write a function to return a boolean flag between 5000 and 9999

function booleancheck(a,b){
    if (a >=5000 && a <= 9999 && b >= 5000 && b<= 9999)
    return true
    else
    return false
    
}
console.log(booleancheck(5000,9999));
console.log(booleancheck(70,90));
console.log(booleancheck(5001,8999));

//or Booleaan return
function booleancheck(a){
    if (a >=5000 && a <= 9999) 
    return true
    else
    return false
    
}
console.log(booleancheck(5000));
console.log(booleancheck(1000));
console.log(booleancheck(9999));

//4.Write a function that accepts a number and returns the cube root of the number

function cuberootcheck(a){
 var x=Math.cbrt(a)
 return x

}
console.log('cube root is'+' ' + cuberootcheck(27));
console.log('cube root is'+' ' + cuberootcheck(216));

//5.write a functiom that converts inches into feet.

function feetconversion(a){
   var feet = a/12
   return feet
  
}
console.log('Inches to feet is'+' ' + feetconversion(20));
console.log('Inches to feet is'+ ' '+ feetconversion(12));

// 6. Write function that converts degrees Celsius to fahrenheit

function convertfahrenheit(c){
var f = (c * 1.8) + 32
return f
}

console.log('Celsious to fahrenheit is' +' '+ convertfahrenheit(15));
console.log('Celsious to fahrenheit is' + ' '+ convertfahrenheit(0));

// 7.Write a program that converts Killo to pound and viceversa
function kilotopound(k)
{
    var p = k * 2.205
    return p
}

function poundtokilo(p){

    var k = p/2.205
     return k
}
console.log('Kilo to pound is'+' '+ kilotopound(52)+ 'kg');
console.log('pound to kilo is' +' '+ poundtokilo(72)+ 'lb');




//9.Write a javascript object or json OBJECT for cricket team, It should contain detail about the team and player.
var cricketteam = {
    "Indian team": {
        "palyer" :[
            "Sachin Tendukar",
            "Virat Kohli",
            "M.S Dhoni.",
            "Saurav Ganguly.",
            "Anil Kumble"
        ],
        "best palyer" : ["sachin", "virat"]
    },

    "Srilankan team": 
    {
        "player":[
        "Kumar Sangakkara",
        "e Silva",
        "ickwella"],
        "best player" :["Kumar Sangakkara","e Silva"]

    },
    
    "CSK Team":{
        "Captain" : "Mahendra Singh Dhoni",
        "Coach":"Stephen Fleming",
        "Owner" : "India Cements",


    }

}

console.log(cricketteam["Indian team"]);
console.log(cricketteam["Indian team"]["best palyer"]);
console.log(cricketteam["CSK Team"].Coach);


// Write a function that returns the longest string if two strings are given as input parameters.

function longestString(a, b) {
    if (a.length > b.length)
        return a;

    return b;
}

console.log(longestString('The longest string is' + ' '+ "abc asdas", "aksdkj asdfshf"));
console.log(longestString('The longest string is' + ' ' + "Saravanan", "Priya"));

//write a function that returns the string of shorest length of an array is passed a parameter.
 function shortestString([a,b]){
     if (a.length < b.length)
        return a;
     return b;

 }
 console.log(shortestString( ["sathyaaaa","pdddfdfdfdfriya"]));
 console.log(shortestString(["Javascript", "java"]));
