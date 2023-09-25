'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Splash from '@/app/components/Splash';

import { StandingNavbar } from '@/components/navbar/StandingNavbar';

const ProjectsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className='h-full w-full'>
      <AnimatePresence>
        {isLoading && <Splash setIsLoading={setIsLoading} />}
      </AnimatePresence>
      <StandingNavbar />
    </div>
  );
};

export default ProjectsPage;