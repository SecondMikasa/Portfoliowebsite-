import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4">
    <div className="max-w-7xl mx-auto text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Kinshuk Jain. All rights reserved.
      </p>
      <p className="text-sm mt-2">
        This website and its content are for educational purposes only. Any
        use of logos, trademarks, or copyrighted material without permission is
        prohibited. Please respect intellectual property rights.
      </p>
    </div>
  </footer>
  )
}

export default Footer