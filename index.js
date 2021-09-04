// Code your solution here

//findMatching()
/* 1) returns all drivers that match the passed in name
2) returns matching drivers if case does not match but letters do
3) returns an empty array if there is no match */
/* function findMatching(driverNames, string){
    driverNames.find(function (){
        return x === string;
    });
} */

function findMatching(arrayOfDrivers, stringToMatch)
{   
    const newArrayOfDrivers = arrayOfDrivers.filter(x => x.toUpperCase() === stringToMatch.toUpperCase());

    return newArrayOfDrivers;
}

//const names = ["sally", "sammy", "bobby"];
//debugger;
//const letters = "sa"

function fuzzyMatch(arrayOfDrivers, stringOfLetters){
    const newArray = arrayOfDrivers.filter(x => x[0] + x[1] === stringOfLetters);
    return newArray;
    }

function matchName(arrayOfObjects, stringToMatch){
    //look through array for name object properties
    const newArray = arrayOfObjects.filter(x => x["name"] === stringToMatch);
    return newArray;
    //return ===stringtomatch
}


