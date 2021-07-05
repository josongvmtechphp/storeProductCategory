let sortCategoriesForInsert = require('./productCategory');

let inputObj = [

    { "name": "Kakhi Cotton Pants", "id": 113, "parent_id": 111 },

    { "name": "Accessories", "id": 1, "parent_id": 20 },

    { "name": "Men", "id": 20, "parent_id": null },

    { "name": "Watches", "id": 47, "parent_id": 1 },

    { "name": "Hats", "id": 48, "parent_id": 1 },

    { "name": "Red Hats", "id": 66, "parent_id": 48 },

    { "name": "Rado Watches", "id": 140, "parent_id": 47 },

    { "name": "Women", "id": 30, "parent_id": undefined },

    { "name": "Blue Jeans", "id": 59, "parent_id": 57 },

    { "name": "Jeans", "id": 57, "parent_id": 1113 },

    { "name": "Cotton Pants", "id": 111, "parent_id": 1113 },

    { "name": "Pants", "id": 1113, "parent_id": 30 }

];

console.log(sortCategoriesForInsert(inputObj));