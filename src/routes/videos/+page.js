export async function load({ fetch }) {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    const albums = response.json();

    if (response.ok) {
        return {
            albums,
        };
    }

    return {
        error: new Error('videos not found'),
        status: response.status,
    };
}