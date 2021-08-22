import './App.css';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './data/ImageData';

function App() {
  return (
    <ImageSlider slides={ SliderData }/>
  );
}

export default App;
