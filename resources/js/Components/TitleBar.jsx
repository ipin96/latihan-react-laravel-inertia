import React from "react";

const TitleBar = ({ title, children }) => {
    return (
            <h5 className="flex flex-row justify-between mx-5 mb-3 py-5 font-bold rounded-t-xl text-gray-600 text-xl bg-blue-400 shadow-sm shadow-gray-500 w-[675px] md:w-[735px] lg:w-[985px] xl:w-[1060px]">
                <p className="mx-3 text-white">{title}</p>
                <div className="mx-5">{children}</div>
            </h5>
    );
};

export default TitleBar;
