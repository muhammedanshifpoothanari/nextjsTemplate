import React from 'react';

const Login2 = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-purple-200" style={{backgroundImage:"url('./ajmalaju.jpg')"}}>
            <div className="bg-white bg-opacity-70 backdrop-blur-md p-8 rounded-lg shadow-xl w-full sm:w-96">
                <h2 className="text-2xl font-bold mb-8 text-center">Admin Login</h2>
                <form id="loginForm" className="space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="usertype" className="block mb-1 text-left">User Type:</label>
                        <select id="usertype" className="form-control border border-gray-300 rounded-lg px-3 py-2" required>
                            <option value="">Select User Type</option>
                            <option value="admin">Admin</option>
                            <option value="hr">HR</option>
                            <option value="guest">Guest</option>
                            <option value="junior">Junior Developer</option>
                            <option value="senior">Senior Developer</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="username" className="block mb-1 text-left">Username:</label>
                        <input type="text" id="username" className="form-control border border-gray-300 rounded-lg px-3 py-2" placeholder="Username" required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="block mb-1 text-left">Password:</label>
                        <input type="password" id="password" className="form-control border border-gray-300 rounded-lg px-3 py-2" placeholder="Password" required />
                    </div>
                    <div className="flex justify-center space-x-4">
                        <a href="/nav" className="btn-login w-1/3 h-11 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">Login</a>
                        <a href="/signup" className="btn-signup w-1/3 h-11 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">Sign Up</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login2;
