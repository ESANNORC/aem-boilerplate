# Your Project's Title...
Your project's description...

## Environments
- Preview: https://main--{repo}--{owner}.aem.page/
- Live: https://main--{repo}--{owner}.aem.live/

## Documentation

Before using the aem-boilerplate, we recommand you to go through the documentation on https://www.aem.live/docs/ and more specifically:
1. [Developer Tutorial](https://www.aem.live/developer/tutorial)
2. [The Anatomy of a Project](https://www.aem.live/developer/anatomy-of-a-project)
3. [Web Performance](https://www.aem.live/developer/keeping-it-100)
4. [Markup, Sections, Blocks, and Auto Blocking](https://www.aem.live/developer/markup-sections-blocks)

## Installation

```sh
npm i
```

## Linting

```sh
npm run lint
```

## Local development

1. Create a new repository based on the `aem-boilerplate` template
1. Add the [AEM Code Sync GitHub App](https://github.com/apps/aem-code-sync) to the repository
1. Install the [AEM CLI](https://github.com/adobe/helix-cli): `npm install -g @adobe/aem-cli`
1. Start AEM Proxy: `aem up` (opens your browser at `http://localhost:3000`)
1. Open the `{repo}` directory in your favorite IDE and start coding :)

## DA Section Metadata

Use a Section Metadata block to preserve these optional presentation settings:

- `Style`: section classes such as `highlight` or `light`.
- `Heading Divider`: `true` inserts a horizontal rule after the section's first default-content H2. Omit it to leave the heading unchanged.
- `Button Style`: `plain` styles standalone links in default-content paragraphs as unfilled buttons. Links inside blocks are unaffected; bold and italic links retain their existing button styles.

Use `Heading Divider` instead of a horizontal rule in DA, where a horizontal rule creates a section break. Uploading content requires a separate Preview action to update `aem.page`; it does not publish to `aem.live`.
