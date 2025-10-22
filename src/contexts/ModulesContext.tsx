import React, { createContext, useContext, useMemo, useState } from 'react'
import data from '@/data/modules.json'

export type Material = {
  id: string
  type: 'pdf'|'video'|'link'
  title: string
  url: string
  description?: string
}
export type Module = { id:string; title:string; summary:string; progress:number; materials:Material[] }
type Ctx = { modules: Module[]; setModules: (m:Module[])=>void }
const C = createContext<Ctx>({modules:[], setModules:()=>{}})
export function ModulesProvider({children}:{children:React.ReactNode}){
  const [modules,setModules]=useState<Module[]>(data as Module[])
  const value = useMemo(()=>({modules,setModules}),[modules])
  return <C.Provider value={value}>{children}</C.Provider>
}
export const useModules = () => useContext(C)