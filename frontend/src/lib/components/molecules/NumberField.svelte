<script lang="ts">
    import InputTitle from "../atoms/InputTitle.svelte";
    import NumberInput from "../atoms/NumberInput.svelte";

    type Props = {
        readonly title: string;
        readonly min: number;
        readonly max: number;
        readonly value: number;
        readonly onChange: (value: number) => void;
    };

    const { title, min, max, value, onChange }: Props = $props();
</script>

<style>
    div {
        display: flex;
    }
</style>

<div>
    <InputTitle>{title}</InputTitle>
    <NumberInput
        {min}
        {max}
        {value}
        {onChange}
    />
</div>
