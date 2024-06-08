abstract class AppConfig {
    public static apiUrl: string = '';
    public static apiKey: string = '';

    public static load(): void {
        const apiUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;
        if (apiUrl) {
            this.apiUrl = apiUrl;
        }

        const apiKey: string | undefined = process.env.REACT_APP_API_KEY;
        if (apiKey) {
            this.apiKey = apiKey;
        }
    }
}

export default AppConfig;
