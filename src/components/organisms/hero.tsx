import { useState } from 'react';
import { textStroke } from '../../utils/text-stroke';
import ClipIcon from '../atoms/icons/clip-icon';
import { Container } from '../container';
import { HeroTextType, HeroType } from './header';
import { toast } from 'sonner';
import { useMediaQuery } from '../../utils/useMediaQuery';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

export async function wait(duration: number) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export function Hero({ heroType, heroTextType }: { heroType: HeroType; heroTextType?: HeroTextType }) {
  const isMobile = useMediaQuery('(max-width: 640px )');

  return (
    <section className="text-white mt-8 pb-3 pt-16">
      <Container>
        <div className={cn('block sm: items-center xl:flex justify-between gap-8', heroType === 'report-project' && 'items-start')}>
          <div className="mb-[-50px] flex justify-center xl:block">
            <img className="w-auto xl:max-w-[510px] h-auto" src="/assets/img/hero-img.png" alt="" />
          </div>
          {heroType === 'normal' && (
            <div className="flex justify-center pb-6">
              <div className="">
                {heroTextType === 'normal' && (
                  <h1
                    style={textStroke(isMobile ? 2 : 4, 'skyBlue')}
                    className="text-3xl xl:text-[60px] mx-auto text-center xl:text-left mt-16 max-w-[22ch] font-extrabold uppercase md:leading-[48px] xl:leading-[65px] tracking-widest"
                  >
                    Join Justice Bird where community power meets justice, reshaping the future of crypto security
                  </h1>
                )}
                {heroTextType === 'investigation' && (
                  <h1
                    style={textStroke(4, 'skyBlue')}
                    className="text-3xl xl:text-[50px] mx-auto text-center xl:text-left mt-16 max-w-[22ch] font-extrabold uppercase md:leading-[48px] xl:leading-[65px] tracking-widest"
                  >
                    Join Justice Bird, our crypto-sleuthing superhero, as we unmask shady projects and bring transparency to the forefront!
                  </h1>
                )}
                <div className="flex justify-center xl:justify-start gap-2 mt-3">
                  <button className="bg-yellow duration-200 text-black rounded-[10px] px-3 xl:px-7 py-3 font-bold text-lg lg:text-2xl mt-4 uppercase">
                    Buy Now
                  </button>
                  <Link
                    to="/#community"
                    className="bg-white inline-block duration-200 text-black rounded-[10px] px-3 xl:px-7 py-3 font-bold text-lg lg:text-2xl mt-4 uppercase"
                  >
                    join the community
                  </Link>
                </div>
              </div>
            </div>
          )}
          {heroType === 'report-project' && <HeroForm />}
        </div>
      </Container>
    </section>
  );
}

function HeroForm() {
  const [name, setName] = useState('');
  const [userDetails, setUserDetails] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit() {
    if (!name || !email || !description || userDetails) {
      toast.error('Please fill in all fields');
      return;
    }
    toast.promise(() => wait(2000), {
      loading: 'Sending report...',
      success: () => {
        return 'Report sent successfully';
      },
      error: 'Error sending report',
      finally: () => {
        setUserDetails('');
        setName('');
        setEmail('');
        setDescription('');
      },
    });
  }

  return (
    <div className="xl:w-[calc(100%_-_610px)] relative -top-4">
      <h1 className="text-4xl xl:text-[50px] mt-20 xl:mt-0 mb-8 inline-block font-bold pb-0 leading-[50px] ">Report a project:</h1>
      <div className="xl:grid space-y-4 xl:space-y-0 xl:grid-cols-2 gap-2 xl:gap-4">
        <div className="sm:col-span-full">
          <Input value={userDetails} onChange={(e) => setUserDetails(e.target.value)} label="user details:" />
        </div>
        <Input value={name} onChange={(e) => setName(e.target.value)} label="project name:" />
        <Input value={email} onChange={(e) => setEmail(e.target.value)} label="e-mail:" />
        <div className="sm:col-span-full">
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} label="description of issues:" />
        </div>
        <div className="sm:col-span-full">
          <UploadFile />
        </div>
        <div className="sm:col-span-full">
          <button
            onClick={handleSubmit}
            className="w-full py-2.5 flex justify-center bg-yellow text-black font-bold text-xl cursor-pointer border-2 rounded border-black"
          >
            Send Report
          </button>{' '}
        </div>
      </div>
    </div>
  );
}

function Input({ label, onChange, value }: { label: string; onChange: React.ChangeEventHandler<HTMLInputElement>; value: string }) {
  return (
    <label className="flex flex-col w-full">
      <span className="text-lg uppercase  font-bold">{label}</span>
      <input value={value} onChange={onChange} type="text" className="p-3 text-xl font-medium text-black border-2 rounded border-black" />
    </label>
  );
}
function Textarea({ label, onChange, value }: { label: string; onChange: React.ChangeEventHandler<HTMLTextAreaElement>; value: string }) {
  return (
    <label className="flex flex-col w-full">
      <span className="text-lg uppercase  font-bold">{label}</span>
      <textarea
        value={value}
        onChange={onChange}
        rows={10}
        className="p-3 resize-none font-medium text-xl text-black border-2 rounded border-black"
      />
    </label>
  );
}

function UploadFile() {
  return (
    <div className="flex flex-col w-full">
      <span className="text-lg uppercase  font-bold mb-px">Attached File ( If you have) :</span>
      <label htmlFor="file" className="w-full py-2.5 flex justify-center bg-white cursor-pointer border-2 rounded border-black">
        <input type="file" name="file" className="hidden" id="file" />
        <ClipIcon className="w-4 h-auto text-black" />
      </label>
    </div>
  );
}
