import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';


const Footer = () => (
    <div className="filters">
         
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>
          <i className="fa fa-list-ul"></i>
            </FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
           <i className="fa fa-times"></i>
            </FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
         <i className="fa fa-check"></i>
            </FilterLink>
        </div>
)

export default Footer;