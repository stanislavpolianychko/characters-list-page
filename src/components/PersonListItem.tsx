import React from 'react';
import Person from '@/dto/person';
import Paths from '@/paths';
import { Card, CardContent, Typography, Link, Grow, Box } from '@mui/material';
import LanguageSystem from '@/lang';

interface PersonListItemProps {
    id: string;
    person: Person;
}

const PersonListItem: React.FC<PersonListItemProps> = ({ person, id }) => {
    return (
        <Grow in={true}>
            <Box sx={{ my: 2, p: 2 }}>
                <Card tabIndex={0} aria-label={`Profile of ${person.name}`}>
                    <Link href={Paths.UserProfile(id)} underline="none">
                        <CardContent>
                            <Typography
                                color="black"
                                variant="h5"
                                component="div"
                            >
                                {person.name}
                            </Typography>
                            <Typography color="text.secondary">
                                {`${LanguageSystem.getTranslation('height')}: ${person.height}`}
                            </Typography>
                            <Typography color="text.secondary">
                                {`${LanguageSystem.getTranslation('mass')}: ${person.mass}`}
                            </Typography>
                            <Typography color="text.secondary">
                                {`${LanguageSystem.getTranslation('hairColor')}: ${person.hair_color}`}
                            </Typography>
                        </CardContent>
                    </Link>
                </Card>
            </Box>
        </Grow>
    );
};

export default PersonListItem;
