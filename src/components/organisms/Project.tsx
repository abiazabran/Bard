import { useState } from 'react';
import { textStroke } from '../../utils/text-stroke';
import { Container } from '../container';
import { wait } from './hero';
import { cn } from '../../utils/cn';
import CrossIcon from '../atoms/icons/cross-icon';
import { Link } from 'react-router-dom';

type ProjectType = {
  progress: number;
  id: string;
  projectName: string;
  image: string;
  smartContract: string;
  suspectedOfDoing: string;
  amount: string;
  knownInfo: string;
};

const projects: ProjectType[] = [
  {
    progress: 45,
    id: '1',
    projectName: 'andy',
    image: '/assets/img/investigations/investigation1.png',
    smartContract: 'GxojtGb9BMitaKSzJVHcB5XkZHc7E7swSRy9ZwxUxza1',
    suspectedOfDoing: 'Potentially slow rug and team token dump',
    amount: ' 469k usd',
    knownInfo:
      'Team members located in the process of finding the mastermind behind it and learning exactly what happened with all the funds that came into Andy.',
  },
  {
    progress: 27,
    id: '2',
    projectName: 'BookOfBullrun',
    image: '/assets/img/investigations/investigation2.png',
    smartContract: 'BGehTcKraAndWS3B6cq7UVUXQy4uDY49tANEprsTrUo7',
    suspectedOfDoing: 'Potentially slow rug and team token dump',
    amount: '1.89m usd',
    knownInfo: 'Gathering info from victims and looking to see if there are any fraudulent actions.',
  },
  {
    progress: 10,
    id: '3',
    projectName: 'high hape',
    image: '/assets/img/investigations/investigation3.jpg',
    smartContract: 'HcwLEx28nB6w2ZchZMmXWrgNzDr6Pe6bJpXd5vn6aBNs',
    suspectedOfDoing: 'Potentially misusing project funds',
    amount: '207k usd',
    knownInfo:
      ' All the info about the project is known and verified, checking for potentially misusing of project funds of 40% of the total amount raised on PinkSale.',
  },
  {
    progress: 69,
    id: '4',
    projectName: 'kuskuswap',
    image: '/assets/img/investigations/investigation4.png',
    smartContract: '0xAc0255cdCfC551eF6067E209e16F00eC737779AA',
    suspectedOfDoing: 'rugpull',
    amount: '16k usd',
    knownInfo: ' project based in israel found the project owner home address using is wifi compnay',
  },
  {
    progress: 79,
    id: '5',
    projectName: 'solape',
    image: '/assets/img/investigations/investigation5.jpg',
    smartContract: '4LfGQS4WUXmMedi9m8DZznAKZ48e35mevWABT7xmCnRq',
    suspectedOfDoing: 'Presale rug pull Stealth launch rug pull',
    amount: '60k USD',
    knownInfo:
      'Project owner full name and picture All the team full names Project owner home address Project owner bank account containing rug-pulled funds plus other assets likely to be bought with rug-pulled funds Legal action in court to be taken soon',
  },
  {
    progress: 39,
    id: '6',
    projectName: 'solCONDOM',
    image: '/assets/img/investigations/investigation6.jpg',
    smartContract: ' 6gsbcTpxMSz2v4vkUgWafXcEMXUaBKZXwU8pj3zjPom7',
    suspectedOfDoing: 'rugpull',
    amount: '906k USD',
    knownInfo:
      ' projcet owner tracked down counrty of current residence yet to be confirmed tracked is credit cards and wallet addresses back to his name and confirm real name through legal partners.',
  },
];

