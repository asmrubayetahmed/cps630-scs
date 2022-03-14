import React from 'react'
import Header from '../components/Header'

function Checkout() {
  return (
    <div className="bg-gray-100">
        <Header />

        <main className="lg:flex max-w-screen-2xl mx-auto">
            {/* LEFT */}
            <div className="flex flex-col p-5 space-y-10 bg-white">
                <h1 className="text-3xl border-b pb-4">
                    Your Shopping Cart
                </h1>
            </div>
        </main>
    </div>
  )
}

export default Checkout