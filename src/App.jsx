import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Memes from "./memesData";
let newArr = [];
function App() {
    const [text, setText] = useState({
        topText: "",
        bottomText: "",
    });

    function fillForm(event) {
        setText((prevData) => {
            return { ...prevData, [event.target.name]: event.target.value };
        });
    }

    function generateImage() {
        newArr = Memes.data.memes.filter((x) => {
            return x.box_count === 2;
        });
        setRand(Math.floor(Math.random() * newArr.length));
        setShowImage(true);
    }
    const [rand, setRand] = useState(0);
    const [showImage, setShowImage] = useState(false);
    return (
        <div className="App">
            <Header />
            <div className="m-auto w-[700px]">
                <Form
                    fillForm={fillForm}
                    generate={(e) => {
                        e.preventDefault();
                        generateImage();
                    }}
                />
                {showImage ? (
                    <div className="relative">
                        <img
                            className="w-[100%] m-auto"
                            src={newArr[rand].url}
                        />

                        <p className="meme--text top-0">{text.topText}</p>
                        <p className="meme--text bottom-0">{text.bottomText}</p>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default App;
