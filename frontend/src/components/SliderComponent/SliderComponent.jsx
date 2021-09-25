/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from 'prop-types';
import Slider from "react-slick";
import { sliderCss } from "./SliderComponent.styles"

const SliderComponent = ({initialSlide,infinite, children }) => {
  return (
    <Slider
      initialSlide={initialSlide}
      infinite={infinite}
      lazyLoad="ondemand"
      css={sliderCss}
    >
        {children}
    </Slider>
  );
};

SliderComponent.propTypes = {
  initialSlide: PropTypes.number,
  infinite:PropTypes.bool
};

SliderComponent.defaultProps = {
  initialSlide: 0,
  infinite: false,
};

export default SliderComponent
