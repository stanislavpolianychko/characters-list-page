import React, { useEffect, useState } from 'react';
import Person from '@/dto/person';
import ApiClient from '@/api';
import PersonListItem from '@/components/PersonListItem';
import AppConfig from '@/config';
import PeopleResponse from '@/dto/peopleResponse';

const PeopleList = () => {
    const defaultPeopleResponseUrl = `${AppConfig.personBaseUrl}/people`;

    const [people, setPeople] = useState<PeopleResponse>();
    const [currentUrl, setCurrentUrl] = useState<string>(
        defaultPeopleResponseUrl,
    );
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
        const urlObj = new URL(currentUrl);
        const params = Object.fromEntries(urlObj.searchParams.entries());

        ApiClient.getPeople(params, search)
            .then((response: PeopleResponse) => {
                setPeople(response);
            })
            .catch((error) => {
                console.log(`Error occurred: ${error.message}`);
            });
    }, [currentUrl, search]);

    const handleNextPage = () => {
        if (people?.next === null) {
            return;
        }
        setCurrentUrl(people?.next as string);
    };

    const handlePreviousPage = () => {
        if (people!.previous === null) {
            return;
        }
        setCurrentUrl(people?.previous as string);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentUrl(defaultPeopleResponseUrl);
        setSearch(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={search}
                onChange={handleSearchChange}
                placeholder="Search by name"
            />
            {people?.results?.map((person: Person, index: number) => (
                <PersonListItem
                    key={index}
                    person={person}
                    id={(index + 1).toString()}
                />
            ))}
            <button onClick={handlePreviousPage} disabled={!people?.previous}>
                Previous
            </button>
            <button onClick={handleNextPage} disabled={!people?.next}>
                Next
            </button>
        </div>
    );
};

export default PeopleList;
