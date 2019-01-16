/* tracking-url-generator
 * Generate tracking URLs for packages shipped with common carriers.
 */

// Vendor modules

// Internal modules

const tug = function(carrier, trackingNumber="XXXXXXXXXXXXXXX") {
    switch(carrier) {
        case "USPS":
            return `https//tools.usps.com/go/TrackConfirmAction?tLabels=${trackingNumber}`;

        case "UPS":
            return `http//wwwapps.ups.com/WebTracking/track?track=yes&trackNums=${trackingNumber}`;

        case "FedEx":
            return `http//www.fedex.com/Tracking?action=track&tracknumbers=${trackingNumber}`;

        case "LaserShip":
            return `http//www.lasership.com/track/LS${trackingNumber}`;

        case "DHL US":
            return `http//www.dhl.com/en/express/tracking.html?AWB=${trackingNumber}`;

        case "DHL Global":
            return `http//webtrack.dhlglobalmail.com/?trackingnumber=${trackingNumber}`;

        case "OnTrac":
            return `http//www.ontrac.com/trackingdetail.asp?tracking=${trackingNumber}`;

        case "ICC World":
            return `http//iccworld.com/track.asp?txtawbno=${trackingNumber}`;

        case "Canada Post":
            return `http//www.canadapost.ca/cpotools/apps/track/personal/findByTrackNumber?trackingNumber=${trackingNumber}`;

        default:
            return false;
    }
};

module.exports = tug;

