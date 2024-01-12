import { useAutoAnimate } from '@formkit/auto-animate/react';

export default function Section({ children }) {
  const [parent] = useAutoAnimate({ duration: 300, easing: 'ease-in-out' });

  return (
    <section className='bg-background-primary px-6 py-16' ref={parent}>
      {children}
    </section>
  );
}
