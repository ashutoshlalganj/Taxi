import React from 'react'

const WaitingForDriver = (props) => {

  // ✅ Short address helpers (unchanged logic)
  const pickupShort = props.ride?.pickup
    ? props.ride.pickup.split(',')[0]
    : ''

  const destinationShort = props.ride?.destination
    ? props.ride.destination.split(',')[0]
    : ''

  // ✅ Full captain name (FIRST + LAST)
  const captainFullName = props.ride?.captain?.fullname
    ? `${props.ride.captain.fullname.firstname || ''} ${props.ride.captain.fullname.lastname || ''}`
    : 'Captain'

  return (
    <div>
      <h5
        className='p-1 text-center w-[93%] absolute top-0'
        onClick={() => {
          props.waitingForDriver(false)
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>

      {/* 🔹 TOP SECTION */}
      <div className='flex items-center justify-between gap-3'>
        
        {/* LEFT: Captain details */}
        <div className='flex items-center gap-3'>
          <img
            className='h-12 w-12 rounded-full object-cover'
            src="https://cdn-icons-png.flaticon.com/512/3202/3202926.png"
            alt="Captain"
          />
          <div>
            <h2 className='text-lg font-medium capitalize'>
              {captainFullName}
            </h2>
            <p className='text-sm text-gray-600'>
              {props.ride?.captain?.vehicle?.plate}
            </p>
          </div>
        </div>

        {/* RIGHT: OTP */}
        <div className='text-right'>
          <p className='text-xs text-gray-500'>OTP</p>
          <h1 className='text-xl font-semibold tracking-widest'>
            {props.ride?.otp}
          </h1>
        </div>
      </div>

      {/* 🔹 DETAILS */}
      <div className='flex gap-2 justify-between flex-col items-center'>
        <div className='w-full mt-5'>

          {/* PICKUP */}
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">
                {pickupShort || 'Pickup'}
              </h3>
              <p className='text-sm -mt-1 text-gray-600'>
                {props.ride?.pickup}
              </p>
            </div>
          </div>

          {/* DESTINATION */}
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">
                {destinationShort || 'Destination'}
              </h3>
              <p className='text-sm -mt-1 text-gray-600'>
                {props.ride?.destination}
              </p>
            </div>
          </div>

          {/* FARE */}
          <div className='flex items-center gap-5 p-3'>
            <i className="ri-currency-line"></i>
            <div>
              <h3 className='text-lg font-medium'>
                ₹{props.ride?.fare}
              </h3>
              <p className='text-sm -mt-1 text-gray-600'>
                Payment
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default WaitingForDriver
