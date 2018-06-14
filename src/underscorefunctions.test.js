import { mergeUnequalObject, addPropertyIfMissing } from "./underscorefunctions";

const car = {
    wheels: 4,
    color: "red"
};

const dacia = {
    seats: 6,
    country: undefined
};

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
