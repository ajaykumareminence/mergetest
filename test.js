import myJson from './data.json' assert {type: 'json'};

const remove = ["supplierName", "noOfAdults", "noOfChilds"]
const keys = Object.keys(myJson).map(v => {
    if (!remove.includes(v)) {
        return v
    }
})
const fil = keys.filter((item)=>item!=undefined);
console.log(fil)
console.log("gill")
