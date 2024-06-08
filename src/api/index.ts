import axios, { AxiosInstance, AxiosResponse } from 'axios';
import AppConfig from '@/config';
import PeopleResponse from '@/dto/peopleResponse';
import Person from '@/dto/person';

abstract class ApiClient {
    private static readonly apiAxiosClient: AxiosInstance = axios.create({
        baseURL: AppConfig.personBaseUrl,
    });

    public static async getPeople(
        params?: Record<string, any>,
    ): Promise<PeopleResponse> {
        const response: AxiosResponse<PeopleResponse> =
            await this.apiAxiosClient.get<PeopleResponse>('/people', {
                params,
            });
        return response.data;
    }

    public static async getPerson(id: string): Promise<Person> {
        const response: AxiosResponse<Person> =
            await this.apiAxiosClient.get<Person>(`/people/${id}`);

        return response.data;
    }

    public static getPersonProfileImageUrl(id: string): string {
        return `${AppConfig.imageBaseUrl}/assets/img/characters/${id}.jpg`;
    }
}

export default ApiClient;
