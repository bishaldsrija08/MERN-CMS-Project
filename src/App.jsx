import './App.css' //es6(ecma script)

function App() {
  const myCSS ={
    color: "white"
  }
  const name = "Bishal Rijal"
  return (
    <>
<h1 style={myCSS}>{name}: {11+23}</h1>
    </>
  )
}

export default App