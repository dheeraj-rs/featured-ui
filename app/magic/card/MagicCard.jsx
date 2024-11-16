'use client';

import { gridItems } from './data';
import { Gridcard, GridcardItem } from './Gridcard';

const MagicCard = () => {
  return (
    <section id="about">
      <Gridcard className="w-full py-20">
        {gridItems.map((item, i) => (
          <GridcardItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </Gridcard>
    </section>
  );
};

export default MagicCard;
