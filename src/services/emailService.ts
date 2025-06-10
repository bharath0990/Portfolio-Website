import emailjs from '@emailjs/browser';

// EmailJS configuration - Replace these with your actual values from EmailJS dashboard
const EMAILJS_SERVICE_ID = 'service_portfolio'; // From EmailJS Email Services
const EMAILJS_TEMPLATE_ID = 'template_portfolio'; // From EmailJS Email Templates  
const EMAILJS_PUBLIC_KEY = 'gcwCO9YP4RKD70Rzu'; // From EmailJS Account → General

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Bharath Kumar Reddy',
      reply_to: formData.email,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('Email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};

// Initialize EmailJS
export const initializeEmailJS = () => {
  emailjs.init(EMAILJS_PUBLIC_KEY);
};