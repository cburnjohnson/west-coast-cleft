import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage = () => (
  <Layout>
    <SEO title="About Us" />
    <div className="about-body">
      <h1 className="about-title">About Us</h1>
      <p>
        Sweet baby Georgia was the start of our passion for cleft palate care
        and trying to give the special neonates a fighting chance at life. She
        was brought to my clinic by her owner at only a few hours old and faced
        the grim fate of euthanasia. Like Georgia, many puppies and kittens born
        with genetic mishaps are put to sleep immediately because of the
        extensive care and unevitable veterinary expenses that come along with
        their diagnosis. Most veterinarians will recommend euthanasia because of
        poor prognosis’ and mortality rate.
      </p>
      <p>We are offering these babies a chance at life.</p>
      <div className="about-img-container">
        <StaticImage
          src="./images/about/about-1.jpg"
          width={600}
          quality={95}
          formats={['AUTO', 'WEBP', 'AVIF']}
          style={{
            position: 'absolute',
            bottom: 0,
            zIndex: -1,
          }}
          alt="Puppy held in a hand"
        />
        <StaticImage
          src="./images/about/about-1.jpg"
          width={600}
          quality={95}
          formats={['AUTO', 'WEBP', 'AVIF']}
          style={{
            position: 'absolute',
            bottom: 0,
            zIndex: -1,
          }}
          alt="Puppy held in a hand"
        />
        <StaticImage
          src="./images/about/about-1.jpg"
          width={600}
          quality={95}
          formats={['AUTO', 'WEBP', 'AVIF']}
          style={{
            position: 'absolute',
            bottom: 0,
            zIndex: -1,
          }}
          alt="Puppy held in a hand"
        />
      </div>
      <p>
        Due to high complication rate that requires medical intervention our
        team must have full rights to the animal.
      </p>
      <p>
        Once they are medically stable and have undergone any surgical
        corrections as needed, along with being spayed/neuteredand fully vetted,
        we would then find them a suitable and loving furever home. Our
        cofounder has worked in various shelter facilities along with our work
        through other local rescues and non profit organizations; thorough
        consideration will be completely prior to rehoming of all animals.
      </p>
      <p>
        Located in Central Oregon currently. As for transfer of animals we
        always hope for mutual commitment and willingness to travel. Please
        contact us so we can further discuss options.
      </p>
    </div>
  </Layout>
);

export default SecondPage;
