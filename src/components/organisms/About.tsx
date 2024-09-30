import { Container } from '../container';
import { textStroke } from '../../utils/text-stroke';
export function About() {
  return (
    <section className="bg-[#FFF2E0] rounded-[70px]">
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-24">
          <div className="pt-[70px] xl:pb-[70px] flex justify-center">
            <img className="w-[564px] h-[428] rounded-[25px]" src="/assets/img/ceo-img.png" alt="" />
          </div>
          <div className="font-extrabold py-14 mb-4 xl:mb-0">
            <h2 style={textStroke(4, 'black')} className="text-[56px] text-center xl:text-left text-yellow uppercase">
              About the CEO
            </h2>

            <p className="text-navy text-xl text-justify leading-[25px]">
              EL HAY ACHENOAM, the visionary founder and CEO of Justice Bird, hails from Israel and brings a rich background in
              cryptocurrency projects to the table. With a steadfast commitment to transparency and justice, EL HAY has always envisioned a
              more accountable crypto world. This vision led him to create Justice Bird, a platform dedicated to identifying and prosecuting
              bad actors within the cryptocurrency sphere. Alongside his trusted colleague Anton, EL HAY leverages the power of community to
              restore faith and integrity in crypto transactions. Together with the symbolic Justice Bird mascot, EL HAY and Anton are on a
              mission to reclaim justice for all participants in the global crypto ecosystem.
            </p>
            <div className="leading-[25px] mt-5 text-center xl:text-start">
              <h3 style={textStroke(4, 'black')} className="text-[32px] text-yellow">
                EL HAY ACHENOAM
              </h3>
              <h4 style={textStroke(4, 'black')} className="text-xl text-white">
                CEO OF JUSTICE BIRD{' '}
              </h4>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
