import React from "react";

const ChooseUs = () => {
    return (
        <div className="py-10 space-y-5">
            <h1 className="border-secondary border-t-2 text-2xl font-medium">Why choose us?</h1>
            <p> At DataFlex ConnectHub, we pride ourselves on delivering a cutting-edge SaaS solution that goes beyond the ordinary. Here's why businesses choose us for their data plans and utility services:</p>

            <div className=" grid md:grid-rows-2 md:grid-flow-col gap-4">
                <div>
                    <strong className=" text-secondary text-3xl">01</strong>
                    <h1 className=" font-bold  text-xl">Seamless Integration with Telegram</h1>
                    <p className="font-bold">Our Telegram Chatbot seamlessly integrates with your existing communication channels, making it effortless for you to manage data plans and utility services in one place.</p>
                </div>

                <div>
                    <strong className=" text-secondary text-3xl">02</strong>
                    <h1 className=" font-bold  text-xl">Affordable Data Plans</h1>
                    <p className=" font-bold  ">We offer some of the most competitive rates in the market for data plans, ensuring that your business stays connected without breaking the bank.</p>
                </div>

                <div>
                    <strong className=" text-secondary text-3xl">03</strong>
                    <h1 className=" font-bold  text-xl">24/7 Airtime Recharge</h1>
                    <p className=" font-bold  ">With our service, airtime recharge is no longer constrained by time. Whether it's day or night, you can recharge your airtime instantly, ensuring uninterrupted communication</p>
                </div>

                <div>
                    <strong className=" text-secondary text-3xl">04</strong>
                    <h1 className=" font-bold  text-xl">Instant Cable Activation with Exclusive Discounts</h1>
                    <p className=" font-bold  ">Enjoy the luxury of instant cable subscription activation with exclusive discounts. Enhance your entertainment experience while saving costs.</p>
                </div>

                <div>
                    <strong className=" text-secondary text-3xl">05</strong>
                    <h1 className=" font-bold  text-xl">Efficient Bulk SMS Services</h1>
                    <p className=" font-bold  ">Streamline your business communication through our efficient bulk SMS services. Send messages to your audience easily, enhancing your marketing and outreach efforts.</p>
                </div>

                <div>
                    <strong className=" text-secondary text-3xl">06</strong>
                    <h1 className=" font-bold  text-xl"> Flexible and Scalable Plans</h1>
                    <p className=" font-bold  ">Choose from a range of flexible and scalable plans that cater to the unique needs of your business. Whether you're a startup or an established enterprise, we have a plan for you.</p>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;
