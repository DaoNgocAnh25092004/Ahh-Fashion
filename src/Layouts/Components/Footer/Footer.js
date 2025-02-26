import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('container')}>

                <div className={cx('footer-section')}>
                    <h4>Giới thiệu</h4>
                    <p>Hộ Kinh Doanh Bao GT</p>
                    <p>MST 8752797026-001 do UBND Q. Tân Bình cấp ngày 14/11/2022</p>
                </div>

                <div className={cx('footer-section')}>
                    <h4>Liên kết</h4>
                    <ul>
                        <li>Tìm kiếm</li>
                        <li>Giới thiệu</li>
                        <li>Chính sách thanh toán</li>
                        <li>Chính sách khiếu nại</li>
                        <li>Chính sách vận chuyển</li>
                        <li>Chính sách đổi trả</li>
                        <li>Chính sách bảo hành</li>
                        <li>Chính sách kiểm hàng</li>
                        <li>Chính sách bảo mật</li>
                    </ul>
                </div>

                <div className={cx('footer-section')}>
                    <h4>Thông tin liên hệ</h4>
                    <p>📍 22 Nguyễn Thái Học - Phường Tân Thành - Quận Tân Phú - TP. Hồ Chí Minh</p>
                    <p>📞 086 2642568</p>
                    <p>📜 coming soon</p>
                    <p>📧 outerity.local@gmail.com</p>
                </div>

                <div className={cx('footer-section')}>
                    <h4>Fanpage</h4>
                    <p>Sẽ được cung cấp sau</p>
                </div>
                
                

            </div>
            <div className={cx('copyright')}>
                    <p>Copyright © 2025 Outerity. Powered by Haravan</p>
                </div>
        </div>
    )
}
export default Footer
