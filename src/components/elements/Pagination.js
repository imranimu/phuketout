import React, {Component} from 'react'; 

import { Link } from "react-router-dom";

class Pagination extends Component { 

    PaginationPage(CurrentPage, TotalPage){

        let pageNumber = []

        for (let i = 1; i <= TotalPage; i++) {            

            pageNumber.push(<li key={i} className={ CurrentPage === i ? 'active' : ''} >                
            {                    
                // <Link to="#" onClick={() => this.PaginationControll('https://service.phuketout.com/api/v1/auth/partners?page='+i)} >{i}</Link>
                <Link to="#" >{i}</Link>
            }            
            </li>)

        }
        return pageNumber 
    }
    
    render(){
        return(
            <div>
                
                {this.PaginationPage(this.props.CurrentPage, this.props.PagNum)}

                <ul className="pagination m-b-n m-t-n">
                    <li className="paginate_button previous disabled">
                        
                    </li>
                    <li className="paginate_button active">
                        
                    </li>
                    <li className="paginate_button ">
                        
                    </li>                                         
                    <li className="paginate_button next" id="editable_next">
                        
                    </li>
                </ul>
            </div>    
        )
    }
} 

export default Pagination;