import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  const {data: images, loading} = useFetchGifs(category);
  console.log(images);
  console.log(loading);
  // const [count, setCount] = useState(0);
  // const [images, setImages] = useState([]);

  // useEffect(() => {
  //   getGifs(category)
  //     .then(setImages);
  //     //.then(imgs => setImages(imgs));      
  // }, [category]);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      { loading && <p className="animate__animated animate__flash">Loading</p> }

      <div className="card-grid">        
        {
          images.map((img) => {
            //return <li key={id}>{ title }</li>
            //return <GifGridItem key={image.id} img = {image} />
            return <GifGridItem key={img.id} {...img} />
          })
        }      
        {/* <h3>{ count }</h3>
        <button onClick={ () => setCount(count + 1) }>Contador</button> */}
      </div>
    </>
  )
}
