"use client";
import React, { useState } from "react";

const Device = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleCalculate = () => {
    // Add calculation logic here
    console.log(`Calculating for ${count} computers`);
    // You could trigger additional actions here
  };

  return (
    <section className="px-4 py-10 space-y-4">
      <div className="max-w-[1184px] mx-auto border-black border grid grid-cols-1 lg:grid-cols-2">
        <div>
          <div className="lg:border-r border-black">
            <div className="flex items-center">
              <h2 className="text-[40px] text-black font-djr-regular h-full min-w-[40px] sm:min-w-[88px] w-full max-w-[40px] sm:max-w-[88px] text-center flex items-center justify-center">
                1
              </h2>

              <p className="text-lg md:text-xl font-djr-regular text-black px-4 py-[15px] border-l border-black">
                The donor company identifies HP PCs they want to donate, bwtween
                3.5 and 6 yeard old
              </p>
            </div>
            <span className="bg-black  flex h-[1px] w-full"></span>
            <div className="flex items-center">
              <h2
                className="text-[40px] text-black font-djr-regular h-full min-w-[40px] sm:min-w-[88px] w-full
                                   max-w-[40px] sm:max-w-[88px] text-center flex items-center
                                   justify-center"
              >
                2
              </h2>

              <p className="text-lg md:text-xl font-djr-regular text-black px-4 py-[15px] border-l border-black">
                HP and PC donor company agree on the school on Non-Profit that
                willl receive the donation
              </p>
            </div>
            <span className="bg-black  flex h-[1px] w-full"></span>
            <div className="flex items-center">
              <h2
                className="text-[40px] text-black font-djr-regular h-full min-w-[40px] sm:min-w-[88px] w-full
                                   max-w-[40px] sm:max-w-[88px]  text-center flex items-center
    justify-center"
              >
                3
              </h2>

              <p className="text-lg md:text-xl font-djr-regular text-black px-4 py-[15px] border-l border-black">
                HP collects the PCs fromm the donor company and ships them to
                its certified refurbishment partner
              </p>
            </div>
            <span className="bg-black  flex h-[1px] w-full"></span>
            <div className="flex items-center">
              <h2
                className="text-[40px] text-black font-djr-regular h-full min-w-[40px] sm:min-w-[88px] w-full
                                   max-w-[40px] sm:max-w-[88px]  text-center flex items-center
    justify-center"
              >
                4
              </h2>

              <p className="text-lg md:text-xl font-djr-regular text-black px-4 py-[15px] border-l border-black">
                Refurbishment partner performs data sanitazation and
                reconditioning, ashering to scrict HP quatily processes and
                Industry standards
              </p>
            </div>
            <span className="bg-black  flex h-[1px] w-full"></span>
            <div className="flex items-center border-b border-black lg:border-none">
              <h2
                className="text-[40px] text-black font-djr-regular h-full min-w-[40px] sm:min-w-[88px] w-full
                                   max-w-[40px] sm:max-w-[88px]  text-center flex items-center
    justify-center"
              >
                5
              </h2>

              <p className="text-lg md:text-xl font-djr-regular text-black px-4 py-[15px] border-l border-black">
                HP sends the refurbished PCs to the beneficiary school or
                Non-Profit
              </p>
            </div>
          </div>
        </div>
        <div>
          <img className="h-full w-full" src="/images/webp/device.png" alt="" />
        </div>
      </div>
      <div className="max-w-[1184px] mx-auto border border-black flex flex-col lg:flex-row items-center lg:items-start mt-10 relative lg:h-[271px]">
        {/* Left section - blue background with text */}
        <div className="bg-sky-300 flex absolute top-0 left-0 z-[-1] w-full h-[330px] lg:hidden"></div>
        <div className="bg-sky-300 p-6 flex items-center sm:max-w-[872px] w-full lg:h-full">
          <h2 className="text-[48px] font-poppins text-black max-w-[450px] w-full h-full leading-[120%]">
            How many computers are you donating
          </h2>
        </div>

        {/* Right section - white background with counter */}
        <div className="bg-[#B7E8FE]  p-6  mb-6 flex flex-col items-center justify-center max-w-[336px] w-full lg:absolute right-[70px] transform lg:-translate-y-1/2 lg:top-1/2 border-black border">
          <div className="flex items-center justify-between gap-4 mb-4 w-full">
            {/* Decrement button */}
            <button
              onClick={decrement}
              className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
              aria-label="Decrease count"
            >
              <svg
                width="43"
                height="44"
                viewBox="0 0 43 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.54124 20.6732C6.29292 20.7039 6.00751 20.82 5.83175 20.9635C5.69146 21.078 5.56085 21.2424 5.47861 21.4101C5.36896 21.6311 5.34961 21.7262 5.34961 22.0003C5.34961 22.2744 5.36896 22.3696 5.47861 22.5905C5.56085 22.7582 5.69146 22.9227 5.83175 23.0372C5.95752 23.1387 6.21713 23.2645 6.37999 23.3016C6.50416 23.329 7.04918 23.3306 21.344 23.3306C35.7129 23.3306 36.1822 23.329 36.2999 23.3016C36.4595 23.2613 36.7191 23.1339 36.8401 23.0372C36.9803 22.9227 37.111 22.7582 37.1932 22.5905C37.3028 22.3696 37.3222 22.2744 37.3222 22.0003C37.3222 21.7262 37.3028 21.6311 37.1932 21.4101C37.111 21.2424 36.9803 21.078 36.8401 20.9635C36.7223 20.8683 36.4966 20.7539 36.3321 20.7055L36.2112 20.67L21.4004 20.6684C13.2541 20.6668 6.56866 20.67 6.54124 20.6732Z"
                  fill="#404040"
                />
              </svg>
            </button>

            {/* Count display */}
            <div className="text-[64px] md:text-[80px] font-mono text-black h-[90px] flex justify-center items-center w-[90px] text-center">
              {count.toString().padStart(2, "0")}
            </div>

            {/* Increment button */}
            <button
              onClick={increment}
              className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
              aria-label="Increase count"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
              >
                <path
                  d="M21.7167 6.03027C21.2233 6.13992 20.8459 6.50757 20.6992 7.02035C20.6702 7.12193 20.6686 7.35091 20.6637 13.8928L20.6605 20.6621L13.8912 20.6653C7.38482 20.6701 7.11876 20.6717 7.01879 20.6992C6.8656 20.7427 6.60599 20.8733 6.49472 20.9636C6.28832 21.1313 6.11256 21.4022 6.04 21.6618C5.99969 21.8086 5.99969 22.1923 6.04 22.3391C6.11256 22.5987 6.28832 22.8696 6.49472 23.0373C6.60599 23.1276 6.8656 23.2582 7.01879 23.3017C7.11876 23.3291 7.38482 23.3308 13.8912 23.3356L20.6605 23.3388L20.6637 30.1081C20.6686 36.6145 20.6702 36.8806 20.6976 36.9805C20.7411 37.1337 20.8717 37.3933 20.962 37.5046C21.1281 37.7094 21.4039 37.8884 21.6603 37.9593C21.807 37.9996 22.1908 37.9996 22.3375 37.9593C22.5971 37.8868 22.868 37.711 23.0357 37.5046C23.126 37.3933 23.2566 37.1337 23.3002 36.9805C23.3276 36.8806 23.3292 36.6145 23.334 30.1081L23.3373 23.3388L30.1065 23.3356C36.6129 23.3308 36.879 23.3291 36.979 23.3017C37.1322 23.2582 37.3918 23.1276 37.503 23.0373C37.7078 22.8712 37.8868 22.5955 37.9578 22.3391C37.9981 22.1923 37.9981 21.8086 37.9578 21.6618C37.8868 21.4054 37.7078 21.1297 37.503 20.9636C37.3918 20.8733 37.1322 20.7427 36.979 20.6992C36.879 20.6717 36.6129 20.6701 30.1065 20.6653L23.3373 20.6621L23.334 13.8928C23.3292 7.38638 23.3276 7.12032 23.3002 7.02035C23.2566 6.86716 23.126 6.60755 23.0357 6.49628C22.8696 6.2915 22.5971 6.11412 22.3456 6.04478C22.2053 6.00609 21.8602 5.99802 21.7167 6.03027Z"
                  fill="#404040"
                />
              </svg>
            </button>
          </div>

          {/* Calculate button */}
          <button
            onClick={handleCalculate}
            className="bg-black border-black border hover:bg-transparent transition-all duration-200 ease-in-out hover:text-black text-white text-lg font-poppins font-bold py-2 px-4 rounded-xl w-full"
          >
            Calculate
          </button>
        </div>
      </div>
      {/* next section  */}
      <div className="max-w-[1184px] mx-auto  border border-black">
        <div className="flex flex-col md:flex-row">
          {/* Left blue section */}
          <div className="bg-[#9FE0FE] md:max-w-[400px] w-full">
            <h2 className="text-[48px] font-poppins text-black w-full leading-[120%] px-4 py-6 md:p-6 bg-[#73CFFE]">
              How many computers are you donating
            </h2>
            <div className="px-4 py-6 md:p-6 border-t border-black">
              <div className="flex items-center gap-2">
                <span className="text-[64px] font-poppins font-light text-black leading-[110%]">
                  145
                </span>
                <span className="text-xl lg:text-2xl font-poppins text-black leading-[120%]">
                  computers
                </span>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <span className="text-lg text-black font-poppins">
                  Recalculate
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11.6962 4.00621C10.7157 4.05247 9.79326 4.2765 8.8953 4.68376C7.32252 5.3985 5.93748 6.6629 5.06945 8.17582L5.00233 8.29374L4.9978 6.84249C4.99236 5.22526 4.99871 5.36222 4.92977 5.24703C4.86719 5.14272 4.77467 5.06743 4.65857 5.02662C4.57875 4.9985 4.44179 4.99397 4.36469 5.01846C4.23408 5.05927 4.11163 5.15904 4.05721 5.27061C3.99644 5.39397 4.00007 5.23523 4.00007 7.50099C4.00007 9.78127 3.99553 9.61074 4.06174 9.73592C4.12524 9.85746 4.25403 9.95632 4.39009 9.98807C4.43 9.99714 4.85086 9.99986 6.508 9.99986C8.48986 9.99986 8.57875 9.99895 8.63045 9.98353C8.77013 9.94 8.88896 9.84204 8.9461 9.72231C8.98419 9.64249 8.9978 9.58172 8.9978 9.49465C8.9978 9.28603 8.86447 9.10099 8.65857 9.02571L8.59417 9.00213L7.18193 8.99941C6.4046 8.9985 5.76877 8.99306 5.76877 8.99306C5.76877 8.9722 5.94292 8.65836 6.05267 8.48059C6.65222 7.51007 7.49394 6.66109 8.4563 6.05519C9.69803 5.27242 11.0722 4.91777 12.4763 5.01664C14.5271 5.15995 16.3729 6.16585 17.61 7.81392C18.3529 8.80258 18.8227 9.9926 18.957 11.228C18.9878 11.5155 18.9969 11.6824 18.9969 11.9999C18.9969 12.3173 18.9878 12.4842 18.957 12.7717C18.7475 14.6937 17.7497 16.4361 16.186 17.6098C15.1964 18.3536 14.0082 18.8216 12.7719 18.9568C12.4844 18.9876 12.3175 18.9967 12.0001 18.9967C11.6817 18.9967 11.5157 18.9876 11.2246 18.9559C9.33793 18.7509 7.61549 17.7785 6.44542 16.2593C5.63997 15.2135 5.13567 13.9191 5.02954 12.6257C5.02138 12.5287 5.00868 12.4225 5.00143 12.3899C4.96424 12.2212 4.83907 12.0824 4.67308 12.0253C4.58691 11.9962 4.44723 11.9962 4.36106 12.0253C4.15607 12.096 4.01821 12.2865 4.01821 12.4996C4.01821 12.5813 4.03907 12.8162 4.06446 13.0112C4.33657 15.1554 5.4622 17.091 7.19734 18.3962C8.85902 19.647 10.9388 20.1976 13.0114 19.9364C15.1583 19.6643 17.0958 18.535 18.4064 16.7908C19.8486 14.8706 20.3456 12.3917 19.7588 10.047C19.3153 8.27378 18.2695 6.70462 16.7955 5.59714C15.4041 4.55224 13.7017 3.98898 11.9729 4.00167C11.8504 4.00258 11.7261 4.0044 11.6962 4.00621Z"
                      fill="#212121"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* Right section with table */}
          <div className="w-full border-t border-black lg:border-none">
            {/* Header row */}
            <div className="bg-[#CEEFFE]  p-4 md:px-6 md:py-4 border-b border-black">
              <h3 className="text-3xl font-poppins text-black">This means</h3>
            </div>

            {/* First data row */}
            <div className="grid lg:grid-cols-2 border-b border-black">
              <div className="p-4 md:px-6 md:py-4 lg:border-r border-black">
                <h3 className="text-[32px] font-poppins text-black leading-[110%]">
                  300 youth benefited
                </h3>
                <p className="text-lg font-poppins text-black pt-2">
                  one PC has the power to positively impact the lives of 30
                  children and youth, providing them with valuable opportunities
                  and resources.
                </p>
              </div>
              <div className="p-4 md:px-6 md:py-4 border-t lg:border-none border-black">
                <h3 className="text-[32px] font-poppins text-black leading-[110%]">
                  1104.5 Kg C02
                </h3>
                <p className="text-lg font-poppins text-black pt-2">
                  emissions avoidance when compared to a non refurbished
                  scenario
                </p>
              </div>
            </div>

            {/* Equivalent to header */}
            <div className="bg-[#CEEFFE] px-6 py-4 border-b border-black">
              <h3 className="text-3xl font-poppins text-black">
                Equivalent to
              </h3>
            </div>

            {/* Trees row */}
            <div className="p-4 md:px-6 md:py-4 border-b border-black">
              <div className="flex items-center gap-2">
                <div className="text-[32px] font-poppins text-black">18.4</div>
                <div className="text-lg md:text-2xl font-poppins text-black">
                  trees seedling grown for 10 years
                </div>
              </div>
            </div>

            {/* Homes energy row */}
            <div className="p-4 md:px-6 md:py-4 border-b border-black">
              <div className="flex items-center gap-2">
                <div className="text-[32px] font-poppins text-black">0,1</div>
                <div className="text-lg md:text-2xl font-poppins text-black">
                  homes energy use for 1 year
                </div>
              </div>
            </div>

            {/* Vehicles row */}
            <div className="p-4 md:px-6 md:py-4">
              <div className="flex items-center gap-2">
                <div className="text-[32px] font-poppins text-black">0,2</div>
                <div className="text-lg md:text-2xl font-poppins text-black">
                  gasoline-powered vehicles per year
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Device;
