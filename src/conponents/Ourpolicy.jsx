import React from "react";

const Ourpolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <div className="exgange-icon text-5xl m-auto mb-5">
        <i className="ri-exchange-funds-line"></i>
        </div>
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="font-semibold text-gray-400">we offer hassle free exchange Policy</p>
      </div>


      <div>
        <div className="exgange-icon text-5xl m-auto mb-5">
        <i className="ri-check-double-line"></i>
        </div>
        <p className="font-semibold capitalize">7 Days return Policy</p>
        <p className="font-semibold text-gray-400">we provide 7 days free return policy</p>
      </div>



      <div>
        <div className="exgange-icon text-5xl m-auto mb-5">
        <i className="ri-customer-service-2-line"></i>
        </div>
        <p className="font-semibold capitalize">best customer support</p>
        <p className="font-semibold text-gray-400">we provide 24x7 customer support</p>
      </div>

    </div>
  );
};

export default Ourpolicy;
