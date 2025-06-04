<script lang="ts">
    type Props = {
        readonly min: number;
        readonly max: number;
        readonly value: number;
        readonly onChange: (newValue: number) => void;
    };

    const {
        min,
        max,
        value,
        onChange,
    }: Props = $props();

    function handleOnChange(value: string) {
        if (!value) return;
        const newValue = Number(value);
        if (newValue > max || newValue < min) {
            return;
        }
        onChange(newValue);
    }
</script>

<style>
    input {
        height: 30px;
        padding-top: 0;
        padding-bottom: 0;
        margin: 0;
    }
</style>

<input
    type="number"
    oninput={(e) => handleOnChange(e.currentTarget.value)}
    {min}
    {max}
    {value}
/>
