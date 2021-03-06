import Button from "../buttons/button";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { BACKEND } from "../../utils";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { transactionAtom } from "../features/transactions/transactionTable";

export default function UpdateForm() {
  // const [transactionAtom, settransactionAtom] = useAtom(transactionAtom)
  // console.log(transactionAtom)
  let { id } = useParams();
  const [form, setForm] = useState([]);
//   console.log(form)

  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChange = (event) => {
    // const changeValue = event.target.value
    // console.log(event.target.value)
    event.preventDefault();
    setForm({...form, event})

  }

  const getCurrentData = () => {
    const URL = BACKEND + `transactions/${id}`;
    fetch(URL, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setForm(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCurrentData();
  }, []);

  const onSubmit = async (event) => {
    const URL = BACKEND + `transactions/${id}`;
    const updateTransaction = { form, ...event };
    // console.log(updateTransaction);

    fetch(URL, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateTransaction),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("Success", data);
        navigate("/transactions");
      })
      .catch((error) => {
        // console.log("Error:", error);
      });
  };

  return (
    <div className="mx-auto max-w-6xl bg-gray-200 py-10 px-12 lg:px-24 shadow-xl mb-24">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="date">Date of Transaction: </label>
          <input
            type="date"
            name="date"
            id="date"
            defaultValue={form.date}
            {...register("date")}
          />
        </div>
        <div className="my-5">
          <label htmlFor="amount">Amount: $</label>
          <input
            type="number"
            step="any"
            name="amount"
            id="amount"
            defaultValue={form.amount}
            {...register("amount")}
          />
        </div>
        <div className="my-5">
          <label htmlFor="sender">Sender (if applicable): </label>
          <input
            type="text"
            name="sender"
            id="sender"
            defaultValue={form.sender}
            {...register("sender")}
          />
        </div>
        <div className="my-5">
          <label htmlFor="recipient">Recipient (if applicable): </label>
          <input
            type="text"
            name="recipient"
            id="recipient"
            defaultValue={form.recipientName}
            {...register("recipient")}
          />
        </div>
        <div className="my-5">
          <label htmlFor="transaction">Transaction Details: </label>
          <input
            type="text"
            name="transaction"
            id="transaction"
            defaultValue={form.tDetails}
            {...register("transaction")}
          />
        </div>
        <Button
          css="md:w-full bg-gray-900 text-white font-bold py-2 px-4 my-5 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full"
          type="submit"
          name="update"
          id="update"
          description="Update"
        />
      </form>
    </div>
  );
}
