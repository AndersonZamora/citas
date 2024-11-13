import React from 'react'

interface Props {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export const CustomTabPanel = ({ value, index, children }: Props) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className={`p-4 ${value === index ? 'block' : 'hidden'}`}
    >
      {children}
    </div>
  )
}
