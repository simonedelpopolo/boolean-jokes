// A todo assertions and statements.
console.time( 'assertions finished ' )
import { EventEmitter } from 'events'
import { ok } from 'assert/strict'

const AssertionEvent = new EventEmitter()

AssertionEvent.on( 'end', () => {
    console.log( '__________________________________________________________________________' )
    console.log()
    console.timeEnd( 'assertions finished ' )
} )

const Assertions = {
    
    assertion0 : async (  ) => {
        
        let response
        
        console.log( '__________________________________________________________________________' )
        
        console.log( '\x1b[31m assertion title', 0, '\x1b[0m' )
        console.log( '    \x1b[31m statement title', 0, '\x1b[0m' )
        
        Assertions.assertion0.statement = {
            
            '0' : ( ) => {
                console.log( '    \x1b[31m executing statement', 0, '\x1b[0m\n' )
                
                Assertions.assertion0.statement[ '0' ].message = 'test concluded'
                
                return response
            },
            
        }
        
        console.log( '---------------------------------------------------------------------------' )
        const response0 = await Assertions.assertion0.statement[ '0' ]()
        console.log( Assertions.assertion0.statement[ '0' ].message )
        console.log( 'returned response -> ',  response0 )
        
    },
}

process.argv.splice( 0, 2 )

if(  process.argv.length > 0 ){
    
    await Assertions[ process.argv ]( 0 )
    AssertionEvent.emit( 'end' )
    
}else {
    
    for( const assertion in Assertions )
        await Assertions[ assertion ]()
    
    AssertionEvent.emit( 'end' )
}

