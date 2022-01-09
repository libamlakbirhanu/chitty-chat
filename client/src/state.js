import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export default function AppWrapper({ children }) {
	const [createType, setCreateType] = useState('');
	const [isCreating, setIsCreating] = useState(false);
	const [isEditing, setIsEditing] = useState(false);

	let sharedState = {
		createType,
		isCreating,
		isEditing,
		setCreateType,
		setIsCreating,
		setIsEditing,
	};

	return (
		<AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
	);
}

export function useAppContext() {
	return useContext(AppContext);
}
