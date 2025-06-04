<script lang="ts">
    import StringSettings from "./Tuning/StringSettings.svelte";
    import StringsInstrument from "./Tuning/StringInstrument.svelte";
</script>

<style>
    div {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }
</style>

<div>
    <StringsInstrument />
    <StringSettings />
</div>
