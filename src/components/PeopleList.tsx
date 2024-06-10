import React, { useEffect, useState } from 'react';
import Person from '@/dto/person';
import ApiClient from '@/api';
import PersonListItem from '@/components/PersonListItem';
import AppConfig from '@/config';
import PeopleResponse from '@/dto/peopleResponse';
import useLoading from '@/hooks/useLoading';
import ControlsBar from '@/components/ControlsBar';
import { Box } from '@mui/system';

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

    const handleSearchChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setSearch(event.target.value);

        setTimeout(() => {
            setCurrentUrl(defaultPeopleResponseUrl);
        }, 500);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: 'calc(100vh - 60px - 30px)', // Adjust according to your header and footer height
                overflowY: 'auto',
            }}
        >
            <ControlsBar
                nextPageExists={!!people?.next}
                previousPageExists={!!people?.previous}
                onNextPage={handleNextPage}
                onPreviousPage={handlePreviousPage}
                search={search}
                handleSearchChange={handleSearchChange}
            />
            <Box sx={{ overflowY: 'auto', flexGrow: 1, my: 2 }}>
                {people?.results?.map((person: Person, index: number) => (
                    <PersonListItem
                        key={index}
                        person={person}
                        id={(index + 1).toString()}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default PeopleList;
