

Proyecto Final ReactJs 
======

Alumno: Santiago Nicolás Benfatto
Comisión: 34790

##Descripción

El proyecto está propuesto por la academia CODER-HOUSE, se debe realizar a modo de entrega final luego de haber finalizado el curso de ReactJs.
Se basa en el desarrollo de un e-commerce de tipo SPA (Single Page Application), con el fin de aprender e implementar los conceptos básicos de la tecnología referida y demostrar su aplicación de manera práctica lo mas cercana a un proyecto real.

####Tecnologías utilizadas

![HTML](https://camo.githubusercontent.com/b9fe9f8e52c6fd30d814c24f3eb71cb09d7f5bc82d7f67a384055de93fdbb0bf/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f68746d6c2d352d2d76312e706e67)![CSS](https://camo.githubusercontent.com/dc75aee770dff630309493116eeebd6a39c7042e4e94780a5e6c8f107bebe76f/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f637373332e706e67)![JAVASCRIPT](https://camo.githubusercontent.com/84c2586aa67309f6fa224fdf5fdf33a633239375397a8e753ac1e7cc727f5458/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f6a6176617363726970742d2d76312e706e67)![ReacjtJs](https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-42.png)![NPM](https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/npm-42.png)![Firebase](https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-42.png)


####Librerías o dependencias


````
"@testing-library/jest-dom": "^5.16.5",
"@testing-library/react": "^13.4.0",
"@testing-library/user-event": "^13.5.0",
"firebase": "^9.14.0",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-router-dom": "^6.4.3",
"react-scripts": "5.0.1",
"react-toastify": "^9.1.1",
"web-vitals": "^2.1.4"

````

La aplicación fue creada mediante

````
create-react-app <name>
````


Para la navegabiliad de la aplicación se eligió utilizar la librería 'react-router-dom', intalada de la siguiente manera:

````
npm install react-router-dom
````

Para alojar los productos y las ordenes requeridas durante el proceso de compra, se utilizó la base de datos de [Firebase Cloud Firestore](https://firebase.google.com/)



##Visualización del proyecto

Para acceder al proyecto se puede realizar a través del siguiente link, el cual fue alojado en el servicio Vercel:

Ir a la página: [Wine club](https://wine-club-livid.vercel.app)

![Vitazo_general](/public/img/vistazo-general.gif)


###Instalación

También se puede acceder clonando el respositorio de github, utilizando el enlace de la siguiente manera:

````
git clone https://github.com/santiagobenfatto/wine-club

````

En el mismo directorio donde fue clonado se debe instalar el Node Package Manager (npm):

````
npm install
````

Y por último en la misma línea de comandos, se da inicio con el comando:

````
npm start
````

##Proceso de compra

####Navagación entre categorías

![Navegacion_categorias](/public/img/navegacion-categorias.gif)


####Agregar productos al carrito

![Carga_productos](/public/img/agregando-productos.gif)


####Confirmación y carga de datos

![Carga_Datos](/public/img/formulario.gif)

