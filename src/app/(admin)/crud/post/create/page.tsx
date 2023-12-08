"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { insertPost, getPost, updatePost } from "@/app/action";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const [quill, setQuill] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [resume, setResume] = useState("");
  const [publicado, setPublicado] = useState(false);

  const urlParams = useSearchParams()
  const id:any = urlParams.get('id');

  useEffect(() => {
    if (id > 0) {
      const callDb = async () => {
          let dbResponse = await getPost(id);

          setTitle(dbResponse.title??'');
          setAuthor(dbResponse.author??'');
          setResume(dbResponse.resume??'');
          setQuill(dbResponse.content??'');
          setPublicado(dbResponse.published?true:false);
      };
      callDb();
    }
  }, [id]);

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["code-block"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "code-block",
  ];

  const handleTitleChange = (event: any) => {
    setTitle(event.target.value);
  };

  const handleResumeChange = (event: any) => {
    setResume(event.target.value);
  };

  const handleAuthorChange = (event: any) => {
    setAuthor(event.target.value);
  };

  const handleFormSubmit = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("resume", resume);
    formData.append("content", quill);

    if(id){
      formData.append("id", id);
      updatePost(formData, publicado);
    }else{
      insertPost(formData, publicado);
    }
  };

  return (
    <div className="my-6 px-3 py-3">
      <div className="flex flex-col gap-8 mb-4">
        <div className="flex flex-col">
          <label htmlFor="title">Titulo</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={handleTitleChange}
            className="text-black h-12 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="author">Autor</label>
          <input
            id="author"
            type="text"
            value={author}
            onChange={handleAuthorChange}
            className="text-black h-12 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="resume">Resumo</label>
          <input
            id="resume"
            type="text"
            value={resume}
            onChange={handleResumeChange}
            className="text-black h-12 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row gap-4 mb-4">
            <input id="publicado" type="checkbox" checked={publicado} onChange={e => setPublicado(e.target.checked)} name="publicado" />
            <label htmlFor="publicado">Publicado</label>
          </div>
        </div>
      </div>
      <ReactQuill
        value={quill}
        onChange={setQuill}
        modules={modules}
        formats={formats}
        id="quill"
      />
      <input type="hidden" name="id" id="id" value={id??''} />
      <button className="bg-blue-600 h-12 w-28 rounded-md mt-4" onClick={handleFormSubmit} >Enviar</button>
    </div>
  );
}
