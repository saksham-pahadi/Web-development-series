import Razorpay from "razorpay";
import { NextResponse } from "next/server";
import connectDB from "@/db/connectDb";
import Payment from "@/models/Payment";

export async function POST(req) {
  try {
    await connectDB()

    const body = await req.json(); // 👈 get data from client (amount etc.)
    let p = await Payment.findOne({ oid: body.order.i })
    // if (!p) {
    //   return NextResponse.error("Order not found");
    // }
    // else {


      const razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
      });

      const options = {
        amount: body.amount * 100, // ₹500 (amount in paise)
        currency: "INR",
        receipt: "receipt_order_" + Date.now(),
      };

      const order = await razorpay.orders.create(options);
       
      // const updatedPayment = await Payment.findByIdAndUpdate({oid: order.id},{done:"true"},{new:true})


      return NextResponse.json({ orderId: order.id });
    // }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
