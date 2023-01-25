

# DOM Events

Adding an event listener is pretty straightforward, select an element with a `selector` and use the `addEventListener` function to this element.

## addEventListener

The addEventListener function receive 3 arguments (altough you rarely need the third one):

- the `type` of the event (`click`, `keyup`, `input`...) [list of the events](https://developer.mozilla.org/en-US/docs/Web/Events#event_listing)
- a callback function (either an anonymous one or a named function) which will be triggered when the event happens.
