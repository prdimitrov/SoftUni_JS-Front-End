function solve(input) {
    let meetings = {};
    let successfulMeetings = [];
    for (let line of input) {
        let [weekday, name] = line.split(' ');
        if (meetings.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
            continue;
        }
        meetings[weekday] = name;
        console.log(`Scheduled for ${weekday}`);
        successfulMeetings.push(`${weekday} -> ${name}`);
    }
    successfulMeetings.forEach(element => console.log(element));
}


solve(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
);
solve(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']
);