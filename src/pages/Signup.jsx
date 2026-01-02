import {Link} from "react-router-dom";

const Signup = () => {
    return(
        <div className="min-h-screen bg-[#2f8f8b] flex items-center justify-center">
        <div className="relative w-[360px] h-[520px] bg-[#f4f6e8] rounded-[29px] overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-[45%] bg-[#a7c77a] clip-diagonal"></div>

        {/*content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6">
         <h2 className="text-2xl font-bold text-[@2f4f2f] mb-2">
            Welcome
         </h2>
         <p className="text-sm text-[#4b5f52] mb-8">
            Create an account or log in 
         </p>
         <input type="text" placeholder="Full Name"
         className="mb-4 px-4 py-2 rounded-md bg-[#e7efd8] focus:outline-none focus:ring-2 focus:ring-[#3f6b4f]" />

         <input type="email" placeholder="Email"
         className="mb-4 px-4 py-2 rounded-md bg-[#e7efd8] focus:outline-none focus:ring-2 focus:ring-[#3f6b4f]" />
         
         <input type="password" placeholder="Password"
         className="mb-4 px-4 py-2 rounded-md bg-[#e7efd8] focus:outline-none focus:ring-2 focus:ring-[#3f6b4f]" />

         <button className="border border-[#355c44] text-[#355c44] py-2 rounded-md hover:bg-[#355c44] hover:text-white transition">
            Sign Up
         </button>

         <p className="text-sm text-center text-gray-600 mt-6">
            Already have an account?{" "}
         <Link to="/login" className="text-[#355c44] font-medium">
            Login</Link>
         </p>
        </div>
        </div>
        </div>

    );
};
export default Signup;