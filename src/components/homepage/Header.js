import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <div className="home-body">
      <p>
        Our Mission here at West Coast Cleft is to help care for and save any
        newborn puppy or kitten that is born with any congenital defects,
        special needs or is unable to be cared for.
      </p>
      <p>
        Cleft palate neonates along with other congenital defects REQUIRE around
        the clock supervision, orogastric tube feedings, elimination stimulation
        and specific husbandry demands. We are certified technicians that have
        been practicing in veterinary medicine since 2016, capable of taking in
        and providing the needed care along with supply any medical
        interventions as needed. Neonatal care is our passion.
      </p>
      <p>
        If you have a neonate that is in need of our care please contact us
        IMMEDIATELY either by phone/text{' '}
        <a href="tel:541-408-1777">541-408-1777</a> or email at
        <a href="mailto:westcoastcleft@gmail.com"> westcoastcleft@gmail.com</a>.
      </p>
      <Link to="/about" className="button">
        Learn More
      </Link>
    </div>
  );
};

export default Header;
