/**
 * Created by user on 2020/5/7.
 */

import winAppdataLocal from 'win-appdata-local';
import { platform, homedir, type } from 'os';
import { join } from 'path';

export function getJetBrainsToolboxAppsDir()
{
	let base: string;

	switch (platform())
	{
		case 'win32':
			base = winAppdataLocal()
			break;
		case 'darwin':
			base = join(homedir(), 'Library', 'Application Support');
			break;
		case 'linux':
			base = join(homedir(), '.local', 'share');
			break;
		default:
			throw new Error(`not support os ${platform()}`)
	}

	return join(base, 'JetBrains', 'Toolbox', 'apps');
}

export default getJetBrainsToolboxAppsDir
