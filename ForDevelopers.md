## Editor Configuration Recommendations

For a smooth development experience with this library, consider using the following VS Code settings:
For convenience, you can create a separate settings profile in VSCode

```json
{
	"cssvar.files": ["**/*.css", "**/*.pcss"], // For global css/pcss variables
	"cssVariables.lookupFiles": [
		"**/*.css",
		"**/*.scss",
		"**/*.sass",
		"**/*.less",
		"node_modules/@concero/ui-kit/dist/styles/lanca/index.css"
	]
}
```

Recommended extensions:

- [CSS Variable Autocomplete](https://marketplace.visualstudio.com/items/?itemName=vunguyentuan.vscode-css-variables) !!!
