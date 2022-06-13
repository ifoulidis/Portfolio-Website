import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import NavigationBar from '../../components/navbar'

export default function UFC_Data_Science() {
  return (
    <div className="container">
      <NavigationBar/>
      <div id="content">
        <h2 id="projectTitle">UFC Data Analysis</h2>
        <br/>
        <h5>Skills Shown</h5>
        <ul>
          <li>Problem solving with real, slightly messy data.</li>
          <li>Pursuing results that could have relevance in the real world.</li>
          <li>Clear understanding of the limitations of the analysis.</li>
          <li>The ability to use Pandas, numpy, matplotlib, etc.</li>
          <li>The ability to write efficient and clear Python code.</li>
        </ul>
        <h5>Summary</h5>
        <br/>
        <p>Due to a personal interest in mixed martial arts, I thought that analysing data on UFC fights could be fascinating. I found that height is actually a slight disadvantage statistically in MMA bouts, which is not overly surprising to me, but should be considered by commentators, gamblers, and coaches alike.</p>
        <p>To see the code, please see my <a href="https://github.com/ifoulidis?tab=repositories">GitHub page</a> or view it in a <Link href="/UFC_project_code.pdf"><a>PDF</a></Link>.</p>
        <p><br />The Ultimate Fighting Championship (UFC) is the premier mixed martial arts (MMA) organisation. Athletes typically use techniques kickboxing, wrestling, and Brazilian
          Jiu Jitsu (among other martial arts) to defeat their opponents. More information about mixed martial arts can be found in the <a >UFC&apos;s Introduction to MMA.</a></p>
        <p><br />The dataset used here was kindly gathered by Rajeev Warrier. <a href="https://www.kaggle.com/datasets/rajeevw/ufcdata">Click here </a>to see a description of the dataset.</p>
        
        <h4><br/>Utility Functions</h4>
        <p>First, I made a few simple functions to quickly retrieve information from the dataset. For instance, one function takes fighters&apos; names as input and returns the results of their fights, or that they have not fought (and it catches possible errors). I made a version of this function that would be suitable for use by a user in a web-app. If desired, using a Flask API and simple HTML, this function could return the results of all fights between two selected individuals.</p>
        <h4><br/>Findings</h4>
        <h5>Win Rate by Stance</h5>
        <p>The first investigation I performed (after some investigation of the dataset itself) was one comparing how well the various stances that can be used serve fighters. Given that in most weight classes, wrestling, if used, is more important than striking, I didn&apos;t expect the stance to have a massive impact; and I had also seen enough fights to know that it does not. That being said, it is well known that orthodox fighters tend to have a disadvantage against southpaws, since southpaws are rarer and thus have more practice against orthodox fighters than orthodox fighters do against southpaws, typically. I note some other factors in the markdown in the code.</p>
        <p>The win rates were as follows:</p>
        <p>Orthodox win rate: 46%<br/>Southpaw win rate: 52%<br/>Switch win rate: 57%<br/>Open stance win rate: 51%</p>
        <p>These results were not too surprising. The only real question for an MMA enthusiast is whether the switch stance fighters have an advantage because of their ability to switch stances, or because of another factor: They are generally seen as having a high skill level in striking, but confidence and a willingness to use more variety in one&apos;s approach are also related to using both stances regularly (nearly all fighters will occasionally use their weak stance, especially as leg damage mid-fight often forces this).</p>
        <p>&apos;Switch&apos; and &apos;open stance&apos; fighters are very rare in this dataset. There is pressure in many gyms to stick with one stance, rather than &apos;trying to be fancy&apos; by switching stances at will; but this is changing, and there is definitely also a trend of fighters learning to fight proficiently in both stances. Again, fighters who do have the confidence to switch stances as a matter of course are often very confident strikers, often for good reason. Finally, I will note that the UFC often does not label fighters who do in fact switch stances very often as switch-stance fighters, so the data are certainly not particularly accurate in this regard.</p>
        <p>I also created a function which can compare the effectiveness of fighters of any two stances against each other in general. It returns the win rates of both stances as a tuple. I return both because no contests are not wins for either party, so the win rates do not add up to 1.</p>
        <h5>Reach Advantage</h5>
        <p>The following results show the reach advantage that the winner had over the loser on average, for a given weight class. Note that there are negative values.</p>
        <p>Bantamweight: -0.58<br/>Middleweight: 0.59<br/>Heavyweight: 1.84<br/>WomenStrawweight: -0.92<br/>WomenBantamweight: 1.04<br/>Lightweight: 0.39<br/>Welterweight: 0.45<br/>Flyweight: -0.11<br/>LightHeavyweight: 1.8<br/>Featherweight: 0.47<br/>WomenFlyweight: 0.53<br/>WomenFeatherweight: 1.11<br/>CatchWeight: -0.07<br/>OpenWeight: No relevant data</p>
        <p>Although the data are incomplete and have some issues, the results are quite interesting, in that the mean difference is very small. The strength of the correlation and statistical significance are irrelevant, since the differences are so small anyway. <br/>What I thought would be interesting to do next is fine the average difference in reach for opponents of each weight class. The results were as follows:</p>
        <p>Bantamweight: 7.09<br/>Middleweight: 6.46<br/>Heavyweight: 8.28<br/>WomenStrawweight: 5.6<br/>WomenBantamweight: 5.55<br/>Lightweight: 5.93<br/>Welterweight: 6.42<br/>Flyweight: 5.25<br/>LightHeavyweight: 6.57<br/>Featherweight: 6.31<br/>WomenFlyweight: 6.49<br/>WomenFeatherweight: 6.51<br/>CatchWeight: 6.77<br/>OpenWeight: No relevant data</p>
        <p>The data show that the average reach difference for every weight class is substantial, of which I was already aware.<br/>I also checked whether any reach advantage at all related to win rate. The results were as follows:</p>
        <p>Bantamweight: 42.76%<br/>Middleweight: 46.94%<br/>Heavyweight: 51.22%<br/>WomenStrawweight: 35.23%<br/>WomenBantamweight: 46.51%<br/>Lightweight: 42.15%<br/>Welterweight: 44.01%<br/>Flyweight: 42.18%<br/>LightHeavyweight: 48.18%<br/>Featherweight: 44.78%<br/>WomenFlyweight: 42.59%<br/>WomenFeatherweight: 43.75%<br/>CatchWeight: 44.44%<br/>OpenWeight: No relevant data</p>
        <h5>Other Findings</h5>
        <p>There are yet more findings to see, so check out the <Link href="/UFC_project_code.pdf"><a>PDF</a></Link> if you are interested in this topic.</p>
      </div>
    </div>
  )
}
