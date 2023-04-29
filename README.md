# nodelog
`@ajayos/nodelog` is a Node.js module for log messages with customizable severity levels and output formats.

## Installation
To install `@ajayos/nodelog`, run:
```shell
npm install @ajayos/nodelog
```

## Usage
First, import the module into your Node.js application:

```js
const nodelog = require('@ajayos/nodelog');
```

you can log messages with the log method:

```js
log('This is an informational message', 'info');
log('This is a warning message', 'warn');
log('This is an error message', 'error');
```
You can also log messages with the default severity level by omitting the second argument:

```js
log('This is a default message');
```

for Line
```js
log()
```

## Message Types
The following message types are available for the log method:

* `info` &nbsp;&nbsp;(or `i`): Informational message (green text)
* `warn` &nbsp;&nbsp;(or `w`): Warning message (yellow text)
* `error` (or `e`): Error message (red text)
* `debug` (or `d`): Debug message (magenta text)
* `fatal` (or `f`): Fatal message (white text on red background)
* `line` &nbsp;(or `l`): Horizontal line (cyan text)
## Output Format
The output format for each message type is as follows:

* Informational message (green text): `[timestamp] [*]> message`
* Warning message (yellow text): `[timestamp] [!]> message`
* Error message (red text): `[timestamp] [x]> message`
* Debug message (magenta text): `[timestamp] [*]> message`
* Fatal message (white text on red background): `[timestamp] [!]> message`
* Horizontal line (cyan text): `>-----------------------------<`
## License
nodelogger is released under the [`Apache-2.0`](/LICENSE) License.
