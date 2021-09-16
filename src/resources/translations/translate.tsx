import I18n from "./i18n";

export const translate = (key: string, options?: I18n.TranslateOptions) =>  {
    return key ? I18n.t(key, options) : ""
}