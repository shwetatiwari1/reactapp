import React from "react";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
function Sidebar() {
  const [items, setItems] = useState(Array.from({ length: 10 }));
  const fetchMoreData = () => {
    setTimeout(() => {
      setItems((item) => [...item, ...item.concat(Array.from({ length: 10 }))]);
    }, 1000);
  };
  return (
    <div className="bg-slate-100 p-4 flex">
      <div className="container space-y-9  p-8 w-80 h-screen text-center bg-white rounded-lg flex flex-col">
        <div className="font-mono font-extrabold text-4xl text-center">
          Welcome
        </div>
        <div className="font-semibold text-start text-gray-400 text-2xl">
          <div className=" hover:bg-slate-100 hover:rounded-xl p-6 hover:shadow-xl">
            Home
          </div>
          <div className="hover:bg-slate-100 hover:rounded-xl p-6 hover:shadow-xl">
            Account
          </div>
          <div className="hover:bg-slate-100 hover:rounded-xl p-6 hover:shadow-xl">
            Profile
          </div>
          <div className="hover:bg-slate-100 hover:rounded-xl p-6 hover:shadow-xl">
            Logout
          </div>
          <div className="hover:bg-slate-100 hover:rounded-xl p-6 hover:shadow-xl">
            Settings
          </div>
        </div>
      </div>
      <div className=" w-screen">
        <nav className="p-4 flex items-start justify-between  bg-white ">
          <label>
            <input
              placeholder="Search here "
              className="bg-slate-100 rounded-2xl p-5"
              type="text"
            ></input>
          </label>
          <div className="flex space-x-9">
            <button className="p-4 justify-end items-end w-36  text-xl rounded-2xl text-white font-sans font-bold bg-blue-800/70">
              Button
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 mt-1.5 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-12 mt-1.5 h-12"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
              />
            </svg>
          </div>
        </nav>
        <div className="p-24 space-y-5">
          <div className="flex flex-col bg-white rounded-2xl p-7">
            <div className="mb-6 flex font-sans font-bold text-3xl">
              <span>
                <div className="bg-pink-300/70 h-9 w-5 mr-3 rounded-lg"></div>
              </span>
              Text
            </div>
            <div className="flex flex-row justify-between pl-32 pr-32 ">
              <div className="bg-pink-300/70 rounded-xl p-20 h-36 w-72">
                conatiner 1
              </div>
              <div className="bg-blue-500/30 rounded-xl p-20 h-36 w-72">
                conatiner 2
              </div>
              <div className="bg-green-400/30 rounded-xl p-20 h-36 w-72">
                conatiner 3
              </div>
              <div className="bg-pink-300/70 rounded-xl p-20 h-36 w-72">
                conatiner 4
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-white rounded-2xl p-7">
            <div className="mb-6 flex font-sans font-bold text-3xl">
              <span>
                <div className="bg-green-400/70 h-9 w-5 mr-3 rounded-lg"></div>
              </span>
              Text
            </div>
            <div className="flex flex-row justify-between ">
              <div className=" border-4  border-gray-200 rounded-xl p-5  w-64">
                conatiner 1
              </div>
              <div className=" border-4 border-gray-200 rounded-xl p-5  w-64">
                conatiner 2
              </div>
              <div className="border-4 border-gray-200 rounded-xl p-5  w-64">
                conatiner 3
              </div>
              <div className="border-4 border-gray-200 rounded-xl p-5  w-64">
                conatiner 4
              </div>
            </div>
            <select></select>
          </div>
          <div className="bg-white p-10  rounded-2xl  ">
            <InfiniteScroll
              dataLength={items.length}
              next={fetchMoreData}
              hasMore={true}
              loader={<h4>Loading...</h4>}
            >
              {items.map((i, index) => (
                <div key={index}>view -{index}</div>
              ))}
            </InfiniteScroll>
          </div>
          <div className="bg-white rounded-2xl ">div1</div>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
