import { GrYoutube, GrInstagram, GrTwitter, GrLinkedin, GrFacebookOption } from 'react-icons/gr';


export function SocialMedia() {
  return (
    <>
      <a
        href='https://www.facebook.com/ofppt.page.officielle/'
        className='grid h-8 w-8 cursor-pointer place-content-center rounded-full border border-border transition-colors duration-300 hover:bg-[#1877f2]'
      >
        <GrFacebookOption className='text-text-primary' />
      </a>
      <a
        href='https://www.youtube.com/c/ofpptchaineofficielle'
        className='grid h-8 w-8 cursor-pointer place-content-center rounded-full border border-border transition-colors duration-300 hover:bg-[#ff0000]'
      >
        <GrYoutube className='text-text-primary' />
      </a>
      <a
        href='https://twitter.com/OFPPT_Officiel'
        className='grid h-8 w-8 cursor-pointer place-content-center rounded-full border border-border transition-colors duration-300 hover:bg-[#1da1f2]'
      >
        <GrTwitter className='text-text-primary' />
      </a>
      <a
        href='https://www.instagram.com/ofppt.officiel/'
        className='grid h-8 w-8 cursor-pointer place-content-center rounded-full border border-border transition-colors duration-300 hover:bg-[#e1306c]'
      >
        <GrInstagram className='text-text-primary' />
      </a>
      <a
        href='https://www.linkedin.com/company/ofpptpageofficielle/'
        className='grid h-8 w-8 cursor-pointer place-content-center rounded-full border border-border transition-colors duration-300 hover:bg-[#0a66c2]'
      >
        <GrLinkedin className='text-text-primary' />
      </a>
    </>
  );
}
