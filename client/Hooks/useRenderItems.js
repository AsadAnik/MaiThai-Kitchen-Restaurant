import React from 'react';
import NotFound from '@/components/widgets/NotFound';
import SkeletonLaoding from '@/components/widgets/Loading/Skeleton';

const useRenderItems = ({ children, ...rest }) => {
    const { loading, items } = rest;

    // Render Foods Or Loading Skeleton..
    const renderItems = (loading, items) => {
        if (!items?.length && !loading) {
            return (
                <>
                    <NotFound title="Not Found Any Foods!" />
                </>
            )
        }

        if (!loading) {
            return (
                <>
                    {children}
                </>
            );
        }

        return (
            <>
                <SkeletonLaoding size={6} />
            </>
        );
    };

    return renderItems(loading, items);
};

export default useRenderItems;