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

function VerticalShareButtons2({ isHovered, color, url }) {
  const sharingUrl = url ? url : location.href;
  return (
    <div
      className={`share-event-item absolute bottom-0 left-[50%] z-50 hidden translate-x-[-50%] translate-y-[105%] rounded-sm bg-[#f5f5f5] px-10 py-4 opacity-0 shadow-[0px_0px_4px_#b9b9b9] group-hover:block ${
        isHovered ? 'opacity-100 transition-opacity duration-700' : ''
      }`}
    >
      <FacebookShareButton url={sharingUrl}>
        <div className='mb-2 flex items-center gap-3'>
          <FacebookIcon className='rounded-full' size={32} />
          <span className={`text-sm uppercase text-gray-600 hover:text-${color}-500`}>
            Facebook
          </span>
        </div>
      </FacebookShareButton>

      <TwitterShareButton url={sharingUrl}>
        <div className='mb-2 flex items-center gap-3'>
          <XIcon className='rounded-full' size={32} />
          <span className={`text-sm uppercase text-gray-600 hover:text-${color}-500`}>Twitter</span>
        </div>
      </TwitterShareButton>

      <PinterestShareButton url={sharingUrl}>
        <div className='mb-2 flex items-center gap-3'>
          <PinterestIcon className='rounded-full' size={32} />
          <span className={`text-sm uppercase text-gray-600 hover:text-${color}-500`}>
            Pinterest
          </span>
        </div>
      </PinterestShareButton>

      <WhatsappShareButton url={sharingUrl}>
        <div className='mb-2 flex items-center gap-3'>
          <WhatsappIcon className='rounded-full' size={32} />
          <span className={`text-sm uppercase text-gray-600 hover:text-${color}-500`}>
            Whatsapp
          </span>
        </div>
      </WhatsappShareButton>

      <RedditShareButton url={sharingUrl}>
        <div className='flex items-center gap-3'>
          <RedditIcon className='rounded-full' size={32} />
          <span className={`text-sm uppercase text-gray-600 hover:text-${color}-500`}>Reddit</span>
        </div>
      </RedditShareButton>
    </div>
  );
}

export default VerticalShareButtons2;
