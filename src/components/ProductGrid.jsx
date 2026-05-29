import '../App.css'
const ProductCard1 = () =>{
    return(
        <div class="productCard1">
        <h3>Opis produktu 1</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis enim ab tempora?</p>
        </div>
          )
}

const ProductCard2 = () =>{
    return (
        <div class="productCard2">
        <h3>Opis produktu 2</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis enim ab tempora?</p>
        </div>
        )
}

const ProductCard3 = () =>{
    return(
        <div class="productCard3">
        <h3>Opis produktu 3</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis enim ab tempora?</p>
        </div>
        )
}

function Product(){
    return(
        <div class="product-grid">
            <ProductCard1/>
            <ProductCard2/>
            <ProductCard3/>
        </div>
    )
}

export default Product