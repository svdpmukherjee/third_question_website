import React from 'react';

import questions from '../questions.json';
import questions_2 from '../questions_2.json';
import Head from 'next/head';
import { useState } from 'react';
import Navbar from '../components/Navbar';

import { useRouter } from 'next/router';
import { browserName, isMobile } from 'react-device-detect';
import Iframe from 'react-iframe';

export default function Home(props) {
  const { ip_address_1, ip_address_2 } = props;
  const [nextClick, setNextClick] = useState('');
  const [nextClickOthers, setNextClickOthers] = useState('');
  const [hintClick, setHintClick] = useState('');

  const [buttonText, setButtonText] = useState('');
  const router = useRouter();
  let deviceType = '';
  // const [buttonColor, setButtonColor] = useState('');

  // Show answer button
  const handleShowAnswer = async (event) => {
    const questionNo = event.target.id.toString();
    if (questionNo > 900) {
      setNextClickOthers(questionNo);
      setNextClick('');
    } else {
      let date = new Date().toISOString();
      // update-database
      let response_put = await fetch('/api/databaseOperations', {
        method: 'PUT',
        body: questionNo,
      });

      isMobile ? (deviceType = 'Mobile') : (deviceType = 'Desktop');
      // read-add-database
      let passValue = {
        ip_address_1: ip_address_1,
        ip_address_2: ip_address_2,
        questionNo: questionNo,
        date: date,
        deviceType: deviceType,
        browser: browserName,
      };
      //console.log(passValue);
      let response_post = await fetch('/api/databaseOperations', {
        method: 'POST',
        body: JSON.stringify(passValue),
      });

      let data = await response_post.json();

      // if (questionNo === 999) {
      //   setNextClick(questionNo);
      //   return setButtonText(answer);
      // }
      if (data.success) {
        // console.log(data.message);
        setNextClick(questionNo);
        setNextClickOthers('');
        return setButtonText(data.message);
      } else return data.message;

      // setButtonText(response_post);

      // console.log(nextClick, buttonText);
    }
  };

  // Expalanation button
  // const handleHint = async (event) => {
  //   const hint_question = event.target.id.toString();
  //   setHintClick(hint_question);
  // };

  // JSX
  return (
    <div className="">
      <Head>
        <title>Henry's Blog </title>
      </Head>
      <Navbar />
      <div className=" grid grid-cols-5 p-2 font-serif gap-2 mb-6">
        {/* Quantitative Aptitude - Solutions from 2011 paper{' '} */}
        <div className="col-span-3 ">
          <div className="grid grid-rows-2 gap-3">
            <div className="row-span-1  my-auto">
              <span className="text-lg">
                GRE Quantitative Section Walkthrough:
              </span>{' '}
              Part-1 &nbsp;&nbsp;
              <Iframe
                url="https://www.youtube.com/embed/c5UHUs6_Of4"
                // width="450px"
                // height="450px"
                id="myId"
                className="myClassname w-1/2 h-4/5 mx-auto border-2 shadow-lg"
                display="initial"
                position="relative"
              />
            </div>
            <div className="row-span-1  my-auto">
              <span className="text-lg">
                GRE Quantitative Section Walkthrough:
              </span>{' '}
              Part-2 &nbsp;&nbsp;
              <Iframe
                url="https://www.youtube.com/embed/bZTgF6d-kUo"
                // width="450px"
                // height="450px"
                id="myId"
                className="row-span-1 w-1/2 h-4/5 mx-auto border-2 shadow-lg"
                display="initial"
                // position="relative"
              />
            </div>
          </div>
        </div>
        <div className="flex m-auto gap-3 col-span-2 mr-10 border-2 rounded-md p-2">
          <img src="author.png" className="w-15 h-20 rounded-2xl" />
          <p className="  text-blue-700  text-sm text-justify" href="">
            <span className="italic">
              Henry served as a freelancing GRE Expert, helping create hundreds
              of lesson videos and practice questions to help guide{' '}
              <strong>GRE</strong> and <strong>GMAT </strong>
              students to success. Henry holds an M.A. in Physics (graduating
              magna cum laude) from Harvard. Beyond standardized testing, he has
              over 20 years of both private and public high school teaching
              experience specializing in math and physics.{' '}
            </span>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="red"
                className="bi bi-youtube my-auto"
                viewBox="0 0 16 16"
              >
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 011.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 01-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 01-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 010 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 011.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 017.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>
              </svg>
              <a href="https://www.youtube.com/channel/UCktwzce9ncy_K78l1KBZkYQ">
                YOUTUBE channel
              </a>{' '}
              &nbsp;&nbsp;
              <svg
                viewBox="0 0 512 512"
                width="20"
                height="20"
                className="bg-sky-600 rounded-full"
                fill="white"
              >
                <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5-18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5 18.9 0 34.2 15.5 34.2 34.5zm-5 58.9h-57.8v186.8h57.8V201.3zm92.4 0h-55.4v186.8h55.4v-98c0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9v98H398V269.8c0-50-28.3-74.2-68-74.2-39.6 0-56.3 30.9-56.3 30.9v-25.2h.1z"></path>
              </svg>
              <svg
                viewBox="0 0 512 512"
                width="20"
                height="20"
                className="bg-blue-700 rounded-full"
                fill="white"
              >
                <path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z" />
              </svg>
            </div>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-6">
        <div className="col-span-3 text-center bg-blue-400 py-4 text-white font-semibold border-r-2">
          Summary of questions discussed in Part-1
        </div>
        <div className="col-span-3 text-center bg-blue-400 py-4 text-white font-semibold">
          Summary of questions discussed in Part-2
        </div>
      </div>
      <div className="pl-2 py-8 h-full ">
        <div className="grid grid-cols-6 gap-3">
          <div className=" col-span-3 p-3 flex text-justify bg-slate-100">
            <div className="">
              {questions.map((ques) => {
                return (
                  <div className="">
                    <div className="mb-6">
                      <div className="text-md" key={ques.question}>
                        &gt; &nbsp;
                        {/* <span className="font-semibold">{ques.number}. </span> */}
                        {ques.question}
                        {(() => {
                          if (ques.id == nextClick) {
                            return (
                              <>
                                <button
                                  className="ml-6 px-1 bg-black text-white"
                                  id={ques.id}
                                  key={ques.number}
                                  disabled={true}
                                  onClick={(e) => handleShowAnswer(e)}
                                >
                                  answer: {buttonText}
                                </button>
                              </>
                            );
                          } else if (ques.id == nextClickOthers) {
                            return (
                              <>
                                <button
                                  className="ml-6 px-1 bg-black text-white"
                                  id={ques.id}
                                  key={ques.number}
                                  disabled={true}
                                  onClick={(e) => handleShowAnswer(e)}
                                >
                                  answer: {ques.answer}
                                </button>
                              </>
                            );
                          } else {
                            return (
                              <div className="flex my-auto">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-eye my-auto"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 011.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0114.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 011.172 8z"></path>
                                  <path d="M8 5.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM4.5 8a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z"></path>
                                </svg>
                                <button
                                  className=" font-bold text-sm text-teal-500  ml-2"
                                  id={ques.id}
                                  key={ques.number}
                                  onClick={(e) => handleShowAnswer(e)}
                                >
                                  View answer
                                </button>
                              </div>
                            );
                          }
                        })()}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" col-span-3 p-3 flex text-justify bg-gray-100">
            <div className="">
              {questions_2.map((ques) => {
                return (
                  <div className="">
                    <div className="mb-6 flex">
                      <div className="text-md " key={ques.question}>
                        &gt; &nbsp;
                        {/* <span className="font-semibold">{ques.number}. </span> */}
                        {ques.question}
                        {(() => {
                          if (ques.id == nextClick) {
                            return (
                              <>
                                <button
                                  className="ml-6 px-1 bg-black text-white"
                                  id={ques.id}
                                  key={ques.number}
                                  disabled={true}
                                  onClick={(e) => handleShowAnswer(e)}
                                >
                                  answer: {buttonText}
                                </button>
                              </>
                            );
                          } else if (ques.id == nextClickOthers) {
                            return (
                              <>
                                <button
                                  className="ml-6 px-1 bg-black text-white"
                                  id={ques.id}
                                  key={ques.number}
                                  disabled={true}
                                  onClick={(e) => handleShowAnswer(e)}
                                >
                                  answer: {ques.answer}
                                </button>
                              </>
                            );
                          } else {
                            return (
                              <div className="flex my-auto">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-eye my-auto"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 011.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0114.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 011.172 8z"></path>
                                  <path d="M8 5.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM4.5 8a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z"></path>
                                </svg>
                                <button
                                  className=" font-bold text-sm text-teal-500 ml-2"
                                  id={ques.id}
                                  key={ques.number}
                                  onClick={(e) => handleShowAnswer(e)}
                                >
                                  View answer
                                </button>
                              </div>
                            );
                          }
                        })()}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="text-2xl">{/* <Footer /> */}</div>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  // console.log(req.headers);
  const ip_1 = req.headers['x-real-ip'] || req.connection.remoteAddress;
  const ip_2 = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  // console.log(JSON.stringify(ip));
  // console.log(ip);

  // const res = await axios.get('https://geolocation-db.com/json');
  // const ip = res.data.IPv4;
  const ip_segments_1 = ip_1.split('.');
  const ip_segments_2 = ip_2.split('.');
  let ip_segments_int_1 = ip_segments_1.map((item) => parseInt(item, 10));
  let ip_segments_int_2 = ip_segments_2.map((item) => parseInt(item, 10));

  // transforming IP addresses
  ip_segments_int_1[0] = ip_segments_int_1[0] * Math.pow(2, 2) + 5 * 5;
  ip_segments_int_1[1] = ip_segments_int_1[1] * Math.pow(3, 3) + 4 * 4;
  ip_segments_int_1[2] = ip_segments_int_1[2] * Math.pow(4, 4) + 3 * 3;
  ip_segments_int_1[3] = ip_segments_int_1[3] * Math.pow(5, 5) + 2 * 2;
  const ip_address_1 = ip_segments_int_1.join('.').toString();

  ip_segments_int_2[0] = ip_segments_int_2[0] * Math.pow(2, 2) + 5 * 5;
  ip_segments_int_2[1] = ip_segments_int_2[1] * Math.pow(3, 3) + 4 * 4;
  ip_segments_int_2[2] = ip_segments_int_2[2] * Math.pow(4, 4) + 3 * 3;
  ip_segments_int_2[3] = ip_segments_int_2[3] * Math.pow(5, 5) + 2 * 2;
  const ip_address_2 = ip_segments_int_2.join('.').toString();

  return {
    props: {
      ip_address_1,
      ip_address_2,
    }, // will be passed to the page component as props
  };
}
