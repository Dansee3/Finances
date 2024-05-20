import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const SocialMediaBar = ({ isFooter = false }) => {
  const socialMedia = [
    {
      icon: faFacebook,
      name: 'facebook',
      path: 'https://facebook.pl',
      target: '_blank',
      rel: 'noopener noreferrer',
      backgroundClass: 'bg-blue-600',
      hoverClass: 'hover:bg-blue-500',
      colorClass: 'text-white',
    },
    {
      icon: faInstagram,
      name: 'instagram',
      path: 'https://instagram.com',
      target: '_blank',
      rel: 'noopener noreferrer',
      backgroundClass:
        'bg-gradient-to-tr from-yellow-500 via-red-500 to-pink-500',
      hoverClass: 'hover:from-yellow-600 hover:via-red-600 hover:to-pink-600',
      colorClass: 'text-white',
    },
    {
      icon: faTwitter,
      name: 'twitter',
      path: 'https://twitter.com',
      target: '_blank',
      rel: 'noopener noreferrer',
      backgroundClass: 'bg-black',
      hoverClass: 'hover:bg-gray-800',
      colorClass: 'text-white',
    },
    {
      icon: faLinkedin,
      name: 'linkedin',
      path: 'https://linkedin.com',
      target: '_blank',
      rel: 'noopener noreferrer',
      backgroundClass: 'bg-blue-800',
      hoverClass: 'hover:bg-blue-700',
      colorClass: 'text-white',
    },
    {
      icon: faYoutube,
      name: 'youtube',
      path: 'https://youtube.com',
      target: '_blank',
      rel: 'noopener noreferrer',
      backgroundClass: 'bg-red-600',
      hoverClass: 'hover:bg-red-700',
      colorClass: 'text-white',
    },
  ];

  return (
    <div className="flex mt-10">
      {socialMedia.map((socialMedia) => (
        <a
          key={socialMedia.name}
          href={socialMedia.path}
          target={socialMedia.target}
          rel={socialMedia.rel}
          className={`
          flex 
          justify-center 
          items-center 
          h-[30px]
          w-[30px]
          ${socialMedia.backgroundClass} 
          ${socialMedia.hoverClass} 
          ${socialMedia.colorClass} 
          text-xl
          mr-4
          rounded-md 
          backdrop-blur-3xl 
          `}
        >
          <FontAwesomeIcon icon={socialMedia.icon} />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaBar;
