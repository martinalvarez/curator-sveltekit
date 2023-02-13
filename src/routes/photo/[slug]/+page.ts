
import { URL_PHOTOS } from '$lib/constants/fakeAPI';

export async function load({ fetch, params }) {
    const { slug } = params;
    const response = await fetch(`${URL_POSTS}/${slug}`);
    const post = response.json();

    if (response.ok) {
        return {
            post,
        }
    }

    return {
        post: null,
        status: response.status,
        error: new Error('post not found'),
    }
}