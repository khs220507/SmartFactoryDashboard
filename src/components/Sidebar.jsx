import { useState } from 'react';
import { MdDashboard, MdSettings, MdPrecisionManufacturing} from 'react-icons/md';

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState('Dashboard'); // 활성화된 메뉴 상태
    return (
      <div className="bg-gray-900 text-gray-200 h-full w-64 flex flex-col p-4 rounded-tl-lg rounded-bl-lg">
        <div className="flex items-center mb-4">
        <MdPrecisionManufacturing className="text-2xl text-green-400 ml-2 mr-2"/> {/* 아이콘 추가 */}
        <h2 className="text-2xl font-bold text-white ml-2 mr-2">Smart Factory</h2>
      </div>
        <hr className="border-gray-600 mb-4" />
        <ul className="space-y-6">
        <li
          className={`flex items-center space-x-4 p-4 rounded cursor-pointer ${
            activeMenu === 'Dashboard' ? 'bg-blue-500 text-white' : 'hover:bg-gray-700 hover:text-white'
          }`}
          onClick={() => setActiveMenu('Dashboard')}
        >
          <MdDashboard className="text-2xl space-x-4 ml-4"/>
          <span>Dashboard</span>
        </li>
        <li
          className={`flex items-center space-x-4 p-4 rounded cursor-pointer transition ${
            activeMenu === 'Settings'
              ? 'bg-blue-500 text-white'
              : 'hover:bg-gray-700 hover:text-white'
          }`}
          onClick={() => setActiveMenu('Settings')}
        >
          <MdSettings className="text-2xl space-x-4 ml-4"/>
          <span>Settings</span>
        </li>
          
        </ul>
      </div>
    )
  }