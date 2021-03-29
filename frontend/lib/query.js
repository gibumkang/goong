import { useQuery } from '@apollo/client';

const Query = ({ children, query, id }) => {
	const { data, loading, error } = useQuery(query, {
		variables: { id: id },
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Oh no! Error: {JSON.stringify(error)}</p>;
	return children({ data });
};

export default Query;
