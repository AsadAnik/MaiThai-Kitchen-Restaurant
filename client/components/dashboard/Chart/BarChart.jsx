import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { primaryColor } from '@/utils/variables';


// The Custom Tooltip for Bar Chart..
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className='custom-tooltip'>
                <p className="label">{`${payload[0].payload.label} : ${payload[0].value}`}</p>
                <p className="">{`Date : ${label}`}</p>
            </div>
        );
    }
};


const CustomBarChart = ({ data, barSizeAtMobile = 15, barRadiusAtMobile = 5 }) => {
    const [pageWidth, setPageWidth] = useState(null);
    const mobileWidth = 768;

    // Using useLayoutEffect in NextJS App instead of useEffect Hook..
    useEffect(() => {
        const handleResize = () => setPageWidth(window.innerWidth);
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (!pageWidth) {
        return (
            <h3>Loading...</h3>
        );
    }

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <XAxis
                    dataKey="x"
                    stroke="white"
                    axisLine={{ stroke: "#fff" }}
                    fontSize={pageWidth <= mobileWidth ? 11 : 15}
                    tick={{ fill: "gray" }}
                />

                <YAxis
                    dataKey="y"
                    stroke="white"
                    axisLine={{ stroke: "#fff" }}
                    fontSize={pageWidth <= mobileWidth ? 11 : 15}
                    tick={{ fill: primaryColor }}
                />

                <Tooltip
                    content={<CustomTooltip />}
                    cursor={{ fill: "#fff" }}
                    wrapperStyle={{
                        width: 200,
                        backgroundColor: primaryColor,
                        fontSize: 13,
                        color: "white",
                        textAlign: "center",
                    }}
                />

                <CartesianGrid stroke="#fff" strokeDasharray="5 5" />

                <Bar
                    dataKey="y"
                    fill={primaryColor}
                    barSize={pageWidth <= mobileWidth ? barSizeAtMobile : 30}
                    radius={pageWidth <= mobileWidth ? barRadiusAtMobile : 10}
                />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default CustomBarChart;