import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Typography, Avatar } from '@mui/material';
import ApiClient from '@/api';
import Person from '@/dto/person';
import GradientBox from '@/components/GradientBox';
import LanguageSystem from '@/lang';

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
        <GradientBox
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 1,
                height: '100vh',
            }}
        >
            <Avatar
                src={ApiClient.getPersonProfileImageUrl(id!)}
                sx={{ width: 80, height: 80 }}
            />
            <Typography variant="h4">{pageData.name}</Typography>
            <Typography variant="body1">{`${LanguageSystem.getTranslation('height')}: ${pageData.height}`}</Typography>
            <Typography variant="body1">{`${LanguageSystem.getTranslation('mass')}: ${pageData.mass}`}</Typography>
            <Typography variant="body1">
                {`${LanguageSystem.getTranslation('hairColor')}: ${pageData.hair_color}`}
            </Typography>
        </GradientBox>
    );
}

// NOTE: just a dumb page, as an example of detailed view page logic
