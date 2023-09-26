let biscuitCount = 0
let totalCps

//when click biscuit countUp()
document.getElementById("biscuit").onclick = function() {
    biscuitCount += 1
    updateCounter()
    console.log("click")
}

//updates counter
function updateCounter() {
    document.getElementById("biscuitCounter").innerHTML = biscuitCount + " biscuit"
}

function updateCps() {
    totalCps = slaveTotalCps + factoryTotalCps
    document.getElementById("totalCps").innerHTML = totalCps + " cps"
}

let slaveCount = 0
let slaveCost = 10
document.getElementById("slaveCostDisplay").innerHTML = "cost: " + slaveCost + " biscut"
let slaveCps = 1
let slaveTotalCps = 0

//when click buy slave buySlave()
document.getElementById("buySlaveButton").onclick = function() {
    buySlave()
    console.log(slaveCount)
}

function slaveIncrement() {
    biscuitCount += slaveCount * slaveCps
    updateCounter()
}

let slaveInterval

function slaveStats() {
    document.getElementById("slaveCountDisplay").innerHTML = "bought: " + slaveCount
    slaveTotalCps = slaveCps * slaveCount
    updateCps()
    document.getElementById("slaveTotalCpsDisplay").innerHTML = "total cps: " + slaveTotalCps
    slaveCost = Math.round(slaveCost *= 1.5)
    document.getElementById("slaveCostDisplay").innerHTML = "cost: " + slaveCost + " biscut"
}

function buySlave() {
    if (biscuitCount >= slaveCost) {
        slaveCount += 1
        biscuitCount -= slaveCost
        updateCounter()
        slaveStats()
        clearInterval(slaveInterval)
        slaveInterval = setInterval(slaveIncrement, 1000)
        console.log("bought slave")
    }
    else {
        console.log("not enough biscuit")
    }

    
}



let factoryCount = 0
let factoryCost = 100
document.getElementById("factoryCostDisplay").innerHTML = "cost: " + factoryCost + " biscut"
let factoryCps = 5
let factoryTotalCps = 0

//when click buy factory buyfactory()
document.getElementById("buyfactoryButton").onclick = function() {
    buyfactory()
    console.log(factoryCount)
}

function factoryIncrement() {
    biscuitCount += factoryCount * factoryCps
    updateCounter()
}

let factoryInterval

function factoryStats() {
    document.getElementById("factoryCountDisplay").innerHTML = "bought: " + factoryCount
    factoryTotalCps = factoryCps * factoryCount
    updateCps()
    document.getElementById("factoryTotalCpsDisplay").innerHTML = "total cps: " + factoryTotalCps
    factoryCost = Math.round(factoryCost *= 1.5)
    document.getElementById("factoryCostDisplay").innerHTML = "cost: " + factoryCost + " biscut"
}

function buyfactory() {
    if (biscuitCount >= factoryCost) {
        factoryCount += 1
        biscuitCount -= factoryCost
        updateCounter()
        factoryStats()
        clearInterval(factoryInterval)
        factoryInterval = setInterval(factoryIncrement, 1000)
        console.log("bought factory")
    }
    else {
        console.log("not enough biscuit")
    }
}