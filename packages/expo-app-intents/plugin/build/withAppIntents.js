"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    withAppIntentsValidation: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return _default;
    },
    get withAppIntentsValidation () {
        return withAppIntentsValidation;
    }
});
function _configplugins() {
    const data = require("expo/config-plugins");
    _configplugins = function() {
        return data;
    };
    return data;
}
const pkg = require('../../package.json');
const DEFAULT_DIRECTORY = 'app-intents';
function withAppIntentsValidation(config, props) {
    const watched = config.experiments?.inlineModules?.watchedDirectories;
    if (!watched || !watched.includes(props.directory)) {
        throw new Error(`expo-app-intents requires Expo Inline Modules to be enabled so that App Intents Swift files ` + `are compiled into the iOS app target (Apple's build-time metadata extraction cannot see ` + `code in pods). Configure expo.experiments.inlineModules in your app config and re-run prebuild:\n\n` + `  "experiments": { "inlineModules": { "watchedDirectories": ["${props.directory}"] } }\n\n` + `Or run \`npx expo-app-intents init\` to configure everything automatically.`);
    }
    return config;
}
const withAppIntents = (config, props)=>{
    const directory = props?.directory ?? DEFAULT_DIRECTORY;
    if (directory === 'app' || directory.startsWith('app/')) {
        _configplugins().WarningAggregator.addWarningIOS('expo-app-intents', `The configured intents directory '${directory}' is inside 'app/', which expo-router treats ` + `as the routes directory. Use a top-level 'app-intents/' directory instead.`);
    }
    return withAppIntentsValidation(config, {
        directory
    });
};
const _default = (0, _configplugins().createRunOncePlugin)(withAppIntents, pkg.name, pkg.version);

//# sourceMappingURL=withAppIntents.js.map
