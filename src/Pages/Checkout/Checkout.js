import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Checkout = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(title);
  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstname.value} ${form.lastname.value}`;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      Customer: name,
      email,
      phone,
      message,
    };
  };
  return (
    <form onSubmit={handlePlaceOrder}>
      <h2 className="text-4xl">You are about to order : {title}</h2>
      <h4 className="text-3xl">Price: {price}</h4>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <input
          name="firstname"
          type="text"
          placeholder="First Name"
          className="input w-full input-bordered "
        />
        <input
          name="lastname"
          type="text"
          placeholder="Last Name"
          className="input w-full input-bordered "
        />
        <input
          name="phone"
          type="text"
          placeholder="Your Phone"
          className="input w-full input-bordered "
        />
        <input
          name="email"
          type="text"
          placeholder="Your Email"
          className="input w-full input-bordered "
          defaultValue={user?.email}
          readOnly
        />
      </div>
      <textarea
        name="message"
        className="textarea textarea-bordered h-24 w-full"
        placeholder="Your message"
      ></textarea>
      <input className="btn" type="submit" value="Place Your Order" />
    </form>
  );
};

export default Checkout;
