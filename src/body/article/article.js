import "./article.css"


function Article (){
    return (
    <article>
        <div className="cards">
            <div className="card" title="this a new article about kafteji">
            <img src="../image/kafteji.jpg"/>
            <p>kafteji is a Tunisian dish that i love personnely , <abbr title="as soon as possible">asap</abbr> it conteins ...... read more </p>

            <button class="button-81" role="button">Read More</button>
            </div>
            <div className="card">
            <img src="../image/kafteji.jpg"/>
            <p>kafteji is a Tunisian dish that i love personnely , it conteins ...... read more </p>
            <button class="button-81" role="button">Read More</button>
            </div>
            <div className="card">
            <img src="../image/kafteji.jpg"/>
            <p>kafteji is a Tunisian dish that i love personnely , it conteins ...... read more </p>
            <button class="button-81" role="button">Read More</button>
            </div>
            <div className="card">
            <img src="../image/kafteji.jpg"/>
            <p>kafteji is a Tunisian dish that i love personnely , it conteins ...... read more </p>
            <button class="button-81" role="button">Read More</button>
            </div>

        </div>
    </article>);
}

export default Article 