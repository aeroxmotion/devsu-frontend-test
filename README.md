# Devsu Frontend Test

Aplicación hecha sobre `React Native` para la prueba frontend de `Devsu`.

## Instalación y ejecución

Una vez clonado el respositorio, para instalar las dependencias, ejecutar sobre el proyecto:

```bash
$ npm i
```

Ya instaladas las dependencias, debemos iniciar `Metro` ejecutando el siguiente comando:

```bash
$ npm start
```

Una vez `Metro` esté en ejecución, para correr un emulador, seguir los siguientes pasos:

**Emulador Android**

En una terminal adicional a la de `Metro`, ejecutar:

```bash
$ npm run android
```

**Emulador iOS**

En una terminal adicional a la de `Metro`, previo a iniciar el emulador, ejecutar:

```bash
$ buncle exec pod install
```

Esto para instalar las dependencias requeridas sobre `iOS`. Una vez instaladas, para correr el emulador, ejecutar:

```bash
$ npm run ios
```

## Testing

Para ejecutar las pruebas, ejecutar el siguiente comando:

**Sin coverage:**

```bash
$ npm run test
```

**Con coverage:**

```bash
$ npm run test:cov
```

_Coverage actual:_

_TODO_

## Demo

A continuación se muestra una demo de la aplicación ejecutándose en emuladores `Android` y `iOS`.

| Android | iOS    |
| ------- | ------ |
| _TODO_  | _TODO_ |
