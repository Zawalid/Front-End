import { GrYoutube, GrInstagram, GrTwitter, GrLinkedin, GrFacebookOption } from 'react-icons/gr';

export function SocialMedia({ color }) {
  return (
    <>
      <a
        href='https://www.facebook.com/ofppt.page.officielle/'
        className='group grid h-8 w-8 cursor-pointer place-content-center rounded-full border border-border hover:border-transparent transition-colors duration-300 hover:bg-[#1877f2]'
      >
        <GrFacebookOption className={`transition-colors duration-300 group-hover:text-white ${color}`} />
      </a>
      <a
        href='https://www.youtube.com/c/ofpptchaineofficielle'
        className='group grid h-8 w-8 cursor-pointer place-content-center rounded-full border border-border hover:border-transparent transition-colors duration-300 hover:bg-[#ff0000]'
      >
        <GrYoutube className={`transition-colors duration-300 group-hover:text-white ${color}`} />
      </a>
      <a
        href='https://twitter.com/OFPPT_Officiel'
        className='group grid h-8 w-8 cursor-pointer place-content-center rounded-full border border-border hover:border-transparent transition-colors duration-300 hover:bg-[#1da1f2]'
      >
        <GrTwitter className={`transition-colors duration-300 group-hover:text-white ${color}`} />
      </a>
      <a
        href='https://www.instagram.com/ofppt.officiel/'
        className='group grid h-8 w-8 cursor-pointer place-content-center rounded-full border border-border hover:border-transparent transition-colors duration-300 hover:bg-[#e1306c]'
      >
        <GrInstagram className={`transition-colors duration-300 group-hover:text-white ${color}`} />
      </a>
      <a
        href='https://www.linkedin.com/company/ofpptpageofficielle/'
        className='group grid h-8 w-8 cursor-pointer place-content-center rounded-full border border-border hover:border-transparent transition-colors duration-300 hover:bg-[#0a66c2]'
      >
        <GrLinkedin className={`transition-colors duration-300 group-hover:text-white ${color}`} />
      </a>
    </>
  );
}
