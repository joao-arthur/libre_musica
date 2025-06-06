<script lang="ts">
    import OpenNote from "./OpenNote.svelte";
    import FretBoard from "./FretBoard.svelte";
    import FretNumber from "./FretNumber.svelte";
</script>

<div class="container">
    <OpenNote />
    <div class="content">
        <FretBoard />
        <FretNumber />
    </div>
</div>

<style>
    .container {
        width: 100%;
        display: flex;
        overflow: hidden;
    }

    .content {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
</style>
