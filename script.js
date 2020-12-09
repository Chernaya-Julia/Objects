var myObject = {
    strProp1: "string 1", 
    numProp1: 42,
    strProp2: "string 2",
    bulProp: true
}

function getFullStrLength (pObject) {
    var strLengthFull = 0;
    for (key in pObject) {
        if (typeof(pObject[key]) == "string") {
            strLengthFull += pObject[key].length;
        }
         
    } 
    return strLengthFull;
}


console.log(getFullStrLength (myObject));