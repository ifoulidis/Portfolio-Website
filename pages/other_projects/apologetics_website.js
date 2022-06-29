import NavigationBar from '../../components/navbar'

export default function ApologeticWebsite() {
  return (
    <div className="container">
      <NavigationBar/>
      <div>
        <div id="content">
          <h2 id="projectTitle">Apologetics Website</h2>
          <br/>
          <h5>Skills Shown</h5>
          <ul>
            <li>Use of custom components.</li>
            <li>Creation of an adaptive UI with custom CSS.</li>
            <li>Handling user input as JS objects.</li>
            <li>Understanding of React state and functional components.</li>
            <li>Knowledge of built-in Next.js components.</li>
            <li>Use of framer-motion animations.</li>
            <li>Deployment, debugging, and testing.</li>
          </ul>
          <h5>Github Link</h5>
          <p><a href='https://github.com/ifoulidis/systematic_apologetics' className='inTextLinks'>https://github.com/ifoulidis/systematic_apologetics</a></p>
          <h5>Summary</h5>
          <p><br/>Using Next.js, mostly custom CSS, some React Bootstrap, and framer-motion, I created an apologetics website. It features quizzes I made the functionality for from scratch in JS. I am still filling out the content and will be making changes, but it showcases some of my skills with web development nonetheless.</p>
          <p>The main quiz asks the user critical questions that have logically inescapable answers. If the user selects certain responses, brief explanations are provided as to why that position is logicaly untenable or what they may wish to investigate next. Links are provided to full articles on the site and to outside resources.</p>
          <p>To see it, click <a href="https://whatistruth.vercel.app/" className='inTextLinks'>this link</a> or go to https://whatistruth.vercel.app/</p>
        </div>
      </div>
    </div>
  )
}