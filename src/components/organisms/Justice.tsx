import { Container } from './../container';
import { textStroke } from '../../utils/text-stroke';
export function Justice() {
  return (
    <section className="bg-[#FFF2E0] rounded-[70px] pt-28 pb-28">
      <Container>
        <div className="flex flex-col xl:flex-row gap-5 xl:justify-between">
          <div className="order-2 xl:order-1 flex justify-center">
            <div>
              <h2
                style={textStroke(4, 'black')}
                className=" uppercase text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold text-yellow xl:text-start text-center"
              >
                What’s Justice Bird?
              </h2>
              <div className="font-bold text-navy text-xl max-w-[50ch] text-justify px-4 lg:px-0 py-3">
                <p className="mb-6">
                  Meet Justice Bird (JUBI) — not just another token, but a superhero in the crypto universe, swooping in to tackle fraud
                  head-on! Our mascot, Justice Bird, isn't your typical hero; he's got a knack for sniffing out scams and a fierce
                  determination to clean up the blockchain, one bad actor at a time
                </p>
                <p className="mb-6">
                  At Justice Bird, we turn the tables on crypto criminals with a mix of community vigilance and a dash of detective work,
                  ensuring those digital desperados have nowhere to hide. And the best part? By joining forces with us, you're not just
                  fighting crime; you're setting yourself up for potentially lucrative rewards. As we recover stolen loot, a percentage gets
                  funneled back into buying back JUBI tokens, potentially boosting their value and lining the pockets of our vigilant token
                  holders.
                </p>
                <p>
                  So, strap in and join the flight with Justice Bird, where it's not just about making the crypto world safer—it's about
                  adding a bit of fun and profit to your digital adventures!
                </p>
              </div>

              <div className="flex gap-2 mt-10 justify-center xl:justify-start">
                <button className="bg-yellow duration-200 text-black rounded-[10px] px-3 xl:px-7 py-3 font-bold text-lg lg:text-2xl mt-4 uppercase">
                  Buy Now
                </button>
                <a
                  href="#community"
                  className="bg-white inline-block duration-200 text-black rounded-[10px] px-3 xl:px-7 py-3 font-bold text-lg cursor-pointer lg:text-2xl mt-4 uppercase"
                >
                  join the community
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center xl:block order-1 xl:order-2 mt-1">
            <img className="w-[579px] h-auto" src="/assets/img/justice-bird.png" alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
}
