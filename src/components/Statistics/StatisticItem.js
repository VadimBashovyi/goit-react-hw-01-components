import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const StatisticItem = ({ item }) => {
  return (
    <li
      key={item.id}
      className={styles.item}
      style={{
        backgroundColor: `#${Math.random().toString(16).slice(2, 8)}`,
      }}
    >
      <span className={styles.label}>{item.label}</span>
      <span className={styles.percentage}>{item.percentage}%</span>
    </li>
  );
};

StatisticItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
export default StatisticItem;
