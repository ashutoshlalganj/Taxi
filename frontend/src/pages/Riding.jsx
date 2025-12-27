// src/pages/Riding.jsx

import React, { useContext, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { SocketContext } from '../context/SocketContext'
import LiveTracking from '../components/LiveTracking'

const getShortLabel = (address) => {
  if (!address) return ''
  const [first] = address.split(',')
  return first?.trim() || address
}

const capitalize = (str = '') =>
  str ? str.charAt(0).toUpperCase() + str.slice(1) : ''

const Riding = () => {
  const location = useLocation()
  const { ride } = location.state || {}
  const { socket } = useContext(SocketContext)
  const navigate = useNavigate()

  if (!ride) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-sm text-gray-600">
          No ride data. Please book a ride again.
        </p>
      </div>
    )
  }

  // ride end listener
  useEffect(() => {
    if (!socket) return
    const handleRideEnded = () => navigate('/home')
    socket.on('ride-ended', handleRideEnded)
    return () => socket.off('ride-ended', handleRideEnded)
  }, [socket, navigate])

  const captain = ride.captain || {}
  const fullname = captain.fullname || {}
  const captainName = `${fullname.firstname || ''}${
    fullname.lastname ? ' ' + fullname.lastname : ''
  }`

  const vehicle = captain.vehicle || {}
  const plate = vehicle.plate || '—'
  const color = vehicle.color || ''
  const type = vehicle.vehicleType ? capitalize(vehicle.vehicleType) : ''
  const vehicleLabel = [color, type].filter(Boolean).join(' ') || 'Vehicle'

  const destinationShort = getShortLabel(ride.destination)

  const goToPayment = () => {
    navigate('/payment', { state: { ride } })
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Home */}
      <Link
        to="/home"
        className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full shadow z-20"
      >
        <i className="text-lg font-medium ri-home-5-line" />
      </Link>

      {/* MAP */}
      <div className="w-full h-[40vh] sm:h-[45vh] md:h-[50vh]">
        <LiveTracking pickup={ride.pickup} destination={ride.destination} />
      </div>

      {/* BOTTOM */}
      <div className="flex-1 p-4 bg-white overflow-y-auto">

        {/* DRIVER ROW (FIXED LAYOUT) */}
        <div className="flex items-center justify-between mb-2">
          
          {/* LEFT: Captain name */}
          <div className="flex items-center gap-3">
            <img
              className="h-12 w-12 rounded-full"
              src="https://cdn-icons-png.flaticon.com/512/3202/3202926.png"
              alt="Captain"
            />
            <h2 className="text-lg font-medium capitalize">
              {captainName}
            </h2>
          </div>

          {/* RIGHT: Plate + Vehicle */}
          <div className="text-right">
            <h4 className="text-lg font-semibold">{plate}</h4>
            <p className="text-sm text-gray-600">{vehicleLabel}</p>
          </div>
        </div>

        <div className="flex gap-2 justify-between flex-col items-center">
          <div className="w-full mt-5">

            {/* DESTINATION */}
            <div className="flex items-center gap-5 p-3 border-b">
              <i className="text-lg ri-map-pin-2-fill" />
              <div>
                <h3 className="text-lg font-medium">{destinationShort}</h3>
                <p className="text-sm -mt-1 text-gray-600">
                  {ride.destination}
                </p>
              </div>
            </div>

            {/* FARE */}
            <div className="flex items-center gap-5 p-3">
              <i className="ri-currency-line" />
              <div>
                <h3 className="text-lg font-medium">₹{ride.fare}</h3>
                <p className="text-sm -mt-1 text-gray-600">Payment</p>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={goToPayment}
          className="w-full mt-5 bg-green-600 text-white font-semibold p-3 rounded-lg"
        >
          Make a Payment
        </button>
      </div>
    </div>
  )
}

export default Riding
