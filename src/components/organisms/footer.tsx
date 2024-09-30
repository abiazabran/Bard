import { Logo } from '../atoms/icons/Logo';
import { Container } from '../container';
import { ThreadIcon } from '../atoms/icons/thread-icon';
import { TwitterIcon } from '../atoms/icons/twitter-icon';
import { TelegramIcon } from './../atoms/icons/telegram-icon';
import { textStroke } from '../../utils/text-stroke';
import { Link } from 'react-router-dom';
const socialLinks = [
  {
    id: '1',
    icon: TelegramIcon,
    link: 'https://t.me/JusticeBirdjubi',
  },
  {
    id: '2',
    icon: TwitterIcon,
    link: 'https://x.com/jubitoken',
  },
  {
    id: '3',
    icon: ThreadIcon,
    link: 'https://medium.com/@justicebirdjubi',
  },
];
export function Footer() {
  return (
    <footer className="bg-navy mt-16">
      <Container>
        <div className="pt-[46px]">
          <Logo />
        </div>
        <div className="grid grid-cols-6 xl:grid-cols-11 gap-5 uppercase mt-6">
          <div className="col-span-full xl:col-span-4">
            <h5 style={textStroke(3, 'black')} className="text-[26px] font-extrabold text-yellow">
              about justice bird:
            </h5>
            <p className="max-w-[40ch] text-left text-[18px] font-bold text-white">
              Meet Justice Bird (JUBI) — not just another token, but a superhero in the crypto universe, swooping in to tackle fraud
              head-on! Our mascot, Justice Bird, isn't your typical hero; he's got a knack for sniffing out scams and a fierce determination
              to clean up the blockchain, one bad actor at a time.
            </p>
          </div>
          <div className="col-span-3 xl:col-span-2 flex xl:justify-end">
            <div>
              <h5 style={textStroke(3, 'black')} className="text-[26px] font-extrabold text-yellow">
                Link
              </h5>
              <div className="flex flex-col gap-1.5">
                <Link className="text-[18px] font-bold text-white" to="/#community">
                  Community
                </Link>

                <Link className="text-[18px] font-bold text-white" to="/#partners">
                  Partners
                </Link>

                <Link className="text-[18px] font-bold text-white" to="/ReportProjects">
                  Project Report
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-3 xl:col-span-2 flex xl:justify-center">
            <div>
              <h5 style={textStroke(3, 'black')} className="text-[26px] font-extrabold text-yellow">
                Badges
              </h5>
              <div className="flex flex-col gap-1.5">
                <a className="text-[18px] font-bold text-white" href="https://coinsult.net/projects/justice-bird/">
                  Audit
                </a>
                <a className="text-[18px] font-bold text-white" href="https://www.youtube.com/@justicebirdjubi ">
                  Doxx
                </a>
                <a className="text-[18px] font-bold text-white" href="#">
                  KYC
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-full xl:col-span-3 flex xl:justify-end">
            <div>
              <h5 style={textStroke(3, 'black')} className="text-[26px] font-extrabold text-yellow">
                Contact With us
              </h5>
              <a href="mailto:main@justicebird.org" className="text-[18px] font-bold text-white">
                E-mail: main@justicebird.org.
                <div className="flex justify-start gap-10 mt-2">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a key={item.id} href={item.link} className="duration-200 hover:scale-125">
                        <Icon className="w-[40px] duration-200" />
                      </a>
                    );
                  })}
                </div>
              </a>
            </div>
          </div>
        </div>
      </Container>
      <div className="w-full h-[2.5px] bg-white mt-[50px]"></div>
      <p className="text-center text-lg uppercase font-bold text-white mt-7 pb-[36px]">Copyright © 2024 Justicebird.</p>
    </footer>
  );
}
