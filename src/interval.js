const SECOND = 1000
const MINUTE = 60 * SECOND
const HOURS = 60 * MINUTE
const DAYS = 24 * HOURS

const times = {
    days: DAYS,
    hours: HOURS,
    minutes: MINUTE
}

module.exports = function intervalToObj (ms) {
    ms = Math.abs(ms)
    const timer = {
        days : 0,
        hours : 0,
        minutes : 0,
        seconds : 0
    } 
    
    Object.keys(times).forEach(key=>{
        timer[key] = Math.floor(ms / times[key])
        ms -= timer[key] * times[key]
    })

    timer.seconds = Math.round(ms / SECOND)

    return timer
}