import PeopleList from '@/components/PeopleList';
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import ControlsBar from '@/components/ControlsBar';
import AppConfig from '@/config';
import PeopleResponse from '@/dto/peopleResponse';
import ApiClient from '@/api';
import LanguageSystem from '@/lang';
import useLoading from '@/hooks/useLoading';

const defaultPeopleResponseUrl = `${AppConfig.personBaseUrl}/people`;

export default function Home() {
    const [people, setPeople] = useState<PeopleResponse>();
    const [currentUrl, setCurrentUrl] = useState<string>(
        defaultPeopleResponseUrl,
    );
    const [search, setSearch] = useState<string>('');
    const { setIsLoading } = useLoading();

    useEffect(() => {
        const loadedDate = localStorage.getItem('loadedDate');
        const currentDate = new Date().toISOString().split('T')[0];

        if (loadedDate == null || loadedDate != currentDate) {
            setIsLoading(true);
            localStorage.setItem('loadedDate', currentDate);
        }

        const urlObj = new URL(currentUrl);
        const params = Object.fromEntries(urlObj.searchParams.entries());

        ApiClient.getPeople(params, search)
            .then((response: PeopleResponse) => {
                setPeople(response);
            })
            .catch((error) => {
                console.log(`Error occurred: ${error.message}`);
            })
            .finally(() => {
                setTimeout(() => {
                    setIsLoading(false);
                }, 2000);
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
