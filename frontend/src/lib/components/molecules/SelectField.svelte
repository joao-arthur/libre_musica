<script lang="ts" generics="Op extends string | number">
    import type { Option } from "$lib/core/options";
    import InputTitle from "../atoms/InputTitle.svelte";
    import SelectInput from "../atoms/SelectInput.svelte";

    type Props = {
        readonly title: string;
        readonly name: string;
        readonly options: readonly Option<Op>[];
        readonly value: Op;
        readonly onChange: (newValue: Op) => void;
    };

    const { title, name, options, value, onChange }: Props = $props();
</script>

<style>
    div {
        display: flex;
    }
</style>

<div>
    <InputTitle>{title}</InputTitle>
    <SelectInput
        {name}
        {options}
        {value}
        {onChange}
    />
</div>
