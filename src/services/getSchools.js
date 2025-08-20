import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export const getSchoolById = async (id) => {
  const docRef = doc(db, "schools", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    return null;
  }
};

