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
        <h2>Who we are</h2>
         <Image src="/about.png" alt="" width={578} height={288}/>
         <h2>Our statement of purpose:</h2>
         <p>We welcome all into the fellowship of this beloved community of worshippers gathered by God in Christ, as we walk together, nurturing our inward spiritual journey of faith and living our outward spiritual journey by practicing love and justice in our communities and the world.</p>
         <h2>Open and Affirming</h2>
         <p>In June 2011, the congregation voted to accept the UCC designation of an Open and Affirming (ONA) church with the following resolution:</p>
         <p>In the spirit of Jesus' great commandment to love God and our neighbors as ourselves, we affirm all people as children of God. We welcome all who seek to follow Jesus, including persons of every age, economic and social status, education background, faith background, gender identity and expression, marital status and family structure, mental or physical ability, nationality or national origin, race or ethnic identity, and sexual orientation, to share in the full life, leadership, and ministry of our church family. We embrace the God-given gifts that each person brings to the life of our congregation as we grow together in faith, love and service.</p>
        </div>
        
    </div>
         {children}
    </div>
   )
}

export default AboutLayout;