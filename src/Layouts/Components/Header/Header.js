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
import Button from '~/components/Button';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Header() {


    return (
        <header className={cx('header')}>
            <div>
                <div className='header__logo'>
                    <div className='btn--seach'><input type="text" placeholder="Tìm kiếm..." /></div>
                    <img src={images.logo} alt="logo" />
                    <Button outline rightIcon={<FontAwesomeIcon icon={faPlus} />}>Liên hệ với chúng tôi</Button>
                </div>
                <div className='header__info'>
                    <Menu>
                        <MenuItem title="HOME" to={config.routes.home} icon={<FontAwesomeIcon icon={faHome} />} />
                        <MenuItem title="ALL FRODUCT" to={config.routes.allProduct} icon={null} />
                        <MenuItem className={cx("listShirt")} title="TOPS" to={config.routes.topProduct} icon={null} >
                            {/* <MenuItem title="SHIRT" to={config.routes.shirt} />
                            <MenuItem title="T-SHIRT" to={config.routes.tshirt} />
                            <MenuItem title="STYLE DRESS" to={config.routes.style} /> */}
                        </MenuItem>
                        <MenuItem className={cx("listShort")} title="BOTTOMS" to={config.routes.bottomProduct} icon={null} >
                            {/* <MenuItem title="SHORTS" to={config.routes.shorts} />
                            <MenuItem title="TROUSER" to={config.routes.trouser} /> */}
                        </MenuItem>
                        <MenuItem title="OUTERWEAR" to={config.routes.Outerwear} icon={null} />
                        <MenuItem title="ACCESSORIES" to={config.routes.accessories} icon={null} />
                        <MenuItem className={cx("listDiscount")} title="SALE" to={config.routes.sale} icon={null} >
                            {/* <MenuItem title="Discount 10%" to={config.routes.discount10} />
                            <MenuItem title="Discount 20%" to={config.routes.discount20} />
                            <MenuItem title="Clearance Sale" to={config.routes.clearanceSale} /> */}
                        </MenuItem>
                    </Menu>
                    <div className={cx("list--icon")}>
                        <FontAwesomeIcon icon={faHeart} className={cx("icon", "heart-icon")} to={config.routes.favourite} />
                        <div className={cx("user-container")}>
                            <FontAwesomeIcon icon={faUser} className={cx("icon", "user-icon")} />
                            {/* <div className={cx("list-btn")}>
                                <span className={cx("login-text")}>Đăng nhập</span>
                                <span className={cx("register-text")}>Đăng ký</span>
                            </div> */}
                        </div>
                        <FontAwesomeIcon icon={faBasketShopping} className={cx("icon", "basket-icon")} />
                    </div>
                </div>
            </div>
        </header>
    );
}

Header.propTypes = {
    children: PropTypes.node,
}
export default Header;


