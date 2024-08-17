## Changelog

### 0.0.14

_2024-08-17_

#### Bug fixes

- Fixed the issue in use-common that loading fails if the parent component is not a component from the vue-maplibre library.

### 0.0.12

_2024-08-04_

#### Bug fixes

- Initialize component logic in use-common, remove the forced dependency on vm-map, and fix the issue where some third-party extensions that do not depend on vm-map encounter initialization errors.

### 0.0.11

_2024-07-25_

#### Bug fixes

- Fixed the issue that destroying the `vm-map` component caused the vmMitt listener to fail.

### 0.0.10

_2024-06-18_

#### Bug fixes

- Fixed the issue that the native layer component VmLayerNative fails to specify the source-layer for vector layers of type VectorSourceSpecification.
- Fixed the issue that the native layer component VmLayerNative repeatedly listens to the layout property.[#2](https://github.com/meteosci/vue-maplibre/issues/2)
- Fixed the issue that the online project documentation cannot be accessed.

### 0.0.9

_2024-06-18_

#### Bug fixes

Fixed the issue of packaging errors in the CJS environment.

### 0.0.8

_2024-06-17_

#### Features

- Added global configuration component vm-config-provider.
- The native layer component vm-layer-native supports loading terrain.
- Added project documentation.

#### Bug fixes

- Fixed the issue that event unregistration when the vm-map component is destroyed. [#1](https://github.com/meteosci/vue-maplibre/issues/1)

### 0.0.7

_2024-05-13_

#### Features

- Added native layer component `vm-layer-native`, consolidating all native layers into one.

### 0.0.6

_2024-04-21_

#### Features

- Added the `vm-layer-symbol` component.

### 0.0.5

_2024-04-20_

#### Features

- Added the `vm-control-navigation` navigation control component.
- Added the `vm-control-terrain` terrain control component.

#### Bug fixes

- Fixed the issue that components being loaded multiple times.

### 0.0.4

_2024-04-18_

#### Features

- Added `vm-layer-gltf` layer component.

#### Bug fixes

- Fixed the issue that the useVueMaplibre method couldn't retrieve the map object.

### 0.0.3

_2024-04-17_

#### Features

- Partially responsive updates for properties in the `vm-map` component.

#### Bug fixes

- Resolved issue with missing type definitions.

### 0.0.2

_2024-04-16_

#### Features

- Added map component `vm-map`.

### 0.0.1

_2024-04-16_

#### Features

- Project initialization.
