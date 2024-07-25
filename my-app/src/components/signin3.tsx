"use client"




const Login3=() => {
    return (
        <div
            className="flex min-h-screen align-middle items-center justify-center"
            style={{ backgroundImage: "url('./al.jpg')", backgroundSize: 'cover' }}
        >
            <div className="bg-slate-200 w-96 h-96 p-10 rounded-lg shadow-lg flex flex-col items-center justify-center">
                <form className="flex flex-col space-y-4">
                  <div className="pr-36">
                    <h1 className="  text-4xl font-bold   decoration-8 	">Sign in</h1>
                  </div>
                <div>
                        <label htmlFor="role" className="block mb-2">Role</label>
                        <select
                            id="role"
                            name="role"
                            className="p-2 border border-gray-300 rounded w-full"
                        >
                            <option value="admin">Admin</option>
                            <option value="superadmin">Super Admin</option>
                        </select>
                    </div>
                    <div>
                      
                        <input
                            type="text"
                            name="Username"
                            placeholder="Username"
                            className="p-2 border border-gray-300 rounded w-full"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="Password"
                            placeholder="Password"
                            className="p-2 border border-gray-300 rounded w-full"
                        />
                    </div>
                   
                    <div>
                        <button
                            type="submit"
                            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700 w-full"
                        >
                            Submit
                        </button>
                    </div>
                    <div className="text-center">
                        Don't have an account?{" "}
                        <span className="text-blue-500 cursor-pointer" ><a href="/register">Sign up</a></span>
                    </div>
                </form>
            </div>
        </div>
    );
  }
  
  export default Login3;