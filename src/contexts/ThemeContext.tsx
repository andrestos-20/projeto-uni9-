import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
const ThemeContext = createContext<{theme:Theme; setTheme:(t:Theme)=>void}>({theme:'dark', setTheme:()=>{}});
export function ThemeProvider({children, defaultTheme='dark'}:{children:React.ReactNode, defaultTheme?:Theme}) {
  const [theme,setTheme]=useState<Theme>(defaultTheme);
  useEffect(()=>{ document.documentElement.dataset.theme = theme; },[theme]);
  return <ThemeContext.Provider value={{theme,setTheme}}>{children}</ThemeContext.Provider>;
}
export function useTheme(){ return useContext(ThemeContext); }