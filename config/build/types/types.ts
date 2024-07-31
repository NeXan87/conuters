export type BuildMode = 'production' | 'development';

export interface BuildPaths {
    entry: string;
    html: string;
    output: string;
    src: string;
    assets: string;
    hooks: string;
    services: string;
    components: string;
    helpers: string;
    store: string;
    interfaces: string;
    adapters: string;
}

export interface BuildOptions {
    port: number;
    host: string;
    paths: BuildPaths;
    mode: BuildMode;
    analyzer: boolean;
}

export interface EnvVariables {
    mode: BuildMode;
    port: number;
    host: string;
    analyzer: boolean;
}
