'use client'; 
import { usePathname } from 'next/navigation';
import NavBar from './NavBar';


const ConditionalNavBar = () => {
  const pathname = usePathname();

  const noNavBarRoutes = ['/dashboard'];


  const shouldExcludeNavBar = noNavBarRoutes.includes(pathname);

  return !shouldExcludeNavBar ? <><NavBar/> </>: null;
};

export default ConditionalNavBar;