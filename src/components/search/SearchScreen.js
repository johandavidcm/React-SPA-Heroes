import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import queryString from 'query-string';
import { getHeroesByName } from '../selector/getHeroesByName';

export const SearchScreen = ({ history }) => {


    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
    
    const [values, handleInputChange] = useForm({
        searchText: q
    });
    
    const { searchText } = values;
    
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`)
    }

    const heroesFiltered = useMemo(() => getHeroesByName( q ), [q]);

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            value={searchText}
                            onChange={handleInputChange}
                            autoComplete="off"
                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                    </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results:</h4>
                    <h3 />
                    {
                        heroesFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
