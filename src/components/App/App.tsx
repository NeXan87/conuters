// eslint-disable-next-line postcss-modules/no-unused-class
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import RoutesByENV from '@src/App.routing';

import ScrollToTop from '../ScrollToTop/ScrollToTop';

const App = (): JSX.Element => {
    return (
        <HelmetProvider>
            <BrowserRouter>
                <ScrollToTop />
                <RoutesByENV />
            </BrowserRouter>
        </HelmetProvider>
    );
};

export default App;
