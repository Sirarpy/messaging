import {useState, useEffect} from 'react'
import data from './../data.json'
import SearchItem from './SearchItem/SearchItem'
import './searching.css'
import searchVector from './../../../../images/SearchVector.png'

function Searching() {
    const [searchTerm, setSearchTerm] = useState('')
    const [innerHeight, setInnerHeight] = useState('50vh')

    useEffect(()=>{
        window.addEventListener('resize', (event) => {
            setInnerHeight(()=>((900 / 1400) * 100)+'vh' )
        });

    }, [])
    return (
        <div className='searchArea'>
            <div className="usersList">
                <div className='searchRow'>
                    <img  src={searchVector} alt="searchIcon"/>
                    <input className='search' type="text" placeholder='Search...' onChange={event => {
                        setSearchTerm(event.target.value)
                    }}/>
                </div>

                <div className="showSearchResult" style={{height:innerHeight}} >
                    {data.filter((val) => {
                        if (searchTerm === '') {
                            return val
                        } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                        return '' // cool back needed returned value
                    }).map((item) => {
                        return <SearchItem item={item} key={item.id}/>
                    })
                    }
                </div>

            </div>
        </div>
    )
}

export default Searching;