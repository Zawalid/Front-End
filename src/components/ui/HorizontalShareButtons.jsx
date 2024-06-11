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

function HorizontalShareButtons({ url, size }) {
  const sharingUrl = url ? url : location.href;
  return (
    <div className='flex gap-1'>
      <FacebookShareButton url={sharingUrl}>
        <FacebookIcon className='rounded-full' size={size} />
      </FacebookShareButton>

      <TwitterShareButton url={sharingUrl}>
        <XIcon className='rounded-full' size={size} />
      </TwitterShareButton>

      <PinterestShareButton url={sharingUrl}>
        <PinterestIcon className='rounded-full' size={size} />
      </PinterestShareButton>

      <WhatsappShareButton url={sharingUrl}>
        <WhatsappIcon className='rounded-full' size={size} />
      </WhatsappShareButton>

      <RedditShareButton url={sharingUrl}>
        <RedditIcon className='rounded-full' size={size} />
      </RedditShareButton>
    </div>
  );
}

export default HorizontalShareButtons;
