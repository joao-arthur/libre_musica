<script lang="ts">
    const { children } = $props();
</script>

<style>
    h3 {
        font-size: 18px;
    }
</style>

<h3>
    {@render children?.()}
</h3>
