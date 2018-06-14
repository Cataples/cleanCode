const returnHigher = ( array, refferencePoint ) => array.filter( ( element ) => element > refferencePoint );

const returnMax = array => Math.max( ...array );

const sortArray = array => array.sort( ( firstElement, secondElement ) => firstElement > secondElement );

const sumArray = array => array.reduce( ( firstElement, secondElement ) => firstElement + secondElement );

const displayIndexValuePair = array => array.forEach( ( element, index ) => console.log( `index: ${ index } - element: ${ element } ` ) );

const returnSquare = array => array.forEach( ( element ) => console.log( element * element ) );

const ArrayIsNumeric = array => {
    let validationBool;
    array.forEach( element => {
        if ( typeof ( element ) !== "number" ) {
            validationBool = false;
        }
    } );
    return validationBool;
};

const arrayAction = ( action, array, refferencePoint ) => {
    let ArrayNumericBol = ArrayIsNumeric( array );
    if ( ArrayNumericBol !== false ) {
        console.log( action( array, refferencePoint ) );
    } else {
        console.log( "Array-ul introdus trebuie sa fie numeric" );
    }
};

export { arrayAction, returnHigher, returnMax, sortArray, sumArray, displayIndexValuePair, returnSquare };
