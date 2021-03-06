<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/ScripTerasu/ngx-bootstrap-notify/master/demo/src/assets/logo.svg">
</p>

# ngx-bootstrap-notify - Angular library built with ❤ using ngx-library yeoman generator.

[![npm version](https://badge.fury.io/js/ngx-bootstrap-notify.svg)](https://badge.fury.io/js/ngx-bootstrap-notify),
[![Build Status](https://travis-ci.org/ScripTerasu/ngx-bootstrap-notify.svg?branch=master)](https://travis-ci.org/ScripTerasu/ngx-bootstrap-notify)
[![Coverage Status](https://coveralls.io/repos/github/ScripTerasu/ngx-bootstrap-notify/badge.svg?branch=master)](https://coveralls.io/github/ScripTerasu/ngx-bootstrap-notify?branch=master)
[![dependency Status](https://david-dm.org/ScripTerasu/ngx-bootstrap-notify/status.svg)](https://david-dm.org/ScripTerasu/ngx-bootstrap-notify)
[![devDependency Status](https://david-dm.org/ScripTerasu/ngx-bootstrap-notify/dev-status.svg?branch=master)](https://david-dm.org/ScripTerasu/ngx-bootstrap-notify#info=devDependencies)

## Demo

View all the directives in action at https://ScripTerasu.github.io/ngx-bootstrap-notify

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `ngx-bootstrap-notify` via:
```shell
npm install --save ngx-bootstrap-notify
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `ngx-bootstrap-notify`:
```js
map: {
  'ngx-bootstrap-notify': 'node_modules/ngx-bootstrap-notify/bundles/ngx-bootstrap-notify.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { LibModule } from 'ngx-bootstrap-notify';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` NgxBootstrapNotifyModule .forRoot()`):
```js
import { LibModule } from 'ngx-bootstrap-notify';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [NgxBootstrapNotifyModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` NgxBootstrapNotifyModule `:

```js
import { NgxBootstrapNotifyModule } from 'ngx-bootstrap-notify';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [NgxBootstrapNotifyModule, ...], 
})
export class OtherModule {
}
```

## Usage



## License

Copyright (c) 2018 Sebastian Almendra. Licensed under the MIT License (MIT)

