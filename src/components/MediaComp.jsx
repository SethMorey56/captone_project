import React from 'react';
import { Media } from 'reactstrap';

const MediaComp = () => {
  return (
    <Media>
      <Media left href="#">
            <div className="media-player">
                <iframe width="1000" height="500" src="https://www.youtube.com/embed/X4Qm9cGRub0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
      </Media>
      <Media body>
        <Media heading>
          Media heading
        </Media>
        <p>Dr. Brené Brown is a researcher professor at the University of Houston, Graduate College of Social Work, where she has spent the past ten years studying a concept that she calls Wholeheartedness, posing the questions: How do we engage in our lives from a place of authenticity and worthiness? How do we cultivate the courage, compassion, and connection that we need to embrace our imperfections and to recognize that we are enough -- that we are worthy of love, belonging and joy? Brené is the author of I Thought It Was Just Me (but it isn't): Telling the Truth About Perfectionism, Inadequacy, and Power (2007) and the forthcoming books, The Gifts of Imperfection (2010) and Wholehearted: Spiritual Adventures in Falling Apart, Growing Up, and Finding Joy ( 2011).</p>
      </Media>
    </Media>
  );
};

export default MediaComp;