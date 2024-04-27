# Wijit-Langcodes Web Component

A custom element for adding a datalist element which contains language codes for most languages.

Demo: [https://holmesbryant.github.io/wijit-langcodes/](https://holmesbryant.github.io/wijit-langcodes/)

## Changelog
- v1.0
	- Initial release

## Note

You only need to add this custom element once in your HTML even if you have multiple form inputs that use it. Simply add the `list="wijit-lang-list"` attribute to each input.

## Usage

### Add the Script

	<script type="module" src="wijit-langcodes.js"></script>

### Add the tag (anywhere in the html body)

	<wijit-langcodes></wijit-langcodes>

### Add an input

	<input name="lang" list="wijit-lang-list">

## Available Attributes

- **listid** (default: 'wijit-lang-list')
    - Acceptable values: Any string which is valid for an HTML element id.
    - If the default datalist id is not suitable, you can change it by adding this attribute

- **extended** (default: false)
    - Acceptable values ['', 'false', any truthy value]
	- Add this attribute to fetch extended language codes from a CDN [https://unpkg.com/language-subtag-registry@0.1.0/data/json/registry.json];
	- Note: This collection only has language names in english.

## Examples ##

Change the default id of the datalist

	<input list="foo">
	<wijit-langcodes listid="foo"></wijit-langcodes>

Use the extended language list from the CDN

	<input list="wijit-lang-list">
	<wijit-langcodes extended></wijit-langcodes>


