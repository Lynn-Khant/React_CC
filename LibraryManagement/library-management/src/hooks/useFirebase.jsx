// import { addDoc, collection, deleteDoc, doc, getDoc, onSnapshot, orderBy, query, updateDoc, where } from "firebase/firestore";
// import React, { useEffect, useRef, useState } from "react";
// import { db } from "../firebase";

// function useFirebase(){
//     let getCollection = (colName,_q) => {
//         let qRef = useRef(_q).current ;
//         let [error, setError] = useState('');
//         let [data, setData] = useState([]);
//         let [loading, setLoading] = useState(false);

//         useEffect(function () {
//             setLoading(true)
//             let ref = collection(db, colName);
//             let qureires = [];
//             if(qRef){
//                 qureires.push(where(...qRef))
//             }
//             qureires.push(orderBy('date', 'desc')); //uid asc , date desc -> index
            
//             let q = query(ref, ...qureires )
            
//             onSnapshot(q, docs => {
//                 if (docs.empty) {
//                     setError('no documents found');
//                     setLoading(false)
//                     console.log("this");
//                 } else {
//                     let collectionDatas = [];
//                     docs.forEach(doc => {
//                         let document = { id: doc.id, ...doc.data() }
//                         collectionDatas.push(document)
//                     })
//                     setData(collectionDatas);
//                     setLoading(false)
//                     setError('');
//                 }
//             })
//         }, [qRef])


//         return {error,data,loading};
//     }

    
//     let getDocument=(colName,id)=>{
//         let [singleData,setSingleData]=useState(null);
//         let [loading,setLoading]=useState(false);
//         let [error,setError]=useState(null);
//         useEffect(()=>{
//             setLoading(true);
//             let ref=doc(db,colName,id);
//             getDoc(ref).then((doc)=>{
//                 if(doc.exists()){
//                     let info={id:doc.id,...doc.data()};
//                     setSingleData(info);
//                     console.log(info);
//                     setLoading(false);
//                     setError(null);
//                 }else{
//                     setError("No Book Found");
//                     setLoading(false);
//                 }
//             })
//     },[id])

//     return {error,loading,singleData}
//     }

//     let addCollection=async(colName,data)=>{
//         let ref=collection(db,colName);
//         return addDoc(ref,data);
//     }

//     let deleteDocument=async(colName,id)=>{
//         let ref=doc(db,colName,id);
//         return deleteDoc(ref);
//     }

//     let updateDocument=async(colName,id,data)=>{
//         let ref=doc(db,colName,id);
//         return updateDoc(ref,data);
//     }

//     return {getCollection,addCollection,deleteDocument,updateDocument,getDocument};
// }

// export {useFirebase};