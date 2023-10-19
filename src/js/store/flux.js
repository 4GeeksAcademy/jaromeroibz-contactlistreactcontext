import { useParams } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: [],
			idToDelete: ""
		},
		actions: {
			// Use getActions to call a function within a fuction
			eliminarContacto: (item) => {
				
				console.log(item)
				const store = getStore();
				const actions = getActions();
				const indexMap = getStore().idToDelete
				console.log(indexMap)

				var requestOptions = {
					method: 'DELETE'
				};
				
				fetch("https://playground.4geeks.com/apis/fake/contact/" + indexMap, requestOptions)
					.then(response => response.json())
					.then( () => {
						fetch('https://playground.4geeks.com/apis/fake/contact/agenda/agenda_javier')
						.then((response) => response.json())
						.then((data) => setStore({contacts: data}))
					})
					.catch(error => console.log('error', error));
					
				getActions().getContacts();	
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({demo: demo});
			},
			agregarContacto: (data) => {
				
				const store = getStore();

				const requestOptions = {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(data)
				}
				console.log('Agregar Contacto')
				fetch('https://playground.4geeks.com/apis/fake/contact', requestOptions)
				.then( (response) => response.json() )
				.then( (data) => { getActions().getContacts()} )
			
			},
			getContacts: async () => {
				const store = getStore();
				let response = await fetch('https://playground.4geeks.com/apis/fake/contact/agenda/agenda_javier')
			
				let data = await response.json()

				if (response.ok){
				  setStore({
					contacts: data
				  })
				  console.log('existe el usuario')
				}
			  
			},
			editarContacto: (contact, theid) =>{
				const store = getStore();
				const actions = getActions();
				
			    const requestOptions = {
					method: 'PUT',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify( contact )
				};
				fetch(`https://playground.4geeks.com/apis/fake/contact/${theid}`, requestOptions)
					.then((response) => response.json())
					.then((data) => actions.getContacts())
			},
			saveToDelete: (theid) =>{
				setStore({
					idToDelete: theid
				})
			} 
			
		}
			
	}
};


export default getState;