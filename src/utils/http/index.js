// api 接口列表
import request from "./request.js"

export const doLogin = (data={}) => request.post("login",data)
export const profile = (data={}) => request.post("profile",data)
export const handleProfile = (data={}) => request.post("handleProfile",data)

export const dashboardLineChart = (data={}) => request.post("dashboardLineChart",data)
export const dashboardPieChart = (data={}) => request.post("dashboardPieChart",data)


