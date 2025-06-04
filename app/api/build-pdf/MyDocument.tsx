import { Document, Page, Text } from '@react-pdf/renderer';
import ReactPDFChart from 'react-pdf-charts';
import React from 'react';
import { Line, LineChart, CartesianGrid, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'G', uv: 3490, pv: 4300, amt: 2100 },
];

export default function MyDocument() {
    return (
        <Document>
            <Page size='A4' style={{ padding: 20 }}>
                <ReactPDFChart>
                    <LineChart data={data} height={300} width={500}>
                        <XAxis dataKey='name' />
                        <YAxis />
                        <CartesianGrid stroke='#eee' strokeDasharray='5' />
                        <Line dataKey='uv' stroke='#8884d8' type='monotone' />
                        <Line dataKey='pv' stroke='#82ca9d' type='monotone' />
                    </LineChart>
                </ReactPDFChart>
            </Page>
        </Document>
    );
}
