import { deleteDoc, doc, updateDoc } from "firebase/firestore"
import { db } from "."

export const toggleItemsFavorite = (item, favorite) => {
    const itemRef = doc(db, 'meat-ups', item.id)
    updateDoc(itemRef, {
        favorite: favorite
    })
}

export const deleteItem = (itemId) => {
    deleteDoc(doc(db, 'meat-ups', itemId))
}