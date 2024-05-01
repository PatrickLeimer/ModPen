import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <header className='py-6'>
            <div className='container mx-auto rounded'>
                <div className='flex justify-between items-center'>
                    <p className='font-bold text-sm text-black text-primary'>The Future of Writing. ModPen LLC Copyright. </p>
                    <div className="flex text-black">
                        <FontAwesomeIcon icon={faInstagram} size="1x" className="mx-2" />
                        <FontAwesomeIcon icon={faFacebook} size="1x" className="mx-2" />
                        <FontAwesomeIcon icon={faTwitter} size="1x" className="mx-2" />
                    </div>
                </div>
            </div>
        </header>
    );
}
