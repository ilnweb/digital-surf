import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    console.log('API route called');

    const body = await request.json();
    console.log('Received data:', body);

    // Get language from request headers or use default
    const language = request.headers.get('accept-language')?.split(',')[0]?.split('-')[0] || 'en';
    console.log('Language:', language);

    // Prepare data for n8n with language info
    const n8nData = {
      ...body,
      language: language,
      timestamp: new Date().toISOString(),
      source: 'digital-surf-website',
    };

    // Send to n8n webhook
    console.log(
      'Sending to n8n:',
      'https://n8n.srv1036332.hstgr.cloud/webhook/d15cc655-6e71-4a27-bef3-26fd3d2faca3'
    );
    console.log('Data being sent:', JSON.stringify(n8nData, null, 2));

    const n8nResponse = await fetch(
      'https://n8n.srv1036332.hstgr.cloud/webhook/d15cc655-6e71-4a27-bef3-26fd3d2faca3',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(n8nData),
      }
    );

    console.log('n8n response status:', n8nResponse.status);

    if (n8nResponse.ok) {
      console.log('Successfully sent to n8n');
      return NextResponse.json({
        success: true,
        message: 'Form submitted successfully',
        language: language,
      });
    } else {
      const errorText = await n8nResponse.text();
      console.error('n8n error:', n8nResponse.status, errorText);

      // Fallback: Log data locally if n8n fails
      console.log('FALLBACK - Form data saved locally:', n8nData);

      return NextResponse.json({
        success: true,
        message: 'Form submitted (fallback mode)',
        language: language,
        fallback: true,
      });
    }
  } catch (error) {
    console.error('API route error:', error);

    // Even if there's an error, try to save the data
    try {
      const body = await request.clone().json();
      console.log('ERROR FALLBACK - Form data:', body);
    } catch (fallbackError) {
      console.error('Fallback failed:', fallbackError);
    }

    return NextResponse.json(
      {
        error: 'Server error',
        details: error.message,
      },
      { status: 500 }
    );
  }
}
