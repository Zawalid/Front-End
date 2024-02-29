import PageLayout from '../Layouts/PageLayout';
import { Button } from '../components/ui/Button';
import { InputField } from '../components/ui/InputField';
import { MdLocalPhone, MdLocationPin, MdMail } from 'react-icons/md';
import { IoShareSocial } from 'react-icons/io5';
import { GrYoutube, GrInstagram, GrTwitter, GrLinkedin, GrFacebookOption } from 'react-icons/gr';
import { FaChevronDown } from 'react-icons/fa6';
import { useState } from 'react';

export default function Contact() {
  return (
    <PageLayout title='contact' image='contact'>
      <div className='flex flex-col md:flex-row gap-8'>
        <ContactInfo />
        <SendMessage />
      </div>
    </PageLayout>
  );
}

function ContactInfo() {
  const [isMapOpen, setIsMapOpen] = useState(false);
  return (
    <div className='flex flex-1 flex-col gap-3'>
      <div className='flex items-center  gap-4 rounded-lg border border-border bg-background-secondary p-4'>
        <div
          className='grid h-8 w-8 cursor-pointer place-content-center rounded-full bg-secondary text-white
        '
        >
          <MdLocalPhone />
        </div>
        <div className='space-y-2'>
          <h2 className=' font-bold text-text-primary'>Phone Number</h2>
          <a href='tel:+212537814207' className='text-sm font-medium text-text-secondary '>
            +212 0537814207
          </a>
        </div>
      </div>
      <div className='flex items-center  gap-4 rounded-lg border border-border bg-background-secondary p-4'>
        <div
          className='grid h-8 w-8 cursor-pointer place-content-center rounded-full bg-secondary text-white
        '
        >
          <MdMail />
        </div>
        <div className='space-y-2'>
          <h2 className=' font-bold text-text-primary'>Email Address</h2>
          <a href='mailto:contact@ofppt.ma' className='text-sm font-medium text-text-secondary '>
            contact@ofppt.ma
          </a>
        </div>
      </div>
      <div className='flex flex-col rounded-lg border border-border bg-background-secondary p-4'>
        <div className='flex items-center justify-between  gap-4 '>
          <div
            className='grid h-8 w-8 cursor-pointer place-content-center rounded-full bg-secondary text-white
        '
          >
            <MdLocationPin />
          </div>
          <div className='flex-1 space-y-2'>
            <h2 className=' font-bold text-text-primary'> Location</h2>
            <a
              href='https://maps.app.goo.gl/miz9LAa9i2FCbZNa7'
              target='_blank'
              rel='noreferrer'
              className='text-sm font-medium text-text-secondary '
            >
              Hay Salam, Salé, Morocco
            </a>
          </div>
          <button
            className={`text-text-primary transition-transform duration-300 ${
              isMapOpen ? 'rotate-180' : ''
            }`}
            onClick={() => setIsMapOpen((prev) => !prev)}
          >
            <FaChevronDown />
          </button>
        </div>
        <div
          className={`overflow-hidden rounded-lg transition-[height] duration-500 ${
            isMapOpen ? 'mt-3 h-40' : 'h-0'
          }`}
        >
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6612.656190811825!2d-6.784859!3d34.035454!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76a365e377477%3A0x412ef7592257e154!2sISTA%20%3A%20Institut%20Sp%C3%A9cialis%C3%A9%20de%20Technologie%20Appliqu%C3%A9e_Hay%20Salam%20Sal%C3%A9!5e0!3m2!1sfr!2sma!4v1705526202818!5m2!1sfr!2sma'
            allowfullscreen='true'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            width='100%'
            height='200'
          ></iframe>
        </div>
      </div>
      <div className='flex items-center  gap-4 rounded-lg border border-border bg-background-secondary p-4'>
        <div
          className='grid h-8 w-8 cursor-pointer place-content-center rounded-full bg-secondary text-white
        '
        >
          <IoShareSocial />
        </div>
        <div className='space-y-2'>
          <h2 className=' font-bold text-text-primary'> Social Media</h2>
          <div className='flex gap-4'>
            <a
              href='https://www.facebook.com/ofppt.page.officielle/'
              className='grid h-8 w-8 cursor-pointer place-content-center rounded-full border border-border'
            >
              <GrFacebookOption className='text-text-secondary' />
            </a>
            <a
              href='https://www.youtube.com/c/ofpptchaineofficielle'
              className='grid h-8 w-8 cursor-pointer place-content-center rounded-full border border-border'
            >
              <GrYoutube className='text-text-secondary' />
            </a>
            <a
              href='https://twitter.com/OFPPT_Officiel'
              className='grid h-8 w-8 cursor-pointer place-content-center rounded-full border border-border'
            >
              <GrTwitter className='text-text-secondary' />
            </a>
            <a
              href='https://www.instagram.com/ofppt.officiel/'
              className='grid h-8 w-8 cursor-pointer place-content-center rounded-full border border-border'
            >
              <GrInstagram className='text-text-secondary' />
            </a>
            <a
              href='https://www.linkedin.com/company/ofpptpageofficielle/'
              className='grid h-8 w-8 cursor-pointer place-content-center rounded-full border border-border'
            >
              <GrLinkedin className='text-text-secondary' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function SendMessage() {
  return (
    <div className='flex flex-[2] flex-col gap-4 rounded-lg border border-border bg-background-secondary p-5'>
      <div>
        <h2 className='mb-2 text-2xl font-bold text-text-primary'>Send Message</h2>
        <p className='text-text-secondary'>
          Please fill out the form for any inquiries or feedback.
        </p>
      </div>
      <form className='flex flex-1 flex-col gap-4'>
        <div className='flex gap-3'>
          <InputField placeholder='You Name' />
          <InputField placeholder='Email Address' />
        </div>
        <div className='flex gap-3'>
          <InputField type='tel' placeholder='Phone Number' />
          <InputField placeholder='Subject' />
        </div>
        <textarea
          className='w-full h-32 md:flex-1 resize-none rounded-lg border border-border bg-background-secondary py-1.5 pl-4 pr-10 font-medium text-text-primary outline-none'
          placeholder='Your Message'
        />
        <Button className='self-start'>Send Message</Button>
      </form>
    </div>
  );
}
