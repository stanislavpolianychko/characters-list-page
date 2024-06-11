import React from 'react';
import Person from '@/dto/person';
import PersonListItem from '@/components/PersonListItem';
import PeopleResponse from '@/dto/peopleResponse';
import { Box } from '@mui/system';
import LanguageSystem from '@/lang';

interface PeopleListProps {
    people?: PeopleResponse;
}

const PeopleList: React.FC<PeopleListProps> = ({ people }) => {
    return (
        <>
            {people?.results?.length !== 0 && (
                <Box
                    role="list"
                    aria-label={LanguageSystem.getTranslation('peopleList')}
                >
                    {people?.results.map((person: Person, index: number) => (
                        <PersonListItem
                            key={index}
                            person={person}
                            id={(index + 1).toString()}
                        />
                    ))}
                </Box>
            )}
        </>
    );
};

export default PeopleList;
