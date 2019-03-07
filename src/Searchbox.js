import React from 'react';

const Searchbox = ({searchfield, searchChange}) => {
	return(
		<div className='pa2' >
			<input 
				className= 'pa3 ba b--yellow bg-lightest-yellow'
				type="search" 
				placeholder="Search Bots"
				onChange = {searchChange}
			/>
		</div>

	);
}

export default Searchbox;