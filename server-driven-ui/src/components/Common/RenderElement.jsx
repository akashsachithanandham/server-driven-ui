import { Fragment } from "react";

import DoctorCard from "../DoctorCard";
import Footer from "../Footer";
import FilterComponent from "../Filters";
import InfoComponent from "../Info";
import Navigation from "../Navigation";

import contentGenerator from "../../helpers/contentGenerator";

const RenderElement = props => {
  const { sections, section_id } = props;

  return (
    <Fragment>
      {
        sections.map((item, index) => {
          const { id, section: { id: card_type, content, modifiers, interactions } } = item;
          const { on_press, on_view } = interactions || {};

          if (id === section_id) {
            const new_content = contentGenerator({ modifiers, content });

            switch (card_type) {
              case 'card_1':
                return (
                  <DoctorCard
                    key={`${index}+${id}`}
                    id={id}
                    content={new_content}
                    interaction_props={on_press}
                    view_props={on_view}
                  />
                )

              case 'navigation':
                return (
                  <Navigation
                    key={`${index}+${id}`}
                    content={new_content}
                    interaction_props={on_press}
                    view_props={on_view}
                  />
                )

              case 'filter_1':
                return (
                  <FilterComponent
                    key={`${index}+${id}`}
                    content={new_content}
                    interaction_props={on_press}
                  />
                );

              case 'footer':
                return (
                  <Footer
                    key={`${index}+${id}`}
                  />
                );

              case 'info':
                return (
                  <InfoComponent
                    key={`${index}+${card_type}`}
                    content={new_content}
                  />
                );

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
