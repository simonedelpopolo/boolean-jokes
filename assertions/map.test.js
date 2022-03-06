/* eslint-disable jsdoc/require-jsdoc */
import * as tttt from 'trythistrythat'
import { map } from '../index.js'

export default async function (){
    
    tttt.describe( 'test Object [ boolean_jokes.map ]' )
    
    const test = await tttt.oki( async () => {
    
        return {
            expected: true,
            actual : await map( { yes: true }, 'yes' ),
            error: 'something went wrong'.red()
        }
    } )
    
    if( test instanceof Error ){
        console.log( 'test failed'.red() )
        tttt.failed( true )
    }else
        console.log( 'test passed'.green() )
    
    tttt.end_test( tttt.id() )
}
