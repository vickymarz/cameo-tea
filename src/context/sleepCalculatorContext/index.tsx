import { createContext, useState, useContext } from "react"

const SleepEfficiencyContext = createContext({
    efficiency: 0
})

export const SleepEfficiencyContextProvider = ({ children }: {children: React.ReactNode}) => {
    const [efficiency, setEfficiency ] = useState(0)

    const values = {
        efficiency,
        setEfficiency
    }

  return (
    <SleepEfficiencyContext.Provider value={values}>
        {children}
    </SleepEfficiencyContext.Provider>
  )
}

export const SleepEfficiencyContextUse = () => {
	return useContext(SleepEfficiencyContext);
};
