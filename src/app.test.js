import { arrayAction, returnHigher, returnMax, sortArray, sumArray, displayIndexValuePair, returnSquare } from "./app";
import { mergeUnequalObject, addPropertyIfMissing, cloneObjectWithNewProperty } from "./underscorefunctions";

const arr = [ 1, 2, 2, 4, 4, 11, 22, 3, 44, 10, 34, 3, 14 ];
const nonNumArr = [ "a", "b", "c", 12, 2 ];
const emptyArray = [ ];

const car = {
    wheels: 4,
    color: "red"
};

const dacia = {
    seats: 6,
    country: undefined
};

const nonNumericOrEmptyArray = ( action, array, refferencePoint ) => {
    it( "testing with non numeric/ empty array", () => {
        expect( arrayAction( action, array, refferencePoint ) ).toBe( "Array-ul introdus trebuie sa fie numeric" );
    } );
};

describe( "array tests", () => {
    describe( "return higher tests", () => {
        it( "return all higher values then the given value", () => {
            expect( arrayAction( returnHigher, arr, 34 ) ).toEqual( [ 44 ] );
        } );
        nonNumericOrEmptyArray( returnHigher, nonNumArr, 34 );
        nonNumericOrEmptyArray( returnHigher, emptyArray, 34 );
    } );

    describe( "return max value from array tests", () => {
        it( "return max value from given array", () => {
            expect( arrayAction( returnMax, arr ) ).toEqual( 44 );
        } );
        nonNumericOrEmptyArray( returnMax, nonNumArr, 34 );
        nonNumericOrEmptyArray( returnMax, emptyArray, 34 );
    } );

    describe( "testing with sorted array", () => {
        it( "return sorted array", () => {
            expect( arrayAction( sortArray, arr ) ).toEqual( [ 1, 2, 2, 3, 3, 4, 4, 10, 11, 14, 22, 34, 44 ] );
        } );
        nonNumericOrEmptyArray( sortArray, nonNumArr, 34 );
        nonNumericOrEmptyArray( sortArray, emptyArray, 34 );
    } );

    describe( "testing with summing the arrays", () => {
        it( "return array sum", () => {
            expect( arrayAction( sumArray, arr ) ).toEqual( 154 );
        } );
        nonNumericOrEmptyArray( sumArray, nonNumArr, 34 );
        nonNumericOrEmptyArray( sumArray, emptyArray, 34 );
    } );

    describe( "testing key value pairs", () => {
        it( "test passed with not equal", () => {
            expect( arrayAction( displayIndexValuePair, arr ) ).not.toEqual( "test" );
        } );
        nonNumericOrEmptyArray( displayIndexValuePair, nonNumArr, 34 );
        nonNumericOrEmptyArray( displayIndexValuePair, emptyArray, 34 );
    } );

    describe( "testing square", () => {
        it( "due to previous actions on array, tests will pass with .not", () => {
            expect( arrayAction( returnSquare, arr ) ).not.toEqual( [ 1, 4, 4, 16, 16, 121, 484, 9, 1936, 100, 1156, 9, 196 ] );
        } );
        nonNumericOrEmptyArray( returnSquare, nonNumArr, 34 );
        nonNumericOrEmptyArray( returnSquare, emptyArray, 34 );
    } );
} );

describe( "objects tests", () => {
    test( "test merging unequal objects", () => {
        expect( mergeUnequalObject( car, dacia ) ).toEqual( {
            wheels: 4,
            color: "red",
            seats: 6,
            country: undefined
        } );
    } );

    test( "add property if it's missing", () => {
        expect( addPropertyIfMissing( car, "country", "Romania" ) ).toEqual( {
            color: "red",
            wheels: 4,
            country: "Romania"
        } );
    } );

    test( "add property if it's undefined", () => {
        expect( addPropertyIfMissing( dacia, "country", "Romania" ) ).toEqual( {
            seats: 6,
            country: "Romania"
        } );
    } );

    test( "create a new object with a new property", () => {
        expect( cloneObjectWithNewProperty( dacia, "frane", "slabe tare" ) ).toEqual( {
            seats: 6,
            country: "Romania",
            frane: "slabe tare"
        } );
    } );
} );
