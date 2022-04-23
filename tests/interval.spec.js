const intervalToObj  = require("../src/interval")

test("shold return object for 0 second", ()=>{

    const entry = intervalToObj(0)
    const objResult = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    }

    expect(entry).toEqual(objResult)
})

test("shold return object for 3 second", () => {

    const entry = intervalToObj(3 * 1000)
    const objResult = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 3
    }

    expect(entry).toEqual(objResult)
})

test("shold return object for 15 second", () => {

    const entry = intervalToObj(15 * 1000)
    const objResult = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 15
    }

    expect(entry).toEqual(objResult)
})

test("shold return object for 15 second 25ms", () => {

    const entry = intervalToObj(15 * 1025)
    const objResult = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 15
    }

    expect(entry).toEqual(objResult)
})

test("shold handle minutes", () => {

    const entry = intervalToObj(3 * 60 * 1000 + 15 * 1025)
    const objResult = {
        days: 0,
        hours: 0,
        minutes: 3,
        seconds: 15
    }

    expect(entry).toEqual(objResult)
})

test("shold handle  1 minutes", () => {

    const entry = intervalToObj(60 * 1000)
    const objResult = {
        days: 0,
        hours: 0,
        minutes: 1,
        seconds: 0
    }

    expect(entry).toEqual(objResult)
})

test("shold handle  3 hours", () => {

    const entry = intervalToObj(10800000+1000*60)
    const objResult = {
        days: 0,
        hours: 3,
        minutes: 1,
        seconds: 0
    }

    expect(entry).toEqual(objResult)
})

test("shold handle  15 days", () => {

    const entry = intervalToObj(10800000 * 5 * 24 + 10800000 + 1000 * 60)
    const objResult = {
        days: 15,
        hours: 3,
        minutes: 1,
        seconds: 0
    }

    expect(entry).toEqual(objResult)
})

test("shold handle  negative bumber", () => {

    const entry = intervalToObj(-(10800000 * 5 * 24 + 10800000 + 1000 * 60))
    const objResult = {
        days: 15,
        hours: 3,
        minutes: 1,
        seconds: 0
    }

    expect(entry).toEqual(objResult)
})