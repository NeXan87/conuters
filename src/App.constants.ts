export enum AppRoutePath {
    HOME = 'HOME',
    ABOUT = 'ABOUT',
    NOT_FOUND = 'NOT_FOUND',
}

export const AppRoutePaths = {
    [AppRoutePath.HOME]: '/',
    [AppRoutePath.ABOUT]: 'about',
    [AppRoutePath.NOT_FOUND]: '*',
};
