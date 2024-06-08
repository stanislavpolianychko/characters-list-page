import Person from '@/dto/person';

interface PeopleResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Person[];
}

export default PeopleResponse;
