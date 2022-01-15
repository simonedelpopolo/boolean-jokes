import boolean_jokes from '../boolean_jokes.js'
import { boolean_jokes__ } from './boolean_jokes__.js'

export const mapSymbol = Symbol( 'Function map(logic Object{[reference:string]:boolean}, against{string | number}):boolean' )
export const map = Object.defineProperty( boolean_jokes, mapSymbol, {
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
        
        const types_check = await boolean_jokes__.map_types( logic, against ).catch( error => error )
        
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
