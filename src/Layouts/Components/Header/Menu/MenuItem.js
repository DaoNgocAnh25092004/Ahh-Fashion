import React, { useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, to, children }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div
            className={cx('menu-item', { 'has-children': children })}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <NavLink
                className={(nav) => cx('menu__item', { active: nav.isActive })}
                to={to}
            >
                <span>{title}</span>
            </NavLink>

            {children && isOpen && (
                <div className={cx('submenu')}>{children}</div>
            )}
        </div>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    children: PropTypes.node,
};
export default MenuItem;
