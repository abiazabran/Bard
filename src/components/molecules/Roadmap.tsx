import { Navigation } from 'swiper/modules';
import { textStroke } from '../../utils/text-stroke';
export { Navigation, Pagination, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const carouselResponsive = {
  0: {
    slidesPerView: 1,
    spaceBetween: 16,
    // slidesPerGroup: 1,
  },
  375: {
    slidesPerView: 1,
    spaceBetween: 16,
    // slidesPerGroup: 1,
  },
  500: {
    slidesPerView: 1.3,
    // slidesPerGroup: 1,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 14,
    // slidesPerGroup: 2,
  },
  768: {
    slidesPerView: 2.5,
    // slidesPerGroup: 2,
    spaceBetween: 16,
  },
  1024: {
    slidesPerView: 4,
    slidesPerGroup: 4,
  },
};

const data = [
  {
    title: '2024 q1:',
    points: [
      'Team Building: Building the project team.',
      'Platform Backend Development: bulding backend capabilities for the platform',
      'Marketing Partnerships Development: Establishing and developing marketing partnerships.',
    ],
  },
  {
    title: '2024 Q2:',
    points: [
      'Token Launch: Official release of the cryptocurrency token and pinksale presale.',
      'Community Building and Hype: Generating interest and building a user base.',
      'CMC and CG Listings: Getting the token listed on CoinMarketCap and CoinGecko.',
      'Platform Development and Beta Release: Progressing platform development and launching a beta version',
    ],
  },
  {
    title: '2024 Q3:',
    points: [
      'Full Platform Release: Official launch of the complete platform.',
      ' Greater Team Expansion: Expanding the team to support growth.',
      'Bigger CEX Listings: Securing listings on prominent centralized exchanges.',
      'Becoming the Biggest Meme Token with Utility: Becoming the leading meme token in the industry.',
    ],
  },
  {
    title: '2024 Q4:',
    points: [
      "User Acquisition: Actively increasing the platform's user base.",

      'Platform Growth: Focusing on the expansion and scaling of the platform.',

      'Mass Adoption: Broadening the user base to achieve widespread use.',

      'Token Staking and Voting Release: Introducing features like token staking and voting mechanisms.',

      'Bigger Marketing and Justice Bird Adoption: Enhancing marketing efforts and pushing the Justice Bird mascot, potentially releasing a cartoon mini-show and plush toys.',
    ],
  },
];

export function Roadmap() {
  return (
    <div className="py-16">
      <div className="flex flex-col items-center mb-5">
        <h2 style={textStroke(4, 'black')} className="font-extrabold text-[56px] text-yellow uppercase">
          Roadmap
        </h2>
      </div>
      <div className="flex justify-center gap-2 mb-10">
        <button className="arrow-left arrow rounded-md bg-skyBlue px-2 aspect-square  border-2 border-black">
          <ArrowIcon className="rotate-180 w-6" />
        </button>
        <button className="arrow-right arrow rounded-md bg-skyBlue px-2 aspect-square  border-2 border-black">
          <ArrowIcon className="w-6" />
        </button>
      </div>
      <div className="small-container relative xl:-left-[200px] xl:-mr-[200px]">
        <Swiper
          slidesPerView={4.2}
          spaceBetween={20}
          breakpoints={carouselResponsive}
          modules={[Navigation]}
          navigation={{ nextEl: '.arrow-right', prevEl: '.arrow-left' }}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide className="hidden xl:block"></SwiperSlide>
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="space-y-6 p-4 xl:p-0">
                <p style={textStroke(3, 'black')} className="text-4xl text-skyBlue font-bold">
                  {item.title}
                </p>
                <div className="pl-6">
                  <ul className="space-y-2 list-outside list-disc uppercase font-bold">
                    {item.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <SwiperSlide className="hidden xl:block"></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

function ArrowIcon({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 16" fill="none" {...props}>
      <path
        fill="#000"
        d="m25.524 9.15-5.757 5.756a1.62 1.62 0 0 1-1.15.476 1.625 1.625 0 0 1-1.15-2.774l2.985-2.983H1.625a1.625 1.625 0 0 1 0-3.25h18.827l-2.984-2.983a1.625 1.625 0 0 1 2.299-2.298l5.757 5.757a1.625 1.625 0 0 1 0 2.298Z"
      />
    </svg>
  );
}
