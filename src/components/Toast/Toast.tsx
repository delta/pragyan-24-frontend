import { Toaster } from 'react-hot-toast';

const Toast = () => {
    return (
        <Toaster
            position="bottom-right"
            reverseOrder={false}
            gutter={8}
            containerClassName="toasty"
            containerStyle={{
                fontFamily: 'Orbitron',
            }}
            toastOptions={{
                className: '',
                style: {
                    font: 'inherit',
                    fontSize: '1rem',
                    fontFamily: "'Orbitron', sans-serif",
                    background: 'black',
                    color: '#fff',
                    width: '500px',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 0 3px #000000',
                    zIndex: 100000,
                },

                success: {
                    duration: 2000,
                    style: {
                        background: 'black',
                        backgroundSize: '25px 25px',
                        border: '2px solid green',
                    },
                },
                error: {
                    duration: 2000,
                    style: {
                        background: 'black',
                        backgroundSize: '25px 25px',
                        border: '2px solid red',
                    },
                },
                loading: {
                    duration: 2000,
                    style: {
                        background: '#363636',
                        backgroundSize: '25px 25px',
                        border: '2px solid yellow',
                    },
                },
                custom: {
                    duration: 2000,
                    style: {
                        color: 'white',
                        background: '#363636',
                        backgroundSize: '25px 25px',
                        border: '2px solid blue',
                    },
                },
            }}
        />
    );
};

export default Toast;
