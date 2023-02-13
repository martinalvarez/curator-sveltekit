import type { Post } from '$lib/types/post';
import { URL_POSTS } from '$lib/constants/fakeAPI';

interface LoadResponse {
    posts: Post[];
    status?: number;
    error?: Error;
}

export async function load({ fetch }): Promise<LoadResponse> {
    const response = await fetch(URL_POSTS);
    const posts = response.json();
    
    if (response.ok) {
        return {
            posts,
        };
    }

    return {
        error: new Error('Error loading posts.'),
        posts: [],
        status: response.status,
    };
}