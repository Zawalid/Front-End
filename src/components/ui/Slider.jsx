import { useEffect, useState } from 'react';
import { Navigation, Pagination, A11y, Keyboard, Autoplay, Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../../styles/App.css';

export default function Slider({ defaultSlidesPerView, slide, navigationIds, paginationId }) {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    function handleSlides(width) {
      if (width < 768) return 1;
      if (width < 1024) return 2;
      if (width < 1280) return 3;
      return 4;
    }
    setSlidesPerView(handleSlides(window.innerWidth));

    window.addEventListener('resize', () => {
      setSlidesPerView(handleSlides(window.innerWidth));
    });
    return () =>
      window.removeEventListener('resize', () => setSlidesPerView(handleSlides(window.innerWidth)));
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, Virtual, A11y, Keyboard]}
      spaceBetween={50}
      slidesPerView={defaultSlidesPerView || slidesPerView}
      className='my-10 p-3'
      navigation={{
        nextEl: `#${navigationIds.next}`,
        prevEl: `#${navigationIds.prev}`,
      }}
      mousewheel
      pagination={{ clickable: true, el: `#${paginationId}` }}
      autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
      keyboard={{ enabled: true, onlyInViewport: true }}
      virtual
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <SwiperSlide key={i}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
}

export function CustomPagination({ id }) {
  return <div id={id} className='static mt-10 flex justify-center gap-2'></div>;
}

export function CustomNavigation({ prevId, nextId }) {
  return (
    <div className='hidden gap-3 md:flex'>
      <button
        id={prevId}
        className='h-12 w-12 rounded-full border-2 border-text-tertiary text-text-tertiary transition-all duration-300 hover:border-text-primary hover:text-text-primary disabled:cursor-not-allowed disabled:opacity-50 '
      >
        <i className='fas fa-arrow-left'></i>
      </button>
      <button
        id={nextId}
        className='h-12 w-12 rounded-full border-2 border-text-tertiary text-text-tertiary transition-all duration-300 hover:border-text-primary hover:text-text-primary disabled:cursor-not-allowed disabled:opacity-50 '
      >
        <i className='fas fa-arrow-right'></i>
      </button>
    </div>
  );
}
