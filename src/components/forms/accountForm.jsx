import React from "react";
import { useForm } from "react-hook-form";
import Button from "../buttons/button";
import { BACKEND } from "../../utils";
import { useNavigate } from "react-router-dom";

export default function AccountForm({ profile }) {
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = async (event) => {
    const URL = BACKEND + "new/register";
    const data = { ...profile, ...event }
    // console.log(data);

    fetch(URL, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((onSubmit) => onSubmit.json())
      .then((data) => {
        // console.log("Success", data);
        navigate("/success");
      })
      .catch((error) => {
        // console.log("Error:", error);
      });
  };

  return (
    <div className="mx-auto max-w-6xl bg-gray-200 py-20 px-12 lg:px-24 shadow-xl mb-24">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div className="-mx-3 md:flex mb-6"></div>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                htmlFor="accountName"
              >
                Account Name
              </label>
              <input
                className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                type="text"
                name="accountName"
                id="accountName"
                {...register("accountName", {
                  required: true,
                })}
              />
              {errors?.accountName?.type === "required" && (
                <p>This field is required</p>
              )}
            </div>
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                htmlFor="accountType"
              >
                Account Type
              </label>
              <select
                className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                id="accountType"
                {...register("accountType", { required: true })}
              >
                {errors?.accountType?.type === "required" && (
                  <p>This field is required</p>
                )}

                <option value="debit">Debit</option>
                <option value="credit">Credit</option>
                <option value="investment">Investment</option>
                <option value="insurance">Insurance</option>
              </select>
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6">
            <label
              className="uppercase tracking-wide text-black text-xs font-bold mb-2"
              htmlFor="accountDescription"
            >
              Account Description
            </label>
            <input
              className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
              type="text"
              name="accountDescription"
              id="accountDescription"
              {...register("accountDescription", {
                required: true,
              })}
            />
          </div>
          <div className="-mx-3 md:flex mb-6">
            <label
              className="uppercase tracking-wide text-black text-xs font-bold mb-2"
              htmlFor="accountBalance"
            >
              Account Initial Balance
            </label>
            <input
              className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
              type="number"
              name="accountBalance"
              id="accountBalance"
              {...register("accountBalance", {
                required: true,
              })}
            />
            {errors?.accountBalance?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>
          <Button
            css="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full"
            type="submit"
            name="submit"
            id="submit"
            description="Submit"
          />
        </div>
      </form>
    </div>
  );
}
