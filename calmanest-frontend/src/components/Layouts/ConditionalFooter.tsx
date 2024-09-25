'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer'; 

const ConditionalFooter = () => {
  const pathname = usePathname();


  const noFooterRoutes = ['/dashboard'];


  const shouldExcludeFooter = noFooterRoutes.includes(pathname);

  return !shouldExcludeFooter ? <Footer /> : null;
};

export default ConditionalFooter;