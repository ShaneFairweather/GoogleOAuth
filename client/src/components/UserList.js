import React from 'react';
import { Card, CardHeader, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const UserList = (props) => {
    const renderUsers = () => {
        if(props.users) {
            return props.users.map((user) => {
                return (
                    <Link to={{
                        pathname: `/users/${user.profileId}/blog`,
                        state: {
                            img: user.image,
                            name: user.username
                        }
                    }}>
                        <div className="user-list__item" key={user._id}>
                            <div>
                                <img className="user-list__icon" src={user.image} alt="userImg" height="25"/>
                                &nbsp; {user.username}
                            </div>
                        </div>
                    </Link>

                )
            })
        }
    };

    return (
        <Card>
            <h3>Users</h3>
            <div className="user-list">
                {renderUsers()}
            </div>
        </Card>
    )
};

export default UserList;