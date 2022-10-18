import React from 'react'

type Props = {
  className?: string
}

export default function Footer({ className }: Props) {
  return (
    <div className={className} >
      Footer
    </div>
  )
}