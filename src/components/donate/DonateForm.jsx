import React, { useState } from "react";
import { PaystackButton } from "react-paystack";

const DonateForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [amount, setAmount] = useState(" ");
  const [phone, setPhone] = useState(" ");
  const [email, setEmail] = useState(" ");

  const publicKey = "pk_test_ea3058b426e19b348a98bee40448e1b4823ddd61";

  const componentProps = {
    email,
    amount: amount * 100,
    metadata: {
      firstName,
      lastName,
      phone,
    },
    publicKey,
    text: "Donate",
    onSuccess: () => alert("Thank You for your Donation"),
    onClose: () => alert("Are you sure you want to cancel this Transaction?"),
  };

  const style = {
    input:
      "block py-2 px-4 rounded-md md:w-[700px] w-[350px] border border-gray-300 mb-4 focus-outline-none",
    button:
      "block py-3 px-10 md:w-[400px] w-full text-xl text-white rounded-md bg-black",
  };
  return (
    <div>
      <div className="max-w-6xl me-auto ms-auto md:mt-20 mt-10 flex flex-col items-center justify-center w-full">
        <h2 className="font-bold md:text-4xl text-2xl text-center md:mb-10 mb-5 ">
          Make a Difference, Donate Today!
        </h2>
        <form action="" className="flex flex-col items-center justify-center">
          <input
            type="text"
            value={firstName}
            placeholder="First Name"
            className={style.input}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            value={lastName}
            placeholder="Last Name"
            className={style.input}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            value={email}
            placeholder="Email"
            className={style.input}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            value={amount}
            className={style.input}
            placeholder="Amount"
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            type="number"
            value={phone}
            placeholder="Phone Number"
            className={style.input}
            onChange={(e) => setPhone(e.target.value)}
          />
          <PaystackButton {...componentProps} className={style.button} />
        </form>
      </div>
    </div>
  );
};

export default DonateForm;
