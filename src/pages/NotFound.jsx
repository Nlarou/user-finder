import React from 'react'
import { FaHome } from 'react-icons/fa'
import {Link} from 'react-router-dom'
function NotFound() {
  return (
    <div className="hero">
        <div className="text-center hero-content">
            <div className="max-w-lg">
                <h1 className="text-8xl font-bold mb-8">
                    Oops !
                </h1>
                <p className="text-xl mb-8">
                    The page you are looking for does not exist.
                </p>
                <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
                    <FaHome className="inline pr-2 text-3xl"/>
                    Back to Home
                </Link>
            </div>
        </div>
    </div>
  )
}

export default NotFound