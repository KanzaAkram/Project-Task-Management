import { Switch } from '@headlessui/react'
import { useContext, useState } from 'react'
import { AuthThemes } from '../ThemeContext/ThemeContext'

export default function Toggle() {
  const [enabled, setEnabled] = useState(false)
  const { themes } = useContext(AuthThemes)

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`group relative flex h-7 w-14 cursor-pointer rounded-full duration-200 ease-in-out focus:outline-none 
        ${themes === "dark" ? "bg-white p-1 transition-colors" : "bg-gray-500 p-1 transition-colors"}`}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full ${themes==="dark"?("bg-black"):("bg-white")} ring-0 shadow-lg transition duration-200 ease-in-out 
          ${enabled ? 'translate-x-7' : 'translate-x-0'}`}
      />
    </Switch>
  )
}
