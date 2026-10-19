import { useState, useEffect, useCallback } from 'react';

export type PageId =
  | 'home'
  | 'about'
  | 'journey'
  | 'skills'
  | 'projects'
  | 'achievements'
  | 'education'
  | 'contact'
  | 'resume';

const VALID_PAGES: PageId[] = [
  'home',
  'about',
  'journey',
  'skills',
  'projects',
  'achievements',
  'education',
  'contact',
  'resume'
];

export const getPageFromHash = (): PageId => {
  const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase().trim();
  if (VALID_PAGES.includes(hash as PageId)) {
    return hash as PageId;
  }
  return 'home';
};

export const useAppRouter = () => {
  const [currentPage, setCurrentPage] = useState<PageId>(() => getPageFromHash());

  useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash();
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const navigate = useCallback((page: PageId) => {
    window.location.hash = page === 'home' ? '' : `#/${page}`;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return {
    currentPage,
    navigate
  };
};
