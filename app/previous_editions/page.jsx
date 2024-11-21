'use client'
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Editions_News (){

    return (
        <div className="mt-44 lg:mt-92 lg:p-32 mb-0 flex justify-center">
      <section id="editions" className="bg-white lg:w-1/2 shadow-xl border-2 border-black/10 rounded-tr-[4rem] rounded-bl-[4rem] md:px-20 md:py-10 md:m-20 px-4 py-5 m-8 w-full">
        <div className="flex justify-center">
          <div className="flex flex-col lg:mx-16 mx-8">
            <div className="font-bold text-2xl lg:text-3xl pb-4">
            Previous Editions
            <hr className="h-1 my-4 bg-[#87A2FF] border-0 " />
            </div>
            <div className="flex flex-col font-bold  lg:flex-row">
              <ul  className="lg:text-2xl lg:pl-10">
              <li className=" py-4">
                  <Link href="https://link.springer.com/book/10.1007/978-981-99-1588-0">ICICC 2022 (7<sup>th</sup> Edition)</Link>
                </li>
                <li className=" py-4">
                  <Link href="https://link.springer.com/book/10.1007/978-981-99-1588-0">ICICC 2022 (6<sup>th</sup> Edition)</Link>
                </li>
                <li className=" py-4">
                  <Link href="https://link.springer.com/book/10.1007/978-981-19-1559-8">ICICC 2021 (5<sup>th</sup> Edition)</Link>
                </li>
                <li className=" py-4">
                  <Link href="https://link.springer.com/book/10.1007/978-981-16-0980-0">ICICC 2020 (4<sup>th</sup> Edition)</Link>
                </li>
                <li className=" py-4">
                  <Link href="https://link.springer.com/book/10.1007/978-981-15-1084-7">ICICC 2019 (3<sup>rd</sup> Edition)</Link>
                </li>
                <li className=" py-4">
                  <Link href="https://link.springer.com/book/10.1007/978-981-10-7245-1">ICICC 2017 (2<sup>nd</sup> Edition)</Link>
                </li>
                <li className=" py-4">
                  <Link href="https://link.springer.com/book/10.1007/978-981-10-2035-3">ICICC 2016 (1<sup>st</sup> Edition)</Link>
                </li>
              </ul>
            </div>
          </div>
          </div>
  
      </section>
      </div>
      
    );  
  }
  
