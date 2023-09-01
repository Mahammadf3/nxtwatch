import React from 'react'

const LanguageContext = React.createContext({
  onChange: () => {},
  savedData: [],
})

export default LanguageContext
