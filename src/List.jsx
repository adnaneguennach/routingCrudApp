import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function List({ data }) {
    return (<>
       {data && data.length > 0 ? (
    <ul className="space-y-4">
        {data.map((e, i) => (
            <li key={i} className="border p-4 rounded-md">
                <div>
                    <strong>Task Name:</strong> {e.taskName}
                </div>
                <div>
                    <strong>Duration:</strong> {e.duration}
                </div>
                <div>
                    <strong>Details:</strong> {e.details}
                </div>
                <div>
                    <Link to={`/update/${e.taskName}`} className="text-blue-500 underline">
                        Update
                    </Link>
                    <Link to={`/delete/${e.taskName}`} className="text-blue-500 underline">
                        Delete
                    </Link>
                </div>
            </li>
        ))}
    </ul>
) : (
    <p>No tasks available.</p>
)}

        </>
    );
}

List.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            taskName: PropTypes.string.isRequired,
            duration: PropTypes.string.isRequired,
            details: PropTypes.string.isRequired,
        })
    ).isRequired,
};
