import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 m-10 mt-40 text-sm">
        <div>
          <h1 className="mb-5 w-full uppercase font-[prata] text-2xl"> bomboo world</h1>
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            necessitatibus, quod, explicabo saepe maiores officia ducimus
            veritatis eos iure temporibus molestias praesentium!
          </p>
        </div>

        <div>
          <p className="uppercase text-xl font-medium mb-5">company</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-222-323-889</li>
            <li>bombooWorld@gamil.com</li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        <p className="py-5 text-sm text-center capitalize">
          copyright 2024 bombooworld.com - All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
