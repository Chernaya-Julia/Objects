var myObject = {
    prop1: "string 1",
    prop2: 22,
    prop3: "string 2",
    prop4: 34
}

function dblFields(pObject) {
    var newFieldName;
    for (key in pObject) {
        newFieldName = key + "Clone";
        pObject[newFieldName] = null; 
    }
}

dblFields(myObject);
console.log(myObject);

