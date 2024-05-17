import React, { useState, useRef, useEffect } from 'react'
import * as api from '../../Api'
import { useDispatch } from 'react-redux'
import { useAuthContext } from '../../hook/useAuthContext'
import { commentPost } from '../../actions/posts'

export default function CommentSection({ Congti, setCongti }) {
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState('')
  const [change, setChange] = useState('')

  const dispatch = useDispatch()

  console.log(Congti._id)
  const handleComment = async () => {
    var finalComment = `${user.email} : ${comment}`

    console.log(finalComment + ' ' + comment)
    dispatch(commentPost(finalComment, Congti._id))
    setChange(comment)
    setComment('')
    console.log(Congti)
  }
  const commentPost = (value, id) => async (dispatch) => {
    try {
      const { data } = await api.comment(value, id)

      console.log(data.comments)
      setComments(data.comments)

      return data.comments
    } catch (error) {
      console.log(error)
    }
  }
  // useEffect(()=>{
  //   fetch(`http://wandertour.ddns.net:5000/post/recruitment/by/${Congti.id}`)
  //   .then((result) => result.json())
  //   .then((data) => {
  //     setCongti(data)
  //   })
  // },[change])

  const { user } = useAuthContext()
  console.log(comments)
  console.log(Congti.comments)
  
  return (
    <div style={{ paddingLeft: '20px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: '600' }}>Comment Section</h1>
      <div>
        <div>
          <h6 style={{ marginBottom: '0.5rem' ,fontWeight:'600' , fontSize:'20px' }}>Comments</h6>
          {comments && comments.length > 0
            ? comments.map((c, i) => (
                <div key={i} style={{ marginBottom: '0.5rem' }}>
                  <h1>{c}</h1>
                </div>
              ))
            : Congti.comments && Congti.comments.length > 0
            ? Congti.comments.map((c, i) => (
                <div key={i} style={{ marginBottom: '0.5rem' }}>
                  <h1>{c}</h1>
                </div>
              ))
            : null}
        </div>

      
        {user && (
          <>
            <h6 style={{ marginBottom: '8px' }}>Write a comment</h6>
            <textarea
              style={{ width: '100%', minHeight: '100px', marginBottom: '8px', outline: '1px solid ' }}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder='Comment'
            />
            <br />
            <button style={{ marginTop: '10px', color: 'primary' }} disabled={!comment.length} onClick={handleComment}>
              Comment
            </button>
          </>
        )}
      </div>
    </div>
  )
}
