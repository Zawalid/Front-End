import { useState } from 'react';
import { FaShareAlt } from 'react-icons/fa';
import {
  FacebookIcon,
  FacebookShareButton,
  PinterestIcon,
  PinterestShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from 'react-share';

function VerticalShareButtons({ url }) {
  const [isShareHovered, setIsShareHovered] = useState(false);
  const sharingUrl = url ? url : location.href;
  return (
    <div className='absolute bottom-0 right-0 translate-x-[-50%] translate-y-[50%] rounded-full bg-white p-2'>
      <FaShareAlt
        color='gray'
        fill='gray'
        size={22}
        className='transition-transform hover:rotate-[-90deg]'
        onMouseEnter={() => setIsShareHovered(true)}
        onMouseLeave={() => setIsShareHovered(false)}
      />

      <div
        className={`absolute left-0 top-0 translate-y-[-100%] opacity-0 transition-opacity duration-300 ${
          isShareHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <FacebookShareButton url={sharingUrl}>
          <FacebookIcon className='rounded-full' size={36} />
        </FacebookShareButton>

        <TwitterShareButton url={sharingUrl}>
          <XIcon className='rounded-full' size={36} />
        </TwitterShareButton>

        <PinterestShareButton url={sharingUrl}>
          <PinterestIcon className='rounded-full' size={36} />
        </PinterestShareButton>

        <WhatsappShareButton url={sharingUrl}>
          <WhatsappIcon className='rounded-full' size={36} />
        </WhatsappShareButton>

        <RedditShareButton url={sharingUrl}>
          <RedditIcon className='rounded-full' size={36} />
        </RedditShareButton>
      </div>
    </div>
  );
}

export default VerticalShareButtons;
