import React from "react";

const Newsletterbox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800 capitalize">
        {" "}
        buy now & get 10% off{" "}
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
        facere nemo harum debitis voluptas expedita placeat numquam ab vitae
        eaque!
      </p>
      <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-6 mx-auto my-6 border pl-3">
        <input
          type="email"
          placeholder="enter your email"
          className="w-full sm:flex-1 outline-none"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs py-4 px-10 uppercase"
        >
          subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletterbox;
