import connectDB from '@/config/database';
import Property from '@/models/Property';
import {type NextRequest} from 'next/server';

export const GET = async (_req: NextRequest, {params}: {params: {id: string}}) => {
  try {
    await connectDB();

    const property = await Property.findById(params.id);

    if (!property) return new Response('Property not found', {status: 404});
    return new Response(JSON.stringify(property), {
      status: 200,
      headers: {'Content-Type': 'application/json'},
    });
  } catch (error) {
    return new Response(JSON.stringify({error: 'Something went wrong'}), {
      status: 500,
      headers: {'Content-Type': 'application/json'},
    });
  }
};
