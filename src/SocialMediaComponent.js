import React from 'react';
import { openURL } from './openURL';
import socialMediaUrls from './socialMediaUrls'; // Import the URLs
import { Sociallinks, Wrapper, Image } from './SocialMediaStyledComponents';

// Import images
import callIcon from './images/call.png';
import whatsappIcon from './images/whatsapp.png';
import browseIcon from './images/browse.png';
import facebookIcon from './images/fb.png';
import instagramIcon from './images/insta.png';
import youtubeIcon from './images/youtube.png';
import linkedinIcon from './images/linkedin.png';
import reviewIcon from './images/rev.png';
import paytmIcon from './images/pay.png';
import Mail from './images/mail.png';
import Gallery from './images/gallery.png';
import Mapicon from './images/mapicon.svg';

// Social Media Component
const SocialMediaComponent = () => (
  <Sociallinks>
    {/* First row */}
    {socialMediaUrls.phone && (
      <Wrapper onClick={() => openURL(socialMediaUrls.phone)}>
        <Image src={callIcon} alt="Phone" height={40} />
      </Wrapper>
    )}
    {socialMediaUrls.whatsapp && (
      <Wrapper onClick={() => openURL(socialMediaUrls.whatsapp)}>
        <Image src={whatsappIcon} alt="WhatsApp" height={54} />
      </Wrapper>
    )}
    {socialMediaUrls.website && (
      <Wrapper onClick={() => openURL(socialMediaUrls.website)}>
        <Image src={browseIcon} alt="Website" height={56} />
      </Wrapper>
    )}

    {/* Second row */}
    {socialMediaUrls.facebook && (
      <Wrapper onClick={() => openURL(socialMediaUrls.facebook)}>
        <Image src={facebookIcon} alt="Facebook" height={48} />
      </Wrapper>
    )}
    {socialMediaUrls.instagram && (
      <Wrapper onClick={() => openURL(socialMediaUrls.instagram)}>
        <Image src={instagramIcon} alt="Instagram" height={65} />
      </Wrapper>
    )}
    {socialMediaUrls.youtube && (
      <Wrapper onClick={() => openURL(socialMediaUrls.youtube)}>
        <Image src={youtubeIcon} alt="Youtube" height={48} />
      </Wrapper>
    )}

    {/* Third row */}
    {socialMediaUrls.linkedin && (
      <Wrapper onClick={() => openURL(socialMediaUrls.linkedin)}>
        <Image src={linkedinIcon} alt="LinkedIn" height={48} />
      </Wrapper>
    )}
    {socialMediaUrls.googleReviews && (
      <Wrapper onClick={() => openURL(socialMediaUrls.googleReviews)}>
        <Image src={reviewIcon} alt="Google Reviews" height={65} />
      </Wrapper>
    )}
    {socialMediaUrls.paytm && (
      <Wrapper onClick={() => openURL(socialMediaUrls.paytm)}>
        <Image src={paytmIcon} alt="Paytm" height={65} />
      </Wrapper>
    )}

    {/* Fourth row */}
    {socialMediaUrls.email && (
      <Wrapper onClick={() => openURL(socialMediaUrls.email)}>
        <Image src={Mail} alt="Mail" height={75} />
      </Wrapper>
    )}
    {socialMediaUrls.maps && (
      <Wrapper onClick={() => openURL(socialMediaUrls.maps)}>
        <Image src={Mapicon} alt="Maps" height={50} />
      </Wrapper>
    )}
    {socialMediaUrls.maps && (
      <Wrapper onClick={() => openURL(socialMediaUrls.maps)}>
        <Image src={Gallery} alt="Maps" height={60} />
      </Wrapper>
    )}
  </Sociallinks>
);

export default SocialMediaComponent;
