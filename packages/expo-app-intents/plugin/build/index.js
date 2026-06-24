"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    withAppIntents: null
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
    get withAppIntents () {
        return _withAppIntents.default;
    }
});
const _withAppIntents = /*#__PURE__*/ _interop_require_default(require("./withAppIntents"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (props = {})=>[
        'expo-app-intents',
        props
    ];

//# sourceMappingURL=index.js.map
