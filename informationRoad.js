//export
function distanceInfo(distance) {
    distance = Math.round(distance);
    distance = Math.round(distance/100)/10 + " км";
    return distance;
}

function durationInfo(duration) {
    let durationMin = Math.floor(duration/60);
    let durationHour = Math.floor(durationMin/60);
    durationMin = durationMin % 60;
    let durationMinText = " мин";
    let durationHourText = "";

    switch (durationHour % 10) {
        case 1:
            durationHourText = " час ";
            break;

        case 2:
        case 3:
        case 4:
            durationHourText = " часа ";
            break;

        default:
            durationHourText = " часов ";
    }

    // switch (a) {
    //     case 1:
    //         console.log(a);
    //         durationMinText = " минута";
    //         break;
    //
    //     case 2:
    //     case 3:
    //     case 4:
    //         console.log("2,3,4 min")
    //         durationMinText = " минуты";
    //         break;
    //
    //     default:
    //         console.log("min default")
    //         durationMinText = " минут";
    // }
    if (durationHour >0){
        console.log(durationHour + durationHourText + durationMin + durationMinText);
        return (durationHour + durationHourText + durationMin + durationMinText);
    }else {
        console.log(durationMin + durationMinText);
        return (durationMin + durationMinText);
    }
}
