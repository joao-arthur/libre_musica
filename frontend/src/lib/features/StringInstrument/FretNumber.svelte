<script lang="ts">
    import { num } from "funis";
    import { instrumentTable } from "$lib/store";
    import { fretTemperedSize } from "$lib/core/fret";

    let numberOfFrets: number;
    let rangeOfFrets: readonly number[];

    instrumentTable.store.subscribe((value) => {
        numberOfFrets = value.numberOfFrets;
        rangeOfFrets = num.range(0, numberOfFrets);
    });
</script>
<div class="container">
    {#each rangeOfFrets.slice(1) as i}
        <div class="col" style={`width: ${fretTemperedSize(100 / rangeOfFrets.length, i) * 100}%`}>
            <span>{i}</span>
        </div>
    {/each}
</div>
<style>
    .container {
        display: flex;
        width: 100%;
    }

    .col {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 2.75rem;
    }
</style>
