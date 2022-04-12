import React, {useEffect} from "react";
import { observable} from "mobx";
import { observer } from "mobx-react-lite";
import axios from "axios";
// import { useEffect } from "react/cjs/react.production.min";
import {Table} from 'react-bootstrap'

//store
const myStore = observable({
    name: "",
    result: [],
    getResult() {
        return myStore.result;
    },
});


//function
const Mobxx = observer(({ myStore }) => {

    useEffect(() => {


        axios
            .get("http://localhost:3006/user")
            .then((res) => {
                console.log(res, "api");
                myStore.result.push(...res.data)
            })
            .catch((err) => {

                console.log(err, "error");
            });
    })


    return (

        <>
            <h1>Connecting with Axios</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>name</th>
                        <th>User Name</th>
                        <th>email</th>

                    </tr>
                </thead>
                <tbody>
                    {myStore.getResult().map((userd) => {
                        return (
                            <tr>
                                <td>{userd.id}</td>
                                <td>{userd.Name}</td>
                                <td>{userd.username}</td>
                                <td>{userd.email}</td>
                            </tr>
                        );
                    })})
                </tbody>

            </Table>

        </>
    )

}
)
export default Mobxx;

