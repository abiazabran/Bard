import { Hero } from './hero';

import { WhitePaperButton } from '../atoms/Button';
import { Logo } from '../atoms/icons/Logo';
import { Nav } from '../atoms/nav';
import { Container } from '../container';
import HamburgerIcon from '../atoms/icons/hamburger-icon';
import { useState } from 'react';
import { cn } from '../../utils/cn';
import CrossIcon from '../atoms/icons/cross-icon';
import { NavLink as Link } from 'react-router-dom';

export type HeroType = 'normal' | 'report-project' | 'investigation';
export type HeroTextType = 'normal' | 'investigation';

type Props = {
  heroType?: HeroType;
  heroTextType?: HeroTextType;
};
export function Header({ heroType = 'normal', heroTextType = 'normal' }: Props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <header className="[background-image:url('/assets/img/header-bg-img.png')] block w-full h-auto bg-cover rounded-b-[70px] relative z-[99]">
      <Container>
        <div className="flex justify-between items-center pt-5 xl:pt-12">
          <Logo />
          <Nav />
          <button onClick={() => setDrawerOpen(!drawerOpen)} className="lg:hidden text-white ml-auto md:mr-4">
            <HamburgerIcon className="w-6" />
          </button>
          <WhitePaperButton />
        </div>
        <Hero heroType={heroType} heroTextType={heroTextType} />
      </Container>
      <div>
        <div
          className={cn(
            'fixed p-6 top-0 -right-[120%] h-screen w-screen bg-white z-[100] duration-300',
            drawerOpen ? 'right-0' : 'right-[-120%]'
          )}
        >
          <div className="flex items-center justify-between">
            <Logo />
            <button onClick={() => setDrawerOpen(false)} className="text-black">
              <CrossIcon className="w-6 h-auto" />
            </button>
          </div>
          <div className="mt-8">
            <ul className="lg:inline-flex gap-4 font-bold sm:text-lg sm:text-center md:text-lg md:px-5 uppercase xl:text-2xl flex flex-col">
              <Link
                to="/"
                className={({ isActive }) =>
                  cn(
                    'duration-200 text-black rounded-[10px] px-4 py-3 hover:text-yellow inline-flex',
                    isActive && 'bg-yellow hover:text-black'
                  )
                }
              >
                Home
              </Link>
              <Link
                to="/Investigation"
                className={({ isActive }) =>
                  cn(
                    'duration-200 text-black rounded-[10px] px-4 py-3 hover:text-yellow inline-flex',
                    isActive && 'bg-yellow hover:text-black'
                  )
                }
              >
                Investigation
              </Link>
              <Link
                to="/ReportProjects"
                className={({ isActive }) =>
                  cn(
                    'duration-200 text-black rounded-[10px] px-4 py-3 hover:text-yellow inline-flex',
                    isActive && 'bg-yellow hover:text-black'
                  )
                }
              >
                Report Projects
              </Link>
            </ul>
            <WhitePaperButton className="block w-full mt-16 [&_button]:w-full" />
          </div>
        </div>
      </div>
    </header>
  );
}
