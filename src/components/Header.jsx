import React from 'react'

export default function Header ()  {
    return (
        <header className='bg-blue-600 text-white p-4'>
            <div className='max-w-6xl mx-auto flex justify-between items-center'>
                <h1 className='font-bold text-xl'>My Online Store</h1>
                <nav>
                    <a href = '/' className='mr-4'>Home</a>
                    <a href = '/cart' className='mr-4'>Cart</a>
                    <a href = '/login'>Login</a>
                </nav>
            </div>
        </header>
    )
}