import React from 'react'

const Search = ({searchCategory, setSearchCategory ,searchTitle, setSearchTitle }) => {
    return (
        <div className="d-flex">
            <div>
            <input
                name='search'
                value={searchCategory}
                className="form-control me-sm-2"
                type="text" placeholder="Ara"
                onChange={(e) => setSearchCategory(e.target.value)}
            />
            </div>
            <div>
            <input
                name='search'
                value={searchTitle}
                className="form-control me-sm-2"
                type="text" placeholder="Ara"
                onChange={(e) => setSearchTitle(e.target.value)}
            />
            </div>
            <button className="btn btn-dark sm-0 mx-2" type="submit">Ara</button>
        </div>
    )
}

export default Search