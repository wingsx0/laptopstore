import React from "react";
import Slider from "react-slick";
import Card from "../card/Card";

const AdminList = ({ title }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };
  return (
    <div className="mb-[40px]">
      <h3 className="mb-3 text-lg font-semibold">{title}</h3>
      <div className="list-card">
        <Slider {...settings}>
          {/* <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card> */}
        </Slider>
      </div>
    </div>
  );
};

export default AdminList;
