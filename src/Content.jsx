//  import Student from "./students.jsx"
//  import { etudiants } from "./students.jsx"
//  function Content() { 
//   function greetings(nom){
//    console.log("helo!!!",nom)
//   }
//     return (
           
//     <main className="flex-1 p-8">

//       <h2 className="text-3xl font-bold text-blue-500">
//     Liste des étudiants
//       </h2>
//       <button onClick={greetings} className='bg-red-500 text-white hover:bg-gray-300'>
//       A1         
//       </button>
      
//       <div className="mt-6 grid grid-cols-3 gap-5">
//         {etudiants.map(function(item, index) {
//           return <Student key={index} nom={item.nom} note={item.note} />
//         })}
//       </div>
      
//     </main>
//     )
//     function ajouter(){
//       const etudiant = { nom: nom, note: note }
//       setEtudiants([...etudiants, newObj])
//     }

//     function modifier(){
//       const newObj = { nom: nom, note: note }
//       const updatedEtudiants = etudiants.map(function(item) {
//         if (item.nom === nom) {
//           return newObj
//         }
//         return item
//     })
//     setEtudiants(updateEtudiants)
//  }
//     function supprimer(){
//       setEtudiants(updateEtudiants)
//     }
//     return
//  }
//  export default Content











































 
import { useState } from "react";
import Student from "./Etude.jsx";
import { etudiants as initialEtudiants } from "./Etude.jsx";

function Content() {

  // const [etudiants, setEtudiants] = useState(initialEtudiants);
  // const [ id, setId]= useState("");
  // const [nom, setNom] = useState("");
  // const [note, setNote] = useState("");
  const [oEtudiant,setOEtudiant]=useState({
    id:"",
    nom:"",
    note:""
  })
  const[etudiants,setEtudiants]=useState([
    {id:1 ,nom: "yasser", note: 17},
    {id:2, nom: "amina", note: 16},
    {id:3, nom: "meryem", note: 9},
    {id:4, nom: "Amine", note: 12}
  ])
    

  function greetings(nom) {
    console.log("hello!!!", nom);
  }

  function ajouter() {
   const etudiant = { id:id ,nom: nom,note: note};
    setEtudiants([...etudiants, etudiant]);
    setId("");
    setNom("");
    setNote("");
  }

  function modifier() {
    const newObj = {id:id, nom:nom ,note:note}
      
    

    const updatedEtudiants = etudiants.map(function (item) {
        if (item.id === id) {
        return newObj;
      }
      return item;
    });
    console.log(newObj)
    console.log(updatedEtudiants)
    setEtudiants(updatedEtudiants);
  }
  function remplir(data){
    console.log(data)
    setId(data.id)
    setNom(data.nom)
    setNote(data.note)

  }
  

  function supprimer() {
    const updatedEtudiants = etudiants.filter(function (item) {
      return item.id != id;
    });
    setEtudiants(updatedEtudiants);
  }

  return (
    <main className="flex-1 p-8">
      <h2 className="text-3xl font-bold text-blue-500">
        Liste des étudiants
      </h2>
      <button
        onClick={() => greetings("A1")}
        className="bg-red-500 text-white hover:bg-gray-300"
      >
        A1
      </button>
      <div className="mt-5">
        <input
          type="text"
          placeholder="id"
          value={id}
          onChange={(e) => setId(e.target.value)} className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)} className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Note"
          value={note}
          onChange={(e) => setNote(e.target.value)} className="border p-2 mr-2"
        />
        <button
          onClick={ajouter} className="bg-black text-white p-2 mr-2"
        >
          Ajouter
        </button>
        <button
          onClick={modifier}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Modifier
        </button>
        <button
          onClick={supprimer}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            supprimer
        </button>
            
      </div>
      <div className="mt-6 grid grid-cols-3 gap-5">
        {etudiants.map(function(item){
          return (<div
          onClick={()=>remplir(item)}
           className="rounded-xl bg-white p-5 shadow">
          <h3 class="text-lg font-bold">
            {item.nom}
          </h3>

          <p class="mt-2 text-slate-500">
            Note : {item.note} / 20
          </p>
        </div>)
        })}
      </div>
    </main>
  );
}
export default Content;











  

          
          