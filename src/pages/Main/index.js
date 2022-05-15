import React from 'react'
import { RiTempHotLine } from 'react-icons/ri'
import { WiHumidity } from 'react-icons/wi'
import { AiFillThunderbolt } from 'react-icons/ai'
import client from '../../utils/mqtt'
import { LED_TOPIC } from '../../constants/topic'

// Antd
import { Switch } from 'antd'

export default function Main() {
  const handleLed1Change = (value) => {
    if(value === true) {
      client.publish(LED_TOPIC, 'led1_on')
    }else {
      client.publish(LED_TOPIC, 'led1_off')
    }
  }
  const handleLed2Change = (value) => {
    if(value === true) {
      client.publish(LED_TOPIC, 'led2_on')
    }else {
      client.publish(LED_TOPIC, 'led2_off')
    }
  }
  return (
    // Height 200 -> 250px
    <div className="card-main w-[600px] bg-white rounded-[10px] absolute top-[5%] left-[1%]">
      <div
        className="card-header p-[20px] bg-indigo-500 text-white text-[22px] font-bold"
        style={{
          borderRadius: '10px 10px 0px 0px',
        }}
      >
        Điều khiển thiết bị
      </div>
      <div className="card-body p-3 flex flex-wrap gap-2">
        <div
          className="card-items flex flex-auto justify-between p-[10px] rounded-lg"
          style={{
            backgroundColor: 'rgba(236, 240, 241, 0.5)',
          }}
        >
          <div className="card-items__content">
            <span
              style={{
                color: 'rgba(189, 195, 199, 1)',
              }}
            >
              Nhiệt độ
            </span>
            <p className="font-bold text-[22px]">30&#8451;</p>
          </div>
          <div className="card-items__img flex items-center">
            <RiTempHotLine className="text-[40px] fill-orange-500" />
          </div>
        </div>

        <div
          className="card-items flex flex-auto justify-between p-[10px] rounded-lg"
          style={{
            backgroundColor: 'rgba(236, 240, 241, 0.5)',
          }}
        >
          <div className="card-items__content">
            <span
              style={{
                color: 'rgba(189, 195, 199, 1)',
              }}
            >
              Độ ẩm
            </span>
            <p className="font-bold text-[22px]">50%</p>
          </div>
          <div className="card-items__img flex items-center">
            <WiHumidity className="text-[40px] fill-green-500" />
          </div>
        </div>

        <div
          className="card-items flex flex-auto justify-between p-[10px] rounded-lg"
          style={{
            backgroundColor: 'rgba(236, 240, 241, 0.5)',
          }}
        >
          <div className="card-items__content">
            <span
              style={{
                color: 'rgba(189, 195, 199, 1)',
              }}
            >
              Nhiệt độ
            </span>
            <p className="font-bold text-[22px]">30&#8451;</p>
          </div>
          <div className="card-items__img flex items-center">
            <AiFillThunderbolt className="text-[40px] fill-yellow-500" />
          </div>
        </div>

        <div
          className="card-devices block w-full h-[90px] rounded-lg p-3"
          style={{
            backgroundColor: 'rgba(236, 240, 241, 0.5)',
          }}
        >
          <span
            style={{
              color: 'rgba(189, 195, 199, 1)',
              marginBottom: '15px',
            }}
          >
            Các thiết bị
          </span>
          <div className="flex mt-2">
            <div className="light-1 font-bold text-[22px]">
              Đèn 1
              <Switch value={false} onChange={handleLed1Change} />
            </div>
            <div className="light-2 ml-[160px] font-bold text-[22px]">
              Đèn 2
              <Switch value={false} onChange={handleLed2Change} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
