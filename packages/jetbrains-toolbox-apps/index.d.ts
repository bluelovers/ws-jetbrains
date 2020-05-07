export declare type IJetBrainsToolboxAppsType = 'IDEA-U' | 'WebStorm' | string;
export declare function getJetBrainsToolboxApps(appDir?: string): IJetBrainsToolboxAppsType[];
export declare function appChannels(appType: IJetBrainsToolboxAppsType, appDir?: string): string[];
