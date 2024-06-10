import React from 'react';
import Paths from '@/paths';
import styles from './css/logo.module.css';
import Link from 'next/link';

interface LogoProps {
    isSpinning: boolean;
}

const Logo: React.FC<LogoProps> = ({ isSpinning }) => {
    const logoClass = isSpinning
        ? `${styles.logo} ${styles.spinning}`
        : styles.logo;

    return !isSpinning ? (
        <Link href={Paths.Home}>
            <span className={logoClass}>
                <img
                    className={logoClass}
                    alt={"getTranslation('appName')"}
                    src={'/pageee-logo.svg'}
                />
            </span>
        </Link>
    ) : (
        <span className={logoClass}>
            <img
                className={logoClass}
                alt={"anguageSystem.getTranslation('appName')"}
                src={'/pageee-logo.svg'}
            />
        </span>
    );
};

export default Logo;
