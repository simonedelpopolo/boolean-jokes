import {
    map as m, mapSymbol,
    true_false as t_f, true_falseSymbol
} from './lib/boolean-jokes/exporter.js'

/**
 * Converts only the strings "true" and "false" to boolean respectively.
 *
 * @param {Buffer | string} string - The given string argument.
 * @returns {Promise|PromiseFulfilledResult<boolean>|PromiseRejectedResult<string>}
 */
export async function true_false( string ) {
    return t_f[ true_falseSymbol ]( string )
        .then( boolean => boolean )
        .catch( error => error )
}

/**
 * Converts only the strings "true" and "false" to boolean respectively.
 *
 * @deprecated - Just for backward compatibility with previous deprecated version @simonedelpopolo/to-bool.
 * @param {Buffer | string} string - The given string argument.
 * @returns {Promise|PromiseFulfilledResult<boolean>|PromiseRejectedResult<string>}
 */
export async function bool( string ) {
    return t_f[ true_falseSymbol ]( string )
        .then( boolean => boolean )
        .catch( error => error )
}

/**
 * Given an object it will map the property name to the corresponding boolean value set.
 * It accepts only Object, and it will check if any of the value set for the property is a boolean and not any other type.
 *
 * @param {{[reference:string]:boolean}} logic - .
 * @param {string | number} against -  The value to be checked against the logic of the given object.
 * @returns {Promise | PromiseFulfilledResult<boolean> | PromiseRejectedResult<string>}
 */
export async function map( logic, against ){
    return m[ mapSymbol ]( logic, against )
        .then( boolean => boolean )
        .catch( error => error )
}
