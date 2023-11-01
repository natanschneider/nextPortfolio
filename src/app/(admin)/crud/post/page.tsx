'use client'
import React, {useState} from "react";
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import insertPost from "@/app/action";


export default function Page(){
    const [quill, setQuill] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [resume, setResume] = useState('');

    const modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['code-block'],
          ['clean']
        ],
      };
    
      const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'code-block'
      ];

      const handleTitleChange = (event:any) => {
        setTitle(event.target.value);
      };
    
      const handleResumeChange = (event:any) => {
        setResume(event.target.value);
      };

      const handleAuthorChange = (event:any) => {
        setAuthor(event.target.value);
      }

      const handleFormSubmit = (event:Event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('author', author);
        formData.append('resume', resume);
        formData.append('content', quill);

        insertPost(formData);
      };

    return(
        <form className="my-6 px-3 py-3" onSubmit={handleFormSubmit} >
          <div className="flex flex-row gap-8 mb-4">
            <div>
            <label htmlFor="title">Titulo</label>
            <input id="title" type="text" value={title} onChange={handleTitleChange} className="text-black h-12 rounded-md" />
            </div>
            <div>
            <label htmlFor="author">Autor</label>
            <input id="author" type="text" value={author} onChange={handleAuthorChange} className="text-black h-12 rounded-md" />
            </div>
          </div>

            <input type="text" value={resume} onChange={handleResumeChange} className="text-black h-12 rounded-md mb-4" />
            <ReactQuill value={quill} onChange={setQuill} modules={modules} formats={formats} id="quill" />
            <button type="submit">Enviar</button>
        </form>
    )
}