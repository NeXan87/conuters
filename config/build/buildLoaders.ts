import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ModuleOptions, RuleSetRule } from 'webpack';

import { BuildOptions } from './types/types';

export const buildLoaders = ({ mode }: BuildOptions): ModuleOptions['rules'] => {
    const isDev = mode === 'development';

    const cssLoaderWitchModules: RuleSetRule = {
        loader: 'css-loader',
        options: {
            modules: {
                localIdentName: isDev ? '[path]-[name]__[local]' : '[hash:base64:8]',
            },
        },
    };

    const cssLoader: RuleSetRule = {
        test: /\.s[ac]ss$/i,
        use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, cssLoaderWitchModules, 'sass-loader'],
    };

    const tsxLoader: RuleSetRule = {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
            },
        ],
    };

    const imageLoader: RuleSetRule = {
        test: /\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$/,
        type: 'asset/resource',
    };

    const svgLoader: RuleSetRule = {
        test: /\.svg$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                    prettier: false,
                    svgo: false,
                    svgoConfig: {
                        plugins: [{ removeViewBox: false }],
                    },
                    titleProp: true,
                    ref: true,
                },
            },
        ],
        issuer: {
            and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
        },
    };

    return [cssLoader, tsxLoader, imageLoader, svgLoader];
};
