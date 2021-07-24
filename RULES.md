# In short, when using a Shared Module:

- DO declare components, pipes, directives, and export them.
- DO import FormsModule, ReactiveFormsModule and other (3rd-party) modules you need.
- DO import the SharedModule into any other Feature Modules.
- DO NOT provide app-wide singleton services in your SharedModule. Instead move these to the CoreModule.
- DO NOT import the SharedModule into the AppModule.

# In short, when using a Core Module:

- DO import modules that should be instantiated once in your app.
- DO place services in the module, but do not provide them.
- DO NOT declare components, pipes, directives.
- DO NOT import the CoreModule into any modules other than the AppModule.

# Короткие пути в tsconfig.json

```js
"paths": {
"@app/_": ["src/app/_"],
"@modules/_": ["src/app/modules/_"],
"@env/_": ["src/environments/_"],
"@shared/_": ["src/modules/shared/_"],
"@core/_": ["src/core/_"]
}
```

## Code Structure

```js
└── Project Name
 ├──src
```

# Короткий путь для переменых scss

- разбиение страниц на модули
- использовать onPush стратегию

# e2e
