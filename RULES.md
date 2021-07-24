### In short, when using a Shared Module:

- DO declare components, pipes, directives, and export them.
- DO import FormsModule, ReactiveFormsModule and other (3rd-party) modules you need.
- DO import the SharedModule into any other Feature Modules.
- DO NOT provide app-wide singleton services in your SharedModule. Instead move these to the CoreModule.
- DO NOT import the SharedModule into the AppModule.

### In short, when using a Core Module:

- DO import modules that should be instantiated once in your app.
- DO place services in the module, but do not provide them.
- DO NOT declare components, pipes, directives.
- DO NOT import the CoreModule into any modules other than the AppModule.

### SHort paths in tsconfig.json

```js
"paths": {
"@app/_": ["src/app/_"],
"@modules/_": ["src/app/modules/_"],
"@env/_": ["src/environments/_"],
"@shared/_": ["src/modules/shared/_"],
"@core/_": ["src/core/_"]
}
```

### Code Structure

```js
└── Project Name
  ├──e2e/
  ├──src/
  │ ├──app/
  │ │ ├──modules/
  │ │ │ ├──shared/
  │ │ │   ├──components/
  │ │ │   │ ├──test/
  │ │ │   │ │ ├──test.component.html
  │ │ │   │ │ ├──test.component.scss
  │ │ │   │ │ ├──test.component.spec.ts
  │ │ │   │ │ └──test.component.ts
  │ │ │   │ └──index.ts
  │ │ │   ├──directives/
  │ │ │   │ ├──test/
  │ │ │   │ │ ├──test.directive.spec.ts
  │ │ │   │ │ └──test.directive.ts
  │ │ │   │ └──index.ts
  │ │ │   ├──pipes/
  │ │ │   │ ├──test/
  │ │ │   │ │ ├──test.pipe.spec.ts
  │ │ │   │ │ └──test.pipe.ts
  │ │ │   │ └──index.ts
  │ │ │   └──shared.module.ts
  │ │ └──pages/
  │ │   └──login/
  │ │     ├──login-routing.page.module.ts
  │ │     ├──login.page.html
  │ │     ├──login.page.scss
  │ │     ├──login.page.spec.ts
  │ │     └──login.page.ts
  │ ├──app-routing.module.ts
  │ ├──app.component.html
  │ ├──app.component.scss
  │ ├──app.component.spec.ts
  │ ├──app.component.ts
  │ └──app.module.ts
  ├──assets
  ├──environments
  ├──theme
```

### Короткий путь для переменых scss

- разбиение страниц на модули
- использовать onPush стратегию

### e2e
