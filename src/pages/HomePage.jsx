import { useEffect } from "react";
import { Button } from "antd";
import MainLayout from "layouts/MainLayout";
import { useCallback, useState } from "react";
import { setDefaultOptions, loadModules } from "esri-loader";
import "./HomePage.css";

const HomePage = () => {
  useEffect(() => {
    console.log(document.getElementById("wefilter-title"));
  }, document.getElementById("wefilter-title"));
  useEffect(() => {
    try {
      const mapContainer = document.getElementById("mapContainer");
      const map = new window.wemapgl.WeMap({
        container: mapContainer,
        key: "zZjAMHCwZAHTQqXIvigmZOXNiI",
        style: "bright",
        center: [105.1, 21.0],
        zoom: 13,
      });

      const directions = new window.wemapgl.WeDirections({
        key: "zZjAMHCwZAHTQqXIvigmZOXNiI",
      });
      // thêm plugin vào bản đồ
      map.addControl(directions, "top-left");
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <MainLayout>
      <div>
        <div className="relative h-[100vh] w-full">
          <div id="mapContainer" className="h-full w-full"></div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
