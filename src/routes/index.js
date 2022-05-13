import {AiFillHome} from 'react-icons/ai'
import {GoSettings} from 'react-icons/go'
import {FaChartArea } from 'react-icons/fa'
import {AiOutlineFileExclamation} from 'react-icons/ai'

const sidebarItems = [
  {
    name: 'Dashboard ',
    to: '/dashboard',
    text: 'dashboard',
    component: <AiFillHome className='w-[20px] h-[20px] fill-blue-500'/>
  },
  {
    name: 'Main ',
    to: '/main',
    text: 'main',
    component: <GoSettings className='w-[20px] h-[20px] fill-orange-500 rotate-[-90deg]'/>
  },
  {
    name: 'Charts',
    to: '/charts',
    text: 'charts',
    component: <FaChartArea className='w-[20px] h-[20px] fill-yellow-500'/>
  },
  {
    name: 'Logs',
    to: '/logs',
    text: 'logs',
    component: <AiOutlineFileExclamation className='w-[20px] h-[20px] fill-red-500'/>
  },
]

export default sidebarItems
