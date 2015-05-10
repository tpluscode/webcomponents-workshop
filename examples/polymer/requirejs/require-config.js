requirejs.config({
    paths: {
        'cryptojs.core': "/bower_components/cryptojslib/components/core",
        'cryptojs.md5': "/bower_components/cryptojslib/components/md5"
    },
    shim: {
        'cryptojs.core': {
            exports: "CryptoJS"
        },
        'cryptojs.md5': {
            deps: ['cryptojs.core'],
            exports: "CryptoJS"
        }
    }
});