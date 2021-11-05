import { sync } from 'read-pkg-up';
import { LoadOptions } from '@storybook/core-common';

export default {
    packageJson: sync({ cwd: __dirname }).packageJson,
    framework: 'grapesjs',
    frameworkPresets: [
        require.resolve('./framework-preset-grapesjs.js')
    ],
} as LoadOptions;
