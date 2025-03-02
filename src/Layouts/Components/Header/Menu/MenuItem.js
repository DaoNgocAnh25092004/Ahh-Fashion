import React, { useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon }) {
    // const [isDropdownOpen, setDropdownOpen] = useState(false);

    return (

        <NavLink  className={(nav)=>cx('menu__item',{active:nav.isActive})} to={to}>
            {icon}
            <span>{title}</span>
        </NavLink>
    );

}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    // className: PropTypes.string,
    // children: PropTypes.node,
}
export default MenuItem;


