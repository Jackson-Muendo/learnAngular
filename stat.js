const url = 'https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e09052b207msh3795dfb8ebd2ae1p1474ccjsn4e94e577ea3d',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}