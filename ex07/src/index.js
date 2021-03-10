function main() {

    var studlyCapVar;
    var properCamelCase;
    var titleCaseOver;

    studlyCapVar = 10;
    properCamelCase = "A string";
    titleCaseOver = 9000;
    return {
        studlyCapVar,
        properCamelCase,
        titleCaseOver,
    }
    
}

console.log(main());
module.exports = main;