import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import ApiClient from '@/api';
import Person from '@/dto/person';

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context.params?.id;

    if (!id) {
        return {
            notFound: true,
        };
    }

    try {
        const person: Person = await ApiClient.getPerson(id.toString());
        return {
            props: { pageData: person, id: id },
        };
    } catch (error) {
        console.error(`Error occurred: ${error}`);

        return {
            props: { pageData: null },
            error: {
                statusCode: 500,
                message: 'An error occurred while fetching the person data.',
            },
        };
    }
};

interface PageProps {
    pageData: Person;
    id: string | undefined;
}

export default function UserIdPage({ pageData, id }: PageProps) {
    const router = useRouter();

    if (router.isFallback) {
        return <></>;
    }

    return (
        <div>
            <img src={ApiClient.getPersonProfileImageUrl(id!)} />
            <h1>{pageData.name}</h1>
            <p>Height: {pageData.height}</p>
            <p>Mass: {pageData.mass}</p>
            <p>Hair Color: {pageData.hair_color}</p>
        </div>
    );
}
