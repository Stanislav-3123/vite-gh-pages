import React from 'react';

interface childrenProps {
    children: React.ReactNode
}

const Wrapper = ({children}: childrenProps) => {
    return (
        <div className="min-h-screen  flex flex-col mx-auto items-center max-w-[1200px] w-full relative">
            <div
                className="mx-auto bg-cover bg-[url('/images/logo/pumponchik.png')] animate-rotate_full w-[360px] h-[360px] fixed z-[-20] top-[330px]"/>
            <div
                className="mx-auto bg-cover bg-[url('/images/logo/crapushki.png')] fixed animate-full_circle_revers w-[360px] z-[-20] top-[330px] h-[360px]"/>
            {children}
        </div>
    );
};

export default Wrapper;