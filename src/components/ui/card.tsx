import React from 'react'
export const Card = ({children, className}:{children:React.ReactNode, className?:string}) => <div className={`card ${className||''}`}>{children}</div>
export const CardHeader = ({children}:{children:React.ReactNode}) => <div style={{marginBottom:8}}>{children}</div>
export const CardTitle = ({children}:{children:React.ReactNode}) => <h3 style={{margin:0}}>{children}</h3>
export const CardContent = ({children}:{children:React.ReactNode}) => <div>{children}</div>