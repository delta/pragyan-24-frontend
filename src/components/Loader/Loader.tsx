import React from 'react';

const Loader = () => {
    return (
        <div className="loading flex h-full w-full justify-center items-center">
            <svg
                width="64px"
                height="48px"
                className="translate-y-1/2 top-[44%] absolute scale-[200%]"
            >
                <polyline
                    points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
                    id="back"
                ></polyline>
                <polyline
                    points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
                    id="front"
                ></polyline>
            </svg>
        </div>
    );
};

export default Loader;
