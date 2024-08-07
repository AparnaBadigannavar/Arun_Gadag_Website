import React from 'react'
import './homePage.css'
import MainContentInAllPage from '../../commoncomp/Hamburger/headLinesWithLogo'
import law1 from '../../images/law1.jpg';
import law2 from '../../images/law2.jpg';

import law3 from '../../images/law3.jpg';
import law4 from '../../images/law5.jpg';

import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/gallery');
  };
  return (
    <div >
         <div>
            <MainContentInAllPage/>
            <section className="about-advocate">
                    <h2>About Advocate</h2>
                    <p>
                    The Individual Firm/ Advocate office started by Arun A. Gadag in the year 2014 under the precious guidance of: Sri. Ashok. S. Gadag,, (Mentor : Chamber Practise) B.Com. LL.B. Retd. District & Sessions Judge. having been a member of the judiciary has extensive experience and knowledge, of over 30 years. He being an ex-member of the Judiciary has a very sound understanding of the intricacies involved in litigation, especially in civil and criminal areas of dispute resolution. Having served the Judiciary most efficiently, diligently and honestly, he derives his expertise from having resolved several intricate matters involving various complicated issues and intricacies involved in the vast number of cases wherein he has rendered his judgement, including matters involving banking, insurance, and malpractice issues, land disputes, matrimonial issues, commercial transactions, international trade, construction and environmental law,  employment, debt collection, criminal law, arbitration and mediation. 
                    </p>
                    <p>
                    responsible for the numerous cases, Civil & Criminal in nature, before various Trail Court’s/ Court of First Instance/ Preliminary Courts, and the different Consumer Forums - Commissions, Magistrate Courts in Bangalore. Mr. Arun Gadag has a vast experience Having worked on several cases, Civil & Criminal in nature, and having ably represented various clients, to their satisfaction. I believe in the premise ‘Hard work is never in vain’ and that ‘Time is most important ingredient in the recipe of success’. I too firmly believe that ‘Timely action and addressing of grievances is primary function of an able Advocate’ and believe in the premise that ‘The best of efforts may sometimes be futile if they are not combined with wit and eloquence’.
                    </p>
                  
                </section>
                <section className="about-advocate">
                <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Donec auctor, nisl eget consectetur sagittis, nisl urna consectetur elit, eget consectetur nisi nisl eget nisi. 
                        Suspendisse potenti. Quisque at condimentum dolor. Etiam bibendum, urna eu vehicula luctus, justo erat venenatis justo, 
                        eget venenatis lacus ligula non odio. Duis ut tincidunt felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Morbi dictum nisi et enim consectetur, eget consectetur nisl interdum. Donec euismod, nisl eget consectetur ultricies, nisl urna vestibulum nisi, 
                        eget vestibulum lacus nisl eget nisi. Curabitur euismod, nisl et ultricies lobortis, nisl turpis vestibulum nunc, et vestibulum nunc turpis eget urna.
                    </p>
                  </section>

                  <section className="about-services">
                  <p>
                <ul>
                      <li><b>Legal Consultation</b>
                  <ul>
                      <li>Providing advice on legal matters</li>
                      <li>Explaining rights and obligations under the law</li>
                      <li>Offering guidance on legal procedures</li>
                  </ul>
                     </li>
                     <li><b>Litigation</b>
                       <ul>
                        <li>Representing clients in court</li>
                        <li>Preparing and filing legal documents</li>
                       <li>Presenting evidence and arguments in legal proceedings</li>
                      </ul>
                    </li>
                    <li><b>Contract Drafting and Review</b>
                     <ul>
                      <li>Drafting legal contracts and agreements</li>
                     <li>Reviewing and advising on the terms of contracts</li>
                     <li>Negotiating contract terms on behalf of clients</li>
                     </ul>
                    </li>
                    <li><b>Alternative Dispute Resolution (ADR)</b>
                      <ul>
                       <li>Mediating disputes between parties</li>
                       <li>Representing clients in arbitration proceedings</li>
                       <li>Facilitating negotiations to reach settlements</li>
                     </ul>
                     </li>
                    <li><b>Corporate and Commercial Law</b>
                     <ul>
                       <li>Advising on business formation and structuring</li>
                      <li>Assisting with mergers and acquisitions</li>
                      <li>Providing counsel on compliance with corporate laws and regulations</li>
                     </ul>
                      </li>
                 </ul>

                    </p>
                  </section>
                  
                  <section className="about-advocate">
                  <h2>Gallery</h2>
                  <div >
                    <div style={{display:'flex'}}>
                  {[law1,law2,law4,law3].map((item)=>{
                    return(
                      <div className="card">
                    
                      <img src={item} alt="veer"></img>
                      </div>
                    )
                    })}
                    </div>
                    <div style={{textAlign:'center'}}>
                    <button 
                   className="button" 
                    onClick={()=>{
                      handleClick() 
                    }}
                    >View More</button>
                    </div>
                    </div>
                  </section>

        </div>
    </div>
  )
}

export default Home