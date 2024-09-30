import { NavLink as Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

export function Nav() {
  return (
    <nav className="text-white pt-5 lg:pt-3 lg:py-2">
      <ul className="hidden lg:inline-flex gap-14 font-bold sm:text-lg sm:text-center md:text-lg md:px-5 uppercase xl:text-2xl ">
        <Link
          to="/"
          className={({ isActive }) =>
            cn('duration-200 text-black rounded-[10px] px-4 py-3 hover:text-yellow inline-flex', isActive && 'bg-yellow hover:text-black')
          }
        >
          Home
        </Link>
        <Link
          to="/Investigation"
          className={({ isActive }) =>
            cn('duration-200 text-black rounded-[10px] px-4 py-3 hover:text-yellow inline-flex', isActive && 'bg-yellow hover:text-black')
          }
        >
          Investigation
        </Link>
        <Link
          to="/ReportProjects"
          className={({ isActive }) =>
            cn('duration-200 text-black rounded-[10px] px-4 py-3 hover:text-yellow inline-flex', isActive && 'bg-yellow hover:text-black')
          }
        >
          Report Projects
        </Link>
      </ul>
    </nav>
  );
}
