import { useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { MdLocalPhone, MdLocationPin, MdMail } from 'react-icons/md';
import { IoShareSocial } from 'react-icons/io5';
import { FaChevronDown } from 'react-icons/fa6';
import { FiCheck } from 'react-icons/fi';
import { ImSpinner5 } from 'react-icons/im';
import { HiMiniXMark } from 'react-icons/hi2';
import { Button } from '../components/ui/Button';
import { InputField } from '../components/ui/InputField';

import PageLayout from '../Layouts/PageLayout';
import { SocialMedia } from '../components/ui/SocialMedia';
import { useSendMessage } from '../hooks/useSendMessage';

export default function Contact() {
  return (
    <PageLayout title='contact' image='contact'>
      <div className='flex flex-col gap-8 md:flex-row'>
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
          className='grid h-8 w-8 place-content-center rounded-full bg-secondary text-white
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
          className='grid h-8 w-8 place-content-center rounded-full bg-secondary text-white
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
            className='grid h-8 w-8 place-content-center rounded-full bg-secondary text-white
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
            allowFullScreen={true}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            width='100%'
            height='200'
          ></iframe>
        </div>
      </div>
      <div className='flex items-center  gap-4 rounded-lg border border-border bg-background-secondary p-4'>
        <div
          className='grid h-8 w-8 place-content-center rounded-full bg-secondary text-white
        '
        >
          <IoShareSocial />
        </div>
        <div className='space-y-2'>
          <h2 className=' font-bold text-text-primary'> Social Media</h2>
          <div className='flex gap-4'>
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
}

function SendMessage() {
  const { mutate, isPending, error, isSuccess, reset } = useSendMessage();
  const [parent] = useAutoAnimate({ duration: 400 });

  const render = () => {
    if (isSuccess) return <MessageSent />;
    if (error) return <MessageError onRetry={reset} />;
    if (isPending) return <SendingMessage />;
    return <MessageForm onSend={mutate} />;
  };

  return (
    <div
      className='flex min-h-[400px] flex-[2] flex-col gap-4 rounded-lg border border-border bg-background-secondary p-5'
      ref={parent}
    >
      {render()}
    </div>
  );
}

function MessageForm({ onSend }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  return (
    <>
      <div>
        <h2 className='mb-2 text-2xl font-bold text-text-primary'>Send Message</h2>
        <p className='text-text-secondary'>
          Please fill out the form for any inquiries or feedback.
        </p>
      </div>
      <form
        className='flex flex-1 flex-col gap-4'
        onSubmit={(e) => {
          e.preventDefault();
          onSend({ name, email, phoneNumber, subject, message });
        }}
      >
        <div className='flex gap-3'>
          <InputField
            placeholder='You Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            placeholder='Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='flex gap-3'>
          <InputField
            type='tel'
            placeholder='Phone Number'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <InputField
            placeholder='Subject'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <textarea
          className='h-32 w-full resize-none rounded-lg border border-border bg-background-secondary py-1.5 pl-4 pr-10 font-medium text-text-primary outline-none md:flex-1'
          placeholder='Your Message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button className='self-start'>Send Message</Button>
      </form>
    </>
  );
}
function SendingMessage() {
  return (
    <div className='flex flex-1 items-center justify-center gap-3'>
      <ImSpinner5 className='animate-spin text-3xl text-secondary ' />
      <h2 className='text-lg font-bold text-text-primary'>Sending Message...</h2>
    </div>
  );
}
function MessageSent() {
  return (
    <div className='grid flex-1 place-content-center place-items-center text-center'>
      <div className='mb-3 grid h-14 w-14 place-content-center rounded-full bg-green-500 shadow-md'>
        <FiCheck className='text-2xl text-white' />
      </div>
      <h2 className='text-lg font-bold text-text-primary sm:text-xl md:text-2xl'>Message Sent</h2>
      <p className='text-sm font-medium text-text-secondary sm:text-base'>
        Your message was sent successfully.
      </p>
    </div>
  );
}
function MessageError({ onRetry }) {
  return (
    <div className='grid flex-1 place-content-center place-items-center text-center'>
      <div className='grid h-14 w-14 place-content-center rounded-full bg-red-500 shadow-md'>
        <HiMiniXMark className='text-3xl text-white' />
      </div>
      <div className='my-3'>
        <h2 className='text-lg font-bold text-text-primary sm:text-xl md:text-2xl'>
          Failed To Send Message
        </h2>
        <p className='text-sm font-medium text-text-secondary sm:text-base'>
          An error occurred while sending your message
        </p>
      </div>
      <Button onClick={onRetry}>Try Again</Button>
    </div>
  );
}
