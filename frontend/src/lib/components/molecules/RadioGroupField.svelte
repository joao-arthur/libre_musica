<script lang="ts" generics="Op extends string | number">
    import type { Option } from "$lib/core/options";

    import InputTitle from "../atoms/InputTitle.svelte";
    import RadioGroupInput from "../atoms/RadioGroupInput.svelte";

    type Props = {
        readonly title: string;
        readonly name: string;
        readonly options: readonly Option<Op>[];
        readonly value: Op;
        readonly onChange: (newValue: Op) => void;
        readonly size: "sm" | "md" | "lg";
    };

    const { title, name, options, value, onChange,size }: Props = $props();
</script>

<style>
    div {
        display: flex;
        align-items: center;
    }
</style>

<div>
    <InputTitle>{title}</InputTitle>
    <RadioGroupInput
        {name}
        {options}
        {value}
        {onChange}
        {size}
    />
</div>
