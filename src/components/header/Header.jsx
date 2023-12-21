import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import { useSelector, useDispatch } from "react-redux";
import { setLogin, setUserInfo } from "../../sagas/authSaga/authSlice";
const Header = () => {
  const { isLogin, userInfo } = useSelector((state) => state.auth);
  return (
    <header className="sticky top-0 z-50 w-full text-white bg-primary">
      <nav className="flex items-center justify-center py-4 gap-x-2">
        <div>
          <Link to={"/"}>
            <img
              src="https://file.hstatic.net/200000636033/file/logo_fd11946b31524fbe98765f34f3de0628.svg"
              alt=""
              className="w-[140px]"
            />
          </Link>
        </div>
        <div className="flex items-center px-2 py-3 bg-red-800 rounded cursor-pointer menu gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <span className="text-sm">Danh mục</span>
        </div>
        <Search></Search>
        <div className="flex items-center text-sm font-medium cursor-pointer gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
          <div className="flex flex-col">
            <span>Hotline</span>
            <span>1800.6975</span>
          </div>
        </div>
        <div className="flex items-center text-sm font-medium cursor-pointer gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>

          <div className="flex flex-col">
            <span>Hệ thống</span>
            <span>Showroom</span>
          </div>
        </div>
        <div className="flex items-center text-sm font-medium cursor-pointer gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
            />
          </svg>

          <div className="flex flex-col">
            <span>Tra cứu</span>
            <span>đơn hàng</span>
          </div>
        </div>
        <div className="flex items-center text-sm font-medium cursor-pointer gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>

          <div className="flex flex-col">
            <span>Giỏ</span>
            <span>hàng</span>
          </div>
        </div>
        {isLogin ? (
          <User avatar={userInfo.avatar} username={userInfo.username} />
        ) : (
          <Link
            to={"/login"}
            className="flex items-center px-3 py-1 text-sm font-medium bg-red-700 rounded cursor-pointer gap-x-2 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            <div className="flex flex-col ">
              <span>Đăng</span>
              <span>Nhập</span>
            </div>
          </Link>
        )}
      </nav>
    </header>
  );
};

function User({ avatar, username }) {
  const dispatch = useDispatch();
  const [toggle, setToggle] = React.useState(false);
  const handleLogout = () => {
    dispatch(setLogin(false));
    dispatch(setUserInfo({}));
  };
  return (
    <div
      onClick={() => setToggle((toggle) => !toggle)}
      className="relative cursor-pointer"
    >
      <div className="flex items-center gap-x-3">
        <div className="w-9 h-9">
          <img
            src={avatar}
            alt=""
            className="object-cover w-full h-full rounded-full"
          />
        </div>
        <span className="text-lg font-medium">{username}</span>
        <div>
          {!toggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          )}
        </div>
      </div>
      {toggle ? (
        <div className="absolute top-[100%] left-2/4 -translate-x-2/4 translate-y-3 rounded shadow-lg w-[150px] bg-white text-black py-2 px-3">
          <div className="flex flex-col gap-y-2">
            <div>
              <span>Thông tin</span>
            </div>
            <div>
              <span onClick={handleLogout}>Đăng xuất</span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Header;
