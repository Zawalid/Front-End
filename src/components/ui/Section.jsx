import { useAutoAnimate } from '@formkit/auto-animate/react';

export default function Section({ children,className }) {
  const [parent] = useAutoAnimate({ duration: 300, easing: 'ease-in-out' });

  return (
    <section className={`bg-background-primary px-3 py-8 md:px-6 md:py-12 ${className || ''}`} ref={parent}>
      {children}
    </section>
  );
}
