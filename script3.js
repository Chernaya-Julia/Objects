var myObject = {
    prop1: "string 1",
    prop2: 22,
    prop3: "string 2",
    prop4: 34,
    prop5: true,
    prop6: false
}

function dblFields(pObject) {
    var newObject = new Object();

    for (key in pObject) {
        switch (typeof(pObject[key])) { 
            case 'string': newObject[key] = pObject[key].length; break;
            case 'number': newObject[key] = pObject[key]; break;
            case 'boolean': newObject[key] = (pObject[key] == true) ? 1: 0; break;
        }
        
    }
    return newObject;
}

console.log(dblFields(myObject));


