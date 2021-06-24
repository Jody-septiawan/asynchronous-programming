// let janji = false

// let myPromise = new Promise(function (resolve, reject) {
//     if (janji) {
//         resolve('Janji terpenuhi')
//     } else {
//         reject('Janji tidak terpenuhi')
//     }
// })

// console.log(myPromise)

// myPromise
//     .then(response => console.log(response))
//     .catch(response => console.log(response))


// let getAPI = fetch('https://jsonplaceholder.typicode.com/posts/50')

// // console.log(dataAPI)

// let dataAPI = getAPI
//     .then(res => { return res.json() })
//     .then(res => console.log(res))
//     .catch(res => console.log(res))

// console.log(dataAPI)

// const doFetch = (url) => fetch(url).then(res => res.json())

// let urls = [
//     'https://jsonplaceholder.typicode.com/posts/10',
//     'https://jsonplaceholder.typicode.com/posts/20',
//     'https://jsonplaceholder.typicode.com/posts/30',
//     'https://jsonplaceholder.typicode.com/posts/40'
// ]

// let promises = []

// urls.map((url) => {
//     promises.push(doFetch(url))
// })

// let datas = []

// Promise.all(promises).then(results => { return results })

// setTimeout(() => {
//     console.log("datas", datas)
// }, 1000)

// let tmp = doFetch(urls[0])
// let dataMain = []

// tmp.then(res => { dataMain.push(res) })

// console.log(dataMain)

// const endpoint = 'https://jsonplaceholder.typicode.com/users'
// let data = []

async function fetchApiWithAsyncAwait() {
    try {

        let response = await fetch(endpoint)
        response = await response.json()
        console.log(response)

    } catch (error) {
        console.log("error")
        console.log(error)
    }
}

// fetchApiWithAsyncAwait()

const firstPromise = () => (new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('first promise')
    }, 1000)
}))

const secondPromise = () => (new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('second promise')
    }, 1000)
}))

const thirdPromise = () => (new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('third promise')
    }, 1000)
}))

// async function asyncParalel() {
//     console.log('paralel --------')
//     let result1 = firstPromise().then(res => console.log(res))
//     let result2 = secondPromise().then(res => console.log(res))
//     let result3 = thirdPromise().then(res => console.log(res))
//     console.log('done')
// }

async function asyncSerial() {
    console.log('serial --------')
    let result1 = await firstPromise().then(res => console.log(res))
    let result2 = await secondPromise().then(res => console.log(res))
    let result3 = await thirdPromise().then(res => console.log(res))
    console.log('done')
}

// asyncParalel()
asyncSerial()