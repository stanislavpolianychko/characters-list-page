import React from 'react';
import Paths from '@/paths';
import styles from '@/styles/logo.module.css';
import Link from 'next/link';
import LanguageSystem from '@/lang';
import Image from 'next/image';

interface LogoProps {
    isSpinning: boolean;
}

const Logo: React.FC<LogoProps> = ({ isSpinning }) => {
    const logoClass: string = isSpinning
        ? `${styles.logo} ${styles.spinning}`
        : styles.logo;

    const imageElement: React.JSX.Element = (
        <Image
            className={logoClass}
            alt={
                isSpinning
                    ? LanguageSystem.getTranslation('appName')
                    : "getTranslation('appName')"
            }
            src={'/logo.svg'}
            width={48}
            height={48}
        />
    );

    return (
        <span className={logoClass}>
            {isSpinning ? (
                imageElement
            ) : (
                <Link href={Paths.Home}>{imageElement}</Link>
            )}
        </span>
    );
};

export default Logo;
