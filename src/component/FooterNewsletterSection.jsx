import React from "react";
import { Input, Ripple, initTE } from "tw-elements";

initTE({ Input, Ripple });
const FooterNewletterSection = () => {
  return (
    <>
      <div className="flex justify-between grow space-x-5 pb-5">
        <h1 className=" text-4xl text-white font-semibold font-sans uppercase my-auto border-r-2 pr-8">
          NewsLetter
        </h1>
        <div className=" my-auto">
          <form action="">
            <div class="gird-cols-1 grid items-center justify-center gap-4 md:grid-cols-3 content-center">
              <div class="">
                <p class="">
                  <strong className="text-sm">
                    Sign up to receive email updates on new recipes.
                  </strong>
                </p>
              </div>

              <div class=" relative " data-te-input-wrapper-init>
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border-1 bg-gray-800 px-3 py-[0.32rem] leading-[1.6] text-neutral-200 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput1"
                  placeholder="Email address"
                />
                <label
                  for="exampleFormControlInput1"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-200 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-neutral-200 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                >
                  Email address
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FooterNewletterSection;