import TherapeuteForm from '@/components/TherapeuteForm'
import React from 'react'

const page = () => {
  return (
    <div
    className="min-h-screen flex items-center justify-center bg-cover bg-center"
    style={{ backgroundImage: "url('/images/therapeuteForm-bg.png')" }}
  >
   <TherapeuteForm/>
  </div>
  )
}

export default page
