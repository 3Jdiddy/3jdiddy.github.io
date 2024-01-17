import Image from "next/image";

const Faith = () => {
   return (
      <div className='container'>
      <div className="text-container">
        <h2>Faith & Worship</h2>
        <h3>Come worship with us!</h3>
        <p>Sunday worship service takes place at 10:00 am. Communion is celebrated on the first Sunday of every month.</p>
        <Image src="/glass.jpg" alt="" width={264} height={176}/>
      </div>
      <div className="text-container">
        <h2>Worship Service ─ Sundays at 10:00 AM</h2>
        <p>We are gathering in-person in the sanctuary every Sunday.  The service also is live-streamed via  Facebook (and does not require you to have a Facebook account).  We hope that you'll join us for worship at 10:00 a.m. on Sunday Mornings.</p>
        <p>To watch on Facebook Live: Go to Second Congo's Facebook Page a bit before 10 AM on Sunday mornings and look for the Live Stream. Please note that currently the chat/comment functions may not be monitored during the live service, so we encourage you to submit your prayer requests prior to Sunday mornings by email at pastor@secondcongo.org.</p>
        <p>To watch on YouTube: Go to Second Congo's YouTube Channel and look for the LIVE banner.</p>
        <a href="https://www.youtube.com/channel/UC80LjlpCDqFawmDOuk7XX0w">
        <Image src="/yt.png" alt="" width={64} height={44}/>
        </a>
      </div>
    </div>
   )
};

export default Faith;