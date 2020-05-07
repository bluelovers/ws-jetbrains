import { getJetBrainsToolboxAppsDir } from 'jetbrains-toolbox-apps-dir';
import { sync as FastGlob } from '@bluelovers/fast-glob/bluebird';
import { join } from 'path';

export type IJetBrainsToolboxAppsType = 'IDEA-U' | 'WebStorm' | string;

export function getJetBrainsToolboxApps(appDir?: string): IJetBrainsToolboxAppsType[]
{
	return FastGlob([
		'*',
		'!Toolbox'
	], {
		onlyDirectories: true,
		cwd: appDir ?? getJetBrainsToolboxAppsDir(),
	})
}

export function appChannels(appType: IJetBrainsToolboxAppsType, appDir?: string)
{
	return FastGlob([
		'*',
	], {
		onlyDirectories: true,
		cwd: join(appDir ?? getJetBrainsToolboxAppsDir(), appType),
	})
}

/*
getJetBrainsToolboxApps()
	.forEach(appType => console.dir(appChannels(appType)))
;
 */
