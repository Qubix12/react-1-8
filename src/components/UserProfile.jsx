import { renderToStaticMarkup } from "react-dom/server"

function UserProfile({name,email,bio,website,isPremium=false,followerCount})
{
   function isUserPremium()
   {
    
    if(isPremium == false)
    {
        return <>
        <p>To kotno nie jest premium</p>
        </>
    }
    else{
        return <>
        <p>To kotno jest premium</p>
        </>
    }
   }

    return (
        <>
        {isUserPremium()}
        <p>Witaj jestem {name}</p>
        <p>Skontaktuj sie ze mną pod: {email}</p>
        {followerCount >= 999 ? <p>999+ obserwujących</p> : <p>{followerCount} obserwujących</p>}
        {bio && (<p>Moje bio: {bio}</p>)}
        {website && (<p>Sprawdź moją stronę internetową : {website}</p>)}
        </>
    )
}
export default UserProfile