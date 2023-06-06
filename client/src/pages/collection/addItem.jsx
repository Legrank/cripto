import React, { useState } from 'react'
import './style.css'
import { UploadImg } from '../../shared/ui'

function AddItem() {
    const [dragActive, setDragActive] = useState(false)
    const [imgUrl, setImgUrl] = useState(false)
    const inputRef = React.useRef(null)

    const handleDrag = function (e) {
        e.preventDefault()
        e.stopPropagation()
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true)
        } else if (e.type === 'dragleave') {
            setDragActive(false)
        }
    }

    const handleDrop = function (e) {
        e.preventDefault()
        e.stopPropagation()
        setDragActive(false)
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const img = e.dataTransfer.files[0]
            const reader = new FileReader()
            reader.addEventListener(
                'load',
                () => {
                    setImgUrl(reader.result)
                },
                { once: true }
            )
            reader.readAsDataURL(img)
        }
    }

    const handleChange = function (e) {
        e.preventDefault()
        if (e.target.files && e.target.files[0]) {
            // handleFiles(e.target.files);
        }
    }

    const onButtonClick = () => {
        inputRef.current.click()
    }

    return (
        <>
            <form
                id="form-file-upload"
                onDragEnter={handleDrag}
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    ref={inputRef}
                    type="file"
                    id="input-file-upload"
                    accept="image/jpeg, image/jpg, image/png"
                    onChange={handleChange}
                />
                <label
                    id="label-file-upload"
                    htmlFor="input-file-upload"
                    className={dragActive ? 'drag-active' : ''}
                >
                    <div>
                        <p>Drag and drop your file here or</p>
                        <button
                            className="upload-button"
                            onClick={onButtonClick}
                        >
                            Upload a file
                        </button>
                    </div>
                </label>
                {dragActive && (
                    <div
                        id="drag-file-element"
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                    ></div>
                )}
            </form>
            <UploadImg />
            {imgUrl && <img src={imgUrl} />}
        </>
    )
}

export default AddItem
