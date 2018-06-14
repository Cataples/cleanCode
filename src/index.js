import { arrayAction, returnHigher, returnMax, sortArray, sumArray, displayIndexValuePair, returnSquare } from "./app";
import { mergeUnequalObject, addPropertyIfMissing, cloneObjectWithNewProperty } from "./underscorefunctions";

const arr = [ 1, 2, 2, 4, 4, 11, 22, 3, 44, 10, 34, 3, 14 ];
const car = {
    wheels: 4,
    color: "red"
};

const dacia = {
    seats: 6,
    country: undefined
};

console.log( arrayAction( returnHigher, arr, 34 ) );
console.log( arrayAction( returnMax, arr ) );
console.log( arrayAction( sortArray, arr ) );
console.log( arrayAction( sumArray, arr ) );
console.log( arrayAction( displayIndexValuePair, arr ) );
console.log( arrayAction( returnSquare, arr ) );

console.log( mergeUnequalObject( car, dacia ) );
console.log( addPropertyIfMissing( dacia, "country", "ro" ) );
console.log( addPropertyIfMissing( car, "testProp", "catalin" ) );
console.log( cloneObjectWithNewProperty( dacia, "Frane", "slabe rau" ) );
