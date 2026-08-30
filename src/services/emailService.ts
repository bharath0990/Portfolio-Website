import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_2cz8kas';
const EMAILJS_TEMPLATE_ID = 'template_oiynggb';
const EMAILJS_PUBLIC_KEY = 'o064TqIQcXDXxUh66';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const templateParams = {
      name: formData.name,
      email: formData.email,
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      reply_to: formData.email,
      to_name: 'P. Bharath Kumar Reddy',
      title: 'Portfolio Website',
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