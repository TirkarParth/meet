import { useState, useEffect, useCallback, useMemo } from 'react';
import { Pie, PieChart, ResponsiveContainer, Cell } from 'recharts';

const EventGenresChart = ({ events }) => {
  const [data, setData] = useState([]);

  const genres = useMemo(() => ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'], []);
  const colors = useMemo(() => ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6347'], []);

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    outerRadius,
    percent,
    index,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) * 0.6;
    const y = cy + radius * Math.sin(-midAngle * RADIAN) * 0.6;
    return percent ? (
      <text
        x={x}
        y={y}
        fill="var(--color-text)"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
      </text>
    ) : null;
  };

  const getData = useCallback(() => {
    const data = genres.map((genre) => {
      const filteredEvents = events.filter((event) =>
        event.summary.includes(genre)
      );

      return {
        name: genre,
        value: filteredEvents.length,
      };
    });
    return data;
  }, [events, genres]);

  useEffect(() => {
    setData(getData());
  }, [getData]);

  return (
    <ResponsiveContainer width="99%" height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenresChart;
