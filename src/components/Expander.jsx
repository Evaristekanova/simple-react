import { useState, useRef, useEffect } from "react";
import autoAnimate from "@formkit/auto-animate";
import { IconSelector } from "@tabler/icons";

const Expander = () => {
  const [open, setOpen] = useState(false);
  const parentRef = useRef();

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef]);

  const showMore = () => setOpen(!open);

  return (
    <div className="flex justify-center items-center flex-col space-y-5 p-5">
      <h1 className="font-bold text-xl text-blue-600">
        Frequently Asked Questions
      </h1>
      <div
        className="px-2 cursor-pointer py-1 border-2 border-gray-200 w-[400px] rounded-lg"
        ref={parentRef}
      >
        <div
          onClick={showMore}
          className="select-none font-bold w-full flex justify-between items-center"
        >
          <span>Show More</span>
          <IconSelector size={20} />
        </div>
        {open && (
          <p className="p-2 italic">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos,
            libero! Excepturi voluptatum temporibus repellendus rem iure, aut
            voluptate nisi enim vitae facere minima aliquid natus odio sequi est
            dolores provident.
          </p>
        )}
      </div>
    </div>
  );
}

export default Expander;