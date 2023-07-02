import { useEffect, useState } from "react";
import { getGifs } from "../helpers/peticion";


export const useFetchGifs = (listado) => {
  
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const obtenerImagenes = async() => {
    const nuevaImagenes = await getGifs(listado);
    setImages(nuevaImagenes);
    setIsLoading(false)
  }

  useEffect(() => {
    obtenerImagenes();
  }, [])

    return {
        images,
        isLoading,
    }
}