export function Project() {
  return (
    <section className="bg-[#FFE9D3] rounded-[70px] py-24 pb-16 relative z-[2]">
      <Container>
        <h2 style={textStroke(4, 'black')} className="text-center text-3xl xl:text-[56px] text-yellow font-extrabold uppercase mb-6">
          Projects Under Investigation
        </h2>
        <div className="flex justify-center items-center">
          <p className="text-center max-w-[70ch] text-xl font-bold leading-6">
            Join our crypto-sleuthing superhero on a mission to unmask shady projects and champion transparency! We meticulously investigate
            the crypto realm, exposing fraud and empowering investors. Together, let's ensure a trustworthy future for cryptocurrency.
          </p>
        </div>
        <div className="mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {projects.map((item, index: number) => (
            <SingleProject key={index} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function SingleProject({ progress, projectName, image, smartContract, suspectedOfDoing, amount, knownInfo }: ProjectType) {
  const [renderModal, setRenderModal] = useState(false);
  const [show, setShow] = useState(false);

  const duration: number = 500;

  async function openModal() {
    setRenderModal(true);
    setShow(true);
    document.documentElement.style.overflow = 'hidden';
    await wait(duration);
  }

  async function closeModal() {
    setShow(false);
    document.documentElement.style.overflow = 'unset';
    await wait(duration);
    setRenderModal(false);
  }

  return (
    <>
      <div className="bg-white rounded-xl h-auto">
        <div className="p-4">
          <img className="w-full h-auto rounded-t-xl" src={image} alt="" />
        </div>
        <div className="px-5 mt-5">
          <p className="text-xl font-extrabold">{projectName}</p>
          <div className="max-w-[390px] h-[8px] bg-[#D9D9D9] rounded-md mt-2">
            <div style={{ width: `${progress}%` }} className="h-[8px] bg-yellow rounded-lg "></div>
            <div className="flex justify-between text-[12px] font-bold">
              <p>{`${progress}%`}</p>
              <p>100%</p>
            </div>
          </div>

          <button onClick={openModal} className="font-bold flex justify-center items-center text-[14px] gap-2 duration-200 group mt-5 mb-4">
            Investigation
            <img className="size-[14px] duration-300" src="/assets/svg/arrow.svg" alt="" />
          </button>
        </div>
      </div>
      {renderModal && (
        <div
          className={cn(
            'fixed z-[999999999] top-0 duration-500 left-0 h-full w-full bg-black/50 flex justify-center items-center opacity-0',
            show && 'opacity-100'
          )}
        >
          <span onClick={closeModal} className="w-full z-20  h-full absolute top-0 left-0" />
          <div className="bg-white mx-2 max-w-[1000px] rounded-3xl relative max-h-[95vh] overflow-y-auto z-[30] pb-12">
            <button onClick={closeModal} className="absolute right-4 top-4">
              <CrossIcon className="w-6 h-auto cursor-pointer text-black" />
            </button>
            <div>
              <div className="flex justify-center mb-6">
                <div className="pt-8 pb-6 border-b-[3px] border-[#E3E3E3] w-full flex justify-center">
                  <img className="w-auto h-24 xl:h-[200px] rounded-t-xl" src={image} alt="" />
                </div>
              </div>
              <div className="space-y-2.5 px-5 xl:px-20 pt-4 ">
                <div className="grid grid-cols-9 gap-1 text-xs lg:text-base font-extrabold">
                  <p className="col-span-full md:col-span-3 text-[#2A45A7]">Project Name: </p>
                  <span className="col-span-full md:col-span-6 break-all">{projectName} </span>
                </div>
                <div className="grid grid-cols-9 gap-1 text-xs lg:text-base font-extrabold">
                  <p className="col-span-full md:col-span-3 text-[#2A45A7]">Project Smart Contract: </p>
                  <span className="col-span-full md:col-span-6 break-all">{smartContract}</span>
                </div>
                <div className="grid grid-cols-9 gap-1 text-xs lg:text-base font-extrabold">
                  <p className="col-span-full md:col-span-3 text-[#2A45A7]">Activity suspected of doing:</p>
                  <span className="col-span-full md:col-span-6 break-all">{suspectedOfDoing}</span>
                </div>
                <div className="grid grid-cols-9 gap-1 text-xs lg:text-base font-extrabold">
                  <p className="col-span-full md:col-span-3 text-[#2A45A7]">Amount Stolen:</p>
                  <span className="col-span-full md:col-span-6 break-all">{amount}</span>
                </div>
                <div className="grid grid-cols-9 gap-1 text-xs lg:text-base font-extrabold">
                  <p className="col-span-full md:col-span-3 text-[#2A45A7]">Known info:</p>
                  <span className="col-span-full md:col-span-6 break-all">{knownInfo}</span>
                </div>
                <div className="grid grid-cols-9 gap-1 text-xs lg:text-base font-extrabold">
                  <p className="col-span-full md:col-span-3 text-[#2A45A7]">Progress in catching them:</p>
                  <span className="col-span-full md:col-span-6">
                    <div className="w-full h-[8px] bg-[#D9D9D9] rounded-md mt-2">
                      <div style={{ width: `${progress}%` }} className="h-[8px] bg-yellow rounded-lg "></div>
                      <div className="flex justify-between text-[12px] font-bold">
                        <p>{`${progress}%`}</p>
                        <p>100%</p>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <Link
                to="/ReportProjects"
                className="py-3 px-8 text-sm bg-skyBlue duration-300 hover:bg-skyBlue/80 rounded lg:text-lg font-bold text-white"
              >
                Report More Info
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
