import React from "react";
import Image from "next/image";
import img7 from "../public/unsplash_FHnnjk1Yj7Y.png";
import img8 from "../public/Vector (8).png";

function course_details() {
  return (
    <div>
      <div className="img_con"></div>
      <div className="row  main_course_details m-0">
        <div className="col-4 bg-light p-0">
          <h1 className="heding_text_tally">
            <b>Tally </b>
          </h1>
          <h1 className="heding_text_Workshop">Workshop</h1>
          <div className="p-0 p-sm-4">
            <p className="heding_tex_we">We Offer You </p>
            <p className="heding_tex_we_sub">Online Class</p>
            <p className="heding_tex_we_sub">Group Classes</p>
            <p className="heding_tex_we_sub">One to One Teaching</p>
            <p className="heding_tex_we_sub">Experienced Faculty</p>
          </div>
        </div>
        <div className="col-4 p-0">
          <div className="back">{/* <Image src={img7} alt="" /> */}</div>
        </div>
        <div className="col-4 bg-dark p-0 pt-5">
          <div className="book_div mx-auto mt-5">
            <Image src={img8} />
          </div>
          <h4 className="text-center text-light pt-3"><b>About the course</b></h4>
          <p className="text-light heding_tex_we_sub py-2">
            About the course Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed fermentum in consectetur amet lacus sit gravida.
            Pellentesque odio amet convallis orci, in eget. Et suspendisse
            pretium habitant viverra. Habitasse pharetra est eu, accumsan. Velit
            quis nunc praesent pellentesque. Nec nulla sit id in at hac nisl
            ultricies faucibus. Lorem arcu venenatis nunc, suspendisse purus
            massa id.
          </p>
        </div>
      </div>
    </div>
  );
}

export default course_details;
