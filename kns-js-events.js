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

function KNS(config) {
    this.app_configs = config.app_configs;
    this.event_domain = this.event_domain;
    this.callback = typeof(config.callback) !== 'undefined' ? config.callback : false;
    this.kns_system_version = typeof(config.kns_system_version) !== 'undefined' ? config.kns_system_version : "blue";
    this.base_event_url = "https://cs.kobj.net/" + this.kns_system_version + "/" + this.event_domain + "/";
}

KNS.prototype.url_from_struct(struct) {
    var urls = [];
}

KNS.prototype.signal_event = function()  {
    //For debugging. Typically the browser disallows an ajax request like this
    // going to a different host. Need to find a workaround.
    console.log(url);
    $.ajax({
        url: url,
        success: callback
    });
};
