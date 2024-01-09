"use strict";

import os from "os";

console.log(`Platform: ${os.platform()}`);
console.log(`Release: ${os.release()}`);
console.log(`Hostname: ${os.hostname()}`);
console.log(`CPUs:`, os.cpus());
console.log(`Total Memory: ${os.totalmem() / 1024} MB`);
console.log(`Free Memory: ${os.freemem() / 1024} MB`);
console.log(`Network Interfaces:`, os.networkInterfaces());
console.log(`Constants:`, os.constants);

import EventEmitter from "events";

// create a new instance of EventEmitter
const myEmitter = new EventEmitter();

// Define an event handler function
function greet() {
  console.log("Hello.");
}

function callForAbsent() {
  console.log("Call to students who are absent.");
}

// Attach the event handler to 'myEvent' event
myEmitter.on("myEvent", greet);
myEmitter.on("Absent", callForAbsent);

// Emit the 'myEvent' event
myEmitter.emit("myEvent");
myEmitter.emit("Absent");
