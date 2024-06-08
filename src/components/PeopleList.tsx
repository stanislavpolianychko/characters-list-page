import React, { useEffect, useState } from 'react';
import Person from '@/dto/person';
import ApiClient from '@/api';
import PersonListItem from '@/components/PersonListItem';

const PeopleList = () => {
    const [people, setPeople] = useState<Person[]>([]);

    useEffect(() => {
        const fetchPeople = async () => {
            ApiClient.getPeople()
                .then((response) => {
                    setPeople(response.results as Person[]);
                })
                .catch((error) => {
                    console.log(`Error occurred: ${error.message}`);
                });
        };

        fetchPeople().then();
    }, []);

    console.log(people.length);
    return (
        <div>
            {people.map((person, index) => (
                <PersonListItem
                    key={index}
                    person={person}
                    id={(index + 1).toString()}
                />
            ))}
        </div>
    );
};

export default PeopleList;
