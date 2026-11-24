// วาง URL ของ Apps Script Web App ตรงนี้ (ดูวิธีใน apps-script.gs)
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz4aEmGvRHuifqZjsPamo3Uk2BC9uOs-apZ1yT5unF_Rh8RfVHEwmR27yxHX1rrfug/exec";

const PRODUCTS = [
  { sku: "SOAP-A", name: "สบู่น้ำผึ้งมะนาว", price: 59, image: "images/soap-a.jpg", desc: "ผิวสะอาด นุ่มชุ่มชื้น กลิ่นหอมสดชื่น" },
  { sku: "SOAP-B", name: "สบู่ลาเวนเดอร์", price: 69, image: "images/soap-b.jpg", desc: "กลิ่นลาเวนเดอร์ผ่อนคลาย อ่อนโยนต่อผิว" }
];

const SENDER = { name: "ร้านสบู่ของเรา", phone: "08x-xxx-xxxx", address: "ที่อยู่ร้าน (แก้ตรงนี้)" };
