import Image from 'next/image';

import loginbtn from '../../assets/images/LoginButton.png';

const LoginButton = () => {
  return (
    <Image
      src={loginbtn}
      alt="Login"
      draggable={false}
      className="lg:hidden scale-125 md:scale-150"
    />
  );
};

export default LoginButton;
