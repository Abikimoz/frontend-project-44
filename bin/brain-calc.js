#!/usr/bin/env node

import name, { userName } from '../src/cli.js';
import logic, { message } from '../src/index.js';

name();
logic();
const finalMessage = (message !== 1) ? `Let's try again, ${userName}!` : `Congratulations, ${userName}!`;
console.log(finalMessage);
