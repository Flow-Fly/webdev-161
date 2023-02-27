import './index.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Card from './components/Card/Card'
import Container from './components/Container/Container'
import ReactPlayer from 'react-player'
function App() {
  const someDucks = [
    {
      name: 'Lala',
      image:
        'https://res.cloudinary.com/dfo6ncbmb/image/upload/v1658572762/pfqpws9oax81lqqq7kfy.jpg',
    },
    {
      name: 'Lalo',
      image:
        'https://res.cloudinary.com/dfo6ncbmb/image/upload/v1658572856/zqaxdubmpwjwatzgrrwg.jpg',
    },
    {
      name: 'Lola',
      image:
        'https://res.cloudinary.com/dfo6ncbmb/image/upload/v1658572855/lgq7nv1irachtdcumbkk.jpg',
    },
    {
      name: 'Laol',
      image:
        'https://res.cloudinary.com/dfo6ncbmb/image/upload/v1658572855/lgq7nv1irachtdcumbkk.jpg',
    },
    {
      name: 'Loal',
      image:
        'https://res.cloudinary.com/dfo6ncbmb/image/upload/v1658572762/ipgsaf2wj42fpvaa5r5j.jpg',
    },
    {
      name: 'Allo',
      image:
        'https://res.cloudinary.com/dfo6ncbmb/image/upload/v1658571651/zvqjgdesffw0njhckf0k.jpg',
    },
  ]
  return (
    <>
      <Navbar hello="world">gbfhjkbgekbgk</Navbar>
      <main>
        <Container gap="4rem" background="hsla(0, 50%, 75%, 1)">
          {someDucks.map((duckling) => {
            return <Card name={duckling.name} picture={duckling.image} />
          })}
        </Container>
      </main>
      <ReactPlayer playing={true} url={'https://vimeo.com/375468729'} />
      <Footer />
      {/* <Container gap="1rem" background="blue">
        <Card name={someDucks[0].name} picture={someDucks[0].image} />
        <Card name={someDucks[1].name} picture={someDucks[1].image} />
        <Card name={someDucks[2].name} picture={someDucks[2].image} />
      </Container> */}
      {/* <p>Hello</p>
      <div className="container">
        <Card />
        <Card />
      </div> */}
    </>
  )
}

// function Card() {
//   return (
//     <div className="Card">
//       <p>This is before the ChildOfCard</p>
//       <ChildOfCard text="Display something" />
//     </div>
//   )
// }

// function ChildOfCard(props) {
//   return (
//     <>
//       <h2>This is the child card</h2>
//       <p>{props.text}</p>
//     </>
//   )
// }

export default App
