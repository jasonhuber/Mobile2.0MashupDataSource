
define('configuration/training/development', ['configuration/development', 'Mobile/Training/ApplicationModule'], 
function(baseConfiguration, TrainingApplicationModule) {
    return mergeConfiguration(baseConfiguration, {
        modules: [
            new TrainingApplicationModule()
        ]
    });
});