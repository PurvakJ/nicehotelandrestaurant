import emailjs from "@emailjs/browser";

export const sendApprovalEmail = async (
  email,
  customerName,
  bookingType
) => {

 await emailjs.send(
   "SERVICE_ID",
   "TEMPLATE_ID",
   {
     email,
     customerName,
     bookingType
   },
   "PUBLIC_KEY"
 );

};