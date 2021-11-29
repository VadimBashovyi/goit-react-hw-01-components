import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import styles from "./FriendList.module.css";

const FriendList = ({ friendsData }) => {
  return (
    friendsData.length > 0 && (
      <ul className={styles.friendList}>{friendsData.map((el)=>
        <FriendListItem
          avatar={el.avatar}
          name={el.name}
          isOnline={el.isOnline}
          key={el.id}
        />
      )}</ul>
    )
  );
};

FriendList.propTypes = {
  friendsData: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
  ).isRequired,
};

export default FriendList;
