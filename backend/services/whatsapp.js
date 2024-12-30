const axios = require('axios');

const sendWhatsAppMessage = async (phoneNumber, message) => {
  try {
    const response = await axios.post(
      process.env.WHATSAPP_API_URL, // Replace with actual WhatsApp API URL
      {
        to: phoneNumber,
        body: message,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.WHATSAPP_API_KEY}`,
        },
      }
    );
    return response.data;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
};

module.exports = { sendWhatsAppMessage };
