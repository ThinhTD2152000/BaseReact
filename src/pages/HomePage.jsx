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

      const filter = new window.wemapgl.WeFilterControl({
        filters: {
          cuisine: {
            text: "Ẩm thực",
            "fa-icon": "fa-cutlery",
            color: "#C70039",
            featureClasses: ["cafe", "restaurant", "fast_food", "food_court"],
            layers: ["poi-level-1", "poi-level-2", "poi-level-3"],
          },
          hotel: {
            text: "Nhà nghỉ",
            "fa-icon": "fa-hotel",
            color: "#C70039",
            featureClasses: ["hotel", "guest_house", "motel"],
            layers: ["poi-level-1", "poi-level-2", "poi-level-3"],
          },
          entertainment: {
            text: "Giải trí",
            "fa-icon": "fa-glass",
            color: "#C70039",
            featureClasses: [
              "bar",
              "nightclub",
              "pub",
              "theatre",
              "casino",
              "cinema",
            ],
            layers: ["poi-level-1", "poi-level-2", "poi-level-3"],
          },
          shopping: {
            text: "Mua sắm",
            "fa-icon": "fa-shopping-bag",
            color: "#C70039",
            featureClasses: [
              "shop",
              "grocery",
              "alcohol_shop",
              "jewelry",
              "mall",
              "supermarket",
              "fashion",
              "convenience",
              "marketplace",
            ],
            layers: ["poi-level-1", "poi-level-2", "poi-level-3"],
          },
        },
      });

      var geocoder = new window.wemapgl.WeGeocoder({
        flyTo: "hybrid",
        key: "zZjAMHCwZAHTQqXIvigmZOXNiI",
        engine: "default",
        suggestion: {
          min_char: 4,
        },
      });
      // thêm vào bản đồ
      map.addControl(geocoder);
      // thêm plugin vào bản đồ
      map.addControl(filter, "top-left");
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
