import { ThreadIcon } from '../atoms/icons/thread-icon';
import { TwitterIcon } from '../atoms/icons/twitter-icon';
import { TelegramIcon } from './../atoms/icons/telegram-icon';

const socialLinks = [
  {
    id: '1',
    icon: TelegramIcon,
    link: 'www.telegram.com',
  },
  {
    id: '2',
    icon: TwitterIcon,
    link: 'www.telegram.com',
  },
  {
    id: '3',
    icon: ThreadIcon,
    link: 'www.telegram.com',
  },
];

export function Card() {
  return (
    <div className="flex justify-center">
      <div className="min-w-[300px] xl:min-w-[800px] max-w-[850px] h-[210px] xl:h-[305px] bg-white absolute z-0 rounded-[70px] -mt-[70px] shadow-xl shadow-[#FFE9D3]">
        <h1 className="text-center xl:text-[56px] uppercase font-extrabold mt-32">join THE COMMUNITY </h1>
        <div className="flex justify-center xl:gap-14">
          {socialLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a key={item.id} href={item.link} className="duration-200 hover:scale-125 hover:text-navy">
                <Icon className="w-10 md:w-12 lg:w-[70px] duration-200" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
