import React from "react";
import PropTypes from "prop-types";
import TransactionItem from "./TransactionItem";
import styles from "./Transactions.module.css";

const TransactionHistory = ({ transactionData }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{transactionData.map((el)=>
       <TransactionItem
          key={el.id}
          type={el.type}
          amount={el.amount}
          currency={el.currency}

        />)}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactionData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
  ).isRequired,
};

export default TransactionHistory;
