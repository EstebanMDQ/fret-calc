require.config({
    paths: {
        jquery: 'libs/jquery',
        jqueryMobile: 'libs/jquery.mobile-1.3.2',
        app: 'app',
        handlebars: '../components/handlebars/handlebars'
    },
    shim: {
       "libs/jquery.mobile-1.3.2'" : { deps: ["jquery"], exports: 'jquery' },
   }
});

require(["jquery",
    "jqueryMobile",
    "app"
    ], function ($) {
        console.log('jQuery version ' + $().jquery + ' installed');
    });
