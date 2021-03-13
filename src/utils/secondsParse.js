const makeTwoSymbol = number =>
  number > 9 ? number : `0${number}`

const secondsParse = seconds =>
  `${makeTwoSymbol(Math.floor(seconds / 60))}:${makeTwoSymbol(Math.floor(seconds % 60))}`


export default secondsParse