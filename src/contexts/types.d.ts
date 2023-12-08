interface UserContext {
	setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
	setuserID: React.Dispatch<React.SetStateAction<number | undefined>>;
	setUserName: React.Dispatch<React.SetStateAction<string | undefined>>;
	loadingAuth: boolean;
	isLoggedIn: boolean;
	userID: number | undefined;
	userName: string | undefined;
	qrCode: string | undefined;
	userData: {
		user_name: string;
		user_email: string;
		sex: string;
		nationality: string;
		address: string;
		city: string;
		state: string;
		pincode: string;
		phno: string;
		degree: string;
		yearOfStudy: string;
		college: string;
		othercollege: string;
		sponsor: string;
		voucher_name: string;
		referral_code: string;
		acco: string | null;
	} | null;
}