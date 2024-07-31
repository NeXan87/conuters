import { Configuration } from 'webpack';

import { BuildOptions } from './types/types';

export const buildResolvers = ({ paths }: BuildOptions): Configuration['resolve'] => {
    return {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        extensionAlias: {
            '.js': ['.js', '.ts'],
            '.jsx': ['.jsx', '.tsx'],
        },
        alias: {
            '@src': paths.src,
            '@assets': paths.assets,
            '@hooks': paths.hooks,
            '@services': paths.services,
            '@components': paths.components,
            '@helpers': paths.helpers,
            '@store': paths.store,
            '@interfaces': paths.interfaces,
            '@adapters': paths.adapters,
        },
    };
};
