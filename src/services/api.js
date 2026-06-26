import emailjs from "@emailjs/browser";

// EmailJS Configuration - Replace with your actual keys
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

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

  return response.json();
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
// EMAIL FUNCTIONS
// =========================

export const sendApprovalEmail = async (
  email,
  customerName,
  bookingType,
  status
) => {
  const statusText = status === "Approved" ? "approved" : "rejected";
  const message =
    status === "Approved"
      ? `We are pleased to inform you that your ${bookingType} has been approved. We look forward to serving you!`
      : `We regret to inform you that your ${bookingType} has been rejected. Please contact us for more information.`;

  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        to_email: email,
        customer_name: customerName,
        booking_type: bookingType,
        status: status,
        status_text: statusText,
        message: message,
        date: new Date().toLocaleDateString(),
      },
      EMAILJS_PUBLIC_KEY
    );
    return { success: true };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, error: error };
  }
};