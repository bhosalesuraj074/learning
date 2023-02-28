function weekDay(day)
{
     switch (day) {
      
            case 1:
                console.log("Sunday")
              break;
              case 2:
              console.log("Monday")
            break;
            case 3:
              console.log("Tuesday")
            break;
            case 4:
              console.log("Wednesday")
            break;
            case 5:
              console.log("Thursday");
            break;
            case 6:
            console.log("Sunday")
            break;
            case 7:
                console.log("Saturday");
                break;
            
        default:
            console.error("Please enter the valid data");
            break;
     }
}

weekDay(-4);
weekDay(2);