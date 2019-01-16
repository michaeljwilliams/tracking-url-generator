/* tracking-url-generator
 * Generate tracking URLs for packages shipped with common carriers.
 */

// Vendor modules

// Internal modules

const tug = function(carrier, trackingNumber="XXXXXXXXXXXXXXX") {
    const carriers = {
        USPS: {
            name: "USPS",
            url: `https://tools.usps.com/go/TrackConfirmAction?tLabels=${trackingNumber}`
        },
        UPS: {
            name: "UPS",
            url: `http://wwwapps.ups.com/WebTracking/track?track=yes&trackNums=${trackingNumber}`
        },
        FedEx: {
            name: "FedEx",
            url: `http://www.fedex.com/Tracking?action=track&tracknumbers=${trackingNumber}`
        },
        LaserShip: {
            name: "LaserShip",
            url: `http://www.lasership.com/track/LS${trackingNumber}`
        },
        DHLUS: {
            name: "DHL US",
            url: `http://www.dhl.com/en/express/tracking.html?AWB=${trackingNumber}`
        },
        DHLGlobal: {
            name: "DHL Global",
            url: `http://webtrack.dhlglobalmail.com/?trackingnumber=${trackingNumber}`
        },
        OnTrac: {
            name: "OnTrac",
            url: `http://www.ontrac.com/trackingdetail.asp?tracking=${trackingNumber}`
        },
        ICCWorld: {
            name: "ICC World",
            url: `http://iccworld.com/track.asp?txtawbno=${trackingNumber}`
        },
        CanadaPost: {
            name: "Canada Post",
            url: `http://www.canadapost.ca/cpotools/apps/track/personal/findByTrackNumber?trackingNumber=${trackingNumber}`
        }
    };

    if(carriers[carrier]) {
        return carriers[carrier];
    } else {
        return false;
    }
};

module.exports = tug;

