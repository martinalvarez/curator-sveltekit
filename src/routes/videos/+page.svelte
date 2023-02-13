<script>
    export let data;
    const { albums } = data;
</script>

{#each albums as album}
    <div>
        <p>{album.id}</p>
        <p>{album.title}</p>
    </div>
{/each}

<!--
<iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/uGqjyRQDukQ" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
</iframe>
-->