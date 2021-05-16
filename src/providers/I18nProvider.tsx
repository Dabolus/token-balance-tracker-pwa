import React, {
  FunctionComponent,
  createContext,
  useContext,
  useState,
  useCallback,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';

export interface I18nProviderValue {
  locale: Locale;
  setLocale: Dispatch<SetStateAction<Locale>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  translate(id: string, ...data: any[]): string | undefined;
}

export type Locale = 'en' | 'it';

const supportedLocales: Locale[] = ['en', 'it'];

export const I18nContext =
  createContext<I18nProviderValue | undefined>(undefined);

export const I18nProvider: FunctionComponent = ({ children }) => {
  const userLocale =
    localStorage.getItem('locale') || navigator.language.slice(0, 2);

  const [locale, setLocale] = useState<Locale>(
    supportedLocales.includes(userLocale as Locale)
      ? (userLocale as Locale)
      : 'en',
  );

  const [localeData, setLocaleData] =
    useState<Record<string, string> | undefined>(undefined);

  useEffect(() => {
    const updateLocaleData = async () => {
      const { default: newLocaleData } = await import(
        `../locales/${locale}.json`
      );
      setLocaleData(newLocaleData);
    };

    updateLocaleData();
  }, [locale]);

  const translate = useCallback<I18nProviderValue['translate']>(
    (id, ...data) => {
      if (!localeData) {
        return;
      }

      const flattenedData = data.flat();

      const parsedData =
        flattenedData.length === 1 &&
        typeof flattenedData[0] === 'object' &&
        flattenedData[0] !== null
          ? flattenedData[0]
          : flattenedData;

      return localeData[id].replace(
        /{(\w+)}/g,
        (_, match) => parsedData?.[match] ?? '',
      );
    },
    [localeData],
  );

  useEffect(() => {
    setTimeout(() => setLocale('it'), 3000);
  }, []);

  return localeData ? (
    <I18nContext.Provider value={{ locale, setLocale, translate }}>
      {children}
    </I18nContext.Provider>
  ) : null;
};
export const useI18n = () => {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error('useI18n must be used within a I18nProvider');
  }

  return context;
};

export default I18nProvider;
