const ItemListContainer = ({ greeting }) => {
  return (
    <>
    <article id='itemListArticle'>
        <div className="itemList__container">
            <h2 className='itemListTitle'>{ greeting }</h2>
            <p className='itemListDescrip'>Estamos en manenimiento</p>
            <img className='itemListImg' src="./src/assets/icon/Vector.png" alt="" />
        </div>
    </article>
    
    </>
  )
}

export default ItemListContainer