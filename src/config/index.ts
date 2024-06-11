/**
 * `AppConfig` is an abstract class that provides a centralized location for configuration values.
 * It includes methods for loading configuration values from environment variables.
 *
 * Define your new properties in and load them:
 * @property {string | undefined} personBaseUrl - The base URL for the person API. It's loaded from the `NEXT_PUBLIC_PERSON_BASE_API_URL` environment variable.
 * @property {string | undefined} imageBaseUrl - The base URL for the image API. It's loaded from the `NEXT_PUBLIC_IMAGE_BASE_URL` environment variable.
 */
abstract class AppConfig {
    public static personBaseUrl: string | undefined;
    public static imageBaseUrl: string | undefined;

    /**
     * Loads the configuration values from the environment variables.
     * If a required environment variable is not set, it logs an error message and exits the process.
     */
    public static load(): void {
        // Load the person base API URL from the environment variable
        const personBaseUrl: string | undefined =
            process.env.NEXT_PUBLIC_PERSON_BASE_API_URL;
        if (!personBaseUrl) {
            console.error('Person base API URL is not set');
            process.exit(1);
        }
        this.personBaseUrl = personBaseUrl;

        // Load the image base API URL from the environment variable
        const imageBaseUrl: string | undefined =
            process.env.NEXT_PUBLIC_IMAGE_BASE_URL;
        if (!imageBaseUrl) {
            console.error('Image base API URL is not set');
            process.exit(1);
        }
        this.imageBaseUrl = imageBaseUrl;
    }
}

export default AppConfig;
