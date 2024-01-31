import { useEffect, useState } from "react";
import { useLazySearchUserQuery, useSearchUserQuery } from "../../store/github/github.api"
import { useDebounce } from "../../hooks/debounce";
import { RepoCart } from "../../components/repoCart/indrex";

export function HomePage(){
    const [search, setSearch] = useState<string>("")
    const [dropdown , setDropdown] = useState<boolean>(false)

    const debounced = useDebounce(search);

    const {data, isError, isLoading} = useSearchUserQuery(debounced, {
        skip: debounced.length < 2,
        refetchOnFocus: true
    });

    const [ fetchRepos, {isLoading: reposIsLoaing, data: repos} ] = useLazySearchUserQuery()

    useEffect(() => {
      setDropdown(debounced.length > 2 && data?.length! > 0)
     }, [debounced, data])

     function clickHandler (userName:string){
        fetchRepos(userName)
        setDropdown(false)
     }
    
    return <div className="flex justify-center pt-10 mx-auto h-screen w-screen" >
        { isError && <p className="text-center text-red-600" >Произошла ошибка...</p> }

        <div className="relative w-[560px]">
            <input type="text"
             className="border py-2 px-4 w-full h-[42px] mb-2" 
             value={search}
             onChange={(e) => setSearch(e.target.value)}
             />
           { dropdown &&  <ul className="list-none absolute top-[42px] shadow-md overflow-y-scroll left-0 right-0 max-h-[200px] bg-white" >
                { isLoading && <p>Загрузка...</p> }
                { data?.map(({id, login,}) => (
                    <li 
                        key={id} 
                        onClick={() => clickHandler(login)}
                        className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer" 
                        >
                            {login}
                        </li>
                ) ) }
            </ul> }
            <div className="container">
            {reposIsLoaing && <p className="text-center" >репозиторий загружается</p> }
            {repos?.map(repo => <RepoCart key={repo.id} repo={repo}/> )}
        </div>
        </div>
       
    </div>
}