import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App2() {
  //   const [count, setCount] = useState(0);
  //   let theIDToStore = "";

  //   const auth = getAuth(); // remove - CHQ
  //   // const [data, setData] = useState({
  //   //   email: "",
  //   //   password: ""
  //   // });

  const [data, setData] = useState({});

  //   const collectionRef = collection(database, "users");

  const handleInputs = (event: any) => {
    let inputs = { [event.target.name]: event.target.value };

    setData({ ...data, ...inputs });
  };

  return (
    <div className="App-header">
      <input
        placeholder="Email"
        name="email"
        type="email"
        className="input-fields"
        onChange={(event) => handleInputs(event)}
      />
      <input
        placeholder="Password"
        name="password"
        type="password"
        className="input-fields"
        onChange={(event) => handleInputs(event)}
      />

      {/* CHQ: uncomment this submit button and hook it up to a working function.
THIS WILL BE THE LOGIN BUTTON */}
      {/* <button onClick={handleSubmit}>Submit</button> */}

      {/* <button onClick={getData}>Get Data</button>
      <button onClick={updateData}>Update Data</button> */}

      {/* <button onClick={handlelogout}>Log out</button> */}
    </div>
  );
}

export default App2;
