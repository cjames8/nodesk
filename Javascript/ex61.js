let weekdayNumber = 2
let dayOfWeek = undefined

switch (weekdayNumber) {
    case 1:
      dayOfWeek = "Today it's Monday";
      break;
    case 2:
      dayOfWeek = "Today it's Tuesday";
      break;
    case 3:
      dayOfWeek = "Today it's Wednesday";
      break;
    case 4:
      dayOfWeek = "Today it's Thursday";
      break;
    case 5:
      dayOfWeek = "Today it's Friday";
      break;
    case 6:
      dayOfWeek = "Today it's Saturday";
      break;
    case 7:
      dayOfWeek = "Today it's Sunday";
      break;

    default:
       dayOfWeek= 'Error: Please input a number bettwen 1 and 7';
  }
console.log(dayOfWeek)