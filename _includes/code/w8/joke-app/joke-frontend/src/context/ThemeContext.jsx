import React, { useState, createContext, useContext } from 'react'

export const ThemeContext = createContext()

const ThemeWrapper = ({ children }) => {
  const [theme, setTheme] = useState('dark')

  const providedValues = { theme, setTheme, peopleInClass: 13 }
  return (
    <ThemeContext.Provider value={providedValues}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}

export default ThemeWrapper
