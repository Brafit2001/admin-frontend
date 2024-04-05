import SearchButton from "./buttons/SearchButton";
import AddButton from "./buttons/AddButton";


const PageHeader = ({title, createPath, setQuery, query, users}) => {
    return (
        <div className="title-actions">
            <h1>{title}</h1>
            <div className="actions">
                <SearchButton setQuery={setQuery} query={query}/>
                <AddButton path={createPath}/>
            </div>

        </div>
    )

}

export default PageHeader;