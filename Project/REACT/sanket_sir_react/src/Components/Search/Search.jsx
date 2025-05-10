// function Search(){
//     return(
//         <>
//         <input className="bg-gray-"
//         type="text"
//         placeholder="Pokedex name"
//          />
//         </>
//     )

// }

// export default Search;






function Search() {
    return (
        <div className="flex justify-center items-center py-10 px-4 sm:px-6 lg:px-8 bg-gray-100">
            <input
                type="text"
                placeholder="Search Pokémon..."
                className="w-full max-w-md px-5 py-3 text-base text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500 transition-all duration-200"
            />
        </div>
        
    );
}

export default Search;
