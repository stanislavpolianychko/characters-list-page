import PeopleList from '@/components/PeopleList';
import useLoading from '@/hooks/useLoading';
import { useEffect } from 'react';

export default function Home() {
    const { setIsLoading } = useLoading();

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    return <PeopleList />;
}
