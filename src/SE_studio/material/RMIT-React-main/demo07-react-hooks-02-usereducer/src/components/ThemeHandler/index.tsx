import { useContext, createContext, useState } from 'react'

type Theme = "light" | "dark" | "system"

const ThemeContext : React.Context<Theme> = createContext<Theme>("system")

const useGetTheme = () => useContext(ThemeContext)

const AlertBox : React.FC = () => {
  const theme = useGetTheme()
  return (
    <div>
      <p>Current theme: {theme}</p>
    </div>
  )
}

const TextBox : React.FC = () => {
  const theme = useGetTheme()

  return(
    <div>
      <input type="text" value={theme} />
    </div>
  )
}

const ThemeHandler : React.FC = () => {
  const [theme, setState] = useState<Theme>('light')

  const setDarkMode = () => setState('dark')
  const setLightMode = () => setState('light')
  const setSystemMode = () => setState('system')

  return (
    <ThemeContext.Provider value={theme}>
      <AlertBox />
      <TextBox />
      <hr />
      <button onClick={setDarkMode}>Set Dark Mode</button>
      <button onClick={setLightMode}>Set Light Mode</button>
      <button onClick={setSystemMode}>Set System Mode</button>
    </ThemeContext.Provider>
  )
}

export default ThemeHandler