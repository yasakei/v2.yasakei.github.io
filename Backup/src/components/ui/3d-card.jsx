"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from './3d-card-logic';

export function ThreeDCardDemo({ name, description, image, url }) {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className="relative group/card w-auto sm:w-[20rem] h-[30rem] rounded-xl p-6">
        <div className="absolute inset-0 bg-white/30 dark:bg-black/50 backdrop-blur-xl rounded-xl" />
        <div className="relative flex flex-col h-full">
            <CardItem
              className="text-xl font-bold text-neutral-600 dark:text-white">
              {name}
            </CardItem>
            <CardItem
              as="p"
              className="text-neutral-700 text-sm mt-2 dark:text-neutral-300">
              {description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <a href={url} target="__blank">
                <img
                  src={image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail" />
              </a>
            </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}