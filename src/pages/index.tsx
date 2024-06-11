import PeopleList from '@/components/PeopleList';
import useLoading from '@/hooks/useLoading';
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import ControlsBar from '@/components/ControlsBar';
import AppConfig from '@/config';
import PeopleResponse from '@/dto/peopleResponse';
import ApiClient from '@/api';
import LanguageSystem from '@/lang';

const defaultPeopleResponseUrl = `${AppConfig.personBaseUrl}/people`;

export default function Home() {
    const [people, setPeople] = useState<PeopleResponse>();
    const [currentUrl, setCurrentUrl] = useState<string>(
        defaultPeopleResponseUrl,
    );
    const { setIsLoading } = useLoading();
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
        setIsLoading(true);
        const urlObj = new URL(currentUrl);
        const params = Object.fromEntries(urlObj.searchParams.entries());

        ApiClient.getPeople(params, search)
            .then((response: PeopleResponse) => {
                setPeople(response);
            })
            .catch((error) => {
                // can be improved by using a state management
                console.log(`Error occurred: ${error.message}`);
            });
        setIsLoading(false);
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
        setCurrentUrl(defaultPeopleResponseUrl);
    };

    return (
        <Box role="main" aria-label={LanguageSystem.getTranslation('homePage')}>
            <ControlsBar
                nextPageExists={!!people?.next}
                previousPageExists={!!people?.previous}
                onNextPage={handleNextPage}
                onPreviousPage={handlePreviousPage}
                search={search}
                handleSearchChange={handleSearchChange}
            />
            <PeopleList people={people!} />
        </Box>
    );
}
