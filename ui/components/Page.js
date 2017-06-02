import React from 'react'

export const Page = (props) => {
    const { id, title } = props.page

    //console.log(props.onReloadPages)

	return(
		<tr>
            <th>{id}</th>
            <td>{title}</td>
            <td>
                 <button 
                    className='button'
                    onClick={() => props.onPageEdit(id)}>
                    Reload Pages
                </button>
            </td>
        </tr>
	);
};

export default Page