import { useLang } from '../context/LanguageContext';
import { translations, TranslationKeys } from './translations';

export function useTranslations() {
  const { lang } = useLang();
  
  return translations[lang] as TranslationKeys;
}
