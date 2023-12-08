"use client"

import React, { useState } from "react";

export default function Home() {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Support Elderly Care</h1>
        <p className="text-xl mb-8">
          Your donation helps provide essential services to our community's
          elderly population.
        </p>

        <div className="mt-8 text-center">
          <p className="text-xl font-medium mb-2">Other Donation Options:</p>
          <ul className="list-disc mb-4">
            <li>
              Bank Transfer:
              <br />
              Account Name: Elderly Support Organization
              <br />
              Account Number: 1234567890
              <br />
              Bank Name: First National Bank
              <br />
              Branch Code: 000000
            </li>
            <li>
              Physical Donation:
              <br />
              Address: 123 Main Street, Anytown, CA 12345
              <br />
              (We accept cash, checks, and in-kind gifts)
            </li>
          </ul>
          <p className="text-sm">
            We are a non-profit organization and all donations are
            tax-deductible.
          </p>
        </div>
      </div>
    </div>
  );
}





        {/* <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full max-w-md bg-white rounded-lg p-8 shadow-md"
        >
          <label htmlFor="amount" className="text-lg font-medium mb-2">
            Donation Amount
          </label>
          <input
            type="number"
            id="amount"
            placeholder="$0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="input rounded-md p-2 mb-4"
          />
          <label htmlFor="name" className="text-lg font-medium mb-2">
            Your Name (Optional)
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input rounded-md p-2 mb-4"
          />
          <label htmlFor="message" className="text-lg font-medium mb-2">
            Message (Optional)
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="rounded-md p-2 mb-4"
          />
          <button
            type="submit"
            className="btn bg-blue-500 text-white rounded-md p-2 font-medium"
          >
            Donate Now
          </button>
        </form> */}