import React from 'react';
import './Home.css';

const Home = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    const tableData = [
        { id: 1, name: 'Michael Holz', dateCreated: '04-10-2013', role: 'Admin', status: 'Active' },
        { id: 2, name: 'Paula Wilson', dateCreated: '05-08-2014', role: 'Publisher', status: 'Active' },
        { id: 3, name: 'Antonio Moreno', dateCreated: '11-05-2015', role: 'Publisher', status: 'Suspended' },
        { id: 4, name: 'Mary Saveley', dateCreated: '06-09-2016', role: 'Reviewer', status: 'Active' },
        { id: 5, name: 'Martin Sommer', dateCreated: '12-08-2017', role: 'Moderator', status: 'Inactive' }
    ];

    return (
        <div className='Home'>
            <h1>Welcome, {user.name}</h1>
            <h1>Home Page</h1>
            <div className='table-container'>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Date Created</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={row.id}>
                                <td>{index + 1}</td>
                                <td>{row.name}</td>
                                <td>{row.dateCreated}</td>
                                <td>{row.role}</td>
                                <td>{row.status}</td>
                                <td>
                                    <i className="fa-solid fa-gear" style={{color: "#74C0FC"}}></i>
                                    <i className="fa-solid fa-circle-xmark" style={{color: "#ff0000"}}></i>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home;
