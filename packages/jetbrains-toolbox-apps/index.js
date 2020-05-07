"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appChannels = exports.getJetBrainsToolboxApps = void 0;
const jetbrains_toolbox_apps_dir_1 = require("jetbrains-toolbox-apps-dir");
const bluebird_1 = require("@bluelovers/fast-glob/bluebird");
const path_1 = require("path");
function getJetBrainsToolboxApps(appDir) {
    return bluebird_1.sync([
        '*',
        '!Toolbox'
    ], {
        onlyDirectories: true,
        cwd: appDir !== null && appDir !== void 0 ? appDir : jetbrains_toolbox_apps_dir_1.getJetBrainsToolboxAppsDir(),
    });
}
exports.getJetBrainsToolboxApps = getJetBrainsToolboxApps;
function appChannels(appType, appDir) {
    return bluebird_1.sync([
        '*',
    ], {
        onlyDirectories: true,
        cwd: path_1.join(appDir !== null && appDir !== void 0 ? appDir : jetbrains_toolbox_apps_dir_1.getJetBrainsToolboxAppsDir(), appType),
    });
}
exports.appChannels = appChannels;
/*
getJetBrainsToolboxApps()
    .forEach(appType => console.dir(appChannels(appType)))
;
 */
//# sourceMappingURL=index.js.map