import React from 'react';
import { Link } from 'react-router-dom';

let AdminDetails = ({ blogdata }) => {
    return (
        <div className="card">
            <div className="card-header">
                <div className="card-body">{blogdata.title}
                    <Link key={blogdata.id} className="btn btn-info float-right" to={`/${blogdata.id}`}>More Details</Link>
                    <button className="btn btn-info float-right m-2">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default AdminDetails;