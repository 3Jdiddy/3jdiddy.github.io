import AboutPic from '@/components/aboutPic/AboutPic';
import LeftGlass2 from '@/components/leftGlass2/LeftGlass2';
import RightGlass2 from '@/components/rightGlass2/RightGlass2';
import TextBox from '@/components/textBox/TextBox';

const About = () => {
  return (
    <div className='container'>
      <div className="page-container-top">
        <AboutPic/>
        <div class="img-text-about">
          About
        </div>
      </div>
      <div className="page-container-bottom">
        <LeftGlass2/>
        <div>
          <div className="textBox-container">
            <TextBox
            title={"Leadership"}
            description={"In addition to worship, there are myriad ways to participate in and contribute to the life of Second Congregational. Including lectionary studies, mission projects, women's fellowship, and more."}
            width={"32vw"}
            height={"20vw"}
            />
            <TextBox
            title={"History"}
            description={"Known for a time as the Damariscotta Congregational Church in Newcastle, the Second Congregational Church was served by a number of pastors over the years. On occasion a touch of the “modern liberal spirit” characterized the pastorate."}
            width={"28vw"}
            height={"20vw"}
            />
          </div>
          <div className="textBox-container2">
            <TextBox
            title={"Open and Affirming"}
            description={"In June 2011, the congregation voted to accept the UCC designation of an Open and Affirming (ONA) church with the following resolution: \nIn the spirit of Jesus' great commandment to love God and our neighbors as ourselves, we affirm all people as children of God. We welcome all who seek to follow Jesus, including persons of every age, economic and social status, education background, faith background, gender identity and expression, marital status and family structure, mental or physical ability, nationality or national origin, race or ethnic identity, and sexual orientation, to share in the full life, leadership, and ministry of our church family. We embrace the God-given gifts that each person brings to the life of our congregation as we grow together in faith, love and service."}
            width={"63vw"}
            height={"28vw"}
            link={"/"}
            />
          </div>
        </div>
        <RightGlass2/>
      </div>
    </div>
  )
};

export default About;

 