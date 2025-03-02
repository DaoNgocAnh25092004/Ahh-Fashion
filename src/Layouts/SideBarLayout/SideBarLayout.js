import classNames from 'classnames/bind';

import styles from './SideBarLayout.module.scss';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const cx = classNames.bind(styles);

function SidebarLayout({ children }) {
    return (
        <div className={cx('container')}>
            <Header />
            <div className={cx('content')}>{children}</div>
            <Footer />
        </div>
    );
}

export default SidebarLayout;
