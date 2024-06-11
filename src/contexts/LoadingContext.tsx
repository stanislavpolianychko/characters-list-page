import React, { createContext, useState, ReactNode } from 'react';

interface LoadingContextType {
    isLoading: boolean;
    setIsLoading: (value: boolean) => void;
}

export const LoadingContext = createContext<LoadingContextType | undefined>(
    undefined,
);

function LoadingProvider({ children }: { children: ReactNode }) {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </LoadingContext.Provider>
    );
}

export default LoadingProvider;
