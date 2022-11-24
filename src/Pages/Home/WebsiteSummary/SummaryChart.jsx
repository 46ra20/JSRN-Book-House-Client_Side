import React from 'react';
import { VictoryPie, VictoryTooltip } from 'victory';

const SummaryChart = () => {
    return (
        <div>
            <VictoryPie
                data={[
                    { x: 1, y: 4, label: "Customer 10K" },
                    { x: 2, y: 7, label: "visitors 20K" },
                    { x: 3, y: 6, label: "Viewer 50K" },
                    { x: 6, y: 5, label: "Sells 1k" },
                    { x: 5, y: 4, label: "Products 500+" },
                    { x: 3, y: 5, label: "Buyer 20K" },
                    { x: 7, y: 6, label: "Seller 2K" }
                ]}
                labelRadius={({ innerRadius }) => innerRadius + 5}
                radius={({ datum }) => 50 + datum.y * 20}
                innerRadius={60}
                className='w-1/2'
                style={{ labels: { fill: "rgb(29 78 216)",padding:10 ,fontSize: 20, color: 'red'} }}
                labels={({ datum }) => `x: ${datum.x}, y: ${datum.y}`}
                labelComponent={<VictoryTooltip dy={0} centerOffset={{ x: 25 }} />}
            />
        </div>
    );
};

export default SummaryChart;