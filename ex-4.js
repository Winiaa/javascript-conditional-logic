//Exercise 4
/* นำ Exercise 2 เขียนแบบ Switch Statement */
let lightBulbStatus = "On";

//Start coding here
switch (lightBulbStatus) {
    case "On":
        console.log("ligth bulb is On.");
        break;
    case "Off":
        console.log("ligth bulb is Off.");
        break;
    case "Broken":
        console.log("ligth bulb is Broken");
        break;
    default:
        console.log("Please choose the correct input (On/Off/Broken)");
        
}