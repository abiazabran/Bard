import { Container } from '../container';
import { CoppyText } from '../molecules/Coppy-text';
import { textStroke } from '../../utils/text-stroke';
export function Token() {
  return (
    <section className="bg-[#FFE9D3] mt-48 pb-10 pt-6 rounded-[70px]">
      <Container>
        <div className="flex justify-center items-center font-extrabold mb-10">
          <div>
            <h2 style={textStroke(4, 'black')} className="text-center uppercase text-4xl xl:text-[56px] text-yellow">
              Tokenomics
            </h2>
            <h5 className="max-w-[46ch] text-center text-xl">
              Transparency is our superpower! Join Justice Bird in making crypto safer and more rewarding, one token at a time.
            </h5>
          </div>
        </div>
        <div className="xl:flex xl:justify-between gap-16">
          <div className="flex justify-center">
            <img className="w-full max-w-[600px] h-auto" src="/assets/svg/pie-chart.svg" alt="" />
          </div>
          <div className=" mt-[72px] text-3xl xl:text-[36px] xl:pr-7 xl:-right-7 relative font-bold leading-8">
            <div className="flex items-center mb-4 gap-2 pr-10">
              <div className="xl:min-w-[66px] min-w-10 max-w-10 xl:max-w-[66px] aspect-square bg-skyBlue border-4 border-black "></div>
              <h5 style={textStroke(3, 'black')} className="text-skyBlue">
                Tokens For Presale 30% 300,000,000
              </h5>
            </div>
            <div className="flex items-center mb-4 gap-2 pr-10">
              <div className=" xl:min-w-[66px] min-w-10 max-w-10 xl:max-w-[66px] aspect-square bg-navy border-4 border-black "></div>
              <h5 style={textStroke(3, 'black')} className="text-navy">
                Tokens For Liquidity 18% 180,000,000
              </h5>
            </div>
            <div className="flex items-center mb-4 gap-2 pr-10">
              <div className=" xl:min-w-[66px] min-w-10 max-w-10 xl:max-w-[66px] aspect-square bg-yellow border-4 border-black "></div>
              <h5 style={textStroke(3, 'black')} className="text-yellow">
                parthners and team 19% 190,000,000
              </h5>
            </div>
            <div className="flex items-center mb-4 gap-2 pr-10">
              <div className=" xl:min-w-[66px] min-w-10 max-w-10 xl:max-w-[66px] aspect-square bg-[#F178B6] border-4 border-black "></div>
              <h5 style={textStroke(3, 'black')} className="text-[#F178B6]">
                cex listings 10% &nbsp; &nbsp; &nbsp; &nbsp; 100,000,000
              </h5>
            </div>
            <div className="flex items-center mb-4 gap-2 pr-10">
              <div className="xl:min-w-[66px] min-w-10 max-w-10 xl:max-w-[66px] aspect-square bg-white border-4 border-black "></div>
              <h5 style={textStroke(3, 'black')} className="text-white">
                Kols And marketing 12% 120,000,000
              </h5>
            </div>
            <div className="flex items-center mb-4 gap-2 pr-10">
              <div className="xl:min-w-[66px] min-w-10 max-w-10 xl:max-w-[66px] aspect-square bg-[#FCDDEC] border-4 border-black "></div>
              <h5 style={textStroke(3, 'black')} className="text-[#FCDDEC]">
                plafrom rewrads 11% 110,000,000
              </h5>
            </div>
          </div>
        </div>

        <CoppyText />
      </Container>
    </section>
  );
}
