# Transition issue demo

A demonstration of a transition issue with Ember, where transition.abort() fails to abort transitions where only the query params are affected.

A 'routeWillChange' event is set on construction of the component NavTest. This triggers when the button is clicked to change the query params. The first transition has the correct 'from' and 'to' query params, and appears to be aborted, and the event triggers again with a new transition. The 'from' and 'to' query params are both for the current route. This is not aborted due to the check for the 'isAborted' property. However, the query params change to the orginal target anyway.