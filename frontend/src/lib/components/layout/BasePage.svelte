<script lang="ts">
    const { children } = $props();
</script>

<style>
    .container {
        display: flex;
        height: 100svh;
    }

    .content {
        display: block;
        width: 100%;
        height: 100%;
    }
</style>

<div class="container">
    <div class="content">
        {@render children?.()}
    </div>
</div>
