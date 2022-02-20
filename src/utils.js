const sortAscId = (a, b) => parseInt(b.id) - parseInt(a.id)
const sortDescId = (a, b) => parseInt(a.id) - parseInt(b.id) 

export {
  sortAscId,
  sortDescId
}