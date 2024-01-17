import Image from 'next/image'

const AboutLayout = ({children}) => {
   return (
    <div className='container'>
      <div className='sub-container'>
        <div className='text-container'>
        <h2>Who we are</h2>
         <Image src="/about.png" alt="" width={578} height={288}/>
         <h2>Our statement of purpose:</h2>
         <p>We welcome all into the fellowship of this beloved community of worshippers gathered by God in Christ, as we walk together, nurturing our inward spiritual journey of faith and living our outward spiritual journey by practicing love and justice in our communities and the world.</p>
         <h2>Open and Affirming</h2>
         <p>In June 2011, the congregation voted to accept the UCC designation of an Open and Affirming (ONA) church with the following resolution:</p>
         <p>In the spirit of Jesus' great commandment to love God and our neighbors as ourselves, we affirm all people as children of God. We welcome all who seek to follow Jesus, including persons of every age, economic and social status, education background, faith background, gender identity and expression, marital status and family structure, mental or physical ability, nationality or national origin, race or ethnic identity, and sexual orientation, to share in the full life, leadership, and ministry of our church family. We embrace the God-given gifts that each person brings to the life of our congregation as we grow together in faith, love and service.</p>
        </div>
        <div className='text-container'>
        <h2>Governance</h2>
         <h4>Governance Documents</h4>
         <p>Second Congregational is governed by the Church Assembly which is comprised of:  Officers;  A representative from each Service Team;  And three Members at Large. The governance structure and people serving is available here, "ReImagine Leadership as of 21 June 2019."</p>
         <p>The church Constitution was updated as of the annual meeting in February, 2020, and the church Bylaws was updated as of the annual meeting in February 2021.</p>
         <h3>Constitution Approved 2/23/2020</h3>
         <p>Click on the link above to open a PDF document of our Interim Constitution, which describes our purpose, covenant, and doctrine, as well as the structure of the Church and how it is governed. The  updated Constitution was approved on February 23, 2020.</p>
         <h3>Bylaws Approved 2/28/2021</h3>
         <p>Click on the link above to open a PDF document of our Bylaws, which are complimentary to the Constitution and outline how the Church conducts its business.  The Bylaws were approved on February 28, 2021.</p>
         <h3>Safe Church Policy Amended 1/28/2018 (Originally Approved 1/25/2015)</h3>
         <p>The Safe Church Policy has been amended to include an application form specifically for youth employees or volunteers (age 18 and under).</p>
        </div>
        
    </div>
         {children}
    </div>
   )
}

export default AboutLayout;