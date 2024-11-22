import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './Create';
import Update from './Update';
import List from './List';
import Delete from './Delete';

export default function App() {
    const [data, setData] = useState([]);

    const addData = (singleData) => {
        setData([...data, singleData]);
    };

    const update = (id, obj) => {
        setData(data.map((e, i) => (e.taskName === id ? obj : e)));
        console.log(data)
    };

    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Create addData={addData} />} />
                <Route path="/update/:id" element={<Update update={update} data={data} />} />
                <Route path="/delete/:id" element={<Delete deleter={setData} />} />
                <Route path="/list" element={<List data={data} />} />
            </Routes>
        </BrowserRouter>
    );
}
