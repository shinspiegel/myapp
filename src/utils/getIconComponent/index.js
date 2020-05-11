import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaBehance,
  FaGithub,
  FaGitlab,
} from 'react-icons/fa';

const getIconComponent = (icon) => {
  if (!icon || typeof icon !== 'string') icon = '';
  icon = icon.toLowerCase();

  switch (icon) {
    case 'facebook':
      return FaFacebookF;
    case 'instagram':
      return FaInstagram;
    case 'twitter':
      return FaTwitter;
    case 'linkedin':
      return FaLinkedin;
    case 'behance':
      return FaBehance;
    case 'github':
      return FaGithub;
    case 'gitlab':
      return FaGitlab;
    default:
      return () => <div />;
  }
};

export default getIconComponent;