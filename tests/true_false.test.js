import * as tttt from 'trythistrythat'
import { true_false } from '../index.js'

/**
 *
 * @param id
 */
export default async function ( id ){

    tttt.describe( 'test Object [ boolean_jokes.true_false ]' )

    const test = await tttt.oki( async () => {

        return {
            expected: false,
            actual : await true_false( 'false' ),
            error: 'something went wrong'.red()
        }
    } )

    if( test instanceof Error ){
        console.log( 'test failed'.red() )
        tttt.failed( true )
    }else
        console.log( 'test passed'.green() )

    tttt.end_test( id )
}
