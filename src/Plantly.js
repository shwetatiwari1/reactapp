import React from "react";

function Plantly() {
  
  return (
    <div className="App p-2">
      <nav>
        <div className=" flex  justify-between p-4">
          <div className="flex flex-wrap ">
            <img src="leaf2.png" className="h-6 " alt=" description"></img>
            <img src="leaf.png" className="h-8 mt-0 " alt=" description"></img>
            <div className=" items-center space-between text-lime-800	 text-2xl mr-3 mt-0 font-sans">
              Plantly.
            </div>
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex md:hidden"
            aria-controls="navbar-default"
            aria-expanded="true"
          >
            {" "}
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6 text-lime-700"
              aria-hidden="false"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className="hidden w-full md:block  md:w-auto "
            id="navbar-default"
          >
            <ul className="class1 font-medium  p-3 md:p-1 flex  md:space-x-8 ">
              <li className="link1 text-sm text-lime-700 peer  ">
                <a
                  for="link1 "
                  className="hover:peer/link1:border border-b-2 border-lime-700"
                >
                  HOME
                </a>
              </li>
              <li className="text-sm text-lime-700">SHOP</li>
              <li className="text-sm text-lime-700">COLLECTION</li>
              <li className="text-sm text-lime-700">BLOGS</li>
              <li className="text-sm text-lime-700">CONTACT</li>
            </ul>
          </div>
          <ul className="class2 font-medium   flex  md:space-x-2 ">
            <li className="link1 text-sm text-lime-700 peer  ">search</li>
            <li className="text-sm text-lime-700">|</li>
            <li className="text-sm text-lime-700">login</li>
            <li className="text-sm text-lime-700">likes</li>
            <li className="text-sm text-lime-700">shop</li>
          </ul>
        </div>
      </nav>
      <div class="mx-auto bg-white w-full overflow-hidden md:max-w-7xl">
        <div class="md:flex mt-44 ">
          <div className="h-96 p-3 mb-28 justify-between container ">
            <img
              src="parahgraph.png"
              className=" h-auto lg:w-full w-full md:w-96"
              alt="parah"
            ></img>
            <div>
              <p class="mt-2 text-start lg:text-lg  text-slate-500 ">
                Looking to take your team away on a retreat to enjoy awesome
                food and take in some sunshine? We have a list of places to do
                just that. Looking to take your team away on a retreat to enjoy
                awesome food and take in some sunshine? We have a list of places
                to do just that Looking to take your team away on a retreat to
                enjoy awesome food and take in some sunshine? We have a list of
                places to do just that Looking to take your team away on a
                retreat to enjoy awesome food and take in some sunshine? We have
                a list of places to do just that
              </p>
              <button
                type="button"
                className="bg-black rounded-full border border-gray-200 hover:bg-gray-100 text-white w-40 h-10 mt-9 ring-green-700 "
              >
                Shop Collection
              </button>
              <svg
                width="102"
                height="30"
                viewBox="0 0 102 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="55.7303"
                  cy="15"
                  rx="5.0664"
                  ry="5"
                  fill="#D7D7CD"
                />
                <ellipse
                  cx="15.1992"
                  cy="15"
                  rx="5.0664"
                  ry="5"
                  fill="#0B0B0D"
                />
                <path
                  d="M29.8984 15C29.8984 23.0019 23.3236 29.5 15.1992 29.5C7.07481 29.5 0.5 23.0019 0.5 15C0.5 6.99807 7.07481 0.5 15.1992 0.5C23.3236 0.5 29.8984 6.99807 29.8984 15Z"
                  stroke="#D7D7CD"
                />
                <ellipse
                  cx="96.2615"
                  cy="15"
                  rx="5.0664"
                  ry="5"
                  fill="#D7D7CD"
                />
              </svg>
            </div>
          </div>

          <div className="container float-right  flex max-w-2xl ml-24 ">
            <img src="plant.png" className="sm:w-full" alt="parah"></img>
            <img
              src="plants2.png"
              className="h-fit ml-6 sm:w-96"
              alt="parah"
            ></img>
          </div>
        </div>
      </div>
      <div className="container  flex justify-end">
        <img
          src="BestQuality.png"
          className="h-20 mr-5 mt-5 shadow-lg "
          alt="parahgraph"
        ></img>
      </div>
      <div className="w-full mt-40 bg-green-900/60 flex lg:flex-row sm:flex-col  md:flex-row p-14 justify-between">
        <p className="text-3xl text-gray-700 font-bold sm:p-3">Natural</p>
        <p className="text-3xl sm:p-3 text-green-200/40">
          <span className="bg-gray-700 font-bold rounded-md p-1"> Green</span>
          <span className="inline-flex  text-gray-700"> ARY</span>
        </p>
        <p className="text-3xl sm:p-3 text-gray-700 ">
          <span className="font-bold">Plant</span>
          <span>Info</span>
        </p>
        <p className="text-3xl sm:p-3 text-gray-700">Nursery</p>
        <p className="text-3xl sm:p-3 text-gray-700 ">
          <span className="font-bold">Plant</span>
          <span>Guide</span>
        </p>
      </div>

      {/* <div className="max-auto"></div> */}

      <div className="container z-0 flex column-lg sm:flex-col md:flex-row lg:flex-row mx-auto  w-full mt-44  justify-between">
        <div className="container lg:justify-start sm:justify-center  float-right sm:pb-14  flex max-w-2xl">
          <img
            src="bigplant.png"
            className="z-0 mt-2.5 absolute  flex-shrink-0"
            alt="big"
          ></img>
          <img
            src="small1.png"
            className=" mt-44 border-8  border-white ml-56 flex-shrink-0 object-none relative z-10"
            alt="small"
          ></img>
        </div>
        <div className="container max-w-2xl sm:p-5 ">
          <p className=" font-mono text-4xl text-start md:text-center sm:text-center">
            Our Journey
          </p>
          <p className="mt-6 text-left lg:text-xl">
            Life is a continuous journey. Some journeys are short and some long.
            Some journeys are sweet and pleasant while some are sour. Some
            journeys are too memorable to be erased by the sands of time. I had
            one such experience. The memory of this journey continues to
            flicker, on and on, in my mind even after several years. Being born
            and brought up in Meghalaya, a state without railways, I had no
            opportunity to see a train or to travel in one. Therefore, when my
            school organised an excursion to New Delhi, our National capital, I
            was one of the first to join in.
          </p>
        </div>
      </div>
      <div className="`container` flex column-lg mx-auto w-full sm:text-2xl md:text-2xl mt-36 sm:justify-center justify-between">
        <p className=" font-mono text-4xl ">Best Collection</p>
      </div>
      <div className="container  flex  mx-auto w-full lg:justify-center  justify-between">
        <div className="container w-full flex lg:flex-row sm:flex-col md:justify-center sm:justify-center sm:items-center max-w-2xl mt-10 space-x-20">
          <div className="min:w-full ml-20 flex-shrink-0 ">
            <img
              src="p2.png"
              className="lg:h-full lg:w-full sm:h-96 sm:w-96 md:w-96 md:h-96"
              alt="title"
            />
            <p className="text-start mt-5 sm:text-2xl md:text-2xl">
              Cane Plants
            </p>
          </div>
          <div className="min:w-full flex-shrink-0">
            <img
              src="p3.png"
              className="lg:h-full lg:w-full sm:h-96 sm:w-96 md:w-96 md:h-96"
              alt="p3"
            ></img>
            <p className="text-start sm:text-2xl md:text-2xl mt-5">
              Flowery Plants
            </p>
          </div>
          <div className="min:w-full flex-shrink-0">
            <img
              src="p1.png"
              className="lg:h-full lg:w-full sm:h-96 sm:w-96 md:w-96 md:h-96"
              alt="p1"
            ></img>
            <p className="text-start sm:text-2xl md:text-2xl mt-5">
              Sunshine Plants
            </p>
          </div>
          <div className="min:w-full flex-shrink-0">
            <img
              src="p2.png"
              className="lg:h-full lg:w-full sm:h-96 sm:w-96 md:w-96 md:h-96"
              alt="p2"
            ></img>
            <p className="text-start sm:text-2xl md:text-2xl mt-5">
              Indoor Plants
            </p>
          </div>{" "}
          <div className="min:w-full flex-shrink-0">
            <img
              src="p1.png"
              className="lg:h-full lg:w-full sm:h-96 sm:w-96 md:w-96 md:h-96"
              alt="title"
            />
            <p className="text-start sm:text-2xl md:text-2xl mt-5">
              Ficus Plants
            </p>
          </div>
        </div>
      </div>
      <div className="p-10 mt-36 bg-green-200/25 flex  w-full">
        <div className="container mt-20 mx-auto justify-between flex sm:flex-col md:flex-col lg:flex-row float-right ">
          <div className="container flex flex-col  max-w-2xl mt-40 space-y-4">
            <p className=" font-mono text-4xl text-start">Why shop with us?</p>
            <p className="mt-6 text-left">
              Life is a continuous journey. Some journeys are short and some
              long. Some journeys are sweet and pleasant while some are sour.
              Some journeys are too memorable to be erased by the sands of time.
              I had one such experience. The memory of this journey continues to
              flicker, on and on, in my mind even after several years. Being
              born and brought up in Meghalaya, a state without railways, I had
              no opportunity to see a train or to travel in one. Therefore, when
              my school organised an excursion to New Delhi, our National
              capital, I was one of the first to join in.
            </p>
            <div className="flex space-x-4">
              <p className="text-2xl font-bold text-start text-green-900">
                01.
              </p>
              <div className="flex flex-col md:basis-1/3">
                <p className="text-xl text-start">Socculents</p>
                <p className="text-sm text-start">
                  Meghalaya, a state without railways, I had no opportunity to
                  see a train
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <p className="text-2xl font-bold text-start text-green-900">
                02.
              </p>
              <div className="flex flex-col md:basis-1/3">
                <p className="text-xl text-start">Air purifiers</p>
                <p className="text-sm text-start">
                  Meghalaya, a state without railways, I had no opportunity to
                  see a train
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <p className="text-2xl font-bold text-start text-green-900">
                03.
              </p>
              <div className="flex flex-col md:basis-1/3">
                <p className="text-xl text-start">Decoratives</p>
                <p className="text-sm text-start">
                  Meghalaya, a state without railways, I had no opportunity to
                  see a train
                </p>
              </div>
            </div>
          </div>
          <div className="sm:justify-center sm:items-center">
            <img
              src="plant3.png "
              className="border-8 mt-7 md:w-full sm:w-full border-white z-10"
              alt="green"
            ></img>
            <div className="-z-10 p-30 bg-black mb-10"></div>
          </div>
        </div>
      </div>
      <div className=" container mt-36 flex md:flex-col sm:flex-col lg:flex-row mx-auto  justify-center items-center space-x-9 ">
        <div className="sm:ml-9">
          <div className="bg-green-50 shadow-xl w-72  border-green-100 rounded-lg">
            <img src="splash2.png " className="p-14 md:h-80" alt="splash"></img>
          </div>
          <div>
            <p className="mt-5 text-start">Chinese money plant</p>
          </div>
          <p className="text-green-800 text-sm text-start">$23.00</p>
        </div>
        <div>
          <div className="bg-green-50 shadow-xl w-72 border-green-100 rounded-lg">
            <img src="splash3.png " className="md:h-80 p-14" alt="splash"></img>
          </div>
          <div>
            <p className="mt-5 text-start">Calathia white fusion</p>
          </div>
          <p className="text-green-800 text-sm text-start">$23.00</p>{" "}
        </div>
        <div>
          <div className="bg-green-50 shadow-xl w-72 border-green-100 rounded-lg">
            <img src="splash4.png " className="md:h-80 p-14" alt="splash"></img>
          </div>
          <div>
            <p className="mt-5 text-start">Money plant</p>
          </div>
          <p className="text-green-800 text-sm text-start">$23.00</p>
        </div>
        <div>
          <div className="bg-green-50 w-72  shadow-xl rounded-lg">
            <img src="splash5.png " className="md:h-80 p-14" alt="splash"></img>
          </div>
          <div>
            <p className="mt-5 text-start">Calathia white fusion</p>
          </div>
          <p className="text-green-800 text-sm text-start">$23.00</p>{" "}
        </div>
      </div>
      <div className="mt-7  ">
        <button
          type="button"
          className="bg-black shadow-xl rounded-lg p-3 text-white"
        >
          Shop now{" "}
        </button>
      </div>
      <div className="container p-44 flex mx-auto mt-24  justify-between space-x-60">
        <div>
          <img src="rect.png" className="z-0  absolute " alt="rect"></img>
          <img
            src="splash2.png"
            className="z-10 relative w-72 ml-96 "
            alt="splash"
          ></img>
        </div>
        <div className="flex space-y-2 flex-col mt-24  ">
          <p className="md:w-96 text-start tracking-widest ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and we
          </p>
          <p className=" font-semibold md:w-96 text-start">Rohan Rogan</p>
          <p className="text-sm font-light text-start">By Customer</p>
        </div>
      </div>
      <div className="border-b-2  border-gray-300"></div>

      <div className="w-full ">
        <div className="container p-20 sm:space-y-10 lg:space-y-0 mx-auto justify-between lg:flex-row md:flex-col sm:flex-col flex">
          <div className="flex space-x-2 ">
            <img src="Group.png" className="h-10  space-x-2" alt="cart"></img>
            <div className="flex flex-col">
              <p className="font-bold text-start">Free shipping</p>
              <p className="font-mono text-sm">Capped at $319 per order</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <img src="Group.png" className="h-10  space-x-2" alt="cart"></img>
            <div className="flex flex-col">
              <p className="font-bold text-start">Self Payment</p>
              <p className="font-mono text-sm">With our payment gateway</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <img src="Group.png" className="h-10  space-x-2" alt="cart"></img>
            <div className="flex flex-col">
              <p className="font-bold text-start">Quality Gurantee</p>
              <p className="font-mono text-sm">
                Fresh and super item available
              </p>
            </div>
          </div>
          <div className="flex space-x-2">
            <img src="Group.png" className="h-10  space-x-2" alt="cart"></img>
            <div className="flex flex-col">
              <p className="font-bold text-start">Big Offers</p>
              <p className="font-mono text-sm">We give best offers today</p>
            </div>
          </div>{" "}
        </div>
      </div>

      <div className="w-full bg-green-500/10">
        <div className="container p-20   mx-auto justify-between sm:flex-col sm:space-y-6 lg:flex-row flex">
          <div className="flex flex-col">
            <div className="flex">
              <img src="leaf.png" alt="leaf"></img>{" "}
              <p className="font-bold text-start">Plantly.</p>
            </div>

            <p className="md:w-72 text-start text-sm">
              page when looking at its layout. The point of using Lorem Ipsum is
              that it haspage when looking at its layout. The point of using
              Lorem Ipsum is that it haspage when looking at its layout. The
              point of using Lorem Ipsum is that it has
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-start">Company </p>
            <p className="md:w-28 text-start text-sm">
              page when looking at its layout. The point of using Lorem Ipsum is
              that it has
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-start"> Support</p>
            <p className="md:w-28 text-start text-sm">
              page when looking at its layout. The point of using Lorem Ipsum is
              that it has
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-start">Contact us</p>
            <p className="md:w-28 text-start text-sm">
              {" "}
              page when looking at its layout. The point of using Lorem Ipsum is
              that it has 98367276 gsdbs@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plantly;
