import { doc, updateDoc } from "firebase/firestore"
import { db } from "."

export const toggleItemsFavorite = (item, favorite) => {
    const itemRef = doc(db, 'meat-ups', item.id)
    updateDoc(itemRef, {
        favorite: favorite
    })
}