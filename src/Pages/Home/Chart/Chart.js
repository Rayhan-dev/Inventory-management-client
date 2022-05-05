import React from 'react';
import { LineChart, Line, XAxis,  Tooltip, ResponsiveContainer } from 'recharts';
import Usebooks from '../../../Hooks/UseBooks/Usebooks';

const Chart = () => {
    const [books] = Usebooks();
   
    return (

        <div>
            <h1 className='py-3' style={{ "color": "orangered" }}>Overview of Quantity and Price of books in stock</h1>
            <small className='text-primary'>hover or click on the chart to view details</small>
            <div className='w-50 mx-auto border-3 my-5 border-black rounded-lg' >
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={books}>
                    <Tooltip />
                    <XAxis style={{"display":"none"}} dataKey="name"></XAxis>
                    <Line type="monotone" dataKey="quantity" stroke="orangered" strokeWidth={5} />
                </LineChart>
            </ResponsiveContainer>
            </div>
            
        </div>

    );
};

export default Chart;