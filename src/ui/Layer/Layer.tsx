import React from 'react'

const Layer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className='h-screen w-full'>
        { children }
    </main>
  )
}

export default Layer