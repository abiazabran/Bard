import { useMediaQuery } from '../../utils/useMediaQuery';
import { Container } from '../container';
import Marquee from 'react-fast-marquee';

export function Partners() {
  const isMarqueeLoop = useMediaQuery('(max-width:1280px)');
  return (
    <section id="partners" className="bg-white rounded-[55px] -mt-16 pb-14 shadow-xl shadow-[#f4dcbc]">
      <Container>
        <h2 className="uppercase text-[28px] font-bold text-center pt-10 mb-5">Official Partners</h2>
        <Marquee key={isMarqueeLoop.toString()} speed={60} play={isMarqueeLoop} className="[&_.rfm-initial-child-container]:mx-auto">
          <a target="_blank" className="inline-block scale-75" href="https://coinsult.net/projects/justice-bird/">
            <img className="w-full h-auto" src="/assets/img/partners/logo1.webp" alt=""></img>
          </a>
          <a target="_blank" className="inline-block scale-75" href="https://www.pinksale.finance/">
            <img className="w-full h-auto" src="/assets/img/partners/logo2.webp" alt=""></img>
          </a>
          <a target="_blank" className="flex items-center gap-3" href="https://www.dexview.com/">
            <img className="w-full h-auto" src="/assets/img/partners/logo3.webp" alt=""></img>
          </a>
        </Marquee>
      </Container>
    </section>
  );
}
