import React from 'react'
import { FaBell, FaGlobe, FaSearch, FaShoppingCart } from 'react-icons/fa'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { FiHelpCircle } from "react-icons/fi";

const Header = () => {
  return (
    <div
      className="flex flex-col items-center py-2 px-10 space-y-4 w-full h-fit 
    bg-gradient-to-b from-[#ff5537] to-[#ff822e] sticky top-0 shadow-lg"
    >
      <div className="flex md:flex-row flex-col space-y-3 items-center justify-between w-full">
        <div className="flex flex-row items-center">
          <span className="px-2 border-r border-gray-400/50 text-white text-xs transition-all cursor-pointer hover:opacity-70">
            Seller Centre
          </span>
          <span className="px-2 border-r border-gray-400/50 text-white text-xs transition-all cursor-pointer hover:opacity-70">
            Mulai Jual
          </span>
          <span className="px-2 border-r border-gray-400/50 text-white text-xs transition-all cursor-pointer hover:opacity-70">
            Download
          </span>
          <span className="px-2 text-white text-xs">Ikuti Kami</span>
        </div>
        <div className="flex flex-row items-center space-x-3">
          <div className="flex items-center space-x-1 text-xs text-white transition-all cursor-pointer hover:opacity-70">
            <FaBell />
            <span>Notifikasi</span>
          </div>
          <div className="flex items-center space-x-1 text-xs text-white transition-all cursor-pointer hover:opacity-70">
            <FiHelpCircle />
            <span>Bantuan</span>
          </div>
          <div className="flex items-center space-x-1 text-xs text-white transition-all cursor-pointer hover:opacity-70">
            <FaGlobe />
            <span>Bahasa Indonesia</span>
            <MdOutlineKeyboardArrowDown />
          </div>
          <div className="flex items-center space-x-1 text-xs text-white border-r border-gray-400/50 px-2 transition-all cursor-pointer hover:opacity-70">
            <span className="font-bold">Daftar</span>
          </div>
          <div className="flex items-center space-x-1 text-xs text-white transition-all cursor-pointer hover:opacity-70">
            <span className="font-bold">Login</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <img
          src="/logo.png"
          alt=""
          className="hidden md:inline-flex w-40 cursor-pointer"
        />
        <div className="flex flex-col space-y-2 md:flex-[0.7] flex-1">
          <div className="flex flex-row w-full h-[40px] items-center bg-white rounded-full shadow-lg">
            <input
              type="text"
              className="w-full h-[30px] outline-none px-2 ml-2"
              placeholder="Search Products..."
            />
            <FaSearch className="inline-flex rounded-full w-8 h-8 py-2 bg-[#ff6600] text-white mr-2 cursor-pointer" />
          </div>
          <div className="hidden md:flex flex-row items-center text-xs space-x-4">
            <span className="text-white transition-all hover:opacity-70 cursor-pointer py-1 px-2 rounded-lg bg-[#fa9552] ">
              Baju Wanita
            </span>
            <span className="text-white transition-all hover:opacity-70 cursor-pointer py-1 px-2 rounded-lg bg-[#fa9552] ">
              Tas Wanita
            </span>
            <span className="text-white transition-all hover:opacity-70 cursor-pointer py-1 px-2 rounded-lg bg-[#fa9552] ">
              Elektronik
            </span>
            <span className="text-white transition-all hover:opacity-70 cursor-pointer py-1 px-2 rounded-lg bg-[#fa9552] ">
              Sepatu Pria
            </span>
            <span className="text-white transition-all hover:opacity-70 cursor-pointer py-1 px-2 rounded-lg bg-[#fa9552] ">
              Jam Tangan pria
            </span>
            <span className="text-white transition-all hover:opacity-70 cursor-pointer py-1 px-2 rounded-lg bg-[#fa9552] ">
              Aksesoris
            </span>
            <span className="text-white transition-all hover:opacity-70 cursor-pointer py-1 px-2 rounded-lg bg-[#fa9552] ">
              Handphone
            </span>
            <span className="text-white transition-all hover:opacity-70 cursor-pointer py-1 px-2 rounded-lg bg-[#fa9552] ">
              Baju Balita
            </span>
          </div>
        </div>
        <FaShoppingCart className="w-5 h-5 md:mx-0 mx-3 cursor-pointer text-white" />
      </div>
    </div>
  );
}

export default Header