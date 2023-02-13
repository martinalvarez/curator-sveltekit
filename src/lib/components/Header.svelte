<script lang="ts">
    interface Menu {
        label: string;
        url: string;
    }
    const menues: Menu[] = [
        { label: 'Home', url: '/' },
        { label: 'About', url: '/about' },
        { label: 'Posts', url: '/posts' },
        { label: 'Photos', url: '/photos' },
        // { label: 'Articles', url: '/articles' },
        // { label: 'Videos', url: '/videos' },
    ];
</script>

<style>
    header {
        background-color: white;
        height: 1.5rem;
        left: 0;        
        padding: 1rem;
        position: sticky;        
        top: 0;        

        display: flex;
    }

    header > a {
        margin: 1rem;
    }
</style>

<header>
    {#each menues as menu}
        <a href="{menu.url}">{menu.label}</a>
    {/each}
</header>