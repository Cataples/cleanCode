/* eslint no-param-reassign: "error" */

import { isEqual, propertyOf, isUndefined } from "underscore";

const mergeUnequalObject = ( object1, object2 ) => {
    let newObject;
    if ( !isEqual( object1, object2 ) ) {
        newObject = Object.assign( object1, object2 );
    }
    return newObject;
};

const addPropertyIfMissing = ( RefferenceObject, property, value ) => {
    if ( !propertyOf( RefferenceObject )( property ) || isUndefined( RefferenceObject.property ) ) {
        RefferenceObject[ property ] = value;
    } else {
        return "proprietatea exista deja pe obiect";
    }
    return RefferenceObject;
};

export { mergeUnequalObject, addPropertyIfMissing };
