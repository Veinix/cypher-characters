import React from 'react'

interface PageHeaderProps {
    text: string
}

function PageHeader({text}: PageHeaderProps) {
  return (
    <h2 className="text-3xl md:text-5xl mb-4 font-extrabold">{text}</h2>
  )
}

export default PageHeader