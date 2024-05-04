'use client'

import * as React from "react";

import { Lightbox, useLightboxState, LightboxStateProvider } from "yet-another-react-lightbox";
import { Inline, Counter, Thumbnails } from "yet-another-react-lightbox/plugins";
import slides from "../data/slides";

// import { Paragraph, Title } from "../components";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
export default function Carousel() {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const thumbnailsRef = React.useRef(null);
  const toggleOpen = (state: boolean) => () => setOpen(state);
  
  const updateIndex = ({ index: current }: { index: number }) =>
    setIndex(current);
  // const { slides, currentSlide, currentIndex } = useLightboxState();

  return (
    <>
      {/* <h1>{currentIndex}</h1> */}
      <Lightbox
        index={index}
        slides={slides}
        plugins={[Inline, Counter, Thumbnails]}

        on={{
          view: updateIndex,
          click: toggleOpen(true),
        }}
        thumbnails={{
          ref: thumbnailsRef,
          position: "end",
          vignette: false,
          imageFit: "cover",
        }}
        counter={{ container: { style: { top: "unset", bottom: 0 } } }}
        carousel={{
          padding: 0,
          spacing: 0,
          imageFit: "cover",
        }}
        animation={{
          fade: 0, swipe: 0,
        }}
        inline={{
          style: {

            width: "100%",
            maxWidth: "900px",
            aspectRatio: "16 /9",
            margin: "50px auto",
            border: "10px solid transparent"
          },
        }}
      />

      <Lightbox

        plugins={[]}
        open={open}
        close={toggleOpen(false)}
        index={index}
        slides={slides}
        on={{ view: updateIndex }}
        animation={{ fade: 0 }}
        controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
      />
    </>
  );
}
