// function timeLogger(date, text) {
//     console.log(`${date}: ${text}`);
// }


// function loggerBuilder(date) {
//     return function (text) {
//         function customLogger(text) {
//             // timeLogger(date, text);
//             console.log(`${date}: ${text}`);
//         }
//         return customLogger;
//     }
// }


function loggerBuilder(date) {
    return function (text) {
        // timeLogger(date, text);
        console.log(`${date}: ${text}`);
    }
}

const logger = loggerBuilder('05.03.2024');
const yesterdayLogger = loggerBuilder('04.03.2024');
// timeLogger('05.03.2024', 'Hello Pesho');

logger('Hello Pesho');
yesterdayLogger('Hello Pesho');
logger('Hello Gosho');
logger('Hello Stamat');