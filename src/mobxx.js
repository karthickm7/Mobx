import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import axios from "axios";
import { Button } from "react-bootstrap";
import { runInAction } from "mobx";
// import {appState} from './appState'

const Mobxx = observer(({ appState }) => {
  const handlesubmit = () => {

    const fetched = async () => {
      await axios
        .post("http://localhost:3006/user", statee)
        .then((res) => {
          console.log(res.data);
          runInAction(() => appState.result = res.data[0].Name);
        })
        .catch((err) => {
          console.log(err);
        });
      };
      fetched();
  };
  console.log(appState)
  const [statee, setStatee] = useState({
    id: Date.now(),
    Name: "",
    username: "",
  });

  const handlechange = (e) => {
    setStatee({ ...statee, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <input
        placeholder="name"
        name="Name"
        value={statee.Name}
        onChange={handlechange}
      />
      <input
        placeholder="userName"
        name="username"
        value={statee.username}
        onChange={handlechange}
      />
      <Button onClick={handlesubmit}>submit</Button>
    </div>
  );
});
export default Mobxx;
