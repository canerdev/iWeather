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
                    borderRadius: "0.375rem",
                    border: "none",
                    width: "359px",
                }}
                className="px-5 py-4"
                type="text"
                placeholder="Search location"
                value={city}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                aria-autocomplete="list"
                aria-controls="autocomplete-list"
            />
        </form>
    );
};

export default Form;
