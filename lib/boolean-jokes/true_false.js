import boolean_jokes from '../boolean_jokes.js'
import { boolean_jokes__ } from './boolean_jokes__.js'

export const true_falseSymbol = Symbol( 'Function true_false(Buffer|string):boolean' )
export const true_false = Object.defineProperty( boolean_jokes, true_falseSymbol, {
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
        
        const type_check = await boolean_jokes__.string_buffer( string ).catch( error => error )
        
        return new Promise( ( resolve, reject ) => {
            if ( type_check === 'no-string' )
                reject( `only string or Buffer are accepted type for \`string\` argument. Given type: ${ typeof string }` )
            
            if ( type_check !== 'false' && type_check !== 'true' )
                reject( `only the strings "true" or "false" are accepted parameters, given parameter value: ${ type_check }` )
            
            resolve( type_check === 'false' ? false : !!type_check )
        } )
    },
} )

Object.freeze( boolean_jokes )
