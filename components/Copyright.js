import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/CenterFooter";
import Image from "next/image";

import logo from "@/public/img/Logos/devengers_vault_logo3.png";

const StyledFooter = styled.footer`
  background-color: #222;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 10px 10px;
`;

export default function Copyright() {
  return (
    <StyledFooter>
        <Center>
            <Wrapper>
                <div className="copyright">
                   <span> Copyright © 2023 |</span>
                   <span> | Kodego Bacth WD53 - <strong> DEVENGERS </strong></span> 
                </div>

                <div className="grp-name">
                    <Image src={ logo } className="cpr-logo" /> <span> ™️ </span> 
                </div>

                <div className="policy">
                    <span> <Link href="/privacy-policy">• Payment Policy </Link> </span>
                    <span> <Link href="/privacy-policy">• Terms and Condition </Link> </span>
                    <span> <Link href="/privacy-policy">• Privacy Policy </Link> </span>
                    <span> <Link href="/privacy-policy">• Opt Out </Link> </span>
                </div>
            </Wrapper>
        </Center>
    </StyledFooter>
    
  )
}
