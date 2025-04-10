const numbers = [
  -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
];

document.body.innerHTML += `<p>Čísla:</p>`
  const all = numbers.forEach((number)=>{
    document.body.innerHTML += `${number}, `
  })

document.body.innerHTML += `<p>Čísla na druhou:</p>`
  const power = numbers.map((number)=> Math.pow(number, 2))
  document.body.innerHTML += `<p>${power.join(', ')}</p>`

document.body.innerHTML += `<p>Záporná čísla:</p>`
  const negat = numbers.forEach((number)=>{
    if (number < 0){
      document.body.innerHTML += `${number}, `
    }
  })

document.body.innerHTML += `<p>Absolutní hodnota všech čísel:</p>`
  const abs = numbers.map((number) => {return Math.abs(number)} )
  document.body.innerHTML += `<p>${abs.join(', ')}</p>`

document.body.innerHTML += `<p>Sudá čísla:</p>`
  const even = numbers.forEach((number)=> {
    if (number%2===0) {
      document.body.innerHTML += `${number}, `
      }
    })

document.body.innerHTML += `<p>Čísla dělitelná třemi:</p>`
  const divByThree = numbers.forEach((number)=> {
    if (number%3===0) {
       document.body.innerHTML += `${number}, `
      }
    }) 

document.body.innerHTML += `<p>Vzdálenost od čísla 5:</p>`
  const distanceFromFive = numbers.map((number) => {return number<0 ? (number-5)*(-1) : (number-5)})
  document.body.innerHTML += `<p>${distanceFromFive.join(', ')}</p>`

document.body.innerHTML += `<p>Druhé mocniny vzdáleností od čísla 5:</p>`
  const distanceFromFivePower = distanceFromFive.map ((dist) =>   Math.pow(dist, 2))
  document.body.innerHTML += `<p>${distanceFromFivePower.join(', ')}</p>`

document.body.innerHTML += `<p>Počet záporných čísel:</p>`
  const numNegat = numbers.filter((number)=> number <0)
  document.body.innerHTML += numNegat.join(', ')

document.body.innerHTML += `<p>Součet všech čísel:</p>`
  let sum = 0
  for (let i = 0; i< numbers.length; i += 1){
  sum += numbers[i]
  }
  document.body.innerHTML += sum

document.body.innerHTML += `<p>Průměr všech čísel v poli</p>`
  const aver = sum / numbers.length
  document.body.innerHTML += aver

document.body.innerHTML += `<p>Součet všech kladných čísel</p>`
  const pozit = numbers.filter ((number) => number > 0)
  let sumPoz = 0
  for (let i = 0; i< pozit.length; i += 1){
    sumPoz += pozit[i]
  }
  document.body.innerHTML += sumPoz



