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

<img width="1082" alt="image" src="https://github.com/aeroxmotion/devsu-frontend-test/assets/11183503/153785ae-7111-4717-a7e4-4fb08e34fb78">


## Demo

A continuación se muestra una demo de la aplicación ejecutándose en emuladores `Android` y `iOS`.


| Android | iOS    |
| ------- | ------ |
| <video src="https://github.com/aeroxmotion/devsu-frontend-test/assets/11183503/a5c92503-05f5-4a6b-a461-82239dc60c1e">  | <video src="https://github.com/aeroxmotion/devsu-frontend-test/assets/11183503/0e4a0563-c730-4db5-9702-d48eff4bb5bc"> |
