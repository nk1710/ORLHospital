"use client";

import { Editor } from "@tinymce/tinymce-react";

export default function EditorClient({ value = "", onChange }) {
  return (
    <Editor
      value={value}
      onEditorChange={(newContent) => onChange?.(newContent)}
      tinymceScriptSrc="/tinymce/tinymce.min.js"
      init={{
        license_key: "gpl",
        height: 500,
        menubar: true,
        promotion: false,
        plugins: [
          "advlist", "autolink", "lists", "link", "image",
          "charmap", "preview", "anchor", "searchreplace",
          "visualblocks", "code", "fullscreen", "insertdatetime",
          "media", "table", "help", "wordcount"
        ],
        toolbar:
          "undo redo | blocks | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist | link image media table | fullscreen preview code wordcount",
      }}
    />
  );
}