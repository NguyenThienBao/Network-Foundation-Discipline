import { createContext, useContext, useState, useMemo } from 'react'

type ComplexObject = {
  kind : string
}

const Context = createContext<ComplexObject | null>(null)

const useGetContextObject = () => {
  const object = useContext(Context)
  
  if(!object) {
    throw new Error('useGetContextObject must be used within a Provider')
  }

  return object
}

const InfoComponent : React.FC = () => {
  const object = useGetContextObject();

  return(
    <div>
      <p>Current object: {object.kind}</p>
    </div>
  )
}

const MemoComponent : React.FC = () => {
  const object = useMemo(() => ({ kind: "complex"}), [])
  return(
    <Context.Provider value={object}>
      <InfoComponent />
    </Context.Provider>
  )
}

export default MemoComponent