import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";

export default function Login() {
    const [inputValue, setInputValue] = useState("");
    //object destructuring, only taking setUser
    const { setUser } = useAuth();
    const goTo = useNavigate()

    function handleInput(e) {
        setInputValue(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setUser(inputValue)
        goTo('/')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleInput} value={inputValue} placeholder="username" autoComplete="off"/>
            <br />
            <input type="submit" />
        </form>
    );
}
