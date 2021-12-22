import Link from 'next/link';
import { useRouter } from 'next/router';

import ThemeSwitch from './ThemeSwitch';

const routes = [{route: '/posts', title: 'blog'}, {route: '/about', title: 'about'}]

const Nav: React.FC = () => {
  const router = useRouter();

  const isActive = (pathname: string) => {
    return router.asPath.includes(pathname);
  };

  return (
    <header className="relative w-full h-16">
      <div className="fixed h-16 z-40 w-full flex justify-between backdrop-blur-[20px] backdrop-saturate-150 bg-white/50 dark:bg-[#0D0D1050]">
        <nav className="w-full sm:max-w-[75ch] m-auto flex px-5 justify-between items-center ">
          <Link href="/" passHref>
            <a title="Home" aria-label="Home">
              <VancouverTime />
            </a>
          </Link>
          <div className="flex items-center gap-10">
            {/* {['/posts', '/art'].map((path) => (
              <Link key={path} href={path}>
                <a className={`capitalize ${isActive(path) ? '' : 'opacity-50'}`}>
                  {path.replace('/', '')}
                </a>
              </Link>
            ))} */}
            {routes.map(({route, title}) => (
              <Link key={route} href={route}>
                <a className={`capitalize ${isActive(route) ? '' : 'opacity-50'}`}>
                  {title}
                </a>
              </Link>
            ))}
            <ThemeSwitch />
          </div>
        </nav>
      </div>
    </header>
  );
};

function VancouverTime() {
  const TimeFomatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Canada/Pacific",
    hour: "numeric",
    minute: "numeric",
    weekday: "short",
    hour12: false,
  }).format();
  return <span>{TimeFomatter}, Vancouver</span>;
}

export default Nav;
