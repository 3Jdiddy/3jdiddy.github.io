import Image from "next/image";

const Faith = () => {
   return (
      <div className='container'>
      <div className="text-container">
        <h2>Faith & Worship</h2>
        <h3>Come worship with us!</h3>
        <p>Sunday worship service takes place at 10:00 am. Communion is celebrated on the first Sunday of every month.</p>
        <h3>New to Second Congo?</h3>
        <p>New members and visitors are always welcome! Please be sure to sign our guest book in the narthex and ask Pastor Char Corbett about our New Member class. You may also e-mail Pastor Char at pastor@secondcongo.org.</p>
        {/* <Image src="/glass.jpg" alt="" width={264} height={176}/> */}
        <h3>Youth & Families</h3>
        <p>Nursery care for infants/children ages 0 to 5 is provided every Sunday.There are mixed-age Sunday school classes available or Childcare during the worship service throughout the school year for children and youth. A “Time for Young at Heart” (children`s sermon) blesses all ages during the worship service. In the summer, volunteers provide crafts, games and activities for kids in kindergarten through 5th grade.</p>
        <h3>Accessibility</h3>
        <p>Second Congo wants to be sure that anyone and everyone may participate in worship to the extent that they are able. The following accommodations are available:</p>
        <p>- Wheelchair and companion space in the pews
An elevator from the parking area, with someone to assist you
Handicap parking spaces
Large-print bulletins
Hearing assistance
Recordings of the service, either in DVD or CD (audio only) format
Service of communion at home</p>
      </div>
    </div>
   )
};

export default Faith;