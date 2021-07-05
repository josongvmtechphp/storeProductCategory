module.exports = function sortCategoriesForInsert(inputJson) {
    let properJsonOutput = []; let nullObj;
    let nullObjs = inputJson.filter(function (inputVal, index) {
        if (inputVal.parent_id == null && Number.isNaN(parseInt(inputVal.parent_id))) {
            inputJson.splice(index, 1);

            return true;
        }
    });
    nullObjs.sort((element1, element2) => {
        elementId1 = (element1.id && parseInt(element1.id) > 0) ? parseInt(element1.id) : 0;
        elementId2 = (element2.id && parseInt(element2.id) > 0) ? parseInt(element2.id) : 0;

        return elementId1 - elementId2;
    });    
    for (nullObj of nullObjs) {
        if (nullObj.id && parseInt(nullObj.id) > 0) {
            properJsonOutput.push(nullObj);
            properJsonOutput = [...properJsonOutput, ...getChildCategories(inputJson, nullObj.id)];
        }
    }
    
    return properJsonOutput
}

function getChildCategories(inputJson, parentId) {
    let output = [], childObj;
    let childObjs = inputJson.filter(function(inputObj, objIndex) {
        if (inputObj.parent_id && parseInt(inputObj.parent_id) == parseInt(parentId)) {
            inputJson.splice(objIndex, 1);

            return true;
        }
    });
    childObjs.sort((element1, element2) => {
        elementId1 = (element1.id && parseInt(element1.id) > 0) ? parseInt(element1.id) : 0;
        elementId2 = (element2.id && parseInt(element2.id) > 0) ? parseInt(element2.id) : 0;

        return elementId1 - elementId2;
    });
    for (childObj of childObjs) {
        if (childObj.id && parseInt(childObj.id) > 0) {
            output.push(childObj);
            output = [...output, ...getChildCategories(inputJson, childObj.id)];
        }
    }

    return output;
}