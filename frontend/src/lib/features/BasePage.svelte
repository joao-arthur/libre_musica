<script lang="ts">
    const { children } = $props();
</script>

<div>
    <div>
        {@render children?.()}
    </div>
</div>
