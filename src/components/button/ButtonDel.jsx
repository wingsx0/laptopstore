import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { useState } from "react";
import axios from "axios";
const ButtonDel = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDelete = async () => {
    try {
      const res = await axios.delete(`http://localhost:4000/admin/sp/${id}`);
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} onDel={handleDelete} />
    </>
  );
};

const SpringModal = ({ isOpen, setIsOpen, onDel }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 grid p-8 overflow-y-scroll cursor-pointer bg-slate-900/20 backdrop-blur place-items-center"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg p-6 overflow-hidden text-white rounded-lg shadow-xl cursor-default bg-gradient-to-br from-violet-600 to-indigo-600"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <div className="grid w-16 h-16 mx-auto mb-2 text-3xl text-indigo-600 bg-white rounded-full place-items-center">
                <FiAlertCircle />
              </div>
              <h3 className="mb-2 text-3xl font-bold text-center">
                Cảnh báo !
              </h3>
              <p className="mb-6 text-center">
                Bạn chắc chắn muốn xóa sản phẩm này ?
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full py-2 font-semibold text-white transition-colors bg-transparent rounded hover:bg-white/10"
                >
                  Không
                </button>
                <button
                  onClick={onDel}
                  className="w-full py-2 font-semibold text-indigo-600 transition-opacity bg-white rounded hover:opacity-90"
                >
                  Chắc chắn
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ButtonDel;
