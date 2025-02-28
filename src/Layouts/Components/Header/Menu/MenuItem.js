import React, { useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, className, children }) {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className={cx("menu-item", className)}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}>
            <NavLink className={cx("menu-link")} to={to}>
                {icon}
                <span className={cx("title")}>{title}</span>
            </NavLink>
            {children && isDropdownOpen && <div className={cx("dropdown")}>{children}</div>}
        </div>
    );

}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
}
export default MenuItem;


