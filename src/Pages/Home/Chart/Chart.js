import React from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Usebooks from '../../../Hooks/UseBooks/Usebooks';

const Chart = () => {
    const [books] = Usebooks();

    return (

        <div>
            <h1 className='py-3 text-white' >Overview of Quantity of books in stock</h1>
            <small style={{ "color": "rgb(150 153 166 )" }} >hover or click on the chart to view details</small>
            <div className="container">
                <div className="row">
                    <div style={{ "border": "3px solid #fff", "borderRadius": "50px" }} className='mt-5 col-md-6 mx-auto ' >
                        <ResponsiveContainer width="100%" height={400}>
                            <LineChart data={books}>
                                <Tooltip />
                                <XAxis style={{ "display": "none" }} dataKey="name"></XAxis>
                                <Line type="monotone" dataKey="quantity" stroke="rgb(139 92 246 )" strokeWidth={5} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Chart;