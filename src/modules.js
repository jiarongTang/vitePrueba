export const person = {
	name: "Stephen",
	surname: "Strange"
};

//para que la variable se pueda exportar se añade delante de la definicion de la variable la palabra export

export const sayHello = () => {
    console.log("Hello!");
}

// exporta por defecto una constante
//permite exportar la informacion y habilita el renombrado de la variable en el fichero que se importa

const DEV_LAN = "JavaScript";

export default DEV_LAN;