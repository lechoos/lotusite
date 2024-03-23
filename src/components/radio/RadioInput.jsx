export const RadioInput = ({ name, id, state, setState, children }) => {
	return (
		<>
			<input type='checkbox'  name={name} id={id} value={id} onChange={setState} />
		</>
	);
};
