import { useState } from "react";
import { useActions } from "../../hooks/actions";
import { useAppSelector } from "../../hooks/redux";
import { IRepo } from "../../models/models";

export function RepoCart({repo}: {repo: IRepo}){

    const {addFav, removeFav} = useActions()
    const {favourites} = useAppSelector(state => state.git);

    const [isFav, setIsFav] = useState(favourites.includes(repo.html_url))
    function addFavourite(event: any ){
    event.preventDefault()

    addFav(repo.html_url)
    setIsFav(true)

    }
    function removeFavor(event: any ){
        event.preventDefault()
    
        removeFav(repo.id)
        setIsFav(false)

    
        }
    return <div className="border py-4 px-5 rounded mb-2 hover:shadow-md hover:bg-grey-100 transition-all">
       <a href={repo.html_url} target="_blank">
       <h2 className="text-lg font-bold">{repo.login}</h2>
        <p className="text-sm" >
           {repo.url}
        </p>
        <img src={repo?.avatar_url} alt="аватар" />

       { !isFav &&  <button
        onClick={addFavourite}
        className="py-2 px-4 mr-2 bg-yellow-400 rounded hover: shadow-md transition-all" > 
        Add
        </button>}

       { isFav &&  <button
        onClick={removeFavor}
        className="py-2 px-4 bg-red-400 rounded hover: shadow-md transition-all" > 
        Remove
        </button> }
       </a>
    </div>
}