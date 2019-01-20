/* tracking-url-generator
 * Generate tracking URLs for packages shipped with common carriers.
 */

// Vendor modules

// Internal modules

const tug = function(carrier, trackingNumber="XXXXXXXXXXXXXXX") {
    switch(carrier) {
        case "USPS":
            return `https://tools.usps.com/go/TrackConfirmAction?tLabels=${trackingNumber}`;

        case "UPS":
            return `https://wwwapps.ups.com/WebTracking/track?track=yes&trackNums=${trackingNumber}`;

        case "FedEx":
            return `https://www.fedex.com/Tracking?action=track&tracknumbers=${trackingNumber}`;

        case "LaserShip":
            return `https://www.lasership.com/track/LS${trackingNumber}`;

        case "DHL US":
            return `http://www.dhl.com/en/express/tracking.html?AWB=${trackingNumber}`;

        case "DHL Global":
            return `https://webtrack.dhlglobalmail.com/?trackingnumber=${trackingNumber}`;

        case "OnTrac":
            return `https://www.ontrac.com/trackingdetail.asp?tracking=${trackingNumber}`;

        case "Canada Post":
            return `https://www.canadapost.ca/cpotools/apps/track/personal/findByTrackNumber?trackingNumber=${trackingNumber}`;

        default:
            return false;
    }
};

module.exports = tug;

