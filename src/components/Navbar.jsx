import React, { useState } from "react";
import { FiSearch, FiBell, FiMessageSquare } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai"; // 화살표 아이콘 추가

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false); // 네비게이션 상태 관리

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <div className="relative w-full max-w-60">
        <span className="absolute inset-y-0 left-2 flex items-center text-gray-400">
          <FiSearch /> {/* 돋보기 아이콘 */}
        </span>
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-700 text-white rounded-md pl-8 pr-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
      </div>
      <div className="flex items-center space-x-4">
        <div className="p-2 rounded-full border-2 border-gray-500 hover:border-gray-300 cursor-pointer">
          <FiBell className="text-2xl text-gray-300" /> {/* 알림 아이콘 */}
        </div>
        <div className="p-2 rounded-full border-2 border-gray-500 hover:border-gray-300 cursor-pointer">
          <FiMessageSquare className="text-2xl text-gray-300" />{" "}
          {/* 메시지 아이콘 */}
        </div>
        <div className="flex flex-col items-center mr-2">
          <span className="text-base text-white">Hyunsu Kim</span>{" "}
          {/* 상태 텍스트 */}
          <span className="text-sm text-gray-400">Frontend Developer</span>{" "}
          {/* 상태 텍스트 */}
        </div>
        <FaUserCircle className="text-4xl cursor-pointer hover:text-gray-300 mr-2" />{" "}
        {/* 사용자 계정 아이콘 */}
        <button
          onClick={toggleNav}
          className="text-2xl cursor-pointer hover:text-gray-300 focus:outline-none"
        >
          {isNavOpen ? <AiOutlineUp /> : <AiOutlineDown />}{" "}
          {/* 화살표 아이콘 */}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
