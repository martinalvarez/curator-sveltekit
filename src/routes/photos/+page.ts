import { URL_PHOTOS } from '$lib/constants/fakeAPI';

export async function load({ fetch }) {
    const response = await fetch(URL_PHOTOS);
    const photos = response.json();
    
    if (response.ok) {
        return {
            photos,
        };
    }

    return {
        error: new Error('Error loading photos'),
        photos: [],
        status: response.status,
    };
}