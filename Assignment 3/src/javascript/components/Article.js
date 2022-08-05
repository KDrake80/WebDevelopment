import React from 'react';
import MyImage from 'C:/Users/kevin/ReactProjects/react1/src/ReactSS.png'
const Article = () => {
  return (
    <article>
        <ol>
            <h1>JavaScript Files</h1>
            <li><h3>App.js</h3></li>
            <li><h3>Article.js</h3></li>
            <li><h3>Footer.js</h3></li>
            <li><h3>Header.js</h3></li>
            <li><h3>Section.js</h3></li>
        </ol>
        <ol>
            <h1>CSS File</h1>
            <h4>(Main CSS File)</h4>
            <li><h3>index.css</h3></li>
        </ol>
        <ol>
        <h1>Other Files</h1>
        <h4>(Main File)</h4>
          <li><h3>Index.js</h3></li>
          <h4>(Image File)</h4>
          <li><h3>ReactSS.png</h3></li>
        </ol>
        <img className='image'
        src={MyImage} 
        alt="Invalid"
        height={500}
        width={500}
        ></img>
    </article>
  )
}

export default Article