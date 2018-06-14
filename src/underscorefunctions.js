/* eslint no-param-reassign: "error" */

import { isEqual, propertyOf, isUndefined, clone, has } from "underscore";

const mergeUnequalObject = ( object1, object2 ) => {
    let newObject = {};
    if ( !isEqual( object1, object2 ) ) {
        newObject = Object.assign( newObject, object1, object2 );
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

const cloneObjectWithNewProperty = ( RefferenceObject, property, value ) => {
    if ( !has( RefferenceObject, property ) ) {
        let newObject = clone( RefferenceObject );
        newObject[ property ] = value;
        return newObject;
    }
    return "Obiectul are deja proprietatea mentionata";
};

export { mergeUnequalObject, addPropertyIfMissing, cloneObjectWithNewProperty };
