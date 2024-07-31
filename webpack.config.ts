import path from 'path';

import webpack from 'webpack';

import { buildWebpack } from './config/build/buildWebpack';
import { BuildPaths, EnvVariables } from './config/build/types/types';

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src/'),
        assets: path.resolve(__dirname, 'src/assets/'),
        hooks: path.resolve(__dirname, 'src/hooks/'),
        services: path.resolve(__dirname, 'src/services/'),
        components: path.resolve(__dirname, 'src/components/'),
        helpers: path.resolve(__dirname, 'src/helpers/'),
        store: path.resolve(__dirname, 'src/store/'),
        interfaces: path.resolve(__dirname, 'src/interfaces/'),
        adapters: path.resolve(__dirname, 'src/adapters/'),
    };

    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3000,
        host: env.host,
        mode: env.mode ?? 'development',
        analyzer: env.analyzer,
        paths,
    });

    return config;
};
