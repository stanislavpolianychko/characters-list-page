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
            alt={LanguageSystem.getTranslation('appName')}
            src={'/logo.svg'}
            width={48}
            height={48}
        />
    );

    return (
        <span
            className={logoClass}
            aria-label={LanguageSystem.getTranslation('appName')}
        >
            {isSpinning ? (
                imageElement
            ) : (
                <Link
                    href={Paths.Home}
                    aria-label={LanguageSystem.getTranslation('appName')}
                >
                    {imageElement}
                </Link>
            )}
        </span>
    );
};

export default Logo;
