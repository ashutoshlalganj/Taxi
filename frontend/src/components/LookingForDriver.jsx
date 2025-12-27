import React from 'react'

const LookingForDriver = (props) => {

    // ✅ SAFE short text helpers (NEW – but koi function remove nahi)
    const pickupShort = props.pickup
        ? props.pickup.split(',')[0]
        : ''

    const destinationShort = props.destination
        ? props.destination.split(',')[0]
        : ''

    return (
        <div>
            <h5
                className='p-1 text-center w-[93%] absolute top-0'
                onClick={() => {
                    props.setVehicleFound(false)
                }}
            >
                <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
            </h5>

            <h3 className='text-2xl font-semibold mb-5'>
                Looking for a Driver
            </h3>

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
                                {props.pickup}
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
                                {props.destination}
                            </p>
                        </div>
                    </div>

                    {/* FARE */}
                    <div className='flex items-center gap-5 p-3'>
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>
                                ₹{props.fare[props.vehicleType]}
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

export default LookingForDriver
