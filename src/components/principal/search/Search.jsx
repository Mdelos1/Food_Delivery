import React, { useEffect, useState } from 'react';
import imgLupa from  '../../../assets/imgs/svg/lupa.svg';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import app from '../../../firebase/firebaseConfig';
import { 
  getFirestore, 
  collection,
  getDoc, 
  getDocs, 
  doc, 
  deleteDoc, 
  setDoc,
} from 'firebase/firestore';
import Footer from '../footer/Footer';

const SearchPage = () => {
    
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const db = getFirestore(app)
    const [lista, setLista] = useState();
  
    useEffect(() => {
      const getStore = async() => {
        try {
          const consulta = await getDocs(collection(db, 'stores'))
          const docs = []
          consulta.forEach(doc => {
            docs.push({...doc.data(), id:doc.id})
          }) 
          setLista(docs);
        } catch (error) {
          throw error;
        }
      }
      getStore();
    }, [])

    const [searchObject, setSearchObject] = useState({});

    const submit = (form) => {
        let numSearch = null;
        const arrName = [];
        const arrImg = [];
        switch (form.search) {
            case "salad":
                numSearch = 0
                break
            case "pizza":
                numSearch = 1
                break
            case "burger":
                numSearch = 2
                break
        }
        lista[numSearch].menus.map(name => {
            arrName.push(name.name);
            arrImg.push(name.img);
        })
        setSearchObject({arrName, arrImg});
    }

  return (
    <div className='search'>
        <div className='search__container'>

            <form onSubmit={handleSubmit(submit)} className='input_search'>
                <img src={imgLupa} alt="" className='imgLupa' />
                <input 
                    type={"search"} 
                    name="search" 
                    className='search__input'  
                    placeholder='Search for a dish' 
                    {...register("search")}
                />
            </form>
            <div className='serach__lista'>
                <ul className='search__lista--img'>
                    {
                        searchObject.arrImg?.map((img, i) => (
                            <img key={i} src={img} alt="" className='search__img'/>
                        ))
                    }
                </ul>
                <ul className='search__lista--name'>
                    {
                        searchObject.arrName?.map((name, i) => (
                            <li key={i}>{name}</li>
                        ))
                    }
                </ul>
                
            </div>
        </div>
        <div className='footer'>
            <Footer />
        </div>

    </div>
  )
}

export default SearchPage;