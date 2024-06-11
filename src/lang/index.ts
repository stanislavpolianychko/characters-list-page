import en from './translations/en.json';

/**
 * `LanguageSystem` is an abstract class that provides a method for getting translations.
 * It uses a JSON file for English language translations.
 *
 * @property {{ [key: string]: string }} enLang - The English language translations. It's loaded from the `en.json` file.
 */
abstract class LanguageSystem {
    protected static enLang: { [key: string]: string } = en;

    /**
     * Gets the translation for a given key.
     * If the key is not found in the translations, it returns a default message.
     *
     * @param {string} key - The key for the translation.
     * @returns {string} - The translation for the given key, or a default message if the key is not found.
     */
    static getTranslation(key: string): string {
        return this.enLang[key] || `Translation not found for key: ${key}`;
    }
}

export default LanguageSystem;
