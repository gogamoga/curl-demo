(function(curl) {
    curl.config({
        packages: [
            { name: 'hogan', location: './node_modules/hogan.js/web/builds/2.0.0', main: 'hogan-2.0.0.amd.js' },
            { name: 'app', location: './', main: 'app.js' }
        ]
    });

    curl(['app']).then(
        function (app) {
            uiapp();
        },
        function (err) {
            console.log("FAILED TO LOAD!", err);
        }
    );
})(curl);
