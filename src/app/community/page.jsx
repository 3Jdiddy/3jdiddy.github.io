import CommunityPic from '@/components/communityPic/CommunityPic';
import ConnectPic from '@/components/connectPic/ConnectPic';
import HomePic from '@/components/homePic/HomePic';
import LeftGlass from '@/components/leftGlass/LeftGlass';
import RightGlass from '@/components/rightGlass/RightGlass';
import TextBox from '@/components/textBox/TextBox';
import Image from 'next/image'

const Community = () => {
  return (
    <div className='container'>
      <div className="page-container-top">
        <CommunityPic/>
        <div class="img-text-about">
          Community
        </div>
      </div>
      <div className="page-container-bottom">
        <LeftGlass/>
        <div>
          <div className="textBox-container">
            <TextBox
            title={"Music & Arts"}
            description={"Music is a vital ministry of Second Congregational. Worship services feature a diverse selection of choral, organ and instrumental music of different styles and periods. The Chancel Choir, a 1902 Hutchings-Votey organ, a Steinway grand piano, and four octaves of handbells add joyously to our worship experience."}
            width={"36vw"}
            height={"20vw"}
            />
            <TextBox
            title={"Lectionary Bible Study"}
            description={"Wednesdays at 9:00 in the parlor. You are invited to a weekly lectionary-based Bible Study with Reverend Wallace."}
            width={"24vw"}
            height={"20vw"}
            />
          </div>
          <div className="textBox-container2">
            <TextBox
            title={"Outreach"}
            description={"In 2021, two grants were made from the John Andrews Outreach Fund:  $10,000 was disbursed to the ElderCare Network of Lincoln County to help pay for replacement flooring at Hodgdon Green;  $5,040 was disbursed to the Inn Along The Way to pay for flooring in the two respite rooms. Information regarding the application process and related forms is provided through links below. John Andrews was a long time church member who lived simply, saved his money and bequeathed half of his estate to our church.  He and his family provided low income housing on their property in Damariscotta, which now is part of the nonprofit Stepping Stone Housing, Inc."}
            width={"44vw"}
            height={"28vw"}
            link={"/"}
            />
            <TextBox
            title={"Join us for Coffee Hour"}
            description={"We invite you to stop into the Fellowship Hall downstairs after the worship service for some refreshment and social time!"}
            width={"16vw"}
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

export default Community;