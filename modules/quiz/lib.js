import { db } from 'common/config/firebase';
import { addDoc, collection } from 'firebase/firestore';

export const addNewOrder = async (
  shape,
  businessInfo,
  style,
  mode,
  logo,
  image,
  email
) => {
  const order = {
    shape: shape,
    businessInfo: businessInfo,
    style: style,
    mode: mode,
    logo: logo,
    image: image,
    email: email,
  };
  const orderRef = await addDoc(collection(db, `orders`), order);
  return orderRef.id;
};
