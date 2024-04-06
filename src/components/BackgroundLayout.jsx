import { useEffect, useState } from 'react';
import { useStateContext } from '../context';
import Clear from '../assets/images/Clear.jpg';
import Cloudy from '../assets/images/Cloudy.jpg';
import Fog from '../assets/images/fog.png';
import Rainy from '../assets/images/Rainy.jpg';
import Snow from '../assets/images/snow.jpg';
import Stormy from '../assets/images/Stormy.jpg';
import Sunny from '../assets/images/Sunny.jpg';

const BackgroundLayout = () => {
  const { weather } = useStateContext;
  console.log(weather);

  const [image, setImage] = useState(Clear);

  useEffect(() => {
    if(weather.conditions) {

      let imageString = weather.conditions
    }
  }, []);
  return <div>BackgroundLayout</div>;
};

export default BackgroundLayout;
