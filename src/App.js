import React, {
  useState,
  useEffect
} from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

export default function App() {
  const [result, setResult] = useState('');

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json'
      );
      const data = await res.json();

      setResult(data.data);
    }

    fetchData();

    // eslint-disable-next-line
  }, []);

  return (
    <div id="x-axis"
      style={{
        height: '85vh'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '7%',
          width: '80%',
          height: '75%'
        }}
      >
        <h2
          id="title"
          className="text-center"
        >
          United States GDP 
        </h2>
        <p className="text-center">Quaterly from 1947 to 2015</p>
        <ResponsiveContainer>
          <BarChart
            width={820}
            height={600}
            data={result}
            margin={{
              top: 10,
              right: 20,
              left: 40,
              bottom: 15
            }}
          >
            <defs>
              <linearGradient
                id="colorUv"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop
                  offset="20%"
                  stopColor="#fa6565"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="#fd3a3a"
                  stopOpacity={0.2}
                />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              tick={{ fill: '#83d6f3' }}
              id="x-axis"
              dataKey="0"
              label={{
                value: 'Years',
                fill: '#83d6f3',
                fontSize: '1.2rem',
                dy: 15
              }}
            />

            <YAxis
              tick={{ fill: '#83d6f3' }}
              label={{
                value:
                  'Gross Domestic Product $ Billions',
                fill: '#83d6f3',
                angle: -90,
                dx: -40,
                fontSize: '1.2rem'
              }}
            />
            <Tooltip
              separator=": "
              formatter={(value) => `${value} Bn`}
              id="tooltip"
              wrapperStyle={{
                width: 120,
                color: '#000',
                border: '1px solid #000'
              }}
            />
            <Bar
              dataKey="1"
              name="$"
              fill="url(#colorUv)"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
