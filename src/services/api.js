// api.js
import emailjs from "@emailjs/browser";

// EmailJS Configuration
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_a0kojyd";
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_apkuejb";
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "8IfMH-tJ6Z8Kp9kE5";

const API =
  "https://script.google.com/macros/s/AKfycbx9kmxPl0SeFpVHloBgD-e47Cum68_vgdEu7ZCRqZIsks3gWNRrpWbZF32YTRrVAu4i3Q/exec";

// =========================
// BOOKING FUNCTIONS
// =========================

export const roomBooking = async (data) => {
  const response = await fetch(API, {
    method: "POST",
    body: JSON.stringify({
      action: "roomBooking",
      ...data,
    }),
  });

  return response.json();
};

export const hallBooking = async (data) => {
  const response = await fetch(API, {
    method: "POST",
    body: JSON.stringify({
      action: "hallBooking",
      ...data,
    }),
  });

  return response.json();
};

export const contactQuery = async (data) => {
  const response = await fetch(API, {
    method: "POST",
    body: JSON.stringify({
      action: "contact",
      ...data,
    }),
  });

  const result = await response.json();
  
  // After saving to sheet, send confirmation email to customer
  if (result.success) {
    try {
      await sendContactConfirmationEmail(data);
    } catch (error) {
      console.error("Error sending contact confirmation email:", error);
    }
  }
  
  return result;
};

// =========================
// REVIEW FUNCTION
// =========================

export const submitReview = async (data) => {
  const response = await fetch(API, {
    method: "POST",
    body: JSON.stringify({
      action: "review",
      ...data,
    }),
  });

  return response.json();
};

// =========================
// OFFER MANAGEMENT FUNCTIONS
// =========================

export const addOffer = async (data) => {
  const response = await fetch(API, {
    method: "POST",
    body: JSON.stringify({
      action: "addOffer",
      ...data,
    }),
  });

  return response.json();
};

export const updateOffer = async (data) => {
  const response = await fetch(API, {
    method: "POST",
    body: JSON.stringify({
      action: "updateOffer",
      ...data,
    }),
  });

  return response.json();
};

export const deleteOffer = async (id) => {
  const response = await fetch(API, {
    method: "POST",
    body: JSON.stringify({
      action: "deleteOffer",
      id: id,
    }),
  });

  return response.json();
};

export const getOffers = async () => {
  const response = await fetch(`${API}?action=getOffers`);
  return response.json();
};

export const getReviews = async () => {
  const response = await fetch(`${API}?action=getReviews`);
  return response.json();
};

// =========================
// STATUS UPDATE FUNCTION
// =========================

export const updateStatus = async (data) => {
  const response = await fetch(API, {
    method: "POST",
    body: JSON.stringify({
      action: "updateStatus",
      ...data,
    }),
  });

  return response.json();
};

// =========================
// GET ALL DATA
// =========================

export const getAllData = async () => {
  const response = await fetch(`${API}?action=getAll`);
  return response.json();
};

// =========================
// UNIFIED EMAIL FUNCTION (FIXED)
// =========================

