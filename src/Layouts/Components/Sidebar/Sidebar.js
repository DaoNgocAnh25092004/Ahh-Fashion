import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('sidebar')}>
            <Menu>
                <MenuItem title="Bài 1" to={config.routes.bai1} />
                <MenuItem title="Bài 2" to={config.routes.bai2} />
                <MenuItem title="Bài 3" to={config.routes.bai3} />
                <MenuItem title="Bài 4" to={config.routes.bai4} />
                <MenuItem title="Bài 5" to={config.routes.bai5} />
            </Menu>
        </div>
    );
}

export default Sidebar;
