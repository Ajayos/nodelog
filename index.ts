import * as colors from 'colors';

/**
 * Logs the specified message with an optional message type.
 *
 * @param {string} text - The message to be logged.
 * @param {string} type - The severity level of the message. Default is 'info'.
 * Can be one of: 'error' (or 'e'), 'warn' (or 'w'), 'info' (or 'i'), 'debug' (or 'd'), 'fatal' (or 'f').
 *
 * The output format for different message types is as follows:
 * - Error (or 'e'): > [x]> message (red text)
 * - Warning (or 'w'): > [!]> message (yellow text)
 * - Info (or 'i'): > [*]> message (green text)
 * - Debug (or 'd'): > [*]> message (magenta text)
 * - Fatal (or 'f'): > [!]> message (white text on red background)
 * - line (or 'l'): >-----------------------------<
 */
function log(text: string, type: string = 'info'): void {
    type = type.toLowerCase();
    // default output format
    function output() {
        console.log(`>-----------------------------<`.cyan);
    }
    // if no input is provided or default output
    if (text === undefined) return output();
    // create a map of type codes to type names
    const typeMap = {
        e: 'error',
        w: 'warn',
        i: 'info',
        d: 'debug',
        f: 'fatal',
        l: 'line'
    };

    // if the type code is recognized, set the type to its corresponding name
    type = typeMap[type] || type;

    // check the severity level and log the message with the appropriate prefix
    switch (type) {
        case 'error':
            console.log(`>`.cyan + ` [`.blue + `x`.red  + `]`.blue + `>`.cyan + ` ${text}`.red);
            break;
        case 'warn':
            console.log(`>`.cyan + ` [`.blue + `!`.yellow  + `]`.blue + `>`.cyan + ` ${text}`.yellow);
            break;
        case 'info':
            console.log(`>`.cyan + ` [`.blue + `*`.green  + `]`.blue + `>`.cyan + ` ${text}`.green );
            break;
        case 'debug':
            console.log(`>`.cyan + ` [`.blue + `*`.magenta  + `]`.blue + `>`.cyan + ` ${text}`.magenta );
            break;
        case 'fatal':
            console.log(`>`.cyan + ` [`.blue + `!`.bgRed.white  + `]`.blue + `>`.cyan + ` ${text}`.bgRed.white);
            break;
        case 'line':
            console.log(`>-----------------------------<`.cyan);
            break;
        default:
            console.log(`>`.cyan + ` [`.blue + `*`.green  + `]`.blue + `>`.cyan + ` ${text}`.green );
            break;
    }
}

global.log = log;