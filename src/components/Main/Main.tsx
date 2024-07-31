import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import avatarJPG from '@assets/avatar.jpg';
import avatarPNG from '@assets/avatar.png';
import Calendar from '@assets/calendar.svg';
import { AppRoutePaths } from '@src/App.constants';

import styles from './Main.module.scss';

const Main = (): JSX.Element => {
    return (
        <>
            <div className={styles.div}>Hello World </div>
            <Link to={AppRoutePaths.ABOUT}>О Сайте</Link>
            <div>
                <img src={avatarPNG} width={100} height={100} />
                <img src={avatarJPG} width={100} height={100} />
                <Calendar fill="currentColor" className={styles.svg} width={50} height={50} />
            </div>
            <Suspense fallback="Загрузка...">
                <Outlet />
            </Suspense>
        </>
    );
};

export default Main;
