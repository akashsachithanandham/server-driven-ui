import { Fragment } from "react";
import contentGenerator from "../../helpers/contnetGenerator";
import DoctorCard from "../DoctorCard";

const RenderElement = props => {
  const { sections, section_id } = props;

  return (
    <Fragment>
      {
        sections.map((item, index) => {
          const { id, section: { id: card_type, content, modifiers, interactions } } = item;
          const { on_press } = interactions || {};

          if (id === section_id) {
            switch (card_type) {
              case 'card_1':
                const new_content = contentGenerator({ modifiers, content })
                return (
                  <DoctorCard
                    key={`${index}+${card_type}`}
                    content={new_content}
                    interaction_props={on_press}
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