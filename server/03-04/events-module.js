const EventEmitter = require("events");

const event = new EventEmitter();

const handlerFunction = function () {
  console.log("hello");
};

const byeEventHandlerFunction = function () {
  console.log("bye");
};

// create event
event.on("HelloEvent", handlerFunction);

// another event created
event.on("ByeEvent", byeEventHandlerFunction);

// emit event
event.emit("HelloEvent");

// emitting second event
event.emit("ByeEvent");
