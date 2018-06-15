const returnHigher = ( array, refferencePoint ) => array.filter( ( element ) => element > refferencePoint );

const returnMax = array => Math.max( ...array );

const sortArray = array => array.sort( ( firstElement, secondElement ) => firstElement - secondElement );

const sumArray = array => array.reduce( ( firstElement, secondElement ) => firstElement + secondElement );

const displayIndexValuePair = array => array.map( ( element, index ) => ( `index: ${ index } - element: ${ element } ` ) );

const returnSquare = array => array.map( ( element ) => element * element );

const arrayIsNumeric = array => {
    let validationBool;
    array.forEach( element => {
        if ( typeof ( element ) !== "number" ) {
            validationBool = false;
        }
    } );
    return validationBool;
};

const arrayAction = ( action, array, refferencePoint ) => {
    let arrayNumericBol = arrayIsNumeric( array );
    if ( arrayNumericBol !== false ) {
        return action( array, refferencePoint );
    }
    return "Array-ul introdus trebuie sa fie numeric";
};

export { arrayAction, returnHigher, returnMax, sortArray, sumArray, displayIndexValuePair, returnSquare };
