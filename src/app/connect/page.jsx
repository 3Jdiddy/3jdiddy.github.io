import ConnectPic from '@/components/connectPic/ConnectPic';
import HomePic from '@/components/homePic/HomePic';
import LeftGlass from '@/components/leftGlass/LeftGlass';
import RightGlass from '@/components/rightGlass/RightGlass';
import TextBox from '@/components/textBox/TextBox';
import Image from 'next/image'

const Connect = () => {
  return (
    <div className='container'>
      <div className="page-container-top">
        <ConnectPic/>
        <div class="img-text-about">
          Connect
        </div>
      </div>
      <div className="page-container-bottom">
        <LeftGlass/>
        <div>
          <div className="textBox-container">
            <TextBox
            title={"Office Hours"}
            description={"Monday through Thursday, 11 to 2:00"}
            width={"16vw"}
            height={"20vw"}
            />
             <TextBox
            title={"Reach us by mail"}
            description={"Second Congregational Church of Newcastle P.O. Box 243 Newcastle, ME 04553"}
            width={"20vw"}
            height={"20vw"}
            />
            <TextBox
            title={"Contact Office Administrator"}
            description={"Call 207-563-3379, ext. 10 Email office@secondcongo.org"}
            width={"22vw"}
            height={"20vw"}
            />
          </div>
          <div className="textBox-container2">
            <TextBox
            title={"Contact Pastor Oscar Wallace"}
            description={"Reach him at church: 207-563-3379, ext. 11 Call his cell: 508-207-3537 Email oscar.wallace@gmail.com Oscar's office hours are Tuesday 10-2:00, Wednesday 8:30-12:30, and Thursday 12-4:00 If you would like a visit or know of someone who needs pastoral care, please let Oscar know. If you need pastoral care on Friday or Saturday, it is best to call Pastor Oscar's cell number directly, as he is often outside and away from his computer these days. Note: Call 911 if it's a life-threatening matter."}
            width={"36vw"}
            height={"28vw"}
            link={"/"}
            />
            <TextBox
            title={"Stay in Touch"}
            description={"The best way to be stay current with us is to subscribe to our weekly e-mail, the “SECOND Snippets.” The Snippets highlight what’s happening this week and in the near future. To be added to our email list, send an e-mail to the Snippets editor.We will not share your email, ever, and you may unsubscribe at any time."}
            width={"24vw"}
            height={"28vw"}
            />
          </div>
        </div>
        <RightGlass/>
      </div>
    </div>
  )
};

export default Connect;