import { styled } from "@mui/material";
import { grey } from "@mui/material/colors";
import ReactQuill, { ReactQuillProps } from "react-quill";
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import "react-quill/dist/quill.snow.css";
import lightModePalette from "../../palette";

interface styleEditorInterface {
  height?: string;
  maxHeight?: string;
}

const StyleEditor = styled(ReactQuill)<styleEditorInterface>(({ height, maxHeight }) => ({
  "& .ql-toolbar.ql-snow": {
    borderColor: lightModePalette.other.inputOutlinedEnabledBorder,
    borderRadius: "8px 8px 0 0",
    padding: 0,
  },
  "& .ql-container.ql-snow": {
    borderRadius: "0 0 8px 8px",
    minHeight: "max-content",
    height: height ? height : "100%",
    maxHeight: maxHeight ? maxHeight : "100%",
    fontSize: 14,
    overflowY: "auto",
    color: lightModePalette.text?.primary,
    borderColor: lightModePalette.other.inputOutlinedEnabledBorder,
    backgroundColor: grey[50],
    "& .ql-editor": {
      padding: "8px 13px",
    },
  },
  "& .ql-snow .ql-formats": {
    // borderRight: "1px solid rgba(29, 41, 57, 0.12)",
    padding: "4px",
    marginRight: 0,
    "&:last-of-type": {
      borderRight: "none",
    },
  },
}));

export type EditorObject = { insertContent: (text: string) => void };

interface EditorProps extends ReactQuillProps {
  height?: string;
  maxHeight?: string;
}

const Editor = forwardRef<EditorObject, EditorProps>(({ onChange, height, maxHeight, value }, ref) => {
  const quillRef = useRef<ReactQuill>(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        insertContent: (content: string) => {
          if (!quillRef.current) return;
          const quill = quillRef.current.getEditor();

          if (quill) {
            const cursorPosition = quill.getSelection();
            if (cursorPosition) {
              quill.insertText(cursorPosition.index, content);
            }
          }
        },
      };
    },
    []
  );

  const modules = {
    toolbar: [
      [{ font: [] }],
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      ["link", "image", "video"],
      [{ list: "ordered" }, { list: "bullet" }],
      // [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
    ],
  };

  const formats = ["bold", "italic", "underline", "strike", "link", "image", "video", "list", "bullet"];

  return (
    <StyleEditor
      height={height}
      maxHeight={maxHeight}
      ref={quillRef}
      modules={modules}
      formats={formats}
      value={value}
      onChange={onChange}
    />
  );
});

export default Editor;
