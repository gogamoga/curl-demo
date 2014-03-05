(function(curl) {
    curl.config({
        packages: [
            { name: 'hogan', location: './node_modules/hogan.js/web/builds/2.0.0', main: 'hogan-2.0.0.amd.js' },
            { name: 'uiapp', location: './', main: 'uiapp.js' }
        ]
    });

    curl(['uiapp']).then(
        function (uiapp) {
            uiapp();
        },
        function (err) {
            console.log("FAILED TO LOAD!", err);
        }
    );
})(curl);
