import React from "react";
import profilePicture from "../../../static/assets/images/bio/armscrossed.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      <div className="right-column">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nisl suscipit
        adipiscing bibendum est ultricies integer. Pharetra convallis posuere
        morbi leo urna. Porta non pulvinar neque laoreet suspendisse interdum
        consectetur. Tristique risus nec feugiat in. Vulputate enim nulla
        aliquet porttitor lacus luctus accumsan tortor posuere. Dolor purus non
        enim praesent elementum facilisis. Lorem ipsum dolor sit amet
        consectetur. Diam volutpat commodo sed egestas egestas fringilla
        phasellus. Dui ut ornare lectus sit amet est placerat. Dignissim
        convallis aenean et tortor at risus viverra adipiscing. Viverra orci
        sagittis eu volutpat odio facilisis mauris. Quam id leo in vitae turpis.
        Eget mauris pharetra et ultrices neque. Vel elit scelerisque mauris
        pellentesque pulvinar pellentesque habitant. Sed enim ut sem viverra.
        Orci sagittis eu volutpat odio facilisis mauris. Urna et pharetra
        pharetra massa. Et netus et malesuada fames. Nullam eget felis ege
      </div>
    </div>
  );
}
