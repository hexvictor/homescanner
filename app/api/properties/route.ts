import connectDB from '@/config/database';
import Property from '@/models/Property';

export const GET = async () => {
  try {
    await connectDB();

    const properties = await Property.find({});
    return new Response(JSON.stringify(properties), {
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
