import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Button from '~/components/Button';
import config from '~/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';
import image from '~/assets/images';

const cx = classNames.bind(styles);

function Home() {
    return <div className={cx('container')}></div>;
}

export default Home;
