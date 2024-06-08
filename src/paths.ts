const Paths = {
    Home: '/',
    UserProfile: (id: string): string => `/person/${id}`,
};

export default Paths;
