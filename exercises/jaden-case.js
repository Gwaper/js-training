'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase (capital) {
    return capital.substr(0,1).toUpperCase()+	
    capital.substr(1,capital.length).toLowerCase()

}


//* Begin of tests
const assert = require('assert')


// End of tests */
