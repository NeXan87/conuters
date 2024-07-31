import webpack from 'webpack';

import { BuildOptions } from './types/types';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';

export const buildWebpack = (options: BuildOptions): webpack.Configuration => {
    const { mode, paths } = options;
    const isDev = options.mode === 'development';

    return {
        devServer: isDev ? buildDevServer(options) : undefined,
        devtool: isDev && 'source-map',
        mode: mode,
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: '[name].[git-revision-hash].js',
            clean: true,
        },
        plugins: buildPlugins(options),
        resolve: buildResolvers(options),
        module: {
            rules: buildLoaders(options),
        },
    };
};
