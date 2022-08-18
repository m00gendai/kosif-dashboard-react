const date = new Date()

export const unixDateNow = Date.now()

export const todayYear = date.getFullYear()
export const todayMonth = date.getMonth() + 1
export const todayDay = date.getDate()
export const todayHour = date.getHours()
export const todayMinutes = date.getMinutes()
export const todaySeconds = date.getSeconds()

export const todayUTCYear = date.getUTCFullYear()
export const todayUTCMonth = date.getUTCMonth() + 1
export const todayUTCDay = date.getUTCDay()
export const todayUTCHour = date.getUTCHours()
export const todayUTCMinutes = date.getUTCMinutes()
export const todayUTCSeconds = date.getUTCSeconds()


export default unixDateNow