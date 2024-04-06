import { useState } from 'react';
import icons from './assets/icons.svg';

function App() {
  const [input, setInput] = useState('');

  // const keyUp = (event) => {
  //   if (event.key === 'Enter') {
  //     console.log('enter');
  //   }
  // };
  return (
    <div>
      <div className="w-full h-screen text-white px-8">
        <nav className="w-full p-3 flex justify-between items-center">
          <h1 className="font-bold tracking-wide text-3xl">Weather App</h1>
          <div className="bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2">
            <img src={icons} alt="search" className="w-[1.5rem] h-[1.5rem]" />
            {/* <svg className="w-[]>
              <use href={`${icons}#icon-search`} />
            </svg> */}
            <input
              // onKeyUp={keyUp()}
              type="text"
              className="focus:outline-none w-full text-[#212121] text-lg"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;
