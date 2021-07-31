import { Fragment } from "react";
import contentGenerator from "../../helpers/contnetGenerator";
import DoctorCard from "../DoctorCard";

const RenderElement = props => {
  const { sections, section_id } = props;

  return (
    <Fragment>
      {
        sections.map((item, index) => {
          const { id, section: { id: card_type, content, modifiers } } = item;

          if (id === section_id) {
            switch (card_type) {
              case 'card_1':
                const new_content = contentGenerator({ modifiers,content})
                return (
                  <DoctorCard
                    key={`${index}+${card_type}`}
                    content={new_content}
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