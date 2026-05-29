function ProductImage({src,alt})
{

    return(
        <>
        <img src={src} alt={alt} width={300} height={200} style={{objectFit:'fill'}} ></img>
        </>
    )
}
export default ProductImage