import React, {useContext, useState , useEffect}from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Axios from '../Axios/Axios';



const DeletePost = () => {
   
    let navigate = useNavigate();
    let { id } = useParams();
    let [state, setstate] = useState({
        title: "",
        author: "",
        loading: false,
    });

    let { title, author, loading } = state;
    useEffect(() => {
        let fetchData = async () => {
            let deletedata = await Axios.get(`/posts/${id}`);
            setstate(deletedata.data);
        }
        fetchData();
    }, [id])

    let handleDelete = async e => {
      await  Axios.delete(`/posts/${id}`)
        navigate("/")
    }
    return (
        <div>
            <h1> {title}+{author}</h1> 
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default DeletePost
