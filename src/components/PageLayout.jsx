import '../App.css'
 
function PageLayout({HeadingTitle,MainContent,FooterContent })  {
    return(
        <>
        <div>
            <header>
                <h1>{HeadingTitle}</h1>    
            </header>    
            <main>
                <p>{MainContent}</p>
            </main>
            <footer>
                <p>{FooterContent}</p>
            </footer>
        </div>    
        </>
    )
}
export default PageLayout