import React from "react";
import starndardQualityImage from "../../assets/images/standard-quality-control-concept-m (1) 1.png";
import { AlignTopSimple, Broadcast, ChatCircleDots, DeviceMobile, Lightbulb } from "@phosphor-icons/react";

const Features = () => {
    return (
        <div className="w-full text-white bg-naturalDark text-NeutralLight p-5">
            <span className=" bg-secondary px-10"></span>
            <div className=" md:flex justify-around gap-5 items-center">
                <div className="md:w-[70%]">
                    <h1 className="text-2xl font-medium">Our Amazing Features</h1>
                    <p>Explore the Power-Packed Features of DataFlex ConnectHub</p>
                    <img src={starndardQualityImage} alt="" />
                </div>

                <div className=" text-ellipsis text-balance grid md:grid-rows-2 md:grid-flow-col gap-4">
                    <div>
                        <DeviceMobile size={20} color="#F58128" />
                        <h1>Buy Data Plans</h1>
                        <p>Enjoy budget-friendly data plans tailored to meet your internet browsing needs.</p>
                    </div>
                    <div>
                        <AlignTopSimple size={20} color="#F58128" />
                        <h1>Airtime Recharge</h1>
                        <p>Easily recharge your airtime online, ensuring accessibility at any time of the day.</p>
                    </div>
                    <div>
                        <Broadcast size={20} color="#F58128" />
                        <h1>Instant Cable Activation</h1>
                        <p> Activate cable subscriptions instantly with attractive discounts, enhancing your entertainment experience.</p>
                    </div>
                    <div>
                      <ChatCircleDots size={20} color="#F58128" />
                      <h1>Bulk SMS</h1>
                      <p>Send bulk SMS seamlessly through our platform, making business communication efficient and cost-effective.</p>
                    </div>
                    <div>
                      <Lightbulb size={20} color="#F58128" />
                      <h1>Simplified Utility Bills</h1>
                      <p>Conveniently pay utility bills, including electricity bills, with our user-friendly platform designed to meet your needs.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Features;
