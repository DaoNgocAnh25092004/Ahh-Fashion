import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './Login.module.scss';
import BoxInput from '~/components/BoxInput';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faUser } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function Login() {
    const [forms, setForms] = useState({
        username: '',
        password: '',
    });
    const [hidePassword, setHidePassword] = useState(false);

    const [errors, setErrors] = useState({});

    const handleChangeInput = (e) => {
        const { value, name } = e.target;
        setForms((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: validateInput(name, value),
        }));
    };

    // Function return message error
    const validateInput = (name, value) => {
        const rule = validationValues[name];

        if (!rule) return null;

        if (rule.required && !value) return rule.emptyMessage;

        if (rule.regex && !rule.regex.test(value)) return rule.errorMessage;

        return null;
    };

    const validationValues = {
        username: {
            required: true,
            emptyMessage: 'Vui lòng nhập username!',

            regex: /^[a-zA-Z0-9]+$/,
            errorMessage: 'Username không được chứa ký tự đặc biệt!',
        },

        password: {
            required: true,
            emptyMessage: 'Vui lòng nhập password!',

            regex: /^(?=.*[A-Z])(?=.*\d).{6,}$/,
            errorMessage:
                'Password phải chứa ký tự in hoa, số và ít nhất 6 ký tự!',
        },
    };

    //

    const validateForm = () => {
        const errors = {};

        Object.keys(forms).forEach((field) => {
            const errorMessage = validateInput(field, forms[field]);

            if (errorMessage) {
                errors[field] = errorMessage;
            }
        });

        return errors;
    };

    const handleLogin = () => {
        const errors = validateForm();

        if (Object.keys(forms).length > 0) {
            setErrors(errors);
            return;
        }
    };

    const handleHidePassword = () => {
        setHidePassword(!hidePassword);
    };

    return (
        <div className={cx('container')}>
            <div>
                <BoxInput
                    label="Username"
                    value={forms.username}
                    name="username"
                    placeholder="Nhập username..."
                    onChange={handleChangeInput}
                    error={errors.username}
                    icon={<FontAwesomeIcon icon={faUser} />}
                />
                <BoxInput
                    label="Password"
                    value={forms.password}
                    type={hidePassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Nhập password..."
                    onChange={handleChangeInput}
                    error={errors.password}
                    icon={
                        <FontAwesomeIcon
                            onClick={handleHidePassword}
                            icon={hidePassword ? faEye : faEyeSlash}
                        />
                    }
                />

                <Button onClick={handleLogin} primary>
                    Đăng nhập
                </Button>
            </div>
        </div>
    );
}

export default Login;
