import axios from "axios";
import { useEffect, useState } from "react"
const  useGetData = () => {
    const [posts, getPosts] = useState();
    const [users, getUsers] = useState();
    const [commnets, getComments] = useState();
    const [pic, setPic] = useState()
 async function fetchData(){
    const postApi = "https://jsonplaceholder.typicode.com/posts"
    const commentApi = "https://jsonplaceholder.typicode.com/comments"
    const userApi = "https://jsonplaceholder.typicode.com/users"
    const photoApi = "https://jsonplaceholder.typicode.com/photos"
    const getPostApi = await axios.get(postApi);
    const getCommentApi =await axios.get(commentApi);
    const getUserApi =await axios.get(userApi);
    const getPhotoApi =await axios.get(photoApi)
    axios.all([getPostApi, getCommentApi, getUserApi, getPhotoApi]).then(
        axios.spread((...allData) => {
            const allPost = allData[0].data.slice(0,20)
            const allComment = allData[1].data.slice(0,20)
            const allUser = allData[2].data.slice(0,20)
            const allPhoto = allData[3]
            getPosts(allPost);
            getComments(allComment);
            getUsers(allUser);
            setPic(allPhoto);
        })
    )
 }

    // Get API
    useEffect(()=>{
        fetchData()
    },[posts, users, commnets, pic])
   
    return [posts, users, commnets, pic]
}
export default useGetData