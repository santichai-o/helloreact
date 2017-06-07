import React from 'react'

export const Page = ({ page, onPageEdit }) => {

	return(
		<tr>
            <th>{page.id}</th>
            <td>{page.title}</td>
            <td>
                 <button 
                    className='button'
                    onClick={() => onPageEdit(page.id)}>
                    Reload Pages
                </button>
            </td>
        </tr>
	);
};

export default Page