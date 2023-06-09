"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";

const Footer = ({ type }: { type: "pry" | "sec" }) => {
  const mobileAndTabs = useMediaQuery("(max-width: 768px)");
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        body: JSON.stringify(formInputs),
      });
      const data: { message: string } = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    setFormInputs({ name: "", email: "", subject: "", message: "" });
  };
  return (
    <footer
      className={` ${
        type === "pry" ? "bg-pryBg" : "bg-secBg"
      }  pt-[65px] pb-[20px] overflow-x-clip overflow-y-clip lg:overflow-y-visible`}
      id="contact"
    >
      <div className="container">
        <div className="flex">
          <motion.div
            className="w-full sm:w-8/12 lg:w-6/12"
            initial={{ opacity: 0, x: "-60px" }}
            whileInView={{
              opacity: 1,
              x: "0px",
              transition: { duration: mobileAndTabs ? 0.4 : 0.7 },
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2
              className={` leading-none font-montserrat font-bold text-[40px] lg:text-[50px] ${
                type === "pry" ? "text-pryText" : "text-secText"
              }  mb-[18px] text-center sm:text-left`}
            >
              Want To Work?
            </h2>
            <p className=" font-mulish font-normal text-[14px] max-w-[400px] lg:max-w-none lg:text-[18px] mb-[30px] text-center sm:text-left">
              If you&apos;re looking for a professional, modern and functional
              website for your business or personal use, I&apos;m available for
              hire.
            </p>
            <h3
              className={` font-montserrat font-bold text-[30px] lg:text-[40px]  ${
                type === "pry" ? "text-pryText" : "text-secText"
              } mb-[14px]`}
            >
              Contact Me
            </h3>
            <form
              className=" grid grid-cols-2 gap-x-[10px] gap-y-[10px]"
              onSubmit={handleSubmit}
            >
              <input
                value={formInputs.name}
                onChange={(e) =>
                  setFormInputs((formInput) => ({
                    ...formInput,
                    name: e.target.value,
                  }))
                }
                type="text"
                placeholder="Name"
                className="col-span-2 md:col-span-1 h-[56px] outline-none border border-[rgba(0, 0, 0, 0.3)] rounded-[5px] bg-transparent py-[8px] px-[16px] font-mulish font-normal placeholder-[rgba(0, 0, 0, 0.3)]"
              />
              <input
                value={formInputs.email}
                required={true}
                onChange={(e) =>
                  setFormInputs((formInput) => ({
                    ...formInput,
                    email: e.target.value,
                  }))
                }
                type="email"
                placeholder="Email"
                className="col-span-2 md:col-span-1 h-[56px] outline-none border border-[rgba(0, 0, 0, 0.3)] rounded-[5px] bg-transparent py-[8px] px-[16px] font-mulish font-normal placeholder-[rgba(0, 0, 0, 0.3)]"
              />
              <input
                value={formInputs.subject}
                onChange={(e) =>
                  setFormInputs((formInput) => ({
                    ...formInput,
                    subject: e.target.value,
                  }))
                }
                type="text"
                placeholder="Subject"
                className="h-[56px] col-span-2 outline-none border border-[rgba(0, 0, 0, 0.3)] rounded-[5px] bg-transparent py-[8px] px-[16px] font-mulish font-normal placeholder-[rgba(0, 0, 0, 0.3)]"
              />
              <textarea
                value={formInputs.message}
                required={true}
                onChange={(e) =>
                  setFormInputs((formInput) => ({
                    ...formInput,
                    message: e.target.value,
                  }))
                }
                placeholder="Message"
                className=" min-h-[165px] resize-none col-span-2 outline-none border border-[rgba(0, 0, 0, 0.3)] rounded-[5px] bg-transparent py-[8px] px-[16px] font-mulish font-normal placeholder-[rgba(0, 0, 0, 0.3)]"
              />
              <div className="ml-auto col-span-2">
                <Button type={type === "pry" ? "pry" : "sec"} value="Send" />
              </div>
            </form>
          </motion.div>
          <motion.div
            className="w-4/12 lg:w-6/12 hidden sm:block relative"
            initial={{ opacity: 0, y: "50px" }}
            whileInView={{
              opacity: 1,
              y: ["-5px", "5px", "-5px"],
              transition: {
                duration: mobileAndTabs ? 0.4 : 0.7,
                y: { repeat: Infinity, duration: 8, ease: "easeInOut" },
              },
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              alt="footer"
              src="/footer.png"
              width={510}
              height={930}
              className=" absolute sm:w-[400px] md:w-[480px] max-w-none lg:max-w-full sm:left-[30px] md:left-[60px] lg:left-[250px]  sm:bottom-[-100px] md:bottom-[-250px]  lg:bottom-[-80px]"
            />
          </motion.div>
        </div>

        <p className="text-[#7e7b79] mt-[40px] font-mulish font-normal text-[14px] ">
          © All right reserved – Shadrack
        </p>
      </div>
    </footer>
  );
};

export default Footer;
