const sortDescId = (a, b) => parseInt(b.id) - parseInt(a.id)
const sortAscId = (a, b) => parseInt(a.id) - parseInt(b.id) 

export {
  sortAscId,
  sortDescId
}