import {intervalToObj} from "../src/interval"

test("shold return object for 0 second", ()=>{

    const obj = intervalToObj(0)
    const objResult = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    }

    describe(intervalToObj(0)).toEqual(objResult)
})