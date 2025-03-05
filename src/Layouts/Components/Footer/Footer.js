import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { Google, Facebook, Tiktok } from "~/components/Icons";

import logo from '~/assets/images/boconthuong.png';
import image1 from '~/assets/images/img1.jpg';
import image2 from '~/assets/images/img2.jpg';
import image3 from '~/assets/images/img3.jpg';
import image4 from '~/assets/images/img4.jpg';
import image5 from '~/assets/images/img5.jpg';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('container')}>
                <div className={cx('footer-section')}>
                    <h4>Giới thiệu</h4>
                    <p>Hộ Kinh Doanh Bao GT</p>
                    <p>
                        MST 8752797026-001 do UBND Q. Tân Bình cấp ngày
                        14/11/2022
                    </p>
                    <img src={logo} alt="logo" />
                </div>

                <div className={cx('footer-section')}>
                    <h4>Liên kết</h4>
                    <ul>
                        <li>Tìm kiếm sản phẩm</li>
                        <li>Giới thiệu về sản phẩm</li>
                        <li>Chính sách thanh toán</li>
                        <li>Chính sách khiếu nại</li>
                        <li>Chính sách giao và vận chuyển</li>
                        <li>Chính sách yêu cầu đổi trả</li>
                        <li>Chính sách bảo hành</li>
                        <li>Chính sách về kiểm hàng</li>
                        <li>Chính sách về bảo mật</li>
                    </ul>
                </div>

                <div className={cx('footer-section')}>
                    <h4>Thông tin liên hệ</h4>
                    <p>
                        📍 22 Nguyễn Thái Học - Phường Tân Thành - Quận Tân Phú
                        - TP. Hồ Chí Minh
                    </p>
                    <p>📞 086 2642568</p>
                    <p>📜 coming soon</p>
                    <p>📧 outerity.local@gmail.com</p>
                    <div className={cx('social-icons')}>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Facebook className={cx('icon')} />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Tiktok className={cx('icon')} />
                        </a>
                        <a
                            href="https://google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Google className={cx('icon')} />
                        </a>
                    </div>
                </div>

                <div className={cx('footer-section')}>
                    <h4>Instagram</h4>
                    <div className={cx('instagram-grid')}>
                        <Image src={image1} alt="Instagram 1" />
                        <Image src={image2} alt="Instagram 2" />
                        <Image src={image3} alt="Instagram 3" />
                        <Image src={image4} alt="Instagram 4" />
                        <Image src={image5} alt="Instagram 3" />
                        <Image src={image1} alt="Instagram 1" />
                    </div>
                </div>
            </div>
            <div className={cx('copyright')}>
                <p>Copyright © 2025 Outerity. Powered by Haravan</p>
            </div>
        </div>
    );
}
export default Footer;
