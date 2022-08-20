import React from "react";

const data = {
  apps: [
    {
      title: "Calculator",
      description:
        "An open source Calculator for Android based on EvalEx Library with simple and lightweight calculation capabilities and Minimalistic User Interface. Supports: \n 1. Addition \n 2. Subtraction \n 3. Multiplication \n 4. Division \n 5. Modulus \n 6. Percentage. \n Along with an units Converter. More operations will be added soon",
      images: [
        "https://raw.githubusercontent.com/JohnX4321/Calculator/main/images/Screenshot_20220422-213853_Calculator.png",
        "https://raw.githubusercontent.com/JohnX4321/Calculator/main/images/Screenshot_20220422-213915_Calculator.png",
        "https://raw.githubusercontent.com/JohnX4321/Calculator/main/images/Screenshot_20220422-214347_Calculator.png",
        "https://raw.githubusercontent.com/JohnX4321/Calculator/main/images/Screenshot_20220526-200234_Calculator.png",
        "https://raw.githubusercontent.com/JohnX4321/Calculator/main/images/Screenshot_20220526-200315_Calculator.png"
      ],
      durl:
        "https://play.google.com/store/apps/details?id=com.thingsenz.calculator&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
    },
    {
      title: "Flashlight",
      description:
        "An open source Android Flashlight application built using the latest Compose Tools to control the flashlight of your mobile device. Simple and easy to use",
      images: [
        "https://raw.githubusercontent.com/JohnX4321/Compose_Flashlight/main/images/Screenshot_20220709-132154_Flashlight.png",
        "https://raw.githubusercontent.com/JohnX4321/Compose_Flashlight/main/images/Screenshot_20220709-132210_Flashlight.png",
        "https://raw.githubusercontent.com/JohnX4321/Compose_Flashlight/main/images/Screenshot_20220709-132224_Flashlight.png",
        "https://raw.githubusercontent.com/JohnX4321/Compose_Flashlight/main/images/Screenshot_20220709-132238_Flashlight.png",
        "https://raw.githubusercontent.com/JohnX4321/Compose_Flashlight/main/images/Screenshot_20220709-132245_Flashlight.png"
      ],
      durl: ""
    }
  ]
};

function AppDetail({ app }) {
  let o = data;
  let a;
  if (app === "calculator") {
    a = o.apps[0];
  } else {
    a = o.apps[1];
  }
  const d = a.description.split("\n");
  return (
    <div>
      <h1>{a.title}</h1>
      <div>
        {d.map((x, y) => (
          <p>{x}</p>
        ))}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {a.images.map((x, i) => {
          return (
            <div style={{ flex: "0 1 33%", margin: "10px" }}>
              <img
                src={x}
                key={i}
                alt="Screenshots"
                width={"100"}
                height={200}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AppDetail;
