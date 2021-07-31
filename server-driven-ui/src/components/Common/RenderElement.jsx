import { Fragment } from "react";
import DoctorCard from "../DoctorCard";

const RenderElement = props => {
  const { sections, section_id } = props;

  return (
    <Fragment>
      {
        sections.map((item, index) => {
          const { id, section: { id: card_type, content } } = item;

          if (id === section_id) {
            switch (card_type) {
              case 'card_1':
                return (
                  <DoctorCard
                    key={`${index}+${card_type}`}
                    content={content}
                  />
                )

              default:
                return null;
            }
          }
          return null;
        })
      }
    </Fragment>
  )
}

export default RenderElement;