import * as RNLocalize from 'react-native-localize';
import I18n from "i18n-js";

type translationsTypes = {
  [key: string]: () => object
}

const translations = {
  en: () => require('./en.json')
}  as translationsTypes

const fallback = { languageTag: 'en' }
const { languageTag } = RNLocalize.findBestAvailableLanguage(Object.keys(translations)) || fallback

I18n.fallbacks = true
I18n.locale = languageTag
I18n.translations = { [languageTag] : translations[languageTag]() }
export default I18n;  