export const shuffleObj = (data) =>{
    return data.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value)
}