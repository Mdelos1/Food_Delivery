import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { setPriceOrder } from '../../../store/slices/priceOrder.slice';
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
import { useDispatch } from 'react-redux';

const ProductPage = ({idArray}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [contador, setContador] = useState(1);

  const db = getFirestore(app)
  const [menu, setMenu] = useState();

  useEffect(() => {
    const getStore = async() => {
      try {
        const consulta = await getDocs(collection(db, 'stores'))
        const docs = []
        consulta.forEach(doc => {
          docs.push({...doc.data(), id:doc.id})
        }) 
        setMenu(docs[idArray].menus[id-1]);
      } catch (error) {
        throw error;
      }
    }
    getStore();
  }, [])

  const [addPriceaditionalIngredients, setAddPriceaditionalIngredients] = useState(0);
  const multPrice = contador ? Number(menu?.price.split(' ')[1]) * contador : menu?.price
  const aditionPrice = multPrice + addPriceaditionalIngredients;

  const [numIndex, setNumIndex] = useState([]);

  const addValor = (index) => {
    const ind = numIndex.findIndex(e => e === index);
    if (numIndex.includes(index)) {
      numIndex.splice(ind, 1);
      setAddPriceaditionalIngredients(addPriceaditionalIngredients - (index))
    }else{
      setNumIndex([...numIndex, index])
      setAddPriceaditionalIngredients(addPriceaditionalIngredients + (index))
    }
  }

  const cart = (idPage, num) => {
    navigate(`/Home/OrderList/${idPage}`)
    const object = [num, contador]
    console.log(object)
    dispatch(setPriceOrder(object))
  }

  return (
    <div className='product'>
      <div className='product__container'>
        <div className='product__img' style={{backgroundImage: `url(${menu?.img})`}}>
          <p onClick={() => navigate(-1)}><i class="fa-solid fa-arrow-left"></i></p>
        </div>
        <div>
          <div className='product__title'>
            <b>{menu?.name}</b>
            <p>{menu?.time}</p> 
          </div>
          <p className='product__description'>{menu?.description}</p>
        </div>
        <div className='product__aditionalIngredients'>
          <h4>Aditonal Ingredients</h4>
          {
            menu?.aditonalIngredients?.map((ing, i) => (
              <div key={i} className='product__aditionalIngredients--ing'>
                <div>
                  <input 
                    type={"checkbox"} 
                    id={`aditionalIngredients${i}`} 
                    onClick={() => addValor(i+3*2-2)}/>
                  <label htmlFor="aditionalIngredients"> {ing}</label>
                </div>  
                <div>
                  +{i+3*2-2}
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className='product__btns'>
        <div className='contador'>
          <button onClick={() => setContador(contador-1)}>{"-"}</button>
          <button>{contador}</button>
          <button onClick={() => setContador(contador+1)}>{"+"}</button>
        </div>
        <button onClick={() => cart(id, aditionPrice.toFixed(2))}>add <b>${aditionPrice.toFixed(2)}</b></button>
      </div>
    </div>
  )
}

export default ProductPage
