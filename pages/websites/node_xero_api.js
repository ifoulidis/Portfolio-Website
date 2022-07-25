import NavigationBar from '../../components/navbar'

export default function NodeXeroAPI() {
  return (
    <div>
      <NavigationBar page='projects'/>
      <div className="container">
        <div>
          <div id="content">
            <a href="https://whatistruth.vercel.app/" className='inTextLinks'><h2 id="projectTitle">Node Xero API</h2></a>
            <br/>
            <h5>Skills Shown</h5>
            <ul>
              <li>Use of the latest version of Node.js.</li>
              <li>Use of TypeScript.</li>
              <li>The ability to learn directly from documentation.</li>
            </ul>
            <h5>Summary</h5>
            <p><br/>The site will be live in August, at which time I will provide a link.</p>
            <p>I was given the opportunity to work on the API for a car sales company&#39;s website. The owner 
              wanted to integrate Xero (accounting software) with the sales made on the website. After reading 
              Xero&#39;s Node documentation and looking at a couple of their example applications, I was able to 
              discern what I had to do. 
            </p>
            <p>The API emails the customer a copy of her/her invoice, updates the owner&#39;s Xero database, etc.</p>
          </div>
        </div>
      </div>
    </div>
  )
}