+++
[[properties.Box]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "dark", "light", "alert", "affirmative", "negative"]
+++

# Box

`Box` is a surface primitive for encapsulating section content in a block of color.

```svelte repl Box Preview
<script>
    import {Box} from "@kahi-ui/framework";
</script>

<Box>This is a Box!</Box>
```

## Imports

```html default Box Imports
<script>
    import {Box} from "@kahi-ui/framework";
</script>
```

## Palette

You can change the color palette of the `Box` via the `palette` property.

```svelte repl Box Palette
<script>
    import {
        Box,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <Box>
        This is a
        <Text is="strong">DEFAULT</Text> Box!
    </Box>

    <Box palette="accent">
        This is a
        <Text is="strong">ACCENT</Text> Box!
    </Box>

    <Box palette="dark">
        This is a
        <Text is="strong">DARK</Text> Box!
    </Box>

    <Box palette="light">
        This is a
        <Text is="strong">LIGHT</Text> Box!
    </Box>

    <Box palette="alert">
        This is a
        <Text is="strong">ALERT</Text> Box!
    </Box>

    <Box palette="affirmative">
        This is a
        <Text is="strong">AFFIRMATIVE</Text> Box!
    </Box>

    <Box palette="negative">
        This is a
        <Text is="strong">NEGATIVE</Text> Box!
    </Box>
</Stack>
```
