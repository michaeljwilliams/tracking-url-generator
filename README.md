# tracking-url-generator
Generate tracking URLs for packages shipped with common carriers, given carrier name and tracking number.

Example:
```js
const tug = require("tracking-url-generator");

const trackingURL = tug("Canada Post", "000000000000000");
console.log(trackingURL);
"http//www.canadapost.ca/cpotools/apps/track/personal/findByTrackNumber?trackingNumber=000000000000000"

// Unsupported carrier
const anotherTrackingURL = tug("Royal Mail", "000000000000000");
console.log(anotherTrackingURL);
false // Carrier isn't supported in this package (yet)
```

