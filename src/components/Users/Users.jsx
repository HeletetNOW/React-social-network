import { NavLink } from "react-router-dom";
import Style from "./Users.module.css";
import React from "react";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  pagesCount = 10;
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={Style.users}>
      <div className={Style.title}>Users</div>
      <div className={Style.pagination}>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && Style.active}
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id} className={Style.item}>
          <div className={Style.left_wrap}>
            <div className={Style.img}>
              <img
                src={
                  u.photos.small != null
                    ? u.photos.small
                    : "https://cdn.onlinewebfonts.com/svg/img_264570.png"
                }
                alt=""
              />
            </div>
            {u.followed ? (
              <button
                onClick={() => {
                  props.unfollow(u.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  props.follow(u.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
          <div className={Style.text}>
            <div className={Style.status}>
              <NavLink to={"/profile/" + u.id} className={Style.name}>
                {u.name}
              </NavLink>
              <div className={Style.subtitle}>{u.status}</div>
            </div>
            <div className={Style.location}>
              <div className={Style.country}>{"u.location.country"}</div>
              <div className={Style.city}>{"u.location.city"}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
