

import React from 'react'

const UserProfileModal = ({ user, onClose, onLogout }) => {
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-end">
      <div className="w-full bg-white rounded-t-3xl p-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Profile</h2>
          <button onClick={onClose}>
            <i className="ri-close-line text-xl" />
          </button>
        </div>

        <div className="space-y-2">
          <p className="text-sm text-gray-500">Name</p>
          <p className="font-medium">
            {user?.fullname?.firstname} {user?.fullname?.lastname}
          </p>

          <p className="text-sm text-gray-500 mt-3">Email</p>
          <p className="font-medium">{user?.email}</p>
        </div>

        <button
          onClick={onLogout}
          className="w-full mt-6 bg-red-500 text-white py-2 rounded-lg"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default UserProfileModal
