import en from './translations/en.json';

abstract class LanguageSystem {
    protected static enLang: { [key: string]: string } = en;

    static getTranslation(key: string): string {
        return this.enLang[key] || `Translation not found for key: ${key}`;
    }
}

export default LanguageSystem;
