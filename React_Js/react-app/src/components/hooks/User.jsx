import { useState } from "react";

const SubmitUserData = (name, email, password) => {
  // alert(`${name} , ${email}, ${password}`);
  console.log(`${name}, ${email}, ${password}`);
};

function User() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  // Define onSubmit handler for the button
  const handleSubmit = () => {
    SubmitUserData(user.name, user.email, user.password);
  };
  // Define resetForm handler for the button
  const resetForm = () => {
    setUser({ name: "", email: "", password: "" });
  };
  return (
    <>
      Name:{" "}
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
      />
      <br />
      <br />
      Email:{" "}
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
      />
      <br />
      <br />
      Password:{" "}
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
      />
      <br />
      <br />
      <button onClick={resetForm}>Reset</button>
      <button onClick={handleSubmit}>Submit</button>
      <br />
      <br />
    </>
  );
}
//   // Declare state variables for each input field
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // Define onChange handlers for each input field
//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   // Define onSubmit handler for the button
//   const handleSubmit = () => {
//     submitUserData(name, email, password);
//   };

//   return (
//     <>
//       <div>
//         <h3>User Detail</h3>
//       </div>
//       Name :{" "}
//       <input type="text" name="name" value={name} onChange={handleNameChange} />
//       <br />
//       <br />
//       Email :{" "}
//       <input
//         type="email"
//         name="email"
//         value={email}
//         onChange={handleEmailChange}
//       />
//       <br />
//       <br />
//       Password :{" "}
//       <input
//         type="password"
//         name="password"
//         value={password}
//         onChange={handlePasswordChange}
//       />
//       <br />
//       <br />
//       <button onClick={handleSubmit}>Submit</button>
//     </>
//   );
//}

export default User;
