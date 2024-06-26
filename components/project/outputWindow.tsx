import React from "react";


const OutputWindow = ({ outputDetails }: { outputDetails: any }) => {
  const getOutput = () => {
    if (outputDetails?.error) {
      // Compilation error
      return (
        <span className=" py-1 font-normal text-lg text-red-500">
          {outputDetails?.error?.status?.description}
        </span>
      );
    } else if (outputDetails?.output) {
      // Output with line breaks
      return (
        <span
          className="py-1 font-normal text-lg text-slate-200"
          style={{ whiteSpace: "pre-wrap" }} // Set white-space property
        >
          {outputDetails?.output}
        </span>
      );
    } else {
      // Default case
      return (
        <span className="py-1 font-normal text-lg line-clamp-3 text-red-500">
          {outputDetails?.error?.status?.description}
        </span>
      );
    }
  };

  return (
    <>
      {/* <h1 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 mb-2">
        Output
      </h1> */}
      <div className="w-96 fixed  h-full bg-gray-800/40 hover:border hover:border-green-600 px-4 text-white font-normal text-md overflow-y-scroll">
        <span className="text-slate-600 hover:underline text-md cursor-default">
          Output window
        </span>
        <div className="">{outputDetails ? getOutput() : null}</div>
      </div>
    </>
  )
};

export default OutputWindow;
