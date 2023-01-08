#!/usr/bin/env node

import name from '../src/cli.js';
// import name, { userName } from '../src/cli.js';
import logic from '../src/index.js';
// import even, { message } from '../src/games/evenLogic.js';

name();
logic();
// const finalMessage = (message !== 1) ? `Let's try again, ${userName}!` : `Congratulations, ${userName}!`;
// console.log(finalMessage);
