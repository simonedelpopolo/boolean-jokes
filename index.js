import * as Module from 'module'
import { array_, function_, number_, object_, string_, undefined_ } from 'oftypes'

const boolean_jokes = Object.create( Module )

const type__ = {
    
    /**
     * It checks if the given argument has the right requested type.
     *
     * @param { any | Buffer} variable - The given variable to the string argument.
     * @returns {Promise|PromiseFulfilledResult<string>|PromiseRejectedResult<string>}
     */
    string_buffer: async ( variable ) => {
        
        let is_string
        
        if ( Buffer.isBuffer( variable ) === true )
            is_string = variable.toString( 'utf-8' )
        
        else if ( await string_( variable ) === true )
            is_string = variable
        
        else
            is_string = false
        
        return new Promise( ( resolve, reject ) => {
            
            if ( is_string === false )
                reject( 'no-string' )
            
            resolve( is_string )
            
        } )
        
    },
    
    map_types: async( logic, against ) => {
    
        let undef
        if ( await undefined_( logic ) === true || await undefined_( against ) === true )
            undef = false
    
        // Check if logic parameter is an Array because typeof Array are objects
        let logicArray
        if ( await array_( logic ) === true )
            logicArray = false
        
        // Check if logic parameter is a Function
        let logicFunction
        if ( await function_( logic ) === true )
            logicFunction = false
        
        // Last check logic parameter is everything else but Object
        let logicObject
        if ( await object_( logic ) === false )
            logicObject = false
    
        // Check if against parameter is an Array because typeof Array are objects
        let againstArray
        if ( await array_( against ) === true )
            againstArray = false
    
    
        // Check if against parameter is a Function
        let againstFunction
        if ( await function_( against ) === true )
            againstFunction = false
    
        // Check if against parameter is different from type string
        let againstStringNumber
        if ( number_( against ) === false && string_( against ) === false )
            againstStringNumber = false
        
        return new Promise( ( resolve, reject ) => {
            
            if( undef === false )
                reject(  ` both parameters \`logic\` && \`against\` cannot be undefined given parameter: \`logic\`->[ ${ logic } ], \`against\`->[ ${ against } ]` )
        
            if( logicArray === false )
                reject( 'this method accept only object for parameter `logic`. Given type: Array' )
            
            if( logicFunction === false )
                reject( 'this method accept only object for parameter `logic`. Given type: Function' )
            
            if( logicObject === false )
                reject( `this method accept only object for parameter \`logic\`. Given type: ${ typeof logic }` )
            
            if( againstArray === false )
                reject( 'this method accept only string or number for parameter `against`. Given type: Array' )
            
            if( againstFunction === false )
                reject( 'this method accept only string and number for parameter `against`. Given type: Function' )
            
            if( againstStringNumber === false )
                reject( `this method accept only string and number for parameter \`against\`. Given type: ${ typeof against }` )
            
            resolve( true )
        } )
    }
}

const true_falseSymbol = Symbol( 'Function true_false(Buffer|string):boolean' )
Object.defineProperty( boolean_jokes, true_falseSymbol, {
    enumerable: true,
    configurable: false,
    writable: false,
    
    /**
     * Converts only the strings "true" and "false" to boolean respectively.
     *
     * @param {Buffer | string} string - The given string argument.
     * @returns {Promise|PromiseFulfilledResult<boolean>|PromiseRejectedResult<string>}
     */
    value: async function true_false( string ) {
        
        const type_check = await type__.string_buffer( string ).catch( error => error )
        
        return new Promise( ( resolve, reject ) => {
            if ( type_check === 'no-string' )
                reject( `only string or Buffer are accepted type for \`string\` argument. Given type: ${ typeof string }` )
            
            if ( type_check !== 'false' && type_check !== 'true' )
                reject( `only the strings "true" or "false" are accepted parameters, given parameter value: ${ type_check }` )
    
            resolve( type_check === 'false' ? false : !!type_check )
        } )
    },
} )

const mapSymbol = Symbol( 'Function map(logic Object{[reference:string]:boolean}, against{string | number}):boolean' )
Object.defineProperty( boolean_jokes, mapSymbol, {
    enumerable: true,
    configurable: false,
    writable: false,
    
    /**
     * Given an object it will map the property name to the corresponding boolean value set.
     * It accepts only Object, and it will check if any of the value set for the property is a boolean and not any other type.
     *
     * @param {{[reference:string]:boolean}} logic - .
     * @param {string | number} against -  The value to be checked against the logic of the given object.
     * @returns {Promise | PromiseFulfilledResult<boolean> | PromiseRejectedResult<string>}
     */
    value: async function map( logic, against ){
        
        const types_check = await type__.map_types( logic, against ).catch( error => error )
        
        return new Promise( ( ( resolve, reject ) => {
            
            if( types_check !== true )
                reject( types_check )
            
            // Check logic parameter for every value of the properties for types different from boolean
            for ( const value in logic ) {
                if ( typeof logic [ value ] !== 'boolean' )
                    reject( `the values for the properties must be of type boolean. \n-> property name: [ ${ value } ] has wrong type value [ ${ logic[ value ] }: ${ typeof logic[ value ] } ] \n-> given \`logic\`: ${ JSON.stringify( logic ) }` )
            }
            
            // Logic routine
            for ( const [ key ] of Object.entries( logic ) ) {
                // eslint-disable-next-line eqeqeq
                if ( key == against )
                    resolve( logic[ key ] )
            }
    
            reject( `your \`against\` value haven't matched any of your \`logic\` object. given \`against\`: ${ against }` )
        } ) )
    }
} )

Object.freeze( boolean_jokes )

/**
 * Converts only the strings "true" and "false" to boolean respectively.
 *
 * @param {Buffer | string} string - The given string argument.
 * @returns {Promise|PromiseFulfilledResult<boolean>|PromiseRejectedResult<string>}
 */
export async function true_false( string ) {
    return boolean_jokes[ true_falseSymbol ]( string )
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
    return boolean_jokes[ true_falseSymbol ]( string )
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
    return boolean_jokes[ mapSymbol ]( logic, against )
        .then( boolean => boolean )
        .catch( error => error )
}
