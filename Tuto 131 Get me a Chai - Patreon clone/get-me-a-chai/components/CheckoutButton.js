"use client";
import { useState } from "react";

export default function CheckoutButton(params) {
  const [loading, setLoading] = useState(false);
  let amount=params.amount

  const handlePayment = async () => {
    setLoading(true);
    const res = await fetch("/api/razorpay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }), // 👈 send amount to server
    });
    const data = await res.json();
    console.log(params.amount)

    if (!data.orderId) {
      alert("Failed to create order");
      setLoading(false);
      return;
    }


    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ,
      amount: 10000,
      currency: "INR",
      name: "Get Me A Chai",
      description: "Test Transaction",
      order_id: data.orderId,
      handler: function (response) {
        alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
      },
      theme: { color: "#1d293d" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
    setLoading(false);
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="bg-slate-800 p-3 rounded-lg"
    >
      {loading ? "Processing..." : `Pay ₹${amount}`}
    </button>
  );
}
