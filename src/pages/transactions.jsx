import SideNavigation from "../components/navigation/navbar";
import TransactionTable from "../components/features/transactions/transactionTable";
import FilterNav from "../components/features/transactions/filter";
import Button from "../components/buttons/button";
import React from "react";

export default function Transaction() {

  const button = (
    <Button
      css="bg-gray-500 text-white px-5 py-2 rounded-md text-sm font-medium"
      type="submit"
      name="filter"
      id="filterAll"
      description="All"
    />
  );
  const button2 = (
    <Button
      css="bg-gray-500 text-white px-5 py-2 rounded-md text-sm font-medium"
      type="submit"
      name="filter"
      id="filterIncome"
      description="Income"
    />
  );
  const button3 = (
    <Button
      css="bg-gray-500 text-white px-5 py-2 rounded-md text-sm font-medium"
      type="submit"
      name="filter"
      id="filterExpense"
      description="Expense"
    />
  );

  return (
    <div className="flex bg-gray-100">
      <div className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r">
        <SideNavigation />
      </div>
      <div className="p-4 m-8 flex-auto w-64">
        <h1 className="uppercase font-bold">Transactions</h1>
        <p>Have an overview of your financial transactions</p>
        <div className="py-5">
          <FilterNav button={button} button2={button2} button3={button3} />
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <TransactionTable />
        </div>
      </div>
    </div>
  );
}
