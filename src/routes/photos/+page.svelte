<script lang="ts">
    // import type { Post } from '$lib/types/post';
    import { goto } from '$app/navigation';

    export let data;
    const { photos } = data;

    function handleClick(id: number) {
        goto(`/photo/${id}`);
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

<h2>Photos</h2>

<div class="container">
    {#each photos as photo}
        <div class="post" on:click={() => { handleClick(photo.id); }}>
            <h2>{photo.title}</h2>

            <img src="{photo.thumbnailUrl}" alt="{photo.url}" />
        </div>
    {/each}
</div>