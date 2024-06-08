import React from 'react';
import Person from '@/dto/person';
import Paths from '@/paths';

interface PersonListItemProps {
    id: string;
    person: Person;
}

const PersonListItem: React.FC<PersonListItemProps> = ({ person, id }) => {
    return (
        <a
            href={Paths.UserProfile(id)}
            className="p-4 border-2 border-gray-200 rounded-lg my-2"
        >
            <h2 className="text-xl font-bold">{person.name}</h2>
            <p className="text-sm text-gray-600">Height: {person.height}</p>
            <p className="text-sm text-gray-600">Mass: {person.mass}</p>
            <p className="text-sm text-gray-600">
                Hair Color: {person.hair_color}
            </p>
        </a>
    );
};

export default PersonListItem;
