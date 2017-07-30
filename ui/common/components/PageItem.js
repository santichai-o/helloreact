import React from 'react';
import { Link } from 'react-router';

export const PageItem = ({page}) => {
	return(
        <tr>
            <th>{page.id}</th>
            <td>{page.title}</td>
            <td>
                 <Link to={{ pathname: '/page/' + page.id }} >View</Link>
            </td>
        </tr>
    )
}

export default PageItem
