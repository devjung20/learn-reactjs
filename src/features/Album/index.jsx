import React from "react";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature() {
  const albumList = [
    {
      id: 1,
      name: "Nhạc Cho Thứ Năm",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/e/1/d/9e1daa003fb017ca6feb96bb7187cbbd.jpg",
    },
    {
      id: 2,
      name: "Gác Lại Âu Lo",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/8/a/0/b8a05498bbfd20dca9280c3e980ff04a.jpg",
    },
    {
      id: 3,
      name: "Reamake Việt",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/9/9/b/299b3bebd737858cda05688328b45f08.jpg",
    },
  ];

  return (
    <div>
      <h2>Giai Điệu Ký Ức</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
