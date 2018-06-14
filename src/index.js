import { arrayAction, returnHigher, returnMax, sortArray, sumArray, displayIndexValuePair, returnSquare } from "./app";
import { mergeUnequalObject, addPropertyIfMissing } from "./underscorefunctions";

const arr = [ 10, 8, 20, 33 ];
const car = {
    wheels: 4,
    color: "red"
};

const dacia = {
    seats: 6,
    country: "Romania"
};

arrayAction( returnHigher, arr, 10 );
arrayAction( returnMax, arr );
arrayAction( sortArray, arr );
arrayAction( sumArray, arr );
arrayAction( displayIndexValuePair, arr );
arrayAction( returnSquare, arr );

console.log( mergeUnequalObject( car, dacia ) );
console.log( addPropertyIfMissing( car, "color", "cata" ) );
