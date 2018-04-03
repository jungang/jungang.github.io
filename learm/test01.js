"use strict";
/**
 * Created by jg on 2018/4/2.
 */

console.log( 0.1 + 0.2 === 0.3 );                           //false
console.log( "11" - 2 + "1" );                              //91
console.log( "11" - 2 - "1" );                              //8
console.log(11 + + "2" - "1");                              //12
console.log( typeof "" === "string" );                      //true
console.log( typeof [] === "array" );                       //false
console.log( typeof new Number(123) );                      //object
console.log( typeof 123 );                                  //number
console.log( "hello" instanceof String );                   //false
console.log( ["item1", "item2"] instanceof Array );         //true
