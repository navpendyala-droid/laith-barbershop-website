// Get current day dynamically
export const getCurrentDay = () => {
  const today = new Date().getDay() // 0 = Sunday, 1 = Monday, etc.
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return days[today]
}

export const currentDay = getCurrentDay()

export const businessHours = [
  { day: "Monday", hours: "Closed", isToday: currentDay === "Monday" },
  { day: "Tuesday", hours: "10 AM – 7 PM", isToday: currentDay === "Tuesday" },
  { day: "Wednesday", hours: "10 AM – 7 PM", isToday: currentDay === "Wednesday" },
  { day: "Thursday", hours: "10 AM – 7 PM", isToday: currentDay === "Thursday" },
  { day: "Friday", hours: "10 AM – 7 PM", isToday: currentDay === "Friday" },
  { day: "Saturday", hours: "9 AM – 5 PM", isToday: currentDay === "Saturday" },
  { day: "Sunday", hours: "10 AM – 4:30 PM", isToday: currentDay === "Sunday" }
]

// Get today's hours for display in Hero component
export const getTodaysHours = () => {
  const today = businessHours.find(schedule => schedule.isToday)
  return today ? today.hours : "10 AM – 7 PM" // fallback
}