import React from 'react';
import Person from '@/dto/person';
import Paths from '@/paths';
import { Card, CardContent, Typography, Link, Grow, Box } from '@mui/material';

interface PersonListItemProps {
    id: string;
    person: Person;
}

const PersonListItem: React.FC<PersonListItemProps> = ({ person, id }) => {
    return (
        <Grow in={true}>
            <Box sx={{ my: 2, p: 2 }}>
                <Card
                    sx={{
                        border: '1px solid black',
                        transition: 'transform 0.3s ease-in-out',
                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
                        '&:hover': {
                            transform: 'translateY(-10px)',
                        },
                    }}
                >
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
                                Height: {person.height}
                            </Typography>
                            <Typography color="text.secondary">
                                Mass: {person.mass}
                            </Typography>
                            <Typography color="text.secondary">
                                Hair Color: {person.hair_color}
                            </Typography>
                        </CardContent>
                    </Link>
                </Card>
            </Box>
        </Grow>
    );
};

export default PersonListItem;
