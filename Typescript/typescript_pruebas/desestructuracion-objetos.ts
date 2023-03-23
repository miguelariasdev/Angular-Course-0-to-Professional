(() =>{

    const avenger = {
        nombre : 'Steve',
        clave: 'Capitán América',
        poder: 'Droga'
    }

    const extraer = ( { nombre, poder }: any ) => {

/*         console.log(nombre);
        console.log(poder); */
    }

    extraer (avenger);

    const avengers: string[] = ['Thor', 'Ironman', 'Spiderman'];

    const [ , , arana] = avengers;

    console.log(arana)


})();