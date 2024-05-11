
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import slider1 from '../../assets/images/slider1.jpg'
import slider2 from '../../assets/images/slider2.jpeg'
import slider3 from '../../assets/images/slider3.jpg'
import slider4 from '../../assets/images/slider4.jpg'
import slider5 from '../../assets/images/slider5.avif'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <div className='h-[600px]'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       <div className='w-full  rounded-lg'>
        <SwiperSlide className='relative'>
            <img className='w-full h-[500px] bg-cover' src={slider1} alt="" />
            <div className='absolute top-20 left-20'>
            <h2 className='text-4xl font-bold text-orange-600'>Home Improvement and Renovation</h2>
            <p className='text-xl font-medium'>Includes larger-scale projects such as <br /> kitchen remodeling, bathroom renovation, basement finishing,<br /> room additions, and whole-house renovations.</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
            <img className='w-full h-[500px] bg-cover' src={slider2} alt="" />
            <div className='absolute top-20 right-20'>
            <h2 className='text-4xl font-bold text-orange-600'>Home Improvement and Renovation</h2>
            <p className='text-xl font-medium'>Includes larger-scale projects such as <br /> kitchen remodeling, bathroom renovation, basement finishing,<br /> room additions, and whole-house renovations.</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
            <img className='w-full h-[500px] bg-cover' src={slider3} alt="" />
            <div className='absolute top-20 right-20'>
            <h2 className='text-4xl font-bold text-orange-600'>Home Security Services</h2>
            <p className='text-xl font-medium'>Encompasses installation and monitoring of <br />security systems, surveillance cameras,<br /> smart locks, and other home security devices.</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
            <img className='w-full h-[500px] bg-cover' src={slider4} alt="" />
            <div className='absolute top-20 left-10'>
            <h2 className='text-4xl font-bold text-orange-600'>Maintenance and Repair Services</h2>
            <p className='text-xl font-medium'>Covers various tasks such as plumbing repairs,<br /> electrical work, HVAC maintenance, appliance repair,<br /> and general handyman services.</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
            <img className='w-full h-[500px] bg-cover' src={slider5} alt="" />
            <div className='absolute top-20 right-20'>
            <h2 className='text-4xl font-bold text-orange-600'>Interior Design and Decorating</h2>
            <p className='text-xl font-medium'>Involves services related to interior design consultation, home staging,<br /> furniture arrangement, and decor selection.</p>
            </div>
        </SwiperSlide>
       </div>
       
      </Swiper>
    </div>
  );
}

