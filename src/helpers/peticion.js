export const getGifs = async(listado) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=QQ3gNNL0iL4hyyzrph7FHPCjK97yVcKY&q=${listado}&limit=20`
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();

    const gifs = data.map( img => (
      {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      }
    ))
    console.log(gifs)
    return gifs;
  }