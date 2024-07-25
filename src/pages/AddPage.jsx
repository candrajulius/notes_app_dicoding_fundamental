import { useNavigate } from "react-router-dom";
import NoteInput from "../components/NoteInput";
import useInput from "../hooks/UseInput";
import { addNote } from "../utils/network-data";
import { home_page_path } from "../utils/constant";

const AddPage = () => {
  const navigate = useNavigate();

  const [title, onHandleTitle] = useInput("");
  const [body, onHandleBody] = useInput("");

  // useEffect(() => {
  // //   const submitNote = async () => {
  // //     if (title && body && isSubmitted) {
  // //       const { error } = await addNote({
  // //         title: title,
  // //         body: body,
  // //       });
  // //       if (!error) {
  // //         navigate("/");
  // //         setWarning("");
  // //       } else {
  // //         setWarning("Terjadi kesalahan pada sistem");
  // //       }
  // //       setIsSubmitted(false);
  // //     } else if (isSubmitted) {
  // //       alert("Title dan body tidak boleh kosong");
  // //       setIsSubmitted(false);
  // //     }
  // //   };
  // //   submitNote();
  // // }, [title, body, navigate, isSubmitted]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await addNote({
      title: title,
      body: body,
    });
    navigate(home_page_path);
  };

  return (
    <>
      <div className='add-new-page'>
        <NoteInput
          title={title}
          body={body}
          handleBody={onHandleBody}
          handleTitle={onHandleTitle}
          onSubmitHandler={onSubmitHandler}
        />
      </div>
    </>
  );
};
export default AddPage;
