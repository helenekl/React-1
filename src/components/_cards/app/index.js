import './App.css';
import Card from '../card';
import Camera from '../img/camera.jpeg';
import Sea from '../img/sea.jpeg';
import image3 from '../imgs/tobias-tullius-RhjVGxILcqE-unsplash.jpg';
import Header from '../header';

function App () {
  const cards = [
    {
      id: 'card-1',
      imageSrc: Camera,
      backgroundColor: '#1a2a1a',
      likesCount: 56,
    },
    {
      id: 'card-2',
      imageSrc: Sea,
      backgroundColor: '#FD452B', likesCount: 21
    },
    {
      id: 'card-3',
      imageSrc: image3,
      backgroundColor: '#BC5967', likesCount: 221
    },
    {
      id: 'card-4',
      imageSrc: image3,
      backgroundColor: '#BC5967', likesCount: 47
    },
  ];

  const description = "Pariatur ex eu irure tempor aliqua reprehenderit.";
  return (
    <div className="App">
      <Header />
      <span>Hello world</span><br />
      {description}
      {56 + 78}
      <div className="cards-container">
        {
          cards
            .map(card =>
              <Card
                id={card.id}
                imageSrc={card.imageSrc}
                backgroundColor={card.backgroundColor}
                likes={card.likesCount}
              />
            )
        }
      </div>
    </div>
  );
}

export default App;
