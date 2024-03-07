import HomePic from '@/components/homePic/HomePic';
import LeftGlass from '@/components/leftGlass/LeftGlass';
import RightGlass from '@/components/rightGlass/RightGlass';
import TextBox from '@/components/textBox/TextBox';
import Image from 'next/image'

const Home = () => {
  return (
    <div className='container'>
      <div className="page-container-top">
        <HomePic/>
        <div class="img-text">
          <h3>Whoever you are,</h3>
          <h4>wherever you are on life`s journey, you are</h4>
          <h2>welcome here!</h2>
        </div>
      </div>
      <div className="page-container-bottom">
        <LeftGlass/>
        <div>
          <div className="textBox-container">
            <TextBox
            title={"Our statement of purpose:"}
            description={"We welcome all into the fellowship of this beloved community of worshippers gathered by God in Christ, as we walk together, nurturing our inward spiritual journey of faith and living our outward spiritual journey by practicing love and justice in our communities and the world."}
            width={"32vw"}
            height={"20vw"}
            />
            <TextBox
            title={"Opprotunities for Fellowship"}
            description={"In addition to worship, there are myriad ways to participate in and contribute to the life of Second Congregational. Including lectionary studies, mission projects, women's fellowship, and more."}
            width={"28vw"}
            height={"20vw"}
            />
          </div>
          <div className="textBox-container2">
            <TextBox
            title={"Worship Service ─ Sundays at 10:00 AM"}
            description={"We are gathering in-person in the sanctuary every Sunday. The service also is live-streamed on Youtube. We hope that you'll join us for worship at 10:00 a.m. on Sunday Mornings. To watch on Facebook Live: Go to Second Congo's Facebook Page a bit before 10 AM on Sunday mornings and look for the Live Stream. Please note that currently the chat/comment functions may not be monitored during the live service, so we encourage you to submit your prayer requests prior to Sunday mornings by email at pastor@secondcongo.org. To watch on YouTube: Go to Second Congo's YouTube Channel and look for the LIVE banner. Recordings of previous services are available hereWith all that, please worship with Second Congregational Church in Newcastle, Maine in any way that works for you. All are welcome! Holy Communion is celebrated on the first Sunday of each month. All are welcome to participate in this sacrament."}
            width={"63vw"}
            height={"28vw"}
            link={"/"}
            />
          </div>
        </div>
        <RightGlass/>
      </div>
    </div>
  )
};

export default Home;

 