<script lang="ts">
    import type { Option } from "$lib/core/options";
    import InputTitle from "../atoms/InputTitle.svelte";

    type Props = {
        readonly title: string;
        readonly name: string;
        readonly options: readonly Option<string>[];
        readonly value: string;
        readonly onChange: (newValue: string) => void;
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
