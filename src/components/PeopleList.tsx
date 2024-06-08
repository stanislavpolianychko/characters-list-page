import React, { useEffect, useState } from 'react';
import Person from '@/dto/person';
import ApiClient from '@/api';
import PersonListItem from '@/components/PersonListItem';
import AppConfig from '@/config';
import PeopleResponse from '@/dto/peopleResponse';

const PeopleList = () => {
    const [people, setPeople] = useState<PeopleResponse>();
    const [currentUrl, serCurrentUrl] = useState<string>(
        `${AppConfig.personBaseUrl}/people`,
    );

    useEffect(() => {
        const urlObj = new URL(currentUrl);
        const params = Object.fromEntries(urlObj.searchParams.entries());

        ApiClient.getPeople(params)
            .then((response: PeopleResponse) => {
                setPeople(response);
                console.log(response);
            })
            .catch((error) => {
                console.log(`Error occurred: ${error.message}`);
            });
    }, [currentUrl]);

    const handleNextPage = () => {
        if (people?.next === null) {
            return;
        }
        serCurrentUrl(people?.next as string);
    };

    const handlePreviousPage = () => {
        if (people!.previous === null) {
            return;
        }
        serCurrentUrl(people?.previous as string);
    };

    return (
        <div>
            {people?.results.map((person: Person, index: number) => (
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