export const sendEmail = async (params) => {
  const {
    email,
    name,
    emailType,
    status,
    bookingType,
    phone,
    message
  } = params;

  if (!email || email === "N/A" || email === "") {
    console.log("No valid email provided, skipping email send");
    return { success: true, skipped: true };
  }

  // Get current date/time
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();
  const year = now.getFullYear();

  // Common hotel info
  const hotelInfo = {
    hotel_name: "Nice Hotel & Restaurant",
    hotel_address: "Near chugli ghar, Mansa 151505",
    hotel_phone: "+91 9216400005",
    hotel_email: "deepaksingla239@gmail.com",
  };

  // Build template params based on email type
  let templateParams = {
    // Always include
    to_email: email,
    to_name: name || "Guest",
    customer_name: name || "Guest",
    date,
    time,
    year,
    ...hotelInfo,
  };

  // Add type-specific fields
  if (emailType === "contact") {
    templateParams = {
      ...templateParams,
      email_type: "contact",
      email_heading: "Thank you for contacting us!",
      customer_email: email,
      customer_phone: phone || "N/A",
      message: message || "No message provided",
      content: `
        Thank you for contacting Nice Hotel & Restaurant.
        
        We have received your message and our team will get back to you shortly.
        
        Your message: "${message || "No message provided"}"
        
        We look forward to serving you!
      `,
      // Placeholders for booking fields (will be empty)
      booking_type: "",
      status: "",
      status_emoji: "",
    };
  } 
  else if (emailType === "booking") {
    const statusEmoji = status === "Approved" ? "✅" : "❌";
    
    const content = status === "Approved" 
      ? `
        🎉 Congratulations!
        
        Your ${bookingType || "booking"} has been APPROVED.
        
        We are pleased to inform you that your booking request has been confirmed.
        
        We look forward to welcoming you to Nice Hotel & Restaurant!
        
        If you have any questions, please don't hesitate to contact us.
      `
      : `
        We regret to inform you that your booking request could not be approved at this time.
        
        Booking: ${bookingType || "Booking"}
        
        Please contact us directly for more information or assistance with alternative options.
        
        We apologize for any inconvenience and hope to serve you in the future.
      `;

    templateParams = {
      ...templateParams,
      email_type: "booking",
      email_heading: status === "Approved" 
        ? "Your Booking Has Been Approved! 🎉" 
        : "Your Booking Status",
      booking_type: bookingType || "Booking",
      status: status,
      status_emoji: statusEmoji,
      message: content,
      content: content,
      // Placeholders for contact fields
      customer_email: email,
      customer_phone: "",
    };
  }

  try {
    console.log(`Sending ${emailType} email to:`, email);
    console.log("Template Params:", templateParams);

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );
    
    console.log("Email sent successfully:", response);
    return { success: true, response };
  } catch (error) {
    console.error("Email send error:", error);
    console.error("Error details:", error.text || error.message);
    return { success: false, error: error.text || error.message };
  }
};

// =========================
// CONTACT CONFIRMATION EMAIL
// =========================

export const sendContactConfirmationEmail = async (data) => {
  return sendEmail({
    email: data.email,
    name: data.name,
    emailType: "contact",
    phone: data.phone,
    message: data.message,
  });
};

// =========================
// BOOKING APPROVAL/REJECTION EMAIL
// =========================

export const sendApprovalEmail = async (
  email,
  customerName,
  bookingType,
  status
) => {
  return sendEmail({
    email,
    name: customerName,
    emailType: "booking",
    status,
    bookingType,
  });
};

// =========================
// ADMIN NOTIFICATION (Separate function)
// =========================

export const sendContactAdminNotification = async (data) => {
  const { name, email, phone, message } = data;
  
  try {
    console.log("Sending admin notification for contact from:", email);

    const templateParams = {
      to_email: "deepaksingla239@gmail.com",
      admin_name: "Admin",
      customer_name: name || "Customer",
      customer_email: email || "N/A",
      customer_phone: phone || "N/A",
      message: message || "No message provided",
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      year: new Date().getFullYear(),
      hotel_name: "Nice Hotel & Restaurant",
      hotel_phone: "+91 9216400005",
      hotel_email: "deepaksingla239@gmail.com",
      hotel_address: "Near chugli ghar, Mansa 151505",
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      "template_admin_contact", // Create this template in EmailJS
      templateParams,
      EMAILJS_PUBLIC_KEY
    );
    
    console.log("Admin notification sent successfully:", response);
    return { success: true, response };
  } catch (error) {
    console.error("Admin notification error:", error);
    return { success: false, error: error.text || error.message };
  }
};

// =========================
// UPDATED CONTACT QUERY WITH EMAIL
// =========================

export const contactQueryWithEmail = async (data) => {
  try {
    const response = await fetch(API, {
      method: "POST",
      body: JSON.stringify({
        action: "contact",
        ...data,
      }),
    });

    const result = await response.json();
    
    if (result.success) {
      await sendContactConfirmationEmail(data);
      await sendContactAdminNotification(data);
      return { success: true, message: "Query submitted and emails sent!" };
    }
    
    return result;
  } catch (error) {
    console.error("Contact query error:", error);
    return { success: false, error: error.message };
  }
};