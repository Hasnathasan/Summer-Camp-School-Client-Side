const hi = [
    {
        name: "Hasnat",
        roll: 3
    },
    {
        name: "Hasan",
        roll: 2
    },
    {
        name: "Kabir",
        roll: 3
    },
    {
        name: "Naeem",
        roll: 2
    }
] 

const newArrays = []
for(let person of hi){
    const keys = Object.values(person);
    const newObj = {
        [keys[0]]: keys[1]
    }
    newArrays.push(newObj)
}

console.log(newArrays);
