import React from 'react'

interface props {
    children: React.ReactNode
    height?: string
}
export const NivoContainer = (props: props) => (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <div style={{ height: props.height || '50vh' }}>{props.children}</div>
      </div>
    </div>
  )
  
  