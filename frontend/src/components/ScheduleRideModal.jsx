import React, { useState } from 'react'

const ScheduleRideModal = ({ onClose }) => {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const handleSchedule = () => {
    if (!date || !time) {
      alert('Please select date and time')
      return
    }

    alert(`Ride Scheduled on ${date} at ${time}`)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-end">
      <div className="w-full bg-white rounded-t-3xl p-5">
        <h2 className="text-lg font-semibold mb-4">Schedule Ride</h2>

        <input
          type="date"
          className="w-full border p-2 rounded mb-3"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="time"
          className="w-full border p-2 rounded mb-4"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <button
          onClick={handleSchedule}
          className="w-full bg-black text-white py-2 rounded"
        >
          Confirm Schedule
        </button>

        <button
          onClick={onClose}
          className="w-full mt-2 text-gray-500"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

export default ScheduleRideModal
