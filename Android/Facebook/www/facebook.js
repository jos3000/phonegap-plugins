(function(){
    /**
     * Constructor
     */
    function Facebook() {};

    /**
     * Logs into facebook
     *
     * @param app_id        Your facebook app_id
     * @param callback      called when logged in
     */
    Facebook.prototype.authorize = function(app_id, callback) {
        PhoneGap.exec(callback, null, "FacebookAuth", "authorize", [app_id]);
    };

    Facebook.prototype.reauthorize = function(app_id, token, expires, callback) {
        PhoneGap.exec(callback, null, "FacebookAuth", "reauthorize", [app_id, token, expires]);
    };

    Facebook.prototype.setPermissions = function(permissions, callback) {
        PhoneGap.exec(callback, null, "FacebookAuth", "setPermissions", permissions);
    };

    Facebook.prototype.request = function(path, callback) {
        PhoneGap.exec(callback, null, "FacebookAuth", "request", [path]);
    };

    Facebook.prototype.getAccess = function(callback) {
        PhoneGap.exec(callback, null, "FacebookAuth", "getAccess", []);
    };

    /**
     * Load Plugin
     */
    PhoneGap.addConstructor(function() {
        PhoneGap.addPlugin("facebook", new Facebook());
        PluginManager.addService("FacebookAuth", "com.hipsnip.plugins.facebook.FacebookAuth");
    });

})();
