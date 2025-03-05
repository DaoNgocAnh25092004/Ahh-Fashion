import classNames from 'classnames/bind';

import styles from './BoxInput.module.scss';

const cx = classNames.bind(styles);

function BoxInput({
    label,
    error,
    icon,
    type = 'text',
    placeholder,
    value,
    onChange,
    name,
}) {
    return (
        <div className={cx('box-input')}>
            <div>{label}</div>
            <div>
                <input
                    className={cx('input', { 'input-error': error })}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                {icon}
            </div>
            {error && <p className={cx('error')}>{error}</p>}
        </div>
    );
}

export default BoxInput;
