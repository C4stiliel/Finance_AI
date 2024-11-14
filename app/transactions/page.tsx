import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";
import { db } from "../_lib/prisma";
import AddTransactionButton from "../_components/add-transaction-button";
import NavBar from "../_components/nav-bar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { canUserAddTransaction } from "../_data/can-user-add-transaction";

const TransactionsPage = async () => {
  const { userId } = await auth();
  if (!userId) redirect("/login");

  const transactions = await db.transaction.findMany({
    where: {
      userId,
    },
  });

  const userCanAddTransaction = await canUserAddTransaction();

  return (
    <>
      <NavBar />
      <div className="p-6">
        {/* TITULO E BOTÃO */}
        <div className="mb-6 flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Transações</h1>
          <AddTransactionButton userCanAddTransaction={userCanAddTransaction} />
        </div>

        <DataTable columns={transactionColumns} data={transactions} />
      </div>
    </>
  );
};

export default TransactionsPage;