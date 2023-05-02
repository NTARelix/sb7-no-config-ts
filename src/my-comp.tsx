import { ReactNode } from 'react'

interface MyCompProps {
  isError?: boolean,
  children: ReactNode,
}

export function MyComp({ isError = false, children }: MyCompProps) {
  return (
    <div style={{ backgroundColor: isError ? 'red' : 'green' }}>
      {children}
    </div>
  )
}
