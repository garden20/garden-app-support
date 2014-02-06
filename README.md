# Garden App Support

This is a module that will be useful for apps that want to be used in the [garden20](http://garden20.com) eco-system.

It provides:

 * Support for detecting events in the garden.
 * Obtaining information about a user.
 * Support for creating urls to other apps that can be mapped at runtime.
 * Including changelogs in your application for rendering on the update app screen.

## Install

This package can be used via kanso or jam.

### Kanso


Add to your project's kanso.json dependencies setting, here is the minimal
case:

```json
"dependencies": {
    "garden-app-support": null
}
```

To include a changelog with your app, add:

```json
"changelog": "Changes.md"
```

Run kanso install to install in your packages directory:

```
kanso install
```

### Jam

```
jam install garden-app-support
```




