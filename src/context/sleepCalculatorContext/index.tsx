import { createContext, useState, useContext } from "react"

const SleepEfficiencyContext = createContext({
    efficiency: 0,
    timeSpent: 0,
    wakeUpTime: 0,
    setEfficiency: (x:number) => {},
    setTimeSpent: (x:number) => {}
})

export const SleepEfficiencyContextProvider = ({ children }: {children: React.ReactNode}) => {
    const [efficiency, setEfficiency ] = useState(0)
    const [timeSpent, setTimeSpent ] = useState(0)
    const [wakeUpTime, setWakeUpTime ] = useState(0)


    const values = {
        efficiency,
        setEfficiency,
        timeSpent,
        setTimeSpent,
        wakeUpTime,
        setWakeUpTime
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
