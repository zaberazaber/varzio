import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

const BasicFAQ = () => {
  return (
    <div className="px-4 bg-white py-12">
      <div className="mx-auto   max-w-3xl">
        <h3 className="mb-4 text-center text-zinc-500 text-3xl font-semibold">
          Frequently asked questions
        </h3>
        <Question title="Why is the sky blue?" defaultOpen>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            laboriosam neque reprehenderit saepe eius dolorum vel consequuntur
            perspiciatis ad vero.
          </p>
        </Question>
        <Question title="Why did the chicken cross the road?">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            laboriosam neque reprehenderit saepe eius dolorum vel consequuntur
            perspiciatis ad vero.
          </p>
        </Question>
        <Question title="How many licks does it take to get to the center of a tootsie pop?">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            laboriosam neque reprehenderit saepe eius dolorum vel consequuntur
            perspiciatis ad vero.
          </p>
        </Question>
        <Question title="Where's Waldo?">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            laboriosam neque reprehenderit saepe eius dolorum vel consequuntur
            perspiciatis ad vero.
          </p>
        </Question>
      </div>
    </div>
  );
};

const Question = ({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: JSX.Element;
  defaultOpen?: boolean;
}) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="border-b-[1px] border-b-rose-300"
    >
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex w-full items-center justify-between gap-4 py-6"
      >
        <motion.span
          variants={{
            open: {
              color: "rgba(3, 6, 23, 0)",
            },
            closed: {
              color: "rgba(3, 6, 23, 1)",
            },
          }}
          className="bg-gradient-to-r from-rose-600 to-rose-600 bg-clip-text text-left text-lg font-medium"
        >
          {title}
        </motion.span>
        <motion.span
          variants={{
            open: {
              rotate: "180deg",
              color: "#e11d48",
            },
            closed: {
              rotate: "0deg",
              color: "rgb(3, 6, 23)",
            },
          }}
        >
          <FiChevronDown className="text-2xl" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? height : "0px",
          marginBottom: open ? "24px" : "0px",
        }}
        className="overflow-hidden text-slate-600"
      >
        <p ref={ref}>{children}</p>
      </motion.div>
    </motion.div>
  );
};

export default BasicFAQ;