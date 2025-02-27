import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import config from '~/config';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Image from '~/components/Image';
import Menu, { MenuItem } from './Menu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('header')}>
            <div>

                <div className='header__logo'>
                    <div className='btn--seach'><input type="text" placeholder="Tìm kiếm..." /></div>
                    <img src={images.logo} alt="logo" />
                    <button className='btn--chat'>Liên hệ với chúng tôi</button>
                </div>
                <div className='header__info'>
                    <Menu>
                        <MenuItem title="HOME" to={config.routes.home} icon={<FontAwesomeIcon icon={faHome} />} />
                        <MenuItem title="ALL FRODUCT" to={config.routes.home} icon={null} />
                        <MenuItem title="TOPS" to={config.routes.home} icon={null} />
                        <MenuItem title="BOTTOMS" to={config.routes.home} icon={null} />
                        <MenuItem title="OUTERWEAR" to={config.routes.home} icon={null} />
                        <MenuItem title="ACCESSORIES" to={config.routes.home} icon={null} />
                        <MenuItem title="SALE" to={config.routes.home} icon={null} />

                    </Menu>
                    <div className={cx("list--icon")}>
                        <FontAwesomeIcon icon={faHeart} className={cx("icon", "heart-icon")} />
                        <FontAwesomeIcon icon={faUser} className={cx("icon", "user-icon")} />
                        <FontAwesomeIcon icon={faBasketShopping} className={cx("icon", "basket-icon")} />
                    </div>
                </div>
            </div>



        </header>

    );

}

Header.propTypes = {
    children: PropTypes.node.isRequired,
}
export default Header;


