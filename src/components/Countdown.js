import React from "react"

const _second = 1000
const _minute = _second * 60
const _hour = _minute * 60
const _day = _hour * 24

const Countdown = () => {
  const [timeLeft, setTimeLeft] = React.useState({})

  React.useEffect(() => {
    const interval = setInterval(() => {
      const goal = new Date(2021, 4, 11, 9, 0, 0)
      const delta = goal - new Date()

      setTimeLeft({
        d: Math.floor(parseFloat(delta / _day)),
        h: Math.floor(parseFloat((delta % _day) / _hour)),
        m: Math.floor(parseFloat((delta % _hour) / _minute)),
        s: Math.floor(parseFloat((delta % _minute) / _second)),
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <p className="countdown">
      {Object.keys(timeLeft)
        .filter(key => timeLeft[key] > 0)
        .map(key => (
          <span className="countdown-item" key={key}>
            {timeLeft[key]} {key}
          </span>
        ))}
    </p>
  )
}

export default Countdown
