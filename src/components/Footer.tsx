import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-500 text-white p-4 mt-4">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} My Website
            </p>
        </footer>
    );
};

export default Footer;
