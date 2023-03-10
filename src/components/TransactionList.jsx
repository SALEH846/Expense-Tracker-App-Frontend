import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
	const { transactions, getTransactions } = useContext(GlobalContext);

	useEffect(() => {
		getTransactions();
	}, []);

	return (
		<>
			<h3>Previous Transactions</h3>
			<ul className="list">
				{transactions.map((transaction) => (
					<Transaction key={transaction._id} transaction={transaction} />
				))}
			</ul>
		</>
	);
};

export default TransactionList;
