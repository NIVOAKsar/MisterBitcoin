
/***** REACT *****/
import React from 'react';

/***** STORE *****/
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, Area } from 'recharts';

const Chart = (props) => {
    const chartData = props.chartData.map(data => ({ 'Rate': data }));
    const fillColor = '#80dfff';
    const strokeColor = '#8642f4';
    return (
        <section className="chart">
            <h1>{props.chartName}</h1>
            <AreaChart
                data={chartData}
                width={730}
                height={250}
                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                    type="monotone"
                    dataKey="Rate"
                    stroke={strokeColor}
                    fill={fillColor} />
            </AreaChart>
        </section >
    );
};

export default Chart;








