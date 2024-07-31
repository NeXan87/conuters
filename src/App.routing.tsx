import { Route, Routes } from 'react-router-dom';

import Main from './components/Main/Main';
import NotFound from './components/NotFound/NotFound';
import { About } from './pages/About/index';
import { AppRoutePaths } from './App.constants';

const RoutesByENV = (): JSX.Element => {
    return (
        <Routes>
            <Route path={AppRoutePaths.HOME} element={<Main />}>
                <Route path={AppRoutePaths.ABOUT} element={<About />} />
                <Route path={AppRoutePaths.NOT_FOUND} element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default RoutesByENV;
