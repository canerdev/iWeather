'use client';

const Form = ({ city, setCity, handleSubmit }) => {
    const handleInputChange = (e) => {
      setCity(e.target.value);
    };
  
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        handleSubmit(e); // Call handleSubmit on Enter key press
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          style={{
            backgroundColor: "#1E1E29",
            color: "#FAFAFA",
            padding: "0.5rem",
            borderRadius: "0.375rem",
            border: "none",
            width: "311px",
          }}
          type="text"
          placeholder="Search location"
          value={city}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button type="submit">submit</button>
      </form>
    );
  };
  
export default Form;
  