import { BentoGrid, BentoGridItem } from './BentoGrid';
import { gridItems } from './data';

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full p-3 md:p-8">
        {gridItems.map((item, i) => (
          <BentoGridItem
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
      </BentoGrid>
    </section>
  );
};

export default Grid;
