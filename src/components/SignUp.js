// src/components/SignUp.jsx
import Header from "./Header";

const SignUp = () => {
    return (
        <div className="relative h-screen">
            <Header />
            {/* Background image */}
            <div className="absolute inset-0">
                <img
                    className="w-full h-full object-cover"
                    src="/netflix-background-home.jpg"
                    alt="background"
                />
                <div className="absolute inset-0 bg-black opacity-60"></div>
            </div>

            {/* Sign-in form */}
            <div className="absolute w-full flex justify-center items-center h-screen z-20">
                <form className="bg-black bg-opacity-70 text-white p-8 rounded-lg max-w-md w-full space-y-6">
                    <h1 className="text-3xl font-bold">Sign In</h1>

                    <div>
                        <input
                            type="email"
                            placeholder="Email or mobile number"
                            className="w-full p-3 rounded bg-gray-700 placeholder-gray-400 focus:outline-none"
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-3 rounded bg-gray-700 placeholder-gray-400 focus:outline-none"
                        />
                    </div>

                    <button className="bg-red-600 hover:bg-red-700 transition w-full py-3 rounded font-semibold">
                        Sign In
                    </button>

                    <div className="flex items-center justify-between text-sm text-gray-400">
                        <div>
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember" className="ml-2">Remember me</label>
                        </div>
                        <a href="#" className="hover:underline">Need help?</a>
                    </div>

                    <div className="text-sm text-gray-400">
                        New to NetflixGPT? <span className="text-white hover:underline cursor-pointer">Sign up now.</span>
                    </div>

                    <p className="text-xs text-gray-500 pt-2">
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
