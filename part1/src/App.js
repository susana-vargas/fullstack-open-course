
const Parrafo = (props) => {
  return (
      <p>{props.contenido}</p>
  )
}

const Title = (props) => {
  return (
    <>
      <h1>{props.titulo}</h1>
    </>
  )
}



const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'  
  const part2 = 'Using props to pass data'  
  const part3 = 'State of a component'  
  const name = 'susana'
  const name1 = 'aldo'
  const name2 = 'gloria'
  const content = 30
  const content1 = 'nieves'

  

  return (
    <>
      <Title titulo = {name} />
      <Title titulo = {name1} />
      <Title titulo = {name2} />
      <Parrafo contenido ={content} />
      <Parrafo contenido ={content1} />
      <Title titulo = {content1} />
      <Title test = {'prueva'} titulo = {'pinki'} />
      <p>soy el app</p>
    </>
  )
}

// {
//   titulo: 'susana',
//   dato: 'dato'
// }

export { App }