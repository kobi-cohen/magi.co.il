const list = []


const namesList = ['dani','eli','shimi','eviatar','roe']

for (let i=0;i<5;i++){
    list.push({name:namesList[i],randomNumber : Math.floor(Math.random()*100)+1})
}



console.log(list)
console.log(list.find(element=>element.name=='el'))