<script>
    import Footer from '$lib/components/Footer.svelte';
    import Header from '$lib/components/Header.svelte';
</script>

<Header />

<div class="main">
    <slot></slot>
</div>

<Footer />

<style>
    .main {
        min-height: 90vh;
    }
</style>
