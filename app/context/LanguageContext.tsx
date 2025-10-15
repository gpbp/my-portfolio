'use client';
import { createContext, useContext, useState, useEffect} from 'react';
import { usePathname, useRouter } from 'next/navigation';

export type Lang = 'en' | 'fr' | 'vi';

interface LangContextType {
  lang: Lang;
  switchLang: (lang: Lang) => void;
}

const LangContext = createContext<LangContextType>({
  lang: 'en',
  switchLang: () => {},
});

export const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    const storedLang = localStorage.getItem('lang') as Lang;
    if (storedLang) setLang(storedLang);
  }, []);

  const switchLang = (newLang: Lang) => {
    setLang(newLang);
    localStorage.setItem('lang', newLang);
    router.refresh();
  };

  return (
    <LangContext.Provider value={{ lang, switchLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
