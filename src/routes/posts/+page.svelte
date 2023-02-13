<script lang="ts">
    import type { Post } from '$lib/types/post';
    import { goto } from '$app/navigation';

    export let data: Array<Post>;
    const { posts } = data;

    function handleClick(id: number) {
        goto(`/post/${id}`);
    }
</script>

<style>
    .container {
        display: flex;
        flex-wrap: wrap;
    }

    .post {
        border: 1px solid black;
        border-radius: 1rem;
        cursor: pointer;              
        margin: 1rem;
        max-width: 20vw;
        padding: 1rem;  
    }
</style>

<h2>Posts</h2>

<div class="container">
    {#each posts as post}
        <div class="post" on:click={() => { handleClick(post.id); }}>
            <h3>{post.title}</h3>

            <p>{post.body}</p>
        </div>
    {/each}
</div>
