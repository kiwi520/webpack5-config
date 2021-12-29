import "../styles/index.scss"
import React from 'react';

function App(props) {
    return (
            <>
                <section className={'hero'}></section>
                <main>
                    <section>
                        <h1>Oh Hai, React</h1>
                    </section>
                    <img width={"100px"} height={'100px'} src={require("../images/33333.png")} alt=""/>
                </main>
            </>
    );
}

export default App;
