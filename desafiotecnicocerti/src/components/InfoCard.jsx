import React from "react";
import PropTypes from "prop-types";

class InfoCard extends React.Component {
    render() {
        const { image, name } = this.props;
        return (
          <section 
            className="h-[10rem] w-[12rem] border border-brand-lightDark bg-brand-lightDark hover:bg-brand-secondary hover:border-brand-secondary hover:cursor-pointer"
          >
            <img src={image} alt={`Imagem do ${name}`} className="h-[8rem] w-full" />
            <h4 className="text-center">{name}</h4>
          </section>
        );
    }
}

InfoCard.proptype = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default InfoCard