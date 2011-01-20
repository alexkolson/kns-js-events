/**
 * KNS JS Events
 *
 * For the time being, requires a recent-ish version of jQuery (I need to find
 * out exactly which version) to make sending ajax requests easier.
 */

/**
 * Sends an event in a particular domain to the given ruleset.
 *
 * Near-future improvements:
 * - Dev version flag
 * - Extra query parameters
 *
 * Longer-term improvements:
 * - Sending cookies
 * - Some way of working around cross-site scripting for web apps
 *    (that won't be a concern for PhoneGap, etc.)
 */
function sendEvent(domain, event, ruleset, callback) {
    var url = "http://cs.kobj.net/blue/event/" + domain + "/" + event + "/" + ruleset;
    $.ajax({
        url: url,
        success: callback
    });
}

