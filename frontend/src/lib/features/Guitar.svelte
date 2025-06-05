<script lang="ts">
    import Settings from "./StringInstrument/Settings.svelte";
    import Instrument from "./StringInstrument/Instrument.svelte";
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
    <Settings />
    <Instrument />
</div>
