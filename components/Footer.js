import Link from "next/link";
import styled from "styled-components";
import CenterFooter from "@/components/CenterFooter";
import {useContext, useState} from "react";
import Image from 'next/image';

import Maps from "@/components/Maps";

import logo from "@/public/img/Logos/devengers_vault_logo1.png";

const StyledFooter = styled.footer`
  background-color: #222;
  margin-top: 40px;
`;

const Wrapper = styled.div`
  width: 90%;
  height: 350px;
  display: flex;
  padding: 30px;
  padding-bottom: 25px;
  justify-content: space-evenly;

  @media screen (max-width: 360px) {
    width: 90%;
    height: 300%;
    padding: 0;
    margin: 0;
    display: flex;
    position: relative;
}
  @media screen and (min-width: 450px) and (max-width: 600px) {
    width: 89%;
    height: 700px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
    . ftr-left. ftr-midLeft. 
    . ftr-midRight. ftr-right.
  }
  @media screen and (min-width: 620px) and (max-width: 960px) {
    width: 90%;
    height: 700px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
    . ftr-left. ftr-midLeft. 
    . ftr-midRight. ftr-right.
  }
`;



export default function Footer() {
    
  return (
    <StyledFooter>
      <CenterFooter>
      <Wrapper>
        <div className="ftr-left">
            <div className="ftr-logo">
                <Image src={logo} alt="devengers vault logo" width={250} className="ftr-logo"/>
            </div>
            <div className="contact-details">
                <ul>
                    <li>Address
                        <ul>
                            <li>Bld#</li>
                            <li>Street</li>
                            <li>City</li>
                            <li>Province/Region</li>
                            <li>Zip</li>
                        </ul>
                    </li>
                    <li>Tel.</li>
                    <li>email address</li>
                </ul>
            </div>
        </div>

        <div className="ftr-midLeft">
            <div className="loc-map">
                MAP HERE! TEMPORARILY OFF AS IT CAUSES BUG
                {/* <Maps className="gmap" /> */}
            </div>
        </div>

        <div className="ftr-midRight">
            <nav className="ftr-nav">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Shop</li>
                    <li>Auction</li>
                </ul>
                <ul>
                    <li>Testimonials</li>
                    <li>Costumer Support</li>
                    <li>Technical Support</li>
                    <li>Careers</li>
                </ul>
            </nav>

        </div>

        <div className="ftr-right">

            <div className="msg-box">
                <form action="" method="post" className="container">
                    <label htmlFor="fname">Name</label>
                    <input type="text" id="fcompleteName" name="completeName" placeholder="Your Complete Name.." />

                    <label htmlFor="lname">Contact Info</label>
                    <input type="text" id="contactInfo" name="contactInfo" placeholder="email or contact number.." />
                    
                    <textarea id="subject" name="subject" placeholder="Send us a quick message.."></textarea>

                    <input type="submit" value="Inquire" />
                </form>
            </div>
        </div>
      </Wrapper>
      </CenterFooter>
    </StyledFooter>
  )
}
