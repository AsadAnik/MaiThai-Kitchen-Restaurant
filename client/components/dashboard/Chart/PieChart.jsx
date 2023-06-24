import { PieChart, Pie, Cell } from 'recharts';

const PIE_COLORS = ["tomato", "lightgray"];

const CustomPieChart = ({ data }) => {
    return (
        <PieChart width={1000} height={800}>
            <Pie
                data={data}
                cx={100}
                cy={100}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={4}
                dataKey="value"
            >
                {data.map((_, index) => (
                    <Cell
                        key={`cell-${index}`}
                        fill={PIE_COLORS[index % PIE_COLORS.length]}
                    />
                ))}
            </Pie>
        </PieChart>
    );
};

export default CustomPieChart;