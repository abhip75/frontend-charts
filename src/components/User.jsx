import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../features/userSlice";
import { deleteUsers } from "../features/userSlice";
import NavBar from "./NavBar";

const User = () => {

    const dispatch = useDispatch();
    const {users, status, error} = useSelector((state) => state.userData);

    useEffect(() => {
        dispatch(fetchUser());
    },[dispatch]);
    if(status === 'loading') return <p>Loading.....</p>;
    if(status === 'failed') return <p>{error}</p>;

    const handleDeleteUser = (id) => {
        dispatch(deleteUsers(id));
    }


    return(
        <>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">City</th>
                                    <th scope="col">Street</th>
                                    <th scope="col">Zipcode</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name.firstname}</td>
                                        <td>{user.email}</td>
                                        <td>{user.username}</td>
                                        <td>{user.address.city}</td>
                                        <td>{user.address.street}</td>
                                        <td>{user.address.zipcode}</td>
                                        <td>{user.phone}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => handleDeleteUser(user.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default User;