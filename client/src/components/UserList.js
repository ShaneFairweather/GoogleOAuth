import React from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

const UserList = (props) => {
    console.log(props.users);
    const renderUsers = () => {
        if(props.users) {
            return props.users.map((user) => {
                return (
                    <ListGroupItem key={user._id}>
                        <div>
                            <img className="userListIcon" src={user.image} alt="userImg" height="25"/>
                            &nbsp; {user.username}
                        </div>
                    </ListGroupItem>
                )
            })
        }
    }

    return (
        <Panel>
            <h3>Users</h3>
            <ListGroup className="userList">
                {renderUsers()}
            </ListGroup>
        </Panel>
    )
}

export default UserList;