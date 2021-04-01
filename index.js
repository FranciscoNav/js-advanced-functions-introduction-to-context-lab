// Your code here
function createEmployeeRecord([string, stringTwo, stringThree, num]){
    const employeeObject = {firstName: string, familyName: stringTwo, title: stringThree, payPerHour: num, timeInEvents: [], timeOutEvents: [] }
    return employeeObject
}

function createEmployeeRecords(arry){
    return arry.map( x => createEmployeeRecord(x))
}

function createTimeInEvent(object, stamp) {
    let splitStamp = stamp.split(" ")
    let hour = splitStamp[1]
    let date = splitStamp[0]
    object.timeInEvents.push({
        type:"TimeIn",
        hour: parseInt(hour, 10),
        date: date
    })
    return object
}

function createTimeOutEvent(object, stamp) {
    let splitStamp = stamp.split(" ")
    let hour = splitStamp[1]
    let date = splitStamp[0]
    object.timeOutEvents.push({
        type:"TimeOut",
        hour: parseInt(hour, 10),
        date: date
    })
    return object
}

function hoursWorkedOnDate(object, date) {
    const timeInArry = object.timeInEvents
    const timeOutArry = object.timeOutEvents
    const findDateIn = timeInArry.find(element => element.date === date)
    const findDateOut = timeOutArry.find(element => element.date === date)
    return (findDateOut.hour - findDateIn.hour)/100
}

function wagesEarnedOnDate(object, date) {
    return hoursWorkedOnDate(object, date) * object.payPerHour
}

function allWagesFor(object) {
    const timeInArry  = object.timeInEvents
    const wages = timeInArry.reduce((memo, element)=> {
        return memo += wagesEarnedOnDate(object,element.date)
        },0)
    return wages 
}

function findEmployeeByFirstName(srcArry, firstName) {
    return srcArry.find(e => e.firstName===firstName)
}

function calculatePayroll(empArry) {
   return empArry.reduce((memo, e) => {
       return memo += allWagesFor(e)
    },0)
}