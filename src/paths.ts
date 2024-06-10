/**
 * `Paths` is an object that contains the routes used in the application.
 * Each property of the `Paths` object is a route.
 * You can define a new route by adding a new property.
 */
const Paths = {
    Home: '/',
    UserProfile: (id: string): string => `/person/${id}`,
};

export default Paths;
