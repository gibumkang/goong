import * as GS from "../styles/global";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { SRLWrapper } from "simple-react-lightbox";

const Gallery = () => {
  return (
    <GS.MaxContainer>
      <SRLWrapper>
        <Grid>
          <div>
            <Link href="/gen.webp">
              <a>
                <Image
                  src="/gen.webp"
                  height="300"
                  width="300"
                  layout="responsive"
                  alt="Practice lightbox"
                />
              </a>
            </Link>
          </div>
          <div>
            <Link href="/gen.webp">
              <a>
                <Image
                  src="/gen.webp"
                  height="300"
                  width="300"
                  layout="responsive"
                  alt="Practice lightbox"
                />
              </a>
            </Link>
          </div>
        </Grid>
      </SRLWrapper>
    </GS.MaxContainer>
  );
};

const Grid = styled(GS.GridThree)`
  div {
    border: 0.1rem solid #ccc;
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      opacity: 0.8;
      transition: opacity 0.25s ease-in-out;
      &:hover {
        opacity: 1;
      }
    }
  }
  @media screen and (max-width: 414px) {
    display: block;
  }
`;

export default Gallery;
