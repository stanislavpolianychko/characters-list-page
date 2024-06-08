abstract class AppConfig {
    public static personBaseUrl: string | undefined;
    public static imageBaseUrl: string | undefined;

    public static load(): void {
        const personBaseUrl: string | undefined =
            process.env.NEXT_PUBLIC_PERSON_BASE_API_URL;
        if (!personBaseUrl) {
            console.error('Person base API URL is not set');
            process.exit(1);
        }
        this.personBaseUrl = apiUrl;

        const imageBaseUrl: string | undefined =
            process.env.NEXT_PUBLIC_IMAGE_BASE_API_URL;
        if (!imageBaseUrl) {
            console.error('Image base API URL is not set');
            process.exit(1);
        }
        this.imageBaseUrl = apiKey;
    }
}

export default AppConfig;
