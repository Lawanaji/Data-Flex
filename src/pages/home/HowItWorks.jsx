import React from "react";

const HowItWorks = () => {
    return (
        <div className="w-full  text-white p-5">
            <span className=" border  border-b-secondary p-5"></span>
            <div>
                <h1>How it Works</h1>
                <p>Discover Connectivity in Four Simple Steps with DataFlex ConnectionHub.</p>
                <div className="flex flex-col md:flex-row justify-between ">
                    <div className="">
                        <strong>01</strong>
                        <p className=" text-secondary font-semibold text-xl"> Sign up for an account with us.</p>
                    </div>
                    <div>
                        <strong>02</strong>
                        <p className=" text-secondary font-semibold text-xl">Choose a plan that fits your business needs.</p>
                    </div>

                    <div>
                        <strong>03</strong>
                        <p className=" text-secondary font-semibold text-xl">Set up your Telegram Chatbot effortlessly.</p>
                    </div>
                    <div>
                        <strong>04</strong>
                        <p className=" text-secondary font-semibold text-xl">Enjoy the benefits of affordable data plans and utility services.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
