const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event) => {
  // Solo permitir POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    const data = JSON.parse(event.body);

    const { name, email, message, company, role, inquiryType, resume } = data;

    if (!name || !email || !message || !company || !role || !inquiryType) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing fields' }),
      };
    }

    if (inquiryType === 'candidate') {
      if (!resume) {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: 'Missing resume' }),
        }
      }
      if (resume.archivoContentType !== 'application/pdf') {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: 'Missing archivoContentType' }),
        }
      }
    }

    const mailOptions = {
      from: 'Tu Web <onboarding@resend.dev>',
      // to: ['operations@engimatchllc.com'],
      to: 'oscars.cortesramirez@gmail.com',
      subject: `Nuevo mensaje de ${name}`,
      reply_to: email,
      html: `
        <div style="max-width:480px;margin:32px auto;padding:24px;background:#f9fafb;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,0.06);font-family:sans-serif;color:#222;">
          <div style="border-bottom:1px solid #e5e7eb;padding-bottom:16px;margin-bottom:20px;">
            <h2 style="margin:0 0 4px 0;font-size:1.5rem;color:#2563eb;">¡Tienes un nuevo contacto!</h2>
            <p style="margin:0;font-size:1rem;color:#374151;">Alguien llenó el formulario de tu landing page.</p>
          </div>
          <div style="margin-bottom:18px;">
            <p style="margin:0 0 8px 0;"><strong>Nombre:</strong> <span style="color:#111827;">${name}</span></p>
            <p style="margin:0 0 8px 0;"><strong>Email:</strong> <span style="color:#111827;">${email}</span></p>
            <p style="margin: 0 0 8px 0;"><strong>Company:</strong> <span style="color: #111827;">${company}</span></p>
            <p style="margin: 0 0 8px 0;"><strong>Role:</strong> <span style="color: #111827;">${role}</span></p>
            <p style="margin: 0 0 8px 0;"><strong>Inquiry:</strong> <span style="color: #111827;">${inquiryType}</span></p>
          </div>
          <div style="background:#fff;border-radius:8px;padding:16px 14px;border:1px solid #e5e7eb;margin-bottom:18px;">
            <p style="margin:0 0 6px 0;font-weight:600;color:#2563eb;">Mensaje:</p>
            <p style="margin:0;color:#374151;white-space:pre-line;">${message}</p>
          </div>
          <div style="font-size:0.85rem;color:#6b7280;text-align:center;margin-top:18px;">
            <p style="margin:0;">Recibiste este correo porque alguien usó el formulario de contacto en tu sitio web.</p>
          </div>
        </div>
      `,
    }

    if (inquiryType === 'candidate' && resume) {
      mailOptions.attachments = [
        {
          content: resume.archivo,
          filename: 'candidate: ' + name + ' CV.pdf',
        }
      ];
    }

    // Enviar correo
    const response = await resend.emails.send(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, response }),
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error sending email' }),
    };
  }
};
