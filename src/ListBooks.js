import React from 'react'
import {Link} from 'react-router-dom'
import Shelf from './components/Shelf'

class ListBooks extends React.Component {


     render () {
          return (
               <div className="list-books">
               <div className="list-books-title">
                 <h1>MyReads</h1>
               </div>
               <div className="list-books-content">
                 <div>
                    <Shelf />
                 </div>
               </div>
               <div className="open-search">
                 <Link
                   to="/search">
                 </Link>
               </div>
             </div>
          )
     }
}

export default ListBooks