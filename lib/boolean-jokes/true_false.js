import boolean_jokes from '../boolean_jokes.js'
import { string_buffer } from './functions/string_buffer.js'

const true_falseSymbol = Symbol( 'Object [ boolean_jokes.true_false ]' )
const true_false = Object.defineProperty( boolean_jokes, true_falseSymbol, {
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
        
        const type_check = await string_buffer( string ).catch( error => error )
        
        return new Promise( ( resolve, reject ) => {
            if ( type_check === 'no-string' )
                reject( `only string or Buffer are accepted type for \`string\` argument. Given type: ${ typeof string }` )
            
            if ( type_check !== 'false' && type_check !== 'true' )
                reject( `only the strings "true" or "false" are accepted parameters, given parameter value: ${ type_check }` )
            
            resolve( type_check === 'false' ? false : !!type_check )
        } )
    },
} )

export default true_false[ true_falseSymbol ]
