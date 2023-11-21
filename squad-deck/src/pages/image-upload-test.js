import { useState, useEffect, useRef } from "react"
import { storage } from "../firebase"
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'

const ImageUploadTest = () => {
    const [imageUpload, setImageUpload] = useState(null)
    const [imageList, setImageList] = useState([])
    const imageListRef = ref(storage, 'test/')
    const upload = useRef(false)

    const uploadImage = () => {
        if (imageUpload === null) return
        const imageRef = ref(storage, `test/${imageUpload.name}`)
        uploadBytes(imageRef, imageUpload)
            .then(() => {
                useRef.current = !useRef.current
            })   
    }

    useEffect(() => {
        listAll(imageListRef)
            .then(res => {
                res.items.forEach((item) => {
                    getDownloadURL(item)
                        .then(url => {
                            setImageList(prev => [...prev, url])
                        })
                })
            })
    }, [useRef.current])

    return (
        <>
            <h1>Image Upload Test</h1>
            <input 
                type="file" 
                onChange={(e) => {setImageUpload(e.target.files[0])}}
            />
            <button onClick={uploadImage}>Upload</button>
            {imageList.map((url) => {
                return <img src={url} alt="Test image" height="250px" />
            })}
        </>
    )
}

export default ImageUploadTest