import { renderToStream } from '@react-pdf/renderer';
import MyDocument from './MyDocument';

export async function GET() {
  const filename = 'your-file.pdf';

  const output = (await renderToStream(
    <MyDocument />
  )) as unknown as ReadableStream;

  return new Response(output, {
    status: 200,
    headers: {
      'Content-Disposition': `inline;filename="${filename}"`,
      'Content-Type': 'application/pdf',
    },
  });
}
