import axios, { AxiosInstance, AxiosResponse } from 'axios';
import AppConfig from '@/config';
import PeopleResponse from '@/dto/peopleResponse';
import Person from '@/dto/person';

/**
 * `ApiClient` is an abstract class that provides methods for making HTTP requests to the API.
 * It uses the axios library to make these requests.
 *
 * @property {AxiosInstance} apiAxiosClient - The axios instance used for making API requests. It's configured with the base URL of the API.
 */
abstract class ApiClient {
    private static readonly apiAxiosClient: AxiosInstance = axios.create({
        baseURL: AppConfig.personBaseUrl,
    });

    /**
     * Makes a GET request to the '/people' endpoint of the API.
     * It can optionally receive query parameters and a search string.
     *
     * @param {Record<string, any>} params - The query parameters for the request.
     * @param {string} search - The search string for the request.
     * @returns {Promise<PeopleResponse>} - The response from the API, wrapped in a Promise.
     */
    public static async getPeople(
        params?: Record<string, any>,
        search?: string,
    ): Promise<PeopleResponse> {
        const response: AxiosResponse<PeopleResponse> =
            await this.apiAxiosClient.get<PeopleResponse>('/people', {
                params: { ...params, search },
            });
        return response.data;
    }

    /**
     * Makes a GET request to the '/people/{id}' endpoint of the API.
     *
     * @param {string} id - The ID of the person.
     * @returns {Promise<Person>} - The response from the API, wrapped in a Promise.
     */
    public static async getPerson(id: string): Promise<Person> {
        const response: AxiosResponse<Person> =
            await this.apiAxiosClient.get<Person>(`/people/${id}`);

        return response.data;
    }

    /**
     * Constructs the URL for a person's profile image.
     *
     * @param {string} id - The ID of the person.
     * @returns {string} - The URL of the person's profile image.
     */
    public static getPersonProfileImageUrl(id: string): string {
        return `${AppConfig.imageBaseUrl}/assets/img/characters/${id}.jpg`;
    }
}

export default ApiClient;
