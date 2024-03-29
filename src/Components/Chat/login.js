// Importing necessary components and hooks
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { useAuth } from "../context/AuthContext";



// Component for the Login page
const Login = () => {
  // State to manage input data (username and password)
  const [data, setData] = useState({
    username: "",
    password: "",
    role:""
  });

  // Accessing the login function from the AuthContext
  const { login } = useAuth();

  // Function to update state when input data changes
  const handleDataChange =
    (name) => (e) => {
      setData({
        ...data,
        [name]: e.target.value,
      });
    };
     const handleRoleChange = (e) => {
       // Update the role field in the data state
       setData({
         ...data,
         role: e.target.value,
       });
     };

  // Function to handle the login process
  const handleLogin = async () => await login(data);

  return (
    <div className="flex justify-between">
      <div className="w-[17%]">
    </div>
    <div className="flex justify-center items-center flex-col h-screen w-screen">
      <h1 className="text-3xl font-bold"> Chat App</h1>
      <div className="max-w-5xl w-1/2 p-8 flex justify-center items-center gap-5 flex-col bg-white shadow-md rounded-2xl my-16 border-secondary border-[1px]">
        <h1 className="inline-flex items-center text-2xl mb-4 flex-col">
          <LockClosedIcon className="h-8 w-8 mb-2" /> Login
        </h1>
        {/* Input for entering the username */}
        <Input
          className="bg-[#FFFAFA] text-dark placeholder:text-dark"
          placeholder="Enter the username..."
          value={data.username}
          onChange={handleDataChange("username")}
        />
        {/* Input for entering the password */}
        <Input
          className="bg-[#FFFAFA] text-dark placeholder:text-dark"
          placeholder="Enter the password..."
          type="password"
          value={data.password}
          onChange={handleDataChange("password")}
        />
        <select
          className="block w-full rounded-xl outline outline-[1px] outline-zinc-400 border-0 py-4 px-5 bg-[#FFFAFA] text-dark placeholder:text-dark"
          onChange={handleRoleChange}
          value={data.role}
        >
          <option value="">Select a role</option>
          <option value="ADMIN">Admin</option>
          <option value="CLIENT">Client</option>
          <option value="DESIGNER">Designer</option>
          <option value="SUPERVISER">Supervisor</option>
          <option value="VISUALIZER">3D Visualizer</option>

          {/* Add more roles as needed */}
        </select>
        {/* Button to initiate the login process */}
        <Button
          disabled={Object.values(data).some((val) => !val)}
          fullWidth
          onClick={handleLogin}
        >
          Login
        </Button>
        {/* Link to the registration page */}
        <small className="text-dark-300">
          Don&apos;t have an account?{" "}
          <a className="text-indigo-500 hover:underline" href="/register">
            Register
          </a>
        </small>
      </div>
    </div>
    </div>
  );
};

export default Login;
