<h1 align="center">Preact Widget Template</h1>

<br />

Simple template used to set up a widget using Preact.

## General Background Information

We use a few different projects and libraries here to set up a dev environment for building your widget, the main ones being:

- [WMR](https://github.com/preactjs/wmr) - Super fast and easy server to build and test your widget

- [Microbundle](https://github.com/developit/microbundle) - Flexible and tiny production builds

- [Preact-Habitat](https://github.com/zouhir/preact-habitat) - Library for plugging in Preact components

## Usage Instructions

- `yarn dev` - Starts development server on port 3000

- `yarn build` - Builds your widget for production use to `dist/`

- `yarn serve` - Starts server to test the production build of your widget on port 3000

<br />

`src/widget-mount.js` defines how your component will mount to the page. You can of course change this to whatever you'd like, and see [preat-habitat's API docs](https://github.com/zouhir/preact-habitat#api-docs) to learn more about your options.

In `src/index.html` you'll see how to pass props to your component. The default setup has a color being passed that ends up in the style attribute of the widget, changing the text color.

On build, the `src/index.html` files is copied over to `dist/` with a few minor adjustments: The `<script>` is updated to point at a valid source and the (now external) CSS file is referenced. If you change the name of the package or output formats, `scripts/post-build-widget.js` is something you'll want to update before testing your built output.

## Notes

- This template disables externals with `--external none` in the build command. If you're loading this into a Preact app then this is not what you want to do. Remove this flag

- This template is set to only have Microbundle output its modern (ES2017) format. This may not be what you want to do, see [Microbundle#Output-Formats](https://github.com/developit/microbundle#-output-formats-) for more information on the subject

Give it a star if this was helpful, let me know if you have any questions/issues

## License

MIT © Ryan Christian
