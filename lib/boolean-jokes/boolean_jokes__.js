import { array_, function_, number_, object_, string_, undefined_ } from 'oftypes'

export const boolean_jokes__ = {
    
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
