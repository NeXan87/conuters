import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import { BuildOptions } from './types/types';

export const buildDevServer = ({ port, host }: BuildOptions): DevServerConfiguration => {
    return {
        port,
        host,
        historyApiFallback: true,
        hot: true,
        open: true,
    };
};
