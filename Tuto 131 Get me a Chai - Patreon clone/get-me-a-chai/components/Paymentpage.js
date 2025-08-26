"use client"
import React, { useState } from 'react'
import Script from 'next/script'
import { useSession, signIn, signOut } from "next-auth/react"
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { initiate } from '@/actions/useractions'
import CheckoutButton from './CheckoutButton'

const Paymentpage =  ({username}) => {
    const { data: session } = useSession()
    const [paymentform, setpaymentform] = useState({  })
    
  const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        console.log(e.target)
        setpaymentform({ ...paymentform, [e.target.name]: e.target.value })

    }


    const handlePayment = async (amount,receiver) => {
    setLoading(true);
    const res = await fetch("/api/razorpay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount}), // 👈 send amount to server
    });
    const data = await res.json();
    console.log(amount)

    if (!data.orderId) {
      alert("Failed to create order");
      setLoading(false);
      return;
    }


    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ,
      amount: amount*100,
      currency: "INR",
      name: `Get Me A Chai - ${receiver}`,
      description: "Test Transaction",
      order_id: data.orderId,
      handler: function (response) {
        // alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
        toast.success("Payment successful! ");
      },
      theme: { color: "#1d293d" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
    setLoading(false);
  };


    

    


    return (
        <div className=' '>
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>
            <Script src="https://checkout.razorpay.com/v1/checkout.js">
            </Script>
            <div className="makepayment ">
                <h1 className='text-2xl font-bold mb-3'>Support {session.user.name}</h1>

                <input onChange={handleChange} value={paymentform.amount} name="amount" type='number' className='w-full p-3 rounded-lg bg-slate-800 remove-arrow' placeholder='Enter Amount' onKeyDown={(evt) => (evt.key === '.' || evt.key === '-' || evt.key === '+' || evt.key === 'e' || evt.key === 'E') && evt.preventDefault()} />


                {/* or choose from these Amount */}
                <div className="flex gap-2 mt-2 ">

                    <button className="bg-slate-800 p-3 rounded-lg" onClick={() => { setpaymentform({amount:100})}}>
                        pay ₹100
                    </button>
                    <button className="bg-slate-800 p-3 rounded-lg" onClick={() => { setpaymentform({amount:200})}}>
                        pay ₹200
                    </button>
                    <button className="bg-slate-800 p-3 rounded-lg" onClick={() => { setpaymentform({amount:500})}}>
                        pay ₹500
                    </button>

                </div>
                <textarea onChange={handleChange} value={paymentform.message} name='message' className='bg-slate-800 my-2 rounded-lg border-2 border-slate-800 w-full p-2'  id="" placeholder='Enter Message'></textarea>
                <button onClick={()=>{handlePayment(paymentform.amount,session.user.name)}} disabled={loading} type="button" className="w-full mx-auto text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br hover:shadow-lg hover:shadow-blue-500/50 hover:dark:shadow-lg hover:dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-all duration-100 ease-out ">{loading ? "Processing..." : `Pay`}</button>
            </div>
        </div>
    )
}

export default Paymentpage
