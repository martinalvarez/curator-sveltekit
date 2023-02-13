import type { Post } from '$lib/types/post';
import { URL_POSTS } from '$lib/constants/fakeAPI';
// import type { PageLoad } from '$types/PageLoad';
// import type { PageLoad } from './$types';

interface LoadResponse {
    posts: Post[];
    status?: number;
    error?: Error;
}

export async function load({ fetch }): Promise<LoadResponse> {
    const response = await fetch(URL_POSTS);
    console.log(response);
    const posts = response.json();
    
    if (response.ok) {
        return {
            posts,
        };
    }

    return {
        error: new Error('Error loading posts'),
        posts: [],
        status: response.status,
    };
}

/*
export async function load({ fetch }){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = response.json();

    if (response.ok) {
        return {
            posts,
        };
    }

    return {
        status: response.status,
        error: new Error('Error loading posts'),
    };
}
*/