function FormInput({ labelName }) {
  return (
    <>
      <label className="form-input__label">{labelName}</label>
      <input className="form-input" />
    </>
  );
}

export default FormInput;
