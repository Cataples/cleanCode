import { arrayAction, returnHigher, returnMax, sortArray, sumArray, displayIndexValuePair, returnSquare } from "./app";

const arr = [ 1, 2, 2, 4, 4, 11, 22, 3, 44, 10, 34, 3, 14 ];

test( "return all higher values then the given value", () => {
    expect( arrayAction( returnHigher, arr, 34 ) ).toEqual( [ 44 ] );
} );

test( "return max value from given array", () => {
    expect( arrayAction( returnMax, arr ) ).toEqual( 44 );
} );

test( "return sorted array", () => {
    expect( arrayAction( sortArray, arr ) ).toEqual( [ 1, 2, 2, 3, 3, 4, 4, 10, 11, 14, 22, 34, 44 ] );
} );

test( "return array sum", () => {
    expect( arrayAction( sumArray, arr ) ).toEqual( 154 );
} );

test( "test failed intentionat", () => {
    expect( arrayAction( displayIndexValuePair, arr ) ).toEqual( "test" );
} );

test( "test squared numbers inside array, test will fail due to previous actions on array", () => {
    expect( arrayAction( returnSquare, arr ) ).toEqual( [ 1, 4, 4, 16, 16, 121, 484, 9, 1936, 100, 1156, 9, 196 ] );
} );
