exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./ratings/create.event.spec.js'],

    suites: {
        smoke: './smoke/*.spec.js',
        longRunning: './ratings/longRunning.spec.js',
        full:'./**/*.spec.js'
    },

    onPrepare: function(){
        browser.driver.manage().window().setPosition(0,0);
        browser.driver.manage().window().setSize(1280,720);
    }
}